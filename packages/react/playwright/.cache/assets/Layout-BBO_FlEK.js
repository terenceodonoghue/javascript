import { g as getDefaultExportFromCjs } from './index-CPzh2flV.js';

var jsxRuntime$2 = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	"use strict";
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var jsxRuntime$1 = jsxRuntime$2.exports;

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime$2.exports;
	hasRequiredJsxRuntime = 1;
	"use strict";
	if (true) {
	  jsxRuntime$2.exports = requireReactJsxRuntime_production();
	} else {
	  module.exports = require("./cjs/react-jsx-runtime.development.js");
	}
	return jsxRuntime$2.exports;
}

var jsxRuntimeExports = requireJsxRuntime();
const jsxRuntime = /*@__PURE__*/getDefaultExportFromCjs(jsxRuntimeExports);

const classNames = (...args) => args.flat().filter(Boolean).join(" ");

const flex = "_flex_cakby_11";
const styles = {
	flex: flex,
	"flex-col": "_flex-col_cakby_15",
	"px-0": "_px-0_cakby_20",
	"px-4": "_px-4_cakby_23",
	"px-8": "_px-8_cakby_26",
	"px-12": "_px-12_cakby_29",
	"px-16": "_px-16_cakby_32",
	"px-24": "_px-24_cakby_35",
	"px-32": "_px-32_cakby_38",
	"py-0": "_py-0_cakby_43",
	"py-4": "_py-4_cakby_46",
	"py-8": "_py-8_cakby_49",
	"py-12": "_py-12_cakby_52",
	"py-16": "_py-16_cakby_55",
	"py-24": "_py-24_cakby_58",
	"py-32": "_py-32_cakby_61",
	"mx-0": "_mx-0_cakby_66",
	"mx-4": "_mx-4_cakby_69",
	"mx-8": "_mx-8_cakby_72",
	"mx-12": "_mx-12_cakby_75",
	"mx-16": "_mx-16_cakby_78",
	"mx-24": "_mx-24_cakby_81",
	"mx-32": "_mx-32_cakby_84",
	"my-0": "_my-0_cakby_89",
	"my-4": "_my-4_cakby_92",
	"my-8": "_my-8_cakby_95",
	"my-12": "_my-12_cakby_98",
	"my-16": "_my-16_cakby_101",
	"my-24": "_my-24_cakby_104",
	"my-32": "_my-32_cakby_107"
};

const flexbox = ({ column }) => [styles.flex, column && styles["flex-col"]].filter(
  (item) => Boolean(item)
);
const spacing = (props) => Object.entries(props).map(([prop, value]) => styles[`${prop}-${value}`]);

const Flex = ({
  as,
  mx,
  my,
  px,
  py,
  column,
  ...rest
}) => {
  const Element = as || "div";
  const className = classNames(
    flexbox({ column }),
    spacing({ mx, my, px, py })
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Element, { className, ...rest });
};

export { Flex };
//# sourceMappingURL=Layout-BBO_FlEK.js.map
