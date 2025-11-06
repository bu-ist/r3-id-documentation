/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@bostonuniversity/block-imports/components/HelpWrapper/editor.scss":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/HelpWrapper/editor.scss ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/HelpWrapper/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/HelpWrapper/index.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpWrapper: function() { return /* binding */ HelpWrapper; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@bostonuniversity/block-imports/components/HelpWrapper/editor.scss");
// External dependencies.


// WordPress dependencies.



// Import CSS.


/**
 * Returns the class list for the component based on the current settings.
 *
 * @param {string} className  Additional classes assigned to the component.
 * @param {boolean} offset    If true, adds the 'has-offset-label' class to the component.
 * @returns {string}          The computed class list for the component.
 */
const getClasses = (className, offset) => classnames__WEBPACK_IMPORTED_MODULE_0___default()('bu-components-help-wrapper', {
  [className]: className,
  [`has-offset-label`]: offset
});

/**
 * Help Wrapper Component
 *
 * A component that wraps children elements and provides a help icon button
 * that shows a popover with help information when clicked.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.text] - Help text content to be displayed in the popover.
 * @param {string} [props.title] - Optional title for the help popover.
 * @param {string} [props.className] - Additional CSS class name for the wrapper element.
 * @param {string|Object} [props.offset] - Offset positioning for the help icon.
 * @param {React.ReactNode} [props.children] - Child elements to be wrapped by this component.
 *
 * @returns {JSX.Element} The HelpWrapper component.
 */
const HelpWrapper = props => {
  const {
    text,
    title,
    className,
    offset,
    children
  } = props;

  // State to manage the visibility of the popover.
  // Initially, the popover is not visible.
  const [popoverVisible, setPopoverVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  // Function to toggle the visibility of the popover.
  // This function is called when the icon is clicked.
  const toggleVisible = event => {
    // If the click is on the icon, toggle the popover visibility.
    if (popoverVisible) {
      // If the popover is already visible, hide it.
      setPopoverVisible(false);
    } else {
      // If the popover is not visible, show it.
      setPopoverVisible(true);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: getClasses(className, offset)
  }, /*#__PURE__*/React.createElement("div", {
    className: "bu-components-help-wrapper-container"
  }, !popoverVisible && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: toggleVisible,
    role: "button",
    icon: "editor-help",
    className: "bu-components-help-wrapper-icon",
    iconSize: "20",
    label: "Help",
    size: "small" // For Future WP 6.x compatibility.
    ,
    isSmall: true // for WP 5.8 compatibility
    ,
    variant: "link"
  }), popoverVisible && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => {
      setPopoverVisible(false);
    },
    role: "button",
    icon: "dismiss",
    className: "bu-components-help-wrapper-icon",
    iconSize: "20",
    label: "Close Help",
    size: "small" // For Future WP 6.x compatibility.
    ,
    isSmall: true // for WP 5.8 compatibility
    ,
    variant: "link"
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    className: "bu-components-help-wrapper-popover",
    noArrow: true,
    onFocusOutside: () => {
      setPopoverVisible(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bu-components-help-wrapper-popover-content"
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "bu-components-help-wrapper-popover-title"
  }, title), text)))), children);
};

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/Image/editor.scss":
/*!***********************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/Image/editor.scss ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/Image/index.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/Image/index.mjs ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Image: function() { return /* binding */ Image; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../index.js */ "./node_modules/@bostonuniversity/block-imports/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@bostonuniversity/block-imports/components/Image/editor.scss");
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
const getClasses = className => classnames__WEBPACK_IMPORTED_MODULE_0__('bu-components-image', {
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

  // Is an image set already?
  const hasImage = mediaId ? true : false;

  // Fetch the media object based on the `mediaId`.
  const {
    mediaObj,
    isResolvingMedia,
    hasResolvedMedia
  } = (0,_index_js__WEBPACK_IMPORTED_MODULE_5__.useMedia)(mediaId);

  /**
   * If there is no image set, and the user can't edit the image show placeholder.
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/components/Placeholder/
   * @todo allow user mod?
   */
  if (!hasImage && !canEditImage) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
      className: "bu-components-image-media-placeholder",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"],
      label: "Placeholder",
      withIllustration: true
    });
  }

  /**
   * If there is no image set, and the user can edit the image, show Media Placeholder.
   *
   * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-placeholder/README.md
   */
  if (!hasImage && canEditImage) {
    return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
      labels: labels,
      onSelect: onSelect,
      accept: "image/*",
      multiple: false,
      allowedTypes: allowedTypes
    });
  }

  // hasImage && canEditImage are both true, proceed...

  // If Debug is set to true, output some helpful information to the console for block developers to utilize media object info in their block development.
  if (debug) {
    if (isResolvingMedia) {
      console.log('Image Media Fetch in Progress: ', isResolvingMedia);
    }
    if (hasResolvedMedia) {
      console.log('Image Media Fetched: ', mediaObj);
    }
  }

  /**
   * If media is being fetched, just show the spinner.
   *
   * @see https://github.com/bu-ist/block-imports/tree/develop/components/LoadingSpinner
   */
  if (isResolvingMedia) {
    return /*#__PURE__*/React.createElement(_index_js__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinner, {
      text: "Loading..."
    });
  }

  /**
   * If media is being fetched, just show the spinner.
   *
   * @see https://github.com/bu-ist/block-imports/tree/develop/components/LoadingSpinner
   * @todo this doesn't seem to update/useState?
   */
  if (!mediaObj) {
    return /*#__PURE__*/React.createElement("p", null, "mediaObj undefined for ", mediaId);
  }
  return /*#__PURE__*/React.createElement("div", null, "nots... ", mediaId);
};
// npx wp-scripts lint-js ./utils --fix

/***/ }),

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

/***/ "./node_modules/@bostonuniversity/block-imports/components/Pagination/editor.scss":
/*!****************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/Pagination/editor.scss ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/Pagination/icons.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/Pagination/icons.mjs ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationIcons: function() { return /* binding */ PaginationIcons; }
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");


const PaginationIcons = {
  previous: {
    icon: /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
      width: "1200pt",
      height: "1200pt",
      version: "1.1",
      viewBox: "0 0 1200 1200",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
      d: "m723.74 918.19 70.703-70.703-247.48-247.48 247.48-247.48-70.703-70.703-318.19 318.19z"
    })),
    label: 'Previous Page'
  },
  next: {
    icon: /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
      width: "1200pt",
      height: "1200pt",
      version: "1.1",
      viewBox: "0 0 1200 1200",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
      d: "m476.26 918.19-70.703-70.703 247.48-247.48-247.48-247.48 70.703-70.703 318.19 318.19z"
    })),
    label: 'Next Page'
  },
  first: {
    icon: /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
      width: "1200pt",
      height: "1200pt",
      version: "1.1",
      viewBox: "0 0 1200 1200",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
      d: "m873.74 918.19 70.703-70.703-247.48-247.48 247.48-247.48-70.703-70.703-318.19 318.19z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
      d: "m450 950h-100v-700h100z"
    })),
    label: 'First Page'
  },
  last: {
    icon: /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
      width: "1200pt",
      height: "1200pt",
      version: "1.1",
      viewBox: "0 0 1200 1200",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
      d: "m326.26 918.19-70.703-70.703 247.48-247.48-247.48-247.48 70.703-70.703 318.19 318.19z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
      d: "m750 250h100v700h-100z"
    })),
    label: 'Last Page'
  }
};

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/Pagination/index.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/Pagination/index.mjs ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pagination: function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _icons_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons.mjs */ "./node_modules/@bostonuniversity/block-imports/components/Pagination/icons.mjs");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@bostonuniversity/block-imports/components/Pagination/editor.scss");
/**
 * A custom pagination component that can be used to build pagination
 * controls for data that spans multiple pages.
 */

// External Dependencies



// WordPress dependencies





// Internal dependencies


// Import CSS.

