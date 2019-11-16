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

/***/ "./src/common-css/modal.css":
/*!**********************************!*\
  !*** ./src/common-css/modal.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/modal.css?");

/***/ }),

/***/ "./src/common-css/popover.css":
/*!************************************!*\
  !*** ./src/common-css/popover.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common-css/popover.css?");

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

/***/ "./src/css-media/blog-media.css":
/*!**************************************!*\
  !*** ./src/css-media/blog-media.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-media/blog-media.css?");

/***/ }),

/***/ "./src/css-media/contactus-media.css":
/*!*******************************************!*\
  !*** ./src/css-media/contactus-media.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-media/contactus-media.css?");

/***/ }),

/***/ "./src/css-media/index-media.css":
/*!***************************************!*\
  !*** ./src/css-media/index-media.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-media/index-media.css?");

/***/ }),

/***/ "./src/css-media/team-media.css":
/*!**************************************!*\
  !*** ./src/css-media/team-media.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-media/team-media.css?");

/***/ }),

/***/ "./src/css-media/web-projects-media.css":
/*!**********************************************!*\
  !*** ./src/css-media/web-projects-media.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-media/web-projects-media.css?");

/***/ }),

/***/ "./src/css-media/web-services-media.css":
/*!**********************************************!*\
  !*** ./src/css-media/web-services-media.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-media/web-services-media.css?");

/***/ }),

