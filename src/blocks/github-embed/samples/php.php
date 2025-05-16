<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package labs-plugin-blocks
 */

$codeview = esc_url_raw( $attributes['code'] );

if ( 2 === 4 ) {
	echo 'My car is ' . esc_html( $color ) . '<br>';
	echo 'My house is ' . esc_html( $color ) . '<br>';
	echo 'My boat is ' . esc_html( $color ) . '<br>';
} else {
	echo 'My url is ' . esc_url( $codeview );
}