const Pagination = props => {
  const {
    className,
    currentPage = 1,
    // Default to page 1 if not provided.
    totalPages = 1,
    // Default to 1 page if not provided.
    onChange = () => {},
    // Default to an empty function if not provided.
    showPageNumbers = false,
    showMaxPageNumbers = 5,
    showPageInfo = false,
    showFirstLastButtons = false,
    showPrevNextButtons = true,
    nextLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Next'),
    prevLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Back'),
    showJumpToPage = false,
    margin = {
      marginBlock: '1em',
      marginInline: 0
    }
  } = props;

  // Track the current page in state.
  // This allows the component to re-render when the current page changes.
  const [page, setPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(currentPage);

  // Update the current page state when the currentPage prop changes.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setPage(currentPage);
  }, [currentPage]);

  // Handle a change to the pagination component when user clicks on a button or changes the page number.
  // This function will update the page state and call the onChange callback with the new page number.
  // It is called when the user clicks on the "Previous", "Next", "First", "Last" buttons or changes the page number in the input field.
  const handleChange = newPage => {
    setPage(newPage);
    onChange(newPage);
  };

  // Combine class names for the pagination container with any class passed to the component.
  const classes = classnames__WEBPACK_IMPORTED_MODULE_0__('bu-components-pagination', className);
  return /*#__PURE__*/React.createElement("nav", {
    className: classes
    // Use the margin prop to conditionally apply margin styles
    // marginBlock and marginInline are optional props
    // If they are not provided, they will not be applied.
    ,
    style: {
      ...(margin.marginBlock ? {
        marginBlock: margin.marginBlock
      } : {}),
      ...(margin.marginInline ? {
        marginInline: margin.marginInline
      } : {})
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bu-components-pagination-container"
  }, showFirstLastButtons && /*#__PURE__*/React.createElement("div", {
    className: "bu-components-pagination-first"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isSecondary: true,
    disabled: page <= 1,
    onClick: () => handleChange(1),
    label: "First Page"
  }, /*#__PURE__*/React.createElement(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: _icons_mjs__WEBPACK_IMPORTED_MODULE_5__.PaginationIcons.first.icon
  }))), showPrevNextButtons && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isSecondary: true,
    disabled: page <= 1,
    onClick: () => handleChange(page - 1)
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: _icons_mjs__WEBPACK_IMPORTED_MODULE_5__.PaginationIcons.previous.icon
  }), prevLabel && /*#__PURE__*/React.createElement("span", {
    className: "bu-components-pagination-button-text"
  }, prevLabel))), showPageNumbers && /*#__PURE__*/React.createElement("div", {
    className: "bu-components-pagination-numbers"
  }, (() => {
    // Logic for displaying max `showMaxPageNumbers` page numbers with ellipses
    const pageButtons = [];
    if (totalPages <= showMaxPageNumbers) {
      // Show all page numbers if total pages are less than or equal to `showMaxPageNumbers`
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          key: i,
          isLink: true,
          disabled: i === page,
          onClick: () => handleChange(i)
        }, i));
      }
    } else {
      // Always show first page
      pageButtons.push(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: 1,
        isLink: true,
        disabled: 1 === page,
        onClick: () => handleChange(1)
      }, 1));
      // Calculate how many pages to show before and after current page
      const pagesBeforeAndAfter = Math.floor((showMaxPageNumbers - 3) / 2); // -3 for first, last, current

      // Determine start and end of displayed numbers
      let start = Math.max(2, page - pagesBeforeAndAfter);
      let end = Math.min(start + (showMaxPageNumbers - 3), totalPages - 1);

      // Adjust start if end is maxed out
      if (end === totalPages - 1) {
        start = Math.max(2, totalPages - (showMaxPageNumbers - 2));
      } else {
        // If we still have room to show more pages before
        start = Math.max(2, page - Math.floor((showMaxPageNumbers - 3) / 2));
      }

      // Final bounds check
      start = Math.min(start, totalPages - 1);
      end = Math.max(end, Math.min(totalPages - 1, start));
      // Ensure end is not less than start
      if (end < start) {
        end = start;
      }

      // Show ellipsis if needed after first page
      if (start > 2) {
        pageButtons.push(/*#__PURE__*/React.createElement("span", {
          key: "ellipsis-1",
          className: "bu-components-pagination-ellipsis"
        }, "\u2026"));
      }

      // Show the calculated range
      for (let i = start; i <= end; i++) {
        pageButtons.push(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          key: i,
          isLink: true,
          disabled: i === page,
          onClick: () => handleChange(i)
        }, i));
      }

      // Show ellipsis if needed before last page
      if (end < totalPages - 1) {
        pageButtons.push(/*#__PURE__*/React.createElement("span", {
          key: "ellipsis-2",
          className: "bu-components-pagination-ellipsis"
        }, "\u2026"));
      }

      // Always show last page
      pageButtons.push(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: totalPages,
        isLink: true,
        disabled: totalPages === page,
        onClick: () => handleChange(totalPages)
      }, totalPages));
    }
    return pageButtons;
  })()), (showPageInfo || showJumpToPage) && /*#__PURE__*/React.createElement("div", {
    className: "bu-components-pagination-info"
  }, showPageInfo && /*#__PURE__*/React.createElement("div", {
    className: "bu-components-pagination-of"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bu-components-pagination-page-label-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Page ')), showJumpToPage ? /*#__PURE__*/React.createElement("span", {
    className: "bu-components-pagination-jump-to"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: page,
    onChange: value => handleChange(value),
    type: "number",
    min: 1,
    max: totalPages,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Jump to page'),
    hideLabelFromVision: true
  })) : /*#__PURE__*/React.createElement("strong", null, page), ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('of'), ' ', /*#__PURE__*/React.createElement("strong", null, totalPages)), showJumpToPage && !showPageInfo && /*#__PURE__*/React.createElement("span", {
    className: "bu-components-pagination-jump-to"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: page,
    onChange: value => handleChange(value),
    type: "number",
    min: 1,
    max: totalPages,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Jump to page'),
    hideLabelFromVision: true
  }))), showPrevNextButtons && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isSecondary: true,
    disabled: page >= totalPages,
    onClick: () => handleChange(page + 1)
  }, /*#__PURE__*/React.createElement(React.Fragment, null, nextLabel && /*#__PURE__*/React.createElement("span", {
    className: "bu-components-pagination-button-text"
  }, nextLabel), /*#__PURE__*/React.createElement(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: _icons_mjs__WEBPACK_IMPORTED_MODULE_5__.PaginationIcons.next.icon
  }))), showFirstLastButtons && /*#__PURE__*/React.createElement("div", {
    className: "bu-components-pagination-last"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isSecondary: true,
    disabled: page >= totalPages,
    onClick: () => handleChange(totalPages),
    label: "Last Page"
  }, /*#__PURE__*/React.createElement(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: _icons_mjs__WEBPACK_IMPORTED_MODULE_5__.PaginationIcons.last.icon
  })))));
};

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/assets/icons.mjs":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/assets/icons.mjs ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconPostChooserId: function() { return /* binding */ IconPostChooserId; },
/* harmony export */   IconPostChooserRecentlyUpdated: function() { return /* binding */ IconPostChooserRecentlyUpdated; },
/* harmony export */   IconPostChooserSlugSearch: function() { return /* binding */ IconPostChooserSlugSearch; },
/* harmony export */   IconPostChooserTextSearch: function() { return /* binding */ IconPostChooserTextSearch; },
/* harmony export */   IconSortMenu: function() { return /* binding */ IconSortMenu; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");




// Object to hold the sort icons and labels
// Using SVG from the WordPress icons library
const SortIcons = {
  sort_menu: {
    icon: /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M14.34,7.8H1.24c-.61,0-1.11-.5-1.11-1.11s.5-1.11,1.11-1.11h13.1c.61,0,1.11.5,1.11,1.11s-.5,1.11-1.11,1.11Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M12.35,11.85H3.24c-.61,0-1.11-.5-1.11-1.11s.5-1.11,1.11-1.11h9.11c.61,0,1.11.5,1.11,1.11s-.5,1.11-1.11,1.11Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M9.61,15.64h-3.64c-.61,0-1.11-.5-1.11-1.11s.5-1.11,1.11-1.11h3.64c.61,0,1.11.5,1.11,1.11s-.5,1.11-1.11,1.11Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M18.98,19.1c-.61,0-1.11-.5-1.11-1.11V4.3c0-.61.5-1.11,1.11-1.11s1.11.5,1.11,1.11v13.69c0,.61-.5,1.11-1.11,1.11Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M19,21.67c-.28,0-.6-.11-.81-.3l-3.78-3.58c-.45-.42-.46-1.12-.04-1.57s1.12-.46,1.57-.04l3.04,2.88,3.04-2.88c.45-.42,1.15-.4,1.57.04.42.45.4,1.15-.04,1.57l-3.78,3.58c-.21.2-.48.3-.76.3Z"
    })),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sort By:')
  },
  post_chooser_text_search: {
    icon: /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M12.41,19.62h-6.41V4.28h12v7.79c.64.21,1.22.55,1.71.99V4.28c0-.95-.77-1.71-1.71-1.71H6c-.95,0-1.71.77-1.71,1.71v15.35c0,.95.77,1.71,1.71,1.71h8.58c-.88-.36-1.62-.96-2.17-1.71Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M15.21,7.09h-6.88c-.39,0-.7-.31-.7-.7s.31-.7.7-.7h6.88c.39,0,.7.31.7.7s-.31.7-.7.7Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M15.21,9.45h-6.88c-.39,0-.7-.31-.7-.7s.31-.7.7-.7h6.88c.39,0,.7.31.7.7s-.31.7-.7.7Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M15.21,11.87h-6.88c-.39,0-.7-.31-.7-.7s.31-.7.7-.7h6.88c.39,0,.7.31.7.7s-.31.7-.7.7Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M10.75,14.42h-2.43c-.39,0-.7-.31-.7-.7s.31-.7.7-.7h2.43c.39,0,.7.31.7.7s-.31.7-.7.7Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M9.54,16.81h-1.22c-.39,0-.7-.31-.7-.7s.31-.7.7-.7h1.22c.39,0,.7.31.7.7s-.31.7-.7.7Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M16.36,20.81c-2.29,0-4.15-1.86-4.15-4.15s1.86-4.15,4.15-4.15,4.15,1.86,4.15,4.15-1.86,4.15-4.15,4.15ZM16.36,14.02c-1.46,0-2.65,1.19-2.65,2.65s1.19,2.65,2.65,2.65,2.65-1.19,2.65-2.65-1.19-2.65-2.65-2.65Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M18.27,17.22s0,0,0,0c-.13,0-.23-.11-.23-.24.02-.51-.16-1-.51-1.38-.35-.38-.82-.59-1.34-.61-.13,0-.23-.11-.23-.24,0-.13.1-.26.24-.23.64.02,1.23.29,1.66.76.43.47.66,1.08.64,1.71,0,.13-.11.23-.23.23Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M21.84,23.15c-.23,0-.46-.09-.64-.26l-2.86-2.86c-.35-.35-.35-.92,0-1.27.35-.35.92-.35,1.27,0l2.86,2.86c.35.35.35.92,0,1.27-.18.18-.41.26-.64.26Z"
    })),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Search')
  },
  post_chooser_recently_updated: {
    icon: /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M15.97,21.34h.74c.09,0,.18-.01.26-.03-.18,0-.36,0-.55,0-.15,0-.3,0-.45.02ZM16.71,2.56H4.71c-.95,0-1.71.77-1.71,1.71v15.35c0,.95.77,1.71,1.71,1.71h6.28s-.02-.02-.03-.03c-.39-.51-.7-1.08-.94-1.69h-5.31V4.28h12v5.93c.65.03,1.22.15,1.71.35v-6.27c0-.95-.77-1.71-1.71-1.71Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M16.42,22.24c-2.84,0-5.15-2.31-5.15-5.15s2.31-5.15,5.15-5.15,5.15,2.31,5.15,5.15-2.31,5.15-5.15,5.15ZM16.42,13.44c-2.01,0-3.65,1.64-3.65,3.65s1.64,3.65,3.65,3.65,3.65-1.64,3.65-3.65-1.64-3.65-3.65-3.65Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M14.25,18.79c-.17,0-.32-.09-.41-.24-.13-.23-.05-.52.18-.64l1.93-1.09v-2.16c0-.26.21-.47.47-.47s.47.21.47.47v2.71l-2.41,1.36c-.07.04-.15.06-.23.06Z"
    })),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Recently Updated')
  },
  post_chooser_slug_search: {
    icon: /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M19.98,3.79c-1.71-1.71-4.49-1.71-6.2,0l-2.71,2.71-.91.91c-.28.28-.28.74,0,1.03l.18.18c.28.28.74.28,1.03,0l.91-.91,2.71-2.71c1.04-1.04,2.75-1.04,3.84.05s1.04,2.75,0,3.79l-2.71,2.71-.91.91c-.28.28-.28.74,0,1.03l.18.18c.28.28.74.28,1.03,0l.91-.91,2.71-2.71c1.71-1.71,1.71-4.49-.05-6.25Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M3.5,20.27c-1.71-1.71-1.71-4.49,0-6.2l2.71-2.71.91-.91c.28-.28.74-.28,1.03,0l.18.18c.28.28.28.74,0,1.03l-.91.91-2.71,2.71c-1.04,1.04-1.04,2.75.05,3.84s2.75,1.04,3.79,0l2.71-2.71.91-.91c.28-.28.74-.28,1.03,0l.18.18c.28.28.28.74,0,1.03l-.91.91-2.71,2.71c-1.71,1.71-4.49,1.71-6.25-.05Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M7.45,16.37c-.4-.4-.4-1.05,0-1.45l7.48-7.48c.4-.4,1.05-.4,1.45,0s.4,1.05,0,1.45l-7.48,7.48c-.4.4-1.05.4-1.45,0Z"
    })),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Slug')
  },
  post_chooser_id: {
    icon: /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M18,4.33v11.98l-2.78,3.37H6V4.33h12M18,2.61H6c-.95,0-1.71.77-1.71,1.71v15.35c0,.95.77,1.71,1.71,1.71h9.22c.51,0,1-.23,1.32-.62l2.78-3.37c.25-.31.39-.69.39-1.09V4.33c0-.95-.77-1.71-1.71-1.71h0Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M18,16.31l-2.78,3.37v-3.37h2.78M18,14.83h-2.78c-.81,0-1.47.66-1.47,1.47v3.37c0,.62.39,1.18.97,1.39.16.06.33.09.5.09.43,0,.85-.19,1.14-.54l2.78-3.37c.36-.44.44-1.05.2-1.57-.24-.52-.76-.84-1.33-.84h0Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M15.5,10.52h-6.96c-.33,0-.6-.27-.6-.6s.27-.6.6-.6h6.96c.33,0,.6.27.6.6s-.27.6-.6.6Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M15.5,13.34h-6.96c-.33,0-.6-.27-.6-.6s.27-.6.6-.6h6.96c.33,0,.6.27.6.6s-.27.6-.6.6Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M10.29,15.28s-.05,0-.08,0c-.33-.04-.56-.34-.52-.67l.88-6.91c.04-.33.35-.57.67-.52.33.04.56.34.52.67l-.88,6.91c-.04.3-.3.52-.59.52Z"
    }), /*#__PURE__*/React.createElement(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M13.08,15.28s-.05,0-.08,0c-.33-.04-.56-.34-.52-.67l.89-6.91c.04-.33.35-.57.67-.52.33.04.56.34.52.67l-.89,6.91c-.04.3-.3.52-.59.52Z"
    })),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post ID')
  }
};
const IconSortMenu = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
  size: 24,
  icon: SortIcons.sort_menu.icon
});
const IconPostChooserTextSearch = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
  size: 24,
  icon: SortIcons.post_chooser_text_search.icon
});
const IconPostChooserRecentlyUpdated = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
  size: 24,
  icon: SortIcons.post_chooser_recently_updated.icon
});
const IconPostChooserSlugSearch = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
  size: 24,
  icon: SortIcons.post_chooser_slug_search.icon
});
const IconPostChooserId = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
  size: 24,
  icon: SortIcons.post_chooser_id.icon
});


