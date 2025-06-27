<?php
/**
 * Block functions
 *
 * @package r3-id-documentation
 */

namespace BU\r3_id_documentation\Blocks;

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
* The maximum size of inlined styles in bytes.
*
* @ link https://developer.wordpress.org/reference/hooks/styles_inline_size_limit/
*/
add_filter( 'styles_inline_size_limit', '__return_zero' );

/**
* Filters whether block styles should be loaded separately.
*
* Returning false loads all block assets, regardless of whether they are rendered in a page or not.
* Returning true loads block assets only when they are rendered.
*
* @link https://developer.wordpress.org/reference/hooks/should_load_separate_core_block_assets/
*/
add_filter( 'should_load_separate_core_block_assets', '__return_true' );

// Uncomment to unbundle plugin styles.
// add_filter( 'plugin_slug_bundle_block_styles', '__return_false' );

// Uncomment to remove decorative plugin styles.
// add_filter( 'plugin_slug_decorative_block_styles', '__return_false' );

/**
 * Include Blocks & Assets
 */
require_once 'class-blocks.php';

// Load Gutenberg Patterns.
require_once 'class-blockpatterns.php';

// Register Block Styles.
require_once 'block-styles.php';

/**
 * Unregister theme/plugin block patterns.
 *
 * The patterns contained in the array should follow
 * "slug/pattern-name", which is found in the pattern's
 * heading comments "Slug:" entry.
 *
 * The best way to use this function is to wrap it in an
 * `add_action` hook:
 *  add_action(
 *      'wp_loaded',
 *      function() {
 *          unregister_patterns( array(
 *              'plugin-slug/bu-test-pattern-plugin',
 *              'r3-id-documentation/bu-test-pattern-theme',
 *          )
 *      );
 *      }
 *  );
 *
 * The above example uses `wp_loaded`, which is the very last
 * action in the WordPress setup.
 *
 * @param  array $patterns
 */
function unregister_patterns( $patterns ) {
	if ( ! is_array( $patterns ) || empty( $patterns ) ) {
		return;
	}
	foreach ( $patterns as $pattern ) {
		unregister_block_pattern( $pattern );
	}
}
