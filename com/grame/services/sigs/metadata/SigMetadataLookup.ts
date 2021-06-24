/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata {
    /**
     * Defines a type able to look up metadata associated to the signing activities
     * of any grame entity (account, smart contract, file, topic, or token).
     * 
     * @author AmilyTech
     * @class
     */
    export interface SigMetadataLookup {
        fileSigningMetaFor(id: FileID): com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.FileSigningMetadata>;

        topicSigningMetaFor(id: TopicID): com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.TopicSigningMetadata>;

        tokenSigningMetaFor(id: TokenID): com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.TokenSigningMetadata>;

        accountSigningMetaFor(id: AccountID): com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.AccountSigningMetadata>;

        scheduleSigningMetaFor(id: ScheduleID): com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.ScheduleSigningMetadata>;

        contractSigningMetaFor(id: ContractID): com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.ContractSigningMetadata>;
    }

    export namespace SigMetadataLookup {

        export const REF_LOOKUP_FACTORY: (p1: com.grame.services.store.tokens.TokenStore) => (p1: TokenID) => com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.TokenSigningMetadata> = () => ;

        export const SCHEDULE_REF_LOOKUP_FACTORY: (p1: com.grame.services.store.schedule.ScheduleStore) => (p1: ScheduleID) => com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.ScheduleSigningMetadata> = () => ;
    }

}