/***/ "./src/css-media/work-media.css":
/*!**************************************!*\
  !*** ./src/css-media/work-media.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css-media/work-media.css?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! exports provided: showInputError, removeInputError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showInputError\", function() { return showInputError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeInputError\", function() { return removeInputError; });\n/**\n * Function inputErrorTemplate\n * @param {String} msg\n */\nfunction inputErrorTemplate(msg) {\n  return \"\\n    <div class=\\\"invalid-feedback\\\">\".concat(msg, \"</div>\\n  \");\n}\n/**\n * Function showInputError. Add input error\n * @param {HTMLInputElement} el\n */\n\n\nfunction showInputError(el) {\n  var parent = el.parentElement;\n  var errMsg = parent.querySelector('.invalid-feedback');\n  if (errMsg) return;\n  var msg = el.dataset.invalidMessage || 'Invalid input';\n  var template = inputErrorTemplate(msg);\n  el.classList.add('is-invalid');\n  parent.insertAdjacentHTML('beforeend', template);\n}\n/**\n * Function removeInputError. Remove input error\n * @param {HTMLInputElement} el\n */\n\nfunction removeInputError(el) {\n  var parent = el.parentElement;\n  var err = parent.querySelector('.invalid-feedback');\n  if (!err) return;\n  el.classList.remove('is-invalid');\n  parent.removeChild(err);\n}\n\n//# sourceURL=webpack:///./src/js/form.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-css/reset.css */ \"./src/common-css/reset.css\");\n/* harmony import */ var _common_css_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_css_reset_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_css_grid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-css/grid.css */ \"./src/common-css/grid.css\");\n/* harmony import */ var _common_css_grid_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_css_grid_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_css_colors_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-css/colors.css */ \"./src/common-css/colors.css\");\n/* harmony import */ var _common_css_colors_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_css_colors_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_css_helpers_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-css/helpers.css */ \"./src/common-css/helpers.css\");\n/* harmony import */ var _common_css_helpers_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_css_helpers_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_css_text_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common-css/text.css */ \"./src/common-css/text.css\");\n/* harmony import */ var _common_css_text_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_css_text_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common_css_titles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common-css/titles.css */ \"./src/common-css/titles.css\");\n/* harmony import */ var _common_css_titles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_css_titles_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_css_buttons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common-css/buttons.css */ \"./src/common-css/buttons.css\");\n/* harmony import */ var _common_css_buttons_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_css_buttons_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _common_css_cards_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common-css/cards.css */ \"./src/common-css/cards.css\");\n/* harmony import */ var _common_css_cards_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_css_cards_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _common_css_header_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common-css/header.css */ \"./src/common-css/header.css\");\n/* harmony import */ var _common_css_header_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_css_header_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _common_css_list_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common-css/list.css */ \"./src/common-css/list.css\");\n/* harmony import */ var _common_css_list_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_common_css_list_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _common_css_call_to_action_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common-css/call-to-action.css */ \"./src/common-css/call-to-action.css\");\n/* harmony import */ var _common_css_call_to_action_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_common_css_call_to_action_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _common_css_section_review_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common-css/section-review.css */ \"./src/common-css/section-review.css\");\n/* harmony import */ var _common_css_section_review_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_common_css_section_review_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _common_css_slider_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common-css/slider.css */ \"./src/common-css/slider.css\");\n/* harmony import */ var _common_css_slider_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_common_css_slider_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _common_css_tabs_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common-css/tabs.css */ \"./src/common-css/tabs.css\");\n/* harmony import */ var _common_css_tabs_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_common_css_tabs_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _common_css_footer_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common-css/footer.css */ \"./src/common-css/footer.css\");\n/* harmony import */ var _common_css_footer_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_common_css_footer_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _common_css_popover_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common-css/popover.css */ \"./src/common-css/popover.css\");\n/* harmony import */ var _common_css_popover_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_common_css_popover_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _common_css_modal_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common-css/modal.css */ \"./src/common-css/modal.css\");\n/* harmony import */ var _common_css_modal_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_common_css_modal_css__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _pages_sections_css_page_inner_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pages-sections-css/page-inner.css */ \"./src/pages-sections-css/page-inner.css\");\n/* harmony import */ var _pages_sections_css_page_inner_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_page_inner_css__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _pages_sections_css_project_description_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../pages-sections-css/project-description.css */ \"./src/pages-sections-css/project-description.css\");\n/* harmony import */ var _pages_sections_css_project_description_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_project_description_css__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _pages_sections_css_project_technology_stack_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pages-sections-css/project-technology-stack.css */ \"./src/pages-sections-css/project-technology-stack.css\");\n/* harmony import */ var _pages_sections_css_project_technology_stack_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_project_technology_stack_css__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _pages_sections_css_related_works_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pages-sections-css/related-works.css */ \"./src/pages-sections-css/related-works.css\");\n/* harmony import */ var _pages_sections_css_related_works_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_related_works_css__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _pages_sections_css_range_image_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pages-sections-css/range-image.css */ \"./src/pages-sections-css/range-image.css\");\n/* harmony import */ var _pages_sections_css_range_image_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_range_image_css__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _pages_sections_css_next_page_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../pages-sections-css/next-page.css */ \"./src/pages-sections-css/next-page.css\");\n/* harmony import */ var _pages_sections_css_next_page_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_next_page_css__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _pages_sections_css_works_container_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../pages-sections-css/works-container.css */ \"./src/pages-sections-css/works-container.css\");\n/* harmony import */ var _pages_sections_css_works_container_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_works_container_css__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _pages_sections_css_work_main_preview_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../pages-sections-css/work-main-preview.css */ \"./src/pages-sections-css/work-main-preview.css\");\n/* harmony import */ var _pages_sections_css_work_main_preview_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_work_main_preview_css__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _pages_sections_css_statistics_block_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../pages-sections-css/statistics-block.css */ \"./src/pages-sections-css/statistics-block.css\");\n/* harmony import */ var _pages_sections_css_statistics_block_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_statistics_block_css__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _pages_sections_css_service_fade_carousel_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../pages-sections-css/service-fade-carousel.css */ \"./src/pages-sections-css/service-fade-carousel.css\");\n/* harmony import */ var _pages_sections_css_service_fade_carousel_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_service_fade_carousel_css__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _pages_sections_css_technology_stack_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../pages-sections-css/technology-stack.css */ \"./src/pages-sections-css/technology-stack.css\");\n/* harmony import */ var _pages_sections_css_technology_stack_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_technology_stack_css__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var _pages_sections_css_team_slider_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../pages-sections-css/team-slider.css */ \"./src/pages-sections-css/team-slider.css\");\n/* harmony import */ var _pages_sections_css_team_slider_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_team_slider_css__WEBPACK_IMPORTED_MODULE_28__);\n/* harmony import */ var _pages_sections_css_contact_us_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../pages-sections-css/contact-us.css */ \"./src/pages-sections-css/contact-us.css\");\n/* harmony import */ var _pages_sections_css_contact_us_css__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_contact_us_css__WEBPACK_IMPORTED_MODULE_29__);\n/* harmony import */ var _pages_sections_css_character_ineractive_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../pages-sections-css/character-ineractive.css */ \"./src/pages-sections-css/character-ineractive.css\");\n/* harmony import */ var _pages_sections_css_character_ineractive_css__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_character_ineractive_css__WEBPACK_IMPORTED_MODULE_30__);\n/* harmony import */ var _pages_sections_css_video_block_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../pages-sections-css/video-block.css */ \"./src/pages-sections-css/video-block.css\");\n/* harmony import */ var _pages_sections_css_video_block_css__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_pages_sections_css_video_block_css__WEBPACK_IMPORTED_MODULE_31__);\n/* harmony import */ var _pages_css_web_project_bigbash_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../pages-css/web-project-bigbash.css */ \"./src/pages-css/web-project-bigbash.css\");\n/* harmony import */ var _pages_css_web_project_bigbash_css__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_pages_css_web_project_bigbash_css__WEBPACK_IMPORTED_MODULE_32__);\n/* harmony import */ var _pages_css_blog_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../pages-css/blog.css */ \"./src/pages-css/blog.css\");\n/* harmony import */ var _pages_css_blog_css__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_pages_css_blog_css__WEBPACK_IMPORTED_MODULE_33__);\n/* harmony import */ var _pages_css_blog_article_css__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../pages-css/blog-article.css */ \"./src/pages-css/blog-article.css\");\n/* harmony import */ var _pages_css_blog_article_css__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_pages_css_blog_article_css__WEBPACK_IMPORTED_MODULE_34__);\n/* harmony import */ var _pages_css_web_works_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../pages-css/web-works.css */ \"./src/pages-css/web-works.css\");\n/* harmony import */ var _pages_css_web_works_css__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_pages_css_web_works_css__WEBPACK_IMPORTED_MODULE_35__);\n/* harmony import */ var _pages_css_index_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../pages-css/index.css */ \"./src/pages-css/index.css\");\n/* harmony import */ var _pages_css_index_css__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_pages_css_index_css__WEBPACK_IMPORTED_MODULE_36__);\n/* harmony import */ var _pages_css_service_pages_css__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../pages-css/service-pages.css */ \"./src/pages-css/service-pages.css\");\n/* harmony import */ var _pages_css_service_pages_css__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_pages_css_service_pages_css__WEBPACK_IMPORTED_MODULE_37__);\n/* harmony import */ var _pages_css_team_css__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../pages-css/team.css */ \"./src/pages-css/team.css\");\n/* harmony import */ var _pages_css_team_css__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_pages_css_team_css__WEBPACK_IMPORTED_MODULE_38__);\n/* harmony import */ var _pages_css_contact_us_css__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../pages-css/contact-us.css */ \"./src/pages-css/contact-us.css\");\n/* harmony import */ var _pages_css_contact_us_css__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_pages_css_contact_us_css__WEBPACK_IMPORTED_MODULE_39__);\n/* harmony import */ var _pages_css_dedicated_css__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../pages-css/dedicated.css */ \"./src/pages-css/dedicated.css\");\n/* harmony import */ var _pages_css_dedicated_css__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_pages_css_dedicated_css__WEBPACK_IMPORTED_MODULE_40__);\n/* harmony import */ var _pages_css_project_pastry_css__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../pages-css/project-pastry.css */ \"./src/pages-css/project-pastry.css\");\n/* harmony import */ var _pages_css_project_pastry_css__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_pages_css_project_pastry_css__WEBPACK_IMPORTED_MODULE_41__);\n/* harmony import */ var _css_media_index_media_css__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../css-media/index-media.css */ \"./src/css-media/index-media.css\");\n/* harmony import */ var _css_media_index_media_css__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_css_media_index_media_css__WEBPACK_IMPORTED_MODULE_42__);\n/* harmony import */ var _css_media_web_projects_media_css__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../css-media/web-projects-media.css */ \"./src/css-media/web-projects-media.css\");\n/* harmony import */ var _css_media_web_projects_media_css__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_css_media_web_projects_media_css__WEBPACK_IMPORTED_MODULE_43__);\n/* harmony import */ var _css_media_web_services_media_css__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../css-media/web-services-media.css */ \"./src/css-media/web-services-media.css\");\n/* harmony import */ var _css_media_web_services_media_css__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_css_media_web_services_media_css__WEBPACK_IMPORTED_MODULE_44__);\n/* harmony import */ var _css_media_team_media_css__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../css-media/team-media.css */ \"./src/css-media/team-media.css\");\n/* harmony import */ var _css_media_team_media_css__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_css_media_team_media_css__WEBPACK_IMPORTED_MODULE_45__);\n/* harmony import */ var _css_media_blog_media_css__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../css-media/blog-media.css */ \"./src/css-media/blog-media.css\");\n/* harmony import */ var _css_media_blog_media_css__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_css_media_blog_media_css__WEBPACK_IMPORTED_MODULE_46__);\n/* harmony import */ var _css_media_contactus_media_css__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../css-media/contactus-media.css */ \"./src/css-media/contactus-media.css\");\n/* harmony import */ var _css_media_contactus_media_css__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_css_media_contactus_media_css__WEBPACK_IMPORTED_MODULE_47__);\n/* harmony import */ var _css_media_work_media_css__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../css-media/work-media.css */ \"./src/css-media/work-media.css\");\n/* harmony import */ var _css_media_work_media_css__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_css_media_work_media_css__WEBPACK_IMPORTED_MODULE_48__);\n/* harmony import */ var _plugins_init__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./plugins-init */ \"./src/js/plugins-init.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconsole.log('Init plugins');\n\n//# sourceURL=webpack:///./src/js/init.js?");