/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/loading-overlay/editor.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/loading-overlay/editor.scss ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/loading-overlay/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/loading-overlay/index.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingOverlay: function() { return /* binding */ LoadingOverlay; },
/* harmony export */   LoadingSpinner: function() { return /* binding */ LoadingSpinner; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingSpinner_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../LoadingSpinner/index.mjs */ "./node_modules/@bostonuniversity/block-imports/components/LoadingSpinner/index.mjs");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/loading-overlay/editor.scss");
// WordPress Dependencies


// Internal Dependencies


// Import Editor CSS.

const LoadingSpinner = props => {
  const {
    loading
  } = props;

  // Spinner visibility state for animation
  const [spinnerVisible, setSpinnerVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Effect to handle animating the spinner
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (loading) {
      setSpinnerVisible(true);
    } else {
      // Delay hiding to allow for fade-out animation
      const timer = setTimeout(() => {
        setSpinnerVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [loading]);
  return /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-results-spinner",
    "data-spinnervisible": spinnerVisible
  }, /*#__PURE__*/React.createElement(_LoadingSpinner_index_mjs__WEBPACK_IMPORTED_MODULE_1__.LoadingSpinner, null));
};
const LoadingOverlay = props => {
  const {
    loading
  } = props;

  // Overlay visibility state for animation
  const [overlayVisible, setOverlayVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Effect to handle animating the overlay
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (loading) {
      setOverlayVisible(true);
    } else {
      // Delay hiding to allow for fade-out animation
      const timer = setTimeout(() => {
        setOverlayVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [loading]);
  return /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-results-overlay",
    "data-overlayvisible": overlayVisible
  });
};

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/modal/editor.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/modal/editor.scss ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/modal/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/modal/index.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostChooserModal: function() { return /* binding */ PostChooserModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _results_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results/index.js */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results/index.js");
/* harmony import */ var _search_ui_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-ui/index.js */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/search-ui/index.js");
/* harmony import */ var _results_controls_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../results-controls/index.mjs */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results-controls/index.mjs");
/* harmony import */ var _loading_overlay_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading-overlay/index.js */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/loading-overlay/index.js");
/* harmony import */ var _components_Pagination_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Pagination/index.mjs */ "./node_modules/@bostonuniversity/block-imports/components/Pagination/index.mjs");
/* harmony import */ var _hooks_useGetPagination_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useGetPagination/index.mjs */ "./node_modules/@bostonuniversity/block-imports/hooks/useGetPagination/index.mjs");
/* harmony import */ var _hooks_useRequestData_index_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useRequestData/index.mjs */ "./node_modules/@bostonuniversity/block-imports/hooks/useRequestData/index.mjs");
/* harmony import */ var _hooks_useDebouncedInput_index_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/useDebouncedInput/index.mjs */ "./node_modules/@bostonuniversity/block-imports/hooks/useDebouncedInput/index.mjs");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/modal/editor.scss");




