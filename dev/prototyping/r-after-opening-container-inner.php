<?php
/**
 * This is a file stub for rapid development.
 *
 * Replace the HTML below for rapid development.
 *
 * The filename corresponds to the action hook.
 *
 * @package php-dev
 */

// global $hook_messages; // Global OK will only be used in development stage.
// echo wp_kses_post( $hook_messages['r_after_opening_container_inner'] );

?>

<!-- Markup for Breadbrumb Navigation -->
<nav class="nav-crumbs" data-expanded="false" data-open="false">
	<!-- List of Parent sections -->
	<ul class="nav-crumb-list">
		<li class="nav-crumb nav-crumb-home"><a href="#">Home</a></li>
		<li class="nav-crumb"><a href="#">Biostatistics</a></li>
		<li class="nav-crumb"><a href="#">Community Health Sciences</a></li>
		<li class="nav-crumb"><a href="#">Environmental Health</a></li>
		<li class="nav-crumb"><a href="#">Epidemiology</a></li>
		<li class="nav-crumb"><a href="#">Global Health</a></li>
		<li class="nav-crumb"><a href="#">Health Law, Policy & Management</a></li>
	</ul>
 
	<!-- Buttons used to toggle Breadcrumb expanded view mode -->
	<span class="nav-crumbs-expander-wrapper"><button href="#" class="nav-crumbs-expander">...</button></span>
	
	<!-- Wrapper for current section button and dropdown menu -->
	<div class="nav-crumbs-menu-wrapper">
		<!-- Button for current section, opens menu-->
		<button class="nav-crumbs-current">Current Section with a very very long title</button>
		<!-- Menu Dialog, opens as non-modal dropdown-->
		<dialog class="nav-crumbs-menu">
			<!-- Menu List of current section child pages -->
			<menu>
				<li><a href="">SPH at a Glance</a></li>
				<li><a href="">Advisory Committees</a></li>
				<li><a href="">Strategy Map</a></li>
				<li><a href="">Senior Leadership</a></li>
				<li><a href="">Accreditation</a></li>
				<li><a href="">Diversity, Equity, Inclusion, and Justice</a></li>
				<li><a href="">Directory</a></li>
				<li><a href="">Contact SPH</a></li>
			</menu>
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
  if (  navCrumbs.dataset.open == 'true' ) {
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
  }

  else {
	navCrumbsExpander.classList.remove("visible");
  }
}

// Resize observer function for toggling visibility of the expander button
const navCrumbsObserverDebouncers = new WeakMap;
const navCrumbsObserver = new ResizeObserver(entries => {
  entries.forEach(entry => {
	// Clear the timeout we stored in our WeakMap if any
	clearTimeout( navCrumbsObserverDebouncers.get( entry.target ) );
	// Set a new timeout to dispatch an event 200 ms after this resize
	// if this is followed by another resize, it will be cleared by the above.
	navCrumbsObserverDebouncers.set( entry.target, setTimeout(() => {
	  navCrumbExpanderToggle();  
	}, 200) );
  })
});

// Register the resize observer for breadcrumbs
navCrumbsObserver.observe( navCrumbs );
</script>
<?php