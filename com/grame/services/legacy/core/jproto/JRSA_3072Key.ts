/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.core.jproto {
    /**
     * Maps to proto Key of type RSA_3072.
     * 
     * @author hua Created on 2019-01-07
     * @param {byte[]} RSA_3072Key
     * @class
     * @extends com.grame.services.legacy.core.jproto.JKey
     */
    export class JRSA_3072Key extends com.grame.services.legacy.core.jproto.JKey {
        static __com_grame_services_legacy_core_jproto_JRSA_3072Key_serialVersionUID: number = 1;

        /*private*/ RSA_3072Key: number[];

        public constructor(RSA_3072Key: number[]) {
            super();
            this.RSA_3072Key = null;
            this.RSA_3072Key = RSA_3072Key;
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            return "<JRSA_3072Key: RSA_3072Key hex=" + com.grame.services.utils.MiscUtils.commonsBytesToHex(this.RSA_3072Key) + ">";
        }

        public hasRSA_3072Key(): boolean {
            return true;
        }

        public getRSA3072(): number[] {
            return this.RSA_3072Key;
        }

        /**
         * 
         * @return {boolean}
         */
        public isEmpty(): boolean {
            return ((null == this.RSA_3072Key) || (0 === this.RSA_3072Key.length));
        }

        /**
         * 
         * @return {boolean}
         */
        public isValid(): boolean {
            return !this.isEmpty();
        }
    }
    JRSA_3072Key["__class"] = "com.grame.services.legacy.core.jproto.JRSA_3072Key";
    JRSA_3072Key["__interfaces"] = ["java.io.Serializable"];


}

