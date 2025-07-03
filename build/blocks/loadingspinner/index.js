/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../block-imports/components/Image/editor.scss":
/*!*****************************************************!*\
  !*** ../block-imports/components/Image/editor.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../block-imports/components/Image/index.mjs":
/*!***************************************************!*\
  !*** ../block-imports/components/Image/index.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Image: function() { return /* binding */ Image; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../block-imports/node_modules/classnames/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../index.js */ "../block-imports/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "../block-imports/components/Image/editor.scss");

/**
 * A loading spinner to be used to indicate some activity is occuring.
 */

// External dependencies.








// BU dependencies.


// Import CSS.


/**
 * Returns the class list for the component based on the current settings.
 *
 * @param {string} className Additional classes assigned to the component.
 */
const getClasses = className => classnames__WEBPACK_IMPORTED_MODULE_1__('bu-components-image', {
  [className]: className
});

/**
 * Export component.
 *
 * @param  props
 * @return {Element} Element to render, in this case an DIV.
 */
const Image = props => {
  const {
    // https://developer.wordpress.org/block-editor/reference-guides/components/focal-point-picker/
    allowedTypes = ['audio'],
    altSource = 'alt',
    canEditImage = true,
    canOverrideImage = true,
    className = undefined,
    debug = false,
    focalPoint = {
      x: 0.5,
      y: 0.5
    },
    labels = {
      title: 'my title',
      instructions: 'my instructions'
    },
    // {}
    mediaId = undefined,
    onChangeFocalPoint = undefined,
    onRemove = undefined,
    onSelect = undefined,
    // srcset =
    size = 'thumbnail',
    tag = 'img',
    ...rest
  } = props;
  console.log(props);

  // Is an image set already?
  const hasImage = mediaId ? true : false;
  console.log(hasImage);
  console.log('^hasImage^');
  const mediaObj = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const mediaObj = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getMedia(381626, {
      context: 'view'
    }); // undefined
    return mediaObj;
  }, []);

  // const media = useSelect(
  // 	( select ) => select( 'core' ).getMedia( 381626 ),
  // 	[]
  // );
  console.log(mediaObj);
  console.log('^^^');

  // const media = useSelect(
  // 	( select ) => {
  // 		const mediaObj = select( coreStore ).getMedia( mediaId, {
  // 			context: 'view',
  // 		} ); // undefined
  // 		return mediaObj;
  // 	},
  // 	[ mediaId ]
  // );

  // if ( ! media ) {
  // 	return <div>Loading... { mediaId }</div>;
  // }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "loadededee... ", mediaObj);

  // const { mediaObj, isResolvingMedia, hasResolvedMedia } =
  // 	useMedia( mediaId );
  // console.log( 'mediaObj is ' );
  // console.log( mediaObj );

  // // Get the media object.
  // const { sadfasdf } = useSelect( ( select ) => ( {
  // 	image: select( coreStore ).getMedia( [ 381626, { context: 'view' } ] ),
  // } ) );
  // console.log( 'useSelect is ' );
  // console.log( sadfasdf );

  // // JUST END IT ALREADY
  // return <div>nargs</div>;
};
// npx wp-scripts lint-js ./utils --fix

/***/ }),

/***/ "../block-imports/components/LoadingSpinner/editor.scss":
/*!**************************************************************!*\
  !*** ../block-imports/components/LoadingSpinner/editor.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../block-imports/components/LoadingSpinner/index.mjs":
/*!************************************************************!*\
  !*** ../block-imports/components/LoadingSpinner/index.mjs ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinner: function() { return /* binding */ LoadingSpinner; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../block-imports/node_modules/classnames/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "../block-imports/components/LoadingSpinner/editor.scss");

/**
 * A loading spinner to be used to indicate some activity is occuring.
 *
 * @return {Element} Element to render, in this case an DIV.
 */

// External dependencies.


// Import the WP Spinner component.


// Import CSS.


/**
 * Returns the class list for the component based on the current settings.
 *
 * @param {string} className	Additional classes assigned to the component.
 * @param {string} text			If the component has loading text set.
 * @param {string} shadow		If the component has a shadow set.
 */
