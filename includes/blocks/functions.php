<?php
/**
 * Block functions
 *
 * @package theme-slug
 */

namespace BU\theme_slug;

/**
 * Constants.
 */
define( 'THEME_SLUG_BLOCKS_BUILD_DIR', RESPONSIVE_CHILD_THEME_DIR . '/build/blocks' );
define( 'THEME_SLUG_BLOCKS_BUILD_URL', RESPONSIVE_CHILD_THEME_URL . '/build/blocks' );
define( 'THEME_SLUG_BLOCKS_BUNDLE', true );

/**
 * Fix to allow block registration inside a theme, rather than a plugin.
 *
 * Before WordPress 6.0, register_block_script_handle does not "allow registration of blocks that include assets from within a theme" and assumes it is a plugin, so we need to change that.
 *
 * @link https://developer.wordpress.org/reference/functions/plugins_url/
 * @link https://stackoverflow.com/questions/69081471/block-json-returnes-wrong-paths
 * @param string $url Extra path appended to the end of the URL.
 * @return string Updated url.
 * @author Tim King <timking@bu.edu>
 */
function modify_plugins_url_defaults( $url ) {
	if ( strpos( $url, 'wp-content/plugins' . ABSPATH ) !== false ) {
		$url = str_replace( 'wp-content/plugins' . ABSPATH, '', $url );
	}
	return $url;
}
add_filter( 'plugins_url', __NAMESPACE__ . '\\modify_plugins_url_defaults', 10, 3 );


/**
 * Include Blocks & Assets
 */
require_once 'class-blocks.php';
require_once 'class-blockassets.php';

// Load Gutenberg Patterns.
require 'class-blockpatterns.php';


/**
 * When using theme.json in a classic theme; don’t allow access to the template editor.
 *
 * @link https://developer.wordpress.org/reference/functions/remove_theme_support/
 * @link https://github.com/bu-ist/id-gutenberg/issues/87
 * @todo centralized elsewhere
 */
// remove_theme_support( 'block-templates' );