/***/ }),

/***/ "./src/js/plugins-init.js":
/*!********************************!*\
  !*** ./src/js/plugins-init.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slickSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slickSlider */ \"./src/js/slickSlider.js\");\n/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate */ \"./src/js/validate.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"./src/js/form.js\");\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n // menu mobile\n\nvar menuBtn = document.querySelector(\".open-menu\");\nvar menu = document.querySelector(\".header-nav--mobile\");\n\nif (menuBtn) {\n  var openMenu = function openMenu(event) {\n    menu.classList.toggle(\"header-active\");\n    menuBtn.classList.toggle(\"open-menu--active\"); // document.documentElement.style.overflowY = menu.classList.contains('header-active') ? 'hidden' : 'auto';\n\n    document.body.classList.toggle('overflowOnScroll');\n  };\n\n  menuBtn.addEventListener(\"click\", openMenu);\n} // Init carousel\n\n\nvar slider = $('[data-slick-slider]');\nvar carouselNav = $('.carousel-nav');\nvar caroiselNavItems = $('.carousel-nav .carousel-nav-item');\n\nif (slider.length) {\n  Object(_slickSlider__WEBPACK_IMPORTED_MODULE_0__[\"initSlider\"])(slider);\n}\n\nif (carouselNav && caroiselNavItems.length) {\n  Object(_slickSlider__WEBPACK_IMPORTED_MODULE_0__[\"initSliderNav\"])(caroiselNavItems);\n} // Init Tabs\n\n\n$('[data-tab-nav] a').on('click', function (e) {\n  e.preventDefault();\n  $('[data-tab-nav] a').removeClass('active');\n  $(this).tab('show');\n}); // Range Image Slider\n\nfunction rangeImageSlider() {\n  var img = document.querySelector('.range-img');\n  var naturalImg = document.querySelector('.range-img img');\n  var control = $('#range-img-control');\n  if (!control || !img) return;\n  control.slider({\n    value: 0,\n    min: 0,\n    max: 100,\n    step: 0.5,\n    slide: function slide(event, ui) {\n      img.style.backgroundPositionX = \"\".concat(ui.value, \"%\");\n    }\n  });\n  var mouseIsPressed = false;\n  var startPos = 0;\n  var naturalImgWidth = naturalImg.naturalWidth;\n\n  function onMouseDown() {\n    mouseIsPressed = true;\n  }\n\n  function onMouseUp() {\n    mouseIsPressed = false;\n    startPos = 0;\n  }\n\n  function onMouseMove(e) {\n    if (!mouseIsPressed) {\n      return;\n    }\n\n    if (startPos === 0) {\n      startPos = e.offsetX || e.touches[0].screenX;\n    }\n\n    var difference = ((e.offsetX || e.touches[0].screenX) - startPos) / naturalImgWidth * 100 / 29;\n    var currentBgPos = parseFloat(img.style.backgroundPositionX) || 0;\n    var pos; // console.log('startPos', startPos);\n    // console.log('difference', difference);\n    // console.log('currentBgPos', currentBgPos);\n    // console.log('naturalImgWidth', naturalImgWidth);\n    // console.log('==========================');\n\n    if (difference < 0) {\n      pos = -currentBgPos + difference;\n      if (pos < -100) return;\n      control.slider('value', Math.abs(pos));\n      img.style.backgroundPositionX = \"\".concat(Math.abs(pos), \"%\");\n    } else {\n      pos = currentBgPos - difference;\n      if (Math.abs(pos) < 2) pos = 0;\n      control.slider('value', Math.abs(pos));\n      img.style.backgroundPositionX = \"\".concat(Math.abs(pos), \"%\");\n    }\n  }\n\n  img.addEventListener('mousedown', onMouseDown);\n  img.addEventListener('touchstart', onMouseDown);\n  document.addEventListener('mouseup', onMouseUp);\n  document.addEventListener('touchend', onMouseUp);\n  img.addEventListener('mousemove', onMouseMove);\n  img.addEventListener('touchmove', onMouseMove);\n} // init range image slider\n\n\nrangeImageSlider(); // Set bg images\n\nfunction setImageBgFromDataUrl() {\n  var images = document.querySelectorAll('[data-image-bg]');\n  if (!images.length) return;\n  images.forEach(function (img) {\n    var url = img.dataset.imageBg;\n    img.style.backgroundImage = \"url(\".concat(url, \")\");\n  });\n}\n\nsetImageBgFromDataUrl(); // Poppover init\n\n$(function () {\n  $('[data-toggle=\"popover\"]').popover({\n    trigger: 'hover',\n    animation: true\n  });\n});\n$('[data-toggle=\"popover\"]').on('show.bs.popover', function (e) {\n  var openedPoppover = document.querySelector('[id^=\"popover\"]');\n  $(openedPoppover).popover('hide');\n});\n$('[data-toggle=\"popover\"]').on('shown.bs.popover', function (e) {\n  e.currentTarget.classList.add('active-poppover');\n  var parent = e.currentTarget.closest('.poppover-item');\n\n  if (parent) {\n    parent.classList.add('active-poppover-item');\n  }\n});\n$('[data-toggle=\"popover\"]').on('hidden.bs.popover', function (e) {\n  e.currentTarget.classList.remove('active-poppover');\n  var poppoverContainer = e.currentTarget.closest('.poppover-container');\n  var parent = e.currentTarget.closest('.poppover-item');\n\n  if (parent) {\n    parent.classList.remove('active-poppover-item');\n  }\n}); // contact-us map slider\n\n$('.map-slider').slick({\n  slidesToShow: 1,\n  slidesToScroll: 1,\n  dots: false,\n  arrows: false,\n  infinity: true,\n  autoplay: true\n}); // Team slider\n\n$('[data-team-slider]').slick({\n  centerMode: true,\n  centerPadding: '80px',\n  slidesToShow: 8,\n  infinite: true,\n  dots: false,\n  arrows: true,\n  cssEase: 'linear',\n  responsive: [{\n    breakpoint: 1629,\n    settings: {\n      slidesToShow: 6,\n      slidesToScroll: 1\n    }\n  }, {\n    breakpoint: 1199,\n    settings: {\n      slidesToShow: 5,\n      slidesToScroll: 1\n    }\n  }, {\n    breakpoint: 991,\n    settings: {\n      slidesToShow: 4,\n      slidesToScroll: 1\n    }\n  }, {\n    breakpoint: 767,\n    settings: {\n      slidesToShow: 3,\n      slidesToScroll: 1\n    }\n  }, {\n    breakpoint: 575,\n    settings: {\n      slidesToShow: 1,\n      slidesToScroll: 1\n    }\n  }]\n});\nvar teamSliderInterval = null;\nvar timeout = 1000;\n$('.team-carousel .slick-prev').on('mousemove', function (e) {\n  timeout = (e.target.clientWidth - e.offsetX) / 100;\n  clearInterval(teamSliderInterval);\n  moveSlider('slickPrev', e);\n});\n$('.team-carousel .slick-prev').on('mouseover', function (e) {\n  return moveSlider('slickPrev', e);\n});\n$('.team-carousel .slick-prev').on('mouseleave', function (e) {\n  return clearInterval(teamSliderInterval);\n});\n$('.team-carousel .slick-next').on('mousemove', function (e) {\n  timeout = (e.target.clientWidth - e.offsetX) / 100;\n  clearInterval(teamSliderInterval);\n  moveSlider('slickNext', e);\n});\n$('.team-carousel .slick-next').on('mouseover', function (e) {\n  return moveSlider('slickNext', e);\n});\n$('.team-carousel .slick-next').on('mouseleave', function (e) {\n  return clearInterval(teamSliderInterval);\n});\n\nfunction moveSlider(moveTo, e) {\n  teamSliderInterval = setInterval(function () {\n    $('[data-team-slider]').slick(moveTo);\n  }, timeout);\n} // Init WoW animation\n\n\nif (window.AOS) {\n  AOS.init();\n} // animate header menu on scroll\n\n\n(function ($) {\n  $(window).on('load', function () {\n    var tempScrollTop,\n        currentScrollTop = 0;\n    var header = $('.header');\n    var windowWidth = $(window).width(); // if (windowWidth < 768) {\n    //     header.addClass(\"pos-fixed is-fixed show-header\");\n    //     return;\n    // }\n\n    function onScroll() {\n      var windowHeight = $(window).height();\n      currentScrollTop = $(window).scrollTop();\n\n      if (currentScrollTop > windowHeight + 100) {\n        header.addClass(\"is-fixed\");\n      } else if (currentScrollTop == 0) {\n        header.removeClass(\"is-fixed\");\n      }\n\n      if (tempScrollTop < currentScrollTop) {\n        header.removeClass('show-header');\n      } else if (tempScrollTop > currentScrollTop) {\n        header.addClass('show-header');\n      }\n\n      tempScrollTop = currentScrollTop;\n    }\n\n    document.addEventListener('DOMContentLoaded', onScroll);\n    $(window).on('scroll', onScroll);\n  });\n})(jQuery); // Input file init\n\n\ndocument.querySelectorAll('[data-upload-btn]').forEach(function (item) {\n  item.addEventListener('change', function (e) {\n    var parent = item.closest('.input-file');\n    var inputText = parent.querySelector('[data-file-name]');\n    inputText.value = item.value.replace('C:\\\\fakepath\\\\', '');\n    inputText.classList.add('focused');\n  });\n}); // Range slider init for contact us form\n\nfunction teamCountRangeSliderInit() {\n  var control = $('.team-count-range');\n  if (!control.length) return;\n  control.slider({\n    value: 0,\n    min: 0,\n    max: 10,\n    step: 1,\n    slide: function slide(event, ui) {\n      var parent = ui.handle.closest('label');\n      var mainCheckboxParent = ui.handle.closest('.project-type-checkbox-item');\n      var mainCheckbox = mainCheckboxParent.querySelector('input[name=\"team-type\"]');\n      var counter = parent.querySelector('.team-counter');\n      var nestedRadio = parent.querySelectorAll('.project-team-type-ragio-item input');\n      counter.textContent = ui.value;\n      nestedRadio.forEach(function (el) {\n        return el.disabled = !Boolean(ui.value);\n      });\n      mainCheckbox.checked = Boolean(ui.value);\n\n      if (!ui.value) {\n        nestedRadio.forEach(function (el) {\n          return el.checked = false;\n        });\n      }\n    }\n  });\n}\n\nteamCountRangeSliderInit(); // input blur\n\n$('.input-item textarea').on('blur', addClassFormElement);\n$('.input-item input').on('blur', addClassFormElement);\n\nfunction addClassFormElement() {\n  if ($(this).val() !== '') {\n    $(this).addClass('focus-blur');\n  } else {\n    $(this).removeClass('focus-blur');\n  }\n} // Project timber, video dashboard\n\n\nvar gameIcons = document.querySelectorAll('[data-video-src]');\nvar gamePreviewVideo = document.querySelector('.game-preview-wrap video');\n\nfunction onGameIconClick(e) {\n  var parent = e.target.closest('.character-game-item');\n  var newVideoSrc = parent.dataset.videoSrc;\n  gameIcons.forEach(function (icon) {\n    return icon.classList.remove('active');\n  });\n  parent.classList.add('active');\n  var indexVideoSrc = gamePreviewVideo.src.indexOf('public/video');\n  var oldSrc = gamePreviewVideo.src.slice(indexVideoSrc);\n\n  if (oldSrc !== newVideoSrc) {\n    gamePreviewVideo.src = newVideoSrc;\n  }\n}\n\nif (gameIcons && gamePreviewVideo) {\n  gameIcons.forEach(function (icon) {\n    return icon.addEventListener('click', onGameIconClick);\n  });\n} // Partners images carousel\n// home-inner-partners data-slick-slider\n\n\n$('.home-inner-partners').slick({\n  dots: false,\n  infinite: true,\n  arrows: false,\n  speed: 300,\n  slidesToShow: 10,\n  slidesToScroll: 1,\n  responsive: [{\n    breakpoint: 1199,\n    settings: {\n      slidesToShow: 5,\n      slidesToScroll: 5\n    }\n  }, {\n    breakpoint: 991,\n    settings: {\n      slidesToShow: 3,\n      slidesToScroll: 3\n    }\n  }, {\n    breakpoint: 767,\n    settings: {\n      slidesToShow: 2,\n      slidesToScroll: 2\n    }\n  }]\n});\n$('.character-carousel-mobile').slick({\n  dots: true,\n  arrows: false,\n  infinite: false,\n  slidesToShow: 1,\n  slidesToScroll: 1\n});\n$('[data-tips-slider]').slick({\n  \"slidesToShow\": 4,\n  \"slidesToScroll\": 1,\n  \"dots\": true,\n  \"adaptiveHeight\": true,\n  responsive: [{\n    breakpoint: 1629,\n    settings: {\n      slidesToShow: 3,\n      slidesToScroll: 1\n    }\n  }, {\n    breakpoint: 1199,\n    settings: {\n      slidesToShow: 2,\n      slidesToScroll: 1\n    }\n  }, {\n    breakpoint: 767,\n    settings: {\n      slidesToShow: 1,\n      slidesToScroll: 1\n    }\n  }]\n});\n$('.works-menu-carusel-mobile').slick({\n  \"dots\": true,\n  infinite: false,\n  arrows: false,\n  responsive: [{\n    breakpoint: 991,\n    settings: {\n      slidesToShow: 4,\n      slidesToScroll: 1\n    }\n  }, {\n    breakpoint: 767,\n    settings: {\n      slidesToShow: 3,\n      slidesToScroll: 1\n    }\n  }, {\n    breakpoint: 575,\n    settings: {\n      slidesToShow: 2,\n      slidesToScroll: 1\n    }\n  }]\n}); // Form validation\n\nvar form = document.querySelector('.contact-us-form form');\n\nvar _document$querySelect = document.querySelectorAll('[data-required]'),\n    _document$querySelect2 = _toArray(_document$querySelect),\n    inputs = _document$querySelect2.slice(0);\n\nif (form && inputs.length) {\n  // Handlers\n  var onSubmit = function onSubmit() {\n    var isValidForm = inputs.every(function (el) {\n      var isValidInput = Object(_validate__WEBPACK_IMPORTED_MODULE_1__[\"validate\"])(el);\n\n      if (!isValidInput) {\n        Object(_form__WEBPACK_IMPORTED_MODULE_2__[\"showInputError\"])(el);\n      }\n\n      return isValidInput;\n    });\n    if (!isValidForm) return; // Made any actions\n  };\n\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    onSubmit();\n  });\n  inputs.forEach(function (el) {\n    return el.addEventListener('focus', function () {\n      return Object(_form__WEBPACK_IMPORTED_MODULE_2__[\"removeInputError\"])(el);\n    });\n  });\n} // web services fixed process flow\n\n\nvar processFlowCarouselSettings = {\n  dots: false,\n  infinite: false,\n  arrows: false,\n  responsive: [{\n    breakpoint: 1630,\n    settings: {\n      slidesToShow: 4,\n      slidesToScroll: 1\n    }\n  }, {\n    breakpoint: 1199,\n    settings: {\n      slidesToShow: 3,\n      slidesToScroll: 1\n    }\n  }, {\n    breakpoint: 991,\n    settings: {\n      slidesToShow: 2,\n      slidesToScroll: 1\n    }\n  }, {\n    breakpoint: 575,\n    settings: {\n      slidesToShow: 1,\n      slidesToScroll: 1\n    }\n  }]\n};\n$('.process-flow-list-carousel a[data-toggle=\"tab\"]').on('shown.bs.tab', function (e) {\n  console.dir(e.target, e.relatedTarget);\n  var carouselID = e.target.hash;\n  console.log(carouselID);\n  $(\"\".concat(carouselID, \" .process-flow-list\")).slick(processFlowCarouselSettings);\n});\n$('#first .process-flow-list').slick(processFlowCarouselSettings); // timber-carousel\n\n$('.timber-carousel .service-fade-carousel').slick({\n  \"slidesToShow\": 1,\n  \"slidesToScroll\": 1,\n  \"dots\": false,\n  \"adaptiveHeight\": false,\n  \"arrows\": false,\n  \"fade\": false,\n  \"centerMode\": true,\n  \"centerPadding\": \"130px\",\n  \"infinite\": false,\n  responsive: [{\n    breakpoint: 1199,\n    settings: {\n      centerPadding: \"90px\"\n    }\n  }, {\n    breakpoint: 991,\n    settings: {\n      centerPadding: \"50px\"\n    }\n  }, {\n    breakpoint: 767,\n    settings: {\n      centerPadding: \"20px\"\n    }\n  }, {\n    breakpoint: 575,\n    settings: {\n      centerPadding: \"0px\"\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./src/js/plugins-init.js?");

