/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@marko/webpack/dist/loader/index.js!?manifest":
/*!********************************************************************!*\
  !*** ./node_modules/@marko/webpack/dist/loader/index.js!?manifest ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAssets(entry) {
    return this.build[entry];
  },
  build: {"index_MFgQ":{"css":["index_MFgQ.412c332e.css"],"js":["runtime.bd7e3100.js","vendors-node_modules_marko_src_runtime_components_index_js-node_modules_marko_src_runtime_com-c5dc6e.2cf3cd30.js","index_MFgQ.72140f06.js"]}}
});

/***/ }),

/***/ "./src/components/app-breadcrumbs/index.marko":
/*!****************************************************!*\
  !*** ./src/components/app-breadcrumbs/index.marko ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/src/runtime/html/index.js */ "marko/src/runtime/html/index.js");
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marko/src/runtime/html/helpers/escape-xml.js */ "marko/src/runtime/html/helpers/escape-xml.js");
/* harmony import */ var marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marko/src/runtime/html/helpers/attr.js */ "marko/src/runtime/html/helpers/attr.js");
/* harmony import */ var marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marko/src/runtime/components/renderer.js */ "marko/src/runtime/components/renderer.js");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3__);


const _marko_componentType = "src\\components\\app-breadcrumbs\\index.marko",
      _marko_template = (0,marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__.t)(_marko_componentType);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);



const _marko_component = {
  onCreate() {
    this.state = {
      data: {}
    };
  },

  onInput(input) {
    const {
      data
    } = input;
    this.state.data = data;
  }

};
_marko_template._ = marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3___default()(function (input, out, _componentDef, _component, state) {
  out.w("<nav class=breadcrumb aria-label=breadcrumbs>");
  out.w("<ul>");
  {
    let _index = 0;

    for (const breadcrumb of state.data.breadcrumbs) {
      let index = _index++;
      const _keyScope = `[${index}]`;

      if (index === state.data.breadcrumbs.length - 1) {
        out.w("<li class=is-active>");
        out.w(`<a aria-current=page${marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2___default()("href", `${breadcrumb.href}`)}>`);
        out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1__.x)(breadcrumb.text));
        out.w("</a>");
        out.w("</li>");
        out.w(" ");
      } else {
        out.w("<li>");
        out.w(`<a${marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2___default()("href", `${breadcrumb.href}`)}>`);
        out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1__.x)(breadcrumb.text));
        out.w("</a>");
        out.w("</li>");
        out.w(" ");
      }
    }
  }
  out.w("</ul>");
  out.w("</nav>");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);

/***/ }),

/***/ "./src/components/app-card/index.marko":
/*!*********************************************!*\
  !*** ./src/components/app-card/index.marko ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/src/runtime/html/index.js */ "marko/src/runtime/html/index.js");
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/1.jpg */ "./src/assets/images/1.jpg");
/* harmony import */ var _assets_images_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/2.jpg */ "./src/assets/images/2.jpg");
/* harmony import */ var _assets_images_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/3.jpg */ "./src/assets/images/3.jpg");
/* harmony import */ var _assets_images_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/4.jpg */ "./src/assets/images/4.jpg");
/* harmony import */ var _assets_images_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/5.jpg */ "./src/assets/images/5.jpg");
/* harmony import */ var _assets_images_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/6.jpg */ "./src/assets/images/6.jpg");
/* harmony import */ var marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! marko/src/runtime/html/helpers/attr.js */ "marko/src/runtime/html/helpers/attr.js");
/* harmony import */ var marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! marko/src/runtime/html/helpers/escape-xml.js */ "marko/src/runtime/html/helpers/escape-xml.js");
/* harmony import */ var marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! marko/src/runtime/components/renderer.js */ "marko/src/runtime/components/renderer.js");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_9__);


const _marko_componentType = "src\\components\\app-card\\index.marko",
      _marko_template = (0,marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__.t)(_marko_componentType);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);









const _marko_component = {
  onInput(input) {
    const {
      stock
    } = input;
    const images = [_assets_images_1_jpg__WEBPACK_IMPORTED_MODULE_1__, _assets_images_2_jpg__WEBPACK_IMPORTED_MODULE_2__, _assets_images_3_jpg__WEBPACK_IMPORTED_MODULE_3__, _assets_images_4_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_images_5_jpg__WEBPACK_IMPORTED_MODULE_5__, _assets_images_6_jpg__WEBPACK_IMPORTED_MODULE_6__];
    this.state = {
      stock: stock,
      images: images
    };
  }

};
_marko_template._ = marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_9___default()(function (input, out, _componentDef, _component, state) {
  out.w(`<a${marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_7___default()("href", `${state.stock.href}`)}>`);
  out.w("<div class=\"app-card card\">");
  out.w("<div class=card-image>");
  out.w("<figure class=\"image is-4by3\">");
  out.w(`<img${marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_7___default()("src", `${state.images[state.stock.image.match(/\d+/)[0] - 1]}`)} alt="Placeholder image">`);
  out.w("</figure>");
  out.w("</div>");
  out.w("<div class=card-content>");
  out.w("<div class=media>");
  out.w("<div class=media-content>");
  out.w(`<a${marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_7___default()("href", `${state.stock.href}`)}>`);
  out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__.x)(state.stock.title));
  out.w("</a>");
  out.w("<p class=\"subtitle is-6\">");
  out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__.x)(state.stock.type));
  out.w("</p>");
  out.w("</div>");
  out.w("</div>");
  out.w("<div class=content>");
  out.w("<p>");
  out.w("price: ");
  out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__.x)(state.stock.price));
  out.w(" ");
  out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__.x)(state.stock.price_currency));
  out.w("</p>");
  out.w("<p>");
  out.w("mileage: ");
  out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__.x)(state.stock.mileage));
  out.w(" ");
  out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__.x)(state.stock.mileage_measure));
  out.w("</p>");
  out.w("<p>");
  out.w("power: ");
  out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__.x)(state.stock.power));
  out.w(" ");
  out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__.x)(state.stock.power_measure));
  out.w("</p>");
  out.w("<p>");
  out.w("axle configuration: ");
  out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__.x)(state.stock.axle_configuration));
  out.w("</p>");
  out.w("<p>");
  out.w("payload: ");
  out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__.x)(state.stock.payload));
  out.w("</p>");
  out.w("<p>");
  out.w("gross weight: ");
  out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__.x)(state.stock.gross_weight));
  out.w("</p>");
  out.w("<br>");
  out.w("<time datetime=2016-1-1>");
  out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_8__.x)(state.stock.year));
  out.w("</time>");
  out.w("</div>");
  out.w("</div>");
  out.w("</div>");
  out.w("</a>");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);

