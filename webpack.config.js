/**
 * Example webpack.config.js for a theme using BU Build Toolkit
 *
 * Uses CommonJS with async dynamic import to load the ESM toolkit.
 * This avoids needing "type": "module" in package.json or .mjs extensions.
 */

// Define your theme's entry points
const themeEntryPoints = {
	// Styles
	'css/normalize': './src/scss/normalize.scss', // Build a Normalize stylesheet.
	'css/theme': './src/scss/theme.scss', // A stylesheet for the theme.
	'css/admin': './src/scss/admin.scss', // A stylesheet for admin only styles.
	'css/editor-styles': './src/scss/editor-styles.scss', // A stylesheet for editor only styles.
	'css/block-editor': './src/scss/block-editor.scss', // A stylesheet for block editor only styles.
	'css/classic-editor': './src/scss/classic-editor.scss', // A stylesheet for block editor only styles.

	// Blocks
	'css/blocks/blocks-bundled': './src/blocks/blocks-bundled.scss', // All individual block styles bundled into one file.
	'css/blocks/blocks-common': './src/blocks/blocks-common.scss', // Styles common to all blocks.

	// Scripts
	'js/theme': './src/js/theme.js', // Front-end scripts.
	'js/admin': './src/js/admin.js', // Admin only scripts.
	'js/block-editor': './src/js/block-editor.js', // Block editor only scripts.
	'js/classic-editor': './src/js/classic-editor.js', // Block editor only scripts.
};

// Export an async function that returns the config
// Webpack supports async configs that return promises
module.exports = ( async () => {
	const { createConfig } = await import(
		'@bostonuniversity/bu-build-toolkit'
	);

	return createConfig( {
		themeEntryPoints,
		// Optional: Add custom SASS include paths
		// loadPaths: [ './custom/path' ],
		// Optional: Override SASS compiler (default is 'sass-embedded')
		// sassCompiler: 'sass',
		// Optional: Custom webpack stats configuration
		// statsConfig: { preset: 'verbose', colors: true },
		// Optional: Custom SASS options
		// sassOptions: { outputStyle: 'compressed' },
	} );
} )();