const getClasses = (className, text, shadow) => classnames__WEBPACK_IMPORTED_MODULE_1__('bu-components-loading-spinner', {
  [`bu-components-loading-spinner--has-shadow`]: shadow,
  [`bu-components-loading-spinner--has-text`]: text,
  [className]: className
});
const LoadingSpinner = props => {
  const {
    text = undefined,
    shadow = true,
    className = undefined
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: getClasses(className, text, shadow)
  }, text && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    className: "bu-components-loading-spinner--label"
  }, text), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null));
};

/***/ }),

/***/ "../block-imports/hooks/useMedia/index.mjs":
/*!*************************************************!*\
  !*** ../block-imports/hooks/useMedia/index.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMedia: function() { return /* binding */ useMedia; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/**
 * useMedia
 *
 * @param {string} mediaId The unique numerical identifier assigned to each image attachment in the media library.
 *
 * @return {Object} todo.
 */

// External dependencies.


function useMedia(id) {
  console.log('useMedia id: ');
  console.log(id);
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getMedia,
      isResolving,
      hasFinishedResolution
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
    const mediaParameters = [id, {
      context: 'view'
    }];
    return {
      media: getMedia(...mediaParameters),
      isResolvingMedia: isResolving('getMedia', mediaParameters),
      hasResolvedMedia: hasFinishedResolution('getMedia', mediaParameters)
    };
  }, [id]);
}

/***/ }),

/***/ "../block-imports/hooks/useRequestData/index.mjs":
/*!*******************************************************!*\
  !*** ../block-imports/hooks/useRequestData/index.mjs ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRequestData: function() { return /* binding */ useRequestData; }
/* harmony export */ });
/* harmony import */ var lodash_isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject.js */ "../block-imports/node_modules/lodash/isObject.js");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/**
 * External dependencies
 */
// eslint-disable-next-line import/no-extraneous-dependencies


/**
 * WordPress dependencies
 */



/**
 * Hook for retrieving data from the WordPress REST API.
 *
 * @param {string} entity           The entity to retrieve. Defaults to postType.
 * @param {string} kind             The entity kind to retrieve. Defaults to posts.
 * @param {object | number} [query] Optional. Query to pass to the geEntityRecords request. Defaults to an empty object. If a number is passed, it is used as the ID of the entity to retrieve via getEntityRecord.
 * @returns {Array} The data returned from the request.
 */
const useRequestData = (entity = 'postType', kind = 'post', query = {}) => {
  const whichGER = lodash_isObject_js__WEBPACK_IMPORTED_MODULE_0__(query) ? 'getEntityRecords' : 'getEntityRecord';
  const {
    invalidateResolution
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/data');
  const {
    data,
    isLoading
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return {
      data: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store)[whichGER](entity, kind, query),
      isLoading: select('core/data').isResolving(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store, whichGER, [entity, kind, query])
    };
  }, [entity, kind, query]);
  const invalidateResolver = () => {
    invalidateResolution(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store, whichGER, [entity, kind, query]);
  };
  return [data, isLoading, invalidateResolver];
};

/***/ }),

/***/ "../block-imports/index.js":
/*!*********************************!*\
  !*** ../block-imports/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Image: function() { return /* reexport safe */ _components_Image_index_mjs__WEBPACK_IMPORTED_MODULE_0__.Image; },
