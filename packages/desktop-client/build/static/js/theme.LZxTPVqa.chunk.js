//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
	if (typeof require !== "undefined") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region ../../node_modules/react/cjs/react.production.js
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, assign = Object.assign, emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null
	}, hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	}, Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Activity = REACT_ACTIVITY_TYPE;
	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size) {
			return ReactSharedInternals.H.useMemoCache(size);
		}
	};
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cacheSignal = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = function(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	};
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, deps) {
		return ReactSharedInternals.H.useEffect(create, deps);
	};
	exports.useEffectEvent = function(callback) {
		return ReactSharedInternals.H.useEffectEvent(callback);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.2.4";
}));
//#endregion
//#region ../../node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production();
}));
//#endregion
//#region ../../node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region ../../node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}));
//#endregion
//#region ../component-library/src/theme.ts
var theme = {
	pageBackground: "var(--color-pageBackground)",
	pageBackgroundModalActive: "var(--color-pageBackgroundModalActive)",
	pageBackgroundTopLeft: "var(--color-pageBackgroundTopLeft)",
	pageBackgroundBottomRight: "var(--color-pageBackgroundBottomRight)",
	pageBackgroundLineTop: "var(--color-pageBackgroundLineTop)",
	pageBackgroundLineMid: "var(--color-pageBackgroundLineMid)",
	pageBackgroundLineBottom: "var(--color-pageBackgroundLineBottom)",
	pageText: "var(--color-pageText)",
	pageTextLight: "var(--color-pageTextLight)",
	pageTextSubdued: "var(--color-pageTextSubdued)",
	pageTextDark: "var(--color-pageTextDark)",
	pageTextPositive: "var(--color-pageTextPositive)",
	pageTextLink: "var(--color-pageTextLink)",
	pageTextLinkLight: "var(--color-pageTextLinkLight)",
	numberPositive: "var(--color-numberPositive)",
	numberNegative: "var(--color-numberNegative)",
	numberNeutral: "var(--color-numberNeutral)",
	cardBackground: "var(--color-cardBackground)",
	cardBorder: "var(--color-cardBorder)",
	cardShadow: "var(--color-cardShadow)",
	tableBackground: "var(--color-tableBackground)",
	tableRowBackgroundHover: "var(--color-tableRowBackgroundHover)",
	tableText: "var(--color-tableText)",
	tableTextLight: "var(--color-tableTextLight)",
	tableTextSubdued: "var(--color-tableTextSubdued)",
	tableTextSelected: "var(--color-tableTextSelected)",
	tableTextHover: "var(--color-tableTextHover)",
	tableTextInactive: "var(--color-tableTextInactive)",
	tableHeaderText: "var(--color-tableHeaderText)",
	tableHeaderBackground: "var(--color-tableHeaderBackground)",
	tableBorder: "var(--color-tableBorder)",
	tableBorderSelected: "var(--color-tableBorderSelected)",
	tableBorderHover: "var(--color-tableBorderHover)",
	tableBorderSeparator: "var(--color-tableBorderSeparator)",
	tableRowBackgroundHighlight: "var(--color-tableRowBackgroundHighlight)",
	tableRowBackgroundHighlightText: "var(--color-tableRowBackgroundHighlightText)",
	tableRowHeaderBackground: "var(--color-tableRowHeaderBackground)",
	tableRowHeaderText: "var(--color-tableRowHeaderText)",
	sidebarBackground: "var(--color-sidebarBackground)",
	sidebarItemBackgroundPending: "var(--color-sidebarItemBackgroundPending)",
	sidebarItemBackgroundPositive: "var(--color-sidebarItemBackgroundPositive)",
	sidebarItemBackgroundFailed: "var(--color-sidebarItemBackgroundFailed)",
	sidebarItemAccentSelected: "var(--color-sidebarItemAccentSelected)",
	sidebarItemBackgroundHover: "var(--color-sidebarItemBackgroundHover)",
	sidebarItemText: "var(--color-sidebarItemText)",
	sidebarItemTextSelected: "var(--color-sidebarItemTextSelected)",
	sidebarBudgetName: "var(--color-sidebarBudgetName)",
	menuBackground: "var(--color-menuBackground)",
	menuItemBackground: "var(--color-menuItemBackground)",
	menuItemBackgroundHover: "var(--color-menuItemBackgroundHover)",
	menuItemText: "var(--color-menuItemText)",
	menuItemTextHover: "var(--color-menuItemTextHover)",
	menuItemTextSelected: "var(--color-menuItemTextSelected)",
	menuItemTextHeader: "var(--color-menuItemTextHeader)",
	menuBorder: "var(--color-menuBorder)",
	menuBorderHover: "var(--color-menuBorderHover)",
	menuKeybindingText: "var(--color-menuKeybindingText)",
	menuAutoCompleteBackground: "var(--color-menuAutoCompleteBackground)",
	menuAutoCompleteBackgroundHover: "var(--color-menuAutoCompleteBackgroundHover)",
	menuAutoCompleteText: "var(--color-menuAutoCompleteText)",
	menuAutoCompleteTextHover: "var(--color-menuAutoCompleteTextHover)",
	menuAutoCompleteTextHeader: "var(--color-menuAutoCompleteTextHeader)",
	menuAutoCompleteItemTextHover: "var(--color-menuAutoCompleteItemTextHover)",
	menuAutoCompleteItemText: "var(--color-menuAutoCompleteItemText)",
	modalBackground: "var(--color-modalBackground)",
	modalBorder: "var(--color-modalBorder)",
	mobileHeaderBackground: "var(--color-mobileHeaderBackground)",
	mobileHeaderText: "var(--color-mobileHeaderText)",
	mobileHeaderTextSubdued: "var(--color-mobileHeaderTextSubdued)",
	mobileHeaderTextHover: "var(--color-mobileHeaderTextHover)",
	mobilePageBackground: "var(--color-mobilePageBackground)",
	mobileNavBackground: "var(--color-mobileNavBackground)",
	mobileNavItem: "var(--color-mobileNavItem)",
	mobileNavItemSelected: "var(--color-mobileNavItemSelected)",
	mobileAccountShadow: "var(--color-mobileAccountShadow)",
	mobileAccountText: "var(--color-mobileAccountText)",
	mobileTransactionSelected: "var(--color-mobileTransactionSelected)",
	mobileViewTheme: "var(--color-mobileViewTheme)",
	mobileConfigServerViewTheme: "var(--color-mobileConfigServerViewTheme)",
	markdownNormal: "var(--color-markdownNormal)",
	markdownDark: "var(--color-markdownDark)",
	markdownLight: "var(--color-markdownLight)",
	buttonMenuText: "var(--color-buttonMenuText)",
	buttonMenuTextHover: "var(--color-buttonMenuTextHover)",
	buttonMenuBackground: "var(--color-buttonMenuBackground)",
	buttonMenuBackgroundHover: "var(--color-buttonMenuBackgroundHover)",
	buttonMenuBorder: "var(--color-buttonMenuBorder)",
	buttonMenuSelectedText: "var(--color-buttonMenuSelectedText)",
	buttonMenuSelectedTextHover: "var(--color-buttonMenuSelectedTextHover)",
	buttonMenuSelectedBackground: "var(--color-buttonMenuSelectedBackground)",
	buttonMenuSelectedBackgroundHover: "var(--color-buttonMenuSelectedBackgroundHover)",
	buttonMenuSelectedBorder: "var(--color-buttonMenuSelectedBorder)",
	buttonPrimaryText: "var(--color-buttonPrimaryText)",
	buttonPrimaryTextHover: "var(--color-buttonPrimaryTextHover)",
	buttonPrimaryBackground: "var(--color-buttonPrimaryBackground)",
	buttonPrimaryBackgroundHover: "var(--color-buttonPrimaryBackgroundHover)",
	buttonPrimaryBorder: "var(--color-buttonPrimaryBorder)",
	buttonPrimaryShadow: "var(--color-buttonPrimaryShadow)",
	buttonPrimaryDisabledText: "var(--color-buttonPrimaryDisabledText)",
	buttonPrimaryDisabledBackground: "var(--color-buttonPrimaryDisabledBackground)",
	buttonPrimaryDisabledBorder: "var(--color-buttonPrimaryDisabledBorder)",
	buttonNormalText: "var(--color-buttonNormalText)",
	buttonNormalTextHover: "var(--color-buttonNormalTextHover)",
	buttonNormalBackground: "var(--color-buttonNormalBackground)",
	buttonNormalBackgroundHover: "var(--color-buttonNormalBackgroundHover)",
	buttonNormalBorder: "var(--color-buttonNormalBorder)",
	buttonNormalShadow: "var(--color-buttonNormalShadow)",
	buttonNormalSelectedText: "var(--color-buttonNormalSelectedText)",
	buttonNormalSelectedBackground: "var(--color-buttonNormalSelectedBackground)",
	buttonNormalDisabledText: "var(--color-buttonNormalDisabledText)",
	buttonNormalDisabledBackground: "var(--color-buttonNormalDisabledBackground)",
	buttonNormalDisabledBorder: "var(--color-buttonNormalDisabledBorder)",
	buttonBareText: "var(--color-buttonBareText)",
	buttonBareTextHover: "var(--color-buttonBareTextHover)",
	buttonBareBackground: "var(--color-buttonBareBackground)",
	buttonBareBackgroundHover: "var(--color-buttonBareBackgroundHover)",
	buttonBareBackgroundActive: "var(--color-buttonBareBackgroundActive)",
	buttonBareDisabledText: "var(--color-buttonBareDisabledText)",
	buttonBareDisabledBackground: "var(--color-buttonBareDisabledBackground)",
	calendarText: "var(--color-calendarText)",
	calendarBackground: "var(--color-calendarBackground)",
	calendarItemText: "var(--color-calendarItemText)",
	calendarItemBackground: "var(--color-calendarItemBackground)",
	calendarSelectedBackground: "var(--color-calendarSelectedBackground)",
	noticeBackground: "var(--color-noticeBackground)",
	noticeBackgroundLight: "var(--color-noticeBackgroundLight)",
	noticeBackgroundDark: "var(--color-noticeBackgroundDark)",
	noticeText: "var(--color-noticeText)",
	noticeTextLight: "var(--color-noticeTextLight)",
	noticeTextDark: "var(--color-noticeTextDark)",
	noticeTextMenu: "var(--color-noticeTextMenu)",
	noticeTextMenuHover: "var(--color-noticeTextMenuHover)",
	noticeBorder: "var(--color-noticeBorder)",
	warningBackground: "var(--color-warningBackground)",
	warningText: "var(--color-warningText)",
	warningTextLight: "var(--color-warningTextLight)",
	warningTextDark: "var(--color-warningTextDark)",
	warningBorder: "var(--color-warningBorder)",
	errorBackground: "var(--color-errorBackground)",
	errorText: "var(--color-errorText)",
	errorTextDark: "var(--color-errorTextDark)",
	errorTextDarker: "var(--color-errorTextDarker)",
	errorTextMenu: "var(--color-errorTextMenu)",
	errorBorder: "var(--color-errorBorder)",
	upcomingBackground: "var(--color-upcomingBackground)",
	upcomingText: "var(--color-upcomingText)",
	upcomingBorder: "var(--color-upcomingBorder)",
	formLabelText: "var(--color-formLabelText)",
	formLabelBackground: "var(--color-formLabelBackground)",
	formInputBackground: "var(--color-formInputBackground)",
	formInputBackgroundSelected: "var(--color-formInputBackgroundSelected)",
	formInputBackgroundSelection: "var(--color-formInputBackgroundSelection)",
	formInputBorder: "var(--color-formInputBorder)",
	formInputTextReadOnlySelection: "var(--color-formInputTextReadOnlySelection)",
	formInputBorderSelected: "var(--color-formInputBorderSelected)",
	formInputText: "var(--color-formInputText)",
	formInputTextSelected: "var(--color-formInputTextSelected)",
	formInputTextPlaceholder: "var(--color-formInputTextPlaceholder)",
	formInputTextPlaceholderSelected: "var(--color-formInputTextPlaceholderSelected)",
	formInputTextSelection: "var(--color-formInputTextSelection)",
	formInputShadowSelected: "var(--color-formInputShadowSelected)",
	formInputTextHighlight: "var(--color-formInputTextHighlight)",
	checkboxText: "var(--color-checkboxText)",
	checkboxBackgroundSelected: "var(--color-checkboxBackgroundSelected)",
	checkboxBorderSelected: "var(--color-checkboxBorderSelected)",
	checkboxShadowSelected: "var(--color-checkboxShadowSelected)",
	checkboxToggleBackground: "var(--color-checkboxToggleBackground)",
	checkboxToggleBackgroundSelected: "var(--color-checkboxToggleBackgroundSelected)",
	checkboxToggleDisabled: "var(--color-checkboxToggleDisabled)",
	pillBackground: "var(--color-pillBackground)",
	pillBackgroundLight: "var(--color-pillBackgroundLight)",
	pillText: "var(--color-pillText)",
	pillTextHighlighted: "var(--color-pillTextHighlighted)",
	pillBorder: "var(--color-pillBorder)",
	pillBorderDark: "var(--color-pillBorderDark)",
	pillBackgroundSelected: "var(--color-pillBackgroundSelected)",
	pillTextSelected: "var(--color-pillTextSelected)",
	pillBorderSelected: "var(--color-pillBorderSelected)",
	pillTextSubdued: "var(--color-pillTextSubdued)",
	reportsRed: "var(--color-reportsRed)",
	reportsBlue: "var(--color-reportsBlue)",
	reportsGreen: "var(--color-reportsGreen)",
	reportsGray: "var(--color-reportsGray)",
	reportsLabel: "var(--color-reportsLabel)",
	reportsInnerLabel: "var(--color-reportsInnerLabel)",
	reportsChartFill: "var(--color-reportsChartFill)",
	reportsNumberPositive: "var(--color-reportsNumberPositive)",
	reportsNumberNegative: "var(--color-reportsNumberNegative)",
	reportsNumberNeutral: "var(--color-reportsNumberNeutral)",
	budgetNumberPositive: "var(--color-budgetNumberPositive)",
	budgetNumberNegative: "var(--color-budgetNumberNegative)",
	budgetNumberNeutral: "var(--color-budgetNumberNeutral)",
	budgetNumberZero: "var(--color-budgetNumberZero)",
	toBudgetPositive: "var(--color-toBudgetPositive)",
	toBudgetZero: "var(--color-toBudgetZero)",
	toBudgetNegative: "var(--color-toBudgetNegative)",
	templateNumberFunded: "var(--color-templateNumberFunded)",
	templateNumberUnderFunded: "var(--color-templateNumberUnderFunded)",
	noteTagBackground: "var(--color-noteTagBackground)",
	noteTagBackgroundHover: "var(--color-noteTagBackgroundHover)",
	noteTagDefault: "var(--color-noteTagDefault)",
	noteTagText: "var(--color-noteTagText)",
	budgetOtherMonth: "var(--color-budgetOtherMonth)",
	budgetCurrentMonth: "var(--color-budgetCurrentMonth)",
	budgetHeaderOtherMonth: "var(--color-budgetHeaderOtherMonth)",
	budgetHeaderCurrentMonth: "var(--color-budgetHeaderCurrentMonth)",
	floatingActionBarBackground: "var(--color-floatingActionBarBackground)",
	floatingActionBarBorder: "var(--color-floatingActionBarBorder)",
	floatingActionBarText: "var(--color-floatingActionBarText)",
	tooltipText: "var(--color-tooltipText)",
	tooltipBackground: "var(--color-tooltipBackground)",
	tooltipBorder: "var(--color-tooltipBorder)",
	calendarCellBackground: "var(--color-calendarCellBackground)",
	overlayBackground: "var(--color-overlayBackground)"
};
//#endregion
export { __esmMin as a, __toCommonJS as c, __commonJSMin as i, __toESM as l, require_jsx_runtime as n, __exportAll as o, require_react as r, __require as s, theme as t };

//# sourceMappingURL=theme.LZxTPVqa.chunk.js.map