/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: external "compression"
const external_compression_namespaceObject = require("compression");
var external_compression_default = /*#__PURE__*/__webpack_require__.n(external_compression_namespaceObject);
;// CONCATENATED MODULE: external "@marko/express"
const express_namespaceObject = require("@marko/express");
var express_default = /*#__PURE__*/__webpack_require__.n(express_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/runtime/html/index.js"
const index_js_namespaceObject = require("marko/dist/runtime/html/index.js");
;// CONCATENATED MODULE: ./src/services/data/dataset.json
const dataset_namespaceObject = JSON.parse('{"page_meta":{"h1":"DAF - TRUCKS FOR SALE FROM NETHERLANDS","title":"Used DAF trucks from Netherlands for sale at SuperTrucks NL","meta_keywords":"trucks, offers, prices, used, new, marketplace","meta_description":"Keyword: daf netherlands. 26 trucks. Find new or used trucks in any price range fast and easy!"},"nav":[{"href":"#","text":"Home"},{"href":"#","text":"Trucks"},{"href":"#","text":"About Us"},{"href":"#","text":"Contact"}],"breadcrumbs":[{"href":"#","text":"Home"},{"href":"#","text":"Trucks"},{"href":"#","text":"DAF"}],"stock":[{"href":"#","title":"DAF XF 440 6X2 SSC Intarder Standklima Liftachse ACC Euro 6","price":25900,"price_currency":"EUR","make":"DAF","model":"XF 440 SSC","type":"Container transporter/ swap body truck","year":2014,"mileage":486647,"mileage_measure":"km","axle_configuration":"6x2","power":440,"power_measure":"hp","payload":"16 550 kg","gross_weight":"25 700 kg","image":"1.jpg"},{"href":"#","title":"DAF XF 460 SSC 6X2 SSC ACC Liftachse Intarder Euro 6","price":29900,"price_currency":"EUR","make":"DAF","model":"XF 440 SSC","type":"Container transporter/ swap body truck","year":2016,"mileage":554317,"mileage_measure":"km","axle_configuration":"6x2","power":460,"power_measure":"hp","payload":"15 761 kg","gross_weight":"26 000 kg","image":"2.jpg"},{"href":"#","title":"DAF CF 75.310 + Manual","price":7950,"price_currency":"EUR","make":"DAF","model":"CF 75.310","type":"Cab chassis truck","year":2006,"mileage":1026087,"mileage_measure":"km","axle_configuration":"4x4","power":310,"power_measure":"hp","payload":"10 710 kg","gross_weight":"18 600 kg","image":"3.jpg"},{"href":"#","title":"DAF CF 65.300 + Euro 5 + lift","price":25950,"price_currency":"EUR","make":"DAF","model":"CF 65.300","type":"Curtainsider truck","year":2014,"mileage":537307,"mileage_measure":"km","axle_configuration":"4x2","power":300,"power_measure":"hp","payload":"9 634 kg","gross_weight":"19 000 kg","image":"4.jpg"},{"href":"#","title":"DAF XF 105.410 + Combi floor + Euro 5","price":19500,"price_currency":"EUR","make":"DAF","model":"XF 105.410","type":"Box truck","year":2009,"mileage":1142998,"mileage_measure":"km","axle_configuration":"4x2","power":408,"power_measure":"hp","payload":"7 445 kg","gross_weight":"19 000 kg","image":"5.jpg"},{"href":"#","title":"DAF 105 XF 460 6x2, EURO 5, Airco, Combi","price":18750,"price_currency":"EUR","make":"DAF","model":"XF 105.460","type":"Curtainsider truck","year":2012,"mileage":897000,"mileage_measure":"km","axle_configuration":"6x2","power":460,"power_measure":"hp","payload":"14 960 kg","gross_weight":"26 000 kg","image":"6.jpg"}],"page_text":[{"tag":"p","content":"A truck (a heavy load vehicle) – is a means of transport intended for load transportation. The concept of a “truck” has a rather broad definition and includes tractor units, as well as commercial vehicles and even pick-ups. A truck consists of a traction part and a load platform. Now let’s take into consideration trucks with the integral load platform and the GVW that reaches up to 7, 5 tons."},{"tag":"p","content":"Trucks’ axle configuration may vary from 4x2 to 8x8 according to the engine capacity and the purpose of a truck. Thus, quarry and construction dump trucks are equipped with 4x4, 6x4, 6x6 and 8x6 wheel-bases more often."},{"tag":"p","content":"Trucks are equipped with all modern passive and active safety systems in order to use the truck in urban areas or on the highways. These systems include collision prevention system, hill hold control, self-adjusting headlights, etc. Moreover, a contemporary truck meets all the requirements concerning driver’s comfort and the ergonomics of the cabin."}]}');
;// CONCATENATED MODULE: ./src/services/data/load.js


async function getData() {
  const results = {
    dataset: dataset_namespaceObject,
    totalMatches: dataset_namespaceObject.length,
  };

  await sleep(1000);

  return results;
}

function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

;// CONCATENATED MODULE: external "marko/dist/runtime/html/helpers/escape-xml.js"
const escape_xml_js_namespaceObject = require("marko/dist/runtime/html/helpers/escape-xml.js");
;// CONCATENATED MODULE: external "marko/dist/runtime/html/helpers/attr.js"
const attr_js_namespaceObject = require("marko/dist/runtime/html/helpers/attr.js");
var attr_js_default = /*#__PURE__*/__webpack_require__.n(attr_js_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/runtime/components/renderer.js"
const renderer_js_namespaceObject = require("marko/dist/runtime/components/renderer.js");
var renderer_js_default = /*#__PURE__*/__webpack_require__.n(renderer_js_namespaceObject);
;// CONCATENATED MODULE: ./src/components/app-nav/index.marko


const _marko_componentType = "74oducky",
      _marko_template = (0,index_js_namespaceObject.t)(_marko_componentType);

/* harmony default export */ const index_marko = (_marko_template);



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
_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.w("<nav class=navbar role=navigation aria-label=\"main navigation\"><div id=navbarBasicExample class=navbar-menu><div class=navbar-start>");
  {
    let _keyValue = 0;

    for (const nav of state.data.nav) {
      const _keyScope = `[${_keyValue++}]`;
      out.w(`<a class=navbar-item${attr_js_default()("href", `${nav.href}`)}>${(0,escape_xml_js_namespaceObject.x)(nav.text)}</a>`);
    }
  }
  out.w("</div></div></nav>");
}, {
  t: _marko_componentType
}, _marko_component);
;// CONCATENATED MODULE: external "marko/dist/runtime/helpers/render-tag.js"
const render_tag_js_namespaceObject = require("marko/dist/runtime/helpers/render-tag.js");
var render_tag_js_default = /*#__PURE__*/__webpack_require__.n(render_tag_js_namespaceObject);
;// CONCATENATED MODULE: ./src/components/app-breadcrumbs/index.marko


