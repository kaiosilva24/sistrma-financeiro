/** @type {{balances: import('../../gocardless-node.types').Balance[]}} */
export declare const mockedBalances: {
    balances: import('../../gocardless-node.types').Balance[];
};
/** @type {{transactions: import('../../gocardless-node.types').Transactions}} */
export declare const mockTransactions: {
    transactions: import('../../gocardless-node.types').Transactions;
};
export declare const mockUnknownError: {
    summary: string;
    detail: string;
    type: string;
    status_code: number;
};
/** @type {{account: import('../../gocardless-node.types').GoCardlessAccountDetails}} */
export declare const mockAccountDetails: {
    account: import('../../gocardless-node.types').GoCardlessAccountDetails;
};
/** @type {import('../../gocardless-node.types').GoCardlessAccountMetadata} */
export declare const mockAccountMetaData: import('../../gocardless-node.types').GoCardlessAccountMetadata;
/** @type {import('../../gocardless.types').DetailedAccount} */
export declare const mockDetailedAccount: import('../../gocardless.types').DetailedAccount;
/** @type {import('../../gocardless-node.types').Institution} */
export declare const mockInstitution: import('../../gocardless-node.types').Institution;
/** @type {import('../../gocardless-node.types').Requisition} */
export declare const mockRequisition: import('../../gocardless-node.types').Requisition;
export declare const mockDeleteRequisition: {
    summary: string;
    detail: string;
};
export declare const mockCreateRequisition: {
    id: string;
    created: string;
    redirect: string;
    status: string;
    institution_id: string;
    agreement: string;
    reference: string;
    accounts: undefined[];
    user_language: string;
    link: string;
    ssn: string;
    account_selection: boolean;
    redirect_immediate: boolean;
};
/** @type {import('../../gocardless.types').DetailedAccount} */
export declare const mockDetailedAccountExample1: import('../../gocardless.types').DetailedAccount;
/** @type {import('../../gocardless.types').DetailedAccount} */
export declare const mockDetailedAccountExample2: import('../../gocardless.types').DetailedAccount;
/** @type {import('../../gocardless.types').DetailedAccountWithInstitution[]} */
export declare const mockExtendAccountsAboutInstitutions: import('../../gocardless.types').DetailedAccountWithInstitution[];
export declare const mockRequisitionWithExampleAccounts: {
    account_selection: boolean;
    agreement: import("../../gocardless-node.types").GoCardlessAgreementId;
    created: string;
    id: import("../../gocardless-node.types").GoCardlessRequisitionId;
    institution_id: import("../../gocardless-node.types").GoCardlessInstitutionId;
    link: string;
    redirect: string;
    redirect_immediate: boolean;
    reference: string;
    ssn: string;
    status: "CR" | "ER" | "EX" | "GA" | "GC" | "ID" | "LN" | "RJ" | "SA" | "SU" | "UA";
    user_language: string;
    accounts: import("../../gocardless-node.types").GoCardlessAccountId[];
};
export declare const mockTransactionAmount: {
    amount: string;
    currency: string;
};
//# sourceMappingURL=fixtures.d.ts.map