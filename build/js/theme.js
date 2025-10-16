/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@bostonuniversity/burf-theme/js/toggle.js":
/*!****************************************************************!*\
  !*** ./node_modules/@bostonuniversity/burf-theme/js/toggle.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggle: function() { return /* binding */ toggle; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Toggle behavior for navigation / search buttons.
 *
 * @package ResponsiveFoundation
 */



function toggle() {
	const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()( 'body' );

	const $toggle = jquery__WEBPACK_IMPORTED_MODULE_0___default()( '.js-nav-toggle' );

	const $toggleAriaLabelWhenOpen = $toggle.children('.nav-toggle-label-open').text();

	const $toggleAriaLabelWhenClosed = $toggle.children('.nav-toggle-label-closed').text();

	const $toggleitems = $toggle.add( 'nav' );

	const $searchtoggle = jquery__WEBPACK_IMPORTED_MODULE_0___default()( '.js-search-toggle' );

	const $searchitems = $searchtoggle.add( '#quicksearch' );

	// Add aria attributes for control/expanded if JS is available
	$searchtoggle
		.attr( 'aria-expanded', 'false' )
		.attr( 'aria-controls', 'quicksearch' );
	$toggle
		.attr( 'aria-expanded', 'false' )
		.attr( 'aria-controls', 'primary-nav-menu' );

	$toggle.on( 'click', ( e ) => {
		e.preventDefault();

		if ( $toggle.attr( 'aria-expanded' ) === 'false' ) {
			$toggle.attr( 'aria-expanded', 'true' ).attr( 'aria-label', $toggleAriaLabelWhenOpen );
		} else {
			$toggle.attr( 'aria-expanded', 'false' ).attr( 'aria-label', $toggleAriaLabelWhenClosed );
		}

		$toggleitems.toggleClass( 'is-open' );
		$searchitems.removeClass( 'is-open' );
		$body.toggleClass( 'nav-open' ).removeClass( 'search-open' );
	} );

	function toggleSearchPanel( focus ) {
		$toggleitems.removeClass( 'is-open' );

		if ( focus === true && ! jquery__WEBPACK_IMPORTED_MODULE_0___default()( this ).hasClass( 'is-open' ) ) {
			setTimeout( () => {
				jquery__WEBPACK_IMPORTED_MODULE_0___default()( '#q' ).focus();
			}, 100 );
		}

		if ( $searchtoggle.attr( 'aria-expanded' ) === 'false' ) {
			$searchtoggle
				.attr( 'aria-expanded', 'true' )
				.attr( 'aria-label', 'Close search' );
		} else {
			$searchtoggle
				.attr( 'aria-expanded', 'false' )
				.attr( 'aria-label', 'Open search' );
		}

		$searchitems.toggleClass( 'is-open' );
		$body.toggleClass( 'search-open' ).removeClass( 'nav-open' );
	}

	$searchtoggle.on( {
		click( e ) {
			e.preventDefault();
			toggleSearchPanel( true );
		},
		keypress( e ) {
			if ( e.keyCode === 13 ) {
				e.preventDefault();
				toggleSearchPanel( false );
			}
		},
	} );
}


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["jQuery"];

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bostonuniversity_burf_theme_js_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bostonuniversity/burf-theme/js/toggle */ "./node_modules/@bostonuniversity/burf-theme/js/toggle.js");
/**
 * The entry point for theme scripts.
 *
 * Modules are imported and compiled into one resulting `script.js` file.
 *
 * @package
 */

// Import Foundation scripts.


// Run JS scripts here.
(0,_bostonuniversity_burf_theme_js_toggle__WEBPACK_IMPORTED_MODULE_0__.toggle)();
}();
/******/ })()
;
//# sourceMappingURL=theme.js.map