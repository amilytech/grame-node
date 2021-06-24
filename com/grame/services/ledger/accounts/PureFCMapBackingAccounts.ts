/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger.accounts {
    export class PureFCMapBackingAccounts implements com.grame.services.ledger.accounts.BackingStore<AccountID, com.grame.services.state.merkle.MerkleAccount> {
        /* Default method injected from com.grame.services.ledger.accounts.BackingStore */
        rebuildFromSources() {
        }
        /*private*/ delegate: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>;

        public constructor(delegate: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>) {
            if (this.delegate === undefined) { this.delegate = null; }
            this.delegate = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(delegate));
        }

        /**
         * 
         */
        public flushMutableRefs() {
        }

        /**
         * 
         * @param {AccountID} id
         * @return {com.grame.services.state.merkle.MerkleAccount}
         */
        public getRef(id: AccountID): com.grame.services.state.merkle.MerkleAccount {
            return ;
        }

        /**
         * 
         * @param {AccountID} id
         * @return {com.grame.services.state.merkle.MerkleAccount}
         */
        public getUnsafeRef(id: AccountID): com.grame.services.state.merkle.MerkleAccount {
            return ;
        }

        public put$AccountID$com_grame_services_state_merkle_MerkleAccount(id: AccountID, account: com.grame.services.state.merkle.MerkleAccount) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @param {AccountID} id
         * @param {com.grame.services.state.merkle.MerkleAccount} account
         */
        public put(id?: any, account?: any) {
            if (((id != null && id instanceof <any>AccountID) || id === null) && ((account != null && account instanceof <any>com.grame.services.state.merkle.MerkleAccount) || account === null)) {
                return <any>this.put$AccountID$com_grame_services_state_merkle_MerkleAccount(id, account);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {AccountID} id
         */
        public remove(id: AccountID) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @param {AccountID} id
         * @return {boolean}
         */
        public contains(id: AccountID): boolean {
            return ;
        }

        /**
         * 
         * @return {AccountID[]}
         */
        public idSet(): Array<AccountID> {
            return ;
        }
    }
    PureFCMapBackingAccounts["__class"] = "com.grame.services.ledger.accounts.PureFCMapBackingAccounts";
    PureFCMapBackingAccounts["__interfaces"] = ["com.grame.services.ledger.accounts.BackingStore"];


}

