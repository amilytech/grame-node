/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.core.jproto {
    /**
     * Maps to proto Key of type KeyList.
     * 
     * @author hua Created on 2018-11-02
     * @param {com.grame.services.legacy.core.jproto.JKey[]} keys
     * @class
     * @extends com.grame.services.legacy.core.jproto.JKey
     */
    export class JKeyList extends com.grame.services.legacy.core.jproto.JKey {
        static __com_grame_services_legacy_core_jproto_JKeyList_serialVersionUID: number = 1;

        /*private*/ keys: Array<com.grame.services.legacy.core.jproto.JKey>;

        public constructor(keys?: any) {
            if (((keys != null && (keys instanceof Array)) || keys === null)) {
                let __args = arguments;
                super();
                this.keys = null;
                if (keys == null){
                    throw Object.defineProperty(new Error("JKeyList cannot be constructed with a null \'keys\' argument!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                this.keys = keys;
            } else if (keys === undefined) {
                let __args = arguments;
                super();
                this.keys = null;
                this.keys = <any>([]);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            return "<JKeyList: keys=" + /* toString */('['+this.keys.join(', ')+']') + ">";
        }

        /**
         * 
         * @return {boolean}
         */
        public isEmpty(): boolean {
            if (this.keys != null){
                for(let index124=0; index124 < this.keys.length; index124++) {
                    let key = this.keys[index124];
                    {
                        if ((null != key) && !key.isEmpty()){
                            return false;
                        }
                    }
                }
            }
            return true;
        }

        /**
         * 
         * @return {boolean}
         */
        public isValid(): boolean {
            if (this.isEmpty()){
                return false;
            } else {
                for(let index125=0; index125 < this.keys.length; index125++) {
                    let key = this.keys[index125];
                    {
                        if ((null == key) || !key.isValid()){
                            return false;
                        }
                    }
                }
                return true;
            }
        }

        public hasKeyList(): boolean {
            return true;
        }

        public getKeysList(): Array<com.grame.services.legacy.core.jproto.JKey> {
            return this.keys;
        }

        public getKeyList(): JKeyList {
            return this;
        }

        /**
         * 
         * @param {boolean} flag
         */
        public setForScheduledTxn(flag: boolean) {
            if (this.keys != null){
                for(let index126=0; index126 < this.keys.length; index126++) {
                    let key = this.keys[index126];
                    {
                        key.setForScheduledTxn(flag);
                    }
                }
            }
        }

        /**
         * 
         * @return {boolean}
         */
        public isForScheduledTxn(): boolean {
            if (this.keys != null){
                for(let index127=0; index127 < this.keys.length; index127++) {
                    let key = this.keys[index127];
                    {
                        if (key.isForScheduledTxn()){
                            return true;
                        }
                    }
                }
            }
            return false;
        }
    }
    JKeyList["__class"] = "com.grame.services.legacy.core.jproto.JKeyList";
    JKeyList["__interfaces"] = ["java.io.Serializable"];


}

