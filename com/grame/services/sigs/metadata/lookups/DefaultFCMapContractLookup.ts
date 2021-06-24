/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata.lookups {
    export class DefaultFCMapContractLookup implements com.grame.services.sigs.metadata.lookups.ContractSigMetaLookup {
        /*private*/ accounts: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>;

        public constructor(accounts: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>) {
            if (this.accounts === undefined) { this.accounts = null; }
            this.accounts = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(accounts));
        }

        /**
         * 
         * @param {ContractID} id
         * @return {com.grame.services.sigs.metadata.lookups.SafeLookupResult}
         */
        public safeLookup(id: ContractID): com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.ContractSigningMetadata> {
            const contract: ;
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(contract) == null ||  || !){
                return com.grame.services.sigs.metadata.lookups.SafeLookupResult.failure<any>(com.grame.services.sigs.order.KeyOrderingFailure.INVALID_CONTRACT);
            } else {
                let key: com.grame.services.legacy.core.jproto.JKey;
                if ((key = ) == null || (key != null && key instanceof <any>com.grame.services.legacy.core.jproto.JContractIDKey)){
                    return com.grame.services.sigs.metadata.lookups.SafeLookupResult.failure<any>(com.grame.services.sigs.order.KeyOrderingFailure.IMMUTABLE_CONTRACT);
                } else {
                    return <any>(new com.grame.services.sigs.metadata.lookups.SafeLookupResult<any>();
                }
            }
        }
    }
    DefaultFCMapContractLookup["__class"] = "com.grame.services.sigs.metadata.lookups.DefaultFCMapContractLookup";
    DefaultFCMapContractLookup["__interfaces"] = ["com.grame.services.sigs.metadata.lookups.ContractSigMetaLookup"];


}

