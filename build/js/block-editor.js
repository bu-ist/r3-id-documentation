/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/block-styles.js":
/*!************************************!*\
  !*** ./src/blocks/block-styles.js ***!
  \************************************/
/***/ (function() {

/**
 * Block Styles allow alternative styles to be applied to existing blocks. They work by adding a className to the block’s wrapper. This className can be used to provide an alternative styling for the block if the block style is selected.
 *
 * Styles registered with PHP can only be unregistered with PHP.
 * Styles registered with JavaScript can only be unregistered with JavaScript.
 *
 * @link https://developer.bu.edu/gutenberg/handbook/block-styles/
 */

const stylesToAddRemove = {
  'core/table': ['stripes', 'regular'],
  'core/pullquote': ['solid-color', 'default'] // removes from dd but not picker
};

/**
 * Unregister existing styles.
 */
wp.domReady(function () {
  Object.entries(stylesToAddRemove).forEach(([block, styles]) => {
    // console.log(block + " , " + styles);
    wp.blocks.unregisterBlockStyle(block, styles);
  });
});

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

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
/*!********************************!*\
  !*** ./src/js/block-editor.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_block_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/block-styles */ "./src/blocks/block-styles.js");
/* harmony import */ var _blocks_block_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_block_styles__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Block editor only scripts.
 */
console.log('r3-id-documentation js/block-editor.js has loaded and hates schnozberries oh so much.');


/**
 * Register a block collection for this theme. This will display all blocks where the "textdomain" node in block.json matches the first argument of "registerBlockCollection". Namespace would be matched against a block prefix and included automatically in a registered collection.
 * @link https://github.com/godaddy-wordpress/coblocks/blob/e196c83d628e1139799ebf9ef94540578f430141/src/utils/helper.js
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockCollection)('r3-id-documentation', {
  title: 'r3-id-documentation Collection (JS)'
});

/**
 * Unregister block styles.
 */


// Block variations.
// import '../blocks/variations';
}();
/******/ })()
;
//# sourceMappingURL=block-editor.js.map