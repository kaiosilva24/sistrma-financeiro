const BASE_URL = 'https://bankaccountdata.gocardless.com/api/v2';
const ALLOWED_ORIGIN = new URL(BASE_URL).origin;
export class GoCardlessApiError extends Error {
    response;
    constructor(message, status, headers) {
        super(message);
        this.response = { status, headers };
    }
}
export class GoCardlessApi {
    #secretId;
    #secretKey;
    #token = null;
    constructor({ secretId, secretKey, }) {
        this.#secretId = secretId;
        this.#secretKey = secretKey;
    }
    get secretId() {
        return this.#secretId;
    }
    get secretKey() {
        return this.#secretKey;
    }
    get token() {
        return this.#token;
    }
    set token(value) {
        this.#token = value;
    }
    async #request(endpoint, { method = 'GET', body, } = {}) {
        const headers = {
            accept: 'application/json',
            'Content-Type': 'application/json',
        };
        if (this.#token) {
            headers.Authorization = `Bearer ${this.#token}`;
        }
        const url = new URL(`${BASE_URL}${endpoint}`);
        if (url.origin !== ALLOWED_ORIGIN || !url.pathname.startsWith('/api/v2/')) {
            throw new Error(`Invalid GoCardless API endpoint: ${endpoint}`);
        }
        const response = await fetch(url, {
            method,
            headers,
            signal: AbortSignal.timeout(20000),
            ...(body
                ? {
                    body: JSON.stringify(Object.fromEntries(Object.entries(body).filter(([, v]) => v != null))),
                }
                : {}),
        });
        if (!response.ok) {
            const error = new GoCardlessApiError(`GoCardless API error: ${response.status}`, response.status, Object.fromEntries(response.headers.entries()));
            try {
                error.response.data = await response.json();
            }
            catch { }
            console.log(`GoCardless ${method} ${endpoint} ${response.status}`, error.response.data ? JSON.stringify(error.response.data) : '(no body)');
            throw error;
        }
        return response.json();
    }
    async generateToken() {
        const data = await this.#request('/token/new/', {
            method: 'POST',
            body: {
                secret_id: this.#secretId,
                secret_key: this.#secretKey,
            },
        });
        this.#token = data.access;
        return data;
    }
    async exchangeToken({ refreshToken, }) {
        const data = await this.#request('/token/refresh/', {
            method: 'POST',
            body: { refresh: refreshToken },
        });
        this.#token = data.access;
        return data;
    }
    async getInstitutions({ country, }) {
        return this.#request(`/institutions/?country=${country}`);
    }
    async getInstitutionById(id) {
        return this.#request(`/institutions/${id}/`);
    }
    async createRequisition({ redirectUrl, institutionId, agreement, userLanguage, reference, ssn, redirectImmediate, accountSelection, }) {
        return this.#request('/requisitions/', {
            method: 'POST',
            body: {
                redirect: redirectUrl,
                institution_id: institutionId,
                agreement,
                user_language: userLanguage,
                reference,
                ssn,
                redirect_immediate: redirectImmediate,
                account_selection: accountSelection,
            },
        });
    }
    async getRequisitionById(requisitionId) {
        return this.#request(`/requisitions/${requisitionId}/`);
    }
    async deleteRequisition(requisitionId) {
        return this.#request(`/requisitions/${requisitionId}/`, {
            method: 'DELETE',
        });
    }
    async createAgreement({ institutionId, maxHistoricalDays = 90, accessValidForDays = 90, accessScope = ['balances', 'details', 'transactions'], }) {
        return this.#request('/agreements/enduser/', {
            method: 'POST',
            body: {
                institution_id: institutionId,
                max_historical_days: maxHistoricalDays,
                access_valid_for_days: accessValidForDays,
                access_scope: accessScope,
            },
        });
    }
    async getAccountMetadata(accountId) {
        return this.#request(`/accounts/${accountId}/`);
    }
    async getAccountDetails(accountId) {
        return this.#request(`/accounts/${accountId}/details/`);
    }
    async getAccountBalances(accountId) {
        return this.#request(`/accounts/${accountId}/balances/`);
    }
    async getAccountTransactions({ accountId, dateFrom, dateTo, }) {
        const params = new URLSearchParams();
        if (dateFrom)
            params.set('date_from', dateFrom);
        if (dateTo)
            params.set('date_to', dateTo);
        const query = params.toString();
        return this.#request(`/accounts/${accountId}/transactions/${query ? `?${query}` : ''}`);
    }
    async initSession({ redirectUrl, institutionId, maxHistoricalDays = 90, accessValidForDays = 90, userLanguage = 'en', referenceId = null, ssn = null, redirectImmediate = false, accountSelection = false, }) {
        const agreement = await this.createAgreement({
            institutionId,
            maxHistoricalDays: Number(maxHistoricalDays),
            accessValidForDays: Number(accessValidForDays),
        });
        return this.createRequisition({
            redirectUrl,
            institutionId,
            agreement: agreement.id,
            userLanguage,
            reference: referenceId,
            ssn,
            redirectImmediate,
            accountSelection,
        });
    }
}
