/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.sourcing {
    /**
     * A source of cryptographic signatures backed by a {@link SignatureMap} instance.
     * 
     * <p><b>IMPORTANT:</b> If a public key does not match any prefix in the backing
     * {@code SignatureMap}, we simply return an empty {@code byte[]} for its
     * cryptographic signature. It might seem that we should instead fail fast
     * (since an empty signature can never be {@code VALID}).
     * 
     * However, this would be a mistake, since with e.g. grame threshold keys it is quite
     * possible for a grame key to be active even if some number of its constituent
     * simple keys lack a valid signature.
     * 
     * @author AmilyTech
     * @class
     */
    export class SigMapPubKeyToSigBytes implements com.grame.services.sigs.sourcing.PubKeyToSigBytes {
        /*private*/ sigMap: SignatureMap;

        constructor(sigMap: SignatureMap) {
            if (this.sigMap === undefined) { this.sigMap = null; }
            this.sigMap = sigMap;
        }

        public sigBytesFor$byte_A(pubKey: number[]): number[] {
            const matchingSigs: Array<number[]> = ;
            if (/* size */(<number>matchingSigs.length) > 1){
                throw new com.grame.services.legacy.exception.KeyPrefixMismatchException("Source signature map is ambiguous for given public key!");
            }
            return /* isEmpty */(matchingSigs.length == 0) ? com.grame.services.sigs.sourcing.PubKeyToSigBytes.EMPTY_SIG : /* get */matchingSigs[0];
        }

        /**
         * 
         * @param {byte[]} pubKey
         * @return {byte[]}
         */
        public sigBytesFor(pubKey?: any): any {
            if (((pubKey != null && pubKey instanceof <any>Array && (pubKey.length == 0 || pubKey[0] == null ||(typeof pubKey[0] === 'number'))) || pubKey === null)) {
                return <any>this.sigBytesFor$byte_A(pubKey);
            } else if (((pubKey != null && pubKey instanceof <any>SignaturePair) || pubKey === null)) {
                return <any>this.sigBytesFor$SignaturePair(pubKey);
            } else throw new Error('invalid overload');
        }

        /*private*/ sigBytesFor$SignaturePair(sp: SignaturePair): number[] {
            if ( !== ByteString.EMPTY){
                return ;
            } else if ( !== ByteString.EMPTY){
                return ;
            } else {
                return ;
            }
        }

        public static beginsWith(pubKey: number[], prefix: number[]): boolean {
            const n: number = prefix.length;
            return /* equals */((a1, a2) => { if(a1==null && a2==null) return true; if(a1==null || a2==null) return false; if(a1.length != a2.length) return false; for(let i = 0; i < a1.length; i++) { if(<any>a1[i] != <any>a2[i]) return false; } return true; })(prefix, 0, n, pubKey, 0, n);
        }
    }
    SigMapPubKeyToSigBytes["__class"] = "com.grame.services.sigs.sourcing.SigMapPubKeyToSigBytes";
    SigMapPubKeyToSigBytes["__interfaces"] = ["com.grame.services.sigs.sourcing.PubKeyToSigBytes"];


}

