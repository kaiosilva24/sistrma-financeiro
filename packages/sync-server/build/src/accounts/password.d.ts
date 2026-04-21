export declare function bootstrapPassword(password: any): {
    error: string;
} | {
    error?: undefined;
};
export declare function loginWithPassword(password: any): {
    error: string;
    token?: undefined;
} | {
    error?: undefined;
    token: any;
};
export declare function changePassword(newPassword: any): {
    error: string;
} | {
    error?: undefined;
};
export declare function checkPassword(password: any): boolean;
//# sourceMappingURL=password.d.ts.map