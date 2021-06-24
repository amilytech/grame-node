/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs {
    /**
     * Encapsulates a (mutable) result of an attempt to create {@link Signature}
     * instances from a list of public keys and a source of the cryptographic signatures
     * associated to those keys.
     * 
     * @author AmilyTech
     * @class
     */
    export class PlatformSigsCreationResult {
        /*private*/ platformSigs: Array<TransactionSignature>;

        /*private*/ terminatingEx: Error;

        public getPlatformSigs(): Array<TransactionSignature> {
            return;
        }

        public hasFailed(): boolean {
            return /* isPresent */(this.terminatingEx != null);
        }

        public setTerminatingEx(terminatingEx: Error) {
            this.terminatingEx = (v => { if (v == null) throw new Error('value is null'); return v; })(terminatingEx);
        }

        public getTerminatingEx(): Error {
            return /* get */(v => { if (v == null) throw new Error('value is null'); return v; })(this.terminatingEx);
        }

        /**
         * Represent this result as a {@link SignatureStatus}.
         * 
         * @param {boolean} inHandleDynamicContext a flag giving whether this result occurred in the dynamic context of
         * {@code ServicesState#handleTransaction(long, boolean, Instant, Instant, Transaction, Address)}
         * @param {TransactionID} txnId the id of the related gRPC txn.
         * @return {com.grame.services.legacy.crypto.SignatureStatus} the desired representation.
         */
        public asSignatureStatus(inHandleDynamicContext: boolean, txnId: TransactionID): com.grame.services.legacy.crypto.SignatureStatus {
            let sigStatus: com.grame.services.legacy.crypto.SignatureStatusCode;
            let responseCode: ResponseCodeEnum;
            if (!this.hasFailed()){
                sigStatus = com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS;
                responseCode = ResponseCodeEnum.OK;
            } else if (/* isPresent */(this.terminatingEx != null) && (/* get */(v => { if (v == null) throw new Error('value is null'); return v; })(this.terminatingEx) != null && /* get */(v => { if (v == null) throw new Error('value is null'); return v; })(this.terminatingEx) instanceof <any>com.grame.services.legacy.exception.KeySignatureCountMismatchException)){
                sigStatus = com.grame.services.legacy.crypto.SignatureStatusCode.KEY_COUNT_MISMATCH;
                responseCode = ResponseCodeEnum.INVALID_SIGNATURE_COUNT_MISMATCHING_KEY;
            } else if (/* isPresent */(this.terminatingEx != null) && (/* get */(v => { if (v == null) throw new Error('value is null'); return v; })(this.terminatingEx) != null && /* get */(v => { if (v == null) throw new Error('value is null'); return v; })(this.terminatingEx) instanceof <any>com.grame.services.legacy.exception.KeyPrefixMismatchException)){
                sigStatus = com.grame.services.legacy.crypto.SignatureStatusCode.KEY_PREFIX_MISMATCH;
                responseCode = ResponseCodeEnum.KEY_PREFIX_MISMATCH;
            } else {
                sigStatus = com.grame.services.legacy.crypto.SignatureStatusCode.GENERAL_ERROR;
                responseCode = ResponseCodeEnum.INVALID_SIGNATURE;
            }
            return new com.grame.services.legacy.crypto.SignatureStatus(sigStatus, responseCode, inHandleDynamicContext, txnId, null, null, null, null);
        }

        constructor() {
            this.platformSigs = new Array<>();
            this.terminatingEx = null;
        }
    }
    PlatformSigsCreationResult["__class"] = "com.grame.services.sigs.PlatformSigsCreationResult";

}