// Internal dependencies





// Import from Block Imports Package.





// Import CSS

const PostChooserModal = props => {
  const {
    onClose = () => {},
    // Function to call when the modal is closed.
    label,
    onSelectPost = () => {},
    // Function to call when a post is selected.
    postTypes = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Posts'),
      value: 'post'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pages'),
      value: 'page'
    }],
    // Default post types to search.
    primaryPostType = 'post',
    // Default primary post type.
    placeholder = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter a search term…'),
    title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose a Post')
  } = props;

  // Use the new useDebouncedInput hook to handle both immediate and debounced search terms
  // searchTerm - updates immediately with each keystroke for responsive UI
  // debouncedSearchTerm - only updates after delay (used for API calls to reduce requests)
  const [searchTerm, setSearchTerm, searchTermThrottled] = (0,_hooks_useDebouncedInput_index_mjs__WEBPACK_IMPORTED_MODULE_10__.useDebouncedInput)('', 300);
  const [sortOrder, setSortOrder] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    orderby: 'date',
    order: 'desc'
  });
  const [searchType, setSearchType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('recent');
  const [selectedPostType, setSelectedPostType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(primaryPostType || (postTypes && postTypes.length > 0 ? postTypes[0].value : 'post'));

  // Handle search Pagination for each search type separately
  const [searchCurrentPage, setSearchCurrentPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    recent: 1,
    default: 1,
    slug: 1,
    id: 1
  });

  // Store search results separately for each search type
  const [searchResults, setSearchResults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    recent: {
      posts: null,
      totalItems: 0,
      totalPages: 0
    },
    default: {
      posts: null,
      totalItems: 0,
      totalPages: 0
    },
    slug: {
      posts: null,
      totalItems: 0,
      totalPages: 0
    },
    id: {
      posts: null,
      totalItems: 0,
      totalPages: 0
    }
  });

  // Determine if search term is numeric for ID search
  const isSearchTermNumeric = searchTermThrottled && !isNaN(searchTermThrottled) && !isNaN(parseFloat(searchTermThrottled));

  // Base query parameters
  const baseQuery = {
    per_page: 10,
    orderby: sortOrder.orderby,
    order: sortOrder.order,
    status: 'publish'
  };

  // Recent posts query (always active)
  const recentQuery = {
    ...baseQuery,
    page: searchCurrentPage.recent,
    orderby: sortOrder.orderby,
    order: sortOrder.order
  };

  // Content search query (only when there's a search term)
  const contentQuery = searchTermThrottled ? {
    ...baseQuery,
    search: searchTermThrottled,
    page: searchCurrentPage.default
  } : undefined;

  // Slug search query (only when there's a search term) - exact slug match only
  const slugQuery = searchTermThrottled ? {
    ...baseQuery,
    slug: searchTermThrottled,
    page: searchCurrentPage.slug
  } : undefined;

  // ID search query (only when search term is numeric)
  const idQuery = isSearchTermNumeric ? {
    ...baseQuery,
    include: [parseInt(searchTermThrottled)],
    page: searchCurrentPage.id
  } : undefined;

  // Use separate useRequestData hooks for each search type
  const [recentPosts, recentLoading, recentInvalidateResolver] = (0,_hooks_useRequestData_index_mjs__WEBPACK_IMPORTED_MODULE_9__.useRequestData)('postType', selectedPostType, recentQuery);
  const [contentPosts, contentLoading, contentInvalidateResolver] = (0,_hooks_useRequestData_index_mjs__WEBPACK_IMPORTED_MODULE_9__.useRequestData)('postType', selectedPostType, contentQuery);
  const [slugPosts, slugLoading, slugInvalidateResolver] = (0,_hooks_useRequestData_index_mjs__WEBPACK_IMPORTED_MODULE_9__.useRequestData)('postType', selectedPostType, slugQuery);
  const [idPosts, idLoading, idInvalidateResolver] = (0,_hooks_useRequestData_index_mjs__WEBPACK_IMPORTED_MODULE_9__.useRequestData)('postType', selectedPostType, idQuery);

  // Get pagination for each search type
  const {
    pagination: recentPagination
  } = (0,_hooks_useGetPagination_index_mjs__WEBPACK_IMPORTED_MODULE_8__.useGetPagination)('postType', selectedPostType, recentQuery);
  const {
    pagination: contentPagination
  } = (0,_hooks_useGetPagination_index_mjs__WEBPACK_IMPORTED_MODULE_8__.useGetPagination)('postType', selectedPostType, contentQuery || {});
  const {
    pagination: slugPagination
  } = (0,_hooks_useGetPagination_index_mjs__WEBPACK_IMPORTED_MODULE_8__.useGetPagination)('postType', selectedPostType, slugQuery || {});
  const {
    pagination: idPagination
  } = (0,_hooks_useGetPagination_index_mjs__WEBPACK_IMPORTED_MODULE_8__.useGetPagination)('postType', selectedPostType, idQuery || {});

  // Update search results state when individual search results change
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Update the recent posts search results with the latest data and pagination
    const recentSearchResult = {
      posts: recentPosts,
      totalItems: recentPagination.totalItems || 0,
      totalPages: recentPagination.totalPages || 0
    };
    setSearchResults(prevResults => ({
      ...prevResults,
      recent: recentSearchResult
    }));
  }, [recentPosts, recentPagination]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Determine the appropriate search result object based on whether we have a search term
    // If searchTermThrottled exists: use the API data with pagination information
    // If no search term: reset to empty/null values to clear results
    const defaultSearchResult = searchTermThrottled ? {
      posts: contentPosts,
      totalItems: contentPagination.totalItems || 0,
      totalPages: contentPagination.totalPages || 0
    } : {
      posts: null,
      totalItems: 0,
      totalPages: 0
    };

    // Update just the "default" search type in our results state object,
    // preserving other search type results
    setSearchResults(prevResults => ({
      ...prevResults,
      default: defaultSearchResult
    }));
  }, [contentPosts, contentPagination, searchTermThrottled]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Determine slug search results based on search term presence
    // If searchTermThrottled exists: use the slug search results and pagination
    // If no search term: reset to empty/null values
    const slugSearchResult = searchTermThrottled ? {
      posts: slugPosts,
      totalItems: slugPagination.totalItems || 0,
      totalPages: slugPagination.totalPages || 0
    } : {
      posts: null,
      totalItems: 0,
      totalPages: 0
    };

    // Update the slug search results while preserving other search types
    setSearchResults(prevResults => ({
      ...prevResults,
      slug: slugSearchResult
    }));
  }, [slugPosts, slugPagination, searchTermThrottled]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Determine ID search results based on whether search term is numeric
    // If isSearchTermNumeric is true: use the ID search results and pagination
    // If not numeric: reset to empty/null values
    const idSearchResult = isSearchTermNumeric ? {
      posts: idPosts,
      totalItems: idPagination.totalItems || 0,
      totalPages: idPagination.totalPages || 0
    } : {
      posts: null,
      totalItems: 0,
      totalPages: 0
    };

    // Update the ID search results while preserving other search types
    setSearchResults(prevResults => ({
      ...prevResults,
      id: idSearchResult
    }));
  }, [idPosts, idPagination, isSearchTermNumeric]);

  // Get current results based on selected search type
  const getCurrentResults = () => {
    return searchResults[searchType] || {
      posts: null,
      totalItems: 0,
      totalPages: 0
    };
  };

  // Get current loading state based on selected search type
  const getCurrentLoadingState = () => {
    switch (searchType) {
      case 'recent':
        return recentLoading;
      case 'default':
        return contentLoading;
      case 'slug':
        return slugLoading;
      case 'id':
        return idLoading;
      default:
        return false;
    }
  };

  // Get current page for selected search type
  const getCurrentPage = () => {
    return searchCurrentPage[searchType] || 1;
  };

  // Get current invalidate function based on selected search type
  const getCurrentInvalidateFunction = () => {
    switch (searchType) {
      case 'recent':
        return recentInvalidateResolver;
      case 'default':
        return contentInvalidateResolver;
      case 'slug':
        return slugInvalidateResolver;
      case 'id':
        return idInvalidateResolver;
      default:
        return () => {};
    }
  };
  const handleSearch = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    // Trigger search by invalidating all search results
    recentInvalidateResolver();
    if (searchTermThrottled) {
      contentInvalidateResolver();
      slugInvalidateResolver();
    }
    if (isSearchTermNumeric) {
      idInvalidateResolver();
    }
  }, [recentInvalidateResolver, contentInvalidateResolver, slugInvalidateResolver, idInvalidateResolver, searchTermThrottled, isSearchTermNumeric]);

  // Handle page change for current search type
  const handlePageChange = newPage => {
    setSearchCurrentPage(prev => ({
      ...prev,
      [searchType]: newPage
    }));
    getCurrentInvalidateFunction()();
  };

  /**
  * When the search term changes or when we have search results,
  * automatically switch to the appropriate search type.
  *
  * Note: Don't enter `searchType` as a dependency in this effect.
  * Doing so will cause a rerender and the setting will be undone.
  */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (searchTermThrottled && searchType === 'recent') {
      // Auto-switch to content search when user starts typing
      setSearchType('default');
    } else if (!searchTermThrottled && searchType !== 'recent') {
      // Auto-switch back to recent when search term is cleared
      setSearchType('recent');
    }
  }, [searchTermThrottled]);

  /**
  * When the search Term changes, set ALL search current pages to 1.
  * If not, the query in useSelect() may throw an error if we request
  * a page number that doesn't exist. Anytime the searchTerm changes this
  * should be set back to page 1 of the results as the old results are
  * now invalid.
  * Setting this to run on searchTermThrottled was too slow at times due
  * to the delay in the Throttler.
  */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // When searchTerm changes (due to dependency array),
    // reset search pages to 1 for types that use the search term
    // Keep the "recent" page as is since it doesn't depend on searchTerm
    // This prevents "invalid page" errors when changing search terms after pagination
    setSearchCurrentPage(prev => ({
      ...prev,
      default: 1,
      slug: 1,
      id: 1
    }));
  }, [searchTerm]);

  // Get current results and metadata
  const currentResults = getCurrentResults();
  const currentLoading = getCurrentLoadingState();
  const currentPage = getCurrentPage();
  const currentTotalPages = currentResults.totalPages || 0;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: title,
    onRequestClose: onClose,
    isOpen: false,
    className: "bu-components-post-chooser-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-modal-container"
  }, /*#__PURE__*/React.createElement(_search_ui_index_js__WEBPACK_IMPORTED_MODULE_4__.SearchUI, {
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
    isLoading: currentLoading || false,
    label: label,
    placeholder: placeholder,
    setSearchType: setSearchType,
    postTypes: postTypes,
    primaryPostType: primaryPostType,
    selectedPostType: selectedPostType,
    setSelectedPostType: setSelectedPostType
  }), /*#__PURE__*/React.createElement(_results_controls_index_mjs__WEBPACK_IMPORTED_MODULE_5__.ResultsControls, {
    searchTerm: searchTermThrottled,
    searchType: searchType,
    sortOrder: sortOrder,
    setSortOrder: setSortOrder,
    contentResultsCount: searchResults.default.totalItems || 0,
    slugResultsCount: searchResults.slug.totalItems || 0,
    idResultsCount: searchResults.id.totalItems || 0,
    onChange: newType => {
      setSearchType(newType);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-results-scrollable"
  }, /*#__PURE__*/React.createElement(_loading_overlay_index_js__WEBPACK_IMPORTED_MODULE_6__.LoadingSpinner, {
    loading: currentLoading
  }), /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-results-container"
  }, /*#__PURE__*/React.createElement(_loading_overlay_index_js__WEBPACK_IMPORTED_MODULE_6__.LoadingOverlay, {
    loading: currentLoading
  }), /*#__PURE__*/React.createElement(_results_index_js__WEBPACK_IMPORTED_MODULE_3__.Results, {
    posts: currentResults.posts,
    onSelectPost: onSelectPost,
    totalItems: currentResults.totalItems,
    loading: currentLoading,
    searchTerm: searchTermThrottled,
    searchType: searchType
  }), currentTotalPages > 1 && currentResults.posts && /*#__PURE__*/React.createElement(_components_Pagination_index_mjs__WEBPACK_IMPORTED_MODULE_7__.Pagination, {
    className: "bu-components-post-chooser-pagination",
    currentPage: currentPage,
    totalPages: currentTotalPages,
    onChange: handlePageChange,
    showPageInfo: false,
    showPageNumbers: true,
    showFirstLastButtons: false,
    prevLabel: false,
    nextLabel: false,
    showMaxPageNumbers: 6
  })))));
};

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results-controls/editor.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results-controls/editor.scss ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results-controls/index.mjs":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results-controls/index.mjs ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultsControls: function() { return /* binding */ ResultsControls; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _assets_icons_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons.mjs */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/assets/icons.mjs");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results-controls/editor.scss");




