<?php
/**
 * Breadcrumb Navigation markup.
 *
 * @package bu-responsive-customizations
 * @link https://github.com/bu-ist/bu-responsive-customizations/pull/53/files
 */


// wp_enqueue_style from burf-customizations/layout/_breadcrumbs.scss or it that handled elsewhere?

// wp_enqueue_script from https://github.com/bu-ist/bu-base/blob/4e4512c9dd5cdb1763577079ee80f48aa28b400d/scripts/index.js

wp_enqueue_script(
	'nav-crumbs',
	BU_RESPONSIVE_CUSTOMIZATIONS_URL . 'assets/bin/js/nav-crumbs.min.js',
	array(),
	null,
	true
);

?>

<!-- Markup for Breadbrumb Navigation (theme) -->
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
		foreach ( array_reverse( $parents ) as $parent_id ) {
			if ( intval( get_option( 'page_on_front' ) ) !== $parent_id ) {
				echo '<li class="nav-crumb"><a href="' . esc_url( get_permalink( $parent_id ) ) . '">' . esc_html( get_the_title( $parent_id ) ) . '</a></li>';
			}
		}
		?>
	</ul>

	<!-- Buttons used to toggle Breadcrumb expanded view mode -->
	<span class="nav-crumbs-expander-wrapper"><button href="#" class="nav-crumbs-expander">...</button></span>

	<?php
	$args = array(
		'child_of'    => $post->ID,
		'parent'      => $post->ID,
		'sort_column' => 'menu_order',
		'sort_order'  => 'asc',

	);
	$children = get_pages( $args );

	if ( $children ) {
		?>

	<!-- Wrapper for current section button and dropdown menu -->
	<div class="nav-crumbs-menu-wrapper">
		<!-- Button for current section, opens menu-->
		<button class="nav-crumbs-current"><?php echo esc_html( get_the_title( $post ) ); ?></button>
		<!-- Menu Dialog, opens as non-modal dropdown-->
		<dialog class="nav-crumbs-menu">
			<!-- Menu List of current section child pages -->
			<menu>
				<?php
				foreach ( $children as $child ) {
					echo '<li><a href="' . esc_url( get_permalink( $child->ID ) ) . '">' . esc_html( get_the_title( $child->ID ) ) . '</a></li>';
				}
				?>
			</menu>
		</dialog>
	</div>
		<?php
	} else {
		echo esc_html( get_the_title( $post ) );
	}
	?>
</nav>
