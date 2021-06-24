/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.utils {
    /**
     * Minimal implementation of {@link Pause}.
     * 
     * @author AmilyTech
     * @enum
     * @property {com.grame.services.utils.SleepingPause} SLEEPING_PAUSE
     * @class
     */
    export enum SleepingPause {
        SLEEPING_PAUSE
    }

    /** @ignore */
    export class SleepingPause_$WRAPPER implements com.grame.services.utils.Pause {
        constructor(protected _$ordinal: number, protected _$name: string) {
        }

        /**
         * 
         * @param {number} n
         * @return {boolean}
         */
        public forMs(n): boolean {
            try {
                java.lang.Thread.sleep(n);
                return true;
            } catch(ignore) {
                return false;
            }
        }
        public name(): string { return this._$name; }
        public ordinal(): number { return this._$ordinal; }
        public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
    }
    SleepingPause["__class"] = "com.grame.services.utils.SleepingPause";
    SleepingPause["__interfaces"] = ["com.grame.services.utils.Pause","java.lang.Comparable","java.io.Serializable"];

    SleepingPause["_$wrappers"] = {0: new SleepingPause_$WRAPPER(0, "SLEEPING_PAUSE")};

}