// Internal dependencies


const ResultsControls = props => {
  const {
    searchTerm,
    searchType,
    sortOrder,
    setSortOrder,
    contentResultsCount = 0,
    // Todo: Add support for content results count
    slugResultsCount = 0,
    // Todo: Add support for slug results count
    idResultsCount = 0,
    // Todo: Add support for ID results count
    onChange = () => {} // Function to call when the search type or sort order changes.
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-results-controls"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    justify: "space-between",
    align: "center"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexBlock, {
    className: "bu-components-post-chooser-results-controls-type"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalRadioGroup, {
    className: "bu-components-post-chooser-search-type",
    label: "Search Type",
    onChange: onChange,
    checked: searchType
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalRadio, {
    value: "recent",
    icon: _assets_icons_mjs__WEBPACK_IMPORTED_MODULE_3__.IconPostChooserRecentlyUpdated,
    iconPosition: "right",
    className: searchType === 'recent' ? 'is-active' : ''
  }, /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-controls-type-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-controls-type-label-short"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Recent')), /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-controls-type-label-long"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ly Updated')))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalRadio, {
    value: "default",
    icon: _assets_icons_mjs__WEBPACK_IMPORTED_MODULE_3__.IconPostChooserTextSearch,
    iconPosition: "right",
    className: searchType === 'default' ? 'is-active' : ''
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content'), searchTerm && /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-controls-type-count"
  }, contentResultsCount)), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalRadio, {
    value: "slug",
    icon: _assets_icons_mjs__WEBPACK_IMPORTED_MODULE_3__.IconPostChooserSlugSearch,
    iconPosition: "right",
    className: searchType === 'slug' ? 'is-active' : ''
  }, /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-controls-type-label-long"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post ')), /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-controls-type-label-short"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slug')), searchTerm && /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-controls-type-count"
  }, slugResultsCount)), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalRadio, {
    value: "id",
    icon: _assets_icons_mjs__WEBPACK_IMPORTED_MODULE_3__.IconPostChooserId,
    iconPosition: "right",
    className: searchType === 'id' ? 'is-active' : ''
  }, /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-controls-type-label-long"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post ')), /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-controls-type-label-short"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ID')), searchTerm && /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-controls-type-count"
  }, idResultsCount)))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
    className: "bu-components-post-chooser-results-controls-sort"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    className: "bu-components-post-chooser-results-controls-sort-dropdown",
    contentClassName: "bu-components-post-chooser-results-controls-sort-dropdown-content",
    position: "bottom right",
    popoverProps: {
      className: 'bu-components-post-chooser-results-controls-sort-dropdown-popover',
      noArrow: false
    },
    renderToggle: ({
      isOpen,
      onToggle,
      onClose
    }) => /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: () => {
        onToggle();
      },
      "aria-expanded": isOpen,
      icon: _assets_icons_mjs__WEBPACK_IMPORTED_MODULE_3__.IconSortMenu,
      label: "Sort By:",
      disabled: searchTerm || searchType === 'recent' ? false : true
    }),
    renderContent: ({
      isOpen,
      onToggle,
      onClose
    }) => /*#__PURE__*/React.createElement("div", {
      className: "bu-components-post-chooser-results-controls-sort-dropdown-content-inner"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      className: "bu-components-post-chooser-results-controls-sort-dropdown-close-icon",
      icon: "dismiss",
      onClick: onToggle
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      className: "bu-components-post-chooser-results-controls-sort-by",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sort By'),
      value: sortOrder.orderby,
      onChange: value => setSortOrder({
        orderby: value,
        order: sortOrder.order
      }),
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Publish Date'),
        value: 'date'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title'),
        value: 'title'
      }]
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalRadioGroup, {
      className: "bu-components-post-chooser-results-controls-sort-direction",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sort By'),
      onChange: value => {
        if (value === 'asc') {
          setSortOrder({
            order: 'asc',
            orderby: sortOrder.orderby
          });
        } else if (value === 'desc') {
          setSortOrder({
            order: 'desc',
            orderby: sortOrder.orderby
          });
        }
      },
      checked: sortOrder.order
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalRadio, {
      value: "asc"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      icon: "arrow-up-alt",
      size: 24
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalRadio, {
      value: "desc"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      icon: "arrow-down-alt",
      size: 24
    }))))
  }))));
};

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results-item/editor.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results-item/editor.scss ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results-item/index.mjs":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results-item/index.mjs ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultsItem: function() { return /* binding */ ResultsItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results-item/editor.scss");





