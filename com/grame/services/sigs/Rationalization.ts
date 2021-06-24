/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs {
    export class Rationalization {
        static log: Logger; public static log_$LI$(): Logger { if (Rationalization.log == null) { Rationalization.log = ; }  return Rationalization.log; }

        public static IN_HANDLE_SUMMARY_FACTORY: com.grame.services.sigs.order.SigStatusOrderResultFactory; public static IN_HANDLE_SUMMARY_FACTORY_$LI$(): com.grame.services.sigs.order.SigStatusOrderResultFactory { if (Rationalization.IN_HANDLE_SUMMARY_FACTORY == null) { Rationalization.IN_HANDLE_SUMMARY_FACTORY = new com.grame.services.sigs.order.SigStatusOrderResultFactory(true); }  return Rationalization.IN_HANDLE_SUMMARY_FACTORY; }

        /*private*/ syncVerifier: com.grame.services.sigs.verification.SyncVerifier;

        /*private*/ txnSigs: Array<TransactionSignature>;

        /*private*/ txnAccessor: com.grame.services.utils.TxnAccessor;

        /*private*/ keyOrderer: com.grame.services.sigs.order.grameSigningOrder;

        /*private*/ sigsProvider: com.grame.services.sigs.sourcing.PubKeyToSigBytesProvider;

        /*private*/ sigFactory: com.grame.services.sigs.factories.TxnScopedPlatformSigFactory;

        public constructor(txnAccessor: com.grame.services.utils.TxnAccessor, syncVerifier: com.grame.services.sigs.verification.SyncVerifier, keyOrderer: com.grame.services.sigs.order.grameSigningOrder, sigsProvider: com.grame.services.sigs.sourcing.PubKeyToSigBytesProvider, sigFactoryCreator: (p1: com.grame.services.utils.TxnAccessor) => com.grame.services.sigs.factories.TxnScopedPlatformSigFactory) {
            if (this.syncVerifier === undefined) { this.syncVerifier = null; }
            if (this.txnSigs === undefined) { this.txnSigs = null; }
            if (this.txnAccessor === undefined) { this.txnAccessor = null; }
            if (this.keyOrderer === undefined) { this.keyOrderer = null; }
            if (this.sigsProvider === undefined) { this.sigsProvider = null; }
            if (this.sigFactory === undefined) { this.sigFactory = null; }
            this.txnAccessor = txnAccessor;
            this.syncVerifier = syncVerifier;
            this.keyOrderer = keyOrderer;
            this.sigsProvider = sigsProvider;
            this.txnSigs = ;
            this.sigFactory = (target => (typeof target === 'function') ? target(txnAccessor) : (<any>target).apply(txnAccessor))(sigFactoryCreator);
        }

        public execute(): com.grame.services.legacy.crypto.SignatureStatus {
            const realPayerSigs: Array<TransactionSignature> = new Array<>();
            const realOtherPartySigs: Array<TransactionSignature> = new Array<>();
            const payerStatus: ;
            if (!/* Enum.equals */(<any>(com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS) === <any>())){
                if (){
                }
                return payerStatus;
            }
            const otherPartiesStatus: ;
            if (!/* Enum.equals */(<any>(com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS) === <any>())){
                if (){
                }
                return otherPartiesStatus;
            }
            const rationalizedPayerSigs: ;
            const rationalizedOtherPartySigs: ;
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(rationalizedPayerSigs) == realPayerSigs || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(rationalizedOtherPartySigs) == realOtherPartySigs){
                return this.syncSuccess();
            }
            return this.asyncSuccess();
        }

        /*private*/ rationalize(realSigs: Array<TransactionSignature>, startingAt: number): Array<TransactionSignature> {
            try {
                const candidateSigs: ;
                if (com.grame.services.sigs.factories.PlatformSigFactory.allVaryingMaterialEquals(candidateSigs, realSigs) && this.allStatusesAreKnown(candidateSigs)){
                    return;
                }
            } catch(ignore) {
            }
            this.syncVerifier.verifySync(realSigs);
            return;
        }

        /*private*/ allStatusesAreKnown(sigs: Array<TransactionSignature>): boolean {
            return ;
        }

        /*private*/ expandIn(target: Array<TransactionSignature>, sigsFn: (p1: Transaction) => com.grame.services.sigs.sourcing.PubKeyToSigBytes, keysFn: (p1: TransactionBody, p2: com.grame.services.sigs.order.SigStatusOrderResultFactory) => com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus>): com.grame.services.legacy.crypto.SignatureStatus {
            const orderResult: com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> = (target => (typeof target === 'function') ? target(this.txnAccessor.getTxn(), Rationalization.IN_HANDLE_SUMMARY_FACTORY_$LI$()) : (<any>target).apply(this.txnAccessor.getTxn(), Rationalization.IN_HANDLE_SUMMARY_FACTORY_$LI$()))(keysFn);
            if (orderResult.hasErrorReport()){
                return orderResult.getErrorReport();
            }
            const creationResult: com.grame.services.sigs.PlatformSigsCreationResult = com.grame.services.sigs.PlatformSigOps.createEd25519PlatformSigsFrom(orderResult.getOrderedKeys(), (target => (typeof target === 'function') ? target(this.txnAccessor.getBackwardCompatibleSignedTxn()) : (<any>target).apply(this.txnAccessor.getBackwardCompatibleSignedTxn()))(sigsFn), this.sigFactory);
            if (creationResult.hasFailed()){
                return creationResult.asSignatureStatus(true, this.txnAccessor.getTxnId());
            }
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(target, creationResult.getPlatformSigs());
            return com.grame.services.sigs.utils.StatusUtils.successFor(true, this.txnAccessor);
        }

        /*private*/ syncSuccess(): com.grame.services.legacy.crypto.SignatureStatus {
            return this.success(com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS_VERIFY_SYNC);
        }

        /*private*/ asyncSuccess(): com.grame.services.legacy.crypto.SignatureStatus {
            return this.success(com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS_VERIFY_ASYNC);
        }

        /*private*/ success(code: com.grame.services.legacy.crypto.SignatureStatusCode): com.grame.services.legacy.crypto.SignatureStatus {
            return new com.grame.services.legacy.crypto.SignatureStatus(code, ResponseCodeEnum.OK, true, , null, null, null, null);
        }
    }
    Rationalization["__class"] = "com.grame.services.sigs.Rationalization";

}

