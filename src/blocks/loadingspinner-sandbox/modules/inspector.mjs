/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

// Import WP assets.
import { InspectorControls } from '@wordpress/block-editor';

// Import WP assets.
import {
	PanelBody,
	PanelRow,
	TextControl, // https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
	ToggleControl, // https://developer.wordpress.org/block-editor/reference-guides/components/toggle-control/
} from '@wordpress/components';

// React requires that the first letter of components be capitalized. JSX will use this capitalization to tell the difference between an HTML tag and a component instance. If the first letter of a name is capitalized, then JSX knows it's a component instance; if not, then it's an HTML element.
export const LoadingSpinnerInspectorControls = ( {
	attributes,
	setAttributes,
} ) => {
	const {
		text,
		shadow,
		className,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Block Configurator' ) }
			>
				<PanelRow>Use these controls to adjust the parameters sent to the Component:</PanelRow>
				<TextControl
					label="text"
					help='Text that appears before the spinner image. Default is undefined.'
					value={ text }
					onChange={ ( text ) => setAttributes( { text } ) }
				/>
				<ToggleControl
					label="shadow"
					help="Show a shadow under the text? Default is true."
					checked={ shadow }
					onChange={ ( shadow ) => setAttributes( { shadow } ) }
				/>
				<TextControl
					label="className"
					help="Class(es) to add to the component. Default is undefined."
					value={ className }
					onChange={ ( className ) => setAttributes( { className } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};
