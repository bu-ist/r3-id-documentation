<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package r3-id-documentation
 */


if ( filter_var( $attributes['code'], FILTER_VALIDATE_URL ) ) {
	$raw_url  = esc_url_raw( $attributes['code'] );
	$raw_url  = str_replace( '/github.com/', '/raw.githubusercontent.com/', $raw_url );
	$raw_url  = str_replace( '/blob/', '/refs/heads/', $raw_url );
	$response = wp_remote_get( $raw_url );

	if ( is_array( $response ) && ( 200 === wp_remote_retrieve_response_code( $response ) ) && ( ! is_wp_error( $response ) ) ) {
		$code = $response['body'];
	} else {
		echo 'Error: Unable to fetch ' . $raw_url;
	}
} else {
	$code = $attributes['code'];
}

if ( $code ) {
	?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>

	<pre class="line-numbers" data-line="<?php echo esc_attr( $attributes['lines'] ); ?>">
		<code class="match-braces language-<?php echo esc_attr( $attributes['language'] ); ?>" data-prismjs-copy="Copy <?php echo esc_attr( $attributes['language'] ); ?>">
			<script type="text/plain"><?php echo $code; ?></script>
		</code>
	</pre>
	<?php
	if ( $raw_url ) {
		?>
	<p>Source: <a href="<?php echo esc_url_raw( $raw_url ); ?>"><?php echo esc_url( $raw_url ); ?></a></p>
	<?php } ?>
</div>
	<?php
} else {
	echo 'Error: No code provided!';
}
