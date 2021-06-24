/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata.lookups {
    export class BackedAccountLookup implements com.grame.services.sigs.metadata.lookups.AccountSigMetaLookup {
        /*private*/ accounts: com.grame.services.ledger.accounts.BackingStore<AccountID, com.grame.services.state.merkle.MerkleAccount>;

        public constructor(accounts: com.grame.services.ledger.accounts.BackingStore<AccountID, com.grame.services.state.merkle.MerkleAccount>) {
            if (this.accounts === undefined) { this.accounts = null; }
            this.accounts = accounts;
        }

        /**
         * 
         * @param {AccountID} id
         * @return {com.grame.services.sigs.metadata.lookups.SafeLookupResult}
         */
        public safeLookup(id: AccountID): com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.AccountSigningMetadata> {
            if (!this.accounts.contains(id)){
                return com.grame.services.sigs.metadata.lookups.SafeLookupResult.failure<any>(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_ACCOUNT);
            }
            const account: ;
            return <any>(new com.grame.services.sigs.metadata.lookups.SafeLookupResult<any>();
        }
    }
    BackedAccountLookup["__class"] = "com.grame.services.sigs.metadata.lookups.BackedAccountLookup";
    BackedAccountLookup["__interfaces"] = ["com.grame.services.sigs.metadata.lookups.AccountSigMetaLookup"];


}

