/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @link https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {

	attributes: {
		title: {
			type: 'string',
		},
		excerpt: {
			type: 'string',
		}
	},
	/**
	 * @link ./edit.js
	 */
	edit: Edit,
	save: ( { attributes } ) => null,
	icon: { src: metadata.icon, foreground: '#cc0000' },
} );
