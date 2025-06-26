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
$mdURL = esc_url_raw( $attributes['mdURL'] );
$raw   = str_replace( '/github.com/', '/raw.githubusercontent.com/', $mdURL );
$raw   = str_replace( '/blob/', '/', $raw );

$response = wp_remote_get( $raw );

if ( is_array( $response ) && ( 200 === wp_remote_retrieve_response_code( $response ) ) && ( ! is_wp_error( $response ) ) ) {
	?>
<article <?php echo $attributes['anchor'] ? 'id="' . esc_attr( $attributes['anchor'] ) . '"' : ''; ?> <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<div class="showdown">
		<script type="text/plain"><?php echo $response['body']; ?></script>
	</div>
	<p class="source">Source: <a href="<?php echo esc_url( $mdURL ); ?>"><?php echo esc_url( $mdURL ); ?></a></p>
</article>
<?php
} else {
	?>
<div class="notice notice-error">
	<p>Unable to display markdown: <a href="<?php echo esc_url( $mdURL ); ?>"><?php echo esc_url( $mdURL ); ?></a></p>
	<?php
	if ( current_user_can( 'administrator' ) ) {
		echo '<pre>';
		echo 'wp_remote_retrieve_response_code: ' . wp_remote_retrieve_response_code( $response ) . PHP_EOL;
		echo 'is_wp_error: ' . is_wp_error( $response ) . PHP_EOL;
		print_r( $response );
		echo '</pre>';
	}
	?>
</div>
<?php
}
