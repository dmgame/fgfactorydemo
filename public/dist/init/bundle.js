/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/init.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common-css/buttons.css":
/*!************************************!*\
  !*** ./src/common-css/buttons.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/buttons.css?");

/***/ }),

/***/ "./src/common-css/call-to-action.css":
/*!*******************************************!*\
  !*** ./src/common-css/call-to-action.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/call-to-action.css?");

/***/ }),

/***/ "./src/common-css/cards.css":
/*!**********************************!*\
  !*** ./src/common-css/cards.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/cards.css?");

/***/ }),

/***/ "./src/common-css/colors.css":
/*!***********************************!*\
  !*** ./src/common-css/colors.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/colors.css?");

/***/ }),

/***/ "./src/common-css/footer.css":
/*!***********************************!*\
  !*** ./src/common-css/footer.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/footer.css?");

/***/ }),

/***/ "./src/common-css/grid.css":
/*!*********************************!*\
  !*** ./src/common-css/grid.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/grid.css?");

/***/ }),

/***/ "./src/common-css/header.css":
/*!***********************************!*\
  !*** ./src/common-css/header.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/header.css?");

/***/ }),

/***/ "./src/common-css/helpers.css":
/*!************************************!*\
  !*** ./src/common-css/helpers.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/helpers.css?");

/***/ }),

/***/ "./src/common-css/list.css":
/*!*********************************!*\
  !*** ./src/common-css/list.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/list.css?");

/***/ }),

/***/ "./src/common-css/reset.css":
/*!**********************************!*\
  !*** ./src/common-css/reset.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/reset.css?");

/***/ }),

/***/ "./src/common-css/section-review.css":
/*!*******************************************!*\
  !*** ./src/common-css/section-review.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/section-review.css?");

/***/ }),

/***/ "./src/common-css/slider.css":
/*!***********************************!*\
  !*** ./src/common-css/slider.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/slider.css?");

/***/ }),

/***/ "./src/common-css/tabs.css":
/*!*********************************!*\
  !*** ./src/common-css/tabs.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/tabs.css?");

/***/ }),

/***/ "./src/common-css/text.css":
/*!*********************************!*\
  !*** ./src/common-css/text.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/text.css?");

/***/ }),

