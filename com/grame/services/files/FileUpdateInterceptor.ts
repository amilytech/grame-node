/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files {
    export interface FileUpdateInterceptor {
        /**
         * Returns <i>either</i> the priority order this interceptor has relative to the given file
         * (Integer.MIN_VALUE is first, Integer.MAX_VALUE is last); <i>or</i> an empty optional if this
         * interceptor is not applicable.
         * 
         * @param {FileID} id the file to be updated
         * @return {java.util.OptionalInt} this interceptor's priority, if applicable
         */
        priorityForCandidate(id: FileID): java.util.OptionalInt;

        /**
         * Returns an {@link Entry} mapping this interceptor's assessment of the
         * candidate update to a flag indicating whether the update should occur.
         * 
         * @param {FileID} id the file to be updated
         * @param {byte[]} newContents the proposed new contents of the file
         * @return {*} this interceptor's assessment of and gate on the candidate update
         */
        preUpdate(id: FileID, newContents: number[]): java.util.Map.Entry<ResponseCodeEnum, boolean>;

        /**
         * Performs any post-processing for the given completed update.
         * 
         * @param {FileID} id the file that was updated
         * @param {byte[]} contents the new contents of the file
         */
        postUpdate(id: FileID, contents: number[]);

        /**
         * Returns an {@link Entry} mapping this interceptor's assessment of the
         * candidate delete to a flag indicating whether the delete should occur.
         * 
         * @param {FileID} id the file to be deleted
         * @return {*} this interceptor's assessment of and gate on the candidate delete
         */
        preDelete(id: FileID): java.util.Map.Entry<ResponseCodeEnum, boolean>;

        /**
         * Returns an {@link Entry} mapping this interceptor's assessment of the
         * candidate attribute change to a flag indicating whether the change should occur.
         * 
         * @param {FileID} id the file whose attributes are to be changed
         * @param {com.grame.services.files.HFileMeta} newAttr the proposed new attributes of the file
         * @return {*} this interceptor's assessment of and gate on the candidate change
         */
        preAttrChange(id: FileID, newAttr: com.grame.services.files.HFileMeta): java.util.Map.Entry<ResponseCodeEnum, boolean>;
    }
}

