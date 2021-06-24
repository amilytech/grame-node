/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.order {
    /**
     * Summarize the outcome of trying to list, in canonical order, the grame keys
     * that must have active signatures for some gRCP transaction to be valid.
     * 
     * The main purpose of this class is to let calls to methods of {@link grameSigningOrder}
     * be unchecked. This makes it easier to read and understand client code.
     * 
     * @param <T> the type of error report that may be contained in this summary.
     * @author AmilyTech
     * @param {com.grame.services.legacy.core.jproto.JKey[]} orderedKeys
     * @param {java.util.Optional} errorReport
     * @class
     */
    export class SigningOrderResult<T> {
        /*private*/ orderedKeys: Array<com.grame.services.legacy.core.jproto.JKey>;

        /*private*/ errorReport: T;

        static NO_KNOWN_KEYS: SigningOrderResult<any>; public static NO_KNOWN_KEYS_$LI$(): SigningOrderResult<any> { if (SigningOrderResult.NO_KNOWN_KEYS == null) { SigningOrderResult.NO_KNOWN_KEYS = <any>(new SigningOrderResult<any>(java.util.Collections.EMPTY_LIST)); }  return SigningOrderResult.NO_KNOWN_KEYS; }

        public static noKnownKeys<T>(): SigningOrderResult<T> {
            return <SigningOrderResult<T>>SigningOrderResult.NO_KNOWN_KEYS_$LI$();
        }

        public constructor(orderedKeys?: any, errorReport?: any) {
            if (((orderedKeys != null && (orderedKeys instanceof Array)) || orderedKeys === null) && ((errorReport != null && errorReport instanceof <any>java.util.Optional) || errorReport === null)) {
                let __args = arguments;
                if (this.orderedKeys === undefined) { this.orderedKeys = null; } 
                if (this.errorReport === undefined) { this.errorReport = null; } 
                this.orderedKeys = orderedKeys;
                this.errorReport = errorReport;
            } else if (((orderedKeys != null && (orderedKeys instanceof Array)) || orderedKeys === null) && errorReport === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let errorReport: any = null;
                    if (this.orderedKeys === undefined) { this.orderedKeys = null; } 
                    if (this.errorReport === undefined) { this.errorReport = null; } 
                    this.orderedKeys = orderedKeys;
                    this.errorReport = errorReport;
                }
                if (this.orderedKeys === undefined) { this.orderedKeys = null; } 
                if (this.errorReport === undefined) { this.errorReport = null; } 
            } else if (((orderedKeys != null) || orderedKeys === null) && errorReport === undefined) {
                let __args = arguments;
                let errorReport: any = __args[0];
                {
                    let __args = arguments;
                    let orderedKeys: any = java.util.Collections.EMPTY_LIST;
                    let errorReport: any = (v => { if (v == null) throw new Error('value is null'); return v; })(__args[1]);
                    if (this.orderedKeys === undefined) { this.orderedKeys = null; } 
                    if (this.errorReport === undefined) { this.errorReport = null; } 
                    this.orderedKeys = orderedKeys;
                    this.errorReport = errorReport;
                }
                if (this.orderedKeys === undefined) { this.orderedKeys = null; } 
                if (this.errorReport === undefined) { this.errorReport = null; } 
            } else throw new Error('invalid overload');
        }

        public hasKnownOrder(): boolean {
            return !/* isPresent */(this.errorReport != null);
        }

        public hasErrorReport(): boolean {
            return /* isPresent */(this.errorReport != null);
        }

        public getOrderedKeys(): Array<com.grame.services.legacy.core.jproto.JKey> {
            return this.orderedKeys;
        }

        public getPayerKey(): com.grame.services.legacy.core.jproto.JKey {
            return /* get */this.orderedKeys[0];
        }

        public getErrorReport(): T {
            return /* get */(v => { if (v == null) throw new Error('value is null'); return v; })(this.errorReport);
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            if (this.hasErrorReport()){
                return ;
            } else {
                return ;
            }
        }
    }
    SigningOrderResult["__class"] = "com.grame.services.sigs.order.SigningOrderResult";

}