// Import CSS.

const ResultsItem = props => {
  const {
    post,
    onSelectPost,
    placeholder
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    className: "bu-components-post-chooser-results-item",
    "data-placeholder": placeholder,
    key: post?.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-results-item-container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "bu-components-post-chooser-results-item-title"
  }, post?.title && (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(post.title?.rendered), post?.link && /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-item-link"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ExternalLink, {
    href: post.link
  }, /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-item-link-text"
  }, "View Post")))), /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-results-item-metadata"
  }, post?.modified && /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-item-modified"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Modified: ')), (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_3__.dateI18n)('F j, Y, g:i a', post.modified))), post?.status && /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-results-item-status"
  }, /*#__PURE__*/React.createElement("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Status: ')), post.status)), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    className: "bu-components-post-chooser-item-select-button",
    onClick: () => onSelectPost(post),
    disabled: placeholder
  }, "Select"))));
};

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results/editor.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results/editor.scss ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results/help-post-id.png":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results/help-post-id.png ***!
  \**********************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/help-post-id.3a3dd04e.png";

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results/index.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Results: function() { return /* binding */ Results; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _results_item_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../results-item/index.mjs */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results-item/index.mjs");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results/editor.scss");
/* harmony import */ var _help_post_id_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help-post-id.png */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/results/help-post-id.png");
// WordPress dependencies


// Internal dependencies


// Import CSS.


// Import Assets.

const Results = props => {
  const {
    posts,
    onSelectPost,
    loading,
    totalItems,
    searchTerm,
    searchType
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-results"
  }, !posts && !searchTerm && searchType !== 'recent' && /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-results-message bu-components-post-chooser-before-search-message"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-results-message-box"
  }, searchType === 'slug' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search by Slug')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter the post slug to find it quickly.'))), searchType === 'default' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search Post Content')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter a search term to search the Title & Post Content. Note, post meta, taxonomies, and other metadata will not be searched.'))), searchType === 'id' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Find post by its ID')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('If looking for a specific post, enter the'), " ", /*#__PURE__*/React.createElement("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post ID')), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('in the search field.')), /*#__PURE__*/React.createElement("img", {
    className: "bu-components-post-chooser-help-image",
    src: _help_post_id_png__WEBPACK_IMPORTED_MODULE_3__
  }), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The post ID can be found in the URL of the post edit screen.'))))), searchTerm && !loading && totalItems === 0 && /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-results-message bu-components-post-chooser-no-results-message"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-results-message-box"
  }, searchType === 'default' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Posts Found')), /*#__PURE__*/React.createElement("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The search term:'), " ", /*#__PURE__*/React.createElement("code", null, searchTerm), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('did not match any posts.')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Your search term might be too specific. Try broadening your search.')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('If you have a specific post in mind, try searching for its title. Alternatively, you can try entering the post ID or slug.'))), searchType === 'slug' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Slug Not Found')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Check that the slug is exactly the same as the slug of the post. A partial match will not work.'))), searchType === 'id' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post ID Not Found')), /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Check that a numerical post ID has been entered and that the post type is correct.'))))), /*#__PURE__*/React.createElement("ul", {
    className: "bu-components-post-chooser-results-list",
    "data-loading": loading
  }, loading && /*#__PURE__*/React.createElement(React.Fragment, null, Array.from({
    length: 20
  }).map((_, index) => /*#__PURE__*/React.createElement(_results_item_index_mjs__WEBPACK_IMPORTED_MODULE_1__.ResultsItem, {
    key: index,
    placeholder: true
  }))), posts && Array.isArray(posts) && posts.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, posts.map(post => /*#__PURE__*/React.createElement(_results_item_index_mjs__WEBPACK_IMPORTED_MODULE_1__.ResultsItem, {
    key: post.id,
    post: post,
    onSelectPost: onSelectPost
  })))));
};

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/search-ui/editor.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/search-ui/editor.scss ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/search-ui/index.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/search-ui/index.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchUI: function() { return /* binding */ SearchUI; }
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LoadingSpinner_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/LoadingSpinner/index.mjs */ "./node_modules/@bostonuniversity/block-imports/components/LoadingSpinner/index.mjs");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/search-ui/editor.scss");




const SearchUI = props => {
  const {
    searchTerm,
    setSearchTerm,
    setSearchType,
    isLoading,
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter a search query'),
    hideLabelFromVision = true,
    placeholder,
    postTypes,
    primaryPostType,
    selectedPostType = primaryPostType || 'post',
    setSelectedPostType = () => {}
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-search-ui"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-search-controls"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    justify: "space-between",
    align: "start",
    className: "bu-components-post-chooser-search-settings"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, null, /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-search-bar"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
    className: "bu-components-post-chooser-search-field-base-control",
    label: label,
    hideLabelFromVision: hideLabelFromVision
  }, /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-search-field-container-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-search-field-icon-container"
  }, isLoading ? /*#__PURE__*/React.createElement(_components_LoadingSpinner_index_mjs__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinner, {
    shadow: false,
    className: "bu-components-post-chooser-search-field-spinner"
  }) : /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Icon, {
    icon: "search",
    size: 26,
    className: "bu-components-post-chooser-search-icon"
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: searchTerm,
    onChange: event => setSearchTerm(event.target.value),
    placeholder: placeholder,
    className: "bu-components-post-chooser-search-field",
    tabIndex: "0" // Todo: this is not working to set the focus on the search field when the modal opens.
  }), searchTerm && /*#__PURE__*/React.createElement("div", {
    className: "bu-components-post-chooser-search-field-icon-container"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear search'),
    onClick: () => {
      setSearchTerm('');
      setSearchType('recent');
    },
    icon: "dismiss",
    size: 26,
    className: "bu-components-post-chooser-search-clear-button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bu-components-post-chooser-search-clear-button-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear'))))))))), postTypes.length > 1 && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    className: "bu-components-post-chooser-posttype-select",
    justify: "space-between",
    align: "center"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Filter by Post Type'),
    value: selectedPostType,
    onChange: value => setSelectedPostType(value),
    options: postTypes
  })))));
};

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor.scss":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor.scss ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/index.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/index.mjs ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostChooser: function() { return /* reexport safe */ _postchooser_js__WEBPACK_IMPORTED_MODULE_0__.PostChooser; },
/* harmony export */   PostChooserSidebar: function() { return /* reexport safe */ _postchoosersidebar_js__WEBPACK_IMPORTED_MODULE_1__.PostChooserSidebar; }
/* harmony export */ });
/* harmony import */ var _postchooser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postchooser.js */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/postchooser.js");
/* harmony import */ var _postchoosersidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postchoosersidebar.js */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/postchoosersidebar.js");



