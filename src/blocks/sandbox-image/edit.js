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

import { useSelect } from '@wordpress/data';

import { store as coreStore } from '@wordpress/core-data';
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

	// eval https://www.google.com/search?q=js+eval&oq=js+eval&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDINCAgQABiGAxiABBiKBTINCAkQABiGAxiABBiKBdIBCDIyMzVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
	const myOnSelectCallback = () => {
		// the whole media element as an object
		console.log( 'myOnSelectCallback' );
	};
	const myOnRemoveCallback = () => {
		console.log( 'myOnRemoveCallback' );
	};
	const myOnChangeFocalPointCallback = () => {
		console.log( 'myOnChangeFocalPointCallback' );
	};
	const focalPointShit = { x: 0.15, y: 0.85 }; // needs to be array format, not string
	const my_allowedTypes = [ 'audio' ];

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
			console.log(userObject);
			console.log(typeof userObject);
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
					canEditImage={ attributes.canEditImage } // what to return attributes.canEditImage
					// debug={ true }
					// tag={ attributes.tag }
					// size={ attributes.size }
					// altSource={ attributes.altSource }
					// mediaId={  } // 381625 or 381626 attributes.mediaId
					// className={ attributes.className }
					//
					// Placeholder overrrides
					labelsPlaceholder={ StringToObjectConverter(
						attributes.labelsPlaceholder
					) }
					//
					// MediaPlaceholder overrrides
					labelsMediaPlaceholder={ StringToObjectConverter(
						attributes.labelsMediaPlaceholder
					) }
					// allowedTypes={ StringToArrayConverter(
					// 	// needs to be an array; @todo seems to be working for 1 second then shows images...
					// 	attributes.allowedTypes
					// ) }
					allowedTypes={ [ 'audio' ] } // this works
					accept={ attributes.accept }
					//
					// LoadingSpinner overrides
					// not planned
					//
					// InspectorControls overrecids, we might not need these, maybe event listener works?
					// canOverrideImage={ attributes.canOverrideImage } // inspector panel
					// canSetFocalPoint={true} // setting to enable or not
					// focalPoint={ focalPointShit }
					// onChangeFocalPointCallback={ myOnChangeFocalPointCallback }
					// onSelectCallback={ myOnSelectCallback }
					// onRemoveCallback={ myOnRemoveCallback }
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
						<PanelRow>Placeholder overrrides</PanelRow>
						<PanelRow>
							<TextControl
								label="labelsPlaceholder"
								help="The title and instructions to show for Placeholder."
								value={ attributes.labelsPlaceholder }
								onChange={ ( labelsPlaceholder ) =>
									setAttributes( { labelsPlaceholder } )
								}
							/>
						</PanelRow>
						<PanelRow>MediaPlaceholder overrrides</PanelRow>
						<PanelRow>
							<TextControl
								label="accept"
								help="Tells the browser which file types can be uploaded."
								value={ attributes.accept }
								onChange={ ( accept ) =>
									setAttributes( { accept } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="allowedTypes"
								help="The types of the media to upload/select from the media library."
								value={ attributes.allowedTypes }
								onChange={ ( allowedTypes ) =>
									setAttributes( { allowedTypes } )
								}
							/>
						</PanelRow>
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
						<PanelRow>The actual component Setup...</PanelRow>
						<PanelRow>InspectorControls overrecids</PanelRow>
						{ /* <SelectControl
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
					<TextControl
						label="size"
						help="Use WordPress image size identifier: `thumbnail`, `medium`, `large`, `full`, `your-custom-size`..."
						value={ attributes.size }
						onChange={ ( size ) => setAttributes( { size } ) }
					/>
					<TextControl
						label="altSource"
						help="Where do we get the alternative text? Leave blank to allow users to enter their own text. To pull from the media object use `alt`, `caption`, `title`, or `description`."
						value={ attributes.altSource }
						onChange={ ( altSource ) =>
							setAttributes( { altSource } )
						}
					/>
					<TextControl
						label="allowedTypes"
						help="@todo"
						value={ attributes.allowedTypes }
						onChange={ ( allowedTypes ) =>
							setAttributes( { allowedTypes } )
						}
					/>
					<ToggleControl
						label="canOverrideImage"
						help="Can the user change the image?"
						checked={ attributes.canOverrideImage }
						onChange={ ( canOverrideImage ) =>
							setAttributes( { canOverrideImage } )
						}
					/>
					<TextControl
						label="focalPoint"
						help="Set a specific focal point. Default is `{ x: 0.5, y: 0.5 }`. Use `false` to disable."
						value={ attributes.focalPoint }
						onChange={ ( focalPoint ) =>
							setAttributes( { focalPoint } )
						}
					/>
					<TextControl
						label="className"
						help="Class(es) to add to the component. Default is undefined."
						value={ attributes.className }
						onChange={ ( className ) =>
							setAttributes( { className } )
						}
					/>
					<TextControl
						label="mediaId"
						help="@todo"
						value={ attributes.mediaId }
						onChange={ ( mediaId ) => setAttributes( { mediaId } ) }
					/>
					<TextControl
						label="onSelect"
						help="@todo"
						value={ myOnSelect }
						onChange={ ( onSelect ) =>
							setAttributes( { onSelect } )
						}
					/>
					<TextControl
						label="onRemove"
						help="@todo"
						value={ attributes.onRemove }
						onChange={ ( onRemove ) =>
							setAttributes( { onRemove } )
						}
					/>
					<TextControl
						label="onChangeFocalPoint"
						help="@todo"
						value={ attributes.onChangeFocalPoint }
						onChange={ ( onChangeFocalPoint ) =>
							setAttributes( { onChangeFocalPoint } )
						}
					/>
					<ToggleControl
						label="debug"
						help="@todo"
						checked={ attributes.debug }
						onChange={ ( debug ) => setAttributes( { debug } ) }
					/> */ }
					</PanelBody>
				</InspectorControls>
			}
		</>
	);
}
