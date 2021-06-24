/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs {
    /**
     * Provides two operations that act in-place on the {@link Signature} list of a
     * {@link com.swirlds.common.Transaction} whose contents are known to be a valid
     * grame gRPC {@link Transaction}.
     * 
     * <p>These operations allow grame Services use the Platform to efficiently
     * verify <i>many</i> of the cryptographic signatures in its gRPC transactions. (There
     * are still cases where grame Services does a single-threaded verification itself.)
     * 
     * <p>The two operations happen, in order, for each platform txn added to the grame,
     * and have roughly these behaviors:
     * <ol>
     * <li> First, {@code expandIn} checks which grame keys must have active signatures
     * for the wrapped gRPC txn to be valid; and creates the cryptographic signatures
     * at the bases of the signing hierarchies for these keys. It then asks the
     * Platform to efficiently verify these cryptographic signatures, by setting them
     * in the sigs list of the platform txn. </li>
     * <li> Next, {@code rationalizeIn} checks if the relevant grame keys have changed
     * since the call to {@code expandIn}. If they have changed, it replays the logic
     * from {@code expandIn} to update the sigs list of the platform txn. In any case,
     * {@code rationalizeIn} then uses synchronous verifications to ensure no sig in the list
     * is left with an {@code UNKNOWN} verification status. </li>
     * </ol>
     * The behavior on exceptional conditions varies a bit between {@code expandIn} and
     * {@code rationalizeIn}, and is given in detail below.
     * 
     * @author AmilyTech
     * @see JKey
     * @class
     */
    export class grameToPlatformSigOps {
        public static PRE_HANDLE_SUMMARY_FACTORY: com.grame.services.sigs.order.SigStatusOrderResultFactory; public static PRE_HANDLE_SUMMARY_FACTORY_$LI$(): com.grame.services.sigs.order.SigStatusOrderResultFactory { if (grameToPlatformSigOps.PRE_HANDLE_SUMMARY_FACTORY == null) { grameToPlatformSigOps.PRE_HANDLE_SUMMARY_FACTORY = new com.grame.services.sigs.order.SigStatusOrderResultFactory(false); }  return grameToPlatformSigOps.PRE_HANDLE_SUMMARY_FACTORY; }

        /**
         * Try to set the {@link Signature} list on the accessible platform txn to exactly
         * the base-level signatures of the signing hierarchy for each grame
         * {@link JKey} required to sign the wrapped gRPC txn.
         * (Signatures for the payer always come first.)
         * 
         * <p>Exceptional conditions are treated as follows:
         * <ul>
         * <li>If an error occurs while determining the grame signing keys,
         * abort processing and return a {@link SignatureStatus} representing this
         * error.</li>
         * <li>If an error occurs while creating the platform {@link Signature}
         * objects for either the payer or the entities in non-payer roles, ignore
         * it silently. </li>
         * </ul>
         * 
         * @param {com.grame.services.utils.PlatformTxnAccessor} txnAccessor the accessor for the platform txn.
         * @param {com.grame.services.sigs.order.grameSigningOrder} keyOrderer facility for listing grame keys required to sign the gRPC txn.
         * @param {*} sigsProvider source of crypto sigs for the simple keys in the grame key leaves.
         * @return {com.grame.services.legacy.crypto.SignatureStatus} a representation of the outcome.
         * @param {*} sigFactoryCreator
         */
        public static expandIn(txnAccessor: com.grame.services.utils.PlatformTxnAccessor, keyOrderer: com.grame.services.sigs.order.grameSigningOrder, sigsProvider: com.grame.services.sigs.sourcing.PubKeyToSigBytesProvider, sigFactoryCreator: (p1: com.grame.services.utils.SignedTxnAccessor) => com.grame.services.sigs.factories.TxnScopedPlatformSigFactory): com.grame.services.legacy.crypto.SignatureStatus {
            return new com.grame.services.sigs.Expansion(txnAccessor, keyOrderer, sigsProvider, <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(sigFactoryCreator))).execute();
        }

        /**
         * First, ensure the {@link Signature} list on the accessible platform txn contains
         * exactly the base-level signatures of the signing hierarchy for each grame
         * {@link JKey} required to sign the wrapped gRPC txn.
         * Second, ensure the {@link VerificationStatus} for each of these base-level
         * signatures is not {@code UNKNOWN}, performing a synchronous verification if
         * necessary.
         * 
         * <p>Exceptional conditions are treated as follows:
         * <ul>
         * <li>If an error occurs while determining the grame signing keys,
         * abort processing and return a {@link SignatureStatus} representing this
         * error.</li>
         * <li>If an error occurs while creating the platform {@link Signature}
         * objects for either the payer or the entities in non-payer roles, abort
         * processing and return a {@link SignatureStatus} representing this error.</li>
         * </ul>
         * 
         * @param {*} txnAccessor the accessor for the platform txn.
         * @param {*} syncVerifier facility for synchronously verifying a cryptographic signature.
         * @param {com.grame.services.sigs.order.grameSigningOrder} keyOrderer facility for listing grame keys required to sign the gRPC txn.
         * @param {*} sigsProvider source of crypto sigs for the simple keys in the grame key leaves.
         * @return {com.grame.services.legacy.crypto.SignatureStatus} a representation of the outcome.
         * @param {*} sigFactoryCreator
         */
        public static rationalizeIn(txnAccessor: com.grame.services.utils.TxnAccessor, syncVerifier: com.grame.services.sigs.verification.SyncVerifier, keyOrderer: com.grame.services.sigs.order.grameSigningOrder, sigsProvider: com.grame.services.sigs.sourcing.PubKeyToSigBytesProvider, sigFactoryCreator: (p1: com.grame.services.utils.TxnAccessor) => com.grame.services.sigs.factories.TxnScopedPlatformSigFactory): com.grame.services.legacy.crypto.SignatureStatus {
            return new com.grame.services.sigs.Rationalization(txnAccessor, syncVerifier, keyOrderer, sigsProvider, <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(sigFactoryCreator))).execute();
        }
    }
    grameToPlatformSigOps["__class"] = "com.grame.services.sigs.grameToPlatformSigOps";

}