/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/postchooser.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/postchooser.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostChooser: function() { return /* binding */ PostChooser; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_partials_modal_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-partials/modal/index.js */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor-partials/modal/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor.scss");
/**
 * Component: Post Chooser
 *
 * Displays the ten most recently published posts,
 * and an option to search.
 */

// WordPress dependencies


// Internal dependencies


// Import Editor Styles for this Component.

const PostChooser = props => {
  const {
    onSelectPost,
    modalLabel,
    modalTitle,
    postTypes,
    primaryPostType,
    searchPlaceholder,
    minCharacters = 3,
    onClose
  } = props;
  return /*#__PURE__*/React.createElement(_editor_partials_modal_index_js__WEBPACK_IMPORTED_MODULE_1__.PostChooserModal, {
    onSelectPost: onSelectPost,
    label: modalLabel,
    title: modalTitle,
    postTypes: postTypes,
    primaryPostType: primaryPostType,
    placeholder: searchPlaceholder,
    minCharacters: minCharacters,
    onClose: onClose
  });
};

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/postchoosersidebar.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/components/PostChooser/postchoosersidebar.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostChooserSidebar: function() { return /* binding */ PostChooserSidebar; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/editor.scss");
/**
 * Component: Post Chooser Sidebar
 *
 * Sidebar component for edits to selected post.
 */

// WordPress dependencies.





// Import Editor Styles for this Component.

const PostChooserSidebar = function (props) {
  const {
    children,
    // Optional. Allows child elements to be passed into the component.
    postID,
    // The ID of the selected post.
    postTitle,
    // The title of the selected post.
    postURL,
    // The URL of the selected post.
    onRemovePost = () => {},
    // Function to call when the post is removed.
    removePostButtonLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove'),
    // Label for the remove post button.
    openButtonLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Post'),
    // Label for the open post chooser button.
    changeButtonLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change'),
    // Label for the change post button.
    panelTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Selected Post'),
    // Title for the sidebar panel.
    showPostLink = true,
    // Whether to show a link to the post.
    onOpenPostChooserModal = () => {} // Function to call when the open modal button is pressed.
  } = props;
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: panelTitle,
    className: "bu-components-post-chooser-sidebar-options"
  }, postTitle && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement("div", {
    className: "components-post-chooser-sidebar-posttitle"
  }, /*#__PURE__*/React.createElement("span", {
    className: "components-post-chooser-sidebar-posttitle-label"
  }, "Title:"), postURL && showPostLink && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
    href: postURL,
    className: "components-post-chooser-sidebar-posttitle-link"
  }, "View Post"), /*#__PURE__*/React.createElement("h2", {
    className: "components-post-chooser-sidebar-posttitle-heading"
  }, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(postTitle)))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    wrap: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    onClick: () => onOpenPostChooserModal()
  }, postID ? changeButtonLabel : openButtonLabel)), postID && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexBlock, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isLink: true,
    onClick: onRemovePost
  }, removePostButtonLabel)))), children && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, /*#__PURE__*/React.createElement("div", {
    className: "components-post-chooser-sidebar-children"
  }, children))));
};

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/hooks/useDebouncedInput/index.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/hooks/useDebouncedInput/index.mjs ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDebouncedInput: function() { return /* binding */ useDebouncedInput; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/**
 * WordPress dependencies
 */



/**
 * Hook for debouncing input field values.
 *
 * Returns an array with:
 * - The current input value (updates immediately)
 * - Function to update the input value
 * - The debounced input value (updates after delay)
 *
 * @param {string} defaultValue - The default value for the input.
 * @param {number} delay - The debounce delay in milliseconds.
 * @return {[string, (value: string) => void, string]} Input values and setter.
 */
function useDebouncedInput(defaultValue = '', delay = 500) {
  const [input, setInput] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
  const [debouncedInput, setDebouncedInput] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);

  // Create a debounced version of setDebouncedInput
  const setDebouncedInputWithDelay = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useDebounce)(setDebouncedInput, delay);

  // Effect to update the debounced value when input changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setDebouncedInputWithDelay(input);
  }, [input, setDebouncedInputWithDelay]);
  return [input, setInput, debouncedInput];
}

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/hooks/useGetPagination/index.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/hooks/useGetPagination/index.mjs ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGetPagination: function() { return /* binding */ useGetPagination; }
/* harmony export */ });
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/**
 * WordPress dependencies
 */






// Add a check for the existence of getEntityRecordsTotalItems and getEntityRecordsTotalPages
// These are only available in WordPress 6.5 and later.
// If they are not available, we will use apiFetch to get the pagination information.
const hasNewSelectors = typeof (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store).getEntityRecordsTotalItems === 'function' && typeof (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store).getEntityRecordsTotalPages === 'function';
if (!hasNewSelectors) {
  console.warn('getEntityRecordsTotalItems and getEntityRecordsTotalPages are not available in @wordpress/core-data for this Version of WordPress. Using apiFetch instead.');
}

/**
 * Hook for retrieving pagination information from the WordPress REST API.
 *
 * @param {string} kind           The entity kind to retrieve. Defaults to postType.
 * @param {string} name           The entity name to retrieve. Defaults to post.
 * @param {object | number} [query] Optional. Query to pass to the getEntityRecords request. Defaults to an empty object.
 * @returns {Object}                An object containing pagination information: { pagination: { totalItems: number, totalPages: number, perPage: number } }
 */
const useGetPagination = (kind = 'postType', name = 'post', query = {}) => {
  // Memoize the query object to ensure stable reference
  const memoizedQuery = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => query, [JSON.stringify(query)]);

  // State to hold pagination information
  // This will hold total items and total pages.
  const [pagination, setPagination] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)({
    totalItems: 0,
    totalPages: 0,
    perPage: memoizedQuery.per_page || 10 // Default to 10 items per page if not specified
  });

  /**
   * Only runs in WordPress 6.5 and later.
   * Uses the new getEntityRecordsTotalItems and getEntityRecordsTotalPages selectors
   * to get the total items and total pages for the specified entity and kind.
   *
   * Returns an object with totalItems, totalPages, and isLoading.
   *
   * If the new selectors are not available, this effect will return an object with
   * totalItems and totalPages set to 0, and isLoading set to false.
   */
  const {
    totalItems,
    totalPages,
    isLoading
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const coreSelect = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store);
    return {
      totalItems: hasNewSelectors ? coreSelect.getEntityRecordsTotalItems(kind, name, query) : 0,
      totalPages: hasNewSelectors ? coreSelect.getEntityRecordsTotalPages(kind, name, query) : 0,
      isLoading: hasNewSelectors ? select('core/data').isResolving(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store, 'getEntityRecords', [kind, name, query]) : false // Return false if the new selectors are not available.
    };
  }, [kind, name, query, hasNewSelectors]);

  /**
   * Updates the pagination state with the total items and total pages
   * if the new selectors are available and the data is loaded.
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!hasNewSelectors) return; // If the new selectors are not available, skip this effect.

    if (!isLoading && totalItems && totalPages) {
      // Update the pagination state with total items and pages.
      setPagination(prev => ({
        ...prev,
        totalItems: totalItems,
        totalPages: totalPages
      }));
    }
  }, [totalItems, totalPages, hasNewSelectors, isLoading]);

  /**
   * Fetches the entity configuration for the specified entity and kind.
   * This allows us to construct the API endpoint for fetching pagination information via apiFetch.
   *
   * @effect
   * @dependency {string} kind	The entity kind.
   * @dependency {string} name 	The entity name.
   * @returns {Object} The entity configuration object, or undefined if not found.
   */
  const entityConfig = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    // Use getEntitiesByKind to get the entity config.
    const entities = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store).getEntitiesByKind(kind);
    return entities?.find(e => e.name === name);
  }, [kind, name]);

  /**
   * Fetches pagination information from the WordPress REST API.
   *
   * This effect runs whenever records, entity, kind, query, or entityConfig changes. It returns
   * the total items and total pages for the specified entity and kind in the same format as
   * the newer getEntityRecordsTotalItems and getEntityRecordsTotalPages selectors that we don't
   * have access to yet in this version of WordPress.
   *
   * It will not run if the new getEntityRecordsTotalItems and getEntityRecordsTotalPages
   * selectors are available (WordPress 6.5+).
   *
   * After we upgrade to WordPress 6.5 or later, this effect should be able to be removed.
   *
   * It makes a direct API request to the same endpoint that getEntityRecords uses,
   * but with a minimal per_page setting to reduce data transfer.
   *
   * The effect extracts total items and total pages from the response headers
   * (X-WP-Total and X-WP-TotalPages) and updates the pagination state.
   *
   * ToDo: In future WordPress versions (6.4+), this might be replaceable with
   * the getEntityRecordsTotalItems and getEntityRecordsTotalPages selectors.
   *
   * @effect
   * @dependency {Array} [records, entity, kind, JSON.stringify(query), entityConfig, pagination]
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // Only run this effect if the new selectors are not available, such as before WordPress 6.5.
    if (hasNewSelectors) return;
    const loadPaginationData = async () => {
      // If entityConfig is not available, skip fetching pagination data.
      if (!entityConfig) return;

      // Set default values for total items and pages.
      let totalItems = 0;
      let totalPages = 0;

      // Construct the same API path that getEntityRecords uses.
      const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)(entityConfig.baseURL, {
        ...entityConfig.baseURLParams,
        ...query,
        // Request the same number of records per page as specified in the query,
        // or default to 10 if not specified.
        per_page: pagination.perPage,
        page: 1 // Only request the first page to get total items and pages.
      });
      try {
        // Make a direct fetch to the REST API.
        const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__({
          path,
          parse: false
        });

        // Extract pagination info from the response headers.
        const totalItemsHeader = response.headers.get('X-WP-Total');
        const totalPagesHeader = response.headers.get('X-WP-TotalPages');
        totalItems = totalItemsHeader !== null ? parseInt(totalItemsHeader, 10) : 0;
        totalPages = totalPagesHeader !== null ? parseInt(totalPagesHeader, 10) : 0;
      } catch (error) {
        console.error('Error fetching pagination data:', error);
        totalItems = 0;
        totalPages = 0;
      } finally {
        // Update the pagination state.
        setPagination(prev => ({
          ...prev,
          totalItems: totalItems,
          totalPages: totalPages
        }));
      }
    };
    // Call the function to load pagination data.
    // This will run whenever records, entity, kind, query, or entityConfig changes
    loadPaginationData();
  }, [memoizedQuery, entityConfig]);

  // Return the pagination information
  return {
    pagination
  };
};

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/hooks/useMedia/index.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/hooks/useMedia/index.mjs ***!
  \*******************************************************************************/
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
      mediaObj: getMedia(...mediaParameters),
      isResolvingMedia: isResolving('getMedia', mediaParameters),
      hasResolvedMedia: hasFinishedResolution('getMedia', mediaParameters)
    };
  }, [id]);
}

