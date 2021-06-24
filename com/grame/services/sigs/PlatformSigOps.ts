/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs {
    /**
     * Provides static methods to work with {@link com.swirlds.common.crypto.Signature} objects.
     * 
     * @author AmilyTech
     * @class
     */
    export class PlatformSigOps {
        /**
         * Return the result of trying to create one or more platform sigs using a given
         * {@link TxnScopedPlatformSigFactory}, where this {@code factory} should be invoked for
         * each public key in a left-to-right DFS traversal of the simple keys from a list of
         * grame keys, using signature bytes from a given {@link PubKeyToSigBytes}.
         * 
         * @param {com.grame.services.legacy.core.jproto.JKey[]} pubKeys
         * a list of grame keys to traverse for public keys.
         * @param {*} sigBytesFn
         * a source of cryptographic signatures to associate to the public keys.
         * @param {*} factory
         * a factory to convert public keys and cryptographic sigs into sigs.
         * @return {com.grame.services.sigs.PlatformSigsCreationResult} the result of attempting this creation.
         */
        public static createEd25519PlatformSigsFrom(pubKeys: Array<com.grame.services.legacy.core.jproto.JKey>, sigBytesFn: com.grame.services.sigs.sourcing.PubKeyToSigBytes, factory: com.grame.services.sigs.factories.TxnScopedPlatformSigFactory): com.grame.services.sigs.PlatformSigsCreationResult {
            const result: com.grame.services.sigs.PlatformSigsCreationResult = new com.grame.services.sigs.PlatformSigsCreationResult();
            for(let index137=0; index137 < pubKeys.length; index137++) {
                let pk = pubKeys[index137];
                {
                    com.grame.services.keys.grameKeyTraversal.visitSimpleKeys(pk, ((result) => {
                        return (ed25519Key) => PlatformSigOps.createPlatformSigFor(ed25519Key, sigBytesFn, factory, result)
                    })(result));
                }
            }
            return result;
        }

        /*private*/ static createPlatformSigFor(ed25519Key: com.grame.services.legacy.core.jproto.JKey, sigBytesFn: com.grame.services.sigs.sourcing.PubKeyToSigBytes, factory: com.grame.services.sigs.factories.TxnScopedPlatformSigFactory, result: com.grame.services.sigs.PlatformSigsCreationResult) {
            if (result.hasFailed()){
                return;
            }
            try {
                const sigBytes: number[] = sigBytesFn.sigBytesFor(ed25519Key.getEd25519());
                if (sigBytes.length > 0){
                    const sig: ;
                    const cryptoKey: ;
                    /* add */(result.getPlatformSigs().push(factory.create(cryptoKey, sig))>0);
                }
            } catch(__e) {
                if(__e != null && __e instanceof <any>com.grame.services.legacy.exception.KeyPrefixMismatchException) {
                    const kmpe: com.grame.services.legacy.exception.KeyPrefixMismatchException = <com.grame.services.legacy.exception.KeyPrefixMismatchException>__e;
                    if (!ed25519Key.isForScheduledTxn()){
                        result.setTerminatingEx(kmpe);
                    }

                }
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                    const e: Error = <Error>__e;
                    result.setTerminatingEx(e);

                }
            }
        }
    }
    PlatformSigOps["__class"] = "com.grame.services.sigs.PlatformSigOps";

}

