/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	title: metadata.title,
	attributes: {
		className: {
			type: 'string',
			default: '',
		},
		mediaId: {
			type: 'string',
			default: '',
		},
		size: {
			enum: [ 'img', 'picture', 'full' ],
			default: 'full',
		},
		tag: {
			enum: [ 'img', 'picture', 'figure' ],
			default: 'img',
		},
		altSource: {
			enum: [ 'alt', 'picture', 'figure' ],
			default: 'alt',
		},
		onSelect: {
			type: 'string',
			default: '',
		},
		onRemove: {
			type: 'string',
			default: '',
		},
		focalPoint: {
			type: 'string',
			default: '{ x: 0.5, y: 0.5 }',
		},
		onChangeFocalPoint: {
			type: 'string',
			default: '',
		},
		labels: {
			type: 'string',
			default: '{}',
		},
		canEditImage: {
			type: 'boolean',
			default: true,
		},
		canOverrideImage: {
			type: 'boolean',
			default: true,
		},
		allowedTypes: {
			type: 'string',
			default: "['image']",
		},
		debug: {
			type: 'boolean',
			default: false,
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save: ( { attributes } ) => null,
	icon: metadata.icon,
} );
