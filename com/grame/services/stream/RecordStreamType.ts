/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.stream {
    /**
     * Contains properties related to RecordStream file type;
     * Its constructor is private. Users need to use the singleton to denote this type.
     * @class
     */
    export class RecordStreamType implements StreamType {
        /**
         * description of the streamType, used for logging
         */
        public static RECORD_DESCRIPTION: string = "records";

        /**
         * file name extension
         */
        public static RECORD_EXTENSION: string = "rcd";

        /**
         * file name extension of signature file
         */
        public static RECORD_SIG_EXTENSION: string = "rcd_sig";

        /**
         * Header which is written in the beginning of a stream file, before writing the Object Stream Version.
         * the ints in fileHeader denote: version 5, hapiProtoVersion: 0.11.0
         */
        static RECORD_FILE_HEADER: number[]; public static RECORD_FILE_HEADER_$LI$(): number[] { if (RecordStreamType.RECORD_FILE_HEADER == null) { RecordStreamType.RECORD_FILE_HEADER = [5, 0, 11, 0]; }  return RecordStreamType.RECORD_FILE_HEADER; }

        /**
         * Header which is written in the beginning of a stream signature file, before writing the Object Stream Signature
         * Version.
         * the byte in sigFileHeader denotes version 5
         */
        static RECORD_SIG_FILE_HEADER: number[]; public static RECORD_SIG_FILE_HEADER_$LI$(): number[] { if (RecordStreamType.RECORD_SIG_FILE_HEADER == null) { RecordStreamType.RECORD_SIG_FILE_HEADER = [5]; }  return RecordStreamType.RECORD_SIG_FILE_HEADER; }

        constructor() {
        }

        /**
         * a singleton denotes RecordStreamType
         */
        public static RECORD: RecordStreamType; public static RECORD_$LI$(): RecordStreamType { if (RecordStreamType.RECORD == null) { RecordStreamType.RECORD = new RecordStreamType(); }  return RecordStreamType.RECORD; }

        /**
         * 
         * @return {string}
         */
        public getDescription(): string {
            return RecordStreamType.RECORD_DESCRIPTION;
        }

        /**
         * 
         * @return {string}
         */
        public getExtension(): string {
            return RecordStreamType.RECORD_EXTENSION;
        }

        /**
         * 
         * @return {string}
         */
        public getSigExtension(): string {
            return RecordStreamType.RECORD_SIG_EXTENSION;
        }

        /**
         * 
         * @return {int[]}
         */
        public getFileHeader(): number[] {
            return RecordStreamType.RECORD_FILE_HEADER_$LI$();
        }

        /**
         * 
         * @return {byte[]}
         */
        public getSigFileHeader(): number[] {
            return RecordStreamType.RECORD_SIG_FILE_HEADER_$LI$();
        }
    }
    RecordStreamType["__class"] = "com.grame.services.stream.RecordStreamType";
    RecordStreamType["__interfaces"] = ["StreamType"];


}