const index_marko_marko_componentType = "LLoW6wGG",
      index_marko_marko_template = (0,index_js_namespaceObject.t)(index_marko_marko_componentType);

/* harmony default export */ const app_breadcrumbs_index_marko = (index_marko_marko_template);



const index_marko_marko_component = {
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
index_marko_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.w("<nav class=breadcrumb aria-label=breadcrumbs><ul>");
  {
    let _index = 0;

    for (const breadcrumb of state.data.breadcrumbs) {
      let index = _index++;
      const _keyScope = `[${index}]`;

      if (index === state.data.breadcrumbs.length - 1) {
        out.w(`<li class=is-active><a aria-current=page${attr_js_default()("href", `${breadcrumb.href}`)}>${(0,escape_xml_js_namespaceObject.x)(breadcrumb.text)}</a></li> `);
      } else {
        out.w(`<li><a${attr_js_default()("href", `${breadcrumb.href}`)}>${(0,escape_xml_js_namespaceObject.x)(breadcrumb.text)}</a></li> `);
      }
    }
  }
  out.w("</ul></nav>");
}, {
  t: index_marko_marko_componentType
}, index_marko_marko_component);
;// CONCATENATED MODULE: ./src/assets/images/1.jpg
const _1_namespaceObject = __webpack_require__.p + "3f0fddcc.jpg";
;// CONCATENATED MODULE: ./src/assets/images/2.jpg
const _2_namespaceObject = __webpack_require__.p + "f68fdb9d.jpg";
;// CONCATENATED MODULE: ./src/assets/images/3.jpg
const _3_namespaceObject = __webpack_require__.p + "decb6aa5.jpg";
;// CONCATENATED MODULE: ./src/assets/images/4.jpg
const _4_namespaceObject = __webpack_require__.p + "9545d844.jpg";
;// CONCATENATED MODULE: ./src/assets/images/5.jpg
const _5_namespaceObject = __webpack_require__.p + "03e068fe.jpg";
;// CONCATENATED MODULE: ./src/assets/images/6.jpg
const _6_namespaceObject = __webpack_require__.p + "d754625c.jpg";
;// CONCATENATED MODULE: ./src/components/app-card/index.marko


