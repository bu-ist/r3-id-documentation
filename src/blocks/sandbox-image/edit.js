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
} from '@wordpress/components';

// import { useSelect } from '@wordpress/data';

// import { store as coreStore } from '@wordpress/core-data';
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

	function StringToObjectConverter( userString ) {
		if ( ! userString ) {
			return undefined;
		}
		let userObject = {};

		try {
			// Wrap the object literal string in parentheses for eval() to parse it as an expression
			userObject = eval( '(' + userString + ')' );
			return userObject;
		} catch ( error ) {
			console.error( 'Error parsing userString:', error );
			// Handle the error appropriately, e.g., set a default object or display an error message
			return undefined;
		}
	}

	function StringToArrayConverter( userString ) {
		if ( ! userString ) {
			return undefined;
		}
		let userObject = {};

		try {
			userObject = eval( userString );
			console.log( userObject );
			console.log( typeof userObject );
			return userObject;
		} catch ( error ) {
			console.error( 'Error parsing userString:', error );
			// Handle the error appropriately, e.g., set a default object or display an error message
			return undefined;
		}
	}

	// replaces wp image? https://github.com/WordPress/gutenberg/blob/c54fa0beb059a2e3b2d2f5a32f26ab47598be0b6/packages/block-library/src/image/edit.js
	return (
		<>
			<div { ...useBlockProps() }>
				<Image
					// Component setup
					canEditImage={ attributes.canEditImage } // works
					debug={ true } // works
					tag={ attributes.tag } // works
					size={ attributes.size } // FAILS
					altSource={ attributes.altSource } // works
					mediaId={ 381625 } // 381625 or 381626 attributes.mediaId // use 381625 or 381626 or undefined
					className={ attributes.className } // works
					canSetFocalPoint={ attributes.canSetFocalPoint } // FAILS
					focalPoint={ StringToObjectConverter(
						attributes.focalPoint // FAILS
					) }
					//
					// Placeholder overrrides
					label={ attributes.label } // works
					instructions={ attributes.instructions } // works
					//
					// MediaPlaceholder overrrides
					labelsMediaPlaceholder={ StringToObjectConverter(
						attributes.labelsMediaPlaceholder // FAILS
					) }
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
								label="altSource"
								help="Where do we get the alternative text? Leave blank to allow users to enter their own text. To pull from the media object use `alt`, `caption`, `title`, or `description`."
								value={ attributes.altSource }
								onChange={ ( altSource ) =>
									setAttributes( { altSource } )
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
						<PanelRow>
							<TextControl
								label="mediaId"
								help="@todo"
								value={ attributes.mediaId }
								onChange={ ( mediaId ) =>
									setAttributes( { mediaId } )
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
								label="labelsMediaPlaceholder"
								help="The title and instructions to show for MediaPlaceholder."
								value={ attributes.labelsMediaPlaceholder }
								onChange={ ( labelsMediaPlaceholder ) =>
									setAttributes( { labelsMediaPlaceholder } )
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
					</PanelBody>
				</InspectorControls>
			}
		</>
	);
}
