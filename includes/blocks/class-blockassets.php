<?php
/**
 * Class to manage block assets on the front end of the website where the theme is used.
 *
 * This was just quickly copied from BU Stats so the assets in this prototype could be enqueued for now.
 *
 * @package theme-slug
 */

namespace BU\theme_slug\Blocks;

/**
 * Class Assets
 */
class BlockAssets {


	/**
	 * Assets constructor.
	 *
	 * @since 0.1.0
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'frontend_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'scripts' ) );
	}

	/**
	 * Enqueue Frontend styles.
	 *
	 * @since 0.1.0
	 */
	public function frontend_styles() {
		// Enqueue any other frontend styles or scripts needed related to blocks specifically.
	}

	/**
	 * Enqueue Frontend Javascript.
	 *
	 * When the block defines render_callback during registration in PHP, then the block author is responsible for enqueuing the script.
	 *
	 * @since 0.2.0
	 */
	public function scripts() {

		$block_jsons = glob( THEME_SLUG_BLOCKS_BUILD_DIR . '/*/view.js' );

		foreach ( $block_jsons as $path ) {

			// Get the folder the block is in.
			$block_folder_path = dirname( $path );

			// Get the folder name of the block.
			$block_folder_name = basename( $block_folder_path );

			$asset_file = include $block_folder_path . '/view.asset.php';

			// Enqueue frontend `view.js` files for each block.
			wp_enqueue_script(
				RESPONSIVE_CHILD_THEME_DOMAIN . '-' . $block_folder_name . '-frontend',
				THEME_SLUG_BLOCKS_BUILD_URL . '/' . $block_folder_name . '/view.js',
				$asset_file['dependencies'],
				$asset_file['version'],
				true
			);
		}
	}
}

// Initialize the class.
$block_assets = new BlockAssets();
