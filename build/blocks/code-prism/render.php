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

if ( $attributes['code'] ) {
	// @todo allow for code paste?
		$has_code = true;
	$code         = $attributes['code'];
} elseif ( $attributes['url'] ) {
	$raw_url  = esc_url_raw( $attributes['url'] );
	$raw_url  = str_replace( '/github.com/', '/raw.githubusercontent.com/', $raw_url );
	$raw_url  = str_replace( '/blob/', '/refs/heads/', $raw_url );
	$response = wp_remote_get( $raw_url );

	if ( is_array( $response ) && ( 200 === wp_remote_retrieve_response_code( $response ) ) && ( ! is_wp_error( $response ) ) ) {
		$has_code = true;
		$code     = $response['body'];
	} else {
		$has_code     = false;
		$code_message = 'Error: Unable to fetch ' . $raw_url;
	}
} else {
	$has_code     = false;
	$code_message = 'Error: No code provided!';
}

// Create the block wrapper attributes.
$block_wrapper_attributes = array();
// Add ID attribute if anchor is set.
if ( ! empty( $attributes['anchor'] ) ) {
	$block_wrapper_attributes['id'] = esc_attr( $attributes['anchor'] );
}

?>
<article <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<?php
	if ( $has_code ) {
		?>
	<pre class="line-numbers" data-line="<?php echo esc_attr( $attributes['lines'] ); ?>">
		<code class="match-braces language-<?php echo esc_attr( $attributes['language'] ); ?>" data-prismjs-copy="Copy <?php echo esc_attr( $attributes['language'] ); ?>">
			<script type="text/plain"><?php echo $code; ?></script>
		</code>
	</pre>
		<?php
		if ( $raw_url ) {
			?>
	<p class="wp-block-r3-id-documentation-code-prism-source"><strong>Source:</strong> <a href="<?php echo esc_url_raw( $raw_url ); ?>"><?php echo esc_url( $raw_url ); ?></a></p>
			<?php
		}
	} else {
		echo esc_html( $code_message );
	}
	?>
</article>
