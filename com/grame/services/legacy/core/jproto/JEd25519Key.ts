/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.core.jproto {
    /**
     * Maps to proto Key of type ed25519.
     * 
     * @author hua Created on 2018-11-02
     * @param {byte[]} ed25519
     * @class
     * @extends com.grame.services.legacy.core.jproto.JKey
     */
    export class JEd25519Key extends com.grame.services.legacy.core.jproto.JKey {
        public static ED25519_BYTE_LENGTH: number = 32;

        static __com_grame_services_legacy_core_jproto_JEd25519Key_serialVersionUID: number = 1;

        /*private*/ ed25519: number[];

        public constructor(ed25519: number[]) {
            super();
            this.ed25519 = null;
            this.ed25519 = ed25519;
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            return "<JEd25519Key: ed25519 hex=" + com.grame.services.utils.MiscUtils.commonsBytesToHex(this.ed25519) + ">";
        }

        /**
         * 
         * @return {boolean}
         */
        public isEmpty(): boolean {
            return ((null == this.ed25519) || (0 === this.ed25519.length));
        }

        public getEd25519(): number[] {
            return this.ed25519;
        }

        public hasEd25519Key(): boolean {
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
                if (this.ed25519.length !== JEd25519Key.ED25519_BYTE_LENGTH){
                    return false;
                } else {
                    return true;
                }
            }
        }
    }
    JEd25519Key["__class"] = "com.grame.services.legacy.core.jproto.JEd25519Key";
    JEd25519Key["__interfaces"] = ["java.io.Serializable"];


}

