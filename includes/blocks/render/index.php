<?php
/**
 * Modify the rendered output of any block.
 *
 * @link
 *
 * @package labs-theme-blocks
 */

namespace BU\labs_theme_blocks\Blocks;

/**
 * Modify the rendered output of any block.
 *
 * @param string $block_content The normal block HTML that would be sent to the screen.
 * @param array  $block An array of data about the block, and the way the user configured it.
 */
function my_custom_render( $block_content, $block ) {

	// For the block in question, render whatever you want, and pull any attrinute you need from $block['attrs'].
	if ( $block['blockName'] === 'r3-id-documentation/plugin' ) {

		// We need to return data, not render it, so we stick everything into a output buffering.
		ob_start();

		// Our original render file was expecting an array called $attributes; but inside this filter those values are stored in $block['attrs'], so we copy those into $attributes.
		$attributes = $block['attrs'];

		// Rather than putting all the code here, I just copied the original render file into this directory so we can make modifications there.
		require_once 'r3-id-documentation_plugin.php';

		// Dump the output buffer into a variable, purge the output buffer, return the data.
		$new_render = ob_get_contents();
		ob_end_clean();

		return $new_render;
	}

	// For any other block, just return normal block output.
	return $block_content;
}
add_filter( 'render_block', __NAMESPACE__ . '\\my_custom_render', 10, 2 );
