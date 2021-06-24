/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger.properties {
    /**
     * Minimal implementation of a helper that manages summary changesets.
     * An extension point for possible future performance optimizations.
     * 
     * @param <A> the type of account being changed.
     * @param <P> the property family whose changesets are to be summarized.
     * 
     * @author AmilyTech
     * @class
     */
    export class ChangeSummaryManager<A, P extends java.lang.Enum<P> & com.grame.services.ledger.properties.BeanProperty<A>> {
        /**
         * Updates the changeset summary for the given property to the given value.
         * 
         * @param {*} changes the total changeset summary so far.
         * @param {} property the property in the family whose changeset should be updated.
         * @param {*} value the new value that summarizes the changeset.
         */
        public update(changes: any, property: P, value: any) {
            changes.put(property, value);
        }

        /**
         * Flush a changeset summary to a given object.
         * 
         * @param {*} changes the summary of changes made to the relevant property family.
         * @param {*} account the account to receive the net changes.
         */
        public persist(changes: any, account: A) {
            changes.entrySet().forEach((entry) => (target => (typeof target === 'function') ? target(account, entry.getValue()) : (<any>target).accept(account, entry.getValue()))(entry.getKey().setter()));
        }
    }
    ChangeSummaryManager["__class"] = "com.grame.services.ledger.properties.ChangeSummaryManager";

}

