/**
 * Webpack Theme Customization file.
 *
 * Theme developers can make changes to the options, entry points, and paths listed in this file
 * in order to modify the webpack config to load new assets from node packages or
 * to add new stylesheets to be compiled by webpack.
 */


/**
 * SASS includePaths
 *
 * This array specifies the includePaths for Dart Sass to reference
 * in order to find and load SASS partials from node_modules packages.
 * New paths can be added to this array in this file and will be added as
 * paths that Dart Sass checks to find SASS partials for @import instances.
 */
const customIncludePaths = [
	'./node_modules/normalize-scss/sass',
	'./node_modules/mathsass/dist/',
	'./node_modules/@bostonuniversity'
];



/**
 * Theme Entry Points
 *
 * This object contains each of the theme related files that need to be
 * compiled for this theme. This can be SASS or Javascript used in the theme.
 *
 * Format:
 * 'name': 'path-to-file'
 *
 * The name can contain a path to control the output location of the file within
 * the output directory.
 *
 * Example: 'css/admin/adminstyle': './css/admin.scss',
 * In this example the admin.scss file will be compiled as a file named
 * `adminstyle.css` in the /build/css/admin folder path.
 */
const themeEntryPoints = {
	// Styles
	'css/theme': './src/scss/theme.scss', // A stylesheet for the theme.
	'css/admin': './src/scss/admin.scss', // A stylesheet for admin only styles.
	'css/editor-styles': './src/scss/editor-styles.scss', // A stylesheet for editor only styles.
	'css/block-editor': './src/scss/block-editor.scss', // A stylesheet for block editor only styles.
	'css/classic-editor': './src/scss/classic-editor.scss', // A stylesheet for block editor only styles.
	//'css/vendor/micromodal': './js-dev/library/micromodal.scss' // An example of a 3rd party libary that needs SCSS compiled.
	// Blocks
	'css/blocks/blocks-all': './src/blocks/blocks-all.scss', // Styles to apply to all blocks.
	'css/blocks/blocks-common': './src/blocks/blocks-common.scss', // Styles common to all blocks.
	// Scripts
	'js/theme': './src/js/theme.js', // Front-end scripts.
	'js/admin': './src/js/admin.js', // Admin only scripts.
	// 'js/editor': './src/js/editor.js', // Editor only scripts, not sure how to do this, or if we need to.
	'js/block-editor': './src/js/block-editor.js', // Block editor only scripts.
	'js/classic-editor': './src/js/classic-editor.js', // Block editor only scripts.
};


// Set SASS compiler to use the faster embedded version. Default is `sass`.
// `sass-embedded` appears to be faster on MacOS. This can be changed back to `sass`
// if it causes issues.
const sassCompiler = 'sass-embedded';

/**
 * Export these so webpack.config.js can consume it.
 */
module.exports = {
	customIncludePaths,
	themeEntryPoints,
	sassCompiler
}
