const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/FormulaEditor.BCcTZYRx.chunk.js","static/js/theme.LZxTPVqa.chunk.js","static/js/extends.opUJhDAp.chunk.js","static/js/client.COzYbjf1.chunk.js"])))=>i.map(i=>d[i]);
import { i as __commonJSMin, l as __toESM, n as require_jsx_runtime, r as require_react, t as theme } from "./theme.LZxTPVqa.chunk.js";
import { C as css, En as integerToAmount, G as pushModal, Jn as differenceInMonths, Jr as sendCatch, Kt as useDispatch, Vr as createSelector, Yn as endOfMonth, Zn as normalizeDates, b as styles, ci as t, er as toDate, fr as useQueryClient, gn as amountToInteger, ii as useTranslation, in as removeNotification, li as __vitePreload, lr as useQuery, oi as Trans, on as useAccounts, qr as send, sr as useMutation, ti as require_react_dom, tn as addNotification, tr as constructFrom, v as useFeatureFlag, y as useSyncedPref } from "./extends.opUJhDAp.chunk.js";
import { $o as SpaceBetween, A as DisplayPayeeProvider, An as Select, Ar as lastDayOfMonth, Br as subMonths, Ci as Menu, Cl as useSpring, Co as FormField, Cr as getWeekEnd, Ct as rehypeExternalLinks, Cu as isValid, Di as SvgViewHide, Dr as isAfter, Du as addMonths$1, Ei as SvgViewShow, Er as getYearStart, Eu as startOfWeek, Fn as Tooltip, Fr as prevMonth, Ga as SvgCheveronDown, Gr as useReports, Ha as SvgCheveronUp, Hi as SvgDownloadThickBottom, Hr as weekFromDate, I as usePayees, Ia as SvgCopy, Io as Input, Ir as prevYear, Ja as SvgChartBar, Jl as Routes, Jo as useResponsive, Jr as aqlQuery, Ka as SvgChart, Kr as dashboardQueries, Lr as rangeInclusive, Mr as months_exports, N as useMergedRefs, Na as SvgEquals, O as SplitsExpandedProvider, Oi as SvgUncheckAll, Ol as useSpreadsheet, Or as isBefore, Ou as addDays$1, Pa as SvgDotsHorizontalTriple, Pi as SvgPencil1, Pr as parseDate, Q as AlignedText, Qa as SvgCalculator, Ql as useSearchParams, Si as Popover, Sn as MOBILE_NAV_HEIGHT, So as Checkbox, St as remarkGfm, Su as startOfMonth, Ta as SvgListBullet, Ti as q, Tl as useNavigate, Tn as useDrag, Tr as getYearEnd, Tu as differenceInCalendarDays, Ul as View, Ur as weekRangeInclusive, Vr as subWeeks, Wo as SvgExpandArrow, Wr as yearRangeInclusive, Wt as require_prop_types, Xa as SvgCamera, Xl as useLocation, Ya as SvgChartArea, Yr as Cell$1, Za as SvgCalendar, Zl as useParams, _n as mapField, _r as getDay$1, _u as parse, ar as addWeeks, as as $de32f1b87079253c$export$3ddf2d174ce01153, bl as animated, bn as HyperFormula, bo as require_isObject, br as getMonth, bt as remarkBreaks, bu as getDay, ca as SvgCloseParenthesis, ci as PrivacyFilter, cn as ungroupTransactions, co as MobilePageHeader, cr as currentMonth, dr as dayFromDate, dt as useLocale, ei as Row, es as Link, eu as fe, fr as dayRangeInclusive, fs as $d3e0e05bdfcf66bd$export$a7fed597f4b8afd8, g as useDateFormat, gr as format, gu as subDays$1, hr as firstDayOfMonth, hu as parseISO, io as SvgArrowThickDown, ir as addMonths, is as $de32f1b87079253c$export$2e1e1122cf0cba88, ja as SvgExclamationSolid, jr as monthFromDate, ju as q$1, kn as useTransactions, li as usePrivacyMode, lo as Page, lr as currentWeek, lt as useContextMenu, ma as SvgTag, mi as SelectedProviderWithItems, mo as require_isSymbol, mr as differenceInCalendarMonths, n as FieldSelect, no as SvgArrowThickUp, ns as Button, nt as InitialFocus, nu as m, oa as SvgSum, oo as SvgArrowDown, or as currentDate, ot as useUndo, pa as SvgTrash, po as require_debounce, pt as SchedulesProvider, qa as SvgChartPie, qi as SvgCheckAll, ql as Route, qr as reportQueries, rr as addDays, rt as useCategories, s as GenericInput, sa as SvgOpenParenthesis, sr as currentDay, tl as clsx, ts as Text, uo as PageHeader, ur as currentYear, va as SvgQueue, wa as SvgList, wo as FormLabel, wt as Markdown, wu as addWeeks$1, xl as config, xo as useLocalPref, xr as getMonthEnd, xt as sequentialNewlinesPlugin, xu as format$1, y as TransactionList, ya as SvgQuestion, yi as useFormat, yl as Block, yt as markdownBaseStyles, yu as isAfter$1, zn as FinancialText, zr as subDays } from "./Value.D0gbasR7.chunk.js";
import { o as MobileBackButton } from "./TransactionEdit.CJ27DuIc.chunk.js";
import { t as TransactionList$1 } from "./TransactionList.BmRfHt1M.chunk.js";
import { a as require_toString, c as $216918bed6669f72$export$f5c9f3c2c4054eec, i as Warning, o as useDashboardPageWidgets, r as Information, s as useDashboardPages, t as useFormatList } from "./useFormatList.DsiHu7NW.chunk.js";
import { $ as arrayTooltipSearcher, $n as upperFirst, $t as selectChartDataWithIndexesIfNotInPanoramaPosition4, A as ActivePoints, An as getNormalizedStackId, At as selectTicksOfAxis, B as SetPolarLegendPayload, Bn as require_iteratee, Bt as getStackSeriesIdentifier, C as getTicks, Cn as DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, Cr as Paragraph, Ct as selectBaseAxis, D as rectWithCoords, Dn as getCateCoordinateOfBar, Dt as selectRealScaleType, E as removeLine, En as getBaseValueOfBar, Et as selectDomainFromUserPreference, F as Dots, Fn as truncateByDomain, Ft as selectXAxisSettingsNoDefaults, G as CartesianLabelListContextProvider, Gn as interpolate, Gt as selectBarCategoryGap, H as findAllByType, Hn as resolveDefaultProps, Ht as pickAxisType, I as SetCartesianGraphicalItem, In as isPositiveNumber, It as selectXAxisSize, J as PolarLabelListContextProvider, Jn as isNullish, Jt as selectRootMaxBarSize, K as LabelList, Kn as isNan, Kt as selectBarGap, L as SetPolarGraphicalItem, Ln as isWellBehavedNumber, Lt as selectYAxisSettings, M as addXAxis, Mn as getTooltipNameProp, Mt as selectUnfilteredCartesianItems, N as removeXAxis, Nn as getValueByDataKey, Nt as selectXAxisPosition, O as ChartDataContextProvider, On as getCateCoordinateOfLine, Ot as selectRenderableAxisSettings, P as replaceXAxis, Pn as isCategoricalAxis, Pt as selectXAxisSettings, Q as Tooltip$1, Qn as noop$1, Qt as selectChartDataWithIndexesIfNotInPanoramaPosition3, R as RegisterGraphicalItemId, Rn as useAppDispatch, Rt as combineCheckedDomain, S as defaultCartesianAxisProps, Sn as selectChartOffsetInternal, Sr as LoadingIndicator, St as selectAxisWithScale, T as addLine, Tn as getBandSizeOfAxis, Tt as selectDomainDefinition, U as isClipDot, Un as adaptEventsOfChild, Ut as getAxisTypeBasedOnLayout, V as SetTooltipEntrySettings, Vn as require_identity$1, Vt as pickAxisId, W as getClassNameFromUnknown, Wn as getPercentValue, Wt as DefaultZIndexes, X as CartesianLabelFromLabelProp, Xn as isNumber, Xt as selectChartDataAndAlwaysIgnoreIndexes, Y as CartesianLabelContextProvider, Yn as isNumOrStr, Yt as selectStackOffsetType, Z as Text$1, Zn as mathSign, Zt as selectChartDataSliceIgnoringIndexes, _ as selectYAxisIdFromGraphicalItemId, _n as useViewBox, _r as require_isArray, _t as implicitXAxis, a as CategoricalChart, an as JavascriptAnimate, ar as Surface, at as mouseLeaveItem, b as useNeedsClip, bn as useIsPanorama, br as require__getNative, bt as selectAxisPropsNeededForCartesianGridTicksGenerator, c as ReportChartProps, cn as propsAreEqual, cr as svgPropertiesNoEventsFromUnknown, ct as combineAppliedValues, d as initialEventSettingsState, dn as selectChartLayout, dr as require__baseIsEqual, dt as combineDisplayedData, en as Sector, er as roundTemplateLiteral, et as TooltipPortalContext, f as updatePolarOptions, fn as useCartesianChartLayout, fr as require_keys, ft as combineDomainOfAllAppliedNumericalValuesIncludingErrorValues, g as selectXAxisIdFromGraphicalItemId, gn as useOffsetInternal, gr as require_isArguments, gt as combineNumericalDomain, h as Area, hn as useChartWidth, hr as require__isIndex, ht as combineNiceTicks, i as CartesianChart, in as useAnimationId, ir as Layer, it as selectActiveTooltipIndex, j as usePlotArea, jn as getTicksOfAxis, jt as selectTicksOfGraphicalItem, k as SetComputedData, kn as getCoordinatesOfGrid, kt as selectStackGroups, l as ReportMainChartProps, ln as ReportChartMargin, lr as AppliedFilters, lt as combineAxisDomain, m as axisPropsAreEqual, mn as useChartLayout, mr as require_isLength, mt as combineGraphicalItemsSettings, n as useRechartsAnimation, nn as polarToCartesian, nr as withPath, nt as selectActiveTooltipDataKey, o as RechartsWrapper, on as getTransitionVal, or as svgPropertiesAndEvents, ot as setActiveClickItemIndex, p as YAxis, pn as useChartHeight, pr as require_isArrayLike, pt as combineGraphicalItemsData, q as LabelListFromLabelProp, qn as isNotNil, qt as selectRootBarSize, r as AreaChart, rn as Rectangle, rr as constant_default, rt as selectActiveTooltipGraphicalItemId, s as ReportEventSettings, sn as Curve, sr as svgPropertiesNoEvents, st as setActiveMouseOverItemIndex, t as getColorScale, tn as getMaxRadius, tr as require_get$1, tt as ZIndexLayer, u as RechartsStoreProvider, un as ReportChartSize, ur as FilterButton, ut as combineAxisDomainWithNiceTicks, v as getRadiusAndStrokeWidthFromDot, vn as ResponsiveContainer, vr as require__Stack, vt as itemAxisPredicate, w as useClipPathId, wn as DATA_ITEM_INDEX_ATTRIBUTE_NAME, wt as selectCartesianAxisSize, x as CartesianAxis, xn as selectAxisViewBox, xr as useResizeObserver, xt as selectAxisScale, y as GraphicalItemClipPath, yn as warn, yr as require__MapCache, yt as selectAllErrorBarSettings, z as SetLegendPayload, zn as useAppSelector, zt as isStacked } from "./chart-theme.DQgKPhOk.chunk.js";
//#region ../../node_modules/date-fns/differenceInDays.js
/**
* The {@link differenceInDays} function options.
*/
/**
* @name differenceInDays
* @category Day Helpers
* @summary Get the number of full days between the given dates.
*
* @description
* Get the number of full day periods between two dates. Fractional days are
* truncated towards zero.
*
* One "full day" is the distance between a local time in one day to the same
* local time on the next or previous day. A full day can sometimes be less than
* or more than 24 hours if a daylight savings change happens between two dates.
*
* To ignore DST and only measure exact 24-hour periods, use this instead:
* `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options
*
* @returns The number of full days according to the local timezone
*
* @example
* // How many full days are between
* // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
* const result = differenceInDays(
*   new Date(2012, 6, 2, 0, 0),
*   new Date(2011, 6, 2, 23, 0)
* )
* //=> 365
*
* @example
* // How many full days are between
* // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
* const result = differenceInDays(
*   new Date(2011, 6, 3, 0, 1),
*   new Date(2011, 6, 2, 23, 59)
* )
* //=> 0
*
* @example
* // How many full days are between
* // 1 March 2020 0:00 and 1 June 2020 0:00 ?
* // Note: because local time is used, the
* // result will always be 92 days, even in
* // time zones where DST starts and the
* // period has only 92*24-1 hours.
* const result = differenceInDays(
*   new Date(2020, 5, 1),
*   new Date(2020, 2, 1)
* )
* //=> 92
*/
function differenceInDays(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	const sign = compareLocalAsc(laterDate_, earlierDate_);
	const difference = Math.abs(differenceInCalendarDays(laterDate_, earlierDate_));
	laterDate_.setDate(laterDate_.getDate() - sign * difference);
	const result = sign * (difference - Number(compareLocalAsc(laterDate_, earlierDate_) === -sign));
	return result === 0 ? 0 : result;
}
function compareLocalAsc(laterDate, earlierDate) {
	const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	return diff;
}
//#endregion
//#region ../../node_modules/date-fns/getDate.js
/**
* The {@link getDate} function options.
*/
/**
* @name getDate
* @category Day Helpers
* @summary Get the day of the month of the given date.
*
* @description
* Get the day of the month of the given date.
*
* @param date - The given date
* @param options - An object with options.
*
* @returns The day of month
*
* @example
* // Which day of the month is 29 February 2012?
* const result = getDate(new Date(2012, 1, 29))
* //=> 29
*/
function getDate(date, options) {
	return toDate(date, options?.in).getDate();
}
//#endregion
//#region ../../node_modules/date-fns/getDaysInMonth.js
/**
* The {@link getDaysInMonth} function options.
*/
/**
* @name getDaysInMonth
* @category Month Helpers
* @summary Get the number of days in a month of the given date.
*
* @description
* Get the number of days in a month of the given date, considering the context if provided.
*
* @param date - The given date
* @param options - An object with options
*
* @returns The number of days in a month
*
* @example
* // How many days are in February 2000?
* const result = getDaysInMonth(new Date(2000, 1))
* //=> 29
*/
function getDaysInMonth(date, options) {
	const _date = toDate(date, options?.in);
	const year = _date.getFullYear();
	const monthIndex = _date.getMonth();
	const lastDayOfMonth = constructFrom(_date, 0);
	lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
	lastDayOfMonth.setHours(0, 0, 0, 0);
	return lastDayOfMonth.getDate();
}
//#endregion
//#region ../../node_modules/date-fns/isSameMonth.js
/**
* The {@link isSameMonth} function options.
*/
/**
* @name isSameMonth
* @category Month Helpers
* @summary Are the given dates in the same month (and year)?
*
* @description
* Are the given dates in the same month (and year)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same month (and year)
*
* @example
* // Are 2 September 2014 and 25 September 2014 in the same month?
* const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
* //=> true
*
* @example
* // Are 2 September 2014 and 25 September 2015 in the same month?
* const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
* //=> false
*/
function isSameMonth(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
//#endregion
//#region ../../node_modules/d3-shape/src/math.js
var cos = Math.cos;
var sin = Math.sin;
var sqrt = Math.sqrt;
var pi = Math.PI;
pi / 2;
var tau = 2 * pi;
//#endregion
//#region ../../node_modules/d3-shape/src/symbol/circle.js
var circle_default = { draw(context, size) {
	const r = sqrt(size / pi);
	context.moveTo(r, 0);
	context.arc(0, 0, r, 0, tau);
} };
//#endregion
//#region ../../node_modules/d3-shape/src/symbol/cross.js
var cross_default = { draw(context, size) {
	const r = sqrt(size / 5) / 2;
	context.moveTo(-3 * r, -r);
	context.lineTo(-r, -r);
	context.lineTo(-r, -3 * r);
	context.lineTo(r, -3 * r);
	context.lineTo(r, -r);
	context.lineTo(3 * r, -r);
	context.lineTo(3 * r, r);
	context.lineTo(r, r);
	context.lineTo(r, 3 * r);
	context.lineTo(-r, 3 * r);
	context.lineTo(-r, r);
	context.lineTo(-3 * r, r);
	context.closePath();
} };
//#endregion
//#region ../../node_modules/d3-shape/src/symbol/diamond.js
var tan30 = sqrt(1 / 3);
var tan30_2 = tan30 * 2;
var diamond_default = { draw(context, size) {
	const y = sqrt(size / tan30_2);
	const x = y * tan30;
	context.moveTo(0, -y);
	context.lineTo(x, 0);
	context.lineTo(0, y);
	context.lineTo(-x, 0);
	context.closePath();
} };
//#endregion
//#region ../../node_modules/d3-shape/src/symbol/square.js
var square_default = { draw(context, size) {
	const w = sqrt(size);
	const x = -w / 2;
	context.rect(x, x, w, w);
} };
//#endregion
//#region ../../node_modules/d3-shape/src/symbol/star.js
var ka = .8908130915292852;
var kr = sin(pi / 10) / sin(7 * pi / 10);
var kx = sin(tau / 10) * kr;
var ky = -cos(tau / 10) * kr;
var star_default = { draw(context, size) {
	const r = sqrt(size * ka);
	const x = kx * r;
	const y = ky * r;
	context.moveTo(0, -r);
	context.lineTo(x, y);
	for (let i = 1; i < 5; ++i) {
		const a = tau * i / 5;
		const c = cos(a);
		const s = sin(a);
		context.lineTo(s * r, -c * r);
		context.lineTo(c * x - s * y, s * x + c * y);
	}
	context.closePath();
} };
//#endregion
//#region ../../node_modules/d3-shape/src/symbol/triangle.js
var sqrt3 = sqrt(3);
var triangle_default = { draw(context, size) {
	const y = -sqrt(size / (sqrt3 * 3));
	context.moveTo(0, y * 2);
	context.lineTo(-sqrt3 * y, -y);
	context.lineTo(sqrt3 * y, -y);
	context.closePath();
} };
//#endregion
//#region ../../node_modules/d3-shape/src/symbol/wye.js
var c = -.5;
var s = sqrt(3) / 2;
var k = 1 / sqrt(12);
var a = (k / 2 + 1) * 3;
var wye_default = { draw(context, size) {
	const r = sqrt(size / a);
	const x0 = r / 2, y0 = r * k;
	const x1 = x0, y1 = r * k + r;
	const x2 = -x1, y2 = y1;
	context.moveTo(x0, y0);
	context.lineTo(x1, y1);
	context.lineTo(x2, y2);
	context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
	context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
	context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
	context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
	context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
	context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
	context.closePath();
} };
//#endregion
//#region ../../node_modules/d3-shape/src/symbol.js
function Symbol$1(type, size) {
	let context = null, path = withPath(symbol);
	type = typeof type === "function" ? type : constant_default(type || circle_default);
	size = typeof size === "function" ? size : constant_default(size === void 0 ? 64 : +size);
	function symbol() {
		let buffer;
		if (!context) context = buffer = path();
		type.apply(this, arguments).draw(context, +size.apply(this, arguments));
		if (buffer) return context = null, buffer + "" || null;
	}
	symbol.type = function(_) {
		return arguments.length ? (type = typeof _ === "function" ? _ : constant_default(_), symbol) : type;
	};
	symbol.size = function(_) {
		return arguments.length ? (size = typeof _ === "function" ? _ : constant_default(+_), symbol) : size;
	};
	symbol.context = function(_) {
		return arguments.length ? (context = _ == null ? null : _, symbol) : context;
	};
	return symbol;
}
//#endregion
//#region ../../node_modules/recharts/es6/shape/Symbols.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var _excluded$10 = [
	"type",
	"size",
	"sizeType"
];
function _extends$11() {
	return _extends$11 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$11.apply(null, arguments);
}
function ownKeys$13(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$13(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$13(Object(t), !0).forEach(function(r) {
			_defineProperty$13(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$13(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$13(e, r, t) {
	return (r = _toPropertyKey$13(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$13(t) {
	var i = _toPrimitive$13(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$13(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$10(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$10(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$10(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var symbolFactories = {
	symbolCircle: circle_default,
	symbolCross: cross_default,
	symbolDiamond: diamond_default,
	symbolSquare: square_default,
	symbolStar: star_default,
	symbolTriangle: triangle_default,
	symbolWye: wye_default
};
var RADIAN$1 = Math.PI / 180;
var getSymbolFactory = (type) => {
	return symbolFactories["symbol".concat(upperFirst(type))] || circle_default;
};
var calculateAreaSize = (size, sizeType, type) => {
	if (sizeType === "area") return size;
	switch (type) {
		case "cross": return 5 * size * size / 9;
		case "diamond": return .5 * size * size / Math.sqrt(3);
		case "square": return size * size;
		case "star":
			var angle = 18 * RADIAN$1;
			return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.tan(angle) ** 2);
		case "triangle": return Math.sqrt(3) * size * size / 4;
		case "wye": return (21 - 10 * Math.sqrt(3)) * size * size / 8;
		default: return Math.PI * size * size / 4;
	}
};
var registerSymbol = (key, factory) => {
	symbolFactories["symbol".concat(upperFirst(key))] = factory;
};
/**
* Renders a symbol from a set of predefined shapes.
*/
var Symbols = (_ref) => {
	var { type = "circle", size = 64, sizeType = "area" } = _ref;
	var props = _objectSpread$13(_objectSpread$13({}, _objectWithoutProperties$10(_ref, _excluded$10)), {}, {
		type,
		size,
		sizeType
	});
	var realType = "circle";
	if (typeof type === "string") realType = type;
	/**
	* Calculate the path of curve
	* @return {String} path
	*/
	var getPath = () => {
		var symbolFactory = getSymbolFactory(realType);
		var s = Symbol$1().type(symbolFactory).size(calculateAreaSize(size, sizeType, realType))();
		if (s === null) return;
		return s;
	};
	var { className, cx, cy } = props;
	var filteredProps = svgPropertiesAndEvents(props);
	if (isNumber(cx) && isNumber(cy) && isNumber(size)) return /* @__PURE__ */ import_react.createElement("path", _extends$11({}, filteredProps, {
		className: clsx("recharts-symbols", className),
		transform: "translate(".concat(cx, ", ").concat(cy, ")"),
		d: getPath()
	}));
	return null;
};
Symbols.registerSymbol = registerSymbol;
//#endregion
//#region ../../node_modules/recharts/es6/component/Cell.js
/**
* Cell component used to define colors and styles of chart elements.
*
* This component is now deprecated and will be removed in Recharts 4.0.
*
* Please use the `shape` prop or `content` prop on the respective chart components
* to customize the rendering of chart elements instead of using `Cell`.
*
* @see {@link https://recharts.github.io/en-US/guide/cell/ Guide: Migrate from Cell component to shape prop}
*
* @deprecated
* @consumes CellReader
*/
var Cell = (_props) => null;
Cell.displayName = "Cell";
//#endregion
//#region ../../node_modules/recharts/es6/state/selectors/polarSelectors.js
var selectUnfilteredPolarItems = (state) => state.graphicalItems.polarItems;
var selectPolarItemsSettings = createSelector([
	selectUnfilteredPolarItems,
	selectBaseAxis,
	createSelector([pickAxisType, pickAxisId], itemAxisPredicate)
], combineGraphicalItemsSettings);
var selectPolarDisplayedData = createSelector([createSelector([selectPolarItemsSettings], combineGraphicalItemsData), selectChartDataAndAlwaysIgnoreIndexes], combineDisplayedData);
var selectPolarAppliedValues = createSelector([
	selectPolarDisplayedData,
	selectBaseAxis,
	selectPolarItemsSettings
], combineAppliedValues);
createSelector([
	selectPolarDisplayedData,
	selectBaseAxis,
	selectPolarItemsSettings
], (data, axisSettings, items) => {
	if (items.length > 0) return data.flatMap((entry) => {
		return items.flatMap((item) => {
			var _axisSettings$dataKey;
			return {
				value: getValueByDataKey(entry, (_axisSettings$dataKey = axisSettings.dataKey) !== null && _axisSettings$dataKey !== void 0 ? _axisSettings$dataKey : item.dataKey),
				errorDomain: []
			};
		});
	}).filter(Boolean);
	if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.dataKey) != null) return data.map((item) => ({
		value: getValueByDataKey(item, axisSettings.dataKey),
		errorDomain: []
	}));
	return data.map((entry) => ({
		value: entry,
		errorDomain: []
	}));
});
var unsupportedInPolarChart = () => void 0;
var selectPolarAxisDomain = createSelector([
	selectBaseAxis,
	selectChartLayout,
	selectPolarDisplayedData,
	selectPolarAppliedValues,
	selectStackOffsetType,
	pickAxisType,
	createSelector([
		selectBaseAxis,
		selectDomainDefinition,
		selectDomainFromUserPreference,
		unsupportedInPolarChart,
		createSelector([
			selectPolarDisplayedData,
			selectBaseAxis,
			selectPolarItemsSettings,
			selectAllErrorBarSettings,
			pickAxisType,
			selectChartDataSliceIgnoringIndexes
		], combineDomainOfAllAppliedNumericalValuesIncludingErrorValues),
		unsupportedInPolarChart,
		selectChartLayout,
		pickAxisType
	], combineNumericalDomain)
], combineAxisDomain);
createSelector([selectRealScaleType, createSelector([
	selectBaseAxis,
	selectPolarAxisDomain,
	createSelector([
		selectPolarAxisDomain,
		selectRenderableAxisSettings,
		selectRealScaleType
	], combineNiceTicks),
	pickAxisType
], combineAxisDomainWithNiceTicks)], combineCheckedDomain);
//#endregion
//#region ../../node_modules/es-toolkit/dist/array/maxBy.js
var require_maxBy$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	function maxBy(items, getValue) {
		if (items.length === 0) return;
		let maxElement = items[0];
		let max = getValue(maxElement);
		for (let i = 1; i < items.length; i++) {
			const element = items[i];
			const value = getValue(element);
			if (value > max) {
				max = value;
				maxElement = element;
			}
		}
		return maxElement;
	}
	exports.maxBy = maxBy;
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/math/maxBy.js
var require_maxBy$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	var maxBy$1 = require_maxBy$2();
	var identity = require_identity$1();
	var iteratee = require_iteratee();
	function maxBy(items, iteratee$1) {
		if (items == null) return;
		return maxBy$1.maxBy(Array.from(items), iteratee.iteratee(iteratee$1 ?? identity.identity));
	}
	exports.maxBy = maxBy;
}));
//#endregion
//#region ../../node_modules/es-toolkit/compat/maxBy.js
var require_maxBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_maxBy$1().maxBy;
}));
//#endregion
//#region ../../node_modules/recharts/es6/state/selectors/pieSelectors.js
function ownKeys$12(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$12(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$12(Object(t), !0).forEach(function(r) {
			_defineProperty$12(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$12(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$12(e, r, t) {
	return (r = _toPropertyKey$12(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$12(t) {
	var i = _toPrimitive$12(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$12(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var pickId = (_state, id) => id;
var selectSynchronisedPieSettings = createSelector([selectUnfilteredPolarItems, pickId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "pie").find((item) => item.id === id));
var emptyArray = [];
var pickCells$1 = (_state, _id, cells) => {
	if ((cells === null || cells === void 0 ? void 0 : cells.length) === 0) return emptyArray;
	return cells;
};
var selectDisplayedData = createSelector([
	selectChartDataAndAlwaysIgnoreIndexes,
	selectSynchronisedPieSettings,
	pickCells$1
], (_ref, pieSettings, cells) => {
	var { chartData } = _ref;
	if (pieSettings == null) return;
	var displayedData;
	if ((pieSettings === null || pieSettings === void 0 ? void 0 : pieSettings.data) != null && pieSettings.data.length > 0) displayedData = pieSettings.data;
	else displayedData = chartData;
	if ((!displayedData || !displayedData.length) && cells != null) displayedData = cells.map((cell) => _objectSpread$12(_objectSpread$12({}, pieSettings.presentationProps), cell.props));
	if (displayedData == null) return;
	return displayedData;
});
var selectPieLegend = createSelector([
	selectDisplayedData,
	selectSynchronisedPieSettings,
	pickCells$1
], (displayedData, pieSettings, cells) => {
	if (displayedData == null || pieSettings == null) return;
	return displayedData.map((entry, i) => {
		var _cells$i;
		var name = getValueByDataKey(entry, pieSettings.nameKey, pieSettings.name);
		var color;
		if (cells !== null && cells !== void 0 && (_cells$i = cells[i]) !== null && _cells$i !== void 0 && (_cells$i = _cells$i.props) !== null && _cells$i !== void 0 && _cells$i.fill) color = cells[i].props.fill;
		else if (typeof entry === "object" && entry != null && "fill" in entry) color = entry.fill;
		else color = pieSettings.fill;
		return {
			value: getTooltipNameProp(name, pieSettings.dataKey),
			color,
			payload: entry,
			type: pieSettings.legendType
		};
	});
});
var selectPieSectors = createSelector([
	selectDisplayedData,
	selectSynchronisedPieSettings,
	pickCells$1,
	selectChartOffsetInternal
], (displayedData, pieSettings, cells, offset) => {
	if (pieSettings == null || displayedData == null) return;
	return computePieSectors({
		offset,
		pieSettings,
		displayedData,
		cells
	});
});
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/predicate/isPlainObject.js
var require_isPlainObject$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	function isPlainObject(object) {
		if (typeof object !== "object") return false;
		if (object == null) return false;
		if (Object.getPrototypeOf(object) === null) return true;
		if (Object.prototype.toString.call(object) !== "[object Object]") {
			const tag = object[Symbol.toStringTag];
			if (tag == null) return false;
			if (!Object.getOwnPropertyDescriptor(object, Symbol.toStringTag)?.writable) return false;
			return object.toString() === `[object ${tag}]`;
		}
		let proto = object;
		while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);
		return Object.getPrototypeOf(object) === proto;
	}
	exports.isPlainObject = isPlainObject;
}));
//#endregion
//#region ../../node_modules/es-toolkit/compat/isPlainObject.js
var require_isPlainObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_isPlainObject$1().isPlainObject;
}));
//#endregion
//#region ../../node_modules/recharts/es6/shape/Trapezoid.js
/**
* @fileOverview Rectangle
*/
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function ownKeys$11(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$11(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$11(Object(t), !0).forEach(function(r) {
			_defineProperty$11(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$11(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$11(e, r, t) {
	return (r = _toPropertyKey$11(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$11(t) {
	var i = _toPrimitive$11(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$11(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends$10() {
	return _extends$10 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$10.apply(null, arguments);
}
function _taggedTemplateLiteral(e, t) {
	return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var getTrapezoidPath = (x, y, upperWidth, lowerWidth, height) => {
	var widthGap = upperWidth - lowerWidth;
	var path = roundTemplateLiteral(_templateObject || (_templateObject = _taggedTemplateLiteral([
		"M ",
		",",
		""
	])), x, y);
	path += roundTemplateLiteral(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([
		"L ",
		",",
		""
	])), x + upperWidth, y);
	path += roundTemplateLiteral(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([
		"L ",
		",",
		""
	])), x + upperWidth - widthGap / 2, y + height);
	path += roundTemplateLiteral(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([
		"L ",
		",",
		""
	])), x + upperWidth - widthGap / 2 - lowerWidth, y + height);
	path += roundTemplateLiteral(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([
		"L ",
		",",
		" Z"
	])), x, y);
	return path;
};
var defaultTrapezoidProps = {
	x: 0,
	y: 0,
	upperWidth: 0,
	lowerWidth: 0,
	height: 0,
	isUpdateAnimationActive: false,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease"
};
var Trapezoid = (outsideProps) => {
	var trapezoidProps = resolveDefaultProps(outsideProps, defaultTrapezoidProps);
	var { x, y, upperWidth, lowerWidth, height, className } = trapezoidProps;
	var { animationEasing, animationDuration, animationBegin, isUpdateAnimationActive } = trapezoidProps;
	var pathRef = (0, import_react.useRef)(null);
	var [totalLength, setTotalLength] = (0, import_react.useState)(-1);
	var prevUpperWidthRef = (0, import_react.useRef)(upperWidth);
	var prevLowerWidthRef = (0, import_react.useRef)(lowerWidth);
	var prevHeightRef = (0, import_react.useRef)(height);
	var prevXRef = (0, import_react.useRef)(x);
	var prevYRef = (0, import_react.useRef)(y);
	var animationId = useAnimationId(outsideProps, "trapezoid-");
	(0, import_react.useEffect)(() => {
		if (pathRef.current && pathRef.current.getTotalLength) try {
			var pathTotalLength = pathRef.current.getTotalLength();
			if (pathTotalLength) setTotalLength(pathTotalLength);
		} catch (_unused) {}
	}, []);
	if (x !== +x || y !== +y || upperWidth !== +upperWidth || lowerWidth !== +lowerWidth || height !== +height || upperWidth === 0 && lowerWidth === 0 || height === 0) return null;
	var layerClass = clsx("recharts-trapezoid", className);
	if (!isUpdateAnimationActive) return /* @__PURE__ */ import_react.createElement("g", null, /* @__PURE__ */ import_react.createElement("path", _extends$10({}, svgPropertiesAndEvents(trapezoidProps), {
		className: layerClass,
		d: getTrapezoidPath(x, y, upperWidth, lowerWidth, height)
	})));
	var prevUpperWidth = prevUpperWidthRef.current;
	var prevLowerWidth = prevLowerWidthRef.current;
	var prevHeight = prevHeightRef.current;
	var prevX = prevXRef.current;
	var prevY = prevYRef.current;
	var from = "0px ".concat(totalLength === -1 ? 1 : totalLength, "px");
	var to = "".concat(totalLength, "px ").concat(totalLength, "px");
	var transition = getTransitionVal(["strokeDasharray"], animationDuration, animationEasing);
	return /* @__PURE__ */ import_react.createElement(JavascriptAnimate, {
		animationId,
		key: animationId,
		canBegin: totalLength > 0,
		duration: animationDuration,
		easing: animationEasing,
		isActive: isUpdateAnimationActive,
		begin: animationBegin
	}, (t) => {
		var currUpperWidth = interpolate(prevUpperWidth, upperWidth, t);
		var currLowerWidth = interpolate(prevLowerWidth, lowerWidth, t);
		var currHeight = interpolate(prevHeight, height, t);
		var currX = interpolate(prevX, x, t);
		var currY = interpolate(prevY, y, t);
		if (pathRef.current) {
			prevUpperWidthRef.current = currUpperWidth;
			prevLowerWidthRef.current = currLowerWidth;
			prevHeightRef.current = currHeight;
			prevXRef.current = currX;
			prevYRef.current = currY;
		}
		var animationStyle = t > 0 ? {
			transition,
			strokeDasharray: to
		} : { strokeDasharray: from };
		return /* @__PURE__ */ import_react.createElement("path", _extends$10({}, svgPropertiesAndEvents(trapezoidProps), {
			className: layerClass,
			d: getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight),
			ref: pathRef,
			style: _objectSpread$11(_objectSpread$11({}, animationStyle), trapezoidProps.style)
		}));
	});
};
//#endregion
//#region ../../node_modules/recharts/es6/util/ActiveShapeUtils.js
var import_isPlainObject = /* @__PURE__ */ __toESM(require_isPlainObject());
var _excluded$9 = [
	"option",
	"shapeType",
	"activeClassName",
	"inActiveClassName"
];
function _objectWithoutProperties$9(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$9(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$9(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function ownKeys$10(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$10(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$10(Object(t), !0).forEach(function(r) {
			_defineProperty$10(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$10(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$10(e, r, t) {
	return (r = _toPropertyKey$10(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$10(t) {
	var i = _toPrimitive$10(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$10(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/**
* This is an abstraction for rendering a user defined prop for a customized shape in several forms.
*
* <Shape /> is the root and will handle taking in:
*  - an object of svg properties
*  - a boolean
*  - a render prop(inline function that returns jsx)
*  - a React element
*
* <ShapeSelector /> is a subcomponent of <Shape /> and used to match a component
* to the value of props.shapeType that is passed to the root.
*
*/
function defaultPropTransformer(option, props) {
	return _objectSpread$10(_objectSpread$10({}, props), option);
}
function isSymbolsProps(shapeType, _elementProps) {
	return shapeType === "symbols";
}
function ShapeSelector(_ref) {
	var { shapeType, elementProps } = _ref;
	switch (shapeType) {
		case "rectangle": return /* @__PURE__ */ import_react.createElement(Rectangle, elementProps);
		case "trapezoid": return /* @__PURE__ */ import_react.createElement(Trapezoid, elementProps);
		case "sector": return /* @__PURE__ */ import_react.createElement(Sector, elementProps);
		case "symbols":
			if (isSymbolsProps(shapeType, elementProps)) return /* @__PURE__ */ import_react.createElement(Symbols, elementProps);
			break;
		case "curve": return /* @__PURE__ */ import_react.createElement(Curve, elementProps);
		default: return null;
	}
}
function getPropsFromShapeOption(option) {
	if (/* @__PURE__ */ (0, import_react.isValidElement)(option)) return option.props;
	return option;
}
function Shape(_ref2) {
	var { option, shapeType, activeClassName = "recharts-active-shape", inActiveClassName = "recharts-shape" } = _ref2, props = _objectWithoutProperties$9(_ref2, _excluded$9);
	var shape;
	if (/* @__PURE__ */ (0, import_react.isValidElement)(option)) shape = /* @__PURE__ */ (0, import_react.cloneElement)(option, _objectSpread$10(_objectSpread$10({}, props), getPropsFromShapeOption(option)));
	else if (typeof option === "function") shape = option(props, props.index);
	else if ((0, import_isPlainObject.default)(option) && typeof option !== "boolean") {
		var nextProps = defaultPropTransformer(option, props);
		shape = /* @__PURE__ */ import_react.createElement(ShapeSelector, {
			shapeType,
			elementProps: nextProps
		});
	} else {
		var elementProps = props;
		shape = /* @__PURE__ */ import_react.createElement(ShapeSelector, {
			shapeType,
			elementProps
		});
	}
	if (props.isActive) return /* @__PURE__ */ import_react.createElement(Layer, { className: activeClassName }, shape);
	return /* @__PURE__ */ import_react.createElement(Layer, { className: inActiveClassName }, shape);
}
//#endregion
//#region ../../node_modules/recharts/es6/context/tooltipContext.js
/**
* Some graphical items choose to provide more information to the tooltip
* and some do not.
*/
var useMouseEnterItemDispatch = (onMouseEnterFromProps, dataKey, graphicalItemId) => {
	var dispatch = useAppDispatch();
	return (data, index) => (event) => {
		onMouseEnterFromProps === null || onMouseEnterFromProps === void 0 || onMouseEnterFromProps(data, index, event);
		dispatch(setActiveMouseOverItemIndex({
			activeIndex: String(index),
			activeDataKey: dataKey,
			activeCoordinate: data.tooltipPosition,
			activeGraphicalItemId: graphicalItemId
		}));
	};
};
var useMouseLeaveItemDispatch = (onMouseLeaveFromProps) => {
	var dispatch = useAppDispatch();
	return (data, index) => (event) => {
		onMouseLeaveFromProps === null || onMouseLeaveFromProps === void 0 || onMouseLeaveFromProps(data, index, event);
		dispatch(mouseLeaveItem());
	};
};
var useMouseClickItemDispatch = (onMouseClickFromProps, dataKey, graphicalItemId) => {
	var dispatch = useAppDispatch();
	return (data, index) => (event) => {
		onMouseClickFromProps === null || onMouseClickFromProps === void 0 || onMouseClickFromProps(data, index, event);
		dispatch(setActiveClickItemIndex({
			activeIndex: String(index),
			activeDataKey: dataKey,
			activeCoordinate: data.tooltipPosition,
			activeGraphicalItemId: graphicalItemId
		}));
	};
};
//#endregion
//#region ../../node_modules/recharts/es6/polar/Pie.js
var import_get = /* @__PURE__ */ __toESM(require_get$1());
var _excluded$8 = ["key"], _excluded2$5 = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], _excluded3$4 = ["id"], _excluded4$2 = ["id"];
function _extends$9() {
	return _extends$9 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$9.apply(null, arguments);
}
function _objectWithoutProperties$8(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$8(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$8(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function ownKeys$9(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$9(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$9(Object(t), !0).forEach(function(r) {
			_defineProperty$9(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$9(e, r, t) {
	return (r = _toPropertyKey$9(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$9(t) {
	var i = _toPrimitive$9(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$9(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/**
* The `label` prop in Pie accepts a variety of alternatives.
*/
/**
* We spread the data object into the sector data item,
* so we can't really know what is going to be inside.
*
* This type represents our best effort, but it all depends on the input data
* and what is inside of it.
*
* https://github.com/recharts/recharts/issues/6380
* https://github.com/recharts/recharts/discussions/6375
*/
/**
* Internal props, combination of external props + defaultProps + private Recharts state
*/
function SetPiePayloadLegend(props) {
	var cells = (0, import_react.useMemo)(() => findAllByType(props.children, Cell), [props.children]);
	var legendPayload = useAppSelector((state) => selectPieLegend(state, props.id, cells));
	if (legendPayload == null) return null;
	return /* @__PURE__ */ import_react.createElement(SetPolarLegendPayload, { legendPayload });
}
function getActiveShapeFill(activeShape) {
	if (activeShape == null || typeof activeShape === "boolean" || typeof activeShape === "function") return;
	if (/* @__PURE__ */ import_react.isValidElement(activeShape)) {
		var _activeShape$props;
		var _fill = (_activeShape$props = activeShape.props) === null || _activeShape$props === void 0 ? void 0 : _activeShape$props.fill;
		return typeof _fill === "string" ? _fill : void 0;
	}
	var { fill } = activeShape;
	return typeof fill === "string" ? fill : void 0;
}
var SetPieTooltipEntrySettings = /* @__PURE__ */ import_react.memo((_ref) => {
	var { dataKey, nameKey, sectors, stroke, strokeWidth, fill, name, hide, tooltipType, id, activeShape } = _ref;
	var activeShapeFill = getActiveShapeFill(activeShape);
	var tooltipEntrySettings = {
		dataDefinedOnItem: sectors.map((sector) => {
			var sectorTooltipPayload = sector.tooltipPayload;
			if (activeShapeFill == null || sectorTooltipPayload == null) return sectorTooltipPayload;
			return sectorTooltipPayload.map((item) => _objectSpread$9(_objectSpread$9({}, item), {}, {
				color: activeShapeFill,
				fill: activeShapeFill
			}));
		}),
		getPosition: (index) => {
			var _sectors$Number;
			return (_sectors$Number = sectors[Number(index)]) === null || _sectors$Number === void 0 ? void 0 : _sectors$Number.tooltipPosition;
		},
		settings: {
			stroke,
			strokeWidth,
			fill,
			dataKey,
			nameKey,
			name: getTooltipNameProp(name, dataKey),
			hide,
			type: tooltipType,
			color: fill,
			unit: "",
			graphicalItemId: id
		}
	};
	return /* @__PURE__ */ import_react.createElement(SetTooltipEntrySettings, { tooltipEntrySettings });
});
var getTextAnchor = (x, cx) => {
	if (x > cx) return "start";
	if (x < cx) return "end";
	return "middle";
};
var getOuterRadius = (dataPoint, outerRadius, maxPieRadius) => {
	if (typeof outerRadius === "function") return getPercentValue(outerRadius(dataPoint), maxPieRadius, maxPieRadius * .8);
	return getPercentValue(outerRadius, maxPieRadius, maxPieRadius * .8);
};
var parseCoordinateOfPie = (pieSettings, offset, dataPoint) => {
	var { top, left, width, height } = offset;
	var maxPieRadius = getMaxRadius(width, height);
	return {
		cx: left + getPercentValue(pieSettings.cx, width, width / 2),
		cy: top + getPercentValue(pieSettings.cy, height, height / 2),
		innerRadius: getPercentValue(pieSettings.innerRadius, maxPieRadius, 0),
		outerRadius: getOuterRadius(dataPoint, pieSettings.outerRadius, maxPieRadius),
		maxRadius: pieSettings.maxRadius || Math.sqrt(width * width + height * height) / 2
	};
};
var parseDeltaAngle = (startAngle, endAngle) => {
	return mathSign(endAngle - startAngle) * Math.min(Math.abs(endAngle - startAngle), 360);
};
var renderLabelLineItem = (option, props) => {
	if (/* @__PURE__ */ import_react.isValidElement(option)) return /* @__PURE__ */ import_react.cloneElement(option, props);
	if (typeof option === "function") return option(props);
	var className = clsx("recharts-pie-label-line", typeof option !== "boolean" ? option.className : "");
	var { key } = props, otherProps = _objectWithoutProperties$8(props, _excluded$8);
	return /* @__PURE__ */ import_react.createElement(Curve, _extends$9({}, otherProps, {
		type: "linear",
		className
	}));
};
var renderLabelItem = (option, props, value) => {
	if (/* @__PURE__ */ import_react.isValidElement(option)) return /* @__PURE__ */ import_react.cloneElement(option, props);
	var label = value;
	if (typeof option === "function") {
		label = option(props);
		if (/* @__PURE__ */ import_react.isValidElement(label)) return label;
	}
	var className = clsx("recharts-pie-label-text", getClassNameFromUnknown(option));
	return /* @__PURE__ */ import_react.createElement(Text$1, _extends$9({}, props, {
		alignmentBaseline: "middle",
		className
	}), label);
};
function PieLabels(_ref2) {
	var { sectors, props, showLabels } = _ref2;
	var { label, labelLine, dataKey } = props;
	if (!showLabels || !label || !sectors) return null;
	var pieProps = svgPropertiesNoEvents(props);
	var customLabelProps = svgPropertiesNoEventsFromUnknown(label);
	var customLabelLineProps = svgPropertiesNoEventsFromUnknown(labelLine);
	var offsetRadius = typeof label === "object" && "offsetRadius" in label && typeof label.offsetRadius === "number" && label.offsetRadius || 20;
	var labels = sectors.map((entry, i) => {
		var midAngle = (entry.startAngle + entry.endAngle) / 2;
		var endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
		var labelProps = _objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9({}, pieProps), entry), {}, { stroke: "none" }, customLabelProps), {}, {
			index: i,
			textAnchor: getTextAnchor(endPoint.x, entry.cx)
		}, endPoint);
		var lineProps = _objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9({}, pieProps), entry), {}, {
			fill: "none",
			stroke: entry.fill
		}, customLabelLineProps), {}, {
			index: i,
			points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
			key: "line"
		});
		return /* @__PURE__ */ import_react.createElement(ZIndexLayer, {
			zIndex: DefaultZIndexes.label,
			key: "label-".concat(entry.startAngle, "-").concat(entry.endAngle, "-").concat(entry.midAngle, "-").concat(i)
		}, /* @__PURE__ */ import_react.createElement(Layer, null, labelLine && renderLabelLineItem(labelLine, lineProps), renderLabelItem(label, labelProps, getValueByDataKey(entry, dataKey))));
	});
	return /* @__PURE__ */ import_react.createElement(Layer, { className: "recharts-pie-labels" }, labels);
}
function PieLabelList(_ref3) {
	var { sectors, props, showLabels } = _ref3;
	var { label } = props;
	if (typeof label === "object" && label != null && "position" in label) return /* @__PURE__ */ import_react.createElement(LabelListFromLabelProp, { label });
	return /* @__PURE__ */ import_react.createElement(PieLabels, {
		sectors,
		props,
		showLabels
	});
}
function PieSectors(props) {
	var { sectors, activeShape, inactiveShape: inactiveShapeProp, allOtherPieProps, shape, id } = props;
	var activeIndex = useAppSelector(selectActiveTooltipIndex);
	var activeDataKey = useAppSelector(selectActiveTooltipDataKey);
	var activeGraphicalItemId = useAppSelector(selectActiveTooltipGraphicalItemId);
	var { onMouseEnter: onMouseEnterFromProps, onClick: onItemClickFromProps, onMouseLeave: onMouseLeaveFromProps } = allOtherPieProps, restOfAllOtherProps = _objectWithoutProperties$8(allOtherPieProps, _excluded2$5);
	var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherPieProps.dataKey, id);
	var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
	var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherPieProps.dataKey, id);
	if (sectors == null || sectors.length === 0) return null;
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, sectors.map((entry, i) => {
		if ((entry === null || entry === void 0 ? void 0 : entry.startAngle) === 0 && (entry === null || entry === void 0 ? void 0 : entry.endAngle) === 0 && sectors.length !== 1) return null;
		var graphicalItemMatches = activeGraphicalItemId == null || activeGraphicalItemId === id;
		var isActive = String(i) === activeIndex && (activeDataKey == null || allOtherPieProps.dataKey === activeDataKey) && graphicalItemMatches;
		var sectorOptions = activeShape && isActive ? activeShape : activeIndex ? inactiveShapeProp : null;
		var sectorProps = _objectSpread$9(_objectSpread$9({}, entry), {}, {
			stroke: entry.stroke,
			tabIndex: -1,
			[DATA_ITEM_INDEX_ATTRIBUTE_NAME]: i,
			[DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: id
		});
		return /* @__PURE__ */ import_react.createElement(Layer, _extends$9({
			key: "sector-".concat(entry === null || entry === void 0 ? void 0 : entry.startAngle, "-").concat(entry === null || entry === void 0 ? void 0 : entry.endAngle, "-").concat(entry.midAngle, "-").concat(i),
			tabIndex: -1,
			className: "recharts-pie-sector"
		}, adaptEventsOfChild(restOfAllOtherProps, entry, i), {
			onMouseEnter: onMouseEnterFromContext(entry, i),
			onMouseLeave: onMouseLeaveFromContext(entry, i),
			onClick: onClickFromContext(entry, i)
		}), /* @__PURE__ */ import_react.createElement(Shape, _extends$9({
			option: shape !== null && shape !== void 0 ? shape : sectorOptions,
			index: i,
			shapeType: "sector",
			isActive
		}, sectorProps)));
	}));
}
function computePieSectors(_ref4) {
	var _pieSettings$paddingA;
	var { pieSettings, displayedData, cells, offset } = _ref4;
	var { cornerRadius, startAngle, endAngle, dataKey, nameKey, tooltipType } = pieSettings;
	var minAngle = Math.abs(pieSettings.minAngle);
	var deltaAngle = parseDeltaAngle(startAngle, endAngle);
	var absDeltaAngle = Math.abs(deltaAngle);
	var paddingAngle = displayedData.length <= 1 ? 0 : (_pieSettings$paddingA = pieSettings.paddingAngle) !== null && _pieSettings$paddingA !== void 0 ? _pieSettings$paddingA : 0;
	var notZeroItemCount = displayedData.filter((entry) => getValueByDataKey(entry, dataKey, 0) !== 0).length;
	var totalPaddingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
	var sum = displayedData.reduce((result, entry) => {
		var val = getValueByDataKey(entry, dataKey, 0);
		return result + (isNumber(val) ? val : 0);
	}, 0);
	var effectiveMinAngle = minAngle > 0 && sum > 0 && displayedData.some((entry) => {
		var val = getValueByDataKey(entry, dataKey, 0);
		var percent = (isNumber(val) ? val : 0) / sum;
		return val !== 0 && percent * absDeltaAngle < minAngle;
	}) ? minAngle : 0;
	var realTotalAngle = absDeltaAngle - notZeroItemCount * effectiveMinAngle - totalPaddingAngle;
	var sectors;
	if (sum > 0) {
		var prev;
		sectors = displayedData.map((entry, i) => {
			var val = getValueByDataKey(entry, dataKey, 0);
			var name = getValueByDataKey(entry, nameKey, i);
			var coordinate = parseCoordinateOfPie(pieSettings, offset, entry);
			var percent = (isNumber(val) ? val : 0) / sum;
			var tempStartAngle;
			var entryWithCellInfo = _objectSpread$9(_objectSpread$9({}, entry), cells && cells[i] && cells[i].props);
			var sectorColor = entryWithCellInfo != null && "fill" in entryWithCellInfo && typeof entryWithCellInfo.fill === "string" ? entryWithCellInfo.fill : pieSettings.fill;
			if (i) tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle * (val !== 0 ? 1 : 0);
			else tempStartAngle = startAngle;
			var tempEndAngle = tempStartAngle + mathSign(deltaAngle) * ((val !== 0 ? effectiveMinAngle : 0) + percent * realTotalAngle);
			var midAngle = (tempStartAngle + tempEndAngle) / 2;
			var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
			var tooltipPayload = [{
				name,
				value: val,
				payload: entryWithCellInfo,
				dataKey,
				type: tooltipType,
				color: sectorColor,
				fill: sectorColor,
				graphicalItemId: pieSettings.id
			}];
			var tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);
			prev = _objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9({}, pieSettings.presentationProps), {}, {
				percent,
				cornerRadius: typeof cornerRadius === "string" ? parseFloat(cornerRadius) : cornerRadius,
				name,
				tooltipPayload,
				midAngle,
				middleRadius,
				tooltipPosition
			}, entryWithCellInfo), coordinate), {}, {
				value: val,
				dataKey,
				startAngle: tempStartAngle,
				endAngle: tempEndAngle,
				payload: entryWithCellInfo,
				paddingAngle: val !== 0 ? mathSign(deltaAngle) * paddingAngle : 0
			});
			return prev;
		});
	}
	return sectors;
}
function PieLabelListProvider(_ref5) {
	var { showLabels, sectors, children } = _ref5;
	var labelListEntries = (0, import_react.useMemo)(() => {
		if (!showLabels || !sectors) return [];
		return sectors.map((entry) => ({
			value: entry.value,
			payload: entry.payload,
			clockWise: false,
			parentViewBox: void 0,
			viewBox: {
				cx: entry.cx,
				cy: entry.cy,
				innerRadius: entry.innerRadius,
				outerRadius: entry.outerRadius,
				startAngle: entry.startAngle,
				endAngle: entry.endAngle,
				clockWise: false
			},
			fill: entry.fill
		}));
	}, [sectors, showLabels]);
	return /* @__PURE__ */ import_react.createElement(PolarLabelListContextProvider, { value: showLabels ? labelListEntries : void 0 }, children);
}
function SectorsWithAnimation(_ref6) {
	var { props, previousSectorsRef, id } = _ref6;
	var { sectors, isAnimationActive, animationBegin, animationDuration, animationEasing, activeShape, inactiveShape, onAnimationStart, onAnimationEnd } = props;
	var animationId = useAnimationId(props, "recharts-pie-");
	var prevSectors = previousSectorsRef.current;
	var [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
	var handleAnimationEnd = (0, import_react.useCallback)(() => {
		if (typeof onAnimationEnd === "function") onAnimationEnd();
		setIsAnimating(false);
	}, [onAnimationEnd]);
	var handleAnimationStart = (0, import_react.useCallback)(() => {
		if (typeof onAnimationStart === "function") onAnimationStart();
		setIsAnimating(true);
	}, [onAnimationStart]);
	return /* @__PURE__ */ import_react.createElement(PieLabelListProvider, {
		showLabels: !isAnimating,
		sectors
	}, /* @__PURE__ */ import_react.createElement(JavascriptAnimate, {
		animationId,
		begin: animationBegin,
		duration: animationDuration,
		isActive: isAnimationActive,
		easing: animationEasing,
		onAnimationStart: handleAnimationStart,
		onAnimationEnd: handleAnimationEnd,
		key: animationId
	}, (t) => {
		var _first$startAngle;
		var stepData = [];
		var first = sectors && sectors[0];
		var curAngle = (_first$startAngle = first === null || first === void 0 ? void 0 : first.startAngle) !== null && _first$startAngle !== void 0 ? _first$startAngle : 0;
		sectors === null || sectors === void 0 || sectors.forEach((entry, index) => {
			var prev = prevSectors && prevSectors[index];
			var paddingAngle = index > 0 ? (0, import_get.default)(entry, "paddingAngle", 0) : 0;
			if (prev) {
				var angle = interpolate(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle, t);
				var latest = _objectSpread$9(_objectSpread$9({}, entry), {}, {
					startAngle: curAngle + paddingAngle,
					endAngle: curAngle + angle + paddingAngle
				});
				stepData.push(latest);
				curAngle = latest.endAngle;
			} else {
				var { endAngle, startAngle } = entry;
				var deltaAngle = interpolate(0, endAngle - startAngle, t);
				var _latest = _objectSpread$9(_objectSpread$9({}, entry), {}, {
					startAngle: curAngle + paddingAngle,
					endAngle: curAngle + deltaAngle + paddingAngle
				});
				stepData.push(_latest);
				curAngle = _latest.endAngle;
			}
		});
		previousSectorsRef.current = stepData;
		return /* @__PURE__ */ import_react.createElement(Layer, null, /* @__PURE__ */ import_react.createElement(PieSectors, {
			sectors: stepData,
			activeShape,
			inactiveShape,
			allOtherPieProps: props,
			shape: props.shape,
			id
		}));
	}), /* @__PURE__ */ import_react.createElement(PieLabelList, {
		showLabels: !isAnimating,
		sectors,
		props
	}), props.children);
}
var defaultPieProps = {
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	cx: "50%",
	cy: "50%",
	dataKey: "value",
	endAngle: 360,
	fill: "#808080",
	hide: false,
	innerRadius: 0,
	isAnimationActive: "auto",
	label: false,
	labelLine: true,
	legendType: "rect",
	minAngle: 0,
	nameKey: "name",
	outerRadius: "80%",
	paddingAngle: 0,
	rootTabIndex: 0,
	startAngle: 0,
	stroke: "#fff",
	zIndex: DefaultZIndexes.area
};
function PieImpl(props) {
	var { id } = props, propsWithoutId = _objectWithoutProperties$8(props, _excluded3$4);
	var { hide, className, rootTabIndex } = props;
	var cells = (0, import_react.useMemo)(() => findAllByType(props.children, Cell), [props.children]);
	var sectors = useAppSelector((state) => selectPieSectors(state, id, cells));
	var previousSectorsRef = (0, import_react.useRef)(null);
	var layerClass = clsx("recharts-pie", className);
	if (hide || sectors == null) {
		previousSectorsRef.current = null;
		return /* @__PURE__ */ import_react.createElement(Layer, {
			tabIndex: rootTabIndex,
			className: layerClass
		});
	}
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: props.zIndex }, /* @__PURE__ */ import_react.createElement(SetPieTooltipEntrySettings, {
		dataKey: props.dataKey,
		nameKey: props.nameKey,
		sectors,
		stroke: props.stroke,
		strokeWidth: props.strokeWidth,
		fill: props.fill,
		name: props.name,
		hide: props.hide,
		tooltipType: props.tooltipType,
		id,
		activeShape: props.activeShape
	}), /* @__PURE__ */ import_react.createElement(Layer, {
		tabIndex: rootTabIndex,
		className: layerClass
	}, /* @__PURE__ */ import_react.createElement(SectorsWithAnimation, {
		props: _objectSpread$9(_objectSpread$9({}, propsWithoutId), {}, { sectors }),
		previousSectorsRef,
		id
	})));
}
/**
* @consumes PolarChartContext
* @provides LabelListContext
* @provides CellReader
*/
function PieFn(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultPieProps);
	var { id: externalId } = props, propsWithoutId = _objectWithoutProperties$8(props, _excluded4$2);
	var presentationProps = svgPropertiesNoEvents(propsWithoutId);
	return /* @__PURE__ */ import_react.createElement(RegisterGraphicalItemId, {
		id: externalId,
		type: "pie"
	}, (id) => /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(SetPolarGraphicalItem, {
		type: "pie",
		id,
		data: propsWithoutId.data,
		dataKey: propsWithoutId.dataKey,
		hide: propsWithoutId.hide,
		angleAxisId: 0,
		radiusAxisId: 0,
		name: propsWithoutId.name,
		nameKey: propsWithoutId.nameKey,
		tooltipType: propsWithoutId.tooltipType,
		legendType: propsWithoutId.legendType,
		fill: propsWithoutId.fill,
		cx: propsWithoutId.cx,
		cy: propsWithoutId.cy,
		startAngle: propsWithoutId.startAngle,
		endAngle: propsWithoutId.endAngle,
		paddingAngle: propsWithoutId.paddingAngle,
		minAngle: propsWithoutId.minAngle,
		innerRadius: propsWithoutId.innerRadius,
		outerRadius: propsWithoutId.outerRadius,
		cornerRadius: propsWithoutId.cornerRadius,
		presentationProps,
		maxRadius: props.maxRadius
	}), /* @__PURE__ */ import_react.createElement(SetPiePayloadLegend, _extends$9({}, propsWithoutId, { id })), /* @__PURE__ */ import_react.createElement(PieImpl, _extends$9({}, propsWithoutId, { id }))));
}
var Pie = PieFn;
Pie.displayName = "Pie";
//#endregion
//#region ../../node_modules/recharts/es6/state/selectors/combiners/combineBarSizeList.js
var getBarSize = (globalSize, totalSize, selfSize) => {
	var barSize = selfSize !== null && selfSize !== void 0 ? selfSize : globalSize;
	if (isNullish(barSize)) return;
	return getPercentValue(barSize, totalSize, 0);
};
var combineBarSizeList = (allBars, globalSize, totalSize) => {
	var initialValue = {};
	var stackedBars = allBars.filter(isStacked);
	var unstackedBars = allBars.filter((b) => b.stackId == null);
	var groupByStack = stackedBars.reduce((acc, bar) => {
		var s = acc[bar.stackId];
		if (s == null) s = [];
		s.push(bar);
		acc[bar.stackId] = s;
		return acc;
	}, initialValue);
	var stackedSizeList = Object.entries(groupByStack).map((_ref) => {
		var _bars$;
		var [stackId, bars] = _ref;
		return {
			stackId,
			dataKeys: bars.map((b) => b.dataKey),
			barSize: getBarSize(globalSize, totalSize, (_bars$ = bars[0]) === null || _bars$ === void 0 ? void 0 : _bars$.barSize)
		};
	});
	var unstackedSizeList = unstackedBars.map((b) => {
		return {
			stackId: void 0,
			dataKeys: [b.dataKey].filter((dk) => dk != null),
			barSize: getBarSize(globalSize, totalSize, b.barSize)
		};
	});
	return [...stackedSizeList, ...unstackedSizeList];
};
//#endregion
//#region ../../node_modules/recharts/es6/state/selectors/combiners/combineAllBarPositions.js
function ownKeys$8(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$8(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$8(Object(t), !0).forEach(function(r) {
			_defineProperty$8(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$8(e, r, t) {
	return (r = _toPropertyKey$8(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$8(t) {
	var i = _toPrimitive$8(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$8(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function getBarPositions(barGap, barCategoryGap, bandSize, sizeList, maxBarSize) {
	var _sizeList$;
	var len = sizeList.length;
	if (len < 1) return;
	var realBarGap = getPercentValue(barGap, bandSize, 0, true);
	var result;
	var initialValue = [];
	if (isWellBehavedNumber((_sizeList$ = sizeList[0]) === null || _sizeList$ === void 0 ? void 0 : _sizeList$.barSize)) {
		var useFull = false;
		var fullBarSize = bandSize / len;
		var sum = sizeList.reduce((res, entry) => res + (entry.barSize || 0), 0);
		sum += (len - 1) * realBarGap;
		if (sum >= bandSize) {
			sum -= (len - 1) * realBarGap;
			realBarGap = 0;
		}
		if (sum >= bandSize && fullBarSize > 0) {
			useFull = true;
			fullBarSize *= .9;
			sum = len * fullBarSize;
		}
		var prev = {
			offset: ((bandSize - sum) / 2 >> 0) - realBarGap,
			size: 0
		};
		result = sizeList.reduce((res, entry) => {
			var _entry$barSize;
			var newPosition = {
				stackId: entry.stackId,
				dataKeys: entry.dataKeys,
				position: {
					offset: prev.offset + prev.size + realBarGap,
					size: useFull ? fullBarSize : (_entry$barSize = entry.barSize) !== null && _entry$barSize !== void 0 ? _entry$barSize : 0
				}
			};
			var newRes = [...res, newPosition];
			prev = newPosition.position;
			return newRes;
		}, initialValue);
	} else {
		var _offset = getPercentValue(barCategoryGap, bandSize, 0, true);
		if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) realBarGap = 0;
		var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;
		if (originalSize > 1) originalSize >>= 0;
		var size = isWellBehavedNumber(maxBarSize) ? Math.min(originalSize, maxBarSize) : originalSize;
		result = sizeList.reduce((res, entry, i) => [...res, {
			stackId: entry.stackId,
			dataKeys: entry.dataKeys,
			position: {
				offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
				size
			}
		}], initialValue);
	}
	return result;
}
var combineAllBarPositions = (sizeList, globalMaxBarSize, barGap, barCategoryGap, barBandSize, bandSize, childMaxBarSize) => {
	var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
	var allBarPositions = getBarPositions(barGap, barCategoryGap, barBandSize !== bandSize ? barBandSize : bandSize, sizeList, maxBarSize);
	if (barBandSize !== bandSize && allBarPositions != null) allBarPositions = allBarPositions.map((pos) => _objectSpread$8(_objectSpread$8({}, pos), {}, { position: _objectSpread$8(_objectSpread$8({}, pos.position), {}, { offset: pos.position.offset - barBandSize / 2 }) }));
	return allBarPositions;
};
//#endregion
//#region ../../node_modules/recharts/es6/state/selectors/combiners/combineStackedData.js
var combineStackedData = (stackGroups, barSettings) => {
	var stackSeriesIdentifier = getStackSeriesIdentifier(barSettings);
	if (!stackGroups || stackSeriesIdentifier == null || barSettings == null) return;
	var { stackId } = barSettings;
	if (stackId == null) return;
	var stackGroup = stackGroups[stackId];
	if (!stackGroup) return;
	var { stackedData } = stackGroup;
	if (!stackedData) return;
	return stackedData.find((sd) => sd.key === stackSeriesIdentifier);
};
//#endregion
//#region ../../node_modules/recharts/es6/state/selectors/combiners/combineBarPosition.js
var combineBarPosition = (allBarPositions, barSettings) => {
	if (allBarPositions == null || barSettings == null) return;
	var position = allBarPositions.find((p) => p.stackId === barSettings.stackId && barSettings.dataKey != null && p.dataKeys.includes(barSettings.dataKey));
	if (position == null) return;
	return position.position;
};
//#endregion
//#region ../../node_modules/recharts/es6/zIndex/getZIndexFromUnknown.js
function getZIndexFromUnknown(input, defaultZIndex) {
	if (input && typeof input === "object" && "zIndex" in input && typeof input.zIndex === "number" && isWellBehavedNumber(input.zIndex)) return input.zIndex;
	return defaultZIndex;
}
//#endregion
//#region ../../node_modules/recharts/es6/util/scale/CartesianScaleHelper.js
/**
* Groups X and Y scale functions together and provides helper methods.
*/
var CartesianScaleHelperImpl = class {
	constructor(_ref) {
		var { x, y } = _ref;
		this.xAxisScale = x;
		this.yAxisScale = y;
	}
	map(value, _ref2) {
		var _this$xAxisScale$map, _this$yAxisScale$map;
		var { position } = _ref2;
		return {
			x: (_this$xAxisScale$map = this.xAxisScale.map(value.x, { position })) !== null && _this$xAxisScale$map !== void 0 ? _this$xAxisScale$map : 0,
			y: (_this$yAxisScale$map = this.yAxisScale.map(value.y, { position })) !== null && _this$yAxisScale$map !== void 0 ? _this$yAxisScale$map : 0
		};
	}
	mapWithFallback(value, _ref3) {
		var _this$xAxisScale$map2, _this$yAxisScale$map2;
		var { position, fallback } = _ref3;
		var fallbackY, fallbackX;
		if (fallback === "rangeMin") fallbackY = this.yAxisScale.rangeMin();
		else if (fallback === "rangeMax") fallbackY = this.yAxisScale.rangeMax();
		else fallbackY = 0;
		if (fallback === "rangeMin") fallbackX = this.xAxisScale.rangeMin();
		else if (fallback === "rangeMax") fallbackX = this.xAxisScale.rangeMax();
		else fallbackX = 0;
		return {
			x: (_this$xAxisScale$map2 = this.xAxisScale.map(value.x, { position })) !== null && _this$xAxisScale$map2 !== void 0 ? _this$xAxisScale$map2 : fallbackX,
			y: (_this$yAxisScale$map2 = this.yAxisScale.map(value.y, { position })) !== null && _this$yAxisScale$map2 !== void 0 ? _this$yAxisScale$map2 : fallbackY
		};
	}
	isInRange(_ref4) {
		var { x, y } = _ref4;
		var xInRange = x == null || this.xAxisScale.isInRange(x);
		var yInRange = y == null || this.yAxisScale.isInRange(y);
		return xInRange && yInRange;
	}
};
//#endregion
//#region ../../node_modules/recharts/es6/cartesian/ReferenceLine.js
/**
* @fileOverview Reference Line
*/
function ownKeys$7(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$7(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$7(Object(t), !0).forEach(function(r) {
			_defineProperty$7(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$7(e, r, t) {
	return (r = _toPropertyKey$7(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$7(t) {
	var i = _toPrimitive$7(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$7(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends$8() {
	return _extends$8 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$8.apply(null, arguments);
}
/**
* Single point that defines one end of a segment.
* These coordinates are in data space, meaning that you should provide
* values that correspond to the data domain of the axes.
* So you would provide a value of `Page A` to indicate the data value `Page A`
* and then recharts will convert that to pixels.
*
* Likewise for numbers. If your x-axis goes from 0 to 100,
* and you want the line to end at 50, you would provide `50` here.
*
* @inline
*/
/**
* This excludes `viewBox` prop from svg for two reasons:
* 1. The components wants viewBox of object type, and svg wants string
*    - so there's a conflict, and the component will throw if it gets string
* 2. Internally the component calls `svgPropertiesNoEvents` which filters the viewBox away anyway
*/
var renderLine = (option, props) => {
	var line;
	if (/* @__PURE__ */ import_react.isValidElement(option)) line = /* @__PURE__ */ import_react.cloneElement(option, props);
	else if (typeof option === "function") line = option(props);
	else {
		if (!isWellBehavedNumber(props.x1) || !isWellBehavedNumber(props.y1) || !isWellBehavedNumber(props.x2) || !isWellBehavedNumber(props.y2)) return null;
		line = /* @__PURE__ */ import_react.createElement("line", _extends$8({}, props, { className: "recharts-reference-line-line" }));
	}
	return line;
};
var getHorizontalLineEndPoints = (yCoord, ifOverflow, position, yAxisOrientation, yAxisScale, viewBox) => {
	var { x, width } = viewBox;
	var coord = yAxisScale.map(yCoord, { position });
	if (!isWellBehavedNumber(coord)) return null;
	if (ifOverflow === "discard" && !yAxisScale.isInRange(coord)) return null;
	var points = [{
		x: x + width,
		y: coord
	}, {
		x,
		y: coord
	}];
	return yAxisOrientation === "left" ? points.reverse() : points;
};
var getVerticalLineEndPoints = (xCoord, ifOverflow, position, xAxisOrientation, xAxisScale, viewBox) => {
	var { y, height } = viewBox;
	var coord = xAxisScale.map(xCoord, { position });
	if (!isWellBehavedNumber(coord)) return null;
	if (ifOverflow === "discard" && !xAxisScale.isInRange(coord)) return null;
	var points = [{
		x: coord,
		y: y + height
	}, {
		x: coord,
		y
	}];
	return xAxisOrientation === "top" ? points.reverse() : points;
};
var getSegmentLineEndPoints = (segment, ifOverflow, position, scales) => {
	var points = [scales.mapWithFallback(segment[0], {
		position,
		fallback: "rangeMin"
	}), scales.mapWithFallback(segment[1], {
		position,
		fallback: "rangeMax"
	})];
	if (ifOverflow === "discard" && points.some((p) => !scales.isInRange(p))) return null;
	return points;
};
var getEndPoints = (xAxisScale, yAxisScale, viewBox, position, xAxisOrientation, yAxisOrientation, props) => {
	var { x: xCoord, y: yCoord, segment, ifOverflow } = props;
	var isFixedX = isNumOrStr(xCoord);
	if (isNumOrStr(yCoord)) return getHorizontalLineEndPoints(yCoord, ifOverflow, position, yAxisOrientation, yAxisScale, viewBox);
	if (isFixedX) return getVerticalLineEndPoints(xCoord, ifOverflow, position, xAxisOrientation, xAxisScale, viewBox);
	if (segment != null && segment.length === 2) return getSegmentLineEndPoints(segment, ifOverflow, position, new CartesianScaleHelperImpl({
		x: xAxisScale,
		y: yAxisScale
	}));
	return null;
};
function ReportReferenceLine(props) {
	var dispatch = useAppDispatch();
	(0, import_react.useEffect)(() => {
		dispatch(addLine(props));
		return () => {
			dispatch(removeLine(props));
		};
	});
	return null;
}
function ReferenceLineImpl(props) {
	var { xAxisId, yAxisId, shape, className, ifOverflow } = props;
	var isPanorama = useIsPanorama();
	var clipPathId = useClipPathId();
	var xAxis = useAppSelector((state) => selectXAxisSettings(state, xAxisId));
	var yAxis = useAppSelector((state) => selectYAxisSettings(state, yAxisId));
	var xAxisScale = useAppSelector((state) => selectAxisScale(state, "xAxis", xAxisId, isPanorama));
	var yAxisScale = useAppSelector((state) => selectAxisScale(state, "yAxis", yAxisId, isPanorama));
	var viewBox = useViewBox();
	if (!clipPathId || !viewBox || xAxis == null || yAxis == null || xAxisScale == null || yAxisScale == null) return null;
	var endPoints = getEndPoints(xAxisScale, yAxisScale, viewBox, props.position, xAxis.orientation, yAxis.orientation, props);
	if (!endPoints) return null;
	var point1 = endPoints[0];
	var point2 = endPoints[1];
	if (point1 == null || point2 == null) return null;
	var { x: x1, y: y1 } = point1;
	var { x: x2, y: y2 } = point2;
	var lineProps = _objectSpread$7(_objectSpread$7({ clipPath: ifOverflow === "hidden" ? "url(#".concat(clipPathId, ")") : void 0 }, svgPropertiesAndEvents(props)), {}, {
		x1,
		y1,
		x2,
		y2
	});
	var rect = rectWithCoords({
		x1,
		y1,
		x2,
		y2
	});
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: props.zIndex }, /* @__PURE__ */ import_react.createElement(Layer, { className: clsx("recharts-reference-line", className) }, renderLine(shape, lineProps), /* @__PURE__ */ import_react.createElement(CartesianLabelContextProvider, _extends$8({}, rect, {
		lowerWidth: rect.width,
		upperWidth: rect.width
	}), /* @__PURE__ */ import_react.createElement(CartesianLabelFromLabelProp, { label: props.label }), props.children)));
}
var referenceLineDefaultProps = {
	ifOverflow: "discard",
	xAxisId: 0,
	yAxisId: 0,
	fill: "none",
	label: false,
	stroke: "#ccc",
	fillOpacity: 1,
	strokeWidth: 1,
	position: "middle",
	zIndex: DefaultZIndexes.line
};
/**
* Draws a line on the chart connecting two points.
*
* This component, unlike {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/line line}, is aware of the cartesian coordinate system,
* so you specify the dimensions by using data coordinates instead of pixels.
*
* ReferenceLine will calculate the pixels based on the provided data coordinates.
*
* If you prefer to render using pixels rather than data coordinates,
* consider using the {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/line line SVG element} instead.
*
* @provides CartesianLabelContext
* @consumes CartesianChartContext
*/
function ReferenceLine(outsideProps) {
	var props = resolveDefaultProps(outsideProps, referenceLineDefaultProps);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(ReportReferenceLine, {
		yAxisId: props.yAxisId,
		xAxisId: props.xAxisId,
		ifOverflow: props.ifOverflow,
		x: props.x,
		y: props.y,
		segment: props.segment
	}), /* @__PURE__ */ import_react.createElement(ReferenceLineImpl, props));
}
ReferenceLine.displayName = "ReferenceLine";
//#endregion
//#region ../../node_modules/recharts/es6/cartesian/CartesianGrid.js
var _excluded$7 = [
	"x1",
	"y1",
	"x2",
	"y2",
	"key"
], _excluded2$4 = ["offset"], _excluded3$3 = ["xAxisId", "yAxisId"], _excluded4$1 = ["xAxisId", "yAxisId"];
function ownKeys$6(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$6(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$6(Object(t), !0).forEach(function(r) {
			_defineProperty$6(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$6(e, r, t) {
	return (r = _toPropertyKey$6(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$6(t) {
	var i = _toPrimitive$6(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$6(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends$7() {
	return _extends$7 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$7.apply(null, arguments);
}
function _objectWithoutProperties$7(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$7(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$7(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
/**
* The <CartesianGrid horizontal
*/
var Background = (props) => {
	var { fill } = props;
	if (!fill || fill === "none") return null;
	var { fillOpacity, x, y, width, height, ry } = props;
	return /* @__PURE__ */ import_react.createElement("rect", {
		x,
		y,
		ry,
		width,
		height,
		stroke: "none",
		fill,
		fillOpacity,
		className: "recharts-cartesian-grid-bg"
	});
};
function LineItem(_ref) {
	var { option, lineItemProps } = _ref;
	var lineItem;
	if (/* @__PURE__ */ import_react.isValidElement(option)) lineItem = /* @__PURE__ */ import_react.cloneElement(option, lineItemProps);
	else if (typeof option === "function") lineItem = option(lineItemProps);
	else {
		var _svgPropertiesNoEvent;
		var { x1, y1, x2, y2, key } = lineItemProps;
		var _ref2 = (_svgPropertiesNoEvent = svgPropertiesNoEvents(_objectWithoutProperties$7(lineItemProps, _excluded$7))) !== null && _svgPropertiesNoEvent !== void 0 ? _svgPropertiesNoEvent : {}, { offset: __ } = _ref2, restOfFilteredProps = _objectWithoutProperties$7(_ref2, _excluded2$4);
		lineItem = /* @__PURE__ */ import_react.createElement("line", _extends$7({}, restOfFilteredProps, {
			x1,
			y1,
			x2,
			y2,
			fill: "none",
			key
		}));
	}
	return lineItem;
}
function HorizontalGridLines(props) {
	var { x, width, horizontal = true, horizontalPoints } = props;
	if (!horizontal || !horizontalPoints || !horizontalPoints.length) return null;
	var { xAxisId, yAxisId } = props, otherLineItemProps = _objectWithoutProperties$7(props, _excluded3$3);
	var items = horizontalPoints.map((entry, i) => {
		var lineItemProps = _objectSpread$6(_objectSpread$6({}, otherLineItemProps), {}, {
			x1: x,
			y1: entry,
			x2: x + width,
			y2: entry,
			key: "line-".concat(i),
			index: i
		});
		return /* @__PURE__ */ import_react.createElement(LineItem, {
			key: "line-".concat(i),
			option: horizontal,
			lineItemProps
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, items);
}
function VerticalGridLines(props) {
	var { y, height, vertical = true, verticalPoints } = props;
	if (!vertical || !verticalPoints || !verticalPoints.length) return null;
	var { xAxisId, yAxisId } = props, otherLineItemProps = _objectWithoutProperties$7(props, _excluded4$1);
	var items = verticalPoints.map((entry, i) => {
		var lineItemProps = _objectSpread$6(_objectSpread$6({}, otherLineItemProps), {}, {
			x1: entry,
			y1: y,
			x2: entry,
			y2: y + height,
			key: "line-".concat(i),
			index: i
		});
		return /* @__PURE__ */ import_react.createElement(LineItem, {
			option: vertical,
			lineItemProps,
			key: "line-".concat(i)
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-grid-vertical" }, items);
}
function HorizontalStripes(props) {
	var { horizontalFill, fillOpacity, x, y, width, height, horizontalPoints, horizontal = true } = props;
	if (!horizontal || !horizontalFill || !horizontalFill.length || horizontalPoints == null) return null;
	var roundedSortedHorizontalPoints = horizontalPoints.map((e) => Math.round(e + y - y)).sort((a, b) => a - b);
	if (y !== roundedSortedHorizontalPoints[0]) roundedSortedHorizontalPoints.unshift(0);
	var items = roundedSortedHorizontalPoints.map((entry, i) => {
		var nextPoint = roundedSortedHorizontalPoints[i + 1];
		var lineHeight = nextPoint == null ? y + height - entry : nextPoint - entry;
		if (lineHeight <= 0) return null;
		var colorIndex = i % horizontalFill.length;
		return /* @__PURE__ */ import_react.createElement("rect", {
			key: "react-".concat(i),
			y: entry,
			x,
			height: lineHeight,
			width,
			stroke: "none",
			fill: horizontalFill[colorIndex],
			fillOpacity,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, items);
}
function VerticalStripes(props) {
	var { vertical = true, verticalFill, fillOpacity, x, y, width, height, verticalPoints } = props;
	if (!vertical || !verticalFill || !verticalFill.length) return null;
	var roundedSortedVerticalPoints = verticalPoints.map((e) => Math.round(e + x - x)).sort((a, b) => a - b);
	if (x !== roundedSortedVerticalPoints[0]) roundedSortedVerticalPoints.unshift(0);
	var items = roundedSortedVerticalPoints.map((entry, i) => {
		var nextPoint = roundedSortedVerticalPoints[i + 1];
		var lineWidth = nextPoint == null ? x + width - entry : nextPoint - entry;
		if (lineWidth <= 0) return null;
		var colorIndex = i % verticalFill.length;
		return /* @__PURE__ */ import_react.createElement("rect", {
			key: "react-".concat(i),
			x: entry,
			y,
			width: lineWidth,
			height,
			stroke: "none",
			fill: verticalFill[colorIndex],
			fillOpacity,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, items);
}
var defaultVerticalCoordinatesGenerator = (_ref3, syncWithTicks) => {
	var { xAxis, width, height, offset } = _ref3;
	return getCoordinatesOfGrid(getTicks(_objectSpread$6(_objectSpread$6(_objectSpread$6({}, defaultCartesianAxisProps), xAxis), {}, {
		ticks: getTicksOfAxis(xAxis, true),
		viewBox: {
			x: 0,
			y: 0,
			width,
			height
		}
	})), offset.left, offset.left + offset.width, syncWithTicks);
};
var defaultHorizontalCoordinatesGenerator = (_ref4, syncWithTicks) => {
	var { yAxis, width, height, offset } = _ref4;
	return getCoordinatesOfGrid(getTicks(_objectSpread$6(_objectSpread$6(_objectSpread$6({}, defaultCartesianAxisProps), yAxis), {}, {
		ticks: getTicksOfAxis(yAxis, true),
		viewBox: {
			x: 0,
			y: 0,
			width,
			height
		}
	})), offset.top, offset.top + offset.height, syncWithTicks);
};
var defaultCartesianGridProps = {
	horizontal: true,
	vertical: true,
	horizontalPoints: [],
	verticalPoints: [],
	stroke: "#ccc",
	fill: "none",
	verticalFill: [],
	horizontalFill: [],
	xAxisId: 0,
	yAxisId: 0,
	syncWithTicks: false,
	zIndex: DefaultZIndexes.grid
};
/**
* Renders background grid with lines and fill colors in a Cartesian chart.
*
* @consumes CartesianChartContext
*/
function CartesianGrid(props) {
	var chartWidth = useChartWidth();
	var chartHeight = useChartHeight();
	var offset = useOffsetInternal();
	var propsIncludingDefaults = _objectSpread$6(_objectSpread$6({}, resolveDefaultProps(props, defaultCartesianGridProps)), {}, {
		x: isNumber(props.x) ? props.x : offset.left,
		y: isNumber(props.y) ? props.y : offset.top,
		width: isNumber(props.width) ? props.width : offset.width,
		height: isNumber(props.height) ? props.height : offset.height
	});
	var { xAxisId, yAxisId, x, y, width, height, syncWithTicks, horizontalValues, verticalValues } = propsIncludingDefaults;
	var isPanorama = useIsPanorama();
	var xAxis = useAppSelector((state) => selectAxisPropsNeededForCartesianGridTicksGenerator(state, "xAxis", xAxisId, isPanorama));
	var yAxis = useAppSelector((state) => selectAxisPropsNeededForCartesianGridTicksGenerator(state, "yAxis", yAxisId, isPanorama));
	if (!isPositiveNumber(width) || !isPositiveNumber(height) || !isNumber(x) || !isNumber(y)) return null;
	var verticalCoordinatesGenerator = propsIncludingDefaults.verticalCoordinatesGenerator || defaultVerticalCoordinatesGenerator;
	var horizontalCoordinatesGenerator = propsIncludingDefaults.horizontalCoordinatesGenerator || defaultHorizontalCoordinatesGenerator;
	var { horizontalPoints, verticalPoints } = propsIncludingDefaults;
	if ((!horizontalPoints || !horizontalPoints.length) && typeof horizontalCoordinatesGenerator === "function") {
		var isHorizontalValues = horizontalValues && horizontalValues.length;
		var generatorResult = horizontalCoordinatesGenerator({
			yAxis: yAxis ? _objectSpread$6(_objectSpread$6({}, yAxis), {}, { ticks: isHorizontalValues ? horizontalValues : yAxis.ticks }) : void 0,
			width: chartWidth !== null && chartWidth !== void 0 ? chartWidth : width,
			height: chartHeight !== null && chartHeight !== void 0 ? chartHeight : height,
			offset
		}, isHorizontalValues ? true : syncWithTicks);
		warn(Array.isArray(generatorResult), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof generatorResult, "]"));
		if (Array.isArray(generatorResult)) horizontalPoints = generatorResult;
	}
	if ((!verticalPoints || !verticalPoints.length) && typeof verticalCoordinatesGenerator === "function") {
		var isVerticalValues = verticalValues && verticalValues.length;
		var _generatorResult = verticalCoordinatesGenerator({
			xAxis: xAxis ? _objectSpread$6(_objectSpread$6({}, xAxis), {}, { ticks: isVerticalValues ? verticalValues : xAxis.ticks }) : void 0,
			width: chartWidth !== null && chartWidth !== void 0 ? chartWidth : width,
			height: chartHeight !== null && chartHeight !== void 0 ? chartHeight : height,
			offset
		}, isVerticalValues ? true : syncWithTicks);
		warn(Array.isArray(_generatorResult), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof _generatorResult, "]"));
		if (Array.isArray(_generatorResult)) verticalPoints = _generatorResult;
	}
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: propsIncludingDefaults.zIndex }, /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-grid" }, /* @__PURE__ */ import_react.createElement(Background, {
		fill: propsIncludingDefaults.fill,
		fillOpacity: propsIncludingDefaults.fillOpacity,
		x: propsIncludingDefaults.x,
		y: propsIncludingDefaults.y,
		width: propsIncludingDefaults.width,
		height: propsIncludingDefaults.height,
		ry: propsIncludingDefaults.ry
	}), /* @__PURE__ */ import_react.createElement(HorizontalStripes, _extends$7({}, propsIncludingDefaults, { horizontalPoints })), /* @__PURE__ */ import_react.createElement(VerticalStripes, _extends$7({}, propsIncludingDefaults, { verticalPoints })), /* @__PURE__ */ import_react.createElement(HorizontalGridLines, _extends$7({}, propsIncludingDefaults, {
		offset,
		horizontalPoints,
		xAxis,
		yAxis
	})), /* @__PURE__ */ import_react.createElement(VerticalGridLines, _extends$7({}, propsIncludingDefaults, {
		offset,
		verticalPoints,
		xAxis,
		yAxis
	}))));
}
CartesianGrid.displayName = "CartesianGrid";
//#endregion
//#region ../../node_modules/recharts/es6/context/ErrorBarContext.js
var _excluded$6 = ["children"];
function _objectWithoutProperties$6(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$6(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$6(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var ErrorBarContext = /* @__PURE__ */ (0, import_react.createContext)({
	data: [],
	xAxisId: "xAxis-0",
	yAxisId: "yAxis-0",
	dataPointFormatter: () => ({
		x: 0,
		y: 0,
		value: 0
	}),
	errorBarOffset: 0
});
function SetErrorBarContext(props) {
	var { children } = props, rest = _objectWithoutProperties$6(props, _excluded$6);
	return /* @__PURE__ */ import_react.createElement(ErrorBarContext.Provider, { value: rest }, children);
}
//#endregion
//#region ../../node_modules/recharts/es6/state/selectors/lineSelectors.js
var selectXAxisWithScale$1 = (state, xAxisId, _yAxisId, isPanorama) => selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
var selectXAxisTicks$1 = (state, xAxisId, _yAxisId, isPanorama) => selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
var selectYAxisWithScale$1 = (state, _xAxisId, yAxisId, isPanorama) => selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
var selectYAxisTicks$1 = (state, _xAxisId, yAxisId, isPanorama) => selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
var selectBandSize = createSelector([
	selectChartLayout,
	selectXAxisWithScale$1,
	selectYAxisWithScale$1,
	selectXAxisTicks$1,
	selectYAxisTicks$1
], (layout, xAxis, yAxis, xAxisTicks, yAxisTicks) => {
	if (isCategoricalAxis(layout, "xAxis")) return getBandSizeOfAxis(xAxis, xAxisTicks, false);
	return getBandSizeOfAxis(yAxis, yAxisTicks, false);
});
var pickLineId = (_state, _xAxisId, _yAxisId, _isPanorama, id) => id;
function isLineSettings(item) {
	return item.type === "line";
}
var selectLinePoints = createSelector([
	selectChartLayout,
	selectXAxisWithScale$1,
	selectYAxisWithScale$1,
	selectXAxisTicks$1,
	selectYAxisTicks$1,
	createSelector([selectUnfilteredCartesianItems, pickLineId], (graphicalItems, id) => graphicalItems.filter(isLineSettings).find((x) => x.id === id)),
	selectBandSize,
	selectChartDataWithIndexesIfNotInPanoramaPosition4
], (layout, xAxis, yAxis, xAxisTicks, yAxisTicks, lineSettings, bandSize, _ref) => {
	var { chartData, dataStartIndex, dataEndIndex } = _ref;
	if (lineSettings == null || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || xAxisTicks.length === 0 || yAxisTicks.length === 0 || bandSize == null || layout !== "horizontal" && layout !== "vertical") return;
	var { dataKey, data } = lineSettings;
	var displayedData;
	if (data != null && data.length > 0) displayedData = data;
	else displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
	if (displayedData == null) return;
	return computeLinePoints({
		layout,
		xAxis,
		yAxis,
		xAxisTicks,
		yAxisTicks,
		dataKey,
		bandSize,
		displayedData
	});
});
//#endregion
//#region ../../node_modules/recharts/es6/cartesian/Line.js
var _excluded$5 = ["id"], _excluded2$3 = [
	"type",
	"layout",
	"connectNulls",
	"needClip",
	"shape"
], _excluded3$2 = [
	"activeDot",
	"animateNewValues",
	"animationBegin",
	"animationDuration",
	"animationEasing",
	"connectNulls",
	"dot",
	"hide",
	"isAnimationActive",
	"label",
	"legendType",
	"xAxisId",
	"yAxisId",
	"id"
];
function _extends$6() {
	return _extends$6 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$6.apply(null, arguments);
}
function ownKeys$5(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$5(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$5(Object(t), !0).forEach(function(r) {
			_defineProperty$5(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$5(e, r, t) {
	return (r = _toPropertyKey$5(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$5(t) {
	var i = _toPrimitive$5(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$5(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$5(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$5(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$5(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
/**
* Internal props, combination of external props + defaultProps + private Recharts state
*/
/**
* External props, intended for end users to fill in
*/
/**
* Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
*/
var computeLegendPayloadFromAreaData = (props) => {
	var { dataKey, name, stroke, legendType, hide } = props;
	return [{
		inactive: hide,
		dataKey,
		type: legendType,
		color: stroke,
		value: getTooltipNameProp(name, dataKey),
		payload: props
	}];
};
var SetLineTooltipEntrySettings = /* @__PURE__ */ import_react.memo((_ref) => {
	var { dataKey, data, stroke, strokeWidth, fill, name, hide, unit, tooltipType, id } = _ref;
	var tooltipEntrySettings = {
		dataDefinedOnItem: data,
		getPosition: noop$1,
		settings: {
			stroke,
			strokeWidth,
			fill,
			dataKey,
			nameKey: void 0,
			name: getTooltipNameProp(name, dataKey),
			hide,
			type: tooltipType,
			color: stroke,
			unit,
			graphicalItemId: id
		}
	};
	return /* @__PURE__ */ import_react.createElement(SetTooltipEntrySettings, { tooltipEntrySettings });
});
/**
* Generates a simple stroke-dasharray string for animating a line draw effect.
*
* Uses `totalLength` as the gap (instead of `totalLength - length`) to prevent a floating-point
* precision artifact: when fractional dash and gap values are serialized to a string attribute
* and re-parsed by the SVG renderer, their sum can differ from the actual path length by a ULP,
* causing the dasharray pattern to repeat and render a phantom dot at the path endpoint
* with round or square strokeLinecap.
*
* @param totalLength The total length of the SVG path
* @param length The currently visible portion of the path
* @returns A stroke-dasharray string like "50px 200px"
*/
var generateSimpleStrokeDasharray = (totalLength, length) => {
	return "".concat(length, "px ").concat(totalLength, "px");
};
/**
* Repeats a dash pattern array a given number of times.
*
* If the input array has an odd length, a trailing `0` is appended to make it even
* before repeating, because SVG stroke-dasharray patterns must have an even number
* of values to cycle correctly between dash and gap segments.
*
* @param lines Array of dash/gap lengths to repeat
* @param count Number of times to repeat the pattern
* @returns A new array with the pattern repeated `count` times
*/
function repeat(lines, count) {
	var linesUnit = lines.length % 2 !== 0 ? [...lines, 0] : lines;
	var result = [];
	for (var i = 0; i < count; ++i) result.push(...linesUnit);
	return result;
}
/**
* Computes a stroke-dasharray string for animating a custom-dashed line draw effect.
*
* Given a user-specified dash pattern (e.g. `"7,3"`), this function builds a dasharray
* that reveals exactly `length` pixels of that pattern, followed by a gap of `totalLength`
* to hide the remainder of the path.
*
* Like {@link generateSimpleStrokeDasharray}, the trailing gap uses `totalLength` rather than
* `totalLength - length` to avoid floating-point precision artifacts with round/square strokeLinecap.
*
* @param length The currently visible portion of the path
* @param totalLength The total length of the SVG path
* @param lines The user-specified dash pattern as an array of numbers (e.g. [7, 3])
* @returns A stroke-dasharray string incorporating the custom dash pattern
*/
var getStrokeDasharray = (length, totalLength, lines) => {
	var lineLength = lines.reduce((pre, next) => pre + next, 0);
	if (!lineLength) return generateSimpleStrokeDasharray(totalLength, length);
	var count = Math.floor(length / lineLength);
	var remainLength = length % lineLength;
	var remainLines = [];
	for (var i = 0, sum = 0; i < lines.length; sum += (_lines$i = lines[i]) !== null && _lines$i !== void 0 ? _lines$i : 0, ++i) {
		var _lines$i;
		var lineValue = lines[i];
		if (lineValue != null && sum + lineValue > remainLength) {
			remainLines = [...lines.slice(0, i), remainLength - sum];
			break;
		}
	}
	var emptyLines = remainLines.length % 2 === 0 ? [0, totalLength] : [totalLength];
	return [
		...repeat(lines, count),
		...remainLines,
		...emptyLines
	].map((line) => "".concat(line, "px")).join(", ");
};
function LineDotsWrapper(_ref2) {
	var { clipPathId, points, props } = _ref2;
	var { dot, dataKey, needClip } = props;
	var { id } = props;
	var lineProps = svgPropertiesNoEvents(_objectWithoutProperties$5(props, _excluded$5));
	return /* @__PURE__ */ import_react.createElement(Dots, {
		points,
		dot,
		className: "recharts-line-dots",
		dotClassName: "recharts-line-dot",
		dataKey,
		baseProps: lineProps,
		needClip,
		clipPathId
	});
}
function LineLabelListProvider(_ref3) {
	var { showLabels, children, points } = _ref3;
	var labelListEntries = (0, import_react.useMemo)(() => {
		return points === null || points === void 0 ? void 0 : points.map((point) => {
			var _point$x, _point$y;
			var viewBox = {
				x: (_point$x = point.x) !== null && _point$x !== void 0 ? _point$x : 0,
				y: (_point$y = point.y) !== null && _point$y !== void 0 ? _point$y : 0,
				width: 0,
				lowerWidth: 0,
				upperWidth: 0,
				height: 0
			};
			return _objectSpread$5(_objectSpread$5({}, viewBox), {}, {
				value: point.value,
				payload: point.payload,
				viewBox,
				parentViewBox: void 0,
				fill: void 0
			});
		});
	}, [points]);
	return /* @__PURE__ */ import_react.createElement(CartesianLabelListContextProvider, { value: showLabels ? labelListEntries : void 0 }, children);
}
function StaticCurve(_ref4) {
	var { clipPathId, pathRef, points, strokeDasharray, props } = _ref4;
	var { type, layout, connectNulls, needClip, shape } = props;
	var curveProps = _objectSpread$5(_objectSpread$5({}, svgPropertiesAndEvents(_objectWithoutProperties$5(props, _excluded2$3))), {}, {
		fill: "none",
		className: "recharts-line-curve",
		clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0,
		points,
		type,
		layout,
		connectNulls,
		strokeDasharray: strokeDasharray !== null && strokeDasharray !== void 0 ? strokeDasharray : props.strokeDasharray
	});
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, (points === null || points === void 0 ? void 0 : points.length) > 1 && /* @__PURE__ */ import_react.createElement(Shape, _extends$6({
		shapeType: "curve",
		option: shape
	}, curveProps, { pathRef })), /* @__PURE__ */ import_react.createElement(LineDotsWrapper, {
		points,
		clipPathId,
		props
	}));
}
function getTotalLength(mainCurve) {
	try {
		return mainCurve && mainCurve.getTotalLength && mainCurve.getTotalLength() || 0;
	} catch (_unused) {
		return 0;
	}
}
function CurveWithAnimation(_ref5) {
	var { clipPathId, props, pathRef, previousPointsRef, longestAnimatedLengthRef } = _ref5;
	var { points, strokeDasharray, isAnimationActive, animationBegin, animationDuration, animationEasing, animateNewValues, width, height, onAnimationEnd, onAnimationStart } = props;
	var prevPoints = previousPointsRef.current;
	var animationId = useAnimationId(points, "recharts-line-");
	var animationIdRef = (0, import_react.useRef)(animationId);
	var [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
	var showLabels = !isAnimating;
	var handleAnimationEnd = (0, import_react.useCallback)(() => {
		if (typeof onAnimationEnd === "function") onAnimationEnd();
		setIsAnimating(false);
	}, [onAnimationEnd]);
	var handleAnimationStart = (0, import_react.useCallback)(() => {
		if (typeof onAnimationStart === "function") onAnimationStart();
		setIsAnimating(true);
	}, [onAnimationStart]);
	var totalLength = getTotalLength(pathRef.current);
	var startingPointRef = (0, import_react.useRef)(0);
	if (animationIdRef.current !== animationId) {
		startingPointRef.current = longestAnimatedLengthRef.current;
		animationIdRef.current = animationId;
	}
	var startingPoint = startingPointRef.current;
	return /* @__PURE__ */ import_react.createElement(LineLabelListProvider, {
		points,
		showLabels
	}, props.children, /* @__PURE__ */ import_react.createElement(JavascriptAnimate, {
		animationId,
		begin: animationBegin,
		duration: animationDuration,
		isActive: isAnimationActive,
		easing: animationEasing,
		onAnimationEnd: handleAnimationEnd,
		onAnimationStart: handleAnimationStart,
		key: animationId
	}, (t) => {
		var lengthInterpolated = interpolate(startingPoint, totalLength + startingPoint, t);
		var curLength = Math.min(lengthInterpolated, totalLength);
		var currentStrokeDasharray;
		if (isAnimationActive) if (strokeDasharray) currentStrokeDasharray = getStrokeDasharray(curLength, totalLength, "".concat(strokeDasharray).split(/[,\s]+/gim).map((num) => parseFloat(num)));
		else currentStrokeDasharray = generateSimpleStrokeDasharray(totalLength, curLength);
		else currentStrokeDasharray = strokeDasharray == null ? void 0 : String(strokeDasharray);
		if (t > 0 && totalLength > 0) {
			previousPointsRef.current = points;
			longestAnimatedLengthRef.current = Math.max(longestAnimatedLengthRef.current, curLength);
		}
		if (prevPoints) {
			var prevPointsDiffFactor = prevPoints.length / points.length;
			var stepData = t === 1 ? points : points.map((entry, index) => {
				var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
				if (prevPoints[prevPointIndex]) {
					var prev = prevPoints[prevPointIndex];
					return _objectSpread$5(_objectSpread$5({}, entry), {}, {
						x: interpolate(prev.x, entry.x, t),
						y: interpolate(prev.y, entry.y, t)
					});
				}
				if (animateNewValues) return _objectSpread$5(_objectSpread$5({}, entry), {}, {
					x: interpolate(width * 2, entry.x, t),
					y: interpolate(height / 2, entry.y, t)
				});
				return _objectSpread$5(_objectSpread$5({}, entry), {}, {
					x: entry.x,
					y: entry.y
				});
			});
			previousPointsRef.current = stepData;
			return /* @__PURE__ */ import_react.createElement(StaticCurve, {
				props,
				points: stepData,
				clipPathId,
				pathRef,
				strokeDasharray: currentStrokeDasharray
			});
		}
		return /* @__PURE__ */ import_react.createElement(StaticCurve, {
			props,
			points,
			clipPathId,
			pathRef,
			strokeDasharray: currentStrokeDasharray
		});
	}), /* @__PURE__ */ import_react.createElement(LabelListFromLabelProp, { label: props.label }));
}
function RenderCurve(_ref6) {
	var { clipPathId, props } = _ref6;
	var previousPointsRef = (0, import_react.useRef)(null);
	var longestAnimatedLengthRef = (0, import_react.useRef)(0);
	var pathRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ import_react.createElement(CurveWithAnimation, {
		props,
		clipPathId,
		previousPointsRef,
		longestAnimatedLengthRef,
		pathRef
	});
}
var errorBarDataPointFormatter$1 = (dataPoint, dataKey) => {
	var _dataPoint$x, _dataPoint$y;
	return {
		x: (_dataPoint$x = dataPoint.x) !== null && _dataPoint$x !== void 0 ? _dataPoint$x : void 0,
		y: (_dataPoint$y = dataPoint.y) !== null && _dataPoint$y !== void 0 ? _dataPoint$y : void 0,
		value: dataPoint.value,
		errorVal: getValueByDataKey(dataPoint.payload, dataKey)
	};
};
var LineWithState = class extends import_react.Component {
	render() {
		var { hide, dot, points, className, xAxisId, yAxisId, top, left, width, height, id, needClip, zIndex } = this.props;
		if (hide) return null;
		var layerClass = clsx("recharts-line", className);
		var clipPathId = id;
		var { r, strokeWidth } = getRadiusAndStrokeWidthFromDot(dot);
		var clipDot = isClipDot(dot);
		var dotSize = r * 2 + strokeWidth;
		var activePointsClipPath = needClip ? "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")") : void 0;
		return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex }, /* @__PURE__ */ import_react.createElement(Layer, { className: layerClass }, needClip && /* @__PURE__ */ import_react.createElement("defs", null, /* @__PURE__ */ import_react.createElement(GraphicalItemClipPath, {
			clipPathId,
			xAxisId,
			yAxisId
		}), !clipDot && /* @__PURE__ */ import_react.createElement("clipPath", { id: "clipPath-dots-".concat(clipPathId) }, /* @__PURE__ */ import_react.createElement("rect", {
			x: left - dotSize / 2,
			y: top - dotSize / 2,
			width: width + dotSize,
			height: height + dotSize
		}))), /* @__PURE__ */ import_react.createElement(SetErrorBarContext, {
			xAxisId,
			yAxisId,
			data: points,
			dataPointFormatter: errorBarDataPointFormatter$1,
			errorBarOffset: 0
		}, /* @__PURE__ */ import_react.createElement(RenderCurve, {
			props: this.props,
			clipPathId
		}))), /* @__PURE__ */ import_react.createElement(ActivePoints, {
			activeDot: this.props.activeDot,
			points,
			mainColor: this.props.stroke,
			itemDataKey: this.props.dataKey,
			clipPath: activePointsClipPath
		}));
	}
};
var defaultLineProps = {
	activeDot: true,
	animateNewValues: true,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	connectNulls: false,
	dot: true,
	fill: "#fff",
	hide: false,
	isAnimationActive: "auto",
	label: false,
	legendType: "line",
	stroke: "#3182bd",
	strokeWidth: 1,
	xAxisId: 0,
	yAxisId: 0,
	zIndex: DefaultZIndexes.line,
	type: "linear"
};
function LineImpl(props) {
	var _resolveDefaultProps = resolveDefaultProps(props, defaultLineProps), { activeDot, animateNewValues, animationBegin, animationDuration, animationEasing, connectNulls, dot, hide, isAnimationActive, label, legendType, xAxisId, yAxisId, id } = _resolveDefaultProps, everythingElse = _objectWithoutProperties$5(_resolveDefaultProps, _excluded3$2);
	var { needClip } = useNeedsClip(xAxisId, yAxisId);
	var plotArea = usePlotArea();
	var layout = useChartLayout();
	var isPanorama = useIsPanorama();
	var points = useAppSelector((state) => selectLinePoints(state, xAxisId, yAxisId, isPanorama, id));
	if (layout !== "horizontal" && layout !== "vertical" || points == null || plotArea == null) return null;
	var { height, width, x: left, y: top } = plotArea;
	return /* @__PURE__ */ import_react.createElement(LineWithState, _extends$6({}, everythingElse, {
		id,
		connectNulls,
		dot,
		activeDot,
		animateNewValues,
		animationBegin,
		animationDuration,
		animationEasing,
		isAnimationActive,
		hide,
		label,
		legendType,
		xAxisId,
		yAxisId,
		points,
		layout,
		height,
		width,
		left,
		top,
		needClip
	}));
}
function computeLinePoints(_ref7) {
	var { layout, xAxis, yAxis, xAxisTicks, yAxisTicks, dataKey, bandSize, displayedData } = _ref7;
	return displayedData.map((entry, index) => {
		var value = getValueByDataKey(entry, dataKey);
		if (layout === "horizontal") {
			var _x = getCateCoordinateOfLine({
				axis: xAxis,
				ticks: xAxisTicks,
				bandSize,
				entry,
				index
			});
			var _y = isNullish(value) ? null : yAxis.scale.map(value);
			return {
				x: _x,
				y: _y !== null && _y !== void 0 ? _y : null,
				value,
				payload: entry
			};
		}
		var x = isNullish(value) ? null : xAxis.scale.map(value);
		var y = getCateCoordinateOfLine({
			axis: yAxis,
			ticks: yAxisTicks,
			bandSize,
			entry,
			index
		});
		if (x == null || y == null) return null;
		return {
			x,
			y,
			value,
			payload: entry
		};
	}).filter(Boolean);
}
function LineFn(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultLineProps);
	var isPanorama = useIsPanorama();
	return /* @__PURE__ */ import_react.createElement(RegisterGraphicalItemId, {
		id: props.id,
		type: "line"
	}, (id) => /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(SetLegendPayload, { legendPayload: computeLegendPayloadFromAreaData(props) }), /* @__PURE__ */ import_react.createElement(SetLineTooltipEntrySettings, {
		dataKey: props.dataKey,
		data: props.data,
		stroke: props.stroke,
		strokeWidth: props.strokeWidth,
		fill: props.fill,
		name: props.name,
		hide: props.hide,
		unit: props.unit,
		tooltipType: props.tooltipType,
		id
	}), /* @__PURE__ */ import_react.createElement(SetCartesianGraphicalItem, {
		type: "line",
		id,
		data: props.data,
		xAxisId: props.xAxisId,
		yAxisId: props.yAxisId,
		zAxisId: 0,
		dataKey: props.dataKey,
		hide: props.hide,
		isPanorama
	}), /* @__PURE__ */ import_react.createElement(LineImpl, _extends$6({}, props, { id }))));
}
/**
* @provides LabelListContext
* @provides ErrorBarContext
* @consumes CartesianChartContext
*/
var Line = /* @__PURE__ */ import_react.memo(LineFn, propsAreEqual);
Line.displayName = "Line";
//#endregion
//#region ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = true;
var prefix = "Invariant failed";
function invariant(condition, message) {
	if (condition) return;
	if (isProduction) throw new Error(prefix);
	var provided = typeof message === "function" ? message() : message;
	var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
	throw new Error(value);
}
//#endregion
//#region ../../node_modules/recharts/es6/util/BarUtils.js
function _extends$5() {
	return _extends$5 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$5.apply(null, arguments);
}
function BarRectangle(props) {
	return /* @__PURE__ */ import_react.createElement(Shape, _extends$5({
		shapeType: "rectangle",
		activeClassName: "recharts-active-bar",
		inActiveClassName: "recharts-inactive-bar"
	}, props));
}
/**
* Safely gets minPointSize from the minPointSize prop if it is a function
* @param minPointSize minPointSize as passed to the Bar component
* @param defaultValue default minPointSize
* @returns minPointSize
*/
var minPointSizeCallback = function minPointSizeCallback(minPointSize) {
	var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
	return (value, index) => {
		if (isNumber(minPointSize)) return minPointSize;
		var isValueNumberOrNil = isNumber(value) || isNullish(value);
		if (isValueNumberOrNil) return minPointSize(value, index);
		!isValueNumberOrNil && invariant(false, "minPointSize callback function received a value with type of ".concat(typeof value, ". Currently only numbers or null/undefined are supported."));
		return defaultValue;
	};
};
//#endregion
//#region ../../node_modules/recharts/es6/state/selectors/barSelectors.js
var pickIsPanorama = (_state, _id, isPanorama) => isPanorama;
var pickBarId = (_state, id) => id;
var selectSynchronisedBarSettings = createSelector([selectUnfilteredCartesianItems, pickBarId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "bar").find((item) => item.id === id));
var selectMaxBarSize = createSelector([selectSynchronisedBarSettings], (barSettings) => barSettings === null || barSettings === void 0 ? void 0 : barSettings.maxBarSize);
var pickCells = (_state, _id, _isPanorama, cells) => cells;
var selectAllVisibleBars = createSelector([
	selectChartLayout,
	selectUnfilteredCartesianItems,
	selectXAxisIdFromGraphicalItemId,
	selectYAxisIdFromGraphicalItemId,
	pickIsPanorama
], (layout, allItems, xAxisId, yAxisId, isPanorama) => allItems.filter((i) => {
	if (layout === "horizontal") return i.xAxisId === xAxisId;
	return i.yAxisId === yAxisId;
}).filter((i) => i.isPanorama === isPanorama).filter((i) => i.hide === false).filter((i) => i.type === "bar"));
var selectBarStackGroups = (state, id, isPanorama) => {
	var layout = selectChartLayout(state);
	var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
	var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
	if (xAxisId == null || yAxisId == null) return;
	if (layout === "horizontal") return selectStackGroups(state, "yAxis", yAxisId, isPanorama);
	return selectStackGroups(state, "xAxis", xAxisId, isPanorama);
};
var selectBarCartesianAxisSize = (state, id) => {
	var layout = selectChartLayout(state);
	var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
	var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
	if (xAxisId == null || yAxisId == null) return;
	if (layout === "horizontal") return selectCartesianAxisSize(state, "xAxis", xAxisId);
	return selectCartesianAxisSize(state, "yAxis", yAxisId);
};
var selectBarSizeList = createSelector([
	selectAllVisibleBars,
	selectRootBarSize,
	selectBarCartesianAxisSize
], combineBarSizeList);
var selectBarBandSize = (state, id, isPanorama) => {
	var _ref, _getBandSizeOfAxis;
	var barSettings = selectSynchronisedBarSettings(state, id);
	if (barSettings == null) return 0;
	var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
	var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
	if (xAxisId == null || yAxisId == null) return 0;
	var layout = selectChartLayout(state);
	var globalMaxBarSize = selectRootMaxBarSize(state);
	var { maxBarSize: childMaxBarSize } = barSettings;
	var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
	var axis, ticks;
	if (layout === "horizontal") {
		axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
		ticks = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
	} else {
		axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
		ticks = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
	}
	return (_ref = (_getBandSizeOfAxis = getBandSizeOfAxis(axis, ticks, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref !== void 0 ? _ref : 0;
};
var selectAxisBandSize = (state, id, isPanorama) => {
	var layout = selectChartLayout(state);
	var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
	var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
	if (xAxisId == null || yAxisId == null) return;
	var axis, ticks;
	if (layout === "horizontal") {
		axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
		ticks = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
	} else {
		axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
		ticks = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
	}
	return getBandSizeOfAxis(axis, ticks);
};
var selectAllBarPositions = createSelector([
	selectBarSizeList,
	selectRootMaxBarSize,
	selectBarGap,
	selectBarCategoryGap,
	selectBarBandSize,
	selectAxisBandSize,
	selectMaxBarSize
], combineAllBarPositions);
var selectXAxisWithScale = (state, id, isPanorama) => {
	var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
	if (xAxisId == null) return;
	return selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
};
var selectYAxisWithScale = (state, id, isPanorama) => {
	var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
	if (yAxisId == null) return;
	return selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
};
var selectXAxisTicks = (state, id, isPanorama) => {
	var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
	if (xAxisId == null) return;
	return selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
};
var selectYAxisTicks = (state, id, isPanorama) => {
	var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
	if (yAxisId == null) return;
	return selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
};
var selectBarRectangles = createSelector([
	selectChartOffsetInternal,
	selectAxisViewBox,
	selectXAxisWithScale,
	selectYAxisWithScale,
	selectXAxisTicks,
	selectYAxisTicks,
	createSelector([selectAllBarPositions, selectSynchronisedBarSettings], combineBarPosition),
	selectChartLayout,
	selectChartDataWithIndexesIfNotInPanoramaPosition3,
	selectAxisBandSize,
	createSelector([selectBarStackGroups, selectSynchronisedBarSettings], combineStackedData),
	selectSynchronisedBarSettings,
	pickCells
], (offset, axisViewBox, xAxis, yAxis, xAxisTicks, yAxisTicks, pos, layout, _ref2, bandSize, stackedData, barSettings, cells) => {
	var { chartData, dataStartIndex, dataEndIndex } = _ref2;
	if (barSettings == null || pos == null || axisViewBox == null || layout !== "horizontal" && layout !== "vertical" || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || bandSize == null) return;
	var { data } = barSettings;
	var displayedData;
	if (data != null && data.length > 0) displayedData = data;
	else displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
	if (displayedData == null) return;
	return computeBarRectangles({
		layout,
		barSettings,
		pos,
		parentViewBox: axisViewBox,
		bandSize,
		xAxis,
		yAxis,
		xAxisTicks,
		yAxisTicks,
		stackedData,
		displayedData,
		offset,
		cells,
		dataStartIndex
	});
});
//#endregion
//#region ../../node_modules/recharts/es6/cartesian/BarStack.js
var _excluded$4 = ["index"];
function _extends$4() {
	return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$4.apply(null, arguments);
}
function _objectWithoutProperties$4(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$4(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$4(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var BarStackContext = /* @__PURE__ */ (0, import_react.createContext)(void 0);
/**
* Hook to resolve the stack ID for a Bar component.
* If a stack ID is provided via props, it is used directly.
* Otherwise, this will read stack ID from BarStack context if available.
* If both are undefined, it returns undefined.
* @param childStackId
*/
var useStackId = (childStackId) => {
	var stackSettings = (0, import_react.useContext)(BarStackContext);
	if (stackSettings != null) return stackSettings.stackId;
	if (childStackId == null) return;
	return getNormalizedStackId(childStackId);
};
var getClipPathId = (stackId, index) => {
	return "recharts-bar-stack-clip-path-".concat(stackId, "-").concat(index);
};
var useBarStackClipPathUrl = (index) => {
	var barStackContext = (0, import_react.useContext)(BarStackContext);
	if (barStackContext == null) return;
	var { stackId } = barStackContext;
	return "url(#".concat(getClipPathId(stackId, index), ")");
};
var BarStackClipLayer = (_ref) => {
	var { index } = _ref, rest = _objectWithoutProperties$4(_ref, _excluded$4);
	var clipPathUrl = useBarStackClipPathUrl(index);
	return /* @__PURE__ */ import_react.createElement(Layer, _extends$4({
		className: "recharts-bar-stack-layer",
		clipPath: clipPathUrl
	}, rest));
};
//#endregion
//#region ../../node_modules/recharts/es6/cartesian/Bar.js
var _excluded$3 = [
	"onMouseEnter",
	"onMouseLeave",
	"onClick"
], _excluded2$2 = [
	"value",
	"background",
	"tooltipPosition"
], _excluded3$1 = ["id"], _excluded4 = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
];
function _extends$3() {
	return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$3.apply(null, arguments);
}
function ownKeys$4(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$4(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$4(Object(t), !0).forEach(function(r) {
			_defineProperty$4(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$4(e, r, t) {
	return (r = _toPropertyKey$4(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$4(t) {
	var i = _toPrimitive$4(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$4(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$3(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$3(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$3(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var computeLegendPayloadFromBarData = (props) => {
	var { dataKey, name, fill, legendType, hide } = props;
	return [{
		inactive: hide,
		dataKey,
		type: legendType,
		color: fill,
		value: getTooltipNameProp(name, dataKey),
		payload: props
	}];
};
var SetBarTooltipEntrySettings = /* @__PURE__ */ import_react.memo((_ref) => {
	var { dataKey, stroke, strokeWidth, fill, name, hide, unit, tooltipType, id } = _ref;
	var tooltipEntrySettings = {
		dataDefinedOnItem: void 0,
		getPosition: noop$1,
		settings: {
			stroke,
			strokeWidth,
			fill,
			dataKey,
			nameKey: void 0,
			name: getTooltipNameProp(name, dataKey),
			hide,
			type: tooltipType,
			color: fill,
			unit,
			graphicalItemId: id
		}
	};
	return /* @__PURE__ */ import_react.createElement(SetTooltipEntrySettings, { tooltipEntrySettings });
});
function BarBackground(props) {
	var activeIndex = useAppSelector(selectActiveTooltipIndex);
	var { data, dataKey, background: backgroundFromProps, allOtherBarProps } = props;
	var { onMouseEnter: onMouseEnterFromProps, onMouseLeave: onMouseLeaveFromProps, onClick: onItemClickFromProps } = allOtherBarProps, restOfAllOtherProps = _objectWithoutProperties$3(allOtherBarProps, _excluded$3);
	var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, allOtherBarProps.id);
	var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
	var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, allOtherBarProps.id);
	if (!backgroundFromProps || data == null) return null;
	var backgroundProps = svgPropertiesNoEventsFromUnknown(backgroundFromProps);
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: getZIndexFromUnknown(backgroundFromProps, DefaultZIndexes.barBackground) }, data.map((entry, i) => {
		var { value, background: backgroundFromDataEntry, tooltipPosition } = entry, rest = _objectWithoutProperties$3(entry, _excluded2$2);
		if (!backgroundFromDataEntry) return null;
		var onMouseEnter = onMouseEnterFromContext(entry, i);
		var onMouseLeave = onMouseLeaveFromContext(entry, i);
		var onClick = onClickFromContext(entry, i);
		var barRectangleProps = _objectSpread$4(_objectSpread$4(_objectSpread$4(_objectSpread$4(_objectSpread$4({
			option: backgroundFromProps,
			isActive: String(i) === activeIndex
		}, rest), {}, { fill: "#eee" }, backgroundFromDataEntry), backgroundProps), adaptEventsOfChild(restOfAllOtherProps, entry, i)), {}, {
			onMouseEnter,
			onMouseLeave,
			onClick,
			dataKey,
			index: i,
			className: "recharts-bar-background-rectangle"
		});
		return /* @__PURE__ */ import_react.createElement(BarRectangle, _extends$3({ key: "background-bar-".concat(i) }, barRectangleProps));
	}));
}
function BarLabelListProvider(_ref2) {
	var { showLabels, children, rects } = _ref2;
	var labelListEntries = rects === null || rects === void 0 ? void 0 : rects.map((entry) => {
		var viewBox = {
			x: entry.x,
			y: entry.y,
			width: entry.width,
			lowerWidth: entry.width,
			upperWidth: entry.width,
			height: entry.height
		};
		return _objectSpread$4(_objectSpread$4({}, viewBox), {}, {
			value: entry.value,
			payload: entry.payload,
			parentViewBox: entry.parentViewBox,
			viewBox,
			fill: entry.fill
		});
	});
	return /* @__PURE__ */ import_react.createElement(CartesianLabelListContextProvider, { value: showLabels ? labelListEntries : void 0 }, children);
}
function BarRectangleWithActiveState(props) {
	var { shape, activeBar, baseProps, entry, index, dataKey } = props;
	var activeIndex = useAppSelector(selectActiveTooltipIndex);
	var activeDataKey = useAppSelector(selectActiveTooltipDataKey);
	var isActive = activeBar && String(entry.originalDataIndex) === activeIndex && (activeDataKey == null || dataKey === activeDataKey);
	var [stayInLayer, setStayInLayer] = (0, import_react.useState)(false);
	var [hasMountedActive, setHasMountedActive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		var rafId;
		if (isActive) {
			setStayInLayer(true);
			rafId = requestAnimationFrame(() => {
				setHasMountedActive(true);
			});
		} else setHasMountedActive(false);
		return () => {
			cancelAnimationFrame(rafId);
		};
	}, [isActive]);
	var handleTransitionEnd = (0, import_react.useCallback)(() => {
		if (!isActive) setStayInLayer(false);
	}, [isActive]);
	var isVisuallyActive = isActive && hasMountedActive;
	var shouldRenderInLayer = isActive || stayInLayer;
	var option;
	if (isActive) if (activeBar === true) option = shape;
	else option = activeBar;
	else option = shape;
	var content = /* @__PURE__ */ import_react.createElement(BarRectangle, _extends$3({}, baseProps, { name: String(baseProps.name) }, entry, {
		isActive: isVisuallyActive,
		option,
		index,
		dataKey,
		onTransitionEnd: handleTransitionEnd
	}));
	if (shouldRenderInLayer) return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: DefaultZIndexes.activeBar }, /* @__PURE__ */ import_react.createElement(BarStackClipLayer, { index: entry.originalDataIndex }, content));
	return content;
}
function BarRectangleNeverActive(props) {
	var { shape, baseProps, entry, index, dataKey } = props;
	return /* @__PURE__ */ import_react.createElement(BarRectangle, _extends$3({}, baseProps, { name: String(baseProps.name) }, entry, {
		isActive: false,
		option: shape,
		index,
		dataKey
	}));
}
function BarRectangles(_ref3) {
	var _svgPropertiesNoEvent;
	var { data, props } = _ref3;
	var _ref4 = (_svgPropertiesNoEvent = svgPropertiesNoEvents(props)) !== null && _svgPropertiesNoEvent !== void 0 ? _svgPropertiesNoEvent : {}, { id } = _ref4, baseProps = _objectWithoutProperties$3(_ref4, _excluded3$1);
	var { shape, dataKey, activeBar } = props;
	var { onMouseEnter: onMouseEnterFromProps, onClick: onItemClickFromProps, onMouseLeave: onMouseLeaveFromProps } = props, restOfAllOtherProps = _objectWithoutProperties$3(props, _excluded4);
	var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, id);
	var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
	var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, id);
	if (!data) return null;
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, data.map((entry, i) => {
		return /* @__PURE__ */ import_react.createElement(BarStackClipLayer, _extends$3({
			index: entry.originalDataIndex,
			key: "rectangle-".concat(entry === null || entry === void 0 ? void 0 : entry.x, "-").concat(entry === null || entry === void 0 ? void 0 : entry.y, "-").concat(entry === null || entry === void 0 ? void 0 : entry.value, "-").concat(i),
			className: "recharts-bar-rectangle"
		}, adaptEventsOfChild(restOfAllOtherProps, entry, i), {
			onMouseEnter: onMouseEnterFromContext(entry, i),
			onMouseLeave: onMouseLeaveFromContext(entry, i),
			onClick: onClickFromContext(entry, i)
		}), activeBar ? /* @__PURE__ */ import_react.createElement(BarRectangleWithActiveState, {
			shape,
			activeBar,
			baseProps,
			entry,
			index: i,
			dataKey
		}) : /* @__PURE__ */ import_react.createElement(BarRectangleNeverActive, {
			shape,
			baseProps,
			entry,
			index: i,
			dataKey
		}));
	}));
}
function RectanglesWithAnimation(_ref5) {
	var { props, previousRectanglesRef } = _ref5;
	var { data, layout, isAnimationActive, animationBegin, animationDuration, animationEasing, onAnimationEnd, onAnimationStart } = props;
	var prevData = previousRectanglesRef.current;
	var animationId = useAnimationId(props, "recharts-bar-");
	var [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
	var showLabels = !isAnimating;
	var handleAnimationEnd = (0, import_react.useCallback)(() => {
		if (typeof onAnimationEnd === "function") onAnimationEnd();
		setIsAnimating(false);
	}, [onAnimationEnd]);
	var handleAnimationStart = (0, import_react.useCallback)(() => {
		if (typeof onAnimationStart === "function") onAnimationStart();
		setIsAnimating(true);
	}, [onAnimationStart]);
	return /* @__PURE__ */ import_react.createElement(BarLabelListProvider, {
		showLabels,
		rects: data
	}, /* @__PURE__ */ import_react.createElement(JavascriptAnimate, {
		animationId,
		begin: animationBegin,
		duration: animationDuration,
		isActive: isAnimationActive,
		easing: animationEasing,
		onAnimationEnd: handleAnimationEnd,
		onAnimationStart: handleAnimationStart,
		key: animationId
	}, (t) => {
		var stepData = t === 1 ? data : data === null || data === void 0 ? void 0 : data.map((entry, index) => {
			var prev = prevData && prevData[index];
			if (prev) return _objectSpread$4(_objectSpread$4({}, entry), {}, {
				x: interpolate(prev.x, entry.x, t),
				y: interpolate(prev.y, entry.y, t),
				width: interpolate(prev.width, entry.width, t),
				height: interpolate(prev.height, entry.height, t)
			});
			if (layout === "horizontal") {
				var height = interpolate(0, entry.height, t);
				var y = interpolate(entry.stackedBarStart, entry.y, t);
				return _objectSpread$4(_objectSpread$4({}, entry), {}, {
					y,
					height
				});
			}
			var w = interpolate(0, entry.width, t);
			var x = interpolate(entry.stackedBarStart, entry.x, t);
			return _objectSpread$4(_objectSpread$4({}, entry), {}, {
				width: w,
				x
			});
		});
		if (t > 0) previousRectanglesRef.current = stepData !== null && stepData !== void 0 ? stepData : null;
		if (stepData == null) return null;
		return /* @__PURE__ */ import_react.createElement(Layer, null, /* @__PURE__ */ import_react.createElement(BarRectangles, {
			props,
			data: stepData
		}));
	}), /* @__PURE__ */ import_react.createElement(LabelListFromLabelProp, { label: props.label }), props.children);
}
function RenderRectangles(props) {
	var previousRectanglesRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ import_react.createElement(RectanglesWithAnimation, {
		previousRectanglesRef,
		props
	});
}
var defaultMinPointSize = 0;
var errorBarDataPointFormatter = (dataPoint, dataKey) => {
	/**
	* if the value coming from `selectBarRectangles` is an array then this is a stacked bar chart.
	* arr[1] represents end value of the bar since the data is in the form of [startValue, endValue].
	* */
	var value = Array.isArray(dataPoint.value) ? dataPoint.value[1] : dataPoint.value;
	return {
		x: dataPoint.x,
		y: dataPoint.y,
		value,
		errorVal: getValueByDataKey(dataPoint, dataKey)
	};
};
var BarWithState = class extends import_react.PureComponent {
	render() {
		var { hide, data, dataKey, className, xAxisId, yAxisId, needClip, background, id } = this.props;
		if (hide || data == null) return null;
		var layerClass = clsx("recharts-bar", className);
		var clipPathId = id;
		return /* @__PURE__ */ import_react.createElement(Layer, {
			className: layerClass,
			id
		}, needClip && /* @__PURE__ */ import_react.createElement("defs", null, /* @__PURE__ */ import_react.createElement(GraphicalItemClipPath, {
			clipPathId,
			xAxisId,
			yAxisId
		})), /* @__PURE__ */ import_react.createElement(Layer, {
			className: "recharts-bar-rectangles",
			clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0
		}, /* @__PURE__ */ import_react.createElement(BarBackground, {
			data,
			dataKey,
			background,
			allOtherBarProps: this.props
		}), /* @__PURE__ */ import_react.createElement(RenderRectangles, this.props)));
	}
};
var defaultBarProps = {
	activeBar: false,
	animationBegin: 0,
	animationDuration: 400,
	animationEasing: "ease",
	background: false,
	hide: false,
	isAnimationActive: "auto",
	label: false,
	legendType: "rect",
	minPointSize: defaultMinPointSize,
	xAxisId: 0,
	yAxisId: 0,
	zIndex: DefaultZIndexes.bar
};
function BarImpl(props) {
	var { xAxisId, yAxisId, hide, legendType, minPointSize, activeBar, animationBegin, animationDuration, animationEasing, isAnimationActive } = props;
	var { needClip } = useNeedsClip(xAxisId, yAxisId);
	var layout = useChartLayout();
	var isPanorama = useIsPanorama();
	var cells = findAllByType(props.children, Cell);
	var rects = useAppSelector((state) => selectBarRectangles(state, props.id, isPanorama, cells));
	if (layout !== "vertical" && layout !== "horizontal") return null;
	var errorBarOffset;
	var firstDataPoint = rects === null || rects === void 0 ? void 0 : rects[0];
	if (firstDataPoint == null || firstDataPoint.height == null || firstDataPoint.width == null) errorBarOffset = 0;
	else errorBarOffset = layout === "vertical" ? firstDataPoint.height / 2 : firstDataPoint.width / 2;
	return /* @__PURE__ */ import_react.createElement(SetErrorBarContext, {
		xAxisId,
		yAxisId,
		data: rects,
		dataPointFormatter: errorBarDataPointFormatter,
		errorBarOffset
	}, /* @__PURE__ */ import_react.createElement(BarWithState, _extends$3({}, props, {
		layout,
		needClip,
		data: rects,
		xAxisId,
		yAxisId,
		hide,
		legendType,
		minPointSize,
		activeBar,
		animationBegin,
		animationDuration,
		animationEasing,
		isAnimationActive
	})));
}
function computeBarRectangles(_ref6) {
	var { layout, barSettings: { dataKey, minPointSize: minPointSizeProp, hasCustomShape }, pos, bandSize, xAxis, yAxis, xAxisTicks, yAxisTicks, stackedData, displayedData, offset, cells, parentViewBox, dataStartIndex } = _ref6;
	var numericAxis = layout === "horizontal" ? yAxis : xAxis;
	var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
	var baseValue = getBaseValueOfBar({ numericAxis });
	var stackedBarStart = numericAxis.scale.map(baseValue);
	return displayedData.map((entry, index) => {
		var value, x, y, width, height, background;
		if (stackedData) {
			var untruncatedValue = stackedData[index + dataStartIndex];
			if (untruncatedValue == null) return null;
			value = truncateByDomain(untruncatedValue, stackedDomain);
		} else {
			value = getValueByDataKey(entry, dataKey);
			if (!Array.isArray(value)) value = [baseValue, value];
		}
		var minPointSize = minPointSizeCallback(minPointSizeProp, defaultMinPointSize)(value[1], index);
		if (layout === "horizontal") {
			var _ref7;
			var baseValueScale = yAxis.scale.map(value[0]);
			var currentValueScale = yAxis.scale.map(value[1]);
			if (baseValueScale == null || currentValueScale == null) return null;
			x = getCateCoordinateOfBar({
				axis: xAxis,
				ticks: xAxisTicks,
				bandSize,
				offset: pos.offset,
				entry,
				index
			});
			y = (_ref7 = currentValueScale !== null && currentValueScale !== void 0 ? currentValueScale : baseValueScale) !== null && _ref7 !== void 0 ? _ref7 : void 0;
			width = pos.size;
			var computedHeight = baseValueScale - currentValueScale;
			height = isNan(computedHeight) ? 0 : computedHeight;
			background = {
				x,
				y: offset.top,
				width,
				height: offset.height
			};
			if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
				var delta = mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
				y -= delta;
				height += delta;
			}
		} else {
			var _baseValueScale = xAxis.scale.map(value[0]);
			var _currentValueScale = xAxis.scale.map(value[1]);
			if (_baseValueScale == null || _currentValueScale == null) return null;
			x = _baseValueScale;
			y = getCateCoordinateOfBar({
				axis: yAxis,
				ticks: yAxisTicks,
				bandSize,
				offset: pos.offset,
				entry,
				index
			});
			width = _currentValueScale - _baseValueScale;
			height = pos.size;
			background = {
				x: offset.left,
				y,
				width: offset.width,
				height
			};
			if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
				var _delta = mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
				width += _delta;
			}
		}
		if (x == null || y == null || width == null || height == null || !hasCustomShape && (width === 0 || height === 0)) return null;
		return _objectSpread$4(_objectSpread$4({}, entry), {}, {
			stackedBarStart,
			x,
			y,
			width,
			height,
			value: stackedData ? value : value[1],
			payload: entry,
			background,
			tooltipPosition: {
				x: x + width / 2,
				y: y + height / 2
			},
			parentViewBox,
			originalDataIndex: index
		}, cells && cells[index] && cells[index].props);
	}).filter(Boolean);
}
function BarFn(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultBarProps);
	var stackId = useStackId(props.stackId);
	var isPanorama = useIsPanorama();
	return /* @__PURE__ */ import_react.createElement(RegisterGraphicalItemId, {
		id: props.id,
		type: "bar"
	}, (id) => /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(SetLegendPayload, { legendPayload: computeLegendPayloadFromBarData(props) }), /* @__PURE__ */ import_react.createElement(SetBarTooltipEntrySettings, {
		dataKey: props.dataKey,
		stroke: props.stroke,
		strokeWidth: props.strokeWidth,
		fill: props.fill,
		name: props.name,
		hide: props.hide,
		unit: props.unit,
		tooltipType: props.tooltipType,
		id
	}), /* @__PURE__ */ import_react.createElement(SetCartesianGraphicalItem, {
		type: "bar",
		id,
		data: void 0,
		xAxisId: props.xAxisId,
		yAxisId: props.yAxisId,
		zAxisId: 0,
		dataKey: props.dataKey,
		stackId,
		hide: props.hide,
		barSize: props.barSize,
		minPointSize: props.minPointSize,
		maxBarSize: props.maxBarSize,
		isPanorama,
		hasCustomShape: props.shape != null
	}), /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: props.zIndex }, /* @__PURE__ */ import_react.createElement(BarImpl, _extends$3({}, props, { id })))));
}
/**
* @provides ErrorBarContext
* @provides LabelListContext
* @provides CellReader
* @consumes CartesianChartContext
* @consumes BarStackContext
*/
var Bar = /* @__PURE__ */ import_react.memo(BarFn, propsAreEqual);
Bar.displayName = "Bar";
//#endregion
//#region ../../node_modules/recharts/es6/cartesian/XAxis.js
/**
* @fileOverview X Axis
*/
var _excluded$2 = ["type"], _excluded2$1 = [
	"dangerouslySetInnerHTML",
	"ticks",
	"scale"
], _excluded3 = ["id", "scale"];
function _extends$2() {
	return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$2.apply(null, arguments);
}
function ownKeys$3(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$3(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$3(Object(t), !0).forEach(function(r) {
			_defineProperty$3(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$3(e, r, t) {
	return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$3(t) {
	var i = _toPrimitive$3(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$3(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$2(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$2(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$2(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function SetXAxisSettings(props) {
	var dispatch = useAppDispatch();
	var prevSettingsRef = (0, import_react.useRef)(null);
	var layout = useCartesianChartLayout();
	var { type: typeFromProps } = props, restProps = _objectWithoutProperties$2(props, _excluded$2);
	var evaluatedType = getAxisTypeBasedOnLayout(layout, "xAxis", typeFromProps);
	var settings = (0, import_react.useMemo)(() => {
		if (evaluatedType == null) return;
		return _objectSpread$3(_objectSpread$3({}, restProps), {}, { type: evaluatedType });
	}, [restProps, evaluatedType]);
	(0, import_react.useLayoutEffect)(() => {
		if (settings == null) return;
		if (prevSettingsRef.current === null) dispatch(addXAxis(settings));
		else if (prevSettingsRef.current !== settings) dispatch(replaceXAxis({
			prev: prevSettingsRef.current,
			next: settings
		}));
		prevSettingsRef.current = settings;
	}, [settings, dispatch]);
	(0, import_react.useLayoutEffect)(() => {
		return () => {
			if (prevSettingsRef.current) {
				dispatch(removeXAxis(prevSettingsRef.current));
				prevSettingsRef.current = null;
			}
		};
	}, [dispatch]);
	return null;
}
var XAxisImpl = (props) => {
	var { xAxisId, className } = props;
	var viewBox = useAppSelector(selectAxisViewBox);
	var isPanorama = useIsPanorama();
	var axisType = "xAxis";
	var cartesianTickItems = useAppSelector((state) => selectTicksOfAxis(state, axisType, xAxisId, isPanorama));
	var axisSize = useAppSelector((state) => selectXAxisSize(state, xAxisId));
	var position = useAppSelector((state) => selectXAxisPosition(state, xAxisId));
	var synchronizedSettings = useAppSelector((state) => selectXAxisSettingsNoDefaults(state, xAxisId));
	if (axisSize == null || position == null || synchronizedSettings == null) return null;
	var { dangerouslySetInnerHTML, ticks, scale: del } = props, allOtherProps = _objectWithoutProperties$2(props, _excluded2$1);
	var { id, scale: del2 } = synchronizedSettings, restSynchronizedSettings = _objectWithoutProperties$2(synchronizedSettings, _excluded3);
	return /* @__PURE__ */ import_react.createElement(CartesianAxis, _extends$2({}, allOtherProps, restSynchronizedSettings, {
		x: position.x,
		y: position.y,
		width: axisSize.width,
		height: axisSize.height,
		className: clsx("recharts-".concat(axisType, " ").concat(axisType), className),
		viewBox,
		ticks: cartesianTickItems,
		axisType,
		axisId: xAxisId
	}));
};
var xAxisDefaultProps = {
	allowDataOverflow: implicitXAxis.allowDataOverflow,
	allowDecimals: implicitXAxis.allowDecimals,
	allowDuplicatedCategory: implicitXAxis.allowDuplicatedCategory,
	angle: implicitXAxis.angle,
	axisLine: defaultCartesianAxisProps.axisLine,
	height: implicitXAxis.height,
	hide: false,
	includeHidden: implicitXAxis.includeHidden,
	interval: implicitXAxis.interval,
	label: false,
	minTickGap: implicitXAxis.minTickGap,
	mirror: implicitXAxis.mirror,
	orientation: implicitXAxis.orientation,
	padding: implicitXAxis.padding,
	reversed: implicitXAxis.reversed,
	scale: implicitXAxis.scale,
	tick: implicitXAxis.tick,
	tickCount: implicitXAxis.tickCount,
	tickLine: defaultCartesianAxisProps.tickLine,
	tickSize: defaultCartesianAxisProps.tickSize,
	type: implicitXAxis.type,
	niceTicks: implicitXAxis.niceTicks,
	xAxisId: 0
};
var XAxisSettingsDispatcher = (outsideProps) => {
	var props = resolveDefaultProps(outsideProps, xAxisDefaultProps);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(SetXAxisSettings, {
		allowDataOverflow: props.allowDataOverflow,
		allowDecimals: props.allowDecimals,
		allowDuplicatedCategory: props.allowDuplicatedCategory,
		angle: props.angle,
		dataKey: props.dataKey,
		domain: props.domain,
		height: props.height,
		hide: props.hide,
		id: props.xAxisId,
		includeHidden: props.includeHidden,
		interval: props.interval,
		minTickGap: props.minTickGap,
		mirror: props.mirror,
		name: props.name,
		orientation: props.orientation,
		padding: props.padding,
		reversed: props.reversed,
		scale: props.scale,
		tick: props.tick,
		tickCount: props.tickCount,
		tickFormatter: props.tickFormatter,
		ticks: props.ticks,
		type: props.type,
		unit: props.unit,
		niceTicks: props.niceTicks
	}), /* @__PURE__ */ import_react.createElement(XAxisImpl, props));
};
/**
* @consumes CartesianViewBoxContext
* @provides CartesianLabelContext
*/
var XAxis = /* @__PURE__ */ import_react.memo(XAxisSettingsDispatcher, axisPropsAreEqual);
XAxis.displayName = "XAxis";
//#endregion
//#region ../../node_modules/recharts/es6/chart/LineChart.js
var allowedTooltipTypes$3 = ["axis"];
/**
* @consumes ResponsiveContainerContext
* @provides CartesianViewBoxContext
* @provides CartesianChartContext
*/
var LineChart = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ import_react.createElement(CartesianChart, {
		chartName: "LineChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: allowedTooltipTypes$3,
		tooltipPayloadSearcher: arrayTooltipSearcher,
		categoricalChartProps: props,
		ref
	});
});
//#endregion
//#region ../../node_modules/recharts/es6/chart/BarChart.js
var allowedTooltipTypes$2 = ["axis", "item"];
/**
* @consumes ResponsiveContainerContext
* @provides CartesianViewBoxContext
* @provides CartesianChartContext
*/
var BarChart = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ import_react.createElement(CartesianChart, {
		chartName: "BarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: allowedTooltipTypes$2,
		tooltipPayloadSearcher: arrayTooltipSearcher,
		categoricalChartProps: props,
		ref
	});
});
//#endregion
//#region ../../node_modules/recharts/es6/state/ReportPolarOptions.js
function ReportPolarOptions(props) {
	var dispatch = useAppDispatch();
	(0, import_react.useEffect)(() => {
		dispatch(updatePolarOptions(props));
	}, [dispatch, props]);
	return null;
}
//#endregion
//#region ../../node_modules/recharts/es6/chart/PolarChart.js
var _excluded$1 = ["layout"];
function _extends$1() {
	return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$1.apply(null, arguments);
}
function _objectWithoutProperties$1(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$1(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$1(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function ownKeys$2(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$2(Object(t), !0).forEach(function(r) {
			_defineProperty$2(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$2(e, r, t) {
	return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
	var i = _toPrimitive$2(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$2(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/**
* These default props are the same for all PolarChart components.
*/
var defaultPolarChartProps = _objectSpread$2({
	accessibilityLayer: true,
	stackOffset: "none",
	barCategoryGap: "10%",
	barGap: 4,
	margin: {
		top: 5,
		right: 5,
		bottom: 5,
		left: 5
	},
	reverseStackOrder: false,
	syncMethod: "index",
	layout: "radial",
	responsive: false,
	cx: "50%",
	cy: "50%",
	innerRadius: 0,
	outerRadius: "80%"
}, initialEventSettingsState);
/**
* These props are required for the PolarChart to function correctly.
* Users usually would not need to specify these explicitly,
* because the convenience components like PieChart, RadarChart, etc.
* will provide these defaults.
* We can't have the defaults in this file because each of those convenience components
* have their own opinions about what they should be.
*/
/**
* These are one-time, immutable options that decide the chart's behavior.
* Users who wish to call CartesianChart may decide to pass these options explicitly,
* but usually we would expect that they use one of the convenience components like PieChart, RadarChart, etc.
*/
var PolarChart = /* @__PURE__ */ (0, import_react.forwardRef)(function PolarChart(props, ref) {
	var _polarChartProps$id;
	var polarChartProps = resolveDefaultProps(props.categoricalChartProps, defaultPolarChartProps);
	var { layout } = polarChartProps, otherCategoricalProps = _objectWithoutProperties$1(polarChartProps, _excluded$1);
	var { chartName, defaultTooltipEventType, validateTooltipEventTypes, tooltipPayloadSearcher } = props;
	var options = {
		chartName,
		defaultTooltipEventType,
		validateTooltipEventTypes,
		tooltipPayloadSearcher,
		eventEmitter: void 0
	};
	return /* @__PURE__ */ import_react.createElement(RechartsStoreProvider, {
		preloadedState: { options },
		reduxStoreName: (_polarChartProps$id = polarChartProps.id) !== null && _polarChartProps$id !== void 0 ? _polarChartProps$id : chartName
	}, /* @__PURE__ */ import_react.createElement(ChartDataContextProvider, { chartData: polarChartProps.data }), /* @__PURE__ */ import_react.createElement(ReportMainChartProps, {
		layout,
		margin: polarChartProps.margin
	}), /* @__PURE__ */ import_react.createElement(ReportEventSettings, {
		throttleDelay: polarChartProps.throttleDelay,
		throttledEvents: polarChartProps.throttledEvents
	}), /* @__PURE__ */ import_react.createElement(ReportChartProps, {
		baseValue: void 0,
		accessibilityLayer: polarChartProps.accessibilityLayer,
		barCategoryGap: polarChartProps.barCategoryGap,
		maxBarSize: polarChartProps.maxBarSize,
		stackOffset: polarChartProps.stackOffset,
		barGap: polarChartProps.barGap,
		barSize: polarChartProps.barSize,
		syncId: polarChartProps.syncId,
		syncMethod: polarChartProps.syncMethod,
		className: polarChartProps.className,
		reverseStackOrder: polarChartProps.reverseStackOrder
	}), /* @__PURE__ */ import_react.createElement(ReportPolarOptions, {
		cx: polarChartProps.cx,
		cy: polarChartProps.cy,
		startAngle: polarChartProps.startAngle,
		endAngle: polarChartProps.endAngle,
		innerRadius: polarChartProps.innerRadius,
		outerRadius: polarChartProps.outerRadius
	}), /* @__PURE__ */ import_react.createElement(CategoricalChart, _extends$1({}, otherCategoricalProps, { ref })));
});
//#endregion
//#region ../../node_modules/recharts/es6/chart/PieChart.js
function ownKeys$1(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$1(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$1(Object(t), !0).forEach(function(r) {
			_defineProperty$1(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$1(e, r, t) {
	return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
	var i = _toPrimitive$1(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$1(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var allowedTooltipTypes$1 = ["item"];
var defaultPieChartProps = _objectSpread$1(_objectSpread$1({}, defaultPolarChartProps), {}, {
	layout: "centric",
	startAngle: 0,
	endAngle: 360
});
/**
* @consumes ResponsiveContainerContext
* @provides PolarViewBoxContext
* @provides PolarChartContext
*/
var PieChart = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	var propsWithDefaults = resolveDefaultProps(props, defaultPieChartProps);
	return /* @__PURE__ */ import_react.createElement(PolarChart, {
		chartName: "PieChart",
		defaultTooltipEventType: "item",
		validateTooltipEventTypes: allowedTooltipTypes$1,
		tooltipPayloadSearcher: arrayTooltipSearcher,
		categoricalChartProps: propsWithDefaults,
		ref
	});
});
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/math/sumBy.js
var require_sumBy$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	var iteratee = require_iteratee();
	function sumBy(array, iteratee$1) {
		if (!array || !array.length) return 0;
		if (iteratee$1 != null) iteratee$1 = iteratee.iteratee(iteratee$1);
		let result = void 0;
		for (let i = 0; i < array.length; i++) {
			const current = iteratee$1 ? iteratee$1(array[i]) : array[i];
			if (current !== void 0) if (result === void 0) result = current;
			else result += current;
		}
		return result;
	}
	exports.sumBy = sumBy;
}));
//#endregion
//#region ../../node_modules/es-toolkit/compat/sumBy.js
var require_sumBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_sumBy$1().sumBy;
}));
//#endregion
//#region ../../node_modules/recharts/es6/chart/Sankey.js
var import_maxBy = /* @__PURE__ */ __toESM(require_maxBy());
var import_sumBy = /* @__PURE__ */ __toESM(require_sumBy());
var _excluded = [
	"sourceX",
	"sourceY",
	"sourceControlX",
	"targetX",
	"targetY",
	"targetControlX",
	"linkWidth"
], _excluded2 = [
	"className",
	"style",
	"children",
	"id"
];
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var interpolationGenerator = (a, b) => {
	var ka = +a;
	var kb = b - ka;
	return (t) => ka + kb * t;
};
var centerY = (node) => node.y + node.dy / 2;
var getValue = (entry) => entry && entry.value || 0;
var getSumOfIds = (links, ids) => ids.reduce((result, id) => result + getValue(links[id]), 0);
var getSumWithWeightedSource = (tree, links, ids) => ids.reduce((result, id) => {
	var link = links[id];
	if (link == null) return result;
	var sourceNode = tree[link.source];
	if (sourceNode == null) return result;
	return result + centerY(sourceNode) * getValue(links[id]);
}, 0);
var getSumWithWeightedTarget = (tree, links, ids) => ids.reduce((result, id) => {
	var link = links[id];
	if (link == null) return result;
	var targetNode = tree[link.target];
	if (targetNode == null) return result;
	return result + centerY(targetNode) * getValue(links[id]);
}, 0);
var ascendingY = (a, b) => a.y - b.y;
var searchTargetsAndSources = (links, id) => {
	var sourceNodes = [];
	var sourceLinks = [];
	var targetNodes = [];
	var targetLinks = [];
	for (var i = 0, len = links.length; i < len; i++) {
		var link = links[i];
		if ((link === null || link === void 0 ? void 0 : link.source) === id) {
			targetNodes.push(link.target);
			targetLinks.push(i);
		}
		if ((link === null || link === void 0 ? void 0 : link.target) === id) {
			sourceNodes.push(link.source);
			sourceLinks.push(i);
		}
	}
	return {
		sourceNodes,
		sourceLinks,
		targetLinks,
		targetNodes
	};
};
var updateDepthOfTargets = (tree, curNode) => {
	var { targetNodes } = curNode;
	for (var i = 0, len = targetNodes.length; i < len; i++) {
		var targetNode = targetNodes[i];
		if (targetNode == null) continue;
		var target = tree[targetNode];
		if (target) {
			target.depth = Math.max(curNode.depth + 1, target.depth);
			updateDepthOfTargets(tree, target);
		}
	}
};
var getNodesTree = (_ref, width, nodeWidth, align) => {
	var _maxBy$depth, _maxBy;
	var { nodes, links } = _ref;
	var tree = nodes.map((entry, index) => {
		var result = searchTargetsAndSources(links, index);
		return _objectSpread(_objectSpread(_objectSpread({}, entry), result), {}, {
			value: Math.max(getSumOfIds(links, result.sourceLinks), getSumOfIds(links, result.targetLinks)),
			depth: 0
		});
	});
	for (var i = 0, len = tree.length; i < len; i++) {
		var node = tree[i];
		if (node != null && !node.sourceNodes.length) updateDepthOfTargets(tree, node);
	}
	var maxDepth = (_maxBy$depth = (_maxBy = (0, import_maxBy.default)(tree, (entry) => entry.depth)) === null || _maxBy === void 0 ? void 0 : _maxBy.depth) !== null && _maxBy$depth !== void 0 ? _maxBy$depth : 0;
	if (maxDepth >= 1) {
		var childWidth = (width - nodeWidth) / maxDepth;
		for (var _i = 0, _len = tree.length; _i < _len; _i++) {
			var _node = tree[_i];
			if (_node == null) continue;
			if (!_node.targetNodes.length) {
				if (align === "justify") _node.depth = maxDepth;
			}
			_node.x = _node.depth * childWidth;
			_node.dx = nodeWidth;
		}
	}
	return {
		tree,
		maxDepth
	};
};
var getDepthTree = (tree) => {
	var result = [];
	for (var i = 0, len = tree.length; i < len; i++) {
		var _result$node$depth;
		var node = tree[i];
		if (node == null) continue;
		if (!result[node.depth]) result[node.depth] = [];
		(_result$node$depth = result[node.depth]) === null || _result$node$depth === void 0 || _result$node$depth.push(node);
	}
	return result;
};
var updateYOfTree = (depthTree, height, nodePadding, links, verticalAlign) => {
	var yRatio = Math.min(...depthTree.map((nodes) => (height - (nodes.length - 1) * nodePadding) / (0, import_sumBy.default)(nodes, getValue)));
	for (var d = 0, maxDepth = depthTree.length; d < maxDepth; d++) {
		var nodes = depthTree[d];
		if (nodes == null) continue;
		if (verticalAlign === "top") {
			var currentY = 0;
			for (var i = 0, len = nodes.length; i < len; i++) {
				var node = nodes[i];
				if (node == null) continue;
				node.dy = node.value * yRatio;
				node.y = currentY;
				currentY += node.dy + nodePadding;
			}
		} else for (var _i2 = 0, _len2 = nodes.length; _i2 < _len2; _i2++) {
			var _node2 = nodes[_i2];
			if (_node2 == null) continue;
			_node2.y = _i2;
			_node2.dy = _node2.value * yRatio;
		}
	}
	return links.map((link) => _objectSpread(_objectSpread({}, link), {}, { dy: getValue(link) * yRatio }));
};
var resolveCollisions = function resolveCollisions(depthTree, height, nodePadding) {
	var sort = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
	for (var i = 0, len = depthTree.length; i < len; i++) {
		var nodes = depthTree[i];
		if (nodes == null) continue;
		var n = nodes.length;
		if (sort) nodes.sort(ascendingY);
		var y0 = 0;
		for (var j = 0; j < n; j++) {
			var node = nodes[j];
			if (node == null) continue;
			var dy = y0 - node.y;
			if (dy > 0) node.y += dy;
			y0 = node.y + node.dy + nodePadding;
		}
		y0 = height + nodePadding;
		for (var _j = n - 1; _j >= 0; _j--) {
			var _node3 = nodes[_j];
			if (_node3 == null) continue;
			var _dy = _node3.y + _node3.dy + nodePadding - y0;
			if (_dy > 0) {
				_node3.y -= _dy;
				y0 = _node3.y;
			} else break;
		}
	}
};
var relaxLeftToRight = (tree, depthTree, links, alpha) => {
	for (var i = 0, maxDepth = depthTree.length; i < maxDepth; i++) {
		var nodes = depthTree[i];
		if (nodes == null) continue;
		for (var j = 0, len = nodes.length; j < len; j++) {
			var node = nodes[j];
			if (node == null) continue;
			if (node.sourceLinks.length) {
				var sourceSum = getSumOfIds(links, node.sourceLinks);
				var y = getSumWithWeightedSource(tree, links, node.sourceLinks) / sourceSum;
				node.y += (y - centerY(node)) * alpha;
			}
		}
	}
};
var relaxRightToLeft = (tree, depthTree, links, alpha) => {
	for (var i = depthTree.length - 1; i >= 0; i--) {
		var nodes = depthTree[i];
		if (nodes == null) continue;
		for (var j = 0, len = nodes.length; j < len; j++) {
			var node = nodes[j];
			if (node == null) continue;
			if (node.targetLinks.length) {
				var targetSum = getSumOfIds(links, node.targetLinks);
				var y = getSumWithWeightedTarget(tree, links, node.targetLinks) / targetSum;
				node.y += (y - centerY(node)) * alpha;
			}
		}
	}
};
var updateYOfLinks = (tree, links) => {
	for (var i = 0, len = tree.length; i < len; i++) {
		var node = tree[i];
		if (node == null) continue;
		var sy = 0;
		var ty = 0;
		node.targetLinks.sort((a, b) => {
			var _links$a, _links$b, _tree$targetA, _tree$targetB;
			var targetA = (_links$a = links[a]) === null || _links$a === void 0 ? void 0 : _links$a.target;
			var targetB = (_links$b = links[b]) === null || _links$b === void 0 ? void 0 : _links$b.target;
			if (targetA == null || targetB == null) return 0;
			var yA = (_tree$targetA = tree[targetA]) === null || _tree$targetA === void 0 ? void 0 : _tree$targetA.y;
			var yB = (_tree$targetB = tree[targetB]) === null || _tree$targetB === void 0 ? void 0 : _tree$targetB.y;
			if (yA == null || yB == null) return 0;
			return yA - yB;
		});
		node.sourceLinks.sort((a, b) => {
			var _links$a2, _links$b2, _tree$sourceA, _tree$sourceB;
			var sourceA = (_links$a2 = links[a]) === null || _links$a2 === void 0 ? void 0 : _links$a2.source;
			var sourceB = (_links$b2 = links[b]) === null || _links$b2 === void 0 ? void 0 : _links$b2.source;
			if (sourceA == null || sourceB == null) return 0;
			var yA = (_tree$sourceA = tree[sourceA]) === null || _tree$sourceA === void 0 ? void 0 : _tree$sourceA.y;
			var yB = (_tree$sourceB = tree[sourceB]) === null || _tree$sourceB === void 0 ? void 0 : _tree$sourceB.y;
			if (yA == null || yB == null) return 0;
			return yA - yB;
		});
		for (var j = 0, tLen = node.targetLinks.length; j < tLen; j++) {
			var targetLink = node.targetLinks[j];
			if (targetLink == null) continue;
			var link = links[targetLink];
			if (link) {
				link.sy = sy;
				sy += link.dy;
			}
		}
		for (var _j2 = 0, sLen = node.sourceLinks.length; _j2 < sLen; _j2++) {
			var sourceLink = node.sourceLinks[_j2];
			if (sourceLink == null) continue;
			var _link = links[sourceLink];
			if (_link) {
				_link.ty = ty;
				ty += _link.dy;
			}
		}
	}
};
var computeData = (_ref2) => {
	var { data, width, height, iterations, nodeWidth, nodePadding, sort, verticalAlign, align } = _ref2;
	var { links } = data;
	var { tree } = getNodesTree(data, width, nodeWidth, align);
	var depthTree = getDepthTree(tree);
	var linksWithDy = updateYOfTree(depthTree, height, nodePadding, links, verticalAlign);
	resolveCollisions(depthTree, height, nodePadding, sort);
	if (verticalAlign === "justify") {
		var alpha = 1;
		for (var i = 1; i <= iterations; i++) {
			relaxRightToLeft(tree, depthTree, linksWithDy, alpha *= .99);
			resolveCollisions(depthTree, height, nodePadding, sort);
			relaxLeftToRight(tree, depthTree, linksWithDy, alpha);
			resolveCollisions(depthTree, height, nodePadding, sort);
		}
	}
	updateYOfLinks(tree, linksWithDy);
	return {
		nodes: tree,
		links: linksWithDy
	};
};
var getNodeCoordinateOfTooltip = (item) => {
	return {
		x: +item.x + +item.width / 2,
		y: +item.y + +item.height / 2
	};
};
var getLinkCoordinateOfTooltip = (item) => {
	return "sourceX" in item ? {
		x: (item.sourceX + item.targetX) / 2,
		y: (item.sourceY + item.targetY) / 2
	} : void 0;
};
var getPayloadOfTooltip = (item, type, nameKey) => {
	var { payload } = item;
	if (type === "node") return {
		payload,
		name: getValueByDataKey(payload, nameKey, ""),
		value: getValueByDataKey(payload, "value")
	};
	if ("source" in payload && payload.source && payload.target) {
		var sourceName = getValueByDataKey(payload.source, nameKey, "");
		var targetName = getValueByDataKey(payload.target, nameKey, "");
		return {
			payload,
			name: "".concat(sourceName, " - ").concat(targetName),
			value: getValueByDataKey(payload, "value")
		};
	}
};
var sankeyPayloadSearcher = (_, activeIndex, computedData, nameKey) => {
	if (activeIndex == null || typeof activeIndex !== "string") return;
	if (computedData == null || typeof computedData !== "object") return;
	var [targetType, index] = activeIndex.split("-");
	var item = (0, import_get.default)(computedData, "".concat(targetType, "s[").concat(index, "]"));
	if (item) return getPayloadOfTooltip(item, targetType, nameKey);
};
var options = {
	chartName: "Sankey",
	defaultTooltipEventType: "item",
	validateTooltipEventTypes: ["item"],
	tooltipPayloadSearcher: sankeyPayloadSearcher,
	eventEmitter: void 0
};
var SetSankeyTooltipEntrySettings = /* @__PURE__ */ import_react.memo((_ref3) => {
	var { dataKey, nameKey, stroke, strokeWidth, fill, name, data, id } = _ref3;
	var tooltipEntrySettings = {
		dataDefinedOnItem: data,
		getPosition: noop$1,
		settings: {
			stroke,
			strokeWidth,
			fill,
			dataKey,
			name,
			nameKey,
			hide: false,
			type: void 0,
			color: fill,
			unit: "",
			graphicalItemId: id
		}
	};
	return /* @__PURE__ */ import_react.createElement(SetTooltipEntrySettings, { tooltipEntrySettings });
});
function renderLinkItem(option, props) {
	if (/* @__PURE__ */ import_react.isValidElement(option)) return /* @__PURE__ */ import_react.cloneElement(option, props);
	if (typeof option === "function") return option(props);
	var { sourceX, sourceY, sourceControlX, targetX, targetY, targetControlX, linkWidth } = props, others = _objectWithoutProperties(props, _excluded);
	return /* @__PURE__ */ import_react.createElement("path", _extends({
		className: "recharts-sankey-link",
		d: "\n          M".concat(sourceX, ",").concat(sourceY, "\n          C").concat(sourceControlX, ",").concat(sourceY, " ").concat(targetControlX, ",").concat(targetY, " ").concat(targetX, ",").concat(targetY, "\n        "),
		fill: "none",
		stroke: "#333",
		strokeWidth: linkWidth,
		strokeOpacity: "0.2"
	}, svgPropertiesNoEvents(others)));
}
var buildLinkProps = (_ref4) => {
	var { link, nodes, left, top, i, linkContent, linkCurvature } = _ref4;
	var { sy: sourceRelativeY, ty: targetRelativeY, dy: linkWidth } = link;
	var sourceNode = nodes[link.source];
	var targetNode = nodes[link.target];
	if (sourceNode == null || targetNode == null) return;
	var sourceX = sourceNode.x + sourceNode.dx + left;
	var targetX = targetNode.x + left;
	var interpolationFunc = interpolationGenerator(sourceX, targetX);
	var sourceControlX = interpolationFunc(linkCurvature);
	var targetControlX = interpolationFunc(1 - linkCurvature);
	return _objectSpread({
		sourceX,
		targetX,
		sourceY: sourceNode.y + sourceRelativeY + linkWidth / 2 + top,
		targetY: targetNode.y + targetRelativeY + linkWidth / 2 + top,
		sourceControlX,
		targetControlX,
		sourceRelativeY,
		targetRelativeY,
		linkWidth,
		index: i,
		payload: _objectSpread(_objectSpread({}, link), {}, {
			source: sourceNode,
			target: targetNode
		})
	}, svgPropertiesNoEventsFromUnknown(linkContent));
};
function SankeyLinkElement(_ref5) {
	var { graphicalItemId, props, i, linkContent, onMouseEnter: _onMouseEnter, onMouseLeave: _onMouseLeave, onClick: _onClick, dataKey } = _ref5;
	var activeCoordinate = getLinkCoordinateOfTooltip(props);
	var activeIndex = "link-".concat(i);
	var dispatch = useAppDispatch();
	return /* @__PURE__ */ import_react.createElement(Layer, {
		onMouseEnter: (e) => {
			dispatch(setActiveMouseOverItemIndex({
				activeIndex,
				activeDataKey: dataKey,
				activeCoordinate,
				activeGraphicalItemId: graphicalItemId
			}));
			_onMouseEnter(props, e);
		},
		onMouseLeave: (e) => {
			dispatch(mouseLeaveItem());
			_onMouseLeave(props, e);
		},
		onClick: (e) => {
			dispatch(setActiveClickItemIndex({
				activeIndex,
				activeDataKey: dataKey,
				activeCoordinate,
				activeGraphicalItemId: graphicalItemId
			}));
			_onClick(props, e);
		}
	}, renderLinkItem(linkContent, props));
}
function AllSankeyLinkElements(_ref6) {
	var { graphicalItemId, modifiedLinks, links, linkContent, onMouseEnter, onMouseLeave, onClick, dataKey } = _ref6;
	return /* @__PURE__ */ import_react.createElement(Layer, {
		className: "recharts-sankey-links",
		key: "recharts-sankey-links"
	}, links.map((link, i) => {
		var linkProps = modifiedLinks[i];
		if (linkProps == null) return null;
		return /* @__PURE__ */ import_react.createElement(SankeyLinkElement, {
			graphicalItemId,
			key: "link-".concat(link.source, "-").concat(link.target, "-").concat(link.value),
			props: linkProps,
			linkContent,
			i,
			onMouseEnter,
			onMouseLeave,
			onClick,
			dataKey
		});
	}));
}
function renderNodeItem(option, props) {
	if (/* @__PURE__ */ import_react.isValidElement(option)) return /* @__PURE__ */ import_react.cloneElement(option, props);
	if (typeof option === "function") return option(props);
	return /* @__PURE__ */ import_react.createElement(Rectangle, _extends({
		className: "recharts-sankey-node",
		fill: "#0088fe",
		fillOpacity: "0.8"
	}, svgPropertiesNoEvents(props)));
}
var buildNodeProps = (_ref7) => {
	var { node, nodeContent, top, left, i } = _ref7;
	var { x, y, dx, dy } = node;
	return _objectSpread(_objectSpread({}, svgPropertiesNoEventsFromUnknown(nodeContent)), {}, {
		x: x + left,
		y: y + top,
		width: dx,
		height: dy,
		index: i,
		payload: node
	});
};
function NodeElement(_ref8) {
	var { graphicalItemId, props, nodeContent, i, onMouseEnter: _onMouseEnter2, onMouseLeave: _onMouseLeave2, onClick: _onClick2, dataKey } = _ref8;
	var dispatch = useAppDispatch();
	var activeCoordinate = getNodeCoordinateOfTooltip(props);
	var activeIndex = "node-".concat(i);
	return /* @__PURE__ */ import_react.createElement(Layer, {
		onMouseEnter: (e) => {
			dispatch(setActiveMouseOverItemIndex({
				activeIndex,
				activeDataKey: dataKey,
				activeCoordinate,
				activeGraphicalItemId: graphicalItemId
			}));
			_onMouseEnter2(props, e);
		},
		onMouseLeave: (e) => {
			dispatch(mouseLeaveItem());
			_onMouseLeave2(props, e);
		},
		onClick: (e) => {
			dispatch(setActiveClickItemIndex({
				activeIndex,
				activeDataKey: dataKey,
				activeCoordinate,
				activeGraphicalItemId: graphicalItemId
			}));
			_onClick2(props, e);
		}
	}, renderNodeItem(nodeContent, props));
}
function AllNodeElements(_ref9) {
	var { graphicalItemId, modifiedNodes, nodeContent, onMouseEnter, onMouseLeave, onClick, dataKey } = _ref9;
	return /* @__PURE__ */ import_react.createElement(Layer, {
		className: "recharts-sankey-nodes",
		key: "recharts-sankey-nodes"
	}, modifiedNodes.map((modifiedNode, i) => {
		return /* @__PURE__ */ import_react.createElement(NodeElement, {
			graphicalItemId,
			key: "node-".concat(modifiedNode.index, "-").concat(modifiedNode.x, "-").concat(modifiedNode.y),
			props: modifiedNode,
			nodeContent,
			i,
			onMouseEnter,
			onMouseLeave,
			onClick,
			dataKey
		});
	}));
}
var sankeyDefaultProps = _objectSpread({
	align: "justify",
	dataKey: "value",
	iterations: 32,
	linkCurvature: .5,
	margin: {
		top: 5,
		right: 5,
		bottom: 5,
		left: 5
	},
	nameKey: "name",
	nodePadding: 10,
	nodeWidth: 10,
	sort: true,
	verticalAlign: "justify"
}, initialEventSettingsState);
function SankeyImpl(props) {
	var { className, style, children, id } = props, others = _objectWithoutProperties(props, _excluded2);
	var { link, dataKey, node, onMouseEnter, onMouseLeave, onClick, data, iterations, nodeWidth, nodePadding, sort, linkCurvature, margin, verticalAlign, align } = props;
	var attrs = svgPropertiesNoEvents(others);
	var width = useChartWidth();
	var height = useChartHeight();
	var { links, modifiedLinks, modifiedNodes } = (0, import_react.useMemo)(() => {
		var _margin$left, _margin$right, _margin$top, _margin$bottom;
		if (!data || !width || !height || width <= 0 || height <= 0) return {
			nodes: [],
			links: [],
			modifiedLinks: [],
			modifiedNodes: []
		};
		var computed = computeData({
			data,
			width: width - ((_margin$left = margin.left) !== null && _margin$left !== void 0 ? _margin$left : 0) - ((_margin$right = margin.right) !== null && _margin$right !== void 0 ? _margin$right : 0),
			height: height - ((_margin$top = margin.top) !== null && _margin$top !== void 0 ? _margin$top : 0) - ((_margin$bottom = margin.bottom) !== null && _margin$bottom !== void 0 ? _margin$bottom : 0),
			iterations,
			nodeWidth,
			nodePadding,
			sort,
			verticalAlign,
			align
		});
		var top = margin.top || 0;
		var left = margin.left || 0;
		var newModifiedLinks = computed.links.map((l, i) => {
			return buildLinkProps({
				link: l,
				nodes: computed.nodes,
				i,
				top,
				left,
				linkContent: link,
				linkCurvature
			});
		}).filter(isNotNil);
		var newModifiedNodes = computed.nodes.map((n, i) => {
			return buildNodeProps({
				node: n,
				nodeContent: node,
				i,
				top,
				left
			});
		});
		return {
			nodes: computed.nodes,
			links: computed.links,
			modifiedLinks: newModifiedLinks,
			modifiedNodes: newModifiedNodes
		};
	}, [
		data,
		width,
		height,
		margin,
		iterations,
		nodeWidth,
		nodePadding,
		sort,
		link,
		node,
		linkCurvature,
		align,
		verticalAlign
	]);
	var handleMouseEnter = (0, import_react.useCallback)((item, type, e) => {
		if (onMouseEnter) onMouseEnter(item, type, e);
	}, [onMouseEnter]);
	var handleMouseLeave = (0, import_react.useCallback)((item, type, e) => {
		if (onMouseLeave) onMouseLeave(item, type, e);
	}, [onMouseLeave]);
	var handleClick = (0, import_react.useCallback)((item, type, e) => {
		if (onClick) onClick(item, type, e);
	}, [onClick]);
	if (!isPositiveNumber(width) || !isPositiveNumber(height) || !data || !data.links || !data.nodes) return null;
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(SetComputedData, { computedData: {
		links: modifiedLinks,
		nodes: modifiedNodes
	} }), /* @__PURE__ */ import_react.createElement(Surface, _extends({}, attrs, {
		width,
		height
	}), children, /* @__PURE__ */ import_react.createElement(AllSankeyLinkElements, {
		graphicalItemId: id,
		links,
		modifiedLinks,
		linkContent: link,
		dataKey,
		onMouseEnter: (linkProps, e) => handleMouseEnter(linkProps, "link", e),
		onMouseLeave: (linkProps, e) => handleMouseLeave(linkProps, "link", e),
		onClick: (linkProps, e) => handleClick(linkProps, "link", e)
	}), /* @__PURE__ */ import_react.createElement(AllNodeElements, {
		graphicalItemId: id,
		modifiedNodes,
		nodeContent: node,
		dataKey,
		onMouseEnter: (nodeProps, e) => handleMouseEnter(nodeProps, "node", e),
		onMouseLeave: (nodeProps, e) => handleMouseLeave(nodeProps, "node", e),
		onClick: (nodeProps, e) => handleClick(nodeProps, "node", e)
	})));
}
/**
* Flow diagram in which the width of the arrows is proportional to the flow rate.
* It is typically used to visualize energy or material or cost transfers between processes.
*
* @consumes ResponsiveContainerContext
* @provides TooltipEntrySettings
*/
function Sankey$1(outsideProps) {
	var props = resolveDefaultProps(outsideProps, sankeyDefaultProps);
	var { width, height, style, className, id: externalId, throttleDelay, throttledEvents } = props;
	var [tooltipPortal, setTooltipPortal] = (0, import_react.useState)(null);
	return /* @__PURE__ */ import_react.createElement(RechartsStoreProvider, {
		preloadedState: { options },
		reduxStoreName: className !== null && className !== void 0 ? className : "Sankey"
	}, /* @__PURE__ */ import_react.createElement(ReportChartSize, {
		width,
		height
	}), /* @__PURE__ */ import_react.createElement(ReportChartMargin, { margin: props.margin }), /* @__PURE__ */ import_react.createElement(ReportEventSettings, {
		throttleDelay,
		throttledEvents
	}), /* @__PURE__ */ import_react.createElement(RechartsWrapper, {
		className,
		style,
		width,
		height,
		responsive: false,
		ref: (node) => {
			if (node && !tooltipPortal) setTooltipPortal(node);
		},
		onMouseEnter: void 0,
		onMouseLeave: void 0,
		onClick: void 0,
		onMouseMove: void 0,
		onMouseDown: void 0,
		onMouseUp: void 0,
		onContextMenu: void 0,
		onDoubleClick: void 0,
		onTouchStart: void 0,
		onTouchMove: void 0,
		onTouchEnd: void 0
	}, /* @__PURE__ */ import_react.createElement(TooltipPortalContext.Provider, { value: tooltipPortal }, /* @__PURE__ */ import_react.createElement(RegisterGraphicalItemId, {
		id: externalId,
		type: "sankey"
	}, (id) => /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(SetSankeyTooltipEntrySettings, {
		dataKey: props.dataKey,
		nameKey: props.nameKey,
		stroke: props.stroke,
		strokeWidth: props.strokeWidth,
		fill: props.fill,
		name: props.name,
		data: props.data,
		id
	}), /* @__PURE__ */ import_react.createElement(SankeyImpl, _extends({}, props, { id })))))));
}
Sankey$1.displayName = "Sankey";
//#endregion
//#region ../../node_modules/recharts/es6/chart/ComposedChart.js
var allowedTooltipTypes = ["axis"];
/**
* @consumes ResponsiveContainerContext
* @provides CartesianViewBoxContext
* @provides CartesianChartContext
*/
var ComposedChart = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ import_react.createElement(CartesianChart, {
		chartName: "ComposedChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: allowedTooltipTypes,
		tooltipPayloadSearcher: arrayTooltipSearcher,
		categoricalChartProps: props,
		ref
	});
});
//#endregion
//#region src/components/EditablePageHeaderTitle.tsx
var import_jsx_runtime = require_jsx_runtime();
function EditablePageHeaderTitle({ title: initialTitle, onSave }) {
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [title, setTitle] = (0, import_react.useState)(initialTitle);
	(0, import_react.useEffect)(() => setTitle(initialTitle), [initialTitle]);
	const onSaveValue = (0, import_react.useCallback)((newValue) => {
		onSave(newValue);
		setTitle(newValue);
		setIsEditing(false);
	}, [onSave]);
	if (isEditing) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InitialFocus, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		defaultValue: title,
		onEnter: onSaveValue,
		onUpdate: onSaveValue,
		onEscape: () => setIsEditing(false),
		style: {
			fontSize: 25,
			fontWeight: 500,
			marginTop: -3,
			marginBottom: -3,
			marginLeft: -6,
			paddingTop: 2,
			paddingBottom: 2,
			width: Math.max(20, title.length) + "ch"
		}
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flexDirection: "row",
			alignItems: "center",
			gap: 3,
			"& .hover-visible": {
				opacity: 0,
				transition: "opacity .25s"
			},
			"&:hover .hover-visible": { opacity: 1 }
		},
		children: [title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			className: "hover-visible",
			onPress: () => setIsEditing(true),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgPencil1, { style: {
				width: 11,
				height: 11,
				color: theme.pageTextSubdued
			} })
		})]
	});
}
//#endregion
//#region src/components/reports/Container.tsx
function Container({ style, children }) {
	const portalHost = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			height: 300,
			position: "relative",
			flexShrink: 0,
			...style
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: portalHost }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(q, { renderProp: ({ width = 0, height = 0 }) => {
			if (width === 0 || height === 0) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					width,
					height
				},
				children: children(width, height, portalHost.current)
			});
		} })]
	});
}
//#endregion
//#region src/components/reports/graphs/AgeOfMoneyGraph.tsx
function CustomTooltip$9({ active, payload }) {
	const { t } = useTranslation();
	if (active && payload && payload.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: css({
			zIndex: 1e3,
			pointerEvents: "none",
			borderRadius: 2,
			boxShadow: "0 1px 6px rgba(0, 0, 0, .20)",
			backgroundColor: theme.menuBackground,
			color: theme.menuItemText,
			padding: 10
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { marginBottom: 5 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: payload[0].payload.date })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: t("Age of Money: {{days}} days", { days: payload[0].payload.ageOfMoney }) })]
	});
	return null;
}
function AgeOfMoneyGraph({ style, data, compact = false, showTooltip = true }) {
	const { t } = useTranslation();
	const animationProps = useRechartsAnimation();
	const privacyMode = usePrivacyMode();
	const gradientId = `aom-gradient-${(0, import_react.useId)()}`;
	const maxAge = Math.max(...data.map((d) => d.ageOfMoney), 30);
	const yAxisMax = Math.ceil(maxAge / 10) * 10 + 10;
	const targetReferenceAge = 30;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		style: {
			...style,
			...compact && { height: "auto" }
		},
		children: (width, height) => data && data.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "15px" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
			width,
			height,
			data,
			margin: {
				top: 10,
				right: 10,
				left: compact ? 0 : 10,
				bottom: 10
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: gradientId,
					x1: "0",
					y1: "0",
					x2: "0",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: theme.reportsChartFill,
						stopOpacity: .3
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: theme.reportsChartFill,
						stopOpacity: .05
					})]
				}) }),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					strokeDasharray: "3 3",
					vertical: false
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "date",
					tick: {
						fill: theme.reportsLabel,
						fontSize: 12
					},
					tickLine: { stroke: theme.reportsLabel }
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					tickFormatter: (value) => privacyMode ? "•••" : `${value}d`,
					tick: {
						fill: theme.reportsLabel,
						fontSize: 12
					},
					tickLine: { stroke: theme.reportsLabel },
					domain: [0, yAxisMax]
				}),
				showTooltip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTooltip$9, {}),
					isAnimationActive: false
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
					y: targetReferenceAge,
					stroke: theme.reportsGreen,
					strokeDasharray: "5 5",
					label: {
						value: t("30 days"),
						position: "insideTopRight",
						fill: theme.reportsGreen,
						fontSize: 10
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
					type: "monotone",
					dataKey: "ageOfMoney",
					stroke: theme.reportsChartFill,
					strokeWidth: 2,
					fill: `url(#${gradientId})`,
					fillOpacity: 1,
					dot: !compact && data.length <= 90,
					activeDot: {
						r: 6,
						fill: theme.reportsChartFill
					},
					...animationProps
				})
			]
		})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
				color: theme.pageTextSubdued
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "No data available" })
		})
	});
}
var defaultReport = {
	id: "",
	name: "",
	startDate: subMonths(currentMonth(), 5) + "-01",
	endDate: currentDay(),
	isDateStatic: false,
	dateRange: "Last 6 months",
	mode: "total",
	groupBy: "Category",
	interval: "Monthly",
	balanceType: "Payment",
	sortBy: "desc",
	showEmpty: false,
	showOffBudget: false,
	showHiddenCategories: true,
	includeCurrentInterval: true,
	showUncategorized: true,
	trimIntervals: false,
	graphType: "BarGraph",
	conditions: [],
	conditionsOp: "and"
};
var balanceTypeOptions = [
	{
		description: t("Payment"),
		key: "Payment",
		format: "totalDebts"
	},
	{
		description: t("Deposit"),
		key: "Deposit",
		format: "totalAssets"
	},
	{
		description: t("Net"),
		key: "Net",
		format: "totalTotals"
	},
	{
		description: t("Net Payment"),
		key: "Net Payment",
		format: "netDebts"
	},
	{
		description: t("Net Deposit"),
		key: "Net Deposit",
		format: "netAssets"
	},
	{
		description: t("Budgeted"),
		key: "Budgeted",
		format: "totalBudgeted"
	}
];
var groupByOptions = [
	{
		description: t("Category"),
		key: "Category"
	},
	{
		description: t("Group"),
		key: "Group"
	},
	{
		description: t("Category+Group"),
		key: "CategoryGroup"
	},
	{
		description: t("Payee"),
		key: "Payee"
	},
	{
		description: t("Account"),
		key: "Account"
	},
	{
		description: t("Interval"),
		key: "Interval"
	}
];
var sortByOptions = [
	{
		description: t("Ascending"),
		key: "Ascending",
		format: "asc"
	},
	{
		description: t("Descending"),
		key: "Descending",
		format: "desc"
	},
	{
		description: t("Name"),
		key: "Name",
		format: "name"
	},
	{
		description: t("Budget"),
		key: "Budget",
		format: "budget"
	}
];
var dateRangeOptions = [
	{
		description: t("This week"),
		key: "This week",
		name: 0,
		type: "Week",
		Daily: true,
		Weekly: true,
		Monthly: false,
		Yearly: false
	},
	{
		description: t("Last week"),
		key: "Last week",
		name: 1,
		type: "Week",
		Daily: true,
		Weekly: true,
		Monthly: false,
		Yearly: false
	},
	{
		description: t("This month"),
		key: "This month",
		name: 0,
		type: "Month",
		Daily: true,
		Weekly: true,
		Monthly: true,
		Yearly: false
	},
	{
		description: t("Last month"),
		key: "Last month",
		name: 1,
		type: "Month",
		Daily: true,
		Weekly: true,
		Monthly: true,
		Yearly: false
	},
	{
		description: t("Last 30 days"),
		key: "Last 30 days",
		name: "last30Days",
		type: "Day",
		Daily: true,
		Weekly: true,
		Monthly: true,
		Yearly: false
	},
	{
		description: t("Last 3 months"),
		key: "Last 3 months",
		name: 3,
		type: "Month",
		Daily: true,
		Weekly: true,
		Monthly: true,
		Yearly: false
	},
	{
		description: t("Last 6 months"),
		key: "Last 6 months",
		name: 6,
		type: "Month",
		Daily: false,
		Weekly: false,
		Monthly: true,
		Yearly: false
	},
	{
		description: t("Last 12 months"),
		key: "Last 12 months",
		name: 12,
		type: "Month",
		Daily: false,
		Weekly: false,
		Monthly: true,
		Yearly: false
	},
	{
		description: t("Year to date"),
		key: "Year to date",
		name: "yearToDate",
		type: "Month",
		Daily: false,
		Weekly: true,
		Monthly: true,
		Yearly: true
	},
	{
		description: t("Last year"),
		key: "Last year",
		name: "lastYear",
		type: "Month",
		Daily: false,
		Weekly: true,
		Monthly: true,
		Yearly: true
	},
	{
		description: t("Prior year to date"),
		key: "Prior year to date",
		name: "priorYearToDate",
		type: "Month",
		Daily: false,
		Weekly: true,
		Monthly: true,
		Yearly: true
	},
	{
		description: t("All time"),
		key: "All time",
		name: "allTime",
		type: "Month",
		Daily: false,
		Weekly: true,
		Monthly: true,
		Yearly: true
	}
];
var intervalOptions$1 = [
	{
		description: t("Daily"),
		key: "Daily",
		name: "Day",
		format: "yy-MM-dd",
		range: "dayRangeInclusive"
	},
	{
		description: t("Weekly"),
		key: "Weekly",
		name: "Week",
		format: "yy-MM-dd",
		range: "weekRangeInclusive"
	},
	{
		description: t("Monthly"),
		key: "Monthly",
		name: "Month",
		format: "MMM ''yy",
		range: "rangeInclusive"
	},
	{
		description: t("Yearly"),
		key: "Yearly",
		name: "Year",
		format: "yyyy",
		range: "yearRangeInclusive"
	}
];
var ReportOptions = {
	groupBy: groupByOptions,
	groupByItems: new Set(groupByOptions.map((item) => item.key)),
	balanceType: balanceTypeOptions,
	balanceTypeMap: new Map(balanceTypeOptions.map((item) => [item.key, item.format])),
	sortBy: sortByOptions,
	sortByMap: new Map(sortByOptions.map((item) => [item.key, item.format])),
	dateRange: dateRangeOptions,
	dateRangeMap: new Map(dateRangeOptions.map((item) => [item.key, item.name])),
	dateRangeType: new Map(dateRangeOptions.map((item) => [item.key, item.type])),
	interval: intervalOptions$1,
	intervalMap: new Map(intervalOptions$1.map((item) => [item.key, item.name])),
	intervalFormat: new Map(intervalOptions$1.map((item) => [item.key, item.format])),
	intervalRange: new Map(intervalOptions$1.map((item) => [item.key, item.range]))
};
var uncategorizedCategory = {
	id: "",
	name: t("Uncategorized"),
	uncategorized_id: "other",
	hidden: false
};
var transferCategory = {
	id: "",
	name: t("Transfers"),
	uncategorized_id: "transfer",
	hidden: false
};
var offBudgetCategory = {
	id: "",
	name: t("Off budget"),
	uncategorized_id: "off_budget",
	hidden: false
};
var uncategorizedGroup = {
	name: t("Uncategorized & Off budget"),
	id: "uncategorized",
	hidden: false,
	uncategorized_id: "all",
	categories: [
		uncategorizedCategory,
		transferCategory,
		offBudgetCategory
	]
};
var categoryLists = (categories) => {
	return [[
		...[...categories.list].sort((a, b) => {
			const catGroupA = categories.grouped.find((f) => f.id === a.group);
			const catGroupB = categories.grouped.find((f) => f.id === b.group);
			return a.sort_order && b.sort_order && catGroupA && catGroupB ? Number(catGroupA.is_income) - Number(catGroupB.is_income) || (catGroupA.sort_order ?? 0) - (catGroupB.sort_order ?? 0) || a.sort_order - b.sort_order : 0;
		}),
		uncategorizedCategory,
		offBudgetCategory,
		transferCategory
	], [...categories.grouped, uncategorizedGroup].filter((group) => group !== null)];
};
var groupBySelections = (groupBy, categoryList, categoryGroup, payees, accounts) => {
	let groupByList;
	let groupByLabel;
	switch (groupBy) {
		case "Category":
			groupByList = categoryList;
			groupByLabel = "category";
			break;
		case "Group":
			groupByList = categoryGroup.map((group) => {
				return {
					...group,
					id: group.id,
					name: group.name,
					hidden: group.hidden
				};
			});
			groupByLabel = "categoryGroup";
			break;
		case "CategoryGroup":
			groupByList = categoryGroup.map((group) => {
				return {
					...group,
					id: group.id,
					name: group.name,
					hidden: group.hidden
				};
			});
			groupByLabel = "categoryGroup";
			break;
		case "Payee":
			groupByList = payees.map((payee) => {
				return {
					id: payee.id,
					name: payee.name,
					hidden: false
				};
			});
			groupByLabel = "payee";
			break;
		case "Account":
			groupByList = accounts.map((account) => {
				return {
					id: account.id,
					name: account.name,
					hidden: false
				};
			});
			groupByLabel = "account";
			break;
		case "Interval":
			groupByList = categoryList;
			groupByLabel = "category";
			break;
		default: throw new Error("Error loading data into the spreadsheet.");
	}
	return [groupByList, groupByLabel];
};
//#endregion
//#region src/components/reports/reportRanges.ts
function validateStart(earliest, latest, start, end, interval, firstDayOfWeekIdx) {
	let addDays$2;
	let dateStart;
	switch (interval) {
		case "Monthly":
			dateStart = start + "-01";
			addDays$2 = 180;
			break;
		case "Yearly":
			dateStart = start + "-01-01";
			addDays$2 = 1095;
			break;
		case "Daily":
			dateStart = start;
			addDays$2 = 6;
			break;
		default:
			dateStart = start;
			addDays$2 = 180;
			break;
	}
	if (end < start) end = addDays(dateStart, addDays$2);
	return boundedRange(earliest, latest, dateStart, interval ? end : monthFromDate(end), interval, firstDayOfWeekIdx);
}
function validateEnd(earliest, latest, start, end, interval, firstDayOfWeekIdx) {
	let subDays$2;
	let dateEnd;
	switch (interval) {
		case "Monthly":
			dateEnd = getMonthEnd(end + "-01");
			subDays$2 = 180;
			break;
		case "Yearly":
			dateEnd = end + "-12-31";
			subDays$2 = 1095;
			break;
		case "Daily":
			dateEnd = end;
			subDays$2 = 6;
			break;
		default:
			dateEnd = end;
			subDays$2 = 180;
			break;
	}
	if (start > end) start = subDays(dateEnd, subDays$2);
	return boundedRange(earliest, latest, interval ? start : monthFromDate(start), dateEnd, interval, firstDayOfWeekIdx);
}
function validateRange(earliest, latest, start, end) {
	if (end > latest) end = latest;
	if (start < earliest) start = earliest;
	return [start, end];
}
function boundedRange(earliest, latest, start, end, interval, _firstDayOfWeekIdx) {
	switch (interval) {
		case "Daily":
			latest = currentDay();
			break;
		case "Weekly":
			latest = currentDay();
			break;
		case "Monthly":
			latest = getMonthEnd(currentDay());
			break;
		case "Yearly":
			latest = currentDay();
			break;
		default: break;
	}
	if (end > latest) end = latest;
	if (start < earliest) start = earliest;
	return [
		start,
		end,
		"static"
	];
}
function getSpecificRange(offset, addNumber, type, firstDayOfWeekIdx) {
	const currentDay$1 = currentDay();
	const currentWeek$1 = currentWeek(firstDayOfWeekIdx);
	let dateStart = subMonths(currentDay$1, offset) + "-01";
	let dateEnd = getMonthEnd(addMonths(dateStart, addNumber === null ? offset : addNumber) + "-01");
	if (type === "Week") {
		dateStart = subWeeks(currentWeek$1, offset);
		dateEnd = getWeekEnd(addWeeks(dateStart, addNumber === null ? offset : addNumber), firstDayOfWeekIdx);
	}
	return [
		dateStart,
		dateEnd,
		"static"
	];
}
function getFullRange(start, end) {
	return [
		start,
		end,
		"full"
	];
}
function getLatestRange(offset) {
	const end = currentMonth();
	return [
		subMonths(end, offset),
		end,
		"sliding-window"
	];
}
function calculateTimeRange(timeFrame, defaultTimeFrame, latestTransaction) {
	const start = timeFrame?.start ?? defaultTimeFrame?.start ?? subMonths(currentMonth(), 5);
	const end = timeFrame?.end ?? defaultTimeFrame?.end ?? currentMonth();
	const mode = timeFrame?.mode ?? defaultTimeFrame?.mode ?? "sliding-window";
	if (mode === "full") {
		const latestTransactionMonth = latestTransaction ? monthFromDate(latestTransaction) : null;
		const currentMonth$13 = currentMonth();
		return getFullRange(start, latestTransactionMonth && isAfter(latestTransactionMonth, currentMonth$13) ? latestTransactionMonth : currentMonth$13);
	}
	if (mode === "sliding-window") {
		const offset = differenceInCalendarMonths(end, start);
		if (start > end) return [
			currentMonth(),
			subMonths(currentMonth(), -offset),
			"sliding-window"
		];
		return getLatestRange(offset);
	}
	if (mode === "lastYear") return [
		getYearStart(prevYear(currentMonth())),
		getYearEnd(prevYear(currentDate())),
		"lastYear"
	];
	if (mode === "yearToDate") return [
		currentYear() + "-01",
		currentMonth(),
		"yearToDate"
	];
	if (mode === "priorYearToDate") return [
		getYearStart(prevYear(currentMonth())),
		prevYear(currentDate(), "yyyy-MM-dd"),
		"priorYearToDate"
	];
	return [
		start,
		end,
		"static"
	];
}
function calculateSpendingReportTimeRange({ compare, compareTo, isLive = true, mode = "single-month" }) {
	if (["budget", "average"].includes(mode) && isLive) return [currentMonth(), currentMonth()];
	const [start, end] = calculateTimeRange({
		start: compare,
		end: compareTo,
		mode: isLive ?? true ? "sliding-window" : "static"
	}, {
		start: currentMonth(),
		end: subMonths(currentMonth(), 1),
		mode: "sliding-window"
	});
	return [start, end];
}
//#endregion
//#region src/components/reports/getLiveRange.ts
function getLiveRange(cond, earliestTransaction, latestTransaction, includeCurrentInterval, firstDayOfWeekIdx) {
	let dateStart = earliestTransaction;
	let dateEnd = latestTransaction;
	const rangeName = ReportOptions.dateRangeMap.get(cond);
	switch (rangeName) {
		case "yearToDate":
			[dateStart, dateEnd] = validateRange(earliestTransaction, latestTransaction, getYearStart(currentMonth()) + "-01", currentDay());
			break;
		case "lastMonth": {
			const prevMonth = subMonths(currentMonth(), 1);
			[dateStart, dateEnd] = validateRange(earliestTransaction, latestTransaction, firstDayOfMonth(prevMonth), lastDayOfMonth(prevMonth));
			break;
		}
		case "lastYear":
			[dateStart, dateEnd] = validateRange(earliestTransaction, latestTransaction, getYearStart(prevYear(currentMonth())) + "-01", getYearEnd(prevYear(currentDate())) + "-31");
			break;
		case "priorYearToDate":
			[dateStart, dateEnd] = validateRange(earliestTransaction, latestTransaction, getYearStart(prevYear(currentMonth())) + "-01", prevYear(currentDate(), "yyyy-MM-dd"));
			break;
		case "last30Days":
			[dateStart, dateEnd] = validateRange(earliestTransaction, latestTransaction, subDays(currentDay(), 29), currentDay());
			break;
		case "allTime":
			dateStart = earliestTransaction;
			dateEnd = latestTransaction;
			break;
		default: if (typeof rangeName === "number") [dateStart, dateEnd] = getSpecificRange(rangeName, ["This month", "This week"].includes(cond) ? null : rangeName - (includeCurrentInterval ? 0 : 1), ReportOptions.dateRangeType.get(cond), firstDayOfWeekIdx);
		else break;
	}
	return [
		dateStart,
		dateEnd,
		"sliding-window"
	];
}
//#endregion
//#region src/components/reports/Header.tsx
function Header({ start, end, mode, show1Month, allMonths, earliestTransaction, latestTransaction, firstDayOfWeekIdx, onChangeDates, filters, conditionsOp, onApply, onUpdateFilter, onDeleteFilter, onConditionsOpChange, children, inlineContent, filterExclude, filterInclude }) {
	const locale = useLocale();
	const { t } = useTranslation();
	const { isNarrowWidth } = useResponsive();
	function convertToMonth(start, end, _, mode) {
		return [
			getMonth(start),
			getMonth(end),
			mode
		];
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			padding: 20,
			paddingTop: 15,
			flexShrink: 0
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				display: "grid",
				alignItems: isNarrowWidth ? "flex-start" : "center"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
					gap: isNarrowWidth ? 5 : void 0,
					children: [mode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: mode === "static" ? "normal" : "primary",
						onPress: () => {
							const newMode = mode === "static" ? "sliding-window" : "static";
							const [newStart, newEnd] = calculateTimeRange({
								start,
								end,
								mode: newMode
							});
							onChangeDates(newStart, newEnd, newMode);
						},
						children: mode === "static" ? t("Static") : t("Live")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
						gap: 5,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								onChange: (newValue) => onChangeDates(...validateStart(allMonths[allMonths.length - 1].name, allMonths[0].name, newValue, end)),
								value: start,
								defaultLabel: format(start, "MMMM yyyy", locale),
								options: allMonths.map(({ name, pretty }) => [name, pretty])
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: t("to") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								onChange: (newValue) => onChangeDates(...validateEnd(allMonths[allMonths.length - 1].name, allMonths[0].name, start, newValue)),
								value: end,
								options: allMonths.map(({ name, pretty }) => [name, pretty]),
								style: { marginRight: 10 }
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
					gap: 3,
					children: [
						show1Month && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "bare",
							onPress: () => onChangeDates(...getLatestRange(0)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "1 month" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "bare",
							onPress: () => onChangeDates(...getLatestRange(2)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "3 months" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "bare",
							onPress: () => onChangeDates(...getLatestRange(5)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "6 months" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "bare",
							onPress: () => onChangeDates(...getLatestRange(11)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "1 year" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "bare",
							onPress: () => onChangeDates(...convertToMonth(...getLiveRange("Year to date", earliestTransaction, latestTransaction, true, firstDayOfWeekIdx), "yearToDate")),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Year to date" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "bare",
							onPress: () => onChangeDates(...convertToMonth(...getLiveRange("Last month", earliestTransaction, latestTransaction, false, firstDayOfWeekIdx), "lastMonth")),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Last month" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "bare",
							onPress: () => onChangeDates(...convertToMonth(...getLiveRange("Last year", earliestTransaction, latestTransaction, false, firstDayOfWeekIdx), "lastYear")),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Last year" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "bare",
							onPress: () => onChangeDates(...convertToMonth(...getLiveRange("Prior year to date", earliestTransaction, latestTransaction, false, firstDayOfWeekIdx), "priorYearToDate")),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Prior year to date" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "bare",
							onPress: () => onChangeDates(...getFullRange(allMonths[allMonths.length - 1].name, allMonths[0].name)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "All time" })
						}),
						filters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterButton, {
							compact: isNarrowWidth,
							onApply,
							hover: false,
							exclude: filterExclude,
							include: filterInclude
						}),
						inlineContent
					]
				})]
			}), children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					gridColumn: 2,
					flexDirection: "row",
					justifySelf: "flex-end",
					alignSelf: "flex-start"
				},
				children
			})]
		}), filters && filters.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: { marginTop: 5 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppliedFilters, {
				conditions: filters,
				onUpdate: onUpdateFilter,
				onDelete: onDeleteFilter,
				conditionsOp,
				onConditionsOpChange
			})
		})]
	});
}
//#endregion
//#region src/components/reports/util.ts
function fromDateRepr(date) {
	return date.slice(0, 7);
}
async function runAll(queries, cb) {
	cb(await Promise.all(queries.map((q) => {
		return aqlQuery(q).then(({ data }) => data);
	})));
}
function indexCashFlow(data) {
	const results = {};
	data.forEach((item) => {
		const findExisting = results?.[item.date]?.[String(item.isTransfer)] ?? 0;
		const result = { [String(item.isTransfer)]: item.amount + findExisting };
		results[item.date] = {
			...results[item.date],
			...result
		};
	});
	return results;
}
/**
* Checks if the given conditions have issues
* (i.e. non-existing category/payee/account being used).
*/
function calculateHasWarning(conditions, { categories, accounts, payees }) {
	const categoryIds = new Set(categories.map(({ id }) => id));
	const payeeIds = new Set(payees.map(({ id }) => id));
	const accountIds = new Set(accounts.map(({ id }) => id));
	if (!conditions) return false;
	for (const cond of conditions) {
		const { field, value, op } = cond;
		const isMultiCondition = Array.isArray(value);
		if (!["is", "isNot"].includes(op) && !isMultiCondition) continue;
		if (!isMultiCondition && !value) continue;
		switch (field) {
			case "account":
				if (isMultiCondition) {
					if (value.find((val) => !accountIds.has(val))) return true;
					break;
				}
				if (!accountIds.has(value)) return true;
				break;
			case "payee":
				if (isMultiCondition) {
					if (value.find((val) => !payeeIds.has(val))) return true;
					break;
				}
				if (!payeeIds.has(value)) return true;
				break;
			case "category":
				if (isMultiCondition) {
					if (value.find((val) => !categoryIds.has(val))) return true;
					break;
				}
				if (!categoryIds.has(value)) return true;
				break;
			default: break;
		}
	}
	return false;
}
//#endregion
//#region src/components/reports/spreadsheets/age-of-money-spreadsheet.ts
/**
* Calculate the age of money for a given set of expense transactions
* using the FIFO (First In, First Out) method.
*
* Income becomes "buckets" sorted by date. When money is spent,
* it's deducted from the oldest bucket first. The age is the
* difference between the expense date and the bucket date.
*/
function calculateAgeOfMoney(incomeTransactions, expenseTransactions) {
	const buckets = [...incomeTransactions].sort((a, b) => a.date.localeCompare(b.date)).map((t) => ({
		date: t.date,
		remainingAmount: t.amount
	}));
	const sortedExpenses = [...expenseTransactions].sort((a, b) => a.date.localeCompare(b.date));
	const ages = [];
	let currentBucketIdx = 0;
	let insufficientData = false;
	for (const expense of sortedExpenses) {
		let remainingExpense = Math.abs(expense.amount);
		let lastBucketDate = null;
		while (remainingExpense > 0 && currentBucketIdx < buckets.length) {
			const bucket = buckets[currentBucketIdx];
			if (bucket.remainingAmount > 0) {
				const deduction = Math.min(bucket.remainingAmount, remainingExpense);
				bucket.remainingAmount -= deduction;
				remainingExpense -= deduction;
				lastBucketDate = bucket.date;
			}
			if (bucket.remainingAmount <= 0) currentBucketIdx++;
		}
		if (remainingExpense > 0) insufficientData = true;
		if (lastBucketDate) {
			const ageInDays = differenceInDays(parseISO(expense.date), parseISO(lastBucketDate));
			ages.push({
				date: expense.date,
				age: Math.max(0, ageInDays)
			});
		}
	}
	return {
		ages,
		insufficientData
	};
}
/**
* Calculate the average of the last N ages
*/
function calculateAverageAge(ages, count = 10) {
	if (ages.length === 0) return null;
	const lastN = ages.slice(-count);
	const sum = lastN.reduce((acc, item) => acc + item.age, 0);
	return Math.round(sum / lastN.length);
}
/**
* Get the period key for a given date based on granularity
*/
function getPeriodKey(date, granularity) {
	const parsed = parseISO(date);
	switch (granularity) {
		case "daily": return date;
		case "weekly": return format$1(startOfWeek(parsed, { weekStartsOn: 1 }), "yyyy-MM-dd");
		default: return getMonth(date);
	}
}
/**
* Format a period key for display based on granularity
*/
function formatPeriodLabel(periodKey, granularity) {
	switch (granularity) {
		case "daily": return format$1(parseISO(periodKey), "MMM d, yyyy");
		case "weekly": return format$1(parseISO(periodKey), "MMM d, yyyy");
		default: return format$1(parseISO(periodKey + "-01"), "MMM yyyy");
	}
}
/**
* Generate all periods between start and end based on granularity
*/
function generatePeriods(startDate, endDate, granularity) {
	const periods = [];
	let current = parseISO(startDate);
	const end = parseISO(endDate);
	switch (granularity) {
		case "daily":
			while (current <= end) {
				periods.push(format$1(current, "yyyy-MM-dd"));
				current = addDays$1(current, 1);
			}
			break;
		case "weekly":
			current = startOfWeek(current, { weekStartsOn: 1 });
			while (current <= end) {
				periods.push(format$1(current, "yyyy-MM-dd"));
				current = addWeeks$1(current, 1);
			}
			break;
		default: return rangeInclusive(getMonth(startDate), getMonth(endDate));
	}
	return periods;
}
/**
* Group ages by period and calculate rolling average for each period
*/
function calculateGraphData(ages, startMonth, endMonth, granularity = "monthly") {
	const startDate = firstDayOfMonth(startMonth);
	let endDate = lastDayOfMonth(endMonth);
	if (granularity === "daily" || granularity === "weekly") {
		const today = currentDay();
		if (isAfter(endDate, today)) endDate = today;
	}
	const periods = generatePeriods(startDate, endDate, granularity);
	const result = [];
	const agesByPeriod = {};
	for (const { date, age } of ages) {
		const periodKey = getPeriodKey(date, granularity);
		if (!agesByPeriod[periodKey]) agesByPeriod[periodKey] = [];
		agesByPeriod[periodKey].push(age);
	}
	let allAgesUpToPeriod = [];
	for (const period of periods) {
		if (agesByPeriod[period]) allAgesUpToPeriod = allAgesUpToPeriod.concat(agesByPeriod[period]);
		if (allAgesUpToPeriod.length > 0) {
			const lastN = allAgesUpToPeriod.slice(-10);
			const avg = Math.round(lastN.reduce((a, b) => a + b, 0) / lastN.length);
			result.push({
				date: formatPeriodLabel(period, granularity),
				ageOfMoney: avg
			});
		}
	}
	return result;
}
/**
* Determine the trend based on the last few data points
*/
function calculateTrend(graphData) {
	if (graphData.length < 2) return "stable";
	const diff = graphData[graphData.length - 1].ageOfMoney - graphData[graphData.length - 2].ageOfMoney;
	const threshold = 2;
	if (diff > threshold) return "up";
	if (diff < -threshold) return "down";
	return "stable";
}
function createAgeOfMoneySpreadsheet({ start, end, conditions = [], conditionsOp = "and", granularity = "monthly" }) {
	return async (spreadsheet, setData) => {
		const endDate = lastDayOfMonth(end);
		const today = currentDay();
		const fixedEnd = endDate > today ? today : endDate;
		const { filters } = await send("make-filters-from-conditions", { conditions: conditions.filter((cond) => !cond.customName) });
		const conditionsOpKey = conditionsOp === "or" ? "$or" : "$and";
		function makeIncomeQuery() {
			return q$1("transactions").filter({ [conditionsOpKey]: filters }).filter({
				date: { $lte: fixedEnd },
				"account.offbudget": false,
				$or: [{ "payee.transfer_acct": null }, { "payee.transfer_acct.offbudget": true }],
				amount: { $gt: 0 }
			}).select([
				"id",
				"date",
				"amount"
			]);
		}
		function makeExpenseQuery() {
			return q$1("transactions").filter({ [conditionsOpKey]: filters }).filter({
				date: { $lte: fixedEnd },
				"account.offbudget": false,
				$or: [{ "payee.transfer_acct": null }, { "payee.transfer_acct.offbudget": true }],
				amount: { $lt: 0 }
			}).select([
				"id",
				"date",
				"amount"
			]);
		}
		return runAll([makeIncomeQuery(), makeExpenseQuery()], (data) => {
			const [incomeData, expenseData] = data;
			const { ages, insufficientData } = calculateAgeOfMoney(incomeData, expenseData);
			const displayStart = firstDayOfMonth(start);
			const filteredAges = ages.filter(({ date }) => date >= displayStart);
			const graphData = calculateGraphData(filteredAges, start, end, granularity);
			setData({
				graphData,
				currentAge: calculateAverageAge(filteredAges, 10),
				trend: calculateTrend(graphData),
				insufficientData
			});
		});
	};
}
//#endregion
//#region src/components/reports/useReport.ts
function useReport$1(sheetName, getData) {
	const spreadsheet = useSpreadsheet();
	const [results, setResults] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let didCancel = false;
		setResults(null);
		getData(spreadsheet, (results) => {
			if (!didCancel) setResults(results);
		});
		return () => {
			didCancel = true;
		};
	}, [getData, spreadsheet]);
	return results;
}
//#endregion
//#region src/hooks/useDashboardWidget.ts
function useDashboardWidget({ id, type }) {
	return useQuery({
		...dashboardQueries.listDashboardWidgets(),
		select: (widgets) => widgets.find((w) => w.id === id && w.type === type),
		enabled: !!id && !!type
	});
}
//#endregion
//#region src/hooks/useRuleConditionFilters.ts
function useRuleConditionFilters(initialConditions = [], initialConditionsOp = "and") {
	const [conditions, setConditions] = (0, import_react.useState)(initialConditions);
	const [conditionsOp, setConditionsOp] = (0, import_react.useState)(initialConditionsOp);
	const [saved, setSaved] = (0, import_react.useState)(null);
	const onApply = (0, import_react.useCallback)((conditionsOrSavedFilter) => {
		if (conditionsOrSavedFilter === null) {
			setConditions([]);
			setSaved(null);
		} else if ("conditions" in conditionsOrSavedFilter) {
			setConditions([...conditionsOrSavedFilter.conditions]);
			setConditionsOp(conditionsOrSavedFilter.conditionsOp);
			setSaved(conditionsOrSavedFilter.id);
		} else {
			setConditions((state) => [...state, conditionsOrSavedFilter]);
			setSaved(null);
		}
	}, [setConditions]);
	const onUpdate = (0, import_react.useCallback)((oldFilter, updatedFilter) => {
		setConditions((state) => state.map((f) => f === oldFilter ? updatedFilter : f));
		setSaved(null);
	}, [setConditions]);
	const onDelete = (0, import_react.useCallback)((deletedFilter) => {
		setConditions((state) => state.filter((f) => f !== deletedFilter));
		setSaved(null);
	}, [setConditions]);
	return (0, import_react.useMemo)(() => ({
		conditions,
		saved,
		conditionsOp,
		onApply,
		onUpdate,
		onDelete,
		onConditionsOpChange: setConditionsOp
	}), [
		conditions,
		saved,
		onApply,
		onUpdate,
		onDelete,
		setConditionsOp,
		conditionsOp
	]);
}
//#endregion
//#region src/components/reports/DateRange.tsx
function checkDate(date) {
	const dateParsed = parseDate(date);
	if (dateParsed) return format$1(dateParsed, "yyyy-MM-dd");
	else return null;
}
function DateRange({ start, end, type }) {
	const { t } = useTranslation();
	const locale = useLocale();
	const checkStart = checkDate(start);
	const checkEnd = checkDate(end);
	let startDate;
	let endDate;
	if (checkStart && checkEnd) {
		startDate = parseISO(checkStart);
		endDate = parseISO(checkEnd);
	} else return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		style: {
			...styles.mediumText,
			color: theme.errorText
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "There was a problem loading your date range" })
	});
	const formattedStartDate = format$1(startDate, "MMM yyyy", { locale });
	const formattedEndDate = format$1(endDate, "MMM yyyy", { locale });
	let typeOrFormattedEndDate;
	if (type && ["budget", "average"].includes(type)) typeOrFormattedEndDate = type === "budget" ? t("budgeted") : t("average");
	else typeOrFormattedEndDate = formattedEndDate;
	let content;
	if (["budget", "average"].includes(type || "")) content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
		"Compare ",
		{ formattedStartDate },
		" to ",
		{ typeOrFormattedEndDate }
	] }) });
	else if (startDate.getFullYear() !== endDate.getFullYear() || startDate.getMonth() !== endDate.getMonth()) content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: type ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
		"Compare ",
		{ formattedStartDate },
		" to ",
		{ typeOrFormattedEndDate }
	] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		formattedStartDate,
		" - ",
		formattedEndDate
	] }) });
	else content = format$1(endDate, "MMMM yyyy", { locale });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
		style: { color: theme.pageTextSubdued },
		children: content
	});
}
//#endregion
//#region src/hooks/useIsInViewport.ts
/**
* Check if the given element (by ref) is visible in the viewport.
*/
function useIsInViewport(ref) {
	const [isIntersecting, setIsIntersecting] = (0, import_react.useState)(false);
	const observer = (0, import_react.useMemo)(() => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)), []);
	(0, import_react.useEffect)(() => {
		const view = ref.current;
		if (!view) return;
		observer.observe(view);
		return () => {
			observer.disconnect();
		};
	}, [ref, observer]);
	return isIntersecting;
}
//#endregion
//#region src/components/reports/constants.ts
var NON_DRAGGABLE_AREA_CLASS_NAME = "non-draggable-area";
//#endregion
//#region src/components/reports/ReportCard.tsx
function ReportCard({ isEditing, disableClick, to, menuItems, onMenuSelect, children, size = 1, style }) {
	const ref = (0, import_react.useRef)(null);
	const isInViewport = useIsInViewport(ref);
	const [hasRendered, setHasRendered] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const { isNarrowWidth } = useResponsive();
	const containerProps = { flex: isNarrowWidth ? "1 1" : `0 0 calc(${size * 100}% / 3 - 20px)` };
	(0, import_react.useEffect)(() => {
		if (isInViewport && !hasRendered) setHasRendered(true);
	}, [isInViewport, hasRendered]);
	const layoutProps = {
		isEditing,
		menuItems,
		onMenuSelect
	};
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		ref,
		style: {
			backgroundColor: theme.tableBackground,
			borderBottomLeftRadius: 2,
			borderBottomRightRadius: 2,
			width: "100%",
			height: "100%",
			boxShadow: "0 2px 6px rgba(0, 0, 0, .15)",
			transition: "box-shadow .25s",
			...isEditing ? {
				"& .recharts-surface:hover": {
					cursor: "move",
					":active": { cursor: "grabbing" }
				},
				":active": { cursor: "grabbing" },
				filter: "grayscale(1)"
			} : { "& .recharts-surface:hover": { cursor: "pointer" } },
			":hover": {
				...to ? { boxShadow: "0 4px 6px rgba(0, 0, 0, .15)" } : null,
				...isEditing ? {
					cursor: "move",
					filter: "grayscale(0)"
				} : null
			},
			...to ? null : containerProps,
			...style
		},
		children: isInViewport || hasRendered ? children : null
	});
	if (to && !isEditing && !disableClick) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, {
		...layoutProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			onPress: () => navigate(to, { state: { goBack: true } }),
			style: {
				height: "100%",
				width: "100%",
				background: "transparent",
				padding: 0,
				textAlign: "left",
				overflow: "visible"
			},
			children: content
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, {
		...layoutProps,
		children: content
	});
}
function Layout({ children, isEditing, menuItems, onMenuSelect }) {
	const { t } = useTranslation();
	const triggerRef = (0, import_react.useRef)(null);
	const viewRef = (0, import_react.useRef)(null);
	const { setMenuOpen, menuOpen, handleContextMenu, resetPosition, position, asContextMenu } = useContextMenu();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		ref: viewRef,
		onContextMenu: handleContextMenu,
		style: {
			display: "block",
			height: "100%",
			"& .hover-visible": {
				opacity: 0,
				transition: "opacity .25s"
			},
			"&:hover .hover-visible": { opacity: 1 }
		},
		children: [menuItems && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [isEditing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			className: [menuOpen ? void 0 : "hover-visible", "non-draggable-area"].join(" "),
			style: {
				position: "absolute",
				top: 7,
				right: 3,
				zIndex: 1
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				ref: triggerRef,
				variant: "bare",
				"aria-label": t("Menu"),
				onPress: () => {
					resetPosition();
					setMenuOpen(true);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgDotsHorizontalTriple, {
					width: 15,
					height: 15,
					style: { transform: "rotateZ(90deg)" }
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
			triggerRef: asContextMenu ? viewRef : triggerRef,
			isOpen: Boolean(menuOpen),
			onOpenChange: () => setMenuOpen(false),
			isNonModal: true,
			placement: asContextMenu ? "bottom start" : "bottom end",
			...position,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
				className: "non-draggable-area",
				onMenuSelect,
				items: menuItems
			})
		})] }), children]
	});
}
//#endregion
//#region src/components/reports/ReportCardName.tsx
var ReportCardName = ({ name, isEditing, onChange, onClose }) => {
	if (isEditing) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InitialFocus, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		className: NON_DRAGGABLE_AREA_CLASS_NAME,
		defaultValue: name,
		onEnter: onChange,
		onUpdate: onChange,
		onEscape: onClose,
		style: {
			...styles.mediumText,
			marginTop: -6,
			marginBottom: -1,
			marginLeft: -6,
			width: Math.max(20, name.length) + "ch"
		}
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		style: {
			display: "block",
			margin: 0,
			padding: 0,
			...styles.mediumText,
			marginBottom: 5
		},
		children: name
	});
};
//#endregion
//#region src/components/reports/useDashboardWidgetCopyMenu.ts
function useDashboardWidgetCopyMenu(onCopy) {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const menuItems = [{
		name: "copy-to-dashboard",
		text: t("Copy to dashboard")
	}];
	const handleMenuSelect = (item) => {
		switch (item) {
			case "copy-to-dashboard":
				dispatch(pushModal({ modal: {
					name: "copy-widget-to-dashboard",
					options: { onSelect: (targetDashboardId) => {
						onCopy(targetDashboardId);
					} }
				} }));
				return true;
			default: return false;
		}
	};
	return {
		menuItems,
		handleMenuSelect
	};
}
//#endregion
//#region src/components/reports/reports/AgeOfMoneyCard.tsx
function getAgeColor(age) {
	if (age === null) return theme.reportsNumberNeutral;
	if (age >= 30) return theme.reportsNumberPositive;
	if (age >= 14) return theme.warningText;
	return theme.reportsNumberNegative;
}
function getTrendIndicator(trend) {
	switch (trend) {
		case "up": return "↑";
		case "down": return "↓";
		default: return "→";
	}
}
function AgeOfMoneyCard({ widgetId, isEditing, meta = {}, onMetaChange, onRemove, onCopy }) {
	const { t } = useTranslation();
	const { isNarrowWidth } = useResponsive();
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const [nameMenuOpen, setNameMenuOpen] = (0, import_react.useState)(false);
	const [isCardHovered, setIsCardHovered] = (0, import_react.useState)(false);
	const { menuItems: copyMenuItems, handleMenuSelect: handleCopyMenuSelect } = useDashboardWidgetCopyMenu(onCopy);
	(0, import_react.useEffect)(() => {
		async function fetchLatestTransaction() {
			const latestTrans = await send("get-latest-transaction");
			setLatestTransaction(latestTrans ? latestTrans.date : currentDay());
		}
		fetchLatestTransaction();
	}, []);
	const [start, end] = calculateTimeRange(meta?.timeFrame, void 0, latestTransaction);
	const onCardHover = (0, import_react.useCallback)(() => setIsCardHovered(true), []);
	const onCardHoverEnd = (0, import_react.useCallback)(() => setIsCardHovered(false), []);
	const data = useReport$1("age_of_money", (0, import_react.useMemo)(() => createAgeOfMoneySpreadsheet({
		start,
		end,
		conditions: meta?.conditions,
		conditionsOp: meta?.conditionsOp,
		granularity: meta?.granularity ?? "monthly"
	}), [
		start,
		end,
		meta?.conditions,
		meta?.conditionsOp,
		meta?.granularity
	]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, {
		isEditing,
		disableClick: nameMenuOpen,
		to: `/reports/age-of-money/${widgetId}`,
		menuItems: [
			{
				name: "rename",
				text: t("Rename")
			},
			{
				name: "remove",
				text: t("Remove")
			},
			...copyMenuItems
		],
		onMenuSelect: (item) => {
			if (handleCopyMenuSelect(item)) return;
			switch (item) {
				case "rename":
					setNameMenuOpen(true);
					break;
				case "remove":
					onRemove();
					break;
				default: throw new Error(`Unrecognized selection: ${item}`);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: { flex: 1 },
			onPointerEnter: onCardHover,
			onPointerLeave: onCardHoverEnd,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					padding: 20
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { flex: 1 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCardName, {
						name: meta?.name || t("Age of Money"),
						isEditing: nameMenuOpen,
						onChange: (newName) => {
							onMetaChange({
								...meta,
								name: newName
							});
							setNameMenuOpen(false);
						},
						onClose: () => setNameMenuOpen(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRange, {
						start,
						end
					})]
				}), data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { textAlign: "right" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							style: {
								...styles.largeText,
								fontWeight: 500,
								marginBottom: 5,
								color: getAgeColor(data.currentAge)
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, {
								activationFilters: [!isCardHovered],
								children: data.currentAge !== null ? t("{{days}} days", { days: data.currentAge }) : t("N/A")
							})
						}),
						data.currentAge !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
							style: {
								fontSize: 12,
								color: theme.pageTextSubdued
							},
							children: [
								getTrendIndicator(data.trend),
								" ",
								data.trend === "up" ? t("Improving") : data.trend === "down" ? t("Declining") : t("Stable")
							]
						}),
						data.insufficientData && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							style: {
								fontSize: 10,
								color: theme.warningText,
								marginTop: 2
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Incomplete data" })
						})
					]
				})]
			}), data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgeOfMoneyGraph, {
				data: data.graphData,
				compact: true,
				showTooltip: !isEditing && !isNarrowWidth,
				style: {
					height: "auto",
					flex: 1
				}
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {})]
		})
	});
}
//#endregion
//#region src/components/reports/reports/AgeOfMoney.tsx
function AgeOfMoney() {
	const { data: widget, isLoading } = useDashboardWidget({
		id: useParams().id,
		type: "age-of-money-card"
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgeOfMoneyInner, { widget });
}
function AgeOfMoneyInner({ widget }) {
	const locale = useLocale();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const { conditions, conditionsOp, onApply: onApplyFilter, onDelete: onDeleteFilter, onUpdate: onUpdateFilter, onConditionsOpChange } = useRuleConditionFilters(widget?.meta?.conditions, widget?.meta?.conditionsOp);
	const [allMonths, setAllMonths] = (0, import_react.useState)(null);
	const [start, setStart] = (0, import_react.useState)(currentMonth());
	const [end, setEnd] = (0, import_react.useState)(currentMonth());
	const [mode, setMode] = (0, import_react.useState)("sliding-window");
	const [granularity, setGranularity] = (0, import_react.useState)(widget?.meta?.granularity ?? "monthly");
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const [earliestTransaction, setEarliestTransaction] = (0, import_react.useState)("");
	const [_firstDayOfWeekIdx] = useSyncedPref("firstDayOfWeekIdx");
	const firstDayOfWeekIdx = _firstDayOfWeekIdx || "0";
	const data = useReport$1("age_of_money", (0, import_react.useMemo)(() => createAgeOfMoneySpreadsheet({
		start,
		end,
		conditions,
		conditionsOp,
		granularity
	}), [
		start,
		end,
		conditions,
		conditionsOp,
		granularity
	]));
	(0, import_react.useEffect)(() => {
		async function run() {
			const earliestTrans = await send("get-earliest-transaction");
			setEarliestTransaction(earliestTrans ? earliestTrans.date : currentDay());
			const latestTrans = await send("get-latest-transaction");
			setLatestTransaction(latestTrans ? latestTrans.date : currentDay());
			const currentMonth$12 = currentMonth();
			let earliestMonth = earliestTrans ? monthFromDate(parseISO(fromDateRepr(earliestTrans.date))) : currentMonth$12;
			const latestTransactionMonth = latestTrans ? monthFromDate(parseISO(fromDateRepr(latestTrans.date))) : currentMonth$12;
			const latestMonth = latestTransactionMonth > currentMonth$12 ? latestTransactionMonth : currentMonth$12;
			const yearAgo = subMonths(latestMonth, 12);
			if (earliestMonth > yearAgo) earliestMonth = yearAgo;
			setAllMonths(rangeInclusive(earliestMonth, latestMonth).map((month) => ({
				name: month,
				pretty: format(month, "MMMM, yyyy", locale)
			})).reverse());
		}
		run();
	}, [locale]);
	(0, import_react.useEffect)(() => {
		if (latestTransaction) {
			const [initialStart, initialEnd, initialMode] = calculateTimeRange(widget?.meta?.timeFrame, void 0, latestTransaction);
			setStart(initialStart);
			setEnd(initialEnd);
			setMode(initialMode);
		}
	}, [latestTransaction, widget?.meta?.timeFrame]);
	const onChangeDates = (0, import_react.useCallback)((newStart, newEnd, newMode) => {
		setStart(newStart);
		setEnd(newEnd);
		setMode(newMode);
	}, []);
	const onSaveWidget = (0, import_react.useCallback)(async () => {
		if (!widget) throw new Error("No widget that could be saved.");
		await send("dashboard-update-widget", {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				conditions,
				conditionsOp,
				timeFrame: {
					start,
					end,
					mode
				},
				granularity
			}
		});
		dispatch(addNotification({ notification: {
			type: "message",
			message: t("Dashboard widget successfully saved.")
		} }));
	}, [
		widget,
		conditions,
		conditionsOp,
		start,
		end,
		mode,
		granularity,
		dispatch,
		t
	]);
	const navigate = useNavigate();
	const { isNarrowWidth } = useResponsive();
	const title = widget?.meta?.name || t("Age of Money");
	const onSaveWidgetName = (0, import_react.useCallback)(async (newName) => {
		if (!widget) throw new Error("No widget that could be saved.");
		const name = newName || t("Age of Money");
		await send("dashboard-update-widget", {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				name
			}
		});
	}, [widget, t]);
	if (!allMonths || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: isNarrowWidth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title,
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: () => navigate("/reports") })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditablePageHeaderTitle, {
			title,
			onSave: onSaveWidgetName
		}) : title }),
		padding: 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
			allMonths,
			start,
			end,
			earliestTransaction,
			latestTransaction,
			firstDayOfWeekIdx,
			mode,
			onChangeDates,
			filters: conditions,
			onApply: onApplyFilter,
			onUpdateFilter,
			onDeleteFilter,
			conditionsOp,
			onConditionsOpChange,
			inlineContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GranularitySelector, {
				granularity,
				onChange: setGranularity
			}),
			children: widget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				onPress: onSaveWidget,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save widget" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				backgroundColor: theme.tableBackground,
				padding: 20,
				paddingTop: 0,
				flex: "1 0 auto",
				overflowY: "auto"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						textAlign: "right",
						paddingTop: 20
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								...styles.largeText,
								fontWeight: 400,
								marginBottom: 5,
								color: getAgeColor(data.currentAge)
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: data.currentAge !== null ? t("{{days}} days", { days: data.currentAge }) : t("N/A") })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: { color: theme.pageTextSubdued },
							children: data.trend === "up" ? t("↑ Improving") : data.trend === "down" ? t("↓ Declining") : t("→ Stable")
						}),
						data.insufficientData && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								color: theme.warningText,
								fontSize: 12,
								marginTop: 5
							},
							children: t("Note: Some expenses could not be matched to income (spending exceeded income in this period)")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgeOfMoneyGraph, { data: data.graphData }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						marginTop: 30,
						userSelect: "none"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "What is Age of Money?" }) }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Age of Money shows how many days, on average, your money sits in your budget before you spend it. It measures the gap between when you earn money and when you spend it." }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "A higher Age of Money means you're spending older money, which indicates you're living on last month's income rather than paycheck-to-paycheck. An age of 30 days or more is considered ideal—it means you're typically spending money you earned a month ago." }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "How is it calculated?" }) }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "The calculation uses the FIFO (First In, First Out) method: when you spend money, it's considered to come from your oldest income first. The age is the difference in days between when you received that income and when you spent it. The displayed value is the average age of your last 10 expenses." }) })
					]
				})
			]
		})]
	});
}
function GranularitySelector({ granularity, onChange }) {
	const { t } = useTranslation();
	const triggerRef = (0, import_react.useRef)(null);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const options = [
		{
			key: "daily",
			description: t("Daily")
		},
		{
			key: "weekly",
			description: t("Weekly")
		},
		{
			key: "monthly",
			description: t("Monthly")
		}
	];
	const currentLabel = options.find((opt) => opt.key === granularity)?.description ?? granularity;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref: triggerRef,
		variant: "bare",
		onPress: () => setIsOpen(true),
		"aria-label": t("Change granularity"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCalendar, { style: {
			width: 12,
			height: 12
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: { marginLeft: 5 },
			children: currentLabel
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
		triggerRef,
		placement: "bottom start",
		isOpen,
		onOpenChange: () => setIsOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
			onMenuSelect: (item) => {
				onChange(item);
				setIsOpen(false);
			},
			items: options.map(({ key, description }) => ({
				name: key,
				text: description
			}))
		})
	})] });
}
//#endregion
//#region src/components/reports/Change.tsx
function Change({ amount, style }) {
	const format = useFormat();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FinancialText, {
		as: Block,
		style: {
			...styles.smallText,
			color: amount === 0 ? theme.reportsNumberNeutral : amount < 0 ? theme.reportsNumberNegative : theme.reportsNumberPositive,
			...style
		},
		children: [amount >= 0 ? "+" : "", format(amount, "financial")]
	});
}
//#endregion
//#region src/components/reports/graphs/util/computePadding.ts
/**
* Calculates the left padding needed for chart axis based on formatted number length
* @param values Array of numeric values
* @param formatter Function to format numbers to strings
* @returns Padding amount in pixels
*/
function computePadding(values, formatter) {
	if (values.length === 0) return 0;
	const maxLength = Math.max(...values.map((value) => {
		return formatter(Math.round(value)).length;
	}));
	return Math.max(0, (maxLength - 5) * 5);
}
//#endregion
//#region src/components/reports/graphs/BudgetAnalysisGraph.tsx
function CustomTooltip$8({ active, payload, isConcise, format: format$13, showBalance }) {
	const locale = useLocale();
	const { t } = useTranslation();
	if (!active || !payload || !Array.isArray(payload) || !payload[0]) return null;
	const [{ payload: data }] = payload;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: css({
			pointerEvents: "none",
			borderRadius: 2,
			boxShadow: "0 1px 6px rgba(0, 0, 0, .20)",
			backgroundColor: theme.menuBackground,
			color: theme.menuItemText,
			padding: 10
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { marginBottom: 10 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: format(data.date, isConcise ? "MMMM yyyy" : "MMMM dd, yyyy", locale) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { lineHeight: 1.5 },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: 5
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
							width: 10,
							height: 10,
							backgroundColor: theme.reportsNumberPositive,
							display: "inline-block"
						} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Budgeted:" })]
					}),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format$13(data.budgeted, "financial") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: 5
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
							width: 10,
							height: 10,
							backgroundColor: theme.reportsNumberNegative,
							display: "inline-block"
						} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Spent:" })]
					}),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format$13(data.spent, "financial") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: 5
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
							width: 10,
							height: 10,
							backgroundColor: theme.templateNumberUnderFunded,
							display: "inline-block"
						} }), t("Overspending Adjustment:")]
					}),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format$13(data.overspendingAdjustment, "financial") })
				}),
				showBalance && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: 5
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
							width: 10,
							height: 10,
							backgroundColor: theme.reportsGray,
							display: "inline-block"
						} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Balance:" })]
					}),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: format$13(data.balance, "financial") }) })
				})
			]
		})] })
	});
}
function BudgetAnalysisGraph({ style, data, graphType = "Line", showBalance = true, isConcise = true }) {
	const { t } = useTranslation();
	const format$12 = useFormat();
	const locale = useLocale();
	const privacyMode = usePrivacyMode();
	const [yAxisIsHovered, setYAxisIsHovered] = (0, import_react.useState)(false);
	const budgetedLabel = t("Budgeted");
	const spentLabel = t("Spent");
	const balanceLabel = t("Balance");
	const overspendingLabel = t("Overspending Adjustment");
	const graphData = data.intervalData;
	const formatDate = (date) => {
		if (isConcise) return format(date, "MMM", locale);
		return format(date, "MMM d", locale);
	};
	const commonProps = {
		width: 0,
		height: 0,
		data: graphData,
		margin: {
			top: 5,
			right: 5,
			left: 5 + computePadding(graphData.flatMap((item) => [
				item.budgeted,
				item.spent,
				item.balance,
				item.overspendingAdjustment
			]), (value) => format$12(value, "financial-no-decimals")),
			bottom: 5
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		style,
		children: (width, height) => {
			const chartProps = {
				...commonProps,
				width,
				height
			};
			return graphType === "Bar" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
				...chartProps,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						strokeDasharray: "3 3",
						stroke: theme.pillBorder
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "date",
						tick: { fill: theme.reportsLabel },
						tickFormatter: formatDate,
						minTickGap: 50
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick: { fill: theme.reportsLabel },
						tickCount: 8,
						tickFormatter: (value) => privacyMode && !yAxisIsHovered ? "..." : format$12(value, "financial-no-decimals"),
						onMouseEnter: () => setYAxisIsHovered(true),
						onMouseLeave: () => setYAxisIsHovered(false),
						stroke: theme.pageTextSubdued
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
						cursor: { fill: "transparent" },
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTooltip$8, {
							isConcise,
							format: format$12,
							showBalance
						}),
						isAnimationActive: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "budgeted",
						fill: theme.reportsNumberPositive,
						name: budgetedLabel,
						animationDuration: 1e3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "spent",
						fill: theme.reportsNumberNegative,
						name: spentLabel,
						animationDuration: 1e3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "overspendingAdjustment",
						fill: theme.templateNumberUnderFunded,
						name: overspendingLabel,
						animationDuration: 1e3
					}),
					showBalance && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "balance",
						stroke: theme.reportsGray,
						strokeWidth: 2,
						name: balanceLabel,
						dot: false,
						animationDuration: 1e3
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				...chartProps,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						strokeDasharray: "3 3",
						stroke: theme.pillBorder
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "date",
						tick: { fill: theme.reportsLabel },
						tickFormatter: formatDate,
						minTickGap: 50
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick: { fill: theme.reportsLabel },
						tickCount: 8,
						tickFormatter: (value) => privacyMode && !yAxisIsHovered ? "..." : format$12(value, "financial-no-decimals"),
						onMouseEnter: () => setYAxisIsHovered(true),
						onMouseLeave: () => setYAxisIsHovered(false),
						stroke: theme.pageTextSubdued
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
						cursor: { fill: "transparent" },
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTooltip$8, {
							isConcise,
							format: format$12,
							showBalance
						}),
						isAnimationActive: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "budgeted",
						stroke: theme.reportsNumberPositive,
						strokeWidth: 2,
						name: budgetedLabel,
						dot: false,
						animationDuration: 1e3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "spent",
						stroke: theme.reportsNumberNegative,
						strokeWidth: 2,
						name: spentLabel,
						dot: false,
						animationDuration: 1e3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "overspendingAdjustment",
						stroke: theme.templateNumberUnderFunded,
						strokeWidth: 2,
						name: overspendingLabel,
						dot: false,
						animationDuration: 1e3
					}),
					showBalance && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "balance",
						stroke: theme.reportsGray,
						strokeWidth: 2,
						name: balanceLabel,
						dot: false,
						animationDuration: 1e3
					})
				]
			});
		}
	});
}
//#endregion
//#region src/components/reports/spreadsheets/budget-analysis-spreadsheet.ts
function createBudgetAnalysisSpreadsheet({ conditions = [], conditionsOp = "and", startDate, endDate }) {
	return async (spreadsheet, setData) => {
		const { list: allCategories, grouped: allCategoryGroups } = await send("get-categories");
		const groupNameById = new Map(allCategoryGroups.map((g) => [g.id, g.name]));
		const relevantConditions = conditions.filter((cond) => !cond.customName && (cond.field === "category" || cond.field === "category_group"));
		const baseCategories = allCategories.filter((cat) => !cat.is_income && !cat.hidden);
		let categoriesToInclude;
		if (relevantConditions.length > 0) {
			const conditionResults = relevantConditions.map((cond) => {
				const getKey = (cat) => cond.field === "category_group" ? cat.group : cat.id;
				const matchesRegex = cond.op === "matches" && typeof cond.value === "string" && cond.value.length <= 256 ? (() => {
					try {
						return new RegExp(cond.value, "i");
					} catch {
						return null;
					}
				})() : null;
				return baseCategories.filter((cat) => {
					const key = getKey(cat);
					const textValue = cond.field === "category_group" ? groupNameById.get(key) ?? key : cat.name;
					if (cond.op === "is") return cond.value === key;
					else if (cond.op === "isNot") return cond.value !== key;
					else if (cond.op === "oneOf") return Array.isArray(cond.value) && cond.value.includes(key);
					else if (cond.op === "notOneOf") return Array.isArray(cond.value) && !cond.value.includes(key);
					else if (cond.op === "contains") return typeof cond.value === "string" && textValue.toLowerCase().includes(cond.value.toLowerCase());
					else if (cond.op === "doesNotContain") return typeof cond.value === "string" && !textValue.toLowerCase().includes(cond.value.toLowerCase());
					else if (cond.op === "matches") return matchesRegex?.test(textValue) ?? false;
					return false;
				});
			});
			if (conditionsOp === "or") {
				const categoryIds = new Set(conditionResults.flat().map((cat) => cat.id));
				categoriesToInclude = baseCategories.filter((cat) => categoryIds.has(cat.id));
			} else if (conditionResults.length === 0) categoriesToInclude = [];
			else {
				const firstSet = new Set(conditionResults[0].map((cat) => cat.id));
				for (let i = 1; i < conditionResults.length; i++) {
					const currentIds = new Set(conditionResults[i].map((cat) => cat.id));
					for (const id of firstSet) if (!currentIds.has(id)) firstSet.delete(id);
				}
				categoriesToInclude = baseCategories.filter((cat) => firstSet.has(cat.id));
			}
		} else categoriesToInclude = baseCategories;
		const intervals = rangeInclusive(getMonth(startDate), getMonth(endDate));
		const intervalData = [];
		let runningBalance = 0;
		const prevMonthData = await send("envelope-budget-month", { month: subMonths(getMonth(startDate), 1) });
		for (const cat of categoriesToInclude) {
			const balanceCell = prevMonthData.find((cell) => cell.name.endsWith(`leftover-${cat.id}`));
			const carryoverCell = prevMonthData.find((cell) => cell.name.endsWith(`carryover-${cat.id}`));
			const catBalance = balanceCell?.value || 0;
			const hasCarryover = Boolean(carryoverCell?.value);
			if (catBalance > 0 || catBalance < 0 && hasCarryover) runningBalance += catBalance;
		}
		let totalBudgeted = 0;
		let totalSpent = 0;
		let totalOverspendingAdjustment = 0;
		let overspendingFromPrevMonth = 0;
		for (const month of intervals) {
			const monthData = await send("envelope-budget-month", { month });
			let budgeted = 0;
			let spent = 0;
			let overspendingThisMonth = 0;
			let carryoverToNextMonth = 0;
			for (const cat of categoriesToInclude) {
				const budgetCell = monthData.find((cell) => cell.name.endsWith(`budget-${cat.id}`));
				const spentCell = monthData.find((cell) => cell.name.endsWith(`sum-amount-${cat.id}`));
				const balanceCell = monthData.find((cell) => cell.name.endsWith(`leftover-${cat.id}`));
				const carryoverCell = monthData.find((cell) => cell.name.endsWith(`carryover-${cat.id}`));
				const catBudgeted = budgetCell?.value || 0;
				const catSpent = spentCell?.value || 0;
				const catBalance = balanceCell?.value || 0;
				const hasCarryover = Boolean(carryoverCell?.value);
				budgeted += catBudgeted;
				spent += catSpent;
				if (catBalance > 0 || catBalance < 0 && hasCarryover) carryoverToNextMonth += catBalance;
				else if (catBalance < 0 && !hasCarryover) overspendingThisMonth += catBalance;
			}
			const overspendingAdjustment = overspendingFromPrevMonth;
			const monthBalance = budgeted + spent + runningBalance;
			totalBudgeted += budgeted;
			totalSpent += spent;
			totalOverspendingAdjustment += Math.abs(overspendingAdjustment);
			intervalData.push({
				date: month,
				budgeted,
				spent,
				balance: monthBalance,
				overspendingAdjustment: Math.abs(overspendingAdjustment)
			});
			runningBalance = carryoverToNextMonth;
			overspendingFromPrevMonth = overspendingThisMonth;
		}
		setData({
			intervalData,
			startDate,
			endDate,
			totalBudgeted,
			totalSpent,
			totalOverspendingAdjustment,
			finalOverspendingAdjustment: overspendingFromPrevMonth
		});
	};
}
//#endregion
//#region src/reports/mutations.ts
var sendThrow = async (name, args) => {
	const { error, data } = await sendCatch(name, args);
	if (error) throw error;
	return data;
};
function invalidateReportQueries(queryClient, queryKey) {
	queryClient.invalidateQueries({ queryKey: queryKey ?? reportQueries.lists() });
}
function invalidateDashboardQueries(queryClient, queryKey) {
	queryClient.invalidateQueries({ queryKey: queryKey ?? dashboardQueries.lists() });
}
function dispatchErrorNotification(dispatch, message, error) {
	dispatch(addNotification({ notification: {
		id: crypto.randomUUID(),
		type: "error",
		message,
		pre: error ? error.message : void 0
	} }));
}
function useUpdateReportMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ report }) => {
			return await sendThrow("report/update", report);
		},
		onSuccess: () => invalidateReportQueries(queryClient),
		onError: (error) => {
			console.error("Error updating report:", error);
			dispatchErrorNotification(dispatch, t("There was an error updating the report. Please try again."), error);
		}
	});
}
function useDeleteReportMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ id }) => {
			return await sendThrow("report/delete", id);
		},
		onSuccess: () => invalidateReportQueries(queryClient),
		onError: (error) => {
			console.error("Error deleting report:", error);
			dispatchErrorNotification(dispatch, t("There was an error deleting the report. Please try again."), error);
		}
	});
}
function useCreateReportMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ report }) => {
			return await sendThrow("report/create", report);
		},
		onSuccess: () => invalidateReportQueries(queryClient),
		onError: (error) => {
			console.error("Error creating report:", error);
			dispatchErrorNotification(dispatch, t("There was an error creating the report. Please try again."), error);
		}
	});
}
function useCreateDashboardPageMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ name }) => {
			return await sendThrow("dashboard-create", { name });
		},
		onSuccess: () => invalidateDashboardQueries(queryClient),
		onError: (error) => {
			console.error("Error creating dashboard page:", error);
			dispatchErrorNotification(dispatch, t("There was an error creating the dashboard page. Please try again."), error);
		}
	});
}
function useDeleteDashboardPageMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ id }) => {
			return await sendThrow("dashboard-delete", id);
		},
		onSuccess: () => invalidateDashboardQueries(queryClient),
		onError: (error) => {
			console.error("Error deleting dashboard page:", error);
			dispatchErrorNotification(dispatch, t("There was an error deleting the dashboard page. Please try again."), error);
		}
	});
}
function useRenameDashboardPageMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ id, name }) => {
			return await sendThrow("dashboard-rename", {
				id,
				name
			});
		},
		onSuccess: () => invalidateDashboardQueries(queryClient),
		onError: (error) => {
			console.error("Error renaming dashboard page:", error);
			dispatchErrorNotification(dispatch, t("There was an error renaming the dashboard page. Please try again."), error);
		}
	});
}
function useUpdateDashboardWidgetsMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ widgets }) => {
			return await sendThrow("dashboard-update", widgets);
		},
		onSuccess: () => invalidateDashboardQueries(queryClient),
		onError: (error) => {
			console.error("Error updating dashboard widgets:", error);
			dispatchErrorNotification(dispatch, t("There was an error updating the dashboard widgets. Please try again."), error);
		}
	});
}
function useUpdateDashboardWidgetMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ widget }) => {
			return await sendThrow("dashboard-update-widget", widget);
		},
		onSuccess: () => invalidateDashboardQueries(queryClient),
		onError: (error) => {
			console.error("Error updating dashboard widget:", error);
			dispatchErrorNotification(dispatch, t("There was an error updating the dashboard widget. Please try again."), error);
		}
	});
}
function useResetDashboardPageMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ id }) => {
			return await sendThrow("dashboard-reset", id);
		},
		onSuccess: () => invalidateDashboardQueries(queryClient),
		onError: (error) => {
			console.error("Error resetting dashboard page:", error);
			dispatchErrorNotification(dispatch, t("There was an error resetting the dashboard page. Please try again."), error);
		}
	});
}
function useAddDashboardWidgetMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ widget }) => {
			return await sendThrow("dashboard-add-widget", widget);
		},
		onSuccess: () => invalidateDashboardQueries(queryClient),
		onError: (error) => {
			console.error("Error adding dashboard widget:", error);
			dispatchErrorNotification(dispatch, t("There was an error adding the dashboard widget. Please try again."), error);
		}
	});
}
function useRemoveDashboardWidgetMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ id }) => {
			return await sendThrow("dashboard-remove-widget", id);
		},
		onSuccess: () => invalidateDashboardQueries(queryClient),
		onError: (error) => {
			console.error("Error removing dashboard widget:", error);
			dispatchErrorNotification(dispatch, t("There was an error removing the dashboard widget. Please try again."), error);
		}
	});
}
function useCopyDashboardWidgetMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ id, targetDashboardPageId }) => {
			return await sendThrow("dashboard-copy-widget", {
				id,
				targetDashboardPageId
			});
		},
		onSuccess: () => invalidateDashboardQueries(queryClient),
		onError: (error) => {
			console.error("Error copying dashboard widget:", error);
			dispatchErrorNotification(dispatch, t("There was an error copying the dashboard widget. Please try again."), error);
		}
	});
}
function useImportDashboardPageMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ filePath, dashboardPageId }) => {
			return await sendThrow("dashboard-import", {
				filePath,
				dashboardPageId
			});
		},
		onSuccess: () => invalidateDashboardQueries(queryClient),
		onError: (error) => {
			console.error("Error importing dashboard page:", error);
			dispatchErrorNotification(dispatch, t("There was an error importing the dashboard page. Please try again."), error);
		}
	});
}
//#endregion
//#region src/components/reports/reports/BudgetAnalysis.tsx
function BudgetAnalysis() {
	const { data: widget, isPending } = useDashboardWidget({
		id: useParams().id,
		type: "budget-analysis-card"
	});
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetAnalysisInternal, { widget });
}
function BudgetAnalysisInternal({ widget }) {
	const locale = useLocale();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const format$11 = useFormat();
	const { conditions, conditionsOp, onApply: onApplyFilter, onDelete: onDeleteFilter, onUpdate: onUpdateFilter, onConditionsOpChange } = useRuleConditionFilters(widget?.meta?.conditions, widget?.meta?.conditionsOp);
	const [allMonths, setAllMonths] = (0, import_react.useState)(null);
	const [start, setStart] = (0, import_react.useState)(currentMonth());
	const [end, setEnd] = (0, import_react.useState)(currentMonth());
	const [mode, setMode] = (0, import_react.useState)("sliding-window");
	const [graphType, setGraphType] = (0, import_react.useState)(widget?.meta?.graphType || "Bar");
	const [showBalance, setShowBalance] = (0, import_react.useState)(widget?.meta?.showBalance ?? true);
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const [isConcise, setIsConcise] = (0, import_react.useState)(() => {
		return true;
	});
	const [_firstDayOfWeekIdx] = useSyncedPref("firstDayOfWeekIdx");
	const firstDayOfWeekIdx = _firstDayOfWeekIdx || "0";
	const calculateIsConcise = (startMonth, endMonth) => {
		return differenceInCalendarDays(parseISO(endMonth + "-01"), parseISO(startMonth + "-01")) > 93;
	};
	(0, import_react.useEffect)(() => {
		async function run() {
			const earliestTrans = await send("get-earliest-transaction");
			const latestTrans = await send("get-latest-transaction");
			const latestTransDate = latestTrans ? fromDateRepr(latestTrans.date) : currentDay();
			setLatestTransaction(latestTransDate);
			const currentMonth$11 = currentMonth();
			let earliestMonth = earliestTrans ? monthFromDate(parseISO(fromDateRepr(earliestTrans.date))) : currentMonth$11;
			const latestTransactionMonth = latestTrans ? monthFromDate(parseISO(fromDateRepr(latestTrans.date))) : currentMonth$11;
			const latestMonth = latestTransactionMonth > currentMonth$11 ? latestTransactionMonth : currentMonth$11;
			const yearAgo = subMonths(latestMonth, 12);
			if (earliestMonth > yearAgo) earliestMonth = yearAgo;
			setAllMonths(rangeInclusive(earliestMonth, latestMonth).map((month) => ({
				name: month,
				pretty: format(month, "MMMM, yyyy", locale)
			})).reverse());
			if (widget?.meta?.timeFrame) {
				const [calculatedStart, calculatedEnd] = calculateTimeRange(widget.meta.timeFrame, void 0, latestTransDate);
				setStart(calculatedStart);
				setEnd(calculatedEnd);
				setMode(widget.meta.timeFrame.mode);
				setIsConcise(calculateIsConcise(calculatedStart, calculatedEnd));
			} else {
				const [liveStart, liveEnd] = calculateTimeRange({
					start: subMonths(currentMonth$11, 5),
					end: currentMonth$11,
					mode: "sliding-window"
				});
				setStart(liveStart);
				setEnd(liveEnd);
				setIsConcise(calculateIsConcise(liveStart, liveEnd));
			}
		}
		run();
	}, [locale, widget?.meta?.timeFrame]);
	const startDate = start + "-01";
	const endDate = getMonthEnd(end + "-01");
	const data = useReport$1("default", (0, import_react.useMemo)(() => createBudgetAnalysisSpreadsheet({
		conditions,
		conditionsOp,
		startDate,
		endDate
	}), [
		conditions,
		conditionsOp,
		startDate,
		endDate
	]));
	const navigate = useNavigate();
	const { isNarrowWidth } = useResponsive();
	const onChangeDates = (newStart, newEnd, newMode) => {
		setStart(newStart);
		setEnd(newEnd);
		setMode(newMode);
		setIsConcise(calculateIsConcise(newStart, newEnd));
	};
	const updateDashboardWidgetMutation = useUpdateDashboardWidgetMutation();
	async function onSaveWidget() {
		if (!widget) throw new Error("No widget that could be saved.");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				conditions,
				conditionsOp,
				timeFrame: {
					start,
					end,
					mode
				},
				graphType,
				showBalance
			}
		} }, { onSuccess: () => {
			dispatch(addNotification({ notification: {
				type: "message",
				message: t("Dashboard widget successfully saved.")
			} }));
		} });
	}
	if (!data || !allMonths) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	const endingBalance = data.intervalData[data.intervalData.length - 1]?.balance ?? 0;
	const title = widget?.meta?.name || t("Budget Analysis");
	const onSaveWidgetName = async (newName) => {
		if (!widget) throw new Error("No widget that could be saved.");
		const name = newName || t("Budget Analysis");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				name
			}
		} });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: isNarrowWidth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title,
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: () => navigate("/reports") })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditablePageHeaderTitle, {
			title,
			onSave: onSaveWidgetName
		}) : title }),
		padding: 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
			start,
			end,
			mode,
			show1Month: true,
			allMonths,
			earliestTransaction: allMonths[allMonths.length - 1].name,
			latestTransaction,
			firstDayOfWeekIdx,
			onChangeDates,
			filters: conditions,
			conditionsOp,
			onApply: onApplyFilter,
			onUpdateFilter,
			onDeleteFilter,
			onConditionsOpChange,
			filterInclude: ["category", "saved"],
			inlineContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
				content: graphType === "Line" ? t("Switch to bar chart") : t("Switch to line chart"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "bare",
					onPress: () => setGraphType(graphType === "Line" ? "Bar" : "Line"),
					children: graphType === "Line" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgChartBar, { style: {
						width: 12,
						height: 12
					} }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgChart, { style: {
						width: 12,
						height: 12
					} })
				})
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					gap: 10
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onPress: () => setShowBalance((state) => !state),
					children: showBalance ? t("Hide balance") : t("Show balance")
				}), widget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "primary",
					onPress: onSaveWidget,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save widget" })
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				display: "flex",
				flexDirection: "row",
				paddingTop: 0,
				flexGrow: 1
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: { flexGrow: 1 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: {
						backgroundColor: theme.tableBackground,
						padding: 20,
						paddingTop: 0,
						flex: "1 0 auto",
						overflowY: "auto"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: {
							flexDirection: "column",
							flexGrow: 1,
							padding: 10,
							paddingTop: 10
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
								style: {
									alignItems: "flex-end",
									flexDirection: "row"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: { flex: 1 } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
									style: {
										alignItems: "flex-end",
										color: theme.pageText
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
											style: {
												marginBottom: 5,
												minWidth: 210
											},
											left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Budgeted:" }) }),
											right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
												style: { fontWeight: 600 },
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format$11(data.totalBudgeted, "financial") })
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
											style: {
												marginBottom: 5,
												minWidth: 210
											},
											left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Spent:" }) }),
											right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
												style: { fontWeight: 600 },
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format$11(data.totalSpent, "financial") })
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
											style: {
												marginBottom: 5,
												minWidth: 210
											},
											left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Overspending adj:" }) }),
											right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
												style: { fontWeight: 600 },
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format$11(data.totalOverspendingAdjustment, "financial") })
											})
										}),
										showBalance && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
											style: {
												marginBottom: 5,
												minWidth: 210
											},
											left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Ending balance:" }) }),
											right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
												style: { fontWeight: 600 },
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Change, { amount: endingBalance }) })
											})
										})
									] }) })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetAnalysisGraph, {
								style: { flexGrow: 1 },
								data,
								graphType,
								showBalance,
								isConcise
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
								style: { marginTop: 30 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Paragraph, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Understanding the Chart" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"• ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Budgeted:" }),
										" The amount you allocated each month",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"• ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Spent:" }),
										" Your actual spending",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"• ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Overspending Adjustment:" }),
										" Amounts from categories without rollover that were reset",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"• ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Balance:" }),
										" Your cumulative budget performance, starting with any prior balance. Respects category rollover settings from your budget."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Paragraph, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Understanding the Budget Summary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"The balance starts from the month before your selected period. Budgeted, spent, and overspending adjustments show totals over the period. Ending balance shows the final balance at period end. You can filter by categories to track changes in a specific area."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: "Hint: You can use the icon in the header to toggle between line and bar chart views." })
								] })
							})
						]
					})
				})
			})
		})]
	});
}
//#endregion
//#region src/components/reports/graphs/CalendarGraph.tsx
function CalendarGraph({ data, start, firstDayOfWeekIdx, isEditing, onDayClick }) {
	const format = useFormat();
	const startingDate = startOfWeek(/* @__PURE__ */ new Date(), { weekStartsOn: firstDayOfWeekIdx !== void 0 && !Number.isNaN(parseInt(firstDayOfWeekIdx)) && parseInt(firstDayOfWeekIdx) >= 0 && parseInt(firstDayOfWeekIdx) <= 6 ? parseInt(firstDayOfWeekIdx) : 0 });
	const [fontSize, setFontSize] = (0, import_react.useState)(14);
	const buttonRef = useResizeObserver((rect) => {
		const newValue = Math.floor(rect.height / 2);
		if (newValue > 14) setFontSize(14);
		else setFontSize(newValue);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			color: theme.pageTextSubdued,
			display: "grid",
			gridTemplateColumns: "repeat(7, 1fr)",
			gridAutoRows: "1fr",
			gap: 2
		},
		onClick: () => onDayClick(null),
		children: Array.from({ length: 7 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				textAlign: "center",
				fontSize: 14,
				fontWeight: 500,
				padding: "3px 0",
				height: "100%",
				width: "100%",
				position: "relative",
				marginBottom: 4
			},
			children: format$1(addDays$1(startingDate, index), "EEEEE")
		}, index))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			display: "grid",
			gridTemplateColumns: "repeat(7, 1fr)",
			gridAutoRows: "1fr",
			gap: 2,
			width: "100%",
			height: "100%",
			zIndex: isEditing ? -1 : "auto"
		},
		children: data.map((day, index) => !isSameMonth(day.date, startOfMonth(start)) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { onClick: () => onDayClick(null) }, `empty-${day.date.getTime()}`) : day.incomeValue !== 0 || day.expenseValue !== 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: { marginBottom: 10 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: format$1(day.date, "MMM dd") })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: { lineHeight: 1.5 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						display: "grid",
						gridTemplateColumns: "70px 1fr 60px",
						gridAutoRows: "1fr"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								textAlign: "right",
								marginRight: 4
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Income:" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								color: theme.reportsNumberPositive,
								flexDirection: "row"
							},
							children: day.incomeValue !== 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(day.incomeValue, "financial") }) }) : ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: {
								marginLeft: 4,
								flexDirection: "row"
							},
							children: [
								"(",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: Math.round(day.incomeSize * 100) / 100 + "%" }),
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								textAlign: "right",
								marginRight: 4
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Expenses:" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								color: theme.reportsNumberNegative,
								flexDirection: "row"
							},
							children: day.expenseValue !== 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(day.expenseValue, "financial") }) }) : ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: {
								marginLeft: 4,
								flexDirection: "row"
							},
							children: [
								"(",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: Math.round(day.expenseSize * 100) / 100 + "%" }),
								")"
							]
						})
					]
				})
			})] }),
			placement: "bottom end",
			style: {
				...styles.tooltip,
				lineHeight: 1.5,
				padding: "6px 10px"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayButton, {
				resizeRef: (el) => {
					if (index === 15 && el) buttonRef(el);
				},
				fontSize,
				day,
				onPress: () => onDayClick(day.date)
			}, day.date.getTime())
		}, day.date.getTime()) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayButton, {
			resizeRef: (el) => {
				if (index === 15 && el) buttonRef(el);
			},
			fontSize,
			day,
			onPress: () => onDayClick(day.date)
		}, day.date.getTime()))
	})] });
}
function DayButton({ day, onPress, fontSize, resizeRef }) {
	const [currentFontSize, setCurrentFontSize] = (0, import_react.useState)(fontSize);
	(0, import_react.useEffect)(() => {
		setCurrentFontSize(fontSize);
	}, [fontSize]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref: resizeRef,
		"aria-label": format$1(day.date, "MMMM d, yyyy"),
		style: {
			borderColor: "transparent",
			backgroundColor: theme.calendarCellBackground,
			position: "relative",
			padding: "unset",
			height: "100%",
			minWidth: 0,
			minHeight: 0,
			margin: 0
		},
		onPress: () => onPress(),
		children: [
			day.expenseSize !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
				position: "absolute",
				width: "50%",
				height: "100%",
				background: theme.reportsNumberNegative,
				opacity: .2,
				right: 0
			} }),
			day.incomeSize !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
				position: "absolute",
				width: "50%",
				height: "100%",
				background: theme.reportsNumberPositive,
				opacity: .2,
				left: 0
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
				position: "absolute",
				left: 0,
				bottom: 0,
				opacity: .9,
				height: `${Math.ceil(day.incomeSize)}%`,
				backgroundColor: theme.reportsNumberPositive,
				width: "50%",
				transition: "height 0.5s ease-out"
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
				position: "absolute",
				right: 0,
				bottom: 0,
				opacity: .9,
				height: `${Math.ceil(day.expenseSize)}%`,
				backgroundColor: theme.reportsNumberNegative,
				width: "50%",
				transition: "height 0.5s ease-out"
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					fontSize: `${currentFontSize}px`,
					fontWeight: 500,
					position: "relative"
				},
				children: getDate(day.date)
			})
		]
	});
}
//#endregion
//#region src/components/reports/spreadsheets/calendar-spreadsheet.ts
function calendarSpreadsheet(start, end, conditions = [], conditionsOp = "and", firstDayOfWeekIdx) {
	return async (spreadsheet, setData) => {
		let filters;
		try {
			const { filters: filtersLocal } = await send("make-filters-from-conditions", { conditions: conditions.filter((cond) => !cond.customName) });
			filters = filtersLocal;
		} catch (error) {
			console.error("Failed to make filters from conditions:", error);
			filters = [];
		}
		const conditionsOpKey = conditionsOp === "or" ? "$or" : "$and";
		let startDay;
		try {
			startDay = parse(firstDayOfMonth(start), "yyyy-MM-dd", /* @__PURE__ */ new Date());
		} catch (error) {
			console.error("Failed to parse start date:", error);
			throw new Error("Invalid start date format");
		}
		let endDay;
		try {
			endDay = parse(lastDayOfMonth(end), "yyyy-MM-dd", /* @__PURE__ */ new Date());
		} catch (error) {
			console.error("Failed to parse end date:", error);
			throw new Error("Invalid end date format");
		}
		const makeRootQuery = () => q$1("transactions").filter({ $and: [{ date: { $gte: format$1(startDay, "yyyy-MM-dd") } }, { date: { $lte: format$1(endDay, "yyyy-MM-dd") } }] }).filter({ [conditionsOpKey]: filters }).groupBy(["date"]).select(["date", { amount: { $sum: "$amount" } }]);
		let expenseData;
		try {
			expenseData = await aqlQuery(makeRootQuery().filter({ $and: { amount: { $lt: 0 } } }));
		} catch (error) {
			console.error("Failed to fetch expense data:", error);
			expenseData = { data: [] };
		}
		let incomeData;
		try {
			incomeData = await aqlQuery(makeRootQuery().filter({ $and: { amount: { $gt: 0 } } }));
		} catch (error) {
			console.error("Failed to fetch income data:", error);
			incomeData = { data: [] };
		}
		const getOneDatePerMonth = (start, end) => {
			const months = [];
			let currentDate = startOfMonth(start);
			while (!isSameMonth(currentDate, end)) {
				months.push(currentDate);
				currentDate = addMonths$1(currentDate, 1);
			}
			months.push(end);
			return months;
		};
		setData(recalculate$4(incomeData.data, expenseData.data, getOneDatePerMonth(startDay, endDay), start, firstDayOfWeekIdx));
	};
}
function recalculate$4(incomeData, expenseData, months, start, firstDayOfWeekIdx) {
	const incomeDataMap = /* @__PURE__ */ new Map();
	incomeData.forEach((item) => {
		incomeDataMap.set(item.date, item.amount);
	});
	const expenseDataMap = /* @__PURE__ */ new Map();
	expenseData.forEach((item) => {
		expenseDataMap.set(item.date, item.amount);
	});
	const parseAndCacheDate = (() => {
		const cache = /* @__PURE__ */ new Map();
		return (dateStr) => {
			if (!cache.has(dateStr)) cache.set(dateStr, parse(dateStr, "yyyy-MM-dd", /* @__PURE__ */ new Date()));
			return cache.get(dateStr);
		};
	})();
	const getDaysArray = (month) => {
		const expenseValues = expenseData.filter((f) => isSameMonth(parseAndCacheDate(f.date), month)).map((m) => Math.abs(m.amount));
		const incomeValues = incomeData.filter((f) => isSameMonth(parseAndCacheDate(f.date), month)).map((m) => Math.abs(m.amount));
		const totalExpenseValue = expenseValues.length ? expenseValues.reduce((acc, val) => acc + val, 0) : null;
		const totalIncomeValue = incomeValues.length ? incomeValues.reduce((acc, val) => acc + val, 0) : null;
		const getBarLength = (value) => {
			if (value < 0 && typeof totalExpenseValue === "number" && totalExpenseValue > 0) {
				const result = Math.abs(value) / totalExpenseValue * 100;
				return Number.isFinite(result) ? result : 0;
			} else if (value > 0 && typeof totalIncomeValue === "number" && totalIncomeValue > 0) {
				const result = value / totalIncomeValue * 100;
				return Number.isFinite(result) ? result : 0;
			} else return 0;
		};
		const firstDay = startOfMonth(month);
		const beginDay = startOfWeek(firstDay, { weekStartsOn: firstDayOfWeekIdx !== void 0 && !Number.isNaN(parseInt(firstDayOfWeekIdx)) && parseInt(firstDayOfWeekIdx) >= 0 && parseInt(firstDayOfWeekIdx) <= 6 ? parseInt(firstDayOfWeekIdx) : 0 });
		let totalDays = differenceInDays(firstDay, beginDay) + getDaysInMonth(firstDay);
		if (totalDays % 7 !== 0) totalDays += 7 - totalDays % 7;
		const daysArray = [];
		for (let i = 0; i < totalDays; i++) {
			const currentDate = addDays$1(beginDay, i);
			if (!isSameMonth(currentDate, firstDay)) daysArray.push({
				date: currentDate,
				incomeValue: 0,
				expenseValue: 0,
				incomeSize: 0,
				expenseSize: 0
			});
			else {
				const dateKey = format$1(currentDate, "yyyy-MM-dd");
				const currentIncome = incomeDataMap.get(dateKey) ?? 0;
				const currentExpense = expenseDataMap.get(dateKey) ?? 0;
				daysArray.push({
					date: currentDate,
					incomeSize: getBarLength(currentIncome),
					incomeValue: Math.abs(currentIncome),
					expenseSize: getBarLength(currentExpense),
					expenseValue: Math.abs(currentExpense)
				});
			}
		}
		return {
			data: daysArray,
			totalExpense: totalExpenseValue ?? 0,
			totalIncome: totalIncomeValue ?? 0
		};
	};
	return { calendarData: months.map((m) => {
		return {
			...getDaysArray(m),
			start: startOfMonth(m),
			end: endOfMonth(m)
		};
	}) };
}
//#endregion
//#region src/components/reports/reports/Calendar.tsx
var CHEVRON_HEIGHT = 42;
var SUMMARY_HEIGHT = 140;
function Calendar() {
	const params = useParams();
	const [searchParams] = useSearchParams();
	const { data: widget, isPending } = useDashboardWidget({
		id: params.id,
		type: "calendar-card"
	});
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarInner, {
		widget,
		parameters: searchParams
	});
}
function CalendarInner({ widget, parameters }) {
	const locale = useLocale();
	const { t } = useTranslation();
	const format$10 = useFormat();
	const [start, setStart] = (0, import_react.useState)(dayFromDate(currentMonth()));
	const [end, setEnd] = (0, import_react.useState)(currentDay());
	const [mode, setMode] = (0, import_react.useState)("full");
	const [query, setQuery] = (0, import_react.useState)(void 0);
	const [dirty, setDirty] = (0, import_react.useState)(false);
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const { transactions: transactionsGrouped, fetchNextPage: loadMoreTransactions } = useTransactions({ query });
	const allTransactions = (0, import_react.useMemo)(() => ungroupTransactions(transactionsGrouped), [transactionsGrouped]);
	const { data: accounts = [] } = useAccounts();
	const { data: payees = [] } = usePayees();
	const { data: { grouped: categoryGroups } = { grouped: [] } } = useCategories();
	const [_firstDayOfWeekIdx] = useSyncedPref("firstDayOfWeekIdx");
	const firstDayOfWeekIdx = _firstDayOfWeekIdx || "0";
	const { conditions, conditionsOp, onApply: onApplyFilter, onDelete: onDeleteFilter, onUpdate: onUpdateFilter, onConditionsOpChange } = useRuleConditionFilters(widget?.meta?.conditions, widget?.meta?.conditionsOp);
	(0, import_react.useEffect)(() => {
		const day = parameters.get("day");
		const month = parameters.get("month");
		if (day && onApplyFilter) onApplyFilter({
			conditions: [...widget?.meta?.conditions || [], {
				op: "is",
				field: "date",
				value: day
			}],
			conditionsOp: "and",
			id: []
		});
		if (month && onApplyFilter) onApplyFilter({
			conditions: [...widget?.meta?.conditions || [], {
				field: "date",
				op: "is",
				value: month,
				options: { month: true }
			}],
			conditionsOp: "and",
			id: []
		});
	}, [
		widget?.meta?.conditions,
		onApplyFilter,
		parameters
	]);
	const params = (0, import_react.useMemo)(() => {
		if (dirty === true) setDirty(false);
		return calendarSpreadsheet(start, end, conditions, conditionsOp, firstDayOfWeekIdx);
	}, [
		start,
		end,
		conditions,
		conditionsOp,
		firstDayOfWeekIdx,
		dirty
	]);
	const [sortField, setSortField] = (0, import_react.useState)("");
	const [ascDesc, setAscDesc] = (0, import_react.useState)("desc");
	(0, import_react.useEffect)(() => {
		const conditionsOpKey = conditionsOp === "or" ? "$or" : "$and";
		send("make-filters-from-conditions", { conditions: conditions.filter((cond) => !cond.customName) }).then((data) => {
			let query = q$1("transactions").filter({ [conditionsOpKey]: data.filters }).filter({ $and: [{ date: { $gte: firstDayOfMonth(start) } }, { date: { $lte: lastDayOfMonth(end) } }] }).select("*");
			if (sortField) query = query.orderBy({ [getField(sortField)]: ascDesc });
			setQuery(query.options({ splits: "grouped" }));
		}).catch((error) => {
			console.error("Error generating filters:", error);
		});
	}, [
		start,
		end,
		conditions,
		conditionsOp,
		sortField,
		ascDesc
	]);
	const [flexAlignment, setFlexAlignment] = (0, import_react.useState)("center");
	const scrollbarContainer = (0, import_react.useRef)(null);
	const mergedRef = useMergedRefs(useResizeObserver(() => {
		setFlexAlignment(scrollbarContainer.current && scrollbarContainer.current.scrollWidth > scrollbarContainer.current.clientWidth ? "flex-start" : "center");
	}), scrollbarContainer);
	const data = useReport$1("calendar", params);
	const [allMonths, setAllMonths] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		async function run() {
			const earliestTransaction = await send("get-earliest-transaction");
			setEarliestTransaction(earliestTransaction ? earliestTransaction.date : currentDay());
			const latestTransaction = await send("get-latest-transaction");
			setLatestTransaction(latestTransaction ? latestTransaction.date : currentDay());
			const currentMonth$10 = currentMonth();
			let earliestMonth = earliestTransaction ? monthFromDate(parseISO(fromDateRepr(earliestTransaction.date))) : currentMonth$10;
			const latestTransactionMonth = latestTransaction ? monthFromDate(parseISO(fromDateRepr(latestTransaction.date))) : currentMonth$10;
			const latestMonth = latestTransactionMonth > currentMonth$10 ? latestTransactionMonth : currentMonth$10;
			const yearAgo = subMonths(latestMonth, 12);
			if (earliestMonth > yearAgo) earliestMonth = yearAgo;
			setAllMonths(rangeInclusive(earliestMonth, latestMonth).map((month) => ({
				name: month,
				pretty: format(month, "MMMM yyyy", locale)
			})).reverse());
		}
		run();
	}, [locale]);
	(0, import_react.useEffect)(() => {
		if (latestTransaction) {
			const [initialStart, initialEnd, initialMode] = calculateTimeRange(widget?.meta?.timeFrame, {
				start: dayFromDate(currentMonth()),
				end: currentDay(),
				mode: "full"
			}, latestTransaction);
			setStart(initialStart);
			setEnd(initialEnd);
			setMode(initialMode);
		}
	}, [latestTransaction, widget?.meta?.timeFrame]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isNarrowWidth } = useResponsive();
	const title = widget?.meta?.name || t("Calendar");
	const table = (0, import_react.useRef)(null);
	const dateFormat = useDateFormat();
	const updateDashboardWidgetMutation = useUpdateDashboardWidgetMutation();
	const onSaveWidgetName = async (newName) => {
		if (!widget) throw new Error("No widget that could be saved.");
		const name = newName || t("Calendar");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				name
			}
		} });
	};
	function onChangeDates(start, end, mode) {
		setStart(start);
		setEnd(end);
		setMode(mode);
	}
	async function onSaveWidget() {
		if (!widget) throw new Error("No widget that could be saved.");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				conditions,
				conditionsOp,
				timeFrame: {
					start,
					end,
					mode
				}
			}
		} }, {
			onSuccess: () => {
				dispatch(addNotification({ notification: {
					type: "message",
					message: t("Dashboard widget successfully saved.")
				} }));
			},
			onError: (error) => {
				dispatch(addNotification({ notification: {
					type: "error",
					message: t("Failed to save dashboard widget.")
				} }));
				console.error("Error saving widget:", error);
			}
		});
	}
	const { totalIncome, totalExpense } = (0, import_react.useMemo)(() => {
		if (!data || !data.calendarData) return {
			totalIncome: 0,
			totalExpense: 0
		};
		return {
			totalIncome: data.calendarData.reduce((prev, cur) => prev + cur.totalIncome, 0),
			totalExpense: data.calendarData.reduce((prev, cur) => prev + cur.totalExpense, 0)
		};
	}, [data]);
	const onSort = (0, import_react.useCallback)((headerClicked, ascDesc) => {
		if (headerClicked === sortField) setAscDesc(ascDesc);
		else {
			setSortField(headerClicked);
			setAscDesc("desc");
		}
	}, [sortField]);
	const onOpenTransaction = (0, import_react.useCallback)((transaction) => {
		navigate(`/transactions/${transaction.id}`);
	}, [navigate]);
	const refContainer = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (refContainer.current) setTotalHeight(refContainer.current.clientHeight - SUMMARY_HEIGHT);
	}, [query]);
	const [totalHeight, setTotalHeight] = (0, import_react.useState)(0);
	const closeY = (0, import_react.useRef)(3e3);
	const openY = 0;
	const [mobileTransactionsOpen, setMobileTransactionsOpen] = (0, import_react.useState)(false);
	const [{ y }, api] = useSpring(() => ({
		from: { y: closeY.current },
		immediate: false
	}), []);
	(0, import_react.useEffect)(() => {
		closeY.current = totalHeight;
		api.start({
			to: { y: mobileTransactionsOpen ? openY : closeY.current },
			immediate: false
		});
	}, [
		totalHeight,
		mobileTransactionsOpen,
		api
	]);
	const open = (0, import_react.useCallback)(({ canceled }) => {
		api.start({
			to: { y: openY },
			immediate: false,
			config: canceled ? config.wobbly : config.stiff
		});
		setMobileTransactionsOpen(true);
	}, [api]);
	const close = (0, import_react.useCallback)((velocity = 0) => {
		api.start({
			to: { y: closeY.current },
			config: {
				...config.stiff,
				velocity
			}
		});
		setMobileTransactionsOpen(false);
	}, [api]);
	const bind = useDrag(({ offset: [, oy], cancel }) => {
		if (oy < 0) {
			cancel();
			api.start({
				to: { y: 0 },
				immediate: true
			});
			return;
		}
		if (oy > totalHeight * .05 && mobileTransactionsOpen) {
			cancel();
			close();
			setMobileTransactionsOpen(false);
		} else if (!mobileTransactionsOpen) if (oy / totalHeight > .05) {
			cancel();
			open({ canceled: true });
			setMobileTransactionsOpen(true);
		} else api.start({
			to: { y: oy },
			immediate: true
		});
	}, {
		from: () => [0, y.get()],
		filterTaps: true,
		bounds: {
			top: -totalHeight + CHEVRON_HEIGHT,
			bottom: totalHeight - CHEVRON_HEIGHT
		},
		axis: "y",
		rubberband: true
	});
	const [earliestTransaction, setEarliestTransaction] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: isNarrowWidth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title,
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: () => navigate("/reports") })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditablePageHeaderTitle, {
			title,
			onSave: onSaveWidgetName
		}) : title }),
		padding: 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: { minHeight: !isNarrowWidth ? "120px" : "unset" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				allMonths,
				start,
				end,
				earliestTransaction,
				latestTransaction,
				firstDayOfWeekIdx,
				mode,
				onChangeDates,
				filters: conditions,
				onApply: onApplyFilter,
				onUpdateFilter,
				onDeleteFilter,
				conditionsOp,
				onConditionsOpChange,
				show1Month: true,
				children: widget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "primary",
					onPress: onSaveWidget,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save widget" })
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			ref: refContainer,
			style: { flexGrow: 1 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					backgroundColor: theme.pageBackground,
					paddingTop: 0,
					minHeight: "350px",
					overflowY: "auto"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: isNarrowWidth ? "column-reverse" : "row",
						justifyContent: "flex-start",
						flexGrow: 1,
						gap: 16,
						position: "relative",
						marginBottom: 16
					},
					children: [data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						ref: mergedRef,
						style: {
							flexGrow: 1,
							flexDirection: "row",
							gap: "20px",
							overflow: "auto",
							height: "100%",
							justifyContent: flexAlignment,
							display: "flex",
							...styles.horizontalScrollbar
						},
						children: data.calendarData.map((calendar, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarWithHeader, {
							calendar,
							onApplyFilter,
							firstDayOfWeekIdx,
							conditions,
							conditionsOp,
							format: format$10
						}, index))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCardHeader, {
						start,
						end,
						totalExpense,
						totalIncome,
						isNarrowWidth,
						format: format$10
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedProviderWithItems, {
				name: "transactions",
				items: [],
				fetchAllIds: async () => [],
				registerDispatch: () => {},
				selectAllFilter: (item) => !item._unmatched && !item.is_parent,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulesProvider, {
					query: void 0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: {
							width: "100%",
							flexGrow: 1,
							overflow: isNarrowWidth ? "auto" : "hidden"
						},
						ref: table,
						children: !isNarrowWidth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitsExpandedProvider, {
							initialMode: "collapse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionList, {
								tableRef: table,
								account: void 0,
								transactions: transactionsGrouped,
								allTransactions,
								loadMoreTransactions,
								accounts,
								category: void 0,
								categoryGroups,
								payees,
								balances: null,
								showBalances: false,
								showReconciled: true,
								showCleared: false,
								showAccount: true,
								isAdding: false,
								isNew: () => false,
								isMatched: () => false,
								dateFormat,
								hideFraction: false,
								renderEmpty: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
									style: {
										color: theme.tableText,
										marginTop: 20,
										textAlign: "center",
										fontStyle: "italic"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "No transactions" })
								}),
								onSort,
								sortField,
								ascDesc,
								onChange: () => {},
								onRefetch: () => setDirty(true),
								onCloseAddTransaction: () => {},
								onCreatePayee: async () => null,
								onApplyFilter: () => {},
								onBatchDelete: () => {},
								onBatchDuplicate: () => {},
								onBatchLinkSchedule: () => {},
								onBatchUnlinkSchedule: () => {},
								onCreateRule: () => {},
								onScheduleAction: () => {},
								onMakeAsNonSplitTransactions: () => {},
								showSelection: false,
								allowSplitTransaction: false,
								allowReorder: false
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(animated.div, {
							...bind(),
							style: {
								y,
								touchAction: "pan-x",
								backgroundColor: theme.mobileNavBackground,
								borderTop: `1px solid ${theme.menuBorder}`,
								...styles.shadow,
								height: totalHeight + CHEVRON_HEIGHT,
								width: "100%",
								position: "fixed",
								zIndex: 100,
								bottom: 0,
								display: "flex",
								flexDirection: "column",
								alignItems: "center"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "bare",
								onPress: () => !mobileTransactionsOpen ? open({ canceled: false }) : close(),
								className: css({
									color: theme.pageTextSubdued,
									height: 42,
									"&[data-pressed]": { backgroundColor: "transparent" }
								}),
								children: [!mobileTransactionsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCheveronUp, {
									width: 16,
									height: 16
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Show transactions" })] }), mobileTransactionsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCheveronDown, {
									width: 16,
									height: 16
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Hide transactions" })] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
								style: {
									height: "100%",
									width: "100%",
									overflow: "auto"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayPayeeProvider, {
									transactions: allTransactions,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionList$1, {
										isLoading: false,
										onLoadMore: loadMoreTransactions,
										transactions: allTransactions,
										onOpenTransaction,
										isLoadingMore: false
									})
								})
							})]
						})
					})
				})
			})]
		})]
	});
}
function CalendarWithHeader({ calendar, onApplyFilter, firstDayOfWeekIdx, conditions, conditionsOp, format }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			minWidth: "300px",
			maxWidth: "300px",
			padding: 10,
			borderRadius: 4,
			backgroundColor: theme.tableBackground
		},
		onClick: () => onApplyFilter({
			conditions: [...conditions.filter((f) => f.field !== "date")],
			conditionsOp,
			id: []
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				flexDirection: "row",
				justifyContent: "space-between",
				flexWrap: "wrap",
				marginBottom: 16
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "bare",
				style: {
					color: theme.pageTextSubdued,
					fontWeight: "bold",
					fontSize: "14px",
					margin: 0,
					padding: 0,
					display: "inline-block",
					width: "max-content"
				},
				onPress: () => {
					onApplyFilter({
						conditions: [...conditions.filter((f) => f.field !== "date"), {
							field: "date",
							op: "is",
							value: format$1(calendar.start, "yyyy-MM"),
							options: { month: true }
						}],
						conditionsOp: "and",
						id: []
					});
				},
				children: format$1(calendar.start, "MMMM yyyy")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					display: "grid",
					gridTemplateColumns: "16px 1fr",
					gap: 2
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgArrowThickUp, {
						width: 16,
						height: 16,
						style: {
							color: theme.reportsNumberPositive,
							flexShrink: 0
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: {
							color: theme.reportsNumberPositive,
							flexDirection: "row",
							flexGrow: 1,
							justifyContent: "start"
						},
						"aria-label": t("Income"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(calendar.totalIncome, "financial") }) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgArrowThickDown, {
						width: 16,
						height: 16,
						style: {
							color: theme.reportsNumberNegative,
							flexShrink: 0
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: {
							color: theme.reportsNumberNegative,
							flexDirection: "row",
							flexGrow: 1,
							justifyContent: "start"
						},
						"aria-label": t("Expenses"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(calendar.totalExpense, "financial") }) })
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flexGrow: 1,
				display: "block",
				marginBottom: 20
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarGraph, {
				data: calendar.data,
				start: calendar.start,
				onDayClick: (date) => {
					if (date) onApplyFilter({
						conditions: [...conditions.filter((f) => f.field !== "date"), {
							field: "date",
							op: "is",
							value: format$1(date, "yyyy-MM-dd")
						}],
						conditionsOp: "and",
						id: []
					});
					else onApplyFilter({
						conditions: [...conditions.filter((f) => f.field !== "date")],
						conditionsOp: "and",
						id: []
					});
				},
				firstDayOfWeekIdx
			})
		})]
	});
}
function CalendarCardHeader({ start, end, totalIncome, totalExpense, isNarrowWidth, format }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			...styles.smallText,
			marginLeft: isNarrowWidth ? 0 : 16,
			marginTop: isNarrowWidth ? 16 : 0,
			justifyContent: isNarrowWidth ? "center" : "flex-end",
			flexDirection: "row",
			height: "100px",
			minWidth: "210px"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				width: "200px",
				borderRadius: 4,
				backgroundColor: theme.tableBackground,
				padding: 10
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRange, {
				start,
				end
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: { lineHeight: 1.5 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						display: "grid",
						gridTemplateColumns: "70px 1fr",
						gridAutoRows: "1fr"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								textAlign: "right",
								marginRight: 4
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Income:" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: { color: theme.reportsNumberPositive },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format(totalIncome, "financial") })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								textAlign: "right",
								marginRight: 4
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Expenses:" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: { color: theme.reportsNumberNegative },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format(totalExpense, "financial") })
						})
					]
				})
			})]
		})
	});
}
function getField(field) {
	if (!field) return "date";
	switch (field) {
		case "account": return "account.name";
		case "payee": return "payee.name";
		case "category": return "category.name";
		case "payment": return "amount";
		case "deposit": return "amount";
		default: return field;
	}
}
//#endregion
//#region src/components/reports/graphs/CashFlowGraph.tsx
var MAX_BAR_SIZE = 50;
var ANIMATION_DURATION = 1e3;
function CustomTooltip$7({ active, payload, isConcise, format }) {
	const locale = useLocale();
	const { t } = useTranslation();
	if (!active || !payload || !Array.isArray(payload) || !payload[0]) return null;
	const [{ payload: data }] = payload;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: css({
			pointerEvents: "none",
			borderRadius: 2,
			boxShadow: "0 1px 6px rgba(0, 0, 0, .20)",
			backgroundColor: theme.menuBackground,
			color: theme.menuItemText,
			padding: 10
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { marginBottom: 10 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: format$1(data.date, isConcise ? "MMMM yyyy" : "MMMM dd, yyyy", { locale }) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { lineHeight: 1.5 },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Income:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(data.income, "financial") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Expenses:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(data.expenses, "financial") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Change:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
						as: "strong",
						children: format(data.income + data.expenses, "financial")
					})
				}),
				data.transfers !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Transfers:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(data.transfers, "financial") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Balance:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(data.balance, "financial") })
				})
			]
		})] })
	});
}
function CashFlowGraph({ graphData, isConcise, showBalance = true, style }) {
	const locale = useLocale();
	const privacyMode = usePrivacyMode();
	const [yAxisIsHovered, setYAxisIsHovered] = (0, import_react.useState)(false);
	const format = useFormat();
	const animationProps = useRechartsAnimation({ animationDuration: ANIMATION_DURATION });
	const data = graphData.expenses.map((row, idx) => ({
		date: row.x,
		expenses: row.y,
		income: graphData.income[idx].y,
		balance: graphData.balances[idx].y,
		transfers: graphData.transfers[idx].y
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		style,
		children: (width, height) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
			responsive: true,
			width,
			height,
			stackOffset: "sign",
			data,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					strokeDasharray: "3 3",
					vertical: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "date",
					tick: { fill: theme.reportsLabel },
					tickFormatter: (x) => {
						return format$1(x, isConcise ? "MMM ''yy" : "MMM d", { locale });
					},
					minTickGap: 50
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					tick: { fill: theme.reportsLabel },
					tickCount: 8,
					tickFormatter: (value) => privacyMode && !yAxisIsHovered ? "..." : format(value, "financial-no-decimals"),
					onMouseEnter: () => setYAxisIsHovered(true),
					onMouseLeave: () => setYAxisIsHovered(false)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
					labelFormatter: (x) => {
						return format$1(x, isConcise ? "MMM ''yy" : "MMM d", { locale });
					},
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTooltip$7, {
						isConcise,
						format
					}),
					isAnimationActive: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
					y: 0,
					stroke: "#000"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "income",
					stackId: "a",
					fill: theme.reportsNumberPositive,
					maxBarSize: MAX_BAR_SIZE,
					...animationProps
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "expenses",
					stackId: "a",
					fill: theme.reportsNumberNegative,
					maxBarSize: MAX_BAR_SIZE,
					...animationProps
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
					type: "monotone",
					dataKey: "balance",
					dot: false,
					hide: !showBalance,
					stroke: theme.pageTextLight,
					strokeWidth: 2,
					...animationProps
				})
			]
		})
	});
}
//#endregion
//#region src/components/reports/spreadsheets/cash-flow-spreadsheet.tsx
function simpleCashFlow(startMonth, endMonth, conditions = [], conditionsOp = "and") {
	const start = firstDayOfMonth(startMonth);
	const end = lastDayOfMonth(endMonth);
	return async (spreadsheet, setData) => {
		const { filters } = await send("make-filters-from-conditions", { conditions: conditions.filter((cond) => !cond.customName) });
		const conditionsOpKey = conditionsOp === "or" ? "$or" : "$and";
		function makeQuery() {
			return q$1("transactions").filter({ [conditionsOpKey]: filters }).filter({
				$and: [{ date: { $gte: start } }, { date: { $lte: end > currentDay() ? currentDay() : end } }],
				"account.offbudget": false,
				"payee.transfer_acct": null
			}).calculate({ $sum: "$amount" });
		}
		return runAll([makeQuery().filter({ amount: { $gt: 0 } }), makeQuery().filter({ amount: { $lt: 0 } })], (data) => {
			setData({ graphData: {
				income: data[0],
				expense: data[1]
			} });
		});
	};
}
function cashFlowByDate(startMonth, endMonth, isConcise, conditions = [], conditionsOp, locale, format) {
	const start = firstDayOfMonth(startMonth);
	const end = lastDayOfMonth(endMonth);
	const fixedEnd = end > currentDay() ? currentDay() : end;
	return async (spreadsheet, setData) => {
		const { filters } = await send("make-filters-from-conditions", { conditions: conditions.filter((cond) => !cond.customName) });
		const conditionsOpKey = conditionsOp === "or" ? "$or" : "$and";
		function makeQuery() {
			const query = q$1("transactions").filter({ [conditionsOpKey]: filters }).filter({
				$and: [{ date: {
					$transform: "$month",
					$gte: start
				} }, { date: {
					$transform: "$month",
					$lte: fixedEnd
				} }],
				"account.offbudget": false
			});
			if (isConcise) return query.groupBy([{ $month: "$date" }, "payee.transfer_acct"]).select([
				{ date: { $month: "$date" } },
				{ isTransfer: "payee.transfer_acct" },
				{ amount: { $sum: "$amount" } }
			]);
			return query.groupBy(["date", "payee.transfer_acct"]).select([
				"date",
				{ isTransfer: "payee.transfer_acct" },
				{ amount: { $sum: "$amount" } }
			]);
		}
		return runAll([
			q$1("transactions").filter({
				[conditionsOpKey]: filters,
				date: {
					$transform: "$month",
					$lt: start
				},
				"account.offbudget": false
			}).calculate({ $sum: "$amount" }),
			makeQuery().filter({ amount: { $gt: 0 } }),
			makeQuery().filter({ amount: { $lt: 0 } })
		], (data) => {
			setData(recalculate$3(data, start, fixedEnd, isConcise, locale, format));
		});
	};
}
function recalculate$3(data, start, end, isConcise, locale, format) {
	const [startingBalance, income, expense] = data;
	const convIncome = income.map((trans) => {
		return {
			...trans,
			isTransfer: trans.isTransfer !== null
		};
	});
	const convExpense = expense.map((trans) => {
		return {
			...trans,
			isTransfer: trans.isTransfer !== null
		};
	});
	const dates = isConcise ? rangeInclusive(getMonth(start), getMonth(end)) : dayRangeInclusive(start, end);
	const incomes = indexCashFlow(convIncome);
	const expenses = indexCashFlow(convExpense);
	let balance = startingBalance;
	let totalExpenses = 0;
	let totalIncome = 0;
	let totalTransfers = 0;
	const graphData = dates.reduce((res, date) => {
		let income = 0;
		let expense = 0;
		let creditTransfers = 0;
		let debitTransfers = 0;
		if (incomes[date]) {
			income = !incomes[date].false ? 0 : incomes[date].false;
			creditTransfers = !incomes[date].true ? 0 : incomes[date].true;
		}
		if (expenses[date]) {
			expense = !expenses[date].false ? 0 : expenses[date].false;
			debitTransfers = !expenses[date].true ? 0 : expenses[date].true;
		}
		totalExpenses += expense;
		totalIncome += income;
		balance += income + expense + creditTransfers + debitTransfers;
		totalTransfers += creditTransfers + debitTransfers;
		const x = parseISO(date);
		const label = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { marginBottom: 10 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: format$1(x, isConcise ? "MMMM yyyy" : "MMMM d, yyyy", { locale }) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { lineHeight: 1.5 },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Income:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(income, "financial") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Expenses:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(expense, "financial") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Change:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
						as: "strong",
						children: format(income + expense, "financial")
					})
				}),
				creditTransfers + debitTransfers !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Transfers:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(creditTransfers + debitTransfers, "financial") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Balance:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(balance, "financial") })
				})
			]
		})] });
		res.income.push({
			x,
			y: income
		});
		res.expenses.push({
			x,
			y: expense
		});
		res.transfers.push({
			x,
			y: creditTransfers + debitTransfers
		});
		res.balances.push({
			x,
			y: balance,
			premadeLabel: label,
			amount: balance
		});
		return res;
	}, {
		expenses: [],
		income: [],
		transfers: [],
		balances: []
	});
	const { balances } = graphData;
	return {
		graphData,
		balance: balances[balances.length - 1].amount,
		totalExpenses,
		totalIncome,
		totalTransfers,
		totalChange: balances[balances.length - 1].amount - balances[0].amount
	};
}
//#endregion
//#region src/components/reports/reports/CashFlow.tsx
var defaultTimeFrame$1 = {
	start: dayFromDate(currentMonth()),
	end: currentDay(),
	mode: "sliding-window"
};
function CashFlow() {
	const { data: widget, isPending } = useDashboardWidget({
		id: useParams().id,
		type: "cash-flow-card"
	});
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CashFlowInner, { widget });
}
function CashFlowInner({ widget }) {
	const locale = useLocale();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const format$9 = useFormat();
	const { conditions, conditionsOp, onApply: onApplyFilter, onDelete: onDeleteFilter, onUpdate: onUpdateFilter, onConditionsOpChange } = useRuleConditionFilters(widget?.meta?.conditions, widget?.meta?.conditionsOp);
	const [allMonths, setAllMonths] = (0, import_react.useState)(null);
	const [start, setStart] = (0, import_react.useState)(currentMonth());
	const [end, setEnd] = (0, import_react.useState)(currentMonth());
	const [mode, setMode] = (0, import_react.useState)("sliding-window");
	const [showBalance, setShowBalance] = (0, import_react.useState)(widget?.meta?.showBalance ?? true);
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const [isConcise, setIsConcise] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setIsConcise(differenceInCalendarDays(parseISO(end), parseISO(start)) > 93);
	}, [start, end]);
	const data = useReport$1("cash_flow", (0, import_react.useMemo)(() => cashFlowByDate(start, end, isConcise, conditions, conditionsOp, locale, format$9), [
		start,
		end,
		isConcise,
		conditions,
		conditionsOp,
		locale,
		format$9
	]));
	(0, import_react.useEffect)(() => {
		async function run() {
			const earliestTransaction = await send("get-earliest-transaction");
			setEarliestTransaction(earliestTransaction ? earliestTransaction.date : currentDay());
			const latestTransaction = await send("get-latest-transaction");
			setLatestTransaction(latestTransaction ? latestTransaction.date : currentDay());
			const currentMonth$9 = currentMonth();
			const earliestMonth = earliestTransaction ? monthFromDate(parseISO(earliestTransaction.date)) : currentMonth$9;
			const latestTransactionMonth = latestTransaction ? monthFromDate(parseISO(latestTransaction.date)) : currentMonth$9;
			setAllMonths(rangeInclusive(earliestMonth, latestTransactionMonth > currentMonth$9 ? latestTransactionMonth : currentMonth$9).map((month) => ({
				name: month,
				pretty: format(month, "MMMM yyyy", locale)
			})).reverse());
		}
		run();
	}, [locale]);
	(0, import_react.useEffect)(() => {
		if (latestTransaction) {
			const [initialStart, initialEnd, initialMode] = calculateTimeRange(widget?.meta?.timeFrame, defaultTimeFrame$1, latestTransaction);
			setStart(initialStart);
			setEnd(initialEnd);
			setMode(initialMode);
		}
	}, [latestTransaction, widget?.meta?.timeFrame]);
	function onChangeDates(start, end, mode) {
		setStart(start);
		setEnd(end);
		setMode(mode);
	}
	const navigate = useNavigate();
	const { isNarrowWidth } = useResponsive();
	const updateDashboardWidgetMutation = useUpdateDashboardWidgetMutation();
	async function onSaveWidget() {
		if (!widget) throw new Error("No widget that could be saved.");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				conditions,
				conditionsOp,
				timeFrame: {
					start,
					end,
					mode
				},
				showBalance
			}
		} }, { onSuccess: () => {
			dispatch(addNotification({ notification: {
				type: "message",
				message: t("Dashboard widget successfully saved.")
			} }));
		} });
	}
	const title = widget?.meta?.name || t("Cash Flow");
	const onSaveWidgetName = async (newName) => {
		if (!widget) throw new Error("No widget that could be saved.");
		const name = newName || t("Cash Flow");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				name
			}
		} });
	};
	const [earliestTransaction, setEarliestTransaction] = (0, import_react.useState)("");
	const [_firstDayOfWeekIdx] = useSyncedPref("firstDayOfWeekIdx");
	const firstDayOfWeekIdx = _firstDayOfWeekIdx || "0";
	if (!allMonths || !data) return null;
	const { graphData, totalExpenses, totalIncome, totalTransfers } = data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: isNarrowWidth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title,
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: () => navigate("/reports") })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditablePageHeaderTitle, {
			title,
			onSave: onSaveWidgetName
		}) : title }),
		padding: 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
			allMonths,
			start,
			end,
			earliestTransaction,
			latestTransaction,
			firstDayOfWeekIdx,
			mode,
			show1Month: true,
			onChangeDates,
			onApply: onApplyFilter,
			filters: conditions,
			onUpdateFilter,
			onDeleteFilter,
			conditionsOp,
			onConditionsOpChange,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					gap: 10
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onPress: () => setShowBalance((state) => !state),
					children: showBalance ? t("Hide balance") : t("Show balance")
				}), widget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "primary",
					onPress: onSaveWidget,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save widget" })
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				backgroundColor: theme.tableBackground,
				padding: 20,
				paddingTop: 0,
				flex: "1 0 auto",
				overflowY: "auto"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						paddingTop: 20,
						alignItems: "flex-end",
						color: theme.pageText
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
							style: {
								marginBottom: 5,
								minWidth: 160
							},
							left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Income:" }) }),
							right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
								style: { fontWeight: 600 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format$9(totalIncome, "financial") })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
							style: {
								marginBottom: 5,
								minWidth: 160
							},
							left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Expenses:" }) }),
							right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
								style: { fontWeight: 600 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format$9(totalExpenses, "financial") })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
							style: {
								marginBottom: 5,
								minWidth: 160
							},
							left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Transfers:" }) }),
							right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
								style: { fontWeight: 600 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format$9(totalTransfers, "financial") })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: { fontWeight: 600 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Change, { amount: totalIncome + totalExpenses + totalTransfers }) })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CashFlowGraph, {
					graphData,
					isConcise,
					showBalance
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: {
						marginTop: 30,
						userSelect: "none"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "How is cash flow calculated?" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: "Cash flow shows the balance of your budgeted accounts over time, and the amount of expenses/income each day or month. Your budgeted accounts are considered to be \"cash on hand,\" so this gives you a picture of how available money fluctuates." })] })
				})
			]
		})]
	});
}
//#endregion
//#region src/components/reports/GraphButton.tsx
var GraphButton = ({ selected, children, onSelect, title, style, disabled }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
		placement: "bottom start",
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: title }),
		style: {
			...styles.tooltip,
			lineHeight: 1.5,
			padding: "6px 10px"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			style: {
				...selected && { backgroundColor: theme.buttonBareBackgroundHover },
				...style
			},
			onPress: onSelect,
			isDisabled: disabled,
			"aria-label": title,
			children
		})
	});
};
//#endregion
//#region src/components/reports/AccountSelector.tsx
function AccountSelector({ accounts, selectedAccountIds, setSelectedAccountIds }) {
	const { t } = useTranslation();
	const [uncheckedHidden, setUncheckedHidden] = (0, import_react.useState)(false);
	const groupedAccounts = (0, import_react.useMemo)(() => {
		return {
			onBudget: accounts.filter((account) => !account.offbudget && !account.closed),
			offBudget: accounts.filter((account) => account.offbudget && !account.closed),
			closed: accounts.filter((account) => account.closed)
		};
	}, [accounts]);
	const selectedAccountMap = (0, import_react.useMemo)(() => new Set(selectedAccountIds), [selectedAccountIds]);
	const onBudgetSelected = groupedAccounts.onBudget.every((account) => selectedAccountMap.has(account.id));
	const offBudgetSelected = groupedAccounts.offBudget.every((account) => selectedAccountMap.has(account.id));
	const closedSelected = groupedAccounts.closed.every((account) => selectedAccountMap.has(account.id));
	const allAccountsSelected = onBudgetSelected && offBudgetSelected && closedSelected;
	const allAccountsUnselected = !selectedAccountIds.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flexDirection: "row",
			alignItems: "center",
			marginBottom: 5,
			flexShrink: 0
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "bare",
				onPress: () => setUncheckedHidden((state) => !state),
				style: { padding: 8 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: uncheckedHidden ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgViewShow, {
						width: 15,
						height: 15,
						style: { marginRight: 5 }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Show unchecked" }) })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgViewHide, {
						width: 15,
						height: 15,
						style: { marginRight: 5 }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							maxWidth: 100,
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Hide unchecked" })
					})]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: { flex: 1 } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					alignItems: "center"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphButton, {
					selected: allAccountsSelected,
					title: t("Select All"),
					onSelect: () => {
						setSelectedAccountIds(accounts.map((account) => account.id));
					},
					style: {
						marginRight: 5,
						padding: 8
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCheckAll, {
						width: 15,
						height: 15
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphButton, {
					selected: allAccountsUnselected,
					title: t("Unselect All"),
					onSelect: () => {
						setSelectedAccountIds([]);
					},
					style: { padding: 8 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgUncheckAll, {
						width: 15,
						height: 15
					})
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
		style: {
			listStyle: "none",
			marginLeft: 0,
			paddingLeft: 0,
			paddingRight: 10,
			flexGrow: 1,
			overflowY: "auto"
		},
		children: [
			groupedAccounts.onBudget.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				style: {
					display: !onBudgetSelected && uncheckedHidden ? "none" : "flex",
					flexDirection: "row",
					marginBottom: 8,
					marginTop: 8
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
					id: "onbudget_group",
					checked: onBudgetSelected,
					onChange: () => {
						const onBudgetAccountIds = groupedAccounts.onBudget.map((account) => account.id);
						if (onBudgetAccountIds.every((id) => selectedAccountIds.includes(id))) setSelectedAccountIds(selectedAccountIds.filter((id) => !onBudgetAccountIds.includes(id)));
						else {
							const newSelection = [...selectedAccountIds];
							onBudgetAccountIds.forEach((id) => {
								if (!newSelection.includes(id)) newSelection.push(id);
							});
							setSelectedAccountIds(newSelection);
						}
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "onbudget_group",
					style: {
						userSelect: "none",
						fontWeight: "bold"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "On Budget" })
				})]
			}), groupedAccounts.onBudget.map((account) => {
				const isChecked = selectedAccountMap.has(account.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					style: {
						display: !isChecked && uncheckedHidden ? "none" : "flex",
						flexDirection: "row",
						marginBottom: 4,
						marginLeft: 16
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						id: `account_${account.id}`,
						checked: isChecked,
						onChange: () => {
							if (isChecked) setSelectedAccountIds(selectedAccountIds.filter((id) => id !== account.id));
							else setSelectedAccountIds([...selectedAccountIds, account.id]);
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: `account_${account.id}`,
						style: { userSelect: "none" },
						children: account.name
					})]
				}, account.id);
			})] }),
			groupedAccounts.offBudget.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				style: {
					display: !offBudgetSelected && uncheckedHidden ? "none" : "flex",
					flexDirection: "row",
					marginBottom: 8,
					marginTop: 16
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
					id: "offbudget_group",
					checked: offBudgetSelected,
					onChange: () => {
						const offBudgetAccountIds = groupedAccounts.offBudget.map((account) => account.id);
						if (offBudgetAccountIds.every((id) => selectedAccountIds.includes(id))) setSelectedAccountIds(selectedAccountIds.filter((id) => !offBudgetAccountIds.includes(id)));
						else {
							const newSelection = [...selectedAccountIds];
							offBudgetAccountIds.forEach((id) => {
								if (!newSelection.includes(id)) newSelection.push(id);
							});
							setSelectedAccountIds(newSelection);
						}
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "offbudget_group",
					style: {
						userSelect: "none",
						fontWeight: "bold"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Off Budget" })
				})]
			}), groupedAccounts.offBudget.map((account) => {
				const isChecked = selectedAccountMap.has(account.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					style: {
						display: !isChecked && uncheckedHidden ? "none" : "flex",
						flexDirection: "row",
						marginBottom: 4,
						marginLeft: 16
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						id: `account_${account.id}`,
						checked: isChecked,
						onChange: () => {
							if (isChecked) setSelectedAccountIds(selectedAccountIds.filter((id) => id !== account.id));
							else setSelectedAccountIds([...selectedAccountIds, account.id]);
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: `account_${account.id}`,
						style: { userSelect: "none" },
						children: account.name
					})]
				}, account.id);
			})] }),
			groupedAccounts.closed.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				style: {
					display: !closedSelected && uncheckedHidden ? "none" : "flex",
					flexDirection: "row",
					marginBottom: 8,
					marginTop: 16
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
					id: "closed_group",
					checked: closedSelected,
					onChange: () => {
						const closedAccountIds = groupedAccounts.closed.map((account) => account.id);
						if (closedAccountIds.every((id) => selectedAccountIds.includes(id))) setSelectedAccountIds(selectedAccountIds.filter((id) => !closedAccountIds.includes(id)));
						else {
							const newSelection = [...selectedAccountIds];
							closedAccountIds.forEach((id) => {
								if (!newSelection.includes(id)) newSelection.push(id);
							});
							setSelectedAccountIds(newSelection);
						}
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "closed_group",
					style: {
						userSelect: "none",
						fontWeight: "bold"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Closed" })
				})]
			}), groupedAccounts.closed.map((account) => {
				const isChecked = selectedAccountMap.has(account.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					style: {
						display: !isChecked && uncheckedHidden ? "none" : "flex",
						flexDirection: "row",
						marginBottom: 4,
						marginLeft: 16
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						id: `account_${account.id}`,
						checked: isChecked,
						onChange: () => {
							if (isChecked) setSelectedAccountIds(selectedAccountIds.filter((id) => id !== account.id));
							else setSelectedAccountIds([...selectedAccountIds, account.id]);
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: `account_${account.id}`,
						style: { userSelect: "none" },
						children: account.name
					})]
				}, account.id);
			})] })
		]
	})] });
}
//#endregion
//#region src/components/reports/CategorySelector.tsx
function CategorySelector({ categoryGroups, selectedCategories, setSelectedCategories, showHiddenCategories = true }) {
	const { t } = useTranslation();
	const [uncheckedHidden, setUncheckedHidden] = (0, import_react.useState)(false);
	const filteredGroup = (categoryGroup) => {
		return categoryGroup.categories.filter((f) => {
			return showHiddenCategories || !f.hidden ? true : false;
		});
	};
	const selectAll = [];
	categoryGroups.map((categoryGroup) => filteredGroup(categoryGroup).map((category) => selectAll.push(category)));
	if (selectedCategories === void 0) selectedCategories = categoryGroups.flatMap((cg) => cg.categories);
	const selectedCategoryMap = (0, import_react.useMemo)(() => selectedCategories.map((selected) => selected.id), [selectedCategories]);
	const allCategoriesSelected = selectAll.every((category) => selectedCategoryMap.includes(category.id));
	const allCategoriesUnselected = !selectAll.some((category) => selectedCategoryMap.includes(category.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flexDirection: "row",
			alignItems: "center",
			marginBottom: 5,
			flexShrink: 0
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "bare",
				onPress: () => setUncheckedHidden((state) => !state),
				style: { padding: 8 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: uncheckedHidden ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgViewShow, {
						width: 15,
						height: 15,
						style: { marginRight: 5 }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Show unchecked" }) })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgViewHide, {
						width: 15,
						height: 15,
						style: { marginRight: 5 }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							maxWidth: 100,
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Hide unchecked" })
					})]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: { flex: 1 } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					alignItems: "center"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphButton, {
					selected: allCategoriesSelected,
					title: t("Select All"),
					onSelect: () => {
						setSelectedCategories(selectAll);
					},
					style: {
						marginRight: 5,
						padding: 8
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCheckAll, {
						width: 15,
						height: 15
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphButton, {
					selected: allCategoriesUnselected,
					title: t("Unselect All"),
					onSelect: () => {
						setSelectedCategories([]);
					},
					style: { padding: 8 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgUncheckAll, {
						width: 15,
						height: 15
					})
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		style: {
			listStyle: "none",
			marginLeft: 0,
			paddingLeft: 0,
			paddingRight: 10,
			flexGrow: 1,
			overflowY: "auto"
		},
		children: categoryGroups && categoryGroups.map((categoryGroup) => {
			const allCategoriesInGroupSelected = filteredGroup(categoryGroup).every((category) => selectedCategories.some((selectedCategory) => selectedCategory.id === category.id));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				style: {
					display: filteredGroup(categoryGroup).every((category) => !selectedCategories.some((selectedCategory) => selectedCategory.id === category.id)) && uncheckedHidden ? "none" : "flex",
					marginBottom: 8,
					flexDirection: "row"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
					id: `form_${categoryGroup.id}`,
					checked: allCategoriesInGroupSelected,
					onChange: () => {
						const selectedCategoriesExcludingGroupCategories = selectedCategories.filter((selectedCategory) => !filteredGroup(categoryGroup).some((groupCategory) => groupCategory.id === selectedCategory.id));
						if (allCategoriesInGroupSelected) setSelectedCategories(selectedCategoriesExcludingGroupCategories);
						else setSelectedCategories(selectedCategoriesExcludingGroupCategories.concat(filteredGroup(categoryGroup)));
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `form_${categoryGroup.id}`,
					style: {
						userSelect: "none",
						fontWeight: "bold"
					},
					children: categoryGroup.name
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				style: {
					listStyle: "none",
					marginLeft: 0,
					marginBottom: 10,
					paddingLeft: 10
				},
				children: filteredGroup(categoryGroup).map((category) => {
					const isChecked = selectedCategories.some((selectedCategory) => selectedCategory.id === category.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						style: {
							display: !isChecked && uncheckedHidden ? "none" : "flex",
							flexDirection: "row",
							marginBottom: 4
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
							id: `form_${category.id}`,
							checked: isChecked,
							onChange: () => {
								if (isChecked) setSelectedCategories(selectedCategories.filter((selectedCategory) => selectedCategory.id !== category.id));
								else setSelectedCategories([...selectedCategories, category]);
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: `form_${category.id}`,
							style: { userSelect: "none" },
							children: category.name
						})]
					}, category.id);
				})
			}) })] }, categoryGroup.id);
		})
	})] });
}
//#endregion
//#region src/components/reports/graphs/CrossoverGraph.tsx
function CustomTooltip$6({ active, payload }) {
	const { t } = useTranslation();
	const format = useFormat();
	if (active && payload && payload.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: css({
			zIndex: 1e3,
			pointerEvents: "none",
			borderRadius: 2,
			boxShadow: "0 1px 6px rgba(0, 0, 0, .20)",
			backgroundColor: theme.menuBackground,
			color: theme.menuItemText,
			padding: 10
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { marginBottom: 10 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: payload[0].payload.x }), payload[0].payload.isProjection ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					marginLeft: 8,
					opacity: .7
				},
				children: t("(projected)")
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { lineHeight: 1.5 },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					className: css({
						display: "flex",
						justifyContent: "space-between"
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Monthly investment income:" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(payload[0].payload.investmentIncome, "financial") }) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					className: css({
						display: "flex",
						justifyContent: "space-between"
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Monthly expenses:" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(payload[0].payload.expenses, "financial") }) })]
				}),
				payload[0].payload.adjustedExpenses != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					className: css({
						display: "flex",
						justifyContent: "space-between"
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Target income:" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(payload[0].payload.adjustedExpenses, "financial") }) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					className: css({
						display: "flex",
						justifyContent: "space-between"
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Life savings:" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(payload[0].payload.nestEgg, "financial") }) })]
				})
			]
		})] })
	});
	return null;
}
function CrossoverGraph({ style, graphData, compact = false, showTooltip = true }) {
	const privacyMode = usePrivacyMode();
	const format = useFormat();
	const animationProps = useRechartsAnimation({ isAnimationActive: false });
	const tickFormatter = (tick) => {
		if (privacyMode) return "...";
		return `${format(Math.round(tick), "financial-no-decimals")}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		style: {
			...style,
			...compact && { height: "auto" }
		},
		children: (width, height) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
			width,
			height,
			data: graphData.data,
			margin: {
				top: compact ? 0 : 15,
				right: 0,
				left: compact ? 0 : 20,
				bottom: compact ? 0 : 10
			},
			children: [
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { strokeDasharray: "3 3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "x",
					hide: compact,
					tick: { fill: theme.pageText },
					tickLine: { stroke: theme.pageText }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					hide: compact,
					tickFormatter,
					tick: { fill: theme.pageText },
					tickLine: { stroke: theme.pageText }
				}),
				showTooltip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTooltip$6, {}),
					isAnimationActive: false
				}),
				graphData.crossoverXLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
					x: graphData.crossoverXLabel,
					stroke: theme.noticeText,
					strokeDasharray: "4 4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
					type: "monotone",
					dataKey: "investmentIncome",
					dot: false,
					stroke: theme.reportsNumberPositive,
					strokeWidth: 2,
					...animationProps
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
					type: "monotone",
					dataKey: "expenses",
					dot: false,
					stroke: theme.reportsNumberNegative,
					strokeWidth: 2,
					...animationProps
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
					type: "monotone",
					dataKey: "adjustedExpenses",
					dot: false,
					stroke: theme.reportsNumberNegative,
					strokeWidth: 2,
					strokeDasharray: "5 5",
					...animationProps
				})
			]
		})
	});
}
//#endregion
//#region src/components/reports/spreadsheets/crossover-spreadsheet.ts
function calculateMedian(values) {
	if (values.length === 0) return 0;
	if (values.length === 1) return values[0];
	const sorted = [...values].sort((a, b) => a - b);
	const mid = Math.floor(sorted.length / 2);
	return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}
function calculateMean(values) {
	if (values.length === 0) return 0;
	return values.reduce((acc, val) => acc + val, 0) / values.length;
}
function calculateMAD(values, median) {
	return calculateMedian(values.map((v) => Math.abs(v - median)));
}
function calculateHampelFilteredMedian(expenses) {
	if (expenses.length === 0) return 0;
	if (expenses.length === 1) return expenses[0];
	const median = calculateMedian(expenses);
	const mad = calculateMAD(expenses, median);
	const threshold = 3;
	return calculateMedian(expenses.filter((expense) => {
		const lowerBound = median - 1.4826 * mad * threshold;
		const upperBound = median + 1.4826 * mad * threshold;
		return expense >= lowerBound && expense <= upperBound;
	}));
}
function createCrossoverSpreadsheet({ start, end, expenseCategoryIds, incomeAccountIds, safeWithdrawalRate, estimatedReturn, expectedContribution, projectionType, expenseAdjustmentFactor }) {
	return async (_spreadsheet, setData) => {
		if (!start || !end || incomeAccountIds.length === 0) {
			setData({
				graphData: {
					data: [],
					start: start || "",
					end: end || "",
					crossoverXLabel: null
				},
				lastKnownBalance: 0,
				lastKnownMonthlyIncome: 0,
				lastKnownMonthlyExpenses: 0,
				historicalReturn: null,
				yearsToRetire: null,
				targetMonthlyIncome: null,
				targetNestEgg: null
			});
			return;
		}
		const expensesPromise = (async () => {
			if (!expenseCategoryIds.length) return rangeInclusive(start, end).map((date) => ({
				date,
				amount: 0
			}));
			const { data } = await aqlQuery(q$1("transactions").filter({ $and: [
				{ $or: expenseCategoryIds.map((id) => ({ category: id })) },
				{ date: { $gte: firstDayOfMonth(start) } },
				{ date: { $lte: lastDayOfMonth(end) } }
			] }).groupBy({ $month: "$date" }).select([{ date: { $month: "$date" } }, { amount: { $sum: "$amount" } }]));
			return data;
		})();
		const historicalBalancesPromise = Promise.all(incomeAccountIds.map(async (accountId) => {
			return {
				accountId,
				starting: await aqlQuery(q$1("transactions").filter({ account: accountId }).filter({ date: { $lte: lastDayOfMonth(start) } }).calculate({ $sum: "$amount" })).then(({ data }) => typeof data === "number" ? data : 0),
				balances: (await aqlQuery(q$1("transactions").filter({
					account: accountId,
					date: { $gte: firstDayOfMonth(start) }
				}).filter({ $and: [{ date: { $lte: lastDayOfMonth(end) } }] }).groupBy({ $month: "$date" }).select([{ date: { $month: "$date" } }, { amount: { $sum: "$amount" } }])).then(({ data }) => data)).filter((b) => b.date !== start)
			};
		}));
		const [expenses, historicalBalances] = await Promise.all([expensesPromise, historicalBalancesPromise]);
		setData(recalculate$2({
			start,
			end,
			expenseCategoryIds,
			incomeAccountIds,
			safeWithdrawalRate,
			estimatedReturn,
			expectedContribution,
			projectionType,
			expenseAdjustmentFactor
		}, expenses, historicalBalances));
	};
}
function recalculate$2(params, expenses, historicalAccounts) {
	const months = rangeInclusive(params.start, params.end);
	const expenseMap = /* @__PURE__ */ new Map();
	for (const e of expenses) expenseMap.set(e.date, (expenseMap.get(e.date) || 0) + -e.amount);
	const historicalBalances = months.map(() => 0);
	for (const acct of historicalAccounts) {
		let runningBalance = acct.starting;
		const byMonth = new Map(acct.balances.map((b) => [b.date, b.amount]));
		for (let i = 0; i < months.length; i++) {
			const month = months[i];
			const delta = byMonth.get(month) ?? 0;
			runningBalance += delta;
			historicalBalances[i] += runningBalance;
		}
	}
	const monthlySWR = params.safeWithdrawalRate / 12;
	const data = [];
	let lastBalance = 0;
	let lastExpense = 0;
	let crossoverIndex = null;
	const adjustmentFactor = params.expenseAdjustmentFactor ?? 1;
	months.forEach((month, idx) => {
		const balance = historicalBalances[idx];
		const monthlyIncome = balance * monthlySWR;
		const spend = expenseMap.get(month) || 0;
		data.push({
			x: format$1(parseISO(month + "-01"), "MMM yyyy"),
			investmentIncome: Math.round(monthlyIncome),
			expenses: spend,
			nestEgg: balance
		});
		lastBalance = balance;
		lastExpense = spend;
	});
	const annualReturn = params.estimatedReturn ?? null;
	let monthlyReturn = annualReturn != null ? Math.pow(1 + annualReturn, 1 / 12) - 1 : null;
	let defaultMonthlyReturn = null;
	if (historicalBalances.length >= 2) {
		let startingBalance = historicalBalances[0];
		const finalBalance = historicalBalances[historicalBalances.length - 1];
		const n = historicalBalances.length - 1;
		if (startingBalance === 0) {
			for (let i = 1; i < historicalBalances.length; i++) if (historicalBalances[i] !== 0) {
				startingBalance = historicalBalances[i];
				break;
			}
		}
		if (startingBalance > 0 && finalBalance > 0 && n > 0) {
			const cagrMonthly = Math.pow(finalBalance / startingBalance, 1 / n) - 1;
			if (isFinite(cagrMonthly) && !isNaN(cagrMonthly)) defaultMonthlyReturn = cagrMonthly;
			else defaultMonthlyReturn = 0;
		} else defaultMonthlyReturn = 0;
	}
	const monthlyContribution = params.expectedContribution ?? 0;
	if (months.length > 0) {
		if (monthlyReturn == null) monthlyReturn = defaultMonthlyReturn;
		const maxProjectionMonths = 600;
		let projectedBalance = lastBalance;
		let monthCursor = parseISO(months[months.length - 1] + "-01");
		let flatExpense = 0;
		const y = months.map((m) => expenseMap.get(m) || 0);
		if (params.projectionType === "hampel") flatExpense = calculateHampelFilteredMedian(y);
		else if (params.projectionType === "median") flatExpense = calculateMedian(y);
		else if (params.projectionType === "mean") flatExpense = calculateMean(y);
		for (let i = 1; i <= maxProjectionMonths; i++) {
			monthCursor = addMonths$1(monthCursor, 1);
			projectedBalance = projectedBalance + monthlyContribution;
			if (monthlyReturn != null) projectedBalance = projectedBalance * (1 + monthlyReturn);
			const projectedIncome = projectedBalance * monthlySWR;
			const projectedExpenses = Math.max(0, flatExpense);
			const adjustedProjectedExpenses = projectedExpenses * adjustmentFactor;
			data.push({
				x: format$1(monthCursor, "MMM yyyy"),
				investmentIncome: Math.round(projectedIncome),
				expenses: Math.round(projectedExpenses),
				nestEgg: Math.round(projectedBalance),
				adjustedExpenses: Math.round(adjustedProjectedExpenses),
				isProjection: true
			});
			if (crossoverIndex == null && Math.round(projectedIncome) >= Math.round(adjustedProjectedExpenses)) {
				crossoverIndex = months.length + (i - 1);
				break;
			}
		}
	}
	let yearsToRetire = null;
	let targetMonthlyIncome = null;
	let targetNestEgg = null;
	if (crossoverIndex != null && crossoverIndex < data.length) {
		const crossoverData = data[crossoverIndex];
		if (crossoverData) {
			const currentDate = /* @__PURE__ */ new Date();
			const monthsDiff = differenceInMonths(parse(crossoverData.x, "MMM yyyy", currentDate), currentDate);
			yearsToRetire = monthsDiff > 0 ? monthsDiff / 12 : 0;
			targetMonthlyIncome = crossoverData.adjustedExpenses ?? null;
			targetNestEgg = targetMonthlyIncome != null ? Math.round(targetMonthlyIncome / monthlySWR) : null;
		}
	}
	return {
		graphData: {
			data,
			start: params.start,
			end: params.end,
			crossoverXLabel: crossoverIndex != null ? data[crossoverIndex]?.x ?? null : null
		},
		lastKnownBalance: historicalBalances[historicalBalances.length - 1] || 0,
		lastKnownMonthlyIncome: Math.round((historicalBalances[historicalBalances.length - 1] || 0) * monthlySWR),
		lastKnownMonthlyExpenses: lastExpense,
		historicalReturn: defaultMonthlyReturn != null ? Math.pow(1 + defaultMonthlyReturn, 12) - 1 : null,
		yearsToRetire,
		targetMonthlyIncome,
		targetNestEgg
	};
}
//#endregion
//#region src/components/reports/reports/Crossover.tsx
var defaultTimeFrame = {
	start: subMonths(currentMonth(), 120),
	end: subMonths(currentMonth(), 1),
	mode: "full"
};
function Crossover() {
	const { data: widget, isPending } = useDashboardWidget({
		id: useParams().id,
		type: "crossover-card"
	});
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossoverInner, { widget });
}
function CrossoverInner({ widget }) {
	const locale = useLocale();
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { data: accounts = [] } = useAccounts();
	const { data: categories = {
		grouped: [],
		list: []
	}, isPending: isCategoriesLoading } = useCategories();
	const format$8 = useFormat();
	const expenseCategoryGroups = categories.grouped.filter((group) => !group.is_income);
	const expenseCategories = categories.list.filter((c) => !c.is_income);
	const [allMonths, setAllMonths] = (0, import_react.useState)(null);
	const [start, setStart] = (0, import_react.useState)("");
	const [end, setEnd] = (0, import_react.useState)("");
	const [mode, setMode] = (0, import_react.useState)("static");
	const [earliestTransaction, setEarliestTransaction] = (0, import_react.useState)("");
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const [selectedExpenseCategories, setSelectedExpenseCategories] = (0, import_react.useState)(expenseCategories);
	const [selectedIncomeAccountIds, setSelectedIncomeAccountIds] = (0, import_react.useState)(accounts.map((a) => a.id));
	const [swr, setSwr] = (0, import_react.useState)(.04);
	const [useCustomGrowth, setUseCustomGrowth] = (0, import_react.useState)(false);
	const [estimatedReturn, setEstimatedReturn] = (0, import_react.useState)(null);
	const [expectedContribution, setExpectedContribution] = (0, import_react.useState)(null);
	const [projectionType, setProjectionType] = (0, import_react.useState)("hampel");
	const [expenseAdjustmentFactor, setExpenseAdjustmentFactor] = (0, import_react.useState)(1);
	const [showHiddenCategories, setShowHiddenCategories] = (0, import_react.useState)(false);
	const [selectionsInitialized, setSelectionsInitialized] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setSelectionsInitialized(false);
	}, [widget?.id]);
	(0, import_react.useEffect)(() => {
		if (selectionsInitialized || accounts.length === 0 || isCategoriesLoading) return;
		const initialExpenseCategories = widget?.meta?.expenseCategoryIds?.length ? categories.list.filter((c) => widget.meta.expenseCategoryIds.includes(c.id)) : categories.list.filter((c) => !c.is_income);
		const initialIncomeAccountIds = widget?.meta?.incomeAccountIds?.length ? widget.meta.incomeAccountIds : accounts.map((a) => a.id);
		setSelectedExpenseCategories(initialExpenseCategories);
		setSelectedIncomeAccountIds(initialIncomeAccountIds);
		setSwr(widget?.meta?.safeWithdrawalRate ?? .04);
		const initialEstimatedReturn = widget?.meta?.estimatedReturn ?? null;
		const initialExpectedContribution = widget?.meta?.expectedContribution ?? null;
		setUseCustomGrowth(initialEstimatedReturn != null || initialExpectedContribution != null);
		setEstimatedReturn(initialEstimatedReturn);
		setExpectedContribution(initialExpectedContribution);
		setProjectionType(widget?.meta?.projectionType ?? "hampel");
		setExpenseAdjustmentFactor(widget?.meta?.expenseAdjustmentFactor ?? 1);
		setShowHiddenCategories(widget?.meta?.showHiddenCategories ?? false);
		setSelectionsInitialized(true);
	}, [
		selectionsInitialized,
		accounts,
		categories.list,
		isCategoriesLoading,
		widget?.meta
	]);
	(0, import_react.useEffect)(() => {
		async function run() {
			const earliestTransactionData = await send("get-earliest-transaction");
			const previousMonth = subMonths(currentMonth(), 1);
			const earliestDate = earliestTransactionData ? earliestTransactionData.date : firstDayOfMonth(previousMonth);
			setEarliestTransaction(earliestDate);
			const latestDate = lastDayOfMonth(previousMonth);
			setLatestTransaction(latestDate);
			setAllMonths(rangeInclusive(earliestDate, latestDate).map((month) => ({
				name: month,
				pretty: format(month, "MMMM yyyy", locale)
			})).reverse());
		}
		run();
	}, [locale]);
	(0, import_react.useEffect)(() => {
		if (latestTransaction && allMonths?.length) {
			const [initialStart, initialEnd, mode] = calculateTimeRange(widget?.meta?.timeFrame, defaultTimeFrame, latestTransaction);
			const earliestMonth = allMonths[allMonths.length - 1].name;
			const latestMonth = allMonths[0].name;
			let start = initialStart;
			let end = initialEnd;
			const clampMonth = (m) => {
				if (isBefore(m, earliestMonth)) return earliestMonth;
				if (isAfter(m, latestMonth)) return latestMonth;
				return m;
			};
			if (mode === "sliding-window") {
				start = clampMonth(subMonths(start, 1));
				end = clampMonth(subMonths(end, 1));
			} else if (mode === "full") {
				start = earliestMonth;
				end = latestMonth;
			} else {
				start = clampMonth(start);
				end = clampMonth(end);
			}
			if (isBefore(end, start)) end = start;
			setStart(start);
			setEnd(end);
			setMode(mode);
		}
	}, [
		latestTransaction,
		widget?.meta?.timeFrame,
		allMonths
	]);
	function onChangeDates(start, end, mode) {
		if (!allMonths?.length) return;
		const earliestMonth = allMonths[allMonths.length - 1].name;
		const latestMonth = allMonths[0].name;
		const clampMonth = (m) => {
			if (isBefore(m, earliestMonth)) return earliestMonth;
			if (isAfter(m, latestMonth)) return latestMonth;
			return m;
		};
		if (mode === "sliding-window") {
			start = clampMonth(subMonths(start, 1));
			end = clampMonth(subMonths(end, 1));
		} else if (mode === "full") {
			start = earliestMonth;
			end = latestMonth;
		} else {
			start = clampMonth(start);
			end = clampMonth(end);
		}
		if (isBefore(end, start)) end = start;
		setStart(start);
		setEnd(end);
		setMode(mode);
	}
	const updateDashboardWidgetMutation = useUpdateDashboardWidgetMutation();
	async function onSaveWidget() {
		if (!widget) {
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Save failed: No widget found to save.")
			} }));
			return;
		}
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				expenseCategoryIds: selectedExpenseCategories.map((c) => c.id),
				incomeAccountIds: selectedIncomeAccountIds,
				safeWithdrawalRate: swr,
				estimatedReturn: useCustomGrowth ? estimatedReturn ?? 0 : null,
				expectedContribution: useCustomGrowth ? expectedContribution ?? 0 : null,
				projectionType,
				expenseAdjustmentFactor,
				showHiddenCategories,
				timeFrame: {
					start,
					end,
					mode
				}
			}
		} }, { onSuccess: () => {
			dispatch(addNotification({ notification: {
				type: "message",
				message: t("Dashboard widget successfully saved.")
			} }));
		} });
	}
	const expenseCategoryIds = (0, import_react.useMemo)(() => selectedExpenseCategories.filter((c) => showHiddenCategories || !c.hidden).map((c) => c.id), [selectedExpenseCategories, showHiddenCategories]);
	const data = useReport$1("crossover", (0, import_react.useCallback)(async (spreadsheet, setData) => {
		if (!start || !end) return;
		await createCrossoverSpreadsheet({
			start,
			end,
			expenseCategoryIds,
			incomeAccountIds: selectedIncomeAccountIds,
			safeWithdrawalRate: swr,
			estimatedReturn: useCustomGrowth ? estimatedReturn ?? 0 : null,
			expectedContribution: useCustomGrowth ? expectedContribution ?? 0 : null,
			projectionType,
			expenseAdjustmentFactor
		})(spreadsheet, setData);
	}, [
		start,
		end,
		swr,
		useCustomGrowth,
		estimatedReturn,
		expectedContribution,
		projectionType,
		expenseAdjustmentFactor,
		expenseCategoryIds,
		selectedIncomeAccountIds
	]));
	const historicalReturn = data?.historicalReturn ?? null;
	const yearsToRetire = data?.yearsToRetire ?? null;
	const targetMonthlyIncome = data?.targetMonthlyIncome ?? null;
	const targetNestEgg = data?.targetNestEgg ?? null;
	const navigate = useNavigate();
	const { isNarrowWidth } = useResponsive();
	const title = widget?.meta?.name || t("Crossover Point");
	const onSaveWidgetName = async (newName) => {
		if (!widget) {
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Save failed: No widget found to save.")
			} }));
			return;
		}
		const name = newName || t("Crossover Point");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				name
			}
		} });
	};
	if (!allMonths || !data || !start || !end || isCategoriesLoading || accounts.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: isNarrowWidth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title,
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: () => navigate("/reports") })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditablePageHeaderTitle, {
			title,
			onSave: onSaveWidgetName
		}) : title }),
		padding: 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
			start,
			end,
			mode,
			allMonths,
			earliestTransaction,
			latestTransaction,
			onChangeDates,
			children: widget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				onPress: onSaveWidget,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save widget" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				flexDirection: "row",
				paddingLeft: !isNarrowWidth ? 20 : void 0,
				flex: 1
			},
			children: [!isNarrowWidth && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					minWidth: 225,
					maxWidth: 250,
					paddingTop: 10,
					paddingRight: 10,
					flexShrink: 0,
					overflowY: "auto"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { flexShrink: 0 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontWeight: 600,
								marginBottom: 8
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
								style: {
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Expenses categories" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
										style: { maxWidth: 300 },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
											"Used to estimate your future expenses.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Select the budget categories that reflect your living expenses in retirement.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Ex: Food, Utilities, Entertainment, Medical",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Exclude categories that will not continue in retirement.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Ex: Retirement Savings"
										] }) })
									}),
									placement: "right top",
									style: { ...styles.tooltip },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgQuestion, {
										height: 12,
										width: 12,
										cursor: "pointer"
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: {
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 5,
								flexShrink: 0
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "bare",
								onPress: () => setShowHiddenCategories(!showHiddenCategories),
								style: { padding: 8 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: showHiddenCategories ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
									style: {
										flexDirection: "row",
										alignItems: "center"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgViewHide, {
										width: 15,
										height: 15,
										style: { marginRight: 5 }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Hide hidden" }) })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
									style: {
										flexDirection: "row",
										alignItems: "center"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgViewShow, {
										width: 15,
										height: 15,
										style: { marginRight: 5 }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: {
											maxWidth: 100,
											whiteSpace: "nowrap",
											overflow: "hidden",
											textOverflow: "ellipsis"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Show hidden" })
									})]
								}) })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: { flex: 1 } })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								maxHeight: 220,
								overflowY: "auto",
								marginBottom: 12
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategorySelector, {
								categoryGroups: expenseCategoryGroups,
								selectedCategories: selectedExpenseCategories,
								setSelectedCategories: setSelectedExpenseCategories,
								showHiddenCategories
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontWeight: 600,
								marginBottom: 8
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
								style: {
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Income accounts" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
										style: { maxWidth: 300 },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
											"Used to estimate your future income.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Select the accounts that will be used to fund your retirement.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Ex: Retirement Accounts, Savings Accounts",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Exclude accounts that will not.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Ex: Mortgage Accounts, Child Education Accounts"
										] }) })
									}),
									placement: "right top",
									style: { ...styles.tooltip },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgQuestion, {
										height: 12,
										width: 12,
										cursor: "pointer"
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								maxHeight: 220,
								overflowY: "auto",
								marginBottom: 12
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountSelector, {
								accounts,
								selectedAccountIds: selectedIncomeAccountIds,
								setSelectedAccountIds: setSelectedIncomeAccountIds
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: { marginBottom: 12 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontWeight: 600,
									marginBottom: 8
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
									style: {
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "space-between"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: t("Safe withdrawal rate (%)") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
											style: { maxWidth: 300 },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
												"The amount you plan to withdraw from your Income Accounts each year to fund your living expenses.",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													variant: "external",
													to: "https://en.wikipedia.org/wiki/Retirement_spend-down#Withdrawal_rate",
													children: "More info."
												})
											] }) })
										}),
										placement: "right top",
										style: { ...styles.tooltip },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgQuestion, {
											height: 12,
											width: 12,
											cursor: "pointer"
										})
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: 0,
								max: 100,
								step: .1,
								value: swr == null ? "" : Number((swr * 100).toFixed(2)),
								onChange: (e) => setSwr(isNaN(e.target.valueAsNumber) ? 0 : e.target.valueAsNumber / 100),
								style: {
									width: 120,
									marginBottom: 12
								}
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: { marginBottom: 12 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontWeight: 600,
									marginBottom: 8
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
									style: {
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "space-between"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: t("Expense Projection Type") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
											style: { maxWidth: 300 },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
												"How past expenses are projected into the future.",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"Hampel Filtered Median: Filters out outliers before calculating the median expense.",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"Median: Uses the median of all historical expenses without filtering.",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"Mean: Uses the average of all historical expenses."
											] }) })
										}),
										placement: "right top",
										style: { ...styles.tooltip },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgQuestion, {
											height: 12,
											width: 12,
											cursor: "pointer"
										})
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: projectionType,
								onChange: (value) => setProjectionType(value),
								options: [
									["hampel", t("Hampel Filtered Median")],
									["median", t("Median")],
									["mean", t("Mean")]
								],
								style: {
									width: 200,
									marginBottom: 12
								}
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: { marginBottom: 12 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontWeight: 600,
									marginBottom: 8
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
									style: {
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "space-between"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: t("Target Income (% of expenses)") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
											style: { maxWidth: 300 },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
												"Your target retirement income as a percentage of projected expenses.",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"100% means you need retirement income equal to your current projected expenses.",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"Values above 100% mean you plan to spend more in retirement.",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"Values below 100% mean you plan to spend less in retirement.",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"The graph shows both the projected expenses (solid red line) and your target income (dashed red line)."
											] }) })
										}),
										placement: "right top",
										style: { ...styles.tooltip },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgQuestion, {
											height: 12,
											width: 12,
											cursor: "pointer"
										})
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: 0,
								max: 1e3,
								step: 1,
								value: expenseAdjustmentFactor == null ? "" : Number((expenseAdjustmentFactor * 100).toFixed(0)),
								onChange: (e) => setExpenseAdjustmentFactor(isNaN(e.target.valueAsNumber) ? 1 : e.target.valueAsNumber / 100),
								style: {
									width: 120,
									marginBottom: 12
								}
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: { marginBottom: 12 },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "custom-growth",
									style: {
										display: "flex",
										alignItems: "center",
										cursor: "pointer",
										userSelect: "none",
										marginBottom: 8
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
											id: "custom-growth",
											checked: useCustomGrowth,
											onChange: (e) => {
												const checked = e.target.checked;
												setUseCustomGrowth(checked);
												if (checked && estimatedReturn === null) setEstimatedReturn(.06);
											},
											style: { marginRight: 8 }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
											style: { fontWeight: 600 },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Use custom growth projections" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
												style: { maxWidth: 300 },
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
													"Enable this to specify custom monthly contribution amounts and investment returns that will be used to project your investments into the future.",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"When disabled, uses historical performance from your Income Accounts (which includes both past contributions and investment growth)."
												] }) })
											}),
											placement: "right top",
											style: { ...styles.tooltip },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgQuestion, {
												height: 12,
												width: 12,
												cursor: "pointer",
												style: { marginLeft: 4 }
											})
										})
									]
								}),
								useCustomGrowth && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
									style: {
										marginLeft: 24,
										paddingLeft: 12,
										borderLeft: `3px solid ${theme.tableBorder}`
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
										style: { marginBottom: 12 },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 600,
												marginBottom: 8
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
												style: {
													flexDirection: "row",
													alignItems: "center",
													justifyContent: "space-between"
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: t("Expected return (annual %)") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
													content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
														style: { maxWidth: 300 },
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "The expected annual return rate for your investments, used to project growth of Income Accounts." }) })
													}),
													placement: "right top",
													style: { ...styles.tooltip },
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgQuestion, {
														height: 12,
														width: 12,
														cursor: "pointer"
													})
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											min: 0,
											max: 100,
											step: .1,
											value: estimatedReturn === null ? "" : Number((estimatedReturn * 100).toFixed(2)),
											onChange: (e) => setEstimatedReturn(isNaN(e.target.valueAsNumber) ? null : e.target.valueAsNumber / 100),
											onBlur: () => {
												if (estimatedReturn === null) setEstimatedReturn(0);
											},
											style: { width: 120 }
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
										style: { marginBottom: 12 },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												fontWeight: 600,
												marginBottom: 8
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
												style: {
													flexDirection: "row",
													alignItems: "center",
													justifyContent: "space-between"
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Expected monthly contribution" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
													content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
														style: { maxWidth: 300 },
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "The amount you plan to contribute to your Income Accounts each month. This amount is added to your balance each month before applying the investment return." }) })
													}),
													placement: "right top",
													style: { ...styles.tooltip },
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgQuestion, {
														height: 12,
														width: 12,
														cursor: "pointer"
													})
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											min: 0,
											step: 100,
											value: expectedContribution === null ? "" : expectedContribution / 100,
											onChange: (e) => setExpectedContribution(isNaN(e.target.valueAsNumber) ? null : e.target.valueAsNumber * 100),
											onBlur: () => {
												if (expectedContribution === null) setExpectedContribution(0);
											},
											style: { width: 120 }
										})]
									})]
								}),
								!useCustomGrowth && historicalReturn != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontSize: 12,
										color: theme.pageTextSubdued,
										marginLeft: 24
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
										"Using calculated historical return of",
										" ",
										(historicalReturn * 100).toFixed(1),
										"%"
									] })
								})
							]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: { flex: 1 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: {
							backgroundColor: theme.tableBackground,
							padding: 20,
							paddingTop: 10,
							marginBottom: 10
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: { textAlign: "right" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
									style: {
										...styles.largeText,
										fontWeight: 400,
										marginBottom: 8,
										whiteSpace: "nowrap"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Years to Retire" }),
										":",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: yearsToRetire != null ? t("{{years}} years", { years: format$8(yearsToRetire, "number") }) : t("N/A") })
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
									style: { whiteSpace: "nowrap" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Target Monthly Income" }),
										":",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: targetMonthlyIncome != null && !isNaN(targetMonthlyIncome) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format$8(targetMonthlyIncome, "financial") }) : t("N/A") })
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
									style: { whiteSpace: "nowrap" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Target Life Savings" }),
										":",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: targetNestEgg != null && !isNaN(targetNestEgg) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format$8(targetNestEgg, "financial") }) : t("N/A") })
									] })
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: {
							backgroundColor: theme.tableBackground,
							flexDirection: "row",
							flex: "1 0 auto",
							minHeight: 400
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								flex: 1,
								padding: 10,
								height: "100%"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossoverGraph, {
								graphData: data.graphData,
								style: {
									height: "100%",
									flex: 1
								}
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: {
							backgroundColor: theme.tableBackground,
							marginTop: 10,
							padding: 20,
							userSelect: "none"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "What is the Crossover Point?" }) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "The crossover point is when your monthly investment income (from selected accounts using the safe withdrawal rate) meets or exceeds your total monthly expenses (from selected categories). The chart projects into the future using your estimated return until the lines cross." }) })]
					})
				]
			})]
		})]
	});
}
//#endregion
//#region src/components/reports/graphs/adjustTextSize.ts
var adjustTextSize = ({ sized, type, values = 0 }) => {
	let source = [{
		size: -1,
		font: -1
	}];
	switch (type) {
		case "variable":
			const findLookup = variableLookup.find(({ value }) => values >= value);
			if (!findLookup) break;
			source = findLookup.arr;
			break;
		case "donut":
			source = donutLookup;
			break;
		default: source = defaultLookup;
	}
	const findSource = source.find(({ size }) => sized >= size);
	if (!findSource) return "13px";
	return `${findSource.font}px`;
};
var defaultLookup = [
	{
		size: 600,
		font: 16
	},
	{
		size: 500,
		font: 15
	},
	{
		size: 400,
		font: 14
	},
	{
		size: 300,
		font: 13
	},
	{
		size: 200,
		font: 12
	},
	{
		size: 100,
		font: 11
	},
	{
		size: 0,
		font: 10
	}
];
var donutLookup = [
	{
		size: 300,
		font: 20
	},
	{
		size: 266,
		font: 18
	},
	{
		size: 233,
		font: 16
	},
	{
		size: 200,
		font: 14
	},
	{
		size: 166,
		font: 12
	},
	{
		size: 0,
		font: 10
	}
];
var variableLookup = [
	{
		value: 1e4,
		arr: [
			{
				size: 66,
				font: 16
			},
			{
				size: 60,
				font: 15
			},
			{
				size: 54,
				font: 14
			},
			{
				size: 48,
				font: 13
			},
			{
				size: 42,
				font: 12
			},
			{
				size: 36,
				font: 11
			},
			{
				size: 0,
				font: 10
			}
		]
	},
	{
		value: 1e3,
		arr: [
			{
				size: 55,
				font: 16
			},
			{
				size: 50,
				font: 15
			},
			{
				size: 45,
				font: 14
			},
			{
				size: 40,
				font: 13
			},
			{
				size: 35,
				font: 12
			},
			{
				size: 30,
				font: 11
			},
			{
				size: 0,
				font: 10
			}
		]
	},
	{
		value: 100,
		arr: [
			{
				size: 38,
				font: 16
			},
			{
				size: 35,
				font: 15
			},
			{
				size: 32,
				font: 14
			},
			{
				size: 29,
				font: 13
			},
			{
				size: 26,
				font: 12
			},
			{
				size: 23,
				font: 11
			},
			{
				size: 0,
				font: 10
			}
		]
	},
	{
		value: 0,
		arr: [
			{
				size: 25,
				font: 16
			},
			{
				size: 22,
				font: 15
			},
			{
				size: 19,
				font: 14
			},
			{
				size: 16,
				font: 13
			},
			{
				size: 13,
				font: 12
			},
			{
				size: 9,
				font: 11
			},
			{
				size: 0,
				font: 10
			}
		]
	}
];
//#endregion
//#region src/components/reports/graphs/renderCustomLabel.tsx
var renderCustomLabel = (calcX, calcY, textAnchor, display, textSize, showLabel, showLabelThreshold, fill = theme.pageText) => {
	return !showLabel || Math.abs(showLabel) > showLabelThreshold ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
		as: "text",
		x: calcX,
		y: calcY,
		fill,
		textAnchor,
		dominantBaseline: "middle",
		fontSize: textSize,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: display })
	}, fill + display) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {});
};
//#endregion
//#region src/components/reports/graphs/AreaGraph.tsx
var CustomTooltip$5 = ({ active, payload, balanceTypeOp, format }) => {
	const { t } = useTranslation();
	if (active && payload && payload.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: css({
			zIndex: 1e3,
			pointerEvents: "none",
			borderRadius: 2,
			boxShadow: "0 1px 6px rgba(0, 0, 0, .20)",
			backgroundColor: theme.menuBackground,
			color: theme.menuItemText,
			padding: 10
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { marginBottom: 10 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: payload[0].payload.date })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { lineHeight: 1.5 },
			children: [
				[
					"totalAssets",
					"totalTotals",
					"totalBudgeted"
				].includes(balanceTypeOp) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Assets:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(payload[0].payload.totalAssets, "financial") })
				}),
				[
					"totalDebts",
					"totalTotals",
					"totalBudgeted"
				].includes(balanceTypeOp) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Debts:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(payload[0].payload.totalDebts, "financial") })
				}),
				["netAssets"].includes(balanceTypeOp) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Net Assets:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(payload[0].payload.netAssets, "financial") })
				}),
				["netDebts"].includes(balanceTypeOp) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Net Debts:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(payload[0].payload.netDebts, "financial") })
				}),
				["totalTotals", "totalBudgeted"].includes(balanceTypeOp) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: balanceTypeOp === "totalBudgeted" ? t("Budgeted:") : t("Net:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
						as: "strong",
						children: format(balanceTypeOp === "totalBudgeted" ? payload[0].payload.totalBudgeted : payload[0].payload.totalTotals, "financial")
					})
				})
			]
		})] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {});
};
var customLabel$3 = ({ props, width, end, format }) => {
	return renderCustomLabel((typeof props.x === "number" ? props.x : 0) + (props.index === end ? -10 : props.index === 0 ? 5 : 0), (typeof props.y === "number" ? props.y : 0) - ((typeof props.value === "number" ? props.value : 0) > 0 ? 10 : -10), props.index === 0 ? "start" : "middle", typeof props.value === "number" && props.value !== 0 ? `${format(props.value, "financial-no-decimals")}` : "", adjustTextSize({
		sized: width,
		type: "area"
	}));
};
function AreaGraph({ style, data, balanceTypeOp, compact, viewLabels, showTooltip = true }) {
	const format = useFormat();
	const animationProps = useRechartsAnimation({ isAnimationActive: false });
	const privacyMode = usePrivacyMode();
	const dataMax = Math.max(...data.intervalData.map((i) => i[balanceTypeOp]));
	const dataMin = Math.min(...data.intervalData.map((i) => i[balanceTypeOp]));
	const labelsMargin = viewLabels ? 30 : 0;
	const dataDiff = dataMax - dataMin;
	const absDataMax = Math.max(Math.abs(dataMax), Math.abs(dataMin));
	const extendRangeAmount = Math.floor(dataDiff / 20);
	const labelsMin = dataMin === 0 || Math.abs(dataMin) <= extendRangeAmount ? 0 : Math.floor((dataMin - extendRangeAmount) / 100) * 100;
	const labelsMax = dataMax === 0 || Math.abs(dataMax) <= extendRangeAmount ? 0 : Math.ceil((dataMax + extendRangeAmount) / 100) * 100;
	const lastLabel = data.intervalData.length - 1;
	const tickFormatter = (tick) => {
		if (!privacyMode) return `${format(tick, "financial-no-decimals")}`;
		return "...";
	};
	const gradientOffset = () => {
		if (dataMax <= 0) return 0;
		if (dataMin >= 0) return 1;
		return dataMax / (dataMax - dataMin);
	};
	const off = gradientOffset();
	const leftMargin = Math.abs(absDataMax) > 1e6 ? 20 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		style: {
			...style,
			...compact && { height: "auto" }
		},
		children: (width, height) => data.intervalData && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "15px" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
			responsive: true,
			width,
			height,
			data: data.intervalData,
			margin: {
				top: 0,
				right: labelsMargin,
				left: leftMargin,
				bottom: 10
			},
			children: [
				compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					strokeDasharray: "3 3",
					vertical: false
				}),
				compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "date",
					tick: { fill: theme.pageText },
					tickLine: { stroke: theme.pageText }
				}),
				compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					dataKey: balanceTypeOp,
					domain: [viewLabels ? labelsMin : "auto", viewLabels ? labelsMax : "auto"],
					tickFormatter,
					tick: { fill: theme.pageText },
					tickLine: { stroke: theme.pageText },
					tickSize: 0
				}),
				showTooltip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTooltip$5, {
						balanceTypeOp,
						format
					}),
					isAnimationActive: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: `fill${balanceTypeOp}`,
					x1: "0",
					y1: "0",
					x2: "0",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: off,
						stopColor: theme.reportsNumberPositive,
						stopOpacity: .2
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: off,
						stopColor: theme.reportsNumberNegative,
						stopOpacity: .2
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: `stroke${balanceTypeOp}`,
					x1: "0",
					y1: "0",
					x2: "0",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: off,
						stopColor: theme.reportsNumberPositive,
						stopOpacity: 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: off,
						stopColor: theme.reportsNumberNegative,
						stopOpacity: 1
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
					type: "linear",
					dot: false,
					activeDot: false,
					...animationProps,
					dataKey: balanceTypeOp,
					stroke: `url(#stroke${balanceTypeOp})`,
					fill: `url(#fill${balanceTypeOp})`,
					fillOpacity: 1,
					children: viewLabels && !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
						dataKey: balanceTypeOp,
						content: (props) => customLabel$3({
							props,
							width,
							end: lastLabel,
							format
						})
					})
				})
			]
		})] })
	});
}
//#endregion
//#region src/components/reports/getCustomTick.ts
var getCustomTick = (value, isPrivacyModeEnabled) => {
	if (isPrivacyModeEnabled) return "...";
	else return value;
};
//#endregion
//#region src/components/reports/numberFormatter.ts
var numberFormatterTooltip = (value) => {
	if (typeof value === "number") return Math.round(value);
	return null;
};
//#endregion
//#region src/components/reports/graphs/showActivity.ts
function showActivity({ navigate, categories, accounts, balanceTypeOp, filters, showHiddenCategories, showOffBudget, type, startDate, endDate, field, id, interval = "Day" }) {
	const isOutFlow = balanceTypeOp === "totalDebts" || type === "debts" ? true : false;
	const hiddenCategories = categories.list.filter((f) => f.hidden).map((e) => e.id);
	const offBudgetAccounts = accounts.filter((f) => f.offbudget).map((e) => e.id);
	const fromDate = interval === "Weekly" ? "dayFromDate" : (ReportOptions.intervalMap.get(interval) || "Day").toLowerCase() + "FromDate";
	const isDateOp = interval === "Weekly" || type !== "time";
	const filterConditions = [
		...filters,
		id && {
			field,
			op: Array.isArray(id) ? "oneOf" : "is",
			value: id,
			type: "id"
		},
		{
			field: "date",
			op: isDateOp ? "gte" : "is",
			value: isDateOp ? startDate : months_exports[fromDate](startDate),
			type: "date"
		},
		isDateOp && {
			field: "date",
			op: "lte",
			value: endDate,
			options: { date: true }
		},
		!(["netAssets", "netDebts"].includes(balanceTypeOp) || ["totalTotals", "totalBudgeted"].includes(balanceTypeOp) && (type === "totals" || type === "time")) && {
			field: "amount",
			op: "gte",
			value: 0,
			options: {
				type: "number",
				inflow: !isOutFlow,
				outflow: isOutFlow
			}
		},
		hiddenCategories.length > 0 && !showHiddenCategories && {
			field: "category",
			op: "notOneOf",
			value: hiddenCategories,
			type: "id"
		},
		offBudgetAccounts.length > 0 && !showOffBudget && {
			field: "account",
			op: "notOneOf",
			value: offBudgetAccounts,
			type: "id"
		}
	].filter((f) => f);
	navigate(balanceTypeOp === "totalBudgeted" ? "/budget" : "/accounts", { state: balanceTypeOp === "totalBudgeted" ? { goBack: true } : {
		goBack: true,
		filterConditions
	} });
}
//#endregion
//#region src/components/reports/graphs/BarGraph.tsx
var CustomTooltip$4 = ({ active, payload, balanceTypeOp, yAxis, format }) => {
	const { t } = useTranslation();
	if (active && payload && payload.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: css({
			zIndex: 1e3,
			pointerEvents: "none",
			borderRadius: 2,
			boxShadow: "0 1px 6px rgba(0, 0, 0, .20)",
			backgroundColor: theme.menuBackground,
			color: theme.menuItemText,
			padding: 10
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { marginBottom: 10 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: payload[0].payload[yAxis] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { lineHeight: 1.5 },
			children: [
				[
					"totalAssets",
					"totalTotals",
					"totalBudgeted"
				].includes(balanceTypeOp) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Assets:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(payload[0].payload.totalAssets, "financial") })
				}),
				[
					"totalDebts",
					"totalTotals",
					"totalBudgeted"
				].includes(balanceTypeOp) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Debts:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(payload[0].payload.totalDebts, "financial") })
				}),
				["netAssets"].includes(balanceTypeOp) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Net Assets:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(payload[0].payload.netAssets, "financial") })
				}),
				["netDebts"].includes(balanceTypeOp) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Net Debts:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(payload[0].payload.netDebts, "financial") })
				}),
				["totalTotals", "totalBudgeted"].includes(balanceTypeOp) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: balanceTypeOp === "totalBudgeted" ? t("Budgeted:") : t("Net:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
						as: "strong",
						children: format(balanceTypeOp === "totalBudgeted" ? payload[0].payload.totalBudgeted : payload[0].payload.totalTotals, "financial")
					})
				})
			]
		})] })
	});
};
var customLabel$2 = (props, typeOp, format) => {
	return renderCustomLabel(props.x + props.width / 2, props.y - (props.value > 0 ? 15 : -15), "middle", props.value !== 0 && `${format(props.value, "financial-no-decimals")}`, adjustTextSize({
		sized: props.width,
		type: typeOp === "totalTotals" || typeOp === "totalBudgeted" ? "default" : "variable",
		values: props.value
	}));
};
function BarGraph({ style, data, filters, groupBy, balanceTypeOp, compact, viewLabels, showHiddenCategories, showOffBudget, showTooltip = true }) {
	const animationProps = useRechartsAnimation();
	const navigate = useNavigate();
	const { data: categories = {
		grouped: [],
		list: []
	} } = useCategories();
	const { data: accounts = [] } = useAccounts();
	const privacyMode = usePrivacyMode();
	const format = useFormat();
	const [pointer, setPointer] = (0, import_react.useState)("");
	const yAxis = groupBy === "Interval" ? "date" : "name";
	const splitData = groupBy === "Interval" ? "intervalData" : "data";
	const labelsMargin = viewLabels ? 30 : 0;
	const getVal = (obj) => {
		if (["totalDebts", "netDebts"].includes(balanceTypeOp)) return -1 * obj[balanceTypeOp];
		return obj[balanceTypeOp];
	};
	const longestLabelLength = data[splitData].map((c) => c[yAxis]).reduce((acc, cur) => cur.length > acc ? cur.length : acc, 0);
	const largestValue = data[splitData].map((c) => c[balanceTypeOp]).reduce((acc, cur) => Math.abs(cur) > Math.abs(acc) ? cur : acc, 0);
	const leftMargin = Math.abs(largestValue) > 1e6 ? 20 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		style: {
			...style,
			...compact && { height: "auto" }
		},
		children: (width, height) => data[splitData] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "15px" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
			responsive: true,
			width,
			height,
			stackOffset: "sign",
			data: data[splitData],
			style: { cursor: pointer },
			margin: {
				top: labelsMargin,
				right: 0,
				left: leftMargin,
				bottom: 0
			},
			children: [
				showTooltip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
					cursor: { fill: "transparent" },
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTooltip$4, {
						balanceTypeOp,
						yAxis,
						format
					}),
					formatter: numberFormatterTooltip,
					isAnimationActive: false
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { strokeDasharray: "3 3" }),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: yAxis,
					angle: -35,
					height: Math.sqrt(longestLabelLength) * 25,
					tick: {
						fill: theme.pageText,
						textAnchor: "end"
					},
					tickLine: { stroke: theme.pageText }
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					tickFormatter: (value) => getCustomTick(format(value, "financial-no-decimals"), privacyMode),
					tick: { fill: theme.pageText },
					tickLine: { stroke: theme.pageText },
					tickSize: 0
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
					y: 0,
					stroke: theme.pageTextLight
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: (val) => getVal(val),
					stackId: "a",
					...animationProps,
					onMouseLeave: () => setPointer(""),
					onMouseEnter: () => !["Group", "Interval"].includes(groupBy) && setPointer("pointer"),
					onClick: (item) => (compact && showTooltip || !compact) && !["Group", "Interval"].includes(groupBy) && showActivity({
						navigate,
						categories,
						accounts,
						balanceTypeOp,
						filters,
						showHiddenCategories,
						showOffBudget,
						type: "totals",
						startDate: data.startDate,
						endDate: data.endDate,
						field: groupBy.toLowerCase(),
						id: item.id
					}),
					shape: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rectangle, {
						...props,
						fill: data.legend[props.index]?.color ?? props.fill ?? void 0
					}),
					children: viewLabels && !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
						dataKey: (val) => getVal(val),
						content: (e) => customLabel$2(e, balanceTypeOp, format)
					})
				})
			]
		})] })
	});
}
//#endregion
//#region src/components/reports/graphs/BarLineGraph.tsx
var CustomTooltip$3 = ({ active, payload }) => {
	const { t } = useTranslation();
	if (active && payload && payload.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: css({
			zIndex: 1e3,
			pointerEvents: "none",
			borderRadius: 2,
			boxShadow: "0 1px 6px rgba(0, 0, 0, .20)",
			backgroundColor: theme.menuBackground,
			color: theme.menuItemText,
			padding: 10
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { marginBottom: 10 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: payload[0].payload.date })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { lineHeight: 1.5 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrivacyFilter, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Assets:"),
					right: payload[0].payload.assets
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Debt:"),
					right: payload[0].payload.debt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Change:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: payload[0].payload.change })
				})
			] })
		})] })
	});
};
function BarLineGraph({ style, data, compact, showTooltip = true }) {
	const format = useFormat();
	const animationProps = useRechartsAnimation();
	const tickFormatter = (tick) => {
		return `${format(Math.round(tick), "financial")}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		style: {
			...style,
			...compact && { height: "auto" }
		},
		children: (width, height) => data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "15px" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
			responsive: true,
			width,
			height,
			data: data.data,
			margin: {
				top: 0,
				right: 0,
				left: 0,
				bottom: 0
			},
			children: [
				showTooltip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTooltip$3, {}),
					formatter: numberFormatterTooltip,
					isAnimationActive: false
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { strokeDasharray: "3 3" }),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, { dataKey: "x" }),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					dataKey: "y",
					tickFormatter
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					type: "monotone",
					dataKey: "y",
					fill: "#8884d8",
					...animationProps
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
					type: "monotone",
					dataKey: "y",
					stroke: "#8884d8",
					...animationProps
				})
			]
		})] })
	});
}
//#endregion
//#region src/components/reports/graphs/DonutGraph.tsx
var RADIAN = Math.PI / 180;
var canDeviceHover = () => window.matchMedia("(hover: hover)").matches;
var getDonutDimensions = (width, height, twoRings) => {
	const minDim = Math.min(width, height);
	const compact = height <= 300 || width <= 300;
	return {
		chartInnerRadius: minDim * (twoRings && compact ? .16 : .2),
		chartMidRadius: minDim * (compact ? .27 : .31),
		chartOuterRadius: minDim * (compact ? .36 : .42),
		compact
	};
};
var resolveCSSVariable = (color) => {
	if (!color.startsWith("var(")) return color;
	const varName = color.slice(4, -1).trim().split(",")[0].trim();
	return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
};
var hexToRgb = (hex) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : {
		r: 0,
		g: 0,
		b: 0
	};
};
var shadeColor = (resolvedHex, percent) => {
	const { r, g, b } = hexToRgb(resolvedHex);
	const adjust = (c) => Math.min(255, Math.max(0, Math.round(c + (255 - c) * percent)));
	return `rgb(${adjust(r)}, ${adjust(g)}, ${adjust(b)})`;
};
var buildColorMap = (groupedData, legend) => {
	const legendById = new Map(legend.filter((l) => l.id != null).map((l) => [l.id, resolveCSSVariable(l.color)]));
	return groupedData.reduce((acc, group) => {
		if (!group.id) return acc;
		const groupColor = legendById.get(group.id);
		if (!groupColor) return acc;
		acc.set(group.id, groupColor);
		const cats = group.categories ?? [];
		cats.forEach((cat, i) => {
			if (!cat.id) return;
			const shade = .15 + i / Math.max(cats.length, 1) * .5;
			acc.set(cat.id, shadeColor(groupColor, shade));
		});
		return acc;
	}, /* @__PURE__ */ new Map());
};
var ActiveShapeMobile = ({ cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value, expandInward, chartInnerRadius, chartOuterRadius }) => {
	const format = useFormat();
	const yAxis = payload.name ?? payload.date ?? "";
	const expansionInner = expandInward ? chartInnerRadius - 4 : outerRadius + 2;
	const expansionOuter = expandInward ? chartInnerRadius - 2 : outerRadius + 4;
	const ey = cy + chartOuterRadius * Math.sin(-RADIAN * 240) - 5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: cx,
			y: cy + chartOuterRadius * Math.sin(-RADIAN * 270) + 17,
			textAnchor: "middle",
			fill,
			children: yAxis
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrivacyFilter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
			as: "text",
			x: cx + chartOuterRadius * Math.cos(-RADIAN * 240) - 30,
			y: ey,
			textAnchor: "end",
			fill,
			children: format(value, "financial")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: cx + chartOuterRadius * Math.cos(-RADIAN * 330) + 10,
			y: ey,
			textAnchor: "start",
			fill: "#999",
			children: `${(percent * 100).toFixed(2)}%`
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sector, {
			cx,
			cy,
			innerRadius,
			outerRadius,
			startAngle,
			endAngle,
			fill
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sector, {
			cx,
			cy,
			startAngle,
			endAngle,
			innerRadius: expansionInner,
			outerRadius: expansionOuter,
			fill
		})
	] });
};
var ActiveShapeDesktop = ({ cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value, expandInward, chartInnerRadius }) => {
	const format = useFormat();
	const yAxis = payload.name ?? payload.date ?? "";
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const expansionInner = expandInward ? chartInnerRadius - 10 : outerRadius + 6;
	const expansionOuter = expandInward ? chartInnerRadius - 6 : outerRadius + 10;
	const lineStart = expandInward ? chartInnerRadius - 20 : chartInnerRadius - 10;
	const lineMid = chartInnerRadius * .7;
	const sx = cx + lineStart * cos;
	const sy = cy + lineStart * sin;
	const mx = cx + lineMid * cos;
	const my = cy + lineMid * sin;
	const ex = cx + (cos >= 0 ? 1 : -1) * yAxis.length * 4;
	const ey = cy + 8;
	const textAnchor = cos <= 0 ? "start" : "end";
	const labelX = ex + (cos <= 0 ? 1 : -1) * 16;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sector, {
			cx,
			cy,
			innerRadius,
			outerRadius,
			startAngle,
			endAngle,
			fill
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sector, {
			cx,
			cy,
			startAngle,
			endAngle,
			innerRadius: expansionInner,
			outerRadius: expansionOuter,
			fill
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: `M${sx},${sy}L${mx},${my}L${ex},${ey}`,
			stroke: fill,
			fill: "none"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: ex,
			cy: ey,
			r: 3,
			fill,
			stroke: "none"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: labelX,
			y: ey,
			textAnchor,
			fill,
			children: yAxis
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrivacyFilter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
			as: "text",
			x: labelX,
			y: ey,
			dy: 18,
			textAnchor,
			fill,
			children: format(value, "financial")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: labelX,
			y: ey,
			dy: 36,
			textAnchor,
			fill: "#999",
			children: `(${(percent * 100).toFixed(2)}%)`
		})] })
	] });
};
var customLabel$1 = (props) => {
	const radius = props.innerRadius + (props.outerRadius - props.innerRadius) * .5;
	const size = props.cx > props.cy ? props.cy : props.cx;
	const calcX = props.cx + radius * Math.cos(-props.midAngle * RADIAN);
	const calcY = props.cy + radius * Math.sin(-props.midAngle * RADIAN);
	const textAnchor = calcX > props.cx ? "start" : "end";
	const display = props.value !== 0 && `${(props.percent * 100).toFixed(0)}%`;
	const textSize = adjustTextSize({
		sized: size,
		type: "donut"
	});
	const showLabel = props.percent;
	const showLabelThreshold = .05;
	const fill = theme.reportsInnerLabel;
	return renderCustomLabel(calcX, calcY, textAnchor, display, textSize, showLabel, showLabelThreshold, fill);
};
function DonutGraph({ style, data, filters, groupBy, balanceTypeOp, viewLabels, showHiddenCategories, showOffBudget, showTooltip = true }) {
	const animationProps = useRechartsAnimation({ isAnimationActive: false });
	const yAxis = groupBy === "Interval" ? "date" : "name";
	const splitData = groupBy === "Interval" ? "intervalData" : "data";
	const navigate = useNavigate();
	const { data: categories = {
		grouped: [],
		list: []
	} } = useCategories();
	const { data: accounts = [] } = useAccounts();
	const [pointer, setPointer] = (0, import_react.useState)("");
	const getVal = (obj) => {
		if (["totalDebts", "netDebts"].includes(balanceTypeOp)) return -1 * obj[balanceTypeOp];
		return obj[balanceTypeOp];
	};
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [activeGroupIndex, setActiveGroupIndex] = (0, import_react.useState)(0);
	const [activeCategoryIndex, setActiveCategoryIndex] = (0, import_react.useState)(0);
	const [activeRing, setActiveRing] = (0, import_react.useState)("category");
	const isCategoryGroup = groupBy === "CategoryGroup" && !!data.groupedData?.length;
	const { adjustedGroupData, flatCategories } = (0, import_react.useMemo)(() => {
		if (!isCategoryGroup || !data.groupedData) return {
			adjustedGroupData: [],
			flatCategories: []
		};
		return {
			adjustedGroupData: data.groupedData.map((group) => {
				const visibleCats = group.categories ?? [];
				return {
					...group,
					totalAssets: visibleCats.reduce((sum, c) => sum + c.totalAssets, 0),
					totalDebts: visibleCats.reduce((sum, c) => sum + c.totalDebts, 0),
					totalTotals: visibleCats.reduce((sum, c) => sum + c.totalTotals, 0),
					netAssets: visibleCats.reduce((sum, c) => sum + c.netAssets, 0),
					netDebts: visibleCats.reduce((sum, c) => sum + c.netDebts, 0)
				};
			}).filter((group) => ["totalDebts", "netDebts"].includes(balanceTypeOp) ? -1 * group[balanceTypeOp] !== 0 : group[balanceTypeOp] !== 0),
			flatCategories: data.groupedData.flatMap((g) => g.categories ?? [])
		};
	}, [
		isCategoryGroup,
		data.groupedData,
		balanceTypeOp
	]);
	const colorMap = (0, import_react.useMemo)(() => isCategoryGroup ? buildColorMap(data.groupedData ?? [], data.legend ?? []) : /* @__PURE__ */ new Map(), [
		isCategoryGroup,
		data.groupedData,
		data.legend
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		style,
		children: (width, height) => {
			const { chartInnerRadius, chartMidRadius, chartOuterRadius, compact } = getDonutDimensions(width, height, isCategoryGroup);
			const showActiveShape = width >= 220 && height >= 130;
			if (isCategoryGroup) return data.groupedData && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "15px" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, {
				responsive: true,
				width,
				height,
				style: { cursor: pointer },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					dataKey: (val) => getVal(val),
					nameKey: "name",
					...animationProps,
					data: adjustedGroupData,
					innerRadius: chartInnerRadius,
					outerRadius: chartMidRadius,
					startAngle: 90,
					endAngle: -270,
					shape: (props, index) => {
						const item = adjustedGroupData[index];
						const fill = colorMap.get(item?.id ?? item?.name ?? "") ?? props.fill;
						if (activeRing === "group" && index === activeGroupIndex && showActiveShape) return compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveShapeMobile, {
							...props,
							fill,
							expandInward: true,
							chartInnerRadius,
							chartMidRadius,
							chartOuterRadius
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveShapeDesktop, {
							...props,
							fill,
							expandInward: true,
							chartInnerRadius,
							chartMidRadius,
							chartOuterRadius
						});
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sector, {
							...props,
							fill
						});
					},
					onMouseLeave: () => setPointer(""),
					onMouseEnter: (_, index) => {
						if (canDeviceHover()) {
							setActiveGroupIndex(index);
							setActiveRing("group");
						}
					},
					onClick: (item, index) => {
						if (!canDeviceHover()) {
							setActiveGroupIndex(index);
							setActiveRing("group");
						}
						if ((canDeviceHover() || activeGroupIndex === index) && (compact && showTooltip || !compact)) {
							const groupCategoryIds = (data.groupedData?.find((g) => g.id === item.id)?.categories ?? []).map((c) => c.id).filter((c) => c != null);
							showActivity({
								navigate,
								categories,
								accounts,
								balanceTypeOp,
								filters,
								showHiddenCategories,
								showOffBudget,
								type: "totals",
								startDate: data.startDate,
								endDate: data.endDate,
								field: "category",
								id: groupCategoryIds
							});
						}
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					dataKey: (val) => getVal(val),
					nameKey: "name",
					...animationProps,
					data: flatCategories,
					innerRadius: chartMidRadius,
					outerRadius: chartOuterRadius,
					startAngle: 90,
					endAngle: -270,
					labelLine: false,
					label: (e) => viewLabels && !compact ? customLabel$1(e) : null,
					shape: (props, index) => {
						const item = flatCategories[index];
						const fill = colorMap.get(item?.id ?? item?.name ?? "") ?? props.fill;
						if (activeRing === "category" && index === activeCategoryIndex && showActiveShape) return compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveShapeMobile, {
							...props,
							fill,
							expandInward: false,
							chartInnerRadius,
							chartMidRadius,
							chartOuterRadius
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveShapeDesktop, {
							...props,
							fill,
							expandInward: false,
							chartInnerRadius,
							chartMidRadius,
							chartOuterRadius
						});
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sector, {
							...props,
							fill
						});
					},
					onMouseLeave: () => setPointer(""),
					onMouseEnter: (_, index) => {
						if (canDeviceHover()) {
							setActiveCategoryIndex(index);
							setActiveRing("category");
							setPointer("pointer");
						}
					},
					onClick: (item, index) => {
						if (!canDeviceHover()) {
							setActiveCategoryIndex(index);
							setActiveRing("category");
						}
						if ((canDeviceHover() || activeCategoryIndex === index) && (compact && showTooltip || !compact)) showActivity({
							navigate,
							categories,
							accounts,
							balanceTypeOp,
							filters,
							showHiddenCategories,
							showOffBudget,
							type: "totals",
							startDate: data.startDate,
							endDate: data.endDate,
							field: "category",
							id: item.id
						});
					}
				})]
			})] });
			return data[splitData] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "15px" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieChart, {
				responsive: true,
				width,
				height,
				style: { cursor: pointer },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					dataKey: (val) => getVal(val),
					nameKey: yAxis,
					...animationProps,
					data: data[splitData]?.map((item) => ({ ...item })) ?? [],
					innerRadius: chartInnerRadius,
					labelLine: false,
					label: (e) => viewLabels && !compact ? customLabel$1(e) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
					startAngle: 90,
					endAngle: -270,
					shape: (props, index) => {
						const fill = data.legend?.[index]?.color ?? props.fill;
						if (index === activeIndex && showActiveShape) return compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveShapeMobile, {
							...props,
							fill,
							expandInward: true,
							chartInnerRadius,
							chartMidRadius,
							chartOuterRadius
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveShapeDesktop, {
							...props,
							fill,
							expandInward: false,
							chartInnerRadius,
							chartMidRadius,
							chartOuterRadius
						});
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sector, {
							...props,
							fill
						});
					},
					onMouseLeave: () => setPointer(""),
					onMouseEnter: (_, index) => {
						if (canDeviceHover()) {
							setActiveIndex(index);
							if (!["Group", "Interval"].includes(groupBy)) setPointer("pointer");
						}
					},
					onClick: (item, index) => {
						if (!canDeviceHover()) setActiveIndex(index);
						if (!["Interval"].includes(groupBy) && (canDeviceHover() || activeIndex === index) && (compact && showTooltip || !compact)) {
							const groupCategoryIds = groupBy === "Group" ? (categories.grouped.find((g) => g.id === item.id)?.categories ?? []).map((c) => c.id).filter((c) => c != null) : void 0;
							showActivity({
								navigate,
								categories,
								accounts,
								balanceTypeOp,
								filters,
								showHiddenCategories,
								showOffBudget,
								type: "totals",
								startDate: data.startDate,
								endDate: data.endDate,
								field: groupBy === "Group" ? "category" : groupBy.toLowerCase(),
								id: groupBy === "Group" ? groupCategoryIds : item.id
							});
						}
					}
				})
			})] });
		}
	});
}
//#endregion
//#region src/components/reports/graphs/LineGraph.tsx
var CustomTooltip$2 = ({ compact, tooltip, legend, active, payload, format }) => {
	const { t } = useTranslation();
	const dataKeyToName = (0, import_react.useMemo)(() => {
		return new Map(legend.map((entry) => [entry.dataKey, entry.name]));
	}, [legend]);
	const { sumTotals, items } = (0, import_react.useMemo)(() => {
		return (payload ?? []).sort((p1, p2) => p2.value - p1.value).reduce((acc, item) => {
			acc.sumTotals += item.value;
			acc.items.push(item);
			return acc;
		}, {
			sumTotals: 0,
			items: []
		});
	}, [payload]);
	if (active && items.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: css({
			zIndex: 1e3,
			pointerEvents: "none",
			borderRadius: 2,
			boxShadow: "0 1px 6px rgba(0, 0, 0, .20)",
			backgroundColor: theme.menuBackground,
			color: theme.menuItemText,
			padding: 10
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { marginBottom: 10 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: payload[0].payload.date })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { lineHeight: 1.5 },
			children: [
				items.map((p, index) => {
					const displayName = dataKeyToName.get(p.dataKey) ?? p.dataKey;
					return (compact ? index < 4 : true) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
						left: displayName,
						right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(p.value, "financial") }),
						style: {
							color: p.color,
							textDecoration: tooltip === p.dataKey ? "underline" : "inherit"
						}
					}, index);
				}),
				payload.length > 5 && compact && "...",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Total"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(sumTotals, "financial") }),
					style: { fontWeight: 600 }
				})
			]
		})] })
	});
};
function LineGraph({ style, data, filters, groupBy, compact, balanceTypeOp, showHiddenCategories, showOffBudget, showTooltip = true, interval }) {
	const animationProps = useRechartsAnimation();
	const navigate = useNavigate();
	const { data: categories = {
		grouped: [],
		list: []
	} } = useCategories();
	const { data: accounts = [] } = useAccounts();
	const privacyMode = usePrivacyMode();
	const format = useFormat();
	const [pointer, setPointer] = (0, import_react.useState)("");
	const [tooltip, setTooltip] = (0, import_react.useState)("");
	const largestValue = data.intervalData.map((c) => c[balanceTypeOp]).reduce((acc, cur) => Math.abs(cur) > Math.abs(acc) ? cur : acc, 0);
	const leftMargin = Math.abs(largestValue) > 1e6 ? 20 : 5;
	const onShowActivity = (item, id, payload) => {
		showActivity({
			navigate,
			categories,
			accounts,
			balanceTypeOp,
			filters,
			showHiddenCategories,
			showOffBudget,
			type: "time",
			startDate: payload.payload.intervalStartDate,
			endDate: payload.payload.intervalEndDate,
			field: groupBy.toLowerCase(),
			id,
			interval
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		style: {
			...style,
			...compact && { height: "auto" }
		},
		children: (width, height) => data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "15px" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
			responsive: true,
			width,
			height,
			data: data.intervalData,
			margin: {
				top: 10,
				right: 10,
				left: leftMargin,
				bottom: 10
			},
			style: { cursor: pointer },
			children: [
				showTooltip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTooltip$2, {
						compact,
						tooltip,
						legend: data.legend,
						format
					}),
					formatter: numberFormatterTooltip,
					isAnimationActive: false
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { strokeDasharray: "3 3" }),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "date",
					tick: { fill: theme.pageText },
					tickLine: { stroke: theme.pageText }
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					tickFormatter: (value) => getCustomTick(format(value, "financial-no-decimals"), privacyMode),
					tick: { fill: theme.pageText },
					tickLine: { stroke: theme.pageText },
					tickSize: 0
				}),
				data.legend.map((entry, index) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						strokeWidth: 2,
						type: "monotone",
						dataKey: entry.dataKey,
						stroke: entry.color,
						...animationProps,
						activeDot: {
							r: entry.dataKey === tooltip && !compact ? 8 : 3,
							onMouseEnter: () => {
								setTooltip(entry.dataKey);
								if (!["Group", "Interval"].includes(groupBy)) setPointer("pointer");
							},
							onMouseLeave: () => {
								setPointer("");
								setTooltip("");
							},
							onClick: (e, payload) => (compact && showTooltip || !compact) && !["Group", "Interval"].includes(groupBy) && onShowActivity(e, entry.id, payload)
						}
					}, index);
				})
			]
		})] })
	});
}
//#endregion
//#region src/components/reports/graphs/StackedBarGraph.tsx
var CustomTooltip$1 = ({ compact, tooltip, legend, active, payload, label, format }) => {
	const { t } = useTranslation();
	const dataKeyToName = (0, import_react.useMemo)(() => {
		return new Map(legend.map((entry) => [entry.dataKey, entry.name]));
	}, [legend]);
	const { sumTotals, items } = (0, import_react.useMemo)(() => {
		return (payload ?? []).slice(0).reverse().reduce((acc, item) => {
			acc.sumTotals += item.value;
			acc.items.push(item);
			return acc;
		}, {
			sumTotals: 0,
			items: []
		});
	}, [payload]);
	if (active && items.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: css({
			zIndex: 1e3,
			pointerEvents: "none",
			borderRadius: 2,
			boxShadow: "0 1px 6px rgba(0, 0, 0, .20)",
			backgroundColor: theme.menuBackground,
			color: theme.menuItemText,
			padding: 10
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { marginBottom: 10 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: label })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { lineHeight: 1.4 },
			children: [
				items.map((pay, i) => {
					const displayName = dataKeyToName.get(pay.name) ?? pay.name;
					return pay.value !== 0 && (compact ? i < 5 : true) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
						left: displayName,
						right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(pay.value, "financial") }),
						style: {
							color: pay.color,
							textDecoration: tooltip === pay.name ? "underline" : "inherit"
						}
					}, pay.name);
				}),
				payload.length > 5 && compact && "...",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Total"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(sumTotals, "financial") }),
					style: { fontWeight: 600 }
				})
			]
		})] })
	});
};
var customLabel = (props) => {
	const calcX = props.x + props.width / 2;
	const calcY = props.y + props.height / 2;
	const textAnchor = "middle";
	const display = props.value && `${props.format(props.value, "financial-no-decimals")}`;
	const textSize = "12px";
	const showLabel = props.height;
	const showLabelThreshold = 20;
	const fill = theme.reportsInnerLabel;
	return renderCustomLabel(calcX, calcY, textAnchor, display, textSize, showLabel, showLabelThreshold, fill);
};
function StackedBarGraph({ style, data, filters, groupBy, compact, viewLabels, balanceTypeOp, showHiddenCategories, showOffBudget, showTooltip = true, interval }) {
	const animationProps = useRechartsAnimation();
	const navigate = useNavigate();
	const { data: categories = {
		grouped: [],
		list: []
	} } = useCategories();
	const { data: accounts = [] } = useAccounts();
	const privacyMode = usePrivacyMode();
	const format = useFormat();
	const customLabelWithFormat = (props) => customLabel({
		...props,
		format
	});
	const [pointer, setPointer] = (0, import_react.useState)("");
	const [tooltip, setTooltip] = (0, import_react.useState)("");
	const largestValue = data.intervalData.map((c) => c[balanceTypeOp]).reduce((acc, cur) => Math.abs(cur) > Math.abs(acc) ? cur : acc, 0);
	const leftMargin = Math.abs(largestValue) > 1e6 ? 20 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		style: {
			...style,
			...compact && { height: "auto" }
		},
		children: (width, height) => data.intervalData && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "15px" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
			width,
			height,
			data: data.intervalData,
			margin: {
				top: 0,
				right: 0,
				left: leftMargin,
				bottom: 10
			},
			style: { cursor: pointer },
			stackOffset: "sign",
			children: [
				showTooltip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTooltip$1, {
						compact,
						tooltip,
						legend: data.legend,
						format
					}),
					formatter: numberFormatterTooltip,
					isAnimationActive: false,
					cursor: { fill: "transparent" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "date",
					tick: { fill: theme.pageText },
					tickLine: { stroke: theme.pageText }
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { strokeDasharray: "3 3" }),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					tickFormatter: (value) => getCustomTick(format(value, "financial-no-decimals"), privacyMode),
					tick: { fill: theme.pageText },
					tickLine: { stroke: theme.pageText },
					tickSize: 0
				}),
				data.legend.slice(0).reverse().map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: entry.dataKey,
					stackId: "a",
					fill: entry.color,
					...animationProps,
					onMouseLeave: () => {
						setPointer("");
						setTooltip("");
					},
					onMouseEnter: () => {
						setTooltip(entry.dataKey);
						if (!["Group", "Interval"].includes(groupBy)) setPointer("pointer");
					},
					onClick: (e) => (compact && showTooltip || !compact) && !["Group", "Interval"].includes(groupBy) && showActivity({
						navigate,
						categories,
						accounts,
						balanceTypeOp,
						filters,
						showHiddenCategories,
						showOffBudget,
						type: "time",
						startDate: e.payload?.intervalStartDate,
						endDate: e.payload?.intervalEndDate,
						field: groupBy.toLowerCase(),
						id: entry.id,
						interval
					}),
					children: viewLabels && !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
						dataKey: entry.dataKey,
						content: customLabelWithFormat
					})
				}, entry.dataKey))
			]
		})] })
	});
}
//#endregion
//#region src/components/reports/graphs/tableGraph/ReportTableHeader.tsx
function ReportTableHeader({ groupBy, interval, data, balanceTypeOp, headerScrollRef, handleScroll, compact, style, compactStyle, mode }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
		collapsed: true,
		style: {
			justifyContent: "center",
			borderBottomWidth: 1,
			borderColor: theme.tableBorder,
			color: theme.tableHeaderText,
			backgroundColor: theme.tableHeaderBackground,
			fontWeight: 600,
			...style
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			innerRef: headerScrollRef,
			onScroll: handleScroll,
			id: "header",
			style: {
				overflowX: "auto",
				scrollbarWidth: "none",
				"::-webkit-scrollbar": { display: "none" },
				flexDirection: "row",
				flex: 1
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell$1, {
					style: {
						width: compact ? 80 : 125,
						flexShrink: 0,
						flexGrow: 1
					},
					valueStyle: compactStyle,
					value: groupBy === "Interval" ? ReportOptions.intervalMap.get(interval) : groupBy
				}),
				mode === "time" ? data.map((header, index) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell$1, {
						style: { minWidth: compact ? 50 : 85 },
						valueStyle: compactStyle,
						value: header.date,
						textAlign: "right",
						width: "flex"
					}, index);
				}) : ["totalTotals", "totalBudgeted"].includes(balanceTypeOp) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell$1, {
					style: { minWidth: compact ? 50 : 85 },
					valueStyle: compactStyle,
					value: t("Deposits"),
					textAlign: "right",
					width: "flex"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell$1, {
					style: { minWidth: compact ? 50 : 85 },
					valueStyle: compactStyle,
					value: t("Payments"),
					textAlign: "right",
					width: "flex"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell$1, {
					style: { minWidth: compact ? 50 : 85 },
					valueStyle: compactStyle,
					value: t("Totals"),
					textAlign: "right",
					width: "flex"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell$1, {
					style: { minWidth: compact ? 50 : 85 },
					valueStyle: compactStyle,
					value: t("Average"),
					textAlign: "right",
					width: "flex"
				})
			]
		})
	});
}
//#endregion
//#region src/components/reports/graphs/tableGraph/RenderTableRow.tsx
function RenderTableRow({ index, parent_index, renderRow, mode, metadata, style }) {
	const child = metadata[index];
	const parent = parent_index !== void 0 ? metadata[parent_index] : {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: renderRow({
		item: parent_index === void 0 ? child : parent.categories && parent.categories[index] || {},
		mode,
		style
	}) });
}
//#endregion
//#region src/components/reports/graphs/tableGraph/ReportTableList.tsx
function ReportTableList({ data, mode, groupBy, renderRow, style }) {
	const metadata = groupBy === "Category" ? data.groupedData || [] : groupBy === "Interval" ? data.intervalData.map((interval) => {
		return {
			id: "",
			name: "",
			date: interval.date,
			totalAssets: interval.totalAssets,
			totalDebts: interval.totalDebts,
			netAssets: interval.netAssets,
			netDebts: interval.netDebts,
			totalTotals: interval.totalTotals,
			totalBudgeted: interval.totalBudgeted,
			intervalData: [],
			categories: []
		};
	}) : data.data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: metadata ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: metadata.map((item, index) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderTableRow, {
			index,
			renderRow,
			mode,
			metadata,
			style: {
				...item.categories && {
					color: theme.tableRowHeaderText,
					backgroundColor: theme.tableRowHeaderBackground,
					fontWeight: 600
				},
				...style
			}
		}), item.categories && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: item.categories.map((category, i) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderTableRow, {
				index: i,
				renderRow,
				mode,
				metadata,
				parent_index: index,
				style
			}, category.id);
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { height: 20 })] })] }, index);
	}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { width: "flex" }) });
}
//#endregion
//#region src/components/reports/graphs/tableGraph/ReportTableRow.tsx
var getAmountColor = (amount) => {
	if (amount === 0) return theme.reportsNumberNeutral;
	return amount > 0 ? theme.reportsNumberPositive : theme.reportsNumberNegative;
};
var ReportTableRow = (0, import_react.memo)(({ item, balanceTypeOp, groupBy, mode, filters = [], startDate = "", endDate, intervalsCount, compact, style, compactStyle, totalStyle, showHiddenCategories = false, showOffBudget = false, totalScrollRef, handleScroll, height, interval, colorized }) => {
	const average = Math.round(item[balanceTypeOp] / intervalsCount);
	const groupByItem = groupBy === "Interval" ? "date" : "name";
	const format = useFormat();
	const navigate = useNavigate();
	const { isNarrowWidth } = useResponsive();
	const { data: categories = {
		grouped: [],
		list: []
	} } = useCategories();
	const { data: accounts = [] } = useAccounts();
	const pointer = !isNarrowWidth && !["Group", "Interval"].includes(groupBy) && !compact && !categories.grouped.map((g) => g.id).includes(item.id) ? "pointer" : "inherit";
	const hoverUnderline = !isNarrowWidth && !["Group", "Interval"].includes(groupBy) && !compact && !categories.grouped.map((g) => g.id).includes(item.id) ? {
		cursor: pointer,
		":hover": { textDecoration: "underline" },
		flexGrow: 0
	} : {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
		height,
		collapsed: true,
		style: {
			color: theme.tableText,
			backgroundColor: theme.tableBackground,
			...style
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			innerRef: totalScrollRef,
			onScroll: handleScroll,
			id: totalScrollRef ? "total" : item.id,
			style: {
				flexDirection: "row",
				flex: 1,
				backgroundColor: style?.backgroundColor,
				...totalStyle
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell$1, {
					value: item[groupByItem],
					title: item[groupByItem],
					style: {
						width: compact ? 80 : 125,
						flexShrink: 0,
						flexGrow: 1,
						backgroundColor: style?.backgroundColor
					},
					valueStyle: compactStyle
				}),
				item.intervalData && mode === "time" ? item.intervalData.map((intervalItem, index) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell$1, {
						textAlign: "right",
						style: {
							minWidth: compact ? 50 : 85,
							backgroundColor: style?.backgroundColor,
							...colorized && { color: getAmountColor(intervalItem[balanceTypeOp]) }
						},
						unexposedContent: ({ value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
							style: {
								...hoverUnderline,
								textAlign: "right",
								flexGrow: 1
							},
							children: value
						}),
						valueStyle: compactStyle,
						value: format(intervalItem[balanceTypeOp], "financial"),
						title: Math.abs(intervalItem[balanceTypeOp]) > 1e5 ? format(intervalItem[balanceTypeOp], "financial") : void 0,
						onClick: () => !isNarrowWidth && !["Group", "Interval"].includes(groupBy) && !compact && !categories.grouped.map((g) => g.id).includes(item.id) && showActivity({
							navigate,
							categories,
							accounts,
							balanceTypeOp,
							filters,
							showHiddenCategories,
							showOffBudget,
							type: "time",
							startDate: intervalItem.intervalStartDate || "",
							endDate: intervalItem.intervalEndDate || "",
							field: groupBy.toLowerCase(),
							id: item.id,
							interval
						}),
						width: "flex",
						privacyFilter: true
					}, index);
				}) : ["totalTotals", "totalBudgeted"].includes(balanceTypeOp) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell$1, {
					value: format(item.totalAssets, "financial"),
					title: Math.abs(item.totalAssets) > 1e5 ? format(item.totalAssets, "financial") : void 0,
					textAlign: "right",
					width: "flex",
					privacyFilter: true,
					style: {
						minWidth: compact ? 50 : 85,
						backgroundColor: style?.backgroundColor,
						...colorized && { color: getAmountColor(item.totalAssets) }
					},
					unexposedContent: ({ value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
						style: {
							...hoverUnderline,
							textAlign: "right",
							flexGrow: 1
						},
						children: value
					}),
					valueStyle: compactStyle,
					onClick: () => !isNarrowWidth && !["Group", "Interval"].includes(groupBy) && !compact && !categories.grouped.map((g) => g.id).includes(item.id) && showActivity({
						navigate,
						categories,
						accounts,
						balanceTypeOp,
						filters,
						showHiddenCategories,
						showOffBudget,
						type: "assets",
						startDate,
						endDate,
						field: groupBy.toLowerCase(),
						id: item.id
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell$1, {
					value: format(item.totalDebts, "financial"),
					title: Math.abs(item.totalDebts) > 1e5 ? format(item.totalDebts, "financial") : void 0,
					textAlign: "right",
					width: "flex",
					privacyFilter: true,
					style: {
						minWidth: compact ? 50 : 85,
						backgroundColor: style?.backgroundColor,
						...colorized && { color: getAmountColor(item.totalDebts) }
					},
					unexposedContent: ({ value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
						style: {
							...hoverUnderline,
							textAlign: "right",
							flexGrow: 1
						},
						children: value
					}),
					valueStyle: compactStyle,
					onClick: () => !isNarrowWidth && !["Group", "Interval"].includes(groupBy) && !compact && !categories.grouped.map((g) => g.id).includes(item.id) && showActivity({
						navigate,
						categories,
						accounts,
						balanceTypeOp,
						filters,
						showHiddenCategories,
						showOffBudget,
						type: "debts",
						startDate,
						endDate,
						field: groupBy.toLowerCase(),
						id: item.id
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell$1, {
					value: format(item[balanceTypeOp], "financial"),
					title: Math.abs(item[balanceTypeOp]) > 1e5 ? format(item[balanceTypeOp], "financial") : void 0,
					textAlign: "right",
					style: {
						fontWeight: 600,
						minWidth: compact ? 50 : 85,
						backgroundColor: style?.backgroundColor,
						...colorized && { color: getAmountColor(item[balanceTypeOp]) }
					},
					unexposedContent: ({ value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
						style: {
							...hoverUnderline,
							textAlign: "right",
							flexGrow: 1
						},
						children: value
					}),
					valueStyle: compactStyle,
					onClick: () => !isNarrowWidth && !["Group", "Interval"].includes(groupBy) && !compact && !categories.grouped.map((g) => g.id).includes(item.id) && showActivity({
						navigate,
						categories,
						accounts,
						balanceTypeOp,
						filters,
						showHiddenCategories,
						showOffBudget,
						type: "totals",
						startDate,
						endDate,
						field: groupBy.toLowerCase(),
						id: item.id
					}),
					width: "flex",
					privacyFilter: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell$1, {
					value: format(average, "financial"),
					title: Math.abs(average / 100) > 1e5 ? format(average, "financial") : void 0,
					textAlign: "right",
					style: {
						fontWeight: 600,
						minWidth: compact ? 50 : 85,
						backgroundColor: style?.backgroundColor,
						...colorized && { color: getAmountColor(average) }
					},
					unexposedContent: ({ value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
						style: {
							textAlign: "right",
							flexGrow: 1
						},
						children: value
					}),
					valueStyle: compactStyle,
					width: "flex",
					privacyFilter: true
				})
			]
		})
	}, item.id);
});
ReportTableRow.displayName = "ReportTableRow";
//#endregion
//#region src/components/reports/graphs/tableGraph/ReportTableTotals.tsx
function RenderTotalsRow({ metadata, mode, totalsStyle, testStyle, scrollWidthTotals, renderTotals }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: renderTotals({
		metadata,
		mode,
		totalsStyle,
		testStyle,
		scrollWidthTotals
	}) });
}
function ReportTableTotals({ data, mode, totalScrollRef, compact, style, renderTotals }) {
	const { t } = useTranslation();
	const [scrollWidthTotals, setScrollWidthTotals] = (0, import_react.useState)(0);
	(0, import_react.useLayoutEffect)(() => {
		if (totalScrollRef.current) {
			const [parent, child] = [totalScrollRef.current.offsetParent ? (totalScrollRef.current.parentElement ? totalScrollRef.current.parentElement.scrollHeight : 0) || 0 : 0, totalScrollRef.current ? totalScrollRef.current.scrollHeight : 0];
			setScrollWidthTotals(parent > 0 && child > 0 ? parent - child : 0);
		}
	}, [totalScrollRef]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderTotalsRow, {
		metadata: {
			id: "",
			name: t("Totals"),
			intervalData: data.intervalData,
			totalAssets: data.totalAssets,
			totalDebts: data.totalDebts,
			netAssets: data.netAssets,
			netDebts: data.netDebts,
			totalTotals: data.totalTotals,
			totalBudgeted: data.totalBudgeted
		},
		mode,
		totalsStyle: {
			borderTopWidth: 1,
			borderColor: theme.tableBorder,
			justifyContent: "center",
			color: theme.tableRowHeaderText,
			backgroundColor: theme.tableRowHeaderBackground,
			fontWeight: 600,
			...style
		},
		testStyle: {
			overflowX: "auto",
			scrollbarWidth: compact ? "none" : "inherit",
			...styles.horizontalScrollbar,
			"::-webkit-scrollbar": {
				backgroundColor: theme.tableBackground,
				height: 12,
				dispaly: compact && "none"
			},
			flexDirection: "row",
			flex: 1
		},
		scrollWidthTotals,
		renderTotals
	});
}
//#endregion
//#region src/components/reports/graphs/tableGraph/ReportTable.tsx
function ReportTable({ saveScrollWidth, headerScrollRef, listScrollRef, totalScrollRef, handleScroll, groupBy, balanceTypeOp, data, filters, mode, intervalsCount, interval, compact, style, compactStyle, showHiddenCategories, showOffBudget }) {
	const contentRef = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		if (contentRef.current && saveScrollWidth) saveScrollWidth(contentRef.current ? contentRef.current.offsetWidth : 0);
	});
	const renderRow = ({ item, mode, style }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportTableRow, {
			item,
			balanceTypeOp,
			groupBy,
			mode,
			filters,
			startDate: data.startDate,
			endDate: data.endDate,
			intervalsCount,
			compact,
			style,
			compactStyle,
			showHiddenCategories,
			showOffBudget,
			interval
		});
	};
	const renderTotals = ({ metadata, mode, totalsStyle, testStyle, scrollWidthTotals }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportTableRow, {
			item: metadata,
			balanceTypeOp,
			groupBy,
			mode,
			filters,
			startDate: data.startDate,
			endDate: data.endDate,
			intervalsCount,
			compact,
			style: totalsStyle,
			compactStyle,
			showHiddenCategories,
			showOffBudget,
			totalStyle: testStyle,
			totalScrollRef,
			handleScroll,
			height: 32 + scrollWidthTotals,
			interval,
			colorized: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportTableHeader, {
			headerScrollRef,
			handleScroll,
			data: data.intervalData,
			groupBy,
			interval,
			balanceTypeOp,
			compact,
			style,
			compactStyle,
			mode
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flex: 1,
				flexDirection: "row",
				outline: "none",
				"& .animated .animated-row": { transition: ".25s transform" }
			},
			tabIndex: 0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				innerRef: listScrollRef,
				onScroll: handleScroll,
				id: "list",
				style: {
					overflowY: "auto",
					scrollbarWidth: "none",
					"::-webkit-scrollbar": { display: "none" },
					flex: 1,
					outline: "none",
					"& .animated .animated-row": { transition: ".25s transform" }
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportTableList, {
					data,
					mode,
					groupBy,
					renderRow,
					style
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportTableTotals, {
			data,
			mode,
			totalScrollRef,
			compact,
			style,
			renderTotals
		})
	] });
}
//#endregion
//#region src/components/reports/ChooseGraph.tsx
function ChooseGraph({ data, filters = [], mode, graphType, balanceType, groupBy, interval, setScrollWidth, viewLabels = false, compact, style, showHiddenCategories = false, showOffBudget = false, showTooltip = true, intervalsCount }) {
	const graphStyle = compact ? { ...style } : {
		flexGrow: 1,
		overflow: "hidden"
	};
	const balanceTypeOp = ReportOptions.balanceTypeMap.get(balanceType) || "totalDebts";
	const saveScrollWidth = (value) => {
		setScrollWidth?.(value || 0);
	};
	const rowStyle = compact ? {
		flex: "0 0 20px",
		height: 20
	} : {};
	const compactStyle = compact ? { ...styles.tinyText } : {};
	const headerScrollRef = (0, import_react.useRef)(null);
	const listScrollRef = (0, import_react.useRef)(null);
	const totalScrollRef = (0, import_react.useRef)(null);
	const handleScroll = (scroll) => {
		if (scroll.currentTarget.id === "header" && totalScrollRef.current && listScrollRef.current) {
			totalScrollRef.current.scrollLeft = scroll.currentTarget.scrollLeft;
			listScrollRef.current.scrollLeft = scroll.currentTarget.scrollLeft;
		}
		if (scroll.currentTarget.id === "total" && headerScrollRef.current && listScrollRef.current) {
			headerScrollRef.current.scrollLeft = scroll.currentTarget.scrollLeft;
			listScrollRef.current.scrollLeft = scroll.currentTarget.scrollLeft;
		}
		if (scroll.currentTarget.id === "list" && totalScrollRef.current && headerScrollRef.current) {
			headerScrollRef.current.scrollLeft = scroll.currentTarget.scrollLeft;
			totalScrollRef.current.scrollLeft = scroll.currentTarget.scrollLeft;
		}
	};
	if (graphType === "AreaGraph") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaGraph, {
		style: graphStyle,
		compact,
		data,
		balanceTypeOp,
		viewLabels,
		showTooltip
	});
	if (graphType === "BarGraph") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarGraph, {
		style: graphStyle,
		compact,
		data,
		filters,
		groupBy,
		balanceTypeOp,
		viewLabels,
		showHiddenCategories,
		showOffBudget,
		showTooltip
	});
	if (graphType === "BarLineGraph") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarLineGraph, {
		style: graphStyle,
		compact,
		data,
		showTooltip
	});
	if (graphType === "DonutGraph") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonutGraph, {
		style: graphStyle,
		data,
		filters,
		groupBy,
		balanceTypeOp,
		viewLabels,
		showHiddenCategories,
		showOffBudget,
		showTooltip
	});
	if (graphType === "LineGraph") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineGraph, {
		style: graphStyle,
		compact,
		data,
		filters,
		groupBy,
		balanceTypeOp,
		showHiddenCategories,
		showOffBudget,
		showTooltip,
		interval
	});
	if (graphType === "StackedBarGraph") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedBarGraph, {
		style: graphStyle,
		compact,
		data,
		filters,
		viewLabels,
		balanceTypeOp,
		groupBy,
		showHiddenCategories,
		showOffBudget,
		showTooltip,
		interval
	});
	if (graphType === "TableGraph") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportTable, {
		saveScrollWidth,
		headerScrollRef,
		listScrollRef,
		totalScrollRef,
		handleScroll,
		balanceTypeOp,
		groupBy,
		data,
		filters,
		mode,
		intervalsCount,
		interval,
		compact,
		style: rowStyle,
		compactStyle,
		showHiddenCategories,
		showOffBudget
	});
	return null;
}
//#endregion
//#region src/components/reports/disabledList.ts
var intervalOptions = [
	{
		description: t("Daily"),
		key: "Daily",
		defaultRange: "This month"
	},
	{
		description: t("Weekly"),
		key: "Weekly",
		defaultRange: "Last 3 months"
	},
	{
		description: t("Monthly"),
		key: "Monthly",
		defaultRange: "Last 6 months"
	},
	{
		description: t("Yearly"),
		key: "Yearly",
		defaultRange: "Year to date"
	}
];
var currentIntervalOptions = [
	{
		description: t("This week"),
		disableInclude: true
	},
	{
		description: t("This month"),
		disableInclude: true
	},
	{
		description: t("Last 30 days"),
		disableInclude: true
	},
	{
		description: t("Year to date"),
		disableInclude: true
	},
	{
		description: t("Last year"),
		disableInclude: true
	},
	{
		description: t("Prior year to date"),
		disableInclude: true
	},
	{
		description: t("All time"),
		disableInclude: true
	}
];
var modeOptions = [{
	description: "total",
	graphs: [
		{
			description: "TableGraph",
			disabledSplit: ["CategoryGroup"],
			defaultSplit: "Category",
			disabledType: [],
			defaultType: "Payment",
			disableLegend: true,
			disableLabel: true,
			defaultSort: "budget"
		},
		{
			description: "BarGraph",
			disabledSplit: ["CategoryGroup"],
			defaultSplit: "Category",
			disabledType: [],
			defaultType: "Payment",
			defaultSort: "desc"
		},
		{
			description: "AreaGraph",
			disabledSplit: [
				"Category",
				"Group",
				"CategoryGroup",
				"Payee",
				"Account"
			],
			defaultSplit: "Interval",
			disabledType: [],
			defaultType: "Payment",
			disableLegend: true,
			disableSort: true,
			defaultSort: "desc"
		},
		{
			description: "DonutGraph",
			disabledSplit: [],
			defaultSplit: "Category",
			disabledType: ["Net"],
			defaultType: "Payment",
			defaultSort: "desc"
		}
	],
	disabledGraph: ["LineGraph"],
	defaultGraph: "TableGraph"
}, {
	description: "time",
	graphs: [
		{
			description: "TableGraph",
			disabledSplit: ["Interval", "CategoryGroup"],
			defaultSplit: "Category",
			disabledType: ["Net Payment", "Net Deposit"],
			defaultType: "Payment",
			disableLegend: true,
			disableLabel: true,
			disableSort: true,
			defaultSort: "desc"
		},
		{
			description: "StackedBarGraph",
			disabledSplit: ["Interval", "CategoryGroup"],
			defaultSplit: "Category",
			disabledType: [],
			defaultType: "Payment",
			disableSort: true,
			defaultSort: "desc"
		},
		{
			description: "LineGraph",
			disabledSplit: ["Interval", "CategoryGroup"],
			defaultSplit: "Category",
			disabledType: [],
			defaultType: "Payment",
			disableLegend: false,
			disableLabel: true,
			disableSort: true,
			defaultSort: "desc"
		}
	],
	disabledGraph: ["AreaGraph", "DonutGraph"],
	defaultGraph: "TableGraph"
}];
function disabledGraphList(item, newGraph, type) {
	const graphList = modeOptions.find((d) => d.description === item);
	if (!graphList) return [];
	const disabledList = graphList.graphs.find((e) => e.description === newGraph);
	if (!disabledList) return [];
	return disabledList[type];
}
function disabledLegendLabel(item, newGraph, type) {
	const graphList = modeOptions.find((d) => d.description === item);
	if (!graphList) return false;
	const disableLegendLabel = graphList.graphs.find((e) => e.description === newGraph);
	if (!disableLegendLabel) return false;
	return disableLegendLabel[type];
}
function defaultsGraphList(item, newGraph, type) {
	const graphList = modeOptions.find((d) => d.description === item);
	if (!graphList) return "";
	const defaultItem = graphList.graphs.find((e) => e.description === newGraph);
	if (!defaultItem) return "";
	return defaultItem[type];
}
var disabledList = {
	mode: modeOptions,
	modeGraphsMap: new Map(modeOptions.map((item) => [item.description, item.disabledGraph])),
	currentInterval: new Map(currentIntervalOptions.map((item) => [item.description, item.disableInclude]))
};
var defaultsList = {
	mode: modeOptions,
	modeGraphsMap: new Map(modeOptions.map((item) => [item.description, item.defaultGraph])),
	intervalRange: new Map(intervalOptions.map((item) => [item.key, item.defaultRange]))
};
//#endregion
//#region src/components/reports/LegendItem.tsx
function LegendItem({ color, label, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			padding: 10,
			flexDirection: "row",
			alignItems: "center",
			...style
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
			marginRight: 5,
			borderRadius: 1e3,
			width: 14,
			height: 14,
			backgroundColor: color
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: {
				whiteSpace: "nowrap",
				textOverflow: "ellipsis",
				flexShrink: 0
			},
			children: label
		})]
	});
}
//#endregion
//#region src/components/reports/ReportLegend.tsx
function ReportLegend({ legend, groupBy, interval }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			backgroundColor: theme.pageBackground,
			alignItems: "center",
			flex: 1,
			overflowY: "auto"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: {
				...styles.largeText,
				alignItems: "center",
				marginBottom: 2,
				fontWeight: 400,
				paddingTop: 10
			},
			children: groupBy === "Interval" ? ReportOptions.intervalMap.get(interval) : groupBy
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: legend && legend.map((item) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegendItem, {
				color: item.color,
				label: item.name
			}, item.name);
		}) })]
	});
}
//#endregion
//#region src/components/reports/ModeButton.tsx
function ModeButton({ selected, children, style, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "bare",
		className: css({
			padding: "5px 10px",
			backgroundColor: theme.menuBackground,
			fontSize: "inherit",
			...style,
			...selected && {
				backgroundColor: theme.buttonPrimaryBackground,
				color: theme.buttonPrimaryText,
				":hover": {
					backgroundColor: theme.buttonPrimaryBackgroundHover,
					color: theme.buttonPrimaryTextHover
				}
			}
		}),
		onPress: onSelect,
		children
	});
}
//#endregion
//#region src/components/reports/setSessionReport.ts
var setSessionReport = (propName, propValue) => {
	const storedReport = sessionStorage.report && JSON.parse(sessionStorage.getItem("report") || "");
	const result = {};
	result[propName] = propValue;
	sessionStorage.setItem("report", JSON.stringify({
		...storedReport,
		...result
	}));
};
//#endregion
//#region src/components/reports/ReportSidebar.tsx
function ReportSidebar({ customReportItems, selectedCategories, categories, dateRangeLine, allIntervals, setDateRange, setGraphType, setGroupBy, setInterval, setBalanceType, setSortBy, setMode, setIsDateStatic, setShowEmpty, setShowOffBudget, setShowHiddenCategories, setIncludeCurrentInterval, setShowUncategorized, setTrimIntervals, setSelectedCategories, onChangeDates, onReportChange, disabledItems, defaultItems, defaultModeItems, earliestTransaction, latestTransaction, firstDayOfWeekIdx, isComplexCategoryCondition = false }) {
	const { t } = useTranslation();
	const locale = useLocale();
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const triggerRef = (0, import_react.useRef)(null);
	const onSelectRange = (cond) => {
		setSessionReport("dateRange", cond);
		onReportChange({ type: "modify" });
		setDateRange(cond);
		onChangeDates(...getLiveRange(cond, earliestTransaction, latestTransaction, customReportItems.includeCurrentInterval, firstDayOfWeekIdx));
	};
	const [includeCurrentIntervalText, includeCurrentIntervalTooltip] = (0, import_react.useMemo)(() => {
		const rangeType = (ReportOptions.dateRangeType.get(customReportItems.dateRange) || "").toLowerCase();
		let text = t("Include current period");
		let tooltip = t("Include current period in live range");
		if (rangeType === "month") {
			text = t("Include current Month");
			tooltip = t("Include current Month in live range");
		} else if (rangeType === "year") {
			text = t("Include current Year");
			tooltip = t("Include current Year in live range");
		}
		return [text, tooltip];
	}, [customReportItems.dateRange, t]);
	const onChangeMode = (cond) => {
		setSessionReport("mode", cond);
		onReportChange({ type: "modify" });
		setMode(cond);
		let graph = "";
		if (cond === "time") {
			if (customReportItems.graphType === "BarGraph") {
				setSessionReport("graphType", "StackedBarGraph");
				setGraphType("StackedBarGraph");
				graph = "StackedBarGraph";
			}
		} else if (customReportItems.graphType === "StackedBarGraph") {
			setSessionReport("graphType", "BarGraph");
			setGraphType("BarGraph");
			graph = "BarGraph";
		}
		defaultModeItems(graph, cond);
	};
	const onChangeSplit = (cond) => {
		setSessionReport("groupBy", cond);
		onReportChange({ type: "modify" });
		setGroupBy(cond);
		defaultItems(cond);
	};
	const onChangeBalanceType = (cond) => {
		setSessionReport("balanceType", cond);
		onReportChange({ type: "modify" });
		setBalanceType(cond);
		if (cond === "Budgeted") {
			if (customReportItems.groupBy === "Payee" || customReportItems.groupBy === "Account") {
				setSessionReport("groupBy", "Category");
				setGroupBy("Category");
				defaultItems("Category");
			}
			if (customReportItems.interval === "Daily" || customReportItems.interval === "Weekly") {
				setSessionReport("interval", "Monthly");
				setInterval("Monthly");
				if (ReportOptions.dateRange.filter((d) => !d["Monthly"]).map((int) => int.key).includes(customReportItems.dateRange)) onSelectRange(defaultsList.intervalRange.get("Monthly") || "");
			}
		}
	};
	const onChangeSortBy = (cond) => {
		cond ??= "desc";
		setSessionReport("sortBy", cond);
		onReportChange({ type: "modify" });
		setSortBy(cond);
	};
	const rangeOptions = (0, import_react.useMemo)(() => {
		const options = ReportOptions.dateRange.filter((f) => f[customReportItems.interval]).map((option) => [option.key, option.description]);
		if (dateRangeLine > 0) options.splice(dateRangeLine, 0, Menu.line);
		return options;
	}, [customReportItems, dateRangeLine]);
	const disableSort = customReportItems.graphType !== "TableGraph" && (customReportItems.groupBy === "Interval" || (disabledList?.mode?.find((m) => m.description === customReportItems.mode)?.graphs.find((g) => g.description === customReportItems.graphType)?.disableSort ?? false));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			minWidth: 225,
			maxWidth: 250,
			paddingTop: 10,
			paddingRight: 10,
			flexShrink: 0,
			overflowY: "auto"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: { flexShrink: 0 },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: {
						flexDirection: "row",
						marginBottom: 5,
						alignItems: "center"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Display" }) }) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
					gap: 5,
					style: { padding: 5 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: {
								width: 50,
								textAlign: "right"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Mode:" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeButton, {
							selected: customReportItems.mode === "total",
							onSelect: () => onChangeMode("total"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Total" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeButton, {
							selected: customReportItems.mode === "time",
							onSelect: () => onChangeMode("time"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Time" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						padding: 5,
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							width: 50,
							textAlign: "right",
							marginRight: 5
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Split:" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						value: customReportItems.groupBy,
						onChange: (e) => onChangeSplit(e),
						options: ReportOptions.groupBy.map((option) => [option.key, option.description]),
						disabledKeys: customReportItems.balanceType === "Budgeted" ? [...new Set([
							...disabledItems("split"),
							"Payee",
							"Account"
						])] : disabledItems("split")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						padding: 5,
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							width: 50,
							textAlign: "right",
							marginRight: 5
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Type:" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						value: customReportItems.balanceType,
						onChange: (e) => onChangeBalanceType(e),
						options: ReportOptions.balanceType.map((option) => [option.key, option.description]),
						disabledKeys: disabledItems("type")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						padding: 5,
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							width: 50,
							textAlign: "right",
							marginRight: 5
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Interval:" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						value: customReportItems.interval,
						onChange: (e) => {
							setSessionReport("interval", e);
							setInterval(e);
							onReportChange({ type: "modify" });
							if (ReportOptions.dateRange.filter((d) => !d[e]).map((int) => int.key).includes(customReportItems.dateRange)) onSelectRange(defaultsList.intervalRange.get(e) || "");
						},
						options: ReportOptions.interval.map((option) => [option.key, option.description]),
						disabledKeys: customReportItems.balanceType === "Budgeted" ? ["Daily", "Weekly"] : []
					})]
				}),
				!disableSort && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						padding: 5,
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							width: 50,
							textAlign: "right",
							marginRight: 5
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Sort:" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						value: customReportItems.sortBy,
						onChange: (e) => onChangeSortBy(e),
						options: ReportOptions.sortBy.map((option) => [option.format, option.description]),
						disabledKeys: disabledItems("sort")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						padding: 5,
						alignItems: "center"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { style: {
							width: 50,
							textAlign: "right",
							marginRight: 5
						} }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							ref: triggerRef,
							onPress: () => {
								setMenuOpen(true);
							},
							style: {
								color: "currentColor",
								padding: "5px 10px"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Options" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
							triggerRef,
							placement: "bottom start",
							isOpen: menuOpen,
							onOpenChange: () => setMenuOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								onMenuSelect: (type) => {
									onReportChange({ type: "modify" });
									if (type === "include-current-interval") {
										setSessionReport("includeCurrentInterval", !customReportItems.includeCurrentInterval);
										setIncludeCurrentInterval(!customReportItems.includeCurrentInterval);
									} else if (type === "show-hidden-categories") {
										setSessionReport("showHiddenCategories", !customReportItems.showHiddenCategories);
										setShowHiddenCategories(!customReportItems.showHiddenCategories);
									} else if (type === "show-off-budget") {
										setSessionReport("showOffBudget", !customReportItems.showOffBudget);
										setShowOffBudget(!customReportItems.showOffBudget);
									} else if (type === "show-empty-items") {
										setSessionReport("showEmpty", !customReportItems.showEmpty);
										setShowEmpty(!customReportItems.showEmpty);
									} else if (type === "show-uncategorized") {
										setSessionReport("showUncategorized", !customReportItems.showUncategorized);
										setShowUncategorized(!customReportItems.showUncategorized);
									} else if (type === "trim-intervals") {
										setSessionReport("trimIntervals", !customReportItems.trimIntervals);
										setTrimIntervals(!customReportItems.trimIntervals);
									}
								},
								items: [
									{
										name: "include-current-interval",
										text: includeCurrentIntervalText,
										tooltip: includeCurrentIntervalTooltip,
										toggle: customReportItems.includeCurrentInterval,
										disabled: customReportItems.isDateStatic || disabledList.currentInterval.get(customReportItems.dateRange)
									},
									{
										name: "show-hidden-categories",
										text: t("Show hidden categories"),
										tooltip: t("Show hidden categories"),
										toggle: customReportItems.showHiddenCategories
									},
									{
										name: "show-empty-items",
										text: t("Show empty rows"),
										tooltip: t("Show rows that are zero or blank"),
										toggle: customReportItems.showEmpty
									},
									{
										name: "show-off-budget",
										text: t("Show off budget"),
										tooltip: t("Show off budget accounts"),
										toggle: customReportItems.showOffBudget
									},
									{
										name: "show-uncategorized",
										text: t("Show uncategorized"),
										tooltip: t("Show uncategorized transactions"),
										toggle: customReportItems.showUncategorized
									},
									{
										name: "trim-intervals",
										text: t("Trim intervals"),
										tooltip: t("Trim empty intervals at the start and end of the report"),
										toggle: customReportItems.trimIntervals
									}
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
					height: 1,
					backgroundColor: theme.pillBorderDark,
					marginTop: 10,
					flexShrink: 0
				} }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
					gap: 5,
					style: {
						marginTop: 10,
						marginBottom: 5
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Date filters" }) }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: { flex: 1 } }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeButton, {
							selected: !customReportItems.isDateStatic,
							onSelect: () => {
								setSessionReport("isDateStatic", false);
								setIsDateStatic(false);
								onSelectRange(customReportItems.dateRange);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Live" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeButton, {
							selected: customReportItems.isDateStatic,
							onSelect: () => {
								setSessionReport("isDateStatic", true);
								setIsDateStatic(true);
								onChangeDates(customReportItems.startDate, customReportItems.endDate, "static");
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Static" })
						})
					]
				}),
				!customReportItems.isDateStatic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						padding: 5,
						alignItems: "center"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: {
								width: 50,
								textAlign: "right",
								marginRight: 5
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Range:" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: customReportItems.dateRange,
							onChange: onSelectRange,
							options: rangeOptions
						}),
						!disabledList.currentInterval.get(customReportItems.dateRange) && customReportItems.includeCurrentInterval && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
							placement: "bottom start",
							content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Current month" }) }),
							style: {
								...styles.tooltip,
								lineHeight: 1.5,
								padding: "6px 10px",
								marginTop: 5
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: { marginLeft: 10 },
								children: "+1"
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						padding: 5,
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							width: 50,
							textAlign: "right",
							marginRight: 5
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "From:" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						onChange: (newValue) => onChangeDates(...validateStart(earliestTransaction, latestTransaction, newValue, customReportItems.endDate, customReportItems.interval, firstDayOfWeekIdx)),
						value: customReportItems.startDate,
						defaultLabel: format(customReportItems.startDate, ReportOptions.intervalFormat.get(customReportItems.interval) || "", locale),
						options: allIntervals.map(({ name, pretty }) => [name, pretty])
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						padding: 5,
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							width: 50,
							textAlign: "right",
							marginRight: 5
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "To:" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						onChange: (newValue) => onChangeDates(...validateEnd(earliestTransaction, latestTransaction, customReportItems.startDate, newValue, customReportItems.interval, firstDayOfWeekIdx)),
						value: customReportItems.endDate,
						defaultLabel: format(customReportItems.endDate, ReportOptions.intervalFormat.get(customReportItems.interval) || "", locale),
						options: allIntervals.map(({ name, pretty }) => [name, pretty])
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
					height: 1,
					backgroundColor: theme.pillBorderDark,
					marginTop: 10,
					flexShrink: 0
				} })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				marginTop: 10,
				minHeight: 200
			},
			children: isComplexCategoryCondition ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Information, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Remove active category filters to show the category selector." }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategorySelector, {
				categoryGroups: categories.grouped.filter((f) => {
					return customReportItems.showHiddenCategories || !f.hidden ? true : false;
				}),
				selectedCategories: selectedCategories || [],
				setSelectedCategories: (e) => {
					setSelectedCategories(e);
					onReportChange({ type: "modify" });
				},
				showHiddenCategories: customReportItems.showHiddenCategories
			})
		})]
	});
}
//#endregion
//#region src/components/reports/ReportSummary.tsx
function ReportSummary({ startDate, endDate, data, balanceTypeOp, interval, intervalsCount }) {
	const locale = useLocale();
	const { t } = useTranslation();
	const format$7 = useFormat();
	const net = balanceTypeOp === "netAssets" ? t("DEPOSIT") : balanceTypeOp === "netDebts" ? t("PAYMENT") : Math.abs(data.totalDebts) > Math.abs(data.totalAssets) ? t("PAYMENT") : t("DEPOSIT");
	const average = Math.round(data[balanceTypeOp] / intervalsCount);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flexDirection: "column",
			marginBottom: 10
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					backgroundColor: theme.pageBackground,
					padding: 15,
					alignItems: "center",
					justifyContent: "center"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
					style: {
						...styles.largeText,
						alignItems: "center",
						marginBottom: 2,
						fontWeight: 600
					},
					children: [format(startDate, ReportOptions.intervalFormat.get(interval) || "", locale), format(startDate, ReportOptions.intervalFormat.get(interval) || "", locale) !== format(endDate, ReportOptions.intervalFormat.get(interval) || "", locale) && ` ${t("to")} ` + format(endDate, ReportOptions.intervalFormat.get(interval) || "", locale)]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					backgroundColor: theme.pageBackground,
					padding: 15,
					justifyContent: "center",
					alignItems: "center",
					marginTop: 10
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							...styles.mediumText,
							alignItems: "center",
							marginBottom: 2,
							fontWeight: 400
						},
						children: balanceTypeOp === "totalDebts" ? t("TOTAL SPENDING") : balanceTypeOp === "totalAssets" ? t("TOTAL DEPOSITS") : balanceTypeOp === "totalBudgeted" ? t("TOTAL BUDGETED") : t("NET {{net}}", { net })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
						style: {
							...styles.veryLargeText,
							alignItems: "center",
							marginBottom: 2,
							fontWeight: 800
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format$7(data[balanceTypeOp], "financial") })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: { fontWeight: 600 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "For this time period" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					backgroundColor: theme.pageBackground,
					padding: 15,
					justifyContent: "center",
					alignItems: "center",
					marginTop: 10
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							...styles.mediumText,
							alignItems: "center",
							marginBottom: 2,
							fontWeight: 400
						},
						children: balanceTypeOp === "totalDebts" ? t("AVERAGE SPENDING") : balanceTypeOp === "totalAssets" ? t("AVERAGE DEPOSIT") : balanceTypeOp === "totalBudgeted" ? t("AVERAGE BUDGETED") : t("AVERAGE NET")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
						style: {
							...styles.veryLargeText,
							alignItems: "center",
							marginBottom: 2,
							fontWeight: 800
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: !isNaN(average) && format$7(average, "financial") })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: { fontWeight: 600 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
							"Per",
							" ",
							{ interval: (ReportOptions.intervalMap.get(interval) || "").toLowerCase() }
						] })
					})
				]
			})
		]
	});
}
//#endregion
//#region ../../node_modules/html-to-image/es/util.js
function resolveUrl(url, baseUrl) {
	if (url.match(/^[a-z]+:\/\//i)) return url;
	if (url.match(/^\/\//)) return window.location.protocol + url;
	if (url.match(/^[a-z]+:/i)) return url;
	const doc = document.implementation.createHTMLDocument();
	const base = doc.createElement("base");
	const a = doc.createElement("a");
	doc.head.appendChild(base);
	doc.body.appendChild(a);
	if (baseUrl) base.href = baseUrl;
	a.href = url;
	return a.href;
}
var uuid = (() => {
	let counter = 0;
	const random = () => `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4);
	return () => {
		counter += 1;
		return `u${random()}${counter}`;
	};
})();
function toArray(arrayLike) {
	const arr = [];
	for (let i = 0, l = arrayLike.length; i < l; i++) arr.push(arrayLike[i]);
	return arr;
}
var styleProps = null;
function getStyleProperties(options = {}) {
	if (styleProps) return styleProps;
	if (options.includeStyleProperties) {
		styleProps = options.includeStyleProperties;
		return styleProps;
	}
	styleProps = toArray(window.getComputedStyle(document.documentElement));
	return styleProps;
}
function px(node, styleProperty) {
	const val = (node.ownerDocument.defaultView || window).getComputedStyle(node).getPropertyValue(styleProperty);
	return val ? parseFloat(val.replace("px", "")) : 0;
}
function getNodeWidth(node) {
	const leftBorder = px(node, "border-left-width");
	const rightBorder = px(node, "border-right-width");
	return node.clientWidth + leftBorder + rightBorder;
}
function getNodeHeight(node) {
	const topBorder = px(node, "border-top-width");
	const bottomBorder = px(node, "border-bottom-width");
	return node.clientHeight + topBorder + bottomBorder;
}
function getImageSize(targetNode, options = {}) {
	return {
		width: options.width || getNodeWidth(targetNode),
		height: options.height || getNodeHeight(targetNode)
	};
}
function getPixelRatio() {
	let ratio;
	let FINAL_PROCESS;
	try {
		FINAL_PROCESS = process;
	} catch (e) {}
	const val = FINAL_PROCESS && FINAL_PROCESS.env ? FINAL_PROCESS.env.devicePixelRatio : null;
	if (val) {
		ratio = parseInt(val, 10);
		if (Number.isNaN(ratio)) ratio = 1;
	}
	return ratio || window.devicePixelRatio || 1;
}
var canvasDimensionLimit = 16384;
function checkCanvasDimensions(canvas) {
	if (canvas.width > canvasDimensionLimit || canvas.height > canvasDimensionLimit) if (canvas.width > canvasDimensionLimit && canvas.height > canvasDimensionLimit) if (canvas.width > canvas.height) {
		canvas.height *= canvasDimensionLimit / canvas.width;
		canvas.width = canvasDimensionLimit;
	} else {
		canvas.width *= canvasDimensionLimit / canvas.height;
		canvas.height = canvasDimensionLimit;
	}
	else if (canvas.width > canvasDimensionLimit) {
		canvas.height *= canvasDimensionLimit / canvas.width;
		canvas.width = canvasDimensionLimit;
	} else {
		canvas.width *= canvasDimensionLimit / canvas.height;
		canvas.height = canvasDimensionLimit;
	}
}
function createImage(url) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => {
			img.decode().then(() => {
				requestAnimationFrame(() => resolve(img));
			});
		};
		img.onerror = reject;
		img.crossOrigin = "anonymous";
		img.decoding = "async";
		img.src = url;
	});
}
async function svgToDataURL(svg) {
	return Promise.resolve().then(() => new XMLSerializer().serializeToString(svg)).then(encodeURIComponent).then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
}
async function nodeToDataURL(node, width, height) {
	const xmlns = "http://www.w3.org/2000/svg";
	const svg = document.createElementNS(xmlns, "svg");
	const foreignObject = document.createElementNS(xmlns, "foreignObject");
	svg.setAttribute("width", `${width}`);
	svg.setAttribute("height", `${height}`);
	svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
	foreignObject.setAttribute("width", "100%");
	foreignObject.setAttribute("height", "100%");
	foreignObject.setAttribute("x", "0");
	foreignObject.setAttribute("y", "0");
	foreignObject.setAttribute("externalResourcesRequired", "true");
	svg.appendChild(foreignObject);
	foreignObject.appendChild(node);
	return svgToDataURL(svg);
}
var isInstanceOfElement = (node, instance) => {
	if (node instanceof instance) return true;
	const nodePrototype = Object.getPrototypeOf(node);
	if (nodePrototype === null) return false;
	return nodePrototype.constructor.name === instance.name || isInstanceOfElement(nodePrototype, instance);
};
//#endregion
//#region ../../node_modules/html-to-image/es/clone-pseudos.js
function formatCSSText(style) {
	const content = style.getPropertyValue("content");
	return `${style.cssText} content: '${content.replace(/'|"/g, "")}';`;
}
function formatCSSProperties(style, options) {
	return getStyleProperties(options).map((name) => {
		return `${name}: ${style.getPropertyValue(name)}${style.getPropertyPriority(name) ? " !important" : ""};`;
	}).join(" ");
}
function getPseudoElementStyle(className, pseudo, style, options) {
	const selector = `.${className}:${pseudo}`;
	const cssText = style.cssText ? formatCSSText(style) : formatCSSProperties(style, options);
	return document.createTextNode(`${selector}{${cssText}}`);
}
function clonePseudoElement(nativeNode, clonedNode, pseudo, options) {
	const style = window.getComputedStyle(nativeNode, pseudo);
	const content = style.getPropertyValue("content");
	if (content === "" || content === "none") return;
	const className = uuid();
	try {
		clonedNode.className = `${clonedNode.className} ${className}`;
	} catch (err) {
		return;
	}
	const styleElement = document.createElement("style");
	styleElement.appendChild(getPseudoElementStyle(className, pseudo, style, options));
	clonedNode.appendChild(styleElement);
}
function clonePseudoElements(nativeNode, clonedNode, options) {
	clonePseudoElement(nativeNode, clonedNode, ":before", options);
	clonePseudoElement(nativeNode, clonedNode, ":after", options);
}
//#endregion
//#region ../../node_modules/html-to-image/es/mimes.js
var WOFF = "application/font-woff";
var JPEG = "image/jpeg";
var mimes = {
	woff: WOFF,
	woff2: WOFF,
	ttf: "application/font-truetype",
	eot: "application/vnd.ms-fontobject",
	png: "image/png",
	jpg: JPEG,
	jpeg: JPEG,
	gif: "image/gif",
	tiff: "image/tiff",
	svg: "image/svg+xml",
	webp: "image/webp"
};
function getExtension(url) {
	const match = /\.([^./]*?)$/g.exec(url);
	return match ? match[1] : "";
}
function getMimeType(url) {
	return mimes[getExtension(url).toLowerCase()] || "";
}
//#endregion
//#region ../../node_modules/html-to-image/es/dataurl.js
function getContentFromDataUrl(dataURL) {
	return dataURL.split(/,/)[1];
}
function isDataUrl(url) {
	return url.search(/^(data:)/) !== -1;
}
function makeDataUrl(content, mimeType) {
	return `data:${mimeType};base64,${content}`;
}
async function fetchAsDataURL(url, init, process) {
	const res = await fetch(url, init);
	if (res.status === 404) throw new Error(`Resource "${res.url}" not found`);
	const blob = await res.blob();
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onerror = reject;
		reader.onloadend = () => {
			try {
				resolve(process({
					res,
					result: reader.result
				}));
			} catch (error) {
				reject(error);
			}
		};
		reader.readAsDataURL(blob);
	});
}
var cache = {};
function getCacheKey(url, contentType, includeQueryParams) {
	let key = url.replace(/\?.*/, "");
	if (includeQueryParams) key = url;
	if (/ttf|otf|eot|woff2?/i.test(key)) key = key.replace(/.*\//, "");
	return contentType ? `[${contentType}]${key}` : key;
}
async function resourceToDataURL(resourceUrl, contentType, options) {
	const cacheKey = getCacheKey(resourceUrl, contentType, options.includeQueryParams);
	if (cache[cacheKey] != null) return cache[cacheKey];
	if (options.cacheBust) resourceUrl += (/\?/.test(resourceUrl) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime();
	let dataURL;
	try {
		dataURL = makeDataUrl(await fetchAsDataURL(resourceUrl, options.fetchRequestInit, ({ res, result }) => {
			if (!contentType) contentType = res.headers.get("Content-Type") || "";
			return getContentFromDataUrl(result);
		}), contentType);
	} catch (error) {
		dataURL = options.imagePlaceholder || "";
		let msg = `Failed to fetch resource: ${resourceUrl}`;
		if (error) msg = typeof error === "string" ? error : error.message;
		if (msg) console.warn(msg);
	}
	cache[cacheKey] = dataURL;
	return dataURL;
}
//#endregion
//#region ../../node_modules/html-to-image/es/clone-node.js
async function cloneCanvasElement(canvas) {
	const dataURL = canvas.toDataURL();
	if (dataURL === "data:,") return canvas.cloneNode(false);
	return createImage(dataURL);
}
async function cloneVideoElement(video, options) {
	if (video.currentSrc) {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		canvas.width = video.clientWidth;
		canvas.height = video.clientHeight;
		ctx === null || ctx === void 0 || ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
		return createImage(canvas.toDataURL());
	}
	const poster = video.poster;
	return createImage(await resourceToDataURL(poster, getMimeType(poster), options));
}
async function cloneIFrameElement(iframe, options) {
	var _a;
	try {
		if ((_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.body) return await cloneNode(iframe.contentDocument.body, options, true);
	} catch (_b) {}
	return iframe.cloneNode(false);
}
async function cloneSingleNode(node, options) {
	if (isInstanceOfElement(node, HTMLCanvasElement)) return cloneCanvasElement(node);
	if (isInstanceOfElement(node, HTMLVideoElement)) return cloneVideoElement(node, options);
	if (isInstanceOfElement(node, HTMLIFrameElement)) return cloneIFrameElement(node, options);
	return node.cloneNode(isSVGElement(node));
}
var isSlotElement = (node) => node.tagName != null && node.tagName.toUpperCase() === "SLOT";
var isSVGElement = (node) => node.tagName != null && node.tagName.toUpperCase() === "SVG";
async function cloneChildren(nativeNode, clonedNode, options) {
	var _a, _b;
	if (isSVGElement(clonedNode)) return clonedNode;
	let children = [];
	if (isSlotElement(nativeNode) && nativeNode.assignedNodes) children = toArray(nativeNode.assignedNodes());
	else if (isInstanceOfElement(nativeNode, HTMLIFrameElement) && ((_a = nativeNode.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) children = toArray(nativeNode.contentDocument.body.childNodes);
	else children = toArray(((_b = nativeNode.shadowRoot) !== null && _b !== void 0 ? _b : nativeNode).childNodes);
	if (children.length === 0 || isInstanceOfElement(nativeNode, HTMLVideoElement)) return clonedNode;
	await children.reduce((deferred, child) => deferred.then(() => cloneNode(child, options)).then((clonedChild) => {
		if (clonedChild) clonedNode.appendChild(clonedChild);
	}), Promise.resolve());
	return clonedNode;
}
function cloneCSSStyle(nativeNode, clonedNode, options) {
	const targetStyle = clonedNode.style;
	if (!targetStyle) return;
	const sourceStyle = window.getComputedStyle(nativeNode);
	if (sourceStyle.cssText) {
		targetStyle.cssText = sourceStyle.cssText;
		targetStyle.transformOrigin = sourceStyle.transformOrigin;
	} else getStyleProperties(options).forEach((name) => {
		let value = sourceStyle.getPropertyValue(name);
		if (name === "font-size" && value.endsWith("px")) value = `${Math.floor(parseFloat(value.substring(0, value.length - 2))) - .1}px`;
		if (isInstanceOfElement(nativeNode, HTMLIFrameElement) && name === "display" && value === "inline") value = "block";
		if (name === "d" && clonedNode.getAttribute("d")) value = `path(${clonedNode.getAttribute("d")})`;
		targetStyle.setProperty(name, value, sourceStyle.getPropertyPriority(name));
	});
}
function cloneInputValue(nativeNode, clonedNode) {
	if (isInstanceOfElement(nativeNode, HTMLTextAreaElement)) clonedNode.innerHTML = nativeNode.value;
	if (isInstanceOfElement(nativeNode, HTMLInputElement)) clonedNode.setAttribute("value", nativeNode.value);
}
function cloneSelectValue(nativeNode, clonedNode) {
	if (isInstanceOfElement(nativeNode, HTMLSelectElement)) {
		const clonedSelect = clonedNode;
		const selectedOption = Array.from(clonedSelect.children).find((child) => nativeNode.value === child.getAttribute("value"));
		if (selectedOption) selectedOption.setAttribute("selected", "");
	}
}
function decorate(nativeNode, clonedNode, options) {
	if (isInstanceOfElement(clonedNode, Element)) {
		cloneCSSStyle(nativeNode, clonedNode, options);
		clonePseudoElements(nativeNode, clonedNode, options);
		cloneInputValue(nativeNode, clonedNode);
		cloneSelectValue(nativeNode, clonedNode);
	}
	return clonedNode;
}
async function ensureSVGSymbols(clone, options) {
	const uses = clone.querySelectorAll ? clone.querySelectorAll("use") : [];
	if (uses.length === 0) return clone;
	const processedDefs = {};
	for (let i = 0; i < uses.length; i++) {
		const id = uses[i].getAttribute("xlink:href");
		if (id) {
			const exist = clone.querySelector(id);
			const definition = document.querySelector(id);
			if (!exist && definition && !processedDefs[id]) processedDefs[id] = await cloneNode(definition, options, true);
		}
	}
	const nodes = Object.values(processedDefs);
	if (nodes.length) {
		const ns = "http://www.w3.org/1999/xhtml";
		const svg = document.createElementNS(ns, "svg");
		svg.setAttribute("xmlns", ns);
		svg.style.position = "absolute";
		svg.style.width = "0";
		svg.style.height = "0";
		svg.style.overflow = "hidden";
		svg.style.display = "none";
		const defs = document.createElementNS(ns, "defs");
		svg.appendChild(defs);
		for (let i = 0; i < nodes.length; i++) defs.appendChild(nodes[i]);
		clone.appendChild(svg);
	}
	return clone;
}
async function cloneNode(node, options, isRoot) {
	if (!isRoot && options.filter && !options.filter(node)) return null;
	return Promise.resolve(node).then((clonedNode) => cloneSingleNode(clonedNode, options)).then((clonedNode) => cloneChildren(node, clonedNode, options)).then((clonedNode) => decorate(node, clonedNode, options)).then((clonedNode) => ensureSVGSymbols(clonedNode, options));
}
//#endregion
//#region ../../node_modules/html-to-image/es/embed-resources.js
var URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
var URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
var FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function toRegex(url) {
	const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
	return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, "g");
}
function parseURLs(cssText) {
	const urls = [];
	cssText.replace(URL_REGEX, (raw, quotation, url) => {
		urls.push(url);
		return raw;
	});
	return urls.filter((url) => !isDataUrl(url));
}
async function embed(cssText, resourceURL, baseURL, options, getContentFromUrl) {
	try {
		const resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
		const contentType = getMimeType(resourceURL);
		let dataURL;
		if (getContentFromUrl) dataURL = makeDataUrl(await getContentFromUrl(resolvedURL), contentType);
		else dataURL = await resourceToDataURL(resolvedURL, contentType, options);
		return cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`);
	} catch (error) {}
	return cssText;
}
function filterPreferredFontFormat(str, { preferredFontFormat }) {
	return !preferredFontFormat ? str : str.replace(FONT_SRC_REGEX, (match) => {
		while (true) {
			const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
			if (!format) return "";
			if (format === preferredFontFormat) return `src: ${src};`;
		}
	});
}
function shouldEmbed(url) {
	return url.search(URL_REGEX) !== -1;
}
async function embedResources(cssText, baseUrl, options) {
	if (!shouldEmbed(cssText)) return cssText;
	const filteredCSSText = filterPreferredFontFormat(cssText, options);
	return parseURLs(filteredCSSText).reduce((deferred, url) => deferred.then((css) => embed(css, url, baseUrl, options)), Promise.resolve(filteredCSSText));
}
//#endregion
//#region ../../node_modules/html-to-image/es/embed-images.js
async function embedProp(propName, node, options) {
	var _a;
	const propValue = (_a = node.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue(propName);
	if (propValue) {
		const cssString = await embedResources(propValue, null, options);
		node.style.setProperty(propName, cssString, node.style.getPropertyPriority(propName));
		return true;
	}
	return false;
}
async function embedBackground(clonedNode, options) {
	await embedProp("background", clonedNode, options) || await embedProp("background-image", clonedNode, options);
	await embedProp("mask", clonedNode, options) || await embedProp("-webkit-mask", clonedNode, options) || await embedProp("mask-image", clonedNode, options) || await embedProp("-webkit-mask-image", clonedNode, options);
}
async function embedImageNode(clonedNode, options) {
	const isImageElement = isInstanceOfElement(clonedNode, HTMLImageElement);
	if (!(isImageElement && !isDataUrl(clonedNode.src)) && !(isInstanceOfElement(clonedNode, SVGImageElement) && !isDataUrl(clonedNode.href.baseVal))) return;
	const url = isImageElement ? clonedNode.src : clonedNode.href.baseVal;
	const dataURL = await resourceToDataURL(url, getMimeType(url), options);
	await new Promise((resolve, reject) => {
		clonedNode.onload = resolve;
		clonedNode.onerror = options.onImageErrorHandler ? (...attributes) => {
			try {
				resolve(options.onImageErrorHandler(...attributes));
			} catch (error) {
				reject(error);
			}
		} : reject;
		const image = clonedNode;
		if (image.decode) image.decode = resolve;
		if (image.loading === "lazy") image.loading = "eager";
		if (isImageElement) {
			clonedNode.srcset = "";
			clonedNode.src = dataURL;
		} else clonedNode.href.baseVal = dataURL;
	});
}
async function embedChildren(clonedNode, options) {
	const deferreds = toArray(clonedNode.childNodes).map((child) => embedImages(child, options));
	await Promise.all(deferreds).then(() => clonedNode);
}
async function embedImages(clonedNode, options) {
	if (isInstanceOfElement(clonedNode, Element)) {
		await embedBackground(clonedNode, options);
		await embedImageNode(clonedNode, options);
		await embedChildren(clonedNode, options);
	}
}
//#endregion
//#region ../../node_modules/html-to-image/es/apply-style.js
function applyStyle(node, options) {
	const { style } = node;
	if (options.backgroundColor) style.backgroundColor = options.backgroundColor;
	if (options.width) style.width = `${options.width}px`;
	if (options.height) style.height = `${options.height}px`;
	const manual = options.style;
	if (manual != null) Object.keys(manual).forEach((key) => {
		style[key] = manual[key];
	});
	return node;
}
//#endregion
//#region ../../node_modules/html-to-image/es/embed-webfonts.js
var cssFetchCache = {};
async function fetchCSS(url) {
	let cache = cssFetchCache[url];
	if (cache != null) return cache;
	cache = {
		url,
		cssText: await (await fetch(url)).text()
	};
	cssFetchCache[url] = cache;
	return cache;
}
async function embedFonts(data, options) {
	let cssText = data.cssText;
	const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
	const loadFonts = (cssText.match(/url\([^)]+\)/g) || []).map(async (loc) => {
		let url = loc.replace(regexUrl, "$1");
		if (!url.startsWith("https://")) url = new URL(url, data.url).href;
		return fetchAsDataURL(url, options.fetchRequestInit, ({ result }) => {
			cssText = cssText.replace(loc, `url(${result})`);
			return [loc, result];
		});
	});
	return Promise.all(loadFonts).then(() => cssText);
}
function parseCSS(source) {
	if (source == null) return [];
	const result = [];
	let cssText = source.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
	const keyframesRegex = /* @__PURE__ */ new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
	while (true) {
		const matches = keyframesRegex.exec(cssText);
		if (matches === null) break;
		result.push(matches[0]);
	}
	cssText = cssText.replace(keyframesRegex, "");
	const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
	const unifiedRegex = /* @__PURE__ */ new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
	while (true) {
		let matches = importRegex.exec(cssText);
		if (matches === null) {
			matches = unifiedRegex.exec(cssText);
			if (matches === null) break;
			else importRegex.lastIndex = unifiedRegex.lastIndex;
		} else unifiedRegex.lastIndex = importRegex.lastIndex;
		result.push(matches[0]);
	}
	return result;
}
async function getCSSRules(styleSheets, options) {
	const ret = [];
	const deferreds = [];
	styleSheets.forEach((sheet) => {
		if ("cssRules" in sheet) try {
			toArray(sheet.cssRules || []).forEach((item, index) => {
				if (item.type === CSSRule.IMPORT_RULE) {
					let importIndex = index + 1;
					const url = item.href;
					const deferred = fetchCSS(url).then((metadata) => embedFonts(metadata, options)).then((cssText) => parseCSS(cssText).forEach((rule) => {
						try {
							sheet.insertRule(rule, rule.startsWith("@import") ? importIndex += 1 : sheet.cssRules.length);
						} catch (error) {
							console.error("Error inserting rule from remote css", {
								rule,
								error
							});
						}
					})).catch((e) => {
						console.error("Error loading remote css", e.toString());
					});
					deferreds.push(deferred);
				}
			});
		} catch (e) {
			const inline = styleSheets.find((a) => a.href == null) || document.styleSheets[0];
			if (sheet.href != null) deferreds.push(fetchCSS(sheet.href).then((metadata) => embedFonts(metadata, options)).then((cssText) => parseCSS(cssText).forEach((rule) => {
				inline.insertRule(rule, inline.cssRules.length);
			})).catch((err) => {
				console.error("Error loading remote stylesheet", err);
			}));
			console.error("Error inlining remote css file", e);
		}
	});
	return Promise.all(deferreds).then(() => {
		styleSheets.forEach((sheet) => {
			if ("cssRules" in sheet) try {
				toArray(sheet.cssRules || []).forEach((item) => {
					ret.push(item);
				});
			} catch (e) {
				console.error(`Error while reading CSS rules from ${sheet.href}`, e);
			}
		});
		return ret;
	});
}
function getWebFontRules(cssRules) {
	return cssRules.filter((rule) => rule.type === CSSRule.FONT_FACE_RULE).filter((rule) => shouldEmbed(rule.style.getPropertyValue("src")));
}
async function parseWebFontRules(node, options) {
	if (node.ownerDocument == null) throw new Error("Provided element is not within a Document");
	return getWebFontRules(await getCSSRules(toArray(node.ownerDocument.styleSheets), options));
}
function normalizeFontFamily(font) {
	return font.trim().replace(/["']/g, "");
}
function getUsedFonts(node) {
	const fonts = /* @__PURE__ */ new Set();
	function traverse(node) {
		(node.style.fontFamily || getComputedStyle(node).fontFamily).split(",").forEach((font) => {
			fonts.add(normalizeFontFamily(font));
		});
		Array.from(node.children).forEach((child) => {
			if (child instanceof HTMLElement) traverse(child);
		});
	}
	traverse(node);
	return fonts;
}
async function getWebFontCSS(node, options) {
	const rules = await parseWebFontRules(node, options);
	const usedFonts = getUsedFonts(node);
	return (await Promise.all(rules.filter((rule) => usedFonts.has(normalizeFontFamily(rule.style.fontFamily))).map((rule) => {
		const baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
		return embedResources(rule.cssText, baseUrl, options);
	}))).join("\n");
}
async function embedWebFonts(clonedNode, options) {
	const cssText = options.fontEmbedCSS != null ? options.fontEmbedCSS : options.skipFonts ? null : await getWebFontCSS(clonedNode, options);
	if (cssText) {
		const styleNode = document.createElement("style");
		const sytleContent = document.createTextNode(cssText);
		styleNode.appendChild(sytleContent);
		if (clonedNode.firstChild) clonedNode.insertBefore(styleNode, clonedNode.firstChild);
		else clonedNode.appendChild(styleNode);
	}
}
//#endregion
//#region ../../node_modules/html-to-image/es/index.js
async function toSvg(node, options = {}) {
	const { width, height } = getImageSize(node, options);
	const clonedNode = await cloneNode(node, options, true);
	await embedWebFonts(clonedNode, options);
	await embedImages(clonedNode, options);
	applyStyle(clonedNode, options);
	return await nodeToDataURL(clonedNode, width, height);
}
async function toCanvas(node, options = {}) {
	const { width, height } = getImageSize(node, options);
	const img = await createImage(await toSvg(node, options));
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");
	const ratio = options.pixelRatio || getPixelRatio();
	const canvasWidth = options.canvasWidth || width;
	const canvasHeight = options.canvasHeight || height;
	canvas.width = canvasWidth * ratio;
	canvas.height = canvasHeight * ratio;
	if (!options.skipAutoScale) checkCanvasDimensions(canvas);
	canvas.style.width = `${canvasWidth}`;
	canvas.style.height = `${canvasHeight}`;
	if (options.backgroundColor) {
		context.fillStyle = options.backgroundColor;
		context.fillRect(0, 0, canvas.width, canvas.height);
	}
	context.drawImage(img, 0, 0, canvas.width, canvas.height);
	return canvas;
}
async function toPng(node, options = {}) {
	return (await toCanvas(node, options)).toDataURL();
}
//#endregion
//#region src/components/reports/SaveReportChoose.tsx
function SaveReportChoose({ onApply }) {
	const inputRef = (0, import_react.useRef)(null);
	const [err, setErr] = (0, import_react.useState)("");
	const [value, setValue] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (inputRef.current) inputRef.current.focus();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)($d3e0e05bdfcf66bd$export$a7fed597f4b8afd8, {
		onSubmit: (e) => {
			e.preventDefault();
			if (!value) {
				setErr("Invalid report entered");
				return;
			}
			onApply(value);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					align: "center"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					style: {
						userSelect: "none",
						flex: 1
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Choose Report" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: { flex: 1 } })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenericInput, {
				ref: inputRef,
				field: "report",
				type: "saved",
				value,
				style: { marginTop: 10 },
				onChange: setValue
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					marginTop: 15,
					flexDirection: "row",
					justifyContent: "flex-end",
					alignItems: "center"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "primary",
					type: "submit",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Apply" })
				})
			})
		]
	}), err !== "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			padding: 10,
			alignItems: "center"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: { color: theme.errorText },
			children: err
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {})] });
}
//#endregion
//#region src/components/reports/SaveReportDelete.tsx
function SaveReportDelete({ onDelete, onClose, name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: { align: "center" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: {
				color: theme.errorText,
				marginBottom: 5
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
				"Are you sure you want to delete the report named",
				" '",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					style: { display: "inline" },
					children: { name }
				}),
				"'?"
			] })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
		style: {
			marginTop: 15,
			justifyContent: "flex-end",
			alignItems: "center"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: { flex: 1 } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				autoFocus: true,
				onPress: onDelete,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Yes" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				onPress: onClose,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "No" })
			})
		]
	})] });
}
//#endregion
//#region src/components/reports/SaveReportMenu.tsx
function SaveReportMenu({ onMenuSelect, savedStatus, listReports }) {
	const { t } = useTranslation();
	const savedMenu = savedStatus === "saved" ? [
		{
			name: "rename-report",
			text: t("Rename")
		},
		{
			name: "delete-report",
			text: t("Delete")
		},
		Menu.line
	] : [];
	const modifiedMenu = savedStatus === "modified" ? [
		{
			name: "rename-report",
			text: t("Rename")
		},
		{
			name: "update-report",
			text: t("Update report")
		},
		{
			name: "reload-report",
			text: t("Revert changes")
		},
		{
			name: "delete-report",
			text: t("Delete")
		},
		Menu.line
	] : [];
	const unsavedMenu = [
		{
			name: "save-report",
			text: t("Save new report")
		},
		{
			name: "reset-report",
			text: t("Reset to default")
		},
		Menu.line,
		{
			name: "choose-report",
			text: t("Choose Report"),
			disabled: listReports > 0 ? false : true
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
		onMenuSelect: (item) => {
			onMenuSelect(item);
		},
		items: [
			...savedMenu,
			...modifiedMenu,
			...unsavedMenu
		]
	});
}
//#endregion
//#region src/components/reports/SaveReportName.tsx
function SaveReportName({ menuItem, name, setName, inputRef, onAddUpdate, err, report }) {
	const { t } = useTranslation();
	(0, import_react.useEffect)(() => {
		if (inputRef.current) inputRef.current.focus();
	}, [inputRef]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [menuItem !== "update-report" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)($d3e0e05bdfcf66bd$export$a7fed597f4b8afd8, {
		onSubmit: (e) => {
			e.preventDefault();
			onAddUpdate({
				menuChoice: menuItem ?? void 0,
				reportData: report ?? void 0
			});
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
			style: {
				padding: 15,
				justifyContent: "flex-end",
				alignItems: "center"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormField, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
					title: t("Report Name"),
					htmlFor: "name-field",
					style: { userSelect: "none" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: name,
					id: "name-field",
					ref: inputRef,
					onChangeValue: setName,
					style: { marginTop: 10 }
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				type: "submit",
				style: { marginTop: 30 },
				children: menuItem === "save-report" ? t("Add") : t("Update")
			})]
		})
	}), err !== "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			padding: 10,
			alignItems: "center"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: { color: theme.errorText },
			children: err
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {})] });
}
//#endregion
//#region src/components/reports/SaveReport.tsx
function SaveReportWrapper(props) {
	const { t } = useTranslation();
	const { data = [], isPending } = useDashboardPages();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, { message: t("Loading dashboards...") });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveReport, {
		...props,
		dashboardPages: data
	});
}
function SaveReport({ customReportItems, report, savedStatus, onReportChange, dashboardPages }) {
	const { data: listReports = [] } = useReports();
	const triggerRef = (0, import_react.useRef)(null);
	const [deleteMenuOpen, setDeleteMenuOpen] = (0, import_react.useState)(false);
	const [nameMenuOpen, setNameMenuOpen] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [chooseMenuOpen, setChooseMenuOpen] = (0, import_react.useState)(false);
	const [menuItem, setMenuItem] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	const [newName, setNewName] = (0, import_react.useState)(report.name ?? "");
	const inputRef = (0, import_react.createRef)();
	const { t } = useTranslation();
	const [saveDashboardId, setSaveDashboardId] = (0, import_react.useState)(dashboardPages.length > 0 ? dashboardPages[0].id : null);
	const createReportMutation = useCreateReportMutation();
	const updateReportMutation = useUpdateReportMutation();
	const addDashboardWidgetMutation = useAddDashboardWidgetMutation();
	async function onApply(cond) {
		const chooseSavedReport = listReports.find((r) => cond === r.id);
		onReportChange({
			savedReport: chooseSavedReport,
			type: "choose"
		});
		setChooseMenuOpen(false);
		setNewName(chooseSavedReport === void 0 ? "" : chooseSavedReport.name);
	}
	const onAddUpdate = async ({ menuChoice }) => {
		if (!menuChoice) return null;
		if (menuChoice === "save-report") {
			const newSavedReport = {
				...report,
				...customReportItems,
				name: newName
			};
			if (!saveDashboardId) {
				setErr(t("Please select a dashboard to save the report"));
				return;
			}
			createReportMutation.mutate({ report: newSavedReport }, {
				onSuccess: async (id) => {
					addDashboardWidgetMutation.mutate({ widget: {
						type: "custom-report",
						width: 4,
						height: 2,
						meta: { id },
						dashboard_page_id: saveDashboardId
					} }, { onSuccess: () => {
						setNameMenuOpen(false);
						onReportChange({
							savedReport: {
								...newSavedReport,
								id
							},
							type: "add-update"
						});
					} });
				},
				onError: (error) => {
					setErr(error.message);
					setNameMenuOpen(true);
				}
			});
			return;
		}
		const { name: _name, id: _id, ...props } = customReportItems;
		const updatedReport = {
			...report,
			...menuChoice === "rename-report" ? { name: newName } : props
		};
		updateReportMutation.mutate({ report: updatedReport }, {
			onSuccess: () => {
				setNameMenuOpen(false);
				onReportChange({
					savedReport: updatedReport,
					type: menuChoice === "rename-report" ? "rename" : "add-update"
				});
			},
			onError: (error) => {
				setErr(error.message);
				setNameMenuOpen(true);
			}
		});
	};
	const deleteReportMutation = useDeleteReportMutation();
	const onDelete = async () => {
		deleteReportMutation.mutate({ id: report.id }, { onSuccess: () => {
			setNewName("");
			onReportChange({ type: "reset" });
			setDeleteMenuOpen(false);
		} });
	};
	const onMenuSelect = async (item) => {
		setMenuItem(item);
		switch (item) {
			case "rename-report":
				setErr("");
				setMenuOpen(false);
				setNameMenuOpen(true);
				break;
			case "delete-report":
				setMenuOpen(false);
				setDeleteMenuOpen(true);
				break;
			case "update-report":
				setErr("");
				setMenuOpen(false);
				onAddUpdate({ menuChoice: item });
				break;
			case "save-report":
				setErr("");
				setMenuOpen(false);
				setNameMenuOpen(true);
				break;
			case "reload-report":
				setMenuOpen(false);
				onReportChange({ type: "reload" });
				break;
			case "reset-report":
				setMenuOpen(false);
				setNewName("");
				onReportChange({ type: "reset" });
				break;
			case "choose-report":
				setErr("");
				setMenuOpen(false);
				setChooseMenuOpen(true);
				break;
			default:
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flexDirection: "row",
			alignItems: "center"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				ref: triggerRef,
				variant: "bare",
				onPress: () => {
					setMenuOpen(true);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
						style: {
							maxWidth: 150,
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis",
							flexShrink: 0
						},
						children: [!report.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Unsaved report" }) : report.name, "\xA0"]
					}),
					savedStatus === "modified" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "(modified)" }), "\xA0"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgExpandArrow, {
						width: 8,
						height: 8,
						style: { marginRight: 5 }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
				triggerRef,
				isOpen: menuOpen,
				onOpenChange: () => setMenuOpen(false),
				style: { width: 150 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveReportMenu, {
					onMenuSelect,
					savedStatus,
					listReports: listReports && listReports.length
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
				triggerRef,
				isOpen: nameMenuOpen,
				onOpenChange: () => setNameMenuOpen(false),
				style: { width: 325 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveReportName, {
					menuItem,
					name: newName,
					setName: setNewName,
					inputRef,
					onAddUpdate,
					err
				}), menuItem === "save-report" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpaceBetween, {
					style: {
						padding: 15,
						justifyContent: "flex-end",
						alignItems: "center"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormField, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
							title: t("Dashboard"),
							htmlFor: "dashboard-select",
							style: { userSelect: "none" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							id: "dashboard-select",
							value: saveDashboardId,
							onChange: (v) => setSaveDashboardId(v),
							defaultLabel: t("None"),
							options: dashboardPages.map((d) => [d.id, d.name]),
							style: {
								marginTop: 10,
								width: 300
							}
						})]
					})
				}) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
				triggerRef,
				isOpen: chooseMenuOpen,
				onOpenChange: () => setChooseMenuOpen(false),
				style: { padding: 15 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveReportChoose, { onApply })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
				triggerRef,
				isOpen: deleteMenuOpen,
				onOpenChange: () => setDeleteMenuOpen(false),
				style: {
					width: 275,
					padding: 15
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveReportDelete, {
					onDelete,
					onClose: () => setDeleteMenuOpen(false),
					name: report.name
				})
			})
		]
	});
}
//#endregion
//#region src/components/reports/SnapshotButton.tsx
function SnapshotButton({ selected, children, style, onSelect, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
		placement: "bottom start",
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: title }),
		style: {
			...styles.tooltip,
			lineHeight: 1.5,
			padding: "6px 10px"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			style: {
				...selected && { backgroundColor: theme.buttonBareBackgroundHover },
				...style
			},
			onPress: onSelect,
			"aria-label": title,
			children
		})
	});
}
//#endregion
//#region src/components/reports/ReportTopbar.tsx
function ReportTopbar({ customReportItems, report, savedStatus, setGraphType, viewLegend, viewSummary, viewLabels, onApplyFilter, onChangeViews, onReportChange, isItemDisabled, defaultItems }) {
	const { t } = useTranslation();
	const onChangeGraph = (cond) => {
		setSessionReport("graphType", cond);
		onReportChange({ type: "modify" });
		setGraphType(cond);
		defaultItems(cond);
	};
	const downloadSnapshot = async () => {
		const reportElement = document.getElementById("custom-report-content");
		const title = report.name;
		if (reportElement) {
			const dataUrl = await toPng(reportElement);
			const link = document.createElement("a");
			link.href = dataUrl;
			link.download = `${currentDay()} - ${title}.png`;
			link.click();
		} else console.error("Report container not found.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flexDirection: "row",
			alignItems: "center",
			marginBottom: 10,
			flexShrink: 0,
			overflowY: "auto"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphButton, {
				selected: customReportItems.graphType === "TableGraph",
				title: t("Data Table"),
				onSelect: () => {
					onChangeGraph("TableGraph");
				},
				style: { marginRight: 15 },
				disabled: isItemDisabled("TableGraph"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgQueue, {
					width: 15,
					height: 15
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphButton, {
				title: customReportItems.mode === "total" ? t("Bar Graph") : t("Stacked Bar Graph"),
				selected: customReportItems.graphType === "BarGraph" || customReportItems.graphType === "StackedBarGraph",
				onSelect: () => {
					onChangeGraph(customReportItems.mode === "total" ? "BarGraph" : "StackedBarGraph");
				},
				style: { marginRight: 15 },
				disabled: isItemDisabled(customReportItems.mode === "total" ? "BarGraph" : "StackedBarGraph"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgChartBar, {
					width: 15,
					height: 15
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphButton, {
				title: t("Line Graph"),
				selected: customReportItems.graphType === "LineGraph",
				onSelect: () => {
					onChangeGraph("LineGraph");
				},
				style: { marginRight: 15 },
				disabled: isItemDisabled("LineGraph"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgChart, {
					width: 15,
					height: 15
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphButton, {
				title: t("Area Graph"),
				selected: customReportItems.graphType === "AreaGraph",
				onSelect: () => {
					onChangeGraph("AreaGraph");
				},
				style: { marginRight: 15 },
				disabled: isItemDisabled("AreaGraph"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgChartArea, {
					width: 15,
					height: 15
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphButton, {
				title: t("Donut Graph"),
				selected: customReportItems.graphType === "DonutGraph",
				onSelect: () => {
					onChangeGraph("DonutGraph");
				},
				style: { marginRight: 15 },
				disabled: isItemDisabled("DonutGraph"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgChartPie, {
					width: 15,
					height: 15
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
				width: 1,
				height: 30,
				backgroundColor: theme.pillBorderDark,
				marginRight: 15,
				flexShrink: 0
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphButton, {
				selected: viewLegend,
				onSelect: () => {
					onChangeViews("viewLegend");
				},
				style: { marginRight: 15 },
				title: t("Show Legend"),
				disabled: isItemDisabled("ShowLegend"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgListBullet, {
					width: 15,
					height: 15
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphButton, {
				selected: viewSummary,
				onSelect: () => {
					onChangeViews("viewSummary");
				},
				style: { marginRight: 15 },
				title: t("Show Summary"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCalculator, {
					width: 15,
					height: 15
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphButton, {
				selected: viewLabels,
				onSelect: () => {
					onChangeViews("viewLabels");
				},
				style: { marginRight: 15 },
				title: t("Show Labels"),
				disabled: isItemDisabled("ShowLabels"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgTag, {
					width: 15,
					height: 15
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
				width: 1,
				height: 30,
				backgroundColor: theme.pillBorderDark,
				marginRight: 15,
				flexShrink: 0
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SnapshotButton, {
				style: { marginRight: 15 },
				title: t("Download Snapshot"),
				onSelect: downloadSnapshot,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCamera, {
					width: 15,
					height: 15
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
				width: 1,
				height: 30,
				backgroundColor: theme.pillBorderDark,
				marginRight: 15,
				flexShrink: 0
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
				style: {
					flexWrap: "nowrap",
					justifyContent: "space-between",
					flex: 1
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterButton, {
					compact: true,
					hover: true,
					onApply: (e) => {
						setSessionReport("conditions", [...customReportItems.conditions ?? [], e]);
						onApplyFilter(e);
						onReportChange({ type: "modify" });
					},
					exclude: customReportItems.balanceType === "Budgeted" ? [
						"date",
						"account",
						"payee",
						"notes",
						"amount",
						"cleared",
						"reconciled",
						"transfer",
						"saved"
					] : []
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveReportWrapper, {
					customReportItems,
					report,
					savedStatus,
					onReportChange
				})]
			})
		]
	});
}
//#endregion
//#region src/components/reports/spreadsheets/calculateLegend.ts
function calculateLegend(intervalData, calcDataFiltered, groupBy, graphType, balanceTypeOp) {
	const colorScale = getColorScale("qualitative");
	const chooseData = groupBy === "Interval" ? intervalData.map((c) => {
		return {
			name: c.date,
			id: null,
			data: c
		};
	}) : calcDataFiltered.map((c) => {
		return {
			name: c.name,
			id: c.id,
			data: c
		};
	});
	function getColor(data, index) {
		if (graphType === "DonutGraph") return colorScale[index % colorScale.length];
		if (groupBy === "Interval") {
			if (balanceTypeOp === "totalDebts") return theme.reportsNumberNegative;
			if (balanceTypeOp === "netDebts") return theme.reportsNumberNegative;
			if (balanceTypeOp === "totalTotals" || balanceTypeOp === "totalBudgeted") {
				if ((balanceTypeOp === "totalBudgeted" ? data.totalBudgeted : data.totalTotals) < 0) return theme.reportsNumberNegative;
				return theme.reportsNumberPositive;
			}
			if (balanceTypeOp === "totalAssets" || balanceTypeOp === "netAssets") return theme.reportsNumberPositive;
			return theme.reportsChartFill;
		}
		return colorScale[index % colorScale.length];
	}
	return chooseData.map((item, index) => {
		return {
			id: item.id || "",
			name: item.name || "",
			color: getColor(item.data, index),
			dataKey: item.id || item.name || ""
		};
	});
}
//#endregion
//#region src/components/reports/spreadsheets/budgetDataQuery.ts
async function mapWithConcurrency(items, concurrency, mapper) {
	if (items.length === 0) return [];
	const results = new Array(items.length);
	const safeConcurrency = Math.max(1, Math.min(concurrency, items.length));
	let nextIndex = 0;
	const workers = Array.from({ length: safeConcurrency }, async () => {
		while (true) {
			const currentIndex = nextIndex;
			nextIndex += 1;
			if (currentIndex >= items.length) return;
			results[currentIndex] = await mapper(items[currentIndex], currentIndex);
		}
	});
	await Promise.all(workers);
	return results;
}
function filterCategoriesByConditions(categories, conditions, conditionsOp) {
	if (!conditions || conditions.length === 0) return categories;
	const categoryConditions = conditions.filter((cond) => !cond.customName && cond.field === "category");
	if (categoryConditions.length === 0) return categories;
	const isSupportedCondition = (condition) => {
		if (condition.op === "is" || condition.op === "isNot") return typeof condition.value === "string";
		if (condition.op === "oneOf" || condition.op === "notOneOf") return Array.isArray(condition.value) && condition.value.every((id) => typeof id === "string");
		return false;
	};
	if (!categoryConditions.every(isSupportedCondition)) return categories;
	const evaluateCondition = (category, condition) => {
		if (condition.op === "is") return category.id === condition.value;
		if (condition.op === "isNot") return category.id !== condition.value;
		if (condition.op === "oneOf") return condition.value.includes(category.id);
		if (condition.op === "notOneOf") return !condition.value.includes(category.id);
		return true;
	};
	const op = conditionsOp === "or" ? "or" : "and";
	return categories.filter((cat) => op === "or" ? categoryConditions.some((cond) => evaluateCondition(cat, cond)) : categoryConditions.every((cond) => evaluateCondition(cat, cond)));
}
async function fetchBudgetData({ startDate, endDate, interval, categories, categoryGroups, conditions, conditionsOp, budgetType = "envelope" }) {
	const groupById = new Map(categoryGroups.map((g) => [g.id, g]));
	const assets = [];
	const debts = [];
	const filteredCategories = filterCategoriesByConditions(categories, conditions, conditionsOp);
	const months = rangeInclusive(getMonth(startDate), getMonth(endDate));
	const monthFetchConcurrency = 8;
	const endpointName = budgetType === "tracking" ? "tracking-budget-month" : "envelope-budget-month";
	const monthDataList = await mapWithConcurrency(months, monthFetchConcurrency, async (month) => ({
		month,
		monthData: await send(endpointName, { month })
	}));
	for (const { month, monthData } of monthDataList) {
		const dateKey = interval === "Yearly" ? month.slice(0, 4) : month;
		for (const cat of filteredCategories) {
			if (cat.is_income) continue;
			const budgetCell = monthData.find((cell) => cell.name.endsWith(`budget-${cat.id}`));
			const amount = Number(budgetCell?.value) || 0;
			if (amount === 0) continue;
			const group = cat.group ? groupById.get(cat.group) : void 0;
			const entry = {
				date: dateKey,
				category: cat.id,
				categoryHidden: cat.hidden ?? false,
				categoryGroup: cat.group ?? "",
				categoryGroupHidden: group?.hidden ?? false,
				account: "",
				accountOffBudget: false,
				payee: "",
				transferAccount: "",
				amount
			};
			if (amount > 0) assets.push(entry);
			else debts.push(entry);
		}
	}
	return {
		assets,
		debts
	};
}
//#endregion
//#region src/components/reports/spreadsheets/makeQuery.ts
function makeQuery(name, startDate, endDate, interval, conditionsOpKey, filters) {
	const intervalGroup = interval === "Monthly" ? { $month: "$date" } : interval === "Yearly" ? { $year: "$date" } : { $day: "$date" };
	const intervalFilter = interval === "Weekly" ? "$day" : "$" + ReportOptions.intervalMap.get(interval)?.toLowerCase() || "month";
	return q$1("transactions").filter({ [conditionsOpKey]: filters }).filter({ $and: [{ date: {
		$transform: intervalFilter,
		$gte: startDate
	} }, { date: {
		$transform: intervalFilter,
		$lte: endDate
	} }] }).filter(name === "assets" ? { amount: { $gt: 0 } } : { amount: { $lt: 0 } }).groupBy([
		intervalGroup,
		{ $id: "$account" },
		{ $id: "$payee" },
		{ $id: "$category" },
		{ $id: "$payee.transfer_acct.id" }
	]).select([
		{ date: intervalGroup },
		{ category: { $id: "$category.id" } },
		{ categoryHidden: { $id: "$category.hidden" } },
		{ categoryIncome: { $id: "$category.is_income" } },
		{ categoryGroup: { $id: "$category.group.id" } },
		{ categoryGroupHidden: { $id: "$category.group.hidden" } },
		{ account: { $id: "$account.id" } },
		{ accountOffBudget: { $id: "$account.offbudget" } },
		{ payee: { $id: "$payee.id" } },
		{ transferAccount: { $id: "$payee.transfer_acct.id" } },
		{ amount: { $sum: "$amount" } }
	]);
}
//#endregion
//#region src/components/reports/spreadsheets/fetchSpreadsheetQueryData.ts
async function fetchSpreadsheetQueryData({ balanceTypeOp, startDate, endDate, interval, categories, categoryGroups, conditions, conditionsOp, conditionsOpKey, filters, budgetType }) {
	if (balanceTypeOp === "totalBudgeted") return fetchBudgetData({
		startDate,
		endDate,
		interval,
		categories,
		categoryGroups,
		conditions,
		conditionsOp: conditionsOp === "or" ? "or" : "and",
		budgetType
	});
	const [assets, debts] = await Promise.all([aqlQuery(makeQuery("assets", startDate, endDate, interval, conditionsOpKey, filters)).then(({ data }) => data), aqlQuery(makeQuery("debts", startDate, endDate, interval, conditionsOpKey, filters)).then(({ data }) => data)]);
	return {
		assets,
		debts
	};
}
//#endregion
//#region src/components/reports/spreadsheets/filterEmptyRows.ts
function filterEmptyRows({ showEmpty, data, balanceTypeOp = "totalDebts" }) {
	let showHide;
	if (balanceTypeOp === "totalTotals" || balanceTypeOp === "totalBudgeted") showHide = data["totalDebts"] !== 0 || data["totalAssets"] !== 0 || data[balanceTypeOp] !== 0;
	else showHide = data[balanceTypeOp] !== 0;
	return !showEmpty ? showHide : true;
}
//#endregion
//#region src/components/reports/spreadsheets/filterHiddenItems.ts
function filterHiddenItems(item, data, showOffBudget, showHiddenCategories, showUncategorized, groupByCategory) {
	return data.filter((e) => showHiddenCategories || e.categoryHidden === false && e.categoryGroupHidden === false).filter((e) => showOffBudget || e.accountOffBudget === false).filter((e) => showUncategorized || e.category !== null || e.accountOffBudget === true).filter((query) => {
		if (!groupByCategory) return true;
		const hasCategory = !!query.category;
		const isOffBudget = query.accountOffBudget;
		const isTransfer = !!query.transferAccount;
		if (hasCategory && !isOffBudget) return item.uncategorized_id == null;
		switch (item.uncategorized_id) {
			case "off_budget": return isOffBudget;
			case "transfer": return isTransfer && !isOffBudget;
			case "other": return !isOffBudget && !isTransfer;
			case "all": return true;
			default: return false;
		}
	});
}
//#endregion
//#region src/components/reports/spreadsheets/recalculate.ts
function recalculate$1({ item, intervals, assets, debts, groupByLabel, showOffBudget, showHiddenCategories, showUncategorized, startDate, endDate }) {
	let totalAssets = 0;
	let totalDebts = 0;
	const intervalData = intervals.reduce((arr, intervalItem, index) => {
		const last = arr.length === 0 ? null : arr[arr.length - 1];
		const groupsByCategory = groupByLabel === "category" || groupByLabel === "categoryGroup";
		const intervalAssets = filterHiddenItems(item, assets, showOffBudget, showHiddenCategories, showUncategorized, groupsByCategory).filter((asset) => asset.date === intervalItem && (asset[groupByLabel] === (item.id ?? null) || item.uncategorized_id && groupsByCategory)).reduce((a, v) => a + v.amount, 0);
		totalAssets += intervalAssets;
		const intervalDebts = filterHiddenItems(item, debts, showOffBudget, showHiddenCategories, showUncategorized, groupsByCategory).filter((debt) => debt.date === intervalItem && (debt[groupByLabel] === (item.id ?? null) || item.uncategorized_id && groupsByCategory)).reduce((a, v) => a + v.amount, 0);
		totalDebts += intervalDebts;
		const intervalTotals = intervalAssets + intervalDebts;
		const change = last ? intervalTotals - last.totalTotals : 0;
		arr.push({
			totalAssets: intervalAssets,
			totalDebts: intervalDebts,
			netAssets: intervalTotals > 0 ? intervalTotals : 0,
			netDebts: intervalTotals < 0 ? intervalTotals : 0,
			totalTotals: intervalTotals,
			totalBudgeted: intervalTotals,
			change,
			intervalStartDate: index === 0 ? startDate : intervalItem,
			intervalEndDate: index + 1 === intervals.length ? endDate : subDays(intervals[index + 1], 1)
		});
		return arr;
	}, []);
	const totalTotals = totalAssets + totalDebts;
	return {
		id: item.id || "",
		name: item.name,
		totalAssets,
		totalDebts,
		netAssets: totalTotals > 0 ? totalTotals : 0,
		netDebts: totalTotals < 0 ? totalTotals : 0,
		totalTotals,
		totalBudgeted: totalTotals,
		intervalData
	};
}
//#endregion
//#region src/components/reports/spreadsheets/sortData.ts
var reverseSort = {
	asc: "desc",
	desc: "asc"
};
var balanceTypesToReverse = ["totalDebts", "netDebts"];
var shouldReverse = (balanceTypeOp) => balanceTypesToReverse.includes(balanceTypeOp);
function sortData({ balanceTypeOp, sortByOp }) {
	if (!balanceTypeOp || !sortByOp) return () => 0;
	if (shouldReverse(balanceTypeOp)) sortByOp = reverseSort[sortByOp] ?? sortByOp;
	return (a, b) => {
		let comparison = 0;
		if (sortByOp === "asc") comparison = a[balanceTypeOp] - b[balanceTypeOp];
		else if (sortByOp === "desc") comparison = b[balanceTypeOp] - a[balanceTypeOp];
		else if (sortByOp === "name") comparison = (a.name ?? "").localeCompare(b.name ?? "");
		else if (sortByOp === "budget") comparison = 0;
		return comparison;
	};
}
//#endregion
//#region src/components/reports/spreadsheets/trimIntervals.ts
function isEmptyForMetric(interval, metric) {
	switch (metric) {
		case "totalAssets": return interval.totalAssets === 0;
		case "totalDebts": return interval.totalDebts === 0;
		case "netAssets": return interval.netAssets === 0;
		case "netDebts": return interval.netDebts === 0;
		case "totalTotals": return interval.totalTotals === 0;
		case "totalBudgeted": return interval.totalBudgeted === 0;
		default: return interval.totalTotals === 0;
	}
}
function determineIntervalRange(data, intervalData, trimIntervals, balanceTypeOp = "totalTotals") {
	if (!trimIntervals || intervalData.length === 0) return {
		startIndex: 0,
		endIndex: intervalData.length - 1
	};
	let globalStartIndex = intervalData.length;
	let globalEndIndex = -1;
	data.forEach((item) => {
		const startIndex = item.intervalData.findIndex((interval) => !isEmptyForMetric(interval, balanceTypeOp));
		if (startIndex !== -1) {
			globalStartIndex = Math.min(globalStartIndex, startIndex);
			let endIndex = item.intervalData.length - 1;
			while (endIndex >= 0 && isEmptyForMetric(item.intervalData[endIndex], balanceTypeOp)) endIndex--;
			globalEndIndex = Math.max(globalEndIndex, endIndex);
		}
	});
	const mainStartIndex = intervalData.findIndex((interval) => !isEmptyForMetric(interval, balanceTypeOp));
	if (mainStartIndex !== -1) {
		globalStartIndex = Math.min(globalStartIndex, mainStartIndex);
		let mainEndIndex = intervalData.length - 1;
		while (mainEndIndex >= 0 && isEmptyForMetric(intervalData[mainEndIndex], balanceTypeOp)) mainEndIndex--;
		globalEndIndex = Math.max(globalEndIndex, mainEndIndex);
	}
	if (globalStartIndex === intervalData.length || globalEndIndex === -1) return {
		startIndex: 0,
		endIndex: -1
	};
	return {
		startIndex: globalStartIndex,
		endIndex: globalEndIndex
	};
}
function trimIntervalDataToRange(data, startIndex, endIndex) {
	if (startIndex > endIndex || startIndex < 0 || endIndex >= data.length) return [];
	return data.slice(startIndex, endIndex + 1);
}
function trimIntervalsToRange(data, startIndex, endIndex) {
	data.forEach((item) => {
		if (startIndex > endIndex || startIndex < 0 || endIndex >= item.intervalData.length) item.intervalData = [];
		else item.intervalData = item.intervalData.slice(startIndex, endIndex + 1);
	});
}
function trimGroupedDataIntervals(groupedData, startIndex, endIndex) {
	groupedData.forEach((group) => {
		if (startIndex > endIndex || startIndex < 0 || endIndex >= group.intervalData.length) group.intervalData = [];
		else group.intervalData = group.intervalData.slice(startIndex, endIndex + 1);
		if (group.categories) group.categories.forEach((category) => {
			if (startIndex > endIndex || startIndex < 0 || endIndex >= category.intervalData.length) category.intervalData = [];
			else category.intervalData = category.intervalData.slice(startIndex, endIndex + 1);
		});
	});
}
//#endregion
//#region src/components/reports/spreadsheets/custom-spreadsheet.ts
function createCustomSpreadsheet({ startDate, endDate, interval, categories, budgetType = "envelope", conditions = [], conditionsOp, showEmpty, showOffBudget, showHiddenCategories, showUncategorized, trimIntervals, groupBy = "", balanceTypeOp = "totalDebts", sortByOp = "desc", payees = [], accounts = [], graphType, firstDayOfWeekIdx }) {
	const [categoryList, categoryGroup] = categoryLists(categories);
	const [groupByList, groupByLabel] = groupBySelections(groupBy, categoryList, categoryGroup, payees, accounts);
	return async (spreadsheet, setData) => {
		if (groupByList.length === 0) {
			setData({
				data: [],
				intervalData: [],
				legend: [],
				startDate,
				endDate,
				totalAssets: 0,
				totalDebts: 0,
				netAssets: 0,
				netDebts: 0,
				totalTotals: 0,
				totalBudgeted: 0
			});
			return;
		}
		const { filters } = await send("make-filters-from-conditions", { conditions: conditions.filter((cond) => !cond.customName) });
		const conditionsOpKey = conditionsOp === "or" ? "$or" : "$and";
		let assets;
		let debts;
		({assets, debts} = await fetchSpreadsheetQueryData({
			balanceTypeOp,
			startDate,
			endDate,
			interval,
			categories: categories.list,
			categoryGroups: categories.grouped,
			conditions,
			conditionsOp,
			conditionsOpKey,
			filters,
			budgetType
		}));
		if (interval === "Weekly" && balanceTypeOp !== "totalBudgeted") {
			debts = debts.map((d) => {
				return {
					...d,
					date: weekFromDate(d.date, firstDayOfWeekIdx)
				};
			});
			assets = assets.map((d) => {
				return {
					...d,
					date: weekFromDate(d.date, firstDayOfWeekIdx)
				};
			});
		}
		const intervals = interval === "Weekly" ? weekRangeInclusive(startDate, endDate, firstDayOfWeekIdx) : months_exports[ReportOptions.intervalRange.get(interval) || "rangeInclusive"](startDate, endDate);
		let totalAssets = 0;
		let totalDebts = 0;
		let netAssets = 0;
		let netDebts = 0;
		const groupsByCategory = groupByLabel === "category" || groupByLabel === "categoryGroup";
		const intervalData = intervals.reduce((arr, intervalItem, index) => {
			let perIntervalAssets = 0;
			let perIntervalDebts = 0;
			let perIntervalNetAssets = 0;
			let perIntervalNetDebts = 0;
			let perIntervalTotals = 0;
			const stacked = {};
			groupByList.map((item) => {
				let stackAmounts = 0;
				const intervalAssets = filterHiddenItems(item, assets, showOffBudget, showHiddenCategories, showUncategorized, groupsByCategory).filter((asset) => asset.date === intervalItem && (asset[groupByLabel] === (item.id ?? null) || item.uncategorized_id && groupsByCategory)).reduce((a, v) => a + v.amount, 0);
				perIntervalAssets += intervalAssets;
				const intervalDebts = filterHiddenItems(item, debts, showOffBudget, showHiddenCategories, showUncategorized, groupsByCategory).filter((debt) => debt.date === intervalItem && (debt[groupByLabel] === (item.id ?? null) || item.uncategorized_id && groupsByCategory)).reduce((a, v) => a + v.amount, 0);
				perIntervalDebts += intervalDebts;
				const netAmounts = intervalAssets + intervalDebts;
				if (balanceTypeOp === "totalAssets") stackAmounts += intervalAssets;
				if (balanceTypeOp === "totalDebts") stackAmounts += Math.abs(intervalDebts);
				if (balanceTypeOp === "netAssets") stackAmounts += netAmounts > 0 ? netAmounts : 0;
				if (balanceTypeOp === "netDebts") stackAmounts = netAmounts < 0 ? Math.abs(netAmounts) : 0;
				if (balanceTypeOp === "totalTotals" || balanceTypeOp === "totalBudgeted") stackAmounts += netAmounts;
				stacked[item.id || item.name] = stackAmounts;
				perIntervalTotals += netAmounts;
				return null;
			});
			perIntervalNetAssets = perIntervalTotals > 0 ? perIntervalTotals : 0;
			perIntervalNetDebts = perIntervalTotals < 0 ? perIntervalTotals : 0;
			totalAssets += perIntervalAssets;
			totalDebts += perIntervalDebts;
			netAssets += perIntervalNetAssets;
			netDebts += perIntervalNetDebts;
			arr.push({
				date: format$1(parseISO(intervalItem), ReportOptions.intervalFormat.get(interval) || ""),
				...stacked,
				intervalStartDate: index === 0 ? startDate : intervalItem,
				intervalEndDate: index + 1 === intervals.length ? endDate : subDays(intervals[index + 1], 1),
				totalAssets: perIntervalAssets,
				totalDebts: perIntervalDebts,
				netAssets: perIntervalNetAssets,
				netDebts: perIntervalNetDebts,
				totalTotals: perIntervalTotals,
				totalBudgeted: perIntervalTotals
			});
			return arr;
		}, []);
		const calcDataFiltered = groupByList.map((item) => {
			return { ...recalculate$1({
				item,
				intervals,
				assets,
				debts,
				groupByLabel,
				showOffBudget,
				showHiddenCategories,
				showUncategorized,
				startDate,
				endDate
			}) };
		}).filter((i) => filterEmptyRows({
			showEmpty,
			data: i,
			balanceTypeOp
		}));
		const { startIndex, endIndex } = determineIntervalRange(calcDataFiltered, intervalData, trimIntervals, balanceTypeOp);
		const trimmedIntervalData = trimIntervals ? trimIntervalDataToRange(intervalData, startIndex, endIndex) : intervalData;
		if (trimIntervals) trimIntervalsToRange(calcDataFiltered, startIndex, endIndex);
		const sortedCalcDataFiltered = [...calcDataFiltered].sort(sortData({
			balanceTypeOp,
			sortByOp
		}));
		setData({
			data: sortedCalcDataFiltered,
			intervalData: trimmedIntervalData,
			legend: calculateLegend(trimmedIntervalData, sortedCalcDataFiltered, groupBy, graphType, balanceTypeOp),
			startDate,
			endDate,
			totalAssets,
			totalDebts,
			netAssets,
			netDebts,
			totalTotals: totalAssets + totalDebts,
			totalBudgeted: totalAssets + totalDebts
		});
	};
}
//#endregion
//#region src/components/reports/spreadsheets/grouped-spreadsheet.ts
function createGroupedSpreadsheet({ startDate, endDate, interval, categories, budgetType = "envelope", conditions = [], conditionsOp, showEmpty, showOffBudget, showHiddenCategories, showUncategorized, trimIntervals, balanceTypeOp, sortByOp, firstDayOfWeekIdx }) {
	const [categoryList, categoryGroup] = categoryLists(categories);
	return async (spreadsheet, setData) => {
		if (categoryList.length === 0) {
			setData([]);
			return;
		}
		const { filters } = await send("make-filters-from-conditions", { conditions: conditions.filter((cond) => !cond.customName) });
		const conditionsOpKey = conditionsOp === "or" ? "$or" : "$and";
		let assets;
		let debts;
		({assets, debts} = await fetchSpreadsheetQueryData({
			balanceTypeOp,
			startDate,
			endDate,
			interval,
			categories: categories.list,
			categoryGroups: categories.grouped,
			conditions,
			conditionsOp,
			conditionsOpKey,
			filters,
			budgetType
		}));
		if (interval === "Weekly" && balanceTypeOp !== "totalBudgeted") {
			debts = debts.map((d) => {
				return {
					...d,
					date: weekFromDate(d.date, firstDayOfWeekIdx)
				};
			});
			assets = assets.map((d) => {
				return {
					...d,
					date: weekFromDate(d.date, firstDayOfWeekIdx)
				};
			});
		}
		const intervals = interval === "Weekly" ? weekRangeInclusive(startDate, endDate, firstDayOfWeekIdx) : months_exports[ReportOptions.intervalRange.get(interval) || "rangeInclusive"](startDate, endDate);
		const groupedDataFiltered = categoryGroup.map((group) => {
			const grouped = recalculate$1({
				item: group,
				intervals,
				assets,
				debts,
				groupByLabel: "categoryGroup",
				showOffBudget,
				showHiddenCategories,
				showUncategorized,
				startDate,
				endDate
			});
			const stackedCategories = group.categories && group.categories.map((item) => {
				return { ...recalculate$1({
					item,
					intervals,
					assets,
					debts,
					groupByLabel: "category",
					showOffBudget,
					showHiddenCategories,
					showUncategorized,
					startDate,
					endDate
				}) };
			});
			return {
				...grouped,
				categories: stackedCategories && stackedCategories.filter((i) => filterEmptyRows({
					showEmpty,
					data: i,
					balanceTypeOp
				}))
			};
		}, [startDate, endDate]).filter((i) => filterEmptyRows({
			showEmpty,
			data: i,
			balanceTypeOp
		}));
		const allGroupsForTrimming = [];
		groupedDataFiltered.forEach((group) => {
			allGroupsForTrimming.push(group);
			if (group.categories) allGroupsForTrimming.push(...group.categories);
		});
		const { startIndex, endIndex } = determineIntervalRange(allGroupsForTrimming, groupedDataFiltered.length > 0 ? groupedDataFiltered[0].intervalData : [], trimIntervals, balanceTypeOp);
		trimGroupedDataIntervals(groupedDataFiltered, startIndex, endIndex);
		setData([...groupedDataFiltered].sort(sortData({
			balanceTypeOp,
			sortByOp
		})).map((g) => {
			g.categories = [...g.categories ?? []].sort(sortData({
				balanceTypeOp,
				sortByOp
			}));
			return g;
		}));
	};
}
//#endregion
//#region src/hooks/useReport.ts
function useReport(id) {
	return useQuery({
		...reportQueries.list(),
		select: (reports) => reports.find((report) => report.id === id),
		enabled: !!id
	});
}
//#endregion
//#region src/components/reports/reports/CustomReport.tsx
/**
* Transform `selectedCategories` into `conditions`.
*/
function useSelectedCategories(conditions, categories) {
	const existingCategoryCondition = (0, import_react.useMemo)(() => conditions.find(({ field }) => field === "category"), [conditions]);
	return (0, import_react.useMemo)(() => {
		if (!existingCategoryCondition) return categories;
		switch (existingCategoryCondition.op) {
			case "is": return categories.filter(({ id }) => id === existingCategoryCondition.value);
			case "isNot": return categories.filter(({ id }) => existingCategoryCondition.value !== id);
			case "oneOf": return categories.filter(({ id }) => existingCategoryCondition.value.includes(id));
			case "notOneOf": return categories.filter(({ id }) => !existingCategoryCondition.value.includes(id));
			default: break;
		}
		return categories;
	}, [existingCategoryCondition, categories]);
}
var BUDGETED_SUPPORTED_CONDITION_FIELDS = new Set(["category"]);
function CustomReport() {
	const { data: report, isPending } = useReport(useParams().id);
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomReportInner, {
		report,
		budgetType
	}, report?.id);
}
function CustomReportInner({ report: initialReport, budgetType }) {
	const locale = useLocale();
	const { t } = useTranslation();
	const format$6 = useFormat();
	const { data: categories = {
		grouped: [],
		list: []
	} } = useCategories();
	const { isNarrowWidth } = useResponsive();
	const [_firstDayOfWeekIdx] = useSyncedPref("firstDayOfWeekIdx");
	const firstDayOfWeekIdx = _firstDayOfWeekIdx || "0";
	const [viewLegend = false, setViewLegendPref] = useLocalPref("reportsViewLegend");
	const [viewSummary = false, setViewSummaryPref] = useLocalPref("reportsViewSummary");
	const [viewLabels = false, setViewLabelsPref] = useLocalPref("reportsViewLabel");
	const { conditions, conditionsOp, onApply: onApplyFilter, onDelete: onDeleteFilter, onUpdate: onUpdateFilter, onConditionsOpChange } = useRuleConditionFilters();
	const location = useLocation();
	const prevUrl = sessionStorage.getItem("url") || "";
	sessionStorage.setItem("prevUrl", prevUrl);
	sessionStorage.setItem("url", location.pathname);
	if (prevUrl !== location.pathname) sessionStorage.clear();
	const reportFromSessionStorage = sessionStorage.getItem("report");
	const session = reportFromSessionStorage ? JSON.parse(reportFromSessionStorage) : {};
	const loadReport = {
		...initialReport ?? defaultReport,
		...session
	};
	const [allIntervals, setAllIntervals] = (0, import_react.useState)([]);
	const isComplexCategoryCondition = !!conditions.find(({ field, op }) => field === "category" && [
		"contains",
		"doesNotContain",
		"matches",
		"hasTags"
	].includes(op)) || conditions.filter(({ field }) => field === "category").length >= 2 || conditions.filter(({ field }) => field === "category_group").length >= 1;
	const setSelectedCategories = (newCategories) => {
		const newCategoryIdSet = new Set(newCategories.map(({ id }) => id));
		const allCategoryIds = categories.list.map(({ id }) => id);
		const allCategoriesSelected = !allCategoryIds.find((id) => !newCategoryIdSet.has(id));
		const newCondition = {
			field: "category",
			op: "oneOf",
			value: newCategories.map(({ id }) => id),
			type: "id"
		};
		const existingCategoryCondition = conditions.find(({ field }) => field === "category");
		if (existingCategoryCondition) {
			if (allCategoriesSelected) {
				onDeleteFilter(existingCategoryCondition);
				return;
			}
			if (existingCategoryCondition.op === "notOneOf") {
				onUpdateFilter(existingCategoryCondition, {
					...existingCategoryCondition,
					value: allCategoryIds.filter((id) => !newCategoryIdSet.has(id))
				});
				return;
			}
			onUpdateFilter(existingCategoryCondition, newCondition);
			return;
		}
		if (allCategoriesSelected) return;
		onApplyFilter(newCondition);
	};
	const selectedCategories = useSelectedCategories(conditions, categories.list);
	const [startDate, setStartDate] = (0, import_react.useState)(loadReport.startDate);
	const [endDate, setEndDate] = (0, import_react.useState)(loadReport.endDate);
	const [mode, setMode] = (0, import_react.useState)(loadReport.mode);
	const [isDateStatic, setIsDateStatic] = (0, import_react.useState)(loadReport.isDateStatic);
	const [groupBy, setGroupBy] = (0, import_react.useState)(loadReport.groupBy);
	const [interval, setInterval] = (0, import_react.useState)(loadReport.interval);
	const [balanceType, setBalanceType] = (0, import_react.useState)(loadReport.balanceType);
	const [sortBy, setSortBy] = (0, import_react.useState)(loadReport.sortBy);
	const [showEmpty, setShowEmpty] = (0, import_react.useState)(loadReport.showEmpty);
	const [showOffBudget, setShowOffBudget] = (0, import_react.useState)(loadReport.showOffBudget);
	const [includeCurrentInterval, setIncludeCurrentInterval] = (0, import_react.useState)(loadReport.includeCurrentInterval);
	const [showHiddenCategories, setShowHiddenCategories] = (0, import_react.useState)(loadReport.showHiddenCategories);
	const [showUncategorized, setShowUncategorized] = (0, import_react.useState)(loadReport.showUncategorized);
	const [trimIntervals, setTrimIntervals] = (0, import_react.useState)(loadReport.trimIntervals);
	const [graphType, setGraphType] = (0, import_react.useState)(loadReport.graphType);
	const [dateRange, setDateRange] = (0, import_react.useState)(loadReport.dateRange);
	const dateRangeLine = interval === "Daily" ? 0 : ReportOptions.dateRange.filter((f) => f[interval]).length - 3;
	const [intervals, setIntervals] = (0, import_react.useState)(rangeInclusive(startDate, endDate));
	const [earliestTransactionDate, setEarliestTransactionDate] = (0, import_react.useState)("");
	const [latestTransactionDate, setLatestTransactionDate] = (0, import_react.useState)("");
	const [report, setReport] = (0, import_react.useState)(loadReport);
	const [savedStatus, setSavedStatus] = (0, import_react.useState)("savedStatus" in session ? session.savedStatus : initialReport ? "saved" : "new");
	const onApplyFilterConditions = (0, import_react.useEffectEvent)((currentConditions, currentConditionsOp) => {
		onApplyFilter(null);
		const filtersToApply = savedStatus !== "saved" ? conditions : currentConditions;
		const conditionsOpToApply = savedStatus !== "saved" ? conditionsOp : currentConditionsOp;
		filtersToApply?.forEach(onApplyFilter);
		if (conditionsOpToApply) onConditionsOpChange(conditionsOpToApply);
	});
	const onSetAllIntervals = (0, import_react.useEffectEvent)(async (earliestTransaction, latestTransaction, interval) => {
		const fromDate = interval === "Weekly" ? "dayFromDate" : (ReportOptions.intervalMap.get(interval) || "Day").toLowerCase() + "FromDate";
		const earliestInterval = interval === "Weekly" ? weekFromDate(parseISO(fromDateRepr(earliestTransaction.date || currentDay())), firstDayOfWeekIdx) : months_exports[fromDate](parseISO(fromDateRepr(earliestTransaction.date || currentDay())));
		const latestInterval = interval === "Weekly" ? weekFromDate(parseISO(fromDateRepr(latestTransaction.date || currentDay())), firstDayOfWeekIdx) : months_exports[fromDate](parseISO(fromDateRepr(latestTransaction.date || currentDay())));
		const currentInterval = interval === "Weekly" ? currentWeek(firstDayOfWeekIdx) : interval === "Daily" ? currentDay() : interval === "Yearly" ? currentYear() : currentMonth();
		const maxInterval = latestInterval > currentInterval ? latestInterval : currentInterval;
		setAllIntervals((interval === "Weekly" ? weekRangeInclusive(earliestInterval, maxInterval, firstDayOfWeekIdx) : months_exports[ReportOptions.intervalRange.get(interval) || "rangeInclusive"](earliestInterval, maxInterval)).map((inter) => ({
			name: inter,
			pretty: format(inter, ReportOptions.intervalFormat.get(interval) || "", locale)
		})).reverse());
	});
	const onSetStartAndEndDates = (0, import_react.useEffectEvent)((earliestTransaction, latestTransaction, dateRange, isDateStatic, includeCurrentInterval) => {
		if (!isDateStatic) {
			const [dateStart, dateEnd] = getLiveRange(dateRange, earliestTransaction ? earliestTransaction.date : currentDay(), latestTransaction ? latestTransaction.date : currentDay(), includeCurrentInterval, firstDayOfWeekIdx);
			setStartDate(dateStart);
			setEndDate(dateEnd);
		}
	});
	(0, import_react.useEffect)(() => {
		async function run() {
			onApplyFilterConditions(report.conditions, report.conditionsOp);
			const earliestTransaction = await send("get-earliest-transaction");
			setEarliestTransactionDate(earliestTransaction ? earliestTransaction.date : currentDay());
			const latestTransaction = await send("get-latest-transaction");
			setLatestTransactionDate(latestTransaction ? latestTransaction.date : currentDay());
			onSetAllIntervals(earliestTransaction, latestTransaction, interval);
			onSetStartAndEndDates(earliestTransaction, latestTransaction, dateRange, isDateStatic, includeCurrentInterval);
		}
		run();
	}, [
		interval,
		dateRange,
		firstDayOfWeekIdx,
		isDateStatic,
		report.conditions,
		report.conditionsOp,
		includeCurrentInterval,
		savedStatus
	]);
	(0, import_react.useEffect)(() => {
		const [start, end] = [startDate, endDate];
		if (interval === "Weekly") setIntervals(weekRangeInclusive(start, end, firstDayOfWeekIdx));
		else setIntervals(months_exports[ReportOptions.intervalRange.get(interval) || "rangeInclusive"](start, end));
	}, [
		interval,
		startDate,
		endDate,
		firstDayOfWeekIdx
	]);
	const balanceTypeOp = ReportOptions.balanceTypeMap.get(balanceType) || "totalDebts";
	const sortByOp = sortBy || "desc";
	const { data: payees = [] } = usePayees();
	const { data: accounts = [] } = useAccounts();
	const hasWarning = calculateHasWarning(conditions, {
		categories: categories.list,
		payees,
		accounts
	});
	(0, import_react.useEffect)(() => {
		if (balanceTypeOp !== "totalBudgeted") return;
		const supportedConditions = conditions.filter((cond) => BUDGETED_SUPPORTED_CONDITION_FIELDS.has(cond.field));
		if (supportedConditions.length === conditions.length) return;
		setSessionReport("conditions", supportedConditions);
		onApplyFilter(null);
		supportedConditions.forEach((condition) => {
			onApplyFilter(condition);
		});
	}, [
		balanceTypeOp,
		conditions,
		onApplyFilter
	]);
	const getGroupData = (0, import_react.useMemo)(() => {
		return createGroupedSpreadsheet({
			startDate,
			endDate,
			interval,
			categories,
			budgetType,
			conditions,
			conditionsOp,
			showEmpty,
			showOffBudget,
			showHiddenCategories,
			showUncategorized,
			trimIntervals,
			balanceTypeOp,
			sortByOp,
			firstDayOfWeekIdx
		});
	}, [
		startDate,
		endDate,
		interval,
		budgetType,
		balanceTypeOp,
		categories,
		conditions,
		conditionsOp,
		showEmpty,
		showOffBudget,
		showHiddenCategories,
		showUncategorized,
		trimIntervals,
		sortByOp,
		firstDayOfWeekIdx
	]);
	const graphData = useReport$1("default", (0, import_react.useMemo)(() => {
		return createCustomSpreadsheet({
			startDate,
			endDate,
			interval,
			categories,
			budgetType,
			conditions,
			conditionsOp,
			showEmpty,
			showOffBudget,
			showHiddenCategories,
			showUncategorized,
			trimIntervals,
			groupBy,
			balanceTypeOp,
			sortByOp,
			payees,
			accounts,
			graphType,
			firstDayOfWeekIdx
		});
	}, [
		startDate,
		endDate,
		interval,
		groupBy,
		budgetType,
		balanceTypeOp,
		categories,
		payees,
		accounts,
		conditions,
		conditionsOp,
		showEmpty,
		showOffBudget,
		showHiddenCategories,
		showUncategorized,
		trimIntervals,
		sortByOp,
		graphType,
		firstDayOfWeekIdx
	]));
	const groupedData = useReport$1("grouped", getGroupData);
	const data = graphData ? {
		...graphData,
		groupedData
	} : null;
	const customReportItems = {
		id: "",
		name: "",
		startDate,
		endDate,
		isDateStatic,
		dateRange,
		mode,
		groupBy,
		interval,
		balanceType,
		sortBy,
		showEmpty,
		showOffBudget,
		showHiddenCategories,
		includeCurrentInterval,
		showUncategorized,
		trimIntervals,
		graphType,
		conditions,
		conditionsOp
	};
	const navigate = useNavigate();
	const [, setScrollWidth] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (disabledLegendLabel(mode, graphType, "disableLegend")) setViewLegendPref(false);
		if (disabledLegendLabel(mode, graphType, "disableLabel")) setViewLabelsPref(false);
	}, [
		setViewLegendPref,
		setViewLabelsPref,
		mode,
		graphType
	]);
	if (allIntervals.length === 0) return null;
	const defaultModeItems = (graph, item) => {
		const chooseGraph = graph || graphType;
		const newGraph = ((disabledList.modeGraphsMap.get(item) || []).includes(chooseGraph) ? defaultsList.modeGraphsMap.get(item) : chooseGraph) ?? chooseGraph;
		if ((disabledList.modeGraphsMap.get(item) || []).includes(graphType)) {
			setSessionReport("graphType", newGraph);
			setGraphType(newGraph);
		}
		if ((disabledGraphList(item, newGraph, "disabledSplit") || []).includes(groupBy)) {
			const cond = defaultsGraphList(item, newGraph, "defaultSplit");
			setSessionReport("groupBy", cond);
			setGroupBy(cond);
		}
		if ((disabledGraphList(item, newGraph, "disabledType") || []).includes(balanceType)) {
			const cond = defaultsGraphList(item, newGraph, "defaultType");
			setSessionReport("balanceType", cond);
			setBalanceType(cond);
		}
	};
	const defaultItems = (item) => {
		const chooseGraph = ReportOptions.groupByItems.has(item) ? graphType : item;
		if ((disabledGraphList(mode, chooseGraph, "disabledSplit") || []).includes(groupBy)) {
			const cond = defaultsGraphList(mode, chooseGraph, "defaultSplit");
			setSessionReport("groupBy", cond);
			setGroupBy(cond);
		}
		if ((disabledGraphList(mode, chooseGraph, "disabledType") || []).includes(balanceType)) {
			const cond = defaultsGraphList(mode, chooseGraph, "defaultType");
			setSessionReport("balanceType", cond);
			setBalanceType(cond);
		}
		const defaultSort = defaultsGraphList(mode, chooseGraph, "defaultSort");
		if (defaultSort) {
			setSessionReport("sortBy", defaultSort);
			setSortBy(defaultSort);
		}
	};
	const isItemDisabled = (type) => {
		switch (type) {
			case "ShowLegend": return disabledLegendLabel(mode, graphType, "disableLegend") || false;
			case "ShowLabels": return disabledLegendLabel(mode, graphType, "disableLabel") || false;
			default: return (disabledList.modeGraphsMap.get(mode) || []).includes(type) || false;
		}
	};
	const disabledItems = (type) => {
		switch (type) {
			case "split": return disabledGraphList(mode, graphType, "disabledSplit") || [];
			case "type": return graphType === "BarGraph" && groupBy === "Interval" ? [] : disabledGraphList(mode, graphType, "disabledType") || [];
			default: return [];
		}
	};
	const onChangeDates = (dateStart, dateEnd) => {
		setSessionReport("startDate", dateStart);
		setSessionReport("endDate", dateEnd);
		setStartDate(dateStart);
		setEndDate(dateEnd);
		onReportChange({ type: "modify" });
	};
	const onChangeViews = (viewType) => {
		if (viewType === "viewLegend") setViewLegendPref(!viewLegend);
		if (viewType === "viewSummary") setViewSummaryPref(!viewSummary);
		if (viewType === "viewLabels") setViewLabelsPref(!viewLabels);
	};
	const setReportData = (input) => {
		setStartDate(input.startDate);
		setEndDate(input.endDate);
		setIsDateStatic(input.isDateStatic);
		setDateRange(input.dateRange);
		setMode(input.mode);
		setGroupBy(input.groupBy);
		setInterval(input.interval);
		setBalanceType(input.balanceType);
		setSortBy(input.sortBy);
		setShowEmpty(input.showEmpty);
		setShowOffBudget(input.showOffBudget);
		setShowHiddenCategories(input.showHiddenCategories);
		setIncludeCurrentInterval(input.includeCurrentInterval);
		setShowUncategorized(input.showUncategorized);
		setTrimIntervals(input.trimIntervals);
		setGraphType(input.graphType);
		onApplyFilter(null);
		(input.conditions || []).forEach((condition) => {
			onApplyFilter(condition);
		});
		onConditionsOpChange(input.conditionsOp);
	};
	const onReportChange = (params) => {
		switch (params.type) {
			case "add-update":
				sessionStorage.clear();
				setSessionReport("savedStatus", "saved");
				setSavedStatus("saved");
				setReport(params.savedReport);
				if (params.savedReport.id !== initialReport?.id) navigate(`/reports/custom/${params.savedReport.id}`);
				break;
			case "rename":
				setReport({
					...report,
					name: params.savedReport?.name || ""
				});
				break;
			case "modify":
				if (report.name) {
					setSessionReport("savedStatus", "modified");
					setSavedStatus("modified");
				}
				break;
			case "reload":
				sessionStorage.clear();
				setSessionReport("savedStatus", "saved");
				setSavedStatus("saved");
				setReportData(initialReport ?? defaultReport);
				break;
			case "reset":
				sessionStorage.clear();
				setSavedStatus("new");
				setReport(defaultReport);
				setReportData(defaultReport);
				break;
			case "choose": {
				sessionStorage.clear();
				const newReport = params.savedReport || report;
				setSessionReport("savedStatus", "saved");
				setSavedStatus("saved");
				setReport(newReport);
				setReportData(newReport);
				navigate(`/reports/custom/${newReport.id}`);
				break;
			}
			default:
		}
	};
	const onBackClick = () => {
		navigate("/reports");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: isNarrowWidth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: t("Custom Report: {{name}}", { name: report.name ?? t("Unsaved report") }),
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: onBackClick })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Custom Report:" }) }),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: {
					marginLeft: 5,
					color: theme.pageTextPositive
				},
				children: { name: report.name?.length > 0 ? report.name : t("Unsaved report") }
			})
		] }) }),
		padding: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				flexDirection: "row",
				paddingLeft: !isNarrowWidth ? 20 : void 0,
				flex: 1
			},
			children: [!isNarrowWidth && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportSidebar, {
				customReportItems,
				selectedCategories,
				categories,
				dateRangeLine,
				allIntervals,
				setDateRange,
				setGraphType,
				setGroupBy,
				setInterval,
				setBalanceType,
				setSortBy,
				setMode,
				setIsDateStatic,
				setShowEmpty,
				setShowOffBudget,
				setShowHiddenCategories,
				setIncludeCurrentInterval,
				setShowUncategorized,
				setTrimIntervals,
				setSelectedCategories,
				onChangeDates,
				onReportChange,
				disabledItems,
				defaultItems,
				defaultModeItems,
				earliestTransaction: earliestTransactionDate,
				latestTransaction: latestTransactionDate,
				firstDayOfWeekIdx,
				isComplexCategoryCondition
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: { flex: 1 },
				children: [
					!isNarrowWidth && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportTopbar, {
						customReportItems,
						report,
						savedStatus,
						setGraphType,
						viewLegend,
						viewSummary,
						viewLabels,
						onApplyFilter,
						onChangeViews,
						onReportChange,
						isItemDisabled,
						defaultItems
					}),
					conditions && conditions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: {
							marginBottom: 10,
							marginLeft: 5,
							marginRight: 5,
							gap: 10,
							flexShrink: 0
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								flexShrink: 0,
								flexDirection: "row",
								alignItems: "flex-start",
								justifyContent: "flex-start"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppliedFilters, {
								conditions,
								onUpdate: (oldFilter, newFilter) => {
									setSessionReport("conditions", conditions.map((f) => f === oldFilter ? newFilter : f));
									onReportChange({ type: "modify" });
									onUpdateFilter(oldFilter, newFilter);
								},
								onDelete: (deletedFilter) => {
									setSessionReport("conditions", conditions.filter((f) => f !== deletedFilter));
									onDeleteFilter(deletedFilter);
									onReportChange({ type: "modify" });
								},
								conditionsOp,
								onConditionsOpChange: (co) => {
									onConditionsOpChange(co);
									onReportChange({ type: "modify" });
								}
							})
						}), hasWarning && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Warning, {
							style: {
								paddingTop: 5,
								paddingBottom: 5
							},
							children: t("This report is configured to use a non-existing filter value (i.e. category/account/payee).")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						id: "custom-report-content",
						style: {
							backgroundColor: theme.tableBackground,
							flexDirection: "row",
							flex: "1 0 auto"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: {
								flex: 1,
								padding: 10
							},
							children: [graphType !== "TableGraph" && data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
								style: {
									alignItems: "flex-end",
									paddingTop: 10
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
									style: {
										...styles.mediumText,
										fontWeight: 500,
										marginBottom: 5
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
										left: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, { children: [balanceType, ":"] }),
										right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format$6(data[balanceTypeOp], "financial") }) })
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
								style: {
									flex: 1,
									overflow: "auto"
								},
								children: data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChooseGraph, {
									data,
									filters: conditions,
									mode,
									graphType,
									balanceType,
									groupBy,
									interval,
									setScrollWidth,
									viewLabels,
									compact: false,
									showHiddenCategories,
									showOffBudget,
									intervalsCount: intervals.length
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, { message: t("Loading report...") })
							})]
						}), (viewLegend || viewSummary) && data && !isNarrowWidth && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: {
								padding: 10,
								minWidth: 300,
								textAlign: "center"
							},
							children: [viewSummary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportSummary, {
								startDate,
								endDate,
								balanceTypeOp,
								data,
								interval,
								intervalsCount: intervals.length
							}), viewLegend && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportLegend, {
								legend: data.legend,
								groupBy,
								interval
							})]
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/formula/queryTimeFrame.ts
function isMonthString(dateOrMonth) {
	return dateOrMonth.split("-").length === 2;
}
/**
* Query formulas use day-level filtering in AQL (`$gte/$lte` on YYYY-MM-DD).
* The query editor UI selects months, so we normalize month strings to days.
*/
function normalizeQueryTimeFrameStart(dateOrMonth) {
	return isMonthString(dateOrMonth) ? firstDayOfMonth(dateOrMonth) : dayFromDate(dateOrMonth);
}
function normalizeQueryTimeFrameEnd(dateOrMonth) {
	return isMonthString(dateOrMonth) ? lastDayOfMonth(dateOrMonth) : dayFromDate(dateOrMonth);
}
//#endregion
//#region src/components/formula/QueryManager.tsx
function QueryManager({ queries, onQueriesChange }) {
	const { t } = useTranslation();
	const [newQueryName, setNewQueryName] = (0, import_react.useState)("");
	const [isAddingQuery, setIsAddingQuery] = (0, import_react.useState)(false);
	const dispatch = useDispatch();
	function handleAddQuery() {
		if (!newQueryName.trim()) return;
		if (queries[newQueryName]) {
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Query with this name already exists")
			} }));
			return;
		}
		onQueriesChange({
			...queries,
			[newQueryName]: {
				conditions: [],
				conditionsOp: "and",
				timeFrame: {
					start: firstDayOfMonth(currentDay()),
					end: currentDay(),
					mode: "sliding-window"
				}
			}
		});
		setNewQueryName("");
		setIsAddingQuery(false);
	}
	function handleRemoveQuery(queryName) {
		const newQueries = { ...queries };
		delete newQueries[queryName];
		onQueriesChange(newQueries);
	}
	function handleUpdateQuery(queryName, config) {
		onQueriesChange({
			...queries,
			[queryName]: config
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			padding: 20,
			flex: 1,
			minWidth: 400
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: 16
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					style: {
						fontSize: 18,
						fontWeight: 600
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Query Definitions" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "primary",
					onPress: () => setIsAddingQuery(!isAddingQuery),
					children: isAddingQuery ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Cancel" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Add Query" })
				})]
			}),
			isAddingQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					padding: 16,
					border: `1px solid ${theme.tableBorder}`,
					borderRadius: 4,
					marginBottom: 16,
					backgroundColor: theme.tableBackground
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						display: "flex",
						flexDirection: "row",
						gap: 8
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: t("Query name (e.g., 'expenses', 'income')"),
						value: newQueryName,
						onChange: (e) => setNewQueryName(e.target.value),
						onKeyDown: (e) => {
							if (e.key === "Enter") handleAddQuery();
						},
						style: { flex: 1 }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "primary",
						onPress: handleAddQuery,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Create" })
					})]
				})
			}),
			Object.entries(queries).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					padding: 32,
					textAlign: "center",
					color: theme.pageTextSubdued,
					border: `1px dashed ${theme.tableBorder}`,
					borderRadius: 4,
					maxWidth: 400
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "No queries defined. Click 'Add Query' to create your first query." }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					style: {
						fontSize: 12,
						marginTop: 8
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Queries allow you to reference filtered transaction data in your formulas using QUERY('queryName') or QUERY_COUNT('queryName')" })
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: { display: "block" },
				children: Object.entries(queries).map(([queryName, config]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryItem, {
					queryName,
					defaultConfig: config,
					onUpdate: (newConfig) => handleUpdateQuery(queryName, newConfig),
					onRemove: () => handleRemoveQuery(queryName)
				}, queryName))
			})
		]
	});
}
function QueryItem({ queryName, defaultConfig, onUpdate, onRemove }) {
	const locale = useLocale();
	const { t } = useTranslation();
	const [importJsonText, setImportJsonText] = (0, import_react.useState)("");
	const dispatch = useDispatch();
	const timeRangeMenuTriggerRef = (0, import_react.useRef)(null);
	const [timeRangeMenuOpen, setTimeRangeMenuOpen] = (0, import_react.useState)(false);
	const [startDate, setStartDate] = (0, import_react.useState)(defaultConfig.timeFrame?.start || dayFromDate(currentMonth()));
	const [endDate, setEndDate] = (0, import_react.useState)(defaultConfig.timeFrame?.end || currentDay());
	const [allMonths, setAllMonths] = (0, import_react.useState)([]);
	const [_earliestTransaction, setEarliestTransaction] = (0, import_react.useState)("");
	const [_latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const timeRangeRef = (0, import_react.useRef)(defaultConfig.timeFrame?.mode || "sliding-window");
	const conditionsRef = (0, import_react.useRef)(defaultConfig.conditions || []);
	const conditionsOpRef = (0, import_react.useRef)(defaultConfig.conditionsOp || null);
	(0, import_react.useEffect)(() => {
		if (conditionsRef.current.length === 0) conditionsRef.current = defaultConfig.conditions || [];
		if (conditionsOpRef.current === null) conditionsOpRef.current = defaultConfig.conditionsOp || "and";
	}, [defaultConfig]);
	(0, import_react.useEffect)(() => {
		async function run() {
			const earliestTransaction = await send("get-earliest-transaction");
			setEarliestTransaction(earliestTransaction ? earliestTransaction.date : currentDay());
			const latestTransaction = await send("get-latest-transaction");
			setLatestTransaction(latestTransaction ? latestTransaction.date : currentDay());
			const currentMonth$7 = currentMonth();
			let earliestMonth = earliestTransaction ? monthFromDate(parseISO(fromDateRepr(earliestTransaction.date))) : currentMonth$7;
			const latestMonth = latestTransaction ? monthFromDate(parseISO(fromDateRepr(latestTransaction.date))) : currentMonth$7;
			const yearAgo = subMonths(latestMonth, 12);
			if (earliestMonth > yearAgo) earliestMonth = yearAgo;
			setAllMonths(rangeInclusive(earliestMonth, latestMonth).map((month) => ({
				name: month,
				pretty: format(month, "MMMM yyyy", locale)
			})).reverse());
		}
		run();
	}, [locale]);
	const filters = useRuleConditionFilters(conditionsRef.current, conditionsOpRef.current ?? "and");
	const prevFiltersRef = (0, import_react.useRef)({
		conditions: filters.conditions,
		conditionsOp: filters.conditionsOp,
		startDate,
		endDate
	});
	const sendUpdate = (0, import_react.useCallback)((conditions = filters.conditions, conditionsOp = filters.conditionsOp, newStartDate = startDate, newEndDate = endDate, mode = timeRangeRef.current) => {
		timeRangeRef.current = mode;
		onUpdate({
			conditions,
			conditionsOp,
			timeFrame: {
				start: newStartDate,
				end: newEndDate,
				mode
			}
		});
	}, [
		filters.conditions,
		filters.conditionsOp,
		timeRangeRef,
		startDate,
		endDate,
		onUpdate
	]);
	(0, import_react.useEffect)(() => {
		const prev = prevFiltersRef.current;
		const conditionsChanged = JSON.stringify(prev.conditions) !== JSON.stringify(filters.conditions);
		const conditionsOpChanged = prev.conditionsOp !== filters.conditionsOp;
		if (conditionsChanged || conditionsOpChanged) {
			prevFiltersRef.current = {
				conditions: filters.conditions,
				conditionsOp: filters.conditionsOp,
				startDate,
				endDate
			};
			sendUpdate();
		}
	}, [
		filters.conditions,
		filters.conditionsOp,
		startDate,
		endDate,
		sendUpdate
	]);
	function handleStartDateChange(newStart) {
		setStartDate(normalizeQueryTimeFrameStart(newStart));
		sendUpdate(filters.conditions, filters.conditionsOp, normalizeQueryTimeFrameStart(newStart), endDate, timeRangeRef.current);
	}
	function handleEndDateChange(newEnd) {
		setEndDate(normalizeQueryTimeFrameEnd(newEnd));
		sendUpdate(filters.conditions, filters.conditionsOp, startDate, normalizeQueryTimeFrameEnd(newEnd), timeRangeRef.current);
	}
	async function handleExport() {
		const config = {
			conditions: filters.conditions,
			conditionsOp: filters.conditionsOp,
			timeFrame: {
				start: startDate,
				end: endDate,
				mode: timeRangeRef.current
			}
		};
		const jsonString = JSON.stringify(config, null, 2);
		try {
			await navigator.clipboard.writeText(jsonString);
			dispatch(addNotification({ notification: {
				type: "message",
				message: t("Query configuration copied to clipboard")
			} }));
		} catch {
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Failed to copy to clipboard")
			} }));
		}
	}
	function handleImport() {
		try {
			const config = JSON.parse(importJsonText);
			if (config.conditions && config.conditionsOp && config.timeFrame) {
				conditionsRef.current = config.conditions;
				conditionsOpRef.current = config.conditionsOp;
				timeRangeRef.current = config.timeFrame.mode;
				setStartDate(config.timeFrame.start ? normalizeQueryTimeFrameStart(config.timeFrame.start) : dayFromDate(currentMonth()));
				setEndDate(config.timeFrame.end ? normalizeQueryTimeFrameEnd(config.timeFrame.end) : currentDay());
				sendUpdate(config.conditions, config.conditionsOp, normalizeQueryTimeFrameStart(config.timeFrame.start), normalizeQueryTimeFrameEnd(config.timeFrame.end), config.timeFrame.mode);
				setImportJsonText("");
			} else dispatch(addNotification({ notification: {
				type: "error",
				message: t("Invalid JSON. Please check your input.")
			} }));
		} catch {
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Invalid JSON. Please check your input.")
			} }));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			padding: 16,
			marginBottom: 16,
			border: `1px solid ${theme.tableBorder}`,
			borderRadius: 4,
			backgroundColor: theme.tableBackground,
			display: "block",
			flex: 1
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: 12
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: {
						display: "flex",
						flexDirection: "row",
						gap: 8,
						alignItems: "center"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							fontWeight: 600,
							fontFamily: "monospace"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
							"QUERY('",
							queryName,
							"')"
						] })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: {
						display: "flex",
						flexDirection: "row",
						gap: 8,
						justifyContent: "flex-end",
						alignItems: "center"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: {
							display: "flex",
							flexDirection: "row",
							gap: 4
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "bare",
								onPress: handleExport,
								"aria-label": t("Export query configuration"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCopy, { style: {
									width: 13,
									height: 13
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)($de32f1b87079253c$export$2e1e1122cf0cba88, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "bare",
								"aria-label": t("Import query configuration"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgDownloadThickBottom, { style: {
									width: 13,
									height: 13
								} })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)($de32f1b87079253c$export$3ddf2d174ce01153, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
								style: {
									padding: 16,
									minWidth: 400
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: {
											fontSize: 14,
											fontWeight: 600,
											marginBottom: 12
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Import Query Configuration" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: {
											fontSize: 12,
											color: theme.pageTextSubdued,
											marginBottom: 8
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Paste the JSON configuration below:" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: importJsonText,
										onChange: (e) => setImportJsonText(e.target.value),
										placeholder: JSON.stringify({
											conditions: [],
											conditionsOp: "and",
											timeFrame: {
												start: "",
												end: "",
												mode: "sliding-window"
											}
										}, null, 2),
										style: {
											width: "100%",
											height: 200,
											padding: 8,
											border: `1px solid ${theme.formInputBorder}`,
											borderRadius: 4,
											backgroundColor: theme.tableBackground,
											color: theme.formInputText,
											fontFamily: "monospace",
											fontSize: 12,
											resize: "vertical",
											outline: "none"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
										style: {
											display: "flex",
											flexDirection: "row",
											gap: 8,
											marginTop: 12,
											justifyContent: "flex-end"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "bare",
											slot: "close",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Cancel" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "primary",
											onPress: handleImport,
											slot: "close",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Import" })
										})]
									})
								]
							}) }) })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "bare",
								onPress: onRemove,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgTrash, { style: {
									width: 13,
									height: 13
								} })
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: { marginBottom: 12 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-end",
						gap: 8,
						marginTop: 16
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							style: { width: 50 },
							variant: timeRangeRef.current === "static" ? "normal" : "primary",
							onPress: () => {
								const newMode = timeRangeRef.current === "static" ? "sliding-window" : "static";
								const [newStart, newEnd] = calculateTimeRange({
									start: startDate,
									end: endDate,
									mode: newMode
								});
								setStartDate(newStart);
								setEndDate(newEnd);
								timeRangeRef.current = newMode;
								sendUpdate(filters.conditions, filters.conditionsOp, newStart, newEnd, newMode);
							},
							children: timeRangeRef.current === "static" ? t("Static") : t("Live")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							ref: timeRangeMenuTriggerRef,
							variant: "bare",
							onPress: () => setTimeRangeMenuOpen(true),
							children: "⋮"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
							triggerRef: timeRangeMenuTriggerRef,
							placement: "bottom start",
							isOpen: timeRangeMenuOpen,
							onOpenChange: () => setTimeRangeMenuOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								onMenuSelect: (item) => {
									let start, end, mode;
									const currentMode = timeRangeRef.current;
									const quickSelectMode = ["static", "sliding-window"].includes(currentMode) ? currentMode : "sliding-window";
									switch (item) {
										case "last-month": {
											const prevMonth = subMonths(currentMonth(), 1);
											start = firstDayOfMonth(prevMonth);
											end = lastDayOfMonth(prevMonth);
											mode = "lastMonth";
											break;
										}
										case "1-month": {
											const [startMonth, endMonth] = getLatestRange(0);
											start = firstDayOfMonth(startMonth);
											end = lastDayOfMonth(endMonth);
											mode = quickSelectMode;
											break;
										}
										case "3-months": {
											const [startMonth, endMonth] = getLatestRange(2);
											start = firstDayOfMonth(startMonth);
											end = lastDayOfMonth(endMonth);
											mode = quickSelectMode;
											break;
										}
										case "6-months": {
											const [startMonth, endMonth] = getLatestRange(5);
											start = firstDayOfMonth(startMonth);
											end = lastDayOfMonth(endMonth);
											mode = quickSelectMode;
											break;
										}
										case "1-year": {
											const [startMonth, endMonth] = getLatestRange(11);
											start = firstDayOfMonth(startMonth);
											end = lastDayOfMonth(endMonth);
											mode = quickSelectMode;
											break;
										}
										case "year-to-date":
											[start, end] = getLiveRange("Year to date", _earliestTransaction, _latestTransaction, true);
											mode = "yearToDate";
											break;
										case "last-year":
											[start, end] = getLiveRange("Last year", _earliestTransaction, _latestTransaction, false);
											mode = "lastYear";
											break;
										case "prior-year-to-date":
											[start, end] = getLiveRange("Prior year to date", _earliestTransaction, _latestTransaction, false);
											mode = "priorYearToDate";
											break;
										case "all-time":
											[start, end] = getLiveRange("All time", _earliestTransaction, _latestTransaction, true);
											mode = "full";
											break;
										default: return;
									}
									setStartDate(start);
									setEndDate(end);
									timeRangeRef.current = mode;
									sendUpdate(filters.conditions, filters.conditionsOp, start, end, mode);
									setTimeRangeMenuOpen(false);
								},
								items: [
									{
										name: "1-month",
										text: t("1 month")
									},
									{
										name: "3-months",
										text: t("3 months")
									},
									{
										name: "6-months",
										text: t("6 months")
									},
									{
										name: "1-year",
										text: t("1 year")
									},
									Menu.line,
									{
										name: "year-to-date",
										text: t("Year to date")
									},
									{
										name: "last-month",
										text: t("Last month")
									},
									{
										name: "last-year",
										text: t("Last year")
									},
									{
										name: "prior-year-to-date",
										text: t("Prior year to date")
									},
									{
										name: "all-time",
										text: t("All time")
									}
								]
							})
						})
					]
				}), allMonths.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						display: "flex",
						flexDirection: "row",
						gap: 10,
						marginTop: 8,
						alignItems: "center"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: fromDateRepr(startDate),
							onChange: (newValue) => {
								const [validatedStart] = validateStart(allMonths[allMonths.length - 1].name, allMonths[0].name, newValue, fromDateRepr(endDate));
								handleStartDateChange(validatedStart);
							},
							options: allMonths.map(({ name, pretty }) => [name, pretty]),
							style: { flex: 1 }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: {
								fontSize: 12,
								color: theme.pageTextSubdued
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "to" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: fromDateRepr(endDate),
							onChange: (newValue) => {
								const [, validatedEnd] = validateEnd(allMonths[allMonths.length - 1].name, allMonths[0].name, fromDateRepr(startDate), newValue);
								handleEndDateChange(validatedEnd);
							},
							options: allMonths.map(({ name, pretty }) => [name, pretty]),
							style: { flex: 1 }
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					marginBottom: 8,
					flex: 1
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					style: {
						fontSize: 12,
						fontWeight: 500,
						marginBottom: 6,
						color: theme.pageTextSubdued
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Filters:" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 8,
						maxWidth: 400,
						flex: 1
					},
					children: [filters.conditions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppliedFilters, {
						conditions: filters.conditions,
						onUpdate: filters.onUpdate,
						onDelete: filters.onDelete,
						conditionsOp: filters.conditionsOp,
						onConditionsOpChange: filters.onConditionsOpChange,
						style: { maxWidth: "100%" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterButton, {
						compact: false,
						onApply: filters.onApply,
						hover: false
					})]
				})]
			})
		]
	});
}
//#endregion
//#region src/components/reports/FormulaResult.tsx
var import_debounce = /* @__PURE__ */ __toESM(require_debounce());
var FONT_SIZE_SCALE_FACTOR$1 = 1.6;
var CONTAINER_MARGIN$1 = 8;
function FormulaResult({ value, animate = false, loading = true, error = null, initialFontSize = 14, fontSizeChanged, fontSizeMode = "dynamic", staticFontSize = 32, customColor = null, containerRef }) {
	const [fontSize, setFontSize] = (0, import_react.useState)(initialFontSize);
	const [hasSized, setHasSized] = (0, import_react.useState)(false);
	const refDiv = (0, import_react.useRef)(null);
	const previousFontSizeRef = (0, import_react.useRef)(initialFontSize);
	const format = useFormat();
	const displayValue = (0, import_react.useMemo)(() => {
		if (error) return error;
		else if (value === null || value === void 0) return "";
		else if (typeof value === "number") return format(amountToInteger(value, format.currency.decimalPlaces), "financial");
		else return String(value);
	}, [
		error,
		value,
		format
	]);
	const calculateFontSize = (0, import_react.useCallback)(() => {
		if (!refDiv.current) return;
		const { clientWidth, clientHeight } = containerRef?.current || refDiv.current.parentElement || refDiv.current;
		const width = clientWidth;
		const height = clientHeight - CONTAINER_MARGIN$1 * 2;
		if (width <= 0 || height <= 0) return;
		const valueLength = displayValue.length || 1;
		const calculatedFontSize = Math.min(width * FONT_SIZE_SCALE_FACTOR$1 / valueLength, height);
		if (calculatedFontSize > 0) {
			setFontSize(calculatedFontSize);
			setHasSized(true);
		}
		if (fontSizeChanged && Math.abs(calculatedFontSize - previousFontSizeRef.current) > .5) {
			previousFontSizeRef.current = calculatedFontSize;
			fontSizeChanged(calculatedFontSize);
		}
	}, [
		displayValue,
		fontSizeChanged,
		containerRef
	]);
	const debouncedCalculateFontSize = (0, import_react.useRef)((0, import_debounce.default)(() => {
		if (fontSizeMode === "dynamic") calculateFontSize();
	}, 100));
	(0, import_react.useEffect)(() => {
		debouncedCalculateFontSize.current.cancel?.();
		debouncedCalculateFontSize.current = (0, import_debounce.default)(() => {
			if (fontSizeMode === "dynamic") calculateFontSize();
		}, 100);
		return () => {
			debouncedCalculateFontSize.current.cancel?.();
		};
	}, [calculateFontSize, fontSizeMode]);
	const mergedRef = useMergedRefs(useResizeObserver(() => {
		if (fontSizeMode === "dynamic") debouncedCalculateFontSize.current();
	}), refDiv);
	(0, import_react.useEffect)(() => {
		if (fontSizeMode === "dynamic") calculateFontSize();
	}, [
		displayValue,
		calculateFontSize,
		fontSizeMode
	]);
	(0, import_react.useEffect)(() => {
		if (fontSizeMode === "static") {
			setFontSize(staticFontSize);
			setHasSized(true);
		}
	}, [fontSizeMode, staticFontSize]);
	const color = customColor ? customColor : error ? theme.errorText : theme.pageText;
	const showContent = hasSized || fontSizeMode === "static";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: { flex: 1 },
		children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {}), !loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			ref: mergedRef,
			"aria-label": displayValue,
			style: {
				alignItems: "center",
				flexGrow: 1,
				flexShrink: 1,
				width: "100%",
				height: "100%",
				maxWidth: "100%",
				fontSize,
				lineHeight: 1,
				margin: `${CONTAINER_MARGIN$1}px 0`,
				justifyContent: "center",
				transition: animate ? "font-size 0.3s ease" : "",
				color
			},
			children: !showContent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: displayValue })
			})
		})]
	});
}
//#endregion
//#region src/hooks/useFormulaExecution.ts
function escapeRegExp(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function parseBudgetParam(param) {
	param = param.trim();
	const extractMatch = param.match(/^(QUERY_EXTRACT_\w+)\s*\(\s*["']([^"']+)["']\s*\)$/);
	if (extractMatch) return {
		type: "extraction",
		data: {
			funcName: extractMatch[1],
			queryName: extractMatch[2]
		}
	};
	const arrayMatch = param.match(/^\{([^}]*)\}$/);
	if (arrayMatch) return {
		type: "literal",
		data: arrayMatch[1].split(";").map((item) => item.replace(/^["']|["']$/g, "").trim()).filter((item) => item.length > 0)
	};
	const stringMatch = param.match(/^["']([^"']*)["']$/);
	if (stringMatch) return {
		type: "literal",
		data: stringMatch[1]
	};
	return null;
}
function resolveBudgetParam(parsed, extractionResults) {
	if (!parsed || parsed.type === "literal") return parsed?.data;
	const { funcName, queryName } = parsed.data;
	return extractionResults[funcName]?.[`${funcName}(${queryName})`];
}
function useFormulaExecution(formula, queries, queriesVersion, namedExpressions) {
	const locale = useLocale();
	const [result, setResult] = (0, import_react.useState)(null);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		async function executeFormula() {
			let hfInstance = null;
			if (!formula || !formula.startsWith("=")) {
				setResult(null);
				setError("Formula must start with =");
				return;
			}
			setIsLoading(true);
			setError(null);
			try {
				const queryMatches = Array.from(formula.matchAll(/QUERY\s*\(\s*["']([^"']+)["']\s*\)/gi));
				const queryCountMatches = Array.from(formula.matchAll(/QUERY_COUNT\s*\(\s*["']([^"']+)["']\s*\)/gi));
				const queryData = {};
				const queryCountData = {};
				const queryNames = Array.from(new Set(queryMatches.map((m) => m[1])));
				const queryCountNames = Array.from(new Set(queryCountMatches.map((m) => m[1])));
				const extractionFunctions = {
					QUERY_EXTRACT_CATEGORIES: /QUERY_EXTRACT_CATEGORIES\s*\(\s*["']([^"']+)["']\s*\)/gi,
					QUERY_EXTRACT_TIMEFRAME_START: /QUERY_EXTRACT_TIMEFRAME_START\s*\(\s*["']([^"']+)["']\s*\)/gi,
					QUERY_EXTRACT_TIMEFRAME_END: /QUERY_EXTRACT_TIMEFRAME_END\s*\(\s*["']([^"']+)["']\s*\)/gi
				};
				const extractionResults = {
					QUERY_EXTRACT_CATEGORIES: {},
					QUERY_EXTRACT_TIMEFRAME_START: {},
					QUERY_EXTRACT_TIMEFRAME_END: {}
				};
				for (const [funcName, regex] of Object.entries(extractionFunctions)) {
					const matches = Array.from(formula.matchAll(regex));
					for (const match of matches) {
						const queryName = match[1];
						const key = `${funcName}(${queryName})`;
						if (!extractionResults[funcName][key]) try {
							if (funcName === "QUERY_EXTRACT_CATEGORIES") extractionResults[funcName][key] = await extractQueryCategories(queryName, queries);
							else if (funcName === "QUERY_EXTRACT_TIMEFRAME_START") extractionResults[funcName][key] = await extractQueryTimeframeStart(queryName, queries);
							else if (funcName === "QUERY_EXTRACT_TIMEFRAME_END") extractionResults[funcName][key] = await extractQueryTimeframeEnd(queryName, queries);
						} catch (err) {
							console.error(`Error evaluating ${funcName}(${queryName})`, err);
							extractionResults[funcName][key] = null;
						}
					}
				}
				const paramPattern = String.raw`(?:QUERY_EXTRACT_\w+\s*\([^)]*\)|\{[^}]*\}|["'][^"']*["'])`;
				const budgetMatches = Array.from(formula.matchAll(new RegExp(`BUDGET_QUERY\\s*\\(\\s*["']([^"']+)["']\\s*,\\s*(${paramPattern})\\s*,\\s*(${paramPattern})\\s*,\\s*(${paramPattern})\\s*\\)`, "gi")));
				for (const queryName of queryNames) {
					const queryConfig = queries[queryName];
					if (!queryConfig) {
						console.warn(`Query "${queryName}" not found in queries config`);
						queryData[queryName] = 0;
						continue;
					}
					queryData[queryName] = integerToAmount(await fetchQuerySum(queryConfig), 2);
				}
				for (const queryName of queryCountNames) {
					const queryConfig = queries[queryName];
					if (!queryConfig) {
						console.warn(`Query "${queryName}" not found in queries config`);
						queryCountData[queryName] = 0;
						continue;
					}
					queryCountData[queryName] = await fetchQueryCount(queryConfig);
				}
				let processedFormula = formula;
				for (const [queryName, value] of Object.entries(queryData)) {
					const regex = new RegExp(`QUERY\\s*\\(\\s*["']${escapeRegExp(queryName)}["']\\s*\\)`, "gi");
					processedFormula = processedFormula.replace(regex, String(value));
				}
				for (const [queryName, value] of Object.entries(queryCountData)) {
					const regex = new RegExp(`QUERY_COUNT\\s*\\(\\s*["']${escapeRegExp(queryName)}["']\\s*\\)`, "gi");
					processedFormula = processedFormula.replace(regex, String(value));
				}
				if (budgetMatches.length > 0) for (const match of budgetMatches) {
					const dimension = match[1];
					const param1Str = match[2].trim();
					const param2Str = match[3].trim();
					const param3Str = match[4].trim();
					try {
						const param1 = resolveBudgetParam(parseBudgetParam(param1Str), extractionResults);
						const param2 = resolveBudgetParam(parseBudgetParam(param2Str), extractionResults);
						const param3 = resolveBudgetParam(parseBudgetParam(param3Str), extractionResults);
						if (!Array.isArray(param1) || typeof param2 !== "string" || typeof param3 !== "string") {
							console.error("Failed to resolve BUDGET_QUERY parameters:", param1Str, param2Str, param3Str);
							continue;
						}
						const val = await fetchBudgetDimensionValueDirect(dimension, param1, param2, param3);
						processedFormula = processedFormula.replace(match[0], String(val));
					} catch (err) {
						console.error("Error evaluating BUDGET_QUERY", err);
					}
				}
				for (const [funcName, regex] of Object.entries(extractionFunctions)) {
					const matches = Array.from(processedFormula.matchAll(regex));
					for (const match of matches) {
						const queryName = match[1];
						const key = `${funcName}(${queryName})`;
						const value = extractionResults[funcName][key];
						if (value !== null && value !== void 0) {
							const escapedQueryName = escapeRegExp(queryName);
							const replacementRegex = new RegExp(`${funcName}\\s*\\(\\s*["']${escapedQueryName}["']\\s*\\)`, "gi");
							let replacement;
							if (Array.isArray(value)) replacement = `{${value.map((v) => `"${v}"`).join(";")}}`;
							else if (typeof value === "string") replacement = `"${value}"`;
							else replacement = String(value);
							processedFormula = processedFormula.replace(replacementRegex, replacement);
						}
					}
				}
				hfInstance = HyperFormula.buildEmpty({
					licenseKey: "gpl-v3",
					language: "enUS",
					localeLang: typeof locale === "string" ? locale : "en-US",
					dateFormats: [
						"DD/MM/YYYY",
						"YYYY-MM-DD",
						"YYYY/MM/DD"
					]
				});
				const sheetName = hfInstance.addSheet("Sheet1");
				const sheetId = hfInstance.getSheetId(sheetName);
				if (sheetId === void 0) throw new Error("Failed to create sheet");
				if (namedExpressions) for (const [name, value] of Object.entries(namedExpressions)) hfInstance.addNamedExpression(name, typeof value === "number" ? value : String(value));
				hfInstance.setCellContents({
					sheet: sheetId,
					col: 0,
					row: 0
				}, [[processedFormula]]);
				const cellValue = hfInstance.getCellValue({
					sheet: sheetId,
					col: 0,
					row: 0
				});
				if (cancelled) return;
				if (cellValue && typeof cellValue === "object" && "type" in cellValue) {
					setError(`Formula error: ${cellValue.type}`);
					setResult(null);
				} else {
					setResult(cellValue);
					setError(null);
				}
			} catch (err) {
				if (cancelled) return;
				console.error("Formula execution error:", err);
				setError(err instanceof Error ? err.message : "Unknown error");
				setResult(null);
			} finally {
				if (!cancelled) setIsLoading(false);
				try {
					hfInstance?.destroy();
				} catch (err) {
					console.error("Error destroying HyperFormula instance:", err);
					setError("Error destroying HyperFormula instance");
					setResult(null);
				}
			}
		}
		executeFormula();
		return () => {
			cancelled = true;
		};
	}, [
		formula,
		queriesVersion,
		locale,
		queries,
		namedExpressions
	]);
	return {
		result,
		isLoading,
		error
	};
}
function timeFrameModeToCondition(mode) {
	switch (mode) {
		case "full": return "All time";
		case "lastMonth": return "Last month";
		case "lastYear": return "Last year";
		case "yearToDate": return "Year to date";
		case "priorYearToDate": return "Prior year to date";
		case "sliding-window": return null;
		case "static": return null;
		default: return null;
	}
}
function isMonthOnlyDate(s) {
	return s.includes("-") && s.split("-").length === 2;
}
function toMonth(dateOrMonth) {
	return isMonthOnlyDate(dateOrMonth) ? dateOrMonth : monthFromDate(dateOrMonth);
}
async function buildFilteredTransactionsQuery(config) {
	const conditions = config.conditions || [];
	const conditionsOp = config.conditionsOp || "and";
	const timeFrame = config.timeFrame;
	const { filters: queryFilters } = await send("make-filters-from-conditions", { conditions });
	const conditionsOpKey = conditionsOp === "or" ? "$or" : "$and";
	let transQuery = q$1("transactions");
	if (timeFrame && timeFrame.mode) {
		let startDate;
		let endDate;
		if ((timeFrame.mode === "sliding-window" || timeFrame.mode === "static") && timeFrame.start && timeFrame.end) if (timeFrame.mode === "sliding-window") {
			const startMonth = toMonth(timeFrame.start);
			const offset = differenceInCalendarMonths(toMonth(timeFrame.end), startMonth);
			startDate = firstDayOfMonth(subMonths(currentMonth(), offset));
			endDate = currentDay();
		} else {
			startDate = isMonthOnlyDate(timeFrame.start) ? timeFrame.start + "-01" : timeFrame.start;
			endDate = isMonthOnlyDate(timeFrame.end) ? getMonthEnd(timeFrame.end + "-01") : timeFrame.end;
		}
		else {
			const condition = timeFrameModeToCondition(timeFrame.mode);
			if (condition) {
				const earliestTransaction = await send("get-earliest-transaction");
				const latestTransaction = await send("get-latest-transaction");
				const [calculatedStart, calculatedEnd] = getLiveRange(condition, earliestTransaction ? earliestTransaction.date : currentDay(), latestTransaction ? latestTransaction.date : currentDay(), true);
				startDate = calculatedStart;
				endDate = calculatedEnd;
			}
		}
		if (startDate && endDate) transQuery = transQuery.filter({ $and: [{ date: { $gte: startDate } }, { date: { $lte: endDate } }] });
	}
	if (queryFilters.length > 0) transQuery = transQuery.filter({ [conditionsOpKey]: queryFilters });
	return transQuery;
}
async function fetchQuerySum(config) {
	try {
		const { data } = await send("query", (await buildFilteredTransactionsQuery(config)).calculate({ $sum: "$amount" }).serialize());
		return data || 0;
	} catch (err) {
		console.error("Error fetching query sum:", err);
		return 0;
	}
}
async function fetchQueryCount(config) {
	try {
		const { data } = await send("query", (await buildFilteredTransactionsQuery(config)).calculate({ $count: "*" }).serialize());
		return data || 0;
	} catch (err) {
		console.error("Error fetching query count:", err);
		return 0;
	}
}
function extractCategoryConditions(conditions) {
	return conditions.filter((cond) => !cond.customName && cond.field === "category");
}
async function getCategoriesFromConditions(allCategories, conditions, conditionsOp) {
	if (conditions.length === 0) return allCategories.filter((cat) => !cat.is_income && !cat.hidden).map((cat) => cat.id);
	const conditionResults = conditions.map((cond) => {
		return allCategories.filter((cat) => {
			if (cond.op === "is") return cond.value === cat.id;
			else if (cond.op === "isNot") return cond.value !== cat.id;
			else if (cond.op === "oneOf") return cond.value.includes(cat.id);
			else if (cond.op === "notOneOf") return !cond.value.includes(cat.id);
			else if (cond.op === "contains") return cat.name.includes(cond.value);
			else if (cond.op === "doesNotContain") return !cat.name.includes(cond.value);
			else if (cond.op === "matches") try {
				return new RegExp(cond.value).test(cat.name);
			} catch (e) {
				console.warn("Invalid regexp in matches condition", e);
				return true;
			}
			console.warn(`Unknown category condition operator: ${cond.op}`);
			return true;
		}).map((cat) => cat.id);
	});
	if (conditionsOp === "or") {
		const categoryIds = new Set(conditionResults.flat());
		return Array.from(categoryIds);
	} else {
		if (conditionResults.length === 0) return [];
		const firstSet = new Set(conditionResults[0]);
		for (let i = 1; i < conditionResults.length; i++) {
			const currentIds = new Set(conditionResults[i]);
			const toRemove = [];
			firstSet.forEach((id) => {
				if (!currentIds.has(id)) toRemove.push(id);
			});
			toRemove.forEach((id) => firstSet.delete(id));
		}
		return Array.from(firstSet);
	}
}
async function getMonthBudgetData(month) {
	return await send("envelope-budget-month", { month }) || [];
}
function getMonthDataValue(monthData, pattern, catId) {
	const fieldName = pattern.replace("{catId}", catId);
	return monthData.find((c) => c.name.endsWith(fieldName))?.value ?? 0;
}
async function extractQueryCategories(queryName, queries) {
	const queryConfig = queries[queryName];
	if (!queryConfig) {
		console.warn(`Query "${queryName}" not found in queries config`);
		return [];
	}
	const categoryConditions = extractCategoryConditions(queryConfig.conditions || []);
	const { list: allCategories } = await send("get-categories");
	return getCategoriesFromConditions(allCategories, categoryConditions, queryConfig.conditionsOp || "and");
}
async function extractQueryTimeframeStart(queryName, queries) {
	const queryConfig = queries[queryName];
	if (!queryConfig || !queryConfig.timeFrame) {
		console.warn(`Query "${queryName}" not found or has no timeframe; cannot extract start`);
		return currentMonth();
	}
	const [startMonth] = calculateTimeRange(queryConfig.timeFrame);
	return startMonth;
}
async function extractQueryTimeframeEnd(queryName, queries) {
	const queryConfig = queries[queryName];
	if (!queryConfig || !queryConfig.timeFrame) {
		console.warn(`Query "${queryName}" not found or has no timeframe; cannot extract end`);
		return currentMonth();
	}
	const [, endMonth] = calculateTimeRange(queryConfig.timeFrame);
	return endMonth;
}
async function fetchBudgetDimensionValueDirect(dimension, categoryIds, startMonth, endMonth) {
	const allowed = new Set([
		"budgeted",
		"spent",
		"balance_start",
		"balance_end",
		"goal"
	]);
	const dim = dimension.toLowerCase();
	if (!allowed.has(dim)) throw new Error(`Invalid BUDGET_QUERY dimension: ${dimension}`);
	const intervals = rangeInclusive(startMonth, endMonth);
	const sumDimension = async (fieldPattern) => {
		let total = 0;
		for (const month of intervals) {
			const monthData = await getMonthBudgetData(month);
			for (const catId of categoryIds) total += getMonthDataValue(monthData, fieldPattern, catId);
		}
		return total;
	};
	if (dim === "budgeted") return integerToAmount(await sumDimension("budget-{catId}"), 2);
	if (dim === "spent") return integerToAmount(await sumDimension("sum-amount-{catId}"), 2);
	if (dim === "goal") return integerToAmount(await sumDimension("goal-{catId}"), 2);
	if (dim === "balance_start" || dim === "balance_end") {
		let runningBalance = 0;
		const prevMonthData = await getMonthBudgetData(subMonths(startMonth, 1));
		for (const catId of categoryIds) {
			const catBalance = getMonthDataValue(prevMonthData, "leftover-{catId}", catId);
			const hasCarryover = Boolean(getMonthDataValue(prevMonthData, "carryover-{catId}", catId));
			if (catBalance > 0 || catBalance < 0 && hasCarryover) runningBalance += catBalance;
		}
		const balances = {};
		for (const month of intervals) {
			const monthData = await getMonthBudgetData(month);
			let budgeted = 0;
			let spent = 0;
			let carryoverToNextMonth = 0;
			for (const catId of categoryIds) {
				const catBudgeted = Number(getMonthDataValue(monthData, "budget-{catId}", catId)) || 0;
				const catSpent = Number(getMonthDataValue(monthData, "sum-amount-{catId}", catId)) || 0;
				const catBalance = Number(getMonthDataValue(monthData, "leftover-{catId}", catId)) || 0;
				const hasCarryover = Boolean(getMonthDataValue(monthData, "carryover-{catId}", catId));
				budgeted += catBudgeted;
				spent += catSpent;
				if (catBalance > 0 || catBalance < 0 && hasCarryover) carryoverToNextMonth += catBalance;
			}
			balances[month] = {
				start: runningBalance,
				end: budgeted + spent + runningBalance
			};
			runningBalance = carryoverToNextMonth;
		}
		if (dim === "balance_start") return integerToAmount(balances[intervals[0]]?.start || 0, 2);
		return integerToAmount(balances[intervals[intervals.length - 1]]?.end || 0, 2);
	}
	return 0;
}
//#endregion
//#region src/hooks/useThemeColors.ts
var VAR_STRING_REGEX = /^var\((--.*)\)$/;
function getPropertyValueFromVarString(varString) {
	if (VAR_STRING_REGEX.test(varString)) {
		const match = varString.match(VAR_STRING_REGEX);
		if (match) return window.getComputedStyle(document.documentElement).getPropertyValue(match[1]).trim();
	}
	return varString;
}
function useThemeColors() {
	return (0, import_react.useMemo)(() => {
		const colors = {};
		for (const [key, value] of Object.entries(theme)) {
			const computedValue = getPropertyValueFromVarString(value);
			if (computedValue) colors[key] = computedValue;
		}
		return colors;
	}, []);
}
//#endregion
//#region src/components/reports/reports/Formula.tsx
var FormulaEditor = (0, import_react.lazy)(() => __vitePreload(() => import("./FormulaEditor.BCcTZYRx.chunk.js").then((module) => ({ default: module.FormulaEditor })), __vite__mapDeps([0,1,2,3])));
function Formula() {
	const { data: widget, isPending } = useDashboardWidget({
		id: useParams().id,
		type: "formula-card"
	});
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaInner, { widget });
}
function FormulaInner({ widget }) {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isNarrowWidth } = useResponsive();
	const themeColors = useThemeColors();
	const queriesRef = (0, import_react.useRef)(widget?.meta?.queries || {});
	const [queriesVersion, setQueriesVersion] = (0, import_react.useState)(0);
	const [formula, setFormula] = (0, import_react.useState)(widget?.meta?.formula || "=SUM(1, 2, 3)");
	const [fontSizeMode, setFontSizeMode] = (0, import_react.useState)(widget?.meta?.fontSizeMode || "dynamic");
	const [staticFontSize, setStaticFontSize] = (0, import_react.useState)(widget?.meta?.staticFontSize || 32);
	const [colorFormula, setColorFormula] = (0, import_react.useState)(widget?.meta?.colorFormula || "");
	const title = widget?.meta?.name || t("Formula");
	const { result, isLoading: isExecuting, error } = useFormulaExecution(formula, queriesRef.current, queriesVersion);
	const colorVariables = (0, import_react.useMemo)(() => ({
		RESULT: result ?? 0,
		...Object.entries(themeColors).reduce((acc, [key, value]) => {
			acc[`theme_${key}`] = value;
			return acc;
		}, {})
	}), [result, themeColors]);
	const { result: colorResult, error: colorError } = useFormulaExecution(colorFormula, queriesRef.current, queriesVersion, colorVariables);
	const handleQueriesChange = (0, import_react.useCallback)((newQueries) => {
		queriesRef.current = newQueries;
		setQueriesVersion((v) => v + 1);
	}, []);
	const updateDashboardWidgetMutation = useUpdateDashboardWidgetMutation();
	const onSaveWidgetName = async (newName) => {
		if (!widget) {
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Cannot save: No widget available.")
			} }));
			return;
		}
		const name = newName || t("Formula");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				name,
				formula,
				queries: queriesRef.current,
				fontSizeMode,
				staticFontSize,
				colorFormula
			}
		} });
	};
	async function onSaveWidget() {
		if (!widget) {
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Cannot save: No widget available.")
			} }));
			return;
		}
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				formula,
				queries: queriesRef.current,
				fontSizeMode,
				staticFontSize,
				colorFormula
			}
		} }, { onSuccess: () => {
			dispatch(addNotification({ notification: {
				type: "message",
				message: t("Dashboard widget successfully saved.")
			} }));
		} });
	}
	const customColor = colorFormula && !colorError && colorResult ? String(colorResult) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: isNarrowWidth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title,
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: () => navigate("/reports") })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditablePageHeaderTitle, {
			title,
			onSave: onSaveWidgetName
		}) : title }),
		padding: 0,
		children: [widget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				padding: 20,
				display: "flex",
				justifyContent: "flex-end",
				flexDirection: "row",
				background: theme.pageBackground
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				onPress: onSaveWidget,
				style: { width: 100 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save widget" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				width: "100%",
				height: "100%",
				background: theme.pageBackground,
				display: "flex",
				flexDirection: "row"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flex: 1,
					display: "flex",
					flexDirection: "column"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: {
							padding: 20,
							flexDirection: "column",
							justifyContent: "space-between",
							gap: 10,
							minHeight: 120
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontSize: 14,
								color: theme.pageTextSubdued
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Result:" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								height: 120,
								width: "100%",
								overflow: "auto",
								backgroundColor: theme.cardBackground,
								borderRadius: 6,
								...styles.horizontalScrollbar,
								"::-webkit-scrollbar": { height: "8px" }
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaResult, {
								value: result,
								error,
								loading: isExecuting,
								fontSizeMode,
								staticFontSize,
								customColor
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: {
							flex: 1,
							minHeight: 50,
							margin: 20,
							overflow: "hidden"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontSize: 13,
								color: theme.pageTextSubdued,
								marginBottom: 5
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Formula:" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
							fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: { padding: 10 },
								children: "Loading..."
							}),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaEditor, {
								value: formula,
								onChange: setFormula,
								mode: "query",
								queries: queriesRef.current,
								singleLine: false,
								showLineNumbers: true
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: {
							padding: "0 20px 20px 20px",
							display: "flex",
							flexDirection: "row",
							gap: 20,
							alignItems: "flex-end"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontSize: 13,
								color: theme.pageTextSubdued,
								marginBottom: 5
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Font size:" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: fontSizeMode,
							onChange: (value) => setFontSizeMode(value),
							options: [["dynamic", t("Dynamic")], ["static", t("Static")]]
						})] }), fontSizeMode === "static" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontSize: 13,
								color: theme.pageTextSubdued,
								marginBottom: 5
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Font size (px):" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: String(staticFontSize),
							onChange: (e) => setStaticFontSize(Number(e.target.value))
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: {
							padding: 20,
							marginBottom: 20
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontSize: 13,
									color: theme.pageTextSubdued,
									marginBottom: 5
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Conditional color (optional):" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
								style: {
									border: `1px solid ${theme.formInputBorder}`,
									borderRadius: 4,
									overflow: "hidden",
									backgroundColor: theme.tableBackground
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
									fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: 32 } }),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaEditor, {
										value: colorFormula,
										variables: colorVariables,
										onChange: setColorFormula,
										mode: "query",
										queries: queriesRef.current,
										singleLine: true,
										showLineNumbers: false
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontSize: 11,
									color: theme.pageTextSubdued,
									marginTop: 5
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Formula that returns a color (e.g., “red”, “#ff0000”). Leave blank for default. Use RESULT variable to access the main formula result." })
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: { overflowY: "auto" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryManager, {
					queries: queriesRef.current,
					onQueriesChange: handleQueriesChange
				})
			})]
		})]
	});
}
//#endregion
//#region src/components/reports/graphs/NetWorthGraph.tsx
function TrendTooltip({ active, payload, style }) {
	const { t } = useTranslation();
	if (active && payload && payload.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: css([{
			zIndex: 1e3,
			pointerEvents: "none",
			borderRadius: 2,
			boxShadow: "0 1px 6px rgba(0, 0, 0, .20)",
			backgroundColor: theme.menuBackground,
			color: theme.menuItemText,
			padding: 10
		}, style]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { marginBottom: 10 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: payload[0].payload.date })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { lineHeight: 1.5 },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Assets:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: payload[0].payload.assets })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Debt:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: payload[0].payload.debt })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Net worth:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
						as: "strong",
						children: payload[0].payload.networth
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
					left: t("Change:"),
					right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: payload[0].payload.change })
				})
			]
		})] })
	});
	return null;
}
function StackedTooltip({ active, payload, sortedAccounts, accounts, hoveredAccountId, format }) {
	if (active && payload && payload.length) {
		const total = payload.reduce((acc, p) => acc + (Number(p.value) || 0), 0);
		const sortedPayload = [...payload].sort((a, b) => {
			const indexA = sortedAccounts.findIndex((acc) => acc.id === a.dataKey);
			return sortedAccounts.findIndex((acc) => acc.id === b.dataKey) - indexA;
		});
		const hasPositive = payload.some((p) => (Number(p.value) || 0) > 0);
		const hasNegative = payload.some((p) => (Number(p.value) || 0) < 0);
		const showPercentage = !(hasPositive && hasNegative);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: css([{
				zIndex: 1e3,
				pointerEvents: "auto",
				borderRadius: 2,
				boxShadow: "0 1px 6px rgba(0, 0, 0, .20)",
				backgroundColor: theme.menuBackground,
				color: theme.menuItemText,
				padding: 10,
				fontSize: 12,
				maxHeight: "80vh",
				overflowY: "auto"
			}]),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					marginBottom: 10,
					fontWeight: "bold"
				},
				children: payload[0].payload.date
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				style: {
					borderSpacing: "15px 0",
					marginLeft: "-15px"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						style: {
							textAlign: "left",
							paddingLeft: 15
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Account" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						style: { textAlign: "right" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Value" })
					}),
					showPercentage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						style: { textAlign: "right" },
						children: "%"
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [sortedPayload.map((entry) => {
					const accountId = entry.dataKey;
					const accountName = accounts.find((a) => a.id === accountId)?.name || accountId;
					const value = Number(entry.value);
					const percent = total !== 0 ? value / total * 100 : 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						style: { color: entry.color },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								style: {
									textAlign: "left",
									paddingLeft: 15,
									textDecoration: hoveredAccountId === accountId ? "underline" : void 0
								},
								children: accountName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								style: { textAlign: "right" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: theme.pageText },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(value, "financial") })
								})
							}),
							showPercentage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								style: { textAlign: "right" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: theme.pageText },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FinancialText, { children: [percent.toFixed(1), "%"] })
								})
							})
						]
					}, accountId);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					style: {
						fontWeight: "bold",
						borderTop: "1px solid " + theme.tableBorder
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							style: {
								textAlign: "left",
								paddingLeft: 15,
								paddingTop: 5
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Total" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							style: {
								textAlign: "right",
								paddingTop: 5
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(total, "financial") })
						}),
						showPercentage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							style: {
								textAlign: "right",
								paddingTop: 5
							},
							children: "100.0%"
						})
					]
				})] })]
			})]
		});
	}
	return null;
}
function NetWorthGraph({ style, graphData, accounts = [], compact = false, showTooltip = true, interval = "Monthly", mode = "trend" }) {
	const privacyMode = usePrivacyMode();
	const id = (0, import_react.useId)();
	const format = useFormat();
	const animationProps = useRechartsAnimation({ isAnimationActive: false });
	const [isTooltipActive, setIsTooltipActive] = (0, import_react.useState)(false);
	const [hoveredAccountId, setHoveredAccountId] = (0, import_react.useState)(null);
	const { isNarrowWidth } = useResponsive();
	const effectiveShowTooltip = showTooltip && !isNarrowWidth;
	const interpolationType = interval === "Daily" || interval === "Weekly" ? "basis" : "monotone";
	const tickFormatter = (tick) => {
		return privacyMode ? "..." : `${format(Math.round(tick), "financial-no-decimals")}`;
	};
	const gradientOffset = () => {
		const dataMax = Math.max(...graphData.data.map((i) => i.y));
		const dataMin = Math.min(...graphData.data.map((i) => i.y));
		if (dataMax <= 0) return 0;
		if (dataMin >= 0) return 1;
		return dataMax / (dataMax - dataMin);
	};
	const off = gradientOffset();
	const gradientId = `splitColor-${id}`;
	const sortedAccounts = (0, import_react.useMemo)(() => {
		if (!accounts || mode !== "stacked") return [];
		const totals = accounts.reduce((acc, account) => {
			acc[account.id] = graphData.data.reduce((sum, point) => {
				return sum + (Number(point[account.id]) || 0);
			}, 0);
			return acc;
		}, {});
		return [...accounts].sort((a, b) => {
			return totals[a.id] - totals[b.id];
		});
	}, [
		accounts,
		graphData.data,
		mode
	]);
	const colors = (0, import_react.useMemo)(() => {
		if (mode !== "stacked") return {};
		const scale = getColorScale("qualitative");
		return sortedAccounts.reduce((acc, account, index) => {
			acc[account.id] = scale[index % scale.length];
			return acc;
		}, {});
	}, [sortedAccounts, mode]);
	const weeklyTicks = (0, import_react.useMemo)(() => {
		if (interval !== "Daily") return;
		return graphData.data.filter((point) => {
			return getDay(parse(point.x, "yy-MM-dd", /* @__PURE__ */ new Date())) === 1;
		}).map((point) => point.x);
	}, [interval, graphData.data]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		style: {
			...style,
			...compact && { height: "auto" },
			position: "relative"
		},
		children: (width, height) => graphData && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				...!compact && { marginTop: "15px" },
				position: "relative"
			},
			onMouseLeave: () => {
				setIsTooltipActive(false);
				setHoveredAccountId(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				responsive: true,
				width,
				height,
				data: graphData.data,
				margin: {
					top: 0,
					right: 0,
					left: compact ? 0 : computePadding(graphData.data.map((item) => item.y), (value) => format(value, "financial-no-decimals")),
					bottom: 0
				},
				onMouseMove: () => effectiveShowTooltip && !isTooltipActive && setIsTooltipActive(true),
				children: [
					compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						strokeDasharray: "3 3",
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "x",
						hide: compact,
						tick: { fill: theme.pageText },
						tickLine: { stroke: theme.pageText },
						ticks: weeklyTicks
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						dataKey: mode === "trend" ? "y" : void 0,
						domain: mode === "trend" ? ["auto", "auto"] : void 0,
						hide: compact,
						tickFormatter,
						tick: { fill: theme.pageText },
						tickLine: { stroke: theme.pageText }
					}),
					effectiveShowTooltip && mode === "trend" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
						content: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendTooltip, {
							...props,
							style
						}),
						formatter: numberFormatterTooltip,
						isAnimationActive: false
					}),
					effectiveShowTooltip && mode === "stacked" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
						content: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedTooltip, {
							...props,
							sortedAccounts,
							accounts,
							hoveredAccountId,
							format
						}),
						isAnimationActive: false,
						wrapperStyle: {
							zIndex: 9999,
							pointerEvents: "auto"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: gradientId,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: off,
							stopColor: theme.reportsChartFill,
							stopOpacity: .2
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: off,
							stopColor: theme.reportsNumberNegative,
							stopOpacity: .2
						})]
					}) }),
					mode === "trend" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: interpolationType,
						dot: false,
						activeDot: false,
						...animationProps,
						dataKey: "y",
						stroke: theme.reportsChartFill,
						strokeWidth: 2,
						fill: `url(#${gradientId})`,
						fillOpacity: 1,
						connectNulls: true
					}) : sortedAccounts.map((account) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: interpolationType,
						dataKey: account.id,
						stackId: "1",
						stroke: colors[account.id],
						fill: colors[account.id],
						fillOpacity: .5,
						strokeWidth: 2,
						...animationProps,
						connectNulls: true,
						onMouseEnter: () => setHoveredAccountId(account.id),
						onMouseLeave: () => setHoveredAccountId(null)
					}, account.id))
				]
			})
		})
	});
}
//#endregion
//#region ../../node_modules/lodash/_defineProperty.js
var require__defineProperty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getNative = require__getNative();
	module.exports = function() {
		try {
			var func = getNative(Object, "defineProperty");
			func({}, "", {});
			return func;
		} catch (e) {}
	}();
}));
//#endregion
//#region ../../node_modules/lodash/_baseAssignValue.js
var require__baseAssignValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var defineProperty = require__defineProperty();
	/**
	* The base implementation of `assignValue` and `assignMergeValue` without
	* value checks.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function baseAssignValue(object, key, value) {
		if (key == "__proto__" && defineProperty) defineProperty(object, key, {
			"configurable": true,
			"enumerable": true,
			"value": value,
			"writable": true
		});
		else object[key] = value;
	}
	module.exports = baseAssignValue;
}));
//#endregion
//#region ../../node_modules/lodash/_arrayAggregator.js
var require__arrayAggregator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `baseAggregator` for arrays.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} setter The function to set `accumulator` values.
	* @param {Function} iteratee The iteratee to transform keys.
	* @param {Object} accumulator The initial aggregated object.
	* @returns {Function} Returns `accumulator`.
	*/
	function arrayAggregator(array, setter, iteratee, accumulator) {
		var index = -1, length = array == null ? 0 : array.length;
		while (++index < length) {
			var value = array[index];
			setter(accumulator, value, iteratee(value), array);
		}
		return accumulator;
	}
	module.exports = arrayAggregator;
}));
//#endregion
//#region ../../node_modules/lodash/_createBaseFor.js
var require__createBaseFor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Creates a base function for methods like `_.forIn` and `_.forOwn`.
	*
	* @private
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {Function} Returns the new base function.
	*/
	function createBaseFor(fromRight) {
		return function(object, iteratee, keysFunc) {
			var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
			while (length--) {
				var key = props[fromRight ? length : ++index];
				if (iteratee(iterable[key], key, iterable) === false) break;
			}
			return object;
		};
	}
	module.exports = createBaseFor;
}));
//#endregion
//#region ../../node_modules/lodash/_baseFor.js
var require__baseFor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__createBaseFor()();
}));
//#endregion
//#region ../../node_modules/lodash/_baseForOwn.js
var require__baseForOwn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseFor = require__baseFor(), keys = require_keys();
	/**
	* The base implementation of `_.forOwn` without support for iteratee shorthands.
	*
	* @private
	* @param {Object} object The object to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Object} Returns `object`.
	*/
	function baseForOwn(object, iteratee) {
		return object && baseFor(object, iteratee, keys);
	}
	module.exports = baseForOwn;
}));
//#endregion
//#region ../../node_modules/lodash/_createBaseEach.js
var require__createBaseEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArrayLike = require_isArrayLike();
	/**
	* Creates a `baseEach` or `baseEachRight` function.
	*
	* @private
	* @param {Function} eachFunc The function to iterate over a collection.
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {Function} Returns the new base function.
	*/
	function createBaseEach(eachFunc, fromRight) {
		return function(collection, iteratee) {
			if (collection == null) return collection;
			if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
			var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
			while (fromRight ? index-- : ++index < length) if (iteratee(iterable[index], index, iterable) === false) break;
			return collection;
		};
	}
	module.exports = createBaseEach;
}));
//#endregion
//#region ../../node_modules/lodash/_baseEach.js
var require__baseEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseForOwn = require__baseForOwn();
	module.exports = require__createBaseEach()(baseForOwn);
}));
//#endregion
//#region ../../node_modules/lodash/_baseAggregator.js
var require__baseAggregator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseEach = require__baseEach();
	/**
	* Aggregates elements of `collection` on `accumulator` with keys transformed
	* by `iteratee` and values set by `setter`.
	*
	* @private
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} setter The function to set `accumulator` values.
	* @param {Function} iteratee The iteratee to transform keys.
	* @param {Object} accumulator The initial aggregated object.
	* @returns {Function} Returns `accumulator`.
	*/
	function baseAggregator(collection, setter, iteratee, accumulator) {
		baseEach(collection, function(value, key, collection) {
			setter(accumulator, value, iteratee(value), collection);
		});
		return accumulator;
	}
	module.exports = baseAggregator;
}));
//#endregion
//#region ../../node_modules/lodash/_baseIsMatch.js
var require__baseIsMatch = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stack = require__Stack(), baseIsEqual = require__baseIsEqual();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
	/**
	* The base implementation of `_.isMatch` without support for iteratee shorthands.
	*
	* @private
	* @param {Object} object The object to inspect.
	* @param {Object} source The object of property values to match.
	* @param {Array} matchData The property names, values, and compare flags to match.
	* @param {Function} [customizer] The function to customize comparisons.
	* @returns {boolean} Returns `true` if `object` is a match, else `false`.
	*/
	function baseIsMatch(object, source, matchData, customizer) {
		var index = matchData.length, length = index, noCustomizer = !customizer;
		if (object == null) return !length;
		object = Object(object);
		while (index--) {
			var data = matchData[index];
			if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
		}
		while (++index < length) {
			data = matchData[index];
			var key = data[0], objValue = object[key], srcValue = data[1];
			if (noCustomizer && data[2]) {
				if (objValue === void 0 && !(key in object)) return false;
			} else {
				var stack = new Stack();
				if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
				if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false;
			}
		}
		return true;
	}
	module.exports = baseIsMatch;
}));
//#endregion
//#region ../../node_modules/lodash/_isStrictComparable.js
var require__isStrictComparable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_isObject();
	/**
	* Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` if suitable for strict
	*  equality comparisons, else `false`.
	*/
	function isStrictComparable(value) {
		return value === value && !isObject(value);
	}
	module.exports = isStrictComparable;
}));
//#endregion
//#region ../../node_modules/lodash/_getMatchData.js
var require__getMatchData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isStrictComparable = require__isStrictComparable(), keys = require_keys();
	/**
	* Gets the property names, values, and compare flags of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the match data of `object`.
	*/
	function getMatchData(object) {
		var result = keys(object), length = result.length;
		while (length--) {
			var key = result[length], value = object[key];
			result[length] = [
				key,
				value,
				isStrictComparable(value)
			];
		}
		return result;
	}
	module.exports = getMatchData;
}));
//#endregion
//#region ../../node_modules/lodash/_matchesStrictComparable.js
var require__matchesStrictComparable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `matchesProperty` for source values suitable
	* for strict equality comparisons, i.e. `===`.
	*
	* @private
	* @param {string} key The key of the property to get.
	* @param {*} srcValue The value to match.
	* @returns {Function} Returns the new spec function.
	*/
	function matchesStrictComparable(key, srcValue) {
		return function(object) {
			if (object == null) return false;
			return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
		};
	}
	module.exports = matchesStrictComparable;
}));
//#endregion
//#region ../../node_modules/lodash/_baseMatches.js
var require__baseMatches = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsMatch = require__baseIsMatch(), getMatchData = require__getMatchData(), matchesStrictComparable = require__matchesStrictComparable();
	/**
	* The base implementation of `_.matches` which doesn't clone `source`.
	*
	* @private
	* @param {Object} source The object of property values to match.
	* @returns {Function} Returns the new spec function.
	*/
	function baseMatches(source) {
		var matchData = getMatchData(source);
		if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
		return function(object) {
			return object === source || baseIsMatch(object, source, matchData);
		};
	}
	module.exports = baseMatches;
}));
//#endregion
//#region ../../node_modules/lodash/_isKey.js
var require__isKey = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArray = require_isArray(), isSymbol = require_isSymbol();
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
	/**
	* Checks if `value` is a property name and not a property path.
	*
	* @private
	* @param {*} value The value to check.
	* @param {Object} [object] The object to query keys on.
	* @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	*/
	function isKey(value, object) {
		if (isArray(value)) return false;
		var type = typeof value;
		if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
		return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}
	module.exports = isKey;
}));
//#endregion
//#region ../../node_modules/lodash/memoize.js
var require_memoize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MapCache = require__MapCache();
	/** Error message constants. */
	var FUNC_ERROR_TEXT = "Expected a function";
	/**
	* Creates a function that memoizes the result of `func`. If `resolver` is
	* provided, it determines the cache key for storing the result based on the
	* arguments provided to the memoized function. By default, the first argument
	* provided to the memoized function is used as the map cache key. The `func`
	* is invoked with the `this` binding of the memoized function.
	*
	* **Note:** The cache is exposed as the `cache` property on the memoized
	* function. Its creation may be customized by replacing the `_.memoize.Cache`
	* constructor with one whose instances implement the
	* [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	* method interface of `clear`, `delete`, `get`, `has`, and `set`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Function
	* @param {Function} func The function to have its output memoized.
	* @param {Function} [resolver] The function to resolve the cache key.
	* @returns {Function} Returns the new memoized function.
	* @example
	*
	* var object = { 'a': 1, 'b': 2 };
	* var other = { 'c': 3, 'd': 4 };
	*
	* var values = _.memoize(_.values);
	* values(object);
	* // => [1, 2]
	*
	* values(other);
	* // => [3, 4]
	*
	* object.a = 2;
	* values(object);
	* // => [1, 2]
	*
	* // Modify the result cache.
	* values.cache.set(object, ['a', 'b']);
	* values(object);
	* // => ['a', 'b']
	*
	* // Replace `_.memoize.Cache`.
	* _.memoize.Cache = WeakMap;
	*/
	function memoize(func, resolver) {
		if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
		var memoized = function() {
			var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
			if (cache.has(key)) return cache.get(key);
			var result = func.apply(this, args);
			memoized.cache = cache.set(key, result) || cache;
			return result;
		};
		memoized.cache = new (memoize.Cache || MapCache)();
		return memoized;
	}
	memoize.Cache = MapCache;
	module.exports = memoize;
}));
//#endregion
//#region ../../node_modules/lodash/_memoizeCapped.js
var require__memoizeCapped = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var memoize = require_memoize();
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	/**
	* A specialized version of `_.memoize` which clears the memoized function's
	* cache when it exceeds `MAX_MEMOIZE_SIZE`.
	*
	* @private
	* @param {Function} func The function to have its output memoized.
	* @returns {Function} Returns the new memoized function.
	*/
	function memoizeCapped(func) {
		var result = memoize(func, function(key) {
			if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
			return key;
		});
		var cache = result.cache;
		return result;
	}
	module.exports = memoizeCapped;
}));
//#endregion
//#region ../../node_modules/lodash/_stringToPath.js
var require__stringToPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var memoizeCapped = require__memoizeCapped();
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	module.exports = memoizeCapped(function(string) {
		var result = [];
		if (string.charCodeAt(0) === 46) result.push("");
		string.replace(rePropName, function(match, number, quote, subString) {
			result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
		});
		return result;
	});
}));
//#endregion
//#region ../../node_modules/lodash/_castPath.js
var require__castPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArray = require_isArray(), isKey = require__isKey(), stringToPath = require__stringToPath(), toString = require_toString();
	/**
	* Casts `value` to a path array if it's not one.
	*
	* @private
	* @param {*} value The value to inspect.
	* @param {Object} [object] The object to query keys on.
	* @returns {Array} Returns the cast property path array.
	*/
	function castPath(value, object) {
		if (isArray(value)) return value;
		return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	module.exports = castPath;
}));
//#endregion
//#region ../../node_modules/lodash/_toKey.js
var require__toKey = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isSymbol = require_isSymbol();
	/** Used as references for various `Number` constants. */
	var INFINITY = Infinity;
	/**
	* Converts `value` to a string key if it's not a string or symbol.
	*
	* @private
	* @param {*} value The value to inspect.
	* @returns {string|symbol} Returns the key.
	*/
	function toKey(value) {
		if (typeof value == "string" || isSymbol(value)) return value;
		var result = value + "";
		return result == "0" && 1 / value == -INFINITY ? "-0" : result;
	}
	module.exports = toKey;
}));
//#endregion
//#region ../../node_modules/lodash/_baseGet.js
var require__baseGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var castPath = require__castPath(), toKey = require__toKey();
	/**
	* The base implementation of `_.get` without support for default values.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Array|string} path The path of the property to get.
	* @returns {*} Returns the resolved value.
	*/
	function baseGet(object, path) {
		path = castPath(path, object);
		var index = 0, length = path.length;
		while (object != null && index < length) object = object[toKey(path[index++])];
		return index && index == length ? object : void 0;
	}
	module.exports = baseGet;
}));
//#endregion
//#region ../../node_modules/lodash/get.js
var require_get = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGet = require__baseGet();
	/**
	* Gets the value at `path` of `object`. If the resolved value is
	* `undefined`, the `defaultValue` is returned in its place.
	*
	* @static
	* @memberOf _
	* @since 3.7.0
	* @category Object
	* @param {Object} object The object to query.
	* @param {Array|string} path The path of the property to get.
	* @param {*} [defaultValue] The value returned for `undefined` resolved values.
	* @returns {*} Returns the resolved value.
	* @example
	*
	* var object = { 'a': [{ 'b': { 'c': 3 } }] };
	*
	* _.get(object, 'a[0].b.c');
	* // => 3
	*
	* _.get(object, ['a', '0', 'b', 'c']);
	* // => 3
	*
	* _.get(object, 'a.b.c', 'default');
	* // => 'default'
	*/
	function get(object, path, defaultValue) {
		var result = object == null ? void 0 : baseGet(object, path);
		return result === void 0 ? defaultValue : result;
	}
	module.exports = get;
}));
//#endregion
//#region ../../node_modules/lodash/_baseHasIn.js
var require__baseHasIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.hasIn` without support for deep paths.
	*
	* @private
	* @param {Object} [object] The object to query.
	* @param {Array|string} key The key to check.
	* @returns {boolean} Returns `true` if `key` exists, else `false`.
	*/
	function baseHasIn(object, key) {
		return object != null && key in Object(object);
	}
	module.exports = baseHasIn;
}));
//#endregion
//#region ../../node_modules/lodash/_hasPath.js
var require__hasPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var castPath = require__castPath(), isArguments = require_isArguments(), isArray = require_isArray(), isIndex = require__isIndex(), isLength = require_isLength(), toKey = require__toKey();
	/**
	* Checks if `path` exists on `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Array|string} path The path to check.
	* @param {Function} hasFunc The function to check properties.
	* @returns {boolean} Returns `true` if `path` exists, else `false`.
	*/
	function hasPath(object, path, hasFunc) {
		path = castPath(path, object);
		var index = -1, length = path.length, result = false;
		while (++index < length) {
			var key = toKey(path[index]);
			if (!(result = object != null && hasFunc(object, key))) break;
			object = object[key];
		}
		if (result || ++index != length) return result;
		length = object == null ? 0 : object.length;
		return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
	}
	module.exports = hasPath;
}));
//#endregion
//#region ../../node_modules/lodash/hasIn.js
var require_hasIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseHasIn = require__baseHasIn(), hasPath = require__hasPath();
	/**
	* Checks if `path` is a direct or inherited property of `object`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Object
	* @param {Object} object The object to query.
	* @param {Array|string} path The path to check.
	* @returns {boolean} Returns `true` if `path` exists, else `false`.
	* @example
	*
	* var object = _.create({ 'a': _.create({ 'b': 2 }) });
	*
	* _.hasIn(object, 'a');
	* // => true
	*
	* _.hasIn(object, 'a.b');
	* // => true
	*
	* _.hasIn(object, ['a', 'b']);
	* // => true
	*
	* _.hasIn(object, 'b');
	* // => false
	*/
	function hasIn(object, path) {
		return object != null && hasPath(object, path, baseHasIn);
	}
	module.exports = hasIn;
}));
//#endregion
//#region ../../node_modules/lodash/_baseMatchesProperty.js
var require__baseMatchesProperty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsEqual = require__baseIsEqual(), get = require_get(), hasIn = require_hasIn(), isKey = require__isKey(), isStrictComparable = require__isStrictComparable(), matchesStrictComparable = require__matchesStrictComparable(), toKey = require__toKey();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
	/**
	* The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	*
	* @private
	* @param {string} path The path of the property to get.
	* @param {*} srcValue The value to match.
	* @returns {Function} Returns the new spec function.
	*/
	function baseMatchesProperty(path, srcValue) {
		if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
		return function(object) {
			var objValue = get(object, path);
			return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
		};
	}
	module.exports = baseMatchesProperty;
}));
//#endregion
//#region ../../node_modules/lodash/identity.js
var require_identity = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns the first argument it receives.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Util
	* @param {*} value Any value.
	* @returns {*} Returns `value`.
	* @example
	*
	* var object = { 'a': 1 };
	*
	* console.log(_.identity(object) === object);
	* // => true
	*/
	function identity(value) {
		return value;
	}
	module.exports = identity;
}));
//#endregion
//#region ../../node_modules/lodash/_baseProperty.js
var require__baseProperty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.property` without support for deep paths.
	*
	* @private
	* @param {string} key The key of the property to get.
	* @returns {Function} Returns the new accessor function.
	*/
	function baseProperty(key) {
		return function(object) {
			return object == null ? void 0 : object[key];
		};
	}
	module.exports = baseProperty;
}));
//#endregion
//#region ../../node_modules/lodash/_basePropertyDeep.js
var require__basePropertyDeep = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGet = require__baseGet();
	/**
	* A specialized version of `baseProperty` which supports deep paths.
	*
	* @private
	* @param {Array|string} path The path of the property to get.
	* @returns {Function} Returns the new accessor function.
	*/
	function basePropertyDeep(path) {
		return function(object) {
			return baseGet(object, path);
		};
	}
	module.exports = basePropertyDeep;
}));
//#endregion
//#region ../../node_modules/lodash/property.js
var require_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseProperty = require__baseProperty(), basePropertyDeep = require__basePropertyDeep(), isKey = require__isKey(), toKey = require__toKey();
	/**
	* Creates a function that returns the value at `path` of a given object.
	*
	* @static
	* @memberOf _
	* @since 2.4.0
	* @category Util
	* @param {Array|string} path The path of the property to get.
	* @returns {Function} Returns the new accessor function.
	* @example
	*
	* var objects = [
	*   { 'a': { 'b': 2 } },
	*   { 'a': { 'b': 1 } }
	* ];
	*
	* _.map(objects, _.property('a.b'));
	* // => [2, 1]
	*
	* _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	* // => [1, 2]
	*/
	function property(path) {
		return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	module.exports = property;
}));
//#endregion
//#region ../../node_modules/lodash/_baseIteratee.js
var require__baseIteratee = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseMatches = require__baseMatches(), baseMatchesProperty = require__baseMatchesProperty(), identity = require_identity(), isArray = require_isArray(), property = require_property();
	/**
	* The base implementation of `_.iteratee`.
	*
	* @private
	* @param {*} [value=_.identity] The value to convert to an iteratee.
	* @returns {Function} Returns the iteratee.
	*/
	function baseIteratee(value) {
		if (typeof value == "function") return value;
		if (value == null) return identity;
		if (typeof value == "object") return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
		return property(value);
	}
	module.exports = baseIteratee;
}));
//#endregion
//#region ../../node_modules/lodash/_createAggregator.js
var require__createAggregator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayAggregator = require__arrayAggregator(), baseAggregator = require__baseAggregator(), baseIteratee = require__baseIteratee(), isArray = require_isArray();
	/**
	* Creates a function like `_.groupBy`.
	*
	* @private
	* @param {Function} setter The function to set accumulator values.
	* @param {Function} [initializer] The accumulator object initializer.
	* @returns {Function} Returns the new aggregator function.
	*/
	function createAggregator(setter, initializer) {
		return function(collection, iteratee) {
			var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
			return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
		};
	}
	module.exports = createAggregator;
}));
//#endregion
//#region src/components/reports/spreadsheets/net-worth-spreadsheet.ts
var import_keyBy = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseAssignValue = require__baseAssignValue();
	module.exports = require__createAggregator()(function(result, value, key) {
		baseAssignValue(result, key, value);
	});
})))());
function createSpreadsheet$1(start, end, accounts, conditions = [], conditionsOp = "and", locale, interval = "Monthly", firstDayOfWeekIdx = "0", format) {
	return async (spreadsheet, setData) => {
		const { filters } = await send("make-filters-from-conditions", { conditions: conditions.filter((cond) => !cond.customName) });
		const conditionsOpKey = conditionsOp === "or" ? "$or" : "$and";
		const rangeStart = parseISO(firstDayOfMonth(start));
		let startDate;
		if (interval === "Daily") startDate = dayFromDate(subDays$1(rangeStart, 1));
		else if (interval === "Weekly") startDate = weekFromDate(subDays$1(rangeStart, 1), firstDayOfWeekIdx);
		else startDate = firstDayOfMonth(prevMonth(start));
		const earliestTransaction = await send("get-earliest-transaction");
		if (earliestTransaction && earliestTransaction.date >= firstDayOfMonth(start)) if (interval === "Daily") startDate = earliestTransaction.date;
		else if (interval === "Weekly") startDate = weekFromDate(earliestTransaction.date, firstDayOfWeekIdx);
		else startDate = firstDayOfMonth(start);
		let endDate = lastDayOfMonth(end);
		if (interval === "Daily") {
			const today = currentDay();
			if (isAfter(endDate, today)) endDate = today;
		} else if (interval === "Weekly") {
			const today = currentDay();
			if (isAfter(endDate, today)) endDate = today;
		}
		setData(recalculate(await Promise.all(accounts.map(async (acct) => {
			const [starting, balances] = await Promise.all([aqlQuery(q$1("transactions").filter({
				[conditionsOpKey]: filters,
				account: acct.id,
				date: { $lt: startDate }
			}).calculate({ $sum: "$amount" })).then(({ data }) => data), aqlQuery(q$1("transactions").filter({ [conditionsOpKey]: filters }).filter({
				account: acct.id,
				$and: [{ date: { $gte: startDate } }, { date: { $lte: endDate } }]
			}).groupBy(interval === "Yearly" ? { $year: "$date" } : interval === "Daily" || interval === "Weekly" ? "date" : { $month: "$date" }).select([{ date: interval === "Yearly" ? { $year: "$date" } : interval === "Daily" || interval === "Weekly" ? "date" : { $month: "$date" } }, { amount: { $sum: "$amount" } }])).then(({ data }) => data)]);
			let processedBalances;
			if (interval === "Weekly") {
				const weeklyBalances = {};
				balances.forEach((b) => {
					const weekDate = weekFromDate(b.date, firstDayOfWeekIdx);
					weeklyBalances[weekDate] = (weeklyBalances[weekDate] || 0) + b.amount;
				});
				processedBalances = {};
				Object.entries(weeklyBalances).forEach(([date, amount]) => {
					processedBalances[date] = {
						date,
						amount
					};
				});
			} else processedBalances = (0, import_keyBy.default)(balances, "date");
			return {
				id: acct.id,
				name: acct.name,
				balances: processedBalances,
				starting
			};
		})), startDate, endDate, locale, interval, firstDayOfWeekIdx, format));
	};
}
function recalculate(data, startDate, endDate, locale, interval = "Monthly", firstDayOfWeekIdx = "0", format) {
	const intervals = interval === "Weekly" ? weekRangeInclusive(startDate, endDate, firstDayOfWeekIdx) : interval === "Daily" ? dayRangeInclusive(startDate, endDate) : interval === "Yearly" ? yearRangeInclusive(startDate, endDate) : rangeInclusive(getMonth(startDate), getMonth(endDate));
	const accountBalances = data.map((account) => {
		let balance = account.starting;
		return intervals.map((intervalItem) => {
			if (account.balances[intervalItem]) balance += account.balances[intervalItem].amount;
			return balance;
		});
	});
	const priorPeriodNetWorth = data.reduce((sum, account) => sum + account.starting, 0);
	let hasNegative = false;
	let startNetWorth = 0;
	let endNetWorth = 0;
	let lowestNetWorth = null;
	let highestNetWorth = null;
	const graphData = intervals.reduce((arr, intervalItem, idx) => {
		let debt = 0;
		let assets = 0;
		let total = 0;
		const last = arr.length === 0 ? null : arr[arr.length - 1];
		const balances = {};
		accountBalances.forEach((acctBalances, i) => {
			const balance = acctBalances[idx];
			balances[data[i].id] = balance;
			if (balance < 0) debt += -balance;
			else assets += balance;
			total += balance;
		});
		if (total < 0) hasNegative = true;
		let x;
		if (interval === "Daily" || interval === "Weekly") x = parseISO(intervalItem);
		else if (interval === "Yearly") x = parseISO(intervalItem + "-01-01");
		else x = parseISO(intervalItem + "-01");
		const change = last ? total - last.y : total - priorPeriodNetWorth;
		if (arr.length === 0) startNetWorth = total;
		endNetWorth = total;
		const displayFormat = ReportOptions.intervalFormat.get(interval) ?? "MMM ''yy";
		const tooltipFormat = interval === "Daily" ? "MMMM d, yyyy" : interval === "Weekly" ? "MMM d, yyyy" : interval === "Yearly" ? "yyyy" : "MMMM yyyy";
		const graphPoint = {
			x: format$1(x, displayFormat, { locale }),
			y: total,
			assets: format(assets, "financial"),
			debt: `-${format(debt, "financial")}`,
			change: format(change, "financial"),
			networth: format(total, "financial"),
			date: format$1(x, tooltipFormat, { locale }),
			...balances
		};
		arr.push(graphPoint);
		if (lowestNetWorth === null || graphPoint.y < lowestNetWorth) lowestNetWorth = graphPoint.y;
		if (highestNetWorth === null || graphPoint.y > highestNetWorth) highestNetWorth = graphPoint.y;
		return arr;
	}, []);
	const hasBalance = accountBalances.map((balances) => balances.some((b) => b !== 0));
	return {
		graphData: {
			data: graphData,
			hasNegative,
			start: startDate,
			end: endDate
		},
		netWorth: endNetWorth,
		totalChange: endNetWorth - startNetWorth,
		lowestNetWorth,
		highestNetWorth,
		accounts: data.filter((_, i) => hasBalance[i]).map((d) => ({
			id: d.id,
			name: d.name
		}))
	};
}
//#endregion
//#region src/components/reports/reports/NetWorth.tsx
function NetWorth() {
	const { data: widget, isLoading } = useDashboardWidget({
		id: useParams().id,
		type: "net-worth-card"
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetWorthInner, { widget });
}
function NetWorthInner({ widget }) {
	const locale = useLocale();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const format$5 = useFormat();
	const getDefaultIntervalForMode = (0, import_react.useCallback)((mode) => {
		if (mode === "lastMonth") return "Weekly";
		return "Monthly";
	}, []);
	const { data: accounts = [] } = useAccounts();
	const { conditions, conditionsOp, onApply: onApplyFilter, onDelete: onDeleteFilter, onUpdate: onUpdateFilter, onConditionsOpChange } = useRuleConditionFilters(widget?.meta?.conditions, widget?.meta?.conditionsOp);
	const [allMonths, setAllMonths] = (0, import_react.useState)(null);
	const [start, setStart] = (0, import_react.useState)(currentMonth());
	const [end, setEnd] = (0, import_react.useState)(currentMonth());
	const [mode, setMode] = (0, import_react.useState)("sliding-window");
	const [interval, setInterval] = (0, import_react.useState)(widget?.meta?.interval || getDefaultIntervalForMode(mode));
	const [graphMode, setGraphMode] = (0, import_react.useState)(widget?.meta?.mode || "trend");
	const setModeAndInterval = (0, import_react.useCallback)((newMode) => {
		setMode(newMode);
		if (!widget?.meta?.interval) setInterval(getDefaultIntervalForMode(newMode));
	}, [widget?.meta?.interval, getDefaultIntervalForMode]);
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const [_firstDayOfWeekIdx] = useSyncedPref("firstDayOfWeekIdx");
	const firstDayOfWeekIdx = _firstDayOfWeekIdx || "0";
	const data = useReport$1("net_worth", (0, import_react.useMemo)(() => createSpreadsheet$1(start, end, accounts, conditions, conditionsOp, locale, interval, firstDayOfWeekIdx, format$5), [
		start,
		end,
		accounts,
		conditions,
		conditionsOp,
		locale,
		interval,
		firstDayOfWeekIdx,
		format$5
	]));
	(0, import_react.useEffect)(() => {
		async function run() {
			const earliestTransaction = await send("get-earliest-transaction");
			setEarliestTransaction(earliestTransaction ? earliestTransaction.date : currentDay());
			const latestTransaction = await send("get-latest-transaction");
			setLatestTransaction(latestTransaction ? latestTransaction.date : currentDay());
			const currentMonth$6 = currentMonth();
			let earliestMonth = earliestTransaction ? monthFromDate(parseISO(fromDateRepr(earliestTransaction.date))) : currentMonth$6;
			const latestTransactionMonth = latestTransaction ? monthFromDate(parseISO(fromDateRepr(latestTransaction.date))) : currentMonth$6;
			const latestMonth = latestTransactionMonth > currentMonth$6 ? latestTransactionMonth : currentMonth$6;
			const yearAgo = subMonths(latestMonth, 12);
			if (earliestMonth > yearAgo) earliestMonth = yearAgo;
			setAllMonths(rangeInclusive(earliestMonth, latestMonth).map((month) => ({
				name: month,
				pretty: format(month, "MMMM yyyy", locale)
			})).reverse());
		}
		run();
	}, [locale]);
	(0, import_react.useEffect)(() => {
		if (latestTransaction) {
			const [initialStart, initialEnd, initialMode] = calculateTimeRange(widget?.meta?.timeFrame, void 0, latestTransaction);
			setStart(initialStart);
			setEnd(initialEnd);
			setModeAndInterval(initialMode);
		}
	}, [
		latestTransaction,
		widget?.meta?.timeFrame,
		setModeAndInterval
	]);
	function onChangeDates(start, end, mode) {
		setStart(start);
		setEnd(end);
		setModeAndInterval(mode);
	}
	const updateDashboardWidgetMutation = useUpdateDashboardWidgetMutation();
	async function onSaveWidget() {
		if (!widget) throw new Error("No widget that could be saved.");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				conditions,
				conditionsOp,
				interval,
				mode: graphMode,
				timeFrame: {
					start,
					end,
					mode
				}
			}
		} }, { onSuccess: () => {
			dispatch(addNotification({ notification: {
				type: "message",
				message: t("Dashboard widget successfully saved.")
			} }));
		} });
	}
	const navigate = useNavigate();
	const { isNarrowWidth } = useResponsive();
	const title = widget?.meta?.name || t("Net Worth");
	const onSaveWidgetName = async (newName) => {
		if (!widget) throw new Error("No widget that could be saved.");
		const name = newName || t("Net Worth");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				name
			}
		} });
	};
	const [earliestTransaction, setEarliestTransaction] = (0, import_react.useState)("");
	if (!allMonths || !data) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: isNarrowWidth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title,
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: () => navigate("/reports") })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditablePageHeaderTitle, {
			title,
			onSave: onSaveWidgetName
		}) : title }),
		padding: 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
			allMonths,
			start,
			end,
			earliestTransaction,
			latestTransaction,
			firstDayOfWeekIdx,
			mode,
			onChangeDates,
			filters: conditions,
			onApply: onApplyFilter,
			onUpdateFilter,
			onDeleteFilter,
			conditionsOp,
			onConditionsOpChange,
			inlineContent: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntervalSelector, {
				interval,
				onChange: setInterval
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeSelector, {
				mode: graphMode,
				onChange: setGraphMode
			})] }),
			children: widget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				onPress: onSaveWidget,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save widget" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				backgroundColor: theme.tableBackground,
				padding: 20,
				paddingTop: 0,
				flex: "1 0 auto",
				overflowY: "auto"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						textAlign: "right",
						paddingTop: 20
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: {
							...styles.largeText,
							fontWeight: 400,
							marginBottom: 5
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format$5(data.netWorth, "financial") }) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Change, { amount: data.totalChange }) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetWorthGraph, {
					graphData: data.graphData,
					accounts: data.accounts,
					showTooltip: !isNarrowWidth,
					interval,
					mode: graphMode
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						marginTop: 30,
						userSelect: "none"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "How is net worth calculated?" }) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Net worth shows the balance of all accounts over time, including all of your investments. Your \"net worth\" is considered to be the amount you'd have if you sold all your assets and paid off as much debt as possible. If you hover over the graph, you can also see the amount of assets and debt individually." }) })]
				})
			]
		})]
	});
}
function IntervalSelector({ interval, onChange }) {
	const { t } = useTranslation();
	const triggerRef = (0, import_react.useRef)(null);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const currentLabel = ReportOptions.interval.find((opt) => opt.key === interval)?.description ?? interval;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref: triggerRef,
		variant: "bare",
		onPress: () => setIsOpen(true),
		"aria-label": t("Change interval"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCalendar, { style: {
			width: 12,
			height: 12
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: { marginLeft: 5 },
			children: currentLabel
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
		triggerRef,
		placement: "bottom start",
		isOpen,
		onOpenChange: () => setIsOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
			onMenuSelect: (item) => {
				onChange(item);
				setIsOpen(false);
			},
			items: ReportOptions.interval.map(({ key, description }) => ({
				name: key,
				text: description
			}))
		})
	})] });
}
function ModeSelector({ mode, onChange }) {
	const { t } = useTranslation();
	const triggerRef = (0, import_react.useRef)(null);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const options = [{
		key: "trend",
		description: t("Trend")
	}, {
		key: "stacked",
		description: t("Stacked")
	}];
	const currentLabel = options.find((opt) => opt.key === mode)?.description ?? mode;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref: triggerRef,
		variant: "bare",
		onPress: () => setIsOpen(true),
		"aria-label": t("Change mode"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgChart, { style: {
			width: 12,
			height: 12
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: { marginLeft: 5 },
			children: currentLabel
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
		triggerRef,
		placement: "bottom start",
		isOpen,
		onOpenChange: () => setIsOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
			onMenuSelect: (item) => {
				onChange(item);
				setIsOpen(false);
			},
			items: options.map(({ key, description }) => ({
				name: key,
				text: description
			}))
		})
	})] });
}
//#endregion
//#region src/components/reports/graphs/SankeyGraph.tsx
function SankeyLink({ sourceX, sourceY, sourceControlX, targetX, targetY, targetControlX, linkWidth, payload, isHovered, onMouseEnter, onMouseLeave, color }) {
	const linkColor = payload.isNegative ? theme.errorText : color;
	const strokeWidth = linkWidth;
	const strokeOpacity = isHovered ? 1 : .6;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: `M${sourceX},${sourceY} C${sourceControlX},${sourceY} ${targetControlX},${targetY} ${targetX},${targetY}`,
		fill: "none",
		stroke: linkColor,
		strokeWidth,
		strokeOpacity,
		cursor: "default",
		onMouseEnter,
		onMouseLeave,
		style: { transition: "stroke-opacity 0.2s ease" }
	});
}
function SankeyNode({ x, y, width, height, index: _index, payload, containerWidth, containerHeight, showPercentages }) {
	const privacyMode = usePrivacyMode();
	const format = useFormat();
	const isOut = x + width + 6 > containerWidth;
	const fillColor = payload.isNegative ? theme.errorText : theme.reportsBlue;
	const toBudget = payload.toBudget ?? 0;
	const availableBelow = Math.max(0, containerHeight - 25 - (y + height));
	const proportionalHeight = toBudget > 0 && payload.value ? height * (toBudget / payload.value) : 0;
	const isClamped = proportionalHeight > availableBelow;
	const toBudgetHeight = Math.min(proportionalHeight, availableBelow);
	const renderText = (text, yOffset, fontSize = 13, opacity = 1, fontFamily, yBase = y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		textAnchor: isOut ? "end" : "start",
		x: isOut ? x - 6 : x + width + 6,
		y: yBase + yOffset,
		fontSize,
		strokeOpacity: opacity,
		fill: theme.pageText,
		fontFamily,
		children: text
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layer, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rectangle, {
			x,
			y,
			width,
			height,
			fill: fillColor
		}),
		toBudgetHeight > 0 && (isClamped ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: `
              ${x},${y + height}
              ${x + width},${y + height}
              ${x + width},${y + height + toBudgetHeight - 8}
              ${x + width / 2},${y + height + toBudgetHeight}
              ${x},${y + height + toBudgetHeight - 8}
            `,
			fill: theme.toBudgetPositive
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rectangle, {
			x,
			y: y + height,
			width,
			height: toBudgetHeight,
			fill: theme.toBudgetPositive
		})),
		renderText(payload.name || "", height / 2),
		renderText(showPercentages && payload.percentageLabel ? payload.percentageLabel : format(payload.value, "financial"), height / 2 + 13, 11, .5, privacyMode ? t("Redacted Script") : void 0),
		toBudgetHeight > 0 && renderText(format(toBudget, "financial"), toBudgetHeight / 2 + 13, 11, .5, privacyMode ? t("Redacted Script") : void 0, y + height),
		toBudgetHeight > 0 && renderText(t("To budget"), toBudgetHeight / 2, 13, 1, void 0, y + height)
	] });
}
function SankeyGraph({ style, data, showTooltip = true, showPercentages = false }) {
	const privacyMode = usePrivacyMode();
	const format = useFormat();
	const [hoveredLinkIndex, setHoveredLinkIndex] = (0, import_react.useState)(null);
	const colors = getColorScale("qualitative");
	const sourceColorMap = new Map([...new Set(data.links.filter((l) => l.source !== 0).map((l) => data.nodes[l.source]?.name))].filter(Boolean).map((name, i) => [name, colors[i % colors.length]]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		style,
		children: (width, height) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sankey$1, {
			data,
			node: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SankeyNode, {
				...props,
				containerWidth: width,
				containerHeight: height,
				showPercentages
			}),
			link: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SankeyLink, {
				...props,
				isHovered: hoveredLinkIndex === props.index,
				onMouseEnter: () => setHoveredLinkIndex(props.index),
				onMouseLeave: () => setHoveredLinkIndex(null),
				color: sourceColorMap.get(props.payload.source.name) ?? theme.reportsGray
			}),
			sort: false,
			iterations: 1e3,
			nodePadding: 23,
			width,
			height,
			margin: {
				left: 0,
				right: 0,
				top: 10,
				bottom: 25
			},
			children: showTooltip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
				content: ({ active, payload }) => {
					if (!active || !payload?.length) return null;
					const { value = 0, name = "" } = payload[0];
					const tooltipInfo = hoveredLinkIndex !== null ? data.links[hoveredLinkIndex]?.tooltipInfo : void 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: css({
							zIndex: 1e3,
							pointerEvents: "none",
							borderRadius: 2,
							boxShadow: "0 1px 6px rgba(0, 0, 0, .20)",
							backgroundColor: theme.menuBackground,
							color: theme.menuItemText,
							padding: 10
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { lineHeight: 1.4 },
							children: [
								name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: { marginBottom: 5 },
									children: name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: { fontFamily: privacyMode ? t("Redacted Script") : void 0 },
									children: format(value, "financial")
								}),
								tooltipInfo && tooltipInfo.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										marginTop: 6,
										fontSize: 11,
										opacity: .7
									},
									children: tooltipInfo.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										item.name,
										" (",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { fontFamily: privacyMode ? t("Redacted Script") : void 0 },
											children: format(item.value, "financial")
										}),
										")"
									] }, item.name))
								})
							]
						})
					});
				},
				isAnimationActive: false
			})
		}) })
	});
}
//#endregion
//#region src/components/reports/spreadsheets/sankey-spreadsheet.ts
function filterCategoryGroups(categoryGroups, conditions, conditionsOp) {
	const categoryConditions = conditions.filter((cond) => cond.field === "category");
	const categoryGroupConditions = conditions.filter((cond) => cond.field === "category_group");
	if (categoryConditions.length === 0 && categoryGroupConditions.length === 0) return categoryGroups;
	const matchesStringCondition = (id, name, cond) => {
		const value = cond.value;
		const op = cond.op;
		if (op === "is") return id === value;
		if (op === "isNot") return id !== value;
		if (op === "oneOf") return Array.isArray(value) && value.includes(id);
		if (op === "notOneOf") return !Array.isArray(value) || !value.includes(id);
		if (op === "contains") return typeof value === "string" && name.toLowerCase().includes(value.toLowerCase());
		if (op === "doesNotContain") return typeof value === "string" && !name.toLowerCase().includes(value.toLowerCase());
		if (op === "matches") {
			if (typeof value !== "string") return false;
			try {
				return (value.startsWith("/") && value.lastIndexOf("/") > 0 ? new RegExp(value.slice(1, value.lastIndexOf("/")), value.slice(value.lastIndexOf("/") + 1)) : new RegExp(value)).test(name);
			} catch {
				return false;
			}
		}
		return false;
	};
	const categoryMatchesConditions = (catId, catName, groupId, groupName) => {
		const matchesCat = (cond) => matchesStringCondition(catId, catName, cond);
		const matchesGroup = (cond) => matchesStringCondition(groupId, groupName, cond);
		if (conditionsOp === "or") return categoryConditions.some(matchesCat) || categoryGroupConditions.some(matchesGroup);
		const catMatch = categoryConditions.length === 0 || categoryConditions.every(matchesCat);
		const groupMatch = categoryGroupConditions.length === 0 || categoryGroupConditions.every(matchesGroup);
		return catMatch && groupMatch;
	};
	return categoryGroups.map((group) => ({
		...group,
		categories: group.categories.filter((cat) => categoryMatchesConditions(cat.id, cat.name, group.id, group.name))
	})).filter((group) => group.categories.length > 0);
}
function createSpreadsheet(start, end, categories, conditions = [], conditionsOp = "and", mode = "spent", topNcategories = 15, categorySort = "per-group") {
	let globalOther;
	let groupSort;
	let categoryOrder;
	if (categorySort === "global") {
		globalOther = true;
		groupSort = "global";
	} else if (categorySort === "budget-order") {
		globalOther = false;
		groupSort = "per-group";
		categoryOrder = categories.filter((g) => !g.hidden && !g.is_income).map((g) => ({
			mainCategory: g.name,
			categories: (g.categories ?? []).filter((c) => !c.hidden).map((c) => c.name)
		}));
	} else {
		globalOther = false;
		groupSort = "per-group";
	}
	return async (spreadsheet, setData) => {
		if (mode === "budgeted") return await createBudgetSpreadsheet(start, end, conditions, conditionsOp, globalOther, topNcategories, groupSort, categoryOrder)(spreadsheet, setData);
		else if (mode === "spent") return await createTransactionsSpreadsheet(start, end, categories, conditions, conditionsOp, globalOther, topNcategories, groupSort, categoryOrder)(spreadsheet, setData);
	};
}
function createBudgetSpreadsheet(start, end, conditions = [], conditionsOp = "and", globalOther = false, topNcategories = 15, groupSort = "per-group", categoryOrder) {
	return async (spreadsheet, setData) => {
		const months = end && end !== start ? rangeInclusive(start, end) : [start];
		const aggregated = (await Promise.all(months.map((m) => send("api/budget-month", { month: m })))).reduce((acc, response) => {
			acc.toBudget += response.toBudget;
			for (const group of response.categoryGroups) {
				const existingGroup = acc.categoryGroupsMap.get(group.id);
				if (!existingGroup) {
					acc.categoryGroupsMap.set(group.id, {
						...group,
						categories: group.categories.map((cat) => ({ ...cat }))
					});
					continue;
				}
				for (const cat of group.categories) {
					const existingCat = existingGroup.categories.find((c) => c.id === cat.id);
					if (!existingCat) {
						existingGroup.categories.push({ ...cat });
						continue;
					}
					existingCat.budgeted = (existingCat.budgeted ?? 0) + (cat.budgeted ?? 0);
					existingCat.spent = (existingCat.spent ?? 0) + (cat.spent ?? 0);
					existingCat.balance = (existingCat.balance ?? 0) + (cat.balance ?? 0);
				}
			}
			return acc;
		}, {
			toBudget: 0,
			categoryGroupsMap: /* @__PURE__ */ new Map()
		});
		const categoryData = filterCategoryGroups(Array.from(aggregated.categoryGroupsMap.values()), conditions, conditionsOp).filter((group) => !group.is_income).flatMap((group) => group.categories.map((cat) => ({
			mainCategory: group.name,
			group: cat.name,
			value: cat.budgeted ?? 0
		})));
		const { toBudget } = aggregated;
		setData(transformToSankeyData(categoryData, toBudget, "Budgeted", topNcategories, globalOther, groupSort, categoryOrder));
	};
}
function createTransactionsSpreadsheet(start, end, categories, conditions = [], conditionsOp = "and", globalOther = false, topNcategories = 15, groupSort = "per-group", categoryOrder) {
	return async (spreadsheet, setData) => {
		const { filters } = await send("make-filters-from-conditions", { conditions: conditions.filter((cond) => !cond.customName) });
		setData(transformToSankeyData(await fetchCategoryData(categories, conditionsOp === "or" ? "$or" : "$and", filters, start, end), 0, "Spent", topNcategories, globalOther, groupSort, categoryOrder));
	};
}
async function fetchCategoryData(categories, conditionsOpKey = "$and", filters = [], start, end) {
	return (await Promise.all(categories.map(async (mainCategory) => {
		return await Promise.all((mainCategory.categories || []).filter((group) => !group?.is_income).map(async (group) => {
			const results = await aqlQuery(q$1("transactions").filter({ [conditionsOpKey]: filters }).filter({ $and: [{ date: { $gte: firstDayOfMonth(start) } }, { date: { $lte: lastDayOfMonth(end) } }] }).filter({ category: group.id }).calculate({ $sum: "$amount" }));
			return {
				mainCategory: mainCategory.name,
				group: group.name,
				value: results.data * -1
			};
		}));
	}))).flat();
}
function greedyReduceLeaves(allLeaves, topNcategories, globalOther) {
	const perCategoryOther = /* @__PURE__ */ new Map();
	const globalOtherBucket = {
		total: 0,
		entries: []
	};
	let visibleCount = allLeaves.length;
	let otherNodeCount = 0;
	while (visibleCount + otherNodeCount > topNcategories && visibleCount > 0) {
		const minLeaf = allLeaves.filter((l) => l.visible).reduce((min, l) => l.value < min.value ? l : min);
		minLeaf.visible = false;
		visibleCount -= 1;
		if (globalOther) {
			if (globalOtherBucket.total === 0) otherNodeCount += 1;
			globalOtherBucket.total += minLeaf.value;
			globalOtherBucket.entries.push({
				name: minLeaf.group,
				value: minLeaf.value
			});
		} else {
			if (!perCategoryOther.has(minLeaf.mainCategory)) otherNodeCount += 1;
			const bucket = perCategoryOther.get(minLeaf.mainCategory) ?? {
				total: 0,
				entries: []
			};
			bucket.total += minLeaf.value;
			bucket.entries.push({
				name: minLeaf.group,
				value: minLeaf.value
			});
			perCategoryOther.set(minLeaf.mainCategory, bucket);
		}
	}
	if (globalOther) {
		if (globalOtherBucket.entries.length === 1) {
			const entry = globalOtherBucket.entries[0];
			const leaf = allLeaves.find((l) => l.group === entry.name && !l.visible);
			if (leaf) {
				leaf.visible = true;
				globalOtherBucket.total = 0;
				globalOtherBucket.entries = [];
			}
		}
	} else for (const [catName, bucket] of perCategoryOther) if (bucket.entries.length === 1) {
		const entry = bucket.entries[0];
		const leaf = allLeaves.find((l) => l.mainCategory === catName && l.group === entry.name && !l.visible);
		if (leaf) {
			leaf.visible = true;
			perCategoryOther.delete(catName);
		}
	}
	return {
		allLeaves,
		perCategoryOther,
		globalOtherBucket
	};
}
function transformToSankeyData(categoryData, toBudgetAmount = 0, rootNodeName, topNcategories = 15, globalOther = false, groupSort = "per-group", categoryOrder) {
	const allLeaves = categoryData.filter((e) => e.value > 0).map((e) => ({
		mainCategory: e.mainCategory,
		group: e.group,
		value: e.value,
		isNegative: e.isNegative ?? false,
		visible: true
	}));
	const { perCategoryOther, globalOtherBucket } = greedyReduceLeaves(allLeaves, topNcategories, globalOther);
	const categoryTotals = /* @__PURE__ */ new Map();
	for (const leaf of allLeaves) categoryTotals.set(leaf.mainCategory, (categoryTotals.get(leaf.mainCategory) ?? 0) + leaf.value);
	const sortedCategories = categoryOrder ? categoryOrder.map((c) => c.mainCategory).filter((name) => categoryTotals.has(name)).concat([...categoryTotals.keys()].filter((name) => !categoryOrder.some((c) => c.mainCategory === name)).sort((a, b) => (categoryTotals.get(b) ?? 0) - (categoryTotals.get(a) ?? 0))) : [...categoryTotals.keys()].sort((a, b) => (categoryTotals.get(b) ?? 0) - (categoryTotals.get(a) ?? 0));
	const nodes = [{
		name: rootNodeName,
		toBudget: toBudgetAmount
	}];
	const links = [];
	const catNodeIndexMap = /* @__PURE__ */ new Map();
	for (const catName of sortedCategories) {
		nodes.push({ name: catName });
		catNodeIndexMap.set(catName, nodes.length - 1);
		links.push({
			source: 0,
			target: nodes.length - 1,
			value: categoryTotals.get(catName) ?? 0
		});
	}
	if (groupSort === "global") {
		const allVisibleLeaves = allLeaves.filter((l) => l.visible).sort((a, b) => b.value - a.value);
		for (const leaf of allVisibleLeaves) {
			const catIdx = catNodeIndexMap.get(leaf.mainCategory) ?? 0;
			nodes.push({
				name: leaf.group,
				isNegative: leaf.isNegative
			});
			links.push({
				source: catIdx,
				target: nodes.length - 1,
				value: leaf.value,
				isNegative: leaf.isNegative
			});
		}
		if (!globalOther) for (const catName of sortedCategories) {
			const bucket = perCategoryOther.get(catName);
			if (bucket) {
				const catIdx = catNodeIndexMap.get(catName) ?? 0;
				nodes.push({ name: "Other" });
				links.push({
					source: catIdx,
					target: nodes.length - 1,
					value: bucket.total,
					tooltipInfo: [...bucket.entries].sort((a, b) => b.value - a.value)
				});
			}
		}
	} else for (const catName of sortedCategories) {
		const catIdx = catNodeIndexMap.get(catName) ?? 0;
		const subcatOrder = categoryOrder?.find((c) => c.mainCategory === catName)?.categories;
		const visibleLeaves = allLeaves.filter((l) => l.mainCategory === catName && l.visible).sort((a, b) => {
			if (subcatOrder) {
				const ai = subcatOrder.indexOf(a.group);
				const bi = subcatOrder.indexOf(b.group);
				if (ai === -1 && bi === -1) return b.value - a.value;
				if (ai === -1) return 1;
				if (bi === -1) return -1;
				return ai - bi;
			}
			return b.value - a.value;
		});
		for (const leaf of visibleLeaves) {
			nodes.push({
				name: leaf.group,
				isNegative: leaf.isNegative
			});
			links.push({
				source: catIdx,
				target: nodes.length - 1,
				value: leaf.value,
				isNegative: leaf.isNegative
			});
		}
		if (!globalOther) {
			const bucket = perCategoryOther.get(catName);
			if (bucket) {
				nodes.push({ name: "Other" });
				links.push({
					source: catIdx,
					target: nodes.length - 1,
					value: bucket.total,
					tooltipInfo: [...bucket.entries].sort((a, b) => b.value - a.value)
				});
			}
		}
	}
	if (globalOther && globalOtherBucket.total > 0) {
		nodes.push({ name: "Other" });
		const globalOtherIdx = nodes.length - 1;
		const byCategory = /* @__PURE__ */ new Map();
		for (const entry of globalOtherBucket.entries) {
			const leaf = allLeaves.find((l) => l.group === entry.name && !l.visible);
			if (!leaf) continue;
			const group = byCategory.get(leaf.mainCategory) ?? [];
			group.push(entry);
			byCategory.set(leaf.mainCategory, group);
		}
		for (const [catName, entries] of byCategory) {
			const sourceCatIdx = catNodeIndexMap.get(catName);
			if (sourceCatIdx === void 0) continue;
			const groupTotal = entries.reduce((sum, e) => sum + e.value, 0);
			links.push({
				source: sourceCatIdx,
				target: globalOtherIdx,
				value: groupTotal,
				tooltipInfo: [...entries].sort((a, b) => b.value - a.value)
			});
		}
	}
	return {
		nodes,
		links
	};
}
function compactSankeyData(data, topN = 5) {
	const compactedData = {
		nodes: [],
		links: []
	};
	compactedData.nodes.push(data.nodes[0]);
	const rootLinks = data.links.filter((link) => link.source === 0).sort((a, b) => b.value - a.value);
	const topLinks = rootLinks.slice(0, topN - 1);
	const otherLinks = rootLinks.slice(topN - 1);
	const otherTotal = otherLinks.reduce((sum, link) => sum + link.value, 0);
	for (const link of topLinks) {
		compactedData.nodes.push(data.nodes[link.target]);
		compactedData.links.push({
			source: 0,
			target: compactedData.nodes.length - 1,
			value: link.value
		});
	}
	if (otherTotal > 0) {
		compactedData.nodes.push({ name: "Other" });
		compactedData.links.push({
			source: 0,
			target: compactedData.nodes.length - 1,
			value: otherTotal,
			tooltipInfo: otherLinks.map((link) => ({
				name: data.nodes[link.target].name,
				value: link.value
			}))
		});
	}
	return compactedData;
}
function withPercentageLabels(data) {
	const depth = new Array(data.nodes.length).fill(-1);
	depth[0] = 0;
	let changed = true;
	while (changed) {
		changed = false;
		for (const link of data.links) {
			const src = link.source;
			const tgt = link.target;
			if (depth[src] >= 0 && depth[tgt] < 0) {
				depth[tgt] = depth[src] + 1;
				changed = true;
			}
		}
	}
	const nodeValue = (i) => data.links.filter((l) => depth[i] === 0 ? l.source === i : l.target === i).reduce((sum, l) => sum + l.value, 0);
	const layerTotal = /* @__PURE__ */ new Map();
	data.nodes.forEach((_, i) => {
		const d = depth[i];
		if (d >= 0) layerTotal.set(d, (layerTotal.get(d) ?? 0) + nodeValue(i));
	});
	const nodes = data.nodes.map((node, i) => {
		const total = layerTotal.get(depth[i]) ?? 0;
		return {
			...node,
			percentageLabel: total === 0 ? "0%" : `${(nodeValue(i) / total * 100).toFixed(1)}%`
		};
	});
	return {
		...data,
		nodes
	};
}
//#endregion
//#region src/components/reports/reports/Sankey.tsx
function Sankey() {
	const { data: widget, isLoading } = useDashboardWidget({
		id: useParams().id ?? "",
		type: "sankey-card"
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SankeyInner, { widget });
}
var TOP_N_OPTIONS = [
	10,
	15,
	20,
	25,
	30
];
function TopNSelector({ value, onChange }) {
	const { t } = useTranslation();
	const triggerRef = (0, import_react.useRef)(null);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref: triggerRef,
		variant: "bare",
		onPress: () => setIsOpen(true),
		"aria-label": t("Change category limit"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgList, { style: {
			width: 12,
			height: 12
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: { marginLeft: 5 },
			children: t("Show {{n}}", { n: value })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
		triggerRef,
		placement: "bottom start",
		isOpen,
		onOpenChange: () => setIsOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
			onMenuSelect: (item) => {
				onChange(Number(item));
				setIsOpen(false);
			},
			items: TOP_N_OPTIONS.map((n) => ({
				name: String(n),
				text: t("Show {{n}}", { n })
			}))
		})
	})] });
}
function CategorySortSelector({ value, onChange }) {
	const { t } = useTranslation();
	const triggerRef = (0, import_react.useRef)(null);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const options = [
		{
			key: "per-group",
			label: t("Sort per group")
		},
		{
			key: "global",
			label: t("Sort all")
		},
		{
			key: "budget-order",
			label: t("Sort as budget")
		}
	];
	const currentLabel = value === "global" ? t("Sort all") : value === "budget-order" ? t("Sort as budget") : t("Sort per group");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref: triggerRef,
		variant: "bare",
		onPress: () => setIsOpen(true),
		"aria-label": t("Change category sort order"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgArrowDown, { style: {
			width: 12,
			height: 12
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: { marginLeft: 5 },
			children: currentLabel
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
		triggerRef,
		placement: "bottom start",
		isOpen,
		onOpenChange: () => setIsOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
			onMenuSelect: (item) => {
				onChange(item);
				setIsOpen(false);
			},
			items: options.map(({ key, label }) => ({
				name: key,
				text: label
			}))
		})
	})] });
}
function GraphModeSelector({ mode, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
		gap: 5,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeButton, {
			selected: mode === "spent",
			style: { backgroundColor: "inherit" },
			onSelect: () => {
				onChange("spent");
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Spent" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeButton, {
			selected: mode === "budgeted",
			onSelect: () => {
				onChange("budgeted");
			},
			style: { backgroundColor: "inherit" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Budgeted" })
		})]
	});
}
function OptionsButton({ showPercentages, onTogglePercentages }) {
	const { t } = useTranslation();
	const triggerRef = (0, import_react.useRef)(null);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref: triggerRef,
		onPress: () => setIsOpen(true),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Options" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
		triggerRef,
		placement: "bottom end",
		isOpen,
		onOpenChange: () => setIsOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
			onMenuSelect: (item) => {
				if (item === "show-percentages") onTogglePercentages();
			},
			items: [{
				name: "show-percentages",
				text: t("Show as percentages"),
				toggle: showPercentages
			}]
		})
	})] });
}
function SankeyInner({ widget }) {
	const locale = useLocale();
	const dispatch = useDispatch();
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	const { isNarrowWidth } = useResponsive();
	const { conditions, conditionsOp, onApply: onApplyFilter, onDelete: onDeleteFilter, onUpdate: onUpdateFilter, onConditionsOpChange } = useRuleConditionFilters(widget?.meta?.conditions, widget?.meta?.conditionsOp);
	const currentMonth$4 = currentMonth();
	const [allMonths, setAllMonths] = (0, import_react.useState)([{
		name: currentMonth$4,
		pretty: format(currentMonth$4, "MMMM yyyy", locale)
	}]);
	const [start, setStart] = (0, import_react.useState)(currentMonth());
	const [end, setEnd] = (0, import_react.useState)(currentMonth());
	const [timeFrameMode, setTimeFrameMode] = (0, import_react.useState)(widget?.meta?.timeFrame?.mode ?? "sliding-window");
	const [datesInitialized, setDatesInitialized] = (0, import_react.useState)(false);
	const [earliestTransaction, setEarliestTransaction] = (0, import_react.useState)("");
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const [graphMode, setGraphMode] = (0, import_react.useState)(widget?.meta?.mode ?? "spent");
	const [topNcategories, settopNcategories] = (0, import_react.useState)(widget?.meta?.topNcategories ?? 15);
	const [categorySort, setCategorySort] = (0, import_react.useState)(widget?.meta?.categorySort ?? "per-group");
	const [showPercentages, setShowPercentages] = (0, import_react.useState)(widget?.meta?.showPercentages ?? false);
	const { data: { grouped: groupedCategories = [] } = { grouped: [] } } = useCategories();
	const reportParams = (0, import_react.useMemo)(() => {
		if (!datesInitialized) return null;
		return createSpreadsheet(start, end, groupedCategories, conditions, conditionsOp, graphMode, topNcategories, categorySort);
	}, [
		datesInitialized,
		start,
		end,
		groupedCategories,
		conditions,
		conditionsOp,
		graphMode,
		topNcategories,
		categorySort
	]);
	const defaultGetData = async (spreadsheet, setData) => setData({
		nodes: [],
		links: []
	});
	const data = useReport$1("sankey", reportParams ?? defaultGetData);
	(0, import_react.useEffect)(() => {
		async function run() {
			const earliestTransaction = await send("get-earliest-transaction");
			setEarliestTransaction(earliestTransaction ? earliestTransaction.date : currentDay());
			const latestTransaction = await send("get-latest-transaction");
			const latestTransactionDate = latestTransaction ? latestTransaction.date : currentDay();
			setLatestTransaction(latestTransactionDate);
			const [initialStart, initialEnd, initialMode] = calculateTimeRange(widget?.meta?.timeFrame, void 0, latestTransactionDate);
			setStart(initialStart);
			setEnd(initialEnd);
			setTimeFrameMode(initialMode);
			setDatesInitialized(true);
			const currentMonth$5 = currentMonth();
			let earliestMonth = earliestTransaction ? monthFromDate(parseISO(fromDateRepr(earliestTransaction.date))) : currentMonth$5;
			const latestTransactionMonth = latestTransaction ? monthFromDate(parseISO(fromDateRepr(latestTransaction.date))) : currentMonth$5;
			const latestMonth = latestTransactionMonth > currentMonth$5 ? latestTransactionMonth : currentMonth$5;
			const yearAgo = subMonths(latestMonth, 12);
			if (earliestMonth > yearAgo) earliestMonth = yearAgo;
			setAllMonths(rangeInclusive(earliestMonth, latestMonth).map((month) => ({
				name: month,
				pretty: format(month, "MMMM yyyy", locale)
			})).reverse());
		}
		run();
	}, [locale, widget?.meta?.timeFrame]);
	function onChangeDates(start, end, mode) {
		setStart(start);
		setEnd(end);
		setTimeFrameMode(mode);
	}
	const updateDashboardWidgetMutation = useUpdateDashboardWidgetMutation();
	async function onSaveWidget() {
		if (!widget) throw new Error("No widget that could be saved.");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				conditions,
				conditionsOp,
				mode: graphMode,
				topNcategories,
				categorySort,
				showPercentages,
				timeFrame: {
					start,
					end,
					mode: timeFrameMode
				}
			}
		} }, { onSuccess: () => {
			dispatch(addNotification({ notification: {
				type: "message",
				message: t("Dashboard widget successfully saved.")
			} }));
		} });
	}
	const onSaveWidgetName = async (newName) => {
		if (!widget) throw new Error("No widget that could be saved.");
		const name = newName || t("Sankey");
		await send("dashboard-update-widget", {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				name
			}
		});
	};
	const title = widget?.meta?.name || t("Sankey");
	const ignoredFilterFields = graphMode === "budgeted" ? [...new Set(conditions.filter((c) => c.field !== "category" && c.field !== "category_group").map((c) => mapField(c.field)))] : [];
	const ignoredFilterFieldsList = useFormatList(ignoredFilterFields, i18n.language);
	if (!datesInitialized || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: isNarrowWidth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title,
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: () => navigate("/reports") })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditablePageHeaderTitle, {
			title,
			onSave: onSaveWidgetName
		}) : title }),
		padding: 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Header, {
			allMonths,
			start,
			end,
			mode: timeFrameMode,
			show1Month: true,
			earliestTransaction,
			latestTransaction,
			onChangeDates,
			filters: conditions,
			onApply: onApplyFilter,
			onUpdateFilter,
			onDeleteFilter,
			conditionsOp,
			onConditionsOpChange,
			filterExclude: ["date"],
			inlineContent: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
					width: 1,
					height: 28,
					backgroundColor: theme.pillBorderDark,
					marginRight: 10,
					marginLeft: 10
				} }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphModeSelector, {
					mode: graphMode,
					onChange: setGraphMode
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
					width: 1,
					height: 28,
					backgroundColor: theme.pillBorderDark,
					marginRight: 10,
					marginLeft: 10
				} }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopNSelector, {
					value: topNcategories,
					onChange: settopNcategories
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategorySortSelector, {
					value: categorySort,
					onChange: setCategorySort
				})
			] }),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: { marginRight: 4 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionsButton, {
					showPercentages,
					onTogglePercentages: () => setShowPercentages((v) => !v)
				})
			}), widget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				onPress: onSaveWidget,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save widget" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				backgroundColor: theme.tableBackground,
				padding: 20,
				paddingTop: 0,
				flex: "1 0 auto",
				overflowY: "visible"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					display: "flex",
					flexDirection: "row",
					paddingTop: 0,
					flexGrow: 1
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: { flexGrow: 1 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: {
							backgroundColor: theme.tableBackground,
							padding: 20,
							paddingTop: 0,
							flex: "1 0 auto",
							overflowY: "auto"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: {
								flexDirection: "column",
								flexGrow: 1,
								padding: 10,
								paddingTop: 10
							},
							children: [
								data && data.links && data.links.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SankeyGraph, {
									style: { flexGrow: 1 },
									data: showPercentages ? withPercentageLabels(data) : data,
									showPercentages
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
									style: {
										flexGrow: 1,
										alignItems: "center",
										justifyContent: "center",
										color: theme.pageTextSubdued
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
										style: {
											fontSize: 16,
											textAlign: "center"
										},
										children: [graphMode === "budgeted" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "No data available for this period. Try budgeting categories or selecting a different period." }), graphMode === "spent" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "No data available for this period. Try adding transactions or selecting a different period." })]
									})
								}),
								ignoredFilterFields.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
									style: {
										marginTop: 10,
										padding: "8px 12px",
										backgroundColor: theme.warningBackground,
										borderRadius: 4,
										color: theme.warningText
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: { fontSize: 13 },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
											"Filters on ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: ignoredFilterFieldsList }),
											" ",
											"are ignored in ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Budgeted" }),
											" mode."
										] })
									})
								}),
								!isNarrowWidth && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
									style: { marginTop: 30 },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "What is a Sankey plot?" }) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: "A Sankey plot visualizes the flow of quantities between multiple categories, emphasizing the distribution and proportional relationships of data streams." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "View options:" }) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											style: {
												marginTop: 0,
												paddingLeft: 20
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												style: { marginBottom: 5 },
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Spent:" }), " Displays actual spending by category from transactions."]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												style: { marginBottom: 5 },
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Budgeted:" }), " Shows how your budget is allocated across categories."]
											})]
										})
									] })
								})
							]
						})
					})
				})
			})
		})]
	});
}
//#endregion
//#region src/components/reports/graphs/SpendingGraph.tsx
var CustomTooltip = ({ active, payload, balanceTypeOp, selection, compare, format }) => {
	const { t } = useTranslation();
	if (active && payload && payload.length) {
		const comparison = ["average", "budget"].includes(selection) ? payload[0].payload[selection] * -1 : (payload[0].payload.months[selection]?.cumulative ?? 0) * -1;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: css({
				zIndex: 1e3,
				pointerEvents: "none",
				borderRadius: 2,
				boxShadow: "0 1px 6px rgba(0, 0, 0, .20)",
				backgroundColor: theme.menuBackground,
				color: theme.menuItemText,
				padding: 10
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: { marginBottom: 10 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
					"Day:",
					" ",
					{ dayOfMonth: Number(payload[0].payload.day) >= 28 ? t("28+") : payload[0].payload.day }
				] }) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: { lineHeight: 1.5 },
				children: [
					payload[0].payload.months[compare]?.cumulative ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
						left: t("Compare:"),
						right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(payload[0].payload.months[compare]?.cumulative * -1, "financial") })
					}) : null,
					["cumulative"].includes(balanceTypeOp) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
						left: selection === "average" ? t("Average:") : selection === "budget" ? t("Budgeted:") : t("To:"),
						right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(Math.round(comparison), "financial") })
					}),
					payload[0].payload.months[compare]?.cumulative ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
						left: t("Difference:"),
						right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(Math.round(payload[0].payload.months[compare]?.cumulative * -1 - comparison), "financial") })
					}) : null
				]
			})] })
		});
	}
};
function SpendingGraph({ style, data, compact, mode, compare, compareTo }) {
	const privacyMode = usePrivacyMode();
	const animationProps = useRechartsAnimation({ isAnimationActive: false });
	const balanceTypeOp = "cumulative";
	const format = useFormat();
	const selection = mode === "single-month" ? compareTo : mode;
	const thisMonthMax = data.intervalData.reduce((a, b) => a.months[compare]?.[balanceTypeOp] < b.months[compare]?.[balanceTypeOp] ? a : b).months[compare]?.[balanceTypeOp];
	const maxYAxis = (["average", "budget"].includes(selection) ? data.intervalData[27][selection] : data.intervalData.reduce((a, b) => a.months[selection]?.[balanceTypeOp] < b.months[selection]?.[balanceTypeOp] ? a : b).months[selection]?.[balanceTypeOp]) > thisMonthMax;
	const dataMax = Math.max(...data.intervalData.map((i) => i.months[compare]?.cumulative));
	const dataMin = Math.min(...data.intervalData.map((i) => i.months[compare]?.cumulative));
	const tickFormatter = (tick) => {
		if (!privacyMode) return `${format(tick, "financial-no-decimals")}`;
		return "...";
	};
	const gradientOffset = () => {
		if (!dataMax || dataMax <= 0) return 0;
		if (!dataMin || dataMin >= 0) return 1;
		return dataMax / (dataMax - dataMin);
	};
	const getVal = (obj, month) => {
		if (["average", "budget"].includes(month)) return obj[month] && -1 * obj[month];
		else return obj.months[month]?.[balanceTypeOp] && -1 * obj.months[month][balanceTypeOp];
	};
	const getDate = (obj) => {
		return Number(obj.day) >= 28 ? "28+" : obj.day;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		style: {
			...style,
			...compact && { height: "auto" }
		},
		children: (width, height) => data.intervalData && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "5px" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
			responsive: true,
			width,
			height,
			data: data.intervalData,
			margin: {
				top: 0,
				right: 0,
				left: computePadding(data.intervalData.map((item) => getVal(item, maxYAxis ? compare : selection)).filter((value) => value !== void 0), (value) => format(value, "financial-no-decimals")),
				bottom: 0
			},
			children: [
				compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					strokeDasharray: "3 3",
					vertical: false
				}),
				compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: (val) => getDate(val),
					tick: { fill: theme.pageText },
					tickLine: { stroke: theme.pageText }
				}),
				compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					dataKey: (val) => getVal(val, maxYAxis ? compare : selection),
					domain: [0, "auto"],
					tickFormatter,
					tick: { fill: theme.pageText },
					tickLine: { stroke: theme.pageText },
					tickSize: 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTooltip, {
						balanceTypeOp,
						selection,
						compare,
						format
					}),
					formatter: numberFormatterTooltip,
					isAnimationActive: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("linearGradient", {
					id: `fill${balanceTypeOp}`,
					x1: "0",
					y1: "0",
					x2: "0",
					y2: "1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: gradientOffset(),
						stopColor: theme.reportsChartFill,
						stopOpacity: .2
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("linearGradient", {
					id: `stroke${balanceTypeOp}`,
					x1: "0",
					y1: "0",
					x2: "0",
					y2: "1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: gradientOffset(),
						stopColor: theme.reportsChartFill,
						stopOpacity: 1
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
					type: "linear",
					dot: false,
					activeDot: {
						fill: theme.reportsChartFill,
						fillOpacity: 1,
						r: 10
					},
					...animationProps,
					dataKey: (val) => getVal(val, compare),
					stroke: `url(#stroke${balanceTypeOp})`,
					strokeWidth: 3,
					fill: `url(#fill${balanceTypeOp})`,
					fillOpacity: 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
					type: "linear",
					dot: false,
					activeDot: false,
					...animationProps,
					dataKey: (val) => getVal(val, selection),
					stroke: theme.reportsGray,
					strokeDasharray: "10 10",
					strokeWidth: 3,
					fill: theme.reportsGray,
					fillOpacity: .2
				})
			]
		})] })
	});
}
//#endregion
//#region src/components/reports/spreadsheets/spending-spreadsheet.ts
function createSpendingSpreadsheet({ conditions = [], conditionsOp, compare, compareTo, budgetType = "envelope" }) {
	const startDate = subMonths(compare, 3) + "-01";
	const endDate = getMonthEnd(compare + "-01");
	const startDateTo = compareTo + "-01";
	const endDateTo = getMonthEnd(compareTo + "-01");
	const interval = "Daily";
	const compareInterval = dayRangeInclusive(compare + "-01", endDate);
	return async (spreadsheet, setData) => {
		const { filters } = await send("make-filters-from-conditions", { conditions: conditions.filter((cond) => !cond.customName) });
		const { filters: budgetFilters } = await send("make-filters-from-conditions", {
			conditions: conditions.filter((cond) => !cond.customName && cond.field === "category"),
			applySpecialCases: false
		});
		const conditionsOpKey = conditionsOp === "or" ? "$or" : "$and";
		const [assets, debts] = await Promise.all([aqlQuery(makeQuery("assets", startDate, endDate, interval, conditionsOpKey, filters)).then(({ data }) => data), aqlQuery(makeQuery("debts", startDate, endDate, interval, conditionsOpKey, filters)).then(({ data }) => data)]);
		const [assetsTo, debtsTo] = await Promise.all([aqlQuery(makeQuery("assets", startDateTo, endDateTo, interval, conditionsOpKey, filters)).then(({ data }) => data), aqlQuery(makeQuery("debts", startDateTo, endDateTo, interval, conditionsOpKey, filters)).then(({ data }) => data)]);
		const overlapAssets = endDateTo < startDate || startDateTo > endDate ? assetsTo : [];
		const overlapDebts = endDateTo < startDate || startDateTo > endDate ? debtsTo : [];
		const combineAssets = [...assets, ...overlapAssets];
		const combineDebts = [...debts, ...overlapDebts];
		const budgetMonth = parseInt(compare.replace("-", ""));
		const budgetTable = budgetType === "tracking" ? "reflect_budgets" : "zero_budgets";
		const [budgets] = await Promise.all([aqlQuery(q$1(budgetTable).filter({ $and: [{ month: { $eq: budgetMonth } }] }).filter({ [conditionsOpKey]: budgetFilters }).groupBy([{ $id: "$category" }]).select([{ category: { $id: "$category" } }, { amount: { $sum: "$amount" } }])).then(({ data }) => data)]);
		const dailyBudget = budgets && budgets.reduce((a, v) => a + v.amount, 0) / compareInterval.length;
		const intervals = dayRangeInclusive(startDate, endDate);
		if (endDateTo < startDate || startDateTo > endDate) intervals.push(...dayRangeInclusive(startDateTo, endDateTo));
		const days = [...Array(29).keys()].filter((f) => f > 0).map((n) => n.toString().padStart(2, "0"));
		let totalAssets = 0;
		let totalDebts = 0;
		let totalBudget = 0;
		const months = rangeInclusive(startDate, endDate).map((month) => {
			return {
				month,
				perMonthAssets: 0,
				perMonthDebts: 0
			};
		});
		if (endDateTo < startDate || startDateTo > endDate) months.unshift({
			month: compareTo,
			perMonthAssets: 0,
			perMonthDebts: 0
		});
		setData({
			intervalData: days.map((day) => {
				let averageSum = 0;
				let monthCount = 0;
				const dayData = months.map((month) => {
					const data = intervals.reduce((arr, intervalItem) => {
						const offsetDay = Number(intervalItem.substring(8, 10)) >= 28 ? "28" : intervalItem.substring(8, 10);
						let perIntervalAssets = 0;
						let perIntervalDebts = 0;
						if (month.month === getMonth(intervalItem) && day === offsetDay) {
							const intervalAssets = combineAssets.filter((e) => !e.categoryIncome && !e.accountOffBudget).filter((asset) => asset.date === intervalItem).reduce((a, v) => a + v.amount, 0);
							perIntervalAssets += intervalAssets;
							const intervalDebts = combineDebts.filter((e) => !e.categoryIncome && !e.accountOffBudget).filter((debt) => debt.date === intervalItem).reduce((a, v) => a + v.amount, 0);
							perIntervalDebts += intervalDebts;
							totalAssets += perIntervalAssets;
							totalDebts += perIntervalDebts;
							let cumulativeAssets = 0;
							let cumulativeDebts = 0;
							if (month.month === compare) totalBudget -= dailyBudget;
							months.map((m) => {
								if (m.month === month.month) {
									cumulativeAssets = m.perMonthAssets += perIntervalAssets;
									cumulativeDebts = m.perMonthDebts += perIntervalDebts;
								}
								return null;
							});
							if (month.month >= monthFromDate(startDate) && month.month < compare) if (day === "28") {
								if (getMonthEnd(intervalItem) === intervalItem) {
									averageSum += cumulativeAssets + cumulativeDebts;
									monthCount += 1;
								}
							} else {
								averageSum += cumulativeAssets + cumulativeDebts;
								monthCount += 1;
							}
							arr.push({
								date: intervalItem,
								totalDebts: perIntervalDebts,
								totalAssets: perIntervalAssets,
								totalTotals: perIntervalDebts + perIntervalAssets,
								cumulative: intervalItem <= currentDay() ? cumulativeDebts + cumulativeAssets : null
							});
						}
						return arr;
					}, []);
					const maxCumulative = data.reduce((a, b) => b.cumulative === null ? a : b).cumulative;
					const totalDaily = data.reduce((a, v) => a + v.totalTotals, 0);
					return {
						date: data[0].date,
						cumulative: maxCumulative,
						daily: totalDaily,
						month: month.month
					};
				});
				return {
					months: (0, import_keyBy.default)(dayData, "month"),
					day,
					average: Math.round(averageSum / monthCount),
					compare: dayData.filter((c) => c.month === compare)[0].cumulative,
					compareTo: dayData.filter((c) => c.month === compareTo)[0].cumulative,
					budget: totalBudget
				};
			}),
			startDate,
			endDate,
			totalDebts,
			totalAssets,
			totalTotals: totalAssets + totalDebts
		});
	};
}
//#endregion
//#region src/components/reports/reports/Spending.tsx
function Spending() {
	const { data: widget, isPending } = useDashboardWidget({
		id: useParams().id,
		type: "spending-card"
	});
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpendingInternal, { widget });
}
function SpendingInternal({ widget }) {
	const locale = useLocale();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const format$4 = useFormat();
	const [budgetTypePref] = useSyncedPref("budgetType");
	const budgetType = budgetTypePref === "tracking" ? "tracking" : "envelope";
	const { conditions, conditionsOp, onApply: onApplyFilter, onDelete: onDeleteFilter, onUpdate: onUpdateFilter, onConditionsOpChange } = useRuleConditionFilters(widget?.meta?.conditions, widget?.meta?.conditionsOp);
	const [allIntervals, setAllIntervals] = (0, import_react.useState)([]);
	const initialReportMode = widget?.meta?.mode ?? "single-month";
	const [initialCompare, initialCompareTo] = calculateSpendingReportTimeRange(widget?.meta ?? {});
	const [compare, setCompare] = (0, import_react.useState)(initialCompare);
	const [compareTo, setCompareTo] = (0, import_react.useState)(initialCompareTo);
	const [isLive, setIsLive] = (0, import_react.useState)(widget?.meta?.isLive ?? true);
	const [reportMode, setReportMode] = (0, import_react.useState)(initialReportMode);
	(0, import_react.useEffect)(() => {
		async function run() {
			const earliestTrans = await send("get-earliest-transaction");
			const latestTrans = await send("get-latest-transaction");
			const currentMonth$3 = currentMonth();
			let earliestMonth = earliestTrans ? monthFromDate(parseISO(fromDateRepr(earliestTrans.date))) : currentMonth$3;
			const latestTransactionMonth = latestTrans ? monthFromDate(parseISO(fromDateRepr(latestTrans.date))) : currentMonth$3;
			const latestMonth = latestTransactionMonth > currentMonth$3 ? latestTransactionMonth : currentMonth$3;
			const yearAgo = subMonths(latestMonth, 12);
			if (earliestMonth > yearAgo) earliestMonth = yearAgo;
			setAllIntervals(rangeInclusive(earliestMonth, latestMonth).map((month) => ({
				name: month,
				pretty: format(month, "MMMM yyyy", locale)
			})).reverse());
		}
		run();
	}, [locale]);
	const data = useReport$1("default", (0, import_react.useMemo)(() => createSpendingSpreadsheet({
		conditions,
		conditionsOp,
		compare,
		compareTo,
		budgetType
	}), [
		conditions,
		conditionsOp,
		compare,
		compareTo,
		budgetType
	]));
	const navigate = useNavigate();
	const { isNarrowWidth } = useResponsive();
	const updateDashboardWidgetMutation = useUpdateDashboardWidgetMutation();
	async function onSaveWidget() {
		if (!widget) throw new Error("No widget that could be saved.");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				conditions,
				conditionsOp,
				compare,
				compareTo,
				isLive,
				mode: reportMode
			}
		} }, { onSuccess: () => {
			dispatch(addNotification({ notification: {
				type: "message",
				message: t("Dashboard widget successfully saved.")
			} }));
		} });
	}
	if (!data) return null;
	const showAverage = data.intervalData[27].months[subMonths(compare, 3)] && Math.abs(data.intervalData[27].months[subMonths(compare, 3)].cumulative) > 0;
	const todayDay = compare !== currentMonth() ? 27 : getDay$1(currentDay()) - 1 >= 28 ? 27 : getDay$1(currentDay()) - 1;
	const showCompareTo = compareTo === currentMonth() || Math.abs(data.intervalData[27].compareTo) > 0;
	const showCompare = compare === currentMonth() || Math.abs(data.intervalData[27].compare) > 0;
	const title = widget?.meta?.name || t("Monthly Spending");
	const onSaveWidgetName = async (newName) => {
		if (!widget) throw new Error("No widget that could be saved.");
		const name = newName || t("Monthly Spending");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				name
			}
		} });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: isNarrowWidth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title,
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: () => navigate("/reports") })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditablePageHeaderTitle, {
			title,
			onSave: onSaveWidgetName
		}) : title }),
		padding: 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				paddingLeft: 20,
				paddingRight: 20,
				paddingTop: 15,
				paddingBottom: 20,
				flexShrink: 0
			},
			children: [!isNarrowWidth && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
				gap: 0,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: isLive ? "primary" : "normal",
						onPress: () => setIsLive((state) => !state),
						children: isLive ? t("Live") : t("Static")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
						width: 1,
						height: 28,
						backgroundColor: theme.pillBorderDark,
						marginRight: 10,
						marginLeft: 10
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
						gap: 5,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Compare" }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: compare,
								onChange: setCompare,
								options: allIntervals.map(({ name, pretty }) => [name, pretty]),
								style: { width: 150 },
								popoverStyle: { width: 150 }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "to" }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: reportMode === "single-month" ? compareTo : "label",
								onChange: setCompareTo,
								options: reportMode === "single-month" ? allIntervals.map(({ name, pretty }) => [name, pretty]) : [["label", reportMode === "budget" ? t("Budgeted") : t("Average spent")]],
								disabled: reportMode !== "single-month",
								style: { width: 150 },
								popoverStyle: { width: 150 }
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
						width: 1,
						height: 28,
						backgroundColor: theme.pillBorderDark,
						marginRight: 15,
						marginLeft: 15
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
						gap: 5,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeButton, {
								selected: reportMode === "single-month",
								style: { backgroundColor: "inherit" },
								onSelect: () => {
									setReportMode("single-month");
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Single month" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeButton, {
								selected: reportMode === "budget",
								onSelect: () => {
									setReportMode("budget");
								},
								style: { backgroundColor: "inherit" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Budgeted" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeButton, {
								selected: reportMode === "average",
								onSelect: () => {
									setReportMode("average");
								},
								style: { backgroundColor: "inherit" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Average" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
						width: 1,
						height: 28,
						backgroundColor: theme.pillBorderDark,
						marginRight: 10,
						marginLeft: 10
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: {
							alignItems: "center",
							flexDirection: "row",
							flex: 1
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterButton, {
								onApply: onApplyFilter,
								compact: isNarrowWidth,
								hover: false,
								exclude: ["date"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: { flex: 1 } }),
							widget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
								placement: "top end",
								content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save compare and filter options" }) }),
								style: {
									...styles.tooltip,
									lineHeight: 1.5,
									padding: "6px 10px",
									marginLeft: 10
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "primary",
									style: { marginLeft: 10 },
									onPress: onSaveWidget,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save" })
								})
							})
						]
					})
				]
			}), conditions && conditions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					marginTop: 5,
					flexShrink: 0,
					flexDirection: "row",
					spacing: 2
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppliedFilters, {
					conditions,
					onUpdate: onUpdateFilter,
					onDelete: onDeleteFilter,
					conditionsOp,
					onConditionsOpChange
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				display: "flex",
				flexDirection: "row",
				paddingTop: 0,
				flexGrow: 1
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: { flexGrow: 1 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: {
						backgroundColor: theme.tableBackground,
						padding: 20,
						paddingTop: 0,
						flex: "1 0 auto",
						overflowY: "auto"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: {
							flexDirection: "column",
							flexGrow: 1,
							padding: 10,
							paddingTop: 10
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
								style: {
									alignItems: "center",
									flexDirection: "row"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegendItem, {
										color: theme.reportsGreen,
										label: format(compare, "MMM yyyy", locale),
										style: {
											padding: 0,
											paddingBottom: 10
										}
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegendItem, {
										color: theme.reportsGray,
										label: reportMode === "single-month" ? format(compareTo, "MMM yyyy", locale) : reportMode === "budget" ? t("Budgeted") : t("Average"),
										style: {
											padding: 0,
											paddingBottom: 10
										}
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: { flex: 1 } }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
										style: {
											alignItems: "flex-end",
											color: theme.pageText
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [showCompare && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
												style: {
													marginBottom: 5,
													minWidth: 210
												},
												left: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, { children: [compare === currentMonth() ? t("Spent {{monthYearFormatted}} MTD", { monthYearFormatted: format(compare, "MMM yyyy", locale) }) : t("Spent {{monthYearFormatted}}", { monthYearFormatted: format(compare, "MMM yyyy", locale) }), ":"] }),
												right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
													style: { fontWeight: 600 },
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format$4(Math.abs(data.intervalData[todayDay].compare), "financial") })
												})
											}), reportMode === "single-month" && showCompareTo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
												style: {
													marginBottom: 5,
													minWidth: 210
												},
												left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, { children: compareTo === currentMonth() ? t("Spent {{monthYearFormatted}} MTD:", { monthYearFormatted: format(compareTo, "MMM yyyy", locale) }) : t("Spent {{monthYearFormatted}}:", { monthYearFormatted: format(compareTo, "MMM yyyy", locale) }) }),
												right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
													style: { fontWeight: 600 },
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format$4(Math.abs(data.intervalData[todayDay].compareTo), "financial") })
												})
											})] }),
											Math.abs(data.intervalData[todayDay].budget) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
												style: {
													marginBottom: 5,
													minWidth: 210
												},
												left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, { children: compare === currentMonth() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Budgeted MTD" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Budgeted" }) }),
												right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
													style: { fontWeight: 600 },
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format$4(Math.round(Math.abs(data.intervalData[todayDay].budget)), "financial") })
												})
											}),
											showAverage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignedText, {
												style: {
													marginBottom: 5,
													minWidth: 210
												},
												left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, { children: compare === currentMonth() ? t("Spent Average {{monthYearFormatted}} MTD:", { monthYearFormatted: format(compare, "MMM yyyy", locale) }) : t("Spent Average {{monthYearFormatted}}:", { monthYearFormatted: format(compare, "MMM yyyy", locale) }) }),
												right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
													style: { fontWeight: 600 },
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format$4(Math.abs(data.intervalData[todayDay].average), "financial") })
												})
											})
										]
									})
								]
							}),
							data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpendingGraph, {
								style: { flexGrow: 1 },
								compact: false,
								data,
								mode: reportMode,
								compare,
								compareTo
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, { message: t("Loading report...") }),
							showAverage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
								style: { marginTop: 30 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "How are \"Average\" and \"Spent Average MTD\" calculated?" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paragraph, { children: "They are both the average cumulative spending by day for the three months before the selected \"compare\" month." })] })
							})
						]
					})
				})
			})
		})]
	});
}
//#endregion
//#region src/components/reports/spreadsheets/summary-spreadsheet.ts
function summarySpreadsheet(start, end, conditions = [], conditionsOp = "and", summaryContent, locale) {
	return async (spreadsheet, setData) => {
		let filters = [];
		try {
			filters = (await send("make-filters-from-conditions", { conditions: conditions.filter((cond) => !cond.customName) })).filters;
		} catch (error) {
			console.error("Error fetching filters:", error);
		}
		const conditionsOpKey = conditionsOp === "or" ? "$or" : "$and";
		let startDay;
		let endDay;
		try {
			startDay = parse(firstDayOfMonth(start), "yyyy-MM-dd", /* @__PURE__ */ new Date());
			endDay = parse(getMonth(end) === getMonth(currentDay()) ? currentDay() : lastDayOfMonth(end), "yyyy-MM-dd", /* @__PURE__ */ new Date());
		} catch (error) {
			console.error("Error parsing dates:", error);
			throw new Error("Invalid date format provided");
		}
		if (!isValid(startDay) || !isValid(endDay)) throw new Error("Invalid date values provided");
		if (isAfter$1(startDay, endDay)) throw new Error("Start date must be before or equal to end date.");
		const getOneDatePerMonth = (start, end) => {
			const months = [];
			let currentDate = startOfMonth(start);
			while (!isSameMonth(currentDate, end)) {
				months.push(currentDate);
				currentDate = addMonths$1(currentDate, 1);
			}
			months.push(end);
			return months;
		};
		const makeRootQuery = () => q$1("transactions").filter({ $and: [{ date: { $gte: format$1(startDay, "yyyy-MM-dd") } }, { date: { $lte: format$1(endDay, "yyyy-MM-dd") } }] }).filter({ [conditionsOpKey]: filters }).select([
			"date",
			{ amount: { $sum: "$amount" } },
			{ count: { $count: "*" } }
		]);
		let query = makeRootQuery();
		if (summaryContent.type === "avgPerMonth" || summaryContent.type === "avgPerYear") query = query.groupBy(["date"]);
		let data;
		try {
			data = await aqlQuery(query);
		} catch (error) {
			console.error("Error executing query:", error);
			return;
		}
		const dateRanges = {
			fromRange: format$1(startDay, "MMM yy", { locale }),
			toRange: format$1(endDay, "MMM yy", { locale })
		};
		switch (summaryContent.type) {
			case "sum":
				setData({
					...dateRanges,
					total: data.data[0]?.amount ?? 0,
					dividend: data.data[0]?.amount ?? 0,
					divisor: 0
				});
				break;
			case "avgPerTransact":
				setData({
					...dateRanges,
					total: data.data[0]?.count ?? 0 ? (data.data[0]?.amount ?? 0) / data.data[0].count : 0,
					dividend: data.data[0]?.amount ?? 0,
					divisor: data.data[0].count
				});
				break;
			case "avgPerMonth": {
				const months = getOneDatePerMonth(startDay, endDay);
				setData({
					...dateRanges,
					...calculatePerMonth(data.data, months)
				});
				break;
			}
			case "avgPerYear":
				setData({
					...dateRanges,
					...calculatePerYear(data.data, startDay, endDay)
				});
				break;
			case "percentage":
				setData({
					...dateRanges,
					...await calculatePercentage(data.data, summaryContent, startDay, endDay)
				});
				break;
			default: throw new Error(`Unsupported summary type`);
		}
	};
}
function calculatePerMonth(data, months) {
	if (!data.length || !months.length) return {
		total: 0,
		dividend: 0,
		divisor: 0
	};
	const monthlyData = data.reduce((acc, day) => {
		const monthKey = format$1(parse(day.date, "yyyy-MM-dd", /* @__PURE__ */ new Date()), "yyyy-MM");
		acc[monthKey] = (acc[monthKey] || 0) + day.amount;
		return acc;
	}, {});
	const monthsSum = months.map((m) => ({ amount: monthlyData[format$1(m, "yyyy-MM")] || 0 }));
	const lastMonth = months.at(-1);
	const dayOfMonth = lastMonth.getDate();
	const daysInMonth = getDay$1(lastDayOfMonth(lastMonth));
	const numMonths = months.length - 1 + dayOfMonth / daysInMonth;
	const totalAmount = monthsSum.reduce((sum, month) => sum + month.amount, 0);
	return {
		total: totalAmount / numMonths,
		dividend: totalAmount,
		divisor: numMonths
	};
}
function calculatePerYear(data, startDate, endDate) {
	if (!data.length) return {
		total: 0,
		dividend: 0,
		divisor: 0
	};
	const totalAmount = data.reduce((sum, day) => sum + day.amount, 0);
	const numYears = (differenceInDays(endDate, startDate) + 1) / 365.25;
	return {
		total: totalAmount / numYears,
		dividend: totalAmount,
		divisor: numYears
	};
}
async function calculatePercentage(data, summaryContent, startDay, endDay) {
	if (summaryContent.type !== "percentage") return {
		total: 0,
		dividend: 0,
		divisor: 0
	};
	const conditionsOpKey = summaryContent.divisorConditionsOp === "or" ? "$or" : "$and";
	let filters = [];
	try {
		filters = (await send("make-filters-from-conditions", { conditions: summaryContent?.divisorConditions?.filter((cond) => !cond.customName) })).filters;
	} catch (error) {
		console.error("Error creating filters:", error);
		return {
			total: 0,
			dividend: 0,
			divisor: 0
		};
	}
	const makeDivisorQuery = () => q$1("transactions").filter({ [conditionsOpKey]: filters }).select([{ amount: { $sum: "$amount" } }]);
	let query = makeDivisorQuery();
	if (!(summaryContent.divisorAllTimeDateRange ?? false)) query = query.filter({ $and: [{ date: { $gte: format$1(startDay, "yyyy-MM-dd") } }, { date: { $lte: format$1(endDay, "yyyy-MM-dd") } }] });
	let divisorData;
	try {
		divisorData = await aqlQuery(query);
	} catch (error) {
		console.error("Error executing divisor query:", error);
		return {
			total: 0,
			dividend: 0,
			divisor: 0
		};
	}
	const divisorValue = divisorData?.data?.[0]?.amount ?? 0;
	const dividend = data.reduce((prev, ac) => prev + (ac?.amount ?? 0), 0);
	return {
		total: Math.round((dividend ?? 0) / (divisorValue ?? 1) * 1e4) / 100,
		divisor: divisorValue ?? 0,
		dividend: dividend ?? 0
	};
}
//#endregion
//#region src/components/reports/reports/Summary.tsx
function Summary() {
	const { data: widget, isPending } = useDashboardWidget({
		id: useParams().id,
		type: "summary-card"
	});
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryInner, { widget });
}
function SummaryInner({ widget }) {
	const locale = useLocale();
	const { t } = useTranslation();
	const format$3 = useFormat();
	const [start, setStart] = (0, import_react.useState)(dayFromDate(currentMonth()));
	const [end, setEnd] = (0, import_react.useState)(currentDay());
	const [mode, setMode] = (0, import_react.useState)("full");
	const dividendFilters = useRuleConditionFilters(widget?.meta?.conditions ?? [], widget?.meta?.conditionsOp ?? "and");
	const [content, setContent] = (0, import_react.useState)(widget?.meta?.content ? (() => {
		try {
			return JSON.parse(widget.meta.content);
		} catch (error) {
			console.error("Failed to parse widget meta content:", error);
			return {
				type: "sum",
				divisorAllTimeDateRange: false,
				divisorConditions: [],
				divisorConditionsOp: "and"
			};
		}
	})() : {
		type: "sum",
		divisorAllTimeDateRange: false,
		divisorConditions: [],
		divisorConditionsOp: "and"
	});
	const divisorFilters = useRuleConditionFilters(content.type === "percentage" ? content?.divisorConditions ?? [] : [], content.type === "percentage" ? content?.divisorConditionsOp ?? "and" : "and");
	const data = useReport$1("summary", (0, import_react.useMemo)(() => summarySpreadsheet(start, end, dividendFilters.conditions, dividendFilters.conditionsOp, content, locale), [
		start,
		end,
		dividendFilters.conditions,
		dividendFilters.conditionsOp,
		content,
		locale
	]));
	(0, import_react.useEffect)(() => {
		setContent((prev) => ({
			...prev,
			divisorConditions: divisorFilters.conditions,
			divisorConditionsOp: divisorFilters.conditionsOp
		}));
	}, [divisorFilters.conditions, divisorFilters.conditionsOp]);
	const [allMonths, setAllMonths] = (0, import_react.useState)([]);
	const [earliestTransaction, setEarliestTransaction] = (0, import_react.useState)("");
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const [_firstDayOfWeekIdx] = useSyncedPref("firstDayOfWeekIdx");
	const firstDayOfWeekIdx = _firstDayOfWeekIdx || "0";
	(0, import_react.useEffect)(() => {
		async function run() {
			const earliestTransaction = await send("get-earliest-transaction");
			setEarliestTransaction(earliestTransaction ? earliestTransaction.date : currentDay());
			const latestTransaction = await send("get-latest-transaction");
			setLatestTransaction(latestTransaction ? latestTransaction.date : currentDay());
			const currentMonth$2 = currentMonth();
			let earliestMonth = earliestTransaction ? monthFromDate(parseISO(fromDateRepr(earliestTransaction.date))) : currentMonth$2;
			const latestTransactionMonth = latestTransaction ? monthFromDate(parseISO(fromDateRepr(latestTransaction.date))) : currentMonth$2;
			const latestMonth = latestTransactionMonth > currentMonth$2 ? latestTransactionMonth : currentMonth$2;
			const yearAgo = subMonths(latestMonth, 12);
			if (earliestMonth > yearAgo) earliestMonth = yearAgo;
			setAllMonths(rangeInclusive(earliestMonth, latestMonth).map((month) => ({
				name: month,
				pretty: format(month, "MMMM yyyy", locale)
			})).reverse());
		}
		run();
	}, [locale]);
	(0, import_react.useEffect)(() => {
		if (latestTransaction) {
			const [initialStart, initialEnd, initialMode] = calculateTimeRange(widget?.meta?.timeFrame, {
				start: dayFromDate(currentMonth()),
				end: currentDay(),
				mode: "full"
			}, latestTransaction);
			setStart(initialStart);
			setEnd(initialEnd);
			setMode(initialMode);
		}
	}, [latestTransaction, widget?.meta?.timeFrame]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isNarrowWidth } = useResponsive();
	const title = widget?.meta?.name || t("Summary");
	const updateDashboardWidgetMutation = useUpdateDashboardWidgetMutation();
	const onSaveWidgetName = async (newName) => {
		if (!widget) {
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Cannot save: No widget available.")
			} }));
			return;
		}
		const name = newName || t("Summary");
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				name,
				content: JSON.stringify(content)
			}
		} });
	};
	function onChangeDates(start, end, mode) {
		setStart(start);
		setEnd(end);
		setMode(mode);
	}
	async function onSaveWidget() {
		if (!widget) {
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Cannot save: No widget available.")
			} }));
			return;
		}
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.id,
			meta: {
				...widget.meta ?? {},
				conditions: dividendFilters.conditions,
				conditionsOp: dividendFilters.conditionsOp,
				timeFrame: {
					start,
					end,
					mode
				},
				content: JSON.stringify(content)
			}
		} }, { onSuccess: () => {
			dispatch(addNotification({ notification: {
				type: "message",
				message: t("Dashboard widget successfully saved.")
			} }));
		} });
	}
	const getDivisorFormatted = (contentType, value) => {
		if (contentType === "avgPerMonth") return format$3(value, "number");
		else if (contentType === "avgPerYear") return format$3(value, "number");
		else if (contentType === "avgPerTransact") return format$3(value, "number");
		return format$3(Math.round(value), "financial");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: isNarrowWidth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title,
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: () => navigate("/reports") })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: widget ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditablePageHeaderTitle, {
			title,
			onSave: onSaveWidgetName
		}) : title }),
		padding: 0,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				allMonths,
				start,
				end,
				earliestTransaction,
				latestTransaction,
				firstDayOfWeekIdx,
				mode,
				onChangeDates,
				show1Month: true,
				children: widget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "primary",
					onPress: onSaveWidget,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save widget" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					width: "100%",
					background: theme.pageBackground
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						width: "100%",
						alignContent: "center",
						justifyContent: "flex-start",
						alignItems: "center",
						flexDirection: "row",
						padding: 16
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { marginRight: 4 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Show as" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
						style: { marginRight: 16 },
						fields: [
							["sum", t("Sum")],
							["avgPerMonth", t("Average per month")],
							["avgPerYear", t("Average per year")],
							["avgPerTransact", t("Average per transaction")],
							["percentage", t("Percentage")]
						],
						value: content.type ?? "sum",
						onChange: (newValue) => setContent((prev) => ({
							...prev,
							type: newValue
						}))
					})]
				}), content.type === "percentage" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						marginLeft: 16
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
							id: "enabled-field",
							checked: content.divisorAllTimeDateRange ?? false,
							onChange: () => {
								const currentValue = content.divisorAllTimeDateRange ?? false;
								setContent((prev) => ({
									...prev,
									divisorAllTimeDateRange: !currentValue
								}));
							}
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "All time divisor" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					background: theme.pageBackground,
					padding: 20,
					paddingTop: 0,
					flexGrow: 1
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						justifyContent: "center",
						width: "100%",
						alignItems: "center"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Operator, {
							type: content.type,
							dividendFilterObject: dividendFilters,
							divisorFilterObject: divisorFilters,
							showDivisorDateRange: content.type === "percentage" ? !(content.divisorAllTimeDateRange ?? false) : false,
							fromRange: data?.fromRange ?? "",
							toRange: data?.toRange ?? ""
						}),
						content.type !== "sum" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgEquals, {
							width: 50,
							style: { marginLeft: 56 }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: { padding: 16 },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									style: {
										fontSize: "50px",
										width: "100%",
										textAlign: "center"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format$3(data?.dividend ?? 0, "financial") }) })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
									width: "100%",
									marginTop: 32,
									marginBottom: 32,
									borderTop: "2px solid",
									borderBottom: "2px solid"
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									style: {
										fontSize: "50px",
										width: "100%",
										textAlign: "center"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: getDivisorFormatted(content.type, data?.divisor ?? 0) })
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgEquals, {
							width: 50,
							style: { marginLeft: 16 }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								flexGrow: 1,
								textAlign: "center",
								width: "250px",
								maxWidth: "250px",
								justifyItems: "center",
								alignItems: "center",
								marginLeft: 16,
								fontSize: "50px",
								justifyContent: "center",
								color: (data?.total ?? 0) === 0 ? theme.reportsNumberNeutral : (data?.total ?? 0) < 0 ? theme.reportsNumberNegative : theme.reportsNumberPositive
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrivacyFilter, { children: [content.type === "percentage" ? format$3(Math.abs(data?.total ?? 0), "number") : format$3(Math.abs(Math.round(data?.total ?? 0)), "financial"), content.type === "percentage" ? "%" : ""] })
						})
					]
				})
			})
		]
	});
}
function Operator({ type, dividendFilterObject, divisorFilterObject, fromRange, toRange, showDivisorDateRange }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SumWithRange, {
			from: fromRange,
			to: toRange,
			filterObject: dividendFilterObject
		}),
		type === "percentage" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
			width: "100%",
			marginTop: 32,
			marginBottom: 32,
			borderTop: "2px solid",
			borderBottom: "2px solid"
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SumWithRange, {
			from: !showDivisorDateRange ? "" : fromRange,
			to: !showDivisorDateRange ? "" : toRange,
			filterObject: divisorFilterObject
		})] }),
		type !== "percentage" && type !== "sum" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
			width: "100%",
			marginTop: 32,
			marginBottom: 32,
			borderTop: "2px solid",
			borderBottom: "2px solid"
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: {
				fontSize: "32px",
				width: "100%",
				textAlign: "center"
			},
			children: type === "avgPerMonth" ? t("number of months") : type === "avgPerYear" ? t("number of years") : t("number of transactions")
		})] })
	] });
}
function SumWithRange({ from, to, containerStyle, filterObject }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			...containerStyle,
			height: "100%",
			flexDirection: "row",
			alignItems: "center",
			position: "relative",
			display: "grid",
			gridTemplateColumns: "70px 15px 1fr 15px"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					position: "relative",
					height: "50px",
					marginRight: 50
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgSum, {
						width: 50,
						height: 50
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							position: "absolute",
							right: -30,
							top: -20
						},
						children: to
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							position: "absolute",
							right: -30,
							bottom: -20
						},
						children: from
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgOpenParenthesis, {
				width: 15,
				style: { height: "100%" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					marginLeft: 16,
					maxWidth: "220px",
					marginRight: 16
				},
				children: (filterObject.conditions?.length ?? 0) === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					style: {
						fontSize: "25px",
						color: theme.pageTextPositive
					},
					children: t("all transactions")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppliedFilters, {
					conditions: filterObject.conditions,
					onUpdate: filterObject.onUpdate,
					onDelete: filterObject.onDelete,
					conditionsOp: filterObject.conditionsOp,
					onConditionsOpChange: filterObject.onConditionsOpChange
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCloseParenthesis, {
				width: 15,
				style: { height: "100%" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					position: "absolute",
					top: -15,
					right: -55
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterButton, {
					compact: false,
					onApply: filterObject.onApply,
					hover: false
				})
			})
		]
	});
}
//#endregion
//#region ../../node_modules/react-grid-layout/dist/chunk-76RTO6EO.mjs
function calcGridColWidth(positionParams) {
	const { margin, containerPadding, containerWidth, cols } = positionParams;
	return (containerWidth - margin[0] * (cols - 1) - containerPadding[0] * 2) / cols;
}
function calcGridItemWHPx(gridUnits, colOrRowSize, marginPx) {
	if (!Number.isFinite(gridUnits)) return gridUnits;
	return Math.round(colOrRowSize * gridUnits + Math.max(0, gridUnits - 1) * marginPx);
}
function calcGridItemPosition(positionParams, x, y, w, h, dragPosition, resizePosition) {
	const { margin, containerPadding, rowHeight } = positionParams;
	const colWidth = calcGridColWidth(positionParams);
	let width;
	let height;
	let top;
	let left;
	if (resizePosition) {
		width = Math.round(resizePosition.width);
		height = Math.round(resizePosition.height);
	} else {
		width = calcGridItemWHPx(w, colWidth, margin[0]);
		height = calcGridItemWHPx(h, rowHeight, margin[1]);
	}
	if (dragPosition) {
		top = Math.round(dragPosition.top);
		left = Math.round(dragPosition.left);
	} else if (resizePosition) {
		top = Math.round(resizePosition.top);
		left = Math.round(resizePosition.left);
	} else {
		top = Math.round((rowHeight + margin[1]) * y + containerPadding[1]);
		left = Math.round((colWidth + margin[0]) * x + containerPadding[0]);
	}
	if (!dragPosition && !resizePosition) {
		if (Number.isFinite(w)) {
			const actualMarginRight = Math.round((colWidth + margin[0]) * (x + w) + containerPadding[0]) - left - width;
			if (actualMarginRight !== margin[0]) width += actualMarginRight - margin[0];
		}
		if (Number.isFinite(h)) {
			const actualMarginBottom = Math.round((rowHeight + margin[1]) * (y + h) + containerPadding[1]) - top - height;
			if (actualMarginBottom !== margin[1]) height += actualMarginBottom - margin[1];
		}
	}
	return {
		top,
		left,
		width,
		height
	};
}
function calcXY(positionParams, top, left, w, h) {
	const { margin, containerPadding, cols, rowHeight, maxRows } = positionParams;
	const colWidth = calcGridColWidth(positionParams);
	let x = Math.round((left - containerPadding[0]) / (colWidth + margin[0]));
	let y = Math.round((top - containerPadding[1]) / (rowHeight + margin[1]));
	x = clamp$1(x, 0, cols - w);
	y = clamp$1(y, 0, maxRows - h);
	return {
		x,
		y
	};
}
function calcXYRaw(positionParams, top, left) {
	const { margin, containerPadding, rowHeight } = positionParams;
	const colWidth = calcGridColWidth(positionParams);
	return {
		x: Math.round((left - containerPadding[0]) / (colWidth + margin[0])),
		y: Math.round((top - containerPadding[1]) / (rowHeight + margin[1]))
	};
}
function calcWHRaw(positionParams, width, height) {
	const { margin, rowHeight } = positionParams;
	const colWidth = calcGridColWidth(positionParams);
	return {
		w: Math.max(1, Math.round((width + margin[0]) / (colWidth + margin[0]))),
		h: Math.max(1, Math.round((height + margin[1]) / (rowHeight + margin[1])))
	};
}
function clamp$1(num, lowerBound, upperBound) {
	return Math.max(Math.min(num, upperBound), lowerBound);
}
function collides(l1, l2) {
	if (l1.i === l2.i) return false;
	if (l1.x + l1.w <= l2.x) return false;
	if (l1.x >= l2.x + l2.w) return false;
	if (l1.y + l1.h <= l2.y) return false;
	if (l1.y >= l2.y + l2.h) return false;
	return true;
}
function getFirstCollision(layout, layoutItem) {
	for (let i = 0; i < layout.length; i++) {
		const item = layout[i];
		if (item !== void 0 && collides(item, layoutItem)) return item;
	}
}
function getAllCollisions(layout, layoutItem) {
	return layout.filter((l) => collides(l, layoutItem));
}
function sortLayoutItems(layout, compactType) {
	if (compactType === "horizontal") return sortLayoutItemsByColRow(layout);
	if (compactType === "vertical") return sortLayoutItemsByRowCol(layout);
	if (compactType === "wrap") return sortLayoutItemsByRowCol(layout);
	return [...layout];
}
function sortLayoutItemsByRowCol(layout) {
	return [...layout].sort((a, b) => {
		if (a.y !== b.y) return a.y - b.y;
		return a.x - b.x;
	});
}
function sortLayoutItemsByColRow(layout) {
	return [...layout].sort((a, b) => {
		if (a.x !== b.x) return a.x - b.x;
		return a.y - b.y;
	});
}
function bottom(layout) {
	let max = 0;
	for (let i = 0; i < layout.length; i++) {
		const item = layout[i];
		if (item !== void 0) {
			const bottomY = item.y + item.h;
			if (bottomY > max) max = bottomY;
		}
	}
	return max;
}
function getLayoutItem(layout, id) {
	for (let i = 0; i < layout.length; i++) {
		const item = layout[i];
		if (item !== void 0 && item.i === id) return item;
	}
}
function getStatics(layout) {
	return layout.filter((l) => l.static === true);
}
function cloneLayoutItem(layoutItem) {
	return {
		i: layoutItem.i,
		x: layoutItem.x,
		y: layoutItem.y,
		w: layoutItem.w,
		h: layoutItem.h,
		minW: layoutItem.minW,
		maxW: layoutItem.maxW,
		minH: layoutItem.minH,
		maxH: layoutItem.maxH,
		moved: Boolean(layoutItem.moved),
		static: Boolean(layoutItem.static),
		isDraggable: layoutItem.isDraggable,
		isResizable: layoutItem.isResizable,
		resizeHandles: layoutItem.resizeHandles,
		constraints: layoutItem.constraints,
		isBounded: layoutItem.isBounded
	};
}
function cloneLayout(layout) {
	const newLayout = new Array(layout.length);
	for (let i = 0; i < layout.length; i++) {
		const item = layout[i];
		if (item !== void 0) newLayout[i] = cloneLayoutItem(item);
	}
	return newLayout;
}
function modifyLayout(layout, layoutItem) {
	const newLayout = new Array(layout.length);
	for (let i = 0; i < layout.length; i++) {
		const item = layout[i];
		if (item !== void 0) if (layoutItem.i === item.i) newLayout[i] = layoutItem;
		else newLayout[i] = item;
	}
	return newLayout;
}
function withLayoutItem(layout, itemKey, cb) {
	let item = getLayoutItem(layout, itemKey);
	if (!item) return [[...layout], null];
	item = cb(cloneLayoutItem(item));
	return [modifyLayout(layout, item), item];
}
function correctBounds(layout, bounds) {
	const collidesWith = getStatics(layout);
	for (let i = 0; i < layout.length; i++) {
		const l = layout[i];
		if (l === void 0) continue;
		if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w;
		if (l.x < 0) {
			l.x = 0;
			l.w = bounds.cols;
		}
		if (!l.static) collidesWith.push(l);
		else while (getFirstCollision(collidesWith, l)) l.y++;
	}
	return layout;
}
function moveElement(layout, l, x, y, isUserAction, preventCollision, compactType, cols, allowOverlap) {
	if (l.static && l.isDraggable !== true) return [...layout];
	if (l.y === y && l.x === x) return [...layout];
	const oldX = l.x;
	const oldY = l.y;
	if (typeof x === "number") l.x = x;
	if (typeof y === "number") l.y = y;
	l.moved = true;
	let sorted = sortLayoutItems(layout, compactType);
	if (compactType === "vertical" && typeof y === "number" ? oldY >= y : compactType === "horizontal" && typeof x === "number" ? oldX >= x : false) sorted = sorted.reverse();
	const collisions = getAllCollisions(sorted, l);
	const hasCollisions = collisions.length > 0;
	if (hasCollisions && allowOverlap) return cloneLayout(layout);
	if (hasCollisions && preventCollision) {
		l.x = oldX;
		l.y = oldY;
		l.moved = false;
		return layout;
	}
	let resultLayout = [...layout];
	for (let i = 0; i < collisions.length; i++) {
		const collision = collisions[i];
		if (collision === void 0) continue;
		if (collision.moved) continue;
		if (collision.static) resultLayout = moveElementAwayFromCollision(resultLayout, collision, l, isUserAction, compactType);
		else resultLayout = moveElementAwayFromCollision(resultLayout, l, collision, isUserAction, compactType);
	}
	return resultLayout;
}
function moveElementAwayFromCollision(layout, collidesWith, itemToMove, isUserAction, compactType, cols) {
	const compactH = compactType === "horizontal";
	const compactV = compactType === "vertical";
	const preventCollision = collidesWith.static;
	if (isUserAction) {
		isUserAction = false;
		const fakeItem = {
			x: compactH ? Math.max(collidesWith.x - itemToMove.w, 0) : itemToMove.x,
			y: compactV ? Math.max(collidesWith.y - itemToMove.h, 0) : itemToMove.y,
			w: itemToMove.w,
			h: itemToMove.h,
			i: "-1"
		};
		const firstCollision = getFirstCollision(layout, fakeItem);
		const collisionNorth = firstCollision !== void 0 && firstCollision.y + firstCollision.h > collidesWith.y;
		const collisionWest = firstCollision !== void 0 && collidesWith.x + collidesWith.w > firstCollision.x;
		if (!firstCollision) return moveElement(layout, itemToMove, compactH ? fakeItem.x : void 0, compactV ? fakeItem.y : void 0, isUserAction, preventCollision, compactType);
		if (collisionNorth && compactV) return moveElement(layout, itemToMove, void 0, itemToMove.y + 1, isUserAction, preventCollision, compactType);
		if (collisionNorth && compactType === null) {
			collidesWith.y = itemToMove.y;
			itemToMove.y = itemToMove.y + itemToMove.h;
			return [...layout];
		}
		if (collisionWest && compactH) return moveElement(layout, collidesWith, itemToMove.x, void 0, isUserAction, preventCollision, compactType);
	}
	const newX = compactH ? itemToMove.x + 1 : void 0;
	const newY = compactV ? itemToMove.y + 1 : void 0;
	if (newX === void 0 && newY === void 0) return [...layout];
	return moveElement(layout, itemToMove, newX, newY, isUserAction, preventCollision, compactType);
}
//#endregion
//#region ../../node_modules/react-grid-layout/dist/chunk-KDANGDDL.mjs
function clamp(value, min, max) {
	return Math.max(min, Math.min(max, value));
}
var defaultConstraints = [{
	name: "gridBounds",
	constrainPosition(item, x, y, { cols, maxRows }) {
		return {
			x: clamp(x, 0, Math.max(0, cols - item.w)),
			y: clamp(y, 0, Math.max(0, maxRows - item.h))
		};
	},
	constrainSize(item, w, h, handle, { cols, maxRows }) {
		const maxW = handle === "w" || handle === "nw" || handle === "sw" ? item.x + item.w : cols - item.x;
		const maxH = handle === "n" || handle === "nw" || handle === "ne" ? item.y + item.h : maxRows - item.y;
		return {
			w: clamp(w, 1, Math.max(1, maxW)),
			h: clamp(h, 1, Math.max(1, maxH))
		};
	}
}, {
	name: "minMaxSize",
	constrainSize(item, w, h) {
		return {
			w: clamp(w, item.minW ?? 1, item.maxW ?? Infinity),
			h: clamp(h, item.minH ?? 1, item.maxH ?? Infinity)
		};
	}
}];
function applyPositionConstraints(constraints, item, x, y, context) {
	let result = {
		x,
		y
	};
	for (const constraint of constraints) if (constraint.constrainPosition) result = constraint.constrainPosition(item, result.x, result.y, context);
	if (item.constraints) {
		for (const constraint of item.constraints) if (constraint.constrainPosition) result = constraint.constrainPosition(item, result.x, result.y, context);
	}
	return result;
}
function applySizeConstraints(constraints, item, w, h, handle, context) {
	let result = {
		w,
		h
	};
	for (const constraint of constraints) if (constraint.constrainSize) result = constraint.constrainSize(item, result.w, result.h, handle, context);
	if (item.constraints) {
		for (const constraint of item.constraints) if (constraint.constrainSize) result = constraint.constrainSize(item, result.w, result.h, handle, context);
	}
	return result;
}
function setTransform({ top, left, width, height }) {
	const translate = `translate(${left}px,${top}px)`;
	return {
		transform: translate,
		WebkitTransform: translate,
		MozTransform: translate,
		msTransform: translate,
		OTransform: translate,
		width: `${width}px`,
		height: `${height}px`,
		position: "absolute"
	};
}
function setTopLeft({ top, left, width, height }) {
	return {
		top: `${top}px`,
		left: `${left}px`,
		width: `${width}px`,
		height: `${height}px`,
		position: "absolute"
	};
}
function perc(num) {
	return num * 100 + "%";
}
function constrainWidth(left, currentWidth, newWidth, containerWidth) {
	return left + newWidth > containerWidth ? currentWidth : newWidth;
}
function constrainHeight(top, currentHeight, newHeight) {
	return top < 0 ? currentHeight : newHeight;
}
function constrainLeft(left) {
	return Math.max(0, left);
}
function constrainTop(top) {
	return Math.max(0, top);
}
var resizeNorth = (currentSize, newSize, _containerWidth) => {
	const { left, height, width } = newSize;
	const top = currentSize.top - (height - currentSize.height);
	return {
		left,
		width,
		height: constrainHeight(top, currentSize.height, height),
		top: constrainTop(top)
	};
};
var resizeEast = (currentSize, newSize, containerWidth) => {
	const { top, left, height, width } = newSize;
	return {
		top,
		height,
		width: constrainWidth(currentSize.left, currentSize.width, width, containerWidth),
		left: constrainLeft(left)
	};
};
var resizeWest = (currentSize, newSize, _containerWidth) => {
	const { top, height, width } = newSize;
	const left = currentSize.left + currentSize.width - width;
	if (left < 0) return {
		height,
		width: currentSize.left + currentSize.width,
		top: constrainTop(top),
		left: 0
	};
	return {
		height,
		width,
		top: constrainTop(top),
		left
	};
};
var resizeSouth = (currentSize, newSize, _containerWidth) => {
	const { top, left, height, width } = newSize;
	return {
		width,
		left,
		height: constrainHeight(top, currentSize.height, height),
		top: constrainTop(top)
	};
};
var resizeNorthEast = (currentSize, newSize, containerWidth) => resizeNorth(currentSize, resizeEast(currentSize, newSize, containerWidth));
var resizeNorthWest = (currentSize, newSize, containerWidth) => resizeNorth(currentSize, resizeWest(currentSize, newSize));
var resizeSouthEast = (currentSize, newSize, containerWidth) => resizeSouth(currentSize, resizeEast(currentSize, newSize, containerWidth));
var resizeSouthWest = (currentSize, newSize, containerWidth) => resizeSouth(currentSize, resizeWest(currentSize, newSize));
var resizeHandlerMap = {
	n: resizeNorth,
	ne: resizeNorthEast,
	e: resizeEast,
	se: resizeSouthEast,
	s: resizeSouth,
	sw: resizeSouthWest,
	w: resizeWest,
	nw: resizeNorthWest
};
function resizeItemInDirection(direction, currentSize, newSize, containerWidth) {
	const handler = resizeHandlerMap[direction];
	if (!handler) return newSize;
	return handler(currentSize, {
		...currentSize,
		...newSize
	}, containerWidth);
}
var defaultPositionStrategy = {
	type: "transform",
	scale: 1,
	calcStyle(pos) {
		return setTransform(pos);
	}
};
var defaultGridConfig = {
	cols: 12,
	rowHeight: 150,
	margin: [10, 10],
	containerPadding: null,
	maxRows: Infinity
};
var defaultDragConfig = {
	enabled: true,
	bounded: false,
	threshold: 3
};
var defaultResizeConfig = {
	enabled: true,
	handles: ["se"]
};
var defaultDropConfig = {
	enabled: false,
	defaultItem: {
		w: 1,
		h: 1
	}
};
function resolveCompactionCollision(layout, item, moveToCoord, axis, hasStatics) {
	const sizeProp = axis === "x" ? "w" : "h";
	item[axis] += 1;
	const itemIndex = layout.findIndex((l) => l.i === item.i);
	const layoutHasStatics = hasStatics ?? getStatics(layout).length > 0;
	for (let i = itemIndex + 1; i < layout.length; i++) {
		const otherItem = layout[i];
		if (otherItem === void 0) continue;
		if (otherItem.static) continue;
		if (!layoutHasStatics && otherItem.y > item.y + item.h) break;
		if (collides(item, otherItem)) resolveCompactionCollision(layout, otherItem, moveToCoord + item[sizeProp], axis, layoutHasStatics);
	}
	item[axis] = moveToCoord;
}
function compactItemVertical(compareWith, l, fullLayout, maxY) {
	l.x = Math.max(l.x, 0);
	l.y = Math.max(l.y, 0);
	l.y = Math.min(maxY, l.y);
	while (l.y > 0 && !getFirstCollision(compareWith, l)) l.y--;
	let collision;
	while ((collision = getFirstCollision(compareWith, l)) !== void 0) resolveCompactionCollision(fullLayout, l, collision.y + collision.h, "y");
	l.y = Math.max(l.y, 0);
	return l;
}
function compactItemHorizontal(compareWith, l, cols, fullLayout) {
	l.x = Math.max(l.x, 0);
	l.y = Math.max(l.y, 0);
	while (l.x > 0 && !getFirstCollision(compareWith, l)) l.x--;
	let collision;
	while ((collision = getFirstCollision(compareWith, l)) !== void 0) {
		resolveCompactionCollision(fullLayout, l, collision.x + collision.w, "x");
		if (l.x + l.w > cols) {
			l.x = cols - l.w;
			l.y++;
			while (l.x > 0 && !getFirstCollision(compareWith, l)) l.x--;
		}
	}
	l.x = Math.max(l.x, 0);
	return l;
}
var verticalCompactor = {
	type: "vertical",
	allowOverlap: false,
	compact(layout, _cols) {
		const compareWith = getStatics(layout);
		let maxY = bottom(compareWith);
		const sorted = sortLayoutItemsByRowCol(layout);
		const out = new Array(layout.length);
		for (let i = 0; i < sorted.length; i++) {
			const sortedItem = sorted[i];
			if (sortedItem === void 0) continue;
			let l = cloneLayoutItem(sortedItem);
			if (!l.static) {
				l = compactItemVertical(compareWith, l, sorted, maxY);
				maxY = Math.max(maxY, l.y + l.h);
				compareWith.push(l);
			}
			const originalIndex = layout.indexOf(sortedItem);
			out[originalIndex] = l;
			l.moved = false;
		}
		return out;
	}
};
var horizontalCompactor = {
	type: "horizontal",
	allowOverlap: false,
	compact(layout, cols) {
		const compareWith = getStatics(layout);
		const sorted = sortLayoutItemsByColRow(layout);
		const out = new Array(layout.length);
		for (let i = 0; i < sorted.length; i++) {
			const sortedItem = sorted[i];
			if (sortedItem === void 0) continue;
			let l = cloneLayoutItem(sortedItem);
			if (!l.static) {
				l = compactItemHorizontal(compareWith, l, cols, sorted);
				compareWith.push(l);
			}
			const originalIndex = layout.indexOf(sortedItem);
			out[originalIndex] = l;
			l.moved = false;
		}
		return out;
	}
};
var noCompactor = {
	type: null,
	allowOverlap: false,
	compact(layout, _cols) {
		return cloneLayout(layout);
	}
};
var verticalOverlapCompactor = {
	...verticalCompactor,
	allowOverlap: true,
	compact(layout, _cols) {
		return cloneLayout(layout);
	}
};
var horizontalOverlapCompactor = {
	...horizontalCompactor,
	allowOverlap: true,
	compact(layout, _cols) {
		return cloneLayout(layout);
	}
};
var noOverlapCompactor = {
	...noCompactor,
	allowOverlap: true
};
function getCompactor(compactType, allowOverlap = false, preventCollision = false) {
	let baseCompactor;
	if (allowOverlap) if (compactType === "vertical") baseCompactor = verticalOverlapCompactor;
	else if (compactType === "horizontal") baseCompactor = horizontalOverlapCompactor;
	else baseCompactor = noOverlapCompactor;
	else if (compactType === "vertical") baseCompactor = verticalCompactor;
	else if (compactType === "horizontal") baseCompactor = horizontalCompactor;
	else baseCompactor = noCompactor;
	if (preventCollision) return {
		...baseCompactor,
		preventCollision
	};
	return baseCompactor;
}
//#endregion
//#region ../../node_modules/fast-equals/dist/fast-equals.js
var require_fast_equals = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(global, factory) {
		typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["fast-equals"] = {}));
	})(exports, (function(exports$1) {
		"use strict";
		/**
		* Default equality comparator pass-through, used as the standard `isEqual` creator for
		* use inside the built comparator.
		*/
		function createDefaultIsNestedEqual(comparator) {
			return function isEqual(a, b, _indexOrKeyA, _indexOrKeyB, _parentA, _parentB, meta) {
				return comparator(a, b, meta);
			};
		}
		/**
		* Wrap the provided `areItemsEqual` method to manage the circular cache, allowing
		* for circular references to be safely included in the comparison without creating
		* stack overflows.
		*/
		function createIsCircular(areItemsEqual) {
			return function isCircular(a, b, isEqual, cache) {
				if (!a || !b || typeof a !== "object" || typeof b !== "object") return areItemsEqual(a, b, isEqual, cache);
				var cachedA = cache.get(a);
				var cachedB = cache.get(b);
				if (cachedA && cachedB) return cachedA === b && cachedB === a;
				cache.set(a, b);
				cache.set(b, a);
				var result = areItemsEqual(a, b, isEqual, cache);
				cache.delete(a);
				cache.delete(b);
				return result;
			};
		}
		/**
		* Targeted shallow merge of two objects.
		*
		* @NOTE
		* This exists as a tinier compiled version of the `__assign` helper that
		* `tsc` injects in case of `Object.assign` not being present.
		*/
		function merge(a, b) {
			var merged = {};
			for (var key in a) merged[key] = a[key];
			for (var key in b) merged[key] = b[key];
			return merged;
		}
		/**
		* Whether the value is a plain object.
		*
		* @NOTE
		* This is a same-realm compariosn only.
		*/
		function isPlainObject(value) {
			return value.constructor === Object || value.constructor == null;
		}
		/**
		* When the value is `Promise`-like, aka "then-able".
		*/
		function isPromiseLike(value) {
			return typeof value.then === "function";
		}
		/**
		* Whether the values passed are strictly equal or both NaN.
		*/
		function sameValueZeroEqual(a, b) {
			return a === b || a !== a && b !== b;
		}
		var ARGUMENTS_TAG = "[object Arguments]";
		var BOOLEAN_TAG = "[object Boolean]";
		var DATE_TAG = "[object Date]";
		var REG_EXP_TAG = "[object RegExp]";
		var MAP_TAG = "[object Map]";
		var NUMBER_TAG = "[object Number]";
		var OBJECT_TAG = "[object Object]";
		var SET_TAG = "[object Set]";
		var STRING_TAG = "[object String]";
		var toString = Object.prototype.toString;
		function createComparator(_a) {
			var areArraysEqual = _a.areArraysEqual, areDatesEqual = _a.areDatesEqual, areMapsEqual = _a.areMapsEqual, areObjectsEqual = _a.areObjectsEqual, areRegExpsEqual = _a.areRegExpsEqual, areSetsEqual = _a.areSetsEqual, createIsNestedEqual = _a.createIsNestedEqual;
			var isEqual = createIsNestedEqual(comparator);
			/**
			* compare the value of the two objects and return true if they are equivalent in values
			*/
			function comparator(a, b, meta) {
				if (a === b) return true;
				if (!a || !b || typeof a !== "object" || typeof b !== "object") return a !== a && b !== b;
				if (isPlainObject(a) && isPlainObject(b)) return areObjectsEqual(a, b, isEqual, meta);
				var aArray = Array.isArray(a);
				var bArray = Array.isArray(b);
				if (aArray || bArray) return aArray === bArray && areArraysEqual(a, b, isEqual, meta);
				var aTag = toString.call(a);
				if (aTag !== toString.call(b)) return false;
				if (aTag === DATE_TAG) return areDatesEqual(a, b, isEqual, meta);
				if (aTag === REG_EXP_TAG) return areRegExpsEqual(a, b, isEqual, meta);
				if (aTag === MAP_TAG) return areMapsEqual(a, b, isEqual, meta);
				if (aTag === SET_TAG) return areSetsEqual(a, b, isEqual, meta);
				if (aTag === OBJECT_TAG || aTag === ARGUMENTS_TAG) return isPromiseLike(a) || isPromiseLike(b) ? false : areObjectsEqual(a, b, isEqual, meta);
				if (aTag === BOOLEAN_TAG || aTag === NUMBER_TAG || aTag === STRING_TAG) return sameValueZeroEqual(a.valueOf(), b.valueOf());
				return false;
			}
			return comparator;
		}
		/**
		* Whether the arrays are equal in value.
		*/
		function areArraysEqual(a, b, isEqual, meta) {
			var index = a.length;
			if (b.length !== index) return false;
			while (index-- > 0) if (!isEqual(a[index], b[index], index, index, a, b, meta)) return false;
			return true;
		}
		/**
		* Whether the arrays are equal in value, including circular references.
		*/
		var areArraysEqualCircular = createIsCircular(areArraysEqual);
		/**
		* Whether the dates passed are equal in value.
		*
		* @NOTE
		* This is a standalone function instead of done inline in the comparator
		* to allow for overrides.
		*/
		function areDatesEqual(a, b) {
			return sameValueZeroEqual(a.valueOf(), b.valueOf());
		}
		/**
		* Whether the `Map`s are equal in value.
		*/
		function areMapsEqual(a, b, isEqual, meta) {
			var isValueEqual = a.size === b.size;
			if (!isValueEqual) return false;
			if (!a.size) return true;
			var matchedIndices = {};
			var indexA = 0;
			a.forEach(function(aValue, aKey) {
				if (!isValueEqual) return;
				var hasMatch = false;
				var matchIndexB = 0;
				b.forEach(function(bValue, bKey) {
					if (!hasMatch && !matchedIndices[matchIndexB] && (hasMatch = isEqual(aKey, bKey, indexA, matchIndexB, a, b, meta) && isEqual(aValue, bValue, aKey, bKey, a, b, meta))) matchedIndices[matchIndexB] = true;
					matchIndexB++;
				});
				indexA++;
				isValueEqual = hasMatch;
			});
			return isValueEqual;
		}
		/**
		* Whether the `Map`s are equal in value, including circular references.
		*/
		var areMapsEqualCircular = createIsCircular(areMapsEqual);
		var OWNER = "_owner";
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		/**
		* Whether the objects are equal in value.
		*/
		function areObjectsEqual(a, b, isEqual, meta) {
			var keysA = Object.keys(a);
			var index = keysA.length;
			if (Object.keys(b).length !== index) return false;
			var key;
			while (index-- > 0) {
				key = keysA[index];
				if (key === OWNER) {
					var reactElementA = !!a.$$typeof;
					var reactElementB = !!b.$$typeof;
					if ((reactElementA || reactElementB) && reactElementA !== reactElementB) return false;
				}
				if (!hasOwnProperty.call(b, key) || !isEqual(a[key], b[key], key, key, a, b, meta)) return false;
			}
			return true;
		}
		/**
		* Whether the objects are equal in value, including circular references.
		*/
		var areObjectsEqualCircular = createIsCircular(areObjectsEqual);
		/**
		* Whether the regexps passed are equal in value.
		*
		* @NOTE
		* This is a standalone function instead of done inline in the comparator
		* to allow for overrides. An example of this would be supporting a
		* pre-ES2015 environment where the `flags` property is not available.
		*/
		function areRegExpsEqual(a, b) {
			return a.source === b.source && a.flags === b.flags;
		}
		/**
		* Whether the `Set`s are equal in value.
		*/
		function areSetsEqual(a, b, isEqual, meta) {
			var isValueEqual = a.size === b.size;
			if (!isValueEqual) return false;
			if (!a.size) return true;
			var matchedIndices = {};
			a.forEach(function(aValue, aKey) {
				if (!isValueEqual) return;
				var hasMatch = false;
				var matchIndex = 0;
				b.forEach(function(bValue, bKey) {
					if (!hasMatch && !matchedIndices[matchIndex] && (hasMatch = isEqual(aValue, bValue, aKey, bKey, a, b, meta))) matchedIndices[matchIndex] = true;
					matchIndex++;
				});
				isValueEqual = hasMatch;
			});
			return isValueEqual;
		}
		/**
		* Whether the `Set`s are equal in value, including circular references.
		*/
		var areSetsEqualCircular = createIsCircular(areSetsEqual);
		var DEFAULT_CONFIG = Object.freeze({
			areArraysEqual,
			areDatesEqual,
			areMapsEqual,
			areObjectsEqual,
			areRegExpsEqual,
			areSetsEqual,
			createIsNestedEqual: createDefaultIsNestedEqual
		});
		var DEFAULT_CIRCULAR_CONFIG = Object.freeze({
			areArraysEqual: areArraysEqualCircular,
			areDatesEqual,
			areMapsEqual: areMapsEqualCircular,
			areObjectsEqual: areObjectsEqualCircular,
			areRegExpsEqual,
			areSetsEqual: areSetsEqualCircular,
			createIsNestedEqual: createDefaultIsNestedEqual
		});
		var isDeepEqual = createComparator(DEFAULT_CONFIG);
		/**
		* Whether the items passed are deeply-equal in value.
		*/
		function deepEqual(a, b) {
			return isDeepEqual(a, b, void 0);
		}
		var isShallowEqual = createComparator(merge(DEFAULT_CONFIG, { createIsNestedEqual: function() {
			return sameValueZeroEqual;
		} }));
		/**
		* Whether the items passed are shallowly-equal in value.
		*/
		function shallowEqual(a, b) {
			return isShallowEqual(a, b, void 0);
		}
		var isCircularDeepEqual = createComparator(DEFAULT_CIRCULAR_CONFIG);
		/**
		* Whether the items passed are deeply-equal in value, including circular references.
		*/
		function circularDeepEqual(a, b) {
			return isCircularDeepEqual(a, b, /* @__PURE__ */ new WeakMap());
		}
		var isCircularShallowEqual = createComparator(merge(DEFAULT_CIRCULAR_CONFIG, { createIsNestedEqual: function() {
			return sameValueZeroEqual;
		} }));
		/**
		* Whether the items passed are shallowly-equal in value, including circular references.
		*/
		function circularShallowEqual(a, b) {
			return isCircularShallowEqual(a, b, /* @__PURE__ */ new WeakMap());
		}
		/**
		* Create a custom equality comparison method.
		*
		* This can be done to create very targeted comparisons in extreme hot-path scenarios
		* where the standard methods are not performant enough, but can also be used to provide
		* support for legacy environments that do not support expected features like
		* `RegExp.prototype.flags` out of the box.
		*/
		function createCustomEqual(getComparatorOptions) {
			return createComparator(merge(DEFAULT_CONFIG, getComparatorOptions(DEFAULT_CONFIG)));
		}
		/**
		* Create a custom equality comparison method that handles circular references. This is very
		* similar to `createCustomEqual`, with the only difference being that `meta` expects to be
		* populated with a `WeakMap`-like contract.
		*
		* This can be done to create very targeted comparisons in extreme hot-path scenarios
		* where the standard methods are not performant enough, but can also be used to provide
		* support for legacy environments that do not support expected features like
		* `WeakMap` out of the box.
		*/
		function createCustomCircularEqual(getComparatorOptions) {
			var comparator = createComparator(merge(DEFAULT_CIRCULAR_CONFIG, getComparatorOptions(DEFAULT_CIRCULAR_CONFIG)));
			return (function(a, b, meta) {
				if (meta === void 0) meta = /* @__PURE__ */ new WeakMap();
				return comparator(a, b, meta);
			});
		}
		exports$1.circularDeepEqual = circularDeepEqual;
		exports$1.circularShallowEqual = circularShallowEqual;
		exports$1.createCustomCircularEqual = createCustomCircularEqual;
		exports$1.createCustomEqual = createCustomEqual;
		exports$1.deepEqual = deepEqual;
		exports$1.sameValueZeroEqual = sameValueZeroEqual;
		exports$1.shallowEqual = shallowEqual;
		Object.defineProperty(exports$1, "__esModule", { value: true });
	}));
}));
//#endregion
//#region ../../node_modules/clsx/dist/clsx.js
var require_clsx = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function r(e) {
		var o, t, f = "";
		if ("string" == typeof e || "number" == typeof e) f += e;
		else if ("object" == typeof e) if (Array.isArray(e)) {
			var n = e.length;
			for (o = 0; o < n; o++) e[o] && (t = r(e[o])) && (f && (f += " "), f += t);
		} else for (t in e) e[t] && (f && (f += " "), f += t);
		return f;
	}
	function e() {
		for (var e, o, t = 0, f = "", n = arguments.length; t < n; t++) (e = arguments[t]) && (o = r(e)) && (f && (f += " "), f += o);
		return f;
	}
	module.exports = e, module.exports.clsx = e;
}));
//#endregion
//#region ../../node_modules/react-draggable/build/cjs/utils/shims.js
var require_shims = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.dontSetMe = dontSetMe;
	exports.findInArray = findInArray;
	exports.int = int;
	exports.isFunction = isFunction;
	exports.isNum = isNum;
	function findInArray(array, callback) {
		for (let i = 0, length = array.length; i < length; i++) if (callback.apply(callback, [
			array[i],
			i,
			array
		])) return array[i];
	}
	function isFunction(func) {
		return typeof func === "function" || Object.prototype.toString.call(func) === "[object Function]";
	}
	function isNum(num) {
		return typeof num === "number" && !isNaN(num);
	}
	function int(a) {
		return parseInt(a, 10);
	}
	function dontSetMe(props, propName, componentName) {
		if (props[propName]) return /* @__PURE__ */ new Error(`Invalid prop ${propName} passed to ${componentName} - do not set this, set it on the child.`);
	}
}));
//#endregion
//#region ../../node_modules/react-draggable/build/cjs/utils/getPrefix.js
var require_getPrefix = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.browserPrefixToKey = browserPrefixToKey;
	exports.browserPrefixToStyle = browserPrefixToStyle;
	exports.default = void 0;
	exports.getPrefix = getPrefix;
	var prefixes = [
		"Moz",
		"Webkit",
		"O",
		"ms"
	];
	function getPrefix() {
		let prop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
		if (typeof window === "undefined") return "";
		const style = window.document?.documentElement?.style;
		if (!style) return "";
		if (prop in style) return "";
		for (let i = 0; i < prefixes.length; i++) if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
		return "";
	}
	function browserPrefixToKey(prop, prefix) {
		return prefix ? `${prefix}${kebabToTitleCase(prop)}` : prop;
	}
	function browserPrefixToStyle(prop, prefix) {
		return prefix ? `-${prefix.toLowerCase()}-${prop}` : prop;
	}
	function kebabToTitleCase(str) {
		let out = "";
		let shouldCapitalize = true;
		for (let i = 0; i < str.length; i++) if (shouldCapitalize) {
			out += str[i].toUpperCase();
			shouldCapitalize = false;
		} else if (str[i] === "-") shouldCapitalize = true;
		else out += str[i];
		return out;
	}
	exports.default = getPrefix();
}));
//#endregion
//#region ../../node_modules/react-draggable/build/cjs/utils/domFns.js
var require_domFns = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.addClassName = addClassName;
	exports.addEvent = addEvent;
	exports.addUserSelectStyles = addUserSelectStyles;
	exports.createCSSTransform = createCSSTransform;
	exports.createSVGTransform = createSVGTransform;
	exports.getTouch = getTouch;
	exports.getTouchIdentifier = getTouchIdentifier;
	exports.getTranslation = getTranslation;
	exports.innerHeight = innerHeight;
	exports.innerWidth = innerWidth;
	exports.matchesSelector = matchesSelector;
	exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
	exports.offsetXYFromParent = offsetXYFromParent;
	exports.outerHeight = outerHeight;
	exports.outerWidth = outerWidth;
	exports.removeClassName = removeClassName;
	exports.removeEvent = removeEvent;
	exports.scheduleRemoveUserSelectStyles = scheduleRemoveUserSelectStyles;
	var _shims = require_shims();
	var _getPrefix = _interopRequireWildcard(require_getPrefix());
	function _interopRequireWildcard(e, t) {
		if ("function" == typeof WeakMap) var r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (_interopRequireWildcard = function(e, t) {
			if (!t && e && e.__esModule) return e;
			var o, i, f = {
				__proto__: null,
				default: e
			};
			if (null === e || "object" != typeof e && "function" != typeof e) return f;
			if (o = t ? n : r) {
				if (o.has(e)) return o.get(e);
				o.set(e, f);
			}
			for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]);
			return f;
		})(e, t);
	}
	var matchesSelectorFunc = "";
	function matchesSelector(el, selector) {
		if (!matchesSelectorFunc) matchesSelectorFunc = (0, _shims.findInArray)([
			"matches",
			"webkitMatchesSelector",
			"mozMatchesSelector",
			"msMatchesSelector",
			"oMatchesSelector"
		], function(method) {
			return (0, _shims.isFunction)(el[method]);
		});
		if (!(0, _shims.isFunction)(el[matchesSelectorFunc])) return false;
		return el[matchesSelectorFunc](selector);
	}
	function matchesSelectorAndParentsTo(el, selector, baseNode) {
		let node = el;
		do {
			if (matchesSelector(node, selector)) return true;
			if (node === baseNode) return false;
			node = node.parentNode;
		} while (node);
		return false;
	}
	function addEvent(el, event, handler, inputOptions) {
		if (!el) return;
		const options = {
			capture: true,
			...inputOptions
		};
		if (el.addEventListener) el.addEventListener(event, handler, options);
		else if (el.attachEvent) el.attachEvent("on" + event, handler);
		else el["on" + event] = handler;
	}
	function removeEvent(el, event, handler, inputOptions) {
		if (!el) return;
		const options = {
			capture: true,
			...inputOptions
		};
		if (el.removeEventListener) el.removeEventListener(event, handler, options);
		else if (el.detachEvent) el.detachEvent("on" + event, handler);
		else el["on" + event] = null;
	}
	function outerHeight(node) {
		let height = node.clientHeight;
		const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		height += (0, _shims.int)(computedStyle.borderTopWidth);
		height += (0, _shims.int)(computedStyle.borderBottomWidth);
		return height;
	}
	function outerWidth(node) {
		let width = node.clientWidth;
		const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		width += (0, _shims.int)(computedStyle.borderLeftWidth);
		width += (0, _shims.int)(computedStyle.borderRightWidth);
		return width;
	}
	function innerHeight(node) {
		let height = node.clientHeight;
		const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		height -= (0, _shims.int)(computedStyle.paddingTop);
		height -= (0, _shims.int)(computedStyle.paddingBottom);
		return height;
	}
	function innerWidth(node) {
		let width = node.clientWidth;
		const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
		width -= (0, _shims.int)(computedStyle.paddingLeft);
		width -= (0, _shims.int)(computedStyle.paddingRight);
		return width;
	}
	function offsetXYFromParent(evt, offsetParent, scale) {
		const offsetParentRect = offsetParent === offsetParent.ownerDocument.body ? {
			left: 0,
			top: 0
		} : offsetParent.getBoundingClientRect();
		return {
			x: (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale,
			y: (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale
		};
	}
	function createCSSTransform(controlPos, positionOffset) {
		const translation = getTranslation(controlPos, positionOffset, "px");
		return { [(0, _getPrefix.browserPrefixToKey)("transform", _getPrefix.default)]: translation };
	}
	function createSVGTransform(controlPos, positionOffset) {
		return getTranslation(controlPos, positionOffset, "");
	}
	function getTranslation(_ref, positionOffset, unitSuffix) {
		let { x, y } = _ref;
		let translation = `translate(${x}${unitSuffix},${y}${unitSuffix})`;
		if (positionOffset) translation = `translate(${`${typeof positionOffset.x === "string" ? positionOffset.x : positionOffset.x + unitSuffix}`}, ${`${typeof positionOffset.y === "string" ? positionOffset.y : positionOffset.y + unitSuffix}`})` + translation;
		return translation;
	}
	function getTouch(e, identifier) {
		return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, (t) => identifier === t.identifier) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, (t) => identifier === t.identifier);
	}
	function getTouchIdentifier(e) {
		if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
		if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
	}
	function addUserSelectStyles(doc) {
		if (!doc) return;
		let styleEl = doc.getElementById("react-draggable-style-el");
		if (!styleEl) {
			styleEl = doc.createElement("style");
			styleEl.type = "text/css";
			styleEl.id = "react-draggable-style-el";
			styleEl.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n";
			styleEl.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n";
			doc.getElementsByTagName("head")[0].appendChild(styleEl);
		}
		if (doc.body) addClassName(doc.body, "react-draggable-transparent-selection");
	}
	function scheduleRemoveUserSelectStyles(doc) {
		if (window.requestAnimationFrame) window.requestAnimationFrame(() => {
			removeUserSelectStyles(doc);
		});
		else removeUserSelectStyles(doc);
	}
	function removeUserSelectStyles(doc) {
		if (!doc) return;
		try {
			if (doc.body) removeClassName(doc.body, "react-draggable-transparent-selection");
			if (doc.selection) doc.selection.empty();
			else {
				const selection = (doc.defaultView || window).getSelection();
				if (selection && selection.type !== "Caret") selection.removeAllRanges();
			}
		} catch (e) {}
	}
	function addClassName(el, className) {
		if (el.classList) el.classList.add(className);
		else if (!el.className.match(new RegExp(`(?:^|\\s)${className}(?!\\S)`))) el.className += ` ${className}`;
	}
	function removeClassName(el, className) {
		if (el.classList) el.classList.remove(className);
		else el.className = el.className.replace(new RegExp(`(?:^|\\s)${className}(?!\\S)`, "g"), "");
	}
}));
//#endregion
//#region ../../node_modules/react-draggable/build/cjs/utils/positionFns.js
var require_positionFns = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.canDragX = canDragX;
	exports.canDragY = canDragY;
	exports.createCoreData = createCoreData;
	exports.createDraggableData = createDraggableData;
	exports.getBoundPosition = getBoundPosition;
	exports.getControlPosition = getControlPosition;
	exports.snapToGrid = snapToGrid;
	var _shims = require_shims();
	var _domFns = require_domFns();
	function getBoundPosition(draggable, x, y) {
		if (!draggable.props.bounds) return [x, y];
		let { bounds } = draggable.props;
		bounds = typeof bounds === "string" ? bounds : cloneBounds(bounds);
		const node = findDOMNode(draggable);
		if (typeof bounds === "string") {
			const { ownerDocument } = node;
			const ownerWindow = ownerDocument.defaultView;
			let boundNode;
			if (bounds === "parent") boundNode = node.parentNode;
			else boundNode = node.getRootNode().querySelector(bounds);
			if (!(boundNode instanceof ownerWindow.HTMLElement)) throw new Error("Bounds selector \"" + bounds + "\" could not find an element.");
			const boundNodeEl = boundNode;
			const nodeStyle = ownerWindow.getComputedStyle(node);
			const boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl);
			bounds = {
				left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
				top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
				right: (0, _domFns.innerWidth)(boundNodeEl) - (0, _domFns.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
				bottom: (0, _domFns.innerHeight)(boundNodeEl) - (0, _domFns.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
			};
		}
		if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
		if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom);
		if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
		if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
		return [x, y];
	}
	function snapToGrid(grid, pendingX, pendingY) {
		return [Math.round(pendingX / grid[0]) * grid[0], Math.round(pendingY / grid[1]) * grid[1]];
	}
	function canDragX(draggable) {
		return draggable.props.axis === "both" || draggable.props.axis === "x";
	}
	function canDragY(draggable) {
		return draggable.props.axis === "both" || draggable.props.axis === "y";
	}
	function getControlPosition(e, touchIdentifier, draggableCore) {
		const touchObj = typeof touchIdentifier === "number" ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
		if (typeof touchIdentifier === "number" && !touchObj) return null;
		const node = findDOMNode(draggableCore);
		const offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
		return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
	}
	function createCoreData(draggable, x, y) {
		const isStart = !(0, _shims.isNum)(draggable.lastX);
		const node = findDOMNode(draggable);
		if (isStart) return {
			node,
			deltaX: 0,
			deltaY: 0,
			lastX: x,
			lastY: y,
			x,
			y
		};
		else return {
			node,
			deltaX: x - draggable.lastX,
			deltaY: y - draggable.lastY,
			lastX: draggable.lastX,
			lastY: draggable.lastY,
			x,
			y
		};
	}
	function createDraggableData(draggable, coreData) {
		const scale = draggable.props.scale;
		return {
			node: coreData.node,
			x: draggable.state.x + coreData.deltaX / scale,
			y: draggable.state.y + coreData.deltaY / scale,
			deltaX: coreData.deltaX / scale,
			deltaY: coreData.deltaY / scale,
			lastX: draggable.state.x,
			lastY: draggable.state.y
		};
	}
	function cloneBounds(bounds) {
		return {
			left: bounds.left,
			top: bounds.top,
			right: bounds.right,
			bottom: bounds.bottom
		};
	}
	function findDOMNode(draggable) {
		const node = draggable.findDOMNode();
		if (!node) throw new Error("<DraggableCore>: Unmounted during event!");
		return node;
	}
}));
//#endregion
//#region ../../node_modules/react-draggable/build/cjs/utils/log.js
var require_log = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = log;
	function log() {}
}));
//#endregion
//#region ../../node_modules/react-draggable/build/cjs/DraggableCore.js
var require_DraggableCore = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	var React = _interopRequireWildcard(require_react());
	var _propTypes = _interopRequireDefault(require_prop_types());
	var _reactDom = _interopRequireDefault(require_react_dom());
	var _domFns = require_domFns();
	var _positionFns = require_positionFns();
	var _shims = require_shims();
	var _log = _interopRequireDefault(require_log());
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function _interopRequireWildcard(e, t) {
		if ("function" == typeof WeakMap) var r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (_interopRequireWildcard = function(e, t) {
			if (!t && e && e.__esModule) return e;
			var o, i, f = {
				__proto__: null,
				default: e
			};
			if (null === e || "object" != typeof e && "function" != typeof e) return f;
			if (o = t ? n : r) {
				if (o.has(e)) return o.get(e);
				o.set(e, f);
			}
			for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]);
			return f;
		})(e, t);
	}
	function _defineProperty(e, r, t) {
		return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	function _toPropertyKey(t) {
		var i = _toPrimitive(t, "string");
		return "symbol" == typeof i ? i : i + "";
	}
	function _toPrimitive(t, r) {
		if ("object" != typeof t || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != typeof i) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	var eventsFor = {
		touch: {
			start: "touchstart",
			move: "touchmove",
			stop: "touchend"
		},
		mouse: {
			start: "mousedown",
			move: "mousemove",
			stop: "mouseup"
		}
	};
	var dragEventFor = eventsFor.mouse;
	var DraggableCore = class extends React.Component {
		constructor() {
			super(...arguments);
			_defineProperty(this, "dragging", false);
			_defineProperty(this, "lastX", NaN);
			_defineProperty(this, "lastY", NaN);
			_defineProperty(this, "touchIdentifier", null);
			_defineProperty(this, "mounted", false);
			_defineProperty(this, "handleDragStart", (e) => {
				this.props.onMouseDown(e);
				if (!this.props.allowAnyClick && typeof e.button === "number" && e.button !== 0) return false;
				const thisNode = this.findDOMNode();
				if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
				const { ownerDocument } = thisNode;
				if (this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, this.props.handle, thisNode) || this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, this.props.cancel, thisNode)) return;
				if (e.type === "touchstart" && !this.props.allowMobileScroll) e.preventDefault();
				const touchIdentifier = (0, _domFns.getTouchIdentifier)(e);
				this.touchIdentifier = touchIdentifier;
				const position = (0, _positionFns.getControlPosition)(e, touchIdentifier, this);
				if (position == null) return;
				const { x, y } = position;
				const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
				(0, _log.default)("DraggableCore: handleDragStart: %j", coreEvent);
				(0, _log.default)("calling", this.props.onStart);
				if (this.props.onStart(e, coreEvent) === false || this.mounted === false) return;
				if (this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument);
				this.dragging = true;
				this.lastX = x;
				this.lastY = y;
				(0, _domFns.addEvent)(ownerDocument, dragEventFor.move, this.handleDrag);
				(0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, this.handleDragStop);
			});
			_defineProperty(this, "handleDrag", (e) => {
				const position = (0, _positionFns.getControlPosition)(e, this.touchIdentifier, this);
				if (position == null) return;
				let { x, y } = position;
				if (Array.isArray(this.props.grid)) {
					let deltaX = x - this.lastX, deltaY = y - this.lastY;
					[deltaX, deltaY] = (0, _positionFns.snapToGrid)(this.props.grid, deltaX, deltaY);
					if (!deltaX && !deltaY) return;
					x = this.lastX + deltaX, y = this.lastY + deltaY;
				}
				const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
				(0, _log.default)("DraggableCore: handleDrag: %j", coreEvent);
				if (this.props.onDrag(e, coreEvent) === false || this.mounted === false) {
					try {
						this.handleDragStop(new MouseEvent("mouseup"));
					} catch (err) {
						const event = document.createEvent("MouseEvents");
						event.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
						this.handleDragStop(event);
					}
					return;
				}
				this.lastX = x;
				this.lastY = y;
			});
			_defineProperty(this, "handleDragStop", (e) => {
				if (!this.dragging) return;
				const position = (0, _positionFns.getControlPosition)(e, this.touchIdentifier, this);
				if (position == null) return;
				let { x, y } = position;
				if (Array.isArray(this.props.grid)) {
					let deltaX = x - this.lastX || 0;
					let deltaY = y - this.lastY || 0;
					[deltaX, deltaY] = (0, _positionFns.snapToGrid)(this.props.grid, deltaX, deltaY);
					x = this.lastX + deltaX, y = this.lastY + deltaY;
				}
				const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
				if (this.props.onStop(e, coreEvent) === false || this.mounted === false) return false;
				const thisNode = this.findDOMNode();
				if (thisNode) {
					if (this.props.enableUserSelectHack) (0, _domFns.scheduleRemoveUserSelectStyles)(thisNode.ownerDocument);
				}
				(0, _log.default)("DraggableCore: handleDragStop: %j", coreEvent);
				this.dragging = false;
				this.lastX = NaN;
				this.lastY = NaN;
				if (thisNode) {
					(0, _log.default)("DraggableCore: Removing handlers");
					(0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, this.handleDrag);
					(0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, this.handleDragStop);
				}
			});
			_defineProperty(this, "onMouseDown", (e) => {
				dragEventFor = eventsFor.mouse;
				return this.handleDragStart(e);
			});
			_defineProperty(this, "onMouseUp", (e) => {
				dragEventFor = eventsFor.mouse;
				return this.handleDragStop(e);
			});
			_defineProperty(this, "onTouchStart", (e) => {
				dragEventFor = eventsFor.touch;
				return this.handleDragStart(e);
			});
			_defineProperty(this, "onTouchEnd", (e) => {
				dragEventFor = eventsFor.touch;
				return this.handleDragStop(e);
			});
		}
		componentDidMount() {
			this.mounted = true;
			const thisNode = this.findDOMNode();
			if (thisNode) (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, { passive: false });
		}
		componentWillUnmount() {
			this.mounted = false;
			const thisNode = this.findDOMNode();
			if (thisNode) {
				const { ownerDocument } = thisNode;
				(0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
				(0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
				(0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
				(0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
				(0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, { passive: false });
				if (this.props.enableUserSelectHack) (0, _domFns.scheduleRemoveUserSelectStyles)(ownerDocument);
			}
		}
		findDOMNode() {
			return this.props?.nodeRef ? this.props?.nodeRef?.current : _reactDom.default.findDOMNode(this);
		}
		render() {
			return /* @__PURE__ */ React.cloneElement(React.Children.only(this.props.children), {
				onMouseDown: this.onMouseDown,
				onMouseUp: this.onMouseUp,
				onTouchEnd: this.onTouchEnd
			});
		}
	};
	exports.default = DraggableCore;
	_defineProperty(DraggableCore, "displayName", "DraggableCore");
	_defineProperty(DraggableCore, "propTypes", {
		allowAnyClick: _propTypes.default.bool,
		allowMobileScroll: _propTypes.default.bool,
		children: _propTypes.default.node.isRequired,
		disabled: _propTypes.default.bool,
		enableUserSelectHack: _propTypes.default.bool,
		offsetParent: function(props, propName) {
			if (props[propName] && props[propName].nodeType !== 1) throw new Error("Draggable's offsetParent must be a DOM Node.");
		},
		grid: _propTypes.default.arrayOf(_propTypes.default.number),
		handle: _propTypes.default.string,
		cancel: _propTypes.default.string,
		nodeRef: _propTypes.default.object,
		onStart: _propTypes.default.func,
		onDrag: _propTypes.default.func,
		onStop: _propTypes.default.func,
		onMouseDown: _propTypes.default.func,
		scale: _propTypes.default.number,
		className: _shims.dontSetMe,
		style: _shims.dontSetMe,
		transform: _shims.dontSetMe
	});
	_defineProperty(DraggableCore, "defaultProps", {
		allowAnyClick: false,
		allowMobileScroll: false,
		disabled: false,
		enableUserSelectHack: true,
		onStart: function() {},
		onDrag: function() {},
		onStop: function() {},
		onMouseDown: function() {},
		scale: 1
	});
}));
//#endregion
//#region ../../node_modules/react-draggable/build/cjs/Draggable.js
var require_Draggable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	Object.defineProperty(exports, "DraggableCore", {
		enumerable: true,
		get: function() {
			return _DraggableCore.default;
		}
	});
	exports.default = void 0;
	var React = _interopRequireWildcard(require_react());
	var _propTypes = _interopRequireDefault(require_prop_types());
	var _reactDom = _interopRequireDefault(require_react_dom());
	var _clsx = require_clsx();
	var _domFns = require_domFns();
	var _positionFns = require_positionFns();
	var _shims = require_shims();
	var _DraggableCore = _interopRequireDefault(require_DraggableCore());
	var _log = _interopRequireDefault(require_log());
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function _interopRequireWildcard(e, t) {
		if ("function" == typeof WeakMap) var r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (_interopRequireWildcard = function(e, t) {
			if (!t && e && e.__esModule) return e;
			var o, i, f = {
				__proto__: null,
				default: e
			};
			if (null === e || "object" != typeof e && "function" != typeof e) return f;
			if (o = t ? n : r) {
				if (o.has(e)) return o.get(e);
				o.set(e, f);
			}
			for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]);
			return f;
		})(e, t);
	}
	function _extends() {
		return _extends = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends.apply(null, arguments);
	}
	function _defineProperty(e, r, t) {
		return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	function _toPropertyKey(t) {
		var i = _toPrimitive(t, "string");
		return "symbol" == typeof i ? i : i + "";
	}
	function _toPrimitive(t, r) {
		if ("object" != typeof t || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != typeof i) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	var Draggable = class extends React.Component {
		static getDerivedStateFromProps(_ref, _ref2) {
			let { position } = _ref;
			let { prevPropsPosition } = _ref2;
			if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
				(0, _log.default)("Draggable: getDerivedStateFromProps %j", {
					position,
					prevPropsPosition
				});
				return {
					x: position.x,
					y: position.y,
					prevPropsPosition: { ...position }
				};
			}
			return null;
		}
		constructor(props) {
			super(props);
			_defineProperty(this, "onDragStart", (e, coreData) => {
				(0, _log.default)("Draggable: onDragStart: %j", coreData);
				if (this.props.onStart(e, (0, _positionFns.createDraggableData)(this, coreData)) === false) return false;
				this.setState({
					dragging: true,
					dragged: true
				});
			});
			_defineProperty(this, "onDrag", (e, coreData) => {
				if (!this.state.dragging) return false;
				(0, _log.default)("Draggable: onDrag: %j", coreData);
				const uiData = (0, _positionFns.createDraggableData)(this, coreData);
				const newState = {
					x: uiData.x,
					y: uiData.y,
					slackX: 0,
					slackY: 0
				};
				if (this.props.bounds) {
					const { x, y } = newState;
					newState.x += this.state.slackX;
					newState.y += this.state.slackY;
					const [newStateX, newStateY] = (0, _positionFns.getBoundPosition)(this, newState.x, newState.y);
					newState.x = newStateX;
					newState.y = newStateY;
					newState.slackX = this.state.slackX + (x - newState.x);
					newState.slackY = this.state.slackY + (y - newState.y);
					uiData.x = newState.x;
					uiData.y = newState.y;
					uiData.deltaX = newState.x - this.state.x;
					uiData.deltaY = newState.y - this.state.y;
				}
				if (this.props.onDrag(e, uiData) === false) return false;
				this.setState(newState);
			});
			_defineProperty(this, "onDragStop", (e, coreData) => {
				if (!this.state.dragging) return false;
				if (this.props.onStop(e, (0, _positionFns.createDraggableData)(this, coreData)) === false) return false;
				(0, _log.default)("Draggable: onDragStop: %j", coreData);
				const newState = {
					dragging: false,
					slackX: 0,
					slackY: 0
				};
				if (Boolean(this.props.position)) {
					const { x, y } = this.props.position;
					newState.x = x;
					newState.y = y;
				}
				this.setState(newState);
			});
			this.state = {
				dragging: false,
				dragged: false,
				x: props.position ? props.position.x : props.defaultPosition.x,
				y: props.position ? props.position.y : props.defaultPosition.y,
				prevPropsPosition: { ...props.position },
				slackX: 0,
				slackY: 0,
				isElementSVG: false
			};
			if (props.position && !(props.onDrag || props.onStop)) console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
		}
		componentDidMount() {
			if (typeof window.SVGElement !== "undefined" && this.findDOMNode() instanceof window.SVGElement) this.setState({ isElementSVG: true });
		}
		componentWillUnmount() {
			if (this.state.dragging) this.setState({ dragging: false });
		}
		findDOMNode() {
			return this.props?.nodeRef?.current ?? _reactDom.default.findDOMNode(this);
		}
		render() {
			const { axis, bounds, children, defaultPosition, defaultClassName, defaultClassNameDragging, defaultClassNameDragged, position, positionOffset, scale, ...draggableCoreProps } = this.props;
			let style = {};
			let svgTransform = null;
			const draggable = !Boolean(position) || this.state.dragging;
			const validPosition = position || defaultPosition;
			const transformOpts = {
				x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
				y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
			};
			if (this.state.isElementSVG) svgTransform = (0, _domFns.createSVGTransform)(transformOpts, positionOffset);
			else style = (0, _domFns.createCSSTransform)(transformOpts, positionOffset);
			const className = (0, _clsx.clsx)(children.props.className || "", defaultClassName, {
				[defaultClassNameDragging]: this.state.dragging,
				[defaultClassNameDragged]: this.state.dragged
			});
			return /* @__PURE__ */ React.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
				onStart: this.onDragStart,
				onDrag: this.onDrag,
				onStop: this.onDragStop
			}), /* @__PURE__ */ React.cloneElement(React.Children.only(children), {
				className,
				style: {
					...children.props.style,
					...style
				},
				transform: svgTransform
			}));
		}
	};
	exports.default = Draggable;
	_defineProperty(Draggable, "displayName", "Draggable");
	_defineProperty(Draggable, "propTypes", {
		..._DraggableCore.default.propTypes,
		axis: _propTypes.default.oneOf([
			"both",
			"x",
			"y",
			"none"
		]),
		bounds: _propTypes.default.oneOfType([
			_propTypes.default.shape({
				left: _propTypes.default.number,
				right: _propTypes.default.number,
				top: _propTypes.default.number,
				bottom: _propTypes.default.number
			}),
			_propTypes.default.string,
			_propTypes.default.oneOf([false])
		]),
		defaultClassName: _propTypes.default.string,
		defaultClassNameDragging: _propTypes.default.string,
		defaultClassNameDragged: _propTypes.default.string,
		defaultPosition: _propTypes.default.shape({
			x: _propTypes.default.number,
			y: _propTypes.default.number
		}),
		positionOffset: _propTypes.default.shape({
			x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
			y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
		}),
		position: _propTypes.default.shape({
			x: _propTypes.default.number,
			y: _propTypes.default.number
		}),
		className: _shims.dontSetMe,
		style: _shims.dontSetMe,
		transform: _shims.dontSetMe
	});
	_defineProperty(Draggable, "defaultProps", {
		..._DraggableCore.default.defaultProps,
		axis: "both",
		bounds: false,
		defaultClassName: "react-draggable",
		defaultClassNameDragging: "react-draggable-dragging",
		defaultClassNameDragged: "react-draggable-dragged",
		defaultPosition: {
			x: 0,
			y: 0
		},
		scale: 1
	});
}));
//#endregion
//#region ../../node_modules/react-draggable/build/cjs/cjs.js
var require_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { default: Draggable, DraggableCore } = require_Draggable();
	module.exports = Draggable;
	module.exports.default = Draggable;
	module.exports.DraggableCore = DraggableCore;
}));
//#endregion
//#region ../../node_modules/react-resizable/build/utils.js
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.__esModule = true;
	exports.cloneElement = cloneElement;
	var _react = _interopRequireDefault(require_react());
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	function _defineProperty(e, r, t) {
		return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	function _toPropertyKey(t) {
		var i = _toPrimitive(t, "string");
		return "symbol" == typeof i ? i : i + "";
	}
	function _toPrimitive(t, r) {
		if ("object" != typeof t || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != typeof i) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	function cloneElement(element, props) {
		if (props.style && element.props.style) props.style = _objectSpread(_objectSpread({}, element.props.style), props.style);
		if (props.className && element.props.className) props.className = `${element.props.className} ${props.className}`;
		return /* @__PURE__ */ _react.default.cloneElement(element, props);
	}
}));
//#endregion
//#region ../../node_modules/react-resizable/build/propTypes.js
var require_propTypes = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.__esModule = true;
	exports.resizableProps = void 0;
	var _propTypes = _interopRequireDefault(require_prop_types());
	require_cjs();
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : { default: e };
	}
	exports.resizableProps = {
		axis: _propTypes.default.oneOf([
			"both",
			"x",
			"y",
			"none"
		]),
		className: _propTypes.default.string,
		children: _propTypes.default.element.isRequired,
		draggableOpts: _propTypes.default.shape({
			allowAnyClick: _propTypes.default.bool,
			cancel: _propTypes.default.string,
			children: _propTypes.default.node,
			disabled: _propTypes.default.bool,
			enableUserSelectHack: _propTypes.default.bool,
			offsetParent: typeof Element !== "undefined" ? _propTypes.default.instanceOf(Element) : _propTypes.default.any,
			grid: _propTypes.default.arrayOf(_propTypes.default.number),
			handle: _propTypes.default.string,
			nodeRef: _propTypes.default.object,
			onStart: _propTypes.default.func,
			onDrag: _propTypes.default.func,
			onStop: _propTypes.default.func,
			onMouseDown: _propTypes.default.func,
			scale: _propTypes.default.number
		}),
		height: function() {
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			const [props] = args;
			if (props.axis === "both" || props.axis === "y") return _propTypes.default.number.isRequired(...args);
			return _propTypes.default.number(...args);
		},
		handle: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
		handleSize: _propTypes.default.arrayOf(_propTypes.default.number),
		lockAspectRatio: _propTypes.default.bool,
		maxConstraints: _propTypes.default.arrayOf(_propTypes.default.number),
		minConstraints: _propTypes.default.arrayOf(_propTypes.default.number),
		onResizeStop: _propTypes.default.func,
		onResizeStart: _propTypes.default.func,
		onResize: _propTypes.default.func,
		resizeHandles: _propTypes.default.arrayOf(_propTypes.default.oneOf([
			"s",
			"w",
			"e",
			"n",
			"sw",
			"nw",
			"se",
			"ne"
		])),
		transformScale: _propTypes.default.number,
		width: function() {
			for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
			const [props] = args;
			if (props.axis === "both" || props.axis === "x") return _propTypes.default.number.isRequired(...args);
			return _propTypes.default.number(...args);
		}
	};
}));
//#endregion
//#region ../../node_modules/react-resizable/build/Resizable.js
var require_Resizable = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.__esModule = true;
	exports.default = void 0;
	var React = _interopRequireWildcard(require_react());
	var _reactDraggable = require_cjs();
	var _utils = require_utils();
	var _propTypes = require_propTypes();
	var _excluded = [
		"children",
		"className",
		"draggableOpts",
		"width",
		"height",
		"handle",
		"handleSize",
		"lockAspectRatio",
		"axis",
		"minConstraints",
		"maxConstraints",
		"onResize",
		"onResizeStop",
		"onResizeStart",
		"resizeHandles",
		"transformScale"
	];
	function _interopRequireWildcard(e, t) {
		if ("function" == typeof WeakMap) var r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (_interopRequireWildcard = function(e, t) {
			if (!t && e && e.__esModule) return e;
			var o, i, f = {
				__proto__: null,
				default: e
			};
			if (null === e || "object" != typeof e && "function" != typeof e) return f;
			if (o = t ? n : r) {
				if (o.has(e)) return o.get(e);
				o.set(e, f);
			}
			for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]);
			return f;
		})(e, t);
	}
	function _extends() {
		return _extends = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends.apply(null, arguments);
	}
	function _objectWithoutProperties(e, t) {
		if (null == e) return {};
		var o, r, i = _objectWithoutPropertiesLoose(e, t);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
		}
		return i;
	}
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (-1 !== e.indexOf(n)) continue;
			t[n] = r[n];
		}
		return t;
	}
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	function _defineProperty(e, r, t) {
		return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	function _toPropertyKey(t) {
		var i = _toPrimitive(t, "string");
		return "symbol" == typeof i ? i : i + "";
	}
	function _toPrimitive(t, r) {
		if ("object" != typeof t || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != typeof i) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	var Resizable = class extends React.Component {
		constructor() {
			super(...arguments);
			this.handleRefs = {};
			this.lastHandleRect = null;
			this.slack = null;
			this.lastSize = null;
		}
		componentWillUnmount() {
			this.resetData();
		}
		resetData() {
			this.lastHandleRect = this.slack = this.lastSize = null;
		}
		runConstraints(width, height) {
			const { minConstraints, maxConstraints, lockAspectRatio } = this.props;
			if (!minConstraints && !maxConstraints && !lockAspectRatio) return [width, height];
			if (lockAspectRatio) {
				const ratio = this.props.width / this.props.height;
				const deltaW = width - this.props.width;
				const deltaH = height - this.props.height;
				if (Math.abs(deltaW) > Math.abs(deltaH * ratio)) height = width / ratio;
				else width = height * ratio;
			}
			const [oldW, oldH] = [width, height];
			let [slackW, slackH] = this.slack || [0, 0];
			width += slackW;
			height += slackH;
			if (minConstraints) {
				width = Math.max(minConstraints[0], width);
				height = Math.max(minConstraints[1], height);
			}
			if (maxConstraints) {
				width = Math.min(maxConstraints[0], width);
				height = Math.min(maxConstraints[1], height);
			}
			this.slack = [slackW + (oldW - width), slackH + (oldH - height)];
			return [width, height];
		}
		/**
		* Wrapper around drag events to provide more useful data.
		*
		* @param  {String} handlerName Handler name to wrap.
		* @return {Function}           Handler function.
		*/
		resizeHandler(handlerName, axis) {
			return (e, _ref) => {
				let { node, deltaX, deltaY } = _ref;
				if (handlerName === "onResizeStart") this.resetData();
				const canDragX = (this.props.axis === "both" || this.props.axis === "x") && axis !== "n" && axis !== "s";
				const canDragY = (this.props.axis === "both" || this.props.axis === "y") && axis !== "e" && axis !== "w";
				if (!canDragX && !canDragY) return;
				const axisV = axis[0];
				const axisH = axis[axis.length - 1];
				const handleRect = node.getBoundingClientRect();
				if (this.lastHandleRect != null) {
					if (axisH === "w") {
						const deltaLeftSinceLast = handleRect.left - this.lastHandleRect.left;
						deltaX += deltaLeftSinceLast;
					}
					if (axisV === "n") {
						const deltaTopSinceLast = handleRect.top - this.lastHandleRect.top;
						deltaY += deltaTopSinceLast;
					}
				}
				this.lastHandleRect = handleRect;
				if (axisH === "w") deltaX = -deltaX;
				if (axisV === "n") deltaY = -deltaY;
				let width = this.props.width + (canDragX ? deltaX / this.props.transformScale : 0);
				let height = this.props.height + (canDragY ? deltaY / this.props.transformScale : 0);
				[width, height] = this.runConstraints(width, height);
				if (handlerName === "onResizeStop" && this.lastSize) ({width, height} = this.lastSize);
				const dimensionsChanged = width !== this.props.width || height !== this.props.height;
				if (handlerName !== "onResizeStop") this.lastSize = {
					width,
					height
				};
				const cb = typeof this.props[handlerName] === "function" ? this.props[handlerName] : null;
				if (cb && !(handlerName === "onResize" && !dimensionsChanged)) {
					e.persist?.();
					cb(e, {
						node,
						size: {
							width,
							height
						},
						handle: axis
					});
				}
				if (handlerName === "onResizeStop") this.resetData();
			};
		}
		renderResizeHandle(handleAxis, ref) {
			const { handle } = this.props;
			if (!handle) return /* @__PURE__ */ React.createElement("span", {
				className: `react-resizable-handle react-resizable-handle-${handleAxis}`,
				ref
			});
			if (typeof handle === "function") return handle(handleAxis, ref);
			const isDOMElement = typeof handle.type === "string";
			const props = _objectSpread({ ref }, isDOMElement ? {} : { handleAxis });
			return /* @__PURE__ */ React.cloneElement(handle, props);
		}
		render() {
			const _this$props = this.props, { children, className, draggableOpts, width, height, handle, handleSize, lockAspectRatio, axis, minConstraints, maxConstraints, onResize, onResizeStop, onResizeStart, resizeHandles, transformScale } = _this$props, p = _objectWithoutProperties(_this$props, _excluded);
			return (0, _utils.cloneElement)(children, _objectSpread(_objectSpread({}, p), {}, {
				className: `${className ? `${className} ` : ""}react-resizable`,
				children: [...React.Children.toArray(children.props.children), ...resizeHandles.map((handleAxis) => {
					const ref = this.handleRefs[handleAxis] ?? (this.handleRefs[handleAxis] = /* @__PURE__ */ React.createRef());
					return /* @__PURE__ */ React.createElement(_reactDraggable.DraggableCore, _extends({}, draggableOpts, {
						nodeRef: ref,
						key: `resizableHandle-${handleAxis}`,
						onStop: this.resizeHandler("onResizeStop", handleAxis),
						onStart: this.resizeHandler("onResizeStart", handleAxis),
						onDrag: this.resizeHandler("onResize", handleAxis)
					}), this.renderResizeHandle(handleAxis, ref));
				})]
			}));
		}
	};
	exports.default = Resizable;
	Resizable.propTypes = _propTypes.resizableProps;
	Resizable.defaultProps = {
		axis: "both",
		handleSize: [20, 20],
		lockAspectRatio: false,
		minConstraints: [20, 20],
		maxConstraints: [Infinity, Infinity],
		resizeHandles: ["se"],
		transformScale: 1
	};
}));
//#endregion
//#region ../../node_modules/react-resizable/build/ResizableBox.js
var require_ResizableBox = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.__esModule = true;
	exports.default = void 0;
	var React = _interopRequireWildcard(require_react());
	var _propTypes = _interopRequireDefault(require_prop_types());
	var _Resizable = _interopRequireDefault(require_Resizable());
	var _propTypes2 = require_propTypes();
	var _excluded = [
		"handle",
		"handleSize",
		"onResize",
		"onResizeStart",
		"onResizeStop",
		"draggableOpts",
		"minConstraints",
		"maxConstraints",
		"lockAspectRatio",
		"axis",
		"width",
		"height",
		"resizeHandles",
		"style",
		"transformScale"
	];
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function _interopRequireWildcard(e, t) {
		if ("function" == typeof WeakMap) var r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
		return (_interopRequireWildcard = function(e, t) {
			if (!t && e && e.__esModule) return e;
			var o, i, f = {
				__proto__: null,
				default: e
			};
			if (null === e || "object" != typeof e && "function" != typeof e) return f;
			if (o = t ? n : r) {
				if (o.has(e)) return o.get(e);
				o.set(e, f);
			}
			for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]);
			return f;
		})(e, t);
	}
	function _extends() {
		return _extends = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends.apply(null, arguments);
	}
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	function _defineProperty(e, r, t) {
		return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	function _toPropertyKey(t) {
		var i = _toPrimitive(t, "string");
		return "symbol" == typeof i ? i : i + "";
	}
	function _toPrimitive(t, r) {
		if ("object" != typeof t || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != typeof i) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	function _objectWithoutProperties(e, t) {
		if (null == e) return {};
		var o, r, i = _objectWithoutPropertiesLoose(e, t);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
		}
		return i;
	}
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (-1 !== e.indexOf(n)) continue;
			t[n] = r[n];
		}
		return t;
	}
	var ResizableBox = class extends React.Component {
		constructor() {
			super(...arguments);
			this.state = {
				width: this.props.width,
				height: this.props.height,
				propsWidth: this.props.width,
				propsHeight: this.props.height
			};
			this.onResize = (e, data) => {
				const { size } = data;
				if (this.props.onResize) {
					e.persist?.();
					this.setState(size, () => this.props.onResize && this.props.onResize(e, data));
				} else this.setState(size);
			};
		}
		static getDerivedStateFromProps(props, state) {
			if (state.propsWidth !== props.width || state.propsHeight !== props.height) return {
				width: props.width,
				height: props.height,
				propsWidth: props.width,
				propsHeight: props.height
			};
			return null;
		}
		render() {
			const _this$props = this.props, { handle, handleSize, onResize, onResizeStart, onResizeStop, draggableOpts, minConstraints, maxConstraints, lockAspectRatio, axis, width, height, resizeHandles, style, transformScale } = _this$props, props = _objectWithoutProperties(_this$props, _excluded);
			return /* @__PURE__ */ React.createElement(_Resizable.default, {
				axis,
				draggableOpts,
				handle,
				handleSize,
				height: this.state.height,
				lockAspectRatio,
				maxConstraints,
				minConstraints,
				onResizeStart,
				onResize: this.onResize,
				onResizeStop,
				resizeHandles,
				transformScale,
				width: this.state.width
			}, /* @__PURE__ */ React.createElement("div", _extends({}, props, { style: _objectSpread(_objectSpread({}, style), {}, {
				width: this.state.width + "px",
				height: this.state.height + "px"
			}) })));
		}
	};
	exports.default = ResizableBox;
	ResizableBox.propTypes = _objectSpread(_objectSpread({}, _propTypes2.resizableProps), {}, { children: _propTypes.default.element });
}));
//#endregion
//#region ../../node_modules/react-resizable/index.js
var require_react_resizable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function() {
		throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
	};
	module.exports.Resizable = require_Resizable().default;
	module.exports.ResizableBox = require_ResizableBox().default;
}));
//#endregion
//#region ../../node_modules/react-grid-layout/dist/chunk-WGL5FSZH.mjs
var import_cjs = require_cjs();
var import_react_resizable = require_react_resizable();
var import_fast_equals = require_fast_equals();
function GridItem(props) {
	const { children, cols, containerWidth, margin, containerPadding, rowHeight, maxRows, isDraggable, isResizable, isBounded, static: isStatic, useCSSTransforms = true, usePercentages = false, transformScale = 1, positionStrategy, dragThreshold = 0, droppingPosition, className = "", style, handle = "", cancel = "", x, y, w, h, minW = 1, maxW = Infinity, minH = 1, maxH = Infinity, i, resizeHandles, resizeHandle, constraints = defaultConstraints, layoutItem, layout = [], onDragStart: onDragStartProp, onDrag: onDragProp, onDragStop: onDragStopProp, onResizeStart: onResizeStartProp, onResize: onResizeProp, onResizeStop: onResizeStopProp } = props;
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const [resizing, setResizing] = (0, import_react.useState)(false);
	const elementRef = (0, import_react.useRef)(null);
	const dragPositionRef = (0, import_react.useRef)({
		left: 0,
		top: 0
	});
	const resizePositionRef = (0, import_react.useRef)({
		top: 0,
		left: 0,
		width: 0,
		height: 0
	});
	const prevDroppingPositionRef = (0, import_react.useRef)(void 0);
	const layoutRef = (0, import_react.useRef)(layout);
	layoutRef.current = layout;
	const onDragStartRef = (0, import_react.useRef)(null);
	const onDragRef = (0, import_react.useRef)(null);
	const dragPendingRef = (0, import_react.useRef)(false);
	const initialDragClientRef = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const thresholdExceededRef = (0, import_react.useRef)(false);
	const positionParams = (0, import_react.useMemo)(() => ({
		cols,
		containerPadding,
		containerWidth,
		margin,
		maxRows,
		rowHeight
	}), [
		cols,
		containerPadding,
		containerWidth,
		margin,
		maxRows,
		rowHeight
	]);
	const constraintContext = (0, import_react.useMemo)(() => ({
		cols,
		maxRows,
		containerWidth,
		containerHeight: 0,
		rowHeight,
		margin,
		layout: []
	}), [
		cols,
		maxRows,
		containerWidth,
		rowHeight,
		margin
	]);
	const getConstraintContext = (0, import_react.useCallback)(() => ({
		...constraintContext,
		layout: layoutRef.current
	}), [constraintContext]);
	const effectiveLayoutItem = (0, import_react.useMemo)(() => layoutItem ?? {
		i,
		x,
		y,
		w,
		h,
		minW,
		maxW,
		minH,
		maxH
	}, [
		layoutItem,
		i,
		x,
		y,
		w,
		h,
		minW,
		maxW,
		minH,
		maxH
	]);
	const createStyle = (0, import_react.useCallback)((pos2) => {
		if (positionStrategy?.calcStyle) return positionStrategy.calcStyle(pos2);
		if (useCSSTransforms) return setTransform(pos2);
		const styleObj = setTopLeft(pos2);
		if (usePercentages) return {
			...styleObj,
			left: perc(pos2.left / containerWidth),
			width: perc(pos2.width / containerWidth)
		};
		return styleObj;
	}, [
		positionStrategy,
		useCSSTransforms,
		usePercentages,
		containerWidth
	]);
	const onDragStart = (0, import_react.useCallback)((e, { node }) => {
		if (!onDragStartProp) return;
		const { offsetParent } = node;
		if (!offsetParent) return;
		const parentRect = offsetParent.getBoundingClientRect();
		const clientRect = node.getBoundingClientRect();
		const cLeft = clientRect.left / transformScale;
		const pLeft = parentRect.left / transformScale;
		const cTop = clientRect.top / transformScale;
		const pTop = parentRect.top / transformScale;
		let newPosition;
		if (positionStrategy?.calcDragPosition) {
			const mouseEvent = e;
			newPosition = positionStrategy.calcDragPosition(mouseEvent.clientX, mouseEvent.clientY, mouseEvent.clientX - clientRect.left, mouseEvent.clientY - clientRect.top);
		} else newPosition = {
			left: cLeft - pLeft + offsetParent.scrollLeft,
			top: cTop - pTop + offsetParent.scrollTop
		};
		dragPositionRef.current = newPosition;
		if (dragThreshold > 0) {
			const mouseEvent = e;
			initialDragClientRef.current = {
				x: mouseEvent.clientX,
				y: mouseEvent.clientY
			};
			dragPendingRef.current = true;
			thresholdExceededRef.current = false;
			setDragging(true);
			return;
		}
		setDragging(true);
		const rawPos = calcXYRaw(positionParams, newPosition.top, newPosition.left);
		const { x: newX, y: newY } = applyPositionConstraints(constraints, effectiveLayoutItem, rawPos.x, rawPos.y, getConstraintContext());
		onDragStartProp(i, newX, newY, {
			e,
			node,
			newPosition
		});
	}, [
		onDragStartProp,
		transformScale,
		positionParams,
		positionStrategy,
		dragThreshold,
		constraints,
		effectiveLayoutItem,
		getConstraintContext,
		i
	]);
	const onDrag = (0, import_react.useCallback)((e, { node, deltaX, deltaY }) => {
		if (!onDragProp || !dragging) return;
		const mouseEvent = e;
		if (dragPendingRef.current && !thresholdExceededRef.current) {
			const dx = mouseEvent.clientX - initialDragClientRef.current.x;
			const dy = mouseEvent.clientY - initialDragClientRef.current.y;
			if (Math.hypot(dx, dy) < dragThreshold) return;
			thresholdExceededRef.current = true;
			dragPendingRef.current = false;
			if (onDragStartProp) {
				const rawPos2 = calcXYRaw(positionParams, dragPositionRef.current.top, dragPositionRef.current.left);
				const { x: startX, y: startY } = applyPositionConstraints(constraints, effectiveLayoutItem, rawPos2.x, rawPos2.y, getConstraintContext());
				onDragStartProp(i, startX, startY, {
					e,
					node,
					newPosition: dragPositionRef.current
				});
			}
		}
		let top = dragPositionRef.current.top + deltaY;
		let left = dragPositionRef.current.left + deltaX;
		if (isBounded) {
			const { offsetParent } = node;
			if (offsetParent) {
				const bottomBoundary = offsetParent.clientHeight - calcGridItemWHPx(h, rowHeight, margin[1]);
				top = clamp$1(top, 0, bottomBoundary);
				const rightBoundary = containerWidth - calcGridItemWHPx(w, calcGridColWidth(positionParams), margin[0]);
				left = clamp$1(left, 0, rightBoundary);
			}
		}
		const newPosition = {
			top,
			left
		};
		dragPositionRef.current = newPosition;
		const rawPos = calcXYRaw(positionParams, top, left);
		const { x: newX, y: newY } = applyPositionConstraints(constraints, effectiveLayoutItem, rawPos.x, rawPos.y, getConstraintContext());
		onDragProp(i, newX, newY, {
			e,
			node,
			newPosition
		});
	}, [
		onDragProp,
		onDragStartProp,
		dragging,
		dragThreshold,
		isBounded,
		h,
		rowHeight,
		margin,
		positionParams,
		containerWidth,
		w,
		i,
		constraints,
		effectiveLayoutItem,
		getConstraintContext
	]);
	const onDragStop = (0, import_react.useCallback)((e, { node }) => {
		if (!onDragStopProp || !dragging) return;
		const wasPending = dragPendingRef.current;
		dragPendingRef.current = false;
		thresholdExceededRef.current = false;
		initialDragClientRef.current = {
			x: 0,
			y: 0
		};
		if (wasPending) {
			setDragging(false);
			dragPositionRef.current = {
				left: 0,
				top: 0
			};
			return;
		}
		const { left, top } = dragPositionRef.current;
		const newPosition = {
			top,
			left
		};
		setDragging(false);
		dragPositionRef.current = {
			left: 0,
			top: 0
		};
		const rawPos = calcXYRaw(positionParams, top, left);
		const { x: newX, y: newY } = applyPositionConstraints(constraints, effectiveLayoutItem, rawPos.x, rawPos.y, getConstraintContext());
		onDragStopProp(i, newX, newY, {
			e,
			node,
			newPosition
		});
	}, [
		onDragStopProp,
		dragging,
		positionParams,
		constraints,
		effectiveLayoutItem,
		getConstraintContext,
		i
	]);
	onDragStartRef.current = onDragStart;
	onDragRef.current = onDrag;
	const onResizeHandler = (0, import_react.useCallback)((e, { node, size, handle: resizeHandle2 }, position, handlerName) => {
		const handler = handlerName === "onResizeStart" ? onResizeStartProp : handlerName === "onResize" ? onResizeProp : onResizeStopProp;
		if (!handler) return;
		let updatedSize;
		if (node) updatedSize = resizeItemInDirection(resizeHandle2, position, size, containerWidth);
		else updatedSize = {
			...size,
			top: position.top,
			left: position.left
		};
		resizePositionRef.current = updatedSize;
		const rawSize = calcWHRaw(positionParams, updatedSize.width, updatedSize.height);
		const { w: newW, h: newH } = applySizeConstraints(constraints, effectiveLayoutItem, rawSize.w, rawSize.h, resizeHandle2, getConstraintContext());
		handler(i, newW, newH, {
			e: e.nativeEvent,
			node,
			size: updatedSize,
			handle: resizeHandle2
		});
	}, [
		onResizeStartProp,
		onResizeProp,
		onResizeStopProp,
		containerWidth,
		positionParams,
		i,
		constraints,
		effectiveLayoutItem,
		getConstraintContext
	]);
	const handleResizeStart = (0, import_react.useCallback)((e, data) => {
		setResizing(true);
		const pos2 = calcGridItemPosition(positionParams, x, y, w, h);
		onResizeHandler(e, {
			...data,
			handle: data.handle
		}, pos2, "onResizeStart");
	}, [
		onResizeHandler,
		positionParams,
		x,
		y,
		w,
		h
	]);
	const handleResize = (0, import_react.useCallback)((e, data) => {
		const pos2 = calcGridItemPosition(positionParams, x, y, w, h);
		onResizeHandler(e, {
			...data,
			handle: data.handle
		}, pos2, "onResize");
	}, [
		onResizeHandler,
		positionParams,
		x,
		y,
		w,
		h
	]);
	const handleResizeStop = (0, import_react.useCallback)((e, data) => {
		setResizing(false);
		resizePositionRef.current = {
			top: 0,
			left: 0,
			width: 0,
			height: 0
		};
		const pos2 = calcGridItemPosition(positionParams, x, y, w, h);
		onResizeHandler(e, {
			...data,
			handle: data.handle
		}, pos2, "onResizeStop");
	}, [
		onResizeHandler,
		positionParams,
		x,
		y,
		w,
		h
	]);
	(0, import_react.useEffect)(() => {
		if (!droppingPosition) return;
		const node = elementRef.current;
		if (!node) return;
		const prevDroppingPosition = prevDroppingPositionRef.current || {
			left: 0,
			top: 0
		};
		const shouldDrag = dragging && (droppingPosition.left !== prevDroppingPosition.left || droppingPosition.top !== prevDroppingPosition.top);
		if (!dragging) {
			const fakeData = {
				node,
				deltaX: droppingPosition.left,
				deltaY: droppingPosition.top,
				lastX: 0,
				lastY: 0,
				x: droppingPosition.left,
				y: droppingPosition.top
			};
			onDragStartRef.current?.(droppingPosition.e, fakeData);
		} else if (shouldDrag) {
			const fakeData = {
				node,
				deltaX: droppingPosition.left - dragPositionRef.current.left,
				deltaY: droppingPosition.top - dragPositionRef.current.top,
				lastX: dragPositionRef.current.left,
				lastY: dragPositionRef.current.top,
				x: droppingPosition.left,
				y: droppingPosition.top
			};
			onDragRef.current?.(droppingPosition.e, fakeData);
		}
		prevDroppingPositionRef.current = droppingPosition;
	}, [
		droppingPosition,
		dragging,
		i
	]);
	const pos = calcGridItemPosition(positionParams, x, y, w, h, dragging ? dragPositionRef.current : null, resizing ? resizePositionRef.current : null);
	const child = import_react.Children.only(children);
	const colWidth = calcGridColWidth(positionParams);
	const minConstraints = [calcGridItemWHPx(minW, colWidth, margin[0]), calcGridItemWHPx(minH, rowHeight, margin[1])];
	const maxConstraints = [calcGridItemWHPx(maxW, colWidth, margin[0]), calcGridItemWHPx(maxH, rowHeight, margin[1])];
	const childProps = child.props;
	const childClassName = childProps["className"];
	const childStyle = childProps["style"];
	let newChild = import_react.cloneElement(child, {
		ref: elementRef,
		className: clsx("react-grid-item", childClassName, className, {
			static: isStatic,
			resizing,
			"react-draggable": isDraggable,
			"react-draggable-dragging": dragging,
			dropping: Boolean(droppingPosition),
			cssTransforms: useCSSTransforms
		}),
		style: {
			...style,
			...childStyle,
			...createStyle(pos)
		}
	});
	const resizableHandle = resizeHandle;
	newChild = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_resizable.Resizable, {
		draggableOpts: { disabled: !isResizable },
		className: isResizable ? void 0 : "react-resizable-hide",
		width: pos.width,
		height: pos.height,
		minConstraints,
		maxConstraints,
		onResizeStart: handleResizeStart,
		onResize: handleResize,
		onResizeStop: handleResizeStop,
		transformScale,
		resizeHandles,
		handle: resizableHandle,
		children: newChild
	});
	newChild = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_cjs.DraggableCore, {
		disabled: !isDraggable,
		onStart: onDragStart,
		onDrag,
		onStop: onDragStop,
		handle,
		cancel: ".react-resizable-handle" + (cancel ? "," + cancel : ""),
		scale: transformScale,
		nodeRef: elementRef,
		children: newChild
	});
	return newChild;
}
var noop = () => {};
var layoutClassName = "react-grid-layout";
var isFirefox = false;
try {
	isFirefox = /firefox/i.test(navigator.userAgent);
} catch {}
function childrenEqual(a, b) {
	const aArr = import_react.Children.toArray(a);
	const bArr = import_react.Children.toArray(b);
	if (aArr.length !== bArr.length) return false;
	for (let i = 0; i < aArr.length; i++) {
		const aChild = aArr[i];
		const bChild = bArr[i];
		if (aChild?.key !== bChild?.key) return false;
	}
	return true;
}
function synchronizeLayoutWithChildren(initialLayout, children, cols, compactor) {
	const layout = [];
	const childKeys = /* @__PURE__ */ new Set();
	import_react.Children.forEach(children, (child) => {
		if (!import_react.isValidElement(child) || child.key === null) return;
		const key = String(child.key);
		childKeys.add(key);
		const existingItem = initialLayout.find((l) => l.i === key);
		if (existingItem) layout.push(cloneLayoutItem(existingItem));
		else {
			const dataGrid = child.props["data-grid"];
			if (dataGrid) layout.push({
				i: key,
				x: dataGrid.x ?? 0,
				y: dataGrid.y ?? 0,
				w: dataGrid.w ?? 1,
				h: dataGrid.h ?? 1,
				minW: dataGrid.minW,
				maxW: dataGrid.maxW,
				minH: dataGrid.minH,
				maxH: dataGrid.maxH,
				static: dataGrid.static,
				isDraggable: dataGrid.isDraggable,
				isResizable: dataGrid.isResizable,
				resizeHandles: dataGrid.resizeHandles,
				isBounded: dataGrid.isBounded
			});
			else layout.push({
				i: key,
				x: 0,
				y: bottom(layout),
				w: 1,
				h: 1
			});
		}
	});
	const corrected = correctBounds(layout, { cols });
	return compactor.compact(corrected, cols);
}
function GridLayout(props) {
	const { children, width, gridConfig: gridConfigProp, dragConfig: dragConfigProp, resizeConfig: resizeConfigProp, dropConfig: dropConfigProp, positionStrategy = defaultPositionStrategy, compactor: compactorProp, constraints = defaultConstraints, layout: propsLayout = [], droppingItem: droppingItemProp, autoSize = true, className = "", style = {}, innerRef, onLayoutChange = noop, onDragStart: onDragStartProp = noop, onDrag: onDragProp = noop, onDragStop: onDragStopProp = noop, onResizeStart: onResizeStartProp = noop, onResize: onResizeProp = noop, onResizeStop: onResizeStopProp = noop, onDrop: onDropProp = noop, onDropDragOver: onDropDragOverProp = noop } = props;
	const gridConfig = (0, import_react.useMemo)(() => ({
		...defaultGridConfig,
		...gridConfigProp
	}), [gridConfigProp]);
	const dragConfig = (0, import_react.useMemo)(() => ({
		...defaultDragConfig,
		...dragConfigProp
	}), [dragConfigProp]);
	const resizeConfig = (0, import_react.useMemo)(() => ({
		...defaultResizeConfig,
		...resizeConfigProp
	}), [resizeConfigProp]);
	const dropConfig = (0, import_react.useMemo)(() => ({
		...defaultDropConfig,
		...dropConfigProp
	}), [dropConfigProp]);
	const { cols, rowHeight, maxRows, margin, containerPadding } = gridConfig;
	const { enabled: isDraggable, bounded: isBounded, handle: draggableHandle, cancel: draggableCancel, threshold: dragThreshold } = dragConfig;
	const { enabled: isResizable, handles: resizeHandles, handleComponent: resizeHandle } = resizeConfig;
	const { enabled: isDroppable, defaultItem: defaultDropItem, onDragOver: dropConfigOnDragOver } = dropConfig;
	const compactor = compactorProp ?? getCompactor("vertical");
	const compactType = compactor.type;
	const allowOverlap = compactor.allowOverlap;
	const preventCollision = compactor.preventCollision ?? false;
	const droppingItem = (0, import_react.useMemo)(() => droppingItemProp ?? {
		i: "__dropping-elem__",
		...defaultDropItem
	}, [droppingItemProp, defaultDropItem]);
	const useCSSTransforms = positionStrategy.type === "transform";
	const transformScale = positionStrategy.scale;
	const effectiveContainerPadding = containerPadding ?? margin;
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [layout, setLayout] = (0, import_react.useState)(() => synchronizeLayoutWithChildren(propsLayout, children, cols, compactor));
	const [activeDrag, setActiveDrag] = (0, import_react.useState)(null);
	const [resizing, setResizing] = (0, import_react.useState)(false);
	const [droppingDOMNode, setDroppingDOMNode] = (0, import_react.useState)(null);
	const [droppingPosition, setDroppingPosition] = (0, import_react.useState)();
	const oldDragItemRef = (0, import_react.useRef)(null);
	const oldResizeItemRef = (0, import_react.useRef)(null);
	const oldLayoutRef = (0, import_react.useRef)(null);
	const dragEnterCounterRef = (0, import_react.useRef)(0);
	const prevLayoutRef = (0, import_react.useRef)(layout);
	const prevPropsLayoutRef = (0, import_react.useRef)(propsLayout);
	const prevChildrenRef = (0, import_react.useRef)(children);
	const prevCompactTypeRef = (0, import_react.useRef)(compactType);
	const layoutRef = (0, import_react.useRef)(layout);
	layoutRef.current = layout;
	(0, import_react.useEffect)(() => {
		setMounted(true);
		if (!(0, import_fast_equals.deepEqual)(layout, propsLayout)) onLayoutChange(layout);
	}, []);
	(0, import_react.useEffect)(() => {
		if (activeDrag) return;
		if (droppingDOMNode) return;
		const layoutChanged = !(0, import_fast_equals.deepEqual)(propsLayout, prevPropsLayoutRef.current);
		const childrenChanged = !childrenEqual(children, prevChildrenRef.current);
		const compactTypeChanged = compactType !== prevCompactTypeRef.current;
		if (layoutChanged || childrenChanged || compactTypeChanged) {
			const newLayout = synchronizeLayoutWithChildren(layoutChanged ? propsLayout : layout, children, cols, compactor);
			if (!(0, import_fast_equals.deepEqual)(newLayout, layout)) setLayout(newLayout);
		}
		prevPropsLayoutRef.current = propsLayout;
		prevChildrenRef.current = children;
		prevCompactTypeRef.current = compactType;
	}, [
		propsLayout,
		children,
		cols,
		compactType,
		compactor,
		activeDrag,
		droppingDOMNode,
		layout
	]);
	(0, import_react.useEffect)(() => {
		if (!activeDrag && !(0, import_fast_equals.deepEqual)(layout, prevLayoutRef.current)) {
			prevLayoutRef.current = layout;
			onLayoutChange(layout.filter((l) => l.i !== droppingItem.i));
		}
	}, [
		layout,
		activeDrag,
		onLayoutChange,
		droppingItem.i
	]);
	const containerHeight = (0, import_react.useMemo)(() => {
		if (!autoSize) return void 0;
		const nbRow = bottom(layout);
		const containerPaddingY = effectiveContainerPadding[1];
		return nbRow * rowHeight + (nbRow - 1) * margin[1] + containerPaddingY * 2 + "px";
	}, [
		autoSize,
		layout,
		rowHeight,
		margin,
		effectiveContainerPadding
	]);
	const onDragStart = (0, import_react.useCallback)((i, _x, _y, data) => {
		const currentLayout = layoutRef.current;
		const l = getLayoutItem(currentLayout, i);
		if (!l) return;
		const placeholder = {
			w: l.w,
			h: l.h,
			x: l.x,
			y: l.y,
			i
		};
		oldDragItemRef.current = cloneLayoutItem(l);
		oldLayoutRef.current = currentLayout;
		setActiveDrag(placeholder);
		onDragStartProp(currentLayout, l, l, null, data.e, data.node);
	}, [onDragStartProp]);
	const onDrag = (0, import_react.useCallback)((i, x, y, data) => {
		const currentLayout = layoutRef.current;
		const oldDragItem = oldDragItemRef.current;
		const l = getLayoutItem(currentLayout, i);
		if (!l) return;
		const placeholder = {
			w: l.w,
			h: l.h,
			x: l.x,
			y: l.y,
			i
		};
		const newLayout = moveElement(currentLayout, l, x, y, true, preventCollision, compactType, cols, allowOverlap);
		onDragProp(newLayout, oldDragItem, l, placeholder, data.e, data.node);
		setLayout(compactor.compact(newLayout, cols));
		setActiveDrag(placeholder);
	}, [
		preventCollision,
		compactType,
		cols,
		allowOverlap,
		compactor,
		onDragProp
	]);
	const onDragStop = (0, import_react.useCallback)((i, x, y, data) => {
		if (!activeDrag) return;
		const currentLayout = layoutRef.current;
		const oldDragItem = oldDragItemRef.current;
		const l = getLayoutItem(currentLayout, i);
		if (!l) return;
		const newLayout = moveElement(currentLayout, l, x, y, true, preventCollision, compactType, cols, allowOverlap);
		const finalLayout = compactor.compact(newLayout, cols);
		onDragStopProp(finalLayout, oldDragItem, l, null, data.e, data.node);
		const oldLayout = oldLayoutRef.current;
		oldDragItemRef.current = null;
		oldLayoutRef.current = null;
		setActiveDrag(null);
		setLayout(finalLayout);
		if (oldLayout && !(0, import_fast_equals.deepEqual)(oldLayout, finalLayout)) onLayoutChange(finalLayout);
	}, [
		activeDrag,
		preventCollision,
		compactType,
		cols,
		allowOverlap,
		compactor,
		onDragStopProp,
		onLayoutChange
	]);
	const onResizeStart = (0, import_react.useCallback)((i, _w, _h, data) => {
		const currentLayout = layoutRef.current;
		const l = getLayoutItem(currentLayout, i);
		if (!l) return;
		oldResizeItemRef.current = cloneLayoutItem(l);
		oldLayoutRef.current = currentLayout;
		setResizing(true);
		onResizeStartProp(currentLayout, l, l, null, data.e, data.node);
	}, [onResizeStartProp]);
	const onResize = (0, import_react.useCallback)((i, w, h, data) => {
		const currentLayout = layoutRef.current;
		const oldResizeItem = oldResizeItemRef.current;
		const { handle } = data;
		let shouldMoveItem = false;
		let newX;
		let newY;
		const [newLayout, l] = withLayoutItem(currentLayout, i, (item) => {
			newX = item.x;
			newY = item.y;
			if ([
				"sw",
				"w",
				"nw",
				"n",
				"ne"
			].includes(handle)) {
				if ([
					"sw",
					"nw",
					"w"
				].includes(handle)) {
					newX = item.x + (item.w - w);
					w = item.x !== newX && newX < 0 ? item.w : w;
					newX = newX < 0 ? 0 : newX;
				}
				if ([
					"ne",
					"n",
					"nw"
				].includes(handle)) {
					newY = item.y + (item.h - h);
					h = item.y !== newY && newY < 0 ? item.h : h;
					newY = newY < 0 ? 0 : newY;
				}
				shouldMoveItem = true;
			}
			if (preventCollision && !allowOverlap) {
				if (getAllCollisions(currentLayout, {
					...item,
					w,
					h,
					x: newX ?? item.x,
					y: newY ?? item.y
				}).filter((layoutItem) => layoutItem.i !== item.i).length > 0) {
					newY = item.y;
					h = item.h;
					newX = item.x;
					w = item.w;
					shouldMoveItem = false;
				}
			}
			item.w = w;
			item.h = h;
			return item;
		});
		if (!l) return;
		let finalLayout = newLayout;
		if (shouldMoveItem && newX !== void 0 && newY !== void 0) finalLayout = moveElement(newLayout, l, newX, newY, true, preventCollision, compactType, cols, allowOverlap);
		const placeholder = {
			w: l.w,
			h: l.h,
			x: l.x,
			y: l.y,
			i,
			static: true
		};
		onResizeProp(finalLayout, oldResizeItem, l, placeholder, data.e, data.node);
		setLayout(compactor.compact(finalLayout, cols));
		setActiveDrag(placeholder);
	}, [
		preventCollision,
		compactType,
		cols,
		allowOverlap,
		compactor,
		onResizeProp
	]);
	const onResizeStop = (0, import_react.useCallback)((i, _w, _h, data) => {
		const currentLayout = layoutRef.current;
		const oldResizeItem = oldResizeItemRef.current;
		const l = getLayoutItem(currentLayout, i);
		const finalLayout = compactor.compact(currentLayout, cols);
		onResizeStopProp(finalLayout, oldResizeItem, l ?? null, null, data.e, data.node);
		const oldLayout = oldLayoutRef.current;
		oldResizeItemRef.current = null;
		oldLayoutRef.current = null;
		setActiveDrag(null);
		setResizing(false);
		setLayout(finalLayout);
		if (oldLayout && !(0, import_fast_equals.deepEqual)(oldLayout, finalLayout)) onLayoutChange(finalLayout);
	}, [
		cols,
		compactor,
		onResizeStopProp,
		onLayoutChange
	]);
	const removeDroppingPlaceholder = (0, import_react.useCallback)(() => {
		const currentLayout = layoutRef.current;
		if (!currentLayout.some((l) => l.i === droppingItem.i)) {
			setDroppingDOMNode(null);
			setActiveDrag(null);
			setDroppingPosition(void 0);
			return;
		}
		setLayout(compactor.compact(currentLayout.filter((l) => l.i !== droppingItem.i), cols));
		setDroppingDOMNode(null);
		setActiveDrag(null);
		setDroppingPosition(void 0);
	}, [
		droppingItem.i,
		cols,
		compactor
	]);
	const handleDragOver = (0, import_react.useCallback)((e) => {
		e.preventDefault();
		e.stopPropagation();
		if (isFirefox && !e.nativeEvent.target?.classList.contains(layoutClassName)) return false;
		const rawResult = dropConfigOnDragOver ? dropConfigOnDragOver(e.nativeEvent) : onDropDragOverProp(e);
		if (rawResult === false) {
			if (droppingDOMNode) removeDroppingPlaceholder();
			return false;
		}
		const { dragOffsetX = 0, dragOffsetY = 0, ...onDragOverResult } = rawResult ?? {};
		const finalDroppingItem = {
			...droppingItem,
			...onDragOverResult
		};
		const gridRect = e.currentTarget.getBoundingClientRect();
		const positionParams = {
			cols,
			margin,
			maxRows,
			rowHeight,
			containerWidth: width,
			containerPadding: effectiveContainerPadding
		};
		const actualColWidth = calcGridColWidth(positionParams);
		const itemPixelWidth = calcGridItemWHPx(finalDroppingItem.w, actualColWidth, margin[0]);
		const itemPixelHeight = calcGridItemWHPx(finalDroppingItem.h, rowHeight, margin[1]);
		const itemCenterOffsetX = itemPixelWidth / 2;
		const itemCenterOffsetY = itemPixelHeight / 2;
		const rawGridX = e.clientX - gridRect.left + dragOffsetX - itemCenterOffsetX;
		const rawGridY = e.clientY - gridRect.top + dragOffsetY - itemCenterOffsetY;
		const clampedGridX = Math.max(0, rawGridX);
		const clampedGridY = Math.max(0, rawGridY);
		const newDroppingPosition = {
			left: clampedGridX / transformScale,
			top: clampedGridY / transformScale,
			e: e.nativeEvent
		};
		if (!droppingDOMNode) {
			const calculatedPosition = calcXY(positionParams, clampedGridY, clampedGridX, finalDroppingItem.w, finalDroppingItem.h);
			setDroppingDOMNode(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, finalDroppingItem.i));
			setDroppingPosition(newDroppingPosition);
			setLayout([...layoutRef.current.filter((l) => l.i !== finalDroppingItem.i), {
				...finalDroppingItem,
				x: calculatedPosition.x,
				y: calculatedPosition.y,
				static: false,
				isDraggable: true
			}]);
		} else if (droppingPosition) {
			if (droppingPosition.left !== newDroppingPosition.left || droppingPosition.top !== newDroppingPosition.top) setDroppingPosition(newDroppingPosition);
		}
	}, [
		droppingDOMNode,
		droppingPosition,
		droppingItem,
		dropConfigOnDragOver,
		onDropDragOverProp,
		removeDroppingPlaceholder,
		transformScale,
		cols,
		margin,
		maxRows,
		rowHeight,
		width,
		effectiveContainerPadding
	]);
	const handleDragLeave = (0, import_react.useCallback)((e) => {
		e.preventDefault();
		e.stopPropagation();
		dragEnterCounterRef.current--;
		if (dragEnterCounterRef.current < 0) dragEnterCounterRef.current = 0;
		if (dragEnterCounterRef.current === 0) removeDroppingPlaceholder();
	}, [removeDroppingPlaceholder]);
	const handleDragEnter = (0, import_react.useCallback)((e) => {
		e.preventDefault();
		e.stopPropagation();
		dragEnterCounterRef.current++;
	}, []);
	const handleDrop = (0, import_react.useCallback)((e) => {
		e.preventDefault();
		e.stopPropagation();
		const currentLayout = layoutRef.current;
		const item = currentLayout.find((l) => l.i === droppingItem.i);
		dragEnterCounterRef.current = 0;
		removeDroppingPlaceholder();
		onDropProp(currentLayout, item, e.nativeEvent);
	}, [
		droppingItem.i,
		removeDroppingPlaceholder,
		onDropProp
	]);
	const processGridItem = (0, import_react.useCallback)((child, isDroppingItem) => {
		if (!child || !child.key) return null;
		const l = getLayoutItem(layout, String(child.key));
		if (!l) return null;
		const draggable = typeof l.isDraggable === "boolean" ? l.isDraggable : !l.static && isDraggable;
		const resizable = typeof l.isResizable === "boolean" ? l.isResizable : !l.static && isResizable;
		const resizeHandlesOptions = l.resizeHandles || [...resizeHandles];
		const bounded = draggable && isBounded && l.isBounded !== false;
		const resizeHandleElement = resizeHandle;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridItem, {
			containerWidth: width,
			cols,
			margin,
			containerPadding: effectiveContainerPadding,
			maxRows,
			rowHeight,
			cancel: draggableCancel,
			handle: draggableHandle,
			onDragStart,
			onDrag,
			onDragStop,
			onResizeStart,
			onResize,
			onResizeStop,
			isDraggable: draggable,
			isResizable: resizable,
			isBounded: bounded,
			useCSSTransforms: useCSSTransforms && mounted,
			usePercentages: !mounted,
			transformScale,
			positionStrategy,
			dragThreshold,
			w: l.w,
			h: l.h,
			x: l.x,
			y: l.y,
			i: l.i,
			minH: l.minH,
			minW: l.minW,
			maxH: l.maxH,
			maxW: l.maxW,
			static: l.static,
			droppingPosition: isDroppingItem ? droppingPosition : void 0,
			resizeHandles: resizeHandlesOptions,
			resizeHandle: resizeHandleElement,
			constraints,
			layoutItem: l,
			layout,
			children: child
		}, l.i);
	}, [
		layout,
		width,
		cols,
		margin,
		effectiveContainerPadding,
		maxRows,
		rowHeight,
		draggableCancel,
		draggableHandle,
		onDragStart,
		onDrag,
		onDragStop,
		onResizeStart,
		onResize,
		onResizeStop,
		isDraggable,
		isResizable,
		isBounded,
		useCSSTransforms,
		mounted,
		transformScale,
		positionStrategy,
		dragThreshold,
		droppingPosition,
		resizeHandles,
		resizeHandle,
		constraints
	]);
	const renderPlaceholder = () => {
		if (!activeDrag) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridItem, {
			w: activeDrag.w,
			h: activeDrag.h,
			x: activeDrag.x,
			y: activeDrag.y,
			i: activeDrag.i,
			className: `react-grid-placeholder ${resizing ? "placeholder-resizing" : ""}`,
			containerWidth: width,
			cols,
			margin,
			containerPadding: effectiveContainerPadding,
			maxRows,
			rowHeight,
			isDraggable: false,
			isResizable: false,
			isBounded: false,
			useCSSTransforms,
			transformScale,
			constraints,
			layout,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: innerRef,
		className: clsx(layoutClassName, className),
		style: {
			height: containerHeight,
			...style
		},
		onDrop: isDroppable ? handleDrop : void 0,
		onDragLeave: isDroppable ? handleDragLeave : void 0,
		onDragEnter: isDroppable ? handleDragEnter : void 0,
		onDragOver: isDroppable ? handleDragOver : void 0,
		children: [
			import_react.Children.map(children, (child) => {
				if (!import_react.isValidElement(child)) return null;
				return processGridItem(child);
			}),
			isDroppable && droppingDOMNode && processGridItem(droppingDOMNode, true),
			renderPlaceholder()
		]
	});
}
//#endregion
//#region src/components/reports/DashboardHeader.tsx
function DashboardHeader({ dashboard }) {
	const { t } = useTranslation();
	const [editingName, setEditingName] = (0, import_react.useState)(false);
	const renameDashboardPageMutation = useRenameDashboardPageMutation();
	const handleSaveName = async (newName) => {
		const trimmedName = newName.trim();
		if (!trimmedName || trimmedName === dashboard.name) {
			setEditingName(false);
			return;
		}
		renameDashboardPageMutation.mutate({
			id: dashboard.id,
			name: trimmedName
		}, { onSuccess: () => {
			setEditingName(false);
		} });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flexDirection: "row",
			alignItems: "center",
			whiteSpace: "nowrap",
			marginLeft: 20,
			gap: 3,
			"& .hover-visible": {
				opacity: 0,
				transition: "opacity .25s"
			},
			"&:hover .hover-visible": { opacity: 1 },
			flexGrow: 1,
			flexShrink: 1,
			flexBasis: "auto",
			minWidth: 0,
			display: "flex",
			justifyContent: "flex-start"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				fontSize: 25,
				fontWeight: 500,
				flexGrow: 0,
				flexShrink: 0,
				flexBasis: "auto"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Reports" }), ":"]
		}), editingName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InitialFocus, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			defaultValue: dashboard.name,
			onEnter: handleSaveName,
			onUpdate: handleSaveName,
			onEscape: () => setEditingName(false),
			style: {
				fontSize: 25,
				fontWeight: 500,
				marginTop: -3,
				marginBottom: -4,
				paddingTop: 2,
				paddingBottom: 2
			}
		}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				fontSize: 25,
				fontWeight: 500,
				marginRight: 5,
				flexGrow: 0,
				flexShrink: 1,
				flexBasis: "auto",
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis",
				minWidth: 0
			},
			children: dashboard.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			"aria-label": t("Rename dashboard"),
			className: "hover-visible",
			style: { marginRight: 5 },
			onPress: () => setEditingName(true),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgPencil1, { style: {
				width: 11,
				height: 11,
				flexGrow: 0,
				flexShrink: 0,
				flexBasis: "auto",
				color: theme.pageTextSubdued
			} })
		})] })]
	});
}
//#endregion
//#region src/components/reports/DashboardSelector.tsx
function DashboardSelector({ dashboards, currentDashboard }) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const triggerRef = (0, import_react.useRef)(null);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const createDashboardPageMutation = useCreateDashboardPageMutation();
	const handleAddDashboard = async () => {
		const defaultName = t("New dashboard");
		createDashboardPageMutation.mutate({ name: defaultName }, { onSuccess: (id) => {
			navigate(`/reports/${id}`);
		} });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)($de32f1b87079253c$export$2e1e1122cf0cba88, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref: triggerRef,
		onPress: () => setMenuOpen(true),
		style: {
			flexGrow: 1,
			flexShrink: 1,
			flexBasis: "auto",
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis",
			minWidth: 0,
			display: "flex",
			alignItems: "center",
			gap: "5px"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flexGrow: 1,
				flexShrink: 1,
				flexBasis: "auto",
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis",
				minWidth: 0,
				textAlign: "center"
			},
			children: currentDashboard.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgExpandArrow, {
			width: 7,
			height: 7,
			style: {
				flexGrow: 0,
				flexShrink: 0,
				flexBasis: "auto",
				marginLeft: 5
			}
		})]
	}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
		triggerRef,
		isOpen: true,
		onOpenChange: setMenuOpen,
		placement: "bottom start",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)($de32f1b87079253c$export$3ddf2d174ce01153, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
			slot: "close",
			onMenuSelect: (item) => {
				if (item === "add-new") handleAddDashboard();
				else navigate(`/reports/${item}`);
				setMenuOpen(false);
			},
			items: [
				...dashboards.map((dashboard) => ({
					name: dashboard.id,
					text: dashboard.name
				})),
				Menu.line,
				{
					name: "add-new",
					text: t("Add new dashboard")
				}
			]
		}) })
	})] });
}
//#endregion
//#region src/components/reports/reports/BudgetAnalysisCard.tsx
function BudgetAnalysisCard({ widgetId, isEditing, meta = {}, onMetaChange, onRemove, onCopy }) {
	const { t } = useTranslation();
	const format = useFormat();
	const [isCardHovered, setIsCardHovered] = (0, import_react.useState)(false);
	const [nameMenuOpen, setNameMenuOpen] = (0, import_react.useState)(false);
	const { menuItems: copyMenuItems, handleMenuSelect: handleCopyMenuSelect } = useDashboardWidgetCopyMenu(onCopy);
	const [startMonth, endMonth] = calculateTimeRange(meta?.timeFrame ?? {
		start: subMonths(currentMonth(), 5),
		end: currentMonth(),
		mode: "sliding-window"
	});
	const startDate = monthFromDate(startMonth) + "-01";
	const endDate = getMonthEnd(monthFromDate(endMonth) + "-01");
	const data = useReport$1("default", (0, import_react.useMemo)(() => {
		return createBudgetAnalysisSpreadsheet({
			conditions: meta?.conditions,
			conditionsOp: meta?.conditionsOp,
			startDate,
			endDate
		});
	}, [
		meta?.conditions,
		meta?.conditionsOp,
		startDate,
		endDate
	]));
	const balance = (data && data.intervalData.length > 0 ? data.intervalData[data.intervalData.length - 1] : void 0)?.balance ?? 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, {
		isEditing,
		disableClick: nameMenuOpen,
		to: `/reports/budget-analysis/${widgetId}`,
		menuItems: [
			{
				name: "rename",
				text: t("Rename")
			},
			{
				name: "remove",
				text: t("Remove")
			},
			...copyMenuItems
		],
		onMenuSelect: (item) => {
			if (handleCopyMenuSelect(item)) return;
			switch (item) {
				case "rename":
					setNameMenuOpen(true);
					break;
				case "remove":
					onRemove();
					break;
				default: throw new Error(`Unrecognized selection: ${item}`);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: { flex: 1 },
			onPointerEnter: () => setIsCardHovered(true),
			onPointerLeave: () => setIsCardHovered(false),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					padding: 20
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { flex: 1 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCardName, {
						name: meta?.name || t("Budget Analysis"),
						isEditing: nameMenuOpen,
						onChange: (newName) => {
							onMetaChange({
								...meta,
								name: newName
							});
							setNameMenuOpen(false);
						},
						onClose: () => setNameMenuOpen(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRange, {
						start: getMonth(startDate),
						end: getMonth(endDate)
					})]
				}), data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: { textAlign: "right" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						style: {
							...styles.mediumText,
							fontWeight: 500,
							marginBottom: 5,
							color: balance >= 0 ? theme.noticeTextLight : theme.errorText
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, {
							activationFilters: [!isCardHovered],
							children: format(balance, "financial")
						}) })
					})
				})]
			}), data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetAnalysisGraph, {
				style: { flex: 1 },
				data,
				graphType: meta?.graphType || "Bar",
				showBalance: meta?.showBalance ?? true
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {})]
		})
	});
}
//#endregion
//#region src/components/reports/reports/CalendarCard.tsx
function CalendarCard({ widgetId, isEditing, meta = {}, onMetaChange, onRemove, onCopy, firstDayOfWeekIdx }) {
	const { t } = useTranslation();
	const format = useFormat();
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		async function fetchLatestTransaction() {
			const latestTrans = await send("get-latest-transaction");
			setLatestTransaction(latestTrans ? latestTrans.date : currentDay());
		}
		fetchLatestTransaction();
	}, []);
	const [start, end] = calculateTimeRange(meta?.timeFrame, {
		start: dayFromDate(currentMonth()),
		end: currentDay(),
		mode: "full"
	}, latestTransaction);
	const params = (0, import_react.useMemo)(() => calendarSpreadsheet(start, end, meta?.conditions, meta?.conditionsOp, firstDayOfWeekIdx), [
		start,
		end,
		meta?.conditions,
		meta?.conditionsOp,
		firstDayOfWeekIdx
	]);
	const [cardOrientation, setCardOrientation] = (0, import_react.useState)("row");
	const { isNarrowWidth } = useResponsive();
	const cardRef = useResizeObserver((rect) => {
		if (rect.height > rect.width) setCardOrientation("column");
		else setCardOrientation("row");
	});
	const data = useReport$1("calendar", params);
	const [nameMenuOpen, setNameMenuOpen] = (0, import_react.useState)(false);
	const { totalIncome, totalExpense } = (0, import_react.useMemo)(() => {
		if (!data) return {
			totalIncome: 0,
			totalExpense: 0
		};
		return {
			totalIncome: data.calendarData.reduce((prev, cur) => prev + cur.totalIncome, 0),
			totalExpense: data.calendarData.reduce((prev, cur) => prev + cur.totalExpense, 0)
		};
	}, [data]);
	const [monthNameFormats, setMonthNameFormats] = (0, import_react.useState)([]);
	const [selectedMonthNameFormat, setSelectedMonthNameFormat] = (0, import_react.useState)("MMMM yyyy");
	(0, import_react.useEffect)(() => {
		if (data) setMonthNameFormats(Array(data.calendarData.length).map(() => "MMMM yyyy"));
		else setMonthNameFormats([]);
	}, [data]);
	(0, import_react.useEffect)(() => {
		if (monthNameFormats.length) setSelectedMonthNameFormat(monthNameFormats.reduce((a, b) => (a?.length ?? 0) <= (b?.length ?? 0) ? a : b, "MMMM yyyy"));
		else setSelectedMonthNameFormat("MMMM yyyy");
	}, [monthNameFormats]);
	const calendarLenSize = (0, import_react.useMemo)(() => {
		if (!data) return 0;
		return data?.calendarData.length;
	}, [data]);
	const { menuItems: copyMenuItems, handleMenuSelect: handleCopyMenuSelect } = useDashboardWidgetCopyMenu(onCopy);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, {
		isEditing,
		disableClick: nameMenuOpen,
		to: `/reports/calendar/${widgetId}`,
		menuItems: [
			{
				name: "rename",
				text: t("Rename")
			},
			{
				name: "remove",
				text: t("Remove")
			},
			...copyMenuItems
		],
		onMenuSelect: (item) => {
			if (handleCopyMenuSelect(item)) return;
			switch (item) {
				case "rename":
					setNameMenuOpen(true);
					break;
				case "remove":
					onRemove();
					break;
				default: throw new Error(`Unrecognized selection: ${item}`);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			ref: (el) => el ? cardRef(el) : void 0,
			style: {
				flex: 1,
				margin: 2,
				overflow: "hidden",
				width: "100%"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					padding: 20,
					paddingBottom: 0
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: {
						flex: 1,
						marginBottom: -5
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCardName, {
						name: meta?.name || t("Calendar"),
						isEditing: nameMenuOpen,
						onChange: (newName) => {
							onMetaChange({
								...meta,
								name: newName
							});
							setNameMenuOpen(false);
						},
						onClose: () => setNameMenuOpen(false)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: { textAlign: "right" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						style: {
							...styles.mediumText,
							fontWeight: 500
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
							content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
								style: { lineHeight: 1.5 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
									style: {
										display: "grid",
										gridTemplateColumns: "70px 1fr",
										gridAutoRows: "1fr"
									},
									children: [totalIncome !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
										style: {
											textAlign: "right",
											marginRight: 4
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Income:" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
										style: { color: theme.reportsNumberPositive },
										children: totalIncome !== 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(totalIncome, "financial") }) }) : ""
									})] }), totalExpense !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
										style: {
											textAlign: "right",
											marginRight: 4
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Expenses:" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
										style: { color: theme.reportsNumberNegative },
										children: totalExpense !== 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(totalExpense, "financial") }) }) : ""
									})] })]
								})
							}),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRange, {
								start,
								end
							})
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					height: "100%",
					margin: 6,
					overflowX: cardOrientation === "row" ? isNarrowWidth ? "auto" : calendarLenSize > 4 ? "auto" : "hidden" : "hidden",
					...styles.horizontalScrollbar
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: {
						flex: 1,
						flexDirection: cardOrientation,
						gap: 16,
						marginTop: 10,
						textAlign: "left",
						marginBottom: isNarrowWidth ? 4 : 0,
						width: cardOrientation === "row" ? isNarrowWidth ? `${calendarLenSize * 100}%` : calendarLenSize > 4 ? `${100 + (calendarLenSize - 4) % 4 * 25}%` : "auto" : "auto"
					},
					children: data ? data.calendarData.map((calendar, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCardInner, {
						calendar,
						firstDayOfWeekIdx: firstDayOfWeekIdx ?? "0",
						setMonthNameFormats,
						selectedMonthNameFormat,
						index,
						widgetId,
						isEditing,
						format
					}, index)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {})
				})
			})]
		})
	});
}
function CalendarCardInner({ calendar, firstDayOfWeekIdx, setMonthNameFormats, selectedMonthNameFormat, index, widgetId, isEditing, format }) {
	const { t } = useTranslation();
	const [monthNameVisible, setMonthNameVisible] = (0, import_react.useState)(true);
	const monthFormatSizeContainers = (0, import_react.useRef)(new Array(5));
	const monthNameContainerRef = (0, import_react.useRef)(null);
	const measureMonthFormats = (0, import_react.useCallback)(() => {
		return monthFormatSizeContainers.current.map((container) => ({
			width: container?.clientWidth ?? 0,
			format: container?.getAttribute("data-format") ?? ""
		}));
	}, []);
	const debouncedResizeCallback = (0, import_react.useMemo)(() => (0, import_debounce.default)(() => {
		const measurements = measureMonthFormats();
		const containerWidth = monthNameContainerRef.current?.clientWidth ?? 0;
		const suitableFormat = measurements.find((m) => containerWidth > m.width);
		if (suitableFormat) {
			if (monthNameContainerRef.current && containerWidth > suitableFormat.width) {
				setMonthNameFormats((prev) => {
					if (prev[index] === suitableFormat.format) return prev;
					const newArray = [...prev];
					newArray[index] = suitableFormat.format;
					return newArray;
				});
				setMonthNameVisible(true);
				return;
			}
		}
		if (monthNameContainerRef.current && monthNameContainerRef.current.scrollWidth > monthNameContainerRef.current.clientWidth) setMonthNameVisible(false);
		else setMonthNameVisible(true);
	}, 20), [
		measureMonthFormats,
		monthNameContainerRef,
		index,
		setMonthNameFormats
	]);
	const monthNameResizeRef = useResizeObserver(debouncedResizeCallback);
	(0, import_react.useEffect)(() => {
		const toCancel = debouncedResizeCallback;
		return () => {
			toCancel.cancel();
		};
	}, [debouncedResizeCallback]);
	const mergedRef = useMergedRefs(monthNameContainerRef, monthNameResizeRef);
	const navigate = useNavigate();
	const monthFormats = [
		{
			format: "MMMM yyyy",
			text: format$1(calendar.start, "MMMM yyyy")
		},
		{
			format: "MMM yyyy",
			text: format$1(calendar.start, "MMM yyyy")
		},
		{
			format: "MMM yy",
			text: format$1(calendar.start, "MMM yy")
		},
		{
			format: "MMM",
			text: format$1(calendar.start, "MMM")
		},
		{
			format: "",
			text: ""
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flex: 1,
			overflow: "visible"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					marginLeft: 5,
					marginRight: 5
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					ref: mergedRef,
					style: {
						color: theme.pageTextSubdued,
						fontWeight: "bold",
						flex: 1,
						overflow: "hidden",
						display: "block",
						width: "100%"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "bare",
						style: {
							visibility: monthNameVisible ? "visible" : "hidden",
							overflow: "visible",
							whiteSpace: "nowrap",
							display: "inline-block",
							width: "max-content",
							margin: 0,
							padding: 0,
							color: theme.pageTextSubdued,
							fontWeight: "bold",
							fontSize: "12px",
							marginBottom: 6
						},
						onPress: () => {
							navigate(`/reports/calendar/${widgetId}?month=${format$1(calendar.start, "yyyy-MM")}`);
						},
						children: selectedMonthNameFormat && format$1(calendar.start, selectedMonthNameFormat)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						justifyContent: "flex-end"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: {
							color: theme.reportsNumberPositive,
							flexDirection: "row",
							fontSize: "10px",
							marginRight: 10
						},
						"aria-label": t("Income"),
						children: calendar.totalIncome !== 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgArrowThickUp, {
							width: 16,
							height: 16,
							style: { flexShrink: 0 }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(calendar.totalIncome, "financial") }) })] }) : ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: {
							color: theme.reportsNumberNegative,
							flexDirection: "row",
							fontSize: "10px"
						},
						"aria-label": t("Expenses"),
						children: calendar.totalExpense !== 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgArrowThickDown, {
							width: 16,
							height: 16,
							style: { flexShrink: 0 }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(calendar.totalExpense, "financial") }) })] }) : ""
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarGraph, {
				data: calendar.data,
				start: calendar.start,
				firstDayOfWeekIdx,
				isEditing,
				onDayClick: (date) => {
					if (date) navigate(`/reports/calendar/${widgetId}?day=${format$1(date, "yyyy-MM-dd")}`);
					else navigate(`/reports/calendar/${widgetId}`);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					fontWeight: "bold",
					fontSize: "12px"
				},
				children: monthFormats.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					ref: (node) => {
						if (node) monthFormatSizeContainers.current[idx] = node;
					},
					style: {
						position: "fixed",
						top: -9999,
						left: -9999
					},
					"data-format": item.format,
					children: [item.text, item.text && ":"]
				}, item.format))
			})
		]
	});
}
//#endregion
//#region src/components/reports/reports/CashFlowCard.tsx
function CustomLabel({ value = 0, name, position = "left", x = 0, y = 0, width: barWidth = 0, height: barHeight = 0 }) {
	const format = useFormat();
	const valueLengthOffset = 20;
	const yOffset = barHeight < 25 ? 105 : y;
	const labelXOffsets = {
		right: 6,
		left: -valueLengthOffset + 1
	};
	const valueXOffsets = {
		right: 6,
		left: -valueLengthOffset + 2
	};
	const anchorValue = {
		right: "start",
		left: "end"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		x: x + barWidth + labelXOffsets[position],
		y: yOffset + 10,
		textAnchor: anchorValue[position],
		fill: theme.tableText,
		children: name
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
		as: "text",
		x: x + barWidth + valueXOffsets[position],
		y: yOffset + 26,
		textAnchor: anchorValue[position],
		fill: theme.tableText,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: format(value, "financial") })
	})] });
}
function CashFlowCard({ widgetId, isEditing, meta = {}, onMetaChange, onRemove, onCopy }) {
	const { t } = useTranslation();
	const animationProps = useRechartsAnimation();
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const [nameMenuOpen, setNameMenuOpen] = (0, import_react.useState)(false);
	const { menuItems: copyMenuItems, handleMenuSelect: handleCopyMenuSelect } = useDashboardWidgetCopyMenu(onCopy);
	(0, import_react.useEffect)(() => {
		async function fetchLatestTransaction() {
			const latestTrans = await send("get-latest-transaction");
			setLatestTransaction(latestTrans ? latestTrans.date : currentDay());
		}
		fetchLatestTransaction();
	}, []);
	const [start, end] = calculateTimeRange(meta?.timeFrame, defaultTimeFrame$1, latestTransaction);
	const data = useReport$1("cash_flow_simple", (0, import_react.useMemo)(() => simpleCashFlow(start, end, meta?.conditions, meta?.conditionsOp), [
		start,
		end,
		meta?.conditions,
		meta?.conditionsOp
	]));
	const [isCardHovered, setIsCardHovered] = (0, import_react.useState)(false);
	const onCardHover = (0, import_react.useCallback)(() => setIsCardHovered(true), []);
	const onCardHoverEnd = (0, import_react.useCallback)(() => setIsCardHovered(false), []);
	const { graphData } = data || {};
	const expenses = -(graphData?.expense || 0);
	const income = graphData?.income || 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, {
		isEditing,
		disableClick: nameMenuOpen,
		to: `/reports/cash-flow/${widgetId}`,
		menuItems: [
			{
				name: "rename",
				text: t("Rename")
			},
			{
				name: "remove",
				text: t("Remove")
			},
			...copyMenuItems
		],
		onMenuSelect: (item) => {
			if (handleCopyMenuSelect(item)) return;
			switch (item) {
				case "rename":
					setNameMenuOpen(true);
					break;
				case "remove":
					onRemove();
					break;
				default: throw new Error(`Unrecognized selection: ${item}`);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: { flex: 1 },
			onPointerEnter: onCardHover,
			onPointerLeave: onCardHoverEnd,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					padding: 20
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { flex: 1 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCardName, {
						name: meta?.name || t("Cash Flow"),
						isEditing: nameMenuOpen,
						onChange: (newName) => {
							onMetaChange({
								...meta,
								name: newName
							});
							setNameMenuOpen(false);
						},
						onClose: () => setNameMenuOpen(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRange, {
						start,
						end
					})]
				}), data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: { textAlign: "right" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, {
						activationFilters: [!isCardHovered],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Change, { amount: income - expenses })
					})
				})]
			}), data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				style: {
					height: "auto",
					flex: 1
				},
				children: (width, height) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					responsive: true,
					width,
					height,
					data: [{
						income,
						expenses
					}],
					margin: {
						top: 10,
						bottom: 0
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "income",
						fill: theme.reportsNumberPositive,
						barSize: 14,
						...animationProps,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
							dataKey: "income",
							position: "left",
							content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomLabel, { name: t("Income") })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "expenses",
						fill: theme.reportsNumberNegative,
						barSize: 14,
						...animationProps,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
							dataKey: "expenses",
							position: "right",
							content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomLabel, { name: t("Expenses") })
						})
					})]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {})]
		})
	});
}
//#endregion
//#region src/components/reports/reports/CrossoverCard.tsx
function CrossoverCard({ widgetId, isEditing, accounts, meta = {}, onMetaChange, onRemove, onCopy }) {
	const locale = useLocale();
	const { t } = useTranslation();
	const { isNarrowWidth } = useResponsive();
	const [nameMenuOpen, setNameMenuOpen] = (0, import_react.useState)(false);
	const { menuItems: copyMenuItems, handleMenuSelect: handleCopyMenuSelect } = useDashboardWidgetCopyMenu(onCopy);
	const [start, setStart] = (0, import_react.useState)("");
	const [end, setEnd] = (0, import_react.useState)("");
	const format$2 = useFormat();
	(0, import_react.useEffect)(() => {
		let isMounted = true;
		async function calculateDateRange() {
			const previousMonth = subMonths(currentMonth(), 1);
			const earliestTransactionData = await send("get-earliest-transaction");
			if (!isMounted) return;
			const allMonths = rangeInclusive(earliestTransactionData ? earliestTransactionData.date : firstDayOfMonth(previousMonth), lastDayOfMonth(previousMonth)).map((month) => ({
				name: month,
				pretty: format(month, "MMMM yyyy", locale)
			})).reverse();
			const [initialStart, initialEnd, mode] = calculateTimeRange(meta?.timeFrame, void 0, previousMonth);
			const earliestMonth = allMonths[allMonths.length - 1].name;
			const latestMonth = allMonths[0].name;
			let start = initialStart;
			let end = initialEnd;
			const clampMonth = (m) => {
				if (isBefore(m, earliestMonth)) return earliestMonth;
				if (isAfter(m, latestMonth)) return latestMonth;
				return m;
			};
			if (mode === "sliding-window") {
				start = clampMonth(subMonths(start, 1));
				end = clampMonth(subMonths(end, 1));
			} else if (mode === "full") {
				start = earliestMonth;
				end = latestMonth;
			} else {
				start = clampMonth(start);
				end = clampMonth(end);
			}
			if (isBefore(end, start)) end = start;
			if (isMounted) {
				setStart(start);
				setEnd(end);
			}
		}
		calculateDateRange();
		return () => {
			isMounted = false;
		};
	}, [meta?.timeFrame, locale]);
	const [isCardHovered, setIsCardHovered] = (0, import_react.useState)(false);
	const onCardHover = (0, import_react.useCallback)(() => setIsCardHovered(true), []);
	const onCardHoverEnd = (0, import_react.useCallback)(() => setIsCardHovered(false), []);
	const expenseCategoryIds = (0, import_react.useMemo)(() => meta?.expenseCategoryIds ?? [], [meta?.expenseCategoryIds]);
	const incomeAccountIds = (0, import_react.useMemo)(() => meta?.incomeAccountIds ?? accounts.map((a) => a.id), [meta?.incomeAccountIds, accounts]);
	const swr = meta?.safeWithdrawalRate ?? .04;
	const estimatedReturn = meta?.estimatedReturn ?? null;
	const expectedContribution = meta?.expectedContribution ?? null;
	const projectionType = meta?.projectionType ?? "hampel";
	const expenseAdjustmentFactor = meta?.expenseAdjustmentFactor ?? 1;
	const data = useReport$1("crossover", (0, import_react.useMemo)(() => createCrossoverSpreadsheet({
		start,
		end,
		expenseCategoryIds,
		incomeAccountIds,
		safeWithdrawalRate: swr,
		estimatedReturn,
		expectedContribution,
		projectionType,
		expenseAdjustmentFactor
	}), [
		start,
		end,
		expenseCategoryIds,
		incomeAccountIds,
		swr,
		estimatedReturn,
		expectedContribution,
		projectionType,
		expenseAdjustmentFactor
	]));
	const yearsToRetire = data?.yearsToRetire ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, {
		isEditing,
		disableClick: nameMenuOpen,
		to: `/reports/crossover/${widgetId}`,
		menuItems: [
			{
				name: "rename",
				text: t("Rename")
			},
			{
				name: "remove",
				text: t("Remove")
			},
			...copyMenuItems
		],
		onMenuSelect: (item) => {
			if (handleCopyMenuSelect(item)) return;
			switch (item) {
				case "rename":
					setNameMenuOpen(true);
					break;
				case "remove":
					onRemove();
					break;
				default: throw new Error(`Unrecognized selection: ${item}`);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: { flex: 1 },
			onPointerEnter: onCardHover,
			onPointerLeave: onCardHoverEnd,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					padding: 20
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: { flex: 1 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCardName, {
						name: meta?.name || t("Crossover Point"),
						isEditing: nameMenuOpen,
						onChange: (newName) => {
							onMetaChange({
								...meta,
								name: newName
							});
							setNameMenuOpen(false);
						},
						onClose: () => setNameMenuOpen(false)
					})
				}), data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						textAlign: "right",
						whiteSpace: "nowrap"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						style: {
							...styles.mediumText,
							fontWeight: 500,
							marginBottom: 5
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, {
							activationFilters: [!isCardHovered],
							children: yearsToRetire != null ? t("{{years}} years", { years: format$2(yearsToRetire, "number") }) : t("N/A")
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						style: {
							fontSize: 12,
							color: theme.pageTextSubdued
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Years to Retire" })
					})]
				})]
			}), data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossoverGraph, {
				graphData: data.graphData,
				compact: true,
				showTooltip: !isEditing && !isNarrowWidth,
				style: {
					height: "auto",
					flex: 1
				}
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {})]
		})
	});
}
//#endregion
//#region src/components/reports/reports/GetCardData.tsx
function ErrorFallback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		style: {
			...styles.mediumText,
			color: theme.errorText
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "There was a problem loading your report" })
	})] });
}
function convertFromDate(interval) {
	switch (interval) {
		case "Monthly": return "monthFromDate";
		case "Yearly": return "yearFromDate";
		default: return "dayFromDate";
	}
}
function convertRangeInclusive(interval) {
	switch (interval) {
		case "Monthly": return "rangeInclusive";
		case "Yearly": return "yearRangeInclusive";
		default: return "dayRangeInclusive";
	}
}
function GetCardData({ report, payees, accounts, categories, earliestTransaction, latestTransaction, firstDayOfWeekIdx, showTooltip }) {
	const { isNarrowWidth } = useResponsive();
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	let startDate = report.startDate;
	let endDate = report.endDate;
	if (!report.isDateStatic) {
		const [dateStart, dateEnd] = getLiveRange(report.dateRange, earliestTransaction, latestTransaction, report.includeCurrentInterval, firstDayOfWeekIdx);
		startDate = dateStart || report.startDate;
		endDate = dateEnd || report.startDate;
	}
	const fromDate = convertFromDate(report.interval);
	const rangeInclusive = convertRangeInclusive(report.interval);
	let intervalDateStart;
	let intervalDateEnd;
	let intervals;
	if (report.interval === "Weekly") {
		intervalDateStart = weekFromDate(startDate, firstDayOfWeekIdx);
		intervalDateEnd = weekFromDate(endDate, firstDayOfWeekIdx);
		intervals = weekRangeInclusive(intervalDateStart, intervalDateEnd, firstDayOfWeekIdx);
	} else {
		intervalDateStart = months_exports[fromDate](startDate);
		intervalDateEnd = months_exports[fromDate](endDate);
		intervals = months_exports[rangeInclusive](intervalDateStart, intervalDateEnd);
	}
	const getGroupData = (0, import_react.useMemo)(() => {
		return createGroupedSpreadsheet({
			startDate,
			endDate,
			interval: report.interval,
			categories,
			budgetType,
			conditions: report.conditions ?? [],
			conditionsOp: report.conditionsOp,
			showEmpty: report.showEmpty,
			showOffBudget: report.showOffBudget,
			showHiddenCategories: report.showHiddenCategories,
			showUncategorized: report.showUncategorized,
			trimIntervals: report.trimIntervals,
			balanceTypeOp: ReportOptions.balanceTypeMap.get(report.balanceType),
			firstDayOfWeekIdx,
			sortByOp: report.sortBy
		});
	}, [
		report,
		categories,
		startDate,
		endDate,
		firstDayOfWeekIdx,
		budgetType
	]);
	const getGraphData = (0, import_react.useMemo)(() => {
		return createCustomSpreadsheet({
			startDate,
			endDate,
			interval: report.interval,
			categories,
			budgetType,
			conditions: report.conditions ?? [],
			conditionsOp: report.conditionsOp,
			showEmpty: report.showEmpty,
			showOffBudget: report.showOffBudget,
			showHiddenCategories: report.showHiddenCategories,
			showUncategorized: report.showUncategorized,
			trimIntervals: report.trimIntervals,
			groupBy: report.groupBy,
			balanceTypeOp: ReportOptions.balanceTypeMap.get(report.balanceType),
			payees,
			accounts,
			graphType: report.graphType,
			firstDayOfWeekIdx,
			sortByOp: report.sortBy
		});
	}, [
		report,
		categories,
		payees,
		accounts,
		startDate,
		endDate,
		firstDayOfWeekIdx,
		budgetType
	]);
	const graphData = useReport$1("default" + report.name, getGraphData);
	const groupedData = useReport$1("grouped" + report.name, getGroupData);
	const data = graphData && groupedData ? {
		...graphData,
		groupedData
	} : graphData;
	return data?.data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, {
		FallbackComponent: ErrorFallback,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChooseGraph, {
			data,
			mode: report.mode,
			graphType: report.graphType,
			balanceType: report.balanceType,
			groupBy: report.groupBy,
			interval: report.interval,
			compact: true,
			style: {
				height: "auto",
				flex: 1
			},
			intervalsCount: intervals.length,
			showTooltip: !isNarrowWidth && showTooltip
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {});
}
//#endregion
//#region src/components/reports/reports/MissingReportCard.tsx
function MissingReportCard({ isEditing, onRemove, children }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, {
		isEditing,
		menuItems: [{
			name: "remove",
			text: t("Remove")
		}],
		onMenuSelect: (item) => {
			switch (item) {
				case "remove":
					onRemove();
					break;
				default: throw new Error(`Unrecognized menu option: ${item}`);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				padding: 10
			},
			children
		})
	});
}
//#endregion
//#region src/components/reports/reports/CustomReportListCards.tsx
function CustomReportListCards({ isEditing, report, onRemove, onCopy }) {
	if (!report) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingReportCard, {
		isEditing,
		onRemove,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "This custom report has been deleted." })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomReportListCardsInner, {
		isEditing,
		report,
		onRemove,
		onCopy
	});
}
function CustomReportListCardsInner({ isEditing, report, onRemove, onCopy }) {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [nameMenuOpen, setNameMenuOpen] = (0, import_react.useState)(false);
	const [earliestTransaction, setEarliestTransaction] = (0, import_react.useState)("");
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const { menuItems: copyMenuItems, handleMenuSelect: handleCopyMenuSelect } = useDashboardWidgetCopyMenu(onCopy);
	const { data: payees = [] } = usePayees();
	const { data: accounts = [] } = useAccounts();
	const { data: categories = {
		list: [],
		grouped: []
	} } = useCategories();
	const hasWarning = calculateHasWarning(report.conditions ?? [], {
		categories: categories.list,
		payees,
		accounts
	});
	const [_firstDayOfWeekIdx] = useSyncedPref("firstDayOfWeekIdx");
	const firstDayOfWeekIdx = _firstDayOfWeekIdx || "0";
	(0, import_react.useEffect)(() => {
		async function run() {
			const earliestTrans = await send("get-earliest-transaction");
			const latestTrans = await send("get-latest-transaction");
			setEarliestTransaction(earliestTrans ? earliestTrans.date : currentDay());
			setLatestTransaction(latestTrans ? latestTrans.date : currentDay());
		}
		run();
	}, []);
	const updateReportMutation = useUpdateReportMutation();
	const onSaveName = async (name) => {
		const updatedReport = {
			...report,
			name
		};
		updateReportMutation.mutate({ report: updatedReport }, {
			onSuccess: () => {
				setNameMenuOpen(false);
			},
			onError: (error) => {
				dispatch(addNotification({ notification: {
					type: "error",
					message: t("Failed saving report name: {{error}}", { error: error.message })
				} }));
				setNameMenuOpen(true);
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ReportCard, {
		isEditing,
		disableClick: nameMenuOpen,
		to: `/reports/custom/${report.id}`,
		menuItems: [
			{
				name: "rename",
				text: t("Rename")
			},
			{
				name: "remove",
				text: t("Remove")
			},
			...copyMenuItems
		],
		onMenuSelect: (item) => {
			if (handleCopyMenuSelect(item)) return;
			switch (item) {
				case "remove":
					onRemove();
					break;
				case "rename":
					setNameMenuOpen(true);
					break;
				default: throw new Error(`Unrecognized menu option: ${item}`);
			}
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				flex: 1,
				padding: 10
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					flexShrink: 0,
					paddingBottom: 5
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { flex: 1 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCardName, {
						name: report.name,
						isEditing: nameMenuOpen,
						onChange: onSaveName,
						onClose: () => setNameMenuOpen(false)
					}), report.isDateStatic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRange, {
						start: report.startDate,
						end: report.endDate
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: { color: theme.pageTextSubdued },
						children: t(report.dateRange)
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GetCardData, {
				report,
				payees,
				accounts,
				categories,
				earliestTransaction,
				latestTransaction,
				firstDayOfWeekIdx,
				showTooltip: !isEditing
			})]
		}), hasWarning && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				padding: 5,
				position: "absolute",
				bottom: 0
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
				content: t("The widget is configured to use a non-existing filter value (i.e. category/account/payee). Edit the filters used in this report widget to remove the warning."),
				placement: "bottom start",
				style: {
					...styles.tooltip,
					maxWidth: 300
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgExclamationSolid, {
					width: 20,
					height: 20,
					style: { color: theme.warningText }
				})
			})
		})]
	});
}
//#endregion
//#region src/components/reports/reports/FormulaCard.tsx
function FormulaCard({ widgetId, isEditing, meta = {}, onMetaChange, onRemove, onCopy }) {
	const { t } = useTranslation();
	const [nameMenuOpen, setNameMenuOpen] = (0, import_react.useState)(false);
	const { menuItems: copyMenuItems, handleMenuSelect: handleCopyMenuSelect } = useDashboardWidgetCopyMenu(onCopy);
	const themeColors = useThemeColors();
	const containerRef = (0, import_react.useRef)(null);
	const formula = meta?.formula || "=SUM(1, 2, 3)";
	const fontSize = meta?.fontSize;
	const fontSizeMode = meta?.fontSizeMode || "dynamic";
	const staticFontSize = meta?.staticFontSize || 32;
	const colorFormula = meta?.colorFormula || "";
	const { result, isLoading, error } = useFormulaExecution(formula, meta?.queries || {}, meta?.queriesVersion);
	const colorVariables = (0, import_react.useMemo)(() => ({
		RESULT: result ?? 0,
		...Object.entries(themeColors).reduce((acc, [key, value]) => {
			acc[`theme_${key}`] = value;
			return acc;
		}, {})
	}), [result, themeColors]);
	const { result: colorResult, error: colorError } = useFormulaExecution(colorFormula, meta?.queries || {}, meta?.queriesVersion, colorVariables);
	const customColor = colorFormula && !colorError && colorResult ? String(colorResult) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, {
		isEditing,
		disableClick: nameMenuOpen,
		to: `/reports/formula/${widgetId}`,
		menuItems: [
			{
				name: "rename",
				text: t("Rename")
			},
			{
				name: "remove",
				text: t("Remove")
			},
			...copyMenuItems
		],
		onMenuSelect: (item) => {
			if (handleCopyMenuSelect(item)) return;
			switch (item) {
				case "rename":
					setNameMenuOpen(true);
					break;
				case "remove":
					onRemove();
					break;
				default: break;
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				flex: 1,
				overflow: "hidden"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					flexGrow: 0,
					flexShrink: 0,
					padding: 20
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCardName, {
					name: meta?.name || t("Formula"),
					isEditing: nameMenuOpen,
					onChange: (newName) => {
						onMetaChange({
							...meta,
							name: newName
						});
						setNameMenuOpen(false);
					},
					onClose: () => setNameMenuOpen(false)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				ref: containerRef,
				style: {
					justifyContent: "center",
					alignItems: "center",
					flexGrow: 1,
					flexShrink: 1
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaResult, {
					value: result,
					error,
					loading: isLoading,
					initialFontSize: fontSize,
					fontSizeChanged: (newSize) => {
						onMetaChange({
							...meta,
							fontSize: newSize
						});
					},
					fontSizeMode,
					staticFontSize,
					customColor,
					animate: isEditing ?? false,
					containerRef
				})
			})]
		})
	});
}
//#endregion
//#region src/components/reports/reports/MarkdownCard.tsx
var remarkPlugins = [
	sequentialNewlinesPlugin,
	remarkGfm,
	remarkBreaks
];
var markdownStyles = css(markdownBaseStyles, {
	paddingRight: 20,
	"& table": {
		display: "inline-table",
		":not(:last-child)": { marginBottom: "0.75rem" }
	}
});
function MarkdownCard({ isEditing, meta, onMetaChange, onRemove, onCopy }) {
	const { t } = useTranslation();
	const [isVisibleTextArea, setIsVisibleTextArea] = (0, import_react.useState)(false);
	const { menuItems: copyMenuItems, handleMenuSelect: handleCopyMenuSelect } = useDashboardWidgetCopyMenu(onCopy);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, {
		isEditing,
		disableClick: isVisibleTextArea,
		menuItems: [
			{
				type: Menu.label,
				name: t("Text position:"),
				text: ""
			},
			{
				name: "text-left",
				text: t("Left")
			},
			{
				name: "text-center",
				text: t("Center")
			},
			{
				name: "text-right",
				text: t("Right")
			},
			Menu.line,
			{
				name: "edit",
				text: t("Edit content")
			},
			{
				name: "remove",
				text: t("Remove")
			},
			...copyMenuItems
		],
		onMenuSelect: (item) => {
			if (handleCopyMenuSelect(item)) return;
			switch (item) {
				case "text-left":
					onMetaChange({
						...meta,
						text_align: "left"
					});
					break;
				case "text-center":
					onMetaChange({
						...meta,
						text_align: "center"
					});
					break;
				case "text-right":
					onMetaChange({
						...meta,
						text_align: "right"
					});
					break;
				case "edit":
					setIsVisibleTextArea(true);
					break;
				case "remove":
					onRemove();
					break;
				default: throw new Error(`Unrecognized selection: ${item}`);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flex: 1,
				paddingTop: 5,
				paddingLeft: 20,
				overflowY: "auto",
				height: "100%",
				textAlign: meta.text_align
			},
			children: isVisibleTextArea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)($216918bed6669f72$export$f5c9f3c2c4054eec, {
				style: {
					height: "100%",
					border: 0,
					marginTop: 11,
					marginBottom: 11,
					marginRight: 20,
					color: theme.formInputText,
					backgroundColor: theme.tableBackground
				},
				className: NON_DRAGGABLE_AREA_CLASS_NAME,
				autoFocus: true,
				defaultValue: meta.content,
				onBlur: (event) => {
					onMetaChange({
						...meta,
						content: event.currentTarget.value
					});
					setIsVisibleTextArea(false);
				}
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				className: markdownStyles,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, {
					remarkPlugins,
					rehypePlugins: [[rehypeExternalLinks, {
						target: "_blank",
						rel: ["noopener", "noreferrer"]
					}]],
					children: meta.content
				})
			})
		})
	});
}
//#endregion
//#region src/components/reports/reports/NetWorthCard.tsx
function NetWorthCard({ widgetId, isEditing, accounts, meta = {}, onMetaChange, onRemove, onCopy }) {
	const locale = useLocale();
	const { t } = useTranslation();
	const { isNarrowWidth } = useResponsive();
	const [_firstDayOfWeekIdx] = useSyncedPref("firstDayOfWeekIdx");
	const firstDayOfWeekIdx = _firstDayOfWeekIdx || "0";
	const format = useFormat();
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const [nameMenuOpen, setNameMenuOpen] = (0, import_react.useState)(false);
	const [isCardHovered, setIsCardHovered] = (0, import_react.useState)(false);
	const { menuItems: copyMenuItems, handleMenuSelect: handleCopyMenuSelect } = useDashboardWidgetCopyMenu(onCopy);
	(0, import_react.useEffect)(() => {
		async function fetchLatestTransaction() {
			const latestTrans = await send("get-latest-transaction");
			setLatestTransaction(latestTrans ? latestTrans.date : currentDay());
		}
		fetchLatestTransaction();
	}, []);
	const [start, end] = calculateTimeRange(meta?.timeFrame, void 0, latestTransaction);
	const onCardHover = (0, import_react.useCallback)(() => setIsCardHovered(true), []);
	const onCardHoverEnd = (0, import_react.useCallback)(() => setIsCardHovered(false), []);
	const data = useReport$1("net_worth", (0, import_react.useMemo)(() => createSpreadsheet$1(start, end, accounts, meta?.conditions, meta?.conditionsOp, locale, meta?.interval || "Monthly", firstDayOfWeekIdx, format), [
		start,
		end,
		accounts,
		meta?.conditions,
		meta?.conditionsOp,
		locale,
		meta?.interval,
		firstDayOfWeekIdx,
		format
	]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, {
		isEditing,
		disableClick: nameMenuOpen,
		to: `/reports/net-worth/${widgetId}`,
		menuItems: [
			{
				name: "rename",
				text: t("Rename")
			},
			{
				name: "remove",
				text: t("Remove")
			},
			...copyMenuItems
		],
		onMenuSelect: (item) => {
			if (handleCopyMenuSelect(item)) return;
			switch (item) {
				case "rename":
					setNameMenuOpen(true);
					break;
				case "remove":
					onRemove();
					break;
				default: throw new Error(`Unrecognized selection: ${item}`);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: { flex: 1 },
			onPointerEnter: onCardHover,
			onPointerLeave: onCardHoverEnd,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					padding: 20
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { flex: 1 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCardName, {
						name: meta?.name || t("Net Worth"),
						isEditing: nameMenuOpen,
						onChange: (newName) => {
							onMetaChange({
								...meta,
								name: newName
							});
							setNameMenuOpen(false);
						},
						onClose: () => setNameMenuOpen(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRange, {
						start,
						end
					})]
				}), data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { textAlign: "right" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						style: {
							...styles.mediumText,
							fontWeight: 500,
							marginBottom: 5
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, {
							activationFilters: [!isCardHovered],
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: format(data.netWorth, "financial") })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, {
						activationFilters: [!isCardHovered],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Change, { amount: data.totalChange })
					})]
				})]
			}), data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetWorthGraph, {
				graphData: data.graphData,
				accounts: data.accounts,
				compact: true,
				showTooltip: !isEditing && !isNarrowWidth,
				interval: meta?.interval || "Monthly",
				mode: meta?.mode || "trend",
				style: {
					height: "auto",
					flex: 1
				}
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {})]
		})
	});
}
//#endregion
//#region src/components/reports/reports/SankeyCard.tsx
function SankeyCard({ widgetId, isEditing, meta, onMetaChange, onRemove, onCopy }) {
	const { t } = useTranslation();
	const locale = useLocale();
	const [nameMenuOpen, setNameMenuOpen] = (0, import_react.useState)(false);
	const { menuItems: copyMenuItems, handleMenuSelect: handleCopyMenuSelect } = useDashboardWidgetCopyMenu(onCopy);
	const { data: { grouped: groupedCategories = [] } = { grouped: [] } } = useCategories();
	const [start, end] = calculateTimeRange(meta?.timeFrame);
	const mode = meta?.mode ?? "spent";
	const [cardHeight, setCardHeight] = (0, import_react.useState)(0);
	const containerRef = useResizeObserver((rect) => {
		setCardHeight(rect.height);
	});
	const data = useReport$1("sankey", (0, import_react.useMemo)(() => createSpreadsheet(start, end, groupedCategories, meta?.conditions ?? [], meta?.conditionsOp ?? "and", mode), [
		start,
		end,
		groupedCategories,
		meta?.conditions,
		meta?.conditionsOp,
		mode
	]));
	const topN = Math.max(2, Math.floor((cardHeight - 82) / 50));
	const compactData = (0, import_react.useMemo)(() => data ? compactSankeyData(data, topN) : null, [data, topN]);
	const startDate = parseISO(start);
	const endDate = parseISO(end);
	const formattedStartDate = format$1(startDate, "MMM yyyy", { locale });
	const formattedEndDate = format$1(endDate, "MMM yyyy", { locale });
	let dateDescription;
	if (startDate.getFullYear() !== endDate.getFullYear() || startDate.getMonth() !== endDate.getMonth()) dateDescription = formattedStartDate + " - " + formattedEndDate;
	else dateDescription = formattedEndDate;
	const modeLabel = mode === "budgeted" ? t("Budgeted") : t("Spent");
	dateDescription += ` (${modeLabel})`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, {
		isEditing,
		disableClick: nameMenuOpen,
		to: `/reports/sankey/${widgetId}`,
		menuItems: [
			{
				name: "rename",
				text: t("Rename")
			},
			{
				name: "remove",
				text: t("Remove")
			},
			...copyMenuItems
		],
		onMenuSelect: (item) => {
			if (handleCopyMenuSelect(item)) return;
			switch (item) {
				case "rename":
					setNameMenuOpen(true);
					break;
				case "remove":
					onRemove();
					break;
				default: throw new Error(`Unrecognized selection: ${item}`);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			ref: containerRef,
			style: { flex: 1 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					flexDirection: "row",
					padding: 20
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { flex: 1 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCardName, {
						name: meta?.name || t("Sankey"),
						isEditing: nameMenuOpen,
						onChange: (newName) => {
							onMetaChange({
								...meta,
								name: newName
							});
							setNameMenuOpen(false);
						},
						onClose: () => setNameMenuOpen(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						style: { color: theme.pageTextSubdued },
						children: dateDescription
					})]
				})
			}), compactData ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SankeyGraph, {
				data: meta?.showPercentages ? withPercentageLabels(compactData) : compactData,
				showPercentages: meta?.showPercentages,
				showTooltip: !isEditing,
				style: {
					height: "auto",
					flex: 1
				}
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {})]
		})
	});
}
//#endregion
//#region src/components/reports/reports/SpendingCard.tsx
function SpendingCard({ widgetId, isEditing, meta = {}, onMetaChange, onRemove, onCopy }) {
	const { t } = useTranslation();
	const format = useFormat();
	const [budgetTypePref] = useSyncedPref("budgetType");
	const budgetType = budgetTypePref === "tracking" ? "tracking" : "envelope";
	const [isCardHovered, setIsCardHovered] = (0, import_react.useState)(false);
	const [nameMenuOpen, setNameMenuOpen] = (0, import_react.useState)(false);
	const { menuItems: copyMenuItems, handleMenuSelect: handleCopyMenuSelect } = useDashboardWidgetCopyMenu(onCopy);
	const spendingReportMode = meta?.mode ?? "single-month";
	const [compare, compareTo] = calculateSpendingReportTimeRange(meta ?? {});
	const selection = spendingReportMode === "single-month" ? "compareTo" : spendingReportMode;
	const data = useReport$1("default", (0, import_react.useMemo)(() => {
		return createSpendingSpreadsheet({
			conditions: meta?.conditions,
			conditionsOp: meta?.conditionsOp,
			compare,
			compareTo,
			budgetType
		});
	}, [
		meta?.conditions,
		meta?.conditionsOp,
		compare,
		compareTo,
		budgetType
	]));
	const todayDay = compare !== currentMonth() ? 27 : getDay$1(currentDay()) - 1 >= 28 ? 27 : getDay$1(currentDay()) - 1;
	const difference = data && Math.round(data.intervalData[todayDay][selection] - data.intervalData[todayDay].compare);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, {
		isEditing,
		disableClick: nameMenuOpen,
		to: `/reports/spending/${widgetId}`,
		menuItems: [
			{
				name: "rename",
				text: t("Rename")
			},
			{
				name: "remove",
				text: t("Remove")
			},
			...copyMenuItems
		],
		onMenuSelect: (item) => {
			if (handleCopyMenuSelect(item)) return;
			switch (item) {
				case "rename":
					setNameMenuOpen(true);
					break;
				case "remove":
					onRemove();
					break;
				default: throw new Error(`Unrecognized selection: ${item}`);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: { flex: 1 },
			onPointerEnter: () => setIsCardHovered(true),
			onPointerLeave: () => setIsCardHovered(false),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					padding: 20
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { flex: 1 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCardName, {
						name: meta?.name || t("Monthly Spending"),
						isEditing: nameMenuOpen,
						onChange: (newName) => {
							onMetaChange({
								...meta,
								name: newName
							});
							setNameMenuOpen(false);
						},
						onClose: () => setNameMenuOpen(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRange, {
						start: compare,
						end: compareTo,
						type: spendingReportMode
					})]
				}), data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: { textAlign: "right" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						style: {
							...styles.mediumText,
							fontWeight: 500,
							marginBottom: 5,
							color: difference === 0 || difference == null ? theme.reportsNumberNeutral : difference > 0 ? theme.reportsNumberNegative : theme.reportsNumberPositive
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, {
							activationFilters: [!isCardHovered],
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: data && (difference && difference > 0 ? "+" : "") + format(difference || 0, "financial") })
						})
					})
				})]
			}), data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpendingGraph, {
				style: { flex: 1 },
				compact: true,
				data,
				mode: spendingReportMode,
				compare,
				compareTo
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {})]
		})
	});
}
//#endregion
//#region src/components/reports/SummaryNumber.tsx
var FONT_SIZE_SCALE_FACTOR = 1.6;
var CONTAINER_MARGIN = 8;
function SummaryNumber({ value, contentType, animate = false, suffix = "", loading = true, initialFontSize = 14, fontSizeChanged }) {
	const { t } = useTranslation();
	const [fontSize, setFontSize] = (0, import_react.useState)(initialFontSize);
	const [hasSized, setHasSized] = (0, import_react.useState)(false);
	const refDiv = (0, import_react.useRef)(null);
	const format = useFormat();
	const isNumericValue = Number.isFinite(value);
	let displayAmount = contentType === "percentage" ? format(Math.abs(value), "number") : format(Math.abs(Math.round(value)), "financial");
	displayAmount += suffix;
	const mergedRef = useMergedRefs(useResizeObserver((0, import_debounce.default)(() => {
		if (!refDiv.current) return;
		const { clientWidth, clientHeight } = refDiv.current;
		const width = clientWidth;
		const height = clientHeight - CONTAINER_MARGIN * 2;
		const calculatedFontSize = Math.min(width * FONT_SIZE_SCALE_FACTOR / displayAmount.toString().length, height);
		if (calculatedFontSize > 0) {
			setFontSize(calculatedFontSize);
			setHasSized(true);
		}
		if (calculatedFontSize !== initialFontSize && fontSizeChanged) fontSizeChanged(calculatedFontSize);
	}, 100)), refDiv);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {}), !loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		ref: mergedRef,
		"aria-label": !isNumericValue ? t("Unknown amount") : value === 0 ? t("Zero amount") : value < 0 ? t("Negative amount: {{amount}}", { amount: displayAmount }) : t("Positive amount: {{amount}}", { amount: displayAmount }),
		style: {
			alignItems: "center",
			flexGrow: 1,
			flexShrink: 1,
			width: "100%",
			height: "100%",
			maxWidth: "100%",
			fontSize,
			lineHeight: 1,
			margin: `${CONTAINER_MARGIN}px 0`,
			justifyContent: "center",
			transition: animate ? "font-size 0.3s ease" : "",
			color: !isNumericValue ? theme.reportsNumberNeutral : value === 0 ? theme.reportsNumberNeutral : value < 0 ? theme.reportsNumberNegative : theme.reportsNumberPositive
		},
		children: !hasSized ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, {
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: displayAmount })
		})
	})] });
}
//#endregion
//#region src/components/reports/reports/SummaryCard.tsx
function SummaryCard({ widgetId, isEditing, meta = {}, onMetaChange, onRemove, onCopy }) {
	const locale = useLocale();
	const { t } = useTranslation();
	const [latestTransaction, setLatestTransaction] = (0, import_react.useState)("");
	const [nameMenuOpen, setNameMenuOpen] = (0, import_react.useState)(false);
	const { menuItems: copyMenuItems, handleMenuSelect: handleCopyMenuSelect } = useDashboardWidgetCopyMenu(onCopy);
	(0, import_react.useEffect)(() => {
		async function fetchLatestTransaction() {
			const latestTrans = await send("get-latest-transaction");
			setLatestTransaction(latestTrans ? latestTrans.date : currentDay());
		}
		fetchLatestTransaction();
	}, []);
	const [start, end] = calculateTimeRange(meta?.timeFrame, {
		start: dayFromDate(currentMonth()),
		end: currentDay(),
		mode: "full"
	}, latestTransaction);
	const content = (0, import_react.useMemo)(() => meta?.content ? (() => {
		try {
			return JSON.parse(meta.content);
		} catch (error) {
			console.error("Failed to parse meta.content:", error);
			return { type: "sum" };
		}
	})() : { type: "sum" }, [meta]);
	const data = useReport$1("summary", (0, import_react.useMemo)(() => summarySpreadsheet(start, end, meta?.conditions, meta?.conditionsOp, content, locale), [
		start,
		end,
		meta?.conditions,
		meta?.conditionsOp,
		content,
		locale
	]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCard, {
		isEditing,
		disableClick: nameMenuOpen,
		to: `/reports/summary/${widgetId}`,
		menuItems: [
			{
				name: "rename",
				text: t("Rename")
			},
			{
				name: "remove",
				text: t("Remove")
			},
			...copyMenuItems
		],
		onMenuSelect: (item) => {
			if (handleCopyMenuSelect(item)) return;
			switch (item) {
				case "rename":
					setNameMenuOpen(true);
					break;
				case "remove":
					onRemove();
					break;
				default: throw new Error(`Unrecognized menu selection: ${item}`);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				flex: 1,
				overflow: "hidden"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexGrow: 0,
					flexShrink: 0,
					padding: 20
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportCardName, {
					name: meta?.name || t("Summary"),
					isEditing: nameMenuOpen,
					onChange: (newName) => {
						onMetaChange({
							...meta,
							content: JSON.stringify(content),
							name: newName
						});
						setNameMenuOpen(false);
					},
					onClose: () => setNameMenuOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateRange, {
					start,
					end
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					justifyContent: "center",
					alignItems: "center",
					flexGrow: 1,
					flexShrink: 1
				},
				children: data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryNumber, {
					value: data?.total ?? 0,
					contentType: content.type,
					suffix: content.type === "percentage" ? "%" : "",
					loading: !data,
					initialFontSize: content.fontSize,
					animate: isEditing ?? false
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, {})
			})]
		})
	});
}
//#endregion
//#region src/components/reports/Overview.tsx
function isCustomReportWidget(widget) {
	return widget.type === "custom-report";
}
function Overview({ dashboard }) {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [_firstDayOfWeekIdx] = useSyncedPref("firstDayOfWeekIdx");
	const firstDayOfWeekIdx = _firstDayOfWeekIdx || "0";
	const crossoverReportEnabled = useFeatureFlag("crossoverReport");
	const ageOfMoneyReportEnabled = useFeatureFlag("ageOfMoneyReport");
	const budgetAnalysisReportEnabled = useFeatureFlag("budgetAnalysisReport");
	const formulaMode = useFeatureFlag("formulaMode");
	const [isImporting, setIsImporting] = (0, import_react.useState)(false);
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const { isNarrowWidth } = useResponsive();
	const currentBreakpoint = isNarrowWidth ? "mobile" : "desktop";
	const { data: customReports = [], isPending: isCustomReportsLoading } = useReports();
	const sankeyFeatureFlag = useFeatureFlag("sankeyReport");
	const customReportMap = (0, import_react.useMemo)(() => new Map(customReports.map((report) => [report.id, report])), [customReports]);
	const { data: dashboardPages = [], isPending: isDashboardPageLoading } = useDashboardPages();
	const { data: widgets = [], isPending: isWidgetsLoading } = useDashboardPageWidgets(dashboard.id);
	const isLoading = isCustomReportsLoading || isWidgetsLoading || isDashboardPageLoading;
	const navigate = useNavigate();
	const location = useLocation();
	sessionStorage.setItem("url", location.pathname);
	const [containerWidth, setContainerWidth] = (0, import_react.useState)(0);
	const containerRef = useResizeObserver((0, import_react.useCallback)((contentRect) => {
		setContainerWidth(Math.floor(contentRect.width));
	}, []));
	const isMounted = containerWidth > 0;
	const mobileLayout = (0, import_react.useMemo)(() => {
		if (!widgets || widgets.length === 0) return [];
		const sortedDesktopItems = [...widgets];
		sortedDesktopItems.sort((a, b) => {
			if (a.y < b.y) return -1;
			if (a.y > b.y) return 1;
			if (a.x < b.x) return -1;
			if (a.x > b.x) return 1;
			return 0;
		});
		let currentY = 0;
		return sortedDesktopItems.map((widget) => {
			const itemY = currentY;
			currentY += widget.height;
			return {
				i: widget.id,
				x: 0,
				y: itemY,
				w: 1,
				h: widget.height
			};
		});
	}, [widgets]);
	const desktopLayout = (0, import_react.useMemo)(() => {
		if (!widgets) return [];
		return widgets.map((widget) => ({
			i: widget.id,
			x: widget.x,
			y: widget.y,
			w: widget.width,
			h: widget.height,
			minW: isCustomReportWidget(widget) || widget.type === "markdown-card" ? 2 : 3,
			minH: isCustomReportWidget(widget) || widget.type === "markdown-card" ? 1 : 2
		}));
	}, [widgets]);
	const currentLayout = (0, import_react.useMemo)(() => currentBreakpoint === "desktop" ? desktopLayout : mobileLayout, [
		currentBreakpoint,
		desktopLayout,
		mobileLayout
	]);
	const widgetMap = (0, import_react.useMemo)(() => new Map((widgets ?? []).map((widget) => [widget.id, widget])), [widgets]);
	const closeNotifications = () => {
		dispatch(removeNotification({ id: "import" }));
	};
	fe("ctrl+z, cmd+z, meta+z", closeNotifications, { scopes: ["app"] }, [closeNotifications]);
	const { undo } = useUndo();
	const onDispatchSucessNotification = (message) => {
		dispatch(addNotification({ notification: {
			id: "import",
			type: "message",
			sticky: true,
			timeout: 3e4,
			message,
			messageActions: { undo: () => {
				closeNotifications();
				undo();
			} }
		} }));
	};
	const resetDashboardPageMutation = useResetDashboardPageMutation();
	const onResetDashboard = async () => {
		setIsImporting(true);
		resetDashboardPageMutation.mutate({ id: dashboard.id }, {
			onSettled: () => {
				setIsImporting(false);
			},
			onSuccess: () => {
				onDispatchSucessNotification(t("Dashboard has been successfully reset to default state. Don't like what you see? You can always press [ctrl+z](#undo) to undo."));
			}
		});
	};
	const updateDashboardWidgetsMutation = useUpdateDashboardWidgetsMutation();
	const onLayoutChange = (newLayout) => {
		if (!isEditing) return;
		updateDashboardWidgetsMutation.mutate({ widgets: newLayout.map((item) => ({
			id: item.i,
			width: item.w,
			height: item.h,
			x: item.x,
			y: item.y
		})) });
	};
	const addDashboardWidgetMutation = useAddDashboardWidgetMutation();
	const onAddWidget = (type, meta = null) => {
		addDashboardWidgetMutation.mutate({ widget: {
			type,
			width: 4,
			height: 2,
			meta,
			dashboard_page_id: dashboard.id
		} });
	};
	const removeDashboardWidgetMutation = useRemoveDashboardWidgetMutation();
	const onRemoveWidget = (widgetId) => {
		removeDashboardWidgetMutation.mutate({ id: widgetId });
	};
	const onExport = () => {
		const data = {
			version: 1,
			widgets: desktopLayout.map((item) => {
				const widget = widgetMap.get(item.i);
				if (!widget) throw new Error(`Unable to query widget: ${item.i}`);
				if (isCustomReportWidget(widget)) {
					const customReport = customReportMap.get(widget.meta.id);
					if (!customReport) throw new Error(`Custom report not found for widget: ${item.i}`);
					return {
						...widget,
						meta: customReport,
						id: void 0,
						tombstone: void 0
					};
				}
				return {
					...widget,
					id: void 0,
					tombstone: void 0
				};
			})
		};
		window.Actual.saveFile(JSON.stringify(data, null, 2), "dashboard.json", t("Export Dashboard"));
	};
	const importDashboardPageMutation = useImportDashboardPageMutation();
	const onImport = async () => {
		const openFileDialog = window.Actual.openFileDialog;
		if (!openFileDialog) {
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Fatal error occurred: unable to open import file dialog.")
			} }));
			return;
		}
		const [filePath] = await openFileDialog({
			properties: ["openFile"],
			filters: [{
				name: "JSON files",
				extensions: ["json"]
			}]
		});
		closeNotifications();
		setIsImporting(true);
		importDashboardPageMutation.mutate({
			filePath,
			dashboardPageId: dashboard.id
		}, {
			onSettled: () => {
				setIsImporting(false);
			},
			onSuccess: () => {
				onDispatchSucessNotification(t("Dashboard has been successfully imported. Don't like what you see? You can always press [ctrl+z](#undo) to undo."));
			},
			onError: (error) => {
				const originalError = error.cause;
				if (originalError instanceof Error) switch (originalError.cause) {
					case "json-parse-error":
						dispatch(addNotification({ notification: {
							id: "import",
							type: "error",
							message: t("Failed parsing the imported JSON.")
						} }));
						break;
					case "validation-error":
						dispatch(addNotification({ notification: {
							id: "import",
							type: "error",
							message: error.message
						} }));
						break;
					default:
						dispatch(addNotification({ notification: {
							id: "import",
							type: "error",
							message: t("Failed importing the dashboard file.")
						} }));
						break;
				}
			}
		});
	};
	const updateDashboardWidgetMutation = useUpdateDashboardWidgetMutation();
	const onMetaChange = (widget, newMeta) => {
		updateDashboardWidgetMutation.mutate({ widget: {
			id: widget.i,
			meta: newMeta
		} });
	};
	const copyDashboardWidgetMutation = useCopyDashboardWidgetMutation();
	const onCopyWidget = (widgetId, targetDashboardId) => {
		copyDashboardWidgetMutation.mutate({
			id: widgetId,
			targetDashboardPageId: targetDashboardId
		});
	};
	const deleteDashboardPageMutation = useDeleteDashboardPageMutation();
	const onDeleteDashboard = async (id) => {
		deleteDashboardPageMutation.mutate({ id }, { onSuccess: () => {
			const nextDashboard = dashboardPages.find((d) => d.id !== id);
			if (nextDashboard) navigate(`/reports/${nextDashboard.id}`);
		} });
	};
	const { data: accounts = [] } = useAccounts();
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, { message: t("Loading reports...") });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: isNarrowWidth ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, { title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Reports" }),
				": ",
				dashboard.name
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				padding: "5px",
				borderBottom: "1px solid " + theme.pillBorder
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardSelector, {
				dashboards: dashboardPages,
				currentDashboard: dashboard
			})
		})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				flexDirection: "row",
				justifyContent: "space-between",
				marginRight: 15,
				alignItems: "center"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardHeader, { dashboard }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					flexDirection: "row",
					justifyContent: "space-between",
					gap: 5,
					alignItems: "stretch"
				},
				children: currentBreakpoint === "desktop" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardSelector, {
						dashboards: dashboardPages,
						currentDashboard: dashboard
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
						height: "auto",
						borderLeft: `1.5px solid ${theme.pillBorderDark}`,
						borderRadius: .75,
						marginLeft: 7,
						marginRight: 7
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)($de32f1b87079253c$export$2e1e1122cf0cba88, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "primary",
						isDisabled: isImporting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Add new widget" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)($de32f1b87079253c$export$3ddf2d174ce01153, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
						slot: "close",
						onMenuSelect: (item) => {
							if (item === "custom-report") {
								navigate("/reports/custom");
								return;
							}
							function isExistingCustomReport(name) {
								return name.startsWith("custom-report-");
							}
							if (isExistingCustomReport(item)) {
								const [, reportId] = item.split("custom-report-");
								onAddWidget("custom-report", { id: reportId });
								return;
							}
							if (item === "markdown-card") {
								onAddWidget(item, { content: `### ${t("Text Widget")}\n\n${t("Edit this widget to change the **markdown** content.")}` });
								return;
							}
							onAddWidget(item);
						},
						items: [
							{
								name: "cash-flow-card",
								text: t("Cash flow graph")
							},
							{
								name: "net-worth-card",
								text: t("Net worth graph")
							},
							...crossoverReportEnabled ? [{
								name: "crossover-card",
								text: t("Crossover point")
							}] : [],
							...ageOfMoneyReportEnabled ? [{
								name: "age-of-money-card",
								text: t("Age of Money")
							}] : [],
							{
								name: "spending-card",
								text: t("Spending analysis")
							},
							...budgetAnalysisReportEnabled ? [{
								name: "budget-analysis-card",
								text: t("Budget analysis")
							}] : [],
							{
								name: "markdown-card",
								text: t("Text widget")
							},
							{
								name: "summary-card",
								text: t("Summary card")
							},
							{
								name: "calendar-card",
								text: t("Calendar card")
							},
							...formulaMode ? [{
								name: "formula-card",
								text: t("Formula card")
							}] : [],
							...sankeyFeatureFlag ? [{
								name: "sankey-card",
								text: t("Sankey card")
							}] : [],
							{
								name: "custom-report",
								text: t("New custom report")
							},
							...customReports.length ? [Menu.line] : [],
							...customReports.map((report) => ({
								name: `custom-report-${report.id}`,
								text: report.name
							}))
						]
					}) }) })] }),
					isEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						isDisabled: isImporting,
						onPress: () => setIsEditing(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Finish editing dashboard" })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						isDisabled: isImporting,
						onPress: () => setIsEditing(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Edit dashboard" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)($de32f1b87079253c$export$2e1e1122cf0cba88, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "bare",
						"aria-label": t("Menu"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgDotsHorizontalTriple, {
							width: 15,
							height: 15,
							style: { transform: "rotateZ(90deg)" }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)($de32f1b87079253c$export$3ddf2d174ce01153, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
						slot: "close",
						onMenuSelect: (item) => {
							switch (item) {
								case "reset":
									onResetDashboard();
									break;
								case "export":
									onExport();
									break;
								case "import":
									onImport();
									break;
								case "delete":
									onDeleteDashboard(dashboard.id);
									break;
								default: throw new Error(`Unrecognized menu option: ${String(item)}`);
							}
						},
						items: [
							{
								name: "reset",
								text: t("Reset to default"),
								disabled: isImporting
							},
							Menu.line,
							{
								name: "import",
								text: t("Import"),
								disabled: isImporting
							},
							{
								name: "export",
								text: t("Export"),
								disabled: isImporting
							},
							Menu.line,
							{
								name: "delete",
								text: t("Delete dashboard"),
								disabled: isImporting || dashboardPages.length <= 1
							}
						]
					}) }) })] })
				] })
			})]
		}),
		padding: 10,
		children: isImporting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, { message: t("Import is running...") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			"data-testid": "reports-overview",
			innerRef: containerRef,
			style: {
				userSelect: "none",
				paddingBottom: MOBILE_NAV_HEIGHT
			},
			children: isMounted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridLayout, {
				width: containerWidth,
				layout: currentLayout,
				gridConfig: {
					cols: currentBreakpoint === "desktop" ? 12 : 1,
					rowHeight: 100
				},
				dragConfig: {
					enabled: currentBreakpoint === "desktop" && isEditing,
					cancel: `.non-draggable-area`
				},
				resizeConfig: { enabled: currentBreakpoint === "desktop" && isEditing },
				onLayoutChange: currentBreakpoint === "desktop" ? onLayoutChange : void 0,
				children: currentLayout.map((item) => {
					const widget = widgetMap.get(item.i);
					if (!widget) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, {
						fallbackRender: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingReportCard, {
							isEditing,
							onRemove: () => onRemoveWidget(item.i),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "This widget has failed to load." })
						}),
						children: widget.type === "net-worth-card" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetWorthCard, {
							widgetId: item.i,
							isEditing,
							accounts,
							meta: widget.meta,
							onMetaChange: (newMeta) => onMetaChange(item, newMeta),
							onRemove: () => onRemoveWidget(item.i),
							onCopy: (targetDashboardId) => onCopyWidget(item.i, targetDashboardId)
						}) : widget.type === "crossover-card" && crossoverReportEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossoverCard, {
							widgetId: item.i,
							isEditing,
							accounts,
							meta: widget.meta,
							onMetaChange: (newMeta) => onMetaChange(item, newMeta),
							onRemove: () => onRemoveWidget(item.i),
							onCopy: (targetDashboardId) => onCopyWidget(item.i, targetDashboardId)
						}) : widget.type === "age-of-money-card" && ageOfMoneyReportEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgeOfMoneyCard, {
							widgetId: item.i,
							isEditing,
							meta: widget.meta,
							onMetaChange: (newMeta) => onMetaChange(item, newMeta),
							onRemove: () => onRemoveWidget(item.i),
							onCopy: (targetDashboardId) => onCopyWidget(item.i, targetDashboardId)
						}) : widget.type === "cash-flow-card" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CashFlowCard, {
							widgetId: item.i,
							isEditing,
							meta: widget.meta,
							onMetaChange: (newMeta) => onMetaChange(item, newMeta),
							onRemove: () => onRemoveWidget(item.i),
							onCopy: (targetDashboardId) => onCopyWidget(item.i, targetDashboardId)
						}) : widget.type === "spending-card" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpendingCard, {
							widgetId: item.i,
							isEditing,
							meta: widget.meta,
							onMetaChange: (newMeta) => onMetaChange(item, newMeta),
							onRemove: () => onRemoveWidget(item.i),
							onCopy: (targetDashboardId) => onCopyWidget(item.i, targetDashboardId)
						}) : widget.type === "budget-analysis-card" && budgetAnalysisReportEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetAnalysisCard, {
							widgetId: item.i,
							isEditing,
							meta: widget.meta,
							onMetaChange: (newMeta) => onMetaChange(item, newMeta),
							onRemove: () => onRemoveWidget(item.i),
							onCopy: (targetDashboardId) => onCopyWidget(item.i, targetDashboardId)
						}) : widget.type === "markdown-card" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownCard, {
							isEditing,
							meta: widget.meta,
							onMetaChange: (newMeta) => onMetaChange(item, newMeta),
							onRemove: () => onRemoveWidget(item.i),
							onCopy: (targetDashboardId) => onCopyWidget(item.i, targetDashboardId)
						}) : widget.type === "custom-report" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomReportListCards, {
							isEditing,
							report: customReportMap.get(widget.meta.id),
							onRemove: () => onRemoveWidget(item.i),
							onCopy: (targetDashboardId) => onCopyWidget(item.i, targetDashboardId)
						}) : widget.type === "summary-card" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
							widgetId: item.i,
							isEditing,
							meta: widget.meta,
							onMetaChange: (newMeta) => onMetaChange(item, newMeta),
							onRemove: () => onRemoveWidget(item.i),
							onCopy: (targetDashboardId) => onCopyWidget(item.i, targetDashboardId)
						}) : widget.type === "calendar-card" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCard, {
							widgetId: item.i,
							isEditing,
							meta: widget.meta,
							firstDayOfWeekIdx,
							onMetaChange: (newMeta) => onMetaChange(item, newMeta),
							onRemove: () => onRemoveWidget(item.i),
							onCopy: (targetDashboardId) => onCopyWidget(item.i, targetDashboardId)
						}) : widget.type === "formula-card" && formulaMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaCard, {
							widgetId: item.i,
							isEditing,
							meta: widget.meta,
							onMetaChange: (newMeta) => onMetaChange(item, newMeta),
							onRemove: () => onRemoveWidget(item.i),
							onCopy: (targetDashboardId) => onCopyWidget(item.i, targetDashboardId)
						}) : widget.type === "sankey-card" && sankeyFeatureFlag ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SankeyCard, {
							widgetId: item.i,
							isEditing,
							meta: widget.meta,
							onMetaChange: (newMeta) => onMetaChange(item, newMeta),
							onRemove: () => onRemoveWidget(item.i),
							onCopy: (targetDashboardId) => onCopyWidget(item.i, targetDashboardId)
						}) : null
					}) }, item.i);
				})
			})
		}) })
	});
}
//#endregion
//#region src/components/reports/ReportsDashboardRouter.tsx
function ReportsDashboardRouter() {
	const { t } = useTranslation();
	const { dashboardId } = useParams();
	const navigate = useNavigate();
	const { data: dashboardPages = [], isPending } = useDashboardPages();
	(0, import_react.useEffect)(() => {
		if (!dashboardId && !isPending && dashboardPages.length > 0) navigate(`/reports/${dashboardPages[0].id}`, { replace: true });
	}, [
		dashboardId,
		isPending,
		dashboardPages,
		navigate
	]);
	if (isPending || !dashboardId && dashboardPages.length > 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, { message: t("Loading dashboards...") });
	if (dashboardId) {
		const dashboard = dashboardPages.find((d) => d.id === dashboardId);
		if (dashboard) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, { dashboard });
		else return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flex: 1,
				gap: 20,
				justifyContent: "center",
				alignItems: "center"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				style: {
					marginBottom: 20,
					fontSize: 18
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Dashboard not found" })
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingIndicator, { message: t("No dashboards available") });
}
//#endregion
//#region src/components/reports/ReportRouter.tsx
function ReportRouter() {
	const crossoverReportEnabled = useFeatureFlag("crossoverReport");
	const ageOfMoneyReportEnabled = useFeatureFlag("ageOfMoneyReport");
	const budgetAnalysisReportEnabled = useFeatureFlag("budgetAnalysisReport");
	const sankeyReportEnabled = useFeatureFlag("sankeyReport");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Routes, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportsDashboardRouter, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/:dashboardId",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportsDashboardRouter, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/net-worth",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetWorth, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/net-worth/:id",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetWorth, {})
		}),
		crossoverReportEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/crossover",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crossover, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/crossover/:id",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crossover, {})
		})] }),
		ageOfMoneyReportEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/age-of-money",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgeOfMoney, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/age-of-money/:id",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgeOfMoney, {})
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/cash-flow",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CashFlow, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/cash-flow/:id",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CashFlow, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/custom",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomReport, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/custom/:id",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomReport, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/spending",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spending, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/spending/:id",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spending, {})
		}),
		budgetAnalysisReportEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/budget-analysis",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetAnalysis, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/budget-analysis/:id",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetAnalysis, {})
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/summary",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Summary, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/summary/:id",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Summary, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/calendar",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/calendar/:id",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/formula",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/formula/:id",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, {})
		}),
		sankeyReportEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/sankey",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sankey, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "/sankey/:id",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sankey, {})
		})] })
	] });
}
//#endregion
export { ReportRouter };

//# sourceMappingURL=ReportRouter.EwKH_5i3.chunk.js.map