/***/ "./src/common-css/titles.css":
/*!***********************************!*\
  !*** ./src/common-css/titles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/titles.css?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-css/reset.css */ \"./src/common-css/reset.css\");\n/* harmony import */ var _common_css_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_css_reset_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_css_grid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-css/grid.css */ \"./src/common-css/grid.css\");\n/* harmony import */ var _common_css_grid_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_css_grid_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_css_colors_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-css/colors.css */ \"./src/common-css/colors.css\");\n/* harmony import */ var _common_css_colors_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_css_colors_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_css_helpers_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-css/helpers.css */ \"./src/common-css/helpers.css\");\n/* harmony import */ var _common_css_helpers_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_css_helpers_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_css_text_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common-css/text.css */ \"./src/common-css/text.css\");\n/* harmony import */ var _common_css_text_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_css_text_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common_css_titles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common-css/titles.css */ \"./src/common-css/titles.css\");\n/* harmony import */ var _common_css_titles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_css_titles_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_css_buttons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common-css/buttons.css */ \"./src/common-css/buttons.css\");\n/* harmony import */ var _common_css_buttons_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_css_buttons_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _common_css_cards_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common-css/cards.css */ \"./src/common-css/cards.css\");\n/* harmony import */ var _common_css_cards_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_css_cards_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _common_css_header_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common-css/header.css */ \"./src/common-css/header.css\");\n/* harmony import */ var _common_css_header_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_css_header_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _common_css_list_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common-css/list.css */ \"./src/common-css/list.css\");\n/* harmony import */ var _common_css_list_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_common_css_list_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _common_css_call_to_action_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common-css/call-to-action.css */ \"./src/common-css/call-to-action.css\");\n/* harmony import */ var _common_css_call_to_action_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_common_css_call_to_action_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _common_css_section_review_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common-css/section-review.css */ \"./src/common-css/section-review.css\");\n/* harmony import */ var _common_css_section_review_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_common_css_section_review_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _common_css_slider_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common-css/slider.css */ \"./src/common-css/slider.css\");\n/* harmony import */ var _common_css_slider_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_common_css_slider_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _common_css_tabs_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common-css/tabs.css */ \"./src/common-css/tabs.css\");\n/* harmony import */ var _common_css_tabs_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_common_css_tabs_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _common_css_footer_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common-css/footer.css */ \"./src/common-css/footer.css\");\n/* harmony import */ var _common_css_footer_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_common_css_footer_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _pages_sections_css_page_inner_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pages-sections-css/page-inner.css */ \"./src/pages-sections-css/page-inner.css\");\n/* harmony import */ var _pages_sections_css_page_inner_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_page_inner_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _pages_sections_css_project_description_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pages-sections-css/project-description.css */ \"./src/pages-sections-css/project-description.css\");\n/* harmony import */ var _pages_sections_css_project_description_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_project_description_css__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _pages_sections_css_project_technology_stack_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pages-sections-css/project-technology-stack.css */ \"./src/pages-sections-css/project-technology-stack.css\");\n/* harmony import */ var _pages_sections_css_project_technology_stack_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_project_technology_stack_css__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _pages_sections_css_related_works_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../pages-sections-css/related-works.css */ \"./src/pages-sections-css/related-works.css\");\n/* harmony import */ var _pages_sections_css_related_works_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_related_works_css__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _pages_sections_css_range_image_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pages-sections-css/range-image.css */ \"./src/pages-sections-css/range-image.css\");\n/* harmony import */ var _pages_sections_css_range_image_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_range_image_css__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _pages_sections_css_next_page_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pages-sections-css/next-page.css */ \"./src/pages-sections-css/next-page.css\");\n/* harmony import */ var _pages_sections_css_next_page_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_next_page_css__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _pages_sections_css_works_container_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pages-sections-css/works-container.css */ \"./src/pages-sections-css/works-container.css\");\n/* harmony import */ var _pages_sections_css_works_container_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_works_container_css__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _pages_sections_css_work_main_preview_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../pages-sections-css/work-main-preview.css */ \"./src/pages-sections-css/work-main-preview.css\");\n/* harmony import */ var _pages_sections_css_work_main_preview_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_work_main_preview_css__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _pages_sections_css_statistics_block_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../pages-sections-css/statistics-block.css */ \"./src/pages-sections-css/statistics-block.css\");\n/* harmony import */ var _pages_sections_css_statistics_block_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_statistics_block_css__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _pages_sections_css_service_fade_carousel_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../pages-sections-css/service-fade-carousel.css */ \"./src/pages-sections-css/service-fade-carousel.css\");\n/* harmony import */ var _pages_sections_css_service_fade_carousel_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_service_fade_carousel_css__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _pages_css_web_project_bigbash_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../pages-css/web-project-bigbash.css */ \"./src/pages-css/web-project-bigbash.css\");\n/* harmony import */ var _pages_css_web_project_bigbash_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_pages_css_web_project_bigbash_css__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _pages_css_blog_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../pages-css/blog.css */ \"./src/pages-css/blog.css\");\n/* harmony import */ var _pages_css_blog_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_pages_css_blog_css__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _pages_css_blog_article_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../pages-css/blog-article.css */ \"./src/pages-css/blog-article.css\");\n/* harmony import */ var _pages_css_blog_article_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_pages_css_blog_article_css__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var _pages_css_web_works_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../pages-css/web-works.css */ \"./src/pages-css/web-works.css\");\n/* harmony import */ var _pages_css_web_works_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_pages_css_web_works_css__WEBPACK_IMPORTED_MODULE_28__);\n/* harmony import */ var _pages_css_index_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../pages-css/index.css */ \"./src/pages-css/index.css\");\n/* harmony import */ var _pages_css_index_css__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_pages_css_index_css__WEBPACK_IMPORTED_MODULE_29__);\n/* harmony import */ var _plugins_init__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./plugins-init */ \"./src/js/plugins-init.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconsole.log('Init plugins');\n\n//# sourceURL=webpack:///./src/js/init.js?");

