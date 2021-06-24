/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.sourcing {
    /**
     * Defines a type that can provide {@link PubKeyToSigBytes} sources scoped
     * to entities assuming the payer and non-payer roles in a given transaction.
     * 
     * @author AmilyTech
     * @class
     */
    export interface PubKeyToSigBytesProvider {
        /**
         * Get a {@link PubKeyToSigBytes} providing the cryptographic signatures
         * for the payer of a given gRPC transaction.
         * 
         * @param {Transaction} signedTxn the txn of interest.
         * @return {*} a source of the payer signatures.
         */
        payerSigBytesFor(signedTxn: Transaction): com.grame.services.sigs.sourcing.PubKeyToSigBytes;

        /**
         * Get a {@link PubKeyToSigBytes} providing the cryptographic signatures
         * for entities involved in a non-payer role in a given gRPC transaction.
         * 
         * @param {Transaction} signedTxn the txn of interest.
         * @return {*} a source of the signatures for entities in non-payer roles.
         */
        otherPartiesSigBytesFor(signedTxn: Transaction): com.grame.services.sigs.sourcing.PubKeyToSigBytes;

        /**
         * Get a {@link PubKeyToSigBytes} providing the cryptographic signatures
         * for all entities involved in a given gRPC transaction (payer first).
         * 
         * @param {Transaction} signedTxn the txn of interest.
         * @return {*} a source of the signatures for entities in all roles.
         */
        allPartiesSigBytesFor(signedTxn: Transaction): com.grame.services.sigs.sourcing.PubKeyToSigBytes;
    }
}

