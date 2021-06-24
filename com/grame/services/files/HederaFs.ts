/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files {
    /**
     * A non-hierarchical collection of files managed by {@link FileID} using create/read/update/delete semantics.
     * 
     * Each file has an associated expiration time and key encapsulated in a {@link HFileMeta}, which also indicates
     * if the file has been deleted. If a file is deleted before it expires, its contents are no longer be mutable or
     * readable; however, files are only purged from the system after they expire.
     * 
     * The system's behavior can be extended by registering {@link FileUpdateInterceptor} instances.
     * 
     * @since 0.5.0
     * @author AmilyTech
     * @class
     */
    export interface grameFs {
        /**
         * Registers a new {@link FileUpdateInterceptor} with the file system.
         * 
         * @param {*} updateInterceptor the interceptor to register
         */
        register(updateInterceptor: com.grame.services.files.FileUpdateInterceptor);

        /**
         * Creates a new file in the collection with the given data and metadata.
         * 
         * @param {byte[]} contents the data for the file
         * @param {com.grame.services.files.HFileMeta} attr the metadata of the file
         * @return {FileID} a globally unique entity id
         * @throws IllegalArgumentException with {@link IllegalArgumentType#FILE_WOULD_BE_EXPIRED} if expiry is past
         * @throws IllegalArgumentException with {@link IllegalArgumentType#OVERSIZE_CONTENTS} if the data are too large
         * @param {AccountID} sponsor
         */
        create(contents: number[], attr: com.grame.services.files.HFileMeta, sponsor: AccountID): FileID;

        /**
         * Checks for existence of a the given file; this succeeds even after deletion.
         * 
         * @param {FileID} id the file to look for
         * @return {boolean} its existence
         */
        exists(id: FileID): boolean;

        /**
         * Returns the contents of the given file.
         * 
         * @param {FileID} id the file to cat
         * @return {byte[]} its contents
         * @throws IllegalArgumentException with {@link IllegalArgumentType#UNKNOWN_FILE} if file is missing
         * @throws IllegalArgumentException with {@link IllegalArgumentType#DELETED_FILE} if the file is deleted
         */
        cat(id: FileID): number[];

        /**
         * Returns the metadata for the given file.
         * 
         * @param {FileID} id the file to examine
         * @return {com.grame.services.files.HFileMeta} its metadata
         * @throws IllegalArgumentException with {@link IllegalArgumentType#UNKNOWN_FILE} if file is missing
         * @throws IllegalArgumentException with {@link IllegalArgumentType#DELETED_FILE} if the file is deleted
         */
        getattr(id: FileID): com.grame.services.files.HFileMeta;

        /**
         * Updates the metadata for the given file. Although it is possible to delete a file with this
         * mechanism, prefer {@link grameFs#delete(FileID)}.
         * 
         * @param {FileID} id the file to update
         * @param {com.grame.services.files.HFileMeta} attr the new metadata
         * @throws IllegalArgumentException with {@link IllegalArgumentType#UNKNOWN_FILE} if file is missing
         * @throws IllegalArgumentException with {@link IllegalArgumentType#DELETED_FILE} if the file is deleted
         * @throws IllegalArgumentException with {@link IllegalArgumentType#FILE_WOULD_BE_EXPIRED} if expiry is past
         * @return {*}
         */
        setattr(id: FileID, attr: com.grame.services.files.HFileMeta): grameFs.UpdateResult;

        /**
         * Updates the metadata for the given file, even if it is deleted.
         * 
         * @param {FileID} id the file to update
         * @param {com.grame.services.files.HFileMeta} attr the new metadata
         * @throws IllegalArgumentException with {@link IllegalArgumentType#UNKNOWN_FILE} if file is missing
         * @throws IllegalArgumentException with {@link IllegalArgumentType#FILE_WOULD_BE_EXPIRED} if expiry is past
         * @return {*}
         */
        sudoSetattr(id: FileID, attr: com.grame.services.files.HFileMeta): grameFs.UpdateResult;

        /**
         * Replaces the contents of the given file.
         * 
         * @param {FileID} id the file to replace
         * @param {byte[]} newContents its proposed contents
         * @return {*} an {@link UpdateResult} summarizing the result of the update attempt
         * @throws IllegalArgumentException with {@link IllegalArgumentType#UNKNOWN_FILE} if the file is missing
         * @throws IllegalArgumentException with {@link IllegalArgumentType#DELETED_FILE} if the file is deleted
         * @throws IllegalArgumentException with {@link IllegalArgumentType#OVERSIZE_CONTENTS} if the data are too large
         */
        overwrite(id: FileID, newContents: number[]): grameFs.UpdateResult;

        /**
         * Extends the contents of the given file.
         * 
         * @param {FileID} id the file to extend
         * @param {byte[]} moreContents its proposed extension
         * @return {*} an {@link UpdateResult} summarizing the result of the update attempt
         * @throws IllegalArgumentException with {@link IllegalArgumentType#UNKNOWN_FILE} if the file is missing
         * @throws IllegalArgumentException with {@link IllegalArgumentType#DELETED_FILE} if the file is deleted
         * @throws IllegalArgumentException with {@link IllegalArgumentType#OVERSIZE_CONTENTS} if the extended data are too large
         */
        append(id: FileID, moreContents: number[]): grameFs.UpdateResult;

        /**
         * Marks the given file as deleted and removes its data from the system.
         * 
         * @param {FileID} id the file to delete
         * @throws IllegalArgumentException with {@link IllegalArgumentType#UNKNOWN_FILE} if the file is missing
         * @throws IllegalArgumentException with {@link IllegalArgumentType#DELETED_FILE} if the file is deleted
         * @return {*}
         */
        delete(id: FileID): grameFs.UpdateResult;

        /**
         * Removes the given file from the system (both metadata and data).
         * 
         * @param {FileID} id the file to purge
         * @throws IllegalArgumentException with {@link IllegalArgumentType#UNKNOWN_FILE} if the file is missing
         */
        rm(id: FileID);
    }

    export namespace grameFs {

        export interface UpdateResult {
            fileReplaced(): boolean;

            attrChanged(): boolean;

            outcome(): ResponseCodeEnum;
        }
    }

}

