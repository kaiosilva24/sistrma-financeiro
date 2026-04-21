import { l as __toESM, n as require_jsx_runtime, r as require_react, t as theme } from "./theme.LZxTPVqa.chunk.js";
import { C as css, G as pushModal, Kt as useDispatch, Qr as setUndoState, Tn as groupById, Zt as payeeQueries, b as styles, ii as useTranslation, lr as useQuery, oi as Trans, on as useAccounts, qr as send, qt as useSelector, y as useSyncedPref } from "./extends.opUJhDAp.chunk.js";
import { $o as SpaceBetween, Ai as SvgSearchAlternate, Bn as accountBalance, Ci as Menu, Dn as calculateRunningBalancesBottomUp, Gt as getNormalisedString, Ho as SvgRightArrow2, I as usePayees, Io as Input, Kt as computeSchedulePreviewTransactions, L as usePayeesById, Qr as Field, Ro as baseInputStyle, Si as Popover, Ul as View, Un as allAccountBalance, Yr as Cell, _i as useSelectedItems, _n as mapField, ai as TableHeader, cn as ungroupTransactions, di as useSheetValue, ei as Row, es as Link, fn as friendlyOp, gi as useSelectedDispatch, gt as useSchedules, hi as useSelected, ji as SvgRemove, ju as q, lt as useContextMenu, mt as useCachedSchedules, ns as Button, pi as SelectedProvider, pn as getAllocationMethods, qt as describeSchedule, rt as useCategories, t as Value, ti as SelectCell, ts as Text, vl as AnimatedLoading, vn as translateRuleStage } from "./Value.D0gbasR7.chunk.js";
//#region src/components/common/InfiniteScrollWrapper.tsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Wrapper around an infinitely loading list.
* Calls the `loadMore` callback when the bottom of the list is reached
* by scrolling to the bottom of the list.
*/
function InfiniteScrollWrapper({ loadMore, children }) {
	const scrollRef = (0, import_react.useRef)(null);
	function onScroll(e) {
		if (loadMore && Math.abs(e.currentTarget.scrollHeight - e.currentTarget.clientHeight - e.currentTarget.scrollTop) < 1) loadMore();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			flex: 1,
			outline: "none",
			"& .animated .animated-row": { transition: ".25s transform" },
			marginBottom: -1
		},
		tabIndex: 0,
		"data-testid": "table",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
			innerRef: scrollRef,
			style: {
				maxWidth: "100%",
				overflow: "auto"
			},
			onScroll,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })
		})
	});
}
//#endregion
//#region src/components/common/Search.tsx
function Search({ ref, value, onChange, placeholder, isInModal = false, width = 250, height, style }) {
	const { t } = useTranslation();
	const [focused, setFocused] = (0, import_react.useState)(false);
	const clearButtonPadding = ((height ?? 24) - 8) / 2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			...baseInputStyle,
			padding: 0,
			flexDirection: "row",
			alignItems: "center",
			width,
			height,
			flex: "",
			borderColor: isInModal ? void 0 : "transparent",
			backgroundColor: isInModal ? void 0 : theme.formInputBackground,
			...style,
			...focused && {
				boxShadow: "0 0 0 1px " + theme.formInputShadowSelected,
				...isInModal ? {} : { backgroundColor: theme.formInputBackgroundSelected }
			}
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgSearchAlternate, { style: {
				width: 13,
				height: 13,
				flexShrink: 0,
				color: value ? theme.menuItemTextSelected : "inherit",
				margin: 5,
				marginRight: 0
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				ref,
				value,
				placeholder,
				onEscape: () => onChange(""),
				onChangeValue: onChange,
				className: css({
					width: "100%",
					"::placeholder": {
						color: theme.formInputTextPlaceholder,
						transition: "color .25s"
					},
					"&[data-focused]": isInModal ? {} : { "::placeholder": { color: theme.formInputTextPlaceholderSelected } },
					flex: 1,
					"&, &[data-focused], &[data-hovered]": {
						border: 0,
						backgroundColor: "transparent",
						boxShadow: "none",
						color: "inherit"
					}
				}),
				onFocus: () => {
					setFocused(true);
				},
				onBlur: () => {
					setFocused(false);
				}
			}),
			value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				title: t("Clear search term"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "bare",
					style: { padding: `${clearButtonPadding}px 8px ${clearButtonPadding}px ${clearButtonPadding}px` },
					onPress: () => onChange(""),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgRemove, { style: {
						width: 8,
						height: 8
					} })
				})
			})
		]
	});
}
//#endregion
//#region src/hooks/usePreviewTransactions.ts
function usePreviewTransactions({ filter, options } = {}) {
	const [previewTransactions, setPreviewTransactions] = (0, import_react.useState)([]);
	const { isLoading: isSchedulesLoading, error: scheduleQueryError, schedules, statuses } = useCachedSchedules();
	const [isLoading, setIsLoading] = (0, import_react.useState)(isSchedulesLoading);
	const [error, setError] = (0, import_react.useState)(void 0);
	const [upcomingLength] = useSyncedPref("upcomingScheduledTransactionLength");
	const scheduleTransactions = (0, import_react.useMemo)(() => {
		if (isSchedulesLoading) return [];
		return computeSchedulePreviewTransactions(schedules, statuses, upcomingLength, filter);
	}, [
		filter,
		isSchedulesLoading,
		schedules,
		statuses,
		upcomingLength
	]);
	(0, import_react.useEffect)(() => {
		let isUnmounted = false;
		setError(void 0);
		if (scheduleTransactions.length === 0) {
			setIsLoading(false);
			setPreviewTransactions([]);
			return;
		}
		setIsLoading(true);
		Promise.all(scheduleTransactions.map((transaction) => send("rules-run", { transaction }))).then((newTrans) => {
			if (!isUnmounted) {
				setPreviewTransactions(ungroupTransactions(newTrans.map((t) => ({
					...t,
					category: t.schedule != null ? statuses.get(t.schedule) : void 0,
					schedule: t.schedule,
					subtransactions: t.subtransactions?.map((st) => ({
						...st,
						id: "preview/" + st.id,
						schedule: t.schedule
					}))
				}))));
				setIsLoading(false);
			}
		}).catch((error) => {
			if (!isUnmounted) {
				setError(error);
				setIsLoading(false);
			}
		});
		return () => {
			isUnmounted = true;
		};
	}, [
		scheduleTransactions,
		schedules,
		statuses,
		upcomingLength
	]);
	const runningBalances = (0, import_react.useMemo)(() => {
		if (!options?.calculateRunningBalances) return /* @__PURE__ */ new Map();
		return calculateRunningBalancesBottomUp(previewTransactions, "all", options?.startingBalance);
	}, [
		previewTransactions,
		options?.calculateRunningBalances,
		options?.startingBalance
	]);
	const returnError = error || scheduleQueryError;
	return {
		previewTransactions,
		runningBalances,
		isLoading: isLoading || isSchedulesLoading,
		...returnError && { error: returnError }
	};
}
//#endregion
//#region src/hooks/useAccountPreviewTransactions.ts
/**
* Preview transactions for a given account or all accounts if no `accountId` is provided.
* This will invert the payees, accounts, and amounts accordingly depending on which account
* the preview transactions are being viewed from.
*/
function useAccountPreviewTransactions({ accountId }) {
	const { data: accounts = [] } = useAccounts();
	const accountsById = (0, import_react.useMemo)(() => groupById(accounts), [accounts]);
	const { data: payees = [] } = usePayees();
	const payeesById = (0, import_react.useMemo)(() => groupById(payees), [payees]);
	const getPayeeByTransferAccount = (0, import_react.useCallback)((transferAccountId) => payees.find((p) => p.transfer_acct === transferAccountId) || null, [payees]);
	const getTransferAccountByPayee = (0, import_react.useCallback)((payeeId) => {
		if (!payeeId) return null;
		const transferAccountId = payeesById[payeeId]?.transfer_acct;
		if (!transferAccountId) return null;
		return accountsById[transferAccountId];
	}, [accountsById, payeesById]);
	const accountSchedulesFilter = (0, import_react.useCallback)((schedule) => !accountId || schedule._account === accountId || getTransferAccountByPayee(schedule._payee)?.id === accountId, [accountId, getTransferAccountByPayee]);
	const accountBalanceValue = useSheetValue(accountId ? accountBalance(accountId) : allAccountBalance());
	const [showBalances] = useSyncedPref(`show-balances-${accountId}`);
	const { previewTransactions: allPreviewTransactions, runningBalances: allRunningBalances, isLoading, error } = usePreviewTransactions({
		filter: accountSchedulesFilter,
		options: {
			calculateRunningBalances: showBalances === "true",
			startingBalance: accountBalanceValue ?? 0
		}
	});
	return (0, import_react.useMemo)(() => {
		if (!accountId) return {
			previewTransactions: allPreviewTransactions,
			runningBalances: allRunningBalances,
			isLoading,
			error
		};
		const { transactions: previewTransactions, runningBalances: previewRunningBalances } = inverseBasedOnAccount({
			accountId,
			transactions: allPreviewTransactions,
			runningBalances: allRunningBalances,
			startingBalance: accountBalanceValue ?? 0,
			getPayeeByTransferAccount,
			getTransferAccountByPayee
		});
		const transactionIds = new Set(previewTransactions.map((t) => t.id));
		return {
			isLoading,
			previewTransactions,
			runningBalances: new Map([...previewRunningBalances.entries()].filter(([id]) => transactionIds.has(id))),
			error
		};
	}, [
		accountId,
		allPreviewTransactions,
		accountBalanceValue,
		allRunningBalances,
		getPayeeByTransferAccount,
		getTransferAccountByPayee,
		isLoading,
		error
	]);
}
function inverseBasedOnAccount({ accountId, transactions, runningBalances, startingBalance, getPayeeByTransferAccount, getTransferAccountByPayee }) {
	const mappedTransactions = transactions.map((transaction) => {
		const inverse = transaction.account !== accountId;
		const subtransactions = transaction.subtransactions?.map((st) => ({
			...st,
			amount: inverse ? -st.amount : st.amount,
			payee: (inverse ? getPayeeByTransferAccount(st.account)?.id : st.payee) || "",
			account: inverse ? getTransferAccountByPayee(st.payee)?.id || "" : st.account
		}));
		return {
			inversed: inverse,
			...transaction,
			amount: inverse ? -transaction.amount : transaction.amount,
			payee: (inverse ? getPayeeByTransferAccount(transaction.account)?.id : transaction.payee) || "",
			account: inverse ? getTransferAccountByPayee(transaction.payee)?.id || "" : transaction.account,
			...subtransactions && { subtransactions }
		};
	});
	return {
		transactions: mappedTransactions,
		runningBalances: mappedTransactions.some((t) => t.inversed) ? calculateRunningBalancesBottomUp(mappedTransactions, "all", startingBalance ?? 0) : runningBalances
	};
}
//#endregion
//#region src/hooks/useFailedAccounts.ts
function useFailedAccounts() {
	const failedAccounts = useSelector((state) => state.account.failedAccounts);
	return (0, import_react.useMemo)(() => new Map(Object.entries(failedAccounts)), [failedAccounts]);
}
//#endregion
//#region src/components/rules/RulesHeader.tsx
function RulesHeader() {
	const { t } = useTranslation();
	const selectedItems = useSelectedItems();
	const dispatchSelected = useSelectedDispatch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableHeader, {
		style: {},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectCell, {
				exposed: true,
				focused: false,
				selected: selectedItems.size > 0,
				onSelect: (e) => dispatchSelected({
					type: "select-all",
					isRangeSelect: e.shiftKey
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
				value: t("Stage"),
				width: 50
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
				value: t("Rule"),
				width: "flex"
			})
		]
	});
}
//#endregion
//#region src/util/ruleUtils.ts
function groupActionsBySplitIndex(actions) {
	return actions.reduce((acc, action) => {
		const splitIndex = "options" in action ? action.options?.splitIndex ?? 0 : 0;
		acc[splitIndex] = acc[splitIndex] ?? {
			id: crypto.randomUUID(),
			actions: []
		};
		acc[splitIndex].actions.push(action);
		return acc;
	}, []);
}
//#endregion
//#region src/components/rules/ScheduleValue.tsx
function ScheduleValue({ value }) {
	const { t } = useTranslation();
	const { data: byId = {} } = usePayeesById();
	const { schedules = [], isLoading } = useSchedules({ query: (0, import_react.useMemo)(() => q("schedules").select("*"), []) });
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		"aria-label": t("Loading..."),
		style: { display: "inline-flex" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLoading, {
			width: 10,
			height: 10
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, {
		value,
		field: "rule",
		data: schedules,
		describe: (schedule) => describeSchedule(schedule, byId[schedule._payee])
	});
}
//#endregion
//#region src/components/rules/ActionExpression.tsx
var valueStyle$1 = { color: theme.pillTextHighlighted };
function ActionExpression({ style, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			display: "block",
			maxWidth: "100%",
			color: theme.pillText,
			backgroundColor: theme.pillBackgroundLight,
			borderRadius: 4,
			padding: "3px 5px",
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis",
			...style
		},
		children: props.op === "set" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetActionExpression, { ...props }) : props.op === "set-split-amount" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetSplitAmountActionExpression, { ...props }) : props.op === "link-schedule" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkScheduleActionExpression, { ...props }) : props.op === "prepend-notes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrependNoteActionExpression, { ...props }) : props.op === "append-notes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppendNoteActionExpression, { ...props }) : props.op === "delete-transaction" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteTransactionActionExpression, { ...props }) : null
	});
}
function SetActionExpression({ op, field, value, options }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: friendlyOp(op) }),
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: valueStyle$1,
			children: mapField(field, options)
		}),
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: t("to ") }),
		options?.formula ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: t("formula ") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: valueStyle$1,
			children: options.formula
		})] }) : options?.template ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: t("template ") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: valueStyle$1,
			children: options.template
		})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, {
			style: valueStyle$1,
			value,
			field
		})
	] });
}
function SetSplitAmountActionExpression({ op, value, options }) {
	const { t } = useTranslation();
	const method = options?.method;
	if (!method) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: friendlyOp(op) }),
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: valueStyle$1,
			children: getAllocationMethods()[method]
		}),
		method !== "remainder" && ": ",
		options?.method === "formula" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: t("formula ") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			style: valueStyle$1,
			children: options.formula
		})] }) : method === "fixed-amount" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, {
			style: valueStyle$1,
			value,
			field: "amount"
		}) : method === "fixed-percent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
			style: valueStyle$1,
			children: [value, "%"]
		}) : null
	] });
}
function LinkScheduleActionExpression({ op, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: friendlyOp(op) }),
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleValue, { value })
	] });
}
function PrependNoteActionExpression({ op, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: friendlyOp(op) }),
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, {
			style: valueStyle$1,
			value,
			field: "notes"
		})
	] });
}
function AppendNoteActionExpression({ op, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: friendlyOp(op) }),
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, {
			style: valueStyle$1,
			value,
			field: "notes"
		})
	] });
}
function DeleteTransactionActionExpression({ op }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: friendlyOp(op) });
}
//#endregion
//#region src/components/rules/ConditionExpression.tsx
var valueStyle = { color: theme.pillTextHighlighted };
function ConditionExpression({ field, op, value, options, prefix, style, inline }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
		style: {
			display: "block",
			maxWidth: "100%",
			color: theme.pillText,
			backgroundColor: theme.pillBackgroundLight,
			borderRadius: 4,
			padding: "3px 5px",
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis",
			...style
		},
		children: [
			prefix && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, { children: [prefix, " "] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				style: valueStyle,
				children: mapField(field, options)
			}),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: friendlyOp(op) }),
			" ",
			!["onbudget", "offbudget"].includes(op?.toLocaleLowerCase()) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, {
				style: valueStyle,
				value,
				field,
				inline
			})
		]
	});
}
//#endregion
//#region src/components/rules/RuleRow.tsx
var RuleRow = (0, import_react.memo)(({ rule, hovered, selected, onHover, onEditRule, onDeleteRule }) => {
	const dispatchSelected = useSelectedDispatch();
	const borderColor = selected ? theme.tableBorderSelected : "none";
	const backgroundFocus = hovered;
	const actionSplits = groupActionsBySplitIndex(rule.actions);
	const hasSplits = actionSplits.length > 1;
	const hasSchedule = rule.actions.some(({ op }) => op === "link-schedule");
	const { t } = useTranslation();
	const triggerRef = (0, import_react.useRef)(null);
	const { setMenuOpen, menuOpen, handleContextMenu, position } = useContextMenu();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
		ref: triggerRef,
		height: "auto",
		style: {
			fontSize: 13,
			zIndex: selected ? 101 : "auto",
			borderColor,
			backgroundColor: selected ? theme.tableRowBackgroundHighlight : backgroundFocus ? theme.tableRowBackgroundHover : theme.tableBackground
		},
		collapsed: true,
		onMouseEnter: () => onHover && onHover(rule.id),
		onMouseLeave: () => onHover && onHover(null),
		onContextMenu: handleContextMenu,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
				triggerRef,
				placement: "bottom start",
				isOpen: menuOpen,
				onOpenChange: () => setMenuOpen(false),
				...position,
				style: {
					width: 200,
					margin: 1
				},
				isNonModal: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
					items: [onEditRule && {
						name: "edit",
						text: t("Edit")
					}, onDeleteRule && !hasSchedule && {
						name: "delete",
						text: t("Delete")
					}],
					onMenuSelect: (name) => {
						switch (name) {
							case "delete":
								onDeleteRule(rule);
								break;
							case "edit":
								onEditRule(rule);
								break;
							default: throw new Error(`Unrecognized menu option: ${String(name)}`);
						}
						setMenuOpen(false);
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectCell, {
				exposed: hovered || selected,
				focused: true,
				onSelect: (e) => {
					dispatchSelected({
						type: "select",
						id: rule.id,
						isRangeSelect: e.shiftKey
					});
				},
				selected
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
				name: "stage",
				width: 50,
				plain: true,
				style: { color: theme.tableText },
				children: rule.stage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
					style: {
						alignSelf: "flex-start",
						margin: 5,
						backgroundColor: theme.pillBackgroundSelected,
						color: theme.pillTextSelected,
						borderRadius: 4,
						padding: "3px 5px"
					},
					children: translateRuleStage(rule.stage)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				width: "flex",
				style: { padding: "15px 0" },
				truncate: false,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
					style: { alignItems: "center" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								flex: 1,
								alignItems: "flex-start"
							},
							"data-testid": "conditions",
							children: rule.conditions.map((cond, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConditionExpression, {
								field: cond.field,
								op: cond.op,
								inline: true,
								value: cond.value,
								options: cond.options,
								prefix: i > 0 ? friendlyOp(rule.conditionsOp) : null,
								style: i !== 0 && { marginTop: 3 }
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgRightArrow2, { style: {
							width: 12,
							height: 12,
							color: theme.tableText
						} }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
							style: {
								flex: 1,
								alignItems: "flex-start"
							},
							"data-testid": "actions",
							children: hasSplits ? actionSplits.map((split, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
								style: {
									width: "100%",
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start",
									marginTop: i > 0 ? 3 : 0,
									padding: "5px",
									borderColor: theme.tableBorder,
									borderWidth: "1px",
									borderRadius: "5px"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									style: {
										...styles.smallText,
										color: theme.pageTextLight,
										marginBottom: 6
									},
									children: i ? t("Split {{num}}", { num: i }) : t("Apply to all")
								}), split.actions.map((action, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionExpression, {
									...action,
									style: j !== 0 && { marginTop: 3 }
								}, j))]
							}, split.id)) : rule.actions.map((action, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionExpression, {
								...action,
								style: i !== 0 && { marginTop: 3 }
							}, i))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
				name: "edit",
				plain: true,
				style: {
					padding: "0 15px",
					paddingLeft: 5
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onPress: () => onEditRule(rule),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Edit" })
				})
			})
		]
	});
});
RuleRow.displayName = "RuleRow";
//#endregion
//#region src/components/rules/RulesList.tsx
function RulesList({ rules, selectedItems, hoveredRule, onHover, onEditRule, onDeleteRule }) {
	if (rules.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: rules.map((rule) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuleRow, {
			rule,
			hovered: hoveredRule === rule.id,
			selected: selectedItems.has(rule.id),
			onHover,
			onEditRule,
			onDeleteRule
		}, rule.id);
	}) });
}
//#endregion
//#region src/components/ManageRules.tsx
function mapValue(field, value, { payees = [], categories = [], accounts = [] }) {
	if (!value) return "";
	let object = null;
	if (field === "payee") object = payees.find((p) => p.id === value);
	else if (field === "category") object = categories.find((c) => c.id === value);
	else if (field === "account") object = accounts.find((a) => a.id === value);
	else return value;
	if (object) return object.name;
	return "(deleted)";
}
function ruleToString(rule, data) {
	const conditions = rule.conditions.flatMap((cond) => [
		mapField(cond.field),
		friendlyOp(cond.op),
		cond.op === "oneOf" || cond.op === "notOneOf" ? Array.isArray(cond.value) ? cond.value.map((v) => mapValue(cond.field, v, data)).join(", ") : mapValue(cond.field, cond.value, data) : mapValue(cond.field, cond.value, data)
	]);
	const actions = rule.actions.flatMap((action) => {
		if (action.op === "set") return [
			friendlyOp(action.op),
			mapField(action.field),
			"to",
			mapValue(action.field, action.value, data)
		];
		else if (action.op === "link-schedule") {
			const schedule = data.schedules?.find((s) => s.id === String(action.value));
			return [friendlyOp(action.op), schedule ? describeSchedule(schedule, data.payees?.find((p) => p.id === schedule._payee)) : "-"];
		} else if (action.op === "prepend-notes" || action.op === "append-notes") {
			const noteValue = String(action.value || "");
			return [friendlyOp(action.op), "“" + noteValue + "”"];
		} else if (action.op === "delete-transaction") return [friendlyOp(action.op), "(delete)"];
		else return [];
	});
	return (rule.stage || "") + " " + conditions.join(" ") + " " + actions.join(" ");
}
function ManageRules({ isModal, payeeId, setLoading = () => {} }) {
	const { t } = useTranslation();
	const [allRules, setAllRules] = (0, import_react.useState)([]);
	const [page, setPage] = (0, import_react.useState)(0);
	const [filter, setFilter] = (0, import_react.useState)("");
	const dispatch = useDispatch();
	const { schedules = [] } = useSchedules({ query: (0, import_react.useMemo)(() => q("schedules").select("*"), []) });
	const { data: { list: categories } = { list: [] } } = useCategories();
	const { data: payees } = usePayees();
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
	const filteredRules = (0, import_react.useMemo)(() => {
		const rules = allRules.filter((rule) => {
			const schedule = schedules.find((schedule) => schedule.rule === rule.id);
			return schedule ? schedule.completed === false : true;
		});
		return (filter === "" ? rules : rules.filter((rule) => getNormalisedString(ruleToString(rule, filterData)).includes(getNormalisedString(filter)))).slice(0, 100 + page * 50);
	}, [
		allRules,
		filter,
		filterData,
		page,
		schedules
	]);
	const selectedInst = useSelected("manage-rules", filteredRules, []);
	const [hoveredRule, setHoveredRule] = (0, import_react.useState)(null);
	const onSearchChange = (value) => {
		setFilter(value);
		setPage(0);
	};
	async function loadRules() {
		setLoading(true);
		let loadedRules = null;
		if (payeeId) loadedRules = await send("payees-get-rules", { id: payeeId });
		else loadedRules = await send("rules-get");
		setAllRules(loadedRules);
		return loadedRules;
	}
	const init = (0, import_react.useEffectEvent)(() => {
		async function loadData() {
			await loadRules();
			setLoading(false);
		}
		if (payeeId) setUndoState("openModal", {
			name: "manage-rules",
			options: {}
		});
		loadData();
		return () => {
			setUndoState("openModal", null);
		};
	});
	(0, import_react.useEffect)(() => {
		return init();
	}, []);
	function loadMore() {
		setPage((page) => page + 1);
	}
	const onDeleteSelected = async () => {
		setLoading(true);
		const { someDeletionsFailed } = await send("rule-delete-all", [...selectedInst.items]);
		if (someDeletionsFailed) alert(t("Some rules were not deleted because they are linked to schedules."));
		await loadRules();
		selectedInst.dispatch({ type: "select-none" });
		setLoading(false);
	};
	async function onDeleteRule(id) {
		setLoading(true);
		await send("rule-delete", id);
		await loadRules();
		setLoading(false);
	}
	const onEditRule = (rule) => {
		dispatch(pushModal({ modal: {
			name: "edit-rule",
			options: {
				rule,
				onSave: async () => {
					await loadRules();
					setLoading(false);
				}
			}
		} }));
	};
	function onCreateRule() {
		dispatch(pushModal({ modal: {
			name: "edit-rule",
			options: {
				rule: {
					stage: null,
					conditionsOp: "and",
					conditions: [{
						field: "payee",
						op: "is",
						value: payeeId || null,
						type: "id"
					}],
					actions: [{
						op: "set",
						field: "category",
						value: null,
						type: "id"
					}]
				},
				onSave: async () => {
					await loadRules();
					setLoading(false);
				}
			}
		} }));
	}
	const onHover = (id) => {
		setHoveredRule(id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedProvider, {
		instance: selectedInst,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: {
					flexDirection: "row",
					alignItems: "center",
					padding: isModal ? "0 13px 15px" : "0 0 15px",
					flexShrink: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
						style: {
							color: theme.pageTextLight,
							flexDirection: "row",
							alignItems: "center",
							width: "50%"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Rules are always run in the order that you see them." }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								variant: "external",
								to: "https://actualbudget.org/docs/budgeting/rules/",
								linkColor: "muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Learn more" })
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { style: { flex: 1 } }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						placeholder: t("Filter rules..."),
						value: filter,
						onChange: onSearchChange
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
				style: styles.tableContainer,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RulesHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfiniteScrollWrapper, {
					loadMore,
					children: filteredRules.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyMessage, {
						text: t("No rules"),
						style: { marginTop: 15 }
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RulesList, {
						rules: filteredRules,
						selectedItems: selectedInst.items,
						hoveredRule,
						onHover,
						onEditRule,
						onDeleteRule: (rule) => onDeleteRule(rule.id)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
				style: {
					paddingBlock: 15,
					paddingInline: isModal ? 13 : 0,
					borderTop: isModal && "1px solid " + theme.pillBorder,
					flexShrink: 0
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpaceBetween, {
					gap: 10,
					style: { justifyContent: "flex-end" },
					children: [selectedInst.items.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onPress: onDeleteSelected,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, {
							count: selectedInst.items.size,
							children: [
								"Delete ",
								{ count: selectedInst.items.size },
								" rules"
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "primary",
						onPress: onCreateRule,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Create new rule" })
					})]
				})
			})
		] })
	});
}
function EmptyMessage({ text, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
		style: {
			textAlign: "center",
			color: theme.pageTextSubdued,
			fontStyle: "italic",
			fontSize: 13,
			marginTop: 5,
			style
		},
		children: text
	});
}
//#endregion
//#region src/hooks/usePayeeRuleCounts.ts
function usePayeeRuleCounts() {
	return useQuery(payeeQueries.ruleCounts());
}
//#endregion
//#region src/components/payees/PayeeRuleCountLabel.tsx
function PayeeRuleCountLabel({ count, isLoading, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		style,
		children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLoading, { style: {
			width: 12,
			height: 12
		} }) }) : count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trans, {
			count,
			children: [{ count }, " associated rules"]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { children: "Create rule" })
	});
}
//#endregion
export { ConditionExpression as a, useFailedAccounts as c, Search as d, InfiniteScrollWrapper as f, ruleToString as i, useAccountPreviewTransactions as l, usePayeeRuleCounts as n, ActionExpression as o, ManageRules as r, groupActionsBySplitIndex as s, PayeeRuleCountLabel as t, usePreviewTransactions as u };

//# sourceMappingURL=PayeeRuleCountLabel.Be_ewIvJ.chunk.js.map