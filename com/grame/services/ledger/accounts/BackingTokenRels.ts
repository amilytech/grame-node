/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger.accounts {
    /**
     * A store that provides efficient access to the mutable representations
     * of token relationships, indexed by ({@code AccountID}, {@code TokenID})
     * pairs. This class is <b>not</b> thread-safe, and should never be used
     * by any thread other than the {@code handleTransaction} thread.
     * 
     * @author AmilyTech
     * @param {*} delegate
     * @class
     */
    export class BackingTokenRels implements com.grame.services.ledger.accounts.BackingStore<Pair<AccountID, TokenID>, com.grame.services.state.merkle.MerkleTokenRelStatus> {
        public static REL_CMP: any; public static REL_CMP_$LI$(): any { if (BackingTokenRels.REL_CMP == null) { BackingTokenRels.REL_CMP = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['compare'] ? funcInst['compare'] : funcInst) .call(funcInst, arg0, arg1)})()); }  return BackingTokenRels.REL_CMP; }

        static REL_ENTRY_CMP: any; public static REL_ENTRY_CMP_$LI$(): any { if (BackingTokenRels.REL_ENTRY_CMP == null) { BackingTokenRels.REL_ENTRY_CMP = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['compare'] ? funcInst['compare'] : funcInst) .call(funcInst, arg0, arg1)})(java.util.Comparator<any, any>((instance$Entry) => { return instance$Entry.getKey() }, BackingTokenRels.REL_CMP_$LI$()))); }  return BackingTokenRels.REL_ENTRY_CMP; }

        existingRels: Array<Pair<AccountID, TokenID>>;

        cache: any;

        /*private*/ delegate: () => FCMap<com.grame.services.state.merkle.MerkleEntityAssociation, com.grame.services.state.merkle.MerkleTokenRelStatus>;

        public constructor(delegate: () => FCMap<com.grame.services.state.merkle.MerkleEntityAssociation, com.grame.services.state.merkle.MerkleTokenRelStatus>) {
            this.existingRels = new Array<>();
            this.cache = new Object<>();
            if (this.delegate === undefined) { this.delegate = null; }
            this.delegate = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(delegate));
            this.rebuildFromSources();
        }

        /**
         * 
         */
        public rebuildFromSources() {
            /* clear */(this.existingRels.length = 0);
        }

        /**
         * 
         */
        public flushMutableRefs() {
            /* clear */(obj => { for (let member in obj) delete obj[member]; })(this.cache);
        }

        /**
         * 
         * @param {Pair} key
         * @return {boolean}
         */
        public contains(key: Pair<AccountID, TokenID>): boolean {
            return /* contains */(this.existingRels.indexOf(<any>(key)) >= 0);
        }

        /**
         * 
         * @param {Pair} key
         * @return {com.grame.services.state.merkle.MerkleTokenRelStatus}
         */
        public getRef(key: Pair<AccountID, TokenID>): com.grame.services.state.merkle.MerkleTokenRelStatus {
            return this.cache.computeIfAbsent(key, (ignore) => );
        }

        public put$<any>$com_grame_services_state_merkle_MerkleTokenRelStatus(key: Pair<AccountID, TokenID>, status: com.grame.services.state.merkle.MerkleTokenRelStatus) {
            if (!/* contains */(this.existingRels.indexOf(<any>(key)) >= 0)){
                /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(this.existingRels, key);
            } else if (!/* containsKey */this.cache.hasOwnProperty(key) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(/* get */((m,k) => m[k]===undefined?null:m[k])(this.cache, key)) != status){
                throw Object.defineProperty(new Error(javaemul.internal.StringHelper.format("Argument \'key=%s\' does not map to a mutable ref!", ).message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * 
         * @param {Pair} key
         * @param {com.grame.services.state.merkle.MerkleTokenRelStatus} status
         */
        public put(key?: any, status?: any) {
            if (((key != null && key instanceof <any><any>) || key === null) && ((status != null && status instanceof <any>com.grame.services.state.merkle.MerkleTokenRelStatus) || status === null)) {
                return <any>this.put$<any>$com_grame_services_state_merkle_MerkleTokenRelStatus(key, status);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {Pair} id
         */
        public remove(id: Pair<AccountID, TokenID>) {
            /* remove */(a => { let index = a.indexOf(id); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.existingRels);
        }

        /**
         * 
         * @param {Pair} id
         * @return {com.grame.services.state.merkle.MerkleTokenRelStatus}
         */
        public getUnsafeRef(id: Pair<AccountID, TokenID>): com.grame.services.state.merkle.MerkleTokenRelStatus {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @return {Pair[]}
         */
        public idSet(): Array<Pair<AccountID, TokenID>> {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public static asTokenRel(account: AccountID, token: TokenID): Pair<AccountID, TokenID> {
            return ;
        }

        public static readableTokenRel(rel: Pair<AccountID, TokenID>): string {
            return javaemul.internal.StringHelper.format("%s <-> %s", com.grame.services.utils.EntityIdUtils.readableId(), com.grame.services.utils.EntityIdUtils.readableId());
        }
    }
    BackingTokenRels["__class"] = "com.grame.services.ledger.accounts.BackingTokenRels";
    BackingTokenRels["__interfaces"] = ["com.grame.services.ledger.accounts.BackingStore"];


}

