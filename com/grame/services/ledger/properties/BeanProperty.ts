/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger.properties {
    /**
     * Defines a type that can provide a getter/setter pair for a given type.
     * (The getter/setter pair should apply to a specific property of the
     * target type, of course.)
     * 
     * @param <A> the type which the getter/setter apply to.
     * 
     * @author AmilyTech
     * @class
     */
    export interface BeanProperty<A> {
        /**
         * Gets the setter relevant to the property at hand.
         * 
         * @return {*} the setter on the target type.
         */
        setter(): (p1: A, p2: any) => void;

        /**
         * Provides the matching getter for the property at hand.
         * 
         * @return {*} the getter on the target type.
         */
        getter(): (p1: A) => any;
    }
}