const app_card_index_marko_marko_componentType = "lBRXjZp2",
      app_card_index_marko_marko_template = (0,index_js_namespaceObject.t)(app_card_index_marko_marko_componentType);

/* harmony default export */ const app_card_index_marko = (app_card_index_marko_marko_template);









const app_card_index_marko_marko_component = {
  onInput(input) {
    const {
      stock
    } = input;
    const images = [_1_namespaceObject, _2_namespaceObject, _3_namespaceObject, _4_namespaceObject, _5_namespaceObject, _6_namespaceObject];
    this.state = {
      stock: stock,
      images: images
    };
  }

};
app_card_index_marko_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.w(`<a${attr_js_default()("href", `${state.stock.href}`)}><div class="app-card card"><div class=card-image><figure class="image is-4by3"><img${attr_js_default()("src", `${state.images[state.stock.image.match(/\d+/)[0] - 1]}`)} alt="Placeholder image"></figure></div><div class=card-content><div class=media><div class=media-content><a${attr_js_default()("href", `${state.stock.href}`)}>${(0,escape_xml_js_namespaceObject.x)(state.stock.title)}</a><p class="subtitle is-6">${(0,escape_xml_js_namespaceObject.x)(state.stock.type)}</p></div></div><div class=content><p>price: ${(0,escape_xml_js_namespaceObject.x)(state.stock.price)} ${(0,escape_xml_js_namespaceObject.x)(state.stock.price_currency)}</p><p>mileage: ${(0,escape_xml_js_namespaceObject.x)(state.stock.mileage)} ${(0,escape_xml_js_namespaceObject.x)(state.stock.mileage_measure)}</p><p>power: ${(0,escape_xml_js_namespaceObject.x)(state.stock.power)} ${(0,escape_xml_js_namespaceObject.x)(state.stock.power_measure)}</p><p>axle configuration: ${(0,escape_xml_js_namespaceObject.x)(state.stock.axle_configuration)}</p><p>payload: ${(0,escape_xml_js_namespaceObject.x)(state.stock.payload)}</p><p>gross weight: ${(0,escape_xml_js_namespaceObject.x)(state.stock.gross_weight)}</p><br><time datetime=2016-1-1>${(0,escape_xml_js_namespaceObject.x)(state.stock.year)}</time></div></div></div></a>`);
}, {
  t: app_card_index_marko_marko_componentType
}, app_card_index_marko_marko_component);
;// CONCATENATED MODULE: ./src/components/app-cards/index.marko


const app_cards_index_marko_marko_componentType = "eHdkPQ0S",
      app_cards_index_marko_marko_template = (0,index_js_namespaceObject.t)(app_cards_index_marko_marko_componentType);

/* harmony default export */ const app_cards_index_marko = (app_cards_index_marko_marko_template);



const app_cards_index_marko_marko_component = {
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
app_cards_index_marko_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.w("<div class=cards>");
  {
    let _keyValue = 0;

    for (const stock of state.data.stock) {
      const _keyScope = `[${_keyValue++}]`;

      render_tag_js_default()(app_card_index_marko, {
        "stock": stock
      }, out, _componentDef, "1" + _keyScope);
    }
  }
  out.w("</div>");
}, {
  t: app_cards_index_marko_marko_componentType
}, app_cards_index_marko_marko_component);
;// CONCATENATED MODULE: external "marko/dist/runtime/helpers/dynamic-tag.js"
const dynamic_tag_js_namespaceObject = require("marko/dist/runtime/helpers/dynamic-tag.js");
var dynamic_tag_js_default = /*#__PURE__*/__webpack_require__.n(dynamic_tag_js_namespaceObject);
;// CONCATENATED MODULE: ./src/components/app-page-text/index.marko


const app_page_text_index_marko_marko_componentType = "KY450NRp",
      app_page_text_index_marko_marko_template = (0,index_js_namespaceObject.t)(app_page_text_index_marko_marko_componentType);