/***/ }),

/***/ "./src/js/slickSlider.js":
/*!*******************************!*\
  !*** ./src/js/slickSlider.js ***!
  \*******************************/
/*! exports provided: initSlider, initSliderNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initSlider\", function() { return initSlider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initSliderNav\", function() { return initSliderNav; });\nfunction setEvents(slider, externalNav) {\n  // Set event on slider for change class of navigation\n  slider.on('afterChange', function (event, slick, currentSlide) {\n    externalNav.each(function (index, item) {\n      var slideIndex = item.dataset.slideIndex;\n\n      if (parseInt(slideIndex) === currentSlide) {\n        item.classList.add('active');\n      } else {\n        item.classList.remove('active');\n      }\n    });\n  });\n  externalNav.on('click', function (e) {\n    var slideIndex = parseInt(e.currentTarget.dataset.slideIndex);\n\n    if (!isNaN(slideIndex) && typeof slideIndex === 'number') {\n      slider.slick('slickGoTo', slideIndex);\n    }\n  });\n}\n\nfunction initSlider(slider) {\n  slider.slick();\n}\nfunction initSliderNav(caroiselNavItems) {\n  var parent = $(caroiselNavItems).closest('.tabs-wrap');\n  var slider = parent.find('[data-slick-slider]');\n\n  if (slider) {\n    setEvents(slider, caroiselNavItems);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/slickSlider.js?");

/***/ }),

