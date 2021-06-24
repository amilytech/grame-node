/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger {
    /**
     * Provides a ledger for grame Services crypto and smart contract
     * accounts with transactional semantics. Changes to the ledger are
     * <b>only</b> allowed in the scope of a transaction.
     * 
     * All changes that are made during a transaction are summarized as
     * per-account changesets. These changesets are committed to a
     * wrapped {@link TransactionalLedger}; or dropped entirely in case
     * of a rollback.
     * 
     * The ledger delegates history of each transaction to an injected
     * {@link AccountRecordsHistorian} by invoking its {@code addNewRecords}
     * immediately before the final {@link TransactionalLedger#commit()}.
     * 
     * We should think of the ledger as using double-booked accounting,
     * (e.g., via the {@link grameLedger#doTransfer(AccountID, AccountID, long)}
     * method); but it is necessary to provide "unsafe" single-booked
     * methods like {@link grameLedger#adjustBalance(AccountID, long)} in
     * order to match transfer semantics the EVM expects.
     * 
     * @author AmilyTech
     * @param {*} tokenStore
     * @param {*} ids
     * @param {*} creator
     * @param {*} historian
     * @param {com.grame.services.ledger.TransactionalLedger} accountsLedger
     * @class
     */
    export class grameLedger {
        static log: Logger; public static log_$LI$(): Logger { if (grameLedger.log == null) { grameLedger.log = ; }  return grameLedger.log; }

        static UNUSABLE_TOKEN_RELS_LEDGER: com.grame.services.ledger.TransactionalLedger<Pair<AccountID, TokenID>, com.grame.services.ledger.properties.TokenRelProperty, com.grame.services.state.merkle.MerkleTokenRelStatus> = null;

        static MAX_CONCEIVABLE_TOKENS_PER_TXN: number = 1000;

        static NO_NEW_BALANCES: number[]; public static NO_NEW_BALANCES_$LI$(): number[] { if (grameLedger.NO_NEW_BALANCES == null) { grameLedger.NO_NEW_BALANCES = []; }  return grameLedger.NO_NEW_BALANCES; }

        static NO_ACTIVE_TXN_CHANGE_SET: string = "{*NO ACTIVE TXN*}";

        public static ACCOUNT_ID_COMPARATOR: any; public static ACCOUNT_ID_COMPARATOR_$LI$(): any { if (grameLedger.ACCOUNT_ID_COMPARATOR == null) { grameLedger.ACCOUNT_ID_COMPARATOR = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['compare'] ? funcInst['compare'] : funcInst) .call(funcInst, arg0, arg1)})()); }  return grameLedger.ACCOUNT_ID_COMPARATOR; }

        public static TOKEN_ID_COMPARATOR: any; public static TOKEN_ID_COMPARATOR_$LI$(): any { if (grameLedger.TOKEN_ID_COMPARATOR == null) { grameLedger.TOKEN_ID_COMPARATOR = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['compare'] ? funcInst['compare'] : funcInst) .call(funcInst, arg0, arg1)})()); }  return grameLedger.TOKEN_ID_COMPARATOR; }

        public static FILE_ID_COMPARATOR: any; public static FILE_ID_COMPARATOR_$LI$(): any { if (grameLedger.FILE_ID_COMPARATOR == null) { grameLedger.FILE_ID_COMPARATOR = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['compare'] ? funcInst['compare'] : funcInst) .call(funcInst, arg0, arg1)})()); }  return grameLedger.FILE_ID_COMPARATOR; }

        /*private*/ tokenStore: com.grame.services.store.tokens.TokenStore;

        /*private*/ ids: com.grame.services.ledger.ids.EntityIdSource;

        /*private*/ netTransfers: TransferList.Builder;

        /*private*/ historian: com.grame.services.records.AccountRecordsHistorian;

        /*private*/ accountsLedger: com.grame.services.ledger.TransactionalLedger<AccountID, com.grame.services.ledger.properties.AccountProperty, com.grame.services.state.merkle.MerkleAccount>;

        numTouches: number;

        tokensTouched: TokenID[];

        netTokenTransfers: any;

        tokenRelsLedger: com.grame.services.ledger.TransactionalLedger<Pair<AccountID, TokenID>, com.grame.services.ledger.properties.TokenRelProperty, com.grame.services.state.merkle.MerkleTokenRelStatus>;

        public constructor(tokenStore: com.grame.services.store.tokens.TokenStore, ids: com.grame.services.ledger.ids.EntityIdSource, creator: com.grame.services.state.EntityCreator, historian: com.grame.services.records.AccountRecordsHistorian, accountsLedger: com.grame.services.ledger.TransactionalLedger<AccountID, com.grame.services.ledger.properties.AccountProperty, com.grame.services.state.merkle.MerkleAccount>) {
            if (this.tokenStore === undefined) { this.tokenStore = null; }
            if (this.ids === undefined) { this.ids = null; }
            this.netTransfers = ;
            if (this.historian === undefined) { this.historian = null; }
            if (this.accountsLedger === undefined) { this.accountsLedger = null; }
            this.numTouches = 0;
            this.tokensTouched = (s => { let a=[]; while(s-->0) a.push(null); return a; })(grameLedger.MAX_CONCEIVABLE_TOKENS_PER_TXN);
            this.netTokenTransfers = new Object<>();
            this.tokenRelsLedger = grameLedger.UNUSABLE_TOKEN_RELS_LEDGER;
            this.ids = ids;
            this.historian = historian;
            this.tokenStore = tokenStore;
            this.accountsLedger = accountsLedger;
            creator.setLedger(this);
            historian.setLedger(this);
            historian.setCreator(creator);
            tokenStore.setAccountsLedger(accountsLedger);
            tokenStore.setgrameLedger(this);
        }

        public setTokenRelsLedger(tokenRelsLedger: com.grame.services.ledger.TransactionalLedger<Pair<AccountID, TokenID>, com.grame.services.ledger.properties.TokenRelProperty, com.grame.services.state.merkle.MerkleTokenRelStatus>) {
            this.tokenRelsLedger = tokenRelsLedger;
        }

        public begin() {
            this.accountsLedger.begin();
            if (this.tokenRelsLedger !== grameLedger.UNUSABLE_TOKEN_RELS_LEDGER){
                this.tokenRelsLedger.begin();
            }
        }

        public rollback() {
            this.accountsLedger.rollback();
            if (this.tokenRelsLedger !== grameLedger.UNUSABLE_TOKEN_RELS_LEDGER && this.tokenRelsLedger.isInTransaction()){
                this.tokenRelsLedger.rollback();
            }
            this.clearNetTokenTransfers();
        }

        public commit() {
            this.throwIfPendingStateIsInconsistent();
            this.historian.addNewRecords();
            this.historian.addNewEntities();
            this.accountsLedger.commit();
            if (this.tokenRelsLedger !== grameLedger.UNUSABLE_TOKEN_RELS_LEDGER && this.tokenRelsLedger.isInTransaction()){
                this.tokenRelsLedger.commit();
            }
            this.clearNetTokenTransfers();
        }

        public netTransfersInTxn(): TransferList {
            return ;
        }

        public pendingNetTransfersInTxn(): TransferList.Builder {
            this.accountsLedger.throwIfNotInTxn();
            this.purgeZeroAdjustments(this.netTransfers);
            return;
        }

        public netTokenTransfersInTxn(): Array<TokenTransferList> {
            if (this.numTouches === 0){
                return /* emptyList */[];
            }
            const all: Array<TokenTransferList> = new Array<>();
            /* sort */((arr, start, end, f?) => ((arr1, arr2) => arr1.splice.apply(arr1, (<any[]>[start, arr2.length]).concat(arr2)))(this.tokensTouched, this.tokensTouched.slice(start, end).sort(f)))(this.tokensTouched, 0, this.numTouches, grameLedger.TOKEN_ID_COMPARATOR_$LI$());
            for(let i: number = 0; i < this.numTouches; i++) {{
                const token: ;
                if (i === 0 || !){
                    const netTransfersHere: ;
                    this.purgeZeroAdjustments(netTransfersHere);
                    /* add */(all.push()>0);
                }
            };}
            return;
        }

        public currentChangeSet(): string {
            if (this.accountsLedger.isInTransaction()){
                const sb: { str: string, toString: Function } = /* append */(sb => { sb.str += <any>this.accountsLedger.changeSetSoFar(); return sb; })({ str: "--- ACCOUNTS ---\n", toString: function() { return this.str; } });
                if (this.tokenRelsLedger !== grameLedger.UNUSABLE_TOKEN_RELS_LEDGER){
                    /* append */(sb => { sb.str += <any>this.tokenRelsLedger.changeSetSoFar(); return sb; })(/* append */(sb => { sb.str += <any>"\n--- TOKEN RELATIONSHIPS ---\n"; return sb; })(sb));
                }
                return /* toString */sb.str;
            } else {
                return grameLedger.NO_ACTIVE_TXN_CHANGE_SET;
            }
        }

        public getBalance(id: AccountID): number {
            return (n => n<0?Math.ceil(n):Math.floor(n))(<number>this.accountsLedger.get(id, com.grame.services.ledger.properties.AccountProperty.BALANCE));
        }

        public adjustBalance(id: AccountID, adjustment: number) {
            const newBalance: number = this.computeNewBalance(id, adjustment);
            this.setBalance(id, newBalance);
            this.updateXfers(id, adjustment, this.netTransfers);
        }

        public doTransfer(from: AccountID, to: AccountID, adjustment: number) {
            const newFromBalance: number = this.computeNewBalance(from, -1 * adjustment);
            const newToBalance: number = this.computeNewBalance(to, adjustment);
            this.setBalance(from, newFromBalance);
            this.setBalance(to, newToBalance);
            this.updateXfers(from, -1 * adjustment, this.netTransfers);
            this.updateXfers(to, adjustment, this.netTransfers);
        }

        public doTransfers(accountAmounts: TransferList) {
            this.throwIfNetAdjustmentIsNonzero(accountAmounts);
            const newBalances: number[] = this.computeNewBalances(accountAmounts);
            for(let i: number = 0; i < newBalances.length; i++) {{
                this.setBalance(, newBalances[i]);
            };}
            for(let index141=.iterator();index141.hasNext();) {
                let aa = index141.next();
                {
                    this.updateXfers(, , this.netTransfers);
                }
            }
        }

        public getAssociatedTokens(aId: AccountID): com.grame.services.state.merkle.MerkleAccountTokens {
            return <com.grame.services.state.merkle.MerkleAccountTokens>this.accountsLedger.get(aId, com.grame.services.ledger.properties.AccountProperty.TOKENS);
        }

        public setAssociatedTokens(aId: AccountID, tokens: com.grame.services.state.merkle.MerkleAccountTokens) {
            this.accountsLedger.set(aId, com.grame.services.ledger.properties.AccountProperty.TOKENS, tokens);
        }

        public getTokenBalance(aId: AccountID, tId: TokenID): number {
            const relationship: ;
            return (n => n<0?Math.ceil(n):Math.floor(n))(<number>this.tokenRelsLedger.get(relationship, com.grame.services.ledger.properties.TokenRelProperty.TOKEN_BALANCE));
        }

        public allTokenBalancesVanish(aId: AccountID): boolean {
            if (this.tokenRelsLedger === grameLedger.UNUSABLE_TOKEN_RELS_LEDGER){
                throw Object.defineProperty(new Error("Ledger has no manageable token relationships!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
            const tokens: 
        }
        grameLedger["__class"] = "com.grame.services.ledger.grameLedger";


        export namespace grameLedger {

            

            
        }