/* harmony default export */ const app_page_text_index_marko = (app_page_text_index_marko_marko_template);



const app_page_text_index_marko_marko_component = {};
app_page_text_index_marko_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.w("<div>");
  {
    let _keyValue = 0;

    for (const text of input.data.page_text) {
      const _keyScope = `[${_keyValue++}]`;

      dynamic_tag_js_default()(out, text.tag, null, out => {
        out.w((0,escape_xml_js_namespaceObject.x)(text.content));
      }, null, null, _componentDef, "1" + _keyScope);
    }
  }
  out.w("</div>");
}, {
  t: app_page_text_index_marko_marko_componentType,
  i: true
}, app_page_text_index_marko_marko_component);
;// CONCATENATED MODULE: external "marko/dist/runtime/helpers/class-value.js"
const class_value_js_namespaceObject = require("marko/dist/runtime/helpers/class-value.js");
var class_value_js_default = /*#__PURE__*/__webpack_require__.n(class_value_js_namespaceObject);
;// CONCATENATED MODULE: ./src/components/app-fetch-data/index.marko


const app_fetch_data_index_marko_marko_componentType = "aiTAl07B",
      app_fetch_data_index_marko_marko_template = (0,index_js_namespaceObject.t)(app_fetch_data_index_marko_marko_componentType);

/* harmony default export */ const app_fetch_data_index_marko = (app_fetch_data_index_marko_marko_template);









const app_fetch_data_index_marko_marko_component = {
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
      const data = await (this.pending = getData(1));
      state.data = data.dataset;
      this.emit('output-to-layout', state.data);
    } catch (err) {
      console.log("Fetch failed:", err);
    }

    state.loading = false;
  }

};
app_fetch_data_index_marko_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.w("<div class=app-fetch-data>");

  if (Object.keys(state.data).length) {
    render_tag_js_default()(index_marko, {
      "data": state.data
    }, out, _componentDef, "1");

    render_tag_js_default()(app_breadcrumbs_index_marko, {
      "data": state.data
    }, out, _componentDef, "2");

    render_tag_js_default()(app_cards_index_marko, {
      "data": state.data
    }, out, _componentDef, "3");

    render_tag_js_default()(app_page_text_index_marko, {
      "data": state.data
    }, out, _componentDef, "4");
  }

  out.w(`<span${attr_js_default()("class", class_value_js_default()({
    loading: state.loading
  }))}></span></div>`);
}, {
  t: app_fetch_data_index_marko_marko_componentType
}, app_fetch_data_index_marko_marko_component);
;// CONCATENATED MODULE: ./src/components/app-main/component.js
/* harmony default export */ const component = (class {
    handleOutput(output) {
        this.emit('output-to-layout', output)
    }
});

;// CONCATENATED MODULE: ./src/components/app-main/index.marko


const app_main_index_marko_marko_componentType = "/SmPGuie",
      app_main_index_marko_marko_template = (0,index_js_namespaceObject.t)(app_main_index_marko_marko_componentType);

/* harmony default export */ const app_main_index_marko = (app_main_index_marko_marko_template);




const _marko_component2 = component;
app_main_index_marko_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.w("<div>");

  render_tag_js_default()(app_fetch_data_index_marko, {}, out, _componentDef, "1", [["output-to-layout", 'handleOutput', false]]);

  out.w("</div>");
}, {
  t: app_main_index_marko_marko_componentType
}, _marko_component2);
;// CONCATENATED MODULE: ./src/components/app-layout/favicon.png
const favicon_namespaceObject = __webpack_require__.p + "bbf6a67c.png";
;// CONCATENATED MODULE: ./src/components/sample-header/index.marko


const sample_header_index_marko_marko_componentType = "xT24GsGN",
      sample_header_index_marko_marko_template = (0,index_js_namespaceObject.t)(sample_header_index_marko_marko_componentType);

/* harmony default export */ const sample_header_index_marko = (sample_header_index_marko_marko_template);


const sample_header_index_marko_marko_component = {};
sample_header_index_marko_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.w(`<header><h1>${(0,escape_xml_js_namespaceObject.x)(input.h1)}</h1></header>`);
}, {
  t: sample_header_index_marko_marko_componentType
}, sample_header_index_marko_marko_component);
;// CONCATENATED MODULE: ./src/components/app-footer/index.marko


