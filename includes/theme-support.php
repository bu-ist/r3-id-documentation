<?php
/**
 * Theme Support settings.
 *
 * @package theme-slug
 * @link https://github.com/WordPress/gutenberg/blob/wp/5.8/docs/how-to-guides/themes/theme-support.md
 * @todo move this to gutenberg framework when available
 * @todo make this a settings panel for admins?
 * @link https://github.com/bu-ist/id-gutenberg/issues/95
 */

namespace BU\theme_slug;

/**
 * BU defined defaults, change according to your requirements. Many of these support optional extra arguments.
 *
 * @return null
 */
function setup_theme_supported_features() {
	/**
	 * tbd.
	 * @link
	 */
	// add_theme_support('admin-bar');

	/**
	 * Allow blocks such as the image block have the possibility to define a “wide” or “full” alignment.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#wide-alignment
	 */
	add_theme_support( 'align-wide' );

	/**
	 * Enable the WP Global Styles settings.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#appearance-tools
	 */
	// add_theme_support('appearance-tools');

	/**
	 * Enables post and comment RSS feeds by default. This feature is automatically enabled for block themes, and does not need to be included during theme setup.
	 * @link https://developer.wordpress.org/themes/basics/theme-functions/
	 */
	remove_theme_support( 'automatic-feed-links' );

	/**
	 * tbd.
	 * @link
	 */
	remove_theme_support( 'block-templates' );

	/**
	 * Enable Block Based Template parts, allowing administrators to edit parts of the site using blocks. This is off by default.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#block-based-template-parts
	 */
	// add_theme_support('block-template-parts');

	/**
	 * Enable all border settings.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#border
	 */
	// add_theme_support('border');

	/**
	 * WordPress comes with a number of block patterns built-in, themes can opt-out of the bundled patterns and provide their own set.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#disabling-the-default-block-patterns
	 */
	remove_theme_support( 'core-block-patterns' );

	/**
	 * tbd.
	 * @link
	 */
	remove_theme_support( 'custom-background' );

	/**
	 * tbd.
	 * @link
	 */
	remove_theme_support( 'custom-header' );

	/**
	 * Some blocks like paragraph and headings support customizing the line height.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#supporting-custom-line-heights
	 */
	remove_theme_support( 'custom-line-height' );

	/**
	 * tbd.
	 * @link
	 */
	// add_theme_support('custom-logo');

	/**
	 * tbd.
	 * @link
	 */
	// add_theme_support('customize-selective-refresh-widgets');

	/**
	 * Some blocks can have padding controls. This is off by default.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#spacing-control
	 */
	// add_theme_support('custom-spacing');

	/**
	 * In addition to pixels, users can use other units to define sizes, paddings… The available units are: px, em, rem, vh, vw.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#support-custom-units
	 * @param array of units
	 */
	// add_theme_support('custom-units');

	/**
	 * tbd.
	 * @link
	 */
	// add_theme_support('dark-editor-style');

	/**
	 * Disable the color palette offered to blocks that allows the user to select a custom color different from the editor or theme default colors.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#disabling-custom-colors-in-block-color-palettes
	 */
	add_theme_support( 'disable-custom-colors' );

	/**
	 * Disable the ability to set custom font sizes.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#disabling-custom-font-sizes
	 */
	add_theme_support( 'disable-custom-font-sizes' );

	/**
	 * Disable the ability to set a custom gradient.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#disabling-custom-gradients
	 */
	add_theme_support( 'disable-custom-gradients' );

	/**
	 * By enabling the following code, themes commit to providing their own structural styling, as using this feature will result in core blocks displaying incorrectly in both the editor and site frontend.
	 * Note: Requires WP 6.1
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#disabling-base-layout-styles
	 */
	// add_theme_support('disable-layout-styles');

	/**
	 * The block editor provides a default palette, but a theme can overwrite it and provide its own.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#block-color-palettes
	 * @param array of colors
	 */
	add_theme_support( 'editor-color-palette' );

	/**
	 * The block editor provides a default gradient presets, but a theme can overwrite them and provide its own.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#block-gradient-presets
	 * @param array of gradients
	 */
	add_theme_support( 'editor-gradient-presets' );

	/**
	 * The block provides a default set of font sizes, but a theme can overwrite it and provide its own.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#block-font-sizes
	 * @param array of sizes
	 */
	add_theme_support( 'editor-font-sizes' );

	/**
	 * Enqueue and load CSS on the editor screen. For the classic editor, this was the only function needed to add style to the editor. For the new block editor, you also need to use `add_editor_style`. This feature is automatically enabled for block themes, and does not need to be included during theme setup.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#enqueuing-the-editor-style
	 */
	add_theme_support( 'editor-styles' );

	/**
	 * tbd.
	 * @link
	 */
	// add_theme_support('featured-content');

	/**
	 * tbd. This feature is automatically enabled for block themes, and does not need to be included during theme setup.
	 * @link
	 */
	add_theme_support( 'html5' );

	/**
	 * tbd.
	 * @link
	 */
	// add_theme_support('link-color');

	/**
	 * tbd.
	 * @link
	 */
	// add_theme_support('menus');

	/**
	 * Post formats allow users to format their posts in different ways.
	 * @link https://developer.wordpress.org/themes/basics/theme-functions/
	 */
	// add_theme_support('post-formats');

	/**
	 * Post thumbnails and featured images allow your users to choose an image to represent their post. This feature is automatically enabled for block themes, and does not need to be included during theme setup.
	 * @link https://developer.wordpress.org/themes/basics/theme-functions/
	 */
	add_theme_support( 'post-thumbnails' );

	/**
	 * To make the content resize and keep its aspect ratio, the <body> element needs the wp-embed-responsive class. This is not set by default, and requires the theme to opt in to the responsive-embeds feature. This feature is automatically enabled for block themes, and does not need to be included during theme setup.
	 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#responsive-embedded-content
	 */
	remove_theme_support( 'responsive-embeds' );

	/**
	 * tbd.
	 * @link
	 */
	// add_theme_support('starter-content');

	/**
	 * tbd.
	 * @link
	 */
	// add_theme_support('title-tag');

	/**
	 * tbd.
	 * @link
	 */
	// add_theme_support('widgets');

	/**
	 * tbd.
	 * @link
	 */
	// add_theme_support('widgets-block-editor');

	/**
	 * tbd.
	 * @link
	 */
	add_theme_support( 'wp-block-styles' );
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\\setup_theme_supported_features' );
