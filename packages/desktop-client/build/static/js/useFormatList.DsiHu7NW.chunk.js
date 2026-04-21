import { i as __commonJSMin, l as __toESM, n as require_jsx_runtime, r as require_react, t as theme } from "./theme.LZxTPVqa.chunk.js";
import { b as styles, lr as useQuery } from "./extends.opUJhDAp.chunk.js";
import { Kr as dashboardQueries, Ma as SvgExclamationOutline, Oa as SvgInformationOutline, Ul as View, Zs as $f7dceffc5ad7768b$export$4e328f61c538687f, _o as require__Symbol, bc as $64fa3d84918910a7$export$4d86445c2cf5e3, ec as $6179b936705e76d3$export$ae780daf29e6d456, el as $3ef42575df84b30b$export$9d1611c77c2fe928, mo as require_isSymbol, ts as Text, wc as $64fa3d84918910a7$export$df3a06d6289f983e, yc as $64fa3d84918910a7$export$29f1550f4b0d4415 } from "./Value.D0gbasR7.chunk.js";
import { _r as require_isArray } from "./chart-theme.DQgKPhOk.chunk.js";
//#region ../../node_modules/react-aria-components/dist/TextArea.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var $216918bed6669f72$export$2dc6166a7e65358c = /* @__PURE__ */ (0, import_react.createContext)({});
var $216918bed6669f72$var$filterHoverProps = (props) => {
	let { onHoverStart, onHoverChange, onHoverEnd, ...otherProps } = props;
	return otherProps;
};
var $216918bed6669f72$export$f5c9f3c2c4054eec = /* @__PURE__ */ (0, import_react.forwardRef)(function TextArea(props, ref) {
	[props, ref] = $64fa3d84918910a7$export$29f1550f4b0d4415(props, ref, $216918bed6669f72$export$2dc6166a7e65358c);
	let { hoverProps, isHovered } = $6179b936705e76d3$export$ae780daf29e6d456(props);
	let { isFocused, isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
		isTextInput: true,
		autoFocus: props.autoFocus
	});
	let isInvalid = !!props["aria-invalid"] && props["aria-invalid"] !== "false";
	let renderProps = $64fa3d84918910a7$export$4d86445c2cf5e3({
		...props,
		values: {
			isHovered,
			isFocused,
			isFocusVisible,
			isDisabled: props.disabled || false,
			isInvalid
		},
		defaultClassName: "react-aria-TextArea"
	});
	return /* @__PURE__ */ import_react.createElement($64fa3d84918910a7$export$df3a06d6289f983e.textarea, {
		...$3ef42575df84b30b$export$9d1611c77c2fe928($216918bed6669f72$var$filterHoverProps(props), focusProps, hoverProps),
		...renderProps,
		ref,
		"data-focused": isFocused || void 0,
		"data-disabled": props.disabled || void 0,
		"data-hovered": isHovered || void 0,
		"data-focus-visible": isFocusVisible || void 0,
		"data-invalid": isInvalid || void 0
	});
});
//#endregion
//#region src/hooks/useDashboardPages.ts
function useDashboardPages() {
	return useQuery(dashboardQueries.listDashboardPages());
}
function useDashboardPageWidgets(dashboardPageId) {
	return useQuery(dashboardQueries.listDashboardPageWidgets(dashboardPageId));
}
//#endregion
//#region ../../node_modules/lodash/_arrayMap.js
var require__arrayMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.map` for arrays without support for iteratee
	* shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the new mapped array.
	*/
	function arrayMap(array, iteratee) {
		var index = -1, length = array == null ? 0 : array.length, result = Array(length);
		while (++index < length) result[index] = iteratee(array[index], index, array);
		return result;
	}
	module.exports = arrayMap;
}));
//#endregion
//#region ../../node_modules/lodash/_baseToString.js
var require__baseToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol(), arrayMap = require__arrayMap(), isArray = require_isArray(), isSymbol = require_isSymbol();
	/** Used as references for various `Number` constants. */
	var INFINITY = Infinity;
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
	/**
	* The base implementation of `_.toString` which doesn't convert nullish
	* values to empty strings.
	*
	* @private
	* @param {*} value The value to process.
	* @returns {string} Returns the string.
	*/
	function baseToString(value) {
		if (typeof value == "string") return value;
		if (isArray(value)) return arrayMap(value, baseToString) + "";
		if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
		var result = value + "";
		return result == "0" && 1 / value == -INFINITY ? "-0" : result;
	}
	module.exports = baseToString;
}));
//#endregion
//#region ../../node_modules/lodash/toString.js
var require_toString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseToString = require__baseToString();
	/**
	* Converts `value` to a string. An empty string is returned for `null`
	* and `undefined` values. The sign of `-0` is preserved.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to convert.
	* @returns {string} Returns the converted string.
	* @example
	*
	* _.toString(null);
	* // => ''
	*
	* _.toString(-0);
	* // => '-0'
	*
	* _.toString([1, 2, 3]);
	* // => '1,2,3'
	*/
	function toString(value) {
		return value == null ? "" : baseToString(value);
	}
	module.exports = toString;
}));
//#endregion
//#region src/components/alerts.tsx
var import_jsx_runtime = require_jsx_runtime();
var Alert = ({ icon: Icon, color, backgroundColor, style, iconStyle, children }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			color,
			fontSize: 13,
			...styles.shadow,
			borderRadius: 4,
			backgroundColor,
			padding: 10,
			flexDirection: "row",
			"& a, & a:active, & a:visited": { color: theme.formLabelText },
			...style
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				paddingLeft: 2,
				paddingTop: ".11em",
				alignSelf: "stretch",
				flexShrink: 0,
				marginRight: 5,
				...iconStyle
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				width: 13,
				style: { marginTop: 2 }
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: {
				width: "100%",
				zIndex: 1,
				lineHeight: 1.5
			},
			children
		})]
	});
};
var Information = ({ style, iconStyle, children }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, {
		icon: SvgInformationOutline,
		color: theme.pageTextLight,
		backgroundColor: "transparent",
		style: {
			boxShadow: "none",
			padding: 5,
			...style
		},
		iconStyle,
		children
	});
};
var Warning = ({ style, iconStyle, children }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, {
		icon: SvgExclamationOutline,
		color: theme.warningText,
		backgroundColor: theme.warningBackground,
		style,
		iconStyle,
		children
	});
};
var Error = ({ style, iconStyle, children }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, {
		icon: SvgExclamationOutline,
		color: theme.errorTextDarker,
		backgroundColor: theme.errorBackground,
		style,
		iconStyle,
		children
	});
};
//#endregion
//#region src/hooks/useFormatList.ts
var interleaveArrays = (...arrays) => Array.from({ length: Math.max(...arrays.map((array) => array.length)) }, (_, i) => arrays.map((array) => array[i])).flat();
function useFormatList(values, lng, opt = {}) {
	const formatter = (0, import_react.useMemo)(() => new Intl.ListFormat(lng, {
		style: "long",
		type: "conjunction",
		...opt
	}), [lng, opt]);
	return interleaveArrays((0, import_react.useMemo)(() => {
		const placeholders = Array.from({ length: values.length }, (_, i) => `<${i}>`);
		return formatter.format(placeholders).split(/<\d+>/g);
	}, [values.length, formatter]), values);
}
//#endregion
export { require_toString as a, $216918bed6669f72$export$f5c9f3c2c4054eec as c, Warning as i, Error as n, useDashboardPageWidgets as o, Information as r, useDashboardPages as s, useFormatList as t };

//# sourceMappingURL=useFormatList.DsiHu7NW.chunk.js.map