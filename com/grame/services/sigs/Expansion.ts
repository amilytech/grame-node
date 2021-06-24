/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs {
    export class Expansion {
        static log: Logger; public static log_$LI$(): Logger { if (Expansion.log == null) { Expansion.log = ; }  return Expansion.log; }

        /*private*/ txnAccessor: com.grame.services.utils.PlatformTxnAccessor;

        /*private*/ keyOrderer: com.grame.services.sigs.order.grameSigningOrder;

        /*private*/ sigsProvider: com.grame.services.sigs.sourcing.PubKeyToSigBytesProvider;

        /*private*/ sigFactory: com.grame.services.sigs.factories.TxnScopedPlatformSigFactory;

        public constructor(txnAccessor: com.grame.services.utils.PlatformTxnAccessor, keyOrderer: com.grame.services.sigs.order.grameSigningOrder, sigsProvider: com.grame.services.sigs.sourcing.PubKeyToSigBytesProvider, sigFactoryCreator: (p1: com.grame.services.utils.SignedTxnAccessor) => com.grame.services.sigs.factories.TxnScopedPlatformSigFactory) {
            if (this.txnAccessor === undefined) { this.txnAccessor = null; }
            if (this.keyOrderer === undefined) { this.keyOrderer = null; }
            if (this.sigsProvider === undefined) { this.sigsProvider = null; }
            if (this.sigFactory === undefined) { this.sigFactory = null; }
            this.txnAccessor = txnAccessor;
            this.keyOrderer = keyOrderer;
            this.sigsProvider = sigsProvider;
            this.sigFactory = (target => (typeof target === 'function') ? target(txnAccessor) : (<any>target).apply(txnAccessor))(sigFactoryCreator);
        }

        public execute(): com.grame.services.legacy.crypto.SignatureStatus {
            const payerStatus: ;
            if (com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS != (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))()){
                if (){
                }
                return payerStatus;
            }
            const otherStatus: ;
            if (com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS != (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))()){
                if (){
                }
            }
            return otherStatus;
        }

        /*private*/ expand(sigsFn: (p1: Transaction) => com.grame.services.sigs.sourcing.PubKeyToSigBytes, keysFn: (p1: TransactionBody, p2: com.grame.services.sigs.order.SigStatusOrderResultFactory) => com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus>): com.grame.services.legacy.crypto.SignatureStatus {
            const orderResult: ;
            if (){
                return ;
            }
            const creationResult: ;
            if (!){
            }
            return com.grame.services.sigs.utils.StatusUtils.successFor(false, this.txnAccessor);
        }
    }
    Expansion["__class"] = "com.grame.services.sigs.Expansion";

}

