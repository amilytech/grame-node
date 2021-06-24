/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger.accounts {
    /**
     * Defines a type that provides safe and unsafe access to a collection
     * of accounts. ("Safe" implies a defensive copy is returned from the
     * accessor, while "unsafe" implies a reference to the element in the
     * underlying collection is returned).
     * 
     * @param <K> the type of id used to index the collection.
     * @param <A> the type of account stored in the collection.
     * 
     * @author AmilyTech
     * @class
     */
    export interface BackingStore<K, A> {
        /**
         * Alerts this {@code BackingStore} it should flush any cached mutable references.
         */
        flushMutableRefs();

        /**
         * Alerts this {@code BackingStore} it should reconstruct any auxiliary data structures
         * based on its underlying sources. Used in particular for reconnect.
         */
        rebuildFromSources();

        /**
         * Gets a possibly mutable reference to the account with the specified id.
         * 
         * @param {*} id the id of the relevant account.
         * @return {*} a reference to the account.
         */
        getRef(id: K): A;

        /**
         * Gets a reference to the account with the specified id which should not be mutated.
         * 
         * @param {*} id the id of the relevant account.
         * @return {*} a reference to the account.
         */
        getUnsafeRef(id: K): A;

        /**
         * Updates (or creates, if absent) the account with the given id
         * to the accompanying account.
         * 
         * @param {*} id the id of the relevant account.
         * @param {*} account the account that should have this id.
         */
        put(id: K, account: A);

        /**
         * Frees the account with the given id for reclamation.
         * 
         * @param {*} id the id of the relevant account.
         */
        remove(id: K);

        /**
         * Checks if the collection contains the account with the given id.
         * 
         * @param {*} id the account in question.
         * @return {boolean} a flag for existence.
         */
        contains(id: K): boolean;

        /**
         * Returns the set of extant account ids.
         * @return {*[]}
         */
        idSet(): Array<K>;
    }
}