/***/ }),

/***/ "./src/components/app-cards/index.marko":
/*!**********************************************!*\
  !*** ./src/components/app-cards/index.marko ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/src/runtime/html/index.js */ "marko/src/runtime/html/index.js");
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_card_index_marko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-card/index.marko */ "./src/components/app-card/index.marko");
/* harmony import */ var marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marko/src/runtime/helpers/render-tag.js */ "marko/src/runtime/helpers/render-tag.js");
/* harmony import */ var marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marko/src/runtime/components/renderer.js */ "marko/src/runtime/components/renderer.js");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3__);


const _marko_componentType = "src\\components\\app-cards\\index.marko",
      _marko_template = (0,marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__.t)(_marko_componentType);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);



const _marko_component = {
  onCreate() {
    this.state = {
      data: {}
    };
  },

  onInput(input) {
    const {
      data
    } = input;
    this.state.data = data;
  }

};
_marko_template._ = marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3___default()(function (input, out, _componentDef, _component, state) {
  out.w("<div class=cards>");
  {
    let _keyValue = 0;

    for (const stock of state.data.stock) {
      const _keyScope = `[${_keyValue++}]`;

      marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_2___default()(_app_card_index_marko__WEBPACK_IMPORTED_MODULE_1__["default"], {
        "stock": stock
      }, out, _componentDef, "1" + _keyScope);
    }
  }
  out.w("</div>");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);

/***/ }),

/***/ "./src/components/app-fetch-data/index.marko":
/*!***************************************************!*\
  !*** ./src/components/app-fetch-data/index.marko ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/src/runtime/html/index.js */ "marko/src/runtime/html/index.js");
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_data_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data/load */ "./src/services/data/load.js");
/* harmony import */ var _app_nav_index_marko__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-nav/index.marko */ "./src/components/app-nav/index.marko");
/* harmony import */ var marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marko/src/runtime/helpers/render-tag.js */ "marko/src/runtime/helpers/render-tag.js");
/* harmony import */ var marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_breadcrumbs_index_marko__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-breadcrumbs/index.marko */ "./src/components/app-breadcrumbs/index.marko");
/* harmony import */ var _app_cards_index_marko__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-cards/index.marko */ "./src/components/app-cards/index.marko");
/* harmony import */ var _app_page_text_index_marko__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-page-text/index.marko */ "./src/components/app-page-text/index.marko");
/* harmony import */ var marko_src_runtime_helpers_class_value_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! marko/src/runtime/helpers/class-value.js */ "marko/src/runtime/helpers/class-value.js");
/* harmony import */ var marko_src_runtime_helpers_class_value_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_helpers_class_value_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! marko/src/runtime/html/helpers/attr.js */ "marko/src/runtime/html/helpers/attr.js");
/* harmony import */ var marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! marko/src/runtime/components/renderer.js */ "marko/src/runtime/components/renderer.js");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_9__);


const _marko_componentType = "src\\components\\app-fetch-data\\index.marko",
      _marko_template = (0,marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__.t)(_marko_componentType);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);









const _marko_component = {
  onInput(input) {
    const {
      data
    } = input;
    let dataset = {};

    if (data) {
      dataset = data.dataset;
    }

    this.state = {
      loading: false,
      data: dataset
    };
  },

  onMount() {
    this.pending = Promise.resolve();

    if (Object.keys(this.state.data).length === 0) {
      this.loadMore();
    }
  },

  async loadMore() {
    const {
      state
    } = this;
    state.loading = true;
    await this.pending;

    try {
      const data = await (this.pending = (0,_services_data_load__WEBPACK_IMPORTED_MODULE_1__.getData)(1));
      state.data = data.dataset;
      this.emit('output-to-layout', state.data);
    } catch (err) {
      console.log("Fetch failed:", err);
    }

    state.loading = false;
  }

};
_marko_template._ = marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_9___default()(function (input, out, _componentDef, _component, state) {
  out.w("<div class=app-fetch-data>");

  if (Object.keys(state.data).length) {
    marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_3___default()(_app_nav_index_marko__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "data": state.data
    }, out, _componentDef, "1");

    marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_3___default()(_app_breadcrumbs_index_marko__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "data": state.data
    }, out, _componentDef, "2");

    marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_3___default()(_app_cards_index_marko__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "data": state.data
    }, out, _componentDef, "3");

    marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_3___default()(_app_page_text_index_marko__WEBPACK_IMPORTED_MODULE_6__["default"], {
      "data": state.data
    }, out, _componentDef, "4");
  }

  out.w(`<span${marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_8___default()("class", marko_src_runtime_helpers_class_value_js__WEBPACK_IMPORTED_MODULE_7___default()({
    loading: state.loading
  }))}></span>`);
  out.w("</div>");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);

/***/ }),

/***/ "./src/components/app-footer/index.marko":
/*!***********************************************!*\
  !*** ./src/components/app-footer/index.marko ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/src/runtime/html/index.js */ "marko/src/runtime/html/index.js");
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marko/src/runtime/components/renderer.js */ "marko/src/runtime/components/renderer.js");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_1__);


const _marko_componentType = "src\\components\\app-footer\\index.marko",
      _marko_template = (0,marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__.t)(_marko_componentType);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);

