/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.verification {
    /**
     * Defines a type able to synchronously verify {@link com.swirlds.common.crypto.TransactionSignature} instances.
     * (In particular, able to resolve their {@link TransactionSignature#getSignatureStatus()} accessor to a value
     * other than {@link com.swirlds.common.crypto.VerificationStatus}.)
     * 
     * @author AmilyTech
     * @class
     */
    export interface SyncVerifier {
        /**
         * Synchronously verify a list of {@link TransactionSignature} objects <b>in-place</b>.
         * 
         * @param {TransactionSignature[]} unknownSigs
         * the sigs to verify.
         */
        verifySync(unknownSigs: Array<TransactionSignature>);
    }
}

