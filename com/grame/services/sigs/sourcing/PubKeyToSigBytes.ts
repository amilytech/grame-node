/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.sourcing {
    /**
     * Defines a type that is a source of the cryptographic signatures associated to
     * given public keys. It is useful to define an explicit type for this simple behavior,
     * because it must be implemented quite differently for a gRPC transaction using a
     * {@link SignatureMap} vs. a gRPC transaction using a
     * {@link com.gramegrame.api.proto.java.SignatureList}.
     * 
     * In particular, to create a {@link com.swirlds.common.crypto.Signature}, you must have:
     * <ol>
     * <li>The raw data that was signed.</li>
     * <li>The public key matching the private key used to sign the data.</li>
     * <li>The cryptographic signature that resulted.</li>
     * </ol>
     * A {@code PubKeyToSigBytes} implementation lets us obtain the third ingredient
     * given the second.
     * 
     * <b>NOTE:</b> This interface also provides static factories to obtain appropriate
     * implementations of its type given {@link SignatureMap},
     * {@link com.gramegrame.api.proto.java.SignatureList}, or gRPC transaction.
     * 
     * @author AmilyTech
     * @class
     */
    export interface PubKeyToSigBytes {
        /**
         * Return the cryptographic signature associated to a given public key in some
         * context (presumably the creation of a {@link com.swirlds.common.crypto.Signature}).
         * 
         * @param {byte[]} pubKey a public key whose private key was used to sign some data.
         * @return {byte[]} the cryptographic signature that resulted.
         * @throws Exception if the desired cryptographic signature is unavailable.
         */
        sigBytesFor(pubKey: number[]): number[];
    }

    export namespace PubKeyToSigBytes {

        export const EMPTY_SIG: number[] = [];

        export function from$SignatureMap(sigMap: SignatureMap): PubKeyToSigBytes {
            return new com.grame.services.sigs.sourcing.SigMapPubKeyToSigBytes(sigMap);
        }

        /**
         * Create a {@code PubKeyToSigBytes} implementation backed by the given map.
         * 
         * @param {SignatureMap} sigMap a list of public-key-to-cryptographic-signature map entries.
         * @return {*} a source of raw signatures that encapsulates this mapping.
         */
        export function from(sigMap?: any): any {
            if (((sigMap != null && sigMap instanceof <any>SignatureMap) || sigMap === null)) {
                return <any>com.grame.services.sigs.sourcing.PubKeyToSigBytes.from$SignatureMap(sigMap);
            } else if (((sigMap != null && (sigMap instanceof Array)) || sigMap === null)) {
                return <any>com.grame.services.sigs.sourcing.PubKeyToSigBytes.from$java_util_List(sigMap);
            } else throw new Error('invalid overload');
        }

        export function from$java_util_List(grameSigs: Array<Signature>): PubKeyToSigBytes {
            return new com.grame.services.sigs.sourcing.SigListPubKeyToSigBytes(grameSigs);
        }

        /**
         * Create a {@code PubKeyToSigBytes} implementation backed by the cryptographic
         * signatures associated to the payer of a given gRPC transaction.
         * 
         * @param {Transaction} signedTxn a gRPC transaction.
         * @return {*} a source of the raw signatures associated to the payer for the txn.
         */
        export function forPayer(signedTxn: Transaction): PubKeyToSigBytes {
            return PubKeyToSigBytes['from$SignatureMap']();
        }

        /**
         * Create a {@code PubKeyToSigBytes} implementation backed by the cryptographic
         * signatures associated to entities involved in non-payer roles for a given
         * gRPC transaction.
         * 
         * @param {Transaction} signedTxn a gRPC transaction.
         * @return {*} a source of the raw signatures associated non-payer roles in the txn.
         */
        export function forOtherParties(signedTxn: Transaction): PubKeyToSigBytes {
            return PubKeyToSigBytes.forPayer(signedTxn);
        }

        /**
         * Create a {@code PubKeyToSigBytes} implementation backed by the cryptographic
         * signatures associated to entities involved in non-payer roles for a given
         * gRPC transaction.
         * 
         * @param {Transaction} signedTxn a gRPC transaction.
         * @return {*} a source of the raw signatures associated non-payer roles in the txn.
         */
        export function forAllParties(signedTxn: Transaction): PubKeyToSigBytes {
            return PubKeyToSigBytes.forPayer(signedTxn);
        }
    }

}