const _marko_component = {};
_marko_template._ = marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_1___default()(function (input, out, _componentDef, _component, state) {
  out.w("<footer>");
  out.w("Footer");
  out.w("</footer>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);

/***/ }),

/***/ "./src/components/app-layout/index.marko":
/*!***********************************************!*\
  !*** ./src/components/app-layout/index.marko ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/src/runtime/html/index.js */ "marko/src/runtime/html/index.js");
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favicon.png */ "./src/components/app-layout/favicon.png");
/* harmony import */ var marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marko/src/runtime/html/helpers/attr.js */ "marko/src/runtime/html/helpers/attr.js");
/* harmony import */ var marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marko/src/runtime/html/helpers/escape-xml.js */ "marko/src/runtime/html/helpers/escape-xml.js");
/* harmony import */ var marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var marko_src_runtime_helpers_dynamic_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! marko/src/runtime/helpers/dynamic-tag.js */ "marko/src/runtime/helpers/dynamic-tag.js");
/* harmony import */ var marko_src_runtime_helpers_dynamic_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_helpers_dynamic_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sample_header_index_marko__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sample-header/index.marko */ "./src/components/sample-header/index.marko");
/* harmony import */ var marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! marko/src/runtime/helpers/render-tag.js */ "marko/src/runtime/helpers/render-tag.js");
/* harmony import */ var marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_footer_index_marko__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-footer/index.marko */ "./src/components/app-footer/index.marko");
/* harmony import */ var marko_src_core_tags_components_init_components_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! marko/src/core-tags/components/init-components-tag.js */ "marko/src/core-tags/components/init-components-tag.js");
/* harmony import */ var marko_src_core_tags_components_init_components_tag_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(marko_src_core_tags_components_init_components_tag_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var marko_src_core_tags_core_await_reorderer_renderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! marko/src/core-tags/core/await/reorderer-renderer.js */ "marko/src/core-tags/core/await/reorderer-renderer.js");
/* harmony import */ var marko_src_core_tags_core_await_reorderer_renderer_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(marko_src_core_tags_core_await_reorderer_renderer_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var marko_src_core_tags_components_preferred_script_location_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! marko/src/core-tags/components/preferred-script-location-tag.js */ "marko/src/core-tags/components/preferred-script-location-tag.js");
/* harmony import */ var marko_src_core_tags_components_preferred_script_location_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(marko_src_core_tags_components_preferred_script_location_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! marko/src/runtime/components/renderer.js */ "marko/src/runtime/components/renderer.js");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_11__);


const _marko_componentType = "src\\components\\app-layout\\index.marko",
      _marko_template = (0,marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__.t)(_marko_componentType);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);











const _marko_component = {
  onCreate() {
    this.state = {
      output: {}
    };
  },

  onInput(input) {
    this.state.output = input.output;
  }

};
_marko_template._ = marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_11___default()(function (input, out, _componentDef, _component, state) {
  out.w("<!doctype html>");
  out.w("<html lang=en>");
  out.w("<head>");
  out.w("<meta charset=UTF-8>");
  out.w(`<link rel=icon type=image/png sizes=32x32${marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2___default()("href", _favicon_png__WEBPACK_IMPORTED_MODULE_1__)}>`);
  out.w("<meta name=viewport content=\"width=device-width, initial-scale=1.0\">");
  out.w("<link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css>");

  if (Object.keys(state.output).length) {
    out.w("<title>");
    out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_3__.x)(state.output.page_meta.title));
    out.w("</title>");
    out.w(`<meta${marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2___default()("name", `${state.output.page_meta.meta_keywords}`)}${marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2___default()("content", `${state.output.page_meta.meta_description}`)}>`);
  }

  marko_src_runtime_helpers_dynamic_tag_js__WEBPACK_IMPORTED_MODULE_4___default()(out, input.head, null, null, null, null, _componentDef, "8");

  out.global.___renderAssets && out.global.___renderAssets(out);
  out.w("</head>");
  out.w("<body>");
  out.w("<div class=container id=tt>");

  if (Object.keys(state.output).length) {
    marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_6___default()(_sample_header_index_marko__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "h1": state.output.page_meta.h1
    }, out, _componentDef, "11");
  }

  out.w("<main id=main>");

  marko_src_runtime_helpers_dynamic_tag_js__WEBPACK_IMPORTED_MODULE_4___default()(out, input.body, null, null, null, null, _componentDef, "13");

  out.w("</main>");

  marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_6___default()(_app_footer_index_marko__WEBPACK_IMPORTED_MODULE_7__["default"], {}, out, _componentDef, "14");

  out.w("</div>");

  marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_6___default()((marko_src_core_tags_components_init_components_tag_js__WEBPACK_IMPORTED_MODULE_8___default()), {}, out, _componentDef, "15");

  marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_6___default()((marko_src_core_tags_core_await_reorderer_renderer_js__WEBPACK_IMPORTED_MODULE_9___default()), {}, out, _componentDef, "16");

  marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_6___default()((marko_src_core_tags_components_preferred_script_location_tag_js__WEBPACK_IMPORTED_MODULE_10___default()), {}, out, _componentDef, "17");

  out.w("</body>");
  out.w("</html>");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);

/***/ }),

/***/ "./src/components/app-main/index.marko":
/*!*********************************************!*\
  !*** ./src/components/app-main/index.marko ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/src/runtime/html/index.js */ "marko/src/runtime/html/index.js");
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_fetch_data_index_marko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-fetch-data/index.marko */ "./src/components/app-fetch-data/index.marko");
/* harmony import */ var marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marko/src/runtime/helpers/render-tag.js */ "marko/src/runtime/helpers/render-tag.js");
/* harmony import */ var marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component.js */ "./src/components/app-main/component.js");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! marko/src/runtime/components/renderer.js */ "marko/src/runtime/components/renderer.js");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_4__);


const _marko_componentType = "src\\components\\app-main\\index.marko",
      _marko_template = (0,marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__.t)(_marko_componentType);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);




