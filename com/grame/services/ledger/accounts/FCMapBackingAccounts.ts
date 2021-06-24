/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger.accounts {
    export class FCMapBackingAccounts implements com.grame.services.ledger.accounts.BackingStore<AccountID, com.grame.services.state.merkle.MerkleAccount> {
        existingAccounts: Array<AccountID>;

        cache: any;

        /*private*/ delegate: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>;

        public constructor(delegate: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>) {
            this.existingAccounts = new Array<>();
            this.cache = new Object<>();
            if (this.delegate === undefined) { this.delegate = null; }
            this.delegate = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(delegate));
            this.rebuildFromSources();
        }

        /**
         * 
         */
        public rebuildFromSources() {
            /* clear */(this.existingAccounts.length = 0);
        }

        /**
         * 
         */
        public flushMutableRefs() {
            /* clear */(obj => { for (let member in obj) delete obj[member]; })(this.cache);
        }

        /**
         * 
         * @param {AccountID} id
         * @return {com.grame.services.state.merkle.MerkleAccount}
         */
        public getRef(id: AccountID): com.grame.services.state.merkle.MerkleAccount {
            return this.cache.computeIfAbsent(id, (ignore) => );
        }

        public put$AccountID$com_grame_services_state_merkle_MerkleAccount(id: AccountID, account: com.grame.services.state.merkle.MerkleAccount) {
            const delegateId: com.grame.services.state.merkle.MerkleEntityId = com.grame.services.state.merkle.MerkleEntityId.fromAccountId(id);
            if (!/* contains */(this.existingAccounts.indexOf(<any>(id)) >= 0)){
                /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(this.existingAccounts, id);
            } else if (!/* containsKey */this.cache.hasOwnProperty(id) || ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(/* get */((m,k) => m[k]===undefined?null:m[k])(this.cache, id)) != account)){
                throw Object.defineProperty(new Error(javaemul.internal.StringHelper.format("Argument \'id=%s\' does not map to a mutable ref!", com.grame.services.utils.EntityIdUtils.readableId(id)).message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
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
         * @return {boolean}
         */
        public contains(id: AccountID): boolean {
            return /* contains */(this.existingAccounts.indexOf(<any>(id)) >= 0);
        }

        /**
         * 
         * @param {AccountID} id
         */
        public remove(id: AccountID) {
            /* remove */(a => { let index = a.indexOf(id); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.existingAccounts);
        }

        /**
         * 
         * @return {AccountID[]}
         */
        public idSet(): Array<AccountID> {
            return;
        }

        /**
         * 
         * @param {AccountID} id
         * @return {com.grame.services.state.merkle.MerkleAccount}
         */
        public getUnsafeRef(id: AccountID): com.grame.services.state.merkle.MerkleAccount {
            return ;
        }
    }
    FCMapBackingAccounts["__class"] = "com.grame.services.ledger.accounts.FCMapBackingAccounts";
    FCMapBackingAccounts["__interfaces"] = ["com.grame.services.ledger.accounts.BackingStore"];


}

