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
// if ( file_exists( __DIR__ . '/dev/prototyping/dev-functions.php' ) ) {
//  define( 'RESPONSIVE_ENABLE_ALL_DEV_HOOKS', true );
//  include_once 'dev/prototyping/dev-functions.php';
//  add_filter( 'after_setup_theme', 'dev_sections' );
// }

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

/**
 * DEMO BREAD
 */
function attach_breadcrumbs_theme() {
	\BU\Plugins\BU_Responsive_Customizations\Breadcrumbs\attach_breadcrumbs();
}
add_action( 'r_after_opening_body_tag', __NAMESPACE__ . '\\attach_breadcrumbs_theme' );
add_action( 'r_before_opening_article', __NAMESPACE__ . '\\attach_breadcrumbs_theme' );
add_action( 'r_before_footer_brand_assets', 'BU\Plugins\BU_Responsive_Customizations\Breadcrumbs\attach_breadcrumbs' );

/**
 * Create department taxonomy for profiles.
 *
 * @author Tim King <timking@bu.edu>
 */
function create_taxonomies() {
	$args_status = array(
		'hierarchical'      => true,
		'labels'            => array(
			'name'              => _x( 'Statuses', 'taxonomy general name', 'r3-id-documentation' ),
			'singular_name'     => _x( 'Status', 'taxonomy singular name', 'r3-id-documentation' ),
			'search_items'      => __( 'Search Regions', 'r3-id-documentation' ),
			'all_items'         => __( 'All Statuses', 'r3-id-documentation' ),
			'parent_item'       => __( 'Parent Status', 'r3-id-documentation' ),
			'parent_item_colon' => __( 'Parent Status:', 'r3-id-documentation' ),
			'edit_item'         => __( 'Edit Status', 'r3-id-documentation' ),
			'update_item'       => __( 'Update Status', 'r3-id-documentation' ),
			'add_new_item'      => __( 'Add New Statuses', 'r3-id-documentation' ),
			'new_item_name'     => __( 'New Status', 'r3-id-documentation' ),
			'menu_name'         => __( 'Statuses', 'r3-id-documentation' ),
		),
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'status' ),
	);
	register_taxonomy( 'status', array( 'page' ), $args_status );
	$args_assignee = array(
		'hierarchical'      => true,
		'labels'            => array(
			'name'              => _x( 'Assignees', 'taxonomy general name', 'r3-id-documentation' ),
			'singular_name'     => _x( 'Assignee', 'taxonomy singular name', 'r3-id-documentation' ),
			'search_items'      => __( 'Search Regions', 'r3-id-documentation' ),
			'all_items'         => __( 'All Assignees', 'r3-id-documentation' ),
			'parent_item'       => __( 'Parent Assignee', 'r3-id-documentation' ),
			'parent_item_colon' => __( 'Parent Assignee:', 'r3-id-documentation' ),
			'edit_item'         => __( 'Edit Assignee', 'r3-id-documentation' ),
			'update_item'       => __( 'Update Assignee', 'r3-id-documentation' ),
			'add_new_item'      => __( 'Add New Assignees', 'r3-id-documentation' ),
			'new_item_name'     => __( 'New Assignee', 'r3-id-documentation' ),
			'menu_name'         => __( 'Assignees', 'r3-id-documentation' ),
		),
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'assignee' ),
	);
	register_taxonomy( 'assignee', array( 'page' ), $args_assignee );
}
add_action( 'init', __NAMESPACE__ . '\\create_taxonomies' );