const _marko_component2 = _component_js__WEBPACK_IMPORTED_MODULE_3__["default"];
_marko_template._ = marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_4___default()(function (input, out, _componentDef, _component, state) {
  out.w("<div>");

  marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_2___default()(_app_fetch_data_index_marko__WEBPACK_IMPORTED_MODULE_1__["default"], {}, out, _componentDef, "1", [["output-to-layout", 'handleOutput', false]]);

  out.w("</div>");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component2);

/***/ }),

/***/ "./src/components/app-nav/index.marko":
/*!********************************************!*\
  !*** ./src/components/app-nav/index.marko ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/src/runtime/html/index.js */ "marko/src/runtime/html/index.js");
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marko/src/runtime/html/helpers/escape-xml.js */ "marko/src/runtime/html/helpers/escape-xml.js");
/* harmony import */ var marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marko/src/runtime/html/helpers/attr.js */ "marko/src/runtime/html/helpers/attr.js");
/* harmony import */ var marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marko/src/runtime/components/renderer.js */ "marko/src/runtime/components/renderer.js");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3__);


const _marko_componentType = "src\\components\\app-nav\\index.marko",
      _marko_template = (0,marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__.t)(_marko_componentType);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);



const _marko_component = {
  onCreate() {
    this.state = {
      data: {}
    };
  },

  onInput(input) {
    const {
      data
    } = input;
    this.state.data = data;
  }

};
_marko_template._ = marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3___default()(function (input, out, _componentDef, _component, state) {
  out.w("<nav class=navbar role=navigation aria-label=\"main navigation\">");
  out.w("<div id=navbarBasicExample class=navbar-menu>");
  out.w("<div class=navbar-start>");
  {
    let _keyValue = 0;

    for (const nav of state.data.nav) {
      const _keyScope = `[${_keyValue++}]`;
      out.w(`<a class=navbar-item${marko_src_runtime_html_helpers_attr_js__WEBPACK_IMPORTED_MODULE_2___default()("href", `${nav.href}`)}>`);
      out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1__.x)(nav.text));
      out.w("</a>");
    }
  }
  out.w("</div>");
  out.w("</div>");
  out.w("</nav>");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);

/***/ }),

/***/ "./src/components/app-page-text/index.marko":
/*!**************************************************!*\
  !*** ./src/components/app-page-text/index.marko ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/src/runtime/html/index.js */ "marko/src/runtime/html/index.js");
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marko/src/runtime/html/helpers/escape-xml.js */ "marko/src/runtime/html/helpers/escape-xml.js");
/* harmony import */ var marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marko_src_runtime_helpers_dynamic_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marko/src/runtime/helpers/dynamic-tag.js */ "marko/src/runtime/helpers/dynamic-tag.js");
/* harmony import */ var marko_src_runtime_helpers_dynamic_tag_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_helpers_dynamic_tag_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marko/src/runtime/components/renderer.js */ "marko/src/runtime/components/renderer.js");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3__);


const _marko_componentType = "src\\components\\app-page-text\\index.marko",
      _marko_template = (0,marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__.t)(_marko_componentType);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);



const _marko_component = {};
_marko_template._ = marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_3___default()(function (input, out, _componentDef, _component, state) {
  out.w("<div>");
  {
    let _keyValue = 0;

    for (const text of input.data.page_text) {
      const _keyScope = `[${_keyValue++}]`;

      marko_src_runtime_helpers_dynamic_tag_js__WEBPACK_IMPORTED_MODULE_2___default()(out, text.tag, null, out => {
        out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1__.x)(text.content));
      }, null, null, _componentDef, "1" + _keyScope);
    }
  }
  out.w("</div>");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);

/***/ }),

/***/ "./src/components/sample-header/index.marko":
/*!**************************************************!*\
  !*** ./src/components/sample-header/index.marko ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/src/runtime/html/index.js */ "marko/src/runtime/html/index.js");
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marko/src/runtime/html/helpers/escape-xml.js */ "marko/src/runtime/html/helpers/escape-xml.js");
/* harmony import */ var marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marko/src/runtime/components/renderer.js */ "marko/src/runtime/components/renderer.js");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_2__);


const _marko_componentType = "src\\components\\sample-header\\index.marko",
      _marko_template = (0,marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__.t)(_marko_componentType);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);


const _marko_component = {};
_marko_template._ = marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_2___default()(function (input, out, _componentDef, _component, state) {
  out.w("<header>");
  out.w("<h1>");
  out.w((0,marko_src_runtime_html_helpers_escape_xml_js__WEBPACK_IMPORTED_MODULE_1__.x)(input.h1));
  out.w("</h1>");
  out.w("</header>");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);

/***/ }),

/***/ "./src/pages/index/template.marko":
/*!****************************************!*\
  !*** ./src/pages/index/template.marko ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/src/runtime/html/index.js */ "marko/src/runtime/html/index.js");
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_app_main_index_marko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/app-main/index.marko */ "./src/components/app-main/index.marko");
/* harmony import */ var marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marko/src/runtime/helpers/render-tag.js */ "marko/src/runtime/helpers/render-tag.js");
/* harmony import */ var marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_app_layout_index_marko__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/app-layout/index.marko */ "./src/components/app-layout/index.marko");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! marko/src/runtime/components/renderer.js */ "marko/src/runtime/components/renderer.js");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_4__);


const _marko_componentType = "src\\pages\\index\\template.marko",
      _marko_template = (0,marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__.t)(_marko_componentType);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);




const _marko_component = {
  onCreate() {
    this.state = {
      output: {}
    };
  },

  onMount() {
    console.log(this.state);
  },

  handleOutput(output) {
    this.state.output = output;
  }

};
_marko_template._ = marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_4___default()(function (input, out, _componentDef, _component, state) {
  marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_2___default()(_components_app_layout_index_marko__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "output": state.output,
    "head": {
      "renderBody": out => {
        out.w("<link href=https://fonts.googleapis.com/css?family=Open+Sans:300,400,700 media=all rel=stylesheet>");
      }
    },
    "body": {
      "renderBody": out => {
        marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_2___default()(_components_app_main_index_marko__WEBPACK_IMPORTED_MODULE_1__["default"], {}, out, _componentDef, "2", [["output-to-layout", 'handleOutput', false]]);
      }
    }
  }, out, _componentDef, "0");
}, {
  t: _marko_componentType,
  d: true
}, _marko_component);

