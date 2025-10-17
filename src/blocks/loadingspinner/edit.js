/**
 * `LoadingSpinner` Demo
 *
 * @return {Element} Element to render, in this case an image.
 */

// Import WP stuff.
import { useBlockProps } from '@wordpress/block-editor';

// Import our stuff.
// import { Footer } from '@bostonuniversity/block-imports'; // builds but 130; ideal
import { LoadingSpinner } from '@bostonuniversity/block-imports'; // builds and works! ideal
// import { LoadingSpinner } from '@bostonuniversity/block-imports/components/LoadingSpinner.js'; // builds but 130
// import { LoadingSpinner } from './modules/index.mjs'; // local works
// import { Footer } from '@bostonuniversity/block-imports/token'; // gives Module parse failed: Unexpected token; fixed with babel
// import { Footer } from '@bostonuniversity/block-imports/compiled'; // builds but 130
import { LoadingSpinnerInspectorControls } from './modules/inspector.mjs';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

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
			{/* <Footer>sdf</Footer> */}
		</div>
	);
}
