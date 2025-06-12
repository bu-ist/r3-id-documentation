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

?>

<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<div class="wp-block-r3-id-documentation-plugin--container">
		<?php if ( ! empty( $attributes['title'] ) ) : ?>
		<h6 class="wp-block-r3-id-documentation-plugin--title"><?php echo esc_html( $attributes['title'] ); ?></h6>
		<?php endif; ?>

		<?php if ( ! empty( $attributes['excerpt'] ) ) : ?>
		<blockquote class="wp-block-r3-id-documentation-plugin--excerpt"><?php echo wp_kses_post( $attributes['excerpt'] ); ?></blockquote>
		<?php endif; ?>

		<small>Here, if you have a milkshake, and I have a milkshake, and I have a straw. There it is, that's a straw, you see? Watch it. Now, my straw reaches across the room and starts to render your milkshake. I... render... your... milkshake! [sucking sound] I render it up!</small>
	</div>
</div>
