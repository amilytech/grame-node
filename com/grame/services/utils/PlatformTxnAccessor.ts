/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.utils {
    /**
     * Encapsulates access to several commonly referenced parts of a {@link com.swirlds.common.Transaction}
     * whose contents is <i>supposed</i> to be a grame Services gRPC {@link Transaction}. (The constructor of this
     * class immediately tries to parse the {@code byte[]} contents of the txn, and propagates any protobuf
     * exceptions encountered.)
     * 
     * @author AmilyTech
     * @param {common.Transaction} platformTxn
     * @class
     * @extends com.grame.services.utils.SignedTxnAccessor
     */
    export class PlatformTxnAccessor extends com.grame.services.utils.SignedTxnAccessor {
        /*private*/ platformTxn: com.swirlds.common.Transaction;

        public constructor(platformTxn: com.swirlds.common.Transaction) {
            super();
            if (this.platformTxn === undefined) { this.platformTxn = null; }
            this.platformTxn = platformTxn;
        }

        /**
         * Convenience static factory for a txn whose {@code byte[]} contents are <i>certain</i>
         * to be a valid serialized gRPC txn.
         * 
         * @param {common.Transaction} platformTxn the txn to provide accessors for.
         * @return {com.grame.services.utils.PlatformTxnAccessor} an initialized accessor.
         */
        public static uncheckedAccessorFor(platformTxn: com.swirlds.common.Transaction): PlatformTxnAccessor {
            try {
                return new PlatformTxnAccessor(platformTxn);
            } catch(ignore) {
                throw Object.defineProperty(new Error("Unchecked accessor construction must get valid gRPC bytes!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }

        public getPlatformTxn(): com.swirlds.common.Transaction {
            return;
        }
    }
    PlatformTxnAccessor["__class"] = "com.grame.services.utils.PlatformTxnAccessor";
    PlatformTxnAccessor["__interfaces"] = ["com.grame.services.utils.TxnAccessor"];


}

