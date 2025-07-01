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

// Import our stuff.
import { Image } from '@bostonuniversity/block-imports';

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

	const myOnSelect = ( media ) => {
		// the whole media element as an object
		console.log( media );
		setAttributes( { mediaId: media.id } );
	};
	const myOnRemove = ( cbf ) => {
		console.log( cbf );
		setAttributes( { mediaId: null } );
	};
	const myOnChangeFocalPoint = ( cbf ) => {
		console.log( cbf );
	};
	const focalPointShit = { x: 0.15, y: 0.85 }; // needs to be array format, not string
	const labelsShit = { title: 'my title', instructions: 'my instructions' };

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Block Configurator' ) }>
					<PanelRow>
						Use these controls to adjust the parameters sent to the
						Component:
					</PanelRow>
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
						label="canEditImage"
						help="Can the user change the image?"
						checked={ attributes.canEditImage }
						onChange={ ( canEditImage ) =>
							setAttributes( { canEditImage } )
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
					<TextControl
						label="labels"
						help="@todo An object that can contain a title and instructions properties. These properties are passed to the placeholder component as label and instructions respectively. https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-placeholder/README.md"
						value={ attributes.labels }
						onChange={ ( labels ) => setAttributes( { labels } ) }
					/>
					<ToggleControl
						label="debug"
						help="@todo"
						checked={ attributes.debug }
						onChange={ ( debug ) => setAttributes( { debug } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<Image
					// Setup
					tag={ attributes.tag }
					size={ attributes.size }
					altSource={ attributes.altSource }
					allowedTypes={ attributes.allowedTypes }
					canEditImage={ attributes.canEditImage }
					canOverrideImage={ attributes.canOverrideImage }
					focalPoint={ focalPointShit }
					// Basic
					// 381625 or 381626
					mediaId={ attributes.mediaId }
					className={ attributes.className }
					// Functions
					onSelect={ myOnSelect }
					onRemove={ myOnRemove }
					onChangeFocalPoint={ myOnChangeFocalPoint }
					// ??
					labels={ labelsShit }
					debug={ true }
				/>
			</div>
		</>
	);
}
