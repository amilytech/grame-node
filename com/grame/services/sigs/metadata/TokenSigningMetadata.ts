/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata {
    /**
     * Represents metadata about the signing attributes of a grame token.
     * 
     * @author AmilyTech
     * @class
     */
    export class TokenSigningMetadata {
        /*private*/ __adminKey: com.grame.services.legacy.core.jproto.JKey;

        /*private*/ kycKey: com.grame.services.legacy.core.jproto.JKey;

        /*private*/ wipeKey: com.grame.services.legacy.core.jproto.JKey;

        /*private*/ freezeKey: com.grame.services.legacy.core.jproto.JKey;

        /*private*/ supplyKey: com.grame.services.legacy.core.jproto.JKey;

        constructor(adminKey: com.grame.services.legacy.core.jproto.JKey, kycKey: com.grame.services.legacy.core.jproto.JKey, wipeKey: com.grame.services.legacy.core.jproto.JKey, freezeKey: com.grame.services.legacy.core.jproto.JKey, supplyKey: com.grame.services.legacy.core.jproto.JKey) {
            if (this.__adminKey === undefined) { this.__adminKey = null; }
            if (this.kycKey === undefined) { this.kycKey = null; }
            if (this.wipeKey === undefined) { this.wipeKey = null; }
            if (this.freezeKey === undefined) { this.freezeKey = null; }
            if (this.supplyKey === undefined) { this.supplyKey = null; }
            this.__adminKey = adminKey;
            this.kycKey = kycKey;
            this.wipeKey = wipeKey;
            this.freezeKey = freezeKey;
            this.supplyKey = supplyKey;
        }

        public static from(token: com.grame.services.state.merkle.MerkleToken): TokenSigningMetadata {
            return new TokenSigningMetadata(token.adminKey(), token.kycKey(), token.wipeKey(), token.freezeKey(), token.supplyKey());
        }

        public adminKey(): com.grame.services.legacy.core.jproto.JKey {
            return this.__adminKey;
        }

        public optionalFreezeKey(): com.grame.services.legacy.core.jproto.JKey {
            return this.freezeKey;
        }

        public optionalKycKey(): com.grame.services.legacy.core.jproto.JKey {
            return this.kycKey;
        }

        public optionalWipeKey(): com.grame.services.legacy.core.jproto.JKey {
            return this.wipeKey;
        }

        public optionalSupplyKey(): com.grame.services.legacy.core.jproto.JKey {
            return this.supplyKey;
        }
    }
    TokenSigningMetadata["__class"] = "com.grame.services.sigs.metadata.TokenSigningMetadata";

}

