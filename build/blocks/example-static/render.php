<?php
/**
 * The render template for the block.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>


<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<div class="wp-block-labs-plugin-blocks-blockslug-static-container">
		<?php if ( ! empty( $attributes['title'] ) ) : ?>
		<h2 class="wp-block-bu-blockslug-static--title"><?php echo esc_html( $attributes['title'] ); ?></h2>
		<?php endif; ?>

		<?php if ( ! empty( $attributes['excerpt'] ) ) : ?>
		<p class="wp-block-labs-plugin-blocks-blockslug-static-excerpt"><?php echo wp_kses_post( $attributes['excerpt'] ); ?></p>
		<?php endif; ?>
	</div>
</div>
