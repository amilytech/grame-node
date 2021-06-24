/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.sourcing {
    /**
     * A source of cryptographic signatures backed by a list of grame {@link Signature} instances.
     * 
     * <b>IMPORTANT:</b> The (deprecated) {@link com.gramegrame.api.proto.java.SignatureList}
     * approach to signing a gRPC transaction does not explicitly map from public keys to their raw
     * signatures. Instead, it uses the convention that a left-to-right DFS traversal of the raw
     * signatures in the {@link com.gramegrame.api.proto.java.SignatureList} will encounter
     * them in exactly the order that their public keys appear when doing a left-to-right
     * traversal of the grame keys required to sign the gRPC transaction (as ordered by
     * {@link com.grame.services.sigs.order.grameSigningOrder}).
     * 
     * This fragile, unenforceable, thinly documented protocol is much inferior to the
     * explicit public-key-to-cryptographic-signature mapping given by a
     * {@link com.gramegrame.api.proto.java.SignatureMap}.
     * 
     * @author AmilyTech
     * @param {Signature[]} grameSigs
     * @class
     */
    export class SigListPubKeyToSigBytes implements com.grame.services.sigs.sourcing.PubKeyToSigBytes {
        /*private*/ simpleSigs: Array<Signature>;

        /*private*/ i: number;

        public constructor(grameSigs: Array<Signature>) {
            if (this.simpleSigs === undefined) { this.simpleSigs = null; }
            this.i = 0;
            this.simpleSigs = <any>(grameSigs.stream().flatMap<any>((sig) => { return this.flattened(sig) }).collect<any>(java.util.stream.Collectors.toList()));
        }

        /*private*/ flattened(sig: Signature): java.util.stream.Stream<Signature> {
            if (){
                return ;
            } else if (){
                return ;
            } else {
                return java.util.stream.Stream.of<any>(sig);
            }
        }

        public sigBytesFor$byte_A(pubKey: number[]): number[] {
            if (this.i === /* size */(<number>this.simpleSigs.length)){
                throw new com.grame.services.legacy.exception.KeySignatureCountMismatchException("No more signatures available in the list!");
            }
            return this.sigBytesFor$byte_A(/* get */this.simpleSigs[this.i++]);
        }

        /**
         * 
         * @param {byte[]} pubKey
         * @return {byte[]}
         */
        public sigBytesFor(pubKey?: any): any {
            if (((pubKey != null && pubKey instanceof <any>Array && (pubKey.length == 0 || pubKey[0] == null ||(typeof pubKey[0] === 'number'))) || pubKey === null)) {
                return <any>this.sigBytesFor$byte_A(pubKey);
            } else if (((pubKey != null && pubKey instanceof <any>Signature) || pubKey === null)) {
                return <any>this.sigBytesFor$Signature(pubKey);
            } else throw new Error('invalid overload');
        }

        /*private*/ sigBytesFor$Signature(sig: Signature): number[] {
            if ( !== ByteString.EMPTY){
                return ;
            } else if ( !== ByteString.EMPTY){
                return ;
            } else {
                return ;
            }
        }
    }
    SigListPubKeyToSigBytes["__class"] = "com.grame.services.sigs.sourcing.SigListPubKeyToSigBytes";
    SigListPubKeyToSigBytes["__interfaces"] = ["com.grame.services.sigs.sourcing.PubKeyToSigBytes"];


}

