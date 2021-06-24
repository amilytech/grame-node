/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files.sysfiles {
    export class CurrencyCallbacks {
        /*private*/ fees: com.grame.services.fees.FeeCalculator;

        /*private*/ exchange: com.grame.services.fees.HbarCentExchange;

        /*private*/ midnightRates: () => com.grame.services.state.submerkle.ExchangeRates;

        public constructor(fees: com.grame.services.fees.FeeCalculator, exchange: com.grame.services.fees.HbarCentExchange, midnightRates: () => com.grame.services.state.submerkle.ExchangeRates) {
            if (this.fees === undefined) { this.fees = null; }
            if (this.exchange === undefined) { this.exchange = null; }
            if (this.midnightRates === undefined) { this.midnightRates = null; }
            this.fees = fees;
            this.exchange = exchange;
            this.midnightRates = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(midnightRates));
        }

        public exchangeRatesCb(): (p1: ExchangeRateSet) => void {
            return ;
        }

        public feeSchedulesCb(): (p1: CurrentAndNextFeeSchedule) => void {
            return ;
        }
    }
    CurrencyCallbacks["__class"] = "com.grame.services.files.sysfiles.CurrencyCallbacks";

}