/***/ }),

/***/ "./src/js/plugins-init.js":
/*!********************************!*\
  !*** ./src/js/plugins-init.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slickSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slickSlider */ \"./src/js/slickSlider.js\");\n // Init carousel\n\nvar slider = $('[data-slick-slider]');\nvar carouselNav = $('.carousel-nav');\nvar caroiselNavItems = $('.carousel-nav .carousel-nav-item');\n\nif (slider.length) {\n  Object(_slickSlider__WEBPACK_IMPORTED_MODULE_0__[\"initSlider\"])(slider);\n}\n\nif (carouselNav && caroiselNavItems.length) {\n  Object(_slickSlider__WEBPACK_IMPORTED_MODULE_0__[\"initSliderNav\"])(slider, caroiselNavItems);\n} // Init Tabs\n\n\n$('[data-tab-nav] a').on('click', function (e) {\n  e.preventDefault();\n  $(this).tab('show');\n}); // Range Image Slider\n\nfunction rangeImageSlider() {\n  var img = document.querySelector('.range-img');\n  var naturalImg = document.querySelector('.range-img img');\n  var control = $('#range-img-control');\n  if (!control || !img) return;\n  control.slider({\n    value: 0,\n    min: 0,\n    max: 100,\n    step: 0.5,\n    slide: function slide(event, ui) {\n      console.log(ui);\n      img.style.backgroundPositionX = \"\".concat(ui.value, \"%\");\n    }\n  });\n  var mouseIsPressed = false;\n  var startPos = 0;\n  var naturalImgWidth = naturalImg.naturalWidth;\n  img.addEventListener('mousedown', function () {\n    return mouseIsPressed = true;\n  });\n  document.addEventListener('mouseup', function () {\n    mouseIsPressed = false;\n    startPos = 0;\n  });\n  img.addEventListener('mousemove', function (e) {\n    if (!mouseIsPressed) {\n      return;\n    }\n\n    if (startPos === 0) {\n      startPos = e.offsetX;\n    }\n\n    var difference = (e.offsetX - startPos) / naturalImgWidth * 100 / 29;\n    var currentBgPos = parseFloat(img.style.backgroundPositionX) || 0;\n    var pos;\n    console.log('startPos', startPos);\n    console.log('difference', difference);\n    console.log('currentBgPos', currentBgPos);\n    console.log('naturalImgWidth', naturalImgWidth);\n    console.log('==========================');\n\n    if (difference < 0) {\n      pos = -currentBgPos + difference;\n      if (pos < -100) return;\n      control.slider('value', Math.abs(pos));\n      img.style.backgroundPositionX = \"\".concat(Math.abs(pos), \"%\");\n    } else {\n      pos = currentBgPos - difference;\n      if (Math.abs(pos) < 2) pos = 0;\n      control.slider('value', Math.abs(pos));\n      img.style.backgroundPositionX = \"\".concat(Math.abs(pos), \"%\");\n    }\n  });\n} // init range image slider\n\n\nrangeImageSlider(); // Set bg images\n\nfunction setImageBgFromDataUrl() {\n  var images = document.querySelectorAll('[data-image-bg]');\n  if (!images.length) return;\n  images.forEach(function (img) {\n    var url = img.dataset.imageBg;\n    img.style.backgroundImage = \"url(\".concat(url, \")\");\n  });\n}\n\nsetImageBgFromDataUrl();\n\n//# sourceURL=webpack:///./src/js/plugins-init.js?");

/***/ }),

/***/ "./src/js/slickSlider.js":
/*!*******************************!*\
  !*** ./src/js/slickSlider.js ***!
  \*******************************/
