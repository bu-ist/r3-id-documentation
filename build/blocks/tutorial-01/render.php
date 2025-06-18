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
 */
?>

<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<div class="wp-block-r3-id-documentation-tutorial-01--container">
		<?php esc_html_e( 'Hello from tutorial-01!', 'r3-id-documentation' ); ?>
		<?php
			// if ( ! empty( $attributes['title'] ) ) {
			//	echo esc_html( $attributes['title'] );
			// }
		?>
	</div>
</div>