/* harmony export */   LoadingSpinner: function() { return /* reexport safe */ _components_LoadingSpinner_index_mjs__WEBPACK_IMPORTED_MODULE_1__.LoadingSpinner; },
/* harmony export */   getImageData: function() { return /* reexport safe */ _utils_getImageData_index_mjs__WEBPACK_IMPORTED_MODULE_4__.getImageData; },
/* harmony export */   useMedia: function() { return /* reexport safe */ _hooks_useMedia_index_mjs__WEBPACK_IMPORTED_MODULE_2__.useMedia; },
/* harmony export */   useRequestData: function() { return /* reexport safe */ _hooks_useRequestData_index_mjs__WEBPACK_IMPORTED_MODULE_3__.useRequestData; }
/* harmony export */ });
/* harmony import */ var _components_Image_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Image/index.mjs */ "../block-imports/components/Image/index.mjs");
/* harmony import */ var _components_LoadingSpinner_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LoadingSpinner/index.mjs */ "../block-imports/components/LoadingSpinner/index.mjs");
/* harmony import */ var _hooks_useMedia_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useMedia/index.mjs */ "../block-imports/hooks/useMedia/index.mjs");
/* harmony import */ var _hooks_useRequestData_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useRequestData/index.mjs */ "../block-imports/hooks/useRequestData/index.mjs");
/* harmony import */ var _utils_getImageData_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getImageData/index.mjs */ "../block-imports/utils/getImageData/index.mjs");
// Components
// export { AllowedBlocks } from './components/AllowedBlocks';
// export { Background } from './components/Background';
// export { BlockIcons } from './components/BlockIcons';
// export { ColorSettings } from './components/ColorSettings';
// export { ContentSearch } from './components/content-search';
// export { ContentPicker } from './components/ContentPicker';
// export { CustomBlockAppender } from './components/CustomBlockAppender';
// export { DragHandle } from './components/drag-handle';
// export { FetchAllTermSelectControl } from './components/FetchAllTermSelectControl';
// export { HelpWrapper } from './components/HelpWrapper';
// export { IconPicker } from './components/IconPicker';

// export { LinkToolbar } from './components/LinkToolbar';

// @todo make index
// export { MediaCredit } from './components/MediaCredit/media-credit.js';
// export { Optional } from './components/Optional';
// export { ParagraphCaptionStyle } from './components/ParagraphCaptionStyle/paragraph-caption-style.js';
// export { ParagraphEndOfArticleStyle } from './components/ParagraphEndOfArticleStyle/paragraph-end-of-article-style.js';
// export { PlainTextWithLimit } from './components/PlainTextWithLimit';
// export { PostChooser } from './components/PostChooser';
// export { PostPicker } from './components/PostPicker';
// export { Repeater } from './components/Repeater';
// export { RichTextWithLimit } from './components/RichTextWithLimit';
// export { ShareTools } from './components/ShareTools';
// export { StyledComponentContext } from './components/styled-components-context';
// export { TermSelector } from './components/TermSelector';

// Hooks
// A React Hook is a special function that lets you "hook into" React state and lifecycle features from within functional components. Hooks enable stateful logic and side effects within functional components, offering a way to reuse logic across components. Crucially, hooks can only be called inside React functional components or custom hooks, and they must follow the "rules of hooks," such as being called at the top level of a component and not within loops or conditional statements.
// export { useFilteredList } from './hooks/use-filtered-list';
// export { useIcons } from './hooks/use-icons';
// export { useAllTerms } from './hooks/useAllTerms';

// export { useRenderAppenderWithBlockLimit } from './hooks/useRenderAppenderWithBlockLimit';


// Utils
// A utility function is a standard JavaScript function that performs a specific task and is not tied to any particular framework or library. Utility functions are often used for tasks like data formatting, calculations, or other operations that don't require access to React's state or lifecycle. They can be called from anywhere in your code, including within React components or hooks.
// export { parseMedia } from './utils/parseMedia/index.mjs';


/***/ }),

/***/ "../block-imports/node_modules/classnames/index.js":
/*!*********************************************************!*\
  !*** ../block-imports/node_modules/classnames/index.js ***!
  \*********************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
}());


/***/ }),

/***/ "../block-imports/node_modules/lodash/isObject.js":
/*!********************************************************!*\
  !*** ../block-imports/node_modules/lodash/isObject.js ***!
  \********************************************************/
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../block-imports/utils/getImageData/index.mjs":
/*!*****************************************************!*\
  !*** ../block-imports/utils/getImageData/index.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getImageData: function() { return /* binding */ getImageData; }
/* harmony export */ });
/**
 * Returns todo.
 *
 * @param {string} mediaObj     todo.
 * @param {string} size         todo.
 * @param {string} sizeFallback todo.
 *
 * @return {Object} Simplified object containing image metadata.
 */

