declare class WrappedDatabase {
    constructor(db: any);
    /**
     * @param {string} sql
     * @param {string[]} params
     */
    all(sql: string, params?: string[]): any;
    /**
     * @param {string} sql
     * @param {string[]} params
     */
    first(sql: string, params?: string[]): any;
    /**
     * @param {string} sql
     */
    exec(sql: string): any;
    /**
     * @param {string} sql
     * @param {string[]} params
     */
    mutate(sql: string, params?: string[]): {
        changes: any;
        insertId: any;
    };
    /**
     * @param {() => void} fn
     */
    transaction(fn: () => void): any;
    close(): void;
}
/** @param {string} filename */
export declare function openDatabase(filename: string): WrappedDatabase;
export {};
//# sourceMappingURL=db.d.ts.map