/***/ }),

/***/ "./src/pages/index/template.marko?server-entry":
/*!*****************************************************!*\
  !*** ./src/pages/index/template.marko?server-entry ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/src/runtime/html/index.js */ "marko/src/runtime/html/index.js");
/* harmony import */ var marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template_marko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.marko */ "./src/pages/index/template.marko");
/* harmony import */ var _marko_webpack_loader_manifest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!@marko/webpack/loader!?manifest */ "./node_modules/@marko/webpack/dist/loader/index.js!?manifest");
/* harmony import */ var marko_src_core_tags_core_flush_here_and_after_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marko/src/core-tags/core/__flush_here_and_after__.js */ "marko/src/core-tags/core/__flush_here_and_after__.js");
/* harmony import */ var marko_src_core_tags_core_flush_here_and_after_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marko_src_core_tags_core_flush_here_and_after_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! marko/src/runtime/helpers/render-tag.js */ "marko/src/runtime/helpers/render-tag.js");
/* harmony import */ var marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var marko_src_core_tags_components_init_components_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! marko/src/core-tags/components/init-components-tag.js */ "marko/src/core-tags/components/init-components-tag.js");
/* harmony import */ var marko_src_core_tags_components_init_components_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(marko_src_core_tags_components_init_components_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var marko_src_core_tags_core_await_reorderer_renderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! marko/src/core-tags/core/await/reorderer-renderer.js */ "marko/src/core-tags/core/await/reorderer-renderer.js");
/* harmony import */ var marko_src_core_tags_core_await_reorderer_renderer_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(marko_src_core_tags_core_await_reorderer_renderer_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! marko/src/runtime/components/renderer.js */ "marko/src/runtime/components/renderer.js");
/* harmony import */ var marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_7__);


const _marko_componentType = "src\\pages\\index\\template-server-entry.marko",
      _marko_template = (0,marko_src_runtime_html_index_js__WEBPACK_IMPORTED_MODULE_0__.t)(_marko_componentType);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);



const crossOriginAttr = new URL(__webpack_require__.p, "file:").protocol === "file:" ? "" : " crossorigin";

function renderAssets(out) {
  const entries = this.___entries;
  this.___entries = undefined;

  if (entries) {
    const buildName = this.buildName;
    const nonce = this.cspNonce;
    const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
    const written = this.___writtenAssets || (this.___writtenAssets = new Set());
    let scripts = "";
    let styles = "";

    for (const entry of entries) {
      const assets = _marko_webpack_loader_manifest__WEBPACK_IMPORTED_MODULE_2__["default"].getAssets(entry, buildName);

      if (assets.js) {
        for (const href of assets.js) {
          if (!written.has(href)) {
            written.add(href);
            scripts += `<script src=${JSON.stringify(__webpack_require__.p + href)}${nonceAttr + crossOriginAttr} async></script>`;
          }
        }
      }

      if (assets.css) {
        for (const href of assets.css) {
          if (!written.has(href)) {
            written.add(href);
            styles += `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + href)}>`;
          }
        }
      }
    }

    out.write(scripts + styles);
  }
}






const _marko_component = {};
_marko_template._ = marko_src_runtime_components_renderer_js__WEBPACK_IMPORTED_MODULE_7___default()(function (input, out, _componentDef, _component, state) {
  out.global.runtimeId = "marketplace";
  out.global.___renderAssets = renderAssets;
  (out.global.___entries || (out.global.___entries = [])).push("index_MFgQ");

  marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_4___default()((marko_src_core_tags_core_flush_here_and_after_js__WEBPACK_IMPORTED_MODULE_3___default()), {
    "renderBody": out => {
      out.global.___renderAssets && out.global.___renderAssets(out);
    }
  }, out, _componentDef, "0");

  marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_4___default()(_template_marko__WEBPACK_IMPORTED_MODULE_1__["default"], input, out, _componentDef, "1");

  marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_4___default()((marko_src_core_tags_components_init_components_tag_js__WEBPACK_IMPORTED_MODULE_5___default()), {}, out, _componentDef, "2");

  marko_src_runtime_helpers_render_tag_js__WEBPACK_IMPORTED_MODULE_4___default()((marko_src_core_tags_core_await_reorderer_renderer_js__WEBPACK_IMPORTED_MODULE_6___default()), {}, out, _componentDef, "3");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);

/***/ }),

/***/ "./src/components/app-main/component.js":
/*!**********************************************!*\
  !*** ./src/components/app-main/component.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
    handleOutput(output) {
        this.emit('output-to-layout', output)
    }
});


/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_marko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.marko */ "./src/pages/index/template.marko?server-entry");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {
    res.marko(_template_marko__WEBPACK_IMPORTED_MODULE_0__["default"], {})
});


/***/ }),

/***/ "./src/services/data/index.js":
/*!************************************!*\
  !*** ./src/services/data/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ "./src/services/data/load.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  try {
    res.json(await (0,_load__WEBPACK_IMPORTED_MODULE_0__.getData)());
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to load data");
  }
});


/***/ }),

/***/ "./src/services/data/load.js":
/*!***********************************!*\
  !*** ./src/services/data/load.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _dataset_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataset.json */ "./src/services/data/dataset.json");


async function getData() {
  const results = {
    dataset: _dataset_json__WEBPACK_IMPORTED_MODULE_0__,
    totalMatches: _dataset_json__WEBPACK_IMPORTED_MODULE_0__.length,
  };

  await sleep(1000);

  return results;
}

function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}


/***/ }),

/***/ "./src/assets/images/1.jpg":
/*!*********************************!*\
  !*** ./src/assets/images/1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1.3f0fddcc.jpg";

/***/ }),

/***/ "./src/assets/images/2.jpg":
/*!*********************************!*\
  !*** ./src/assets/images/2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2.f68fdb9d.jpg";

/***/ }),