const app_footer_index_marko_marko_componentType = "aiwm/eXS",
      app_footer_index_marko_marko_template = (0,index_js_namespaceObject.t)(app_footer_index_marko_marko_componentType);

/* harmony default export */ const app_footer_index_marko = (app_footer_index_marko_marko_template);

const app_footer_index_marko_marko_component = {};
app_footer_index_marko_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.w("<footer>Footer</footer>");
}, {
  t: app_footer_index_marko_marko_componentType,
  i: true
}, app_footer_index_marko_marko_component);
;// CONCATENATED MODULE: external "marko/dist/core-tags/components/init-components-tag.js"
const init_components_tag_js_namespaceObject = require("marko/dist/core-tags/components/init-components-tag.js");
var init_components_tag_js_default = /*#__PURE__*/__webpack_require__.n(init_components_tag_js_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/core-tags/core/await/reorderer-renderer.js"
const reorderer_renderer_js_namespaceObject = require("marko/dist/core-tags/core/await/reorderer-renderer.js");
var reorderer_renderer_js_default = /*#__PURE__*/__webpack_require__.n(reorderer_renderer_js_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/core-tags/components/preferred-script-location-tag.js"
const preferred_script_location_tag_js_namespaceObject = require("marko/dist/core-tags/components/preferred-script-location-tag.js");
var preferred_script_location_tag_js_default = /*#__PURE__*/__webpack_require__.n(preferred_script_location_tag_js_namespaceObject);
;// CONCATENATED MODULE: ./src/components/app-layout/index.marko


const app_layout_index_marko_marko_componentType = "GzeowMtG",
      app_layout_index_marko_marko_template = (0,index_js_namespaceObject.t)(app_layout_index_marko_marko_componentType);

/* harmony default export */ const app_layout_index_marko = (app_layout_index_marko_marko_template);











const app_layout_index_marko_marko_component = {
  onCreate() {
    this.state = {
      output: {}
    };
  },

  onInput(input) {
    this.state.output = input.output;
  }

};
app_layout_index_marko_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.w(`<!doctype html><html lang=en><head><meta charset=UTF-8><link rel=icon type=image/png sizes=32x32${attr_js_default()("href", favicon_namespaceObject)}><meta name=viewport content="width=device-width, initial-scale=1.0"><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css>`);

  if (Object.keys(state.output).length) {
    out.w(`<title>${(0,escape_xml_js_namespaceObject.x)(state.output.page_meta.title)}</title><meta${attr_js_default()("name", `${state.output.page_meta.meta_keywords}`)}${attr_js_default()("content", `${state.output.page_meta.meta_description}`)}>`);
  }

  dynamic_tag_js_default()(out, input.head, null, null, null, null, _componentDef, "8");

  out.global.___renderAssets && out.global.___renderAssets(out);
  out.w("</head><body><div class=container id=tt>");

  if (Object.keys(state.output).length) {
    render_tag_js_default()(sample_header_index_marko, {
      "h1": state.output.page_meta.h1
    }, out, _componentDef, "11");
  }

  out.w("<main id=main>");

  dynamic_tag_js_default()(out, input.body, null, null, null, null, _componentDef, "13");

  out.w("</main>");

  render_tag_js_default()(app_footer_index_marko, {}, out, _componentDef, "14");

  out.w("</div>");

  render_tag_js_default()((init_components_tag_js_default()), {}, out, _componentDef, "15");

  render_tag_js_default()((reorderer_renderer_js_default()), {}, out, _componentDef, "16");

  render_tag_js_default()((preferred_script_location_tag_js_default()), {}, out, _componentDef, "17");

  out.w("</body></html>");
}, {
  t: app_layout_index_marko_marko_componentType
}, app_layout_index_marko_marko_component);
;// CONCATENATED MODULE: ./src/pages/index/template.marko


const template_marko_marko_componentType = "MFgQeUfo",
      template_marko_marko_template = (0,index_js_namespaceObject.t)(template_marko_marko_componentType);

/* harmony default export */ const template_marko = (template_marko_marko_template);




