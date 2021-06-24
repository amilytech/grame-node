/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.verification {
    /**
     * Encapsulates logic to validate a transaction has the necessary
     * signatures to pass precheck. In particular,
     * <ul>
     * <li>All transactions must have a valid payer signature; and,</li>
     * <li>CryptoTransfer transactions identified as query payments must
     * have valid signatures for all referenced accounts.</li>
     * </ul>
     * Note that this component verifies cryptographic signatures synchronously.
     * 
     * @author AmilyTech
     * @param {*} syncVerifier
     * @param {com.grame.services.sigs.verification.PrecheckKeyReqs} precheckKeyReqs
     * @param {*} provider
     * @class
     */
    export class PrecheckVerifier {
        /*private*/ syncVerifier: com.grame.services.sigs.verification.SyncVerifier;

        /*private*/ precheckKeyReqs: com.grame.services.sigs.verification.PrecheckKeyReqs;

        /*private*/ provider: com.grame.services.sigs.sourcing.PubKeyToSigBytesProvider;

        static log: Logger; public static log_$LI$(): Logger { if (PrecheckVerifier.log == null) { PrecheckVerifier.log = ; }  return PrecheckVerifier.log; }

        public constructor(syncVerifier: com.grame.services.sigs.verification.SyncVerifier, precheckKeyReqs: com.grame.services.sigs.verification.PrecheckKeyReqs, provider: com.grame.services.sigs.sourcing.PubKeyToSigBytesProvider) {
            if (this.syncVerifier === undefined) { this.syncVerifier = null; }
            if (this.precheckKeyReqs === undefined) { this.precheckKeyReqs = null; }
            if (this.provider === undefined) { this.provider = null; }
            this.provider = provider;
            this.syncVerifier = syncVerifier;
            this.precheckKeyReqs = precheckKeyReqs;
        }

        /**
         * Tests if a signed gRPC transaction has the necessary (valid) signatures to
         * be allowed through precheck.
         * 
         * @param {com.grame.services.utils.SignedTxnAccessor} accessor convenience interface to the signed txn.
         * @return {boolean} a flag giving the verdict on the precheck sigs for the txn.
         * @throws Exception if the txn doesn't reference valid keys or has malformed sigs.
         */
        public hasNecessarySignatures(accessor: com.grame.services.utils.SignedTxnAccessor): boolean {
            try {
                const reqKeys: Array<com.grame.services.legacy.core.jproto.JKey> = this.precheckKeyReqs.getRequiredKeys(accessor.getTxn());
                const availSigs: Array<TransactionSignature> = this.getAvailSigs(reqKeys, accessor);
                this.syncVerifier.verifySync(availSigs);
                const sigsFn: (p1: number[]) => TransactionSignature = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(com.grame.services.keys.grameKeyActivation.pkToSigMapFrom(availSigs)));
                return reqKeys.stream().allMatch(((sigsFn) => {
                    return (key) => com.grame.services.keys.grameKeyActivation.isActive(key, sigsFn, com.grame.services.keys.grameKeyActivation.ONLY_IF_SIG_IS_VALID_$LI$())
                })(sigsFn));
            } catch(ignore) {
                return false;
            }
        }

        /*private*/ getAvailSigs(reqKeys: Array<com.grame.services.legacy.core.jproto.JKey>, accessor: com.grame.services.utils.SignedTxnAccessor): Array<TransactionSignature> {
            const sigBytes: com.grame.services.sigs.sourcing.PubKeyToSigBytes = this.provider.allPartiesSigBytesFor(accessor.getBackwardCompatibleSignedTxn());
            const sigFactory: com.grame.services.sigs.factories.TxnScopedPlatformSigFactory = new com.grame.services.sigs.factories.BodySigningSigFactory(accessor);
            const creationResult: com.grame.services.sigs.PlatformSigsCreationResult = com.grame.services.sigs.PlatformSigOps.createEd25519PlatformSigsFrom(reqKeys, sigBytes, sigFactory);
            if (creationResult.hasFailed()){
                throw creationResult.getTerminatingEx();
            } else {
                return creationResult.getPlatformSigs();
            }
        }
    }
    PrecheckVerifier["__class"] = "com.grame.services.sigs.verification.PrecheckVerifier";

}

