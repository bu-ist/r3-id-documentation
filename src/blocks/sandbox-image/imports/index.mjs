/**
 * A loading spinner to be used to indicate some activity is occuring.
 */

// External dependencies.
import classnames from 'classnames';
import { useState, useEffect } from '@wordpress/element';
// import { useSelect } from '@wordpress/data';

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
} from '@wordpress/components';

// import { more } from '@wordpress/icons';

import { __ } from '@wordpress/i18n';

// BU dependencies.
// import { useMedia, LoadingSpinner } from '../../index.js';
import {
	useMedia,
	getImageData,
	LoadingSpinner,
} from '@bostonuniversity/block-imports';
// import { getMediaObj } from './getMediaObj.mjs';

// Import CSS. @todo remove if not needed
// import './editor.scss';

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
		altSource = 'alt',
		mediaId = undefined,
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
		...rest
	} = props;

	// /**
	//  * STATES .. props are fixed, these aint
	//  */
	const [ currentFocalPoint, setFocalPoint ] = useState( focalPoint );
	// const [ currentMedia, setMedia ] = useState( media );
	const [ currentMediaId, setMediaId ] = useState( mediaId );
	// const [ altText, setAltText ] = useState( altSource );
	// const [ imgObj, setImgObj ] = useState( undefined );
	// // const [ hasImage, setHasImage ] = useState( currentMediaId ? true : false );

	// Fetch the media object based on the `currentMediaId`. Should this be useEffect?
	const { mediaObj, isResolvingMedia, hasResolvedMedia } =
		useMedia( currentMediaId ); // @todo so this returns a different object than the media picker; its a waste of resources to get the entire media object from the media picker and then call this function, but they have different structure... optimize somehow?

	// If Debug is set to true, output some helpful information to the console for block developers to utilize media object info in their block development.
	if ( isResolvingMedia ) {
		if ( debug ) {
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
			console.log( 'Image Media Fetched: ', mediaObj );
		}
	}

	/**
	 * @todo...
	 *
	 * @see https://github.com/bu-ist/block-imports/tree/develop/components/LoadingSpinner
	 * @todo this doesn't seem to update/useState?
	 */
	const imgObj = getImageData( mediaObj, size );

	if ( debug ) {
		console.log( 'Image Object: ', imgObj );
	}
	// Is an image set already? @todo state?
	const hasImage = imgObj ? true : false;

	/**
	 * If there is no image set, and the user can't edit the image show placeholder.
	 *
	 * @see https://developer.wordpress.org/block-editor/reference-guides/components/Placeholder/
	 */
	if ( ! hasImage && ! canEditImage ) {
		return (
			<Placeholder
				// Required Props - none

				// Customizable Props
				className="bu-components-image-placeholder"
				label={ label }
				instructions={ instructions }

				// @todo decide if any of these or other props should be defined or malleable
			/>
		);
	}

	/**
	 * If there is no image set, but the user can edit the image, show Media Placeholder.
	 *
	 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-placeholder/README.md
	 */
	if ( ! hasImage ) {
		return (
			<MediaPlaceholder
				// Required Props
				onSelect={ ( media ) => setMediaId( media.id ) }
				// Customizable Props
				className="bu-components-image-mediaplaceholder"
				labels={ labels }
				allowedTypes={ [ 'image' ] }
				accept="image/*"

				// @todo decide if any of these or other props should be defined or malleable
			/>
		);
	}

	// alt, caption, title, description
	let altText = '';
	if ( altSource === 'alt' ) {
		altText = imgObj.alt;
	} else if ( altSource === 'caption' ) {
		altText = imgObj.caption;
	} else if ( altSource === 'title' ) {
		altText = imgObj.title;
	} else if ( altSource === 'description' ) {
		altText = imgObj.description;
	} else {
		altText = altSource;
	}
	// stickk all this in useEffect

	// srcset
	const sources = [];
	if ( tag === 'picture' ) {
		const srcset = {
			sources: [
				{
					srcset: getImageData( mediaObj, 'medium' ).src,
					media: '(min-width: 600px)',
					type: imgObj.mime_type,
				},
				{
					srcset: getImageData( mediaObj, 'large' ).src,
					media: '(min-width: 300px)',
				},
			],
		};
		for ( let i = 0; i < srcset.sources.length; i++ ) {
			const source = srcset.sources[ i ];
			sources.push(
				<source
					srcSet={ source.srcset }
					media={ source.media }
					type={ source.type }
				/>
			);
		}
	}

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
														setMediaId( media.id )
													}
													value={ currentMediaId }
													allowedTypes={ [ 'image' ] }
													render={ ( { open } ) => (
														<IconButton
															className="bu-components-image-media-edit-button"
															onClick={ open }
															icon="edit"
															isLarge
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
													setMediaId( undefined )
												}
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
									value={ currentFocalPoint }
									onChange={ setFocalPoint }
								/>
							</PanelRow>
						) }
					</PanelBody>
				</InspectorControls>
			) }
			{ /* Always show the image. */ }
			{ tag === 'picture' && (
				<>
					<h3>picture</h3>
					<picture className={ getClasses( className ) } { ...rest }>
						{ sources }
						<img src={ imgObj.src } alt={ altText } />
					</picture>
				</>
			) }
			{ tag === 'figure' && (
				<>
					<h3>figure</h3>
					<figure className={ getClasses( className ) } { ...rest }>
						<img src={ imgObj.src } alt={ altText } />
						<figcaption>{ altText }</figcaption>
					</figure>
				</>
			) }
			{ tag === 'img' && (
				<>
					<h3>img</h3>
					<img
						className={ getClasses( className ) }
						src={ imgObj.src }
						alt={ altText }
						{ ...rest }
					/>
				</>
			) }
		</div>
	);
};
// npx wp-scripts lint-js ./utils --fix
