/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata {
    /**
     * Represents metadata about the signing activities of a grame file.
     * 
     * @author AmilyTech
     * @param {com.grame.services.legacy.core.jproto.JKey} wacl
     * @class
     */
    export class FileSigningMetadata {
        /*private*/ wacl: com.grame.services.legacy.core.jproto.JKey;

        public constructor(wacl: com.grame.services.legacy.core.jproto.JKey) {
            if (this.wacl === undefined) { this.wacl = null; }
            this.wacl = wacl;
        }

        public getWacl(): com.grame.services.legacy.core.jproto.JKey {
            return this.wacl;
        }
    }
    FileSigningMetadata["__class"] = "com.grame.services.sigs.metadata.FileSigningMetadata";

}

