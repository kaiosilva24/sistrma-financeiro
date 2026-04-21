export declare function getAccountDb(): any;
export declare function needsBootstrap(): boolean;
export declare function listLoginMethods(): any;
export declare function getActiveLoginMethod(): any;
export declare function getLoginMethod(req: any): any;
export declare function bootstrap(loginSettings: any, forced?: boolean): Promise<{}>;
export declare function isAdmin(userId: any): boolean;
export declare function hasPermission(userId: any, permission: any): boolean;
export declare function enableOpenID(loginSettings: any): Promise<{
    error: string;
}>;
export declare function disableOpenID(loginSettings: any): Promise<{
    error: string;
}>;
export declare function getSession(token: any): any;
export declare function getUserInfo(userId: any): any;
export declare function getUserPermission(userId: any): any;
export declare function getServerPrefs(): any;
export declare function setServerPrefs(prefs: any): void;
export declare function clearExpiredSessions(): void;
//# sourceMappingURL=account-db.d.ts.map