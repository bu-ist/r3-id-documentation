<?php
/**
 * Theme constants.
 *
 * @link     https://github.com/bu-ist/responsive-framework/wiki/Starting-a-new-Child-Theme
 *
 * @package r3-id-documentation
 */

namespace BU\r3_id_documentation;

/**
 * Current theme's domain.
 */
define( 'R3_ID_DOCUMENTATION_DOMAIN', 'r3-id-documentation' );

/**
 * Current theme's server path. No trailing /
 */
define( 'R3_ID_DOCUMENTATION_DIR', get_stylesheet_directory() );

/**
 * Current theme's web path. No trailing /
 */
define( 'R3_ID_DOCUMENTATION_URL', get_theme_file_uri() );

/**
 * Current theme's version.
 *
 * This DOES NOT control the version of Responsive Framework.
 *
 * It represents the version of this child theme and is used to version theme
 * assets (style.css, production.js, etc.) when loaded.
 *
 * @link https://semver.org/
 */
define( 'R3_ID_DOCUMENTATION_VERSION', wp_get_theme()->get( 'Version' ) );

/**
 * Block Constants.
 */
define( 'R3_ID_DOCUMENTATION_BLOCKS_BUILD_DIR', R3_ID_DOCUMENTATION_DIR . '/build/blocks' );
define( 'R3_ID_DOCUMENTATION_BLOCKS_BUILD_URL', R3_ID_DOCUMENTATION_URL . '/build/blocks' );

/**
 * Block Stylesheet Handling
 *
 * Set to true to bundle all block styles together and enqueue them as a single stylesheet for use on HTTP/1 and reduce requests. HTTP/2.0 offers multiplexing, so turn bundling off.
 */
if ( isset( $_SERVER['SERVER_PROTOCOL'] ) && 'HTTP/2.0' === sanitize_text_field( wp_unslash( $_SERVER['SERVER_PROTOCOL'] ) ) ) {
	$bundled_block_styles = false;
} else {
	$bundled_block_styles = true;
}
define( 'R3_ID_DOCUMENTATION_BLOCKS_BUNDLED', $bundled_block_styles );

// Disabling phpcs check for default responsi constants.
// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedConstantFound

/**
 * SEO functionality.
 *
 * @link https://developer.bu.edu/webteam/developer/libraryframework/wordpress/plugins/post-details/#:~:text=after%20the%20text.-,SEO,Output%20meta%20elements.,-Coming%20in%20Version
 */
define( 'BU_SUPPORTS_SEO', false );

/**
 * Specifies the responsive layout for the theme. Disables the option in the
 * Customizer.
 *
 * Removing this allows the layout to be changed in the Customizer.
 *
 * Available values: `default`, `top-nav`, `side-nav`, `no-nav`, `mega-nav`.
 *
 * @link https://github.com/bu-ist/responsive-framework/wiki/Changing-Available-Layouts-And-Default-Layout
 */
define( 'BU_RESPONSIVE_LAYOUT', 'default' );

/**
 * Specifies the site's branding type. Disables the option in the Customizer.
 *
 * Removing this allows the branding type to be changed in the Customizer.
 *
 * Available values: `logotype`, `signature`, `unbranded`.
 */
define( 'BU_BRANDING_TYPE', 'logotype' );

/**
 * Defines a sidebar position for the theme. Disables the option in the
 * Customizer.
 *
 * Removing this allows the layout to be changed in the Customizer.
 *
 * Available values: `right`, `left`, `bottom`.
 */
define( 'BU_RESPONSIVE_SIDEBAR_POSITION', 'right' );

// Re-enabling constant check.
// phpcs:enable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedConstantFound
