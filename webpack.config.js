/**
 * WEBPACK CONFIG
 *
 * This file extends the default wp-scripts webpack config file found here
 *
 * @link https://webpack.js.org/concepts/ Webpack Docs
 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/scripts/config/webpack.config.js WordPress Webpack Config
 * @link https://developer.bu.edu/gutenberg/gutenberg-handbook/webpack-config-js/ BU Documentation
 *
 * Run `npm list webpack` to see current version.
 */

const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const { mergeWithRules } = require( 'webpack-merge' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );

// Import our theme paths from a separate file that can be modified in the theme.
const {
	themeEntryPoints,
	sassCompiler,
	statsConfig,
	customSassOptions,
} = require( './webpack.customizations' );

/**
 * Block Config for @wordpress/scripts & webpack
 *
 * Do not modify the entry points of this config as it uses the `getWebpackEntryPoints` function from wp-scripts that finds all blocks and block.json files and builds a list of entrypoints for webpack from that automagically.
 */
const blocksConfig = {
	module: {
		rules: [
			{
				test: /\.(js|mjs)$/,
				loader: 'babel-loader',
				exclude: /node_modules\/(?!(@bostonuniversity)\/).*/,
			},
			{
				test: /\.(sc|sa)ss$/,
				use: [
					{
						loader: require.resolve( 'sass-loader' ),
						options: {
							sassOptions: customSassOptions,
							implementation: require( sassCompiler ),
						},
					},
				],
			},
		],
	},
	stats: statsConfig,
};

/**
 * Block Styles Config for @wordpress/scripts & webpack
 *
 * Used to compile additional stylesheets for blocks such as Decorative Styles and Shared/Common styles.
 * This config entirely replaces the default entry points from the @wordpress/scripts defaultConfig. This ensures
 * that the blocks are not processed a second time.
 */
const themeConfig = {
	entry: {
		...themeEntryPoints,
	},
	module: {
		rules: [
			{
				test: /\.(sc|sa)ss$/,
				use: [
					{
						loader: require.resolve( 'css-loader' ),
						options: {
						},
					},
					{
						loader: require.resolve( 'sass-loader' ),
						options: {
							sassOptions: customSassOptions,
							implementation: require( sassCompiler ),
						},
					},
				],
			},
		],
	},
	stats: statsConfig,
	plugins: [
		// Grab the defaultConfig's plugins array and filter it to remove what we don't need.
		...defaultConfig.plugins.filter(
			// Remove CopyWebpackPlugin from the ThemeConfig so we don't copy block.json & php files into our output folder for the theme's files.
			( plugin ) => ! ( plugin instanceof CopyWebpackPlugin )
		),
		new RemoveEmptyScriptsPlugin(), // Add new plugin that removes empty script files for CSS only entries
	],
};

/**
 * Now we use `webpack-merge` to combine our custom rules defined here with the base WordPress rules.
 * Export the new modified configuration for webpack and use the webpack-merge functions to merge our modified configuration in.
 * @link https://github.com/survivejs/webpack-merge?tab=readme-ov-file#mergewithrules
 */
module.exports = [
	mergeWithRules( {
		module: {
			rules: {
				test: 'match',
				use: {
					loader: 'match',
					options: 'merge',
				},
			},
		},
		stats: 'replace',
	} )( defaultConfig, blocksConfig ),
	mergeWithRules( {
		entry: 'merge',
		module: {
			rules: {
				test: 'match',
				use: {
					loader: 'match',
					options: 'merge',
				},
			},
		},
		stats: 'replace',
		plugins: 'replace',
	} )( defaultConfig, themeConfig ),
];
