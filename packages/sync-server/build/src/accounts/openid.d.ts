export declare function bootstrapOpenId(configParameter: any): Promise<{
    error: string;
} | {
    error?: undefined;
}>;
export declare function loginWithOpenIdSetup(returnUrl: any, firstTimeLoginPassword?: string): Promise<{
    error: string;
    url?: undefined;
} | {
    error?: undefined;
    url: any;
}>;
export declare function loginWithOpenIdFinalize(body: any): Promise<{
    url?: undefined;
    error: string;
} | {
    error?: undefined;
    url: string;
}>;
export declare function getServerHostname(): any;
export declare function isValidRedirectUrl(url: any): boolean;
//# sourceMappingURL=openid.d.ts.map