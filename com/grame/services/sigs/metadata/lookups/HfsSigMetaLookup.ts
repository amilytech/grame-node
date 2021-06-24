/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata.lookups {
    /**
     * Trivial file metadata lookup.
     * 
     * @author AmilyTech
     * @param {*} hfs
     * @class
     */
    export class HfsSigMetaLookup implements com.grame.services.sigs.metadata.lookups.FileSigMetaLookup {
        public static log: Logger; public static log_$LI$(): Logger { if (HfsSigMetaLookup.log == null) { HfsSigMetaLookup.log = ; }  return HfsSigMetaLookup.log; }

        /*private*/ hfs: com.grame.services.files.grameFs;

        public constructor(hfs: com.grame.services.files.grameFs) {
            if (this.hfs === undefined) { this.hfs = null; }
            this.hfs = hfs;
        }

        /**
         * 
         * @param {FileID} id
         * @return {com.grame.services.sigs.metadata.lookups.SafeLookupResult}
         */
        public safeLookup(id: FileID): com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.FileSigningMetadata> {
            if (!this.hfs.exists(id)){
                return com.grame.services.sigs.metadata.lookups.SafeLookupResult.failure<any>(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_FILE);
            }
            return <any>(new com.grame.services.sigs.metadata.lookups.SafeLookupResult<any>();
        }
    }
    HfsSigMetaLookup["__class"] = "com.grame.services.sigs.metadata.lookups.HfsSigMetaLookup";
    HfsSigMetaLookup["__interfaces"] = ["com.grame.services.sigs.metadata.lookups.FileSigMetaLookup"];


}

