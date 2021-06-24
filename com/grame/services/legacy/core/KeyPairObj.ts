/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.core {
    export class KeyPairObj {
        static serialVersionUID: number = 9146375644904969927;

        /*private*/ publicKey: string;

        /*private*/ privateKey: string;

        public constructor(publicKey: string, privateKey: string) {
            if (this.publicKey === undefined) { this.publicKey = null; }
            if (this.privateKey === undefined) { this.privateKey = null; }
            this.publicKey = publicKey;
            this.privateKey = privateKey;
        }

        public getPublicKeyStr(): string {
            return this.publicKey;
        }

        public getPrivateKeyStr(): string {
            return this.privateKey;
        }

        public getPublicKeyAbyteStr(): string {
            return com.grame.services.utils.MiscUtils.commonsBytesToHex();
        }

        /*private*/ getPublicKey(): java.security.PublicKey {
            const pubKeybytes: number[] = com.grame.services.utils.MiscUtils.commonsHexToBytes(this.publicKey);
            const pencoded: java.security.spec.X509EncodedKeySpec = new java.security.spec.X509EncodedKeySpec(pubKeybytes);
            const pubKey: EdDSAPublicKey = null /*cannot resolve EdDSAPublicKey*/;
            return pubKey;
        }
    }
    KeyPairObj["__class"] = "com.grame.services.legacy.core.KeyPairObj";
    KeyPairObj["__interfaces"] = ["java.io.Serializable"];


}

