/**
 * A loading spinner to be used to indicate some activity is occuring.
 */

// External dependencies.
import classnames from 'classnames';

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

import { more } from '@wordpress/icons';

import { __ } from '@wordpress/i18n';

// BU dependencies.
// import { useMedia, LoadingSpinner } from '../../index.js';
import { useMedia, LoadingSpinner } from '@bostonuniversity/block-imports';

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
		// Placeholder
		labelsPlaceholder = {
			title: 'Placeholder label...',
			instructions: 'Placeholder instructions...',
		},
		// MediaPlaceholder
		labelsMediaPlaceholder = {
			title: 'MediaPlaceholder label...',
			instructions: 'MediaPlaceholder instructions...',
		},
		allowedTypes = [ 'audio' ],
		accept = 'audio/*', // @todo we can't just implode allowedTypes to get the sting because the format is different
		//
		//
		//
		//
		//
		tag = 'img',
		size = 'thumbnail',
		altSource = 'alt',
		canOverrideImage = true,
		debug = false,
		// 381625 or 381626
		mediaId = undefined,
		className = undefined,
		// Functions
		onSelectCallback = undefined, // callbacks https://github.com/bu-ist/r-graduate-education/pull/257/files#diff-7b74753b11d6f004c1d077fd96f098fa14cafc45a57570f95e38bd1b9dffe47d
		onRemoveCallback = undefined,
		// Focal
		// setting to enable or not
		focalPoint = { x: 0.5, y: 0.5 },
		onChangeFocalPointCallback = undefined,
		// https://developer.wordpress.org/block-editor/reference-guides/components/focal-point-picker/
		...rest
	} = props;
	// console.log( allowedTypes );
	// console.log( accept );
	// Is an image set already?
	const hasImage = mediaId ? true : false;

	// Fetch the media object based on the `mediaId`.
	const { mediaObj, isResolvingMedia, hasResolvedMedia } =
		useMedia( mediaId );

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
				className="bu-components-image-placeholder" // @todo allow override or determine hardcoded value
				label={ labelsPlaceholder.title } // @todo allow override or determine hardcoded value
				instructions={ labelsPlaceholder.instructions } // @todo allow override or determine hardcoded value

				// @todo decide if any other props should be defined or malleable
			/>
		);
	}

	/**
	 * If there is no image set, but the user can edit the image, show Media Placeholder.
	 *
	 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-placeholder/README.md
	 */
	if ( ! hasImage && canEditImage ) {
		return (
			<MediaPlaceholder
				// Required Props
				// onSelect={ onSelect } // @todo ...

				// Customizable Props
				className="bu-components-image-mediaplaceholder" // @todo allow override or determine hardcoded value
				labels={ labelsMediaPlaceholder }
				// `allowedTypes` and `accept` are similar... but the difference is the format and the fact that this property affects the behavior of FormFileUpload while allowedTypes affects the behavior MediaUpload.
				allowedTypes={ allowedTypes } // @todo allow override or determine hardcoded value
				accept={ accept } // @todo allow override or determine hardcoded value

				// @todo decide if any other props should be defined or malleable
			/>
		);
	}

	// If Debug is set to true, output some helpful information to the console for block developers to utilize media object info in their block development.
	if ( debug ) {
		if ( isResolvingMedia ) {
			console.log( 'Image Media Fetch in Progress: ', isResolvingMedia );
		}
		if ( hasResolvedMedia ) {
			console.log( 'Image Media Fetched: ', mediaObj );
		}
	}

	/**
	 * If media is being fetched, just show the spinner.
	 *
	 * @see https://github.com/bu-ist/block-imports/tree/develop/components/LoadingSpinner
	 */
	if ( isResolvingMedia ) {
		return (
			<LoadingSpinner
				// Required Props - none

				// Customizable Props
				text="Loading..." // @todo allow override or determine hardcoded value

				// @todo decide if any other props should be defined or malleable
			/>
		);
	}

	// if hasImage && ! canEditImage OR hasImage && canEditImage - proceed...

	/**
	 * @todo...
	 *
	 * @see https://github.com/bu-ist/block-imports/tree/develop/components/LoadingSpinner
	 * @todo this doesn't seem to update/useState?
	 */
	if ( ! mediaObj ) {
		return <p>mediaObj undefined for { mediaId }</p>;
	}

	// return <div>nots... { mediaId }</div>;

	return (
		<div>
			{ /*  */ }
			{ ( canOverrideImage || onRemove || displayFocalPointPicker ) && (
				<InspectorControls>
					<PanelBody title={ __( 'Image Settings' ) }>
						{ ( canOverrideImage || onRemove ) && (
							<>
								<h2>{ __( 'Selected Image' ) }</h2>
								<PanelRow>
									{ canOverrideImage && (
										<MediaUploadCheck>
											<MediaUpload
												onSelect={ onSelect }
												value={ mediaId }
												allowedTypes={ allowedTypes }
												render={ ( { open } ) => (
													<IconButton
														className="bu-components-image-media-edit-button"
														onClick={ open }
														icon="edit"
														label={ __(
															'Edit Media'
														) }
														isDefault
														isLarge
													>
														{ __( 'Edit' ) }
													</IconButton>
												) }
											/>
										</MediaUploadCheck>
									) }
									{ onRemove && (
										<>
											<Button
												className="bu-components-image-media-remove-button"
												onClick={ onRemove }
												label={ 'Remove Media' }
												isLink
											>
												{ __( 'Remove Media' ) }
											</Button>
										</>
									) }
								</PanelRow>
							</>
						) }
						{ displayFocalPointPicker && (
							<PanelRow>
								{ /* https://developer.wordpress.org/block-editor/reference-guides/components/focal-point-picker/ */ }
								<FocalPointPicker
									className="bu-components-image-media-edit-focalpoint"
									label={ __( 'Focal Point Picker' ) }
									url={ imgObj.src }
									value={ imageFocalPoint }
									onChange={ handleFocalPointPickerOnChange }
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
