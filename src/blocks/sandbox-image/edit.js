/**
 * Image Demo
 *
 * It is a common pattern in our projects to need to display an image inside a component and either allow the user to select/upload the image OR to display the image from some post data such as the featured image from a selected post
 *
 * @return {Element} Element to render, in this case an image.
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

// Import WP stuff.
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl, // https://developer.wordpress.org/block-editor/reference-guides/components/select-control/
	TextControl, // https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
	ToggleControl, // https://developer.wordpress.org/block-editor/reference-guides/components/toggle-control/
	__experimentalNumberControl as NumberControl, // https://developer.wordpress.org/block-editor/reference-guides/components/number-control/
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';

// Import our stuff.
// import { Image } from '@bostonuniversity/block-imports';
import { Image } from './imports/index.mjs';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render, in this case an image.
 */
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	// We could destructure the attributes, but for funsies I'm not going to this time...

	const siteUrl = useSelect( ( select ) => {
		const site = select( 'core' ).getSite();
		return site && site.url;
	} );

	// Now you can use siteUrl in your block's logic or render function
	console.log( 'Site URL:', siteUrl );

	// Testing, defined here for quick usage.
	// const demo_focalPoint = { x: 0.5, y: 0.5 };
	// const demo_labelsMediaPlaceholder = {
	// 	title: 'my custom title',
	// 	instructions: 'my custom instructions',
	// };
	// const demo_sourceSizes = [
	// 	{
	// 		srcset: 'thumbnail',
	// 		descriptor: '200w',
	// 		media: '(min-width: 600px)',
	// 	},
	// 	{
	// 		srcset: 'full',
	// 		descriptor: '2x',
	// 		media: '(min-width: 300px)',
	// 	},
	// ];

	/**
	 * Handle updating the mediaId when changed in the Image Component.
	 * @param {number} newMedia The new media object.
	 */
	const handleMediaId = ( newMedia ) => {
		console.log( 'New media ID selected:', newMedia );
		if ( newMedia?.id ) {
			setAttributes( { mediaId: newMedia.id } );
		} else {
			setAttributes( { mediaId: undefined } );
		}
	};

	/**
	 * Handle updating the focal point when changed in the Image Component.
	 * @param {Object} newFocalPoint
	 */
	const handleFocalPoint = ( newFocalPoint ) => {
		console.log( 'New focal point saved:', newFocalPoint );
		// setAttributes( { focalPoint: newFocalPoint } );
	};

	/**
	 * Handle updating the focal point when changed in the Image Component.
	 * @param {Object} newBitz
	 */
	const handleAltText = ( newBitz ) => {
		console.log( 'New focal point saved:', newBitz );
		// setAttributes( { focalPoint: newBitz } );
	};

	// replaces wp image? https://github.com/WordPress/gutenberg/blob/c54fa0beb059a2e3b2d2f5a32f26ab47598be0b6/packages/block-library/src/image/edit.js
	return (
		<>
			<div { ...useBlockProps() }>
				<Image
					// Component setup
					canEditImage={ attributes.canEditImage }
					debug={ attributes.debug }
					tag={ attributes.tag }
					size={ attributes.size }
					sourceSizes={ attributes.sourceSizes } // UNTESTED
					altSource={ attributes.altSource }
					altText={ attributes.altText }
					mediaId={ attributes.mediaId }
					mediaIdFallback={ attributes.mediaIdFallback }
					className={ attributes.className }
					canEditFocalPoint={ attributes.canEditFocalPoint }
					focalPoint={ attributes.focalPoint } // UNTESTED
					//
					// Placeholder overrrides
					label={ attributes.label }
					instructions={ attributes.instructions }
					//
					// MediaPlaceholder overrrides
					labelsMediaPlaceholder={ attributes.labelsMediaPlaceholder } // UNTESTED
					//
					// Functions to send stuff back to the block... @todo
					onSelectMedia={ handleMediaId } // UNTESTED
					onChangeFocalPoint={ handleFocalPoint } // UNTESTED
					onChangeAltText={ handleAltText } // UNTESTED
				/>
			</div>

			{
				<InspectorControls>
					<PanelBody title={ __( 'Block Configurator' ) }>
						<PanelRow>
							Use these controls to adjust the parameters sent to
							the Component:
						</PanelRow>
						<PanelRow>Component setup</PanelRow>
						<PanelRow>
							<ToggleControl
								label="canEditImage"
								help="Can the user change the image?"
								checked={ attributes.canEditImage }
								onChange={ ( canEditImage ) =>
									setAttributes( { canEditImage } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="debug"
								help="@todo"
								checked={ attributes.debug }
								onChange={ ( debug ) =>
									setAttributes( { debug } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="tag"
								help="How should the media be output?"
								value={ attributes.tag }
								options={ [
									{ label: 'figure', value: 'figure' },
									{ label: 'img', value: 'img' },
									{ label: 'picture', value: 'picture' },
								] }
								onChange={ ( tag ) => setAttributes( { tag } ) }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="size"
								help="Use WordPress image size identifier: `thumbnail`, `medium`, `large`, `full`, `your-custom-size`..."
								value={ attributes.size }
								onChange={ ( size ) =>
									setAttributes( { size } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="sourceSizes"
								help="@todo"
								value={ attributes.size }
								onChange={ ( size ) =>
									setAttributes( { size } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="altSource"
								help="Where do we get the alternative text? Leave blank to allow users to enter their own text. To pull from the media object use `alt`, `caption`, `title`, or `description`."
								value={ attributes.altSource }
								options={ [
									{ label: 'alt', value: 'alt' },
									{ label: 'caption', value: 'caption' },
									{ label: 'title', value: 'title' },
									{
										label: 'description',
										value: 'description',
									},
									{ label: 'custom', value: 'custom' },
								] }
								onChange={ ( altSource ) =>
									setAttributes( { altSource } )
								}
							/>
						</PanelRow>

						{ 'custom' === attributes.altSource && (
							<PanelRow>
								<TextControl
									label="altText"
									help="@todo"
									value={ attributes.altText }
									onChange={ ( altText ) =>
										setAttributes( { altText } )
									}
								/>
							</PanelRow>
						) }

						<PanelRow>
							<NumberControl
								label="mediaId"
								help="@todo"
								value={ attributes.mediaId }
								onChange={ ( mediaId ) =>
									setAttributes( { mediaId } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="mediaIdFallback"
								help="@todo"
								value={ attributes.size }
								onChange={ ( size ) =>
									setAttributes( { size } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="className"
								help="Class(es) to add to the component. Default is undefined."
								value={ attributes.className }
								onChange={ ( className ) =>
									setAttributes( { className } )
								}
							/>
						</PanelRow>
						<PanelRow>FocalPointPicker overrrides</PanelRow>
						<PanelRow>
							<ToggleControl
								label="canEditFocalPoint"
								help="Can the user change the image?"
								checked={ attributes.canEditFocalPoint }
								onChange={ ( canEditFocalPoint ) =>
									setAttributes( { canEditFocalPoint } )
								}
							/>
						</PanelRow>

						{ attributes.canEditFocalPoint && (
							<PanelRow>
								<TextControl
									label="focalPoint"
									help="Set a specific focal point. Default is `{ x: 0.5, y: 0.5 }`. Use `false` to disable."
									value={ attributes.focalPoint }
									onChange={ ( focalPoint ) =>
										setAttributes( { focalPoint } )
									}
								/>
							</PanelRow>
						) }

						<PanelRow>Placeholder overrrides</PanelRow>
						<PanelRow>
							<TextControl
								label="label"
								help="The label to show for Placeholder."
								value={ attributes.label }
								onChange={ ( label ) =>
									setAttributes( { label } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="instructions"
								help="The instructions to show for Placeholder."
								value={ attributes.instructions }
								onChange={ ( instructions ) =>
									setAttributes( { instructions } )
								}
							/>
						</PanelRow>
						<PanelRow>MediaPlaceholder overrrides</PanelRow>
						<PanelRow>
							<TextControl
								label="labels"
								help="The title and instructions to show for MediaPlaceholder."
								value={ attributes.labelsMediaPlaceholder }
								onChange={ ( labelsMediaPlaceholder ) =>
									setAttributes( { labelsMediaPlaceholder } )
								}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			}
		</>
	);
}
