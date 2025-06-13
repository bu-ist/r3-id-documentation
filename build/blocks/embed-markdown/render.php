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

$mdURL = esc_url_raw( $attributes['mdURL'] );
$raw   = str_replace( '/github.com/', '/raw.githubusercontent.com/', $mdURL );
$raw   = str_replace( '/blob/', '/', $raw );

$response = wp_remote_get( $raw );
if ( ( 404 === wp_remote_retrieve_response_code( $response ) ) ) {
	echo 'Cannot find ' . esc_url( $mdURL );
} elseif ( is_array( $response ) && ( 200 === wp_remote_retrieve_response_code( $response ) ) && ( ! is_wp_error( $response ) ) ) {
	?>
<article <?php echo wp_kses_data( get_block_wrapper_attributes() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="showdown"><?php echo esc_html( $response['body'] ); ?></div>
	<p>Source: <a href="<?php echo esc_url( $mdURL ); ?>"><?php echo esc_url( $mdURL ); ?></a></p>

</article>
<?php
} else {
	echo 'Unable to display ' . esc_url( $mdURL );
}