/***/ "./src/assets/images/3.jpg":
/*!*********************************!*\
  !*** ./src/assets/images/3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3.decb6aa5.jpg";

/***/ }),

/***/ "./src/assets/images/4.jpg":
/*!*********************************!*\
  !*** ./src/assets/images/4.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4.9545d844.jpg";

/***/ }),

/***/ "./src/assets/images/5.jpg":
/*!*********************************!*\
  !*** ./src/assets/images/5.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5.03e068fe.jpg";

/***/ }),

/***/ "./src/assets/images/6.jpg":
/*!*********************************!*\
  !*** ./src/assets/images/6.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6.d754625c.jpg";

/***/ }),

/***/ "./src/components/app-layout/favicon.png":
/*!***********************************************!*\
  !*** ./src/components/app-layout/favicon.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "favicon.bbf6a67c.png";

/***/ }),

/***/ "@marko/express":
/*!*********************************!*\
  !*** external "@marko/express" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@marko/express");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "marko/src/core-tags/components/init-components-tag.js":
/*!************************************************************************!*\
  !*** external "marko/src/core-tags/components/init-components-tag.js" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("marko/src/core-tags/components/init-components-tag.js");

/***/ }),

/***/ "marko/src/core-tags/components/preferred-script-location-tag.js":
/*!**********************************************************************************!*\
  !*** external "marko/src/core-tags/components/preferred-script-location-tag.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("marko/src/core-tags/components/preferred-script-location-tag.js");

/***/ }),

/***/ "marko/src/core-tags/core/__flush_here_and_after__.js":
/*!***********************************************************************!*\
  !*** external "marko/src/core-tags/core/__flush_here_and_after__.js" ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = require("marko/src/core-tags/core/__flush_here_and_after__.js");

/***/ }),

/***/ "marko/src/core-tags/core/await/reorderer-renderer.js":
/*!***********************************************************************!*\
  !*** external "marko/src/core-tags/core/await/reorderer-renderer.js" ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = require("marko/src/core-tags/core/await/reorderer-renderer.js");

/***/ }),

/***/ "marko/src/runtime/components/renderer.js":
/*!***********************************************************!*\
  !*** external "marko/src/runtime/components/renderer.js" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("marko/src/runtime/components/renderer.js");

/***/ }),

/***/ "marko/src/runtime/helpers/class-value.js":
/*!***********************************************************!*\
  !*** external "marko/src/runtime/helpers/class-value.js" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("marko/src/runtime/helpers/class-value.js");

/***/ }),

/***/ "marko/src/runtime/helpers/dynamic-tag.js":
/*!***********************************************************!*\
  !*** external "marko/src/runtime/helpers/dynamic-tag.js" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("marko/src/runtime/helpers/dynamic-tag.js");

/***/ }),

/***/ "marko/src/runtime/helpers/render-tag.js":
/*!**********************************************************!*\
  !*** external "marko/src/runtime/helpers/render-tag.js" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("marko/src/runtime/helpers/render-tag.js");

/***/ }),

/***/ "marko/src/runtime/html/helpers/attr.js":
/*!*********************************************************!*\
  !*** external "marko/src/runtime/html/helpers/attr.js" ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = require("marko/src/runtime/html/helpers/attr.js");

/***/ }),

/***/ "marko/src/runtime/html/helpers/escape-xml.js":
/*!***************************************************************!*\
  !*** external "marko/src/runtime/html/helpers/escape-xml.js" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("marko/src/runtime/html/helpers/escape-xml.js");

/***/ }),

/***/ "marko/src/runtime/html/index.js":
/*!**************************************************!*\
  !*** external "marko/src/runtime/html/index.js" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("marko/src/runtime/html/index.js");

/***/ }),

/***/ "./src/services/data/dataset.json":
/*!****************************************!*\
  !*** ./src/services/data/dataset.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"page_meta":{"h1":"DAF - TRUCKS FOR SALE FROM NETHERLANDS","title":"Used DAF trucks from Netherlands for sale at SuperTrucks NL","meta_keywords":"trucks, offers, prices, used, new, marketplace","meta_description":"Keyword: daf netherlands. 26 trucks. Find new or used trucks in any price range fast and easy!"},"nav":[{"href":"#","text":"Home"},{"href":"#","text":"Trucks"},{"href":"#","text":"About Us"},{"href":"#","text":"Contact"}],"breadcrumbs":[{"href":"#","text":"Home"},{"href":"#","text":"Trucks"},{"href":"#","text":"DAF"}],"stock":[{"href":"#","title":"DAF XF 440 6X2 SSC Intarder Standklima Liftachse ACC Euro 6","price":25900,"price_currency":"EUR","make":"DAF","model":"XF 440 SSC","type":"Container transporter/ swap body truck","year":2014,"mileage":486647,"mileage_measure":"km","axle_configuration":"6x2","power":440,"power_measure":"hp","payload":"16 550 kg","gross_weight":"25 700 kg","image":"1.jpg"},{"href":"#","title":"DAF XF 460 SSC 6X2 SSC ACC Liftachse Intarder Euro 6","price":29900,"price_currency":"EUR","make":"DAF","model":"XF 440 SSC","type":"Container transporter/ swap body truck","year":2016,"mileage":554317,"mileage_measure":"km","axle_configuration":"6x2","power":460,"power_measure":"hp","payload":"15 761 kg","gross_weight":"26 000 kg","image":"2.jpg"},{"href":"#","title":"DAF CF 75.310 + Manual","price":7950,"price_currency":"EUR","make":"DAF","model":"CF 75.310","type":"Cab chassis truck","year":2006,"mileage":1026087,"mileage_measure":"km","axle_configuration":"4x4","power":310,"power_measure":"hp","payload":"10 710 kg","gross_weight":"18 600 kg","image":"3.jpg"},{"href":"#","title":"DAF CF 65.300 + Euro 5 + lift","price":25950,"price_currency":"EUR","make":"DAF","model":"CF 65.300","type":"Curtainsider truck","year":2014,"mileage":537307,"mileage_measure":"km","axle_configuration":"4x2","power":300,"power_measure":"hp","payload":"9 634 kg","gross_weight":"19 000 kg","image":"4.jpg"},{"href":"#","title":"DAF XF 105.410 + Combi floor + Euro 5","price":19500,"price_currency":"EUR","make":"DAF","model":"XF 105.410","type":"Box truck","year":2009,"mileage":1142998,"mileage_measure":"km","axle_configuration":"4x2","power":408,"power_measure":"hp","payload":"7 445 kg","gross_weight":"19 000 kg","image":"5.jpg"},{"href":"#","title":"DAF 105 XF 460 6x2, EURO 5, Airco, Combi","price":18750,"price_currency":"EUR","make":"DAF","model":"XF 105.460","type":"Curtainsider truck","year":2012,"mileage":897000,"mileage_measure":"km","axle_configuration":"6x2","power":460,"power_measure":"hp","payload":"14 960 kg","gross_weight":"26 000 kg","image":"6.jpg"}],"page_text":[{"tag":"p","content":"A truck (a heavy load vehicle) – is a means of transport intended for load transportation. The concept of a “truck” has a rather broad definition and includes tractor units, as well as commercial vehicles and even pick-ups. A truck consists of a traction part and a load platform. Now let’s take into consideration trucks with the integral load platform and the GVW that reaches up to 7, 5 tons."},{"tag":"p","content":"Trucks’ axle configuration may vary from 4x2 to 8x8 according to the engine capacity and the purpose of a truck. Thus, quarry and construction dump trucks are equipped with 4x4, 6x4, 6x6 and 8x6 wheel-bases more often."},{"tag":"p","content":"Trucks are equipped with all modern passive and active safety systems in order to use the truck in urban areas or on the highways. These systems include collision prevention system, hill hold control, self-adjusting headlights, etc. Moreover, a contemporary truck meets all the requirements concerning driver’s comfort and the ergonomics of the cabin."}]}');

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/assets/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _marko_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @marko/express */ "@marko/express");
/* harmony import */ var _marko_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_marko_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/index */ "./src/pages/index/index.js");
/* harmony import */ var _services_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data */ "./src/services/data/index.js");






