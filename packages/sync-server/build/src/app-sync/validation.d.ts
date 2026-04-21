declare const validateSyncedFile: (groupId: any, keyId: any, currentFile: any) => "file-has-new-key" | "file-has-reset" | "file-key-mismatch" | "file-needs-upload" | "file-old-version";
declare const validateUploadedFile: (groupId: any, keyId: any, currentFile: any) => "file-has-new-key" | "file-has-reset";
export { validateSyncedFile, validateUploadedFile };
//# sourceMappingURL=validation.d.ts.map