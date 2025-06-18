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
	const someShit = { x: 0.15, y: 0.85 }; // needs to be array format, not string

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Block Configurator' ) }>
					<PanelRow>
						Use these controls to adjust the parameters sent to the
						Component:
					</PanelRow>
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
						label="size"
						help="thumbnail, medium, large, full, custom..."
						value={ attributes.size }
						onChange={ ( size ) => setAttributes( { size } ) }
					/>
					<SelectControl
						label="tag"
						help="@todo"
						value={ attributes.tag }
						options={ [
							{ label: 'figure', value: 'figure' },
							{ label: 'img', value: 'img' },
							{ label: 'picture', value: 'picture' },
						] }
						onChange={ ( tag ) => setAttributes( { tag } ) }
					/>
					<TextControl
						label="altSource"
						help="alt, caption, title, description, custom..."
						value={ attributes.altSource }
						onChange={ ( altSource ) =>
							setAttributes( { altSource } )
						}
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
						label="focalPoint"
						help="@todo"
						value={ attributes.focalPoint }
						onChange={ ( focalPoint ) =>
							setAttributes( { focalPoint } )
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
						help="@todo"
						value={ attributes.labels }
						onChange={ ( labels ) => setAttributes( { labels } ) }
					/>
					<ToggleControl
						label="canEditImage"
						help="@todo"
						checked={ attributes.canEditImage }
						onChange={ ( canEditImage ) =>
							setAttributes( { canEditImage } )
						}
					/>
					<ToggleControl
						label="canOverrideImage"
						help="@todo"
						checked={ attributes.canOverrideImage }
						onChange={ ( canOverrideImage ) =>
							setAttributes( { canOverrideImage } )
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
						label="debug"
						help="@todo"
						checked={ attributes.debug }
						onChange={ ( debug ) => setAttributes( { debug } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<Image
					className={ attributes.className }
					mediaId={ 381606 }
					size={ attributes.size }
					tag={ attributes.tag }
					altSource={ attributes.altSource }
					onSelect={ myOnSelect }
					onRemove={ myOnRemove }
					focalPoint={ someShit }
					onChangeFocalPoint={ myOnChangeFocalPoint }
					labels={ attributes.labels }
					canEditImage={ attributes.canEditImage }
					canOverrideImage={ attributes.canOverrideImage }
					allowedTypes={ attributes.allowedTypes }
					debug={ attributes.debug }
				/>
			</div>
		</>
	);
}