/***/ "./src/js/validate.js":
/*!****************************!*\
  !*** ./src/js/validate.js ***!
  \****************************/
/*! exports provided: validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validate\", function() { return validate; });\nvar regExpDic = {\n  email: /^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\\]?)$/,\n  password: /^[0-9a-zA-Z]{4,}$/,\n  text: /[0-9a-zA-Zа-яА-я]+/\n};\n/**\n * Function validate. Check Input on RegExp provided in regExpDic by input data-required type\n * @param {HTMLInputElement} el\n * @returns {Boolean} - Return true if input valid or doesn't has data-required attr\n */\n\nfunction validate(el) {\n  var regExpName = el.dataset.required;\n  if (!regExpDic[regExpName]) return true;\n  return regExpDic[regExpName].test(el.value);\n}\n\n//# sourceURL=webpack:///./src/js/validate.js?");

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

/***/ "./src/pages-css/contact-us.css":
/*!**************************************!*\
  !*** ./src/pages-css/contact-us.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-css/contact-us.css?");

/***/ }),

/***/ "./src/pages-css/dedicated.css":
/*!*************************************!*\
  !*** ./src/pages-css/dedicated.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-css/dedicated.css?");

/***/ }),

/***/ "./src/pages-css/index.css":
/*!*********************************!*\
  !*** ./src/pages-css/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-css/index.css?");

/***/ }),

