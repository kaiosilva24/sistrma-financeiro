import type { NextFunction, Request, Response } from 'express';
declare function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction): Promise<void>;
declare const validateSessionMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<void>;
declare const requestLoggerMiddleware: import("express").Handler;
export { validateSessionMiddleware, errorMiddleware, requestLoggerMiddleware };
//# sourceMappingURL=middlewares.d.ts.map