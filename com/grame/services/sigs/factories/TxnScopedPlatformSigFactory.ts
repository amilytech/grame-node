/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.factories {
    /**
     * Defines a type of {@link com.swirlds.common.crypto.TransactionSignature} factory that does not
     * require the {@code byte[]} data to sign, because it is assumed to be scoped to a gRPC transaction.
     * 
     * @author AmilyTech
     * @class
     */
    export interface TxnScopedPlatformSigFactory {
        /**
         * Returns a {@link com.swirlds.common.crypto.TransactionSignature} for the scoped transaction.
         * 
         * @param {ByteString} publicKey
         * the public key to use in creating the platform sig.
         * @param {ByteString} sigBytes
         * the cryptographic signature to use in creating the platform sig.
         * @return {TransactionSignature} a platform sig for the scoped transaction.
         */
        create(publicKey: ByteString, sigBytes: ByteString): TransactionSignature;
    }
}

