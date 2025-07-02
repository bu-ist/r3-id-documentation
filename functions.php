<?php
/**
 * Theme functions
 *
 * @link     https://github.com/bu-ist/responsive-framework/wiki/Starting-a-new-Child-Theme
 *
 * @package r3-id-documentation
 */

namespace BU\r3_id_documentation;

/**
 * Constants.
 */
require_once 'constants.php';

/**
 * @todo: Delete the following code block and the dev/prototyping folder before going live.
 * These lines include the dev/prototyping templates development hooks for use in
 * designing sections rapidly.
 */
if ( file_exists( __DIR__ . '/dev/prototyping/dev-functions.php' ) ) {
	include_once 'dev/prototyping/dev-functions.php';
	add_filter( 'after_setup_theme', 'dev_sections' );
}

/**
 * Theme Supports.
 */
require_once 'includes/theme-support.php';

/**
 * WP Docs menu.
 *
 * Example code for additional items:
 *
 * $wpdocs_menu[] = [
 *   'id'    => '',
 *   'title' => __( '', 'r3-id-documentation' ),
 *   'href'  => '',
 * ];
 */
add_filter(
	'wpdocs_menu',
	function ( $wpdocs_menu ) {
		// Add additional menu items here.
		return $wpdocs_menu;
	}
);

/**
 * Enqueue theme scripts and styles.
 */
require_once 'includes/class-themeenqueues.php';

/**
 * Blocks & Assets
 */
require_once 'includes/blocks/functions.php';
