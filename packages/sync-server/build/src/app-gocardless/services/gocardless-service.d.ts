import type { Balance, GoCardlessAccountId, GoCardlessAccountMetadata, GoCardlessInstitutionId, GoCardlessRequisitionId, Institution, Requisition, Transaction } from '#app-gocardless/gocardless-node.types';
import type { CreateRequisitionParams, DetailedAccount, DetailedAccountWithInstitution, GetBalances, GetTransactionsParams, GetTransactionsResponse, NormalizedAccountDetails, TransactionWithBookedStatus } from '#app-gocardless/gocardless.types';
import type { AccountDetailsResponse, TokenResponse } from './gocardless-api';
export declare const handleGoCardlessError: (error: unknown) => never;
export declare const goCardlessService: {
    isConfigured: () => boolean;
    setToken: () => Promise<void>;
    getLinkedRequisition: (requisitionId: GoCardlessRequisitionId) => Promise<Requisition>;
    getRequisitionWithAccounts: (requisitionId: GoCardlessRequisitionId) => Promise<{
        requisition: Requisition;
        accounts: NormalizedAccountDetails[];
    }>;
    getTransactionsWithBalance: (requisitionId: GoCardlessRequisitionId, accountId: GoCardlessAccountId, startDate: string, endDate: string) => Promise<{
        balances: Balance[];
        institutionId: GoCardlessInstitutionId;
        startingBalance: number;
        transactions: {
            booked: Transaction[];
            pending: Transaction[];
            all: TransactionWithBookedStatus[];
        };
    }>;
    getNormalizedTransactions: (requisitionId: GoCardlessRequisitionId, accountId: GoCardlessAccountId, startDate: string, endDate: string) => Promise<{
        institutionId: GoCardlessInstitutionId;
        transactions: {
            booked: Transaction[];
            pending: Transaction[];
            all: TransactionWithBookedStatus[];
        };
    }>;
    createRequisition: ({ institutionId, host, }: CreateRequisitionParams) => Promise<{
        link: string;
        requisitionId: GoCardlessRequisitionId;
    }>;
    deleteRequisition: (requisitionId: GoCardlessRequisitionId) => Promise<{
        summary: string;
        detail: string;
    }>;
    getRequisition: (requisitionId: GoCardlessRequisitionId) => Promise<Requisition>;
    getDetailedAccount: (accountId: GoCardlessAccountId) => Promise<DetailedAccount>;
    getAccountMetadata: (accountId: GoCardlessAccountId) => Promise<GoCardlessAccountMetadata>;
    getInstitutions: (country: string) => Promise<Institution[]>;
    getInstitution: (institutionId: GoCardlessInstitutionId) => Promise<Institution>;
    extendAccountsAboutInstitutions: ({ accounts, institutions, }: {
        accounts: DetailedAccount[];
        institutions: Institution[];
    }) => Promise<DetailedAccountWithInstitution[]>;
    getTransactions: ({ institutionId, accountId, startDate, endDate, }: GetTransactionsParams) => Promise<GetTransactionsResponse>;
    getBalances: (accountId: GoCardlessAccountId) => Promise<GetBalances>;
};
export declare const client: {
    getBalances: (accountId: GoCardlessAccountId) => Promise<GetBalances>;
    getTransactions: ({ accountId, dateFrom, dateTo, }: {
        accountId: GoCardlessAccountId;
        dateFrom?: string;
        dateTo?: string;
    }) => Promise<GetTransactionsResponse>;
    getInstitutions: (country: string) => Promise<Institution[]>;
    getInstitutionById: (institutionId: GoCardlessInstitutionId) => Promise<Institution>;
    getDetails: (accountId: GoCardlessAccountId) => Promise<AccountDetailsResponse>;
    getMetadata: (accountId: GoCardlessAccountId) => Promise<GoCardlessAccountMetadata>;
    getRequisitionById: (requisitionId: GoCardlessRequisitionId) => Promise<Requisition>;
    deleteRequisition: (requisitionId: GoCardlessRequisitionId) => Promise<{
        summary: string;
        detail: string;
    }>;
    initSession: ({ redirectUrl, institutionId, referenceId, accessValidForDays, maxHistoricalDays, userLanguage, ssn, redirectImmediate, accountSelection, }: {
        redirectUrl: string;
        institutionId: GoCardlessInstitutionId;
        referenceId: string | null;
        accessValidForDays: number | string;
        maxHistoricalDays: number | string;
        userLanguage: string;
        ssn: string | null;
        redirectImmediate: boolean;
        accountSelection: boolean;
    }) => Promise<Requisition>;
    generateToken: () => Promise<TokenResponse>;
    exchangeToken: ({ refreshToken, }: {
        refreshToken: string;
    }) => Promise<TokenResponse>;
};
//# sourceMappingURL=gocardless-service.d.ts.map