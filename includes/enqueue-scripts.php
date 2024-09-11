<?php
/**
 * Enqueue scripts and styles.
 *
 * @package theme-slug
 */

namespace BU\theme_slug;

/**
 * Enqueue front-end scripts & styles. These appear on the front-end only.
 *
 * @return null
 * @author Tim King <timking@bu.edu>
 */
function responsive_wp_enqueue_scripts() {
	// Remove legacy style enqueuements.
	wp_dequeue_style( 'responsive-framework' );
	wp_dequeue_style( 'responsive-framework-ie' );

	// New enqueuements.
	if ( file_exists( RESPONSIVE_CHILD_THEME_DIR . '/build/css/theme.css' ) ) {
		wp_enqueue_style(
			RESPONSIVE_CHILD_THEME_DOMAIN,
			RESPONSIVE_CHILD_THEME_URL . '/build/css/theme.css',
			array(),
			RESPONSIVE_CHILD_THEME_VERSION,
		);
	}
	if ( file_exists( RESPONSIVE_CHILD_THEME_DIR . '/build/js/theme.js' ) ) {
		$asset_file = include RESPONSIVE_CHILD_THEME_DIR . '/build/js/theme.asset.php';
		wp_enqueue_script(
			RESPONSIVE_CHILD_THEME_DOMAIN,
			RESPONSIVE_CHILD_THEME_URL . '/build/js/theme.js',
			$asset_file['dependencies'],
			$asset_file['version'],
			array(
				'strategy' => 'defer',
			),
		);
	}
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\responsive_wp_enqueue_scripts', 11 );

/**
 * Enqueue admin scripts & styles. These appear on the back-end only.
 *
 * @return null
 * @author Tim King <timking@bu.edu>
 */
function responsive_admin_enqueue_scripts() {
	if ( file_exists( RESPONSIVE_CHILD_THEME_DIR . '/build/css/admin.css' ) ) {
		wp_enqueue_style(
			RESPONSIVE_CHILD_THEME_DOMAIN . '-admin',
			RESPONSIVE_CHILD_THEME_URL . '/build/css/admin.css',
			array(),
			RESPONSIVE_CHILD_THEME_VERSION,
		);
	}
	if ( file_exists( RESPONSIVE_CHILD_THEME_DIR . '/build/js/admin.js' ) ) {
		$asset_file = include RESPONSIVE_CHILD_THEME_DIR . '/build/js/admin.asset.php';
		wp_enqueue_script(
			RESPONSIVE_CHILD_THEME_DOMAIN . '-admin',
			RESPONSIVE_CHILD_THEME_URL . '/build/js/admin.js',
			$asset_file['dependencies'],
			$asset_file['version'],
			array(
				'strategy' => 'defer',
			),
		);
	}
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\responsive_admin_enqueue_scripts' );

/**
 * Registers an editor stylesheet for the theme.
 */
function add_editor_styles_support() {
	add_theme_support( 'editor-styles' );
}
add_action( 'admin_init', __NAMESPACE__ . '\\add_editor_styles_support' );

/**
 * Enqueue classic editor styles. These only appear on classic-editor pages.
 *
 * Registers an editor stylesheet for the theme only if
 * the screen in the admin is the block editor. This prevents
 * the same stylesheet from also being loaded into classic editor
 * instances.
 *
 * @param Array $current_screen Current WP_Screen object.
 * @return null
 * @author Tim King <timking@bu.edu>
 * @todo centralized elsewhere
 * @link https://developer.wordpress.org/reference/hooks/current_screen/
 */
function editor_assets( $current_screen ) {
	global $pagenow;

	if ( ! is_admin() ) {
		return false;
	}

	if ( method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor() ) {
		add_editor_style( RESPONSIVE_CHILD_THEME_URL . '/build/css/editor-styles.css' );
	}

	if ( ! $current_screen->is_block_editor && in_array( $pagenow, array( 'post.php', 'post-new.php' ) ) ) {
		if ( file_exists( RESPONSIVE_CHILD_THEME_DIR . '/build/css/classic-editor.css' ) ) {
			wp_enqueue_style(
				RESPONSIVE_CHILD_THEME_DOMAIN . '-classic-editor',
				RESPONSIVE_CHILD_THEME_URL . '/build/css/classic-editor.css',
				array(),
				RESPONSIVE_CHILD_THEME_VERSION,
			);
		}
		if ( file_exists( RESPONSIVE_CHILD_THEME_DIR . '/build/js/classic-editor.js' ) ) {
			$asset_file = include RESPONSIVE_CHILD_THEME_DIR . '/build/js/classic-editor.asset.php';
			wp_enqueue_script(
				RESPONSIVE_CHILD_THEME_DOMAIN . '-classic-editor',
				RESPONSIVE_CHILD_THEME_URL . '/build/js/classic-editor.js',
				$asset_file['dependencies'],
				$asset_file['version'],
				array(
					'strategy' => 'defer',
				),
			);
		}
	}
}
add_action( 'current_screen', __NAMESPACE__ . '\\editor_assets', 10, 1 );


/**
 * Enqueue block editor scripts & styles. These only appear on block-editor pages.
 *
 * @return null
 * @author Tim King <timking@bu.edu>
 */
function block_editor_assets() {
	if ( file_exists( RESPONSIVE_CHILD_THEME_DIR . '/build/css/block-editor.css' ) ) {
		wp_enqueue_style(
			RESPONSIVE_CHILD_THEME_DOMAIN . '-block-editor',
			RESPONSIVE_CHILD_THEME_URL . '/build/css/block-editor.css',
			array(),
			RESPONSIVE_CHILD_THEME_VERSION,
		);
	}
	if ( file_exists( RESPONSIVE_CHILD_THEME_DIR . '/build/js/block-editor.js' ) ) {
		$asset_file = include RESPONSIVE_CHILD_THEME_DIR . '/build/js/block-editor.asset.php';
		wp_enqueue_script(
			RESPONSIVE_CHILD_THEME_DOMAIN . '-block-editor',
			RESPONSIVE_CHILD_THEME_URL . '/build/js/block-editor.js',
			$asset_file['dependencies'],
			$asset_file['version'],
			array(
				'strategy' => 'defer',
			),
		);
	}
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\block_editor_assets' );