/***/ "./src/pages-css/project-pastry.css":
/*!******************************************!*\
  !*** ./src/pages-css/project-pastry.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-css/project-pastry.css?");

/***/ }),

/***/ "./src/pages-css/service-pages.css":
/*!*****************************************!*\
  !*** ./src/pages-css/service-pages.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-css/service-pages.css?");

/***/ }),

/***/ "./src/pages-css/team.css":
/*!********************************!*\
  !*** ./src/pages-css/team.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-css/team.css?");

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

/***/ "./src/pages-sections-css/character-ineractive.css":
/*!*********************************************************!*\
  !*** ./src/pages-sections-css/character-ineractive.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/character-ineractive.css?");

/***/ }),

/***/ "./src/pages-sections-css/contact-us.css":
/*!***********************************************!*\
  !*** ./src/pages-sections-css/contact-us.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/contact-us.css?");

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

/***/ "./src/pages-sections-css/team-slider.css":
/*!************************************************!*\
  !*** ./src/pages-sections-css/team-slider.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/team-slider.css?");

/***/ }),

/***/ "./src/pages-sections-css/technology-stack.css":
/*!*****************************************************!*\
  !*** ./src/pages-sections-css/technology-stack.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/technology-stack.css?");

/***/ }),

/***/ "./src/pages-sections-css/video-block.css":
/*!************************************************!*\
  !*** ./src/pages-sections-css/video-block.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages-sections-css/video-block.css?");

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