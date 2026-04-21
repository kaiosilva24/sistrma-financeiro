import type { BrandedId } from './types';
type FileId = BrandedId<'file'>;
export declare function isValidFileId(id: string): id is FileId;
export declare function getPathForUserFile(fileId: FileId): string;
export declare function getPathForGroupFile(groupId: FileId): string;
export {};
//# sourceMappingURL=paths.d.ts.map