import type { Request, Response } from 'express';
export declare const TOKEN_EXPIRATION_NEVER = -1;
export declare function validateSession(req: Request, res: Response): any;
export declare function validateAuthHeader(req: Request): boolean;
//# sourceMappingURL=validate-user.d.ts.map