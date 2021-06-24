/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.core.jproto {
    /**
     * Maps to proto KeyList.
     * 
     * @author hua Created on 2018-11-02
     * @param {byte[]} ECDSA_384Key
     * @class
     * @extends com.grame.services.legacy.core.jproto.JKey
     */
    export class JECDSA_384Key extends com.grame.services.legacy.core.jproto.JKey {
        static __com_grame_services_legacy_core_jproto_JECDSA_384Key_serialVersionUID: number = 1;

        /*private*/ ECDSA_384Key: number[];

        public constructor(ECDSA_384Key: number[]) {
            super();
            this.ECDSA_384Key = null;
            this.ECDSA_384Key = ECDSA_384Key;
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            return "<JECDSA_384Key: ECDSA_384Key hex=" + com.grame.services.utils.MiscUtils.commonsBytesToHex(this.ECDSA_384Key) + ">";
        }

        /**
         * 
         * @return {boolean}
         */
        public isEmpty(): boolean {
            return ((null == this.ECDSA_384Key) || (0 === this.ECDSA_384Key.length));
        }

        public hasECDSA_384Key(): boolean {
            return true;
        }

        public getECDSA384(): number[] {
            return this.ECDSA_384Key;
        }

        /**
         * 
         * @return {boolean}
         */
        public isValid(): boolean {
            return !this.isEmpty();
        }
    }
    JECDSA_384Key["__class"] = "com.grame.services.legacy.core.jproto.JECDSA_384Key";
    JECDSA_384Key["__interfaces"] = ["java.io.Serializable"];


}

