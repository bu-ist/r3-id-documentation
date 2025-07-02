<?php
/**
 * Class to manage registration of blocks and assets within the editor.
 *
 * @package r3-id-documentation
 */

namespace BU\r3_id_documentation\Blocks;

require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-base.php';
require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-direct.php';

/**
 * Class Assets
 */
class Blocks {

	/**
	 * Constructor.
	 *
	 * @since 0.1.0
	 */
	public function __construct() {

		// Gather up all the block.json files.
		if ( file_exists( R3_ID_DOCUMENTATION_BLOCKS_BUILD_DIR ) ) {
			$this->$block_jsons = glob( R3_ID_DOCUMENTATION_BLOCKS_BUILD_DIR . '/*/block.json' );
		}

		add_action( 'init', array( $this, 'register_block_styles' ) );
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_filter( 'block_categories_all', array( $this, 'custom_block_category' ) );

		add_action( 'enqueue_block_editor_assets', array( $this, 'admin_block_styles_and_scripts' ) );
	}

	/**
	 * Register Blocks Stylesheets
	 *
	 * Registers stylesheets so they can be enqueued later by their stylesheet handle in the appropriate location.
	 * This function is called very early on the `init` hook, so the stylesheets are registered before any blocks are registered.
	 *
	 * When blocks are registered if bundling is enabled they can specify the bundled stylesheet handle as their frontend style option.
	 * This will ensure that the bundled stylesheet is loaded in the editor when the block is registered and loaded into the block editor.
	 * On the frontend, the stylesheets are already registered, so they can be enqueued by just their handle.
	 *
	 * @since 0.1.0
	 * @return void
	 */
	public function register_block_styles() {
		/**
		 * Register Shared / Common Block styles.
		 */
		wp_register_style(
			R3_ID_DOCUMENTATION_DOMAIN . '-blocks-common-styles',
			R3_ID_DOCUMENTATION_URL . '/build/css/blocks/blocks-common.css',
			array(),
			filemtime( R3_ID_DOCUMENTATION_DIR . '/build/css/blocks/blocks-common.css' ),
			'all'
		);

		/**
		 * Register Bundled Block styles.
		 *
		 * Dependency: The Common Stylesheet so common/shared styles are enqueued before
		 * the styles for the block, allowing the block styles to override the common styles.
		 */
		if ( R3_ID_DOCUMENTATION_BLOCKS_BUNDLED ) {
			wp_register_style(
				R3_ID_DOCUMENTATION_DOMAIN . '-blocks-bundled-styles',
				R3_ID_DOCUMENTATION_URL . '/build/css/blocks/blocks-bundled.css',
				array( R3_ID_DOCUMENTATION_DOMAIN . '-blocks-common-styles' ),
				filemtime( R3_ID_DOCUMENTATION_DIR . '/build/css/blocks/blocks-bundled.css' ),
				'all'
			);
		}
	}

	/**
	 * Register Blocks in the Theme
	 *
	 * @since 0.1.0
	 */
	public function register_blocks() {
		if ( $this->$block_jsons ) {
			foreach ( $this->$block_jsons as $path ) {

				// Pull in data from block.json.
				$json_string = \WP_Filesystem_Direct::get_contents( $path );
				$json_data   = json_decode( $json_string, true );

				// Get the folder the block is in.
				$block_folder_path = dirname( $path );

				// Get the folder name of the block.
				$block_folder_name = basename( $block_folder_path );

				// Register Block Arguments Array.
				$block_options = [];

				// Check to see if a render file is defined, and if so, use it.
				// @todo This will go away in 6.1.
				if ( $json_data['render'] ) {
					// Get the path to a block's render template from block.json.
					$render_path            = ( explode( '.', $json_data['render'] ) );
					$block_render_file_path = $block_folder_path . $render_path[1] . '.php';

					if ( file_exists( $block_render_file_path ) ) {

						// The block has a render.php file, add a render_callback when registering the block.
						$block_options['render_callback'] = function ( $attributes, $content, $block ) use ( $block_render_file_path, $block_folder_name ) {

							// Include the render.php file and return it's output using output buffering.
							ob_start();

							include $block_render_file_path;

							return ob_get_clean();
						};
					}
				}

				// If bundling is enabled for block frontend styles, set the style option
				// to the bundled stylesheet's handle so it's loaded in the editor.
				if ( R3_ID_DOCUMENTATION_BLOCKS_BUNDLED ) {
					// Don't load a stylesheet for this block, as we are loading a single stylesheet with all block styles bundled together.
					$block_options['style'] = R3_ID_DOCUMENTATION_DOMAIN . '-blocks-bundled-styles';
				} else {

					// Get the path to a block's stylesheet from block.json.
					$style_file = str_replace( 'file:.', '', $json_data['style'] );

					// Register individual block's stylesheets.
					wp_register_style(
						$block_folder_name . '-styles',
						R3_ID_DOCUMENTATION_BLOCKS_BUILD_URL . '/' . $block_folder_name . $style_file,
						array( R3_ID_DOCUMENTATION_DOMAIN . '-blocks-common-styles' ),
						filemtime( R3_ID_DOCUMENTATION_BLOCKS_BUILD_DIR . '/' . $block_folder_name . $style_file )
					);
					// Add the individual block's stylesheet to the arguments so WP registers.
					$block_options['style'] = $block_folder_name . '-styles';
				}

				register_block_type( $path, $block_options );
			}
		}
	}

	/**
	 * Create custom block category. Blocks can be assigned to this category the "category" node in block.json.
	 *
	 * @link https://developer.wordpress.org/reference/hooks/block_categories_all/
	 * @since 0.1.0
	 */
	public function custom_block_category( $categories ) {
		array_unshift(
			$categories,
			array(
				'slug'  => R3_ID_DOCUMENTATION_DOMAIN . '-block-category',
				'title' => 'BU: Theme Starter Block Category (PHP)',
			)
		);

		return $categories;
	}

	/**
	 * Enqueue Block Editor styles.
	 */
	public function admin_block_styles_and_scripts() {

		// Editor styles.
		wp_enqueue_style(
			R3_ID_DOCUMENTATION_DOMAIN . '-block-editor',
			R3_ID_DOCUMENTATION_URL . '/build/css/block-editor.css',
			array(),
			filemtime( R3_ID_DOCUMENTATION_DIR . '/build/css/block-editor.css' ),
		);

		// Editor scripts.
		if ( file_exists( R3_ID_DOCUMENTATION_DIR . '/build/js/block-editor.js' ) ) {
			$asset_file = include R3_ID_DOCUMENTATION_DIR . '/build/js/block-editor.asset.php';

			wp_enqueue_script(
				R3_ID_DOCUMENTATION_DOMAIN . '-block-editor',
				R3_ID_DOCUMENTATION_URL . '/build/js/block-editor.js',
				array_merge( $asset_file['dependencies'], [ 'wp-edit-post' ] ),
				$asset_file['version'],
				array(
					'strategy' => 'defer',
				),
			);
		}
	}
}

// Initialize the class.
$block_setup = new Blocks();
