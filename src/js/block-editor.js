/**
 * Block editor only scripts.
 */

import { registerBlockCollection } from '@wordpress/blocks';

/**
 * Register a block collection for this theme. This will display all blocks where the "textdomain" node in block.json matches the first argument of "registerBlockCollection". Namespace would be matched against a block prefix and included automatically in a registered collection.
 * @see https://github.com/godaddy-wordpress/coblocks/blob/e196c83d628e1139799ebf9ef94540578f430141/src/utils/helper.js
 */
registerBlockCollection( 'r3-id-documentation', {
	title: 'BU: Theme Starter Blocks Collection (JS)',
} );

/**
 * Unregister block styles.
 */
import '../blocks/_includes/styles/block-styles';

// Block variations.
import '../blocks/_variations';
