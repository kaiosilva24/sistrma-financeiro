(function() {
	//#region src/shared-browser-server-core.ts
	function createCoordinator({ enableConsoleForwarding = false } = {}) {
		const connectedPorts = [];
		let cachedInitMsg = null;
		let lastAppInitFailure = null;
		const pendingPongs = /* @__PURE__ */ new Set();
		const budgetGroups = /* @__PURE__ */ new Map();
		const portToBudget = /* @__PURE__ */ new Map();
		const unassignedPorts = /* @__PURE__ */ new Set();
		if (enableConsoleForwarding) {
			const _originalConsole = {
				log: console.log.bind(console),
				warn: console.warn.bind(console),
				error: console.error.bind(console),
				info: console.info.bind(console)
			};
			function forwardConsole(level, args) {
				_originalConsole[level](...args);
				const serialized = args.map((a) => {
					if (a instanceof Error) return a.stack || a.message;
					if (typeof a === "object") try {
						return JSON.stringify(a);
					} catch {
						return String(a);
					}
					return String(a);
				});
				for (const port of connectedPorts) port.postMessage({
					type: "__shared-worker-console",
					level,
					args: serialized
				});
			}
			console.log = (...args) => forwardConsole("log", args);
			console.warn = (...args) => forwardConsole("warn", args);
			console.error = (...args) => forwardConsole("error", args);
			console.info = (...args) => forwardConsole("info", args);
		}
		function createBudgetGroup(leaderPort) {
			return {
				leaderPort,
				followers: /* @__PURE__ */ new Set(),
				backendConnected: false,
				requestToPort: /* @__PURE__ */ new Map(),
				requestNames: /* @__PURE__ */ new Map(),
				requestBudgetIds: /* @__PURE__ */ new Map()
			};
		}
		function logState(action) {
			const groups = [];
			for (const [bid, g] of budgetGroups) groups.push(`"${bid}": leader + ${g.followers.size} follower(s)`);
			console.log(`[SharedWorker] ${action} — ${connectedPorts.length} tab(s), ${unassignedPorts.size} unassigned, groups: [${groups.join(", ") || "none"}]`);
		}
		function broadcastToGroup(budgetId, msg, excludePort) {
			const group = budgetGroups.get(budgetId);
			if (!group) return;
			if (group.leaderPort !== excludePort) group.leaderPort.postMessage(msg);
			for (const p of group.followers) if (p !== excludePort) p.postMessage(msg);
		}
		function broadcastToAllInGroup(budgetId, msg) {
			broadcastToGroup(budgetId, msg, null);
		}
		const heartbeatId = setInterval(() => {
			for (const port of [...pendingPongs]) {
				pendingPongs.delete(port);
				removePort(port);
			}
			for (const port of connectedPorts) {
				pendingPongs.add(port);
				port.postMessage({ type: "__heartbeat-ping" });
			}
		}, 1e4);
		function removePort(port) {
			const idx = connectedPorts.indexOf(port);
			if (idx !== -1) connectedPorts.splice(idx, 1);
			unassignedPorts.delete(port);
			const budgetId = portToBudget.get(port);
			portToBudget.delete(port);
			if (!budgetId) return;
			const group = budgetGroups.get(budgetId);
			if (!group) return;
			if (port === group.leaderPort) if (group.followers.size > 0) {
				const candidate = group.followers.values().next().value;
				group.followers.delete(candidate);
				console.log(`[SharedWorker] Leader left budget "${budgetId}" — promoting follower`);
				electLeader(budgetId, candidate, budgetId);
			} else {
				console.log(`[SharedWorker] Last tab left budget "${budgetId}" — removing group`);
				budgetGroups.delete(budgetId);
			}
			else {
				group.followers.delete(port);
				for (const [id, p] of group.requestToPort) if (p === port) {
					group.requestToPort.delete(id);
					group.requestNames.delete(id);
				}
			}
		}
		function electLeader(budgetId, port, budgetToRestore, pendingMsg) {
			let group = budgetGroups.get(budgetId);
			if (!group) {
				group = createBudgetGroup(port);
				budgetGroups.set(budgetId, group);
			} else {
				group.leaderPort = port;
				group.backendConnected = false;
				group.requestToPort.clear();
				group.requestNames.clear();
				group.requestBudgetIds.clear();
			}
			const prevBudget = portToBudget.get(port);
			if (prevBudget && prevBudget !== budgetId) removePortFromGroup(port, prevBudget);
			portToBudget.set(port, budgetId);
			unassignedPorts.delete(port);
			console.log(`[SharedWorker] Elected leader for "${budgetId}" (${group.followers.size} follower(s))`);
			port.postMessage({
				type: "__role-change",
				role: "LEADER",
				budgetId
			});
			if (cachedInitMsg) port.postMessage({
				type: "__become-leader",
				initMsg: cachedInitMsg,
				budgetToRestore: budgetToRestore || null,
				pendingMsg: pendingMsg || null
			});
		}
		function addFollower(budgetId, port) {
			const group = budgetGroups.get(budgetId);
			if (!group) return;
			const prevBudget = portToBudget.get(port);
			if (prevBudget && prevBudget !== budgetId) removePortFromGroup(port, prevBudget);
			group.followers.add(port);
			portToBudget.set(port, budgetId);
			unassignedPorts.delete(port);
			port.postMessage({
				type: "__role-change",
				role: "FOLLOWER",
				budgetId
			});
			if (group.backendConnected) port.postMessage({ type: "connect" });
		}
		function removePortFromGroup(port, budgetId) {
			const group = budgetGroups.get(budgetId);
			if (!group) return;
			group.followers.delete(port);
			for (const [id, p] of group.requestToPort) if (p === port) {
				group.requestToPort.delete(id);
				group.requestNames.delete(id);
			}
		}
		function evictGroup(budgetId, excludePort) {
			const group = budgetGroups.get(budgetId);
			if (!group) return;
			const evicted = [];
			for (const p of group.followers) if (p !== excludePort) {
				p.postMessage({
					type: "push",
					name: "show-budgets"
				});
				portToBudget.delete(p);
				unassignedPorts.add(p);
				evicted.push(p);
			}
			group.followers.clear();
			if (group.leaderPort && group.leaderPort !== excludePort) {
				group.leaderPort.postMessage({
					type: "__close-and-transfer",
					requestId: null
				});
				group.leaderPort.postMessage({
					type: "push",
					name: "show-budgets"
				});
				portToBudget.delete(group.leaderPort);
				unassignedPorts.add(group.leaderPort);
				evicted.push(group.leaderPort);
			}
			budgetGroups.delete(budgetId);
			if (evicted.length > 0) console.log(`[SharedWorker] Evicted ${evicted.length} tab(s) from budget "${budgetId}"`);
		}
		function handleBudgetLoaded(leaderPort, oldGroupId, newBudgetId) {
			const oldGroup = budgetGroups.get(oldGroupId);
			if (!oldGroup) return;
			if (oldGroupId !== newBudgetId) {
				const existingTarget = budgetGroups.get(newBudgetId);
				if (existingTarget && existingTarget !== oldGroup) {
					console.warn(`[SharedWorker] handleBudgetLoaded: conflict — group "${newBudgetId}" already exists`);
					return;
				}
				budgetGroups.delete(oldGroupId);
				budgetGroups.set(newBudgetId, oldGroup);
				portToBudget.set(leaderPort, newBudgetId);
				for (const p of oldGroup.followers) portToBudget.set(p, newBudgetId);
				console.log(`[SharedWorker] Budget loaded: "${newBudgetId}" (leader + ${oldGroup.followers.size} follower(s))`);
			}
			logState(`Budget "${newBudgetId}" ready`);
		}
		function handleBudgetClosed(closingPort, budgetId) {
			const group = budgetGroups.get(budgetId);
			if (!group) return;
			if (closingPort === group.leaderPort && group.followers.size === 0) {
				budgetGroups.delete(budgetId);
				portToBudget.delete(closingPort);
				unassignedPorts.add(closingPort);
				logState(`Budget "${budgetId}" closed (no tabs remain)`);
				if (budgetGroups.size === 0) {
					unassignedPorts.delete(closingPort);
					const lobbyGroup = createBudgetGroup(closingPort);
					lobbyGroup.backendConnected = true;
					budgetGroups.set("__lobby", lobbyGroup);
					portToBudget.set(closingPort, "__lobby");
					logState("Re-established lobby after last budget closed");
				}
			}
		}
		function migrateLobbyLeader(port, budgetId, pendingMsg) {
			const lobbyGroup = budgetGroups.get("__lobby");
			if (lobbyGroup && port === lobbyGroup.leaderPort) {
				budgetGroups.delete("__lobby");
				budgetGroups.set(budgetId, lobbyGroup);
				portToBudget.set(port, budgetId);
				lobbyGroup.requestToPort.set(pendingMsg.id, port);
				lobbyGroup.requestNames.set(pendingMsg.id, pendingMsg.name);
				lobbyGroup.requestBudgetIds.set(pendingMsg.id, budgetId);
				lobbyGroup.leaderPort.postMessage({
					type: "__to-worker",
					msg: pendingMsg
				});
				port.postMessage({
					type: "__role-change",
					role: "LEADER",
					budgetId
				});
				logState(`Lobby leader now on budget "${budgetId}"`);
			}
		}
		function onconnect(e) {
			const port = e.ports[0];
			connectedPorts.push(port);
			unassignedPorts.add(port);
			logState("Tab connected");
			port.onmessage = function(event) {
				try {
					const msg = event.data;
					const portBudget = portToBudget.get(port);
					const group = portBudget ? budgetGroups.get(portBudget) : null;
					if (msg.type === "tab-closing") {
						pendingPongs.delete(port);
						removePort(port);
						logState("Tab closed");
						return;
					}
					if (msg.type === "__heartbeat-pong") {
						pendingPongs.delete(port);
						return;
					}
					if (msg.type === "init") {
						cachedInitMsg = msg;
						if (lastAppInitFailure) port.postMessage(lastAppInitFailure);
						else {
							let anyConnected = false;
							for (const [, g] of budgetGroups) if (g.backendConnected) {
								anyConnected = true;
								break;
							}
							if (anyConnected) {
								port.postMessage({
									type: "__role-change",
									role: "UNASSIGNED"
								});
								port.postMessage({ type: "connect" });
							} else if (budgetGroups.size > 0) port.postMessage({
								type: "__role-change",
								role: "UNASSIGNED"
							});
							else electLeader("__lobby", port);
						}
						return;
					}
					if (msg.type === "__from-worker") {
						if (!group || port !== group.leaderPort) return;
						const workerMsg = msg.msg;
						if (workerMsg.type === "reply" || workerMsg.type === "error") {
							const targetPort = group.requestToPort.get(workerMsg.id);
							if (targetPort) {
								targetPort.postMessage(workerMsg);
								const name = group.requestNames.get(workerMsg.id);
								if (workerMsg.type === "reply" && name === "load-budget") {
									const budgetId = group.requestBudgetIds.get(workerMsg.id);
									if (budgetId) {
										group.requestBudgetIds.delete(workerMsg.id);
										handleBudgetLoaded(port, portBudget, budgetId);
									}
								}
								if (workerMsg.type === "reply" && name === "close-budget") handleBudgetClosed(targetPort, portBudget);
								if (workerMsg.type === "reply" && name === "load-prefs" && portBudget && portBudget.startsWith("__creating-") && workerMsg.result && workerMsg.result.id) handleBudgetLoaded(port, portBudget, workerMsg.result.id);
								group.requestToPort.delete(workerMsg.id);
								group.requestNames.delete(workerMsg.id);
							}
						} else if (workerMsg.type === "connect") {
							group.backendConnected = true;
							broadcastToAllInGroup(portBudget, workerMsg);
							for (const p of unassignedPorts) p.postMessage(workerMsg);
						} else if (workerMsg.type === "app-init-failure") {
							lastAppInitFailure = workerMsg;
							broadcastToAllInGroup(portBudget, workerMsg);
						} else broadcastToAllInGroup(portBudget, workerMsg);
						return;
					}
					if (msg.type === "__track-restore") {
						if (group) {
							group.requestToPort.set(msg.requestId, port);
							group.requestNames.set(msg.requestId, "load-budget");
							group.requestBudgetIds.set(msg.requestId, msg.budgetId);
						}
						return;
					}
					if (msg.name === "load-budget" && msg.args && msg.args.id) {
						const budgetId = msg.args.id;
						const existingGroup = budgetGroups.get(budgetId);
						if (existingGroup && existingGroup.backendConnected) {
							addFollower(budgetId, port);
							existingGroup.requestToPort.set(msg.id, port);
							existingGroup.requestNames.set(msg.id, msg.name);
							existingGroup.requestBudgetIds.set(msg.id, budgetId);
							existingGroup.leaderPort.postMessage({
								type: "__to-worker",
								msg
							});
							logState(`Tab joined budget "${budgetId}" as follower`);
							return;
						}
						if (existingGroup && !existingGroup.backendConnected) {
							addFollower(budgetId, port);
							existingGroup.requestToPort.set(msg.id, port);
							existingGroup.requestNames.set(msg.id, msg.name);
							existingGroup.requestBudgetIds.set(msg.id, budgetId);
							existingGroup.leaderPort.postMessage({
								type: "__to-worker",
								msg
							});
							logState(`Tab joined budget "${budgetId}" as follower (backend booting)`);
							return;
						}
						if (portBudget === "__lobby") migrateLobbyLeader(port, budgetId, msg);
						else if (group && port === group.leaderPort) {
							for (const p of group.followers) {
								p.postMessage({
									type: "push",
									name: "show-budgets"
								});
								portToBudget.delete(p);
								unassignedPorts.add(p);
							}
							if (group.followers.size > 0) {
								console.log(`[SharedWorker] Leader switching budgets — pushed ${group.followers.size} follower(s) off "${portBudget}"`);
								group.followers.clear();
							}
							group.requestToPort.set(msg.id, port);
							group.requestNames.set(msg.id, msg.name);
							group.requestBudgetIds.set(msg.id, budgetId);
							group.leaderPort.postMessage({
								type: "__to-worker",
								msg
							});
						} else {
							electLeader(budgetId, port, null, msg);
							const newGroup = budgetGroups.get(budgetId);
							if (newGroup) {
								newGroup.requestToPort.set(msg.id, port);
								newGroup.requestNames.set(msg.id, msg.name);
								newGroup.requestBudgetIds.set(msg.id, budgetId);
							}
							logState(`Tab became leader for new budget "${budgetId}"`);
						}
						return;
					}
					if (msg.name === "close-budget" && group) if (port === group.leaderPort) {
						if (group.followers.size > 0) {
							const newLeader = group.followers.values().next().value;
							group.followers.delete(newLeader);
							console.log(`[SharedWorker] Leader closing budget "${portBudget}" but ${group.followers.size + 1} tab(s) remain — transferring`);
							port.postMessage({
								type: "__close-and-transfer",
								requestId: msg.id
							});
							electLeader(portBudget, newLeader, portBudget);
							portToBudget.delete(port);
							unassignedPorts.add(port);
							logState(`Leadership transferred for "${portBudget}"`);
							return;
						}
						group.requestToPort.set(msg.id, port);
						group.requestNames.set(msg.id, msg.name);
						group.leaderPort.postMessage({
							type: "__to-worker",
							msg
						});
						return;
					} else {
						group.followers.delete(port);
						portToBudget.delete(port);
						unassignedPorts.add(port);
						port.postMessage({
							type: "reply",
							id: msg.id,
							data: {}
						});
						logState(`Follower left budget "${portBudget}"`);
						return;
					}
					if (msg.name === "delete-budget" && msg.args) {
						const targetId = msg.args.id;
						if (targetId && budgetGroups.has(targetId)) {
							evictGroup(targetId, port);
							logState(`Evicted group for deleted budget "${targetId}"`);
						}
						let hasConnected = false;
						for (const [, g] of budgetGroups) if (g.backendConnected) {
							hasConnected = true;
							break;
						}
						if (!hasConnected) {
							const tempId = "__deleting-" + Date.now();
							electLeader(tempId, port, null, msg);
							const newGroup = budgetGroups.get(tempId);
							if (newGroup && msg.id) {
								newGroup.requestToPort.set(msg.id, port);
								newGroup.requestNames.set(msg.id, msg.name);
							}
							logState(`Tab became leader for budget deletion ("${tempId}")`);
							return;
						}
					}
					if (msg.name === "create-budget" || msg.name === "create-demo-budget" || msg.name === "import-budget" || msg.name === "duplicate-budget" || msg.name === "delete-budget") {
						if (msg.name === "create-demo-budget") evictGroup("_demo-budget", port);
						else if (msg.name === "create-budget" && msg.args && msg.args.testMode) evictGroup("_test-budget", port);
						if (group && port === group.leaderPort) {
							for (const p of group.followers) {
								p.postMessage({
									type: "push",
									name: "show-budgets"
								});
								portToBudget.delete(p);
								unassignedPorts.add(p);
							}
							if (group.followers.size > 0) {
								console.log(`[SharedWorker] Budget-replacing "${msg.name}" — pushed ${group.followers.size} tab(s) off "${portBudget}"`);
								group.followers.clear();
							}
						} else {
							if (group) {
								group.followers.delete(port);
								portToBudget.delete(port);
								unassignedPorts.add(port);
							}
							const tempId = "__creating-" + Date.now();
							electLeader(tempId, port, null, msg);
							const newGroup = budgetGroups.get(tempId);
							if (newGroup && msg.id) {
								newGroup.requestToPort.set(msg.id, port);
								newGroup.requestNames.set(msg.id, msg.name);
							}
							logState(`Tab became leader for budget creation ("${tempId}")`);
							return;
						}
					}
					let targetGroup = group;
					if (!targetGroup) {
						for (const [, g] of budgetGroups) if (g.backendConnected) {
							targetGroup = g;
							break;
						}
					}
					if (targetGroup) {
						if (msg.id) {
							targetGroup.requestToPort.set(msg.id, port);
							if (msg.name) targetGroup.requestNames.set(msg.id, msg.name);
							if (msg.name === "load-budget" && msg.args && msg.args.id) targetGroup.requestBudgetIds.set(msg.id, msg.args.id);
						}
						targetGroup.leaderPort.postMessage({
							type: "__to-worker",
							msg
						});
					}
				} catch (error) {
					console.error("[SharedWorker] Error in message handler:", error);
				}
			};
			port.start();
		}
		function destroy() {
			clearInterval(heartbeatId);
		}
		function getState() {
			return {
				connectedPorts,
				cachedInitMsg,
				lastAppInitFailure,
				budgetGroups,
				portToBudget,
				unassignedPorts
			};
		}
		return {
			onconnect,
			destroy,
			getState
		};
	}
	//#endregion
	//#region src/shared-browser-server.ts
	const coordinator = createCoordinator({ enableConsoleForwarding: true });
	self.onconnect = coordinator.onconnect;
	//#endregion
})();

//# sourceMappingURL=shared-browser-server-CTH8vdiz.js.map