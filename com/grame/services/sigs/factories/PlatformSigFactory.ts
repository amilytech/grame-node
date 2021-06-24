/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.factories {
    /**
     * Provides a static method to create {@link com.swirlds.common.crypto.Signature} instances
     * from the raw bytes constituting a public key, cryptographic signature, and signed data.
     * 
     * @author AmilyTech
     * @class
     */
    export class PlatformSigFactory {
        /**
         * Combine raw bytes into a syntactically valid ed25519 {@link com.swirlds.common.crypto.Signature}.
         * 
         * @param {byte[]} pk bytes of the ed25519 public key.
         * @param {byte[]} sig bytes of the cryptographic signature.
         * @param {byte[]} data bytes of the data claimed to have been signed.
         * @return {TransactionSignature} the platform signature representing the collective input parameters.
         */
        public static createEd25519(pk: number[], sig: number[], data: number[]): TransactionSignature {
            const contents: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(sig.length + data.length);
            /* arraycopy */((srcPts, srcOff, dstPts, dstOff, size) => { if(srcPts !== dstPts || dstOff >= srcOff + size) { while (--size >= 0) dstPts[dstOff++] = srcPts[srcOff++];} else { let tmp = srcPts.slice(srcOff, srcOff + size); for (let i = 0; i < size; i++) dstPts[dstOff++] = tmp[i]; }})(sig, 0, contents, 0, sig.length);
            /* arraycopy */((srcPts, srcOff, dstPts, dstOff, size) => { if(srcPts !== dstPts || dstOff >= srcOff + size) { while (--size >= 0) dstPts[dstOff++] = srcPts[srcOff++];} else { let tmp = srcPts.slice(srcOff, srcOff + size); for (let i = 0; i < size; i++) dstPts[dstOff++] = tmp[i]; }})(data, 0, contents, sig.length, data.length);
            return ((str, index, len) => str.substring(index, index + len))((contents).map(s => String.fromCharCode(s)).join(''), 0, sig.length);
        }

        public static varyingMaterialEquals(a: TransactionSignature, b: TransactionSignature): boolean {
            let isEqual: boolean = /* equals */((a1, a2) => { if(a1==null && a2==null) return true; if(a1==null || a2==null) return false; if(a1.length != a2.length) return false; for(let i = 0; i < a1.length; i++) { if(<any>a1[i] != <any>a2[i]) return false; } return true; })(, );
            if (isEqual){
                const aOffset: number = ;
                const aLen: number = ;
                const bOffset: number = ;
                const bLen: number = ;
                isEqual = /* equals */((a1, a2) => { if(a1==null && a2==null) return true; if(a1==null || a2==null) return false; if(a1.length != a2.length) return false; for(let i = 0; i < a1.length; i++) { if(<any>a1[i] != <any>a2[i]) return false; } return true; })(, aOffset, aOffset + aLen, , bOffset, bOffset + bLen);
            }
            return isEqual;
        }

        public static allVaryingMaterialEquals(aSigs: Array<TransactionSignature>, bSigs: Array<TransactionSignature>): boolean {
            const isEqual: boolean = (/* size */(<number>aSigs.length) === /* size */(<number>bSigs.length));
            if (isEqual){
                for(let i: number = 0, n: number = /* size */(<number>aSigs.length); i < n; i++) {{
                    if (!PlatformSigFactory.varyingMaterialEquals(/* get */aSigs[i], /* get */bSigs[i])){
                        return false;
                    }
                };}
            }
            return isEqual;
        }

        public static pkSigRepr(sigs: Array<TransactionSignature>): string {
            return ;
        }
    }
    PlatformSigFactory["__class"] = "com.grame.services.sigs.factories.PlatformSigFactory";

}

