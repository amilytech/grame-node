/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files.interceptors {
    export class TxnAwareRatesManager implements com.grame.services.files.FileUpdateInterceptor {
        static log: Logger; public static log_$LI$(): Logger { if (TxnAwareRatesManager.log == null) { TxnAwareRatesManager.log = ; }  return TxnAwareRatesManager.log; }

        static APPLICABLE_PRIORITY: number = 0;

        static YES_VERDICT: java.util.Map.Entry<ResponseCodeEnum, boolean>; public static YES_VERDICT_$LI$(): java.util.Map.Entry<ResponseCodeEnum, boolean> { if (TxnAwareRatesManager.YES_VERDICT == null) { TxnAwareRatesManager.YES_VERDICT = new java.util.AbstractMap.SimpleImmutableEntry<>(SUCCESS, true); }  return TxnAwareRatesManager.YES_VERDICT; }

        static INVALID_VERDICT: java.util.Map.Entry<ResponseCodeEnum, boolean>; public static INVALID_VERDICT_$LI$(): java.util.Map.Entry<ResponseCodeEnum, boolean> { if (TxnAwareRatesManager.INVALID_VERDICT == null) { TxnAwareRatesManager.INVALID_VERDICT = new java.util.AbstractMap.SimpleImmutableEntry<>(INVALID_EXCHANGE_RATE_FILE, false); }  return TxnAwareRatesManager.INVALID_VERDICT; }

        static LIMIT_EXCEEDED_VERDICT: java.util.Map.Entry<ResponseCodeEnum, boolean>; public static LIMIT_EXCEEDED_VERDICT_$LI$(): java.util.Map.Entry<ResponseCodeEnum, boolean> { if (TxnAwareRatesManager.LIMIT_EXCEEDED_VERDICT == null) { TxnAwareRatesManager.LIMIT_EXCEEDED_VERDICT = new java.util.AbstractMap.SimpleImmutableEntry<>(EXCHANGE_RATE_CHANGE_LIMIT_EXCEEDED, false); }  return TxnAwareRatesManager.LIMIT_EXCEEDED_VERDICT; }

        /*private*/ fileNums: com.grame.services.config.FileNumbers;

        /*private*/ accountNums: com.grame.services.config.AccountNumbers;

        /*private*/ txnCtx: com.grame.services.context.TransactionContext;

        /*private*/ properties: com.grame.services.context.properties.GlobalDynamicProperties;

        /*private*/ midnightRates: () => com.grame.services.state.submerkle.ExchangeRates;

        /*private*/ postUpdateCb: (p1: ExchangeRateSet) => void;

        /*private*/ intradayLimitFactory: (p0: number) => (p1: com.grame.services.state.submerkle.ExchangeRates, p2: ExchangeRateSet) => boolean;

        public constructor(fileNums: com.grame.services.config.FileNumbers, accountNums: com.grame.services.config.AccountNumbers, properties: com.grame.services.context.properties.GlobalDynamicProperties, txnCtx: com.grame.services.context.TransactionContext, midnightRates: () => com.grame.services.state.submerkle.ExchangeRates, postUpdateCb: (p1: ExchangeRateSet) => void, intradayLimitFactory: (p0: number) => (p1: com.grame.services.state.submerkle.ExchangeRates, p2: ExchangeRateSet) => boolean) {
            if (this.fileNums === undefined) { this.fileNums = null; }
            if (this.accountNums === undefined) { this.accountNums = null; }
            if (this.txnCtx === undefined) { this.txnCtx = null; }
            if (this.properties === undefined) { this.properties = null; }
            if (this.midnightRates === undefined) { this.midnightRates = null; }
            if (this.postUpdateCb === undefined) { this.postUpdateCb = null; }
            if (this.intradayLimitFactory === undefined) { this.intradayLimitFactory = null; }
            this.txnCtx = txnCtx;
            this.fileNums = fileNums;
            this.properties = properties;
            this.accountNums = accountNums;
            this.postUpdateCb = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(postUpdateCb));
            this.midnightRates = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(midnightRates));
            this.intradayLimitFactory = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(intradayLimitFactory));
        }

        /**
         * 
         * @param {FileID} id
         * @return {java.util.OptionalInt}
         */
        public priorityForCandidate(id: FileID): java.util.OptionalInt {
            return this.isRates(id) ? java.util.OptionalInt.of(TxnAwareRatesManager.APPLICABLE_PRIORITY) : java.util.OptionalInt.empty();
        }

        /**
         * 
         * @param {FileID} id
         * @param {byte[]} newContents
         * @return {*}
         */
        public preUpdate(id: FileID, newContents: number[]): java.util.Map.Entry<ResponseCodeEnum, boolean> {
            if (!this.isRates(id)){
                return;
            }
            const rates: ExchangeRateSet = this.uncheckedParseFrom(newContents);
            if (/* isEmpty */(rates == null)){
                return;
            }
            return this.checkBound(rates);
        }

        /*private*/ checkBound(rates: ExchangeRateSet): java.util.Map.Entry<ResponseCodeEnum, boolean> {
            const bound: number = this.properties.ratesIntradayChangeLimitPercent();
            const intradayLimit: ;
            if (this.isSudoer() || (/* isPresent */(rates != null) && (target => (typeof target === 'function') ? target((target => (typeof target === 'function') ? target() : (<any>target).get())(this.midnightRates), /* get */(v => { if (v == null) throw new Error('value is null'); return v; })(rates)) : (<any>target).test((target => (typeof target === 'function') ? target() : (<any>target).get())(this.midnightRates), /* get */(v => { if (v == null) throw new Error('value is null'); return v; })(rates)))(intradayLimit))){
                return;
            } else {
                return;
            }
        }

        /**
         * 
         * @param {FileID} id
         * @param {byte[]} newContents
         */
        public postUpdate(id: FileID, newContents: number[]) {
            if (this.isRates(id)){
                /* ifPresentOrElse */((v, action, fallbackAction) => v != null ? action(v) : fallbackAction())(this.uncheckedParseFrom(newContents),(rates) => {
                    (target => (typeof target === 'function') ? target(rates) : (<any>target).accept(rates))(this.postUpdateCb);
                    if (this.isSysAdmin()){
                        (target => (typeof target === 'function') ? target() : (<any>target).get())(this.midnightRates).replaceWith(rates);
                    }
                },() => {
                });
            }
        }

        /**
         * 
         * @param {FileID} id
         * @return {*}
         */
        public preDelete(id: FileID): java.util.Map.Entry<ResponseCodeEnum, boolean> {
            return;
        }

        /**
         * 
         * @param {FileID} id
         * @param {com.grame.services.files.HFileMeta} newAttr
         * @return {*}
         */
        public preAttrChange(id: FileID, newAttr: com.grame.services.files.HFileMeta): java.util.Map.Entry<ResponseCodeEnum, boolean> {
            return;
        }

        /*private*/ isRates(id: FileID): boolean {
            return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() == this.fileNums.exchangeRates();
        }

        /*private*/ isSudoer(): boolean {
            return this.isSysAdmin() || this.isTreasury();
        }

        /*private*/ isSysAdmin(): boolean {
            return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() == this.accountNums.systemAdmin();
        }

        /*private*/ isTreasury(): boolean {
            return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() == this.accountNums.treasury();
        }

        /*private*/ uncheckedParseFrom(data: number[]): ExchangeRateSet {
            try {
                return (v => { if (v == null) throw new Error('value is null'); return v; })();
            } catch(ignore) {
                return null;
            }
        }
    }
    TxnAwareRatesManager["__class"] = "com.grame.services.files.interceptors.TxnAwareRatesManager";
    TxnAwareRatesManager["__interfaces"] = ["com.grame.services.files.FileUpdateInterceptor"];


}

