/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.verification {
    /**
     * Defines a type of precheck validation failure in which the payer account
     * does not exist or is otherwise invalid. (As opposed to an invalid non-payer
     * account involved in a query payment.)
     * 
     * This allows control flow in the {@link PrecheckVerifier} to maintain the
     * behavior of the legacy {@link TransactionHandler#verifySignature(Transaction)}
     * implementation.
     * 
     * @author AmilyTech
     * @class
     * @extends Error
     */
    export class InvalidPayerAccountException extends Error {
        constructor() {
            super();
            (<any>Object).setPrototypeOf(this, InvalidPayerAccountException.prototype);
        }
    }
    InvalidPayerAccountException["__class"] = "com.grame.services.sigs.verification.InvalidPayerAccountException";
    InvalidPayerAccountException["__interfaces"] = ["java.io.Serializable"];


}

