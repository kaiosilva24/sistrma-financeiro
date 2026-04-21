import { l as __toESM, n as require_jsx_runtime, r as require_react, t as theme } from "./theme.LZxTPVqa.chunk.js";
import { Dn as integerToCurrency, Kt as useDispatch, Tn as groupById, an as setNotificationInset, b as styles, ii as useTranslation, mi as init_build_shims, oi as Trans, on as useAccounts, qt as useSelector, ti as require_react_dom } from "./extends.opUJhDAp.chunk.js";
import { Ci as Menu, En as useAccount, Go as SvgDelete, Ho as SvgRightArrow2, I as usePayees, Ic as $9daab02d461809db$export$683480f191c0e3ea, Ki as SvgCheckCircle1, Lc as $8ae05eaa5c114e9c$export$7f54fc3180508a52, Ls as $7135fc7d473fd974$export$2dbbd341daed716d, Pa as SvgDotsHorizontalTriple, Po as TextOneLine, Pt as makeAmountFullStyle, Rs as $7135fc7d473fd974$export$4feb769f8ddf26c5, Si as Popover, Tl as useNavigate, Ul as View, Uo as SvgLeftArrow2, Ws as $e1995378a142960e$export$fb8073518f34e6ec, Xi as SvgArrowsSynchronize, Yi as SvgCalendar3, _i as useSelectedItems, al as $d4ee10de306f2510$export$e58f029f0fbfdb29, dc as $f6c31cce2adf654f$export$45712eceda6fad21, dt as useLocale, el as $3ef42575df84b30b$export$9d1611c77c2fe928, f as useTransactionBatchActions, fo as useScrollListener, gi as useSelectedDispatch, gr as format, h as usePayee, hc as $18f2051aff69b9bf$export$43bb16f9c6d9e3f7, it as useCategoriesById, j as useDisplayPayee, ls as $72a5793c14baf454$export$8b251419efc915eb, mt as useCachedSchedules, nc as $f1ab8c75478c6f73$export$3351871ee4b288b8, nn as isPreviewId, ns as Button, ot as useUndo, p as validForTransfer, rt as useCategories, ts as Text, ul as $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c, vl as AnimatedLoading, x as NotesTagFormatter, zi as SvgLockClosed, zo as SvgSplit } from "./Value.D0gbasR7.chunk.js";
import { C as $8a26561d2877236e$export$c24ed0104d07eab9, O as $e9faafb641e167db$export$90fc3a17d93f704c, l as $eed445e0843c11d0$export$a11e76429ed99b4, r as lookupName, s as $eed445e0843c11d0$export$41f133550aa26f48, t as Status, u as $eed445e0843c11d0$export$dca12b0bb56e4fc, v as $c5a24bc478652b5f$export$1005530eda016c13 } from "./TransactionEdit.CJ27DuIc.chunk.js";
//#region ../../node_modules/@react-stately/virtualizer/dist/Layout.mjs
var $c74cda7d31af1253$export$c84671f46d6a1ca = class {
	/**
	* Returns whether the layout should invalidate in response to
	* visible rectangle changes. By default, it only invalidates
	* when the virtualizer's size changes. Return true always
	* to make the layout invalidate while scrolling (e.g. sticky headers).
	*/ shouldInvalidate(newRect, oldRect) {
		return newRect.width !== oldRect.width || newRect.height !== oldRect.height;
	}
	/**
	* Returns whether the layout should invalidate when the layout options change.
	* By default it invalidates when the object identity changes. Override this
	* method to optimize layout updates based on specific option changes.
	*/ shouldInvalidateLayoutOptions(newOptions, oldOptions) {
		return newOptions !== oldOptions;
	}
	/**
	* This method allows the layout to perform any pre-computation
	* it needs to in order to prepare LayoutInfos for retrieval.
	* Called by the virtualizer before `getVisibleLayoutInfos`
	* or `getLayoutInfo` are called.
	*/ update(invalidationContext) {}
	/** @private */ getItemRect(key) {
		var _this_getLayoutInfo;
		var _this_getLayoutInfo_rect;
		return (_this_getLayoutInfo_rect = (_this_getLayoutInfo = this.getLayoutInfo(key)) === null || _this_getLayoutInfo === void 0 ? void 0 : _this_getLayoutInfo.rect) !== null && _this_getLayoutInfo_rect !== void 0 ? _this_getLayoutInfo_rect : null;
	}
	/** @private */ getVisibleRect() {
		return this.virtualizer.visibleRect;
	}
	constructor() {
		/** The Virtualizer the layout is currently attached to. */ this.virtualizer = null;
	}
};
//#endregion
//#region ../../node_modules/@react-stately/virtualizer/dist/LayoutInfo.mjs
var $d7fd61009c21d0bb$export$7e0eeb9da702a085 = class $d7fd61009c21d0bb$export$7e0eeb9da702a085 {
	/**
	* Returns a copy of the LayoutInfo.
	*/ copy() {
		let res = new $d7fd61009c21d0bb$export$7e0eeb9da702a085(this.type, this.key, this.rect.copy());
		res.estimatedSize = this.estimatedSize;
		res.opacity = this.opacity;
		res.transform = this.transform;
		res.parentKey = this.parentKey;
		res.content = this.content;
		res.isSticky = this.isSticky;
		res.zIndex = this.zIndex;
		res.allowOverflow = this.allowOverflow;
		return res;
	}
	/**
	* @param type The type of element represented by this LayoutInfo. Should match the `type` of the corresponding collection node.
	* @param key A unique key for this LayoutInfo. Should match the `key` of the corresponding collection node.
	* @param rect The rectangle describing the size and position of this element.
	*/ constructor(type, key, rect) {
		this.type = type;
		this.key = key;
		this.parentKey = null;
		this.content = null;
		this.rect = rect;
		this.estimatedSize = false;
		this.isSticky = false;
		this.opacity = 1;
		this.transform = null;
		this.zIndex = 0;
		this.allowOverflow = false;
	}
};
//#endregion
//#region ../../node_modules/@react-stately/virtualizer/dist/Point.mjs
init_build_shims();
var $3041db3296945e6e$export$baf26146a414f24a = class $3041db3296945e6e$export$baf26146a414f24a {
	/**
	* Returns a copy of this point.
	*/ copy() {
		return new $3041db3296945e6e$export$baf26146a414f24a(this.x, this.y);
	}
	/**
	* Checks if two points are equal.
	*/ equals(point) {
		return this.x === point.x && this.y === point.y;
	}
	/**
	* Returns true if this point is the origin.
	*/ isOrigin() {
		return this.x === 0 && this.y === 0;
	}
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
};
//#endregion
//#region ../../node_modules/@react-stately/virtualizer/dist/Rect.mjs
var $60423f92c7f9ad87$export$c79fc6492f3af13d = class $60423f92c7f9ad87$export$c79fc6492f3af13d {
	/**
	* The maximum x-coordinate in the rectangle.
	*/ get maxX() {
		return this.x + this.width;
	}
	/**
	* The maximum y-coordinate in the rectangle.
	*/ get maxY() {
		return this.y + this.height;
	}
	/**
	* The area of the rectangle.
	*/ get area() {
		return this.width * this.height;
	}
	/**
	* The top left corner of the rectangle.
	*/ get topLeft() {
		return new $3041db3296945e6e$export$baf26146a414f24a(this.x, this.y);
	}
	/**
	* The top right corner of the rectangle.
	*/ get topRight() {
		return new $3041db3296945e6e$export$baf26146a414f24a(this.maxX, this.y);
	}
	/**
	* The bottom left corner of the rectangle.
	*/ get bottomLeft() {
		return new $3041db3296945e6e$export$baf26146a414f24a(this.x, this.maxY);
	}
	/**
	* The bottom right corner of the rectangle.
	*/ get bottomRight() {
		return new $3041db3296945e6e$export$baf26146a414f24a(this.maxX, this.maxY);
	}
	/**
	* Returns whether this rectangle intersects another rectangle.
	* @param rect - The rectangle to check.
	*/ intersects(rect) {
		return this.area > 0 && rect.area > 0 && this.x <= rect.x + rect.width && rect.x <= this.x + this.width && this.y <= rect.y + rect.height && rect.y <= this.y + this.height;
	}
	/**
	* Returns whether this rectangle fully contains another rectangle.
	* @param rect - The rectangle to check.
	*/ containsRect(rect) {
		return this.x <= rect.x && this.y <= rect.y && this.maxX >= rect.maxX && this.maxY >= rect.maxY;
	}
	/**
	* Returns whether the rectangle contains the given point.
	* @param point - The point to check.
	*/ containsPoint(point) {
		return this.x <= point.x && this.y <= point.y && this.maxX >= point.x && this.maxY >= point.y;
	}
	/**
	* Returns the first corner of this rectangle (from top to bottom, left to right)
	* that is contained in the given rectangle, or null of the rectangles do not intersect.
	* @param rect - The rectangle to check.
	*/ getCornerInRect(rect) {
		for (let key of [
			"topLeft",
			"topRight",
			"bottomLeft",
			"bottomRight"
		]) if (rect.containsPoint(this[key])) return key;
		return null;
	}
	equals(rect) {
		return rect.x === this.x && rect.y === this.y && rect.width === this.width && rect.height === this.height;
	}
	pointEquals(point) {
		return this.x === point.x && this.y === point.y;
	}
	sizeEquals(size) {
		return this.width === size.width && this.height === size.height;
	}
	/**
	* Returns the union of this Rect and another.
	*/ union(other) {
		let x = Math.min(this.x, other.x);
		let y = Math.min(this.y, other.y);
		return new $60423f92c7f9ad87$export$c79fc6492f3af13d(x, y, Math.max(this.maxX, other.maxX) - x, Math.max(this.maxY, other.maxY) - y);
	}
	/**
	* Returns the intersection of this Rect with another.
	* If the rectangles do not intersect, an all zero Rect is returned.
	*/ intersection(other) {
		if (!this.intersects(other)) return new $60423f92c7f9ad87$export$c79fc6492f3af13d(0, 0, 0, 0);
		let x = Math.max(this.x, other.x);
		let y = Math.max(this.y, other.y);
		return new $60423f92c7f9ad87$export$c79fc6492f3af13d(x, y, Math.min(this.maxX, other.maxX) - x, Math.min(this.maxY, other.maxY) - y);
	}
	/**
	* Returns a copy of this rectangle.
	*/ copy() {
		return new $60423f92c7f9ad87$export$c79fc6492f3af13d(this.x, this.y, this.width, this.height);
	}
	constructor(x = 0, y = 0, width = 0, height = 0) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
};
//#endregion
//#region ../../node_modules/@react-stately/virtualizer/dist/Size.mjs
var $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec = class $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec {
	/**
	* Returns a copy of this size.
	*/ copy() {
		return new $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec(this.width, this.height);
	}
	/**
	* Returns whether this size is equal to another one.
	*/ equals(other) {
		return this.width === other.width && this.height === other.height;
	}
	/**
	* The total area of the Size.
	*/ get area() {
		return this.width * this.height;
	}
	constructor(width = 0, height = 0) {
		this.width = Math.max(width, 0);
		this.height = Math.max(height, 0);
	}
};
//#endregion
//#region ../../node_modules/@react-stately/virtualizer/dist/ReusableView.mjs
var $ad1d98aa8f0c31b4$var$KEY = 0;
var $ad1d98aa8f0c31b4$export$1a5223887c560441 = class {
	/**
	* Prepares the view for reuse. Called just before the view is removed from the DOM.
	*/ prepareForReuse() {
		this.content = null;
		this.rendered = null;
		this.layoutInfo = null;
	}
	getReusableView(reuseType) {
		let reusable = this.reusableViews.get(reuseType);
		return reusable && reusable.length > 0 ? reusable.shift() : new $ad1d98aa8f0c31b4$export$7a41b6f219e61634(this.virtualizer, this, reuseType);
	}
	reuseChild(child) {
		child.prepareForReuse();
		let reusable = this.reusableViews.get(child.viewType);
		if (!reusable) {
			reusable = [];
			this.reusableViews.set(child.viewType, reusable);
		}
		reusable.push(child);
	}
	constructor(virtualizer, viewType) {
		this.virtualizer = virtualizer;
		this.key = ++$ad1d98aa8f0c31b4$var$KEY;
		this.viewType = viewType;
		this.children = /* @__PURE__ */ new Set();
		this.reusableViews = /* @__PURE__ */ new Map();
		this.layoutInfo = null;
		this.content = null;
		this.rendered = null;
	}
};
var $ad1d98aa8f0c31b4$export$e21886a4eef6b29a = class extends $ad1d98aa8f0c31b4$export$1a5223887c560441 {
	constructor(virtualizer) {
		super(virtualizer, "root");
	}
};
var $ad1d98aa8f0c31b4$export$7a41b6f219e61634 = class extends $ad1d98aa8f0c31b4$export$1a5223887c560441 {
	constructor(virtualizer, parent, viewType) {
		super(virtualizer, viewType);
		this.parent = parent;
	}
};
//#endregion
//#region ../../node_modules/@react-stately/virtualizer/dist/utils.mjs
/** Returns whether two sets are equal. */ function $fc36f9a046a9ce79$export$a8d0d0c8d1c5df64(a, b) {
	if (a === b) return true;
	if (a.size !== b.size) return false;
	for (let key of a) if (!b.has(key)) return false;
	return true;
}
//#endregion
//#region ../../node_modules/@react-stately/virtualizer/dist/OverscanManager.mjs
var $364191b3decf3697$export$4455ee6afb38dcbb = class {
	setVisibleRect(rect) {
		let time = performance.now() - this.startTime;
		if (time < 500) {
			if (rect.x !== this.visibleRect.x && time > 0) this.velocity.x = (rect.x - this.visibleRect.x) / time;
			if (rect.y !== this.visibleRect.y && time > 0) this.velocity.y = (rect.y - this.visibleRect.y) / time;
		}
		this.startTime = performance.now();
		this.visibleRect = rect;
	}
	getOverscannedRect() {
		let overscanned = this.visibleRect.copy();
		let overscanY = this.visibleRect.height / 3;
		overscanned.height += overscanY;
		if (this.velocity.y < 0) overscanned.y -= overscanY;
		if (this.velocity.x !== 0) {
			let overscanX = this.visibleRect.width / 3;
			overscanned.width += overscanX;
			if (this.velocity.x < 0) overscanned.x -= overscanX;
		}
		return overscanned;
	}
	constructor() {
		this.startTime = 0;
		this.velocity = new $3041db3296945e6e$export$baf26146a414f24a(0, 0);
		this.visibleRect = new $60423f92c7f9ad87$export$c79fc6492f3af13d();
	}
};
//#endregion
//#region ../../node_modules/@react-stately/virtualizer/dist/Virtualizer.mjs
init_build_shims();
var $38b9490c1cca8fc4$export$89be5a243e59c4b2 = class {
	/** Returns whether the given key, or an ancestor, is persisted. */ isPersistedKey(key) {
		if (this.persistedKeys.has(key)) return true;
		for (let k of this.persistedKeys) while (k != null) {
			let layoutInfo = this.layout.getLayoutInfo(k);
			if (!layoutInfo || layoutInfo.parentKey == null) break;
			k = layoutInfo.parentKey;
			if (k === key) return true;
		}
		return false;
	}
	getParentView(layoutInfo) {
		return layoutInfo.parentKey != null ? this._visibleViews.get(layoutInfo.parentKey) : this._rootView;
	}
	getReusableView(layoutInfo) {
		let view = this.getParentView(layoutInfo).getReusableView(layoutInfo.type);
		view.layoutInfo = layoutInfo;
		this._renderView(view);
		return view;
	}
	_renderView(reusableView) {
		if (reusableView.layoutInfo) {
			let { type, key, content } = reusableView.layoutInfo;
			reusableView.content = content || this.collection.getItem(key);
			reusableView.rendered = this._renderContent(type, reusableView.content);
		}
	}
	_renderContent(type, content) {
		let cached = content != null ? this._renderedContent.get(content) : null;
		if (cached != null) return cached;
		let rendered = this.delegate.renderView(type, content);
		if (content) this._renderedContent.set(content, rendered);
		return rendered;
	}
	/**
	* Returns the key for the item view currently at the given point.
	*/ keyAtPoint(point) {
		let rect = new $60423f92c7f9ad87$export$c79fc6492f3af13d(point.x, point.y, 1, 1);
		let layoutInfos = rect.area === 0 ? [] : this.layout.getVisibleLayoutInfos(rect);
		for (let layoutInfo of layoutInfos) if (layoutInfo.rect.intersects(rect)) return layoutInfo.key;
		return null;
	}
	relayout(context = {}) {
		this.layout.update(context);
		this.contentSize = this.layout.getContentSize();
		let visibleRect = this.visibleRect;
		let contentOffsetX = context.contentChanged ? 0 : visibleRect.x;
		let contentOffsetY = context.contentChanged ? 0 : visibleRect.y;
		contentOffsetX = Math.max(0, Math.min(this.contentSize.width - visibleRect.width, contentOffsetX));
		contentOffsetY = Math.max(0, Math.min(this.contentSize.height - visibleRect.height, contentOffsetY));
		if (contentOffsetX !== visibleRect.x || contentOffsetY !== visibleRect.y) {
			let rect = new $60423f92c7f9ad87$export$c79fc6492f3af13d(contentOffsetX, contentOffsetY, visibleRect.width, visibleRect.height);
			this.delegate.setVisibleRect(rect);
		} else this.updateSubviews();
	}
	getVisibleLayoutInfos() {
		let rect;
		rect = this._overscanManager.getOverscannedRect();
		let layoutInfos = this.layout.getVisibleLayoutInfos(rect);
		let map = /* @__PURE__ */ new Map();
		for (let layoutInfo of layoutInfos) map.set(layoutInfo.key, layoutInfo);
		return map;
	}
	updateSubviews() {
		let visibleLayoutInfos = this.getVisibleLayoutInfos();
		let removed = /* @__PURE__ */ new Set();
		for (let [key, view] of this._visibleViews) {
			let layoutInfo = visibleLayoutInfos.get(key);
			if (!layoutInfo || view.parent !== this.getParentView(layoutInfo)) {
				this._visibleViews.delete(key);
				view.parent.reuseChild(view);
				removed.add(view);
			}
		}
		for (let [key, layoutInfo] of visibleLayoutInfos) {
			let view = this._visibleViews.get(key);
			if (!view) {
				view = this.getReusableView(layoutInfo);
				view.parent.children.add(view);
				this._visibleViews.set(key, view);
				removed.delete(view);
			} else {
				view.layoutInfo = layoutInfo;
				let item = this.collection.getItem(layoutInfo.key);
				if (view.content !== item) {
					if (view.content != null) this._renderedContent.delete(view.content);
					this._renderView(view);
				}
			}
		}
		for (let view of removed) {
			view.parent.children.delete(view);
			view.parent.reusableViews.clear();
		}
		if (!this._isScrolling) for (let key of visibleLayoutInfos.keys()) {
			let view = this._visibleViews.get(key);
			view.parent.children.delete(view);
			view.parent.children.add(view);
		}
	}
	/** Performs layout and updates visible views as needed. */ render(opts) {
		let mutableThis = this;
		let needsLayout = false;
		let offsetChanged = false;
		let sizeChanged = false;
		let itemSizeChanged = false;
		let layoutOptionsChanged = false;
		let needsUpdate = false;
		if (opts.collection !== this.collection) {
			mutableThis.collection = opts.collection;
			needsLayout = true;
		}
		if (opts.layout !== this.layout || this.layout.virtualizer !== this) {
			if (this.layout) this.layout.virtualizer = null;
			opts.layout.virtualizer = this;
			mutableThis.layout = opts.layout;
			needsLayout = true;
		}
		if (opts.persistedKeys && !$fc36f9a046a9ce79$export$a8d0d0c8d1c5df64(opts.persistedKeys, this.persistedKeys)) {
			mutableThis.persistedKeys = opts.persistedKeys;
			needsUpdate = true;
		}
		if (!this.visibleRect.equals(opts.visibleRect)) {
			this._overscanManager.setVisibleRect(opts.visibleRect);
			if (this.layout.shouldInvalidate(opts.visibleRect, this.visibleRect)) {
				offsetChanged = !opts.visibleRect.pointEquals(this.visibleRect);
				sizeChanged = !opts.visibleRect.sizeEquals(this.visibleRect);
				needsLayout = true;
			} else needsUpdate = true;
			mutableThis.visibleRect = opts.visibleRect;
		}
		if (opts.invalidationContext !== this._invalidationContext) {
			if (opts.invalidationContext) {
				sizeChanged || (sizeChanged = opts.invalidationContext.sizeChanged || false);
				offsetChanged || (offsetChanged = opts.invalidationContext.offsetChanged || false);
				itemSizeChanged || (itemSizeChanged = opts.invalidationContext.itemSizeChanged || false);
				layoutOptionsChanged || (layoutOptionsChanged = opts.invalidationContext.layoutOptions != null && this._invalidationContext.layoutOptions != null && opts.invalidationContext.layoutOptions !== this._invalidationContext.layoutOptions && this.layout.shouldInvalidateLayoutOptions(opts.invalidationContext.layoutOptions, this._invalidationContext.layoutOptions));
				needsLayout || (needsLayout = itemSizeChanged || sizeChanged || offsetChanged || layoutOptionsChanged);
			}
			this._invalidationContext = opts.invalidationContext;
		}
		if (opts.isScrolling !== this._isScrolling) {
			this._isScrolling = opts.isScrolling;
			if (!opts.isScrolling) needsUpdate = true;
		}
		if (needsLayout) this.relayout({
			offsetChanged,
			sizeChanged,
			itemSizeChanged,
			layoutOptionsChanged,
			layoutOptions: this._invalidationContext.layoutOptions
		});
		else if (needsUpdate) this.updateSubviews();
		return Array.from(this._rootView.children);
	}
	getVisibleView(key) {
		return this._visibleViews.get(key);
	}
	invalidate(context) {
		this.delegate.invalidate(context);
	}
	updateItemSize(key, size) {
		if (!this.layout.updateItemSize) return;
		if (this.layout.updateItemSize(key, size)) this.invalidate({ itemSizeChanged: true });
	}
	constructor(options) {
		this.delegate = options.delegate;
		this.collection = options.collection;
		this.layout = options.layout;
		this.contentSize = new $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec();
		this.visibleRect = new $60423f92c7f9ad87$export$c79fc6492f3af13d();
		this.persistedKeys = /* @__PURE__ */ new Set();
		this._visibleViews = /* @__PURE__ */ new Map();
		this._renderedContent = /* @__PURE__ */ new WeakMap();
		this._rootView = new $ad1d98aa8f0c31b4$export$e21886a4eef6b29a(this);
		this._isScrolling = false;
		this._invalidationContext = {};
		this._overscanManager = new $364191b3decf3697$export$4455ee6afb38dcbb();
	}
};
//#endregion
//#region ../../node_modules/@react-stately/virtualizer/dist/useVirtualizerState.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var $fc0b13b484ac1194$export$e5c5a5f917a5871c = typeof document !== "undefined" ? import_react.useLayoutEffect : () => {};
function $fc0b13b484ac1194$export$1505db82fe357e65(opts) {
	let [visibleRect, setVisibleRect] = (0, import_react.useState)(new $60423f92c7f9ad87$export$c79fc6492f3af13d(0, 0, 0, 0));
	let [isScrolling, setScrolling] = (0, import_react.useState)(false);
	let [invalidationContext, setInvalidationContext] = (0, import_react.useState)({});
	let visibleRectChanged = (0, import_react.useRef)(false);
	let [virtualizer] = (0, import_react.useState)(() => new $38b9490c1cca8fc4$export$89be5a243e59c4b2({
		collection: opts.collection,
		layout: opts.layout,
		delegate: {
			setVisibleRect(rect) {
				setVisibleRect(rect);
				visibleRectChanged.current = true;
			},
			renderView: opts.renderView,
			invalidate: setInvalidationContext
		}
	}));
	$fc0b13b484ac1194$export$e5c5a5f917a5871c(() => {
		if (visibleRectChanged.current) {
			visibleRectChanged.current = false;
			opts.onVisibleRectChange(visibleRect);
		}
	});
	let mergedInvalidationContext = (0, import_react.useMemo)(() => {
		if (opts.layoutOptions != null) return {
			...invalidationContext,
			layoutOptions: opts.layoutOptions
		};
		return invalidationContext;
	}, [invalidationContext, opts.layoutOptions]);
	let visibleViews = virtualizer.render({
		layout: opts.layout,
		collection: opts.collection,
		persistedKeys: opts.persistedKeys,
		layoutOptions: opts.layoutOptions,
		visibleRect,
		invalidationContext: mergedInvalidationContext,
		isScrolling
	});
	let contentSize = virtualizer.contentSize;
	let startScrolling = (0, import_react.useCallback)(() => {
		setScrolling(true);
	}, []);
	let endScrolling = (0, import_react.useCallback)(() => {
		setScrolling(false);
	}, []);
	return (0, import_react.useMemo)(() => ({
		virtualizer,
		visibleViews,
		setVisibleRect,
		contentSize,
		isScrolling,
		startScrolling,
		endScrolling
	}), [
		virtualizer,
		visibleViews,
		setVisibleRect,
		contentSize,
		isScrolling,
		startScrolling,
		endScrolling
	]);
}
//#endregion
//#region ../../node_modules/@react-stately/layout/dist/ListLayout.mjs
var $61ef60fc9b1041f4$var$DEFAULT_HEIGHT = 48;
var $61ef60fc9b1041f4$export$cacbb3924155d68e = class extends $c74cda7d31af1253$export$c84671f46d6a1ca {
	get collection() {
		return this.virtualizer.collection;
	}
	getLayoutInfo(key) {
		var _this_layoutNodes_get;
		this.ensureLayoutInfo(key);
		return ((_this_layoutNodes_get = this.layoutNodes.get(key)) === null || _this_layoutNodes_get === void 0 ? void 0 : _this_layoutNodes_get.layoutInfo) || null;
	}
	getVisibleLayoutInfos(rect) {
		if (rect.height > 1) {
			var _this_rowHeight, _ref;
			let rowHeight = ((_ref = (_this_rowHeight = this.rowHeight) !== null && _this_rowHeight !== void 0 ? _this_rowHeight : this.estimatedRowHeight) !== null && _ref !== void 0 ? _ref : $61ef60fc9b1041f4$var$DEFAULT_HEIGHT) + this.gap;
			rect.y = Math.floor(rect.y / rowHeight) * rowHeight;
			rect.height = Math.ceil(rect.height / rowHeight) * rowHeight;
		}
		this.layoutIfNeeded(rect);
		let res = [];
		let addNodes = (nodes) => {
			for (let node of nodes) if (this.isVisible(node, rect)) {
				res.push(node.layoutInfo);
				if (node.children) addNodes(node.children);
			}
		};
		addNodes(this.rootNodes);
		return res;
	}
	layoutIfNeeded(rect) {
		if (!this.lastCollection) return;
		if (!this.requestedRect.containsRect(rect)) {
			this.requestedRect = this.requestedRect.union(rect);
			this.rootNodes = this.buildCollection();
		}
		for (let key of this.virtualizer.persistedKeys) if (this.ensureLayoutInfo(key)) return;
	}
	ensureLayoutInfo(key) {
		if (!this.layoutNodes.has(key) && this.requestedRect.area < this.contentSize.area && this.lastCollection) {
			this.requestedRect = new $60423f92c7f9ad87$export$c79fc6492f3af13d(0, 0, Infinity, Infinity);
			this.rootNodes = this.buildCollection();
			this.requestedRect = new $60423f92c7f9ad87$export$c79fc6492f3af13d(0, 0, this.contentSize.width, this.contentSize.height);
			return true;
		}
		return false;
	}
	isVisible(node, rect) {
		return node.layoutInfo.rect.intersects(rect) || node.layoutInfo.isSticky || node.layoutInfo.type === "header" || node.layoutInfo.type === "loader" || this.virtualizer.isPersistedKey(node.layoutInfo.key);
	}
	shouldInvalidateEverything(invalidationContext) {
		let options = invalidationContext.layoutOptions;
		var _options_rowHeight, _options_headingHeight, _options_loaderHeight, _options_gap, _options_padding;
		return invalidationContext.sizeChanged || this.rowHeight !== ((_options_rowHeight = options === null || options === void 0 ? void 0 : options.rowHeight) !== null && _options_rowHeight !== void 0 ? _options_rowHeight : this.rowHeight) || this.headingHeight !== ((_options_headingHeight = options === null || options === void 0 ? void 0 : options.headingHeight) !== null && _options_headingHeight !== void 0 ? _options_headingHeight : this.headingHeight) || this.loaderHeight !== ((_options_loaderHeight = options === null || options === void 0 ? void 0 : options.loaderHeight) !== null && _options_loaderHeight !== void 0 ? _options_loaderHeight : this.loaderHeight) || this.gap !== ((_options_gap = options === null || options === void 0 ? void 0 : options.gap) !== null && _options_gap !== void 0 ? _options_gap : this.gap) || this.padding !== ((_options_padding = options === null || options === void 0 ? void 0 : options.padding) !== null && _options_padding !== void 0 ? _options_padding : this.padding);
	}
	shouldInvalidateLayoutOptions(newOptions, oldOptions) {
		return newOptions.rowHeight !== oldOptions.rowHeight || newOptions.estimatedRowHeight !== oldOptions.estimatedRowHeight || newOptions.headingHeight !== oldOptions.headingHeight || newOptions.estimatedHeadingHeight !== oldOptions.estimatedHeadingHeight || newOptions.loaderHeight !== oldOptions.loaderHeight || newOptions.dropIndicatorThickness !== oldOptions.dropIndicatorThickness || newOptions.gap !== oldOptions.gap || newOptions.padding !== oldOptions.padding;
	}
	update(invalidationContext) {
		let collection = this.virtualizer.collection;
		this.invalidateEverything = this.shouldInvalidateEverything(invalidationContext);
		if (this.invalidateEverything) {
			this.requestedRect = this.virtualizer.visibleRect.copy();
			this.layoutNodes.clear();
		}
		let options = invalidationContext.layoutOptions;
		var _options_rowHeight;
		this.rowHeight = (_options_rowHeight = options === null || options === void 0 ? void 0 : options.rowHeight) !== null && _options_rowHeight !== void 0 ? _options_rowHeight : this.rowHeight;
		var _options_estimatedRowHeight;
		this.estimatedRowHeight = (_options_estimatedRowHeight = options === null || options === void 0 ? void 0 : options.estimatedRowHeight) !== null && _options_estimatedRowHeight !== void 0 ? _options_estimatedRowHeight : this.estimatedRowHeight;
		var _options_headingHeight;
		this.headingHeight = (_options_headingHeight = options === null || options === void 0 ? void 0 : options.headingHeight) !== null && _options_headingHeight !== void 0 ? _options_headingHeight : this.headingHeight;
		var _options_estimatedHeadingHeight;
		this.estimatedHeadingHeight = (_options_estimatedHeadingHeight = options === null || options === void 0 ? void 0 : options.estimatedHeadingHeight) !== null && _options_estimatedHeadingHeight !== void 0 ? _options_estimatedHeadingHeight : this.estimatedHeadingHeight;
		var _options_loaderHeight;
		this.loaderHeight = (_options_loaderHeight = options === null || options === void 0 ? void 0 : options.loaderHeight) !== null && _options_loaderHeight !== void 0 ? _options_loaderHeight : this.loaderHeight;
		var _options_dropIndicatorThickness;
		this.dropIndicatorThickness = (_options_dropIndicatorThickness = options === null || options === void 0 ? void 0 : options.dropIndicatorThickness) !== null && _options_dropIndicatorThickness !== void 0 ? _options_dropIndicatorThickness : this.dropIndicatorThickness;
		var _options_gap;
		this.gap = (_options_gap = options === null || options === void 0 ? void 0 : options.gap) !== null && _options_gap !== void 0 ? _options_gap : this.gap;
		var _options_padding;
		this.padding = (_options_padding = options === null || options === void 0 ? void 0 : options.padding) !== null && _options_padding !== void 0 ? _options_padding : this.padding;
		this.rootNodes = this.buildCollection();
		if (this.lastCollection && collection !== this.lastCollection) {
			for (let key of this.lastCollection.getKeys()) if (!collection.getItem(key)) {
				if (this.layoutNodes.get(key)) this.layoutNodes.delete(key);
			}
		}
		this.lastCollection = collection;
		this.invalidateEverything = false;
		this.validRect = this.requestedRect.copy();
	}
	buildCollection(y = this.padding) {
		let collection = this.virtualizer.collection;
		let collectionNodes = $61ef60fc9b1041f4$var$toArray(collection, (node) => node.type !== "content");
		let loaderNodes = collectionNodes.filter((node) => node.type === "loader");
		let nodes = [];
		let isEmptyOrLoading = (collection === null || collection === void 0 ? void 0 : collection.size) === 0;
		if (isEmptyOrLoading) y = 0;
		for (let node of collectionNodes) {
			var _this_rowHeight, _ref;
			let rowHeight = ((_ref = (_this_rowHeight = this.rowHeight) !== null && _this_rowHeight !== void 0 ? _this_rowHeight : this.estimatedRowHeight) !== null && _ref !== void 0 ? _ref : $61ef60fc9b1041f4$var$DEFAULT_HEIGHT) + this.gap;
			if (node.type === "item" && y + rowHeight < this.requestedRect.y && !this.isValid(node, y)) {
				y += rowHeight;
				continue;
			}
			let layoutNode = this.buildChild(node, this.padding, y, null);
			y = layoutNode.layoutInfo.rect.maxY + this.gap;
			nodes.push(layoutNode);
			if (node.type === "loader") {
				let index = loaderNodes.indexOf(node);
				loaderNodes.splice(index, 1);
			}
			if ((node.type === "item" || node.type === "loader") && y > this.requestedRect.maxY) {
				let lastProcessedIndex = collectionNodes.indexOf(node);
				for (let loaderNode of loaderNodes) {
					let loaderNodeIndex = collectionNodes.indexOf(loaderNode);
					y += (loaderNodeIndex - lastProcessedIndex - 1) * rowHeight;
					let loader = this.buildChild(loaderNode, this.padding, y, null);
					nodes.push(loader);
					y = loader.layoutInfo.rect.maxY;
					lastProcessedIndex = loaderNodeIndex;
				}
				y += (collectionNodes.length - lastProcessedIndex - 1) * rowHeight;
				break;
			}
		}
		y -= this.gap;
		y += isEmptyOrLoading ? 0 : this.padding;
		this.contentSize = new $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec(this.virtualizer.visibleRect.width, y);
		return nodes;
	}
	isValid(node, y) {
		let cached = this.layoutNodes.get(node.key);
		return !this.invalidateEverything && !!cached && cached.node === node && y === cached.layoutInfo.rect.y && cached.layoutInfo.rect.intersects(this.validRect) && cached.validRect.containsRect(cached.layoutInfo.rect.intersection(this.requestedRect));
	}
	buildChild(node, x, y, parentKey) {
		if (this.isValid(node, y)) return this.layoutNodes.get(node.key);
		let layoutNode = this.buildNode(node, x, y);
		layoutNode.layoutInfo.parentKey = parentKey !== null && parentKey !== void 0 ? parentKey : null;
		layoutNode.layoutInfo.allowOverflow = true;
		this.layoutNodes.set(node.key, layoutNode);
		return layoutNode;
	}
	buildNode(node, x, y) {
		switch (node.type) {
			case "section": return this.buildSection(node, x, y);
			case "item": return this.buildItem(node, x, y);
			case "header": return this.buildSectionHeader(node, x, y);
			case "loader": return this.buildLoader(node, x, y);
			case "separator": return this.buildItem(node, x, y);
			default: throw new Error("Unsupported node type: " + node.type);
		}
	}
	buildLoader(node, x, y) {
		let rect = new $60423f92c7f9ad87$export$c79fc6492f3af13d(x, y, this.padding, 0);
		let layoutInfo = new $d7fd61009c21d0bb$export$7e0eeb9da702a085("loader", node.key, rect);
		rect.width = this.virtualizer.contentSize.width - this.padding - x;
		var _this_loaderHeight, _ref, _ref1;
		rect.height = node.props.isLoading ? (_ref1 = (_ref = (_this_loaderHeight = this.loaderHeight) !== null && _this_loaderHeight !== void 0 ? _this_loaderHeight : this.rowHeight) !== null && _ref !== void 0 ? _ref : this.estimatedRowHeight) !== null && _ref1 !== void 0 ? _ref1 : $61ef60fc9b1041f4$var$DEFAULT_HEIGHT : 0;
		return {
			layoutInfo,
			validRect: rect.intersection(this.requestedRect)
		};
	}
	buildSection(node, x, y) {
		let collection = this.virtualizer.collection;
		let width = this.virtualizer.visibleRect.width - this.padding;
		let rect = new $60423f92c7f9ad87$export$c79fc6492f3af13d(x, y, width - x, 0);
		let layoutInfo = new $d7fd61009c21d0bb$export$7e0eeb9da702a085(node.type, node.key, rect);
		let startY = y;
		let skipped = 0;
		let children = [];
		for (let child of $c5a24bc478652b5f$export$1005530eda016c13(node, collection)) {
			if (child.type === "content") continue;
			var _this_rowHeight, _ref;
			let rowHeight = ((_ref = (_this_rowHeight = this.rowHeight) !== null && _this_rowHeight !== void 0 ? _this_rowHeight : this.estimatedRowHeight) !== null && _ref !== void 0 ? _ref : $61ef60fc9b1041f4$var$DEFAULT_HEIGHT) + this.gap;
			if (y + rowHeight < this.requestedRect.y && !this.isValid(node, y)) {
				y += rowHeight;
				skipped++;
				continue;
			}
			let layoutNode = this.buildChild(child, x, y, layoutInfo.key);
			y = layoutNode.layoutInfo.rect.maxY + this.gap;
			children.push(layoutNode);
			if (y > this.requestedRect.maxY) {
				y += ([...$c5a24bc478652b5f$export$1005530eda016c13(node, collection)].length - (children.length + skipped)) * rowHeight;
				break;
			}
		}
		y -= this.gap;
		rect.height = y - startY;
		return {
			layoutInfo,
			children,
			validRect: layoutInfo.rect.intersection(this.requestedRect),
			node
		};
	}
	buildSectionHeader(node, x, y) {
		let width = this.virtualizer.visibleRect.width - this.padding;
		let rectHeight = this.headingHeight;
		let isEstimated = false;
		if (rectHeight == null) {
			let previousLayoutNode = this.layoutNodes.get(node.key);
			let previousLayoutInfo = previousLayoutNode === null || previousLayoutNode === void 0 ? void 0 : previousLayoutNode.layoutInfo;
			if (previousLayoutInfo) {
				let curNode = this.virtualizer.collection.getItem(node.key);
				let lastNode = this.lastCollection ? this.lastCollection.getItem(node.key) : null;
				rectHeight = previousLayoutInfo.rect.height;
				isEstimated = width !== previousLayoutInfo.rect.width || curNode !== lastNode || previousLayoutInfo.estimatedSize;
			} else {
				rectHeight = node.rendered ? this.estimatedHeadingHeight : 0;
				isEstimated = true;
			}
		}
		if (rectHeight == null) rectHeight = $61ef60fc9b1041f4$var$DEFAULT_HEIGHT;
		let headerRect = new $60423f92c7f9ad87$export$c79fc6492f3af13d(x, y, width - x, rectHeight);
		let header = new $d7fd61009c21d0bb$export$7e0eeb9da702a085("header", node.key, headerRect);
		header.estimatedSize = isEstimated;
		return {
			layoutInfo: header,
			children: [],
			validRect: header.rect.intersection(this.requestedRect),
			node
		};
	}
	buildItem(node, x, y) {
		let width = this.virtualizer.visibleRect.width - this.padding - x;
		let rectHeight = this.rowHeight;
		let isEstimated = false;
		if (rectHeight == null) {
			let previousLayoutNode = this.layoutNodes.get(node.key);
			if (previousLayoutNode) {
				rectHeight = previousLayoutNode.layoutInfo.rect.height;
				isEstimated = width !== previousLayoutNode.layoutInfo.rect.width || node !== previousLayoutNode.node || previousLayoutNode.layoutInfo.estimatedSize;
			} else {
				rectHeight = this.estimatedRowHeight;
				isEstimated = true;
			}
		}
		if (rectHeight == null) rectHeight = $61ef60fc9b1041f4$var$DEFAULT_HEIGHT;
		let rect = new $60423f92c7f9ad87$export$c79fc6492f3af13d(x, y, width, rectHeight);
		let layoutInfo = new $d7fd61009c21d0bb$export$7e0eeb9da702a085(node.type, node.key, rect);
		layoutInfo.estimatedSize = isEstimated;
		return {
			layoutInfo,
			children: [],
			validRect: layoutInfo.rect,
			node
		};
	}
	updateItemSize(key, size) {
		let layoutNode = this.layoutNodes.get(key);
		if (!layoutNode) return false;
		let collection = this.virtualizer.collection;
		let layoutInfo = layoutNode.layoutInfo;
		layoutInfo.estimatedSize = false;
		if (layoutInfo.rect.height !== size.height) {
			let newLayoutInfo = layoutInfo.copy();
			newLayoutInfo.rect.height = size.height;
			layoutNode.layoutInfo = newLayoutInfo;
			this.validRect.height = Math.min(this.validRect.height, layoutInfo.rect.y - this.validRect.y);
			this.requestedRect.height += newLayoutInfo.rect.height - layoutInfo.rect.height;
			this.updateLayoutNode(key, layoutInfo, newLayoutInfo);
			let node = layoutInfo.parentKey != null ? collection.getItem(layoutInfo.parentKey) : null;
			while (node) {
				this.updateLayoutNode(node.key, layoutInfo, newLayoutInfo);
				node = node.parentKey != null ? collection.getItem(node.parentKey) : null;
			}
			return true;
		}
		return false;
	}
	updateLayoutNode(key, oldLayoutInfo, newLayoutInfo) {
		let n = this.layoutNodes.get(key);
		if (n) {
			n.validRect = n.validRect.intersection(this.validRect);
			if (n.layoutInfo === oldLayoutInfo) n.layoutInfo = newLayoutInfo;
		}
	}
	getContentSize() {
		return this.contentSize;
	}
	getDropTargetFromPoint(x, y, isValidDropTarget) {
		x += this.virtualizer.visibleRect.x;
		y += this.virtualizer.visibleRect.y;
		let searchRect = new $60423f92c7f9ad87$export$c79fc6492f3af13d(x, Math.max(0, y - this.gap), 1, Math.max(1, this.gap * 2));
		let candidates = this.getVisibleLayoutInfos(searchRect);
		let key = null;
		let minDistance = Infinity;
		for (let candidate of candidates) {
			if (!candidate.rect.intersects(searchRect)) continue;
			let yDist = Math.abs(candidate.rect.y - y);
			let maxYDist = Math.abs(candidate.rect.maxY - y);
			let dist = Math.min(yDist, maxYDist);
			if (dist < minDistance) {
				minDistance = dist;
				key = candidate.key;
			}
		}
		if (key == null || this.virtualizer.collection.size === 0) return { type: "root" };
		let layoutInfo = this.getLayoutInfo(key);
		if (!layoutInfo) return null;
		let rect = layoutInfo.rect;
		let target = {
			type: "item",
			key: layoutInfo.key,
			dropPosition: "on"
		};
		if (!isValidDropTarget(target)) {
			if (y <= rect.y + rect.height / 2 && isValidDropTarget({
				...target,
				dropPosition: "before"
			})) target.dropPosition = "before";
			else if (isValidDropTarget({
				...target,
				dropPosition: "after"
			})) target.dropPosition = "after";
		} else if (y <= rect.y + 10 && isValidDropTarget({
			...target,
			dropPosition: "before"
		})) target.dropPosition = "before";
		else if (y >= rect.maxY - 10 && isValidDropTarget({
			...target,
			dropPosition: "after"
		})) target.dropPosition = "after";
		return target;
	}
	getDropTargetLayoutInfo(target) {
		let layoutInfo = this.getLayoutInfo(target.key);
		let rect;
		if (target.dropPosition === "before") rect = new $60423f92c7f9ad87$export$c79fc6492f3af13d(layoutInfo.rect.x, Math.max(0, layoutInfo.rect.y - this.dropIndicatorThickness / 2), layoutInfo.rect.width, this.dropIndicatorThickness);
		else if (target.dropPosition === "after") {
			let targetNode = this.collection.getItem(target.key);
			if (targetNode) {
				var _targetNode_level;
				let targetLevel = (_targetNode_level = targetNode.level) !== null && _targetNode_level !== void 0 ? _targetNode_level : 0;
				let currentKey = this.collection.getKeyAfter(target.key);
				while (currentKey != null) {
					let node = this.collection.getItem(currentKey);
					if (!node || node.level <= targetLevel) break;
					layoutInfo = this.getLayoutInfo(currentKey) || layoutInfo;
					currentKey = this.collection.getKeyAfter(currentKey);
				}
			}
			rect = new $60423f92c7f9ad87$export$c79fc6492f3af13d(layoutInfo.rect.x, layoutInfo.rect.maxY - this.dropIndicatorThickness / 2, layoutInfo.rect.width, this.dropIndicatorThickness);
		} else rect = layoutInfo.rect;
		return new $d7fd61009c21d0bb$export$7e0eeb9da702a085("dropIndicator", target.key + ":" + target.dropPosition, rect);
	}
	/**
	* Creates a new ListLayout with options. See the list of properties below for a description
	* of the options that can be provided.
	*/ constructor(options = {}) {
		super();
		var _options_rowHeight;
		this.rowHeight = (_options_rowHeight = options.rowHeight) !== null && _options_rowHeight !== void 0 ? _options_rowHeight : null;
		var _options_estimatedRowHeight;
		this.estimatedRowHeight = (_options_estimatedRowHeight = options.estimatedRowHeight) !== null && _options_estimatedRowHeight !== void 0 ? _options_estimatedRowHeight : null;
		var _options_headingHeight;
		this.headingHeight = (_options_headingHeight = options.headingHeight) !== null && _options_headingHeight !== void 0 ? _options_headingHeight : null;
		var _options_estimatedHeadingHeight;
		this.estimatedHeadingHeight = (_options_estimatedHeadingHeight = options.estimatedHeadingHeight) !== null && _options_estimatedHeadingHeight !== void 0 ? _options_estimatedHeadingHeight : null;
		var _options_loaderHeight;
		this.loaderHeight = (_options_loaderHeight = options.loaderHeight) !== null && _options_loaderHeight !== void 0 ? _options_loaderHeight : null;
		this.dropIndicatorThickness = options.dropIndicatorThickness || 2;
		this.gap = options.gap || 0;
		this.padding = options.padding || 0;
		this.layoutNodes = /* @__PURE__ */ new Map();
		this.rootNodes = [];
		this.lastCollection = null;
		this.invalidateEverything = false;
		this.validRect = new $60423f92c7f9ad87$export$c79fc6492f3af13d();
		this.requestedRect = new $60423f92c7f9ad87$export$c79fc6492f3af13d();
		this.contentSize = new $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec();
	}
};
function $61ef60fc9b1041f4$var$toArray(collection, predicate) {
	const result = [];
	for (const node of collection) if (predicate(node)) result.push(node);
	return result;
}
//#endregion
//#region ../../node_modules/@react-aria/virtualizer/dist/utils.mjs
var $ce415dc67314b753$var$cachedRTLResult = null;
function $ce415dc67314b753$export$faf7630257ad4304(recalculate = false) {
	if ($ce415dc67314b753$var$cachedRTLResult === null || recalculate) {
		const outerDiv = document.createElement("div");
		const outerStyle = outerDiv.style;
		outerStyle.width = "50px";
		outerStyle.height = "50px";
		outerStyle.overflow = "scroll";
		outerStyle.direction = "rtl";
		const innerDiv = document.createElement("div");
		const innerStyle = innerDiv.style;
		innerStyle.width = "100px";
		innerStyle.height = "100px";
		outerDiv.appendChild(innerDiv);
		document.body.appendChild(outerDiv);
		if (outerDiv.scrollLeft > 0) $ce415dc67314b753$var$cachedRTLResult = "positive-descending";
		else {
			outerDiv.scrollLeft = 1;
			if (outerDiv.scrollLeft === 0) $ce415dc67314b753$var$cachedRTLResult = "negative";
			else $ce415dc67314b753$var$cachedRTLResult = "positive-ascending";
		}
		document.body.removeChild(outerDiv);
		return $ce415dc67314b753$var$cachedRTLResult;
	}
	return $ce415dc67314b753$var$cachedRTLResult;
}
function $ce415dc67314b753$export$1389d168952b34b5(node, direction) {
	let { scrollLeft } = node;
	if (direction === "rtl") {
		let { scrollWidth, clientWidth } = node;
		switch ($ce415dc67314b753$export$faf7630257ad4304()) {
			case "negative":
				scrollLeft = -scrollLeft;
				break;
			case "positive-descending":
				scrollLeft = scrollWidth - clientWidth - scrollLeft;
				break;
		}
	}
	return scrollLeft;
}
//#endregion
//#region ../../node_modules/@react-aria/virtualizer/dist/ScrollView.mjs
init_build_shims();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
function $44a6ee657928b002$export$2ea0c4974da4731b(props, ref) {
	let { contentSize, onVisibleRectChange, innerStyle, onScrollStart, onScrollEnd, scrollDirection = "both", ...otherProps } = props;
	let state = (0, import_react.useRef)({
		scrollTop: 0,
		scrollLeft: 0,
		scrollEndTime: 0,
		scrollTimeout: null,
		width: 0,
		height: 0,
		isScrolling: false
	}).current;
	let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
	let [isScrolling, setScrolling] = (0, import_react.useState)(false);
	$e9faafb641e167db$export$90fc3a17d93f704c(ref, "scroll", (0, import_react.useCallback)((e) => {
		if ($d4ee10de306f2510$export$e58f029f0fbfdb29(e) !== e.currentTarget) return;
		if (props.onScroll) props.onScroll(e);
		(0, import_react_dom.flushSync)(() => {
			let scrollTop = e.currentTarget.scrollTop;
			let scrollLeft = $ce415dc67314b753$export$1389d168952b34b5(e.currentTarget, direction);
			state.scrollTop = Math.max(0, Math.min(scrollTop, contentSize.height - state.height));
			state.scrollLeft = Math.max(0, Math.min(scrollLeft, contentSize.width - state.width));
			onVisibleRectChange(new $60423f92c7f9ad87$export$c79fc6492f3af13d(state.scrollLeft, state.scrollTop, state.width, state.height));
			if (!state.isScrolling) {
				state.isScrolling = true;
				setScrolling(true);
				window.dispatchEvent(new Event("tk.disconnect-observer"));
				if (onScrollStart) onScrollStart();
			}
			let now = Date.now();
			if (state.scrollEndTime <= now + 50) {
				state.scrollEndTime = now + 300;
				if (state.scrollTimeout != null) clearTimeout(state.scrollTimeout);
				state.scrollTimeout = setTimeout(() => {
					state.isScrolling = false;
					setScrolling(false);
					state.scrollTimeout = null;
					window.dispatchEvent(new Event("tk.connect-observer"));
					if (onScrollEnd) onScrollEnd();
				}, 300);
			}
		});
	}, [
		props,
		direction,
		state,
		contentSize,
		onVisibleRectChange,
		onScrollStart,
		onScrollEnd
	]));
	(0, import_react.useEffect)(() => {
		return () => {
			if (state.scrollTimeout != null) clearTimeout(state.scrollTimeout);
			if (state.isScrolling) window.dispatchEvent(new Event("tk.connect-observer"));
		};
	}, []);
	let isUpdatingSize = (0, import_react.useRef)(false);
	let updateSize = (0, import_react.useCallback)((flush) => {
		let dom = ref.current;
		if (!dom || isUpdatingSize.current) return;
		isUpdatingSize.current = true;
		Object.getOwnPropertyNames(window.HTMLElement.prototype).includes("clientWidth");
		Object.getOwnPropertyNames(window.HTMLElement.prototype).includes("clientHeight");
		let clientWidth = dom.clientWidth;
		let clientHeight = dom.clientHeight;
		let w = clientWidth;
		let h = clientHeight;
		if (state.width !== w || state.height !== h) {
			state.width = w;
			state.height = h;
			flush(() => {
				onVisibleRectChange(new $60423f92c7f9ad87$export$c79fc6492f3af13d(state.scrollLeft, state.scrollTop, w, h));
			});
			if (clientWidth !== dom.clientWidth || clientHeight !== dom.clientHeight) {
				state.width = dom.clientWidth;
				state.height = dom.clientHeight;
				flush(() => {
					onVisibleRectChange(new $60423f92c7f9ad87$export$c79fc6492f3af13d(state.scrollLeft, state.scrollTop, state.width, state.height));
				});
			}
		}
		isUpdatingSize.current = false;
	}, [
		ref,
		state,
		onVisibleRectChange
	]);
	let updateSizeEvent = $8ae05eaa5c114e9c$export$7f54fc3180508a52(updateSize);
	let lastContentSize = (0, import_react.useRef)(null);
	let [update, setUpdate] = (0, import_react.useState)({});
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		if (!isUpdatingSize.current && (lastContentSize.current == null || !contentSize.equals(lastContentSize.current))) if (typeof IS_REACT_ACT_ENVIRONMENT === "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== "undefined") {
			setUpdate({});
			lastContentSize.current = contentSize;
			return;
		} else queueMicrotask(() => updateSizeEvent(import_react_dom.flushSync));
		lastContentSize.current = contentSize;
	});
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		updateSizeEvent((fn) => fn());
	}, [update]);
	$9daab02d461809db$export$683480f191c0e3ea({
		ref,
		box: "border-box",
		onResize: (0, import_react.useCallback)(() => {
			updateSize(import_react_dom.flushSync);
		}, [updateSize])
	});
	let style = {
		padding: 0,
		...otherProps.style
	};
	if (scrollDirection === "horizontal") {
		style.overflowX = "auto";
		style.overflowY = "hidden";
	} else if (scrollDirection === "vertical" || contentSize.width === state.width) {
		style.overflowY = "auto";
		style.overflowX = "hidden";
	} else style.overflow = "auto";
	innerStyle = {
		width: Number.isFinite(contentSize.width) ? contentSize.width : void 0,
		height: Number.isFinite(contentSize.height) ? contentSize.height : void 0,
		pointerEvents: isScrolling ? "none" : "auto",
		position: "relative",
		...innerStyle
	};
	return {
		isScrolling,
		scrollViewProps: {
			...otherProps,
			style
		},
		contentProps: {
			role: "presentation",
			style: innerStyle
		}
	};
}
//#endregion
//#region ../../node_modules/@react-aria/virtualizer/dist/useVirtualizerItem.mjs
function $47736c1e63ba1c6d$export$1da781778207e0a2(options) {
	let { layoutInfo, virtualizer, ref } = options;
	let key = layoutInfo === null || layoutInfo === void 0 ? void 0 : layoutInfo.key;
	let updateSize = (0, import_react.useCallback)(() => {
		if (key != null && ref.current) {
			let size = $47736c1e63ba1c6d$var$getSize(ref.current);
			virtualizer.updateItemSize(key, size);
		}
	}, [
		virtualizer,
		key,
		ref
	]);
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		if (layoutInfo === null || layoutInfo === void 0 ? void 0 : layoutInfo.estimatedSize) updateSize();
	});
	return { updateSize };
}
function $47736c1e63ba1c6d$var$getSize(node) {
	let height = node.style.height;
	node.style.height = "";
	let size = new $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec(node.scrollWidth, node.scrollHeight);
	node.style.height = height;
	return size;
}
//#endregion
//#region ../../node_modules/@react-aria/virtualizer/dist/VirtualizerItem.mjs
function $ccf8a0a04e4175ae$export$6796df8ba7398521(props) {
	let { style, className, layoutInfo, virtualizer, parent, children } = props;
	let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
	let ref = (0, import_react.useRef)(null);
	$47736c1e63ba1c6d$export$1da781778207e0a2({
		layoutInfo,
		virtualizer,
		ref
	});
	return /* @__PURE__ */ import_react.createElement("div", {
		role: "presentation",
		ref,
		className,
		style: {
			...$ccf8a0a04e4175ae$export$1481e64fbe01b8b3(layoutInfo, direction, parent),
			...style
		}
	}, children);
}
var $ccf8a0a04e4175ae$var$cache = /* @__PURE__ */ new WeakMap();
function $ccf8a0a04e4175ae$export$1481e64fbe01b8b3(layoutInfo, dir, parent) {
	let xProperty = dir === "rtl" ? "right" : "left";
	let cached = $ccf8a0a04e4175ae$var$cache.get(layoutInfo);
	if (cached && cached[xProperty] != null) {
		if (!parent) return cached;
		let top = layoutInfo.rect.y - parent.rect.y;
		let x = layoutInfo.rect.x - parent.rect.x;
		if (cached.top === top && cached[xProperty] === x) return cached;
	}
	let rectStyles = {
		top: layoutInfo.rect.y - (parent && !(parent.allowOverflow && layoutInfo.isSticky) ? parent.rect.y : 0),
		[xProperty]: layoutInfo.rect.x - (parent && !(parent.allowOverflow && layoutInfo.isSticky) ? parent.rect.x : 0),
		width: layoutInfo.rect.width,
		height: layoutInfo.rect.height
	};
	Object.entries(rectStyles).forEach(([key, value]) => {
		if (!Number.isFinite(value)) rectStyles[key] = void 0;
	});
	var _layoutInfo_transform;
	let style = {
		position: layoutInfo.isSticky ? "sticky" : "absolute",
		display: layoutInfo.isSticky ? "inline-block" : void 0,
		overflow: layoutInfo.allowOverflow ? "visible" : "hidden",
		opacity: layoutInfo.opacity,
		zIndex: layoutInfo.zIndex,
		transform: (_layoutInfo_transform = layoutInfo.transform) !== null && _layoutInfo_transform !== void 0 ? _layoutInfo_transform : void 0,
		contain: "size layout style",
		...rectStyles
	};
	$ccf8a0a04e4175ae$var$cache.set(layoutInfo, style);
	return style;
}
//#endregion
//#region ../../node_modules/react-aria-components/dist/Virtualizer.mjs
var $ce3a951440fc273f$var$VirtualizerContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var $ce3a951440fc273f$var$LayoutContext = /* @__PURE__ */ (0, import_react.createContext)(null);
function $ce3a951440fc273f$export$89be5a243e59c4b2(props) {
	let { children, layout: layoutProp, layoutOptions } = props;
	let layout = (0, import_react.useMemo)(() => typeof layoutProp === "function" ? new layoutProp() : layoutProp, [layoutProp]);
	let renderer = (0, import_react.useMemo)(() => ({
		isVirtualized: true,
		layoutDelegate: layout,
		dropTargetDelegate: layout.getDropTargetFromPoint ? layout : void 0,
		CollectionRoot: $ce3a951440fc273f$var$CollectionRoot,
		CollectionBranch: $ce3a951440fc273f$var$CollectionBranch
	}), [layout]);
	return /* @__PURE__ */ import_react.createElement($7135fc7d473fd974$export$4feb769f8ddf26c5.Provider, { value: renderer }, /* @__PURE__ */ import_react.createElement($ce3a951440fc273f$var$LayoutContext.Provider, { value: {
		layout,
		layoutOptions
	} }, children));
}
function $ce3a951440fc273f$var$CollectionRoot({ collection, persistedKeys, scrollRef, renderDropIndicator }) {
	var _layout_useLayoutOptions;
	let { layout, layoutOptions } = (0, import_react.useContext)($ce3a951440fc273f$var$LayoutContext);
	let layoutOptions2 = (_layout_useLayoutOptions = layout.useLayoutOptions) === null || _layout_useLayoutOptions === void 0 ? void 0 : _layout_useLayoutOptions.call(layout);
	let state = $fc0b13b484ac1194$export$1505db82fe357e65({
		layout,
		collection,
		renderView: (type, item) => {
			var _item_render;
			return item === null || item === void 0 ? void 0 : (_item_render = item.render) === null || _item_render === void 0 ? void 0 : _item_render.call(item, item);
		},
		onVisibleRectChange(rect) {
			let element = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
			if (element) {
				element.scrollLeft = rect.x;
				element.scrollTop = rect.y;
			}
		},
		persistedKeys,
		layoutOptions: (0, import_react.useMemo)(() => {
			if (layoutOptions && layoutOptions2) return {
				...layoutOptions,
				...layoutOptions2
			};
			return layoutOptions || layoutOptions2;
		}, [layoutOptions, layoutOptions2])
	});
	let { contentProps } = $44a6ee657928b002$export$2ea0c4974da4731b({
		onVisibleRectChange: state.setVisibleRect,
		contentSize: state.contentSize,
		onScrollStart: state.startScrolling,
		onScrollEnd: state.endScrolling
	}, scrollRef);
	return /* @__PURE__ */ import_react.createElement("div", contentProps, /* @__PURE__ */ import_react.createElement($ce3a951440fc273f$var$VirtualizerContext.Provider, { value: state }, $ce3a951440fc273f$var$renderChildren(null, state.visibleViews, renderDropIndicator)));
}
function $ce3a951440fc273f$var$CollectionBranch({ parent, renderDropIndicator }) {
	let parentView = (0, import_react.useContext)($ce3a951440fc273f$var$VirtualizerContext).virtualizer.getVisibleView(parent.key);
	return $ce3a951440fc273f$var$renderChildren(parentView, Array.from(parentView.children), renderDropIndicator);
}
function $ce3a951440fc273f$var$renderChildren(parent, children, renderDropIndicator) {
	return children.map((view) => $ce3a951440fc273f$var$renderWrapper(parent, view, renderDropIndicator));
}
function $ce3a951440fc273f$var$renderWrapper(parent, reusableView, renderDropIndicator) {
	let rendered = /* @__PURE__ */ import_react.createElement($ccf8a0a04e4175ae$export$6796df8ba7398521, {
		key: reusableView.key,
		layoutInfo: reusableView.layoutInfo,
		virtualizer: reusableView.virtualizer,
		parent: parent === null || parent === void 0 ? void 0 : parent.layoutInfo
	}, reusableView.rendered);
	let { collection, layout } = reusableView.virtualizer;
	let node = reusableView.content;
	if ((node === null || node === void 0 ? void 0 : node.type) === "item" && renderDropIndicator && layout.getDropTargetLayoutInfo) rendered = /* @__PURE__ */ import_react.createElement(import_react.Fragment, { key: reusableView.key }, $ce3a951440fc273f$var$renderDropIndicatorWrapper(parent, reusableView, {
		type: "item",
		key: reusableView.content.key,
		dropPosition: "before"
	}, renderDropIndicator), rendered, $7135fc7d473fd974$export$2dbbd341daed716d(collection, node, (target) => $ce3a951440fc273f$var$renderDropIndicatorWrapper(parent, reusableView, target, renderDropIndicator)));
	return rendered;
}
function $ce3a951440fc273f$var$renderDropIndicatorWrapper(parent, reusableView, target, renderDropIndicator) {
	let indicator = renderDropIndicator(target);
	if (indicator) {
		let layoutInfo = reusableView.virtualizer.layout.getDropTargetLayoutInfo(target);
		indicator = /* @__PURE__ */ import_react.createElement($ccf8a0a04e4175ae$export$6796df8ba7398521, {
			layoutInfo,
			virtualizer: reusableView.virtualizer,
			parent: parent === null || parent === void 0 ? void 0 : parent.layoutInfo
		}, indicator);
	}
	return indicator;
}
//#endregion
//#region src/components/mobile/FloatingActionBar.tsx
var import_jsx_runtime = require_jsx_runtime();
function FloatingActionBar({ style, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			backgroundColor: theme.floatingActionBarBackground,
			color: theme.floatingActionBarText,
			position: "fixed",
			bottom: 10,
			margin: "0 10px",
			width: "95vw",
			height: 60,
			zIndex: 100,
			borderRadius: 8,
			border: `1px solid ${theme.floatingActionBarBorder}`,
			...style
		},
		children
	});
}
var getTextStyle = ({ isPreview }) => ({
	...styles.text,
	fontSize: 14,
	...isPreview ? {
		fontStyle: "italic",
		color: theme.pageTextLight
	} : {}
});
var getScheduleIconStyle = ({ isPreview }) => ({
	width: 12,
	height: 12,
	marginRight: 5,
	color: isPreview ? theme.pageTextLight : theme.menuItemText
});
function TransactionListItem({ showRunningBalance, runningBalance, onPress, onLongPress, transaction, ...itemProps }) {
	const { t } = useTranslation();
	const { data: { list: categories } = { list: [] } } = useCategories();
	const { data: payee } = usePayee(transaction?.payee);
	const displayPayee = useDisplayPayee({ transaction });
	const account = useAccount(transaction?.account || "");
	const transferAccount = useAccount(payee?.transfer_acct || "");
	const isPreview = isPreviewId(transaction?.id || "");
	const newTransactions = useSelector((state) => state.transactions.newTransactions);
	const { longPressProps } = $8a26561d2877236e$export$c24ed0104d07eab9({
		accessibilityDescription: "Long press to select multiple transactions",
		onLongPress: () => {
			if (isPreview) return;
			onLongPress(transaction);
		}
	});
	const { pressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({ onPress: () => {
		onPress(transaction);
	} });
	if (!transaction) return null;
	const { id, amount, category: categoryId, cleared: isCleared, reconciled: isReconciled, is_parent: isParent, is_child: isChild, notes, forceUpcoming } = transaction;
	const previewStatus = forceUpcoming ? "upcoming" : categoryId;
	const isAdded = newTransactions.includes(id);
	const categoryName = lookupName(categories, categoryId);
	const specialCategory = account?.offbudget ? t("Off budget") : transferAccount && !transferAccount.offbudget ? t("Transfer") : isParent ? t("Split") : null;
	const prettyCategory = specialCategory || categoryName;
	const textStyle = getTextStyle({ isPreview });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($f1ab8c75478c6f73$export$3351871ee4b288b8, {
		...$3ef42575df84b30b$export$9d1611c77c2fe928(pressProps, longPressProps),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			...itemProps,
			style: {
				userSelect: "none",
				height: 60,
				width: "100%",
				borderRadius: 0,
				...itemProps.isSelected ? {
					borderWidth: "0 0 0 4px",
					borderColor: theme.mobileTransactionSelected,
					borderStyle: "solid"
				} : {
					borderWidth: "0 0 1px 0",
					borderColor: theme.tableBorder,
					borderStyle: "solid"
				},
				...isPreview ? { backgroundColor: theme.tableRowHeaderBackground } : { backgroundColor: theme.tableBackground }
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					flex: 1,
					alignItems: "center",
					justifyContent: "space-between",
					padding: "0 4px"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: { flex: 1 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: {
								flexDirection: "row",
								alignItems: "center"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayeeIcons, {
								transaction,
								transferAccount
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextOneLine, {
								style: {
									...textStyle,
									fontWeight: isAdded ? "600" : "400",
									...!displayPayee && !isPreview ? {
										color: theme.pageTextLight,
										fontStyle: "italic"
									} : {}
								},
								children: displayPayee || t("(No payee)")
							})]
						}),
						isPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, {
							status: previewStatus,
							isSplit: isParent || isChild
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: {
								flexDirection: "row",
								alignItems: "center",
								marginTop: 3
							},
							children: [
								isReconciled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgLockClosed, { style: {
									width: 11,
									height: 11,
									color: theme.noticeTextLight,
									marginRight: 5
								} }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCheckCircle1, { style: {
									width: 11,
									height: 11,
									color: isCleared ? theme.noticeTextLight : theme.pageTextSubdued,
									marginRight: 5
								} }),
								(isParent || isChild) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgSplit, { style: {
									width: 12,
									height: 12,
									marginRight: 5
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextOneLine, {
									style: {
										fontSize: 11,
										marginTop: 1,
										fontWeight: "400",
										color: prettyCategory ? theme.tableText : theme.menuItemTextSelected,
										fontStyle: specialCategory || !prettyCategory ? "italic" : void 0,
										textAlign: "left"
									},
									children: prettyCategory || t("Uncategorized")
								})
							]
						}),
						notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextOneLine, {
							style: {
								fontSize: 11,
								marginTop: 4,
								fontWeight: "400",
								color: theme.tableText,
								textAlign: "left",
								opacity: .85
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesTagFormatter, { notes })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						justifyContent: "center",
						alignItems: "flex-end"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							...styles.tnum,
							...makeAmountFullStyle(amount, {
								positiveColor: theme.tableText,
								negativeColor: theme.tableText,
								zeroColor: theme.numberNeutral
							}),
							...textStyle
						},
						children: integerToCurrency(amount)
					}), showRunningBalance && runningBalance !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							fontSize: 11,
							fontWeight: "400",
							...styles.tnum,
							...makeAmountFullStyle(runningBalance, {
								positiveColor: theme.numberPositive,
								negativeColor: theme.numberNegative,
								zeroColor: theme.numberNeutral
							})
						},
						children: integerToCurrency(runningBalance)
					})]
				})]
			})
		})
	});
}
function PayeeIcons({ transaction, transferAccount }) {
	const { id, schedule: scheduleId } = transaction;
	const { isLoading: isSchedulesLoading, schedules = [] } = useCachedSchedules();
	const isPreview = isPreviewId(id);
	const schedule = schedules.find((s) => s.id === scheduleId);
	const isScheduleRecurring = schedule && schedule._date && typeof schedule._date === "object" && !!schedule._date.frequency;
	if (isSchedulesLoading) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [schedule && (isScheduleRecurring ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgArrowsSynchronize, { style: getScheduleIconStyle({ isPreview }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCalendar3, { style: getScheduleIconStyle({ isPreview }) })), transferAccount && (transaction.amount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgLeftArrow2, { style: {
		width: 12,
		height: 12,
		marginRight: 5
	} }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgRightArrow2, { style: {
		width: 12,
		height: 12,
		marginRight: 5
	} }))] });
}
//#endregion
//#region src/components/mobile/transactions/TransactionList.tsx
var NOTIFICATION_BOTTOM_INSET = 75;
function Loading({ style, "aria-label": ariaLabel }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		"aria-label": ariaLabel || t("Loading..."),
		style: {
			backgroundColor: theme.mobilePageBackground,
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			...style
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLoading, {
			width: 25,
			height: 25
		})
	});
}
function TransactionList({ isLoading, transactions, showRunningBalances, runningBalances, onOpenTransaction, isLoadingMore, onLoadMore, showMakeTransfer = false }) {
	const locale = useLocale();
	const { t } = useTranslation();
	const sections = (0, import_react.useMemo)(() => {
		const sections = [];
		transactions.forEach((transaction) => {
			if (sections.length === 0 || transaction.date !== sections[sections.length - 1].date) sections.push({
				id: `${isPreviewId(transaction.id) ? "preview/" : ""}${transaction.date}`,
				date: transaction.date,
				transactions: []
			});
			sections[sections.length - 1].transactions.push(transaction);
		});
		return sections;
	}, [transactions]);
	const dispatchSelected = useSelectedDispatch();
	const selectedTransactions = useSelectedItems();
	const onTransactionPress = (0, import_react.useCallback)((transaction, isLongPress = false) => {
		if (!isPreviewId(transaction.id) && (isLongPress || selectedTransactions.size > 0)) dispatchSelected({
			type: "select",
			id: transaction.id
		});
		else onOpenTransaction?.(transaction);
	}, [
		dispatchSelected,
		onOpenTransaction,
		selectedTransactions
	]);
	useScrollListener((0, import_react.useCallback)(({ hasScrolledToEnd }) => {
		if (hasScrolledToEnd("down", 100)) onLoadMore?.();
	}, [onLoadMore]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: { flex: 1 },
		children: [
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {
				style: {
					flex: "none",
					paddingBottom: 8
				},
				"aria-label": t("Loading transactions...")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: { flex: 1 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)($ce3a951440fc273f$export$89be5a243e59c4b2, {
					layout: $61ef60fc9b1041f4$export$cacbb3924155d68e,
					layoutOptions: {
						estimatedRowHeight: 60,
						padding: 0
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)($eed445e0843c11d0$export$41f133550aa26f48, {
						"aria-label": t("Transaction list"),
						selectionMode: selectedTransactions.size > 0 ? "multiple" : "single",
						style: {
							flex: 1,
							overflow: "auto"
						},
						selectedKeys: selectedTransactions,
						dependencies: [
							selectedTransactions,
							locale,
							onTransactionPress,
							runningBalances,
							showRunningBalances,
							t
						],
						renderEmptyState: () => !isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: theme.mobilePageBackground
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: { fontSize: 15 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "No transactions" })
							})
						}),
						items: sections,
						children: (section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)($eed445e0843c11d0$export$dca12b0bb56e4fc, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)($72a5793c14baf454$export$8b251419efc915eb, {
							style: {
								...styles.smallText,
								backgroundColor: theme.pageBackground,
								color: theme.tableHeaderText,
								display: "flex",
								justifyContent: "center",
								paddingBottom: 4,
								paddingTop: 4,
								position: "sticky",
								top: "0",
								width: "100%",
								zIndex: 10
							},
							children: format(section.date, "MMMM dd, yyyy", locale)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)($e1995378a142960e$export$fb8073518f34e6ec, {
							items: section.transactions.filter((t) => !isPreviewId(t.id) || !t.is_child),
							children: (transaction) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)($eed445e0843c11d0$export$a11e76429ed99b4, {
								textValue: transaction.id,
								value: transaction,
								children: (itemProps) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListItem, {
									...itemProps,
									showRunningBalance: showRunningBalances,
									runningBalance: runningBalances?.get(transaction.id),
									transaction,
									onPress: (trans) => onTransactionPress(trans),
									onLongPress: (trans) => onTransactionPress(trans, true)
								})
							})
						})] })
					})
				})
			}),
			isLoadingMore && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {
				"aria-label": t("Loading more transactions..."),
				style: { height: 60 }
			}),
			selectedTransactions.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedTransactionsFloatingActionBar, {
				transactions,
				showMakeTransfer
			})
		]
	});
}
function SelectedTransactionsFloatingActionBar({ transactions, style = {}, showMakeTransfer }) {
	const { t } = useTranslation();
	const editMenuTriggerRef = (0, import_react.useRef)(null);
	const [isEditMenuOpen, setIsEditMenuOpen] = (0, import_react.useState)(false);
	const moreOptionsMenuTriggerRef = (0, import_react.useRef)(null);
	const [isMoreOptionsMenuOpen, setIsMoreOptionsMenuOpen] = (0, import_react.useState)(false);
	const getMenuItemStyle = (0, import_react.useCallback)((item) => ({
		...styles.mobileMenuItem,
		color: theme.mobileHeaderText,
		...item.disabled === true && { color: theme.buttonBareDisabledText },
		...item.name === "delete" && { color: theme.errorTextMenu }
	}), []);
	const selectedTransactions = useSelectedItems();
	const selectedTransactionsArray = Array.from(selectedTransactions);
	const dispatchSelected = useSelectedDispatch();
	const buttonProps = (0, import_react.useMemo)(() => ({
		style: {
			...styles.mobileMenuItem,
			color: "currentColor",
			height: styles.mobileMinHeight
		},
		activeStyle: { color: "currentColor" },
		hoveredStyle: { color: "currentColor" }
	}), []);
	const allTransactionsAreLinked = (0, import_react.useMemo)(() => {
		return transactions.filter((t) => selectedTransactions.has(t.id)).every((t) => t.schedule);
	}, [transactions, selectedTransactions]);
	const isMoreThanOne = selectedTransactions.size > 1;
	const { showUndoNotification } = useUndo();
	const { onBatchEdit, onBatchDuplicate, onBatchDelete, onBatchLinkSchedule, onBatchUnlinkSchedule, onSetTransfer, onMerge } = useTransactionBatchActions();
	const navigate = useNavigate();
	const { data: accounts = [] } = useAccounts();
	const accountsById = (0, import_react.useMemo)(() => groupById(accounts), [accounts]);
	const { data: payees = [] } = usePayees();
	const payeesById = (0, import_react.useMemo)(() => groupById(payees), [payees]);
	const { data: { list: categoriesById } = { list: {} } } = useCategoriesById();
	const dispatch = useDispatch();
	(0, import_react.useEffect)(() => {
		dispatch(setNotificationInset({ inset: { bottom: NOTIFICATION_BOTTOM_INSET } }));
		return () => {
			dispatch(setNotificationInset(null));
		};
	}, [dispatch]);
	const twoTransactions = (0, import_react.useMemo)(() => {
		if (selectedTransactionsArray.length !== 2) return;
		const [a, b] = selectedTransactionsArray.map((id) => transactions.find((t) => t.id === id));
		if (!a || !b) return;
		return [a, b];
	}, [selectedTransactionsArray, transactions]);
	const canBeTransfer = (0, import_react.useMemo)(() => {
		if (!twoTransactions) return false;
		const [fromTrans, toTrans] = twoTransactions;
		return validForTransfer(fromTrans, toTrans);
	}, [twoTransactions]);
	const canMerge = (0, import_react.useMemo)(() => {
		return Boolean(twoTransactions && twoTransactions[0].amount === twoTransactions[1].amount);
	}, [twoTransactions]);
	const moreOptionsMenuItems = [
		{
			name: "duplicate",
			text: t("Duplicate")
		},
		{
			name: allTransactionsAreLinked ? "unlink-schedule" : "link-schedule",
			text: allTransactionsAreLinked ? t("Unlink schedule") : t("Link schedule")
		},
		{
			name: "delete",
			text: t("Delete")
		},
		{
			name: "merge",
			text: t("Merge"),
			disabled: !canMerge
		}
	];
	if (showMakeTransfer) moreOptionsMenuItems.splice(2, 0, {
		name: "transfer",
		text: t("Make transfer"),
		disabled: !canBeTransfer
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActionBar, {
		style,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				flex: 1,
				padding: 8,
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-start"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "bare",
					...buttonProps,
					style: {
						...buttonProps.style,
						marginRight: 4
					},
					onPress: () => {
						if (selectedTransactions.size > 0) dispatchSelected({ type: "select-none" });
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgDelete, {
						width: 10,
						height: 10
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
					style: styles.mediumText,
					children: [
						selectedTransactions.size,
						" ",
						isMoreThanOne ? "transactions" : "transaction",
						" selected"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-end",
					gap: 4
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "bare",
						ref: editMenuTriggerRef,
						"aria-label": t("Edit fields"),
						onPress: () => {
							setIsEditMenuOpen(true);
						},
						...buttonProps,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Edit" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
						triggerRef: editMenuTriggerRef,
						isOpen: isEditMenuOpen,
						onOpenChange: () => setIsEditMenuOpen(false),
						style: { width: 200 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							getItemStyle: getMenuItemStyle,
							style: { backgroundColor: theme.floatingActionBarBackground },
							onMenuSelect: (name) => {
								onBatchEdit?.({
									name,
									ids: selectedTransactionsArray,
									onSuccess: (ids, name, value, mode) => {
										let displayValue;
										switch (name) {
											case "account":
												displayValue = accountsById[String(value)]?.name ?? value;
												break;
											case "category":
												displayValue = categoriesById[String(value)]?.name ?? value;
												break;
											case "payee":
												displayValue = payeesById[String(value)]?.name ?? value;
												break;
											case "amount":
												displayValue = Number.isNaN(Number(value)) ? value : integerToCurrency(Number(value));
												break;
											case "notes":
												displayValue = `${mode} with ${String(value)}`;
												break;
											default:
												displayValue = value;
												break;
										}
										showUndoNotification({
											message: `Successfully updated ${name} of ${ids.length} transaction${ids.length > 1 ? "s" : ""} to [${String(displayValue)}](#${String(displayValue)}).`,
											messageActions: { [String(displayValue)]: () => {
												switch (name) {
													case "account":
														navigate(`/accounts/${String(value)}`);
														break;
													case "category":
														navigate(`/categories/${String(value)}`);
														break;
													case "payee":
														navigate(`/payees`);
														break;
													default: break;
												}
											} }
										});
									}
								});
								setIsEditMenuOpen(false);
							},
							items: [
								{
									name: "account",
									text: t("Account")
								},
								{
									name: "payee",
									text: t("Payee")
								},
								{
									name: "notes",
									text: t("Notes")
								},
								{
									name: "category",
									text: t("Category")
								},
								{
									name: "cleared",
									text: t("Cleared")
								}
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "bare",
						ref: moreOptionsMenuTriggerRef,
						"aria-label": t("More options"),
						onPress: () => {
							setIsMoreOptionsMenuOpen(true);
						},
						...buttonProps,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgDotsHorizontalTriple, {
							width: 16,
							height: 16,
							style: { color: "currentColor" }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
						triggerRef: moreOptionsMenuTriggerRef,
						isOpen: isMoreOptionsMenuOpen,
						onOpenChange: () => setIsMoreOptionsMenuOpen(false),
						style: { width: 200 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							getItemStyle: getMenuItemStyle,
							style: { backgroundColor: theme.floatingActionBarBackground },
							onMenuSelect: (type) => {
								if (type === "duplicate") onBatchDuplicate?.({
									ids: selectedTransactionsArray,
									onSuccess: (ids) => {
										showUndoNotification({ message: t("Successfully duplicated {{count}} transactions.", { count: ids.length }) });
									}
								});
								else if (type === "link-schedule") onBatchLinkSchedule?.({
									ids: selectedTransactionsArray,
									onSuccess: (ids, schedule) => {
										showUndoNotification({ message: t("Successfully linked {{count}} transactions to {{schedule}}.", {
											count: ids.length,
											schedule: schedule.name
										}) });
									}
								});
								else if (type === "unlink-schedule") onBatchUnlinkSchedule?.({
									ids: selectedTransactionsArray,
									onSuccess: (ids) => {
										showUndoNotification({ message: t("Successfully unlinked {{count}} transactions from their respective schedules.", { count: ids.length }) });
									}
								});
								else if (type === "delete") onBatchDelete?.({
									ids: selectedTransactionsArray,
									onSuccess: (ids) => {
										showUndoNotification({
											type: "warning",
											message: t("Successfully deleted {{count}} transactions.", { count: ids.length })
										});
									}
								});
								else if (type === "transfer") onSetTransfer?.(selectedTransactionsArray, payees, (ids) => showUndoNotification({ message: t("Successfully marked {{count}} transactions as transfer.", { count: ids.length }) }));
								else if (type === "merge") onMerge?.(selectedTransactionsArray, () => showUndoNotification({ message: t("Successfully merged transactions") }));
								setIsMoreOptionsMenuOpen(false);
							},
							items: moreOptionsMenuItems
						})
					})
				]
			})]
		})
	});
}
//#endregion
export { $ce3a951440fc273f$export$89be5a243e59c4b2 as n, $61ef60fc9b1041f4$export$cacbb3924155d68e as r, TransactionList as t };

//# sourceMappingURL=TransactionList.BmRfHt1M.chunk.js.map