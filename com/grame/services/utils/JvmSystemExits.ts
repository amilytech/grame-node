/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.utils {
    export class JvmSystemExits implements com.grame.services.utils.SystemExits {
        /**
         * 
         * @param {number} returnCode
         */
        public fail(returnCode: number) {
            java.lang.System.exit(returnCode);
        }

        constructor() {
        }
    }
    JvmSystemExits["__class"] = "com.grame.services.utils.JvmSystemExits";
    JvmSystemExits["__interfaces"] = ["com.grame.services.utils.SystemExits"];


}

