/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.factories {
    /**
     * A trivial convenience implementation of a {@link TxnScopedPlatformSigFactory} that
     * creates {@link com.swirlds.common.crypto.TransactionSignature} objects representing ed25519 sigs
     * of the body bytes for a gRPC transaction.
     * 
     * @author AmilyTech
     * @param {*} accessor
     * @class
     */
    export class BodySigningSigFactory implements com.grame.services.sigs.factories.TxnScopedPlatformSigFactory {
        /*private*/ accessor: com.grame.services.utils.TxnAccessor;

        public constructor(accessor: com.grame.services.utils.TxnAccessor) {
            if (this.accessor === undefined) { this.accessor = null; }
            this.accessor = accessor;
        }

        /**
         * 
         * @param {ByteString} publicKey
         * @param {ByteString} sigBytes
         * @return {TransactionSignature}
         */
        public create(publicKey: ByteString, sigBytes: ByteString): TransactionSignature {
            return com.grame.services.sigs.factories.PlatformSigFactory.createEd25519(, , this.accessor.getTxnBytes());
        }
    }
    BodySigningSigFactory["__class"] = "com.grame.services.sigs.factories.BodySigningSigFactory";
    BodySigningSigFactory["__interfaces"] = ["com.grame.services.sigs.factories.TxnScopedPlatformSigFactory"];


}

