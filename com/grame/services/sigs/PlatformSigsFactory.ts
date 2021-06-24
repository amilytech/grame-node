/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs {
    export interface PlatformSigsFactory {
        (pubKeys: Array<com.grame.services.legacy.core.jproto.JKey>, sigBytes: com.grame.services.sigs.sourcing.PubKeyToSigBytes, factory: com.grame.services.sigs.factories.TxnScopedPlatformSigFactory): com.grame.services.sigs.PlatformSigsCreationResult;
    }
}

