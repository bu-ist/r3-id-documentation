const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const { mergeWithRules } = require('webpack-merge');
const path = require('path');
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
// Import our theme paths from a separate file that can be modified in the theme.
const { customIncludePaths, themeEntryPoints, sassCompiler } = require('./webpack.theme');


const blocksConfig = {
    module: {
        rules: [
            {
                test: /\.(sc|sa)ss$/,
                use: [
                    {
                        loader: require.resolve( 'sass-loader' ),
                        options: {
                            sassOptions: {
                                includePaths: customIncludePaths, // Adding our custom include paths so that
                            },
                            implementation: require(sassCompiler)
                        },
                    },
                ],
            },
        ],
    },
}

const themeConfig = {
    // Set devtool mode to sourcemap so we generate sourcemap files even for production builds.
    devtool: 'source-map',
    entry: {
        ...themeEntryPoints
    },
    module: {
        rules: [
            {
                test: /\.(sc|sa)ss$/,
                use: [
                    {
                        loader: require.resolve( 'css-loader' ),
                        options: {
                            sourceMap: true, // Set sourceMap to true so we generate a map even for prod builds.
                        },
                    },
                    {
                        loader: require.resolve( 'sass-loader' ),
                        options: {
                            sassOptions: {
                                includePaths: customIncludePaths,
                            },
                            sourceMap: true, // Set sourceMap to true so we generate a map even for prod builds.
                            implementation: require(sassCompiler)
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        // Grab the defaultConfig's plugins array and filter it to remove what we don't need.
        ...defaultConfig.plugins.filter(
            // Remove CopyWebpackPlugin from the ThemeConfig so we don't copy
            // block.json & php files into our output folder for the theme's files.
            ( plugin ) => ! ( plugin instanceof CopyWebpackPlugin )
        ),
        new RemoveEmptyScriptsPlugin(), // Add new plugin that removes empty script files for CSS only entries
    ]
}


/**
 * Export the new modified configuration for webpack and use the
 * webpack-merge functions to merge our modified configuration in.
 */
module.exports = [
    mergeWithRules({
        module: {
            rules: {
                test: "match",
                use: {
                    loader: "match",
                    options: "merge",
                },
            },
        },
    })(defaultConfig, blocksConfig),
    mergeWithRules({
        entry: "merge",
        module: {
            rules: {
                test: "match",
                use: {
                    loader: "match",
                    options: "merge",
                },
            },
        },
        plugins: "replace"
    })(defaultConfig, themeConfig),
];