const port = parseInt(process.env.PORT || 3000, 10)

express__WEBPACK_IMPORTED_MODULE_0___default()()
    .use(compression__WEBPACK_IMPORTED_MODULE_1___default()()) // Enable gzip compression for all HTTP responses.
    .use('/assets', express__WEBPACK_IMPORTED_MODULE_0___default()["static"]('dist/assets')) // Serve assets generated from webpack.
    .use(_marko_express__WEBPACK_IMPORTED_MODULE_2___default()()) // Enables res.marko.
    .get('/', _pages_index__WEBPACK_IMPORTED_MODULE_3__["default"])
    .get('/services/users', _services_data__WEBPACK_IMPORTED_MODULE_4__["default"])
    .listen(port, (err) => {
        if (err) {
            throw err
        }

        if (port) {
            console.log(`Listening on port ${port}`)
        }
    })

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQUFBO0FBR0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQU5BO0FBQUE7QUFPQTtBQVBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7OztBQVNBOzs7O0FBQ0E7OztBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOzs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBR0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFKQTs7QUFNQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBREE7QUFFQTtBQUZBOztBQUtBOzs7O0FBRUE7QUFDQTs7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUZBOztBQUlBOztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFFQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOzs7O0FBQ0E7OztBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBVkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVpBO0FBQ0E7QUFDQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBR0E7QUFFQTtBQUNBOztBQUdBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIj9tYW5pZmVzdCIsIkM6XFxVc2Vyc1xc0JrQvtC90YHRgtCw0L3RgtC40L1cXERlc2t0b3BcXHRlc3QtdGFza1xcdGVzdC10YXNrXFxtYXJrZXRwbGFjZVxcc3JjXFxjb21wb25lbnRzXFxhcHAtYnJlYWRjcnVtYnNcXGluZGV4Lm1hcmtvIiwiQzpcXFVzZXJzXFzQmtC+0L3RgdGC0LDQvdGC0LjQvVxcRGVza3RvcFxcdGVzdC10YXNrXFx0ZXN0LXRhc2tcXG1hcmtldHBsYWNlXFxzcmNcXGNvbXBvbmVudHNcXGFwcC1jYXJkXFxpbmRleC5tYXJrbyIsIkM6XFxVc2Vyc1xc0JrQvtC90YHRgtCw0L3RgtC40L1cXERlc2t0b3BcXHRlc3QtdGFza1xcdGVzdC10YXNrXFxtYXJrZXRwbGFjZVxcc3JjXFxjb21wb25lbnRzXFxhcHAtY2FyZHNcXGluZGV4Lm1hcmtvIiwiQzpcXFVzZXJzXFzQmtC+0L3RgdGC0LDQvdGC0LjQvVxcRGVza3RvcFxcdGVzdC10YXNrXFx0ZXN0LXRhc2tcXG1hcmtldHBsYWNlXFxzcmNcXGNvbXBvbmVudHNcXGFwcC1mZXRjaC1kYXRhXFxpbmRleC5tYXJrbyIsIkM6XFxVc2Vyc1xc0JrQvtC90YHRgtCw0L3RgtC40L1cXERlc2t0b3BcXHRlc3QtdGFza1xcdGVzdC10YXNrXFxtYXJrZXRwbGFjZVxcc3JjXFxjb21wb25lbnRzXFxhcHAtZm9vdGVyXFxpbmRleC5tYXJrbyIsIkM6XFxVc2Vyc1xc0JrQvtC90YHRgtCw0L3RgtC40L1cXERlc2t0b3BcXHRlc3QtdGFza1xcdGVzdC10YXNrXFxtYXJrZXRwbGFjZVxcc3JjXFxjb21wb25lbnRzXFxhcHAtbGF5b3V0XFxpbmRleC5tYXJrbyIsIkM6XFxVc2Vyc1xc0JrQvtC90YHRgtCw0L3RgtC40L1cXERlc2t0b3BcXHRlc3QtdGFza1xcdGVzdC10YXNrXFxtYXJrZXRwbGFjZVxcc3JjXFxjb21wb25lbnRzXFxhcHAtbWFpblxcaW5kZXgubWFya28iLCJDOlxcVXNlcnNcXNCa0L7QvdGB0YLQsNC90YLQuNC9XFxEZXNrdG9wXFx0ZXN0LXRhc2tcXHRlc3QtdGFza1xcbWFya2V0cGxhY2VcXHNyY1xcY29tcG9uZW50c1xcYXBwLW5hdlxcaW5kZXgubWFya28iLCJDOlxcVXNlcnNcXNCa0L7QvdGB0YLQsNC90YLQuNC9XFxEZXNrdG9wXFx0ZXN0LXRhc2tcXHRlc3QtdGFza1xcbWFya2V0cGxhY2VcXHNyY1xcY29tcG9uZW50c1xcYXBwLXBhZ2UtdGV4dFxcaW5kZXgubWFya28iLCJDOlxcVXNlcnNcXNCa0L7QvdGB0YLQsNC90YLQuNC9XFxEZXNrdG9wXFx0ZXN0LXRhc2tcXHRlc3QtdGFza1xcbWFya2V0cGxhY2VcXHNyY1xcY29tcG9uZW50c1xcc2FtcGxlLWhlYWRlclxcaW5kZXgubWFya28iLCJDOlxcVXNlcnNcXNCa0L7QvdGB0YLQsNC90YLQuNC9XFxEZXNrdG9wXFx0ZXN0LXRhc2tcXHRlc3QtdGFza1xcbWFya2V0cGxhY2VcXHNyY1xccGFnZXNcXGluZGV4XFx0ZW1wbGF0ZS5tYXJrbyIsIkM6XFxVc2Vyc1xc0JrQvtC90YHRgtCw0L3RgtC40L1cXERlc2t0b3BcXHRlc3QtdGFza1xcdGVzdC10YXNrXFxtYXJrZXRwbGFjZVxcc3JjXFxjb21wb25lbnRzXFxhcHAtbWFpblxcY29tcG9uZW50LmpzIiwiQzpcXFVzZXJzXFzQmtC+0L3RgdGC0LDQvdGC0LjQvVxcRGVza3RvcFxcdGVzdC10YXNrXFx0ZXN0LXRhc2tcXG1hcmtldHBsYWNlXFxzcmNcXHBhZ2VzXFxpbmRleFxcaW5kZXguanMiLCJDOlxcVXNlcnNcXNCa0L7QvdGB0YLQsNC90YLQuNC9XFxEZXNrdG9wXFx0ZXN0LXRhc2tcXHRlc3QtdGFza1xcbWFya2V0cGxhY2VcXHNyY1xcc2VydmljZXNcXGRhdGFcXGluZGV4LmpzIiwiQzpcXFVzZXJzXFzQmtC+0L3RgdGC0LDQvdGC0LjQvVxcRGVza3RvcFxcdGVzdC10YXNrXFx0ZXN0LXRhc2tcXG1hcmtldHBsYWNlXFxzcmNcXHNlcnZpY2VzXFxkYXRhXFxsb2FkLmpzIiwiZXh0ZXJuYWwgY29tbW9uanMgXCJAbWFya28vZXhwcmVzc1wiIiwiZXh0ZXJuYWwgY29tbW9uanMgXCJjb21wcmVzc2lvblwiIiwiZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJleHRlcm5hbCBjb21tb25qcyBcIm1hcmtvL3NyYy9jb3JlLXRhZ3MvY29tcG9uZW50cy9pbml0LWNvbXBvbmVudHMtdGFnLmpzXCIiLCJleHRlcm5hbCBjb21tb25qcyBcIm1hcmtvL3NyYy9jb3JlLXRhZ3MvY29tcG9uZW50cy9wcmVmZXJyZWQtc2NyaXB0LWxvY2F0aW9uLXRhZy5qc1wiIiwiZXh0ZXJuYWwgY29tbW9uanMgXCJtYXJrby9zcmMvY29yZS10YWdzL2NvcmUvX19mbHVzaF9oZXJlX2FuZF9hZnRlcl9fLmpzXCIiLCJleHRlcm5hbCBjb21tb25qcyBcIm1hcmtvL3NyYy9jb3JlLXRhZ3MvY29yZS9hd2FpdC9yZW9yZGVyZXItcmVuZGVyZXIuanNcIiIsImV4dGVybmFsIGNvbW1vbmpzIFwibWFya28vc3JjL3J1bnRpbWUvY29tcG9uZW50cy9yZW5kZXJlci5qc1wiIiwiZXh0ZXJuYWwgY29tbW9uanMgXCJtYXJrby9zcmMvcnVudGltZS9oZWxwZXJzL2NsYXNzLXZhbHVlLmpzXCIiLCJleHRlcm5hbCBjb21tb25qcyBcIm1hcmtvL3NyYy9ydW50aW1lL2hlbHBlcnMvZHluYW1pYy10YWcuanNcIiIsImV4dGVybmFsIGNvbW1vbmpzIFwibWFya28vc3JjL3J1bnRpbWUvaGVscGVycy9yZW5kZXItdGFnLmpzXCIiLCJleHRlcm5hbCBjb21tb25qcyBcIm1hcmtvL3NyYy9ydW50aW1lL2h0bWwvaGVscGVycy9hdHRyLmpzXCIiLCJleHRlcm5hbCBjb21tb25qcyBcIm1hcmtvL3NyYy9ydW50aW1lL2h0bWwvaGVscGVycy9lc2NhcGUteG1sLmpzXCIiLCJleHRlcm5hbCBjb21tb25qcyBcIm1hcmtvL3NyYy9ydW50aW1lL2h0bWwvaW5kZXguanNcIiIsIndlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwiQzpcXFVzZXJzXFzQmtC+0L3RgdGC0LDQvdGC0LjQvVxcRGVza3RvcFxcdGVzdC10YXNrXFx0ZXN0LXRhc2tcXG1hcmtldHBsYWNlXFxzcmNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9