function getImageData(mediaObj, size = 'full', sizeFallback = false) {
  let sizeToFetch = '';
  if (mediaObj?.media_details?.sizes[size]) {
    sizeToFetch = size;
  } else if (mediaObj?.media_details?.sizes[sizeFallback]) {
    sizeToFetch = sizeFallback;
  } else {
    return false;
  }
  const imgObj = {
    src: mediaObj.media_details.sizes[sizeToFetch].source_url,
    alt: mediaObj.alt_text,
    author: mediaObj.author,
    title: mediaObj.title.raw,
    // raw or rendered?
    caption: mediaObj.caption.raw,
    // raw or rendered?
    description: mediaObj.description.raw,
    // raw or rendered?
    height: mediaObj.media_details.sizes[sizeToFetch].height,
    width: mediaObj.media_details.sizes[sizeToFetch].width,
    mime_type: mediaObj.mime_type
  };
  return imgObj;
}

/***/ }),

/***/ "./src/blocks/loadingspinner/block.json":
/*!**********************************************!*\
  !*** ./src/blocks/loadingspinner/block.json ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/wp/5.8/block.json","apiVersion":2,"name":"r3-id-documentation/loadingspinner","version":"0.1.0","title":"<LoadingSpinner> Component - Playground","category":"r3-id-documentation-pattern-category","icon":"update","description":"This block is used to explore and adjust the parameters sent to the <LoadingSpinner> Component.","example":{"attributes":{"text":"Loading Message...","shadow":"Shadow is yes!","className":"¿classNamebra?"}},"attributes":{"text":{"type":"string","default":""},"shadow":{"type":"boolean","default":true},"className":{"type":"string","default":""}},"supports":{},"textdomain":"r3-id-documentation","editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/loadingspinner/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/loadingspinner/edit.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bostonuniversity_block_imports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bostonuniversity/block-imports */ "../block-imports/index.js");
/* harmony import */ var _modules_inspector_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/inspector.mjs */ "./src/blocks/loadingspinner/modules/inspector.mjs");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/loadingspinner/editor.scss");

/**
 * `LoadingSpinner` Demo
 *
 * @return {Element} Element to render, in this case an image.
 */

// Import WP stuff.


// Import our stuff.



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render, in this case an image.
 */
function Edit(props) {
  const {
    attributes
  } = props;
  const {
    text,
    shadow,
    className
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_modules_inspector_mjs__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinnerInspectorControls, {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_bostonuniversity_block_imports__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinner, {
    text: text // Default is undefined.
    ,
    shadow: shadow // Default is true.
    ,
    className: className
  }));
}

/***/ }),

/***/ "./src/blocks/loadingspinner/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/loadingspinner/editor.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/loadingspinner/modules/inspector.mjs":
/*!*********************************************************!*\
  !*** ./src/blocks/loadingspinner/modules/inspector.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinnerInspectorControls: function() { return /* binding */ LoadingSpinnerInspectorControls; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


// Import WP assets.


// Import WP assets.


// React requires that the first letter of components be capitalized. JSX will use this capitalization to tell the difference between an HTML tag and a component instance. If the first letter of a name is capitalized, then JSX knows it's a component instance; if not, then it's an HTML element.
const LoadingSpinnerInspectorControls = ({
  attributes,
  setAttributes
}) => {
  const {
    text,
    shadow,
    className
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block Configurator')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Use these controls to adjust the parameters sent to the Component")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "text",
    help: "Text that appears before the spinner image. Default is undefined.",
    value: text,
    onChange: text => setAttributes({
      text
    }),
    className: "props"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "shadow",
    help: "Show a shadow under the text? Default is true.",
    checked: shadow,
    onChange: shadow => setAttributes({
      shadow
    }),
    className: "props"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "className",
    help: "Class(es) to add to the component. Default is undefined.",
    value: className,
    onChange: className => setAttributes({
      className
    }),
    className: "props"
  })));
};

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!********************************************!*\
  !*** ./src/blocks/loadingspinner/index.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/loadingspinner/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/loadingspinner/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: ({
    attributes
  }) => null,
  icon: _block_json__WEBPACK_IMPORTED_MODULE_2__.icon
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map