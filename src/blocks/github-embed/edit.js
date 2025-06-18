/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

// Import WP assets.
import {
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';

// You should avoid this, but we're using it here because the code rendering is complicated...
import ServerSideRender from '@wordpress/server-side-render';

import {
	PanelBody,
	TextareaControl,
	TextControl, // https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
	SelectControl, // https://developer.wordpress.org/block-editor/reference-guides/components/select-control/
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { code, language, lines } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Code Settings' ) } initialOpen={ true }>
					<TextareaControl
						label="Paste code or full URL to github. Note, this does not work with private repos."
						help="EX: https://github.com/README.md"
						onChange={ ( value ) =>
							setAttributes( { code: value } )
						}
						value={ code }
					/>
					<SelectControl
						label="Language"
						value={ language }
						options={ [
							{ value: '', label: 'none' },
							{ label: 'css', value: 'css' },
							{ label: 'scss', value: 'scss' },
							{ label: 'php', value: 'php' },
							{ label: 'js', value: 'js' },
							{ label: 'md', value: 'md' },
							{ label: 'json', value: 'json' },
							{ label: 'html', value: 'html' },
						] }
						onChange={ ( value ) =>
							setAttributes( { language: value } )
						}
					/>
					<TextControl
						label="Highlight Lines"
						help="https://prismjs.com/plugins/line-highlight/"
						value={ lines }
						onChange={ ( value ) =>
							setAttributes( { lines: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<ServerSideRender
					block="bu/github-embed"
					attributes={ {
						code,
						language,
						lines,
					} }
				/>
			</div>
		</>
	);
}
