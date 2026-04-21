import type { GoCardlessAccountDetails, GoCardlessAccountId, GoCardlessAccountMetadata, GoCardlessAgreementId, GoCardlessInstitutionId, GoCardlessRequisitionId, Institution, Requisition } from '#app-gocardless/gocardless-node.types';
import type { GetBalances, GetTransactionsResponse } from '#app-gocardless/gocardless.types';
export type TokenResponse = {
    access: string;
    refresh: string;
    access_expires: number;
    refresh_expires: number;
};
type AgreementResponse = {
    id: GoCardlessAgreementId;
    created: string;
    max_historical_days: number;
    access_valid_for_days: number;
    access_scope: string[];
    accepted: string | null;
    institution_id: GoCardlessInstitutionId;
};
export type AccountDetailsResponse = {
    account: GoCardlessAccountDetails;
};
export declare class GoCardlessApiError extends Error {
    response: {
        status: number;
        headers: Record<string, string>;
        data?: unknown;
    };
    constructor(message: string, status: number, headers: Record<string, string>);
}
export declare class GoCardlessApi {
    #private;
    constructor({ secretId, secretKey }: {
        secretId: string | null;
        secretKey: string | null;
    });
    get secretId(): string | null;
    get secretKey(): string | null;
    get token(): string | null;
    set token(value: string | null);
    generateToken(): Promise<TokenResponse>;
    exchangeToken({ refreshToken }: {
        refreshToken: string;
    }): Promise<TokenResponse>;
    getInstitutions({ country }: {
        country: string;
    }): Promise<Institution[]>;
    getInstitutionById(id: GoCardlessInstitutionId): Promise<Institution>;
    createRequisition({ redirectUrl, institutionId, agreement, userLanguage, reference, ssn, redirectImmediate, accountSelection }: {
        redirectUrl: string;
        institutionId: GoCardlessInstitutionId;
        agreement: GoCardlessAgreementId;
        userLanguage: string;
        reference: string | null;
        ssn: string | null;
        redirectImmediate: boolean;
        accountSelection: boolean;
    }): Promise<Requisition>;
    getRequisitionById(requisitionId: GoCardlessRequisitionId): Promise<Requisition>;
    deleteRequisition(requisitionId: GoCardlessRequisitionId): Promise<{
        summary: string;
        detail: string;
    }>;
    createAgreement({ institutionId, maxHistoricalDays, accessValidForDays, accessScope }: {
        institutionId: GoCardlessInstitutionId;
        maxHistoricalDays?: number;
        accessValidForDays?: number;
        accessScope?: string[];
    }): Promise<AgreementResponse>;
    getAccountMetadata(accountId: GoCardlessAccountId): Promise<GoCardlessAccountMetadata>;
    getAccountDetails(accountId: GoCardlessAccountId): Promise<AccountDetailsResponse>;
    getAccountBalances(accountId: GoCardlessAccountId): Promise<GetBalances>;
    getAccountTransactions({ accountId, dateFrom, dateTo }: {
        accountId: GoCardlessAccountId;
        dateFrom?: string;
        dateTo?: string;
    }): Promise<GetTransactionsResponse>;
    initSession({ redirectUrl, institutionId, maxHistoricalDays, accessValidForDays, userLanguage, referenceId, ssn, redirectImmediate, accountSelection }: {
        redirectUrl: string;
        institutionId: GoCardlessInstitutionId;
        maxHistoricalDays?: number | string;
        accessValidForDays?: number | string;
        userLanguage?: string;
        referenceId?: string | null;
        ssn?: string | null;
        redirectImmediate?: boolean;
        accountSelection?: boolean;
    }): Promise<Requisition>;
}
export {};
//# sourceMappingURL=gocardless-api.d.ts.map