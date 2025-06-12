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

$codeview = esc_url_raw( $attributes['githuburl'] );
$raw      = str_replace( 'https://github.com/', 'https://raw.githubusercontent.com/', $codeview );
$raw      = str_replace( '/blob/', '/refs/heads/', $raw );

$response = wp_remote_get( $raw );
if ( ( 404 === wp_remote_retrieve_response_code( $response ) ) ) {
	echo '404 ' . esc_url( $raw );
} elseif ( is_array( $response ) && ( 200 === wp_remote_retrieve_response_code( $response ) ) && ( ! is_wp_error( $response ) ) ) {
	?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>

	<textarea id="markdown_raw"><?php echo $response['body']; ?></textarea>
	<div id="markdown_html">...</div>
	<p><a href="<?php echo esc_url( $codeview ); ?>">{view README.md github}</a></p>

</div>
<?php
} else {
	echo 'some other error... ' . esc_url( $raw );
}
