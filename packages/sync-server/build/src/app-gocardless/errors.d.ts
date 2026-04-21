import type { GoCardlessRequisitionId } from './gocardless-node.types';
export declare class RequisitionNotLinked extends Error {
    details: unknown;
    constructor(params?: unknown);
}
export declare class AccountNotLinkedToRequisition extends Error {
    details: {
        accountId: string;
        requisitionId: GoCardlessRequisitionId;
    };
    constructor(accountId: string, requisitionId: GoCardlessRequisitionId);
}
export declare class GenericGoCardlessError extends Error {
    details: unknown;
    constructor(data?: unknown);
}
export declare class GoCardlessClientError extends Error {
    details: unknown;
    constructor(message: string, details: unknown);
}
export declare class InvalidInputDataError extends GoCardlessClientError {
    constructor(response: unknown);
}
export declare class InvalidGoCardlessTokenError extends GoCardlessClientError {
    constructor(response: unknown);
}
export declare class AccessDeniedError extends GoCardlessClientError {
    constructor(response: unknown);
}
export declare class NotFoundError extends GoCardlessClientError {
    constructor(response: unknown);
}
export declare class ResourceSuspended extends GoCardlessClientError {
    constructor(response: unknown);
}
export declare class RateLimitError extends GoCardlessClientError {
    constructor(response: unknown);
}
export declare class UnknownError extends GoCardlessClientError {
    constructor(response: unknown);
}
export declare class ServiceError extends GoCardlessClientError {
    constructor(response: unknown);
}
//# sourceMappingURL=errors.d.ts.map