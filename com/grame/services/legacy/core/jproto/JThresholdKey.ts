/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.core.jproto {
    /**
     * Maps to proto Key of type ThresholdKey.
     * 
     * @author Hua Li Created on 2018-11-02
     * @param {com.grame.services.legacy.core.jproto.JKeyList} keys
     * @param {number} threshold
     * @class
     * @extends com.grame.services.legacy.core.jproto.JKey
     */
    export class JThresholdKey extends com.grame.services.legacy.core.jproto.JKey {
        static __com_grame_services_legacy_core_jproto_JThresholdKey_serialVersionUID: number = 1;

        threshold: number;

        /*private*/ keys: com.grame.services.legacy.core.jproto.JKeyList;

        public constructor(keys: com.grame.services.legacy.core.jproto.JKeyList, threshold: number) {
            super();
            this.threshold = 0;
            this.keys = null;
            this.keys = keys;
            this.threshold = threshold;
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            return "<JThresholdKey: thd=" + this.threshold + ", keys=" + this.keys.toString() + ">";
        }

        /**
         * 
         * @return {boolean}
         */
        public isEmpty(): boolean {
            return this.keys == null || this.keys.isEmpty();
        }

        public hasThresholdKey(): boolean {
            return true;
        }

        public getThresholdKey(): JThresholdKey {
            return this;
        }

        public getKeys(): com.grame.services.legacy.core.jproto.JKeyList {
            return this.keys;
        }

        public getThreshold(): number {
            return this.threshold;
        }

        /**
         * 
         * @return {boolean}
         */
        public isValid(): boolean {
            if (this.isEmpty()){
                return false;
            } else {
                const length: number = /* size */(<number>this.keys.getKeysList().length);
                if (this.threshold >= 1 && this.threshold <= length && this.keys.isValid()){
                    return true;
                } else {
                    return false;
                }
            }
        }

        /**
         * 
         * @param {boolean} flag
         */
        public setForScheduledTxn(flag: boolean) {
            if (this.keys != null){
                this.keys.setForScheduledTxn(flag);
            }
        }

        /**
         * 
         * @return {boolean}
         */
        public isForScheduledTxn(): boolean {
            return this.keys != null && this.keys.isForScheduledTxn();
        }
    }
    JThresholdKey["__class"] = "com.grame.services.legacy.core.jproto.JThresholdKey";
    JThresholdKey["__interfaces"] = ["java.io.Serializable"];


}

