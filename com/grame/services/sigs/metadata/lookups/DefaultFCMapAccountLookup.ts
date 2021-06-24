/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata.lookups {
    /**
     * Trivial account signing metadata lookup backed by a {@code FCMap<MapKey, MapValue>}.
     * 
     * @author AmilyTech
     * @param {*} accounts
     * @class
     */
    export class DefaultFCMapAccountLookup implements com.grame.services.sigs.metadata.lookups.AccountSigMetaLookup {
        /*private*/ accounts: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>;

        public constructor(accounts: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>) {
            if (this.accounts === undefined) { this.accounts = null; }
            this.accounts = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(accounts));
        }

        /**
         * 
         * @param {AccountID} id
         * @return {com.grame.services.sigs.metadata.lookups.SafeLookupResult}
         */
        public safeLookup(id: AccountID): com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.AccountSigningMetadata> {
            const account: ;
            return ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(account) == null) ? com.grame.services.sigs.metadata.lookups.SafeLookupResult.failure<any>(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_ACCOUNT) : <any>(new com.grame.services.sigs.metadata.lookups.SafeLookupResult<any>();
        }
    }
    DefaultFCMapAccountLookup["__class"] = "com.grame.services.sigs.metadata.lookups.DefaultFCMapAccountLookup";
    DefaultFCMapAccountLookup["__interfaces"] = ["com.grame.services.sigs.metadata.lookups.AccountSigMetaLookup"];


}

