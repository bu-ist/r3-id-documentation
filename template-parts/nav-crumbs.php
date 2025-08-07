<?php
/**
 * Breadcrumb Navigation markup.
 *
 * @package bu-responsive-customizations
 * @link https://github.com/bu-ist/bu-responsive-customizations/pull/53/files
 */


// wp_enqueue_style from burf-customizations/layout/_breadcrumbs.scss or it that handled elsewhere?

// wp_enqueue_script from https://github.com/bu-ist/bu-base/blob/4e4512c9dd5cdb1763577079ee80f48aa28b400d/scripts/index.js

?>


<!-- Markup for Breadbrumb Navigation -->
<nav class="nav-crumbs" data-expanded="false" data-open="false">
	<!-- List of Parent sections -->
	<ul class="nav-crumb-list">
		<li class="nav-crumb nav-crumb-home"><a href="<?php echo esc_url( get_home_url() ); ?>">Home</a></li>
		<?php
		/**
		 * Get all post ancestors.
		 * @link https://developer.wordpress.org/reference/functions/get_post_ancestors/
		 */
		global $post;
		$parents = get_post_ancestors( $post );
		array_pop( $parents ); //Removes final item (root/home).
		foreach ( array_reverse( $parents ) as $parent_id ) {
			echo '<li class="nav-crumb"><a href="' . esc_url( get_permalink( $parent_id ) ) . '">' . esc_html( get_the_title( $parent_id ) ) . '</a></li>';
		}
		?>
	</ul>

	<!-- Buttons used to toggle Breadcrumb expanded view mode -->
	<!-- @todo no way to collapse this -->
	<span class="nav-crumbs-expander-wrapper"><button href="#" class="nav-crumbs-expander">...</button></span>

	<!-- Wrapper for current section button and dropdown menu -->
	<div class="nav-crumbs-menu-wrapper">
		<!-- Button for current section, opens menu-->
		<button class="nav-crumbs-current"><?php echo esc_html( get_the_title( $post ) ); ?></button>
		<!-- Menu Dialog, opens as non-modal dropdown-->
		<dialog class="nav-crumbs-menu">
			<!-- Menu List of current section child pages -->
			<?php
			/**
			 * Load the selected menu. Required?
			 * @link https://developer.wordpress.org/reference/functions/wp_nav_menu/
			 * @todo Remove the comments once this is finalized...
			 */
			$menu_args = array(
				'menu'       => $args['menu'], // (int|string|WP_Term) Desired menu. Accepts a menu ID, slug, name, or object.
				// 'menu_class'      => '', // (string) CSS class to use for the ul element which forms the menu. Default 'menu'.
				// 'menu_id'         => '', // (string) The ID that is applied to the ul element which forms the menu. Default is the menu slug, incremented.
				'container'  => false, // (string) Whether to wrap the ul, and what to wrap it with. Default 'div'.
				// 'container_class' => '', // (string) Class that is applied to the container. Default 'menu-{menu slug}-container'.
				// 'container_id'    => '', // (string) The ID that is applied to the container.
				// 'fallback_cb'     => '', // (callable|bool) If the menu doesn't exists, a callback function will fire. Default is 'wp_page_menu'. Set to false for no fallback.
				// 'before'          => '', // (string) Text before the link markup.
				// 'after'           => '', // (string) Text after the link markup.
				// 'link_before'     => '', // (string) Text before the link text.
				// 'link_after'      => '', // (string) Text after the link text.
				// 'echo'            => '', // (bool) Whether to echo the menu or return it. Default true.
				// 'depth'           => '', // (int) How many levels of the hierarchy are to be included. 0 means all. Default 0.
				// 'walker'          => '', // (object) Instance of a custom walker class.
				// 'theme_location'  => '', // (string) Theme location to be used. Must be registered with register_nav_menu() in order to be selectable by the user.
				'items_wrap' => '<menu id="%1$s" class="%2$s">%3$s</menu>', // (string) How the list items should be wrapped. Default is a ul with an id and class. Uses printf() format with numbered placeholders.
				// 'item_spacing'    => '', // (string) Whether to preserve whitespace within the menu's HTML. Accepts 'preserve' or 'discard'. Default 'preserve'.
			);
			wp_nav_menu( $menu_args );
			?>
		</dialog>
	</div>
</nav>


<!-- Javascript for handling expander visibility on rescale, and toggle functions for expander and dropdown menu-->
<script>
const navCrumbs = document.querySelector(".nav-crumbs");
const navCrumbHome = document.querySelector(".nav-crumb-home");
const navCrumbList = document.querySelector(".nav-crumb-list");
const navCrumbsExpander = document.querySelector(".nav-crumbs-expander-wrapper");
const navCrumbsMenu = document.querySelector(".nav-crumbs-menu");
const navCrumbsMenuOpen = document.querySelector(".nav-crumbs-current");
const navCrumbsMenuClose = document.querySelector(".nav-crumbs-menu-close");

// Toggle function for expanded view
navCrumbsExpander.addEventListener("click", () => {
	navCrumbs.dataset.expanded = 'true';
	navCrumbs.classList.add("nav-crumbs-expanded");

});

// Toggle functon for the current nav menu
navCrumbsMenuOpen.addEventListener("click", () => {
	if (navCrumbs.dataset.open == 'true') {
		navCrumbsMenu.close();
		navCrumbs.dataset.open = 'false';
	} else {
		navCrumbsMenu.show();
		navCrumbs.dataset.open = 'true';
	}
});

// Function for toggling expander visibility. Used in resize observer.
function navCrumbExpanderToggle() {
	if (navCrumbList.scrollHeight > navCrumbHome.scrollHeight) {
		navCrumbsExpander.classList.add("visible");
	} else {
		navCrumbsExpander.classList.remove("visible");
	}
}

// Resize observer function for toggling visibility of the expander button
const navCrumbsObserverDebouncers = new WeakMap;
const navCrumbsObserver = new ResizeObserver(entries => {
	entries.forEach(entry => {
		// Clear the timeout we stored in our WeakMap if any
		clearTimeout(navCrumbsObserverDebouncers.get(entry.target));
		// Set a new timeout to dispatch an event 200 ms after this resize
		// if this is followed by another resize, it will be cleared by the above.
		navCrumbsObserverDebouncers.set(entry.target, setTimeout(() => {
			navCrumbExpanderToggle();
		}, 200));
	})
});

// Register the resize observer for breadcrumbs
navCrumbsObserver.observe(navCrumbs);
</script>
