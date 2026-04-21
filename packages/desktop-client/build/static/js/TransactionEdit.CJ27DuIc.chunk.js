import { l as __toESM, n as require_jsx_runtime, r as require_react, t as theme } from "./theme.LZxTPVqa.chunk.js";
import { C as css, Cn as getChangedValues, Dn as integerToCurrency, En as integerToAmount, Fn as titleFirst, G as pushModal, Gt as useSavePayeeLocationMutation, Kt as useDispatch, Nn as reapplyThousandSeparators, Qt as locationService, Sn as diffItems, Tn as groupById, Vt as setLastTransaction, _n as appendDecimals, b as styles, bn as currencyToAmount, di as isIOSAgent, gn as amountToInteger, hn as amountToCurrency, ii as useTranslation, oi as Trans, on as useAccounts, qr as send, qt as useSelector, ti as require_react_dom, tn as addNotification, y as useSyncedPref, yn as applyFindReplace } from "./extends.opUJhDAp.chunk.js";
import { $c as $65484d02dcb7eb3e$export$457c3d6518dd4c6f, $s as $9bf71ea28793e738$export$2d6ec8fc375ceafa, Ac as $458b0a5536c1a7cf$export$40bfa8c7b0832715, Bc as $03deb23ff14920c4$export$4eaf04e54aa8eed6, Bs as $7135fc7d473fd974$export$d40e14dec8b060a8, Ca as SvgLocation, Cc as $64fa3d84918910a7$export$c62b8e45d58ddad9, Cu as isValid, Fc as $cc38e7bd3fc7b213$export$2bb74740c4e19def, Gs as $23b9f4fcf0fe224b$export$437f11dc9b403b78, Hc as $ea8dcbcb9ea1b556$export$95185d699e05d4d7, Hs as $e1995378a142960e$export$bf788dd355e3a401, I as usePayees, Jc as $c87311424ea30a05$export$9ac100e40613ea10, Jr as aqlQuery, Kc as $c87311424ea30a05$export$6446a186d09e379e, Ks as $23b9f4fcf0fe224b$export$8258a0665a675899, Lc as $8ae05eaa5c114e9c$export$7f54fc3180508a52, Mc as $ef06256079686ba0$export$f8aeda7b10753fa1, Mn as InputField, N as useMergedRefs, Nc as $21f1aa98acb08317$export$16792effe837dba3, Ni as SvgPencilWriteAlternate, Nn as TapField, Pc as $62d8ded9296f3872$export$cfa2225e87938781, Pn as ToggleField, Pt as makeAmountFullStyle, Qc as $7215afc6de606d6b$export$de79e2c695e052f3, Ql as useSearchParams, Qs as $9bf71ea28793e738$export$20e40289641fbbb6, Qt as getUpcomingDays, R as useNearbyPayees, Rc as $df56164dff5785e2$export$4338b53315abf666, Rs as $7135fc7d473fd974$export$4feb769f8ddf26c5, Tl as useNavigate, Uc as $ea8dcbcb9ea1b556$export$9a302a45f65d0572, Ul as View, Us as $e1995378a142960e$export$e953bb1cd0f19726, Vc as $ea8dcbcb9ea1b556$export$7e924b3091a3bd18, Vs as $e1995378a142960e$export$18af5c7a9e9b3664, Wa as SvgCheveronLeft, Ws as $e1995378a142960e$export$fb8073518f34e6ec, Xc as $c87311424ea30a05$export$e1865c3bedcd822b, Xl as useLocation, Zc as $c87311424ea30a05$export$fedb369cb70207f1, Zl as useParams, Zs as $f7dceffc5ad7768b$export$4e328f61c538687f, Zt as getStatusLabel, _ as AmountInput$1, _u as parse, ac as $a1ea59d68270f0dd$export$f8168d8dd8fd66e6, al as $d4ee10de306f2510$export$e58f029f0fbfdb29, an as realizeTempTransactions, b as createSingleTimeScheduleFromTransaction, bc as $64fa3d84918910a7$export$4d86445c2cf5e3, cl as $bdb11010cef70236$export$b4cc09c592e8fdb8, cn as ungroupTransactions, co as MobilePageHeader, cs as $c8a5a149f625efcf$export$758399f318e6385a, dc as $f6c31cce2adf654f$export$45712eceda6fad21, dr as dayFromDate, ec as $6179b936705e76d3$export$ae780daf29e6d456, el as $3ef42575df84b30b$export$9d1611c77c2fe928, en as addSplitTransaction, g as useDateFormat, gl as $4e85f108e88277b8$export$b0d3ecf7112093a7, hc as $18f2051aff69b9bf$export$43bb16f9c6d9e3f7, hu as parseISO, ic as $46d819fcbaf35654$export$8f71654801c2f7cd, il as $d4ee10de306f2510$export$cd4e5573fbe2b576, in as makeChild, jc as $b4b717babfbb907b$export$bebd5a1431fec25d, jn as FieldLabel, jr as monthFromDate, ju as q, ll as $bdb11010cef70236$export$f680877a34711e37, ln as updateTransaction, lo as Page, nl as $d4ee10de306f2510$export$4282f70798064fe0, ns as Button, oc as $3ad3f6e1647bc98d$export$80f3e147d781571c, ol as $431fbd86ca7dc216$export$b204af158042fbac, on as splitTransaction, os as $431f98aba6844401$export$6615d83f6de245ce, pa as SvgTrash, pr as differenceInCalendarDays, ps as $514c0188e459b4c0$export$9afb8bc826b033ea, qc as $c87311424ea30a05$export$78551043582a6a98, qs as $23b9f4fcf0fe224b$export$fd11f34e1d07f134, rl as $d4ee10de306f2510$export$b4f377a2b6254582, rt as useCategories, sc as $507fabe10e71c6fb$export$630ff653c5ada6a9, sl as $ff5963eb1fccf552$export$e08e3b67e392101e, so as SvgAdd, sr as currentDay, ss as $1d5b8b8664671ef2$export$c9549807523555e0, tc as $9ab94262bd0047c7$export$420e68273165f4ec, tn as deleteTransaction, ts as Text, uc as $507fabe10e71c6fb$export$b9b3dfddab17db27, ul as $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c, us as $72a5793c14baf454$export$e0e4026c12a8bdbb, vc as $64fa3d84918910a7$export$2881499e37b75b9a, vr as getDayMonthFormat, wc as $64fa3d84918910a7$export$df3a06d6289f983e, wi as Toggle, xa as SvgPiggyBank, xc as $64fa3d84918910a7$export$9d4c57ee4c6ffdd8, xn as calculateDistance, xo as useLocalPref, xu as format, yc as $64fa3d84918910a7$export$29f1550f4b0d4415, yr as getDayMonthRegex, z as useLocationPermission, zc as $313b98861ee5dd6c$export$d6875122194c7b44, zo as SvgSplit } from "./Value.D0gbasR7.chunk.js";
//#region ../../node_modules/@react-aria/utils/dist/useUpdateLayoutEffect.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function $ca9b37712f007381$export$72ef708ab07251f1(effect, dependencies) {
	const isInitialMount = (0, import_react.useRef)(true);
	const lastDeps = (0, import_react.useRef)(null);
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		isInitialMount.current = true;
		return () => {
			isInitialMount.current = false;
		};
	}, []);
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		if (isInitialMount.current) isInitialMount.current = false;
		else if (!lastDeps.current || dependencies.some((dep, i) => !Object.is(dep, lastDeps[i]))) effect();
		lastDeps.current = dependencies;
	}, dependencies);
}
//#endregion
//#region ../../node_modules/@react-aria/utils/dist/getScrollParents.mjs
function $a40c673dc9f6d9c7$export$94ed1c92c7beeb22(node, checkForOverflow) {
	let parentElements = [];
	let root = document.scrollingElement || document.documentElement;
	do {
		if ($cc38e7bd3fc7b213$export$2bb74740c4e19def(node, checkForOverflow)) parentElements.push(node);
		node = node.parentElement;
	} while (node && node !== root);
	return parentElements;
}
//#endregion
//#region ../../node_modules/@react-aria/utils/dist/useEvent.mjs
function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
	let handleEvent = $8ae05eaa5c114e9c$export$7f54fc3180508a52(handler);
	let isDisabled = handler == null;
	(0, import_react.useEffect)(() => {
		if (isDisabled || !ref.current) return;
		let element = ref.current;
		element.addEventListener(event, handleEvent, options);
		return () => {
			element.removeEventListener(event, handleEvent, options);
		};
	}, [
		ref,
		event,
		options,
		isDisabled
	]);
}
//#endregion
//#region ../../node_modules/@react-aria/utils/dist/scrollIntoView.mjs
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element, opts = {}) {
	let { block = "nearest", inline = "nearest" } = opts;
	if (scrollView === element) return;
	let y = scrollView.scrollTop;
	let x = scrollView.scrollLeft;
	let target = element.getBoundingClientRect();
	let view = scrollView.getBoundingClientRect();
	let itemStyle = window.getComputedStyle(element);
	let viewStyle = window.getComputedStyle(scrollView);
	let root = document.scrollingElement || document.documentElement;
	let viewTop = scrollView === root ? 0 : view.top;
	let viewBottom = scrollView === root ? scrollView.clientHeight : view.bottom;
	let viewLeft = scrollView === root ? 0 : view.left;
	let viewRight = scrollView === root ? scrollView.clientWidth : view.right;
	let scrollMarginTop = parseInt(itemStyle.scrollMarginTop, 10) || 0;
	let scrollMarginBottom = parseInt(itemStyle.scrollMarginBottom, 10) || 0;
	let scrollMarginLeft = parseInt(itemStyle.scrollMarginLeft, 10) || 0;
	let scrollMarginRight = parseInt(itemStyle.scrollMarginRight, 10) || 0;
	let scrollPaddingTop = parseInt(viewStyle.scrollPaddingTop, 10) || 0;
	let scrollPaddingBottom = parseInt(viewStyle.scrollPaddingBottom, 10) || 0;
	let scrollPaddingLeft = parseInt(viewStyle.scrollPaddingLeft, 10) || 0;
	let scrollPaddingRight = parseInt(viewStyle.scrollPaddingRight, 10) || 0;
	let borderTopWidth = parseInt(viewStyle.borderTopWidth, 10) || 0;
	let borderBottomWidth = parseInt(viewStyle.borderBottomWidth, 10) || 0;
	let borderLeftWidth = parseInt(viewStyle.borderLeftWidth, 10) || 0;
	let borderRightWidth = parseInt(viewStyle.borderRightWidth, 10) || 0;
	let scrollAreaTop = target.top - scrollMarginTop;
	let scrollAreaBottom = target.bottom + scrollMarginBottom;
	let scrollAreaLeft = target.left - scrollMarginLeft;
	let scrollAreaRight = target.right + scrollMarginRight;
	let scrollBarOffsetX = scrollView === root ? 0 : borderLeftWidth + borderRightWidth;
	let scrollBarOffsetY = scrollView === root ? 0 : borderTopWidth + borderBottomWidth;
	let scrollBarWidth = scrollView.offsetWidth - scrollView.clientWidth - scrollBarOffsetX;
	let scrollBarHeight = scrollView.offsetHeight - scrollView.clientHeight - scrollBarOffsetY;
	let scrollPortTop = viewTop + borderTopWidth + scrollPaddingTop;
	let scrollPortBottom = viewBottom - borderBottomWidth - scrollPaddingBottom - scrollBarHeight;
	let scrollPortLeft = viewLeft + borderLeftWidth + scrollPaddingLeft;
	let scrollPortRight = viewRight - borderRightWidth - scrollPaddingRight;
	if (viewStyle.direction === "rtl" && !$c87311424ea30a05$export$fedb369cb70207f1()) scrollPortLeft += scrollBarWidth;
	else scrollPortRight -= scrollBarWidth;
	let shouldScrollBlock = scrollAreaTop < scrollPortTop || scrollAreaBottom > scrollPortBottom;
	let shouldScrollInline = scrollAreaLeft < scrollPortLeft || scrollAreaRight > scrollPortRight;
	if (shouldScrollBlock && block === "start") y += scrollAreaTop - scrollPortTop;
	else if (shouldScrollBlock && block === "center") y += (scrollAreaTop + scrollAreaBottom) / 2 - (scrollPortTop + scrollPortBottom) / 2;
	else if (shouldScrollBlock && block === "end") y += scrollAreaBottom - scrollPortBottom;
	else if (shouldScrollBlock && block === "nearest") {
		let start = scrollAreaTop - scrollPortTop;
		let end = scrollAreaBottom - scrollPortBottom;
		y += Math.abs(start) <= Math.abs(end) ? start : end;
	}
	if (shouldScrollInline && inline === "start") x += scrollAreaLeft - scrollPortLeft;
	else if (shouldScrollInline && inline === "center") x += (scrollAreaLeft + scrollAreaRight) / 2 - (scrollPortLeft + scrollPortRight) / 2;
	else if (shouldScrollInline && inline === "end") x += scrollAreaRight - scrollPortRight;
	else if (shouldScrollInline && inline === "nearest") {
		let start = scrollAreaLeft - scrollPortLeft;
		let end = scrollAreaRight - scrollPortRight;
		x += Math.abs(start) <= Math.abs(end) ? start : end;
	}
	scrollView.scrollTo({
		left: x,
		top: y
	});
}
function $2f04cbc44ee30ce0$export$c826860796309d1b(targetElement, opts = {}) {
	let { containingElement } = opts;
	if (targetElement && targetElement.isConnected) {
		let root = document.scrollingElement || document.documentElement;
		if (!(window.getComputedStyle(root).overflow === "hidden") && !$c87311424ea30a05$export$6446a186d09e379e()) {
			var _targetElement_scrollIntoView;
			let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
			targetElement === null || targetElement === void 0 || (_targetElement_scrollIntoView = targetElement.scrollIntoView) == null || _targetElement_scrollIntoView.call(targetElement, { block: "nearest" });
			let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
			if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
				var _containingElement_scrollIntoView, _targetElement_scrollIntoView1;
				containingElement === null || containingElement === void 0 || (_containingElement_scrollIntoView = containingElement.scrollIntoView) == null || _containingElement_scrollIntoView.call(containingElement, {
					block: "center",
					inline: "center"
				});
				(_targetElement_scrollIntoView1 = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView1 === void 0 || _targetElement_scrollIntoView1.call(targetElement, { block: "nearest" });
			}
		} else {
			let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
			let scrollParents = $a40c673dc9f6d9c7$export$94ed1c92c7beeb22(targetElement, true);
			for (let scrollParent of scrollParents) $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollParent, targetElement);
			let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
			if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
				scrollParents = containingElement ? $a40c673dc9f6d9c7$export$94ed1c92c7beeb22(containingElement, true) : [];
				for (let scrollParent of scrollParents) $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollParent, containingElement, {
					block: "center",
					inline: "center"
				});
			}
		}
	}
}
//#endregion
//#region ../../node_modules/@react-aria/utils/dist/useLoadMoreSentinel.mjs
function $a5fa973c1850dd36$export$ccaea96c28e8b9e7(props, ref) {
	let { collection, onLoadMore, scrollOffset = 1 } = props;
	let sentinelObserver = (0, import_react.useRef)(null);
	let triggerLoadMore = $8ae05eaa5c114e9c$export$7f54fc3180508a52((entries) => {
		for (let entry of entries) if (entry.isIntersecting && onLoadMore) onLoadMore();
	});
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		if (ref.current) {
			sentinelObserver.current = new IntersectionObserver(triggerLoadMore, {
				root: $62d8ded9296f3872$export$cfa2225e87938781(ref === null || ref === void 0 ? void 0 : ref.current),
				rootMargin: `0px ${100 * scrollOffset}% ${100 * scrollOffset}% ${100 * scrollOffset}%`
			});
			sentinelObserver.current.observe(ref.current);
		}
		return () => {
			if (sentinelObserver.current) sentinelObserver.current.disconnect();
		};
	}, [
		collection,
		ref,
		scrollOffset
	]);
}
//#endregion
//#region ../../node_modules/@react-aria/utils/dist/inertValue.mjs
function $cdc5a6778b766db2$export$a9d04c5684123369(value) {
	const pieces = import_react.version.split(".");
	if (parseInt(pieces[0], 10) >= 19) return value;
	return value ? "true" : void 0;
}
//#endregion
//#region ../../node_modules/@react-aria/utils/dist/constants.mjs
var $5671b20cf9b562b2$export$447a38995de2c711 = "react-aria-clear-focus";
var $5671b20cf9b562b2$export$831c820ad60f9d12 = "react-aria-focus";
//#endregion
//#region ../../node_modules/@react-aria/i18n/dist/useCollator.mjs
var $325a3faab7a68acd$var$cache = /* @__PURE__ */ new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
	let { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
	let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
	if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
	let formatter = new Intl.Collator(locale, options);
	$325a3faab7a68acd$var$cache.set(cacheKey, formatter);
	return formatter;
}
//#endregion
//#region ../../node_modules/@react-aria/interactions/dist/useLongPress.mjs
var $8a26561d2877236e$var$DEFAULT_THRESHOLD = 500;
function $8a26561d2877236e$export$c24ed0104d07eab9(props) {
	let { isDisabled, onLongPressStart, onLongPressEnd, onLongPress, threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD, accessibilityDescription } = props;
	const timeRef = (0, import_react.useRef)(void 0);
	let { addGlobalListener, removeGlobalListener } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
	let { pressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
		isDisabled,
		onPressStart(e) {
			e.continuePropagation();
			if (e.pointerType === "mouse" || e.pointerType === "touch") {
				if (onLongPressStart) onLongPressStart({
					...e,
					type: "longpressstart"
				});
				timeRef.current = setTimeout(() => {
					e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: true }));
					if ($431fbd86ca7dc216$export$b204af158042fbac(e.target).activeElement !== e.target) $7215afc6de606d6b$export$de79e2c695e052f3(e.target);
					if (onLongPress) onLongPress({
						...e,
						type: "longpress"
					});
					timeRef.current = void 0;
				}, threshold);
				if (e.pointerType === "touch") {
					let onContextMenu = (e) => {
						e.preventDefault();
					};
					addGlobalListener(e.target, "contextmenu", onContextMenu, { once: true });
					addGlobalListener(window, "pointerup", () => {
						setTimeout(() => {
							removeGlobalListener(e.target, "contextmenu", onContextMenu);
						}, 30);
					}, { once: true });
				}
			}
		},
		onPressEnd(e) {
			if (timeRef.current) clearTimeout(timeRef.current);
			if (onLongPressEnd && (e.pointerType === "mouse" || e.pointerType === "touch")) onLongPressEnd({
				...e,
				type: "longpressend"
			});
		}
	});
	return { longPressProps: $3ef42575df84b30b$export$9d1611c77c2fe928(pressProps, $ef06256079686ba0$export$f8aeda7b10753fa1(onLongPress && !isDisabled ? accessibilityDescription : void 0)) };
}
//#endregion
//#region ../../node_modules/@react-aria/focus/dist/virtualFocus.mjs
function $55f9b1ae81f22853$export$76e4e37e5339496d(to) {
	let from = $55f9b1ae81f22853$export$759df0d867455a91($431fbd86ca7dc216$export$b204af158042fbac(to));
	if (from !== to) {
		if (from) $55f9b1ae81f22853$export$6c5dc7e81d2cc29a(from, to);
		if (to) $55f9b1ae81f22853$export$2b35b76d2e30e129(to, from);
	}
}
function $55f9b1ae81f22853$export$6c5dc7e81d2cc29a(from, to) {
	from.dispatchEvent(new FocusEvent("blur", { relatedTarget: to }));
	from.dispatchEvent(new FocusEvent("focusout", {
		bubbles: true,
		relatedTarget: to
	}));
}
function $55f9b1ae81f22853$export$2b35b76d2e30e129(to, from) {
	to.dispatchEvent(new FocusEvent("focus", { relatedTarget: from }));
	to.dispatchEvent(new FocusEvent("focusin", {
		bubbles: true,
		relatedTarget: from
	}));
}
function $55f9b1ae81f22853$export$759df0d867455a91(document) {
	let activeElement = $d4ee10de306f2510$export$cd4e5573fbe2b576(document);
	let activeDescendant = activeElement === null || activeElement === void 0 ? void 0 : activeElement.getAttribute("aria-activedescendant");
	if (activeDescendant) return document.getElementById(activeDescendant) || activeElement;
	return activeElement;
}
//#endregion
//#region ../../node_modules/@react-aria/listbox/dist/utils.mjs
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var $b1f0cad8af73213b$export$3585ede4d035bf14 = /* @__PURE__ */ new WeakMap();
function $b1f0cad8af73213b$var$normalizeKey(key) {
	if (typeof key === "string") return key.replace(/\s*/g, "");
	return "" + key;
}
function $b1f0cad8af73213b$export$9145995848b05025(state, itemKey) {
	let data = $b1f0cad8af73213b$export$3585ede4d035bf14.get(state);
	if (!data) throw new Error("Unknown list");
	return `${data.id}-option-${$b1f0cad8af73213b$var$normalizeKey(itemKey)}`;
}
//#endregion
//#region ../../node_modules/@react-aria/label/dist/useLabel.mjs
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
	let { id, label, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, labelElementType = "label" } = props;
	id = $bdb11010cef70236$export$f680877a34711e37(id);
	let labelId = $bdb11010cef70236$export$f680877a34711e37();
	let labelProps = {};
	if (label) {
		ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
		labelProps = {
			id: labelId,
			htmlFor: labelElementType === "label" ? id : void 0
		};
	}
	let fieldProps = $313b98861ee5dd6c$export$d6875122194c7b44({
		id,
		"aria-label": ariaLabel,
		"aria-labelledby": ariaLabelledby
	});
	return {
		labelProps,
		fieldProps
	};
}
//#endregion
//#region ../../node_modules/@react-aria/selection/dist/utils.mjs
function $feb5ffebff200149$export$d3e3bd3e26688c04(e) {
	return $c87311424ea30a05$export$e1865c3bedcd822b() ? e.altKey : e.ctrlKey;
}
function $feb5ffebff200149$export$c3d8340acf92597f(collectionRef, key) {
	var _collectionRef_current, _collectionRef_current1;
	let selector = `[data-key="${CSS.escape(String(key))}"]`;
	let collection = (_collectionRef_current = collectionRef.current) === null || _collectionRef_current === void 0 ? void 0 : _collectionRef_current.dataset.collection;
	if (collection) selector = `[data-collection="${CSS.escape(collection)}"]${selector}`;
	return (_collectionRef_current1 = collectionRef.current) === null || _collectionRef_current1 === void 0 ? void 0 : _collectionRef_current1.querySelector(selector);
}
var $feb5ffebff200149$var$collectionMap = /* @__PURE__ */ new WeakMap();
function $feb5ffebff200149$export$881eb0d9f3605d9d(collection) {
	let id = $bdb11010cef70236$export$f680877a34711e37();
	$feb5ffebff200149$var$collectionMap.set(collection, id);
	return id;
}
function $feb5ffebff200149$export$6aeb1680a0ae8741(collection) {
	return $feb5ffebff200149$var$collectionMap.get(collection);
}
//#endregion
//#region ../../node_modules/@react-aria/selection/dist/useTypeSelect.mjs
/**
* Controls how long to wait before clearing the typeahead buffer.
*/ var $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS = 1e3;
function $fb3050f43d946246$export$e32c88dfddc6e1d8(options) {
	let { keyboardDelegate, selectionManager, onTypeSelect } = options;
	let state = (0, import_react.useRef)({
		search: "",
		timeout: void 0
	}).current;
	let onKeyDown = (e) => {
		let character = $fb3050f43d946246$var$getStringForKey(e.key);
		if (!character || e.ctrlKey || e.metaKey || !$d4ee10de306f2510$export$4282f70798064fe0(e.currentTarget, $d4ee10de306f2510$export$e58f029f0fbfdb29(e)) || state.search.length === 0 && character === " ") return;
		if (character === " " && state.search.trim().length > 0) {
			e.preventDefault();
			if (!("continuePropagation" in e)) e.stopPropagation();
		}
		state.search += character;
		if (keyboardDelegate.getKeyForSearch != null) {
			let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
			if (key == null) key = keyboardDelegate.getKeyForSearch(state.search);
			if (key != null) {
				selectionManager.setFocusedKey(key);
				if (onTypeSelect) onTypeSelect(key);
			}
		}
		clearTimeout(state.timeout);
		state.timeout = setTimeout(() => {
			state.search = "";
		}, $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
	};
	return { typeSelectProps: { onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : void 0 } };
}
function $fb3050f43d946246$var$getStringForKey(key) {
	if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
	return "";
}
//#endregion
//#region ../../node_modules/@react-aria/selection/dist/useSelectableCollection.mjs
function $ae20dd8cbca75726$export$d6daf82dcd84e87c(options) {
	let { selectionManager: manager, keyboardDelegate: delegate, ref, autoFocus = false, shouldFocusWrap = false, disallowEmptySelection = false, disallowSelectAll = false, escapeKeyBehavior = "clearSelection", selectOnFocus = manager.selectionBehavior === "replace", disallowTypeAhead = false, shouldUseVirtualFocus, allowsTabNavigation = false, scrollRef = ref, linkBehavior = "action" } = options;
	let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
	let router = $ea8dcbcb9ea1b556$export$9a302a45f65d0572();
	let onKeyDown = (e) => {
		if (e.altKey && e.key === "Tab") e.preventDefault();
		if (!ref.current || !$d4ee10de306f2510$export$4282f70798064fe0(ref.current, $d4ee10de306f2510$export$e58f029f0fbfdb29(e))) return;
		const navigateToKey = (key, childFocus) => {
			if (key != null) {
				if (manager.isLink(key) && linkBehavior === "selection" && selectOnFocus && !$feb5ffebff200149$export$d3e3bd3e26688c04(e)) {
					(0, import_react_dom.flushSync)(() => {
						manager.setFocusedKey(key, childFocus);
					});
					let item = $feb5ffebff200149$export$c3d8340acf92597f(ref, key);
					let itemProps = manager.getItemProps(key);
					if (item) router.open(item, e, itemProps.href, itemProps.routerOptions);
					return;
				}
				manager.setFocusedKey(key, childFocus);
				if (manager.isLink(key) && linkBehavior === "override") return;
				if (e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(key);
				else if (selectOnFocus && !$feb5ffebff200149$export$d3e3bd3e26688c04(e)) manager.replaceSelection(key);
			}
		};
		switch (e.key) {
			case "ArrowDown":
				if (delegate.getKeyBelow) {
					var _delegate_getKeyBelow, _delegate_getFirstKey, _delegate_getFirstKey1;
					let nextKey = manager.focusedKey != null ? (_delegate_getKeyBelow = delegate.getKeyBelow) === null || _delegate_getKeyBelow === void 0 ? void 0 : _delegate_getKeyBelow.call(delegate, manager.focusedKey) : (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate);
					if (nextKey == null && shouldFocusWrap) nextKey = (_delegate_getFirstKey1 = delegate.getFirstKey) === null || _delegate_getFirstKey1 === void 0 ? void 0 : _delegate_getFirstKey1.call(delegate, manager.focusedKey);
					if (nextKey != null) {
						e.preventDefault();
						navigateToKey(nextKey);
					}
				}
				break;
			case "ArrowUp":
				if (delegate.getKeyAbove) {
					var _delegate_getKeyAbove, _delegate_getLastKey, _delegate_getLastKey1;
					let nextKey = manager.focusedKey != null ? (_delegate_getKeyAbove = delegate.getKeyAbove) === null || _delegate_getKeyAbove === void 0 ? void 0 : _delegate_getKeyAbove.call(delegate, manager.focusedKey) : (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate);
					if (nextKey == null && shouldFocusWrap) nextKey = (_delegate_getLastKey1 = delegate.getLastKey) === null || _delegate_getLastKey1 === void 0 ? void 0 : _delegate_getLastKey1.call(delegate, manager.focusedKey);
					if (nextKey != null) {
						e.preventDefault();
						navigateToKey(nextKey);
					}
				}
				break;
			case "ArrowLeft":
				if (delegate.getKeyLeftOf) {
					var _delegate_getKeyLeftOf, _delegate_getFirstKey2, _delegate_getLastKey2;
					let nextKey = manager.focusedKey != null ? (_delegate_getKeyLeftOf = delegate.getKeyLeftOf) === null || _delegate_getKeyLeftOf === void 0 ? void 0 : _delegate_getKeyLeftOf.call(delegate, manager.focusedKey) : null;
					if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? (_delegate_getFirstKey2 = delegate.getFirstKey) === null || _delegate_getFirstKey2 === void 0 ? void 0 : _delegate_getFirstKey2.call(delegate, manager.focusedKey) : (_delegate_getLastKey2 = delegate.getLastKey) === null || _delegate_getLastKey2 === void 0 ? void 0 : _delegate_getLastKey2.call(delegate, manager.focusedKey);
					if (nextKey != null) {
						e.preventDefault();
						navigateToKey(nextKey, direction === "rtl" ? "first" : "last");
					}
				}
				break;
			case "ArrowRight":
				if (delegate.getKeyRightOf) {
					var _delegate_getKeyRightOf, _delegate_getLastKey3, _delegate_getFirstKey3;
					let nextKey = manager.focusedKey != null ? (_delegate_getKeyRightOf = delegate.getKeyRightOf) === null || _delegate_getKeyRightOf === void 0 ? void 0 : _delegate_getKeyRightOf.call(delegate, manager.focusedKey) : null;
					if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? (_delegate_getLastKey3 = delegate.getLastKey) === null || _delegate_getLastKey3 === void 0 ? void 0 : _delegate_getLastKey3.call(delegate, manager.focusedKey) : (_delegate_getFirstKey3 = delegate.getFirstKey) === null || _delegate_getFirstKey3 === void 0 ? void 0 : _delegate_getFirstKey3.call(delegate, manager.focusedKey);
					if (nextKey != null) {
						e.preventDefault();
						navigateToKey(nextKey, direction === "rtl" ? "last" : "first");
					}
				}
				break;
			case "Home":
				if (delegate.getFirstKey) {
					if (manager.focusedKey === null && e.shiftKey) return;
					e.preventDefault();
					let firstKey = delegate.getFirstKey(manager.focusedKey, $21f1aa98acb08317$export$16792effe837dba3(e));
					manager.setFocusedKey(firstKey);
					if (firstKey != null) {
						if ($21f1aa98acb08317$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(firstKey);
						else if (selectOnFocus) manager.replaceSelection(firstKey);
					}
				}
				break;
			case "End":
				if (delegate.getLastKey) {
					if (manager.focusedKey === null && e.shiftKey) return;
					e.preventDefault();
					let lastKey = delegate.getLastKey(manager.focusedKey, $21f1aa98acb08317$export$16792effe837dba3(e));
					manager.setFocusedKey(lastKey);
					if (lastKey != null) {
						if ($21f1aa98acb08317$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(lastKey);
						else if (selectOnFocus) manager.replaceSelection(lastKey);
					}
				}
				break;
			case "PageDown":
				if (delegate.getKeyPageBelow && manager.focusedKey != null) {
					let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
					if (nextKey != null) {
						e.preventDefault();
						navigateToKey(nextKey);
					}
				}
				break;
			case "PageUp":
				if (delegate.getKeyPageAbove && manager.focusedKey != null) {
					let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
					if (nextKey != null) {
						e.preventDefault();
						navigateToKey(nextKey);
					}
				}
				break;
			case "a":
				if ($21f1aa98acb08317$export$16792effe837dba3(e) && manager.selectionMode === "multiple" && disallowSelectAll !== true) {
					e.preventDefault();
					manager.selectAll();
				}
				break;
			case "Escape":
				if (escapeKeyBehavior === "clearSelection" && !disallowEmptySelection && manager.selectedKeys.size !== 0) {
					e.stopPropagation();
					e.preventDefault();
					manager.clearSelection();
				}
				break;
			case "Tab": if (!allowsTabNavigation) {
				if (e.shiftKey) ref.current.focus();
				else {
					let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ref.current, { tabbable: true });
					let next = void 0;
					let last;
					do {
						last = walker.lastChild();
						if (last) next = last;
					} while (last);
					let activeElement = $d4ee10de306f2510$export$cd4e5573fbe2b576();
					if (next && (!$d4ee10de306f2510$export$b4f377a2b6254582(next) || activeElement && !$b4b717babfbb907b$export$bebd5a1431fec25d(activeElement))) $7215afc6de606d6b$export$de79e2c695e052f3(next);
				}
				break;
			}
		}
	};
	let scrollPos = (0, import_react.useRef)({
		top: 0,
		left: 0
	});
	$e9faafb641e167db$export$90fc3a17d93f704c(scrollRef, "scroll", () => {
		var _scrollRef_current, _scrollRef_current1;
		var _scrollRef_current_scrollTop, _scrollRef_current_scrollLeft;
		scrollPos.current = {
			top: (_scrollRef_current_scrollTop = (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollTop) !== null && _scrollRef_current_scrollTop !== void 0 ? _scrollRef_current_scrollTop : 0,
			left: (_scrollRef_current_scrollLeft = (_scrollRef_current1 = scrollRef.current) === null || _scrollRef_current1 === void 0 ? void 0 : _scrollRef_current1.scrollLeft) !== null && _scrollRef_current_scrollLeft !== void 0 ? _scrollRef_current_scrollLeft : 0
		};
	});
	let onFocus = (e) => {
		if (manager.isFocused) {
			if (!$d4ee10de306f2510$export$4282f70798064fe0(e.currentTarget, $d4ee10de306f2510$export$e58f029f0fbfdb29(e))) manager.setFocused(false);
			return;
		}
		if (!$d4ee10de306f2510$export$4282f70798064fe0(e.currentTarget, $d4ee10de306f2510$export$e58f029f0fbfdb29(e))) return;
		manager.setFocused(true);
		if (manager.focusedKey == null) {
			var _delegate_getLastKey, _delegate_getFirstKey;
			let navigateToKey = (key) => {
				if (key != null) {
					manager.setFocusedKey(key);
					if (selectOnFocus && !manager.isSelected(key)) manager.replaceSelection(key);
				}
			};
			let relatedTarget = e.relatedTarget;
			var _manager_lastSelectedKey, _manager_firstSelectedKey;
			if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToKey((_manager_lastSelectedKey = manager.lastSelectedKey) !== null && _manager_lastSelectedKey !== void 0 ? _manager_lastSelectedKey : (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate));
			else navigateToKey((_manager_firstSelectedKey = manager.firstSelectedKey) !== null && _manager_firstSelectedKey !== void 0 ? _manager_firstSelectedKey : (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate));
		} else if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollPos.current.top;
			scrollRef.current.scrollLeft = scrollPos.current.left;
		}
		if (manager.focusedKey != null && scrollRef.current) {
			let element = $feb5ffebff200149$export$c3d8340acf92597f(ref, manager.focusedKey);
			if (element instanceof HTMLElement) {
				if (!$d4ee10de306f2510$export$b4f377a2b6254582(element) && !shouldUseVirtualFocus) $7215afc6de606d6b$export$de79e2c695e052f3(element);
				if ($507fabe10e71c6fb$export$630ff653c5ada6a9() === "keyboard") $2f04cbc44ee30ce0$export$c826860796309d1b(element, { containingElement: ref.current });
			}
		}
	};
	let onBlur = (e) => {
		if (!$d4ee10de306f2510$export$4282f70798064fe0(e.currentTarget, e.relatedTarget)) manager.setFocused(false);
	};
	let shouldVirtualFocusFirst = (0, import_react.useRef)(false);
	$e9faafb641e167db$export$90fc3a17d93f704c(ref, $5671b20cf9b562b2$export$831c820ad60f9d12, !shouldUseVirtualFocus ? void 0 : (e) => {
		let { detail } = e;
		e.stopPropagation();
		manager.setFocused(true);
		if ((detail === null || detail === void 0 ? void 0 : detail.focusStrategy) === "first") shouldVirtualFocusFirst.current = true;
	});
	$ca9b37712f007381$export$72ef708ab07251f1(() => {
		if (shouldVirtualFocusFirst.current) {
			var _delegate_getFirstKey;
			var _delegate_getFirstKey1;
			let keyToFocus = (_delegate_getFirstKey1 = (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate)) !== null && _delegate_getFirstKey1 !== void 0 ? _delegate_getFirstKey1 : null;
			if (keyToFocus == null) {
				let previousActiveElement = $d4ee10de306f2510$export$cd4e5573fbe2b576();
				$55f9b1ae81f22853$export$76e4e37e5339496d(ref.current);
				$55f9b1ae81f22853$export$2b35b76d2e30e129(previousActiveElement, null);
				if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
			} else {
				manager.setFocusedKey(keyToFocus);
				shouldVirtualFocusFirst.current = false;
			}
		}
	}, [manager.collection]);
	$ca9b37712f007381$export$72ef708ab07251f1(() => {
		if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
	}, [manager.focusedKey]);
	$e9faafb641e167db$export$90fc3a17d93f704c(ref, $5671b20cf9b562b2$export$447a38995de2c711, !shouldUseVirtualFocus ? void 0 : (e) => {
		var _e_detail;
		e.stopPropagation();
		manager.setFocused(false);
		if ((_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : _e_detail.clearFocusKey) manager.setFocusedKey(null);
	});
	const autoFocusRef = (0, import_react.useRef)(autoFocus);
	const didAutoFocusRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (autoFocusRef.current) {
			var _delegate_getFirstKey, _delegate_getLastKey;
			let focusedKey = null;
			var _delegate_getFirstKey1;
			if (autoFocus === "first") focusedKey = (_delegate_getFirstKey1 = (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate)) !== null && _delegate_getFirstKey1 !== void 0 ? _delegate_getFirstKey1 : null;
			var _delegate_getLastKey1;
			if (autoFocus === "last") focusedKey = (_delegate_getLastKey1 = (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate)) !== null && _delegate_getLastKey1 !== void 0 ? _delegate_getLastKey1 : null;
			let selectedKeys = manager.selectedKeys;
			if (selectedKeys.size) {
				for (let key of selectedKeys) if (manager.canSelectItem(key)) {
					focusedKey = key;
					break;
				}
			}
			manager.setFocused(true);
			manager.setFocusedKey(focusedKey);
			if (focusedKey == null && !shouldUseVirtualFocus && ref.current) $3ad3f6e1647bc98d$export$80f3e147d781571c(ref.current);
			if (manager.collection.size > 0) {
				autoFocusRef.current = false;
				didAutoFocusRef.current = true;
			}
		}
	});
	let lastFocusedKey = (0, import_react.useRef)(manager.focusedKey);
	let raf = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (manager.isFocused && manager.focusedKey != null && (manager.focusedKey !== lastFocusedKey.current || didAutoFocusRef.current) && scrollRef.current && ref.current) {
			let modality = $507fabe10e71c6fb$export$630ff653c5ada6a9();
			let element = $feb5ffebff200149$export$c3d8340acf92597f(ref, manager.focusedKey);
			if (!(element instanceof HTMLElement)) return;
			if (modality === "keyboard" || didAutoFocusRef.current) {
				if (raf.current) cancelAnimationFrame(raf.current);
				raf.current = requestAnimationFrame(() => {
					if (scrollRef.current) {
						$2f04cbc44ee30ce0$export$53a0910f038337bd(scrollRef.current, element);
						if (modality !== "virtual") $2f04cbc44ee30ce0$export$c826860796309d1b(element, { containingElement: ref.current });
					}
				});
			}
		}
		if (!shouldUseVirtualFocus && manager.isFocused && manager.focusedKey == null && lastFocusedKey.current != null && ref.current) $3ad3f6e1647bc98d$export$80f3e147d781571c(ref.current);
		lastFocusedKey.current = manager.focusedKey;
		didAutoFocusRef.current = false;
	});
	(0, import_react.useEffect)(() => {
		return () => {
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, []);
	$e9faafb641e167db$export$90fc3a17d93f704c(ref, "react-aria-focus-scope-restore", (e) => {
		e.preventDefault();
		manager.setFocused(true);
	});
	let handlers = {
		onKeyDown,
		onFocus,
		onBlur,
		onMouseDown(e) {
			if (scrollRef.current === $d4ee10de306f2510$export$e58f029f0fbfdb29(e)) e.preventDefault();
		}
	};
	let { typeSelectProps } = $fb3050f43d946246$export$e32c88dfddc6e1d8({
		keyboardDelegate: delegate,
		selectionManager: manager
	});
	if (!disallowTypeAhead) handlers = $3ef42575df84b30b$export$9d1611c77c2fe928(typeSelectProps, handlers);
	let tabIndex = void 0;
	if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
	let collectionId = $feb5ffebff200149$export$881eb0d9f3605d9d(manager.collection);
	return { collectionProps: $3ef42575df84b30b$export$9d1611c77c2fe928(handlers, {
		tabIndex,
		"data-collection": collectionId
	}) };
}
//#endregion
//#region ../../node_modules/@react-aria/selection/dist/useSelectableItem.mjs
function $880e95eb8b93ba9a$export$ecf600387e221c37(options) {
	let { id, selectionManager: manager, key, ref, shouldSelectOnPressUp, shouldUseVirtualFocus, focus, isDisabled, onAction, allowsDifferentPressOrigin, linkBehavior = "action" } = options;
	let router = $ea8dcbcb9ea1b556$export$9a302a45f65d0572();
	id = $bdb11010cef70236$export$f680877a34711e37(id);
	let onSelect = (e) => {
		if (e.pointerType === "keyboard" && $feb5ffebff200149$export$d3e3bd3e26688c04(e)) manager.toggleSelection(key);
		else {
			if (manager.selectionMode === "none") return;
			if (manager.isLink(key)) {
				if (linkBehavior === "selection" && ref.current) {
					let itemProps = manager.getItemProps(key);
					router.open(ref.current, e, itemProps.href, itemProps.routerOptions);
					manager.setSelectedKeys(manager.selectedKeys);
					return;
				} else if (linkBehavior === "override" || linkBehavior === "none") return;
			}
			if (manager.selectionMode === "single") if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
			else manager.replaceSelection(key);
			else if (e && e.shiftKey) manager.extendSelection(key);
			else if (manager.selectionBehavior === "toggle" || e && ($21f1aa98acb08317$export$16792effe837dba3(e) || e.pointerType === "touch" || e.pointerType === "virtual")) manager.toggleSelection(key);
			else manager.replaceSelection(key);
		}
	};
	(0, import_react.useEffect)(() => {
		if (key === manager.focusedKey && manager.isFocused) if (!shouldUseVirtualFocus) {
			if (focus) focus();
			else if ($d4ee10de306f2510$export$cd4e5573fbe2b576() !== ref.current && ref.current) $3ad3f6e1647bc98d$export$80f3e147d781571c(ref.current);
		} else $55f9b1ae81f22853$export$76e4e37e5339496d(ref.current);
	}, [
		ref,
		key,
		manager.focusedKey,
		manager.childFocusStrategy,
		manager.isFocused,
		shouldUseVirtualFocus
	]);
	isDisabled = isDisabled || manager.isDisabled(key);
	let itemProps = {};
	if (!shouldUseVirtualFocus && !isDisabled) itemProps = {
		tabIndex: key === manager.focusedKey ? 0 : -1,
		onFocus(e) {
			if ($d4ee10de306f2510$export$e58f029f0fbfdb29(e) === ref.current) manager.setFocusedKey(key);
		}
	};
	else if (isDisabled) itemProps.onMouseDown = (e) => {
		e.preventDefault();
	};
	(0, import_react.useEffect)(() => {
		if (isDisabled && manager.focusedKey === key) manager.setFocusedKey(null);
	}, [
		manager,
		isDisabled,
		key
	]);
	let isLinkOverride = manager.isLink(key) && linkBehavior === "override";
	let isActionOverride = onAction && options["UNSTABLE_itemBehavior"] === "action";
	let hasLinkAction = manager.isLink(key) && linkBehavior !== "selection" && linkBehavior !== "none";
	let allowsSelection = !isDisabled && manager.canSelectItem(key) && !isLinkOverride && !isActionOverride;
	let allowsActions = (onAction || hasLinkAction) && !isDisabled;
	let hasPrimaryAction = allowsActions && (manager.selectionBehavior === "replace" ? !allowsSelection : !allowsSelection || manager.isEmpty);
	let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === "replace";
	let hasAction = hasPrimaryAction || hasSecondaryAction;
	let modality = (0, import_react.useRef)(null);
	let longPressEnabled = hasAction && allowsSelection;
	let longPressEnabledOnPressStart = (0, import_react.useRef)(false);
	let hadPrimaryActionOnPressStart = (0, import_react.useRef)(false);
	let collectionItemProps = manager.getItemProps(key);
	let performAction = (e) => {
		if (onAction) {
			var _ref_current;
			onAction();
			(_ref_current = ref.current) === null || _ref_current === void 0 || _ref_current.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: true }));
		}
		if (hasLinkAction && ref.current) router.open(ref.current, e, collectionItemProps.href, collectionItemProps.routerOptions);
	};
	let itemPressProps = { ref };
	if (shouldSelectOnPressUp) {
		itemPressProps.onPressStart = (e) => {
			modality.current = e.pointerType;
			longPressEnabledOnPressStart.current = longPressEnabled;
			if (e.pointerType === "keyboard" && (!hasAction || $880e95eb8b93ba9a$var$isSelectionKey(e.key))) onSelect(e);
		};
		if (!allowsDifferentPressOrigin) itemPressProps.onPress = (e) => {
			if (hasPrimaryAction || hasSecondaryAction && e.pointerType !== "mouse") {
				if (e.pointerType === "keyboard" && !$880e95eb8b93ba9a$var$isActionKey(e.key)) return;
				performAction(e);
			} else if (e.pointerType !== "keyboard" && allowsSelection) onSelect(e);
		};
		else {
			itemPressProps.onPressUp = hasPrimaryAction ? void 0 : (e) => {
				if (e.pointerType === "mouse" && allowsSelection) onSelect(e);
			};
			itemPressProps.onPress = hasPrimaryAction ? performAction : (e) => {
				if (e.pointerType !== "keyboard" && e.pointerType !== "mouse" && allowsSelection) onSelect(e);
			};
		}
	} else {
		itemPressProps.onPressStart = (e) => {
			modality.current = e.pointerType;
			longPressEnabledOnPressStart.current = longPressEnabled;
			hadPrimaryActionOnPressStart.current = hasPrimaryAction;
			if (allowsSelection && (e.pointerType === "mouse" && !hasPrimaryAction || e.pointerType === "keyboard" && (!allowsActions || $880e95eb8b93ba9a$var$isSelectionKey(e.key)))) onSelect(e);
		};
		itemPressProps.onPress = (e) => {
			if (e.pointerType === "touch" || e.pointerType === "pen" || e.pointerType === "virtual" || e.pointerType === "keyboard" && hasAction && $880e95eb8b93ba9a$var$isActionKey(e.key) || e.pointerType === "mouse" && hadPrimaryActionOnPressStart.current) {
				if (hasAction) performAction(e);
				else if (allowsSelection) onSelect(e);
			}
		};
	}
	itemProps["data-collection"] = $feb5ffebff200149$export$6aeb1680a0ae8741(manager.collection);
	itemProps["data-key"] = key;
	itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
	if (shouldUseVirtualFocus) itemPressProps = $3ef42575df84b30b$export$9d1611c77c2fe928(itemPressProps, {
		onPressStart(e) {
			if (e.pointerType !== "touch") {
				manager.setFocused(true);
				manager.setFocusedKey(key);
			}
		},
		onPress(e) {
			if (e.pointerType === "touch") {
				manager.setFocused(true);
				manager.setFocusedKey(key);
			}
		}
	});
	if (collectionItemProps) {
		for (let key of [
			"onPressStart",
			"onPressEnd",
			"onPressChange",
			"onPress",
			"onPressUp",
			"onClick"
		]) if (collectionItemProps[key]) itemPressProps[key] = $ff5963eb1fccf552$export$e08e3b67e392101e(itemPressProps[key], collectionItemProps[key]);
	}
	let { pressProps, isPressed } = $f6c31cce2adf654f$export$45712eceda6fad21(itemPressProps);
	let onDoubleClick = hasSecondaryAction ? (e) => {
		if (modality.current === "mouse") {
			e.stopPropagation();
			e.preventDefault();
			performAction(e);
		}
	} : void 0;
	let { longPressProps } = $8a26561d2877236e$export$c24ed0104d07eab9({
		isDisabled: !longPressEnabled,
		onLongPress(e) {
			if (e.pointerType === "touch") {
				onSelect(e);
				manager.setSelectionBehavior("toggle");
			}
		}
	});
	let onDragStartCapture = (e) => {
		if (modality.current === "touch" && longPressEnabledOnPressStart.current) e.preventDefault();
	};
	let onClick = linkBehavior !== "none" && manager.isLink(key) ? (e) => {
		if (!$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening) e.preventDefault();
	} : void 0;
	return {
		itemProps: $3ef42575df84b30b$export$9d1611c77c2fe928(itemProps, allowsSelection || hasPrimaryAction || shouldUseVirtualFocus && !isDisabled ? pressProps : {}, longPressEnabled ? longPressProps : {}, {
			onDoubleClick,
			onDragStartCapture,
			onClick,
			id
		}, shouldUseVirtualFocus ? { onMouseDown: (e) => e.preventDefault() } : void 0),
		isPressed,
		isSelected: manager.isSelected(key),
		isFocused: manager.isFocused && manager.focusedKey === key,
		isDisabled,
		allowsSelection,
		hasAction
	};
}
function $880e95eb8b93ba9a$var$isActionKey(key) {
	return key === "Enter";
}
function $880e95eb8b93ba9a$var$isSelectionKey(key) {
	return key === " ";
}
//#endregion
//#region ../../node_modules/@react-aria/selection/dist/DOMLayoutDelegate.mjs
var $657e4dc4a6e88df0$export$8f5ed9ff9f511381 = class {
	getItemRect(key) {
		let container = this.ref.current;
		if (!container) return null;
		let item = key != null ? $feb5ffebff200149$export$c3d8340acf92597f(this.ref, key) : null;
		if (!item) return null;
		let containerRect = container.getBoundingClientRect();
		let itemRect = item.getBoundingClientRect();
		return {
			x: itemRect.left - containerRect.left - container.clientLeft + container.scrollLeft,
			y: itemRect.top - containerRect.top - container.clientTop + container.scrollTop,
			width: itemRect.width,
			height: itemRect.height
		};
	}
	getContentSize() {
		let container = this.ref.current;
		var _container_scrollWidth, _container_scrollHeight;
		return {
			width: (_container_scrollWidth = container === null || container === void 0 ? void 0 : container.scrollWidth) !== null && _container_scrollWidth !== void 0 ? _container_scrollWidth : 0,
			height: (_container_scrollHeight = container === null || container === void 0 ? void 0 : container.scrollHeight) !== null && _container_scrollHeight !== void 0 ? _container_scrollHeight : 0
		};
	}
	getVisibleRect() {
		let container = this.ref.current;
		var _container_scrollLeft, _container_scrollTop, _container_clientWidth, _container_clientHeight;
		return {
			x: (_container_scrollLeft = container === null || container === void 0 ? void 0 : container.scrollLeft) !== null && _container_scrollLeft !== void 0 ? _container_scrollLeft : 0,
			y: (_container_scrollTop = container === null || container === void 0 ? void 0 : container.scrollTop) !== null && _container_scrollTop !== void 0 ? _container_scrollTop : 0,
			width: (_container_clientWidth = container === null || container === void 0 ? void 0 : container.clientWidth) !== null && _container_clientWidth !== void 0 ? _container_clientWidth : 0,
			height: (_container_clientHeight = container === null || container === void 0 ? void 0 : container.clientHeight) !== null && _container_clientHeight !== void 0 ? _container_clientHeight : 0
		};
	}
	constructor(ref) {
		this.ref = ref;
	}
};
//#endregion
//#region ../../node_modules/@react-aria/selection/dist/ListKeyboardDelegate.mjs
var $2a25aae57d74318e$export$a05409b8bb224a5a = class {
	isDisabled(item) {
		var _item_props;
		return this.disabledBehavior === "all" && (((_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.isDisabled) || this.disabledKeys.has(item.key));
	}
	findNextNonDisabled(key, getNext) {
		let nextKey = key;
		while (nextKey != null) {
			let item = this.collection.getItem(nextKey);
			if ((item === null || item === void 0 ? void 0 : item.type) === "item" && !this.isDisabled(item)) return nextKey;
			nextKey = getNext(nextKey);
		}
		return null;
	}
	getNextKey(key) {
		let nextKey = key;
		nextKey = this.collection.getKeyAfter(nextKey);
		return this.findNextNonDisabled(nextKey, (key) => this.collection.getKeyAfter(key));
	}
	getPreviousKey(key) {
		let nextKey = key;
		nextKey = this.collection.getKeyBefore(nextKey);
		return this.findNextNonDisabled(nextKey, (key) => this.collection.getKeyBefore(key));
	}
	findKey(key, nextKey, shouldSkip) {
		let tempKey = key;
		let itemRect = this.layoutDelegate.getItemRect(tempKey);
		if (!itemRect || tempKey == null) return null;
		let prevRect = itemRect;
		do {
			tempKey = nextKey(tempKey);
			if (tempKey == null) break;
			itemRect = this.layoutDelegate.getItemRect(tempKey);
		} while (itemRect && shouldSkip(prevRect, itemRect) && tempKey != null);
		return tempKey;
	}
	isSameRow(prevRect, itemRect) {
		return prevRect.y === itemRect.y || prevRect.x !== itemRect.x;
	}
	isSameColumn(prevRect, itemRect) {
		return prevRect.x === itemRect.x || prevRect.y !== itemRect.y;
	}
	getKeyBelow(key) {
		if (this.layout === "grid" && this.orientation === "vertical") return this.findKey(key, (key) => this.getNextKey(key), this.isSameRow);
		else return this.getNextKey(key);
	}
	getKeyAbove(key) {
		if (this.layout === "grid" && this.orientation === "vertical") return this.findKey(key, (key) => this.getPreviousKey(key), this.isSameRow);
		else return this.getPreviousKey(key);
	}
	getNextColumn(key, right) {
		return right ? this.getPreviousKey(key) : this.getNextKey(key);
	}
	getKeyRightOf(key) {
		let layoutDelegateMethod = this.direction === "ltr" ? "getKeyRightOf" : "getKeyLeftOf";
		if (this.layoutDelegate[layoutDelegateMethod]) {
			key = this.layoutDelegate[layoutDelegateMethod](key);
			return this.findNextNonDisabled(key, (key) => this.layoutDelegate[layoutDelegateMethod](key));
		}
		if (this.layout === "grid") if (this.orientation === "vertical") return this.getNextColumn(key, this.direction === "rtl");
		else return this.findKey(key, (key) => this.getNextColumn(key, this.direction === "rtl"), this.isSameColumn);
		else if (this.orientation === "horizontal") return this.getNextColumn(key, this.direction === "rtl");
		return null;
	}
	getKeyLeftOf(key) {
		let layoutDelegateMethod = this.direction === "ltr" ? "getKeyLeftOf" : "getKeyRightOf";
		if (this.layoutDelegate[layoutDelegateMethod]) {
			key = this.layoutDelegate[layoutDelegateMethod](key);
			return this.findNextNonDisabled(key, (key) => this.layoutDelegate[layoutDelegateMethod](key));
		}
		if (this.layout === "grid") if (this.orientation === "vertical") return this.getNextColumn(key, this.direction === "ltr");
		else return this.findKey(key, (key) => this.getNextColumn(key, this.direction === "ltr"), this.isSameColumn);
		else if (this.orientation === "horizontal") return this.getNextColumn(key, this.direction === "ltr");
		return null;
	}
	getFirstKey() {
		let key = this.collection.getFirstKey();
		return this.findNextNonDisabled(key, (key) => this.collection.getKeyAfter(key));
	}
	getLastKey() {
		let key = this.collection.getLastKey();
		return this.findNextNonDisabled(key, (key) => this.collection.getKeyBefore(key));
	}
	getKeyPageAbove(key) {
		let menu = this.ref.current;
		let itemRect = this.layoutDelegate.getItemRect(key);
		if (!itemRect) return null;
		if (menu && !$cc38e7bd3fc7b213$export$2bb74740c4e19def(menu)) return this.getFirstKey();
		let nextKey = key;
		if (this.orientation === "horizontal") {
			let pageX = Math.max(0, itemRect.x + itemRect.width - this.layoutDelegate.getVisibleRect().width);
			while (itemRect && itemRect.x > pageX && nextKey != null) {
				nextKey = this.getKeyAbove(nextKey);
				itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
			}
		} else {
			let pageY = Math.max(0, itemRect.y + itemRect.height - this.layoutDelegate.getVisibleRect().height);
			while (itemRect && itemRect.y > pageY && nextKey != null) {
				nextKey = this.getKeyAbove(nextKey);
				itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
			}
		}
		return nextKey !== null && nextKey !== void 0 ? nextKey : this.getFirstKey();
	}
	getKeyPageBelow(key) {
		let menu = this.ref.current;
		let itemRect = this.layoutDelegate.getItemRect(key);
		if (!itemRect) return null;
		if (menu && !$cc38e7bd3fc7b213$export$2bb74740c4e19def(menu)) return this.getLastKey();
		let nextKey = key;
		if (this.orientation === "horizontal") {
			let pageX = Math.min(this.layoutDelegate.getContentSize().width, itemRect.y - itemRect.width + this.layoutDelegate.getVisibleRect().width);
			while (itemRect && itemRect.x < pageX && nextKey != null) {
				nextKey = this.getKeyBelow(nextKey);
				itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
			}
		} else {
			let pageY = Math.min(this.layoutDelegate.getContentSize().height, itemRect.y - itemRect.height + this.layoutDelegate.getVisibleRect().height);
			while (itemRect && itemRect.y < pageY && nextKey != null) {
				nextKey = this.getKeyBelow(nextKey);
				itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
			}
		}
		return nextKey !== null && nextKey !== void 0 ? nextKey : this.getLastKey();
	}
	getKeyForSearch(search, fromKey) {
		if (!this.collator) return null;
		let collection = this.collection;
		let key = fromKey || this.getFirstKey();
		while (key != null) {
			let item = collection.getItem(key);
			if (!item) return null;
			let substring = item.textValue.slice(0, search.length);
			if (item.textValue && this.collator.compare(substring, search) === 0) return key;
			key = this.getNextKey(key);
		}
		return null;
	}
	constructor(...args) {
		if (args.length === 1) {
			let opts = args[0];
			this.collection = opts.collection;
			this.ref = opts.ref;
			this.collator = opts.collator;
			this.disabledKeys = opts.disabledKeys || /* @__PURE__ */ new Set();
			this.disabledBehavior = opts.disabledBehavior || "all";
			this.orientation = opts.orientation || "vertical";
			this.direction = opts.direction;
			this.layout = opts.layout || "stack";
			this.layoutDelegate = opts.layoutDelegate || new $657e4dc4a6e88df0$export$8f5ed9ff9f511381(opts.ref);
		} else {
			this.collection = args[0];
			this.disabledKeys = args[1];
			this.ref = args[2];
			this.collator = args[3];
			this.layout = "stack";
			this.orientation = "vertical";
			this.disabledBehavior = "all";
			this.layoutDelegate = new $657e4dc4a6e88df0$export$8f5ed9ff9f511381(this.ref);
		}
		if (this.layout === "stack" && this.orientation === "vertical") {
			this.getKeyLeftOf = void 0;
			this.getKeyRightOf = void 0;
		}
	}
};
//#endregion
//#region ../../node_modules/@react-aria/selection/dist/useSelectableList.mjs
function $982254629710d113$export$b95089534ab7c1fd(props) {
	let { selectionManager, collection, disabledKeys, ref, keyboardDelegate, layoutDelegate } = props;
	let collator = $325a3faab7a68acd$export$a16aca283550c30d({
		usage: "search",
		sensitivity: "base"
	});
	let disabledBehavior = selectionManager.disabledBehavior;
	let delegate = (0, import_react.useMemo)(() => keyboardDelegate || new $2a25aae57d74318e$export$a05409b8bb224a5a({
		collection,
		disabledKeys,
		disabledBehavior,
		ref,
		collator,
		layoutDelegate
	}), [
		keyboardDelegate,
		layoutDelegate,
		collection,
		disabledKeys,
		ref,
		collator,
		disabledBehavior
	]);
	let { collectionProps } = $ae20dd8cbca75726$export$d6daf82dcd84e87c({
		...props,
		ref,
		selectionManager,
		keyboardDelegate: delegate
	});
	return { listProps: collectionProps };
}
//#endregion
//#region ../../node_modules/@react-aria/listbox/dist/useListBox.mjs
function $c132121280ec012d$export$50eacbbf140a3141(props, state, ref) {
	let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, { labelable: true });
	let selectionBehavior = props.selectionBehavior || "toggle";
	let linkBehavior = props.linkBehavior || (selectionBehavior === "replace" ? "action" : "override");
	if (selectionBehavior === "toggle" && linkBehavior === "action") linkBehavior = "override";
	let { listProps } = $982254629710d113$export$b95089534ab7c1fd({
		...props,
		ref,
		selectionManager: state.selectionManager,
		collection: state.collection,
		disabledKeys: state.disabledKeys,
		linkBehavior
	});
	let { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
		onFocusWithin: props.onFocus,
		onBlurWithin: props.onBlur,
		onFocusWithinChange: props.onFocusChange
	});
	let id = $bdb11010cef70236$export$f680877a34711e37(props.id);
	$b1f0cad8af73213b$export$3585ede4d035bf14.set(state, {
		id,
		shouldUseVirtualFocus: props.shouldUseVirtualFocus,
		shouldSelectOnPressUp: props.shouldSelectOnPressUp,
		shouldFocusOnHover: props.shouldFocusOnHover,
		isVirtualized: props.isVirtualized,
		onAction: props.onAction,
		linkBehavior,
		UNSTABLE_itemBehavior: props["UNSTABLE_itemBehavior"]
	});
	let { labelProps, fieldProps } = $d191a55c9702f145$export$8467354a121f1b9f({
		...props,
		id,
		labelElementType: "span"
	});
	return {
		labelProps,
		listBoxProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, focusWithinProps, state.selectionManager.selectionMode === "multiple" ? { "aria-multiselectable": "true" } : {}, {
			role: "listbox",
			...$3ef42575df84b30b$export$9d1611c77c2fe928(fieldProps, listProps)
		})
	};
}
//#endregion
//#region ../../node_modules/@react-stately/collections/dist/CollectionBuilder.mjs
var $eb2240fc39a57fa5$export$bf788dd355e3a401 = class {
	build(props, context) {
		this.context = context;
		return $eb2240fc39a57fa5$var$iterable(() => this.iterateCollection(props));
	}
	*iterateCollection(props) {
		let { children, items } = props;
		if (import_react.isValidElement(children) && children.type === import_react.Fragment) yield* this.iterateCollection({
			children: children.props.children,
			items
		});
		else if (typeof children === "function") {
			if (!items) throw new Error("props.children was a function but props.items is missing");
			let index = 0;
			for (let item of items) {
				yield* this.getFullNode({
					value: item,
					index
				}, { renderer: children });
				index++;
			}
		} else {
			let items = [];
			import_react.Children.forEach(children, (child) => {
				if (child) items.push(child);
			});
			let index = 0;
			for (let item of items) {
				let nodes = this.getFullNode({
					element: item,
					index
				}, {});
				for (let node of nodes) {
					index++;
					yield node;
				}
			}
		}
	}
	getKey(item, partialNode, state, parentKey) {
		if (item.key != null) return item.key;
		if (partialNode.type === "cell" && partialNode.key != null) return `${parentKey}${partialNode.key}`;
		let v = partialNode.value;
		if (v != null) {
			var _v_key;
			let key = (_v_key = v.key) !== null && _v_key !== void 0 ? _v_key : v.id;
			if (key == null) throw new Error("No key found for item");
			return key;
		}
		return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
	}
	getChildState(state, partialNode) {
		return { renderer: partialNode.renderer || state.renderer };
	}
	*getFullNode(partialNode, state, parentKey, parentNode) {
		if (import_react.isValidElement(partialNode.element) && partialNode.element.type === import_react.Fragment) {
			let children = [];
			import_react.Children.forEach(partialNode.element.props.children, (child) => {
				children.push(child);
			});
			var _partialNode_index;
			let index = (_partialNode_index = partialNode.index) !== null && _partialNode_index !== void 0 ? _partialNode_index : 0;
			for (const child of children) yield* this.getFullNode({
				element: child,
				index: index++
			}, state, parentKey, parentNode);
			return;
		}
		let element = partialNode.element;
		if (!element && partialNode.value && state && state.renderer) {
			let cached = this.cache.get(partialNode.value);
			if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
				cached.index = partialNode.index;
				cached.parentKey = parentNode ? parentNode.key : null;
				yield cached;
				return;
			}
			element = state.renderer(partialNode.value);
		}
		if (import_react.isValidElement(element)) {
			let type = element.type;
			if (typeof type !== "function" && typeof type.getCollectionNode !== "function") {
				let name = element.type;
				throw new Error(`Unknown element <${name}> in collection.`);
			}
			let childNodes = type.getCollectionNode(element.props, this.context);
			var _partialNode_index1;
			let index = (_partialNode_index1 = partialNode.index) !== null && _partialNode_index1 !== void 0 ? _partialNode_index1 : 0;
			let result = childNodes.next();
			while (!result.done && result.value) {
				let childNode = result.value;
				partialNode.index = index;
				var _childNode_key;
				let nodeKey = (_childNode_key = childNode.key) !== null && _childNode_key !== void 0 ? _childNode_key : null;
				if (nodeKey == null) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
				let children = [...this.getFullNode({
					...childNode,
					key: nodeKey,
					index,
					wrapper: $eb2240fc39a57fa5$var$compose(partialNode.wrapper, childNode.wrapper)
				}, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode)];
				for (let node of children) {
					var _childNode_value, _ref;
					node.value = (_ref = (_childNode_value = childNode.value) !== null && _childNode_value !== void 0 ? _childNode_value : partialNode.value) !== null && _ref !== void 0 ? _ref : null;
					if (node.value) this.cache.set(node.value, node);
					var _parentNode_type;
					if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${$eb2240fc39a57fa5$var$capitalize(node.type)}> in <${$eb2240fc39a57fa5$var$capitalize((_parentNode_type = parentNode === null || parentNode === void 0 ? void 0 : parentNode.type) !== null && _parentNode_type !== void 0 ? _parentNode_type : "unknown parent type")}>. Only <${$eb2240fc39a57fa5$var$capitalize(partialNode.type)}> is supported.`);
					index++;
					yield node;
				}
				result = childNodes.next(children);
			}
			return;
		}
		if (partialNode.key == null || partialNode.type == null) return;
		let builder = this;
		var _partialNode_value, _partialNode_textValue;
		let node = {
			type: partialNode.type,
			props: partialNode.props,
			key: partialNode.key,
			parentKey: parentNode ? parentNode.key : null,
			value: (_partialNode_value = partialNode.value) !== null && _partialNode_value !== void 0 ? _partialNode_value : null,
			level: parentNode ? parentNode.level + 1 : 0,
			index: partialNode.index,
			rendered: partialNode.rendered,
			textValue: (_partialNode_textValue = partialNode.textValue) !== null && _partialNode_textValue !== void 0 ? _partialNode_textValue : "",
			"aria-label": partialNode["aria-label"],
			wrapper: partialNode.wrapper,
			shouldInvalidate: partialNode.shouldInvalidate,
			hasChildNodes: partialNode.hasChildNodes || false,
			childNodes: $eb2240fc39a57fa5$var$iterable(function* () {
				if (!partialNode.hasChildNodes || !partialNode.childNodes) return;
				let index = 0;
				for (let child of partialNode.childNodes()) {
					if (child.key != null) child.key = `${node.key}${child.key}`;
					let nodes = builder.getFullNode({
						...child,
						index
					}, builder.getChildState(state, child), node.key, node);
					for (let node of nodes) {
						index++;
						yield node;
					}
				}
			})
		};
		yield node;
	}
	constructor() {
		this.cache = /* @__PURE__ */ new WeakMap();
	}
};
function $eb2240fc39a57fa5$var$iterable(iterator) {
	let cache = [];
	let iterable = null;
	return { *[Symbol.iterator]() {
		for (let item of cache) yield item;
		if (!iterable) iterable = iterator();
		for (let item of iterable) {
			cache.push(item);
			yield item;
		}
	} };
}
function $eb2240fc39a57fa5$var$compose(outer, inner) {
	if (outer && inner) return (element) => outer(inner(element));
	if (outer) return outer;
	if (inner) return inner;
}
function $eb2240fc39a57fa5$var$capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}
//#endregion
//#region ../../node_modules/@react-stately/collections/dist/useCollection.mjs
function $7613b1592d41b092$export$6cd28814d92fa9c9(props, factory, context) {
	let builder = (0, import_react.useMemo)(() => new $eb2240fc39a57fa5$export$bf788dd355e3a401(), []);
	let { children, items, collection } = props;
	return (0, import_react.useMemo)(() => {
		if (collection) return collection;
		return factory(builder.build({
			children,
			items
		}, context));
	}, [
		builder,
		children,
		items,
		collection,
		context,
		factory
	]);
}
//#endregion
//#region ../../node_modules/@react-stately/collections/dist/getChildNodes.mjs
function $c5a24bc478652b5f$export$1005530eda016c13(node, collection) {
	if (typeof collection.getChildren === "function") return collection.getChildren(node.key);
	return node.childNodes;
}
function $c5a24bc478652b5f$export$fbdeaa6a76694f71(iterable) {
	return $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, 0);
}
function $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, index) {
	if (index < 0) return void 0;
	let i = 0;
	for (let item of iterable) {
		if (i === index) return item;
		i++;
	}
}
function $c5a24bc478652b5f$export$8c434b3a7a4dad6(collection, a, b) {
	if (a.parentKey === b.parentKey) return a.index - b.index;
	let aAncestors = [...$c5a24bc478652b5f$var$getAncestors(collection, a), a];
	let bAncestors = [...$c5a24bc478652b5f$var$getAncestors(collection, b), b];
	let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a, i) => a !== bAncestors[i]);
	if (firstNonMatchingAncestor !== -1) {
		a = aAncestors[firstNonMatchingAncestor];
		b = bAncestors[firstNonMatchingAncestor];
		return a.index - b.index;
	}
	if (aAncestors.findIndex((node) => node === b) >= 0) return 1;
	else if (bAncestors.findIndex((node) => node === a) >= 0) return -1;
	return -1;
}
function $c5a24bc478652b5f$var$getAncestors(collection, node) {
	let parents = [];
	let currNode = node;
	while ((currNode === null || currNode === void 0 ? void 0 : currNode.parentKey) != null) {
		currNode = collection.getItem(currNode.parentKey);
		if (currNode) parents.unshift(currNode);
	}
	return parents;
}
//#endregion
//#region ../../node_modules/@react-stately/collections/dist/getItemCount.mjs
var $453cc9f0df89c0a5$var$cache = /* @__PURE__ */ new WeakMap();
function $453cc9f0df89c0a5$export$77d5aafae4e095b2(collection) {
	let count = $453cc9f0df89c0a5$var$cache.get(collection);
	if (count != null) return count;
	let counter = 0;
	let countItems = (items) => {
		for (let item of items) if (item.type === "section") countItems($c5a24bc478652b5f$export$1005530eda016c13(item, collection));
		else if (item.type === "item") counter++;
	};
	countItems(collection);
	$453cc9f0df89c0a5$var$cache.set(collection, counter);
	return counter;
}
//#endregion
//#region ../../node_modules/@react-aria/listbox/dist/useOption.mjs
function $293f70390ea03370$export$497855f14858aa34(props, state, ref) {
	var _item_props, _item_props1;
	let { key } = props;
	let data = $b1f0cad8af73213b$export$3585ede4d035bf14.get(state);
	var _props_isDisabled;
	let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : state.selectionManager.isDisabled(key);
	var _props_isSelected;
	let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : state.selectionManager.isSelected(key);
	var _props_shouldSelectOnPressUp;
	let shouldSelectOnPressUp = (_props_shouldSelectOnPressUp = props.shouldSelectOnPressUp) !== null && _props_shouldSelectOnPressUp !== void 0 ? _props_shouldSelectOnPressUp : data === null || data === void 0 ? void 0 : data.shouldSelectOnPressUp;
	var _props_shouldFocusOnHover;
	let shouldFocusOnHover = (_props_shouldFocusOnHover = props.shouldFocusOnHover) !== null && _props_shouldFocusOnHover !== void 0 ? _props_shouldFocusOnHover : data === null || data === void 0 ? void 0 : data.shouldFocusOnHover;
	var _props_shouldUseVirtualFocus;
	let shouldUseVirtualFocus = (_props_shouldUseVirtualFocus = props.shouldUseVirtualFocus) !== null && _props_shouldUseVirtualFocus !== void 0 ? _props_shouldUseVirtualFocus : data === null || data === void 0 ? void 0 : data.shouldUseVirtualFocus;
	var _props_isVirtualized;
	let isVirtualized = (_props_isVirtualized = props.isVirtualized) !== null && _props_isVirtualized !== void 0 ? _props_isVirtualized : data === null || data === void 0 ? void 0 : data.isVirtualized;
	let labelId = $bdb11010cef70236$export$b4cc09c592e8fdb8();
	let descriptionId = $bdb11010cef70236$export$b4cc09c592e8fdb8();
	let optionProps = {
		role: "option",
		"aria-disabled": isDisabled || void 0,
		"aria-selected": state.selectionManager.selectionMode !== "none" ? isSelected : void 0
	};
	if (!($c87311424ea30a05$export$9ac100e40613ea10() && $c87311424ea30a05$export$78551043582a6a98())) {
		optionProps["aria-label"] = props["aria-label"];
		optionProps["aria-labelledby"] = labelId;
		optionProps["aria-describedby"] = descriptionId;
	}
	let item = state.collection.getItem(key);
	if (isVirtualized) {
		let index = Number(item === null || item === void 0 ? void 0 : item.index);
		optionProps["aria-posinset"] = Number.isNaN(index) ? void 0 : index + 1;
		optionProps["aria-setsize"] = $453cc9f0df89c0a5$export$77d5aafae4e095b2(state.collection);
	}
	let onAction = (data === null || data === void 0 ? void 0 : data.onAction) ? () => {
		var _data_onAction;
		return data === null || data === void 0 ? void 0 : (_data_onAction = data.onAction) === null || _data_onAction === void 0 ? void 0 : _data_onAction.call(data, key);
	} : void 0;
	let id = $b1f0cad8af73213b$export$9145995848b05025(state, key);
	let { itemProps, isPressed, isFocused, hasAction, allowsSelection } = $880e95eb8b93ba9a$export$ecf600387e221c37({
		selectionManager: state.selectionManager,
		key,
		ref,
		shouldSelectOnPressUp,
		allowsDifferentPressOrigin: shouldSelectOnPressUp && shouldFocusOnHover,
		isVirtualized,
		shouldUseVirtualFocus,
		isDisabled,
		onAction: onAction || (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.onAction) ? $ff5963eb1fccf552$export$e08e3b67e392101e(item === null || item === void 0 ? void 0 : (_item_props1 = item.props) === null || _item_props1 === void 0 ? void 0 : _item_props1.onAction, onAction) : void 0,
		linkBehavior: data === null || data === void 0 ? void 0 : data.linkBehavior,
		UNSTABLE_itemBehavior: data === null || data === void 0 ? void 0 : data["UNSTABLE_itemBehavior"],
		id
	});
	let { hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({
		isDisabled: isDisabled || !shouldFocusOnHover,
		onHoverStart() {
			if (!$507fabe10e71c6fb$export$b9b3dfddab17db27()) {
				state.selectionManager.setFocused(true);
				state.selectionManager.setFocusedKey(key);
			}
		}
	});
	let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(item === null || item === void 0 ? void 0 : item.props);
	delete domProps.id;
	let linkProps = $ea8dcbcb9ea1b556$export$7e924b3091a3bd18(item === null || item === void 0 ? void 0 : item.props);
	return {
		optionProps: {
			...optionProps,
			...$3ef42575df84b30b$export$9d1611c77c2fe928(domProps, itemProps, hoverProps, linkProps),
			id
		},
		labelProps: { id: labelId },
		descriptionProps: { id: descriptionId },
		isFocused,
		isFocusVisible: isFocused && state.selectionManager.isFocused && $507fabe10e71c6fb$export$b9b3dfddab17db27(),
		isSelected,
		isDisabled,
		isPressed,
		allowsSelection,
		hasAction
	};
}
//#endregion
//#region ../../node_modules/@react-aria/listbox/dist/useListBoxSection.mjs
function $af383d3bef1cfdc9$export$c3f9f39876e4bc7(props) {
	let { heading, "aria-label": ariaLabel } = props;
	let headingId = $bdb11010cef70236$export$f680877a34711e37();
	return {
		itemProps: { role: "presentation" },
		headingProps: heading ? {
			id: headingId,
			role: "presentation",
			onMouseDown: (e) => {
				e.preventDefault();
			}
		} : {},
		groupProps: {
			role: "group",
			"aria-label": ariaLabel,
			"aria-labelledby": heading ? headingId : void 0
		}
	};
}
//#endregion
//#region ../../node_modules/@react-stately/list/dist/ListCollection.mjs
var $a02d57049d202695$export$d085fb9e920b5ca7 = class {
	*[Symbol.iterator]() {
		yield* this.iterable;
	}
	get size() {
		return this._size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(key) {
		let node = this.keyMap.get(key);
		var _node_prevKey;
		return node ? (_node_prevKey = node.prevKey) !== null && _node_prevKey !== void 0 ? _node_prevKey : null : null;
	}
	getKeyAfter(key) {
		let node = this.keyMap.get(key);
		var _node_nextKey;
		return node ? (_node_nextKey = node.nextKey) !== null && _node_nextKey !== void 0 ? _node_nextKey : null : null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		return this.lastKey;
	}
	getItem(key) {
		var _this_keyMap_get;
		return (_this_keyMap_get = this.keyMap.get(key)) !== null && _this_keyMap_get !== void 0 ? _this_keyMap_get : null;
	}
	at(idx) {
		const keys = [...this.getKeys()];
		return this.getItem(keys[idx]);
	}
	getChildren(key) {
		let node = this.keyMap.get(key);
		return (node === null || node === void 0 ? void 0 : node.childNodes) || [];
	}
	constructor(nodes) {
		this.keyMap = /* @__PURE__ */ new Map();
		this.firstKey = null;
		this.lastKey = null;
		this.iterable = nodes;
		let visit = (node) => {
			this.keyMap.set(node.key, node);
			if (node.childNodes && node.type === "section") for (let child of node.childNodes) visit(child);
		};
		for (let node of nodes) visit(node);
		let last = null;
		let index = 0;
		let size = 0;
		for (let [key, node] of this.keyMap) {
			if (last) {
				last.nextKey = key;
				node.prevKey = last.key;
			} else {
				this.firstKey = key;
				node.prevKey = void 0;
			}
			if (node.type === "item") node.index = index++;
			if (node.type === "section" || node.type === "item") size++;
			last = node;
			last.nextKey = void 0;
		}
		this._size = size;
		var _last_key;
		this.lastKey = (_last_key = last === null || last === void 0 ? void 0 : last.key) !== null && _last_key !== void 0 ? _last_key : null;
	}
};
//#endregion
//#region ../../node_modules/@react-stately/selection/dist/Selection.mjs
var $e40ea825a81a3709$export$52baac22726c72bf = class $e40ea825a81a3709$export$52baac22726c72bf extends Set {
	constructor(keys, anchorKey, currentKey) {
		super(keys);
		if (keys instanceof $e40ea825a81a3709$export$52baac22726c72bf) {
			this.anchorKey = anchorKey !== null && anchorKey !== void 0 ? anchorKey : keys.anchorKey;
			this.currentKey = currentKey !== null && currentKey !== void 0 ? currentKey : keys.currentKey;
		} else {
			this.anchorKey = anchorKey !== null && anchorKey !== void 0 ? anchorKey : null;
			this.currentKey = currentKey !== null && currentKey !== void 0 ? currentKey : null;
		}
	}
};
//#endregion
//#region ../../node_modules/@react-stately/selection/dist/useMultipleSelectionState.mjs
function $7af3f5b51489e0b5$var$equalSets(setA, setB) {
	if (setA.size !== setB.size) return false;
	for (let item of setA) if (!setB.has(item)) return false;
	return true;
}
function $7af3f5b51489e0b5$export$253fe78d46329472(props) {
	let { selectionMode = "none", disallowEmptySelection = false, allowDuplicateSelectionEvents, selectionBehavior: selectionBehaviorProp = "toggle", disabledBehavior = "all" } = props;
	let isFocusedRef = (0, import_react.useRef)(false);
	let [, setFocused] = (0, import_react.useState)(false);
	let focusedKeyRef = (0, import_react.useRef)(null);
	let childFocusStrategyRef = (0, import_react.useRef)(null);
	let [, setFocusedKey] = (0, import_react.useState)(null);
	let [selectedKeys, setSelectedKeys] = $458b0a5536c1a7cf$export$40bfa8c7b0832715((0, import_react.useMemo)(() => $7af3f5b51489e0b5$var$convertSelection(props.selectedKeys), [props.selectedKeys]), (0, import_react.useMemo)(() => $7af3f5b51489e0b5$var$convertSelection(props.defaultSelectedKeys, new $e40ea825a81a3709$export$52baac22726c72bf()), [props.defaultSelectedKeys]), props.onSelectionChange);
	let disabledKeysProp = (0, import_react.useMemo)(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [props.disabledKeys]);
	let [selectionBehavior, setSelectionBehavior] = (0, import_react.useState)(selectionBehaviorProp);
	if (selectionBehaviorProp === "replace" && selectionBehavior === "toggle" && typeof selectedKeys === "object" && selectedKeys.size === 0) setSelectionBehavior("replace");
	let lastSelectionBehavior = (0, import_react.useRef)(selectionBehaviorProp);
	(0, import_react.useEffect)(() => {
		if (selectionBehaviorProp !== lastSelectionBehavior.current) {
			setSelectionBehavior(selectionBehaviorProp);
			lastSelectionBehavior.current = selectionBehaviorProp;
		}
	}, [selectionBehaviorProp]);
	return {
		selectionMode,
		disallowEmptySelection,
		selectionBehavior,
		setSelectionBehavior,
		get isFocused() {
			return isFocusedRef.current;
		},
		setFocused(f) {
			isFocusedRef.current = f;
			setFocused(f);
		},
		get focusedKey() {
			return focusedKeyRef.current;
		},
		get childFocusStrategy() {
			return childFocusStrategyRef.current;
		},
		setFocusedKey(k, childFocusStrategy = "first") {
			focusedKeyRef.current = k;
			childFocusStrategyRef.current = childFocusStrategy;
			setFocusedKey(k);
		},
		selectedKeys,
		setSelectedKeys(keys) {
			if (allowDuplicateSelectionEvents || !$7af3f5b51489e0b5$var$equalSets(keys, selectedKeys)) setSelectedKeys(keys);
		},
		disabledKeys: disabledKeysProp,
		disabledBehavior
	};
}
function $7af3f5b51489e0b5$var$convertSelection(selection, defaultValue) {
	if (!selection) return defaultValue;
	return selection === "all" ? "all" : new $e40ea825a81a3709$export$52baac22726c72bf(selection);
}
//#endregion
//#region ../../node_modules/@react-stately/selection/dist/SelectionManager.mjs
var $d496c0a20b6e58ec$export$6c8a5aaad13c9852 = class $d496c0a20b6e58ec$export$6c8a5aaad13c9852 {
	/**
	* The type of selection that is allowed in the collection.
	*/ get selectionMode() {
		return this.state.selectionMode;
	}
	/**
	* Whether the collection allows empty selection.
	*/ get disallowEmptySelection() {
		return this.state.disallowEmptySelection;
	}
	/**
	* The selection behavior for the collection.
	*/ get selectionBehavior() {
		return this.state.selectionBehavior;
	}
	/**
	* Sets the selection behavior for the collection.
	*/ setSelectionBehavior(selectionBehavior) {
		this.state.setSelectionBehavior(selectionBehavior);
	}
	/**
	* Whether the collection is currently focused.
	*/ get isFocused() {
		return this.state.isFocused;
	}
	/**
	* Sets whether the collection is focused.
	*/ setFocused(isFocused) {
		this.state.setFocused(isFocused);
	}
	/**
	* The current focused key in the collection.
	*/ get focusedKey() {
		return this.state.focusedKey;
	}
	/** Whether the first or last child of the focused key should receive focus. */ get childFocusStrategy() {
		return this.state.childFocusStrategy;
	}
	/**
	* Sets the focused key.
	*/ setFocusedKey(key, childFocusStrategy) {
		if (key == null || this.collection.getItem(key)) this.state.setFocusedKey(key, childFocusStrategy);
	}
	/**
	* The currently selected keys in the collection.
	*/ get selectedKeys() {
		return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
	}
	/**
	* The raw selection value for the collection.
	* Either 'all' for select all, or a set of keys.
	*/ get rawSelection() {
		return this.state.selectedKeys;
	}
	/**
	* Returns whether a key is selected.
	*/ isSelected(key) {
		if (this.state.selectionMode === "none") return false;
		let mappedKey = this.getKey(key);
		if (mappedKey == null) return false;
		return this.state.selectedKeys === "all" ? this.canSelectItem(mappedKey) : this.state.selectedKeys.has(mappedKey);
	}
	/**
	* Whether the selection is empty.
	*/ get isEmpty() {
		return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
	}
	/**
	* Whether all items in the collection are selected.
	*/ get isSelectAll() {
		if (this.isEmpty) return false;
		if (this.state.selectedKeys === "all") return true;
		if (this._isSelectAll != null) return this._isSelectAll;
		let allKeys = this.getSelectAllKeys();
		let selectedKeys = this.state.selectedKeys;
		this._isSelectAll = allKeys.every((k) => selectedKeys.has(k));
		return this._isSelectAll;
	}
	get firstSelectedKey() {
		let first = null;
		for (let key of this.state.selectedKeys) {
			let item = this.collection.getItem(key);
			if (!first || item && $c5a24bc478652b5f$export$8c434b3a7a4dad6(this.collection, item, first) < 0) first = item;
		}
		var _first_key;
		return (_first_key = first === null || first === void 0 ? void 0 : first.key) !== null && _first_key !== void 0 ? _first_key : null;
	}
	get lastSelectedKey() {
		let last = null;
		for (let key of this.state.selectedKeys) {
			let item = this.collection.getItem(key);
			if (!last || item && $c5a24bc478652b5f$export$8c434b3a7a4dad6(this.collection, item, last) > 0) last = item;
		}
		var _last_key;
		return (_last_key = last === null || last === void 0 ? void 0 : last.key) !== null && _last_key !== void 0 ? _last_key : null;
	}
	get disabledKeys() {
		return this.state.disabledKeys;
	}
	get disabledBehavior() {
		return this.state.disabledBehavior;
	}
	/**
	* Extends the selection to the given key.
	*/ extendSelection(toKey) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single") {
			this.replaceSelection(toKey);
			return;
		}
		let mappedToKey = this.getKey(toKey);
		if (mappedToKey == null) return;
		let selection;
		if (this.state.selectedKeys === "all") selection = new $e40ea825a81a3709$export$52baac22726c72bf([mappedToKey], mappedToKey, mappedToKey);
		else {
			let selectedKeys = this.state.selectedKeys;
			var _selectedKeys_anchorKey;
			let anchorKey = (_selectedKeys_anchorKey = selectedKeys.anchorKey) !== null && _selectedKeys_anchorKey !== void 0 ? _selectedKeys_anchorKey : mappedToKey;
			selection = new $e40ea825a81a3709$export$52baac22726c72bf(selectedKeys, anchorKey, mappedToKey);
			var _selectedKeys_currentKey;
			for (let key of this.getKeyRange(anchorKey, (_selectedKeys_currentKey = selectedKeys.currentKey) !== null && _selectedKeys_currentKey !== void 0 ? _selectedKeys_currentKey : mappedToKey)) selection.delete(key);
			for (let key of this.getKeyRange(mappedToKey, anchorKey)) if (this.canSelectItem(key)) selection.add(key);
		}
		this.state.setSelectedKeys(selection);
	}
	getKeyRange(from, to) {
		let fromItem = this.collection.getItem(from);
		let toItem = this.collection.getItem(to);
		if (fromItem && toItem) {
			if ($c5a24bc478652b5f$export$8c434b3a7a4dad6(this.collection, fromItem, toItem) <= 0) return this.getKeyRangeInternal(from, to);
			return this.getKeyRangeInternal(to, from);
		}
		return [];
	}
	getKeyRangeInternal(from, to) {
		var _this_layoutDelegate;
		if ((_this_layoutDelegate = this.layoutDelegate) === null || _this_layoutDelegate === void 0 ? void 0 : _this_layoutDelegate.getKeyRange) return this.layoutDelegate.getKeyRange(from, to);
		let keys = [];
		let key = from;
		while (key != null) {
			let item = this.collection.getItem(key);
			if (item && (item.type === "item" || item.type === "cell" && this.allowsCellSelection)) keys.push(key);
			if (key === to) return keys;
			key = this.collection.getKeyAfter(key);
		}
		return [];
	}
	getKey(key) {
		let item = this.collection.getItem(key);
		if (!item) return key;
		if (item.type === "cell" && this.allowsCellSelection) return key;
		while (item && item.type !== "item" && item.parentKey != null) item = this.collection.getItem(item.parentKey);
		if (!item || item.type !== "item") return null;
		return item.key;
	}
	/**
	* Toggles whether the given key is selected.
	*/ toggleSelection(key) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single" && !this.isSelected(key)) {
			this.replaceSelection(key);
			return;
		}
		let mappedKey = this.getKey(key);
		if (mappedKey == null) return;
		let keys = new $e40ea825a81a3709$export$52baac22726c72bf(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
		if (keys.has(mappedKey)) keys.delete(mappedKey);
		else if (this.canSelectItem(mappedKey)) {
			keys.add(mappedKey);
			keys.anchorKey = mappedKey;
			keys.currentKey = mappedKey;
		}
		if (this.disallowEmptySelection && keys.size === 0) return;
		this.state.setSelectedKeys(keys);
	}
	/**
	* Replaces the selection with only the given key.
	*/ replaceSelection(key) {
		if (this.selectionMode === "none") return;
		let mappedKey = this.getKey(key);
		if (mappedKey == null) return;
		let selection = this.canSelectItem(mappedKey) ? new $e40ea825a81a3709$export$52baac22726c72bf([mappedKey], mappedKey, mappedKey) : new $e40ea825a81a3709$export$52baac22726c72bf();
		this.state.setSelectedKeys(selection);
	}
	/**
	* Replaces the selection with the given keys.
	*/ setSelectedKeys(keys) {
		if (this.selectionMode === "none") return;
		let selection = new $e40ea825a81a3709$export$52baac22726c72bf();
		for (let key of keys) {
			let mappedKey = this.getKey(key);
			if (mappedKey != null) {
				selection.add(mappedKey);
				if (this.selectionMode === "single") break;
			}
		}
		this.state.setSelectedKeys(selection);
	}
	getSelectAllKeys() {
		let keys = [];
		let addKeys = (key) => {
			while (key != null) {
				if (this.canSelectItem(key)) {
					var _getFirstItem;
					let item = this.collection.getItem(key);
					if ((item === null || item === void 0 ? void 0 : item.type) === "item") keys.push(key);
					var _getFirstItem_key;
					if ((item === null || item === void 0 ? void 0 : item.hasChildNodes) && (this.allowsCellSelection || item.type !== "item")) addKeys((_getFirstItem_key = (_getFirstItem = $c5a24bc478652b5f$export$fbdeaa6a76694f71($c5a24bc478652b5f$export$1005530eda016c13(item, this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key) !== null && _getFirstItem_key !== void 0 ? _getFirstItem_key : null);
				}
				key = this.collection.getKeyAfter(key);
			}
		};
		addKeys(this.collection.getFirstKey());
		return keys;
	}
	/**
	* Selects all items in the collection.
	*/ selectAll() {
		if (!this.isSelectAll && this.selectionMode === "multiple") this.state.setSelectedKeys("all");
	}
	/**
	* Removes all keys from the selection.
	*/ clearSelection() {
		if (!this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new $e40ea825a81a3709$export$52baac22726c72bf());
	}
	/**
	* Toggles between select all and an empty selection.
	*/ toggleSelectAll() {
		if (this.isSelectAll) this.clearSelection();
		else this.selectAll();
	}
	select(key, e) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single") if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);
		else this.replaceSelection(key);
		else if (this.selectionBehavior === "toggle" || e && (e.pointerType === "touch" || e.pointerType === "virtual")) this.toggleSelection(key);
		else this.replaceSelection(key);
	}
	/**
	* Returns whether the current selection is equal to the given selection.
	*/ isSelectionEqual(selection) {
		if (selection === this.state.selectedKeys) return true;
		let selectedKeys = this.selectedKeys;
		if (selection.size !== selectedKeys.size) return false;
		for (let key of selection) if (!selectedKeys.has(key)) return false;
		for (let key of selectedKeys) if (!selection.has(key)) return false;
		return true;
	}
	canSelectItem(key) {
		var _item_props;
		if (this.state.selectionMode === "none" || this.state.disabledKeys.has(key)) return false;
		let item = this.collection.getItem(key);
		if (!item || (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.isDisabled) || item.type === "cell" && !this.allowsCellSelection) return false;
		return true;
	}
	isDisabled(key) {
		var _this_collection_getItem_props, _this_collection_getItem;
		return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(key) || !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.isDisabled));
	}
	isLink(key) {
		var _this_collection_getItem_props, _this_collection_getItem;
		return !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.href);
	}
	getItemProps(key) {
		var _this_collection_getItem;
		return (_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : _this_collection_getItem.props;
	}
	withCollection(collection) {
		return new $d496c0a20b6e58ec$export$6c8a5aaad13c9852(collection, this.state, {
			allowsCellSelection: this.allowsCellSelection,
			layoutDelegate: this.layoutDelegate || void 0
		});
	}
	constructor(collection, state, options) {
		this.collection = collection;
		this.state = state;
		var _options_allowsCellSelection;
		this.allowsCellSelection = (_options_allowsCellSelection = options === null || options === void 0 ? void 0 : options.allowsCellSelection) !== null && _options_allowsCellSelection !== void 0 ? _options_allowsCellSelection : false;
		this._isSelectAll = null;
		this.layoutDelegate = (options === null || options === void 0 ? void 0 : options.layoutDelegate) || null;
	}
};
//#endregion
//#region ../../node_modules/@react-stately/list/dist/useListState.mjs
function $e72dd72e1c76a225$export$2f645645f7bca764(props) {
	let { filter, layoutDelegate } = props;
	let selectionState = $7af3f5b51489e0b5$export$253fe78d46329472(props);
	let disabledKeys = (0, import_react.useMemo)(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [props.disabledKeys]);
	let collection = $7613b1592d41b092$export$6cd28814d92fa9c9(props, (0, import_react.useCallback)((nodes) => filter ? new $a02d57049d202695$export$d085fb9e920b5ca7(filter(nodes)) : new $a02d57049d202695$export$d085fb9e920b5ca7(nodes), [filter]), (0, import_react.useMemo)(() => ({ suppressTextValueWarning: props.suppressTextValueWarning }), [props.suppressTextValueWarning]));
	let selectionManager = (0, import_react.useMemo)(() => new $d496c0a20b6e58ec$export$6c8a5aaad13c9852(collection, selectionState, { layoutDelegate }), [
		collection,
		selectionState,
		layoutDelegate
	]);
	$e72dd72e1c76a225$var$useFocusedKeyReset(collection, selectionManager);
	return {
		collection,
		disabledKeys,
		selectionManager
	};
}
function $e72dd72e1c76a225$export$ba9d38c0f1bf2b36(state, filterFn) {
	let collection = (0, import_react.useMemo)(() => filterFn ? state.collection.filter(filterFn) : state.collection, [state.collection, filterFn]);
	let selectionManager = state.selectionManager.withCollection(collection);
	$e72dd72e1c76a225$var$useFocusedKeyReset(collection, selectionManager);
	return {
		collection,
		selectionManager,
		disabledKeys: state.disabledKeys
	};
}
function $e72dd72e1c76a225$var$useFocusedKeyReset(collection, selectionManager) {
	const cachedCollection = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (selectionManager.focusedKey != null && !collection.getItem(selectionManager.focusedKey) && cachedCollection.current) {
			const startItem = cachedCollection.current.getItem(selectionManager.focusedKey);
			const cachedItemNodes = [...cachedCollection.current.getKeys()].map((key) => {
				const itemNode = cachedCollection.current.getItem(key);
				return (itemNode === null || itemNode === void 0 ? void 0 : itemNode.type) === "item" ? itemNode : null;
			}).filter((node) => node !== null);
			const itemNodes = [...collection.getKeys()].map((key) => {
				const itemNode = collection.getItem(key);
				return (itemNode === null || itemNode === void 0 ? void 0 : itemNode.type) === "item" ? itemNode : null;
			}).filter((node) => node !== null);
			var _cachedItemNodes_length, _itemNodes_length;
			const diff = ((_cachedItemNodes_length = cachedItemNodes === null || cachedItemNodes === void 0 ? void 0 : cachedItemNodes.length) !== null && _cachedItemNodes_length !== void 0 ? _cachedItemNodes_length : 0) - ((_itemNodes_length = itemNodes === null || itemNodes === void 0 ? void 0 : itemNodes.length) !== null && _itemNodes_length !== void 0 ? _itemNodes_length : 0);
			var _startItem_index, _startItem_index1, _itemNodes_length1;
			let index = Math.min(diff > 1 ? Math.max(((_startItem_index = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index !== void 0 ? _startItem_index : 0) - diff + 1, 0) : (_startItem_index1 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index1 !== void 0 ? _startItem_index1 : 0, ((_itemNodes_length1 = itemNodes === null || itemNodes === void 0 ? void 0 : itemNodes.length) !== null && _itemNodes_length1 !== void 0 ? _itemNodes_length1 : 0) - 1);
			let newNode = null;
			let isReverseSearching = false;
			while (index >= 0) {
				if (!selectionManager.isDisabled(itemNodes[index].key)) {
					newNode = itemNodes[index];
					break;
				}
				if (index < itemNodes.length - 1 && !isReverseSearching) index++;
				else {
					isReverseSearching = true;
					var _startItem_index2, _startItem_index3;
					if (index > ((_startItem_index2 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index2 !== void 0 ? _startItem_index2 : 0)) index = (_startItem_index3 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index3 !== void 0 ? _startItem_index3 : 0;
					index--;
				}
			}
			selectionManager.setFocusedKey(newNode ? newNode.key : null);
		}
		cachedCollection.current = collection;
	}, [collection, selectionManager]);
}
//#endregion
//#region ../../node_modules/react-aria-components/dist/DragAndDrop.mjs
var $612b8eb6cb90e02d$export$d188a835a7bc5783 = /* @__PURE__ */ (0, import_react.createContext)({});
var $612b8eb6cb90e02d$export$f55761759794cf55 = /* @__PURE__ */ (0, import_react.createContext)(null);
var $612b8eb6cb90e02d$export$62ed72bc21f6b8a6 = /* @__PURE__ */ (0, import_react.forwardRef)(function DropIndicator(props, ref) {
	let { render } = (0, import_react.useContext)($612b8eb6cb90e02d$export$f55761759794cf55);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, render(props, ref));
});
function $612b8eb6cb90e02d$export$971707d8a129a1f7(dragAndDropHooks, dropState) {
	var _dragAndDropHooks_isVirtualDragging;
	let renderDropIndicator = dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.renderDropIndicator;
	let isVirtualDragging = dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : (_dragAndDropHooks_isVirtualDragging = dragAndDropHooks.isVirtualDragging) === null || _dragAndDropHooks_isVirtualDragging === void 0 ? void 0 : _dragAndDropHooks_isVirtualDragging.call(dragAndDropHooks);
	let fn = (0, import_react.useCallback)((target) => {
		if (isVirtualDragging || (dropState === null || dropState === void 0 ? void 0 : dropState.isDropTarget(target))) return renderDropIndicator ? renderDropIndicator(target) : /* @__PURE__ */ import_react.createElement($612b8eb6cb90e02d$export$62ed72bc21f6b8a6, { target });
	}, [
		dropState === null || dropState === void 0 ? void 0 : dropState.target,
		isVirtualDragging,
		renderDropIndicator
	]);
	return (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDropIndicator) ? fn : void 0;
}
function $612b8eb6cb90e02d$export$d1e8e3fbb7461f6(selectionManager, dragAndDropHooks, dropState) {
	var _dragAndDropHooks_isVirtualDragging, _dropState_target;
	let focusedKey = selectionManager.focusedKey;
	let dropTargetKey = null;
	if ((dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : (_dragAndDropHooks_isVirtualDragging = dragAndDropHooks.isVirtualDragging) === null || _dragAndDropHooks_isVirtualDragging === void 0 ? void 0 : _dragAndDropHooks_isVirtualDragging.call(dragAndDropHooks)) && (dropState === null || dropState === void 0 ? void 0 : (_dropState_target = dropState.target) === null || _dropState_target === void 0 ? void 0 : _dropState_target.type) === "item") {
		dropTargetKey = dropState.target.key;
		if (dropState.target.dropPosition === "after") {
			let nextKey = dropState.collection.getKeyAfter(dropTargetKey);
			let lastDescendantKey = null;
			if (nextKey != null) {
				var _dropState_collection_getItem;
				var _dropState_collection_getItem_level;
				let targetLevel = (_dropState_collection_getItem_level = (_dropState_collection_getItem = dropState.collection.getItem(dropTargetKey)) === null || _dropState_collection_getItem === void 0 ? void 0 : _dropState_collection_getItem.level) !== null && _dropState_collection_getItem_level !== void 0 ? _dropState_collection_getItem_level : 0;
				while (nextKey) {
					let node = dropState.collection.getItem(nextKey);
					if (!node) break;
					if (node.type !== "item") {
						nextKey = dropState.collection.getKeyAfter(nextKey);
						continue;
					}
					var _node_level;
					if (((_node_level = node.level) !== null && _node_level !== void 0 ? _node_level : 0) <= targetLevel) break;
					lastDescendantKey = nextKey;
					nextKey = dropState.collection.getKeyAfter(nextKey);
				}
			}
			var _ref;
			dropTargetKey = (_ref = nextKey !== null && nextKey !== void 0 ? nextKey : lastDescendantKey) !== null && _ref !== void 0 ? _ref : dropTargetKey;
		}
	}
	return (0, import_react.useMemo)(() => {
		return new Set([focusedKey, dropTargetKey].filter((k) => k != null));
	}, [focusedKey, dropTargetKey]);
}
//#endregion
//#region ../../node_modules/react-aria-components/dist/ListBox.mjs
var $eed445e0843c11d0$export$7ff8f37d2d81a48d = /* @__PURE__ */ (0, import_react.createContext)(null);
var $eed445e0843c11d0$export$7c5906fe4f1f2af2 = /* @__PURE__ */ (0, import_react.createContext)(null);
var $eed445e0843c11d0$export$41f133550aa26f48 = /* @__PURE__ */ (0, import_react.forwardRef)(function ListBox(props, ref) {
	[props, ref] = $64fa3d84918910a7$export$29f1550f4b0d4415(props, ref, $eed445e0843c11d0$export$7ff8f37d2d81a48d);
	let state = (0, import_react.useContext)($eed445e0843c11d0$export$7c5906fe4f1f2af2);
	if (state) return /* @__PURE__ */ import_react.createElement($eed445e0843c11d0$var$ListBoxInner, {
		state,
		props,
		listBoxRef: ref
	});
	return /* @__PURE__ */ import_react.createElement($e1995378a142960e$export$bf788dd355e3a401, { content: /* @__PURE__ */ import_react.createElement($e1995378a142960e$export$fb8073518f34e6ec, props) }, (collection) => /* @__PURE__ */ import_react.createElement($eed445e0843c11d0$var$StandaloneListBox, {
		props,
		listBoxRef: ref,
		collection
	}));
});
function $eed445e0843c11d0$var$StandaloneListBox({ props, listBoxRef, collection }) {
	props = {
		...props,
		collection,
		children: null,
		items: null
	};
	let { layoutDelegate } = (0, import_react.useContext)($7135fc7d473fd974$export$4feb769f8ddf26c5);
	let state = $e72dd72e1c76a225$export$2f645645f7bca764({
		...props,
		layoutDelegate
	});
	return /* @__PURE__ */ import_react.createElement($eed445e0843c11d0$var$ListBoxInner, {
		state,
		props,
		listBoxRef
	});
}
function $eed445e0843c11d0$var$ListBoxInner({ state: inputState, props, listBoxRef }) {
	[props, listBoxRef] = $64fa3d84918910a7$export$29f1550f4b0d4415(props, listBoxRef, $4e85f108e88277b8$export$b0d3ecf7112093a7);
	let { dragAndDropHooks, layout = "stack", orientation = "vertical", filter } = props;
	let state = $e72dd72e1c76a225$export$ba9d38c0f1bf2b36(inputState, filter);
	let { collection, selectionManager } = state;
	let isListDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
	let isListDroppable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDroppableCollectionState);
	let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
	let { disabledBehavior, disabledKeys } = selectionManager;
	let collator = $325a3faab7a68acd$export$a16aca283550c30d({
		usage: "search",
		sensitivity: "base"
	});
	let { isVirtualized, layoutDelegate, dropTargetDelegate: ctxDropTargetDelegate, CollectionRoot } = (0, import_react.useContext)($7135fc7d473fd974$export$4feb769f8ddf26c5);
	let keyboardDelegate = (0, import_react.useMemo)(() => props.keyboardDelegate || new $2a25aae57d74318e$export$a05409b8bb224a5a({
		collection,
		collator,
		ref: listBoxRef,
		disabledKeys,
		disabledBehavior,
		layout,
		orientation,
		direction,
		layoutDelegate
	}), [
		collection,
		collator,
		listBoxRef,
		disabledBehavior,
		disabledKeys,
		orientation,
		direction,
		props.keyboardDelegate,
		layout,
		layoutDelegate
	]);
	let { listBoxProps } = $c132121280ec012d$export$50eacbbf140a3141({
		...props,
		shouldSelectOnPressUp: isListDraggable || props.shouldSelectOnPressUp,
		keyboardDelegate,
		isVirtualized
	}, state, listBoxRef);
	(0, import_react.useRef)(isListDraggable);
	(0, import_react.useRef)(isListDroppable);
	(0, import_react.useEffect)(() => {}, [isListDraggable, isListDroppable]);
	let dragState = void 0;
	let dropState = void 0;
	let droppableCollection = void 0;
	let isRootDropTarget = false;
	let dragPreview = null;
	let preview = (0, import_react.useRef)(null);
	if (isListDraggable && dragAndDropHooks) {
		dragState = dragAndDropHooks.useDraggableCollectionState({
			collection,
			selectionManager,
			preview: dragAndDropHooks.renderDragPreview ? preview : void 0
		});
		dragAndDropHooks.useDraggableCollection({}, dragState, listBoxRef);
		let DragPreview = dragAndDropHooks.DragPreview;
		dragPreview = dragAndDropHooks.renderDragPreview ? /* @__PURE__ */ import_react.createElement(DragPreview, { ref: preview }, dragAndDropHooks.renderDragPreview) : null;
	}
	if (isListDroppable && dragAndDropHooks) {
		dropState = dragAndDropHooks.useDroppableCollectionState({
			collection,
			selectionManager
		});
		let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || ctxDropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection, listBoxRef, {
			orientation,
			layout,
			direction
		});
		droppableCollection = dragAndDropHooks.useDroppableCollection({
			keyboardDelegate,
			dropTargetDelegate
		}, dropState, listBoxRef);
		isRootDropTarget = dropState.isDropTarget({ type: "root" });
	}
	let { focusProps, isFocused, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
	let isEmpty = state.collection.size === 0;
	let renderValues = {
		isDropTarget: isRootDropTarget,
		isEmpty,
		isFocused,
		isFocusVisible,
		layout: props.layout || "stack",
		state
	};
	let renderProps = $64fa3d84918910a7$export$4d86445c2cf5e3({
		...props,
		children: void 0,
		defaultClassName: "react-aria-ListBox",
		values: renderValues
	});
	let emptyState = null;
	if (isEmpty && props.renderEmptyState) emptyState = /* @__PURE__ */ import_react.createElement("div", {
		role: "option",
		style: { display: "contents" }
	}, props.renderEmptyState(renderValues));
	let DOMProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, { global: true });
	return /* @__PURE__ */ import_react.createElement($9bf71ea28793e738$export$20e40289641fbbb6, null, /* @__PURE__ */ import_react.createElement($64fa3d84918910a7$export$df3a06d6289f983e.div, {
		...$3ef42575df84b30b$export$9d1611c77c2fe928(DOMProps, renderProps, listBoxProps, focusProps, droppableCollection === null || droppableCollection === void 0 ? void 0 : droppableCollection.collectionProps),
		ref: listBoxRef,
		slot: props.slot || void 0,
		onScroll: props.onScroll,
		"data-drop-target": isRootDropTarget || void 0,
		"data-empty": isEmpty || void 0,
		"data-focused": isFocused || void 0,
		"data-focus-visible": isFocusVisible || void 0,
		"data-layout": props.layout || "stack",
		"data-orientation": props.orientation || "vertical"
	}, /* @__PURE__ */ import_react.createElement($64fa3d84918910a7$export$2881499e37b75b9a, { values: [
		[$eed445e0843c11d0$export$7ff8f37d2d81a48d, props],
		[$eed445e0843c11d0$export$7c5906fe4f1f2af2, state],
		[$612b8eb6cb90e02d$export$d188a835a7bc5783, {
			dragAndDropHooks,
			dragState,
			dropState
		}],
		[$431f98aba6844401$export$6615d83f6de245ce, { elementType: "div" }],
		[$612b8eb6cb90e02d$export$f55761759794cf55, { render: $eed445e0843c11d0$var$ListBoxDropIndicatorWrapper }],
		[$7135fc7d473fd974$export$d40e14dec8b060a8, {
			name: "ListBoxSection",
			render: $eed445e0843c11d0$var$ListBoxSectionInner
		}]
	] }, /* @__PURE__ */ import_react.createElement($c8a5a149f625efcf$export$758399f318e6385a, null, /* @__PURE__ */ import_react.createElement(CollectionRoot, {
		collection,
		scrollRef: listBoxRef,
		persistedKeys: $612b8eb6cb90e02d$export$d1e8e3fbb7461f6(selectionManager, dragAndDropHooks, dropState),
		renderDropIndicator: $612b8eb6cb90e02d$export$971707d8a129a1f7(dragAndDropHooks, dropState)
	}))), emptyState, dragPreview));
}
function $eed445e0843c11d0$var$ListBoxSectionInner(props, ref, section, className = "react-aria-ListBoxSection") {
	let state = (0, import_react.useContext)($eed445e0843c11d0$export$7c5906fe4f1f2af2);
	let { dragAndDropHooks, dropState } = (0, import_react.useContext)($612b8eb6cb90e02d$export$d188a835a7bc5783);
	let { CollectionBranch } = (0, import_react.useContext)($7135fc7d473fd974$export$4feb769f8ddf26c5);
	let [headingRef, heading] = $64fa3d84918910a7$export$9d4c57ee4c6ffdd8();
	var _props_arialabel;
	let { headingProps, groupProps } = $af383d3bef1cfdc9$export$c3f9f39876e4bc7({
		heading,
		"aria-label": (_props_arialabel = props["aria-label"]) !== null && _props_arialabel !== void 0 ? _props_arialabel : void 0
	});
	let renderProps = $64fa3d84918910a7$export$4d86445c2cf5e3({
		...props,
		id: void 0,
		children: void 0,
		defaultClassName: className,
		values: void 0
	});
	let DOMProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, { global: true });
	delete DOMProps.id;
	return /* @__PURE__ */ import_react.createElement($64fa3d84918910a7$export$df3a06d6289f983e.section, {
		...$3ef42575df84b30b$export$9d1611c77c2fe928(DOMProps, renderProps, groupProps),
		ref
	}, /* @__PURE__ */ import_react.createElement($72a5793c14baf454$export$e0e4026c12a8bdbb.Provider, { value: {
		...headingProps,
		ref: headingRef
	} }, /* @__PURE__ */ import_react.createElement(CollectionBranch, {
		collection: state.collection,
		parent: section,
		renderDropIndicator: $612b8eb6cb90e02d$export$971707d8a129a1f7(dragAndDropHooks, dropState)
	})));
}
var $eed445e0843c11d0$export$dca12b0bb56e4fc = /* @__PURE__ */ $e1995378a142960e$export$e953bb1cd0f19726($23b9f4fcf0fe224b$export$437f11dc9b403b78, $eed445e0843c11d0$var$ListBoxSectionInner);
var $eed445e0843c11d0$export$a11e76429ed99b4 = /* @__PURE__ */ $e1995378a142960e$export$18af5c7a9e9b3664($23b9f4fcf0fe224b$export$fd11f34e1d07f134, function ListBoxItem(props, forwardedRef, item) {
	let ref = $df56164dff5785e2$export$4338b53315abf666(forwardedRef);
	let state = (0, import_react.useContext)($eed445e0843c11d0$export$7c5906fe4f1f2af2);
	let { dragAndDropHooks, dragState, dropState } = (0, import_react.useContext)($612b8eb6cb90e02d$export$d188a835a7bc5783);
	let { optionProps, labelProps, descriptionProps, ...states } = $293f70390ea03370$export$497855f14858aa34({
		key: item.key,
		"aria-label": props === null || props === void 0 ? void 0 : props["aria-label"]
	}, state, ref);
	let { hoverProps, isHovered } = $6179b936705e76d3$export$ae780daf29e6d456({
		isDisabled: !states.allowsSelection && !states.hasAction,
		onHoverStart: item.props.onHoverStart,
		onHoverChange: item.props.onHoverChange,
		onHoverEnd: item.props.onHoverEnd
	});
	let { keyboardProps } = $46d819fcbaf35654$export$8f71654801c2f7cd(props);
	let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props);
	let draggableItem = null;
	if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
		key: item.key,
		hasAction: states.hasAction
	}, dragState);
	let droppableItem = null;
	if (dropState && dragAndDropHooks) droppableItem = dragAndDropHooks.useDroppableItem({ target: {
		type: "item",
		key: item.key,
		dropPosition: "on"
	} }, dropState, ref);
	let isDragging = dragState && dragState.isDragging(item.key);
	let renderProps = $64fa3d84918910a7$export$4d86445c2cf5e3({
		...props,
		id: void 0,
		children: props.children,
		defaultClassName: "react-aria-ListBoxItem",
		values: {
			...states,
			isHovered,
			selectionMode: state.selectionManager.selectionMode,
			selectionBehavior: state.selectionManager.selectionBehavior,
			allowsDragging: !!dragState,
			isDragging,
			isDropTarget: droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.isDropTarget
		}
	});
	(0, import_react.useEffect)(() => {
		if (!item.textValue && false);
	}, [item.textValue]);
	let ElementType = props.href ? $64fa3d84918910a7$export$df3a06d6289f983e.a : $64fa3d84918910a7$export$df3a06d6289f983e.div;
	let DOMProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, { global: true });
	delete DOMProps.id;
	delete DOMProps.onClick;
	if (props.href && optionProps.tabIndex == null) optionProps.tabIndex = -1;
	return /* @__PURE__ */ import_react.createElement(ElementType, {
		...$3ef42575df84b30b$export$9d1611c77c2fe928(DOMProps, renderProps, optionProps, hoverProps, keyboardProps, focusProps, draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragProps, droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.dropProps),
		ref,
		"data-allows-dragging": !!dragState || void 0,
		"data-selected": states.isSelected || void 0,
		"data-disabled": states.isDisabled || void 0,
		"data-hovered": isHovered || void 0,
		"data-focused": states.isFocused || void 0,
		"data-focus-visible": states.isFocusVisible || void 0,
		"data-pressed": states.isPressed || void 0,
		"data-dragging": isDragging || void 0,
		"data-drop-target": (droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.isDropTarget) || void 0,
		"data-selection-mode": state.selectionManager.selectionMode === "none" ? void 0 : state.selectionManager.selectionMode
	}, /* @__PURE__ */ import_react.createElement($64fa3d84918910a7$export$2881499e37b75b9a, { values: [[$514c0188e459b4c0$export$9afb8bc826b033ea, { slots: {
		[$64fa3d84918910a7$export$c62b8e45d58ddad9]: labelProps,
		label: labelProps,
		description: descriptionProps
	} }], [$1d5b8b8664671ef2$export$c9549807523555e0, { isSelected: states.isSelected }]] }, renderProps.children));
});
function $eed445e0843c11d0$var$ListBoxDropIndicatorWrapper(props, ref) {
	ref = $df56164dff5785e2$export$4338b53315abf666(ref);
	let { dragAndDropHooks, dropState } = (0, import_react.useContext)($612b8eb6cb90e02d$export$d188a835a7bc5783);
	let { dropIndicatorProps, isHidden, isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, ref);
	if (isHidden) return null;
	return /* @__PURE__ */ import_react.createElement($eed445e0843c11d0$var$ListBoxDropIndicatorForwardRef, {
		...props,
		dropIndicatorProps,
		isDropTarget,
		ref
	});
}
function $eed445e0843c11d0$var$ListBoxDropIndicator(props, ref) {
	let { dropIndicatorProps, isDropTarget, ...otherProps } = props;
	let renderProps = $64fa3d84918910a7$export$4d86445c2cf5e3({
		...otherProps,
		defaultClassName: "react-aria-DropIndicator",
		values: { isDropTarget }
	});
	return /* @__PURE__ */ import_react.createElement($64fa3d84918910a7$export$df3a06d6289f983e.div, {
		...dropIndicatorProps,
		...renderProps,
		role: "option",
		ref,
		"data-drop-target": isDropTarget || void 0
	});
}
var $eed445e0843c11d0$var$ListBoxDropIndicatorForwardRef = /* @__PURE__ */ (0, import_react.forwardRef)($eed445e0843c11d0$var$ListBoxDropIndicator);
$e1995378a142960e$export$18af5c7a9e9b3664($23b9f4fcf0fe224b$export$8258a0665a675899, function ListBoxLoadingIndicator(props, ref, item) {
	let state = (0, import_react.useContext)($eed445e0843c11d0$export$7c5906fe4f1f2af2);
	let { isLoading, onLoadMore, scrollOffset, ...otherProps } = props;
	let sentinelRef = (0, import_react.useRef)(null);
	$a5fa973c1850dd36$export$ccaea96c28e8b9e7((0, import_react.useMemo)(() => ({
		onLoadMore,
		collection: state === null || state === void 0 ? void 0 : state.collection,
		sentinelRef,
		scrollOffset
	}), [
		onLoadMore,
		scrollOffset,
		state === null || state === void 0 ? void 0 : state.collection
	]), sentinelRef);
	let renderProps = $64fa3d84918910a7$export$4d86445c2cf5e3({
		...otherProps,
		id: void 0,
		children: item.rendered,
		defaultClassName: "react-aria-ListBoxLoadingIndicator",
		values: void 0
	});
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("div", {
		style: {
			position: "relative",
			width: 0,
			height: 0
		},
		inert: $cdc5a6778b766db2$export$a9d04c5684123369(true)
	}, /* @__PURE__ */ import_react.createElement("div", {
		"data-testid": "loadMoreSentinel",
		ref: sentinelRef,
		style: {
			position: "absolute",
			height: 1,
			width: 1
		}
	})), isLoading && renderProps.children && /* @__PURE__ */ import_react.createElement($64fa3d84918910a7$export$df3a06d6289f983e.div, {
		...$3ef42575df84b30b$export$9d1611c77c2fe928($65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, { global: true }), { tabIndex: -1 }),
		...renderProps,
		role: "option",
		ref
	}, renderProps.children));
});
//#endregion
//#region src/components/mobile/MobileBackButton.tsx
var import_jsx_runtime = require_jsx_runtime();
function MobileBackButton({ onPress, style, ...props }) {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "bare",
		style: {
			margin: 10,
			...style
		},
		onPress: onPress || (() => navigate(-1)),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCheveronLeft, { style: {
			width: 30,
			height: 30,
			margin: -10,
			marginLeft: -5
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: {
				...styles.text,
				fontWeight: 500,
				marginLeft: 5,
				marginRight: 5
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Back" })
		})]
	});
}
//#endregion
//#region src/components/mobile/utils.ts
function getPrettyPayee({ t, transaction, payee, transferAccount }) {
	if (!transaction) return "";
	if (transferAccount) return t("Transfer {{direction}} {{accountName}}", {
		direction: transaction?.amount > 0 ? t("from") : t("to"),
		accountName: transferAccount.name
	});
	else if (transaction.is_parent) return t("Split");
	else if (payee) return payee.name;
	return "";
}
//#endregion
//#region src/hooks/useInitialMount.ts
function useInitialMount() {
	const initial = (0, import_react.useRef)(true);
	if (initial.current) {
		initial.current = false;
		return true;
	}
	return false;
}
//#endregion
//#region src/hooks/useSingleActiveEditForm.tsx
var SingleActiveEditFormContext = (0, import_react.createContext)(void 0);
function SingleActiveEditFormProvider({ formName, children }) {
	const [editingField, setEditingField] = (0, import_react.useState)(null);
	const cleanupRef = (0, import_react.useRef)(null);
	const runCleanup = () => {
		const editCleanup = cleanupRef.current;
		if (typeof editCleanup === "function") editCleanup?.();
		cleanupRef.current = null;
	};
	const runAction = (action) => {
		cleanupRef.current = action?.();
	};
	const onClearActiveEdit = (delayMs) => {
		setTimeout(() => {
			runCleanup();
			setEditingField(null);
		}, delayMs);
	};
	const onActiveEdit = (field, action) => {
		runAction(action);
		setEditingField(field);
	};
	const onRequestActiveEdit = (field, action, options) => {
		if (editingField === field) return;
		if (editingField) onClearActiveEdit(options?.clearActiveEditDelayMs);
		else onActiveEdit(field, action);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SingleActiveEditFormContext.Provider, {
		value: {
			formName,
			editingField,
			onRequestActiveEdit,
			onClearActiveEdit
		},
		children
	});
}
function useSingleActiveEditForm() {
	const context = (0, import_react.useContext)(SingleActiveEditFormContext);
	if (!context) return null;
	return {
		formName: context.formName,
		editingField: context.editingField,
		onRequestActiveEdit: context.onRequestActiveEdit,
		onClearActiveEdit: context.onClearActiveEdit
	};
}
//#endregion
//#region src/components/mobile/transactions/FocusableAmountInput.tsx
var AmountInput = (0, import_react.memo)(function AmountInput({ focused, style, textStyle, ...props }) {
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [text, setText] = (0, import_react.useState)("");
	const [value, setValue] = (0, import_react.useState)(0);
	const inputRef = (0, import_react.useRef)(null);
	const [hideFraction] = useSyncedPref("hideFraction");
	const mergedInputRef = useMergedRefs(props.inputRef, inputRef);
	const initialValue = Math.abs(props.value);
	(0, import_react.useEffect)(() => {
		if (focused) inputRef.current?.focus();
	}, [focused]);
	(0, import_react.useEffect)(() => {
		setEditing(false);
		setText("");
		setValue(initialValue);
	}, [initialValue]);
	const onKeyUp = (e) => {
		if (e.key === "Backspace" && text === "") setEditing(true);
		else if (e.key === "Enter") {
			props.onEnter?.(e);
			if (!e.defaultPrevented) onUpdate(e.currentTarget.value);
		}
	};
	const applyText = () => {
		const parsed = currencyToAmount(text) || 0;
		const newValue = editing ? parsed : value;
		setValue(Math.abs(newValue));
		setEditing(false);
		setText("");
		return newValue;
	};
	const onFocus = (e) => {
		props.onFocus?.(e);
	};
	const onUpdate = (value) => {
		const originalAmount = Math.abs(props.value);
		const amount = applyText();
		if (amount !== originalAmount) {
			props.onUpdate?.(value);
			props.onUpdateAmount?.(amount);
		}
	};
	const onBlur = (e) => {
		props.onBlur?.(e);
		if (!e.defaultPrevented) onUpdate(e.target.value);
	};
	const onChangeText = (text) => {
		text = reapplyThousandSeparators(text);
		text = appendDecimals(text, String(hideFraction) === "true");
		setEditing(true);
		setText(text);
		props.onChangeValue?.(text);
	};
	const input = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "text",
		ref: mergedInputRef,
		value: text,
		inputMode: "decimal",
		autoCapitalize: "none",
		onChange: (e) => onChangeText(e.target.value),
		onFocus,
		onBlur,
		onKeyUp,
		"data-testid": "amount-input",
		style: {
			flex: 1,
			textAlign: "center",
			position: "absolute"
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			justifyContent: "center",
			borderWidth: 1,
			borderColor: theme.pillBorderSelected,
			borderRadius: 4,
			padding: 5,
			backgroundColor: theme.tableBackground,
			maxWidth: "calc(100% - 40px)",
			...style
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				overflowY: "auto",
				overflowX: "hidden"
			},
			children: input
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: {
				pointerEvents: "none",
				...textStyle
			},
			"data-testid": "amount-input-text",
			children: editing ? text : amountToCurrency(value)
		})]
	});
});
var FocusableAmountInput = (0, import_react.memo)(function FocusableAmountInput({ value, sign, zeroSign, focused, disabled, textStyle, style, focusedStyle, buttonProps, onFocus, onBlur, ...props }) {
	const [isNegative, setIsNegative] = (0, import_react.useState)(true);
	const maybeApplyNegative = (amount, negative) => {
		const absValue = Math.abs(amount);
		return negative ? -absValue : absValue;
	};
	const onUpdateAmount = (amount, negative) => {
		props.onUpdateAmount?.(maybeApplyNegative(amount, negative));
	};
	(0, import_react.useEffect)(() => {
		if (sign) setIsNegative(sign === "-");
		else if (value > 0 || zeroSign !== "-" && value === 0) setIsNegative(false);
	}, [
		sign,
		value,
		zeroSign
	]);
	const toggleIsNegative = () => {
		if (disabled) return;
		onUpdateAmount(value, !isNegative);
		setIsNegative(!isNegative);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmountInput, {
		...props,
		value,
		onFocus,
		onBlur,
		onUpdateAmount: (amount) => onUpdateAmount(amount, isNegative),
		focused: focused && !disabled,
		style: {
			...makeAmountFullStyle(value, {
				zeroColor: isNegative ? theme.numberNegative : theme.numberNeutral,
				positiveColor: theme.numberPositive,
				negativeColor: theme.numberNegative
			}),
			width: 80,
			justifyContent: "center",
			...style,
			...focusedStyle,
			...!focused && { display: "none" }
		},
		textStyle: {
			fontSize: 15,
			textAlign: "right",
			...textStyle
		}
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [!focused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		style: {
			position: "absolute",
			right: "calc(100% + 5px)",
			top: "8px"
		},
		onPress: toggleIsNegative,
		children: isNegative ? "-" : "+"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		onPress: onFocus,
		...buttonProps,
		className: css({
			...buttonProps && buttonProps.style,
			...focused && { display: "none" },
			"&[data-pressed]": { backgroundColor: "transparent" }
		}),
		variant: "bare",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				borderBottomWidth: 1,
				borderColor: "#e0e0e0",
				justifyContent: "center",
				...style
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: {
					...makeAmountFullStyle(value, {
						positiveColor: theme.numberPositive,
						negativeColor: theme.numberNegative,
						zeroColor: theme.numberNeutral
					}),
					fontSize: 15,
					userSelect: "none",
					...textStyle
				},
				children: amountToCurrency(Math.abs(value))
			})
		})
	})] })] });
});
//#endregion
//#region src/components/mobile/transactions/TransactionEdit.tsx
function getFieldName(transactionId, field) {
	return `${field}-${transactionId}`;
}
function serializeTransaction(transaction, dateFormat) {
	const { date, amount } = transaction;
	return {
		...transaction,
		date: format(parseISO(date), dateFormat),
		amount: integerToAmount(amount || 0)
	};
}
function deserializeTransaction(transaction, originalTransaction, dateFormat) {
	const { amount, date: originalDate, ...realTransaction } = transaction;
	const dayMonth = getDayMonthRegex(dateFormat);
	let date = originalDate;
	if (dayMonth.test(date)) {
		const test = parse(date, getDayMonthFormat(dateFormat), /* @__PURE__ */ new Date());
		if (isValid(test)) date = dayFromDate(test);
		else date = null;
	} else {
		const test = parse(date, dateFormat, /* @__PURE__ */ new Date());
		if (test.getFullYear() > 2e3 && isValid(test)) date = dayFromDate(test);
		else date = null;
	}
	if (date == null) date = originalTransaction && originalTransaction.date || currentDay();
	return {
		...realTransaction,
		date,
		amount: amountToInteger(amount || 0)
	};
}
function lookupName(items, id) {
	if (!id) return null;
	return items.find((item) => item.id === id)?.name;
}
function Status({ status, isSplit = false }) {
	const { t } = useTranslation();
	let color;
	switch (status) {
		case "missed":
			color = theme.errorText;
			break;
		case "due":
			color = theme.warningText;
			break;
		case "upcoming":
			color = theme.tableHeaderText;
			break;
		default: return null;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		style: {
			fontSize: 11,
			color,
			fontStyle: "italic",
			textAlign: "left"
		},
		children: isSplit ? t("{{status}} (Split)", { status: titleFirst(getStatusLabel(status)) }) : titleFirst(getStatusLabel(status))
	});
}
function Footer({ transactions, isAdding, onAdd, onSave, onSplit, onAddSplit, onEmptySplitFound, editingField, onEditField }) {
	const [transaction, ...childTransactions] = transactions;
	const emptySplitTransaction = childTransactions.find((t) => t.amount === 0);
	const onClickRemainingSplit = () => {
		if (childTransactions.length === 0) onSplit(transaction.id);
		else if (!emptySplitTransaction) onAddSplit(transaction.id);
		else onEmptySplitFound?.(emptySplitTransaction.id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		"data-testid": "transaction-form-footer",
		style: {
			paddingLeft: styles.mobileEditingPadding,
			paddingRight: styles.mobileEditingPadding,
			paddingTop: 10,
			paddingBottom: "calc(10px + env(safe-area-inset-bottom))",
			backgroundColor: theme.tableHeaderBackground,
			borderTopWidth: 1,
			borderColor: theme.tableBorder
		},
		children: transaction.error?.type === "SplitTransactionError" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "primary",
			style: { height: styles.mobileMinHeight },
			isDisabled: !!editingField,
			onPress: onClickRemainingSplit,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgSplit, {
				width: 17,
				height: 17
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: {
					...styles.text,
					marginLeft: 6
				},
				children: !emptySplitTransaction ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
					"Add new split -",
					" ",
					{ amount: integerToCurrency(transaction.amount > 0 ? transaction.error.difference : -transaction.error.difference) },
					" ",
					"left"
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
					"Amount left:",
					" ",
					{ amount: integerToCurrency(transaction.amount > 0 ? transaction.error.difference : -transaction.error.difference) }
				] })
			})]
		}) : !transaction.account ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "primary",
			style: { height: styles.mobileMinHeight },
			isDisabled: !!editingField,
			onPress: () => onEditField(transaction.id, "account"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgPiggyBank, {
				width: 17,
				height: 17
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: {
					...styles.text,
					marginLeft: 6
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Select account" })
			})]
		}) : isAdding ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "primary",
			style: { height: styles.mobileMinHeight },
			isDisabled: !!editingField,
			onPress: onAdd,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgAdd, {
				width: 17,
				height: 17
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: {
					...styles.text,
					marginLeft: 5
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Add transaction" })
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "primary",
			style: { height: styles.mobileMinHeight },
			isDisabled: !!editingField,
			onPress: onSave,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgPencilWriteAlternate, {
				width: 16,
				height: 16
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: {
					...styles.text,
					marginLeft: 6
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save changes" })
			})]
		})
	});
}
var ChildTransactionEdit = (0, import_react.forwardRef)(({ transaction, amountFocused, amountSign, getCategory, getPayee, getTransferAccount, isOffBudget, isBudgetTransfer, onEditField, onUpdate, onDelete }, ref) => {
	const { t } = useTranslation();
	const { editingField, onRequestActiveEdit, onClearActiveEdit } = useSingleActiveEditForm();
	const [hideFraction, _] = useSyncedPref("hideFraction");
	const prettyPayee = getPrettyPayee({
		t,
		transaction,
		payee: getPayee(transaction),
		transferAccount: getTransferAccount(transaction)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		innerRef: ref,
		style: {
			backgroundColor: theme.tableBackground,
			borderColor: transaction.amount === 0 ? theme.tableBorderSelected : theme.tableBorder,
			borderWidth: "1px",
			borderRadius: "5px",
			padding: "5px",
			margin: "10px"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: { flexDirection: "row" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { flexBasis: "75%" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { title: t("Payee") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapField, {
						isDisabled: !!editingField && editingField !== getFieldName(transaction.id, "payee"),
						value: prettyPayee,
						onPress: () => onEditField(transaction.id, "payee"),
						"data-testid": `payee-field-${transaction.id}`
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { flexBasis: "25%" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						title: t("Amount"),
						style: { padding: 0 }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmountInput$1, {
						disabled: !!editingField && editingField !== getFieldName(transaction.id, "amount"),
						focused: amountFocused,
						value: amountToInteger(transaction.amount),
						zeroSign: amountSign,
						style: { marginRight: 8 },
						inputStyle: {
							...styles.smallText,
							textAlign: "right",
							minWidth: 0
						},
						onFocus: () => onRequestActiveEdit(getFieldName(transaction.id, "amount")),
						onUpdate: (value) => {
							const amount = integerToAmount(value);
							if (transaction.amount !== amount) onUpdate(transaction, "amount", amount);
							else onClearActiveEdit();
						},
						autoDecimals: String(hideFraction) !== "true"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { title: t("Category") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapField, {
				textStyle: { ...(isOffBudget || isBudgetTransfer(transaction)) && {
					fontStyle: "italic",
					color: theme.pageTextSubdued,
					fontWeight: 300
				} },
				value: getCategory(transaction, isOffBudget),
				isDisabled: !!editingField && editingField !== getFieldName(transaction.id, "category") || isOffBudget || isBudgetTransfer(transaction),
				onPress: () => onEditField(transaction.id, "category"),
				"data-testid": `category-field-${transaction.id}`
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { title: t("Notes") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
				disabled: !!editingField && editingField !== getFieldName(transaction.id, "notes"),
				defaultValue: transaction.notes,
				onFocus: () => onRequestActiveEdit(getFieldName(transaction.id, "notes")),
				onUpdate: (value) => onUpdate(transaction, "notes", value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: { alignItems: "center" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "bare",
					onPress: () => onDelete(transaction.id),
					style: {
						height: 40,
						borderWidth: 0,
						marginLeft: styles.mobileEditingPadding,
						marginRight: styles.mobileEditingPadding,
						marginTop: 10,
						backgroundColor: "transparent"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgTrash, {
						width: 17,
						height: 17,
						style: { color: theme.errorText }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							color: theme.errorText,
							marginLeft: 5,
							userSelect: "none"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Delete split" })
					})]
				})
			})
		]
	});
});
ChildTransactionEdit.displayName = "ChildTransactionEdit";
var TransactionEditInner = (0, import_react.memo)(function TransactionEditInner({ isAdding, accounts, categories, payees, dateFormat, transactions: unserializedTransactions, onSave, onUpdate, onDelete, onSplit, onAddSplit, shouldShowSaveLocation, onSaveLocation, onSelectNearestPayee, nearestPayee }) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showHiddenCategories] = useLocalPref("budget.showHiddenCategories");
	const [upcomingLength = "7"] = useSyncedPref("upcomingScheduledTransactionLength");
	const transactions = (0, import_react.useMemo)(() => unserializedTransactions.map((t) => serializeTransaction(t, dateFormat)) || [], [unserializedTransactions, dateFormat]);
	const { data: { grouped: categoryGroups } = { grouped: [] } } = useCategories();
	(0, import_react.useEffect)(() => {
		if (window.history.length === 1) {
			window.history.replaceState(null, "FinanceHub", "/");
			window.history.pushState(null, "Add Transaction", "/transactions/new");
		}
	}, []);
	const [transaction, ...childTransactions] = transactions;
	const { editingField, onRequestActiveEdit, onClearActiveEdit } = useSingleActiveEditForm();
	const [totalAmountFocused, setTotalAmountFocused] = (0, import_react.useState)(!isIOSAgent);
	const childTransactionElementRefMap = (0, import_react.useRef)({});
	const hasAccountChanged = (0, import_react.useRef)(false);
	const payeesById = (0, import_react.useMemo)(() => groupById(payees), [payees]);
	const accountsById = (0, import_react.useMemo)(() => groupById(accounts), [accounts]);
	const onTotalAmountEdit = (0, import_react.useCallback)(() => {
		onRequestActiveEdit?.(getFieldName(transaction.id, "amount"), () => {
			setTotalAmountFocused(true);
			return () => setTotalAmountFocused(false);
		});
	}, [onRequestActiveEdit, transaction.id]);
	const isInitialMount = useInitialMount();
	(0, import_react.useEffect)(() => {
		if (isInitialMount && isAdding && !isIOSAgent) onTotalAmountEdit();
	}, [
		isAdding,
		isInitialMount,
		onTotalAmountEdit
	]);
	const getAccount = (0, import_react.useCallback)((trans) => {
		return trans?.account ? accountsById?.[trans.account] : void 0;
	}, [accountsById]);
	const getPayee = (0, import_react.useCallback)((trans) => {
		return trans?.payee ? payeesById?.[trans.payee] : void 0;
	}, [payeesById]);
	const getTransferAccount = (0, import_react.useCallback)((trans) => {
		const payee = trans ? getPayee(trans) : null;
		return payee && payee?.transfer_acct ? accountsById?.[payee.transfer_acct] : void 0;
	}, [accountsById, getPayee]);
	const isBudgetTransfer = (0, import_react.useCallback)((trans) => {
		const transferAcct = trans ? getTransferAccount(trans) : null;
		return transferAcct ? !transferAcct.offbudget : false;
	}, [getTransferAccount]);
	const getCategory = (0, import_react.useCallback)((trans, isOffBudget) => {
		if (isOffBudget) return t("Off budget");
		else if (isBudgetTransfer(trans)) return t("Transfer");
		else return lookupName(categories, trans.category) ?? "";
	}, [
		categories,
		isBudgetTransfer,
		t
	]);
	const onSaveInner = (0, import_react.useCallback)(async () => {
		const [unserializedTransaction] = unserializedTransactions;
		const onConfirmSave = () => {
			let transactionsToSave = unserializedTransactions;
			if (isAdding) transactionsToSave = realizeTempTransactions(unserializedTransactions);
			onSave(transactionsToSave);
			navigate(-1);
		};
		const today = currentDay();
		const isFuture = unserializedTransaction.date > today;
		const isLinkedToSchedule = !!unserializedTransaction.schedule;
		if (isFuture && !isLinkedToSchedule) {
			const upcomingDays = getUpcomingDays(upcomingLength, today);
			const daysUntilTransaction = differenceInCalendarDays(unserializedTransaction.date, today);
			dispatch(pushModal({ modal: {
				name: "convert-to-schedule",
				options: {
					isBeyondWindow: daysUntilTransaction > upcomingDays,
					daysUntilTransaction,
					upcomingDays,
					onConfirm: async () => {
						if (!isAdding && unserializedTransaction.id && !unserializedTransaction.id.startsWith("temp")) await send("transaction-delete", { id: unserializedTransaction.id });
						await createSingleTimeScheduleFromTransaction(unserializedTransaction.is_parent ? {
							...unserializedTransaction,
							subtransactions: unserializedTransactions.filter((t) => t.is_child && t.parent_id === unserializedTransaction.id)
						} : unserializedTransaction);
						dispatch(addNotification({ notification: {
							type: "message",
							message: t("Schedule created successfully")
						} }));
						navigate(-1);
					},
					onCancel: onConfirmSave
				}
			} }));
			return;
		}
		if (unserializedTransactions.some((t) => t.reconciled)) dispatch(pushModal({ modal: {
			name: "confirm-transaction-edit",
			options: {
				onConfirm: onConfirmSave,
				confirmReason: "editReconciled"
			}
		} }));
		else {
			const transferIds = unserializedTransactions.map((t) => t.transfer_id).filter((id) => id != null);
			if (transferIds.length > 0) {
				const { data } = await aqlQuery(q("transactions").filter({
					id: { $oneof: transferIds },
					reconciled: true
				}).select("id"));
				if (data.length > 0) dispatch(pushModal({ modal: {
					name: "confirm-transaction-edit",
					options: {
						onConfirm: onConfirmSave,
						confirmReason: "batchEditWithReconciledTransfer"
					}
				} }));
				else onConfirmSave();
			} else onConfirmSave();
		}
	}, [
		isAdding,
		dispatch,
		navigate,
		onSave,
		unserializedTransactions,
		upcomingLength,
		t
	]);
	const onUpdateInner = (0, import_react.useCallback)(async (serializedTransaction, name, value) => {
		onUpdate({
			...serializedTransaction,
			[name]: value
		}, name);
		onClearActiveEdit();
		if (name === "account") hasAccountChanged.current = serializedTransaction.account !== value;
	}, [onClearActiveEdit, onUpdate]);
	const onTotalAmountUpdate = (0, import_react.useCallback)((value) => {
		if (transaction.amount !== value) onUpdateInner(transaction, "amount", value);
	}, [onUpdateInner, transaction]);
	const onEditFieldInner = (0, import_react.useCallback)((transactionId, name) => {
		onRequestActiveEdit?.(getFieldName(transaction.id, name), () => {
			const transactionToEdit = transactions.find((t) => t.id === transactionId);
			const unserializedTransaction = unserializedTransactions.find((t) => t.id === transactionId);
			if (!unserializedTransaction || !transactionToEdit) throw new Error(`Transaction ${transactionId} not found`);
			switch (name) {
				case "category":
					dispatch(pushModal({ modal: {
						name: "category-autocomplete",
						options: {
							categoryGroups,
							showHiddenCategories,
							month: monthFromDate(unserializedTransaction.date),
							onSelect: (categoryId) => {
								onUpdateInner(transactionToEdit, name, categoryId);
							},
							onClose: () => {
								onClearActiveEdit();
							}
						}
					} }));
					break;
				case "account":
					dispatch(pushModal({ modal: {
						name: "account-autocomplete",
						options: {
							onSelect: (accountId) => {
								onUpdateInner(transactionToEdit, name, accountId);
							},
							onClose: () => {
								onClearActiveEdit();
							}
						}
					} }));
					break;
				case "payee":
					dispatch(pushModal({ modal: {
						name: "payee-autocomplete",
						options: {
							onSelect: (payeeId) => {
								onUpdateInner(transactionToEdit, name, payeeId);
							},
							onClose: () => {
								onClearActiveEdit();
							}
						}
					} }));
					break;
				default:
					dispatch(pushModal({ modal: {
						name: "edit-field",
						options: {
							name,
							onSubmit: (name, value) => {
								if (typeof value === "object" && "useRegex" in value) onUpdateInner(transactionToEdit, name, applyFindReplace(transactionToEdit.notes, value.find, value.replace, value.useRegex));
								else onUpdateInner(transactionToEdit, name, value);
							},
							onClose: () => {
								onClearActiveEdit();
							}
						}
					} }));
					break;
			}
		});
	}, [
		categoryGroups,
		dispatch,
		onUpdateInner,
		onClearActiveEdit,
		onRequestActiveEdit,
		transaction.id,
		transactions,
		unserializedTransactions,
		showHiddenCategories
	]);
	const onDeleteInner = (0, import_react.useCallback)(async (id) => {
		const [parentTransaction] = unserializedTransactions;
		const targetTransaction = unserializedTransactions.find((t) => t.id === id) ?? parentTransaction;
		const onConfirmDelete = () => {
			dispatch(pushModal({ modal: {
				name: "confirm-delete",
				options: {
					message: t("Are you sure you want to delete the transaction?"),
					onConfirm: () => {
						onDelete(id);
						if (parentTransaction.id !== id) {
							onClearActiveEdit();
							return;
						}
						navigate(-1);
					}
				}
			} }));
		};
		if (targetTransaction.reconciled) dispatch(pushModal({ modal: {
			name: "confirm-transaction-edit",
			options: {
				onConfirm: onConfirmDelete,
				confirmReason: "deleteReconciled"
			}
		} }));
		else if (targetTransaction.transfer_id) {
			const { data } = await aqlQuery(q("transactions").filter({
				id: targetTransaction.transfer_id,
				reconciled: true
			}).select("id"));
			if (data.length > 0) dispatch(pushModal({ modal: {
				name: "confirm-transaction-edit",
				options: {
					onConfirm: onConfirmDelete,
					confirmReason: "batchDeleteWithReconciledTransfer"
				}
			} }));
			else onConfirmDelete();
		} else onConfirmDelete();
	}, [
		dispatch,
		navigate,
		onClearActiveEdit,
		onDelete,
		unserializedTransactions,
		t
	]);
	const scrollChildTransactionIntoView = (0, import_react.useCallback)((id) => {
		(childTransactionElementRefMap.current?.[id])?.scrollIntoView({ behavior: "smooth" });
	}, []);
	const onEmptySplitFound = (0, import_react.useCallback)((id) => {
		scrollChildTransactionIntoView(id);
	}, [scrollChildTransactionIntoView]);
	const childAmountSign = transaction.amount <= 0 ? "-" : "+";
	const account = getAccount(transaction);
	const isOffBudget = account ? !!account.offbudget : false;
	const title = getPrettyPayee({
		t,
		transaction,
		payee: getPayee(transaction),
		transferAccount: getTransferAccount(transaction)
	});
	const dateDefaultValue = dayFromDate(parse(transaction.date, dateFormat, /* @__PURE__ */ new Date()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: transaction.payee == null ? isAdding ? t("New Transaction") : t("Transaction") : title,
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, {})
		}),
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {
			transactions,
			isAdding,
			onAdd: onSaveInner,
			onSave: onSaveInner,
			onSplit,
			onAddSplit,
			onEmptySplitFound,
			editingField,
			onEditField: onEditFieldInner
		}),
		padding: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			"data-testid": "transaction-form",
			style: {
				flexShrink: 0,
				marginTop: 20,
				marginBottom: 20
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { alignItems: "center" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						title: t("Amount"),
						flush: true,
						style: { marginBottom: 0 }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusableAmountInput, {
						value: transaction.amount,
						zeroSign: "-",
						focused: totalAmountFocused,
						onFocus: onTotalAmountEdit,
						onBlur: () => onClearActiveEdit(),
						onUpdateAmount: onTotalAmountUpdate,
						focusedStyle: {
							width: "auto",
							padding: "5px",
							paddingLeft: "20px",
							paddingRight: "20px",
							minWidth: "100%"
						},
						textStyle: {
							...styles.veryLargeText,
							textAlign: "center"
						}
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { title: t("Payee") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapField, {
					textStyle: { ...transaction.is_parent && {
						fontStyle: "italic",
						fontWeight: 300
					} },
					value: title,
					isDisabled: !!editingField && editingField !== getFieldName(transaction.id, "payee"),
					onPress: () => onEditFieldInner(transaction.id, "payee"),
					"data-testid": "payee-field",
					alwaysShowRightContent: !!nearestPayee && !transaction.payee && !shouldShowSaveLocation,
					rightContent: shouldShowSaveLocation ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "bare",
						onPress: onSaveLocation,
						style: {
							backgroundColor: theme.buttonNormalBackground,
							border: `1px solid ${theme.buttonNormalBorder}`,
							color: theme.buttonNormalText,
							fontSize: "11px",
							padding: "4px 8px",
							borderRadius: 3,
							height: "auto",
							minHeight: "auto"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgLocation, {
							width: 10,
							height: 10,
							style: { marginLeft: 4 }
						})]
					}) : nearestPayee && !transaction.payee ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "bare",
						onPress: onSelectNearestPayee,
						style: {
							backgroundColor: theme.buttonNormalBackground,
							border: `1px solid ${theme.buttonNormalBorder}`,
							color: theme.buttonNormalText,
							fontSize: "11px",
							padding: "4px 8px",
							borderRadius: 3,
							height: "auto",
							minHeight: "auto"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Nearby" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgLocation, {
							width: 10,
							height: 10,
							style: { marginLeft: 4 }
						})]
					}) : void 0
				})] }),
				!transaction.is_parent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { title: t("Category") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapField, {
					style: { ...(isOffBudget || isBudgetTransfer(transaction)) && {
						fontStyle: "italic",
						color: theme.pageTextSubdued,
						fontWeight: 300
					} },
					value: getCategory(transaction, isOffBudget),
					isDisabled: !!editingField && editingField !== getFieldName(transaction.id, "category") || isOffBudget || isBudgetTransfer(transaction),
					onPress: () => onEditFieldInner(transaction.id, "category"),
					"data-testid": "category-field"
				})] }),
				childTransactions.map((childTrans, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChildTransactionEdit, {
					transaction: childTrans,
					amountFocused: arr.findIndex((c) => c.amount === 0) === i,
					amountSign: childAmountSign,
					ref: (r) => {
						childTransactionElementRefMap.current = {
							...childTransactionElementRefMap.current,
							[childTrans.id]: r
						};
					},
					isOffBudget,
					getCategory,
					getPayee,
					getTransferAccount,
					isBudgetTransfer,
					onUpdate: onUpdateInner,
					onEditField: onEditFieldInner,
					onDelete: onDeleteInner
				}, childTrans.id)),
				transaction.amount !== 0 && childTransactions.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: { alignItems: "center" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "bare",
						isDisabled: !!editingField,
						style: {
							height: 40,
							borderWidth: 0,
							marginLeft: styles.mobileEditingPadding,
							marginRight: styles.mobileEditingPadding,
							marginTop: 10,
							backgroundColor: "transparent"
						},
						onPress: () => onSplit(transaction.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgSplit, {
							width: 17,
							height: 17,
							style: { color: theme.formLabelText }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: {
								marginLeft: 5,
								userSelect: "none",
								color: theme.formLabelText
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Split" })
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { title: t("Account") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TapField, {
					isDisabled: !!editingField && editingField !== getFieldName(transaction.id, "account"),
					value: account?.name,
					onPress: () => onEditFieldInner(transaction.id, "account"),
					"data-testid": "account-field"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { flexDirection: "row" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { title: t("Date") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
							type: "date",
							disabled: !!editingField && editingField !== getFieldName(transaction.id, "date"),
							required: true,
							style: {
								color: theme.tableText,
								minWidth: "150px",
								appearance: "none"
							},
							defaultValue: dateDefaultValue,
							onBlur: () => onClearActiveEdit(),
							onFocus: () => onRequestActiveEdit(getFieldName(transaction.id, "date")),
							onChange: (event) => onUpdateInner(transaction, "date", format(parseISO(event.target.value), dateFormat))
						})]
					}), transaction.reconciled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: { alignItems: "center" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { title: t("Reconciled") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							id: "Reconciled",
							isOn: true,
							isDisabled: true
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: { alignItems: "center" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { title: t("Cleared") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleField, {
							id: "cleared",
							isOn: !!transaction.cleared,
							onToggle: (on) => onUpdateInner(transaction, "cleared", on)
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { title: t("Notes") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
					disabled: !!editingField && editingField !== getFieldName(transaction.id, "notes"),
					defaultValue: transaction.notes,
					onFocus: () => {
						onRequestActiveEdit(getFieldName(transaction.id, "notes"));
					},
					onBlur: () => onClearActiveEdit(),
					onChange: (event) => onUpdateInner(transaction, "notes", event.target.value)
				})] }),
				!isAdding && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: { alignItems: "center" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "bare",
						onPress: () => onDeleteInner(transaction.id),
						style: {
							height: 40,
							borderWidth: 0,
							marginLeft: styles.mobileEditingPadding,
							marginRight: styles.mobileEditingPadding,
							marginTop: 10,
							backgroundColor: "transparent"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgTrash, {
							width: 17,
							height: 17,
							style: { color: theme.errorText }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: {
								color: theme.errorText,
								marginLeft: 5,
								userSelect: "none"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Delete transaction" })
						})]
					})
				})
			]
		})
	});
});
function isTemporary(transaction) {
	return transaction.id.indexOf("temp") === 0;
}
function TransactionEditUnconnected({ categories, accounts, payees, lastTransaction, dateFormat }) {
	const { t } = useTranslation();
	const { transactionId } = useParams();
	const { state: locationState } = useLocation();
	const [searchParams] = useSearchParams();
	const dispatch = useDispatch();
	const updatePayeeLocationMutation = useSavePayeeLocationMutation();
	const navigate = useNavigate();
	const [transactions, setTransactions] = (0, import_react.useState)([]);
	const [fetchedTransactions, setFetchedTransactions] = (0, import_react.useState)([]);
	const isAdding = (0, import_react.useRef)(false);
	const isDeleted = (0, import_react.useRef)(false);
	const searchParamCategory = (0, import_react.useMemo)(() => categories.find((c) => c.name === searchParams.get("category"))?.id, [categories, searchParams]);
	const searchParamAccount = (0, import_react.useMemo)(() => accounts.find((a) => a.name === searchParams.get("account"))?.id, [accounts, searchParams]);
	const searchParamPayee = (0, import_react.useMemo)(() => payees.find((p) => p.name === searchParams.get("payee"))?.id, [payees, searchParams]);
	const locationAccess = useLocationPermission();
	const [shouldShowSaveLocation, setShouldShowSaveLocation] = (0, import_react.useState)(false);
	const { data: nearbyPayees = [] } = useNearbyPayees();
	const nearestPayee = nearbyPayees[0]?.payee ?? null;
	(0, import_react.useEffect)(() => {
		let unmounted = false;
		async function fetchTransaction() {
			const { data } = await aqlQuery(q("transactions").filter({ id: transactionId }).select("*").options({ splits: "grouped" }));
			if (!unmounted) {
				const fetchedTransactions = ungroupTransactions(data);
				setTransactions(fetchedTransactions);
				setFetchedTransactions(fetchedTransactions);
			}
		}
		if (transactionId !== "new") fetchTransaction();
		else isAdding.current = true;
		return () => {
			unmounted = true;
		};
	}, [transactionId]);
	(0, import_react.useEffect)(() => {
		if (!locationAccess) setShouldShowSaveLocation(false);
	}, [locationAccess]);
	(0, import_react.useEffect)(() => {
		if (isAdding.current) setTransactions([{
			id: "temp",
			date: (() => {
				const dateParam = searchParams.get("date") || "";
				if (!isNaN(Date.parse(dateParam))) return dateParam;
				return lastTransaction?.date || currentDay();
			})(),
			payee: searchParamPayee,
			account: searchParamAccount || locationState?.accountId || lastTransaction?.account || null,
			category: searchParamCategory || locationState?.categoryId || null,
			amount: -amountToInteger(parseFloat(searchParams.get("amount") || "") || 0),
			cleared: searchParams.get("cleared") === "true",
			notes: searchParams.get("notes") || ""
		}]);
	}, [
		locationState?.accountId,
		locationState?.categoryId,
		lastTransaction,
		searchParamAccount,
		searchParamCategory,
		searchParamPayee,
		searchParams
	]);
	const onUpdate = (0, import_react.useCallback)(async (serializedTransaction, updatedField) => {
		const newTransaction = { ...deserializeTransaction(serializedTransaction, null, dateFormat) };
		if (isTemporary(newTransaction)) {
			const diff = getChangedValues(newTransaction, await send("rules-run", { transaction: newTransaction }));
			if (diff) {
				Object.keys(diff).forEach((key) => {
					const field = key;
					if (newTransaction[field] == null || newTransaction[field] === "" || newTransaction[field] === 0 || newTransaction[field] === false || updatedField === "payee") newTransaction[field] = diff[field];
				});
				if (newTransaction.is_parent && diff.subtransactions !== void 0 && updatedField !== null) newTransaction.subtransactions = diff.subtransactions.map((st, idx) => ({
					...newTransaction.subtransactions?.[idx] || st,
					...st[updatedField] != null && { [updatedField]: st[updatedField] }
				}));
			}
		}
		const { data: newTransactions } = updateTransaction(transactions, newTransaction);
		setTransactions(newTransactions);
		if (updatedField === "payee") {
			setShouldShowSaveLocation(false);
			if (newTransaction.payee && locationAccess) {
				const payeeLocations = await locationService.getPayeeLocations(newTransaction.payee);
				if (payeeLocations.length === 0) setShouldShowSaveLocation(true);
				else {
					const currentPosition = await locationService.getCurrentPosition();
					if (!payeeLocations.some((loc) => calculateDistance(currentPosition, {
						latitude: loc.latitude,
						longitude: loc.longitude
					}) <= 500)) setShouldShowSaveLocation(true);
				}
			}
		}
	}, [
		dateFormat,
		transactions,
		locationAccess
	]);
	const onSave = (0, import_react.useCallback)(async (newTransactions) => {
		if (isDeleted.current) return;
		const changes = diffItems(fetchedTransactions || [], newTransactions);
		if (changes.added.length > 0 || changes.updated.length > 0 || changes.deleted.length) await send("transactions-batch-update", {
			added: changes.added,
			deleted: changes.deleted,
			updated: changes.updated
		});
		if (isAdding.current) dispatch(setLastTransaction({ transaction: newTransactions[0] }));
	}, [dispatch, fetchedTransactions]);
	const onDelete = (0, import_react.useCallback)(async (id) => {
		const changes = deleteTransaction(transactions, id);
		if (isAdding.current) isDeleted.current = true;
		else await send("transactions-batch-update", { deleted: changes.diff.deleted });
		setTransactions(changes.data);
	}, [transactions]);
	const onAddSplit = (0, import_react.useCallback)((id) => {
		setTransactions(addSplitTransaction(transactions, id).data);
	}, [transactions]);
	const onSplit = (0, import_react.useCallback)((id) => {
		setTransactions(splitTransaction(transactions, id, (parent) => [makeChild(parent), makeChild(parent)]).data);
	}, [transactions]);
	const onSaveLocation = (0, import_react.useCallback)(async () => {
		try {
			const [transaction] = transactions;
			if (transaction.payee) {
				await updatePayeeLocationMutation.mutateAsync(transaction.payee);
				setShouldShowSaveLocation(false);
			}
		} catch (error) {
			console.error("Failed to save location", { error });
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Failed to save location")
			} }));
		}
	}, [
		t,
		transactions,
		dispatch,
		updatePayeeLocationMutation
	]);
	const onSelectNearestPayee = (0, import_react.useCallback)(() => {
		const transaction = transactions[0];
		if (!nearestPayee || !transaction || transaction.payee) return;
		onUpdate({
			...serializeTransaction(transaction, dateFormat),
			payee: nearestPayee.id
		}, "payee");
	}, [
		transactions,
		nearestPayee,
		onUpdate,
		dateFormat
	]);
	if (accounts.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: t("New Transaction"),
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, {})
		}),
		padding: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				padding: 20,
				backgroundColor: theme.mobilePageBackground
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: {
					fontSize: 15,
					textAlign: "center",
					marginBottom: 20,
					lineHeight: "1.5em"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
					"To add a transaction, you need to",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "create an account first" }),
					". You can add an account from the accounts page."
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				onPress: () => {
					dispatch(pushModal({ modal: {
						name: "add-account",
						options: {}
					} }));
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Add account" })
			})]
		})
	});
	if (categories.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: t("New Transaction"),
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, {})
		}),
		padding: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				padding: 20,
				backgroundColor: theme.mobilePageBackground
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: {
					fontSize: 15,
					textAlign: "center",
					marginBottom: 20,
					lineHeight: "1.5em"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
					"To add a transaction, you need to",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "create a category first" }),
					". You can add categories from the budget page."
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				onPress: () => {
					navigate("/budget");
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Go to budget" })
			})]
		})
	});
	if (transactions.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flex: 1,
			backgroundColor: theme.pageBackground
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionEditInner, {
			transactions,
			isAdding: isAdding.current,
			categories,
			accounts,
			payees,
			dateFormat,
			onUpdate,
			onSave,
			onDelete,
			onSplit,
			onAddSplit,
			shouldShowSaveLocation,
			onSaveLocation,
			onSelectNearestPayee,
			nearestPayee: locationAccess ? nearestPayee : null
		})
	});
}
var TransactionEdit = (props) => {
	const { data: { list: categories } = { list: [] } } = useCategories();
	const { data: payees = [] } = usePayees();
	const lastTransaction = useSelector((state) => state.transactions.lastTransaction);
	const { data: accounts = [] } = useAccounts();
	const dateFormat = useDateFormat() || "MM/dd/yyyy";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SingleActiveEditFormProvider, {
		formName: "mobile-transaction",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionEditUnconnected, {
			...props,
			categories,
			payees,
			lastTransaction,
			accounts,
			dateFormat
		})
	});
};
//#endregion
export { $8a26561d2877236e$export$c24ed0104d07eab9 as C, $2f04cbc44ee30ce0$export$c826860796309d1b as D, $a5fa973c1850dd36$export$ccaea96c28e8b9e7 as E, $e9faafb641e167db$export$90fc3a17d93f704c as O, $d191a55c9702f145$export$8467354a121f1b9f as S, $cdc5a6778b766db2$export$a9d04c5684123369 as T, $e72dd72e1c76a225$export$ba9d38c0f1bf2b36 as _, useInitialMount as a, $2a25aae57d74318e$export$a05409b8bb224a5a as b, $eed445e0843c11d0$export$7c5906fe4f1f2af2 as c, $612b8eb6cb90e02d$export$62ed72bc21f6b8a6 as d, $612b8eb6cb90e02d$export$971707d8a129a1f7 as f, $e72dd72e1c76a225$export$2f645645f7bca764 as g, $612b8eb6cb90e02d$export$f55761759794cf55 as h, FocusableAmountInput as i, $eed445e0843c11d0$export$a11e76429ed99b4 as l, $612b8eb6cb90e02d$export$d1e8e3fbb7461f6 as m, TransactionEdit as n, MobileBackButton as o, $612b8eb6cb90e02d$export$d188a835a7bc5783 as p, lookupName as r, $eed445e0843c11d0$export$41f133550aa26f48 as s, Status as t, $eed445e0843c11d0$export$dca12b0bb56e4fc as u, $c5a24bc478652b5f$export$1005530eda016c13 as v, $325a3faab7a68acd$export$a16aca283550c30d as w, $880e95eb8b93ba9a$export$ecf600387e221c37 as x, $982254629710d113$export$b95089534ab7c1fd as y };

//# sourceMappingURL=TransactionEdit.CJ27DuIc.chunk.js.map