const template_marko_marko_component = {
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
template_marko_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  render_tag_js_default()(app_layout_index_marko, {
    "output": state.output,
    "head": {
      "renderBody": out => {
        out.w("<link href=https://fonts.googleapis.com/css?family=Open+Sans:300,400,700 media=all rel=stylesheet>");
      }
    },
    "body": {
      "renderBody": out => {
        render_tag_js_default()(app_main_index_marko, {}, out, _componentDef, "2", [["output-to-layout", 'handleOutput', false]]);
      }
    }
  }, out, _componentDef, "0");
}, {
  t: template_marko_marko_componentType
}, template_marko_marko_component);
;// CONCATENATED MODULE: ./node_modules/@marko/webpack/dist/loader/index.js!?manifest
/* harmony default export */ const index_js_manifest = ({
  getAssets(entry) {
    return this.build[entry];
  },
  build: {"index_MFgQ":{"css":["ff2f6187.css"],"js":["26e0462e.js","b43a8fa9.js","519cb96a.js"]}}
});
;// CONCATENATED MODULE: external "marko/dist/core-tags/core/__flush_here_and_after__.js"
const _flush_here_and_after_js_namespaceObject = require("marko/dist/core-tags/core/__flush_here_and_after__.js");
var _flush_here_and_after_js_default = /*#__PURE__*/__webpack_require__.n(_flush_here_and_after_js_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/index/template.marko?server-entry


const template_marko_server_entry_marko_componentType = "PvAHstaA",
      template_marko_server_entry_marko_template = (0,index_js_namespaceObject.t)(template_marko_server_entry_marko_componentType);

/* harmony default export */ const template_marko_server_entry = (template_marko_server_entry_marko_template);



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
      const assets = index_js_manifest.getAssets(entry, buildName);

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






const template_marko_server_entry_marko_component = {};
template_marko_server_entry_marko_template._ = renderer_js_default()(function (input, out, _componentDef, _component, state) {
  out.global.runtimeId = "marketplace";
  out.global.___renderAssets = renderAssets;
  (out.global.___entries || (out.global.___entries = [])).push("index_MFgQ");

  render_tag_js_default()((_flush_here_and_after_js_default()), {
    "renderBody": out => {
      out.global.___renderAssets && out.global.___renderAssets(out);
    }
  }, out, _componentDef, "0");

  render_tag_js_default()(template_marko, input, out, _componentDef, "1");

  render_tag_js_default()((init_components_tag_js_default()), {}, out, _componentDef, "2");

  render_tag_js_default()((reorderer_renderer_js_default()), {}, out, _componentDef, "3");
}, {
  t: template_marko_server_entry_marko_componentType,
  i: true
}, template_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ./src/pages/index/index.js


/* harmony default export */ const index = ((req, res) => {
    res.marko(template_marko_server_entry, {})
});

;// CONCATENATED MODULE: ./src/services/data/index.js


/* harmony default export */ const data = (async (req, res) => {
  try {
    res.json(await getData());
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to load data");
  }
});

;// CONCATENATED MODULE: ./src/index.js






const port = parseInt(process.env.PORT || 3000, 10)

external_express_default()()
    .use(external_compression_default()()) // Enable gzip compression for all HTTP responses.
    .use('/assets', external_express_default()["static"]('dist/assets')) // Serve assets generated from webpack.
    .use(express_default()()) // Enables res.marko.
    .get('/', index)
    .get('/services/users', data)
    .listen(port, (err) => {
        if (err) {
            throw err
        }

        if (port) {
            console.log(`Listening on port ${port}`)
        }
    })

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNOQTs7Ozs7Ozs7O0FDQUE7OztBQ0FBOzs7QUNBQTs7O0FDQUE7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDZkE7O0FDQUE7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7QUFHQTs7OztBQUlBOztBQUNBOzs7Ozs7OztBQ2hCQTs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7O0FBR0E7Ozs7QUFFQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7O0FBU0E7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBOzs7Ozs7OztBQ25CQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7QUFDQTtBQUNBO0FBREE7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7QUNDQTs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUdBOztBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBSkE7O0FBTUE7QUFBQTtBQUFBOzs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0dBOzs7Ozs7Ozs7Ozs7OztBQ0pBOzs7Ozs7QUNBQTs7O0FDQUE7OztBQ0FBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTs7QUFRQTtBQUNBO0FBREE7O0FBS0E7Ozs7O0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFGQTs7QUFJQTs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQVZBO0FBQUE7QUFBQTs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FDQUE7Ozs7Ozs7OztBRkFBO0FBQ0E7QUFDQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBR0E7QUFFQTtBQUNBOztBQUdBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7OztBRzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJleHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsImV4dGVybmFsIGNvbW1vbmpzIFwiY29tcHJlc3Npb25cIiIsImV4dGVybmFsIGNvbW1vbmpzIFwiQG1hcmtvL2V4cHJlc3NcIiIsImV4dGVybmFsIGNvbW1vbmpzIFwibWFya28vZGlzdC9ydW50aW1lL2h0bWwvaW5kZXguanNcIiIsIkM6XFxVc2Vyc1xc0JrQvtC90YHRgtCw0L3RgtC40L1cXERlc2t0b3BcXHRlc3QtdGFza1xcdGVzdC10YXNrXFxtYXJrZXRwbGFjZVxcc3JjXFxzZXJ2aWNlc1xcZGF0YVxcbG9hZC5qcyIsImV4dGVybmFsIGNvbW1vbmpzIFwibWFya28vZGlzdC9ydW50aW1lL2h0bWwvaGVscGVycy9lc2NhcGUteG1sLmpzXCIiLCJleHRlcm5hbCBjb21tb25qcyBcIm1hcmtvL2Rpc3QvcnVudGltZS9odG1sL2hlbHBlcnMvYXR0ci5qc1wiIiwiZXh0ZXJuYWwgY29tbW9uanMgXCJtYXJrby9kaXN0L3J1bnRpbWUvY29tcG9uZW50cy9yZW5kZXJlci5qc1wiIiwiQzpcXFVzZXJzXFzQmtC+0L3RgdGC0LDQvdGC0LjQvVxcRGVza3RvcFxcdGVzdC10YXNrXFx0ZXN0LXRhc2tcXG1hcmtldHBsYWNlXFxzcmNcXGNvbXBvbmVudHNcXGFwcC1uYXZcXGluZGV4Lm1hcmtvIiwiZXh0ZXJuYWwgY29tbW9uanMgXCJtYXJrby9kaXN0L3J1bnRpbWUvaGVscGVycy9yZW5kZXItdGFnLmpzXCIiLCJDOlxcVXNlcnNcXNCa0L7QvdGB0YLQsNC90YLQuNC9XFxEZXNrdG9wXFx0ZXN0LXRhc2tcXHRlc3QtdGFza1xcbWFya2V0cGxhY2VcXHNyY1xcY29tcG9uZW50c1xcYXBwLWJyZWFkY3J1bWJzXFxpbmRleC5tYXJrbyIsIkM6XFxVc2Vyc1xc0JrQvtC90YHRgtCw0L3RgtC40L1cXERlc2t0b3BcXHRlc3QtdGFza1xcdGVzdC10YXNrXFxtYXJrZXRwbGFjZVxcc3JjXFxjb21wb25lbnRzXFxhcHAtY2FyZFxcaW5kZXgubWFya28iLCJDOlxcVXNlcnNcXNCa0L7QvdGB0YLQsNC90YLQuNC9XFxEZXNrdG9wXFx0ZXN0LXRhc2tcXHRlc3QtdGFza1xcbWFya2V0cGxhY2VcXHNyY1xcY29tcG9uZW50c1xcYXBwLWNhcmRzXFxpbmRleC5tYXJrbyIsImV4dGVybmFsIGNvbW1vbmpzIFwibWFya28vZGlzdC9ydW50aW1lL2hlbHBlcnMvZHluYW1pYy10YWcuanNcIiIsIkM6XFxVc2Vyc1xc0JrQvtC90YHRgtCw0L3RgtC40L1cXERlc2t0b3BcXHRlc3QtdGFza1xcdGVzdC10YXNrXFxtYXJrZXRwbGFjZVxcc3JjXFxjb21wb25lbnRzXFxhcHAtcGFnZS10ZXh0XFxpbmRleC5tYXJrbyIsImV4dGVybmFsIGNvbW1vbmpzIFwibWFya28vZGlzdC9ydW50aW1lL2hlbHBlcnMvY2xhc3MtdmFsdWUuanNcIiIsIkM6XFxVc2Vyc1xc0JrQvtC90YHRgtCw0L3RgtC40L1cXERlc2t0b3BcXHRlc3QtdGFza1xcdGVzdC10YXNrXFxtYXJrZXRwbGFjZVxcc3JjXFxjb21wb25lbnRzXFxhcHAtZmV0Y2gtZGF0YVxcaW5kZXgubWFya28iLCJDOlxcVXNlcnNcXNCa0L7QvdGB0YLQsNC90YLQuNC9XFxEZXNrdG9wXFx0ZXN0LXRhc2tcXHRlc3QtdGFza1xcbWFya2V0cGxhY2VcXHNyY1xcY29tcG9uZW50c1xcYXBwLW1haW5cXGNvbXBvbmVudC5qcyIsIkM6XFxVc2Vyc1xc0JrQvtC90YHRgtCw0L3RgtC40L1cXERlc2t0b3BcXHRlc3QtdGFza1xcdGVzdC10YXNrXFxtYXJrZXRwbGFjZVxcc3JjXFxjb21wb25lbnRzXFxhcHAtbWFpblxcaW5kZXgubWFya28iLCJDOlxcVXNlcnNcXNCa0L7QvdGB0YLQsNC90YLQuNC9XFxEZXNrdG9wXFx0ZXN0LXRhc2tcXHRlc3QtdGFza1xcbWFya2V0cGxhY2VcXHNyY1xcY29tcG9uZW50c1xcc2FtcGxlLWhlYWRlclxcaW5kZXgubWFya28iLCJDOlxcVXNlcnNcXNCa0L7QvdGB0YLQsNC90YLQuNC9XFxEZXNrdG9wXFx0ZXN0LXRhc2tcXHRlc3QtdGFza1xcbWFya2V0cGxhY2VcXHNyY1xcY29tcG9uZW50c1xcYXBwLWZvb3RlclxcaW5kZXgubWFya28iLCJleHRlcm5hbCBjb21tb25qcyBcIm1hcmtvL2Rpc3QvY29yZS10YWdzL2NvbXBvbmVudHMvaW5pdC1jb21wb25lbnRzLXRhZy5qc1wiIiwiZXh0ZXJuYWwgY29tbW9uanMgXCJtYXJrby9kaXN0L2NvcmUtdGFncy9jb3JlL2F3YWl0L3Jlb3JkZXJlci1yZW5kZXJlci5qc1wiIiwiZXh0ZXJuYWwgY29tbW9uanMgXCJtYXJrby9kaXN0L2NvcmUtdGFncy9jb21wb25lbnRzL3ByZWZlcnJlZC1zY3JpcHQtbG9jYXRpb24tdGFnLmpzXCIiLCJDOlxcVXNlcnNcXNCa0L7QvdGB0YLQsNC90YLQuNC9XFxEZXNrdG9wXFx0ZXN0LXRhc2tcXHRlc3QtdGFza1xcbWFya2V0cGxhY2VcXHNyY1xcY29tcG9uZW50c1xcYXBwLWxheW91dFxcaW5kZXgubWFya28iLCJDOlxcVXNlcnNcXNCa0L7QvdGB0YLQsNC90YLQuNC9XFxEZXNrdG9wXFx0ZXN0LXRhc2tcXHRlc3QtdGFza1xcbWFya2V0cGxhY2VcXHNyY1xccGFnZXNcXGluZGV4XFx0ZW1wbGF0ZS5tYXJrbyIsIj9tYW5pZmVzdCIsImV4dGVybmFsIGNvbW1vbmpzIFwibWFya28vZGlzdC9jb3JlLXRhZ3MvY29yZS9fX2ZsdXNoX2hlcmVfYW5kX2FmdGVyX18uanNcIiIsIkM6XFxVc2Vyc1xc0JrQvtC90YHRgtCw0L3RgtC40L1cXERlc2t0b3BcXHRlc3QtdGFza1xcdGVzdC10YXNrXFxtYXJrZXRwbGFjZVxcc3JjXFxwYWdlc1xcaW5kZXhcXGluZGV4LmpzIiwiQzpcXFVzZXJzXFzQmtC+0L3RgdGC0LDQvdGC0LjQvVxcRGVza3RvcFxcdGVzdC10YXNrXFx0ZXN0LXRhc2tcXG1hcmtldHBsYWNlXFxzcmNcXHNlcnZpY2VzXFxkYXRhXFxpbmRleC5qcyIsIkM6XFxVc2Vyc1xc0JrQvtC90YHRgtCw0L3RgtC40L1cXERlc2t0b3BcXHRlc3QtdGFza1xcdGVzdC10YXNrXFxtYXJrZXRwbGFjZVxcc3JjXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==