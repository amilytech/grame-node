/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.verification {
    /**
     * Encapsulates logic to determine which grame keys need to have valid
     * signatures for a transaction to pass precheck.
     * 
     * @author AmilyTech
     * @param {com.grame.services.sigs.order.grameSigningOrder} keyOrder
     * @param {com.grame.services.sigs.order.grameSigningOrder} keyOrderModuloRetry
     * @param {*} isQueryPayment
     * @class
     */
    export class PrecheckKeyReqs {
        /*private*/ keyOrder: com.grame.services.sigs.order.grameSigningOrder;

        /*private*/ keyOrderModuloRetry: com.grame.services.sigs.order.grameSigningOrder;

        /*private*/ isQueryPayment: (p1: TransactionBody) => boolean;

        public constructor(keyOrder: com.grame.services.sigs.order.grameSigningOrder, keyOrderModuloRetry: com.grame.services.sigs.order.grameSigningOrder, isQueryPayment: (p1: TransactionBody) => boolean) {
            if (this.keyOrder === undefined) { this.keyOrder = null; }
            if (this.keyOrderModuloRetry === undefined) { this.keyOrderModuloRetry = null; }
            if (this.isQueryPayment === undefined) { this.isQueryPayment = null; }
            this.keyOrder = keyOrder;
            this.keyOrderModuloRetry = keyOrderModuloRetry;
            this.isQueryPayment = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['test'] ? funcInst['test'] : funcInst) .call(funcInst, arg0)})(isQueryPayment));
        }

        /**
         * Returns a list of grame keys which must have valid signatures
         * for the given {@link TransactionBody} to pass precheck.
         * 
         * @param {TransactionBody} txn a gRPC txn.
         * @return {com.grame.services.legacy.core.jproto.JKey[]} a list of keys precheck requires to have active signatures.
         * @throws Exception if the txn does not reference valid keys.
         */
        public getRequiredKeys(txn: TransactionBody): Array<com.grame.services.legacy.core.jproto.JKey> {
            const keys: Array<com.grame.services.legacy.core.jproto.JKey> = <any>([]);
            this.addPayerKeys(txn, keys);
            if ((target => (typeof target === 'function') ? target(txn) : (<any>target).test(txn))(this.isQueryPayment)){
                this.addQueryPaymentKeys(txn, keys);
            }
            return keys;
        }

        /*private*/ addPayerKeys(txn: TransactionBody, keys: Array<com.grame.services.legacy.core.jproto.JKey>) {
            const payerResult: com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> = this.keyOrder.keysForPayer<any>(txn, com.grame.services.sigs.grameToPlatformSigOps.PRE_HANDLE_SUMMARY_FACTORY_$LI$());
            if (payerResult.hasErrorReport()){
                throw new com.grame.services.sigs.verification.InvalidPayerAccountException();
            }
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(keys, payerResult.getOrderedKeys());
        }

        /*private*/ addQueryPaymentKeys(txn: TransactionBody, keys: Array<com.grame.services.legacy.core.jproto.JKey>) {
            const otherResult: com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> = this.keyOrderModuloRetry.keysForOtherParties<any>(txn, com.grame.services.sigs.grameToPlatformSigOps.PRE_HANDLE_SUMMARY_FACTORY_$LI$());
            if (otherResult.hasErrorReport()){
                const error: com.grame.services.legacy.crypto.SignatureStatus = otherResult.getErrorReport();
                if (error.hasAccountId()){
                    throw new com.grame.services.legacy.exception.InvalidAccountIDException(error.getAccountId(), Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object'] }));
                } else {
                    throw Object.defineProperty(new Error(error.toString()), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
                }
            }
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(keys, otherResult.getOrderedKeys());
        }
    }
    PrecheckKeyReqs["__class"] = "com.grame.services.sigs.verification.PrecheckKeyReqs";

}

