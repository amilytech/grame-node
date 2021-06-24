/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.utils {
    /**
     * Provides static factories of {@link SignatureStatus} instances representing various
     * outcomes of signature processing.
     * 
     * @author AmilyTech
     * @class
     */
    export class StatusUtils {
        /**
         * Creates a {@link SignatureStatus} representing success in some aspect of sig processing.
         * 
         * @param {boolean} inHandleCtx flag indicating if success occurred in the dynamic context of
         * {@code handleTransaction}.
         * @param {*} platformTxn the platform txn experiencing success.
         * @return {com.grame.services.legacy.crypto.SignatureStatus} the desired representation of success.
         */
        public static successFor(inHandleCtx: boolean, platformTxn: com.grame.services.utils.TxnAccessor): com.grame.services.legacy.crypto.SignatureStatus {
            return new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS, ResponseCodeEnum.OK, inHandleCtx, platformTxn.getTxnId(), null, null, null, null);
        }
    }
    StatusUtils["__class"] = "com.grame.services.sigs.utils.StatusUtils";

}

