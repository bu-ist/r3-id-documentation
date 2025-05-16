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
	SelectControl, // https://developer.wordpress.org/block-editor/reference-guides/components/select-control/
	TextControl, // https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
	ToggleControl, // https://developer.wordpress.org/block-editor/reference-guides/components/toggle-control/
} from '@wordpress/components';

// React requires that the first letter of components be capitalized. JSX will use this capitalization to tell the difference between an HTML tag and a component instance. If the first letter of a name is capitalized, then JSX knows it's a component instance; if not, then it's an HTML element.
export const ImageInspectorControls = ( {
	attributes,
	setAttributes,
} ) => {
	const {
		className,
		mediaId,
		size,
		tag,
		altSource,
		onSelect,
		onRemove,
		focalPoint,
		onChangeFocalPoint,
		labels,
		canEditImage,
		canOverrideImage,
		allowedTypes,
		debug
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Block Configurator' ) }
			>
				<PanelRow>Use these controls to adjust the parameters sent to the Component:</PanelRow>
				<TextControl
					label="className"
					help="Class(es) to add to the component. Default is undefined."
					value={ className }
					onChange={ ( className ) => setAttributes( { className } ) }
				/>
				<TextControl
					label="mediaId"
					help="todo."
					value={ mediaId }
					onChange={ ( mediaId ) => setAttributes( { mediaId } ) }
				/>
				<SelectControl
					label="size"
					help="todo."
					value={ size }
					options={ [
						{ label: 'thumbnail', value: 'thumbnail' },
						{ label: 'medium', value: 'medium' },
						{ label: 'large', value: 'large' },
						{ label: 'full', value: 'full' },
					] }
					onChange={ ( size ) => setAttributes( { size } ) }
				/>
				<SelectControl
					label="tag"
					help="todo."
					value={ tag }
					options={ [
						{ label: 'figure', value: 'figure' },
						{ label: 'img', value: 'img' },
						{ label: 'picture', value: 'picture' },
					] }
					onChange={ ( tag ) => setAttributes( { tag } ) }
				/>
				<SelectControl
					label="altSource"
					help="todo."
					value={ altSource }
					options={ [
						{ label: 'alt', value: 'alt' },
						{ label: 'caption', value: 'caption' },
						{ label: 'title', value: 'title' },
						{ label: 'description', value: 'description' },
						{ label: 'custom', value: 'custom' },
					] }
					onChange={ ( altSource ) => setAttributes( { altSource } ) }
				/>
				<TextControl
					label="onSelect"
					help="todo."
					value={ onSelect }
					onChange={ ( onSelect ) => setAttributes( { onSelect } ) }
				/>
				<TextControl
					label="onRemove"
					help="todo."
					value={ onRemove }
					onChange={ ( onRemove ) => setAttributes( { onRemove } ) }
				/>
				<TextControl
					label="focalPoint"
					help="todo."
					value={ focalPoint }
					onChange={ ( focalPoint ) => setAttributes( { focalPoint } ) }
				/>
				<TextControl
					label="onChangeFocalPoint"
					help="todo."
					value={ onChangeFocalPoint }
					onChange={ ( onChangeFocalPoint ) => setAttributes( { onChangeFocalPoint } ) }
				/>
				<TextControl
					label="labels"
					help="todo."
					value={ labels }
					onChange={ ( labels ) => setAttributes( { labels } ) }
				/>
				<ToggleControl
					label="canEditImage"
					help="todo."
					checked={ canEditImage }
					onChange={ ( canEditImage ) => setAttributes( { canEditImage } ) }
				/>
				<ToggleControl
					label="canOverrideImage"
					help="todo."
					checked={ canOverrideImage }
					onChange={ ( canOverrideImage ) => setAttributes( { canOverrideImage } ) }
				/>
				<TextControl
					label="allowedTypes"
					help="todo."
					value={ allowedTypes }
					onChange={ ( allowedTypes ) => setAttributes( { allowedTypes } ) }
				/>
				<ToggleControl
					label="debug"
					help="todo."
					checked={ debug }
					onChange={ ( debug ) => setAttributes( { debug } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};
