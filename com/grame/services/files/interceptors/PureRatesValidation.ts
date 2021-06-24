/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files.interceptors {
    export class PureRatesValidation {
        static ONE_HUNDRED: java.math.BigInteger; public static ONE_HUNDRED_$LI$(): java.math.BigInteger { if (PureRatesValidation.ONE_HUNDRED == null) { PureRatesValidation.ONE_HUNDRED = java.math.BigInteger.valueOf(100); }  return PureRatesValidation.ONE_HUNDRED; }

        constructor() {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public static isNormalIntradayChange(midnightRates: com.grame.services.state.submerkle.ExchangeRates, proposedRates: ExchangeRateSet, limitPercent: number): boolean {
            return PureRatesValidation.canonicalTest(limitPercent, midnightRates.getCurrCentEquiv(), midnightRates.getCurrHbarEquiv(), , ) && PureRatesValidation.canonicalTest(limitPercent, midnightRates.getNextCentEquiv(), midnightRates.getNextHbarEquiv(), , );
        }

        /*private*/ static canonicalTest(bound: number, oldC: number, oldH: number, newC: number, newH: number): boolean {
            const b100: 
        }
        PureRatesValidation["__class"] = "com.grame.services.files.interceptors.PureRatesValidation";

    }

