/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

// Update with the desired icon.
<<<<<<<< HEAD:src/blocks/github-embed/index.js
import { ReactComponent as reactIcon } from '../_includes/icons/github.svg';
========
import { ReactComponent as reactIcon } from '../common/icons/markdown.svg';
>>>>>>>> 7fea8323661010fba769cdafc72d755207a34955:src/blocks/embed-markdown/index.js

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	edit: Edit,
	save: ( { attributes } ) => null,
	icon: { src: reactIcon, foreground: '#cc0000' },
} );
