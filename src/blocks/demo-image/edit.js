/**
 * Image Demo
 *
 * It is a common pattern in our projects to need to display an image inside a component and either allow the user to select/upload the image OR to display the image from some post data such as the featured image from a selected post
 *
 * @return {Element} Element to render, in this case an image.
 */

// Import WP stuff.
import { useBlockProps } from '@wordpress/block-editor';

// Import our stuff.
import { Image } from '@bostonuniversity/block-imports';
import { ImageInspectorControls } from './modules/inspector.mjs';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render, in this case an image.
 */
export default function Edit( props ) {

	const { attributes } = props;
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
		<div { ...useBlockProps() }>
			<ImageInspectorControls { ...props } />
			<Image
				className={ className }
				mediaId={ mediaId }
				size={ size }
				tag={ tag }
				altSource={ altSource }
				onSelect={ onSelect }
				onRemove={ onRemove }
				focalPoint={ focalPoint }
				onChangeFocalPoint={ onChangeFocalPoint }
				labels={ labels }
				canEditImage={ canEditImage }
				canOverrideImage={ canOverrideImage }
				allowedTypes={ allowedTypes }
				debug={ debug }
			/>
		</div>
	);
}
