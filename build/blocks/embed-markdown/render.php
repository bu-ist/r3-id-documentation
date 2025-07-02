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

// Add ID attribute if anchor is set.
if ( ! empty( $attributes['anchor'] ) ) {
	$block_wrapper_attributes['id'] = esc_attr( $attributes['anchor'] );
}

// Convert GitHub webapp URLs to raw markdown URLs.
$md_url = esc_url_raw( $attributes['mdURL'] );
$raw    = str_replace( '/github.com/', '/raw.githubusercontent.com/', $md_url );
$raw    = str_replace( '/blob/', '/', $raw );

$response = wp_remote_get( $raw );

// Create the block wrapper attributes.
$block_wrapper_attributes = array();
// Add ID attribute if anchor is set.
if ( ! empty( $attributes['anchor'] ) ) {
	$block_wrapper_attributes['id'] = esc_attr( $attributes['anchor'] );
}

if ( is_array( $response ) && ( 200 === wp_remote_retrieve_response_code( $response ) ) && ( ! is_wp_error( $response ) ) ) {
	// @todo This should be improved, it's just a proof of concept at the moment. Regex the original `md`, eg: `![alt text](Isolated.png "Title")`
	// https://www.phpliveregex.com/#tab-preg-replace
	$body_image_hotpatch = preg_replace( '/!\[(.+)\]\((.+)\)/', '![$1](' . dirname( $md_url ) . '/$2)', $response['body'] );
	?>
<article <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<div class="showdown">
		<script type="text/plain"><?php echo $body_image_hotpatch; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></script>
	</div>
	<p class="source">Source: <a href="<?php echo esc_url( $md_url ); ?>"><?php echo esc_url( $md_url ); ?></a></p>
</article>
	<?php
} else {
	?>
<div class="notice notice-error">
	<p>Unable to display markdown: <a href="<?php echo esc_url( $md_url ); ?>"><?php echo esc_url( $md_url ); ?></a></p>
	<?php
	if ( current_user_can( 'manage_options' ) ) {
		echo '<pre>';
		echo 'wp_remote_retrieve_response_code: ' . wp_remote_retrieve_response_code( $response ) . PHP_EOL; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo 'is_wp_error: ' . is_wp_error( $response ) . PHP_EOL; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		print_r( $response ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_print_r
		echo '</pre>';
	}
	?>
</div>
	<?php
}
