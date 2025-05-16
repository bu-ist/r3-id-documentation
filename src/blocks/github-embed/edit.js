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
import { useBlockProps, PlainText } from '@wordpress/block-editor';

/**
 * Import editor partial code.
 */
import { InspectorPanel } from './modules/InspectorPanel.mjs';

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
	const { code } = attributes;

	const updateCode = ( val ) => {
		setAttributes( { code: val } );
	};

	return (
		<>
			<InspectorPanel { ...props } />
			<div { ...useBlockProps() }>
				<div>
					<PlainText
						placeholder={ __( 'code', 'labs-plugin-blocks' ) }
						tagName="code"
						classname="bu-block-github-embed-code"
						onChange={ updateCode }
						value={ code }
						allowedFormats={ [] }
					/>
				</div>
			</div>
		</>
	);
}
