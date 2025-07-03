/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

const showdown = require( 'showdown' );

const converter = new showdown.Converter();

document.addEventListener( 'DOMContentLoaded', function () {
	document.querySelectorAll( '.showdown' ).forEach( ( mdElement ) => {
		const markdownContent = mdElement.querySelector( 'script' );
		if ( markdownContent ) {
			mdElement.innerHTML = converter.makeHtml(
				markdownContent.innerHTML
			);
		}
	} );
} );
