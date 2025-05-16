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
 * @package labs-plugin-blocks
 */

if ( filter_var( $attributes['code'], FILTER_VALIDATE_URL ) ) {
	$raw_url  = esc_url_raw( $attributes['code'] );
	$raw_url  = str_replace( 'https://github.com/', 'https://raw.githubusercontent.com/', $raw_url );
	$raw_url  = str_replace( '/blob/', '/refs/heads/', $raw_url );
	$response = wp_remote_get( $raw_url );

	if ( is_array( $response ) && ( 200 === wp_remote_retrieve_response_code( $response ) ) && ( ! is_wp_error( $response ) ) ) {
		$code = $response['body'];
	} else {
		echo '*error 1: something is wrong with wp_remote_get*';
	}
} else {
	$code = $attributes['code'];
}


// @todo if lang not set, try to get the file extension and use that




if ( $code ) {
	?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>

	<pre class="line-numbers" data-line="<?php echo esc_attr( $attributes['lines'] ); ?>">
		<code class="match-braces language-<?php echo esc_attr( $attributes['language'] ); ?>" data-prismjs-copy="Copy">
			<script type="text/plain"><?php echo $code; ?></script>
		</code>
	</pre>
	<?php
	if ( $attributes['code'] ) {
		?>
	<p><a href="<?php echo esc_url_raw( $attributes['code'] ); ?>">{view on github}</a></p>
	<?php } ?>
</div>
	<?php
} else {
	echo '*error 2: something with attributes*' . esc_url( $raw );
}
