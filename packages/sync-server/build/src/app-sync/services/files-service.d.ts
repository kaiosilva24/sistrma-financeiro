declare class FileBase {
    constructor(name: any, groupId: any, encryptSalt: any, encryptTest: any, encryptKeyId: any, encryptMeta: any, syncVersion: any, deleted: any, owner: any);
}
declare class File extends FileBase {
    constructor({ id, name, groupId, encryptSalt, encryptTest, encryptKeyId, encryptMeta, syncVersion, deleted, owner }: {
        deleted?: boolean;
        encryptKeyId?: any;
        encryptMeta?: any;
        encryptSalt?: any;
        encryptTest?: any;
        groupId?: any;
        id: any;
        name?: any;
        owner?: any;
        syncVersion?: any;
    });
}
/**
 * Represents a file update. Will only update the fields that are defined.
 * @class
 * @extends FileBase
 */
declare class FileUpdate extends FileBase {
    constructor({ name, groupId, encryptSalt, encryptTest, encryptKeyId, encryptMeta, syncVersion, deleted, owner }: {
        deleted?: any;
        encryptKeyId?: any;
        encryptMeta?: any;
        encryptSalt?: any;
        encryptTest?: any;
        groupId?: any;
        name?: any;
        owner?: any;
        syncVersion?: any;
    });
}
declare class FilesService {
    constructor(accountDb: any);
    get(fileId: any): File;
    set(file: any): void;
    find({ userId, limit }: {
        limit?: number;
        userId: any;
    }): any;
    findUsersWithAccess(fileId: any): any;
    update(id: any, fileUpdate: any): File;
    getRaw(fileId: any): any;
    validate(rawFile: any): File;
}
declare const filesService: FilesService;
export { filesService, FilesService, File, FileUpdate };
//# sourceMappingURL=files-service.d.ts.map