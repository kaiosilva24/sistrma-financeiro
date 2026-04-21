/**
 * An enum of valid secret names.
 * @readonly
 * @enum {string}
 */
export declare const SecretName: {
    gocardless_secretId: string;
    gocardless_secretKey: string;
    simplefin_token: string;
    simplefin_accessKey: string;
    pluggyai_clientId: string;
    pluggyai_clientSecret: string;
    pluggyai_itemIds: string;
};
/**
 * A service for managing secrets stored in `secretsDb`.
 */
export declare const secretsService: {
    /**
     * Retrieves the value of a secret by name.
     * @param {SecretName} name - The name of the secret to retrieve.
     * @returns {string|null} The value of the secret, or null if the secret does not exist.
     */
    get: (name: SecretName) => string | null;
    /**
     * Sets the value of a secret by name.
     * @param {SecretName} name - The name of the secret to set.
     * @param {string} value - The value to set for the secret.
     * @returns {Object}
     */
    set: (name: SecretName, value: string) => Object;
    /**
     * Determines whether a secret with the given name exists.
     * @param {SecretName} name - The name of the secret to check for existence.
     * @returns {boolean} True if a secret with the given name exists, false otherwise.
     */
    exists: (name: SecretName) => boolean;
};
//# sourceMappingURL=secrets-service.d.ts.map