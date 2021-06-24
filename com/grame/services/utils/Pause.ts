/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.utils {
    /**
     * Defines a type able to pause for a given number of ms; used to increase testability
     * of the {@code RetryingFCMapAccountLookup} implementation.
     * 
     * @author AmilyTech
     * @class
     */
    export interface Pause {
        forMs(n: number): boolean;
    }
}

