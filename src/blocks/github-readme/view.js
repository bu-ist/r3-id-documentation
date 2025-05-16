/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

// import 'showdown';
const showdown = require( 'showdown' );

const converter = new showdown.Converter();

// @todo this only allows 1 per page; need to make it more modular
document.addEventListener( 'DOMContentLoaded', function () {
	const markdownEl = document.getElementById( 'markdown_raw' );
	const markdownHtml = converter.makeHtml( markdownEl.value );
	document.getElementById( 'markdown_html' ).innerHTML = markdownHtml;
} );
