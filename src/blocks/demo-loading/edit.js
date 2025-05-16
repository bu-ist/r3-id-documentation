/**
 * `LoadingSpinner` Demo
 *
 * @return {Element} Element to render, in this case an image.
 */

// Import WP stuff.
import { useBlockProps } from '@wordpress/block-editor';

// Import our stuff.
import { LoadingSpinner } from '@bostonuniversity/block-imports';
import { LoadingSpinnerInspectorControls } from './modules/inspector.mjs';

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

	const { attributes } = props;
	const { text, shadow, className } = attributes;

	return (
		<div { ...useBlockProps() }>
			<LoadingSpinnerInspectorControls { ...props } />
			<LoadingSpinner
				text={ text } // Default is undefined.
				shadow={ shadow } // Default is true.
				className={ className }
			/>
		</div>
	);
}
