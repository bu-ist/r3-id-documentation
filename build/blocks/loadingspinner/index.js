/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@bostonuniversity/block-imports/components/LoadingSpinner/editor.scss":
/*!********************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/LoadingSpinner/editor.scss ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/LoadingSpinner/index.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/LoadingSpinner/index.mjs ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinner: function() { return /* binding */ LoadingSpinner; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@bostonuniversity/block-imports/components/LoadingSpinner/editor.scss");
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
 * @param {string} className Additional classes assigned to the component.
 * @param {string} text      If the component has loading text set.
 * @param {string} shadow    If the component has a shadow set.
 */
const getClasses = (className, text, shadow) => classnames__WEBPACK_IMPORTED_MODULE_0__('bu-components-loading-spinner', {
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
  return /*#__PURE__*/React.createElement("div", {
    className: getClasses(className, text, shadow)
  }, text && /*#__PURE__*/React.createElement("strong", {
    className: "bu-components-loading-spinner--label"
  }, text), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null));
};

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinner: function() { return /* reexport safe */ _components_LoadingSpinner_index_mjs__WEBPACK_IMPORTED_MODULE_0__.LoadingSpinner; }
/* harmony export */ });
/* harmony import */ var _components_LoadingSpinner_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/LoadingSpinner/index.mjs */ "./node_modules/@bostonuniversity/block-imports/components/LoadingSpinner/index.mjs");
// Components
// export { HelpWrapper } from './components/HelpWrapper';
// export { Image } from './components/Image/index.mjs';
// export { LoadingSpinner } from './build/components/LoadingSpinner.js';

// export { Footer } from './components/LoadingSpinner/index.mjs'; // delete me
// export { PostChooser } from './components/PostChooser/index.mjs';
// export { PostChooserSidebar } from './components/PostChooser/index.mjs';
// export { Pagination } from './components/Pagination/index.mjs';

// Hooks
// A React Hook is a special function that lets you "hook into" React state and lifecycle features from within functional components. Hooks enable stateful logic and side effects within functional components, offering a way to reuse logic across components. Crucially, hooks can only be called inside React functional components or custom hooks, and they must follow the "rules of hooks," such as being called at the top level of a component and not within loops or conditional statements.
// export { useMedia } from './hooks/useMedia/index.mjs';
// export { useRequestData } from './hooks/useRequestData/index.mjs';
// export { useGetPagination } from './hooks/useGetPagination/index.mjs';
// export { useDebouncedInput } from './hooks/useDebouncedInput/index.mjs';

// Utils
// A utility function is a standard JavaScript function that performs a specific task and is not tied to any particular framework or library. Utility functions are often used for tasks like data formatting, calculations, or other operations that don't require access to React's state or lifecycle. They can be called from anywhere in your code, including within React components or hooks.
// export { getImageData } from './utils/getImageData/index.mjs';


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
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

/***/ "./src/blocks/loadingspinner/block.json":
/*!**********************************************!*\
  !*** ./src/blocks/loadingspinner/block.json ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/wp/5.8/block.json","apiVersion":2,"name":"r3-id-documentation/loadingspinner","version":"0.1.0","title":"LoadingSpinner - Sandbox","category":"r3-id-documentation-block-category","icon":"update","description":"This block is used to explore and adjust the parameters sent to the <LoadingSpinner> Component.","example":{"attributes":{"text":"Loading Message...","shadow":"Shadow is yes!","className":"¿classNamebra?"}},"attributes":{"text":{"type":"string","default":""},"shadow":{"type":"boolean","default":true},"className":{"type":"string","default":""}},"supports":{},"textdomain":"r3-id-documentation","editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bostonuniversity_block_imports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bostonuniversity/block-imports */ "./node_modules/@bostonuniversity/block-imports/index.js");
/* harmony import */ var _modules_inspector_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/inspector.mjs */ "./src/blocks/loadingspinner/modules/inspector.mjs");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/loadingspinner/editor.scss");
/**
 * `LoadingSpinner` Demo
 *
 * @return {Element} Element to render, in this case an image.
 */

// Import WP stuff.


// Import our stuff.
// import { Footer } from '@bostonuniversity/block-imports'; // builds but 130; ideal
 // builds and works! ideal
// import { LoadingSpinner } from '@bostonuniversity/block-imports/components/LoadingSpinner.js'; // builds but 130
// import { LoadingSpinner } from './modules/index.mjs'; // local works
// import { Footer } from '@bostonuniversity/block-imports/token'; // gives Module parse failed: Unexpected token; fixed with babel
// import { Footer } from '@bostonuniversity/block-imports/compiled'; // builds but 130


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
  return /*#__PURE__*/React.createElement("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(), /*#__PURE__*/React.createElement(_modules_inspector_mjs__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerInspectorControls, props), /*#__PURE__*/React.createElement(_bostonuniversity_block_imports__WEBPACK_IMPORTED_MODULE_1__.LoadingSpinner, {
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
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
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Configurator'),
    initialOpen: true,
    className: "props"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, /*#__PURE__*/React.createElement("strong", null, "Use these controls to adjust the parameters sent to the Component")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "text",
    help: "Text that appears before the spinner image. Default is undefined.",
    value: text,
    onChange: text => setAttributes({
      text
    })
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "shadow",
    help: "Show a shadow under the text? Default is true.",
    checked: shadow,
    onChange: shadow => setAttributes({
      shadow
    })
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "className",
    help: "Class(es) to add to the component. Default is undefined.",
    value: className,
    onChange: className => setAttributes({
      className
    })
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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

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