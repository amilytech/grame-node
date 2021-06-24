/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger {
    /**
     * Defines a ledger type with minimal semantics for manipulating
     * accounts and a given family of their properties. It is presumed
     * that accounts can be in either a saved state; or a transient
     * state, such as occurs in the middle of an transaction. The
     * accessors make this distinction explicit.
     * 
     * @param <K> the type of an account id.
     * @param <P> the type of the property family associated to an account.
     * @param <A> the account type.
     * 
     * @author AmilyTech
     * @class
     */
    export interface Ledger<K, P extends java.lang.Enum<P>, A> {
        /**
         * Sets value of a given property to a given value for the specified account.
         * 
         * @param {*} id the id of the account to update.
         * @param {java.lang.Enum} property the property to change.
         * @param {*} value the new value of the property.
         */
        set(id: K, property: P, value: any);

        /**
         * Creates an new account with the given id and all default property values.
         * 
         * @param {*} id the id to use for the new account.
         */
        create(id: K);

        /**
         * Forgets everything about the account with the given id.
         * 
         * @param {*} id the id of the account to be forgotten.
         */
        destroy(id: K);

        /**
         * Gets the current property value of the specified account. This value
         * need not be persisted to a durable backing store.
         * 
         * @param {*} id the id of the relevant account.
         * @param {java.lang.Enum} property which property to fetch.
         * @return {*} the value of the property.
         */
        get(id?: any, property?: any): any;

        /**
         * Indicates whether an account is present (in either a saved or transient
         * state---either is considered extant).
         * 
         * @param {*} id the id of the relevant account.
         * @return {boolean} whether the account is present.
         */
        exists(id: K): boolean;

        /**
         * Indicates whether an account is present solely in a transient state.
         * 
         * @param {*} id the id of the relevant account.
         * @return {boolean} whether the account has no saved state, only transient.
         */
        existsPending(id: K): boolean;
    }
}

