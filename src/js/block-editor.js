/**
 * Block editor only scripts
 *
 * @package
 */

console.log( 'theme-slug js/block-editor.js has loaded and hates schnozberries oh so much.' );

import { registerBlockCollection } from '@wordpress/blocks';

// Register a block collection for this plugin. This will display all blocks where the "textdomain" node in block.json matches the first argument of "registerBlockCollection".
// namespace would be matched against a block prefix and included automatically in a registered collection.
// https://github.com/godaddy-wordpress/coblocks/blob/e196c83d628e1139799ebf9ef94540578f430141/src/utils/helper.js
registerBlockCollection( 'theme-slug', {
	title: 'BU: Theme Starter Blocks Collection (JS)',
} );
