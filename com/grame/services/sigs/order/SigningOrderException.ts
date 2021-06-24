/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.order {
    /**
     * Exception containing the result of a failed attempt to list, in canonical order, the
     * grame keys that must have active signatures for some gRPC transaction to be valid.
     * 
     * @author AmilyTech
     * @see grameSigningOrder
     * @param {com.grame.services.sigs.order.SigningOrderResult} errorReport
     * @class
     * @extends Error
     */
    export class SigningOrderException extends Error {
        /*private*/ errorReport: com.grame.services.sigs.order.SigningOrderResult<any>;

        public constructor(errorReport: com.grame.services.sigs.order.SigningOrderResult<any>) {
            super();
            (<any>Object).setPrototypeOf(this, SigningOrderException.prototype);
            if (this.errorReport === undefined) { this.errorReport = null; }
            this.errorReport = errorReport;
        }

        public getErrorReport(): com.grame.services.sigs.order.SigningOrderResult<any> {
            return this.errorReport;
        }
    }
    SigningOrderException["__class"] = "com.grame.services.sigs.order.SigningOrderException";
    SigningOrderException["__interfaces"] = ["java.io.Serializable"];


}

