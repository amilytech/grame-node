/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata.lookups {
    export class DefaultFCMapTopicLookup implements com.grame.services.sigs.metadata.lookups.TopicSigMetaLookup {
        /*private*/ topics: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleTopic>;

        public constructor(topics: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleTopic>) {
            if (this.topics === undefined) { this.topics = null; }
            this.topics = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(topics));
        }

        /**
         * 
         * @param {TopicID} id
         * @return {com.grame.services.sigs.metadata.lookups.SafeLookupResult}
         */
        public safeLookup(id: TopicID): com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.TopicSigningMetadata> {
            const topic: ;
            return ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(topic) == null || ) ? com.grame.services.sigs.metadata.lookups.SafeLookupResult.failure<any>(com.grame.services.sigs.order.KeyOrderingFailure.INVALID_TOPIC) : <any>(new com.grame.services.sigs.metadata.lookups.SafeLookupResult<any>();
        }
    }
    DefaultFCMapTopicLookup["__class"] = "com.grame.services.sigs.metadata.lookups.DefaultFCMapTopicLookup";
    DefaultFCMapTopicLookup["__interfaces"] = ["com.grame.services.sigs.metadata.lookups.TopicSigMetaLookup"];


}