/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/hooks/useRequestData/index.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/hooks/useRequestData/index.mjs ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRequestData: function() { return /* binding */ useRequestData; }
/* harmony export */ });
/* harmony import */ var lodash_isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject.js */ "./node_modules/lodash/isObject.js");
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
 * @param {string} kind           The entity kind to retrieve. Defaults to postType.
 * @param {string} name           The entity name to retrieve. Defaults to posts.
 * @param {object | number} [query] Optional. Query to pass to the geEntityRecords request. Defaults to an empty object. If a number is passed, it is used as the ID of the entity to retrieve via getEntityRecord.
 * @returns {Array} The data returned from the request.
 */
const useRequestData = (kind = 'postType', name = 'post', query = {}) => {
  const whichGER = lodash_isObject_js__WEBPACK_IMPORTED_MODULE_0__(query) ? 'getEntityRecords' : 'getEntityRecord';
  const {
    invalidateResolution
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/data');
  const {
    data,
    isLoading
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return {
      data: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store)[whichGER](kind, name, query),
      isLoading: select('core/data').isResolving(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store, whichGER, [kind, name, query])
    };
  }, [kind, name, query]);
  const invalidateResolver = () => {
    invalidateResolution(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store, whichGER, [kind, name, query]);
  };
  return [data, isLoading, invalidateResolver];
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
/* harmony export */   HelpWrapper: function() { return /* reexport safe */ _components_HelpWrapper__WEBPACK_IMPORTED_MODULE_0__.HelpWrapper; },
/* harmony export */   Image: function() { return /* reexport safe */ _components_Image_index_mjs__WEBPACK_IMPORTED_MODULE_1__.Image; },
/* harmony export */   LoadingSpinner: function() { return /* reexport safe */ _components_LoadingSpinner_index_mjs__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinner; },
/* harmony export */   Pagination: function() { return /* reexport safe */ _components_Pagination_index_mjs__WEBPACK_IMPORTED_MODULE_4__.Pagination; },
/* harmony export */   PostChooser: function() { return /* reexport safe */ _components_PostChooser_index_mjs__WEBPACK_IMPORTED_MODULE_3__.PostChooser; },
/* harmony export */   PostChooserSidebar: function() { return /* reexport safe */ _components_PostChooser_index_mjs__WEBPACK_IMPORTED_MODULE_3__.PostChooserSidebar; },
/* harmony export */   getImageData: function() { return /* reexport safe */ _utils_getImageData_index_mjs__WEBPACK_IMPORTED_MODULE_9__.getImageData; },
/* harmony export */   useDebouncedInput: function() { return /* reexport safe */ _hooks_useDebouncedInput_index_mjs__WEBPACK_IMPORTED_MODULE_8__.useDebouncedInput; },
/* harmony export */   useGetPagination: function() { return /* reexport safe */ _hooks_useGetPagination_index_mjs__WEBPACK_IMPORTED_MODULE_7__.useGetPagination; },
/* harmony export */   useMedia: function() { return /* reexport safe */ _hooks_useMedia_index_mjs__WEBPACK_IMPORTED_MODULE_5__.useMedia; },
/* harmony export */   useRequestData: function() { return /* reexport safe */ _hooks_useRequestData_index_mjs__WEBPACK_IMPORTED_MODULE_6__.useRequestData; }
/* harmony export */ });
/* harmony import */ var _components_HelpWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HelpWrapper */ "./node_modules/@bostonuniversity/block-imports/components/HelpWrapper/index.js");
/* harmony import */ var _components_Image_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Image/index.mjs */ "./node_modules/@bostonuniversity/block-imports/components/Image/index.mjs");
/* harmony import */ var _components_LoadingSpinner_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LoadingSpinner/index.mjs */ "./node_modules/@bostonuniversity/block-imports/components/LoadingSpinner/index.mjs");
/* harmony import */ var _components_PostChooser_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PostChooser/index.mjs */ "./node_modules/@bostonuniversity/block-imports/components/PostChooser/index.mjs");
/* harmony import */ var _components_Pagination_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Pagination/index.mjs */ "./node_modules/@bostonuniversity/block-imports/components/Pagination/index.mjs");
/* harmony import */ var _hooks_useMedia_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useMedia/index.mjs */ "./node_modules/@bostonuniversity/block-imports/hooks/useMedia/index.mjs");
/* harmony import */ var _hooks_useRequestData_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useRequestData/index.mjs */ "./node_modules/@bostonuniversity/block-imports/hooks/useRequestData/index.mjs");
/* harmony import */ var _hooks_useGetPagination_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useGetPagination/index.mjs */ "./node_modules/@bostonuniversity/block-imports/hooks/useGetPagination/index.mjs");
/* harmony import */ var _hooks_useDebouncedInput_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useDebouncedInput/index.mjs */ "./node_modules/@bostonuniversity/block-imports/hooks/useDebouncedInput/index.mjs");
/* harmony import */ var _utils_getImageData_index_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/getImageData/index.mjs */ "./node_modules/@bostonuniversity/block-imports/utils/getImageData/index.mjs");
// Components







// Hooks
// A React Hook is a special function that lets you "hook into" React state and lifecycle features from within functional components. Hooks enable stateful logic and side effects within functional components, offering a way to reuse logic across components. Crucially, hooks can only be called inside React functional components or custom hooks, and they must follow the "rules of hooks," such as being called at the top level of a component and not within loops or conditional statements.





// Utils
// A utility function is a standard JavaScript function that performs a specific task and is not tied to any particular framework or library. Utility functions are often used for tasks like data formatting, calculations, or other operations that don't require access to React's state or lifecycle. They can be called from anywhere in your code, including within React components or hooks.


/***/ }),

/***/ "./node_modules/@bostonuniversity/block-imports/utils/getImageData/index.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/@bostonuniversity/block-imports/utils/getImageData/index.mjs ***!
  \***********************************************************************************/
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

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ icon_default; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icon_default = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  ({ icon, size = 24, ...props }, ref) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
      width: size,
      height: size,
      ...props,
      ref
    });
  }
);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/more.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ more_default; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


var more_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, { d: "M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z" }) });

//# sourceMappingURL=more.js.map


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

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
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

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

var didWarnAboutKeySpread = {};
function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    {
      if (hasOwnProperty.call(props, 'key')) {
        var componentName = getComponentNameFromType(type);
        var keys = Object.keys(props).filter(function (k) {
          return k !== 'key';
        });
        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

          didWarnAboutKeySpread[componentName + beforeExample] = true;
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./src/blocks/sandbox-loadingspinner/block.json":
/*!******************************************************!*\
  !*** ./src/blocks/sandbox-loadingspinner/block.json ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/wp/5.8/block.json","apiVersion":2,"name":"r3-id-documentation/loadingspinner","version":"0.1.0","title":"Sandbox: LoadingSpinner","category":"r3-id-documentation-block-category","icon":"update","description":"This block is used to explore and adjust the parameters sent to the <LoadingSpinner> Component.","example":{"attributes":{"text":"Loading Message...","shadow":"Shadow is yes!","className":"¿classNamebra?"}},"attributes":{"text":{"type":"string","default":""},"shadow":{"type":"boolean","default":true},"className":{"type":"string","default":""}},"supports":{},"textdomain":"r3-id-documentation","editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/sandbox-loadingspinner/edit.js":
/*!***************************************************!*\
  !*** ./src/blocks/sandbox-loadingspinner/edit.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bostonuniversity_block_imports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bostonuniversity/block-imports */ "./node_modules/@bostonuniversity/block-imports/index.js");
/* harmony import */ var _modules_inspector_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/inspector.mjs */ "./src/blocks/sandbox-loadingspinner/modules/inspector.mjs");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/sandbox-loadingspinner/editor.scss");
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
  return /*#__PURE__*/React.createElement("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(), /*#__PURE__*/React.createElement(_modules_inspector_mjs__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerInspectorControls, props), /*#__PURE__*/React.createElement(_bostonuniversity_block_imports__WEBPACK_IMPORTED_MODULE_1__.LoadingSpinner, {
    text: text // Default is undefined.
    ,

    shadow: shadow // Default is true.
    ,

    className: className
  }));
}

/***/ }),

/***/ "./src/blocks/sandbox-loadingspinner/editor.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/sandbox-loadingspinner/editor.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/sandbox-loadingspinner/modules/inspector.mjs":
/*!*****************************************************************!*\
  !*** ./src/blocks/sandbox-loadingspinner/modules/inspector.mjs ***!
  \*****************************************************************/
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

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

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

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["url"];

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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!****************************************************!*\
  !*** ./src/blocks/sandbox-loadingspinner/index.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/sandbox-loadingspinner/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/sandbox-loadingspinner/block.json");
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