/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// Import WP assets.
import {
	TextControl, // https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
	PanelBody,
} from '@wordpress/components';

import { FetchRawFile } from './modules/FetchRawFile.mjs';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object} props Arguments passed to a React component.
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { mdURL } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Markdown File' ) }>
					<TextControl
						label="Full URL to markdown file:"
						help="EX: https://github.com/README.md"
						onChange={ ( value ) =>
							setAttributes( { mdURL: value } )
						}
						value={ mdURL }
						type="url"
					/>
				</PanelBody>
			</InspectorControls>
			<article { ...useBlockProps() }>
				<div className="showdown">
					<script type="text/plain">
						<FetchRawFile filePath={ mdURL } />
					</script>
				</div>
				<p className="source">
					Source: <a href={ mdURL }>{ mdURL }</a>
				</p>
			</article>
		</>
	);
}
