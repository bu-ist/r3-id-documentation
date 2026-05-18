/**
 * BU's take on the Image component.
 */

// External dependencies.
import classnames from 'classnames';
import { useState } from '@wordpress/element';

import {
	MediaPlaceholder,
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
} from '@wordpress/block-editor';

import {
	Button,
	IconButton,
	FocalPointPicker,
	PanelBody,
	PanelRow,
	Placeholder,
	TextControl, // https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

// BU dependencies.
import {
	useMedia,
	getImageData,
	LoadingSpinner,
} from '@bostonuniversity/block-imports';

/**
 * Returns the class list for the component based on the current settings.
 *
 * @param {string} className Additional classes assigned to the component.
 */
const getClasses = ( className ) =>
	classnames( 'bu-components-image', {
		[ className ]: className,
	} );

/**
 * Export component.
 *
 * @param  props
 * @return {Element} Element to render, in this case an DIV.
 */
export const Image = ( props ) => {
	const {
		// Setup
		canEditImage = true,
		debug = true,
		tag = 'img',
		size = 'thumbnail',
		sourceSizes = [],
		altSource = 'alt',
		altText = undefined,
		mediaId = undefined,
		mediaIdFallback = undefined,
		className = undefined,
		canEditFocalPoint = true,
		focalPoint = { x: 0.5, y: 0.5 },
		// Placeholder
		label = 'Placeholder label...',
		instructions = 'Placeholder instructions...',
		// MediaPlaceholder
		labels = {
			title: 'MediaPlaceholder label...',
			instructions: 'MediaPlaceholder instructions...',
		},
		//
		// Functions to send stuff back to the block... @todo
		onSelectMedia = () => {},
		onChangeFocalPoint = () => {},
		onChangeAltText = () => {},
		...rest // Additional properties can be passed that will be output on the IMG element such as data attributes.
	} = props;

	/**
	 * States.
	 */
	// const [ currentFocalPoint, onChangeFocalPoint ] = useState( focalPoint );
	// const [ mediaId, onSelectMedia ] = useState( mediaId );

	/**
	 * If there is no image set, and the user can't edit the image show the fallback and a message (Placeholder).
	 *
	 * @see https://developer.wordpress.org/block-editor/reference-guides/components/Placeholder/
	 */
	if ( ! mediaId && ! canEditImage ) {
		return (
			<>
				<img
					className="bu-components-image-fallback"
					src={ mediaIdFallback }
					alt=""
				/>
				<Placeholder
					// Required Props - none

					// Customizable Props
					className="bu-components-image-placeholder"
					label={ label }
					instructions={ instructions }

					// @todo decide if any of these or other props should be defined or malleable
				/>
			</>
		);
	}

	/**
	 * If there is no image set, but the user can edit the image, show a picker (Media Placeholder).
	 *
	 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-placeholder/README.md
	 */
	if ( ! mediaId ) {
		return (
			<MediaPlaceholder
				// Required Props
				onSelect={ ( media ) => onSelectMedia( media ) }
				// Customizable Props
				className="bu-components-image-mediaplaceholder"
				labels={ labels }
				allowedTypes={ [ 'image' ] }
				accept="image/*"

				// @todo decide if any of these or other props should be defined or malleable
			/>
		);
	}

	let imgObj = false;
	const myAlt = '';

	// Fetch the media object based on the `mediaId`. Should this be useEffect?
	const { mediaObj, isResolvingMedia, hasResolvedMedia } =
		useMedia( mediaId ); // @todo so this returns a different object than the media picker; its a waste of resources to get the entire media object from the media picker and then call this function, but they have different structure... optimize somehow?

	// If Debug is set to true, output some helpful information to the console for block developers to utilize media object info in their block development.
	if ( isResolvingMedia ) {
		if ( debug ) {
			// eslint-disable-next-line no-console
			console.log( 'Image Media Fetch in Progress: ', isResolvingMedia );
		}
		return (
			<LoadingSpinner
				// Required Props - none

				// Customizable Props
				text="Loading..."

				// @todo decide if any of these or other props should be defined or malleable
			/>
		);
	}

	// If Debug is set to true, output some helpful information to the console for block developers to utilize media object info in their block development.

	if ( hasResolvedMedia ) {
		if ( debug ) {
			// eslint-disable-next-line no-console
			console.log( 'Image Media Fetched: ', mediaObj );
		}
	}

	if ( mediaObj ) {
		imgObj = getImageData( mediaObj, size, 'full' );

		if ( debug ) {
			// eslint-disable-next-line no-console
			console.log( 'Image Object: ', imgObj );
		}
		if ( ! imgObj ) {
			return (
				<>
					<img
						className="bu-components-image-fallback"
						src={ mediaIdFallback }
						alt=""
					/>
					<Placeholder
						// Required Props - none

						// Customizable Props
						className="bu-components-image-placeholder"
						label="uh oh { size } not found"

						// @todo decide if any of these or other props should be defined or malleable
					/>
				</>
			);
			// @todo fallback...
		}
	}

	// Is an image set already?
	// const hasImage = imgObj ? true : false;

	/**
	 * Build the alt text attribute.
	 */
	let altTextOutput = '';
	if ( altSource === 'alt' ) {
		altTextOutput = imgObj.alt;
	} else if ( altSource === 'caption' ) {
		altTextOutput = imgObj.caption;
	} else if ( altSource === 'title' ) {
		altTextOutput = imgObj.title;
	} else if ( altSource === 'description' ) {
		altTextOutput = imgObj.description;
	} else {
		altTextOutput = altText;
	}

	/**
	 * Build the image sources, if defined.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/source#sizes
	 */
	// if ( debug ) {
	// 	// eslint-disable-next-line no-console
	// 	console.log( 'sourceSizes: ', sourceSizes );
	// }
	// const sourcesTag = []; // tags for picture
	// let srcsetAttribute = ''; // attribute for img
	// const srcsetAttributeArray = []; // holder for srcsetAttribute before using join
	// //
	// sourceSizes.forEach( function ( imgSource ) {
	// 	const imgSourceObj = getImageData( mediaObj, imgSource.srcset );
	// 	if ( debug ) {
	// 		// eslint-disable-next-line no-console
	// 		console.log( 'imgSource: ', imgSource );
	// 		// eslint-disable-next-line no-console
	// 		console.log( 'imgSourceObj: ', imgSourceObj );
	// 	}
	// 	if ( imgSourceObj ) {
	// 		// for picture
	// 		sourcesTag.push(
	// 			<source
	// 				srcSet={ imgSourceObj.src }
	// 				media={ imgSource.media }
	// 				type={ imgObj.mime_type }
	// 			/>
	// 		);
	// 		// for imgs
	// 		srcsetAttributeArray.push(
	// 			`${ imgSourceObj.src } ${ imgSource.descriptor }`.trim()
	// 		);
	// 	}
	// } );
	// srcsetAttribute = srcsetAttributeArray.join( ', ' );
	// if ( debug ) {
	// 	// eslint-disable-next-line no-console
	// 	console.log( 'sourcesTag: ', sourcesTag );
	// 	// eslint-disable-next-line no-console
	// 	console.log( 'srcsetAttribute: ', srcsetAttribute );
	// }
	// // }

	/**
	 * Finally, something interesting to display. We have a mediaObject, let's show it!
	 */
	return (
		<div>
			{ /* Show InspectorControls if the user is able to replace the image or change the focal point. */ }
			{ ( canEditImage || canEditFocalPoint ) && (
				<InspectorControls>
					<PanelBody title={ __( 'Image Settings' ) }>
						{ canEditImage && (
							<>
								<h2>{ __( 'Replace Image' ) }</h2>
								<PanelRow>
									{ canEditImage && (
										// https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-upload/README.md
										<>
											<MediaUploadCheck>
												<MediaUpload
													onSelect={ ( media ) =>
														onSelectMedia( media )
													}
													value={ mediaId }
													allowedTypes={ [ 'image' ] }
													render={ ( { open } ) => (
														<IconButton
															className="bu-components-image-media-edit-button"
															onClick={ open }
															icon="edit"
															isLarge
															isPrimary // @todo deprecated; see https://github.com/WordPress/gutenberg/pull/31713
														>
															{ __(
																'Edit Media'
															) }
														</IconButton>
													) }
												/>
											</MediaUploadCheck>
											<Button
												className="bu-components-image-media-remove-button"
												onClick={ () =>
													onSelectMedia( undefined )
												}
												isSmall // @todo deprecated; see https://developer.wordpress.org/block-editor/reference-guides/components/button/#size
												isSecondary // @todo deprecated; see https://github.com/WordPress/gutenberg/pull/31713
												isDestructive
											>
												{ __( 'Remove Media' ) }
											</Button>
										</>
									) }
								</PanelRow>
							</>
						) }
						{ canEditFocalPoint && (
							<PanelRow>
								{ /* https://developer.wordpress.org/block-editor/reference-guides/components/focal-point-picker/ */ }
								<FocalPointPicker
									className="bu-components-image-media-edit-focalpoint"
									label={ __( 'Focal Point Picker' ) }
									url={ imgObj.src }
									value={ focalPoint }
									onChange={ onChangeFocalPoint }
								/>
							</PanelRow>
						) }
						{ 'custom' === altSource && (
							<PanelRow>
								sumtin sumtin
								<TextControl
									label="my alt text"
									help="@todo"
									value={ myAlt }
									onChange={ onChangeAltText }
								/>
							</PanelRow>
						) }
					</PanelBody>
				</InspectorControls>
			) }
			{ /* Always show the image. */ }
			{ tag === 'picture' && (
				<picture className={ getClasses( className ) }>
					{/* { sourcesTag } */}
					<img src={ imgObj.src } alt={ altTextOutput } { ...rest } />
				</picture>
			) }
			{ tag === 'figure' && (
				<figure className={ getClasses( className ) }>
					<img
						src={ imgObj.src }
						alt={ altTextOutput }
						// srcSet={ srcsetAttribute }
						{ ...rest }
					/>
					<figcaption>{ altTextOutput }</figcaption>
				</figure>
			) }
			{ tag === 'img' && (
				<img
					className={ getClasses( className ) }
					// srcSet={ srcsetAttribute }
					src={ imgObj.src }
					alt={ altTextOutput }
					{ ...rest }
				/>
			) }
		</div>
	);
};
