import { l as __toESM, n as require_jsx_runtime, r as require_react, t as theme } from "./theme.LZxTPVqa.chunk.js";
import { C as css, Ft as useSyncAndDownloadMutation, G as pushModal, Jr as sendCatch, Kr as listen, Kt as useDispatch, L as sync, Ln as tsToRelativeTime, Lt as useUpdateAccountMutation, Nt as useMoveAccountMutation, O as markAccountRead, Pt as useReopenAccountMutation, Tn as groupById, U as openAccountCloseModal, V as collapseModals, Zr as getUndoState, b as styles, ii as useTranslation, oi as Trans, on as useAccounts, q as replaceModal, qr as send, qt as useSelector, rt as closeBudget, tn as addNotification, w as cx, y as useSyncedPref } from "./extends.opUJhDAp.chunk.js";
import { $a as SvgBookmark, $o as SpaceBetween, A as DisplayPayeeProvider, As as $7252cd45fc48c07c$export$78bf638634500fa5, Bl as useSaveCategoryGroupMutation, Bn as accountBalance, Br as subMonths, Cl as useSpring, Cs as $67560de7c78cb232$export$aef80212ac99c003, Ds as $7252cd45fc48c07c$export$6ca6700462636d0b, Ei as SvgViewShow, En as useAccount, Es as $7252cd45fc48c07c$export$49bac5d6d4b352ea, Fc as $cc38e7bd3fc7b213$export$2bb74740c4e19def, Fl as useDeleteCategoryMutation, Fs as $7252cd45fc48c07c$export$e1d41611756c6326, Ft as makeAmountGrey, Ga as SvgCheveronDown, Gn as categoryBalanceCleared, Gt as getNormalisedString, Hn as accountBalanceUncleared, I as usePayees, Il as useMoveCategoryGroupMutation, Is as $7252cd45fc48c07c$export$f2be18a910c0caa6, Ji as SvgCalendar, Jn as envelopeBudget, Jo as useResponsive, Jr as aqlQuery, Kn as categoryBalanceUncleared, Ll as useMoveCategoryMutation, Ln as CellValue, Lt as prewarmMonth, Mc as $ef06256079686ba0$export$f8aeda7b10753fa1, Ml as useCreateCategoryGroupMutation, Mn as InputField, Ms as $7252cd45fc48c07c$export$990fced5dfac2637, Nl as useCreateCategoryMutation, No as AutoTextSize, Ns as $7252cd45fc48c07c$export$dac8db29d42db9a1, Ol as useSpreadsheet, On as calculateRunningBalancesTopDown, Os as $7252cd45fc48c07c$export$70936501603e6c57, Ot as BalanceWithCarryover, P as StatusBadge, Pc as $62d8ded9296f3872$export$cfa2225e87938781, Pl as useDeleteCategoryGroupMutation, Po as TextOneLine, Ps as $7252cd45fc48c07c$export$dfdf5deeaf27473f, Pt as makeAmountFullStyle, Ql as useSearchParams, Qn as uncategorizedBalance, Rn as CellValueText, Rr as sheetForMonth, Sn as MOBILE_NAV_HEIGHT, Ss as $67560de7c78cb232$export$418e185dd3f1b968, Tl as useNavigate, Tn as useDrag, Ts as $7252cd45fc48c07c$export$3093291712f09a77, Tt as useNotes, Ua as SvgCheveronRight, Ul as View, Un as allAccountBalance, Vl as useSaveCategoryMutation, Vn as accountBalanceCleared, Wn as categoryBalance, Wo as SvgExpandArrow, Xi as SvgArrowsSynchronize, Xl as useLocation, Xn as onBudgetAccountBalance, Xt as getScheduledAmount, Yi as SvgCalendar3, Yn as offBudgetAccountBalance, Zc as $c87311424ea30a05$export$fedb369cb70207f1, Zl as useParams, Zn as trackingBudget, _s as $5c06e4929e123553$export$ccdee5eaf73cf661, bl as animated, br as getMonth, bs as $865c2eb7c00a83f1$exports, cc as $507fabe10e71c6fb$export$8397ddfc504fdb9a, ci as PrivacyFilter, co as MobilePageHeader, cr as currentMonth, di as useSheetValue, dt as useLocale, el as $3ef42575df84b30b$export$9d1611c77c2fe928, eo as SvgArrowThinRight, er as transactions, fc as $fca6afa0e843324b$export$f12b703ca79dfbb1, fi as SheetNameProvider, ft as useCategoryScheduleGoalTemplates, g as useDateFormat, gr as format, gs as $ad0e3f3d9c50e4ba$export$905ab40ac2179daa, gt as useSchedules, hc as $18f2051aff69b9bf$export$43bb16f9c6d9e3f7, hi as useSelected, ht as getSchedulesQuery, i as RuleEditor, ir as addMonths, it as useCategoriesById, jl as useBudgetActions, js as $7252cd45fc48c07c$export$7e397efd01d3db27, ju as q, kn as useTransactions, kr as isCurrentMonth, ks as $7252cd45fc48c07c$export$72cb63bdda528276, ll as $bdb11010cef70236$export$f680877a34711e37, lo as Page, m as DisplayId, nn as isPreviewId, nr as uncategorizedTransactions, ns as Button, o as useCategory, ot as useUndo, pi as SelectedProvider, po as require_debounce, pt as SchedulesProvider, qc as $c87311424ea30a05$export$78551043582a6a98, qn as closedAccountBalance, qo as SvgLogo, ra as SvgArrowButtonDown1, ro as SvgArrowThickRight, rt as useCategories, so as SvgAdd, sr as currentDay, to as SvgArrowThinLeft, tr as transactionsSearch, ts as Text, ul as $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c, ut as useCategoryScheduleGoalTemplateIndicator, vl as AnimatedLoading, vs as $224594fe3e57ff1e$export$62447ad3d2ec7da6, ws as $67560de7c78cb232$export$c28d9fb4a54e471a, xl as config, xo as useLocalPref, xs as $67560de7c78cb232$export$403bc76cbf68cf60, yi as useFormat, ys as $8253ed7ece74b463$export$7941f8aafa4b6021, zn as FinancialText } from "./Value.D0gbasR7.chunk.js";
import { a as useOffBudgetAccounts, d as $72e60046c03fbe42$export$e96fc9a8407faa6b, i as useOnBudgetAccounts, n as useScheduleEdit, o as Label, r as updateScheduleConditions, s as MobileBankSyncAccountEditPage, t as ScheduleEditForm, u as $72e60046c03fbe42$export$a7bfbda1311ca015 } from "./ScheduleEditForm.a-10N4xA.chunk.js";
import { d as $612b8eb6cb90e02d$export$62ed72bc21f6b8a6, l as $eed445e0843c11d0$export$a11e76429ed99b4, o as MobileBackButton, s as $eed445e0843c11d0$export$41f133550aa26f48, v as $c5a24bc478652b5f$export$1005530eda016c13 } from "./TransactionEdit.CJ27DuIc.chunk.js";
import { n as $ce3a951440fc273f$export$89be5a243e59c4b2, r as $61ef60fc9b1041f4$export$cacbb3924155d68e, t as TransactionList } from "./TransactionList.BmRfHt1M.chunk.js";
import { a as ConditionExpression, c as useFailedAccounts, d as Search, i as ruleToString, l as useAccountPreviewTransactions, n as usePayeeRuleCounts, o as ActionExpression, s as groupActionsBySplitIndex, t as PayeeRuleCountLabel, u as usePreviewTransactions } from "./PayeeRuleCountLabel.Be_ewIvJ.chunk.js";
//#region ../../node_modules/@react-aria/dnd/dist/DropTargetKeyboardNavigation.mjs
function $e154566cef11553b$export$ff7962acd6052c28(keyboardDelegate, collection, target, direction, rtl = false, wrap = false) {
	switch (direction) {
		case "left": return rtl ? $e154566cef11553b$var$nextDropTarget(keyboardDelegate, collection, target, wrap, "left") : $e154566cef11553b$var$previousDropTarget(keyboardDelegate, collection, target, wrap, "left");
		case "right": return rtl ? $e154566cef11553b$var$previousDropTarget(keyboardDelegate, collection, target, wrap, "right") : $e154566cef11553b$var$nextDropTarget(keyboardDelegate, collection, target, wrap, "right");
		case "up": return $e154566cef11553b$var$previousDropTarget(keyboardDelegate, collection, target, wrap);
		case "down": return $e154566cef11553b$var$nextDropTarget(keyboardDelegate, collection, target, wrap);
	}
}
function $e154566cef11553b$var$nextDropTarget(keyboardDelegate, collection, target, wrap = false, horizontal = null) {
	if (!target) return { type: "root" };
	if (target.type === "root") {
		var _keyboardDelegate_getFirstKey;
		var _keyboardDelegate_getFirstKey1;
		let nextKey = (_keyboardDelegate_getFirstKey1 = (_keyboardDelegate_getFirstKey = keyboardDelegate.getFirstKey) === null || _keyboardDelegate_getFirstKey === void 0 ? void 0 : _keyboardDelegate_getFirstKey.call(keyboardDelegate)) !== null && _keyboardDelegate_getFirstKey1 !== void 0 ? _keyboardDelegate_getFirstKey1 : null;
		if (nextKey != null) return {
			type: "item",
			key: nextKey,
			dropPosition: "before"
		};
		return null;
	}
	if (target.type === "item") {
		var _keyboardDelegate_getKeyRightOf, _keyboardDelegate_getKeyLeftOf, _keyboardDelegate_getKeyBelow;
		let nextKey = null;
		if (horizontal) nextKey = horizontal === "right" ? (_keyboardDelegate_getKeyRightOf = keyboardDelegate.getKeyRightOf) === null || _keyboardDelegate_getKeyRightOf === void 0 ? void 0 : _keyboardDelegate_getKeyRightOf.call(keyboardDelegate, target.key) : (_keyboardDelegate_getKeyLeftOf = keyboardDelegate.getKeyLeftOf) === null || _keyboardDelegate_getKeyLeftOf === void 0 ? void 0 : _keyboardDelegate_getKeyLeftOf.call(keyboardDelegate, target.key);
		else nextKey = (_keyboardDelegate_getKeyBelow = keyboardDelegate.getKeyBelow) === null || _keyboardDelegate_getKeyBelow === void 0 ? void 0 : _keyboardDelegate_getKeyBelow.call(keyboardDelegate, target.key);
		let nextCollectionKey = $e154566cef11553b$var$getNextItem(collection, target.key, (key) => collection.getKeyAfter(key));
		if (nextKey != null && nextKey !== nextCollectionKey) return {
			type: "item",
			key: nextKey,
			dropPosition: target.dropPosition
		};
		switch (target.dropPosition) {
			case "before": return {
				type: "item",
				key: target.key,
				dropPosition: "on"
			};
			case "on": {
				let targetNode = collection.getItem(target.key);
				let nextNode = nextKey != null ? collection.getItem(nextKey) : null;
				if (targetNode && nextNode && nextNode.level >= targetNode.level) return {
					type: "item",
					key: nextNode.key,
					dropPosition: "before"
				};
				return {
					type: "item",
					key: target.key,
					dropPosition: "after"
				};
			}
			case "after": {
				let targetNode = collection.getItem(target.key);
				let nextItemInSameLevel = (targetNode === null || targetNode === void 0 ? void 0 : targetNode.nextKey) != null ? collection.getItem(targetNode.nextKey) : null;
				while (nextItemInSameLevel != null && nextItemInSameLevel.type !== "item") nextItemInSameLevel = nextItemInSameLevel.nextKey != null ? collection.getItem(nextItemInSameLevel.nextKey) : null;
				if (targetNode && nextItemInSameLevel == null && targetNode.parentKey != null) {
					let parentNode = collection.getItem(targetNode.parentKey);
					const nextNode = (parentNode === null || parentNode === void 0 ? void 0 : parentNode.nextKey) != null ? collection.getItem(parentNode.nextKey) : null;
					if ((nextNode === null || nextNode === void 0 ? void 0 : nextNode.type) === "item") return {
						type: "item",
						key: nextNode.key,
						dropPosition: "before"
					};
					if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.type) === "item") return {
						type: "item",
						key: parentNode.key,
						dropPosition: "after"
					};
				}
				if (nextItemInSameLevel) return {
					type: "item",
					key: nextItemInSameLevel.key,
					dropPosition: "on"
				};
			}
		}
	}
	if (wrap) return { type: "root" };
	return null;
}
function $e154566cef11553b$var$previousDropTarget(keyboardDelegate, collection, target, wrap = false, horizontal = null) {
	if (!target || wrap && target.type === "root") {
		var _keyboardDelegate_getLastKey;
		let prevKey = null;
		let lastKey = (_keyboardDelegate_getLastKey = keyboardDelegate.getLastKey) === null || _keyboardDelegate_getLastKey === void 0 ? void 0 : _keyboardDelegate_getLastKey.call(keyboardDelegate);
		while (lastKey != null) {
			let node = collection.getItem(lastKey);
			if ((node === null || node === void 0 ? void 0 : node.type) !== "item") break;
			prevKey = lastKey;
			lastKey = node === null || node === void 0 ? void 0 : node.parentKey;
		}
		if (prevKey != null) return {
			type: "item",
			key: prevKey,
			dropPosition: "after"
		};
		return null;
	}
	if (target.type === "item") {
		var _keyboardDelegate_getKeyLeftOf, _keyboardDelegate_getKeyRightOf, _keyboardDelegate_getKeyAbove;
		let prevKey = null;
		if (horizontal) prevKey = horizontal === "left" ? (_keyboardDelegate_getKeyLeftOf = keyboardDelegate.getKeyLeftOf) === null || _keyboardDelegate_getKeyLeftOf === void 0 ? void 0 : _keyboardDelegate_getKeyLeftOf.call(keyboardDelegate, target.key) : (_keyboardDelegate_getKeyRightOf = keyboardDelegate.getKeyRightOf) === null || _keyboardDelegate_getKeyRightOf === void 0 ? void 0 : _keyboardDelegate_getKeyRightOf.call(keyboardDelegate, target.key);
		else prevKey = (_keyboardDelegate_getKeyAbove = keyboardDelegate.getKeyAbove) === null || _keyboardDelegate_getKeyAbove === void 0 ? void 0 : _keyboardDelegate_getKeyAbove.call(keyboardDelegate, target.key);
		let prevCollectionKey = $e154566cef11553b$var$getNextItem(collection, target.key, (key) => collection.getKeyBefore(key));
		if (prevKey != null && prevKey !== prevCollectionKey) return {
			type: "item",
			key: prevKey,
			dropPosition: target.dropPosition
		};
		switch (target.dropPosition) {
			case "before": {
				let targetNode = collection.getItem(target.key);
				if (targetNode && targetNode.prevKey != null) {
					let lastChild = $e154566cef11553b$var$getLastChild(collection, targetNode.prevKey);
					if (lastChild) return lastChild;
				}
				if (prevKey != null) return {
					type: "item",
					key: prevKey,
					dropPosition: "on"
				};
				return { type: "root" };
			}
			case "on": return {
				type: "item",
				key: target.key,
				dropPosition: "before"
			};
			case "after": {
				let lastChild = $e154566cef11553b$var$getLastChild(collection, target.key);
				if (lastChild) return lastChild;
				return {
					type: "item",
					key: target.key,
					dropPosition: "on"
				};
			}
		}
	}
	if (target.type !== "root") return { type: "root" };
	return null;
}
function $e154566cef11553b$var$getLastChild(collection, key) {
	let targetNode = collection.getItem(key);
	let nextKey = $e154566cef11553b$var$getNextItem(collection, key, (key) => collection.getKeyAfter(key));
	let nextNode = nextKey != null ? collection.getItem(nextKey) : null;
	if (targetNode && nextNode && nextNode.level > targetNode.level) {
		let children = $c5a24bc478652b5f$export$1005530eda016c13(targetNode, collection);
		let lastChild = null;
		for (let child of children) if (child.type === "item") lastChild = child;
		if (lastChild) return {
			type: "item",
			key: lastChild.key,
			dropPosition: "after"
		};
	}
	return null;
}
function $e154566cef11553b$var$getNextItem(collection, key, getNextKey) {
	let nextCollectionKey = getNextKey(key);
	let nextCollectionNode = nextCollectionKey != null ? collection.getItem(nextCollectionKey) : null;
	while (nextCollectionNode && nextCollectionNode.type !== "item") {
		nextCollectionKey = getNextKey(nextCollectionNode.key);
		nextCollectionNode = nextCollectionKey != null ? collection.getItem(nextCollectionKey) : null;
	}
	return nextCollectionKey;
}
//#endregion
//#region ../../node_modules/@react-aria/dnd/dist/useAutoScroll.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var $80d9daea3067eff3$var$AUTOSCROLL_AREA_SIZE = 20;
function $80d9daea3067eff3$export$6323452ca4533ed8(ref) {
	let scrollableRef = (0, import_react.useRef)(null);
	let scrollableX = (0, import_react.useRef)(true);
	let scrollableY = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		if (ref.current) {
			scrollableRef.current = $cc38e7bd3fc7b213$export$2bb74740c4e19def(ref.current) ? ref.current : $62d8ded9296f3872$export$cfa2225e87938781(ref.current);
			let style = window.getComputedStyle(scrollableRef.current);
			scrollableX.current = /(auto|scroll)/.test(style.overflowX);
			scrollableY.current = /(auto|scroll)/.test(style.overflowY);
		}
	}, [ref]);
	let state = (0, import_react.useRef)({
		timer: void 0,
		dx: 0,
		dy: 0
	}).current;
	(0, import_react.useEffect)(() => {
		return () => {
			if (state.timer) {
				cancelAnimationFrame(state.timer);
				state.timer = void 0;
			}
		};
	}, [state]);
	let scroll = (0, import_react.useCallback)(() => {
		if (scrollableX.current && scrollableRef.current) scrollableRef.current.scrollLeft += state.dx;
		if (scrollableY.current && scrollableRef.current) scrollableRef.current.scrollTop += state.dy;
		if (state.timer) state.timer = requestAnimationFrame(scroll);
	}, [scrollableRef, state]);
	return {
		move(x, y) {
			if (!$c87311424ea30a05$export$78551043582a6a98() || $c87311424ea30a05$export$fedb369cb70207f1() || !scrollableRef.current) return;
			let box = scrollableRef.current.getBoundingClientRect();
			let left = $80d9daea3067eff3$var$AUTOSCROLL_AREA_SIZE;
			let top = $80d9daea3067eff3$var$AUTOSCROLL_AREA_SIZE;
			let bottom = box.height - $80d9daea3067eff3$var$AUTOSCROLL_AREA_SIZE;
			let right = box.width - $80d9daea3067eff3$var$AUTOSCROLL_AREA_SIZE;
			if (x < left || x > right || y < top || y > bottom) {
				if (x < left) state.dx = x - left;
				else if (x > right) state.dx = x - right;
				if (y < top) state.dy = y - top;
				else if (y > bottom) state.dy = y - bottom;
				if (!state.timer) state.timer = requestAnimationFrame(scroll);
			} else this.stop();
		},
		stop() {
			if (state.timer) {
				cancelAnimationFrame(state.timer);
				state.timer = void 0;
			}
		}
	};
}
//#endregion
//#region ../../node_modules/@react-aria/dnd/dist/useDroppableCollection.mjs
function $4b52e4eff84e5217$export$f4e2f423c21f7b04(props, state, ref) {
	let localState = (0, import_react.useRef)({
		props,
		state,
		nextTarget: null,
		dropOperation: null
	}).current;
	localState.props = props;
	localState.state = state;
	let defaultOnDrop = (0, import_react.useCallback)(async (e) => {
		let { onInsert, onRootDrop, onItemDrop, onReorder, onMove, acceptedDragTypes = "all", shouldAcceptItemDrop } = localState.props;
		let { draggingKeys } = $7252cd45fc48c07c$export$6ca6700462636d0b;
		let isInternal = $7252cd45fc48c07c$export$78bf638634500fa5(ref);
		let { target, dropOperation, items } = e;
		let filteredItems = items;
		if (acceptedDragTypes !== "all" || shouldAcceptItemDrop) filteredItems = items.filter((item) => {
			let itemTypes;
			if (item.kind === "directory") itemTypes = new Set([$7252cd45fc48c07c$export$990fced5dfac2637]);
			else itemTypes = item.kind === "file" ? new Set([item.type]) : item.types;
			if (acceptedDragTypes === "all" || acceptedDragTypes.some((type) => itemTypes.has(type))) {
				if (target.type === "item" && target.dropPosition === "on" && shouldAcceptItemDrop) return shouldAcceptItemDrop(target, itemTypes);
				return true;
			}
			return false;
		});
		if (filteredItems.length > 0) {
			if (target.type === "root" && onRootDrop) await onRootDrop({
				items: filteredItems,
				dropOperation
			});
			if (target.type === "item") {
				if (target.dropPosition === "on" && onItemDrop) await onItemDrop({
					items: filteredItems,
					dropOperation,
					isInternal,
					target
				});
				if (onMove && isInternal) await onMove({
					keys: draggingKeys,
					dropOperation,
					target
				});
				if (target.dropPosition !== "on") {
					if (!isInternal && onInsert) await onInsert({
						items: filteredItems,
						dropOperation,
						target
					});
					if (isInternal && onReorder) await onReorder({
						keys: draggingKeys,
						dropOperation,
						target
					});
				}
			}
		}
	}, [localState, ref]);
	let autoScroll = $80d9daea3067eff3$export$6323452ca4533ed8(ref);
	let { dropProps } = $5c06e4929e123553$export$ccdee5eaf73cf661({
		ref,
		onDropEnter() {
			if (localState.nextTarget != null) state.setTarget(localState.nextTarget);
		},
		onDropMove(e) {
			if (localState.nextTarget != null) state.setTarget(localState.nextTarget);
			autoScroll.move(e.x, e.y);
		},
		getDropOperationForPoint(types, allowedOperations, x, y) {
			let { draggingKeys, dropCollectionRef } = $7252cd45fc48c07c$export$6ca6700462636d0b;
			let isInternal = $7252cd45fc48c07c$export$78bf638634500fa5(ref);
			let isValidDropTarget = (target) => state.getDropOperation({
				target,
				types,
				allowedOperations,
				isInternal,
				draggingKeys
			}) !== "cancel";
			let target = props.dropTargetDelegate.getDropTargetFromPoint(x, y, isValidDropTarget);
			if (!target) {
				localState.dropOperation = "cancel";
				localState.nextTarget = null;
				return "cancel";
			}
			localState.dropOperation = state.getDropOperation({
				target,
				types,
				allowedOperations,
				isInternal,
				draggingKeys
			});
			if (localState.dropOperation === "cancel") {
				let rootTarget = { type: "root" };
				let dropOperation = state.getDropOperation({
					target: rootTarget,
					types,
					allowedOperations,
					isInternal,
					draggingKeys
				});
				if (dropOperation !== "cancel") {
					target = rootTarget;
					localState.dropOperation = dropOperation;
				}
			}
			if (target && localState.dropOperation !== "cancel" && (ref === null || ref === void 0 ? void 0 : ref.current) !== (dropCollectionRef === null || dropCollectionRef === void 0 ? void 0 : dropCollectionRef.current)) $7252cd45fc48c07c$export$dac8db29d42db9a1(ref);
			localState.nextTarget = localState.dropOperation === "cancel" ? null : target;
			return localState.dropOperation;
		},
		onDropExit() {
			$7252cd45fc48c07c$export$dac8db29d42db9a1(void 0);
			state.setTarget(null);
			autoScroll.stop();
		},
		onDropActivate(e) {
			var _state_target;
			if (((_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.type) === "item" && typeof props.onDropActivate === "function") props.onDropActivate({
				type: "dropactivate",
				x: e.x,
				y: e.y,
				target: state.target
			});
		},
		onDrop(e) {
			$7252cd45fc48c07c$export$dac8db29d42db9a1(ref);
			if (state.target) onDrop(e, state.target);
			let { draggingCollectionRef } = $7252cd45fc48c07c$export$6ca6700462636d0b;
			if (draggingCollectionRef == null) $7252cd45fc48c07c$export$70936501603e6c57();
		}
	});
	let droppingState = (0, import_react.useRef)(null);
	let updateFocusAfterDrop = (0, import_react.useCallback)(() => {
		let { state } = localState;
		if (droppingState.current) {
			var _state_collection_getItem;
			let { target, collection: prevCollection, selectedKeys: prevSelectedKeys, focusedKey: prevFocusedKey, isInternal, draggingKeys } = droppingState.current;
			if (state.collection.size > prevCollection.size && state.selectionManager.isSelectionEqual(prevSelectedKeys)) {
				let newKeys = /* @__PURE__ */ new Set();
				for (let key of state.collection.getKeys()) if (!prevCollection.getItem(key)) newKeys.add(key);
				state.selectionManager.setSelectedKeys(newKeys);
				if (state.selectionManager.focusedKey === prevFocusedKey) {
					let first = newKeys.keys().next().value;
					if (first != null) {
						let item = state.collection.getItem(first);
						if ((item === null || item === void 0 ? void 0 : item.type) === "cell") first = item.parentKey;
						if (first != null) state.selectionManager.setFocusedKey(first);
						if (state.selectionManager.selectionMode === "none") $507fabe10e71c6fb$export$8397ddfc504fdb9a("keyboard");
					}
				}
			} else if (prevFocusedKey != null && state.selectionManager.focusedKey === prevFocusedKey && isInternal && target.type === "item" && target.dropPosition !== "on" && draggingKeys.has((_state_collection_getItem = state.collection.getItem(prevFocusedKey)) === null || _state_collection_getItem === void 0 ? void 0 : _state_collection_getItem.parentKey)) {
				var _state_collection_getItem1;
				var _state_collection_getItem_parentKey;
				state.selectionManager.setFocusedKey((_state_collection_getItem_parentKey = (_state_collection_getItem1 = state.collection.getItem(prevFocusedKey)) === null || _state_collection_getItem1 === void 0 ? void 0 : _state_collection_getItem1.parentKey) !== null && _state_collection_getItem_parentKey !== void 0 ? _state_collection_getItem_parentKey : null);
				$507fabe10e71c6fb$export$8397ddfc504fdb9a("keyboard");
			} else if (state.selectionManager.focusedKey === prevFocusedKey && target.type === "item" && target.dropPosition === "on" && state.collection.getItem(target.key) != null) {
				state.selectionManager.setFocusedKey(target.key);
				$507fabe10e71c6fb$export$8397ddfc504fdb9a("keyboard");
			} else if (state.selectionManager.focusedKey != null && !state.selectionManager.isSelected(state.selectionManager.focusedKey)) $507fabe10e71c6fb$export$8397ddfc504fdb9a("keyboard");
			state.selectionManager.setFocused(true);
		}
	}, [localState]);
	let onDrop = (0, import_react.useCallback)((e, target) => {
		let { state } = localState;
		droppingState.current = {
			timeout: void 0,
			focusedKey: state.selectionManager.focusedKey,
			collection: state.collection,
			selectedKeys: state.selectionManager.selectedKeys,
			draggingKeys: $7252cd45fc48c07c$export$6ca6700462636d0b.draggingKeys,
			isInternal: $7252cd45fc48c07c$export$78bf638634500fa5(ref),
			target
		};
		(localState.props.onDrop || defaultOnDrop)({
			type: "drop",
			x: e.x,
			y: e.y,
			target,
			items: e.items,
			dropOperation: e.dropOperation
		});
		droppingState.current.timeout = setTimeout(() => {
			updateFocusAfterDrop();
			droppingState.current = null;
		}, 50);
	}, [
		localState,
		defaultOnDrop,
		ref,
		updateFocusAfterDrop
	]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (droppingState.current) clearTimeout(droppingState.current.timeout);
		};
	}, []);
	$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
		if (droppingState.current && state.collection !== droppingState.current.collection) updateFocusAfterDrop();
	});
	let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		let getNextTarget = (target, wrap = true, key = "down") => {
			return $e154566cef11553b$export$ff7962acd6052c28(localState.props.keyboardDelegate, localState.state.collection, target, key, direction === "rtl", wrap);
		};
		let getPreviousTarget = (target, wrap = true) => {
			return getNextTarget(target, wrap, "up");
		};
		let nextValidTarget = (target, types, allowedDropOperations, getNextTarget, wrap = true) => {
			let seenRoot = 0;
			let operation;
			let { draggingKeys } = $7252cd45fc48c07c$export$6ca6700462636d0b;
			let isInternal = $7252cd45fc48c07c$export$78bf638634500fa5(ref);
			do {
				let nextTarget = getNextTarget(target, wrap);
				if (!nextTarget) return null;
				target = nextTarget;
				operation = localState.state.getDropOperation({
					target: nextTarget,
					types,
					allowedOperations: allowedDropOperations,
					isInternal,
					draggingKeys
				});
				if (target.type === "root") seenRoot++;
			} while (operation === "cancel" && !localState.state.isDropTarget(target) && seenRoot < 2);
			if (operation === "cancel") return null;
			return target;
		};
		return $67560de7c78cb232$export$c28d9fb4a54e471a({
			element: ref.current,
			preventFocusOnDrop: true,
			getDropOperation(types, allowedOperations) {
				if (localState.state.target) {
					let { draggingKeys } = $7252cd45fc48c07c$export$6ca6700462636d0b;
					let isInternal = $7252cd45fc48c07c$export$78bf638634500fa5(ref);
					return localState.state.getDropOperation({
						target: localState.state.target,
						types,
						allowedOperations,
						isInternal,
						draggingKeys
					});
				}
				return nextValidTarget(null, types, allowedOperations, getNextTarget) ? "move" : "cancel";
			},
			onDropEnter(e, drag) {
				let types = $7252cd45fc48c07c$export$e1d41611756c6326(drag.items);
				let selectionManager = localState.state.selectionManager;
				let target = null;
				$7252cd45fc48c07c$export$dac8db29d42db9a1(ref);
				let key = selectionManager.focusedKey;
				let dropPosition = "after";
				let item = key != null ? localState.state.collection.getItem(key) : null;
				if ((item === null || item === void 0 ? void 0 : item.type) === "cell") key = item.parentKey;
				if (key != null && selectionManager.isSelected(key)) if (selectionManager.selectedKeys.size > 1 && selectionManager.firstSelectedKey === key) dropPosition = "before";
				else key = selectionManager.lastSelectedKey;
				if (key != null) {
					target = {
						type: "item",
						key,
						dropPosition
					};
					let { draggingKeys } = $7252cd45fc48c07c$export$6ca6700462636d0b;
					let isInternal = $7252cd45fc48c07c$export$78bf638634500fa5(ref);
					var _nextValidTarget;
					if (localState.state.getDropOperation({
						target,
						types,
						allowedOperations: drag.allowedDropOperations,
						isInternal,
						draggingKeys
					}) === "cancel") target = (_nextValidTarget = nextValidTarget(target, types, drag.allowedDropOperations, getNextTarget, false)) !== null && _nextValidTarget !== void 0 ? _nextValidTarget : nextValidTarget(target, types, drag.allowedDropOperations, getPreviousTarget, false);
				}
				if (!target) target = nextValidTarget(null, types, drag.allowedDropOperations, getNextTarget);
				localState.state.setTarget(target);
			},
			onDropExit() {
				$7252cd45fc48c07c$export$dac8db29d42db9a1(void 0);
				localState.state.setTarget(null);
			},
			onDropTargetEnter(target) {
				localState.state.setTarget(target);
			},
			onDropActivate(e, target) {
				if ((target === null || target === void 0 ? void 0 : target.type) === "item" && (target === null || target === void 0 ? void 0 : target.dropPosition) === "on" && typeof localState.props.onDropActivate === "function") localState.props.onDropActivate({
					type: "dropactivate",
					x: e.x,
					y: e.y,
					target
				});
			},
			onDrop(e, target) {
				$7252cd45fc48c07c$export$dac8db29d42db9a1(ref);
				if (localState.state.target) onDrop(e, target || localState.state.target);
			},
			onKeyDown(e, drag) {
				var _localState_props_onKeyDown, _localState_props;
				let { keyboardDelegate } = localState.props;
				let types = $7252cd45fc48c07c$export$e1d41611756c6326(drag.items);
				switch (e.key) {
					case "ArrowDown":
						if (keyboardDelegate.getKeyBelow) {
							let target = nextValidTarget(localState.state.target, types, drag.allowedDropOperations, (target, wrap) => getNextTarget(target, wrap, "down"));
							localState.state.setTarget(target);
						}
						break;
					case "ArrowUp":
						if (keyboardDelegate.getKeyAbove) {
							let target = nextValidTarget(localState.state.target, types, drag.allowedDropOperations, (target, wrap) => getNextTarget(target, wrap, "up"));
							localState.state.setTarget(target);
						}
						break;
					case "ArrowLeft":
						if (keyboardDelegate.getKeyLeftOf) {
							let target = nextValidTarget(localState.state.target, types, drag.allowedDropOperations, (target, wrap) => getNextTarget(target, wrap, "left"));
							localState.state.setTarget(target);
						}
						break;
					case "ArrowRight":
						if (keyboardDelegate.getKeyRightOf) {
							let target = nextValidTarget(localState.state.target, types, drag.allowedDropOperations, (target, wrap) => getNextTarget(target, wrap, "right"));
							localState.state.setTarget(target);
						}
						break;
					case "Home":
						if (keyboardDelegate.getFirstKey) {
							let target = nextValidTarget(null, types, drag.allowedDropOperations, getNextTarget);
							localState.state.setTarget(target);
						}
						break;
					case "End":
						if (keyboardDelegate.getLastKey) {
							let target = nextValidTarget(null, types, drag.allowedDropOperations, getPreviousTarget);
							localState.state.setTarget(target);
						}
						break;
					case "PageDown":
						if (keyboardDelegate.getKeyPageBelow) {
							let target = localState.state.target;
							if (!target) target = nextValidTarget(null, types, drag.allowedDropOperations, getNextTarget);
							else {
								var _keyboardDelegate_getFirstKey, _keyboardDelegate_getLastKey;
								let targetKey = (_keyboardDelegate_getFirstKey = keyboardDelegate.getFirstKey) === null || _keyboardDelegate_getFirstKey === void 0 ? void 0 : _keyboardDelegate_getFirstKey.call(keyboardDelegate);
								if (target.type === "item") targetKey = target.key;
								let nextKey = null;
								if (targetKey != null) nextKey = keyboardDelegate.getKeyPageBelow(targetKey);
								let dropPosition = target.type === "item" ? target.dropPosition : "after";
								if (nextKey == null || target.type === "item" && target.key === ((_keyboardDelegate_getLastKey = keyboardDelegate.getLastKey) === null || _keyboardDelegate_getLastKey === void 0 ? void 0 : _keyboardDelegate_getLastKey.call(keyboardDelegate))) {
									var _keyboardDelegate_getLastKey1;
									var _keyboardDelegate_getLastKey2;
									nextKey = (_keyboardDelegate_getLastKey2 = (_keyboardDelegate_getLastKey1 = keyboardDelegate.getLastKey) === null || _keyboardDelegate_getLastKey1 === void 0 ? void 0 : _keyboardDelegate_getLastKey1.call(keyboardDelegate)) !== null && _keyboardDelegate_getLastKey2 !== void 0 ? _keyboardDelegate_getLastKey2 : null;
									dropPosition = "after";
								}
								if (nextKey == null) break;
								target = {
									type: "item",
									key: nextKey,
									dropPosition
								};
								let { draggingCollectionRef, draggingKeys } = $7252cd45fc48c07c$export$6ca6700462636d0b;
								let isInternal = (draggingCollectionRef === null || draggingCollectionRef === void 0 ? void 0 : draggingCollectionRef.current) === (ref === null || ref === void 0 ? void 0 : ref.current);
								let operation = localState.state.getDropOperation({
									target,
									types,
									allowedOperations: drag.allowedDropOperations,
									isInternal,
									draggingKeys
								});
								var _nextValidTarget;
								if (operation === "cancel") target = (_nextValidTarget = nextValidTarget(target, types, drag.allowedDropOperations, getNextTarget, false)) !== null && _nextValidTarget !== void 0 ? _nextValidTarget : nextValidTarget(target, types, drag.allowedDropOperations, getPreviousTarget, false);
							}
							localState.state.setTarget(target !== null && target !== void 0 ? target : localState.state.target);
						}
						break;
					case "PageUp": {
						if (!keyboardDelegate.getKeyPageAbove) break;
						let target = localState.state.target;
						if (!target) target = nextValidTarget(null, types, drag.allowedDropOperations, getPreviousTarget);
						else if (target.type === "item") {
							var _keyboardDelegate_getFirstKey1;
							if (target.key === ((_keyboardDelegate_getFirstKey1 = keyboardDelegate.getFirstKey) === null || _keyboardDelegate_getFirstKey1 === void 0 ? void 0 : _keyboardDelegate_getFirstKey1.call(keyboardDelegate))) target = { type: "root" };
							else {
								let nextKey = keyboardDelegate.getKeyPageAbove(target.key);
								let dropPosition = target.dropPosition;
								if (nextKey == null) {
									var _keyboardDelegate_getFirstKey2;
									nextKey = (_keyboardDelegate_getFirstKey2 = keyboardDelegate.getFirstKey) === null || _keyboardDelegate_getFirstKey2 === void 0 ? void 0 : _keyboardDelegate_getFirstKey2.call(keyboardDelegate);
									dropPosition = "before";
								}
								if (nextKey == null) break;
								target = {
									type: "item",
									key: nextKey,
									dropPosition
								};
							}
							let { draggingKeys } = $7252cd45fc48c07c$export$6ca6700462636d0b;
							let isInternal = $7252cd45fc48c07c$export$78bf638634500fa5(ref);
							let operation = localState.state.getDropOperation({
								target,
								types,
								allowedOperations: drag.allowedDropOperations,
								isInternal,
								draggingKeys
							});
							var _nextValidTarget1;
							if (operation === "cancel") target = (_nextValidTarget1 = nextValidTarget(target, types, drag.allowedDropOperations, getPreviousTarget, false)) !== null && _nextValidTarget1 !== void 0 ? _nextValidTarget1 : nextValidTarget(target, types, drag.allowedDropOperations, getNextTarget, false);
						}
						localState.state.setTarget(target !== null && target !== void 0 ? target : localState.state.target);
						break;
					}
				}
				(_localState_props_onKeyDown = (_localState_props = localState.props).onKeyDown) === null || _localState_props_onKeyDown === void 0 || _localState_props_onKeyDown.call(_localState_props, e);
			}
		});
	}, [
		localState,
		ref,
		onDrop,
		direction
	]);
	let id = $bdb11010cef70236$export$f680877a34711e37();
	$7252cd45fc48c07c$export$dfdf5deeaf27473f.set(state, {
		id,
		ref
	});
	return { collectionProps: $3ef42575df84b30b$export$9d1611c77c2fe928(dropProps, {
		id,
		"aria-describedby": null
	}) };
}
//#endregion
//#region ../../node_modules/@react-aria/dnd/dist/useDroppableItem.mjs
function $bfaab576ce1c580e$export$f7b0c5d28b66b6a5(options, state, ref) {
	let { dropProps } = $224594fe3e57ff1e$export$62447ad3d2ec7da6();
	let droppableCollectionRef = $7252cd45fc48c07c$export$7e397efd01d3db27(state);
	(0, import_react.useEffect)(() => {
		if (ref.current) return $67560de7c78cb232$export$aef80212ac99c003({
			element: ref.current,
			target: options.target,
			getDropOperation(types, allowedOperations) {
				let { draggingKeys } = $7252cd45fc48c07c$export$6ca6700462636d0b;
				let isInternal = $7252cd45fc48c07c$export$78bf638634500fa5(droppableCollectionRef);
				return state.getDropOperation({
					target: options.target,
					types,
					allowedOperations,
					isInternal,
					draggingKeys
				});
			},
			activateButtonRef: options.activateButtonRef
		});
	}, [
		ref,
		options.target,
		state,
		droppableCollectionRef,
		options.activateButtonRef
	]);
	let dragSession = $67560de7c78cb232$export$418e185dd3f1b968();
	let { draggingKeys } = $7252cd45fc48c07c$export$6ca6700462636d0b;
	let isInternal = $7252cd45fc48c07c$export$78bf638634500fa5(droppableCollectionRef);
	let isValidDropTarget = dragSession && state.getDropOperation({
		target: options.target,
		types: $7252cd45fc48c07c$export$e1d41611756c6326(dragSession.dragTarget.items),
		allowedOperations: dragSession.dragTarget.allowedDropOperations,
		isInternal,
		draggingKeys
	}) !== "cancel";
	let isDropTarget = state.isDropTarget(options.target);
	(0, import_react.useEffect)(() => {
		if (dragSession && isDropTarget && ref.current) ref.current.focus();
	}, [
		isDropTarget,
		dragSession,
		ref
	]);
	return {
		dropProps: {
			...dropProps,
			"aria-hidden": !dragSession || isValidDropTarget ? void 0 : "true"
		},
		isDropTarget
	};
}
//#endregion
//#region ../../node_modules/@react-aria/dnd/dist/useDropIndicator.mjs
function $parcel$interopDefault$1(a) {
	return a && a.__esModule ? a.default : a;
}
function $ddf25448c71fc93a$export$8d0e41d2815afac5(props, state, ref) {
	let { target } = props;
	let { collection } = state;
	let stringFormatter = $fca6afa0e843324b$export$f12b703ca79dfbb1($parcel$interopDefault$1($865c2eb7c00a83f1$exports), "@react-aria/dnd");
	let dragSession = $67560de7c78cb232$export$418e185dd3f1b968();
	let { dropProps } = $bfaab576ce1c580e$export$f7b0c5d28b66b6a5(props, state, ref);
	let id = $bdb11010cef70236$export$f680877a34711e37();
	let getText = (key) => {
		var _collection_getTextValue, _collection_getItem;
		var _collection_getTextValue1, _ref;
		if (key == null) return "";
		else return (_ref = (_collection_getTextValue1 = (_collection_getTextValue = collection.getTextValue) === null || _collection_getTextValue === void 0 ? void 0 : _collection_getTextValue.call(collection, key)) !== null && _collection_getTextValue1 !== void 0 ? _collection_getTextValue1 : (_collection_getItem = collection.getItem(key)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _ref !== void 0 ? _ref : "";
	};
	let label = "";
	let labelledBy;
	if (target.type === "root") {
		label = stringFormatter.format("dropOnRoot");
		labelledBy = `${id} ${$7252cd45fc48c07c$export$3093291712f09a77(state)}`;
	} else if (target.dropPosition === "on") label = stringFormatter.format("dropOnItem", { itemText: getText(target.key) });
	else {
		let before;
		let after;
		if (target.dropPosition === "before") {
			var _collection_getItem;
			let prevKey = (_collection_getItem = collection.getItem(target.key)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.prevKey;
			let prevNode = prevKey != null ? collection.getItem(prevKey) : null;
			before = (prevNode === null || prevNode === void 0 ? void 0 : prevNode.type) === "item" ? prevNode.key : null;
		} else before = target.key;
		if (target.dropPosition === "after") {
			var _collection_getItem1;
			let nextKey = (_collection_getItem1 = collection.getItem(target.key)) === null || _collection_getItem1 === void 0 ? void 0 : _collection_getItem1.nextKey;
			let nextNode = nextKey != null ? collection.getItem(nextKey) : null;
			after = (nextNode === null || nextNode === void 0 ? void 0 : nextNode.type) === "item" ? nextNode.key : null;
		} else after = target.key;
		if (before != null && after != null) label = stringFormatter.format("insertBetween", {
			beforeItemText: getText(before),
			afterItemText: getText(after)
		});
		else if (before != null) label = stringFormatter.format("insertAfter", { itemText: getText(before) });
		else if (after != null) label = stringFormatter.format("insertBefore", { itemText: getText(after) });
	}
	let isDropTarget = state.isDropTarget(target);
	let ariaHidden = !dragSession ? "true" : dropProps["aria-hidden"];
	return {
		dropIndicatorProps: {
			...dropProps,
			id,
			"aria-roledescription": stringFormatter.format("dropIndicator"),
			"aria-label": label,
			"aria-labelledby": labelledBy,
			"aria-hidden": ariaHidden,
			tabIndex: -1
		},
		isDropTarget,
		isHidden: !isDropTarget && !!ariaHidden
	};
}
//#endregion
//#region ../../node_modules/@react-aria/dnd/dist/useDraggableItem.mjs
function $parcel$interopDefault(a) {
	return a && a.__esModule ? a.default : a;
}
var $fd98cf7cbf233429$var$MESSAGES = {
	keyboard: {
		selected: "dragSelectedKeyboard",
		notSelected: "dragDescriptionKeyboard"
	},
	touch: {
		selected: "dragSelectedLongPress",
		notSelected: "dragDescriptionLongPress"
	},
	virtual: {
		selected: "dragDescriptionVirtual",
		notSelected: "dragDescriptionVirtual"
	}
};
function $fd98cf7cbf233429$export$b35afafff42da2d9(props, state) {
	let stringFormatter = $fca6afa0e843324b$export$f12b703ca79dfbb1($parcel$interopDefault($865c2eb7c00a83f1$exports), "@react-aria/dnd");
	let isDisabled = state.isDisabled || state.selectionManager.isDisabled(props.key);
	let { dragProps, dragButtonProps } = $8253ed7ece74b463$export$7941f8aafa4b6021({
		getItems() {
			return state.getItems(props.key);
		},
		preview: state.preview,
		getAllowedDropOperations: state.getAllowedDropOperations,
		hasDragButton: props.hasDragButton,
		onDragStart(e) {
			state.startDrag(props.key, e);
			$7252cd45fc48c07c$export$72cb63bdda528276(state.draggingKeys);
		},
		onDragMove(e) {
			state.moveDrag(e);
		},
		onDragEnd(e) {
			let { dropOperation } = e;
			let isInternal = dropOperation === "cancel" ? false : $7252cd45fc48c07c$export$78bf638634500fa5();
			state.endDrag({
				...e,
				keys: state.draggingKeys,
				isInternal
			});
			$7252cd45fc48c07c$export$70936501603e6c57();
		}
	});
	let item = state.collection.getItem(props.key);
	let numKeysForDrag = state.getKeysForDrag(props.key).size;
	let isSelected = numKeysForDrag > 1 && state.selectionManager.isSelected(props.key);
	let dragButtonLabel;
	let description;
	let modality = $7252cd45fc48c07c$export$49bac5d6d4b352ea();
	if (!props.hasDragButton && state.selectionManager.selectionMode !== "none") {
		let msg = $fd98cf7cbf233429$var$MESSAGES[modality][isSelected ? "selected" : "notSelected"];
		if (props.hasAction && modality === "keyboard") msg += "Alt";
		if (isSelected) description = stringFormatter.format(msg, { count: numKeysForDrag });
		else description = stringFormatter.format(msg);
		delete dragProps.onClick;
	} else if (isSelected) dragButtonLabel = stringFormatter.format("dragSelectedItems", { count: numKeysForDrag });
	else {
		var _state_collection_getTextValue, _state_collection;
		var _state_collection_getTextValue1, _ref;
		let itemText = (_ref = (_state_collection_getTextValue1 = (_state_collection_getTextValue = (_state_collection = state.collection).getTextValue) === null || _state_collection_getTextValue === void 0 ? void 0 : _state_collection_getTextValue.call(_state_collection, props.key)) !== null && _state_collection_getTextValue1 !== void 0 ? _state_collection_getTextValue1 : item === null || item === void 0 ? void 0 : item.textValue) !== null && _ref !== void 0 ? _ref : "";
		dragButtonLabel = stringFormatter.format("dragItem", { itemText });
	}
	let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1(description);
	if (description) Object.assign(dragProps, descriptionProps);
	if (!props.hasDragButton && props.hasAction) {
		let { onKeyDownCapture, onKeyUpCapture } = dragProps;
		if (modality === "touch") delete dragProps["aria-describedby"];
		dragProps.onKeyDownCapture = (e) => {
			if (e.altKey) onKeyDownCapture === null || onKeyDownCapture === void 0 || onKeyDownCapture(e);
		};
		dragProps.onKeyUpCapture = (e) => {
			if (e.altKey) onKeyUpCapture === null || onKeyUpCapture === void 0 || onKeyUpCapture(e);
		};
	}
	return {
		dragProps: isDisabled ? {} : dragProps,
		dragButtonProps: {
			...dragButtonProps,
			isDisabled,
			"aria-label": dragButtonLabel
		}
	};
}
//#endregion
//#region ../../node_modules/@react-aria/dnd/dist/useDraggableCollection.mjs
function $4ac1fdc3a0fcd564$export$2962a7984b2f0a80(props, state, ref) {
	let { draggingCollectionRef } = $7252cd45fc48c07c$export$6ca6700462636d0b;
	if (state.draggingKeys.size > 0 && (draggingCollectionRef === null || draggingCollectionRef === void 0 ? void 0 : draggingCollectionRef.current) !== ref.current) $7252cd45fc48c07c$export$f2be18a910c0caa6(ref);
}
//#endregion
//#region ../../node_modules/@react-aria/dnd/dist/ListDropTargetDelegate.mjs
var $3ca85212bf8898e4$export$fbd65d14c79e28cc = class {
	getPrimaryStart(rect) {
		return this.orientation === "horizontal" ? rect.left : rect.top;
	}
	getPrimaryEnd(rect) {
		return this.orientation === "horizontal" ? rect.right : rect.bottom;
	}
	getSecondaryStart(rect) {
		return this.orientation === "horizontal" ? rect.top : rect.left;
	}
	getSecondaryEnd(rect) {
		return this.orientation === "horizontal" ? rect.bottom : rect.right;
	}
	getFlowStart(rect) {
		return this.layout === "stack" ? this.getPrimaryStart(rect) : this.getSecondaryStart(rect);
	}
	getFlowEnd(rect) {
		return this.layout === "stack" ? this.getPrimaryEnd(rect) : this.getSecondaryEnd(rect);
	}
	getFlowSize(rect) {
		return this.getFlowEnd(rect) - this.getFlowStart(rect);
	}
	getDropTargetFromPoint(x, y, isValidDropTarget) {
		var _this_ref_current;
		if (this.collection[Symbol.iterator]().next().done || !this.ref.current) return { type: "root" };
		let rect = this.ref.current.getBoundingClientRect();
		let primary = this.orientation === "horizontal" ? x : y;
		let secondary = this.orientation === "horizontal" ? y : x;
		primary += this.getPrimaryStart(rect);
		secondary += this.getSecondaryStart(rect);
		let flow = this.layout === "stack" ? primary : secondary;
		let isPrimaryRTL = this.orientation === "horizontal" && this.direction === "rtl";
		let isSecondaryRTL = this.layout === "grid" && this.orientation === "vertical" && this.direction === "rtl";
		let isFlowRTL = this.layout === "stack" ? isPrimaryRTL : isSecondaryRTL;
		let collection = (_this_ref_current = this.ref.current) === null || _this_ref_current === void 0 ? void 0 : _this_ref_current.dataset.collection;
		let elements = this.ref.current.querySelectorAll(collection ? `[data-collection="${CSS.escape(collection)}"]` : "[data-key]");
		let elementMap = /* @__PURE__ */ new Map();
		for (let item of elements) if (item instanceof HTMLElement && item.dataset.key != null) elementMap.set(item.dataset.key, item);
		let items = [...this.collection].filter((item) => item.type === "item");
		if (items.length < 1) return { type: "root" };
		let low = 0;
		let high = items.length;
		while (low < high) {
			let mid = Math.floor((low + high) / 2);
			let item = items[mid];
			let element = elementMap.get(String(item.key));
			if (!element) break;
			let rect = element.getBoundingClientRect();
			let update = (isGreater) => {
				if (isGreater) low = mid + 1;
				else high = mid;
			};
			if (primary < this.getPrimaryStart(rect)) update(isPrimaryRTL);
			else if (primary > this.getPrimaryEnd(rect)) update(!isPrimaryRTL);
			else if (secondary < this.getSecondaryStart(rect)) update(isSecondaryRTL);
			else if (secondary > this.getSecondaryEnd(rect)) update(!isSecondaryRTL);
			else {
				let target = {
					type: "item",
					key: item.key,
					dropPosition: "on"
				};
				if (isValidDropTarget(target)) {
					if (flow <= this.getFlowStart(rect) + 5 && isValidDropTarget({
						...target,
						dropPosition: "before"
					})) target.dropPosition = isFlowRTL ? "after" : "before";
					else if (flow >= this.getFlowEnd(rect) - 5 && isValidDropTarget({
						...target,
						dropPosition: "after"
					})) target.dropPosition = isFlowRTL ? "before" : "after";
				} else {
					let mid = this.getFlowStart(rect) + this.getFlowSize(rect) / 2;
					if (flow <= mid && isValidDropTarget({
						...target,
						dropPosition: "before"
					})) target.dropPosition = isFlowRTL ? "after" : "before";
					else if (flow >= mid && isValidDropTarget({
						...target,
						dropPosition: "after"
					})) target.dropPosition = isFlowRTL ? "before" : "after";
				}
				return target;
			}
		}
		let item = items[Math.min(low, items.length - 1)];
		let element = elementMap.get(String(item.key));
		rect = element === null || element === void 0 ? void 0 : element.getBoundingClientRect();
		if (rect && (primary < this.getPrimaryStart(rect) || Math.abs(flow - this.getFlowStart(rect)) < Math.abs(flow - this.getFlowEnd(rect)))) return {
			type: "item",
			key: item.key,
			dropPosition: isFlowRTL ? "after" : "before"
		};
		return {
			type: "item",
			key: item.key,
			dropPosition: isFlowRTL ? "before" : "after"
		};
	}
	constructor(collection, ref, options) {
		this.collection = collection;
		this.ref = ref;
		this.layout = (options === null || options === void 0 ? void 0 : options.layout) || "stack";
		this.orientation = (options === null || options === void 0 ? void 0 : options.orientation) || "vertical";
		this.direction = (options === null || options === void 0 ? void 0 : options.direction) || "ltr";
	}
};
//#endregion
//#region ../../node_modules/@react-stately/dnd/dist/useDraggableCollectionState.mjs
function $b45bbbaf0c3785df$export$29efd034f1d79f81(props) {
	let { getItems, isDisabled, collection, selectionManager, onDragStart, onDragMove, onDragEnd, preview, getAllowedDropOperations } = props;
	let [, setDragging] = (0, import_react.useState)(false);
	let draggingKeys = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	let draggedKey = (0, import_react.useRef)(null);
	let getKeys = (key) => {
		let keys = /* @__PURE__ */ new Set();
		if (selectionManager.isSelected(key)) for (let currentKey of selectionManager.selectedKeys) {
			let node = collection.getItem(currentKey);
			if (node) {
				let isChild = false;
				let parentKey = node.parentKey;
				while (parentKey != null) {
					if (selectionManager.selectedKeys.has(parentKey)) {
						isChild = true;
						break;
					}
					let parentNode = collection.getItem(parentKey);
					parentKey = parentNode ? parentNode.parentKey : null;
				}
				if (!isChild) keys.add(currentKey);
			}
		}
		else keys.add(key);
		return keys;
	};
	return {
		collection,
		selectionManager,
		get draggedKey() {
			return draggedKey.current;
		},
		get draggingKeys() {
			return draggingKeys.current;
		},
		isDragging(key) {
			return draggingKeys.current.has(key);
		},
		getKeysForDrag: getKeys,
		getItems(key) {
			let keys = getKeys(key);
			let items = [];
			for (let key of keys) {
				var _collection_getItem;
				let value = (_collection_getItem = collection.getItem(key)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.value;
				if (value != null) items.push(value);
			}
			return getItems(getKeys(key), items);
		},
		isDisabled,
		preview,
		getAllowedDropOperations,
		startDrag(key, event) {
			let keys = getKeys(key);
			draggingKeys.current = keys;
			draggedKey.current = key;
			selectionManager.setFocused(false);
			setDragging(true);
			if (typeof onDragStart === "function") onDragStart({
				...event,
				keys
			});
		},
		moveDrag(event) {
			if (typeof onDragMove === "function") onDragMove({
				...event,
				keys: draggingKeys.current
			});
		},
		endDrag(event) {
			let { isInternal } = event;
			if (typeof onDragEnd === "function") onDragEnd({
				...event,
				keys: draggingKeys.current,
				isInternal
			});
			draggingKeys.current = /* @__PURE__ */ new Set();
			draggedKey.current = null;
			setDragging(false);
		}
	};
}
//#endregion
//#region ../../node_modules/@react-stately/dnd/dist/useDroppableCollectionState.mjs
function $e672e8bc247525d1$export$926850f6ecef79d0(props) {
	let { acceptedDragTypes = "all", isDisabled, onInsert, onRootDrop, onItemDrop, onReorder, onMove, shouldAcceptItemDrop, collection, selectionManager, onDropEnter, getDropOperation, onDrop } = props;
	let [target, setTarget] = (0, import_react.useState)(null);
	let targetRef = (0, import_react.useRef)(null);
	let getOppositeTarget = (target) => {
		if (target.dropPosition === "before") {
			let node = collection.getItem(target.key);
			return node && node.prevKey != null ? {
				type: "item",
				key: node.prevKey,
				dropPosition: "after"
			} : null;
		} else if (target.dropPosition === "after") {
			let node = collection.getItem(target.key);
			return node && node.nextKey != null ? {
				type: "item",
				key: node.nextKey,
				dropPosition: "before"
			} : null;
		}
		return null;
	};
	let defaultGetDropOperation = (0, import_react.useCallback)((e) => {
		let { target, types, allowedOperations, isInternal, draggingKeys } = e;
		if (isDisabled || !target) return "cancel";
		if (acceptedDragTypes === "all" || acceptedDragTypes.some((type) => types.has(type))) {
			let isValidInsert = onInsert && target.type === "item" && !isInternal && (target.dropPosition === "before" || target.dropPosition === "after");
			let isValidReorder = onReorder && target.type === "item" && isInternal && (target.dropPosition === "before" || target.dropPosition === "after") && $e672e8bc247525d1$var$isDraggingWithinParent(collection, target, draggingKeys);
			let isItemDropAllowed = target.type !== "item" || target.dropPosition !== "on" || !shouldAcceptItemDrop || shouldAcceptItemDrop(target, types);
			let isValidMove = onMove && target.type === "item" && isInternal && isItemDropAllowed;
			let isValidRootDrop = onRootDrop && target.type === "root" && !isInternal;
			let isValidOnItemDrop = onItemDrop && target.type === "item" && target.dropPosition === "on" && !(isInternal && target.key != null && draggingKeys.has(target.key)) && isItemDropAllowed;
			if (onDrop || isValidInsert || isValidReorder || isValidMove || isValidRootDrop || isValidOnItemDrop) if (getDropOperation) return getDropOperation(target, types, allowedOperations);
			else return allowedOperations[0];
		}
		return "cancel";
	}, [
		isDisabled,
		collection,
		acceptedDragTypes,
		getDropOperation,
		onInsert,
		onRootDrop,
		onItemDrop,
		shouldAcceptItemDrop,
		onReorder,
		onMove,
		onDrop
	]);
	return {
		collection,
		selectionManager,
		isDisabled,
		target,
		setTarget(newTarget) {
			if (this.isDropTarget(newTarget)) return;
			let target = targetRef.current;
			if (target && typeof props.onDropExit === "function") props.onDropExit({
				type: "dropexit",
				x: 0,
				y: 0,
				target
			});
			if (newTarget && typeof onDropEnter === "function") onDropEnter({
				type: "dropenter",
				x: 0,
				y: 0,
				target: newTarget
			});
			targetRef.current = newTarget !== null && newTarget !== void 0 ? newTarget : null;
			setTarget(newTarget !== null && newTarget !== void 0 ? newTarget : null);
		},
		isDropTarget(dropTarget) {
			let target = targetRef.current;
			if (!target || !dropTarget) return false;
			if ($e672e8bc247525d1$var$isEqualDropTarget(dropTarget, target)) return true;
			if ((dropTarget === null || dropTarget === void 0 ? void 0 : dropTarget.type) === "item" && (target === null || target === void 0 ? void 0 : target.type) === "item" && dropTarget.key !== target.key && dropTarget.dropPosition !== target.dropPosition && dropTarget.dropPosition !== "on" && target.dropPosition !== "on") return $e672e8bc247525d1$var$isEqualDropTarget(getOppositeTarget(dropTarget), target) || $e672e8bc247525d1$var$isEqualDropTarget(dropTarget, getOppositeTarget(target));
			return false;
		},
		getDropOperation(e) {
			return defaultGetDropOperation(e);
		}
	};
}
function $e672e8bc247525d1$var$isEqualDropTarget(a, b) {
	if (!a) return !b;
	switch (a.type) {
		case "root": return (b === null || b === void 0 ? void 0 : b.type) === "root";
		case "item": return (b === null || b === void 0 ? void 0 : b.type) === "item" && (b === null || b === void 0 ? void 0 : b.key) === a.key && (b === null || b === void 0 ? void 0 : b.dropPosition) === a.dropPosition;
	}
}
function $e672e8bc247525d1$var$isDraggingWithinParent(collection, target, draggingKeys) {
	let targetNode = collection.getItem(target.key);
	for (let key of draggingKeys) {
		let node = collection.getItem(key);
		if ((node === null || node === void 0 ? void 0 : node.parentKey) !== (targetNode === null || targetNode === void 0 ? void 0 : targetNode.parentKey)) return false;
	}
	return true;
}
//#endregion
//#region ../../node_modules/react-aria-components/dist/useDragAndDrop.mjs
function $d8f176866e6dc039$export$2cfc5be7a55829f6(options) {
	return { dragAndDropHooks: (0, import_react.useMemo)(() => {
		let { onDrop, onInsert, onItemDrop, onReorder, onMove, onRootDrop, getItems, renderDragPreview, renderDropIndicator, dropTargetDelegate } = options;
		let isDraggable = !!getItems;
		let isDroppable = !!(onDrop || onInsert || onItemDrop || onReorder || onMove || onRootDrop);
		let hooks = {};
		if (isDraggable) {
			hooks.useDraggableCollectionState = function useDraggableCollectionStateOverride(props) {
				return $b45bbbaf0c3785df$export$29efd034f1d79f81({
					...props,
					...options
				});
			};
			hooks.useDraggableCollection = $4ac1fdc3a0fcd564$export$2962a7984b2f0a80;
			hooks.useDraggableItem = $fd98cf7cbf233429$export$b35afafff42da2d9;
			hooks.DragPreview = $ad0e3f3d9c50e4ba$export$905ab40ac2179daa;
			hooks.renderDragPreview = renderDragPreview;
			hooks.isVirtualDragging = $67560de7c78cb232$export$403bc76cbf68cf60;
		}
		if (isDroppable) {
			hooks.useDroppableCollectionState = function useDroppableCollectionStateOverride(props) {
				return $e672e8bc247525d1$export$926850f6ecef79d0({
					...props,
					...options
				});
			};
			hooks.useDroppableItem = $bfaab576ce1c580e$export$f7b0c5d28b66b6a5;
			hooks.useDroppableCollection = function useDroppableCollectionOverride(props, state, ref) {
				return $4b52e4eff84e5217$export$f4e2f423c21f7b04({
					...props,
					...options
				}, state, ref);
			};
			hooks.useDropIndicator = $ddf25448c71fc93a$export$8d0e41d2815afac5;
			hooks.renderDropIndicator = renderDropIndicator;
			hooks.dropTargetDelegate = dropTargetDelegate;
			hooks.ListDropTargetDelegate = $3ca85212bf8898e4$export$fbd65d14c79e28cc;
		}
		return hooks;
	}, [options]) };
}
//#endregion
//#region ../component-library/src/Card.tsx
var import_jsx_runtime = require_jsx_runtime();
var Card = (0, import_react.forwardRef)(({ children, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		...props,
		ref,
		style: {
			marginTop: 15,
			marginLeft: 5,
			marginRight: 5,
			borderRadius: 6,
			backgroundColor: theme.cardBackground,
			borderColor: theme.cardBorder,
			boxShadow: "0 1px 2px #9594A8",
			...props.style
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				borderRadius: 6,
				overflow: "hidden"
			},
			children
		})
	});
});
Card.displayName = "Card";
//#endregion
//#region src/components/SyncRefresh.tsx
function SyncRefresh({ onSync, children }) {
	const [syncing, setSyncing] = (0, import_react.useState)(false);
	async function onSync_() {
		setSyncing(true);
		await onSync();
		setSyncing(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: children({
		refreshing: syncing,
		onRefresh: onSync_
	}) });
}
//#endregion
//#region src/hooks/useOverspentCategories.ts
function useOverspentCategories({ month }) {
	const spreadsheet = useSpreadsheet();
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	const { data: { list: categories, grouped: categoryGroups } = {
		list: [],
		grouped: []
	} } = useCategories();
	const categoryGroupsById = (0, import_react.useMemo)(() => groupById(categoryGroups), [categoryGroups]);
	const categoryBalanceBindings = (0, import_react.useMemo)(() => categories.map((category) => [category.id, budgetType === "tracking" ? trackingBudget.catBalance(category.id) : envelopeBudget.catBalance(category.id)]), [budgetType, categories]);
	const categoryCarryoverBindings = (0, import_react.useMemo)(() => categories.map((category) => [category.id, budgetType === "tracking" ? trackingBudget.catCarryover(category.id) : envelopeBudget.catCarryover(category.id)]), [budgetType, categories]);
	const [overspendingByCategory, setOverspendingByCategory] = (0, import_react.useState)({});
	const [carryoverFlagByCategory, setCarryoverFlagByCategory] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		setOverspendingByCategory({});
		setCarryoverFlagByCategory({});
	}, [month]);
	const sheetName = sheetForMonth(month);
	(0, import_react.useEffect)(() => {
		const unbindList = [];
		for (const [categoryId, carryoverBinding] of categoryCarryoverBindings) {
			const unbind = spreadsheet.bind(sheetName, carryoverBinding, (result) => {
				const isRolloverEnabled = Boolean(result.value);
				if (isRolloverEnabled) setCarryoverFlagByCategory((prev) => ({
					...prev,
					[categoryId]: isRolloverEnabled
				}));
				else setCarryoverFlagByCategory((prev) => {
					const { [categoryId]: _, ...rest } = prev;
					return rest;
				});
			});
			unbindList.push(unbind);
		}
		return () => {
			unbindList.forEach((unbind) => unbind());
		};
	}, [
		categoryCarryoverBindings,
		sheetName,
		spreadsheet
	]);
	(0, import_react.useEffect)(() => {
		const unbindList = [];
		for (const [categoryId, balanceBinding] of categoryBalanceBindings) {
			const unbind = spreadsheet.bind(sheetName, balanceBinding, (result) => {
				const balance = result.value;
				if (balance < 0) setOverspendingByCategory((prev) => ({
					...prev,
					[categoryId]: balance
				}));
				else if (balance >= 0) setOverspendingByCategory((prev) => {
					const { [categoryId]: _, ...rest } = prev;
					return rest;
				});
			});
			unbindList.push(unbind);
		}
		return () => {
			unbindList.forEach((unbind) => unbind());
		};
	}, [
		categoryBalanceBindings,
		sheetName,
		spreadsheet
	]);
	return (0, import_react.useMemo)(() => {
		const categoryIdsToReturn = Object.keys(overspendingByCategory).filter((id) => !carryoverFlagByCategory[id]);
		const categoriesToReturn = categories.filter((category) => categoryIdsToReturn.includes(category.id) && !category.is_income).filter((category) => budgetType === "tracking" ? !category.hidden && !categoryGroupsById[category.group]?.hidden : true);
		const amountsByCategory = new Map(categoriesToReturn.map((category) => [category.id, overspendingByCategory[category.id]]));
		return {
			categories: categoriesToReturn,
			amountsByCategory,
			totalAmount: Array.from(amountsByCategory.values()).reduce((sum, value) => sum + value, 0)
		};
	}, [
		budgetType,
		carryoverFlagByCategory,
		categories,
		categoryGroupsById,
		overspendingByCategory
	]);
}
//#endregion
//#region ../../node_modules/react-simple-pull-to-refresh/build/index.esm.js
var DIRECTION;
(function(DIRECTION) {
	DIRECTION[DIRECTION["UP"] = -1] = "UP";
	DIRECTION[DIRECTION["DOWN"] = 1] = "DOWN";
})(DIRECTION || (DIRECTION = {}));
function isOverflowScrollable(element) {
	var overflowType = getComputedStyle(element).overflowY;
	if (element === document.scrollingElement && overflowType === "visible") return true;
	if (overflowType !== "scroll" && overflowType !== "auto") return false;
	return true;
}
function isScrollable(element, direction) {
	if (!isOverflowScrollable(element)) return false;
	if (direction === DIRECTION.DOWN) return element.scrollTop + element.clientHeight < element.scrollHeight;
	if (direction === DIRECTION.UP) return element.scrollTop > 0;
	throw new Error("unsupported direction");
}
/**
* Returns whether a given element or any of its ancestors (up to rootElement) is scrollable in a given direction.
*/
function isTreeScrollable(element, direction) {
	if (isScrollable(element, direction)) return true;
	if (element.parentElement == null) return false;
	return isTreeScrollable(element.parentElement, direction);
}
function styleInject(css, ref) {
	if (ref === void 0) ref = {};
	var insertAt = ref.insertAt;
	if (!css || typeof document === "undefined") return;
	var head = document.head || document.getElementsByTagName("head")[0];
	var style = document.createElement("style");
	style.type = "text/css";
	if (insertAt === "top") if (head.firstChild) head.insertBefore(style, head.firstChild);
	else head.appendChild(style);
	else head.appendChild(style);
	if (style.styleSheet) style.styleSheet.cssText = css;
	else style.appendChild(document.createTextNode(css));
}
styleInject(".lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-ellipsis div {\n  position: absolute;\n  top: 27px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: rgb(54, 54, 54);\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.lds-ellipsis div:nth-child(1) {\n  left: 6px;\n  animation: lds-ellipsis1 0.6s infinite;\n}\n\n.lds-ellipsis div:nth-child(2) {\n  left: 6px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis div:nth-child(3) {\n  left: 26px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis div:nth-child(4) {\n  left: 45px;\n  animation: lds-ellipsis3 0.6s infinite;\n}\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(19px, 0);\n  }\n}");
var RefreshingContent = function() {
	return import_react.createElement("div", { className: "lds-ellipsis" }, import_react.createElement("div", null), import_react.createElement("div", null), import_react.createElement("div", null), import_react.createElement("div", null));
};
var PullingContent = function() {
	return import_react.createElement("div", null, import_react.createElement("p", null, "↧\xA0\xA0pull to refresh\xA0\xA0↧"));
};
styleInject(".ptr,\n.ptr__children {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  position: relative;\n}\n\n.ptr.ptr--fetch-more-treshold-breached .ptr__fetch-more {\n  display: block;\n}\n\n.ptr__fetch-more {\n  display: none;\n}\n\n/**\n  * Pull down transition \n  */\n.ptr__children,\n.ptr__pull-down {\n  transition: transform 0.2s cubic-bezier(0, 0, 0.31, 1);\n}\n\n.ptr__pull-down {\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n}\n.ptr__pull-down > div {\n  display: none;\n}\n\n.ptr--dragging {\n  /**\n    * Hide PullMore content is treshold breached\n    */\n}\n.ptr--dragging.ptr--pull-down-treshold-breached .ptr__pull-down--pull-more {\n  display: none;\n}\n.ptr--dragging {\n  /**\n    * Otherwize, display content\n    */\n}\n.ptr--dragging .ptr__pull-down--pull-more {\n  display: block;\n}\n\n.ptr--pull-down-treshold-breached {\n  /**\n    * Force opacity to 1 is pull down trashold breached\n    */\n}\n.ptr--pull-down-treshold-breached .ptr__pull-down {\n  opacity: 1 !important;\n}\n.ptr--pull-down-treshold-breached {\n  /**\n    * And display loader\n    */\n}\n.ptr--pull-down-treshold-breached .ptr__pull-down--loading {\n  display: block;\n}\n\n.ptr__loader {\n  margin: 0 auto;\n  text-align: center;\n}");
var PullToRefresh$1 = function(_a) {
	var _b = _a.isPullable, isPullable = _b === void 0 ? true : _b, _c = _a.canFetchMore, canFetchMore = _c === void 0 ? false : _c, onRefresh = _a.onRefresh, onFetchMore = _a.onFetchMore, _d = _a.refreshingContent, refreshingContent = _d === void 0 ? import_react.createElement(RefreshingContent, null) : _d, _e = _a.pullingContent, pullingContent = _e === void 0 ? import_react.createElement(PullingContent, null) : _e, children = _a.children, _f = _a.pullDownThreshold, pullDownThreshold = _f === void 0 ? 67 : _f, _g = _a.fetchMoreThreshold, fetchMoreThreshold = _g === void 0 ? 100 : _g, _h = _a.maxPullDownDistance, maxPullDownDistance = _h === void 0 ? 95 : _h, _j = _a.resistance, resistance = _j === void 0 ? 1 : _j, backgroundColor = _a.backgroundColor, _k = _a.className, className = _k === void 0 ? "" : _k;
	var containerRef = (0, import_react.useRef)(null);
	var childrenRef = (0, import_react.useRef)(null);
	var pullDownRef = (0, import_react.useRef)(null);
	var fetchMoreRef = (0, import_react.useRef)(null);
	var pullToRefreshThresholdBreached = false;
	var fetchMoreTresholdBreached = false;
	var isDragging = false;
	var startY = 0;
	var currentY = 0;
	(0, import_react.useEffect)(function() {
		if (!isPullable || !childrenRef || !childrenRef.current) return;
		var childrenEl = childrenRef.current;
		childrenEl.addEventListener("touchstart", onTouchStart, { passive: true });
		childrenEl.addEventListener("mousedown", onTouchStart);
		childrenEl.addEventListener("touchmove", onTouchMove, { passive: false });
		childrenEl.addEventListener("mousemove", onTouchMove);
		window.addEventListener("scroll", onScroll);
		childrenEl.addEventListener("touchend", onEnd);
		childrenEl.addEventListener("mouseup", onEnd);
		document.body.addEventListener("mouseleave", onEnd);
		return function() {
			childrenEl.removeEventListener("touchstart", onTouchStart);
			childrenEl.removeEventListener("mousedown", onTouchStart);
			childrenEl.removeEventListener("touchmove", onTouchMove);
			childrenEl.removeEventListener("mousemove", onTouchMove);
			window.removeEventListener("scroll", onScroll);
			childrenEl.removeEventListener("touchend", onEnd);
			childrenEl.removeEventListener("mouseup", onEnd);
			document.body.removeEventListener("mouseleave", onEnd);
		};
	}, [
		children,
		isPullable,
		onRefresh,
		pullDownThreshold,
		maxPullDownDistance,
		canFetchMore,
		fetchMoreThreshold
	]);
	/**
	* Check onMount / canFetchMore becomes true
	*  if fetchMoreThreshold is already breached
	*/
	(0, import_react.useEffect)(function() {
		var _a;
		/**
		* Check if it is already in fetching more state
		*/
		if (!((_a = containerRef) === null || _a === void 0 ? void 0 : _a.current)) return;
		if (containerRef.current.classList.contains("ptr--fetch-more-treshold-breached")) return;
		/**
		* Proceed
		*/
		if (canFetchMore && getScrollToBottomValue() < fetchMoreThreshold && onFetchMore) {
			containerRef.current.classList.add("ptr--fetch-more-treshold-breached");
			fetchMoreTresholdBreached = true;
			onFetchMore().then(initContainer).catch(initContainer);
		}
	}, [canFetchMore, children]);
	/**
	* Returns distance to bottom of the container
	*/
	var getScrollToBottomValue = function() {
		if (!childrenRef || !childrenRef.current) return -1;
		var scrollTop = window.scrollY;
		return childrenRef.current.scrollHeight - scrollTop - window.innerHeight;
	};
	var initContainer = function() {
		requestAnimationFrame(function() {
			/**
			* Reset Styles
			*/
			if (childrenRef.current) {
				childrenRef.current.style.overflowX = "hidden";
				childrenRef.current.style.overflowY = "auto";
				childrenRef.current.style.transform = "unset";
			}
			if (pullDownRef.current) pullDownRef.current.style.opacity = "0";
			if (containerRef.current) {
				containerRef.current.classList.remove("ptr--pull-down-treshold-breached");
				containerRef.current.classList.remove("ptr--dragging");
				containerRef.current.classList.remove("ptr--fetch-more-treshold-breached");
			}
			if (pullToRefreshThresholdBreached) pullToRefreshThresholdBreached = false;
			if (fetchMoreTresholdBreached) fetchMoreTresholdBreached = false;
		});
	};
	var onTouchStart = function(e) {
		isDragging = false;
		if (e instanceof MouseEvent) startY = e.pageY;
		if (window.TouchEvent && e instanceof TouchEvent) startY = e.touches[0].pageY;
		currentY = startY;
		if (e.type === "touchstart" && isTreeScrollable(e.target, DIRECTION.UP)) return;
		if (childrenRef.current.getBoundingClientRect().top < 0) return;
		isDragging = true;
	};
	var onTouchMove = function(e) {
		if (!isDragging) return;
		if (window.TouchEvent && e instanceof TouchEvent) currentY = e.touches[0].pageY;
		else currentY = e.pageY;
		containerRef.current.classList.add("ptr--dragging");
		if (currentY < startY) {
			isDragging = false;
			return;
		}
		if (e.cancelable) e.preventDefault();
		var yDistanceMoved = Math.min((currentY - startY) / resistance, maxPullDownDistance);
		if (yDistanceMoved >= pullDownThreshold) {
			isDragging = true;
			pullToRefreshThresholdBreached = true;
			containerRef.current.classList.remove("ptr--dragging");
			containerRef.current.classList.add("ptr--pull-down-treshold-breached");
		}
		if (yDistanceMoved >= maxPullDownDistance) return;
		pullDownRef.current.style.opacity = (yDistanceMoved / 65).toString();
		childrenRef.current.style.overflow = "visible";
		childrenRef.current.style.transform = "translate(0px, " + yDistanceMoved + "px)";
		pullDownRef.current.style.visibility = "visible";
	};
	var onScroll = function(e) {
		/**
		* Check if component has already called onFetchMore
		*/
		if (fetchMoreTresholdBreached) return;
		/**
		* Check if user breached fetchMoreThreshold
		*/
		if (canFetchMore && getScrollToBottomValue() < fetchMoreThreshold && onFetchMore) {
			fetchMoreTresholdBreached = true;
			containerRef.current.classList.add("ptr--fetch-more-treshold-breached");
			onFetchMore().then(initContainer).catch(initContainer);
		}
	};
	var onEnd = function() {
		isDragging = false;
		startY = 0;
		currentY = 0;
		if (!pullToRefreshThresholdBreached) {
			if (pullDownRef.current) pullDownRef.current.style.visibility = "hidden";
			initContainer();
			return;
		}
		if (childrenRef.current) {
			childrenRef.current.style.overflow = "visible";
			childrenRef.current.style.transform = "translate(0px, " + pullDownThreshold + "px)";
		}
		onRefresh().then(initContainer).catch(initContainer);
	};
	return import_react.createElement("div", {
		className: "ptr " + className,
		style: { backgroundColor },
		ref: containerRef
	}, import_react.createElement("div", {
		className: "ptr__pull-down",
		ref: pullDownRef
	}, import_react.createElement("div", { className: "ptr__loader ptr__pull-down--loading" }, refreshingContent), import_react.createElement("div", { className: "ptr__pull-down--pull-more" }, pullingContent)), import_react.createElement("div", {
		className: "ptr__children",
		ref: childrenRef
	}, children, import_react.createElement("div", {
		className: "ptr__fetch-more",
		ref: fetchMoreRef
	}, import_react.createElement("div", { className: "ptr__loader ptr__fetch-more--loading" }, refreshingContent))));
};
//#endregion
//#region src/components/mobile/PullToRefresh.tsx
function PullToRefresh(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			overflow: "auto",
			flex: 1
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullToRefresh$1, {
			pullDownThreshold: 80,
			resistance: 2,
			className: css({
				"& .ptr__pull-down": { textAlign: "center" },
				"& .ptr__children": { overflow: "hidden auto" },
				...props.style || {}
			}),
			...props,
			onRefresh: async () => {
				await props.onRefresh?.();
			}
		})
	});
}
//#endregion
//#region src/components/mobile/budget/BalanceCell.tsx
function BalanceCell({ binding, category, show3Columns, onPress, "aria-label": ariaLabel }) {
	const { t } = useTranslation();
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	const columnWidth = getColumnWidth({ show3Columns });
	const goal = budgetType === "tracking" ? trackingBudget.catGoal(category.id) : envelopeBudget.catGoal(category.id);
	const longGoal = budgetType === "tracking" ? trackingBudget.catLongGoal(category.id) : envelopeBudget.catLongGoal(category.id);
	const budgeted = budgetType === "tracking" ? trackingBudget.catBudgeted(category.id) : envelopeBudget.catBudgeted(category.id);
	const carryover = budgetType === "tracking" ? trackingBudget.catCarryover(category.id) : envelopeBudget.catCarryover(category.id);
	const format = useFormat();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BalanceWithCarryover, {
		"aria-label": t("Balance for {{categoryName}} category", { categoryName: category.name }),
		type: "financial",
		carryover,
		balance: binding,
		goal,
		budgeted,
		longGoal,
		CarryoverIndicator: MobileCarryoverIndicator,
		children: ({ type, value, className: defaultClassName }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			style: {
				...PILL_STYLE,
				maxWidth: columnWidth
			},
			onPress,
			"aria-label": ariaLabel,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
				as: Text,
				minFontSizePx: 6,
				maxFontSizePx: 12,
				mode: "oneline",
				className: cx(defaultClassName, css({
					...styles.tnum,
					maxWidth: columnWidth,
					textAlign: "right",
					fontSize: 12
				})),
				children: format(value, type)
			}, value) })
		})
	});
}
function MobileCarryoverIndicator({ style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			position: "absolute",
			right: "-3px",
			top: "-5px",
			borderRadius: "50%",
			backgroundColor: style?.color ?? theme.pillText
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgArrowThickRight, {
			width: 11,
			height: 11,
			style: { color: theme.pillBackgroundLight }
		})
	});
}
//#endregion
//#region src/components/mobile/budget/BudgetCell.tsx
function BudgetCell({ binding, category, month, onBudgetAction, children, ...props }) {
	const { t } = useTranslation();
	const locale = useLocale();
	const columnWidth = getColumnWidth();
	const dispatch = useDispatch();
	const format$3 = useFormat();
	const { showUndoNotification } = useUndo();
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	const categoryNotes = useNotes(category.id);
	const onSaveNotes = (0, import_react.useCallback)(async (id, notes) => {
		await send("notes-save", {
			id,
			note: notes
		});
	}, []);
	const onEditNotes = (0, import_react.useCallback)((id, month) => {
		dispatch(pushModal({ modal: {
			name: "notes",
			options: {
				id,
				name: category.name + " - " + format(month, "MMMM ''yy", locale),
				onSave: onSaveNotes
			}
		} }));
	}, [
		category.name,
		locale,
		dispatch,
		onSaveNotes
	]);
	const onOpenCategoryBudgetMenu = (0, import_react.useCallback)(() => {
		dispatch(pushModal({ modal: {
			name: `${budgetType === "envelope" ? "envelope" : "tracking"}-budget-menu`,
			options: {
				categoryId: category.id,
				month,
				onEditNotes,
				onUpdateBudget: (amount) => {
					onBudgetAction(month, "budget-amount", {
						category: category.id,
						amount
					});
					showUndoNotification({ message: `${category.name} budget has been updated to ${format$3(amount, "financial")}.` });
				},
				onCopyLastMonthAverage: () => {
					onBudgetAction(month, "copy-single-last", { category: category.id });
					showUndoNotification({ message: `${category.name} budget has been set to last month's budgeted amount.` });
				},
				onSetMonthsAverage: (numberOfMonths) => {
					if (numberOfMonths !== 3 && numberOfMonths !== 6 && numberOfMonths !== 12) return;
					onBudgetAction(month, `set-single-${numberOfMonths}-avg`, { category: category.id });
					showUndoNotification({ message: `${category.name} budget has been set to ${numberOfMonths === 12 ? "yearly" : `${numberOfMonths} month`} average.` });
				},
				onApplyBudgetTemplate: () => {
					onBudgetAction(month, "apply-single-category-template", { category: category.id });
					showUndoNotification({
						message: `${category.name} budget templates have been applied.`,
						pre: categoryNotes ?? void 0
					});
				}
			}
		} }));
	}, [
		budgetType,
		category.id,
		category.name,
		categoryNotes,
		dispatch,
		month,
		onBudgetAction,
		showUndoNotification,
		onEditNotes,
		format$3
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
		binding,
		type: "financial",
		"aria-label": t("Budgeted amount for {{categoryName}} category", { categoryName: category.name }),
		...props,
		children: ({ type, name, value }) => children?.({
			type,
			name,
			value
		}) || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			style: {
				...PILL_STYLE,
				maxWidth: columnWidth,
				...makeAmountGrey(value)
			},
			onPress: onOpenCategoryBudgetMenu,
			"aria-label": t("Open budget menu for {{categoryName}} category", { categoryName: category.name }),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
				as: Text,
				minFontSizePx: 6,
				maxFontSizePx: 12,
				mode: "oneline",
				style: {
					...styles.tnum,
					maxWidth: columnWidth,
					textAlign: "right",
					fontSize: 12
				},
				children: format$3(value, type)
			}, value) })
		})
	});
}
//#endregion
//#region src/components/mobile/budget/SpentCell.tsx
function SpentCell({ binding, category, month, show3Columns, onPress }) {
	const { t } = useTranslation();
	const format = useFormat();
	const columnWidth = getColumnWidth({ show3Columns });
	const { schedule, scheduleStatus, isScheduleRecurring } = useCategoryScheduleGoalTemplateIndicator({
		category,
		month
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
		binding,
		type: "financial",
		"aria-label": t("Spent amount for {{categoryName}} category", { categoryName: category.name }),
		children: ({ type, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			style: { ...PILL_STYLE },
			onPress,
			"aria-label": t("Show transactions for {{categoryName}} category", { categoryName: category.name }),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
				as: Text,
				minFontSizePx: 6,
				maxFontSizePx: 12,
				mode: "oneline",
				style: {
					...styles.tnum,
					...makeAmountGrey(value),
					maxWidth: columnWidth,
					textAlign: "right",
					fontSize: 12
				},
				children: format(value, type)
			}, value) })
		}), schedule && scheduleStatus && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				position: "absolute",
				right: "-3px",
				top: "-5px",
				borderRadius: "50%",
				color: scheduleStatus === "missed" ? theme.errorText : scheduleStatus === "due" ? theme.warningText : theme.upcomingText
			},
			children: isScheduleRecurring ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgArrowsSynchronize, {
				width: 11,
				height: 11
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCalendar3, {
				width: 10,
				height: 10
			})
		})] })
	});
}
//#endregion
//#region src/components/mobile/budget/ExpenseCategoryListItem.tsx
function ExpenseCategoryName({ category, onEditCategory, show3Columns }) {
	const sidebarColumnWidth = getColumnWidth({
		show3Columns,
		isSidebar: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flex: 1,
			justifyContent: "center",
			alignItems: "flex-start"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			slot: "drag",
			style: {
				opacity: 0,
				width: 1,
				height: 1,
				position: "absolute",
				overflow: "hidden"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			style: { maxWidth: sidebarColumnWidth },
			onPress: () => onEditCategory?.(category.id),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-start"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					style: {
						...styles.lineClamp(2),
						width: sidebarColumnWidth,
						textAlign: "left",
						...styles.smallText
					},
					"data-testid": "category-name",
					children: category.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCheveronRight, {
					style: {
						flexShrink: 0,
						color: theme.tableTextSubdued
					},
					width: 14,
					height: 14
				})]
			})
		})]
	});
}
function ExpenseCategoryCells({ category, month, onBudgetAction, show3Columns, showBudgetedColumn, onOpenBalanceMenu, onShowActivity }) {
	const { t } = useTranslation();
	const columnWidth = getColumnWidth({
		show3Columns,
		isSidebar: false
	});
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	const budgeted = budgetType === "tracking" ? trackingBudget.catBudgeted(category.id) : envelopeBudget.catBudgeted(category.id);
	const spent = budgetType === "tracking" ? trackingBudget.catSumAmount(category.id) : envelopeBudget.catSumAmount(category.id);
	const balance = budgetType === "tracking" ? trackingBudget.catBalance(category.id) : envelopeBudget.catBalance(category.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			justifyContent: "flex-end",
			alignItems: "center",
			flexDirection: "row"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					...!show3Columns && !showBudgetedColumn && { display: "none" },
					width: columnWidth,
					justifyContent: "center",
					alignItems: "flex-end"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetCell, {
					binding: budgeted,
					type: "financial",
					category,
					month,
					onBudgetAction
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					...!show3Columns && showBudgetedColumn && { display: "none" },
					width: columnWidth,
					justifyContent: "center",
					alignItems: "flex-end"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpentCell, {
					binding: spent,
					category,
					month,
					show3Columns,
					onPress: onShowActivity
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					width: columnWidth,
					justifyContent: "center",
					alignItems: "flex-end"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BalanceCell, {
					binding: balance,
					category,
					show3Columns,
					onPress: onOpenBalanceMenu,
					"aria-label": t("Open balance menu for {{categoryName}} category", { categoryName: category.name })
				})
			})
		]
	});
}
function ExpenseCategoryListItem({ month, isHidden, onEditCategory, onBudgetAction, show3Columns, showBudgetedColumn, ...props }) {
	const { value: category } = props;
	const { t } = useTranslation();
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	const format = useFormat();
	const balanceMenuModalName = `${budgetType}-balance-menu`;
	const dispatch = useDispatch();
	const { showUndoNotification } = useUndo();
	const { data: { list: categoriesById } = { list: {} } } = useCategoriesById();
	const onCarryover = (0, import_react.useCallback)((carryover) => {
		if (!category) return;
		onBudgetAction(month, "carryover", {
			category: category.id,
			flag: carryover
		});
		dispatch(collapseModals({ rootModalName: balanceMenuModalName }));
	}, [
		category,
		onBudgetAction,
		month,
		dispatch,
		balanceMenuModalName
	]);
	const catBalance = useSheetValue(budgetType === "envelope" ? envelopeBudget.catBalance(category?.id) : trackingBudget.catBalance(category?.id));
	const onTransfer = (0, import_react.useCallback)(() => {
		if (!category) return;
		dispatch(pushModal({ modal: {
			name: "transfer",
			options: {
				title: category.name,
				categoryId: category.id,
				month,
				amount: catBalance || 0,
				onSubmit: (amount, toCategoryId) => {
					onBudgetAction(month, "transfer-category", {
						amount,
						from: category.id,
						to: toCategoryId,
						currencyCode: format.currency.code
					});
					dispatch(collapseModals({ rootModalName: balanceMenuModalName }));
					showUndoNotification({ message: t("Transferred {{amount}} from {{fromCategoryName}} to {{toCategoryName}}.", {
						amount: format(amount, "financial"),
						fromCategoryName: category.name,
						toCategoryName: categoriesById[toCategoryId].name
					}) });
				},
				showToBeBudgeted: true
			}
		} }));
	}, [
		category,
		dispatch,
		month,
		catBalance,
		onBudgetAction,
		balanceMenuModalName,
		showUndoNotification,
		categoriesById,
		format,
		t
	]);
	const onCover = (0, import_react.useCallback)(() => {
		if (!category) return;
		dispatch(pushModal({ modal: {
			name: "cover",
			options: {
				title: category.name,
				month,
				amount: catBalance,
				categoryId: category.id,
				onSubmit: (amount, fromCategoryId) => {
					onBudgetAction(month, "cover-overspending", {
						to: category.id,
						from: fromCategoryId,
						amount,
						currencyCode: format.currency.code
					});
					dispatch(collapseModals({ rootModalName: balanceMenuModalName }));
					showUndoNotification({ message: t(`Covered {{amount}} {{toCategoryName}} overspending from {{fromCategoryName}}.`, {
						amount: format(amount, "financial"),
						toCategoryName: category.name,
						fromCategoryName: categoriesById[fromCategoryId].name
					}) });
				}
			}
		} }));
	}, [
		category,
		dispatch,
		month,
		catBalance,
		onBudgetAction,
		balanceMenuModalName,
		showUndoNotification,
		t,
		categoriesById,
		format
	]);
	const onOpenBalanceMenu = (0, import_react.useCallback)(() => {
		if (!category) return;
		if (balanceMenuModalName === "envelope-balance-menu") dispatch(pushModal({ modal: {
			name: balanceMenuModalName,
			options: {
				month,
				categoryId: category.id,
				onCarryover,
				onTransfer,
				onCover
			}
		} }));
		else dispatch(pushModal({ modal: {
			name: balanceMenuModalName,
			options: {
				month,
				categoryId: category.id,
				onCarryover
			}
		} }));
	}, [
		category,
		balanceMenuModalName,
		dispatch,
		month,
		onCarryover,
		onTransfer,
		onCover
	]);
	const navigate = useNavigate();
	const onShowActivity = (0, import_react.useCallback)(() => {
		if (!category) return;
		navigate(`/categories/${category.id}?month=${month}`);
	}, [
		category,
		month,
		navigate
	]);
	if (!category) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($72e60046c03fbe42$export$e96fc9a8407faa6b, {
		textValue: category.name,
		"data-testid": "category-row",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				height: 50,
				borderColor: theme.tableBorder,
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				paddingLeft: 5,
				paddingRight: 5,
				borderBottomWidth: 1,
				opacity: isHidden ? .5 : void 0,
				backgroundColor: isCurrentMonth(month) ? theme.budgetCurrentMonth : theme.budgetOtherMonth
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseCategoryName, {
				category,
				onEditCategory,
				show3Columns
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseCategoryCells, {
				category,
				month,
				onBudgetAction,
				show3Columns,
				showBudgetedColumn,
				onOpenBalanceMenu,
				onShowActivity
			}, `${category.id}-${show3Columns}-${showBudgetedColumn}`)]
		})
	});
}
//#endregion
//#region src/components/mobile/budget/ExpenseCategoryList.tsx
function ExpenseCategoryList({ categoryGroup, categories, month, onEditCategory, onBudgetAction, show3Columns, showBudgetedColumn, shouldHideCategory }) {
	const { t } = useTranslation();
	const moveCategory = useMoveCategoryMutation();
	const { dragAndDropHooks } = $d8f176866e6dc039$export$2cfc5be7a55829f6({
		getItems: (keys) => [...keys].map((key) => ({ "text/plain": key })),
		renderDropIndicator: (target) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($612b8eb6cb90e02d$export$62ed72bc21f6b8a6, {
				target,
				className: css({ "&[data-drop-target]": {
					height: 4,
					backgroundColor: theme.tableBorderSeparator,
					opacity: 1,
					borderRadius: 4
				} })
			});
		},
		onReorder: (e) => {
			const [key] = e.keys;
			const categoryIdToMove = key;
			const categoryToMove = categories.find((c) => c.id === categoryIdToMove);
			if (!categoryToMove) throw new Error(`Internal error: category with ID ${categoryIdToMove} not found.`);
			if (!categoryToMove.group) throw new Error(`Internal error: category ${categoryIdToMove} is not in a group and cannot be moved.`);
			const targetCategoryId = e.target.key;
			if (e.target.dropPosition === "before") moveCategory.mutate({
				id: categoryToMove.id,
				groupId: categoryToMove.group,
				targetId: targetCategoryId
			});
			else if (e.target.dropPosition === "after") {
				const targetCategoryIndex = categories.findIndex((c) => c.id === targetCategoryId);
				if (targetCategoryIndex === -1) throw new Error(`Internal error: category with ID ${targetCategoryId} not found.`);
				const nextToTargetCategory = categories[targetCategoryIndex + 1];
				moveCategory.mutate({
					id: categoryToMove.id,
					groupId: categoryToMove.group,
					targetId: nextToTargetCategory?.id || null
				});
			}
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($72e60046c03fbe42$export$a7bfbda1311ca015, {
		"aria-label": t("{{categoryGroupName}} expense group categories", { categoryGroupName: categoryGroup.name }),
		items: categories,
		dragAndDropHooks,
		dependencies: [
			month,
			onEditCategory,
			onBudgetAction,
			shouldHideCategory,
			show3Columns,
			showBudgetedColumn
		],
		children: (category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseCategoryListItem, {
			value: category,
			month,
			onEditCategory,
			onBudgetAction,
			isHidden: shouldHideCategory(category),
			show3Columns,
			showBudgetedColumn
		}, category.id)
	});
}
//#endregion
//#region src/components/mobile/budget/ExpenseGroupListItem.tsx
function ExpenseGroupListItem({ onEditCategoryGroup, onEditCategory, month, onBudgetAction, showBudgetedColumn, show3Columns, showHiddenCategories, isCollapsed, onToggleCollapse, isHidden, ...props }) {
	const { value: categoryGroup } = props;
	const categories = (0, import_react.useMemo)(() => !categoryGroup || isCollapsed(categoryGroup.id) ? [] : categoryGroup.categories?.filter((category) => !category.hidden || showHiddenCategories) ?? [], [
		categoryGroup,
		isCollapsed,
		showHiddenCategories
	]);
	const shouldHideCategory = (0, import_react.useCallback)((category) => {
		return !!(category.hidden || categoryGroup?.hidden);
	}, [categoryGroup?.hidden]);
	if (!categoryGroup) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($72e60046c03fbe42$export$e96fc9a8407faa6b, {
		textValue: categoryGroup.name,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			style: {
				marginTop: 4,
				marginBottom: 4
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseGroupHeader, {
				categoryGroup,
				month,
				showBudgetedColumn,
				show3Columns,
				onEditCategoryGroup,
				isCollapsed,
				onToggleCollapse,
				isHidden
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseCategoryList, {
				categoryGroup,
				categories,
				month,
				onEditCategory,
				onBudgetAction,
				shouldHideCategory,
				show3Columns,
				showBudgetedColumn
			})]
		})
	});
}
function ExpenseGroupHeader({ categoryGroup, month, onEditCategoryGroup, show3Columns, showBudgetedColumn, isCollapsed, onToggleCollapse, isHidden }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		"data-testid": "category-group-row",
		onClick: () => onToggleCollapse(categoryGroup.id),
		style: {
			cursor: "pointer",
			height: 50,
			borderBottomWidth: 1,
			borderColor: theme.tableBorder,
			flexDirection: "row",
			alignItems: "center",
			paddingLeft: 5,
			paddingRight: 5,
			opacity: isHidden ? .5 : void 0,
			backgroundColor: isCurrentMonth(month) ? theme.budgetHeaderCurrentMonth : theme.budgetHeaderOtherMonth
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseGroupName, {
			group: categoryGroup,
			onEditCategoryGroup,
			isCollapsed,
			onToggleCollapse,
			show3Columns
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseGroupCells, {
			group: categoryGroup,
			show3Columns,
			showBudgetedColumn
		})]
	});
}
function ExpenseGroupName({ group, onEditCategoryGroup, isCollapsed, onToggleCollapse, show3Columns }) {
	const sidebarColumnWidth = getColumnWidth({
		show3Columns,
		isSidebar: true,
		offset: -3.5
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flex: 1,
			flexDirection: "row",
			justifyContent: "flex-start",
			width: sidebarColumnWidth
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				slot: "drag",
				style: {
					opacity: 0,
					width: 1,
					height: 1,
					position: "absolute",
					overflow: "hidden"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "bare",
				className: css({
					flexShrink: 0,
					color: theme.pageTextSubdued,
					"&[data-pressed]": { backgroundColor: "transparent" },
					marginLeft: -5
				}),
				onPress: () => onToggleCollapse(group.id),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgExpandArrow, {
					width: 8,
					height: 8,
					style: {
						flexShrink: 0,
						transition: "transform .1s",
						transform: isCollapsed(group.id) ? "rotate(-90deg)" : ""
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "bare",
				style: { maxWidth: sidebarColumnWidth },
				onPress: () => onEditCategoryGroup(group.id),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "flex-start"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							...styles.lineClamp(2),
							width: sidebarColumnWidth,
							textAlign: "left",
							...styles.smallText,
							fontWeight: "500"
						},
						"data-testid": "category-group-name",
						children: group.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCheveronRight, {
						style: {
							flexShrink: 0,
							color: theme.tableTextSubdued
						},
						width: 14,
						height: 14
					})]
				})
			})
		]
	});
}
function ExpenseGroupCells({ group, show3Columns, showBudgetedColumn }) {
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	const format = useFormat();
	const columnWidth = getColumnWidth({ show3Columns });
	const amountStyle = {
		...styles.tnum,
		width: columnWidth,
		fontSize: 12,
		fontWeight: "500",
		paddingLeft: 5,
		textAlign: "right"
	};
	const budgeted = budgetType === "tracking" ? trackingBudget.groupBudgeted(group.id) : envelopeBudget.groupBudgeted(group.id);
	const spent = budgetType === "tracking" ? trackingBudget.groupSumAmount(group.id) : envelopeBudget.groupSumAmount(group.id);
	const balance = budgetType === "tracking" ? trackingBudget.groupBalance(group.id) : envelopeBudget.groupBalance(group.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flexDirection: "row",
			justifyContent: "flex-end",
			alignItems: "center",
			paddingRight: 5
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: { ...!show3Columns && !showBudgetedColumn && { display: "none" } },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
					binding: budgeted,
					type: "financial",
					children: ({ type, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
						as: Text,
						minFontSizePx: 6,
						maxFontSizePx: 12,
						mode: "oneline",
						style: amountStyle,
						children: format(value, type)
					}, value) }) })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: { ...!show3Columns && showBudgetedColumn && { display: "none" } },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
					binding: spent,
					type: "financial",
					children: ({ type, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
						as: Text,
						minFontSizePx: 6,
						maxFontSizePx: 12,
						mode: "oneline",
						style: amountStyle,
						children: format(value, type)
					}, value) }) })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
				binding: balance,
				type: "financial",
				children: ({ type, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
					as: Text,
					minFontSizePx: 6,
					maxFontSizePx: 12,
					mode: "oneline",
					style: amountStyle,
					children: format(value, type)
				}, value) }) })
			})
		]
	});
}
//#endregion
//#region src/components/mobile/budget/ExpenseGroupList.tsx
function ExpenseGroupList({ categoryGroups, show3Columns, showBudgetedColumn, month, onEditCategoryGroup, onEditCategory, onBudgetAction, showHiddenCategories, isCollapsed, onToggleCollapse }) {
	const { t } = useTranslation();
	const moveCategoryGroup = useMoveCategoryGroupMutation();
	const { dragAndDropHooks } = $d8f176866e6dc039$export$2cfc5be7a55829f6({
		getItems: (keys) => [...keys].map((key) => ({ "text/plain": key })),
		renderDropIndicator: (target) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($612b8eb6cb90e02d$export$62ed72bc21f6b8a6, {
				target,
				className: css({ "&[data-drop-target]": {
					height: 4,
					backgroundColor: theme.tableBorderSeparator,
					opacity: 1,
					borderRadius: 4
				} })
			});
		},
		renderDragPreview: (items) => {
			const draggedGroupId = items[0]["text/plain"];
			const group = categoryGroups.find((c) => c.id === draggedGroupId);
			if (!group) throw new Error(`Internal error: category group with ID ${draggedGroupId} not found.`);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseGroupHeader, {
				categoryGroup: group,
				month,
				showBudgetedColumn,
				show3Columns,
				onEditCategoryGroup: () => {},
				isCollapsed: () => true,
				onToggleCollapse: () => {},
				isHidden: false
			});
		},
		onReorder: (e) => {
			const [key] = e.keys;
			const groupIdToMove = key;
			const groupToMove = categoryGroups.find((c) => c.id === groupIdToMove);
			if (!groupToMove) throw new Error(`Internal error: category group with ID ${groupIdToMove} not found.`);
			const targetGroupId = e.target.key;
			if (e.target.dropPosition === "before") moveCategoryGroup.mutate({
				id: groupToMove.id,
				targetId: targetGroupId
			});
			else if (e.target.dropPosition === "after") {
				const targetGroupIndex = categoryGroups.findIndex((c) => c.id === targetGroupId);
				if (targetGroupIndex === -1) throw new Error(`Internal error: category group with ID ${targetGroupId} not found.`);
				const nextToTargetCategory = categoryGroups[targetGroupIndex + 1];
				moveCategoryGroup.mutate({
					id: groupToMove.id,
					targetId: nextToTargetCategory?.id || null
				});
			}
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($72e60046c03fbe42$export$a7bfbda1311ca015, {
		"aria-label": t("Expense category groups"),
		items: categoryGroups,
		dependencies: [
			month,
			onEditCategoryGroup,
			onEditCategory,
			onBudgetAction,
			show3Columns,
			showBudgetedColumn,
			showHiddenCategories,
			isCollapsed,
			onToggleCollapse
		],
		dragAndDropHooks,
		children: (categoryGroup) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseGroupListItem, {
			value: categoryGroup,
			month,
			onEditCategoryGroup,
			onEditCategory,
			onBudgetAction,
			showBudgetedColumn,
			show3Columns,
			showHiddenCategories,
			isCollapsed,
			onToggleCollapse,
			isHidden: !!categoryGroup.hidden
		}, categoryGroup.id)
	});
}
//#endregion
//#region src/components/mobile/budget/IncomeCategoryListItem.tsx
function IncomeCategoryName({ category, onEdit }) {
	const sidebarColumnWidth = getColumnWidth({
		isSidebar: true,
		offset: -10
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flex: 1,
			justifyContent: "center",
			alignItems: "flex-start",
			width: sidebarColumnWidth
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			slot: "drag",
			style: {
				opacity: 0,
				width: 1,
				height: 1,
				position: "absolute",
				overflow: "hidden"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			style: { maxWidth: sidebarColumnWidth },
			onPress: () => onEdit?.(category.id),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-start"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					style: {
						...styles.lineClamp(2),
						width: sidebarColumnWidth,
						textAlign: "left",
						...styles.smallText
					},
					"data-testid": "category-name",
					children: category.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCheveronRight, {
					style: {
						flexShrink: 0,
						color: theme.tableTextSubdued
					},
					width: 14,
					height: 14
				})]
			})
		})]
	});
}
function IncomeCategoryCells({ category, month, onBudgetAction, onPress }) {
	const { t } = useTranslation();
	const columnWidth = getColumnWidth();
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	const budgeted = budgetType === "tracking" ? trackingBudget.catBudgeted(category.id) : envelopeBudget.catBudgeted(category.id);
	const balance = budgetType === "tracking" ? trackingBudget.catSumAmount(category.id) : envelopeBudget.catSumAmount(category.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flexDirection: "row",
			justifyContent: "flex-end",
			alignItems: "center"
		},
		children: [budgetType === "tracking" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				width: columnWidth,
				justifyContent: "center",
				alignItems: "flex-end"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetCell, {
				binding: budgeted,
				type: "financial",
				category,
				month,
				onBudgetAction
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				width: columnWidth,
				justifyContent: "center",
				alignItems: "flex-end"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BalanceCell, {
				binding: balance,
				category,
				onPress,
				"aria-label": budgetType === "envelope" ? t("Open balance menu for {{categoryName}} category", { categoryName: category.name }) : t("Show transactions for {{categoryName}} category", { categoryName: category.name })
			})
		})]
	});
}
function IncomeCategoryListItem({ month, onEdit, onBudgetAction, ...props }) {
	const { value: category } = props;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	const balanceMenuModalName = `envelope-income-balance-menu`;
	const onShowActivity = (0, import_react.useCallback)(() => {
		if (!category) return null;
		navigate(`/categories/${category.id}?month=${month}`);
	}, [
		category,
		month,
		navigate
	]);
	const onCarryover = (0, import_react.useCallback)((carryover) => {
		if (!category) return;
		onBudgetAction(month, "carryover", {
			category: category.id,
			flag: carryover
		});
		dispatch(collapseModals({ rootModalName: balanceMenuModalName }));
	}, [
		category,
		onBudgetAction,
		month,
		dispatch,
		balanceMenuModalName
	]);
	const onOpenBalanceMenu = (0, import_react.useCallback)(() => {
		if (!category) return;
		dispatch(pushModal({ modal: {
			name: balanceMenuModalName,
			options: {
				month,
				categoryId: category.id,
				onCarryover,
				onShowActivity
			}
		} }));
	}, [
		category,
		balanceMenuModalName,
		dispatch,
		month,
		onShowActivity,
		onCarryover
	]);
	if (!category) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($72e60046c03fbe42$export$e96fc9a8407faa6b, {
		textValue: category.name,
		"data-testid": "category-row",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				height: 50,
				borderColor: theme.tableBorder,
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				paddingLeft: 5,
				paddingRight: 5,
				borderBottomWidth: 1,
				opacity: category.hidden ? .5 : void 0,
				backgroundColor: isCurrentMonth(month) ? theme.budgetCurrentMonth : theme.budgetOtherMonth
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncomeCategoryName, {
				category,
				onEdit
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncomeCategoryCells, {
				category,
				month,
				onBudgetAction,
				onPress: budgetType === "envelope" ? onOpenBalanceMenu : onShowActivity
			}, `${category.id}`)]
		})
	});
}
//#endregion
//#region src/components/mobile/budget/IncomeCategoryList.tsx
function IncomeCategoryList({ categories, month, onEditCategory, onBudgetAction }) {
	const { t } = useTranslation();
	const moveCategory = useMoveCategoryMutation();
	const { dragAndDropHooks } = $d8f176866e6dc039$export$2cfc5be7a55829f6({
		getItems: (keys) => [...keys].map((key) => ({ "text/plain": key })),
		renderDropIndicator: (target) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($612b8eb6cb90e02d$export$62ed72bc21f6b8a6, {
				target,
				className: css({ "&[data-drop-target]": {
					height: 4,
					backgroundColor: theme.tableBorderSeparator,
					opacity: 1,
					borderRadius: 4
				} })
			});
		},
		onReorder: (e) => {
			const [key] = e.keys;
			const categoryIdToMove = key;
			const categoryToMove = categories.find((c) => c.id === categoryIdToMove);
			if (!categoryToMove) throw new Error(`Internal error: category with ID ${categoryIdToMove} not found.`);
			if (!categoryToMove.group) throw new Error(`Internal error: category ${categoryIdToMove} is not in a group and cannot be moved.`);
			const targetCategoryId = e.target.key;
			if (e.target.dropPosition === "before") moveCategory.mutate({
				id: categoryToMove.id,
				groupId: categoryToMove.group,
				targetId: targetCategoryId
			});
			else if (e.target.dropPosition === "after") {
				const targetCategoryIndex = categories.findIndex((c) => c.id === targetCategoryId);
				if (targetCategoryIndex === -1) throw new Error(`Internal error: category with ID ${targetCategoryId} not found.`);
				const nextToTargetCategory = categories[targetCategoryIndex + 1];
				moveCategory.mutate({
					id: categoryToMove.id,
					groupId: categoryToMove.group,
					targetId: nextToTargetCategory?.id || null
				});
			}
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($72e60046c03fbe42$export$a7bfbda1311ca015, {
		"aria-label": t("Income categories"),
		items: categories,
		dragAndDropHooks,
		dependencies: [
			month,
			onEditCategory,
			onBudgetAction
		],
		children: (category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncomeCategoryListItem, {
			value: category,
			month,
			onEdit: onEditCategory,
			onBudgetAction
		}, category.id)
	});
}
//#endregion
//#region src/components/mobile/budget/IncomeGroup.tsx
function IncomeGroup({ categoryGroup, month, showHiddenCategories, onEditCategoryGroup, onEditCategory, onBudgetAction, isCollapsed, onToggleCollapse }) {
	const { t } = useTranslation();
	const columnWidth = getColumnWidth();
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	const categories = (0, import_react.useMemo)(() => isCollapsed(categoryGroup.id) ? [] : categoryGroup.categories?.filter((category) => !category.hidden || showHiddenCategories) ?? [], [
		categoryGroup.categories,
		categoryGroup.id,
		isCollapsed,
		showHiddenCategories
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "flex-end",
			marginTop: 50,
			marginBottom: 5,
			marginRight: 15
		},
		children: [budgetType === "tracking" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			title: t("Budgeted"),
			style: { width: columnWidth }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			title: t("Received"),
			style: { width: columnWidth }
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		style: { marginTop: 0 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncomeGroupHeader, {
			group: categoryGroup,
			month,
			onEdit: onEditCategoryGroup,
			isCollapsed,
			onToggleCollapse
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncomeCategoryList, {
			categories,
			month,
			onEditCategory,
			onBudgetAction
		})]
	})] });
}
function IncomeGroupHeader({ group, month, onEdit, isCollapsed, onToggleCollapse, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		"data-testid": "category-group-row",
		onClick: () => onToggleCollapse(group.id),
		style: {
			cursor: "pointer",
			height: 50,
			borderBottomWidth: 1,
			borderColor: theme.tableBorder,
			flexDirection: "row",
			alignItems: "center",
			paddingLeft: 5,
			paddingRight: 5,
			opacity: group.hidden ? .5 : void 0,
			backgroundColor: isCurrentMonth(month) ? theme.budgetHeaderCurrentMonth : theme.budgetHeaderOtherMonth,
			...style
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncomeGroupName, {
			group,
			onEdit,
			isCollapsed,
			onToggleCollapse
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncomeGroupCells, { group })]
	});
}
function IncomeGroupName({ group, onEdit, isCollapsed, onToggleCollapse }) {
	const sidebarColumnWidth = getColumnWidth({
		isSidebar: true,
		offset: -13.5
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flex: 1,
			flexDirection: "row",
			justifyContent: "flex-start",
			width: sidebarColumnWidth
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			className: css({
				flexShrink: 0,
				color: theme.pageTextSubdued,
				"&[data-pressed]": { backgroundColor: "transparent" },
				marginLeft: -5
			}),
			onPress: () => onToggleCollapse(group.id),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgExpandArrow, {
				width: 8,
				height: 8,
				style: {
					flexShrink: 0,
					transition: "transform .1s",
					transform: isCollapsed(group.id) ? "rotate(-90deg)" : ""
				}
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			style: { maxWidth: sidebarColumnWidth },
			onPress: () => onEdit(group.id),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-start"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					style: {
						...styles.lineClamp(2),
						width: sidebarColumnWidth,
						textAlign: "left",
						...styles.smallText
					},
					"data-testid": "category-group-name",
					children: group.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCheveronRight, {
					style: {
						flexShrink: 0,
						color: theme.tableTextSubdued
					},
					width: 14,
					height: 14
				})]
			})
		})]
	});
}
function IncomeGroupCells({ group }) {
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	const format = useFormat();
	const budgeted = budgetType === "tracking" ? trackingBudget.groupBudgeted(group.id) : null;
	const balance = budgetType === "tracking" ? trackingBudget.groupSumAmount(group.id) : envelopeBudget.groupSumAmount(group.id);
	const columnWidth = getColumnWidth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flexDirection: "row",
			justifyContent: "flex-end",
			alignItems: "center",
			paddingRight: 5
		},
		children: [budgeted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
			binding: budgeted,
			type: "financial",
			children: ({ type, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
				as: Text,
				minFontSizePx: 6,
				maxFontSizePx: 12,
				mode: "oneline",
				style: {
					...styles.tnum,
					width: columnWidth,
					justifyContent: "center",
					alignItems: "flex-end",
					paddingLeft: 5,
					textAlign: "right",
					fontSize: 12,
					fontWeight: "500"
				},
				children: format(value, type)
			}, value) }) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
			binding: balance,
			type: "financial",
			children: ({ type, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
				as: Text,
				minFontSizePx: 6,
				maxFontSizePx: 12,
				mode: "oneline",
				style: {
					...styles.tnum,
					width: columnWidth,
					justifyContent: "center",
					alignItems: "flex-end",
					paddingLeft: 5,
					textAlign: "right",
					fontSize: 12,
					fontWeight: "500"
				},
				children: format(value, type)
			}, value) }) })
		})]
	});
}
//#endregion
//#region src/components/mobile/budget/BudgetTable.tsx
var PILL_STYLE = {
	borderRadius: 16,
	color: theme.pillText,
	backgroundColor: theme.pillBackgroundLight
};
function getColumnWidth({ show3Columns = false, isSidebar = false, offset = 0 } = {}) {
	if (!isSidebar) return show3Columns ? `${20 + offset}vw` : `${25 + offset}vw`;
	return show3Columns ? `${35 + offset}vw` : `${45 + offset}vw`;
}
function ToBudget({ toBudget, onPress, show3Columns }) {
	const { t } = useTranslation();
	const amount = useSheetValue(toBudget) ?? 0;
	const format = useFormat();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			width: getColumnWidth({
				show3Columns,
				isSidebar: true
			})
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "bare",
			onPress,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
				as: Label,
				minFontSizePx: 6,
				maxFontSizePx: 12,
				mode: "oneline",
				title: amount < 0 ? t("Overbudgeted") : t("To Budget"),
				style: {
					...amount < 0 ? styles.smallText : {},
					color: theme.formInputText,
					flexShrink: 0,
					textAlign: "left"
				}
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
				binding: toBudget,
				type: "financial",
				children: ({ type, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
					as: Text,
					minFontSizePx: 6,
					maxFontSizePx: 12,
					mode: "oneline",
					style: {
						...styles.tnum,
						fontSize: 12,
						fontWeight: "700",
						color: amount < 0 ? theme.toBudgetNegative : amount > 0 ? theme.toBudgetPositive : theme.budgetNumberNeutral
					},
					children: format(value, type)
				}, value) }) })
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCheveronRight, {
				style: {
					flexShrink: 0,
					color: theme.mobileHeaderTextSubdued,
					marginLeft: 5
				},
				width: 14,
				height: 14
			})]
		})
	});
}
function Saved({ projected, onPress, show3Columns }) {
	const { t } = useTranslation();
	const binding = projected ? trackingBudget.totalBudgetedSaved : trackingBudget.totalSaved;
	const saved = useSheetValue(binding) || 0;
	const format = useFormat();
	const isNegative = saved < 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			width: getColumnWidth({
				show3Columns,
				isSidebar: true
			})
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "bare",
			onPress,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: { alignItems: "flex-start" },
				children: [projected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
					as: Label,
					minFontSizePx: 6,
					maxFontSizePx: 12,
					mode: "oneline",
					title: t("Projected savings"),
					style: {
						color: theme.formInputText,
						textAlign: "left",
						fontSize: 12
					}
				}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					title: isNegative ? t("Overspent") : t("Saved"),
					style: {
						color: theme.formInputText,
						textAlign: "left"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
					binding,
					type: "financial",
					children: ({ type, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
						as: Text,
						minFontSizePx: 6,
						maxFontSizePx: 12,
						mode: "oneline",
						style: {
							...styles.tnum,
							textAlign: "left",
							fontSize: 12,
							fontWeight: "700",
							color: projected ? theme.warningText : isNegative ? theme.errorTextDark : theme.formInputText
						},
						children: format(value, type)
					}, value) }) })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCheveronRight, {
				style: {
					flexShrink: 0,
					color: theme.mobileHeaderTextSubdued,
					marginLeft: 5
				},
				width: 14,
				height: 14
			})]
		})
	});
}
function BudgetGroups({ categoryGroups, onEditCategoryGroup, onEditCategory, month, onBudgetAction, showBudgetedColumn, show3Columns, showHiddenCategories }) {
	const { incomeGroup, expenseGroups } = (0, import_react.useMemo)(() => {
		const categoryGroupsToDisplay = categoryGroups.filter((group) => !group.hidden || showHiddenCategories);
		return {
			incomeGroup: categoryGroupsToDisplay.find((group) => group.is_income),
			expenseGroups: categoryGroupsToDisplay.filter((group) => !group.is_income)
		};
	}, [categoryGroups, showHiddenCategories]);
	const [collapsedGroupIds = [], setCollapsedGroupIdsPref] = useLocalPref("budget.collapsed");
	const onToggleCollapse = (0, import_react.useCallback)((id) => {
		setCollapsedGroupIdsPref(collapsedGroupIds.includes(id) ? collapsedGroupIds.filter((collapsedId) => collapsedId !== id) : [...collapsedGroupIds, id]);
	}, [collapsedGroupIds, setCollapsedGroupIdsPref]);
	const isCollapsed = (0, import_react.useCallback)((id) => {
		return collapsedGroupIds.includes(id);
	}, [collapsedGroupIds]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		"data-testid": "budget-groups",
		style: {
			flex: "1 0 auto",
			overflowY: "auto",
			paddingBottom: 15
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseGroupList, {
			categoryGroups: expenseGroups,
			showBudgetedColumn,
			month,
			onEditCategoryGroup,
			onEditCategory,
			onBudgetAction,
			show3Columns,
			showHiddenCategories,
			isCollapsed,
			onToggleCollapse
		}), incomeGroup && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncomeGroup, {
			categoryGroup: incomeGroup,
			month,
			showHiddenCategories,
			onEditCategoryGroup,
			onEditCategory,
			onBudgetAction,
			isCollapsed,
			onToggleCollapse
		})]
	});
}
function BudgetTable({ categoryGroups, month, onShowBudgetSummary, onBudgetAction, onRefresh, onEditCategoryGroup, onEditCategory }) {
	const { width } = useResponsive();
	const show3Columns = width >= 300;
	const [showSpentColumn = false, setShowSpentColumnPref] = useLocalPref("mobile.showSpentColumn");
	function toggleSpentColumn() {
		setShowSpentColumnPref(!showSpentColumn);
	}
	const [showHiddenCategories = false] = useLocalPref("budget.showHiddenCategories");
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	const schedulesQuery = (0, import_react.useMemo)(() => q("schedules").select("*"), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetTableHeader, {
		month,
		show3Columns,
		showSpentColumn,
		toggleSpentColumn,
		onShowBudgetSummary
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullToRefresh, {
		onRefresh,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			"data-testid": "budget-table",
			style: {
				backgroundColor: theme.pageBackground,
				minHeight: "100vh",
				paddingBottom: MOBILE_NAV_HEIGHT
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulesProvider, {
				query: schedulesQuery,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetGroups, {
					type: budgetType,
					categoryGroups,
					showBudgetedColumn: !showSpentColumn,
					show3Columns,
					showHiddenCategories,
					month,
					onEditCategoryGroup,
					onEditCategory,
					onBudgetAction
				})
			})
		})
	})] });
}
function BudgetTableHeader({ show3Columns, month, onShowBudgetSummary, showSpentColumn, toggleSpentColumn }) {
	const { t } = useTranslation();
	const format = useFormat();
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	const buttonStyle = {
		padding: 0,
		backgroundColor: "transparent",
		borderRadius: "unset"
	};
	const sidebarColumnWidth = getColumnWidth({
		show3Columns,
		isSidebar: true
	});
	const columnWidth = getColumnWidth({ show3Columns });
	const amountStyle = {
		...styles.tnum,
		color: theme.budgetNumberNeutral,
		textAlign: "right",
		fontSize: 12,
		fontWeight: "500"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		"data-testid": "budget-table-header",
		style: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			flexShrink: 0,
			padding: "10px 15px",
			paddingLeft: 10,
			backgroundColor: isCurrentMonth(month) ? theme.budgetHeaderCurrentMonth : theme.budgetHeaderOtherMonth,
			borderBottomWidth: 1,
			borderColor: theme.tableBorder
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				width: sidebarColumnWidth,
				flexDirection: "row",
				justifyContent: "flex-start",
				alignItems: "center"
			},
			children: budgetType === "tracking" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Saved, {
				projected: month >= currentMonth(),
				onPress: onShowBudgetSummary,
				show3Columns
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToBudget, {
				toBudget: envelopeBudget.toBudget,
				onPress: onShowBudgetSummary,
				show3Columns
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				flexDirection: "row",
				justifyContent: "flex-end",
				alignItems: "center"
			},
			children: [
				(show3Columns || !showSpentColumn) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
					binding: budgetType === "tracking" ? trackingBudget.totalBudgetedExpense : envelopeBudget.totalBudgeted,
					type: "financial",
					children: ({ type: formatType, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "bare",
						isDisabled: show3Columns,
						onPress: toggleSpentColumn,
						style: {
							...buttonStyle,
							width: columnWidth
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: {
								flex: 1,
								alignItems: "flex-end"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
								style: {
									flexDirection: "row",
									alignItems: "center"
								},
								children: [!show3Columns && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgViewShow, {
									width: 12,
									height: 12,
									style: {
										flexShrink: 0,
										color: theme.pageTextSubdued,
										marginRight: 5
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
									as: Label,
									minFontSizePx: 8,
									maxFontSizePx: 12,
									mode: "multiline",
									title: t("Budgeted"),
									style: {
										color: theme.formInputText,
										paddingRight: 4
									}
								}) })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
								as: Text,
								minFontSizePx: 6,
								maxFontSizePx: 12,
								mode: "oneline",
								style: {
									...amountStyle,
									paddingRight: 4
								},
								children: format(budgetType === "tracking" ? value : -value, formatType)
							}, value) }) })]
						})
					})
				}),
				(show3Columns || showSpentColumn) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
					binding: budgetType === "tracking" ? trackingBudget.totalSpent : envelopeBudget.totalSpent,
					type: "financial",
					children: ({ type, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "bare",
						isDisabled: show3Columns,
						onPress: toggleSpentColumn,
						style: {
							...buttonStyle,
							width: columnWidth
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: {
								flex: 1,
								alignItems: "flex-end"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
								style: {
									flexDirection: "row",
									alignItems: "center"
								},
								children: [!show3Columns && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgViewShow, {
									width: 12,
									height: 12,
									style: {
										flexShrink: 0,
										color: theme.pageTextSubdued,
										marginRight: 5
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
									as: Label,
									minFontSizePx: 6,
									maxFontSizePx: 12,
									mode: "oneline",
									title: t("Spent"),
									style: {
										color: theme.formInputText,
										paddingRight: 4
									}
								}) })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
								as: Text,
								minFontSizePx: 6,
								maxFontSizePx: 12,
								mode: "oneline",
								style: {
									...amountStyle,
									paddingRight: 4
								},
								children: format(value, type)
							}, value) }) })]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
					binding: budgetType === "tracking" ? trackingBudget.totalLeftover : envelopeBudget.totalBalance,
					type: "financial",
					children: ({ type, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: { width: columnWidth },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: {
								flex: 1,
								alignItems: "flex-end !important"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
								as: Label,
								minFontSizePx: 6,
								maxFontSizePx: 12,
								mode: "oneline",
								title: t("Balance"),
								style: { color: theme.formInputText }
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyFilter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoTextSize, {
								as: Text,
								minFontSizePx: 6,
								maxFontSizePx: 12,
								mode: "oneline",
								style: amountStyle,
								children: format(value, type)
							}, value) }) })]
						})
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/mobile/budget/BudgetPage.tsx
function isBudgetType(input) {
	return ["envelope", "tracking"].includes(input);
}
function BudgetPage() {
	const { t } = useTranslation();
	const locale = useLocale();
	const { data: { list: categories, grouped: categoryGroups } = {
		list: [],
		grouped: []
	} } = useCategories();
	const [budgetTypePref] = useSyncedPref("budgetType");
	const budgetType = isBudgetType(budgetTypePref) ? budgetTypePref : "envelope";
	const spreadsheet = useSpreadsheet();
	const currMonth = currentMonth();
	const [startMonth = currMonth, setStartMonthPref] = useLocalPref("budget.startMonth");
	const [monthBounds, setMonthBounds] = (0, import_react.useState)({
		start: startMonth,
		end: startMonth
	});
	const [initialized, setInitialized] = (0, import_react.useState)(false);
	const [_numberFormat] = useSyncedPref("numberFormat");
	const numberFormat = _numberFormat || "comma-dot";
	const [hideFraction] = useSyncedPref("hideFraction");
	const dispatch = useDispatch();
	const applyBudgetAction = useBudgetActions();
	const createCategory = useCreateCategoryMutation();
	const saveCategory = useSaveCategoryMutation();
	const deleteCategory = useDeleteCategoryMutation();
	const createCategoryGroup = useCreateCategoryGroupMutation();
	const saveCategoryGroup = useSaveCategoryGroupMutation();
	const deleteCategoryGroup = useDeleteCategoryGroupMutation();
	(0, import_react.useEffect)(() => {
		async function init() {
			const { start, end } = await send("get-budget-bounds");
			setMonthBounds({
				start,
				end
			});
			await prewarmMonth(budgetType, spreadsheet, startMonth);
			setInitialized(true);
		}
		init();
	}, [
		budgetType,
		startMonth,
		dispatch,
		spreadsheet
	]);
	const onBudgetAction = (0, import_react.useCallback)(async (month, type, args) => {
		applyBudgetAction.mutate({
			month,
			type,
			args
		});
	}, [applyBudgetAction]);
	const onShowBudgetSummary = (0, import_react.useCallback)(() => {
		if (budgetType === "tracking") dispatch(pushModal({ modal: {
			name: "tracking-budget-summary",
			options: { month: startMonth }
		} }));
		else dispatch(pushModal({ modal: {
			name: "envelope-budget-summary",
			options: {
				month: startMonth,
				onBudgetAction
			}
		} }));
	}, [
		budgetType,
		dispatch,
		onBudgetAction,
		startMonth
	]);
	const onOpenNewCategoryGroupModal = (0, import_react.useCallback)(() => {
		dispatch(pushModal({ modal: {
			name: "new-category-group",
			options: {
				onValidate: (name) => !name ? "Name is required." : null,
				onSubmit: async (name) => {
					createCategoryGroup.mutate({ name }, { onSettled: () => {
						dispatch(collapseModals({ rootModalName: "budget-page-menu" }));
					} });
				}
			}
		} }));
	}, [dispatch, createCategoryGroup]);
	const onOpenNewCategoryModal = (0, import_react.useCallback)((groupId, isIncome) => {
		dispatch(pushModal({ modal: {
			name: "new-category",
			options: {
				onValidate: (name) => !name ? "Name is required." : null,
				onSubmit: async (name) => {
					createCategory.mutate({
						name,
						groupId,
						isIncome,
						isHidden: false
					}, { onSettled: () => {
						dispatch(collapseModals({ rootModalName: "category-group-menu" }));
					} });
				}
			}
		} }));
	}, [dispatch, createCategory]);
	const onSaveGroup = (0, import_react.useCallback)((group) => {
		saveCategoryGroup.mutate({ group });
	}, [saveCategoryGroup]);
	const onApplyBudgetTemplatesInGroup = (0, import_react.useCallback)(async (categories) => {
		applyBudgetAction.mutate({
			month: startMonth,
			type: "apply-multiple-templates",
			args: { categories }
		});
	}, [applyBudgetAction, startMonth]);
	const onDeleteGroup = (0, import_react.useCallback)((groupId) => {
		deleteCategoryGroup.mutate({ id: groupId }, { onSettled: () => {
			dispatch(collapseModals({ rootModalName: "category-group-menu" }));
		} });
	}, [deleteCategoryGroup, dispatch]);
	const onToggleGroupVisibility = (0, import_react.useCallback)((groupId) => {
		const group = categoryGroups.find((g) => g.id === groupId);
		onSaveGroup({
			...group,
			hidden: group.hidden ? false : true
		});
		dispatch(collapseModals({ rootModalName: "category-group-menu" }));
	}, [
		categoryGroups,
		dispatch,
		onSaveGroup
	]);
	const onSaveCategory = (0, import_react.useCallback)((category) => {
		saveCategory.mutate({ category });
	}, [saveCategory]);
	const onDeleteCategory = (0, import_react.useCallback)((categoryId) => {
		deleteCategory.mutate({ id: categoryId }, { onSettled: () => {
			dispatch(collapseModals({ rootModalName: "category-menu" }));
		} });
	}, [deleteCategory, dispatch]);
	const onToggleCategoryVisibility = (0, import_react.useCallback)((categoryId) => {
		const category = categories.find((c) => c.id === categoryId);
		onSaveCategory({
			...category,
			hidden: category.hidden ? false : true
		});
		dispatch(collapseModals({ rootModalName: "category-menu" }));
	}, [
		categories,
		dispatch,
		onSaveCategory
	]);
	const onPrevMonth = (0, import_react.useCallback)(async () => {
		const month = subMonths(startMonth, 1);
		await prewarmMonth(budgetType, spreadsheet, month);
		setStartMonthPref(month);
		setInitialized(true);
	}, [
		budgetType,
		setStartMonthPref,
		spreadsheet,
		startMonth
	]);
	const onNextMonth = (0, import_react.useCallback)(async () => {
		const month = addMonths(startMonth, 1);
		await prewarmMonth(budgetType, spreadsheet, month);
		setStartMonthPref(month);
		setInitialized(true);
	}, [
		budgetType,
		setStartMonthPref,
		spreadsheet,
		startMonth
	]);
	const onCurrentMonth = (0, import_react.useCallback)(async () => {
		await prewarmMonth(budgetType, spreadsheet, currMonth);
		setStartMonthPref(currMonth);
		setInitialized(true);
	}, [
		budgetType,
		setStartMonthPref,
		spreadsheet,
		currMonth
	]);
	const onSaveNotes = (0, import_react.useCallback)(async (id, notes) => {
		await send("notes-save", {
			id,
			note: notes
		});
	}, []);
	const onOpenCategoryGroupNotesModal = (0, import_react.useCallback)((id) => {
		dispatch(pushModal({ modal: {
			name: "notes",
			options: {
				id,
				name: categoryGroups.find((g) => g.id === id).name,
				onSave: onSaveNotes
			}
		} }));
	}, [
		categoryGroups,
		dispatch,
		onSaveNotes
	]);
	const onOpenCategoryNotesModal = (0, import_react.useCallback)((id) => {
		dispatch(pushModal({ modal: {
			name: "notes",
			options: {
				id,
				name: categories.find((c) => c.id === id).name,
				onSave: onSaveNotes
			}
		} }));
	}, [
		categories,
		dispatch,
		onSaveNotes
	]);
	const onOpenCategoryGroupMenuModal = (0, import_react.useCallback)((id) => {
		dispatch(pushModal({ modal: {
			name: "category-group-menu",
			options: {
				groupId: categoryGroups.find((g) => g.id === id).id,
				onSave: onSaveGroup,
				onAddCategory: onOpenNewCategoryModal,
				onEditNotes: onOpenCategoryGroupNotesModal,
				onDelete: onDeleteGroup,
				onToggleVisibility: onToggleGroupVisibility,
				onApplyBudgetTemplatesInGroup
			}
		} }));
	}, [
		categoryGroups,
		dispatch,
		onDeleteGroup,
		onOpenCategoryGroupNotesModal,
		onOpenNewCategoryModal,
		onSaveGroup,
		onToggleGroupVisibility,
		onApplyBudgetTemplatesInGroup
	]);
	const onOpenCategoryMenuModal = (0, import_react.useCallback)((id) => {
		dispatch(pushModal({ modal: {
			name: "category-menu",
			options: {
				categoryId: categories.find((c) => c.id === id).id,
				onSave: onSaveCategory,
				onEditNotes: onOpenCategoryNotesModal,
				onDelete: onDeleteCategory,
				onToggleVisibility: onToggleCategoryVisibility
			}
		} }));
	}, [
		categories,
		dispatch,
		onDeleteCategory,
		onOpenCategoryNotesModal,
		onSaveCategory,
		onToggleCategoryVisibility
	]);
	const [showHiddenCategories, setShowHiddenCategoriesPref] = useLocalPref("budget.showHiddenCategories");
	const onToggleHiddenCategories = (0, import_react.useCallback)(() => {
		setShowHiddenCategoriesPref(!showHiddenCategories);
		dispatch(collapseModals({ rootModalName: "budget-page-menu" }));
	}, [
		dispatch,
		setShowHiddenCategoriesPref,
		showHiddenCategories
	]);
	const onOpenBudgetMonthNotesModal = (0, import_react.useCallback)((month) => {
		dispatch(pushModal({ modal: {
			name: "notes",
			options: {
				id: `budget-${month}`,
				name: format(month, "MMMM ''yy", locale),
				onSave: onSaveNotes
			}
		} }));
	}, [
		dispatch,
		onSaveNotes,
		locale
	]);
	const onSwitchBudgetFile = (0, import_react.useCallback)(() => {
		dispatch(closeBudget());
	}, [dispatch]);
	const onOpenBudgetMonthMenu = (0, import_react.useCallback)((month) => {
		dispatch(pushModal({ modal: {
			name: `${budgetType}-budget-month-menu`,
			options: {
				month,
				onBudgetAction,
				onEditNotes: onOpenBudgetMonthNotesModal
			}
		} }));
	}, [
		budgetType,
		dispatch,
		onBudgetAction,
		onOpenBudgetMonthNotesModal
	]);
	const onOpenBudgetPageMenu = (0, import_react.useCallback)(() => {
		dispatch(pushModal({ modal: {
			name: "budget-page-menu",
			options: {
				onAddCategoryGroup: onOpenNewCategoryGroupModal,
				onToggleHiddenCategories,
				onSwitchBudgetFile
			}
		} }));
	}, [
		dispatch,
		onOpenNewCategoryGroupModal,
		onSwitchBudgetFile,
		onToggleHiddenCategories
	]);
	if (!categoryGroups || !initialized) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flex: 1,
			backgroundColor: theme.mobilePageBackground,
			alignItems: "center",
			justifyContent: "center",
			marginBottom: 25
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLoading, {
			width: 25,
			height: 25
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		padding: 0,
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthSelector, {
				month: startMonth,
				monthBounds,
				onOpenMonthMenu: onOpenBudgetMonthMenu,
				onPrevMonth,
				onNextMonth
			}),
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "bare",
				style: { margin: 10 },
				onPress: onOpenBudgetPageMenu,
				"aria-label": t("Budget page menu"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgLogo, {
					style: { color: theme.mobileHeaderText },
					width: "20",
					height: "20"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCheveronRight, {
					style: {
						flexShrink: 0,
						color: theme.mobileHeaderTextSubdued
					},
					width: "14",
					height: "14"
				})]
			}),
			rightContent: !isCurrentMonth(startMonth) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "bare",
				onPress: onCurrentMonth,
				"aria-label": t("Today"),
				style: { margin: 10 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgCalendar, {
					width: 20,
					height: 20
				})
			})
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetNameProvider, {
			name: sheetForMonth(startMonth),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SyncRefresh, {
				onSync: async () => {
					dispatch(sync());
				},
				children: ({ onRefresh }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banners, {
					month: startMonth,
					onBudgetAction
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetTable, {
					categoryGroups,
					month: startMonth,
					onShowBudgetSummary,
					onBudgetAction,
					onRefresh,
					onEditCategoryGroup: onOpenCategoryGroupMenuModal,
					onEditCategory: onOpenCategoryMenuModal
				}, `${numberFormat}${hideFraction}`)] })
			})
		})
	});
}
function Banners({ month, onBudgetAction }) {
	const { t } = useTranslation();
	const [budgetType = "envelope"] = useSyncedPref("budgetType");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)($72e60046c03fbe42$export$a7bfbda1311ca015, {
		"aria-label": t("Banners"),
		style: { backgroundColor: theme.mobilePageBackground },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UncategorizedTransactionsBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverspendingBanner, {
				month,
				onBudgetAction,
				budgetType
			}),
			budgetType === "envelope" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverbudgetedBanner, {
				month,
				onBudgetAction
			})
		]
	});
}
function Banner({ type = "info", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		style: {
			height: 50,
			marginTop: 10,
			marginBottom: 10,
			padding: 10,
			justifyContent: "center",
			backgroundColor: type === "critical" ? theme.errorBackground : type === "warning" ? theme.warningBackground : theme.noticeBackground
		},
		children
	});
}
function UncategorizedTransactionsBanner(props) {
	const navigate = useNavigate();
	const format = useFormat();
	const { transactions, isPending: isTransactionsLoading } = useTransactions({
		query: (0, import_react.useMemo)(() => uncategorizedTransactions().select("*"), []),
		options: { pageSize: 1e3 }
	});
	if (isTransactionsLoading || transactions.length === 0) return null;
	const totalUncategorizedAmount = transactions.reduce((sum, t) => sum + (t.amount ?? 0), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($72e60046c03fbe42$export$e96fc9a8407faa6b, {
		textValue: "Uncategorized transactions banner",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banner, {
			type: "warning",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flex: 1,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, {
					count: transactions.length,
					children: [
						"You have ",
						{ count: transactions.length },
						" uncategorized transactions (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: { amount: format(totalUncategorizedAmount, "financial") } }),
						")"
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onPress: () => navigate("/categories/uncategorized"),
					style: PILL_STYLE,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Categorize" }) })
				})]
			})
		})
	});
}
function OverbudgetedBanner({ month, onBudgetAction, ...props }) {
	const { t } = useTranslation();
	const format = useFormat();
	const toBudgetAmount = useSheetValue(envelopeBudget.toBudget);
	const dispatch = useDispatch();
	const { showUndoNotification } = useUndo();
	const { data: { list: categories } = { list: [] } } = useCategories();
	const categoriesById = (0, import_react.useMemo)(() => groupById(categories), [categories]);
	const openCoverOverbudgetedModal = (0, import_react.useCallback)(() => {
		dispatch(pushModal({ modal: {
			name: "cover",
			options: {
				title: t("Cover overbudgeted"),
				month,
				amount: toBudgetAmount,
				showToBeBudgeted: false,
				onSubmit: (amount, categoryId) => {
					onBudgetAction(month, "cover-overbudgeted", {
						category: categoryId,
						amount,
						currencyCode: format.currency.code
					});
					showUndoNotification({ message: t("Covered overbudgeted from {{categoryName}}", { categoryName: categoriesById[categoryId].name }) });
				}
			}
		} }));
	}, [
		categoriesById,
		dispatch,
		month,
		onBudgetAction,
		showUndoNotification,
		t,
		toBudgetAmount,
		format.currency.code
	]);
	if (!toBudgetAmount || toBudgetAmount >= 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($72e60046c03fbe42$export$e96fc9a8407faa6b, {
		textValue: "Overbudgeted banner",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banner, {
			type: "critical",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "row",
						alignItems: "center",
						gap: 10
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgArrowButtonDown1, { style: {
						width: 15,
						height: 15
					} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "You have budgeted more than your available funds" }) })]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onPress: openCoverOverbudgetedModal,
					style: PILL_STYLE,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Cover" })
				})]
			})
		})
	});
}
function OverspendingBanner({ month, onBudgetAction, budgetType, ...props }) {
	const { t } = useTranslation();
	const { data: { list: categories, grouped: categoryGroups } = {
		list: [],
		grouped: []
	} } = useCategories();
	const categoriesById = (0, import_react.useMemo)(() => groupById(categories), [categories]);
	const dispatch = useDispatch();
	const format = useFormat();
	const { categories: overspentCategories, amountsByCategory, totalAmount: totalOverspending } = useOverspentCategories({ month });
	const amountsByCategoryRef = (0, import_react.useRef)(amountsByCategory);
	amountsByCategoryRef.current = amountsByCategory;
	const categoryGroupsToShow = (0, import_react.useMemo)(() => categoryGroups.filter((g) => overspentCategories.some((c) => c.group === g.id)).map((g) => ({
		...g,
		categories: overspentCategories.filter((c) => c.group === g.id)
	})), [categoryGroups, overspentCategories]);
	const { showUndoNotification } = useUndo();
	const onOpenCoverCategoryModal = (0, import_react.useCallback)((categoryId) => {
		const category = categoriesById[categoryId];
		dispatch(pushModal({ modal: {
			name: "cover",
			options: {
				title: category.name,
				month,
				amount: amountsByCategoryRef.current.get(category.id),
				categoryId: category.id,
				onSubmit: (amount, fromCategoryId) => {
					onBudgetAction(month, "cover-overspending", {
						to: category.id,
						from: fromCategoryId,
						amount,
						currencyCode: format.currency.code
					});
					showUndoNotification({ message: t(`Covered {{toCategoryName}} overspending from {{fromCategoryName}}.`, {
						toCategoryName: category.name,
						fromCategoryName: fromCategoryId === "to-budget" ? t("To Budget") : categoriesById[fromCategoryId].name
					}) });
				}
			}
		} }));
	}, [
		categoriesById,
		dispatch,
		month,
		onBudgetAction,
		showUndoNotification,
		t,
		format.currency.code
	]);
	const onOpenCategorySelectionModal = (0, import_react.useCallback)(() => {
		dispatch(pushModal({ modal: {
			name: "category-autocomplete",
			options: {
				title: budgetType === "envelope" ? t("Cover overspending") : t("Overspent categories"),
				month,
				categoryGroups: categoryGroupsToShow,
				showHiddenCategories: true,
				onSelect: budgetType === "envelope" ? onOpenCoverCategoryModal : null,
				clearOnSelect: true,
				closeOnSelect: false
			}
		} }));
	}, [
		categoryGroupsToShow,
		dispatch,
		month,
		onOpenCoverCategoryModal,
		t,
		budgetType
	]);
	const numberOfOverspentCategories = overspentCategories.length;
	if (numberOfOverspentCategories === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($72e60046c03fbe42$export$e96fc9a8407faa6b, {
		textValue: "Overspent banner",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banner, {
			type: "critical",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, {
					count: numberOfOverspentCategories,
					children: [
						"You have ",
						{ count: numberOfOverspentCategories },
						" overspent categories (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialText, { children: { amount: format(totalOverspending, "financial") } }),
						")"
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onPress: onOpenCategorySelectionModal,
					style: PILL_STYLE,
					children: [budgetType === "envelope" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Cover" }), budgetType === "tracking" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "View" })]
				})]
			})
		})
	});
}
function MonthSelector({ month, monthBounds, onOpenMonthMenu, onPrevMonth, onNextMonth }) {
	const locale = useLocale();
	const { t } = useTranslation();
	const prevEnabled = month > monthBounds.start;
	const nextEnabled = month < subMonths(monthBounds.end, 1);
	const arrowButtonStyle = {
		padding: 10,
		margin: 2
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "row"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"aria-label": t("Previous month"),
				variant: "bare",
				isDisabled: !prevEnabled,
				onPress: onPrevMonth,
				style: {
					...arrowButtonStyle,
					opacity: prevEnabled ? 1 : .6
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgArrowThinLeft, {
					width: "15",
					height: "15"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "bare",
				style: {
					textAlign: "center",
					fontSize: 16,
					fontWeight: 500
				},
				onPress: () => {
					onOpenMonthMenu?.(month);
				},
				"data-month": month,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					style: styles.underlinedText,
					children: format(month, "MMMM ''yy", locale)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"aria-label": t("Next month"),
				variant: "bare",
				isDisabled: !nextEnabled,
				onPress: onNextMonth,
				style: {
					...arrowButtonStyle,
					opacity: nextEnabled ? 1 : .6
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgArrowThinRight, {
					width: "15",
					height: "15"
				})
			})
		]
	});
}
//#endregion
//#region src/components/mobile/accounts/AccountsPage.tsx
var ROW_HEIGHT = 60;
function AccountHeader$1({ id, name, amount, style = {}, showCheveronDown = false, onPress }) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const Cheveron = showCheveronDown ? SvgCheveronDown : SvgCheveronRight;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "bare",
		"aria-label": t("View {{name}} transactions", { name }),
		onPress: onPress ? onPress : () => navigate(`/accounts/${id}`),
		style: {
			height: ROW_HEIGHT,
			width: "100%",
			padding: "0 18px",
			color: theme.pageTextLight,
			...style
		},
		className: css([{ "&[data-pressed], &[data-hovered]": {
			backgroundColor: "transparent",
			transform: "translateY(1px)"
		} }]),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				flex: 1,
				alignItems: "center",
				flexDirection: "row"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: {
					...styles.text,
					fontSize: 17
				},
				"data-testid": "name",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cheveron, {
				style: {
					flexShrink: 0,
					color: theme.mobileHeaderTextSubdued,
					marginLeft: 5
				},
				width: styles.text.fontSize,
				height: styles.text.fontSize
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
			binding: amount,
			type: "financial",
			children: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValueText, {
				...props,
				style: { ...styles.text }
			})
		})]
	});
}
function AccountListItem({ isUpdated, isConnected, isPending, isFailed, getBalanceQuery, onSelect, ...props }) {
	const { value: account } = props;
	if (!account) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($eed445e0843c11d0$export$a11e76429ed99b4, {
		textValue: account.name,
		className: css({
			borderBottom: `1px solid ${theme.tableBorder}`,
			"&:last-child": { borderBottom: "none" }
		}),
		...props,
		children: (itemProps) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			...itemProps,
			style: {
				height: ROW_HEIGHT,
				width: "100%",
				backgroundColor: theme.tableBackground,
				border: "none",
				borderRadius: 0,
				paddingLeft: 20
			},
			"data-testid": "account-list-item",
			onPress: () => onSelect(account),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flex: 1,
					alignItems: "center",
					flexDirection: "row"
				},
				children: [account.bankId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
					backgroundColor: isPending ? theme.sidebarItemBackgroundPending : isFailed ? theme.sidebarItemBackgroundFailed : theme.sidebarItemBackgroundPositive,
					marginRight: "8px",
					width: 8,
					flexShrink: 0,
					height: 8,
					borderRadius: 8,
					opacity: isConnected ? 1 : 0
				} }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextOneLine, {
					style: {
						...styles.text,
						fontSize: 17,
						fontWeight: 600,
						color: isUpdated ? theme.mobileAccountText : theme.pillText
					},
					"data-testid": "account-name",
					children: account.name
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, {
				binding: getBalanceQuery(account.id),
				type: "financial",
				children: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValueText, {
					...props,
					style: {
						fontSize: 16,
						...makeAmountFullStyle(props.value, {
							positiveColor: theme.numberPositive,
							negativeColor: theme.numberNegative,
							zeroColor: theme.numberNeutral
						})
					},
					"data-testid": "account-balance"
				})
			})]
		})
	});
}
function EmptyMessage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flex: 1,
			padding: 30
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: styles.text,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: [
				"For Actual to be useful, you need to ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "add an account" }),
				". You can link an account to automatically download transactions, or manage it locally yourself."
			] })
		})
	});
}
function AllAccountList({ accounts, getAccountBalance, getAllAccountsBalance, getOnBudgetBalance, getOffBudgetBalance, getClosedAccountsBalance, onAddAccount, onOpenAccount, onSync }) {
	const { t } = useTranslation();
	const onBudgetAccounts = accounts.filter((account) => account.offbudget === 0 && account.closed === 0);
	const offBudgetAccounts = accounts.filter((account) => account.offbudget === 1 && account.closed === 0);
	const closedAccounts = accounts.filter((account) => account.closed === 1);
	const closedAccountsRef = (0, import_react.useRef)(null);
	const [showClosedAccounts, setShowClosedAccountsPref] = useLocalPref("ui.showClosedAccounts");
	const onToggleClosedAccounts = () => {
		const toggledState = !showClosedAccounts;
		setShowClosedAccountsPref(toggledState);
		if (toggledState) setTimeout(() => {
			closedAccountsRef.current?.scrollIntoView({ behavior: "smooth" });
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: t("Accounts"),
			rightContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "bare",
				"aria-label": t("Add account"),
				style: { margin: 10 },
				onPress: onAddAccount,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgAdd, {
					width: 20,
					height: 20
				})
			})
		}),
		padding: 0,
		children: [accounts.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyMessage, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullToRefresh, {
			onRefresh: onSync,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				"aria-label": t("Account list"),
				style: { paddingBottom: MOBILE_NAV_HEIGHT },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountHeader$1, {
						id: "all",
						name: t("All accounts"),
						amount: getAllAccountsBalance()
					}),
					onBudgetAccounts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountHeader$1, {
						id: "onbudget",
						name: t("On budget"),
						amount: getOnBudgetBalance()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountList, {
						"aria-label": t("On budget accounts"),
						accounts: onBudgetAccounts,
						getAccountBalance,
						onOpenAccount
					}),
					offBudgetAccounts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountHeader$1, {
						id: "offbudget",
						name: t("Off budget"),
						amount: getOffBudgetBalance()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountList, {
						"aria-label": t("Off budget accounts"),
						accounts: offBudgetAccounts,
						getAccountBalance,
						onOpenAccount
					}),
					closedAccounts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountHeader$1, {
						id: "closed",
						name: t("Closed"),
						onPress: onToggleClosedAccounts,
						amount: getClosedAccountsBalance(),
						style: { marginTop: 30 },
						showCheveronDown: showClosedAccounts
					}),
					showClosedAccounts && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountList, {
						"aria-label": t("Closed accounts"),
						accounts: closedAccounts,
						getAccountBalance,
						onOpenAccount,
						ref: (el) => {
							if (el) closedAccountsRef.current = el;
						}
					})
				]
			})
		})]
	});
}
var AccountList = (0, import_react.forwardRef)(({ "aria-label": ariaLabel, accounts, getAccountBalance: getBalanceBinding, onOpenAccount }, ref) => {
	const failedAccounts = useFailedAccounts();
	const syncingAccountIds = useSelector((state) => state.account.accountsSyncing);
	const updatedAccounts = useSelector((state) => state.account.updatedAccounts);
	const moveAccount = useMoveAccountMutation();
	const { dragAndDropHooks } = $d8f176866e6dc039$export$2cfc5be7a55829f6({
		getItems: (keys) => [...keys].map((key) => ({ "text/plain": key })),
		renderDropIndicator: (target) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($612b8eb6cb90e02d$export$62ed72bc21f6b8a6, {
				target,
				className: css({ "&[data-drop-target]": {
					height: 4,
					backgroundColor: theme.tableBorderSeparator,
					opacity: 1,
					borderRadius: 4
				} })
			});
		},
		onReorder: (e) => {
			const [key] = e.keys;
			const accountIdToMove = key;
			const targetAccountId = e.target.key;
			if (e.target.dropPosition === "before") moveAccount.mutate({
				id: accountIdToMove,
				targetId: targetAccountId
			});
			else if (e.target.dropPosition === "after") {
				const targetAccountIndex = accounts.findIndex((account) => account.id === e.target.key);
				if (targetAccountIndex === -1) throw new Error(`Internal error: account with ID ${targetAccountId} not found.`);
				const nextToTargetAccount = accounts[targetAccountIndex + 1];
				moveAccount.mutate({
					id: accountIdToMove,
					targetId: nextToTargetAccount?.id || null
				});
			}
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($eed445e0843c11d0$export$41f133550aa26f48, {
		"aria-label": ariaLabel,
		items: accounts,
		dragAndDropHooks,
		ref,
		style: {
			display: "flex",
			flexDirection: "column",
			margin: "0 8px",
			border: `1px solid ${theme.tableBorder}`,
			borderRadius: 8,
			overflow: "hidden"
		},
		children: (account) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountListItem, {
			id: account.id,
			value: account,
			isUpdated: updatedAccounts && updatedAccounts.includes(account.id),
			isConnected: !!account.bank,
			isPending: syncingAccountIds.includes(account.id),
			isFailed: failedAccounts && failedAccounts.has(account.id),
			getBalanceQuery: getBalanceBinding,
			onSelect: onOpenAccount
		}, account.id)
	});
});
AccountList.displayName = "AccountList";
function AccountsPage() {
	const dispatch = useDispatch();
	const { data: accounts = [] } = useAccounts();
	const [_numberFormat] = useSyncedPref("numberFormat");
	const numberFormat = _numberFormat || "comma-dot";
	const [hideFraction] = useSyncedPref("hideFraction");
	const navigate = useNavigate();
	const onOpenAccount = (0, import_react.useCallback)((account) => {
		navigate(`/accounts/${account.id}`);
	}, [navigate]);
	const onAddAccount = (0, import_react.useCallback)(() => {
		dispatch(replaceModal({ modal: {
			name: "add-account",
			options: {}
		} }));
	}, [dispatch]);
	const syncAndDownload = useSyncAndDownloadMutation();
	const onSync = (0, import_react.useCallback)(async () => {
		syncAndDownload.mutate({});
	}, [syncAndDownload]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: { flex: 1 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AllAccountList, {
			accounts,
			getAccountBalance: accountBalance,
			getAllAccountsBalance: allAccountBalance,
			getOnBudgetBalance: onBudgetAccountBalance,
			getOffBudgetBalance: offBudgetAccountBalance,
			getClosedAccountsBalance: closedAccountBalance,
			onAddAccount,
			onOpenAccount,
			onSync
		}, numberFormat + hideFraction)
	});
}
//#endregion
//#region src/components/mobile/transactions/AddTransactionButton.tsx
function AddTransactionButton({ to = "/transactions/new", accountId, categoryId }) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "bare",
		"aria-label": t("Add transaction"),
		style: { margin: 10 },
		onPress: () => {
			navigate(to, { state: {
				accountId,
				categoryId
			} });
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgAdd, {
			width: 20,
			height: 20
		})
	});
}
//#endregion
//#region src/components/mobile/transactions/TransactionListWithBalances.tsx
function TransactionSearchInput({ placeholder, onSearch }) {
	const [text, setText] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flexDirection: "row",
			alignItems: "center",
			backgroundColor: theme.mobilePageBackground,
			padding: 10,
			width: "100%"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
			value: text,
			onChange: (text) => {
				setText(text);
				onSearch(text);
			},
			placeholder,
			width: "100%",
			height: styles.mobileMinHeight,
			style: {
				backgroundColor: theme.tableBackground,
				borderColor: theme.formInputBorder
			}
		})
	});
}
function TransactionListWithBalances({ isLoading, transactions, balance, balanceCleared, balanceUncleared, showRunningBalances, runningBalances, searchPlaceholder = "Search...", onSearch, isLoadingMore, onLoadMore, onOpenTransaction, onRefresh, showMakeTransfer = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayPayeeProvider, {
		transactions,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectedProvider, {
			instance: useSelected("transactions", [...transactions], []),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexShrink: 0,
					marginTop: 10
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: {
						flexDirection: "row",
						justifyContent: "space-evenly"
					},
					children: balanceCleared && balanceUncleared ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BalanceWithCleared, {
						balance,
						balanceCleared,
						balanceUncleared
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Balance, { balance })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionSearchInput, {
					placeholder: searchPlaceholder,
					onSearch
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullToRefresh, {
				isPullable: !isLoading && !!onRefresh,
				onRefresh: async () => onRefresh?.(),
				style: { "& .ptr__children": { display: "flex" } },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionList, {
					isLoading,
					transactions,
					showRunningBalances,
					runningBalances,
					isLoadingMore,
					onLoadMore,
					onOpenTransaction,
					showMakeTransfer
				})
			})]
		})
	});
}
var TransactionListBalanceCellValue = (props) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValue, { ...props });
};
function BalanceWithCleared({ balanceUncleared, balanceCleared, balance }) {
	const { t } = useTranslation();
	const unclearedAmount = useSheetValue(balanceUncleared);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				display: !unclearedAmount ? "none" : void 0,
				flexBasis: "33%"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				title: t("Cleared"),
				style: {
					textAlign: "center",
					fontSize: 12
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListBalanceCellValue, {
				binding: balanceCleared,
				type: "financial",
				children: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValueText, {
					...props,
					style: {
						fontSize: 12,
						textAlign: "center",
						fontWeight: "500"
					},
					"data-testid": "transactions-balance-cleared"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Balance, { balance }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				display: !unclearedAmount ? "none" : void 0,
				flexBasis: "33%"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				title: t("Uncleared"),
				style: {
					textAlign: "center",
					fontSize: 12
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListBalanceCellValue, {
				binding: balanceUncleared,
				type: "financial",
				children: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValueText, {
					...props,
					style: {
						fontSize: 12,
						textAlign: "center",
						fontWeight: "500"
					},
					"data-testid": "transactions-balance-uncleared"
				})
			})]
		})
	] });
}
function Balance({ balance }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: { flexBasis: "33%" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			title: t("Balance"),
			style: { textAlign: "center" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListBalanceCellValue, {
			binding: balance,
			type: "financial",
			children: (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellValueText, {
				...props,
				style: {
					fontSize: 18,
					textAlign: "center",
					fontWeight: "500",
					color: props.value < 0 ? theme.numberNegative : props.value > 0 ? theme.numberPositive : theme.numberNeutral
				},
				"data-testid": "transactions-balance"
			})
		})]
	});
}
//#endregion
//#region src/hooks/useTransactionsSearch.ts
var import_debounce = /* @__PURE__ */ __toESM(require_debounce());
function useTransactionsSearch({ updateQuery, resetQuery, dateFormat, delayMs = 150 }) {
	const [isSearching, setIsSearching] = (0, import_react.useState)(false);
	const updateQueryRef = (0, import_react.useRef)(updateQuery);
	updateQueryRef.current = updateQuery;
	const resetQueryRef = (0, import_react.useRef)(resetQuery);
	resetQueryRef.current = resetQuery;
	const updateSearchQuery = (0, import_react.useMemo)(() => (0, import_debounce.default)((searchText) => {
		if (searchText === "") {
			resetQueryRef.current?.();
			setIsSearching(false);
		} else if (searchText) {
			resetQueryRef.current?.();
			updateQueryRef.current((previousQuery) => transactionsSearch(previousQuery, searchText, dateFormat));
			setIsSearching(true);
		}
	}, delayMs), [dateFormat, delayMs]);
	(0, import_react.useEffect)(() => {
		return () => updateSearchQuery.cancel();
	}, [updateSearchQuery]);
	return {
		isSearching,
		search: updateSearchQuery
	};
}
//#endregion
//#region src/components/mobile/accounts/AccountTransactions.tsx
function AccountTransactions({ account }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulesProvider, {
		query: (0, import_react.useMemo)(() => getSchedulesQuery(account.id), [account.id]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListWithPreviews$4, { account })
	});
}
function TransactionListWithPreviews$4({ account }) {
	const { t } = useTranslation();
	const dateFormat = useDateFormat() || "MM/dd/yyyy";
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [showRunningBalances] = useSyncedPref(`show-balances-${account.id}`);
	const [hideReconciled] = useSyncedPref(`hide-reconciled-${account.id}`);
	const baseTransactionsQuery = (0, import_react.useCallback)(() => {
		let query = transactions(account.id).options({ splits: "all" }).select("*");
		if (hideReconciled === "true") query = query.filter({ reconciled: { $eq: false } });
		return query;
	}, [account.id, hideReconciled]);
	const [transactionsQuery, setTransactionsQuery] = (0, import_react.useState)(baseTransactionsQuery());
	(0, import_react.useEffect)(() => {
		setTransactionsQuery(baseTransactionsQuery());
	}, [baseTransactionsQuery]);
	const { isSearching, search: onSearch } = useTransactionsSearch({
		updateQuery: setTransactionsQuery,
		resetQuery: () => setTransactionsQuery(baseTransactionsQuery()),
		dateFormat
	});
	const shouldCalculateRunningBalances = showRunningBalances === "true" && !!account?.id && !isSearching;
	const accountBalanceValue = useSheetValue(account?.id ? accountBalance(account?.id) : allAccountBalance());
	const { transactions: transactions$4, runningBalances, isPending: isTransactionsLoading, isFetchingNextPage: isLoadingMoreTransactions, fetchNextPage: fetchMoreTransactions } = useTransactions({
		query: transactionsQuery,
		options: {
			calculateRunningBalances: shouldCalculateRunningBalances ? calculateRunningBalancesTopDown : shouldCalculateRunningBalances,
			startingBalance: accountBalanceValue || 0
		}
	});
	const { previewTransactions, runningBalances: previewRunningBalances, isLoading: isPreviewTransactionsLoading } = useAccountPreviewTransactions({ accountId: account?.id });
	const syncAndDownload = useSyncAndDownloadMutation();
	const onRefresh = (0, import_react.useCallback)(() => {
		if (account.id) syncAndDownload.mutate({ id: account.id });
	}, [account.id, syncAndDownload]);
	const allBalances = (0, import_react.useMemo)(() => new Map([...previewRunningBalances, ...runningBalances]), [runningBalances, previewRunningBalances]);
	(0, import_react.useEffect)(() => {
		if (account.id) dispatch(markAccountRead({ id: account.id }));
	}, [account.id, dispatch]);
	const onOpenTransaction = (0, import_react.useCallback)((transaction) => {
		if (!isPreviewId(transaction.id)) navigate(`/transactions/${transaction.id}`);
		else dispatch(pushModal({ modal: {
			name: "scheduled-transaction-menu",
			options: {
				transactionId: transaction.id,
				onPost: async (transactionId, today = false) => {
					await send("schedule/post-transaction", {
						id: transactionId.split("/")[1],
						today
					});
					dispatch(collapseModals({ rootModalName: "scheduled-transaction-menu" }));
				},
				onSkip: async (transactionId) => {
					await send("schedule/skip-next-date", { id: transactionId.split("/")[1] });
					dispatch(collapseModals({ rootModalName: "scheduled-transaction-menu" }));
				},
				onComplete: async (transactionId) => {
					await send("schedule/update", { schedule: {
						id: transactionId.split("/")[1],
						completed: true
					} });
					dispatch(collapseModals({ rootModalName: "scheduled-transaction-menu" }));
				}
			}
		} }));
	}, [dispatch, navigate]);
	const balanceBindings = (0, import_react.useMemo)(() => ({
		balance: accountBalance(account.id),
		cleared: accountBalanceCleared(account.id),
		uncleared: accountBalanceUncleared(account.id)
	}), [account]);
	const transactionsToDisplay = !isSearching ? previewTransactions.concat(transactions$4.filter((t) => !t.is_child)) : transactions$4;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListWithBalances, {
		isLoading: isSearching ? isTransactionsLoading : isTransactionsLoading || isPreviewTransactionsLoading,
		transactions: transactionsToDisplay,
		balance: balanceBindings.balance,
		balanceCleared: balanceBindings.cleared,
		balanceUncleared: balanceBindings.uncleared,
		runningBalances: allBalances,
		showRunningBalances: shouldCalculateRunningBalances,
		isLoadingMore: isLoadingMoreTransactions,
		onLoadMore: fetchMoreTransactions,
		searchPlaceholder: t("Search {{accountName}}", { accountName: account.name }),
		onSearch,
		onOpenTransaction,
		onRefresh
	});
}
//#endregion
//#region src/components/mobile/accounts/AllAccountTransactions.tsx
function AllAccountTransactions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulesProvider, {
		query: (0, import_react.useMemo)(() => getSchedulesQuery(), []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListWithPreviews$3, {})
	});
}
function TransactionListWithPreviews$3() {
	const { t } = useTranslation();
	const baseTransactionsQuery = (0, import_react.useCallback)(() => transactions().options({ splits: "all" }).select("*"), []);
	const [transactionsQuery, setTransactionsQuery] = (0, import_react.useState)(baseTransactionsQuery());
	const { transactions: transactions$3, isPending: isTransactionsLoading, isFetchingNextPage: isLoadingMoreTransactions, fetchNextPage: fetchMoreTransactions } = useTransactions({ query: transactionsQuery });
	const { previewTransactions, isLoading: isPreviewTransactionsLoading } = usePreviewTransactions();
	const dateFormat = useDateFormat() || "MM/dd/yyyy";
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isSearching, search: onSearch } = useTransactionsSearch({
		updateQuery: setTransactionsQuery,
		resetQuery: () => setTransactionsQuery(baseTransactionsQuery()),
		dateFormat
	});
	const onOpenTransaction = (0, import_react.useCallback)((transaction) => {
		if (!isPreviewId(transaction.id)) navigate(`/transactions/${transaction.id}`);
		else dispatch(pushModal({ modal: {
			name: "scheduled-transaction-menu",
			options: {
				transactionId: transaction.id,
				onPost: async (transactionId, today = false) => {
					await send("schedule/post-transaction", {
						id: transactionId.split("/")[1],
						today
					});
					dispatch(collapseModals({ rootModalName: "scheduled-transaction-menu" }));
				},
				onSkip: async (transactionId) => {
					await send("schedule/skip-next-date", { id: transactionId.split("/")[1] });
					dispatch(collapseModals({ rootModalName: "scheduled-transaction-menu" }));
				},
				onComplete: async (transactionId) => {
					await send("schedule/update", { schedule: {
						id: transactionId.split("/")[1],
						completed: true
					} });
					dispatch(collapseModals({ rootModalName: "scheduled-transaction-menu" }));
				}
			}
		} }));
	}, [dispatch, navigate]);
	const balanceBindings = (0, import_react.useMemo)(() => ({ balance: allAccountBalance() }), []);
	const transactionsToDisplay = !isSearching ? previewTransactions.concat(transactions$3.filter((t) => !t.is_child)) : transactions$3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListWithBalances, {
		isLoading: isSearching ? isTransactionsLoading : isPreviewTransactionsLoading,
		transactions: transactionsToDisplay,
		balance: balanceBindings.balance,
		isLoadingMore: isLoadingMoreTransactions,
		onLoadMore: fetchMoreTransactions,
		searchPlaceholder: t("Search All Accounts"),
		onSearch,
		onOpenTransaction,
		showMakeTransfer: true
	});
}
//#endregion
//#region src/components/mobile/accounts/OffBudgetAccountTransactions.tsx
function OffBudgetAccountTransactions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulesProvider, {
		query: (0, import_react.useMemo)(() => getSchedulesQuery("offbudget"), []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListWithPreviews$2, {})
	});
}
function TransactionListWithPreviews$2() {
	const { t } = useTranslation();
	const baseTransactionsQuery = (0, import_react.useCallback)(() => transactions("offbudget").options({ splits: "all" }).select("*"), []);
	const [transactionsQuery, setTransactionsQuery] = (0, import_react.useState)(baseTransactionsQuery());
	const { transactions: transactions$2, isPending: isTransactionsLoading, isFetchingNextPage: isLoadingMoreTransactions, fetchNextPage: fetchMoreTransactions } = useTransactions({ query: transactionsQuery });
	const { data: offBudgetAccounts = [] } = useOffBudgetAccounts();
	const { previewTransactions, isLoading: isPreviewTransactionsLoading } = usePreviewTransactions({ filter: (0, import_react.useCallback)((schedule) => offBudgetAccounts.some((a) => a.id === schedule._account), [offBudgetAccounts]) });
	const dateFormat = useDateFormat() || "MM/dd/yyyy";
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isSearching, search: onSearch } = useTransactionsSearch({
		updateQuery: setTransactionsQuery,
		resetQuery: () => setTransactionsQuery(baseTransactionsQuery()),
		dateFormat
	});
	const onOpenTransaction = (0, import_react.useCallback)((transaction) => {
		if (!isPreviewId(transaction.id)) navigate(`/transactions/${transaction.id}`);
		else dispatch(pushModal({ modal: {
			name: "scheduled-transaction-menu",
			options: {
				transactionId: transaction.id,
				onPost: async (transactionId, today = false) => {
					await send("schedule/post-transaction", {
						id: transactionId.split("/")[1],
						today
					});
					dispatch(collapseModals({ rootModalName: "scheduled-transaction-menu" }));
				},
				onSkip: async (transactionId) => {
					await send("schedule/skip-next-date", { id: transactionId.split("/")[1] });
					dispatch(collapseModals({ rootModalName: "scheduled-transaction-menu" }));
				},
				onComplete: async (transactionId) => {
					await send("schedule/update", { schedule: {
						id: transactionId.split("/")[1],
						completed: true
					} });
					dispatch(collapseModals({ rootModalName: "scheduled-transaction-menu" }));
				}
			}
		} }));
	}, [dispatch, navigate]);
	const balanceBindings = (0, import_react.useMemo)(() => ({ balance: offBudgetAccountBalance() }), []);
	const transactionsToDisplay = !isSearching ? previewTransactions.concat(transactions$2.filter((t) => !t.is_child)) : transactions$2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListWithBalances, {
		isLoading: isSearching ? isTransactionsLoading : isPreviewTransactionsLoading,
		transactions: transactionsToDisplay,
		balance: balanceBindings.balance,
		isLoadingMore: isLoadingMoreTransactions,
		onLoadMore: fetchMoreTransactions,
		searchPlaceholder: t("Search Off Budget Accounts"),
		onSearch,
		onOpenTransaction,
		showMakeTransfer: true
	});
}
//#endregion
//#region src/components/mobile/accounts/OnBudgetAccountTransactions.tsx
function OnBudgetAccountTransactions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulesProvider, {
		query: (0, import_react.useMemo)(() => getSchedulesQuery("onbudget"), []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListWithPreviews$1, {})
	});
}
function TransactionListWithPreviews$1() {
	const { t } = useTranslation();
	const baseTransactionsQuery = (0, import_react.useCallback)(() => transactions("onbudget").options({ splits: "all" }).select("*"), []);
	const [transactionsQuery, setTransactionsQuery] = (0, import_react.useState)(baseTransactionsQuery());
	const { transactions: transactions$1, isPending: isTransactionsLoading, isFetchingNextPage: isLoadingMoreTransactions, fetchNextPage: fetchMoreTransactions } = useTransactions({ query: transactionsQuery });
	const { data: onBudgetAccounts = [] } = useOnBudgetAccounts();
	const { previewTransactions, isLoading: isPreviewTransactionsLoading } = usePreviewTransactions({ filter: (0, import_react.useCallback)((schedule) => onBudgetAccounts.some((a) => a.id === schedule._account), [onBudgetAccounts]) });
	const dateFormat = useDateFormat() || "MM/dd/yyyy";
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isSearching, search: onSearch } = useTransactionsSearch({
		updateQuery: setTransactionsQuery,
		resetQuery: () => setTransactionsQuery(baseTransactionsQuery()),
		dateFormat
	});
	const onOpenTransaction = (0, import_react.useCallback)((transaction) => {
		if (!isPreviewId(transaction.id)) navigate(`/transactions/${transaction.id}`);
		else dispatch(pushModal({ modal: {
			name: "scheduled-transaction-menu",
			options: {
				transactionId: transaction.id,
				onPost: async (transactionId, today = false) => {
					await send("schedule/post-transaction", {
						id: transactionId.split("/")[1],
						today
					});
					dispatch(collapseModals({ rootModalName: "scheduled-transaction-menu" }));
				},
				onSkip: async (transactionId) => {
					await send("schedule/skip-next-date", { id: transactionId.split("/")[1] });
					dispatch(collapseModals({ rootModalName: "scheduled-transaction-menu" }));
				},
				onComplete: async (transactionId) => {
					await send("schedule/update", { schedule: {
						id: transactionId.split("/")[1],
						completed: true
					} });
					dispatch(collapseModals({ rootModalName: "scheduled-transaction-menu" }));
				}
			}
		} }));
	}, [dispatch, navigate]);
	const balanceBindings = (0, import_react.useMemo)(() => ({ balance: onBudgetAccountBalance() }), []);
	const transactionsToDisplay = !isSearching ? previewTransactions.concat(transactions$1.filter((t) => !t.is_child)) : transactions$1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListWithBalances, {
		isLoading: isSearching ? isTransactionsLoading : isPreviewTransactionsLoading,
		transactions: transactionsToDisplay,
		balance: balanceBindings.balance,
		isLoadingMore: isLoadingMoreTransactions,
		onLoadMore: fetchMoreTransactions,
		searchPlaceholder: t("Search On Budget Accounts"),
		onSearch,
		onOpenTransaction,
		showMakeTransfer: true
	});
}
//#endregion
//#region src/components/mobile/accounts/AccountPage.tsx
function AccountPage() {
	const { t } = useTranslation();
	const [_numberFormat] = useSyncedPref("numberFormat");
	const numberFormat = _numberFormat || "comma-dot";
	const [hideFraction] = useSyncedPref("hideFraction");
	const { id: accountIdParam } = useParams();
	const account = useAccount(accountIdParam || "");
	const nameFromId = (0, import_react.useCallback)((id) => {
		switch (id) {
			case "onbudget": return t("On Budget Accounts");
			case "offbudget": return t("Off Budget Accounts");
			case "uncategorized": return t("Uncategorized");
			case "closed": return t("Closed Accounts");
			default: return t("All Accounts");
		}
	}, [t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: account ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountHeader, { account }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameOnlyHeader, { name: nameFromId(accountIdParam) }),
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, {}),
			rightContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddTransactionButton, { accountId: account?.id })
		}),
		padding: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: account ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountTransactions, { account }) : accountIdParam === "onbudget" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnBudgetAccountTransactions, {}) : accountIdParam === "offbudget" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OffBudgetAccountTransactions, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AllAccountTransactions, {}) }, numberFormat + hideFraction)
	});
}
function AccountHeader({ account }) {
	const failedAccounts = useFailedAccounts();
	const { t } = useTranslation();
	const syncingAccountIds = useSelector((state) => state.account.accountsSyncing);
	const pending = (0, import_react.useMemo)(() => syncingAccountIds.includes(account.id), [syncingAccountIds, account.id]);
	const failed = (0, import_react.useMemo)(() => failedAccounts.has(account.id), [failedAccounts, account.id]);
	const dispatch = useDispatch();
	const { mutate: updateAccount } = useUpdateAccountMutation();
	const onSave = (0, import_react.useCallback)((account) => {
		updateAccount({ account });
	}, [updateAccount]);
	const onSaveNotes = (0, import_react.useCallback)(async (id, notes) => {
		await send("notes-save", {
			id,
			note: notes
		});
	}, []);
	const onEditNotes = (0, import_react.useCallback)((id) => {
		dispatch(pushModal({ modal: {
			name: "notes",
			options: {
				id: `account-${id}`,
				name: account.name,
				onSave: onSaveNotes
			}
		} }));
	}, [
		account.name,
		dispatch,
		onSaveNotes
	]);
	const onCloseAccount = (0, import_react.useCallback)(() => {
		dispatch(openAccountCloseModal({ accountId: account.id }));
	}, [account.id, dispatch]);
	const { mutate: reopenAccount } = useReopenAccountMutation();
	const onReopenAccount = (0, import_react.useCallback)(() => {
		reopenAccount({ id: account.id });
	}, [account.id, reopenAccount]);
	const [showRunningBalances, setShowRunningBalances] = useSyncedPref(`show-balances-${account.id}`);
	const [hideReconciled, setHideReconciled] = useSyncedPref(`hide-reconciled-${account.id}`);
	const onToggleRunningBalance = (0, import_react.useCallback)(() => {
		setShowRunningBalances(showRunningBalances === "true" ? "false" : "true");
		dispatch(collapseModals({ rootModalName: "account-menu" }));
	}, [
		showRunningBalances,
		setShowRunningBalances,
		dispatch
	]);
	const onToggleReconciled = (0, import_react.useCallback)(() => {
		setHideReconciled(hideReconciled === "true" ? "false" : "true");
		dispatch(collapseModals({ rootModalName: "account-menu" }));
	}, [
		hideReconciled,
		setHideReconciled,
		dispatch
	]);
	const onClick = (0, import_react.useCallback)(() => {
		dispatch(pushModal({ modal: {
			name: "account-menu",
			options: {
				accountId: account.id,
				onSave,
				onEditNotes,
				onCloseAccount,
				onReopenAccount,
				onToggleRunningBalance,
				onToggleReconciled
			}
		} }));
	}, [
		account.id,
		dispatch,
		onCloseAccount,
		onEditNotes,
		onReopenAccount,
		onSave,
		onToggleRunningBalance,
		onToggleReconciled
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: { flexDirection: "row" },
		children: [account.bank && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: {
			margin: "auto",
			marginRight: 5,
			width: 8,
			height: 8,
			borderRadius: 8,
			flexShrink: 0,
			backgroundColor: pending ? theme.sidebarItemBackgroundPending : failed ? theme.sidebarItemBackgroundFailed : theme.sidebarItemBackgroundPositive,
			transition: "transform .3s"
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			onPress: onClick,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: {
					fontSize: 17,
					fontWeight: 500,
					...styles.underlinedText,
					...styles.lineClamp(2)
				},
				children: account.closed ? t("Closed: {{accountName}}", { accountName: account.name }) : account.name
			})
		})]
	});
}
function NameOnlyHeader({ name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: { flexDirection: "row" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: { ...styles.lineClamp(2) },
			children: name
		})
	});
}
//#endregion
//#region src/hooks/useUrlParam.ts
/**
* Hook to get and set a specific URL search parameter value
*/
function useUrlParam(name) {
	const [searchParams, setSearchParams] = useSearchParams();
	const setParam = (0, import_react.useCallback)((value, opts) => {
		setSearchParams((prev) => {
			const next = new URLSearchParams(prev);
			if (value == null || value === "") next.delete(name);
			else next.set(name, value);
			return next;
		}, opts);
	}, [name, setSearchParams]);
	return [searchParams.get(name), setParam];
}
//#endregion
//#region src/components/mobile/rules/AddRuleButton.tsx
function AddRuleButton() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const handleAddRule = (0, import_react.useCallback)(() => {
		navigate("/rules/new");
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "bare",
		"aria-label": t("Add new rule"),
		style: { margin: 10 },
		onPress: handleAddRule,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgAdd, {
			width: 20,
			height: 20
		})
	});
}
//#endregion
//#region src/components/mobile/ActionableGridListItem.tsx
function ActionableGridListItem({ value, textValue, actions, actionsBackgroundColor = theme.errorBackground, actionsWidth = 100, children, onAction, ...props }) {
	const dragStartedRef = (0, import_react.useRef)(false);
	const [isRevealed, setIsRevealed] = (0, import_react.useState)(false);
	const hasActions = !!actions;
	const [{ x }, api] = useSpring(() => ({
		from: { x: 0 },
		config: config.stiff
	}), []);
	const bind = useDrag(({ active, movement: [mx], velocity: [vx] }) => {
		const currentX = (isRevealed ? -actionsWidth : 0) + mx;
		if (active) {
			dragStartedRef.current = true;
			api.start({
				to: { x: Math.max(-actionsWidth, Math.min(0, currentX)) },
				onRest: () => {
					dragStartedRef.current = false;
				}
			});
			return;
		}
		const shouldReveal = currentX < -actionsWidth / 2 || vx < -.5 && currentX < -actionsWidth / 5;
		api.start({
			to: { x: shouldReveal ? -actionsWidth : 0 },
			onRest: () => {
				dragStartedRef.current = false;
				setIsRevealed(shouldReveal);
			}
		});
	}, {
		axis: "x",
		from: () => [isRevealed ? -actionsWidth : 0, 0],
		enabled: hasActions
	});
	const handleAction = () => {
		if (!dragStartedRef.current) onAction?.();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)($72e60046c03fbe42$export$e96fc9a8407faa6b, {
		...props,
		value,
		textValue,
		style: {
			...styles.mobileListItem,
			padding: 0,
			backgroundColor: hasActions ? actionsBackgroundColor : styles.mobileListItem.backgroundColor ?? "transparent",
			overflow: "hidden"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(animated.div, {
			...hasActions ? bind() : {},
			style: {
				...hasActions ? { transform: x.to((v) => `translate3d(${v}px,0,0)`) } : {},
				display: "flex",
				touchAction: hasActions ? "pan-y" : "auto",
				cursor: hasActions ? "grab" : "pointer"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "bare",
				style: {
					flex: 1,
					backgroundColor: theme.tableBackground,
					minWidth: "100%",
					padding: 16,
					textAlign: "left",
					borderRadius: 0,
					justifyContent: "flex-start",
					alignItems: "flex-start"
				},
				onClick: handleAction,
				children
			}), hasActions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					display: "flex",
					justifyContent: "center",
					backgroundColor: actionsBackgroundColor,
					minWidth: actionsWidth
				},
				children: typeof actions === "function" ? actions({ close: () => {
					api.start({
						to: { x: 0 },
						onRest: () => {
							setIsRevealed(false);
						}
					});
				} }) : actions
			})]
		})
	});
}
//#endregion
//#region src/components/mobile/rules/RulesListItem.tsx
function RulesListItem({ value: rule, onDelete, style, ...props }) {
	const { t } = useTranslation();
	const actionSplits = groupActionsBySplitIndex(rule.actions);
	const hasSplits = actionSplits.length > 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionableGridListItem, {
		id: rule.id,
		value: rule,
		textValue: t("Rule {{id}}", { id: rule.id }),
		style: {
			...styles.mobileListItem,
			padding: "8px 16px",
			...style
		},
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			onPress: onDelete,
			style: {
				color: theme.errorText,
				width: "100%"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Delete" })
		}),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
			gap: 12,
			style: {
				alignItems: "flex-start",
				width: "100%"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					flexShrink: 0,
					paddingTop: 2
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: {
						backgroundColor: rule.stage === "pre" ? theme.noticeBackgroundLight : rule.stage === "post" ? theme.warningBackground : theme.pillBackgroundSelected,
						paddingLeft: 6,
						paddingRight: 6,
						paddingTop: 2,
						paddingBottom: 2,
						borderRadius: 3
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							fontSize: 11,
							fontWeight: 500,
							color: rule.stage === "pre" ? theme.noticeTextLight : rule.stage === "post" ? theme.warningText : theme.pillTextSelected
						},
						"data-testid": "rule-stage-badge",
						children: rule.stage === "pre" ? t("PRE") : rule.stage === "post" ? t("POST") : t("DEFAULT")
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flex: 1,
					flexDirection: "column",
					gap: 4
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
					gap: 6,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							fontSize: 13,
							fontWeight: 600,
							color: theme.pageTextLight,
							marginRight: 4
						},
						children: t("IF")
					}), rule.conditions.map((condition, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: {
							marginRight: 4,
							marginBottom: 2
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConditionExpression, {
							field: condition.field,
							op: condition.op,
							value: condition.value,
							options: condition.options,
							inline: true
						})
					}, index))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: {
						flexDirection: "column",
						alignItems: "flex-start",
						gap: 4
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							fontSize: 13,
							fontWeight: 600,
							color: theme.pageTextLight,
							marginBottom: 2
						},
						children: t("THEN")
					}), hasSplits ? actionSplits.map((split, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: {
							width: "100%",
							flexDirection: "column",
							alignItems: "flex-start",
							marginTop: i > 0 ? 4 : 0,
							padding: "6px",
							borderColor: theme.tableBorder,
							borderWidth: "1px",
							borderRadius: "5px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontSize: 11,
								fontWeight: 500,
								color: theme.pageTextLight,
								marginBottom: 4
							},
							children: i ? t("Split {{num}}", { num: i }) : t("Apply to all")
						}), split.actions.map((action, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								marginBottom: j !== split.actions.length - 1 ? 2 : 0,
								maxWidth: "100%"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionExpression, { ...action })
						}, j))]
					}, i)) : rule.actions.map((action, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: {
							marginBottom: 2,
							maxWidth: "100%"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionExpression, { ...action })
					}, index))]
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/mobile/rules/RulesList.tsx
function RulesList({ rules, isLoading, onRulePress, onRuleDelete }) {
	const { t } = useTranslation();
	if (isLoading && rules.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			paddingTop: 100
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLoading, { style: {
			width: 25,
			height: 25
		} })
	});
	if (rules.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			paddingHorizontal: 20
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: {
				fontSize: 16,
				color: theme.pageTextSubdued,
				textAlign: "center"
			},
			children: t("No rules found. Create your first rule to get started!")
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flex: 1,
			overflow: "auto"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)($ce3a951440fc273f$export$89be5a243e59c4b2, {
			layout: $61ef60fc9b1041f4$export$cacbb3924155d68e,
			layoutOptions: {
				estimatedRowHeight: 140,
				padding: 0
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)($72e60046c03fbe42$export$a7bfbda1311ca015, {
				"aria-label": t("Rules"),
				"aria-busy": isLoading || void 0,
				items: rules,
				style: { paddingBottom: MOBILE_NAV_HEIGHT },
				children: (rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RulesListItem, {
					value: rule,
					onAction: () => onRulePress(rule),
					onDelete: () => onRuleDelete(rule)
				})
			})
		}), isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				alignItems: "center",
				paddingTop: 20
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLoading, { style: {
				width: 20,
				height: 20
			} })
		})]
	});
}
//#endregion
//#region src/components/mobile/rules/MobileRulesPage.tsx
function MobileRulesPage() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { showUndoNotification } = useUndo();
	const [visibleRulesParam] = useUrlParam("visible-rules");
	const [allRules, setAllRules] = (0, import_react.useState)([]);
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	const [filter, setFilter] = (0, import_react.useState)("");
	const { schedules = [] } = useSchedules({ query: (0, import_react.useMemo)(() => q("schedules").select("*"), []) });
	const { data: { list: categories } = { list: [] } } = useCategories();
	const { data: payees = [] } = usePayees();
	const { data: accounts = [] } = useAccounts();
	const filterData = (0, import_react.useMemo)(() => ({
		payees,
		accounts,
		schedules,
		categories
	}), [
		payees,
		accounts,
		schedules,
		categories
	]);
	const visibleRules = (0, import_react.useMemo)(() => {
		if (!visibleRulesParam || visibleRulesParam.trim() === "") return allRules;
		const visibleRuleIdsSet = new Set(visibleRulesParam.split(",").map((id) => id.trim()));
		return allRules.filter((rule) => visibleRuleIdsSet.has(rule.id));
	}, [allRules, visibleRulesParam]);
	const filteredRules = (0, import_react.useMemo)(() => {
		const rules = visibleRules.filter((rule) => {
			const schedule = schedules.find((schedule) => schedule.rule === rule.id);
			return schedule ? schedule.completed === false : true;
		});
		return filter === "" ? rules : rules.filter((rule) => getNormalisedString(ruleToString(rule, filterData)).includes(getNormalisedString(filter)));
	}, [
		visibleRules,
		filter,
		filterData,
		schedules
	]);
	const loadRules = (0, import_react.useCallback)(async () => {
		try {
			setIsLoading(true);
			setAllRules(await send("rules-get") || []);
		} catch (error) {
			console.error("Failed to load rules:", error);
			setAllRules([]);
		} finally {
			setIsLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		loadRules();
	}, [loadRules]);
	(0, import_react.useEffect)(() => {
		const onUndo = () => {
			loadRules();
		};
		if (getUndoState("undoEvent")) onUndo();
		return listen("undo-event", onUndo);
	}, [loadRules]);
	const handleRulePress = (0, import_react.useCallback)((rule) => {
		navigate(`/rules/${rule.id}`);
	}, [navigate]);
	const onSearchChange = (0, import_react.useCallback)((value) => {
		setFilter(value);
	}, [setFilter]);
	const handleRuleDelete = (0, import_react.useCallback)(async (rule) => {
		try {
			const { someDeletionsFailed } = await send("rule-delete-all", [rule.id]);
			if (someDeletionsFailed) dispatch(addNotification({ notification: {
				type: "warning",
				message: t("This rule could not be deleted because it is linked to a schedule.")
			} }));
			else showUndoNotification({ message: t("Rule deleted successfully") });
			await loadRules();
		} catch (error) {
			console.error("Failed to delete rule:", error);
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Failed to delete rule. Please try again.")
			} }));
		}
	}, [
		dispatch,
		showUndoNotification,
		t,
		loadRules
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: t("Rules"),
			rightContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRuleButton, {})
		}),
		padding: 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flexDirection: "row",
				alignItems: "center",
				backgroundColor: theme.mobilePageBackground,
				padding: 10,
				width: "100%",
				borderBottomWidth: 2,
				borderBottomStyle: "solid",
				borderBottomColor: theme.tableBorder
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				placeholder: t("Filter rules…"),
				value: filter,
				onChange: onSearchChange,
				width: "100%",
				height: styles.mobileMinHeight,
				style: {
					backgroundColor: theme.tableBackground,
					borderColor: theme.formInputBorder
				}
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RulesList, {
			rules: filteredRules,
			isLoading,
			onRulePress: handleRulePress,
			onRuleDelete: handleRuleDelete
		})]
	});
}
//#endregion
//#region src/components/mobile/rules/MobileRuleEditPage.tsx
function MobileRuleEditPage() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { id } = useParams();
	const location = useLocation();
	const dispatch = useDispatch();
	const { showUndoNotification } = useUndo();
	const [rule, setRule] = (0, import_react.useState)(null);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const { schedules = [] } = useSchedules({ query: (0, import_react.useMemo)(() => rule?.id ? q("schedules").filter({
		rule: rule.id,
		completed: false
	}).select("*") : q("schedules").filter({ id: null }).select("*"), [rule?.id]) });
	const isLinkedToSchedule = schedules.length > 0;
	(0, import_react.useEffect)(() => {
		if (id && id !== "new") {
			setIsLoading(true);
			send("rule-get", { id }).then((loadedRule) => {
				if (loadedRule) setRule(loadedRule);
				else navigate("/rules");
			}).catch((error) => {
				console.error("Failed to load rule:", error);
				navigate("/rules");
			}).finally(() => {
				setIsLoading(false);
			});
		}
	}, [id, navigate]);
	const defaultRule = rule || {
		stage: null,
		conditionsOp: "and",
		conditions: [{
			field: "payee",
			op: "is",
			value: "",
			type: "id"
		}],
		actions: [{
			field: "category",
			op: "set",
			value: "",
			type: "id"
		}],
		...location.state?.rule || {}
	};
	const handleSave = () => {
		if (rule?.id) showUndoNotification({ message: t("Rule saved successfully") });
		navigate("/rules");
	};
	const handleCancel = () => {
		navigate(-1);
	};
	const handleDelete = () => {
		if (!id || id === "new") throw new Error("Cannot delete rule: invalid id");
		dispatch(pushModal({ modal: {
			name: "confirm-delete",
			options: {
				message: t("Are you sure you want to delete this rule?"),
				onConfirm: async () => {
					try {
						await send("rule-delete", id);
						showUndoNotification({ message: t("Rule deleted successfully") });
						navigate("/rules");
					} catch (error) {
						console.error("Failed to delete rule:", error);
						dispatch(addNotification({ notification: {
							type: "error",
							message: t("Failed to delete rule. Please try again.")
						} }));
					}
				}
			}
		} }));
	};
	const isEditing = Boolean(id && id !== "new" && rule);
	const pageTitle = location.state?.rule ? t("Rule") : isEditing ? t("Edit Rule") : t("Create Rule");
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: t("Loading..."),
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: handleCancel })
		}),
		padding: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flex: 1,
				backgroundColor: theme.mobilePageBackground,
				justifyContent: "center",
				alignItems: "center"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Loading rule..." }) })
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: pageTitle,
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: handleCancel })
		}),
		padding: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuleEditor, {
			rule: defaultRule,
			onSave: handleSave,
			onCancel: handleCancel,
			onDelete: isEditing && !isLinkedToSchedule ? handleDelete : void 0,
			style: {
				paddingTop: 10,
				flex: 1,
				backgroundColor: theme.mobilePageBackground
			}
		})
	});
}
//#endregion
//#region src/components/mobile/schedules/AddScheduleButton.tsx
function AddScheduleButton() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const handleAddSchedule = (0, import_react.useCallback)(() => {
		navigate("/schedules/new");
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "bare",
		"aria-label": t("Add new schedule"),
		style: { margin: 10 },
		onPress: handleAddSchedule,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgAdd, {
			width: 20,
			height: 20
		})
	});
}
//#endregion
//#region src/components/mobile/schedules/SchedulesListItem.tsx
function SchedulesListItem({ value: schedule, onDelete, status, style, ...props }) {
	const { t } = useTranslation();
	const format$2 = useFormat();
	const dateFormat = useDateFormat() || "MM/dd/yyyy";
	const amount = getScheduledAmount(schedule._amount);
	const amountStr = (schedule._amountOp === "isapprox" || schedule._amountOp === "isbetween" ? "~" : "") + (amount > 0 ? "+" : "") + format$2(Math.abs(amount || 0), "financial");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionableGridListItem, {
		id: schedule.id,
		value: schedule,
		textValue: schedule.name || t("Unnamed schedule"),
		style: {
			...styles.mobileListItem,
			padding: "8px 16px",
			...style
		},
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "bare",
			onPress: onDelete,
			style: {
				color: theme.errorText,
				width: "100%"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Delete" })
		}),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
			gap: 12,
			style: {
				alignItems: "flex-start",
				width: "100%"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flex: 1,
					flexDirection: "column",
					gap: 4
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							fontSize: 15,
							fontWeight: 600,
							color: schedule.name ? theme.pageText : theme.buttonNormalDisabledText
						},
						children: schedule.name || t("Unnamed schedule")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
						gap: 4,
						style: { flexWrap: "wrap" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
							gap: 4,
							direction: "horizontal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: { color: theme.pageTextSubdued },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Payee:" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayId, {
								type: "payees",
								id: schedule._payee
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
							gap: 4,
							direction: "horizontal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: { color: theme.pageTextSubdued },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Account:" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisplayId, {
								type: "accounts",
								id: schedule._account
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
						gap: 8,
						style: { flexWrap: "wrap" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
							gap: 4,
							direction: "horizontal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: { color: theme.pageTextSubdued },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Amount:" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: {
									...styles.tnum,
									color: theme.pageText
								},
								children: amountStr
							})]
						}), schedule.next_date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
							gap: 4,
							direction: "horizontal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: { color: theme.pageTextSubdued },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Next:" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: { color: theme.pageText },
								children: format(schedule.next_date, dateFormat)
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					flexShrink: 0,
					paddingTop: 2
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status })
			})]
		})
	});
}
//#endregion
//#region src/components/mobile/schedules/SchedulesList.tsx
function SchedulesList({ schedules, isLoading, statuses, onSchedulePress, onScheduleDelete, hasCompletedSchedules = false, showCompleted = false, onShowCompleted }) {
	const { t } = useTranslation();
	const listItems = hasCompletedSchedules && !showCompleted && onShowCompleted ? [...schedules, { id: "show-completed" }] : schedules;
	const showCompletedLabel = t("Show completed schedules");
	if (isLoading && listItems.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			paddingTop: 100
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLoading, { style: {
			width: 25,
			height: 25
		} })
	});
	if (listItems.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			paddingHorizontal: 20
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: {
				fontSize: 16,
				color: theme.pageTextSubdued,
				textAlign: "center",
				paddingLeft: 10,
				paddingRight: 10
			},
			children: t("No schedules found. Create your first schedule to get started!")
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			flex: 1,
			overflow: "auto"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)($ce3a951440fc273f$export$89be5a243e59c4b2, {
			layout: $61ef60fc9b1041f4$export$cacbb3924155d68e,
			layoutOptions: {
				estimatedRowHeight: 140,
				padding: 0
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)($72e60046c03fbe42$export$a7bfbda1311ca015, {
				"aria-label": t("Schedules"),
				"aria-busy": isLoading || void 0,
				items: listItems,
				style: { paddingBottom: MOBILE_NAV_HEIGHT },
				children: (item) => !("completed" in item) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionableGridListItem, {
					id: "show-completed",
					value: item,
					textValue: showCompletedLabel,
					onAction: onShowCompleted,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: {
							width: "100%",
							alignItems: "center"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: {
								fontStyle: "italic",
								color: theme.pageTextSubdued
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Show completed schedules" })
						})
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulesListItem, {
					value: item,
					status: statuses.get(item.id) || "scheduled",
					onAction: () => onSchedulePress(item),
					onDelete: () => onScheduleDelete(item)
				})
			})
		}), isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				alignItems: "center",
				paddingTop: 20
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLoading, { style: {
				width: 20,
				height: 20
			} })
		})]
	});
}
//#endregion
//#region src/components/mobile/schedules/MobileSchedulesPage.tsx
function MobileSchedulesPage() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { showUndoNotification } = useUndo();
	const [filter, setFilter] = (0, import_react.useState)("");
	const [showCompleted, setShowCompleted] = (0, import_react.useState)(false);
	const format$1 = useFormat();
	const dateFormat = useDateFormat() || "MM/dd/yyyy";
	const { isLoading: isSchedulesLoading, schedules, statuses } = useSchedules({ query: (0, import_react.useMemo)(() => q("schedules").select("*"), []) });
	const { data: payees = [] } = usePayees();
	const { data: accounts = [] } = useAccounts();
	const filterIncludes = (str) => str ? getNormalisedString(str).includes(getNormalisedString(filter)) || getNormalisedString(filter).includes(getNormalisedString(str)) : false;
	const baseSchedules = filter ? schedules.filter((schedule) => {
		const payee = payees.find((p) => schedule._payee === p.id);
		const account = accounts.find((a) => schedule._account === a.id);
		const amount = getScheduledAmount(schedule._amount);
		const amountStr = (schedule._amountOp === "isapprox" || schedule._amountOp === "isbetween" ? "~" : "") + (amount > 0 ? "+" : "") + format$1(Math.abs(amount || 0), "financial");
		const dateStr = schedule.next_date ? format(schedule.next_date, dateFormat) : null;
		const statusLabel = statuses.get(schedule.id);
		return filterIncludes(schedule.name) || filterIncludes(payee?.name) || filterIncludes(account?.name) || filterIncludes(amountStr) || filterIncludes(statusLabel) || filterIncludes(dateStr);
	}) : schedules;
	const hasCompletedSchedules = baseSchedules.some((schedule) => schedule.completed);
	const filteredSchedules = showCompleted ? baseSchedules : baseSchedules.filter((schedule) => !schedule.completed);
	const handleSchedulePress = (0, import_react.useCallback)((schedule) => {
		navigate(`/schedules/${schedule.id}`);
	}, [navigate]);
	const handleScheduleDelete = (0, import_react.useCallback)(async (schedule) => {
		try {
			await send("schedule/delete", { id: schedule.id });
			showUndoNotification({ message: t("Schedule deleted successfully") });
		} catch (error) {
			console.error("Failed to delete schedule:", error);
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Failed to delete schedule. Please try again.")
			} }));
		}
	}, [
		dispatch,
		showUndoNotification,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: {
					...styles.underlinedText,
					fontSize: 16
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Schedules" })
			}),
			rightContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddScheduleButton, {})
		}),
		padding: 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flexDirection: "row",
				alignItems: "center",
				backgroundColor: theme.mobilePageBackground,
				padding: 10,
				width: "100%",
				borderBottomWidth: 2,
				borderBottomStyle: "solid",
				borderBottomColor: theme.tableBorder
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				placeholder: t("Filter schedules…"),
				value: filter,
				onChange: setFilter,
				width: "100%",
				height: styles.mobileMinHeight,
				style: {
					backgroundColor: theme.tableBackground,
					borderColor: theme.formInputBorder
				}
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulesList, {
			schedules: filteredSchedules,
			isLoading: isSchedulesLoading,
			statuses,
			onSchedulePress: handleSchedulePress,
			onScheduleDelete: handleScheduleDelete,
			hasCompletedSchedules,
			showCompleted,
			onShowCompleted: () => setShowCompleted(true)
		})]
	});
}
//#endregion
//#region src/components/mobile/schedules/MobileScheduleEditPage.tsx
function MobileScheduleEditPage() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { id } = useParams();
	const { showUndoNotification } = useUndo();
	const adding = !id || id === "new";
	const { state, dispatch, isLoading } = useScheduleEdit({
		scheduleId: id,
		adding,
		initialSchedule: adding ? (() => {
			const date = {
				start: currentDay(),
				frequency: "monthly",
				patterns: [],
				skipWeekend: false,
				weekendSolveMode: "after",
				endMode: "never",
				endOccurrences: 1,
				endDate: currentDay()
			};
			return {
				posts_transaction: false,
				_date: date,
				_conditions: [{
					op: "isapprox",
					field: "date",
					value: date
				}],
				_actions: []
			};
		})() : void 0,
		useGetScheduledAmount: true
	});
	const selectedInst = useSelected("transactions", state.transactions, []);
	async function onSave() {
		dispatch({
			type: "form-error",
			error: null
		});
		if (!state.schedule) return;
		if (state.fields.name) {
			const { data: sameName } = await aqlQuery(q("schedules").filter({ name: state.fields.name }).select("id"));
			if (sameName.length > 0 && sameName[0].id !== state.schedule.id) {
				dispatch({
					type: "form-error",
					error: t("There is already a schedule with this name")
				});
				return;
			}
		}
		const { error, conditions } = updateScheduleConditions(state.schedule, state.fields);
		if (error) {
			dispatch({
				type: "form-error",
				error
			});
			return;
		}
		const res = await sendCatch(adding ? "schedule/create" : "schedule/update", {
			schedule: {
				id: state.schedule.id,
				posts_transaction: state.fields.posts_transaction,
				name: state.fields.name
			},
			conditions
		});
		if (res.error) {
			dispatch({
				type: "form-error",
				error: t("An error occurred while saving. Please visit https://actualbudget.org/contact/ for support.")
			});
			return;
		}
		if (adding) await onLinkTransactions([...selectedInst.items], res.data);
		showUndoNotification({ message: adding ? t("Schedule created successfully") : t("Schedule saved successfully") });
		navigate("/schedules");
	}
	async function onEditRule(ruleId) {
		navigate(`/rules/${ruleId}`);
	}
	async function onLinkTransactions(ids, scheduleId) {
		await send("transactions-batch-update", { updated: ids.map((id) => ({
			id,
			schedule: scheduleId
		})) });
		selectedInst.dispatch({ type: "select-none" });
	}
	async function onUnlinkTransactions(ids) {
		await send("transactions-batch-update", { updated: ids.map((id) => ({
			id,
			schedule: null
		})) });
		selectedInst.dispatch({ type: "select-none" });
	}
	const { schedule } = state;
	function onSwitchTransactions(mode) {
		dispatch({
			type: "switch-transactions",
			mode
		});
		selectedInst.dispatch({ type: "select-none" });
	}
	const repeats = state.fields.date && typeof state.fields.date !== "string" ? !!state.fields.date.frequency : false;
	const pageTitle = adding ? t("Create Schedule") : t("Edit Schedule");
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: t("Loading..."),
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: () => navigate(-1) })
		}),
		padding: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flex: 1,
				backgroundColor: theme.mobilePageBackground,
				justifyContent: "center",
				alignItems: "center"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Loading schedule..." }) })
		})
	});
	if (!schedule) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: t("Schedule not found"),
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: () => navigate("/schedules") })
		}),
		padding: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flex: 1,
				backgroundColor: theme.mobilePageBackground,
				justifyContent: "center",
				alignItems: "center"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Schedule not found" }) })
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: pageTitle,
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: () => navigate(-1) })
		}),
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				paddingLeft: styles.mobileEditingPadding,
				paddingRight: styles.mobileEditingPadding,
				paddingTop: 10,
				paddingBottom: "calc(10px + env(safe-area-inset-bottom))",
				backgroundColor: theme.tableHeaderBackground,
				borderTopWidth: 1,
				borderColor: theme.tableBorder
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				onPress: onSave,
				style: { height: styles.mobileMinHeight },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save" })
			})
		}),
		padding: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleEditForm, {
			fields: state.fields,
			dispatch,
			upcomingDates: state.upcomingDates,
			repeats,
			schedule,
			adding,
			isCustom: state.isCustom ?? false,
			onEditRule,
			transactions: state.transactions,
			transactionsMode: state.transactionsMode,
			error: state.error,
			selectedInst,
			onSwitchTransactions,
			onLinkTransactions,
			onUnlinkTransactions
		})
	});
}
//#endregion
//#region src/hooks/useCategoryPreviewTransactions.ts
function useCategoryPreviewTransactions({ categoryId, month }) {
	const { data: category } = useCategory(categoryId);
	const { schedules } = useCategoryScheduleGoalTemplates({ category });
	const schedulesToPreview = (0, import_react.useMemo)(() => new Set(schedules.filter((schedule) => getMonth(schedule.next_date) === month).map((schedule) => schedule.id)), [month, schedules]);
	const categoryBalanceValue = useSheetValue(categoryBalance(categoryId, month));
	const { previewTransactions: allPreviewTransactions, runningBalances: allRunningBalances, isLoading, error } = usePreviewTransactions({
		filter: (0, import_react.useCallback)((schedule) => schedulesToPreview.has(schedule.id), [schedulesToPreview]),
		options: { startingBalance: categoryBalanceValue ?? 0 }
	});
	return (0, import_react.useMemo)(() => {
		if (!category || !schedulesToPreview.size) return {
			previewTransactions: [],
			runningBalances: /* @__PURE__ */ new Map(),
			isLoading,
			error
		};
		const previewTransactions = allPreviewTransactions.filter((transaction) => transaction.schedule && schedulesToPreview.has(transaction.schedule));
		const transactionIds = new Set(previewTransactions.map((t) => t.id));
		return {
			previewTransactions,
			runningBalances: new Map([...allRunningBalances].filter(([id]) => transactionIds.has(id))),
			isLoading,
			error
		};
	}, [
		allPreviewTransactions,
		allRunningBalances,
		category,
		error,
		isLoading,
		schedulesToPreview
	]);
}
//#endregion
//#region src/components/mobile/budget/CategoryTransactions.tsx
function CategoryTransactions({ category, month }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulesProvider, {
		query: (0, import_react.useMemo)(() => q("schedules").select("*"), []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListWithPreviews, {
			category,
			month
		})
	});
}
function TransactionListWithPreviews({ category, month }) {
	const navigate = useNavigate();
	const baseTransactionsQuery = (0, import_react.useCallback)(() => q("transactions").options({ splits: "inline" }).filter(getCategoryMonthFilter(category, month)).select("*"), [category, month]);
	const [transactionsQuery, setTransactionsQuery] = (0, import_react.useState)(baseTransactionsQuery());
	const { transactions, isPending: isTransactionsLoading, isFetchingNextPage: isLoadingMoreTransactions, fetchNextPage: fetchMoreTransactions } = useTransactions({ query: transactionsQuery });
	const { isSearching, search: onSearch } = useTransactionsSearch({
		updateQuery: setTransactionsQuery,
		resetQuery: () => setTransactionsQuery(baseTransactionsQuery()),
		dateFormat: useDateFormat() || "MM/dd/yyyy"
	});
	const onOpenTransaction = (0, import_react.useCallback)((transaction) => {
		if (!isPreviewId(transaction.id)) navigate(`/transactions/${transaction.id}`);
	}, [navigate]);
	const balance = categoryBalance(category.id, month);
	const balanceCleared = categoryBalanceCleared(category.id, month);
	const balanceUncleared = categoryBalanceUncleared(category.id, month);
	const { previewTransactions, isLoading: isPreviewTransactionsLoading } = useCategoryPreviewTransactions({
		categoryId: category.id,
		month
	});
	const transactionsToDisplay = !isSearching ? previewTransactions.concat(transactions) : transactions;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListWithBalances, {
		isLoading: isSearching ? isTransactionsLoading : isTransactionsLoading || isPreviewTransactionsLoading,
		transactions: transactionsToDisplay,
		balance,
		balanceCleared,
		balanceUncleared,
		searchPlaceholder: `Search ${category.name}`,
		onSearch,
		isLoadingMore: isLoadingMoreTransactions,
		onLoadMore: fetchMoreTransactions,
		onOpenTransaction
	});
}
function getCategoryMonthFilter(category, month) {
	return {
		category: category.id,
		date: {
			$transform: "$month",
			$eq: month
		}
	};
}
//#endregion
//#region src/components/mobile/budget/UncategorizedTransactions.tsx
function UncategorizedTransactions() {
	const navigate = useNavigate();
	const baseTransactionsQuery = (0, import_react.useCallback)(() => uncategorizedTransactions().options({ splits: "inline" }).select("*"), []);
	const [transactionsQuery, setTransactionsQuery] = (0, import_react.useState)(baseTransactionsQuery());
	const { transactions, isPending: isTransactionsLoading, isFetchingNextPage: isLoadingMoreTransactions, fetchNextPage: fetchMoreTransactions } = useTransactions({ query: transactionsQuery });
	const { search: onSearch } = useTransactionsSearch({
		updateQuery: setTransactionsQuery,
		resetQuery: () => setTransactionsQuery(baseTransactionsQuery()),
		dateFormat: useDateFormat() || "MM/dd/yyyy"
	});
	const onOpenTransaction = (0, import_react.useCallback)((transaction) => {
		if (!isPreviewId(transaction.id)) navigate(`/transactions/${transaction.id}`);
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulesProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionListWithBalances, {
		isLoading: isTransactionsLoading,
		transactions,
		balance: uncategorizedBalance(),
		searchPlaceholder: "Search uncategorized transactions",
		onSearch,
		isLoadingMore: isLoadingMoreTransactions,
		onLoadMore: fetchMoreTransactions,
		onOpenTransaction,
		showMakeTransfer: true
	}) });
}
//#endregion
//#region src/components/mobile/budget/CategoryPage.tsx
function CategoryPage() {
	const locale = useLocale();
	const [_numberFormat] = useSyncedPref("numberFormat");
	const numberFormat = _numberFormat || "comma-dot";
	const [hideFraction] = useSyncedPref("hideFraction");
	const { id: categoryIdParam } = useParams();
	const [searchParams] = useSearchParams();
	const month = searchParams.get("month") || currentMonth();
	const { data: category } = useCategory(categoryIdParam);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: category ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextOneLine, { children: category.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TextOneLine, { children: [
				"(",
				format(month, "MMMM ''yy", locale),
				")"
			] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextOneLine, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Uncategorized" }) }),
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, {}),
			rightContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddTransactionButton, { categoryId: category?.id })
		}),
		padding: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: category ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTransactions, {
			category,
			month
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UncategorizedTransactions, {}) }, numberFormat + hideFraction)
	});
}
//#endregion
//#region src/components/mobile/payees/PayeesListItem.tsx
function PayeesListItem({ value: payee, ruleCount, isRuleCountLoading, onDelete, onViewRules, ...props }) {
	const { t } = useTranslation();
	const label = payee.transfer_acct ? t("Transfer: {{name}}", { name: payee.name }) : payee.name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionableGridListItem, {
		id: payee.id,
		value: payee,
		textValue: label,
		actionsWidth: 200,
		actions: !payee.transfer_acct && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
			style: {
				flexDirection: "row",
				flex: 1
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "bare",
				onPress: onViewRules,
				style: {
					color: theme.pillText,
					backgroundColor: theme.pillBackground,
					flex: 1,
					borderRadius: 0
				},
				children: ruleCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "View rules" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Create rule" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "bare",
				onPress: onDelete,
				style: {
					color: theme.errorText,
					flex: 1,
					borderRadius: 0
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Delete" })
			})]
		}),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
			gap: 5,
			style: { flex: 1 },
			children: [payee.favorite && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgBookmark, {
				"aria-hidden": true,
				focusable: false,
				width: 15,
				height: 15,
				style: {
					color: theme.pageText,
					flexShrink: 0
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
				style: {
					justifyContent: "space-between",
					flex: 1,
					alignItems: "flex-start"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						fontSize: 15,
						fontWeight: 500,
						color: payee.transfer_acct ? theme.pageTextSubdued : theme.pageText,
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
						flex: 1,
						textAlign: "left"
					},
					title: label,
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						borderRadius: 4,
						padding: "3px 6px",
						backgroundColor: theme.noticeBackground,
						border: "1px solid " + theme.noticeBackground,
						color: theme.noticeTextDark,
						fontSize: 12,
						flexShrink: 0
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayeeRuleCountLabel, {
						count: ruleCount,
						isLoading: isRuleCountLoading,
						style: { fontSize: 12 }
					})
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/mobile/payees/PayeesList.tsx
function PayeesList({ payees, ruleCounts, isRuleCountsLoading = false, isLoading = false, onPayeePress, onPayeeDelete, onPayeeRuleAction }) {
	const { t } = useTranslation();
	if (isLoading && payees.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			paddingTop: 100
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLoading, { style: {
			width: 25,
			height: 25
		} })
	});
	if (payees.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			paddingHorizontal: 20
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: {
				fontSize: 16,
				color: theme.pageTextSubdued,
				textAlign: "center"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "No payees found." })
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: { flex: 1 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)($ce3a951440fc273f$export$89be5a243e59c4b2, {
			layout: $61ef60fc9b1041f4$export$cacbb3924155d68e,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)($72e60046c03fbe42$export$a7bfbda1311ca015, {
				"aria-label": t("Payees"),
				"aria-busy": isLoading || void 0,
				items: payees,
				style: {
					flex: 1,
					paddingBottom: MOBILE_NAV_HEIGHT,
					overflow: "auto"
				},
				dependencies: [ruleCounts, isRuleCountsLoading],
				children: (payee) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayeesListItem, {
					value: payee,
					ruleCount: ruleCounts.get(payee.id) ?? 0,
					isRuleCountLoading: isRuleCountsLoading,
					onAction: () => onPayeePress(payee),
					onDelete: () => onPayeeDelete(payee),
					onViewRules: () => onPayeeRuleAction(payee)
				})
			})
		}), isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				alignItems: "center",
				paddingTop: 20
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLoading, { style: {
				width: 20,
				height: 20
			} })
		})]
	});
}
//#endregion
//#region src/components/mobile/payees/MobilePayeesPage.tsx
function MobilePayeesPage() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { data: payees = [], isPending } = usePayees();
	const { showUndoNotification } = useUndo();
	const [filter, setFilter] = (0, import_react.useState)("");
	const { data: ruleCounts = /* @__PURE__ */ new Map(), isPending: isRuleCountsLoading } = usePayeeRuleCounts();
	const filteredPayees = (0, import_react.useMemo)(() => {
		if (!filter) return payees;
		const norm = getNormalisedString(filter);
		return payees.filter((p) => getNormalisedString(p.name).includes(norm));
	}, [payees, filter]);
	const onSearchChange = (0, import_react.useCallback)((value) => {
		setFilter(value);
	}, []);
	const handlePayeePress = (0, import_react.useCallback)((payee) => {
		navigate(`/payees/${payee.id}`);
	}, [navigate]);
	const handlePayeeRuleAction = (0, import_react.useCallback)(async (payee) => {
		if ((ruleCounts.get(payee.id) ?? 0) > 0) try {
			navigate(`/rules?visible-rules=${(await send("payees-get-rules", { id: payee.id })).map((rule) => rule.id).join(",")}`);
			return;
		} catch (error) {
			console.error("Failed to fetch payee rules:", error);
			navigate("/rules");
			return;
		}
		navigate("/rules/new", { state: { rule: { conditions: [{
			field: "payee",
			op: "is",
			value: payee.id,
			type: "id"
		}] } } });
	}, [navigate, ruleCounts]);
	const handlePayeeDelete = (0, import_react.useCallback)(async (payee) => {
		try {
			await send("payees-batch-change", { deleted: [{ id: payee.id }] });
			showUndoNotification({ message: t("Payee \"{{name}}\" deleted successfully", { name: payee.name }) });
		} catch (error) {
			console.error("Failed to delete payee:", error);
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Failed to delete payee. Please try again.")
			} }));
		}
	}, [
		dispatch,
		showUndoNotification,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, { title: t("Payees") }),
		padding: 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flexDirection: "row",
				alignItems: "center",
				backgroundColor: theme.mobilePageBackground,
				padding: 10,
				width: "100%",
				borderBottomWidth: 2,
				borderBottomStyle: "solid",
				borderBottomColor: theme.tableBorder
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				placeholder: t("Filter payees…"),
				value: filter,
				onChange: onSearchChange,
				width: "100%",
				height: styles.mobileMinHeight,
				style: {
					backgroundColor: theme.tableBackground,
					borderColor: theme.formInputBorder
				}
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayeesList, {
			payees: filteredPayees,
			ruleCounts,
			isRuleCountsLoading,
			isLoading: isPending,
			onPayeePress: handlePayeePress,
			onPayeeDelete: handlePayeeDelete,
			onPayeeRuleAction: handlePayeeRuleAction
		})]
	});
}
//#endregion
//#region src/components/mobile/payees/MobilePayeeEditPage.tsx
function MobilePayeeEditPage() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { id } = useParams();
	const dispatch = useDispatch();
	const { showUndoNotification } = useUndo();
	const { data: payees = [] } = usePayees();
	const [payee, setPayee] = (0, import_react.useState)(null);
	const [editedPayeeName, setEditedPayeeName] = (0, import_react.useState)("");
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (id) {
			setIsLoading(true);
			const foundPayee = payees.find((p) => p.id === id);
			if (foundPayee) {
				setPayee(foundPayee);
				setEditedPayeeName(foundPayee.name);
				setIsLoading(false);
			} else navigate("/payees");
		}
	}, [
		id,
		payees,
		navigate
	]);
	const handleCancel = (0, import_react.useCallback)(() => {
		navigate(-1);
	}, [navigate]);
	const handleSave = (0, import_react.useCallback)(async () => {
		if (!payee || !editedPayeeName.trim()) return;
		try {
			await send("payees-batch-change", { updated: [{
				id: payee.id,
				name: editedPayeeName.trim()
			}] });
			showUndoNotification({ message: t("Payee {{oldName}} renamed to {{newName}}", {
				oldName: payee.name,
				newName: editedPayeeName.trim()
			}) });
			navigate("/payees");
		} catch (error) {
			console.error("Failed to update payee:", error);
			dispatch(addNotification({ notification: {
				type: "error",
				message: t("Failed to update payee. Please try again.")
			} }));
		}
	}, [
		payee,
		editedPayeeName,
		dispatch,
		showUndoNotification,
		t,
		navigate
	]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: t("Loading..."),
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: handleCancel })
		}),
		padding: 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flex: 1,
				backgroundColor: theme.mobilePageBackground,
				justifyContent: "center",
				alignItems: "center"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Loading payee..." }) })
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, {
			title: t("Edit Payee"),
			leftContent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBackButton, { onPress: handleCancel })
		}),
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				paddingLeft: styles.mobileEditingPadding,
				paddingRight: styles.mobileEditingPadding,
				paddingTop: 10,
				paddingBottom: "calc(10px + env(safe-area-inset-bottom))",
				backgroundColor: theme.tableHeaderBackground,
				borderTopWidth: 1,
				borderColor: theme.tableBorder
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "primary",
				onPress: handleSave,
				isDisabled: !editedPayeeName.trim(),
				style: { height: styles.mobileMinHeight },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Save" })
			})
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: { paddingTop: 20 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
				placeholder: t("Payee name"),
				value: editedPayeeName,
				onChangeValue: setEditedPayeeName
			})
		})
	});
}
//#endregion
//#region src/components/mobile/banksync/BankSyncAccountsListItem.tsx
function BankSyncAccountsListItem({ account, onAction, isLinked }) {
	const locale = useLocale();
	const lastSyncString = isLinked ? tsToRelativeTime(account.last_sync, locale, { capitalize: true }) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		"data-testid": "bank-sync-account",
		style: {
			backgroundColor: theme.tableBackground,
			borderBottomWidth: 1,
			borderBottomColor: theme.tableBorder,
			borderBottomStyle: "solid",
			padding: 16,
			width: "100%",
			cursor: "pointer"
		},
		onClick: () => onAction(account, isLinked ? "edit" : "link"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
			gap: 60,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
				direction: "vertical",
				gap: 5,
				style: {
					flex: 1,
					alignItems: "flex-start"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							fontSize: 15,
							fontWeight: 500,
							color: theme.tableText
						},
						children: account.name
					}),
					isLinked && account.bankName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							fontSize: 13,
							color: theme.pageTextSubdued
						},
						children: account.bankName
					}),
					isLinked && lastSyncString && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: {
							fontSize: 13,
							color: theme.pageTextSubdued
						},
						"data-vrt-mask": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, { children: ["Last sync: ", { time: lastSyncString }] })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					borderRadius: 4,
					padding: "5px 10px",
					backgroundColor: theme.noticeBackground,
					border: "1px solid " + theme.noticeBackground,
					color: theme.noticeTextDark,
					fontSize: 13,
					fontWeight: 500,
					flexShrink: 0
				},
				children: isLinked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Edit" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Link account" })
			})]
		})
	});
}
//#endregion
//#region src/components/mobile/banksync/BankSyncAccountsList.tsx
function BankSyncAccountsList({ groupedAccounts, syncSourceReadable, onAction }) {
	if (Object.values(groupedAccounts).flat().length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			paddingHorizontal: 20
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: {
				fontSize: 16,
				color: theme.pageTextSubdued,
				textAlign: "center"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "No accounts found matching your search." })
		})
	});
	const shouldShowProviderHeaders = Object.keys(groupedAccounts).length > 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			flex: 1,
			overflow: "auto",
			paddingBottom: MOBILE_NAV_HEIGHT
		},
		children: Object.entries(groupedAccounts).map(([provider, accounts]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [shouldShowProviderHeaders && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				backgroundColor: theme.mobilePageBackground,
				padding: "12px 16px",
				borderBottom: `1px solid ${theme.tableBorder}`,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				minHeight: 40
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: {
					fontSize: 14,
					fontWeight: 600,
					color: theme.pageTextLight,
					textTransform: "uppercase",
					letterSpacing: .5
				},
				children: syncSourceReadable[provider]
			})
		}), accounts.map((account) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BankSyncAccountsListItem, {
			account,
			onAction,
			isLinked: !!account.account_sync_source
		}, account.id))] }, provider))
	});
}
//#endregion
//#region src/components/mobile/banksync/MobileBankSyncPage.tsx
var useSyncSourceReadable = () => {
	const { t } = useTranslation();
	return { syncSourceReadable: {
		goCardless: "GoCardless",
		simpleFin: "SimpleFIN",
		pluggyai: "Pluggy.ai",
		unlinked: t("Unlinked")
	} };
};
function MobileBankSyncPage() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { syncSourceReadable } = useSyncSourceReadable();
	const { data: accounts = [] } = useAccounts();
	const [filter, setFilter] = (0, import_react.useState)("");
	const openAccounts = (0, import_react.useMemo)(() => accounts.filter((a) => !a.closed), [accounts]);
	const groupedAccounts = (0, import_react.useMemo)(() => {
		const unsorted = openAccounts.reduce((acc, a) => {
			const syncSource = a.account_sync_source ?? "unlinked";
			acc[syncSource] = acc[syncSource] || [];
			acc[syncSource].push(a);
			return acc;
		}, {});
		return Object.keys(unsorted).sort((keyA, keyB) => {
			if (keyA === "unlinked") return 1;
			if (keyB === "unlinked") return -1;
			return keyA.localeCompare(keyB);
		}).reduce((sorted, key) => {
			sorted[key] = unsorted[key];
			return sorted;
		}, {});
	}, [openAccounts]);
	const filteredGroupedAccounts = (0, import_react.useMemo)(() => {
		if (!filter) return groupedAccounts;
		const filterLower = filter.toLowerCase();
		const filtered = {};
		Object.entries(groupedAccounts).forEach(([provider, accounts]) => {
			const filteredAccounts = accounts.filter((account) => account.name.toLowerCase().includes(filterLower) || account.bankName?.toLowerCase().includes(filterLower));
			if (filteredAccounts.length > 0) filtered[provider] = filteredAccounts;
		});
		return filtered;
	}, [groupedAccounts, filter]);
	const onAction = (0, import_react.useCallback)((account, action) => {
		switch (action) {
			case "edit":
				navigate(`/bank-sync/account/${account.id}/edit`);
				break;
			case "link":
				dispatch(pushModal({ modal: {
					name: "add-account",
					options: { upgradingAccountId: account.id }
				} }));
				break;
			default: break;
		}
	}, [navigate, dispatch]);
	const onSearchChange = (0, import_react.useCallback)((value) => {
		setFilter(value);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePageHeader, { title: t("Bank Sync") }),
		padding: 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flexDirection: "row",
				alignItems: "center",
				backgroundColor: theme.mobilePageBackground,
				padding: 10,
				width: "100%",
				borderBottomWidth: 2,
				borderBottomStyle: "solid",
				borderBottomColor: theme.tableBorder
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				placeholder: t("Filter accounts…"),
				value: filter,
				onChange: onSearchChange,
				width: "100%",
				height: styles.mobileMinHeight,
				style: {
					backgroundColor: theme.tableBackground,
					borderColor: theme.formInputBorder
				}
			})
		}), openAccounts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			style: {
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				paddingHorizontal: 20,
				paddingTop: 40
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: {
					fontSize: 16,
					color: theme.pageTextSubdued,
					textAlign: "center"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "To use the bank syncing features, you must first add an account." })
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BankSyncAccountsList, {
			groupedAccounts: filteredGroupedAccounts,
			syncSourceReadable,
			onAction
		})]
	});
}
//#endregion
export { AccountPage as Account, AccountsPage as Accounts, MobileBankSyncPage as BankSync, MobileBankSyncAccountEditPage as BankSyncAccountEdit, BudgetPage as Budget, CategoryPage as Category, MobilePayeeEditPage as PayeeEdit, MobilePayeesPage as Payees, MobileRuleEditPage as RuleEdit, MobileRulesPage as Rules, MobileScheduleEditPage as ScheduleEdit, MobileSchedulesPage as Schedules };

//# sourceMappingURL=narrow.D2SdJOC6.chunk.js.map