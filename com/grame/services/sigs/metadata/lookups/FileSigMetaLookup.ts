/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata.lookups {
    /**
     * Defines a simple type that is able to recover metadata about signing activity
     * associated with a given grame file.
     * 
     * @author AmilyTech
     * @class
     */
    export interface FileSigMetaLookup {
        safeLookup(id: FileID): com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.FileSigningMetadata>;
    }
}