/*! exports provided: initSlider, initSliderNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initSlider\", function() { return initSlider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initSliderNav\", function() { return initSliderNav; });\nfunction setEvents(slider, externalNav) {\n  // Set event on slider for change class of navigation\n  slider.on('afterChange', function (event, slick, currentSlide) {\n    externalNav.each(function (index, item) {\n      var slideIndex = item.dataset.slideIndex;\n\n      if (parseInt(slideIndex) === currentSlide) {\n        item.classList.add('active');\n      } else {\n        item.classList.remove('active');\n      }\n    });\n  });\n  externalNav.on('click', function (e) {\n    var slideIndex = parseInt(e.currentTarget.dataset.slideIndex);\n\n    if (!isNaN(slideIndex) && typeof slideIndex === 'number') {\n      slider.slick('slickGoTo', slideIndex);\n    }\n  });\n}\n\nfunction initSlider(slider) {\n  slider.slick();\n}\nfunction initSliderNav(slider, caroiselNavItems) {\n  setEvents(slider, caroiselNavItems);\n}\n\n//# sourceURL=webpack:///./src/js/slickSlider.js?");

/***/ }),

/***/ "./src/pages-css/blog-article.css":
/*!****************************************!*\
  !*** ./src/pages-css/blog-article.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-css/blog-article.css?");

/***/ }),

/***/ "./src/pages-css/blog.css":
/*!********************************!*\
  !*** ./src/pages-css/blog.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-css/blog.css?");

/***/ }),

/***/ "./src/pages-css/index.css":
/*!*********************************!*\
  !*** ./src/pages-css/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-css/index.css?");

/***/ }),

/***/ "./src/pages-css/web-project-bigbash.css":
/*!***********************************************!*\
  !*** ./src/pages-css/web-project-bigbash.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-css/web-project-bigbash.css?");

/***/ }),

/***/ "./src/pages-css/web-works.css":
/*!*************************************!*\
  !*** ./src/pages-css/web-works.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-css/web-works.css?");

/***/ }),

/***/ "./src/pages-sections-css/next-page.css":
/*!**********************************************!*\
  !*** ./src/pages-sections-css/next-page.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/next-page.css?");

/***/ }),

/***/ "./src/pages-sections-css/page-inner.css":
/*!***********************************************!*\
  !*** ./src/pages-sections-css/page-inner.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/page-inner.css?");

/***/ }),

/***/ "./src/pages-sections-css/project-description.css":
/*!********************************************************!*\
  !*** ./src/pages-sections-css/project-description.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/project-description.css?");

/***/ }),

/***/ "./src/pages-sections-css/project-technology-stack.css":
/*!*************************************************************!*\
  !*** ./src/pages-sections-css/project-technology-stack.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/project-technology-stack.css?");

/***/ }),

/***/ "./src/pages-sections-css/range-image.css":
/*!************************************************!*\
  !*** ./src/pages-sections-css/range-image.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/range-image.css?");

/***/ }),

/***/ "./src/pages-sections-css/related-works.css":
/*!**************************************************!*\
  !*** ./src/pages-sections-css/related-works.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/related-works.css?");

/***/ }),

/***/ "./src/pages-sections-css/service-fade-carousel.css":
/*!**********************************************************!*\
  !*** ./src/pages-sections-css/service-fade-carousel.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/service-fade-carousel.css?");

/***/ }),

/***/ "./src/pages-sections-css/statistics-block.css":
/*!*****************************************************!*\
  !*** ./src/pages-sections-css/statistics-block.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/statistics-block.css?");

/***/ }),

/***/ "./src/pages-sections-css/work-main-preview.css":
/*!******************************************************!*\
  !*** ./src/pages-sections-css/work-main-preview.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/work-main-preview.css?");

/***/ }),

/***/ "./src/pages-sections-css/works-container.css":
/*!****************************************************!*\
  !*** ./src/pages-sections-css/works-container.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/works-container.css?");

/***/ })

/******/ });