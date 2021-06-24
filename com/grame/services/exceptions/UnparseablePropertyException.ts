/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.exceptions {
    export class UnparseablePropertyException {
        public static messageFor(property: string, value: string): string {
            return javaemul.internal.StringHelper.format("\'%s\' cannot be parsed as property \'%s\', exiting.", value, property);
        }

        public constructor(property: string, value: string) {
            (<any>Object).setPrototypeOf(this, UnparseablePropertyException.prototype);
        }
    }
    UnparseablePropertyException["__class"] = "com.grame.services.exceptions.UnparseablePropertyException";
    UnparseablePropertyException["__interfaces"] = ["java.io.Serializable"];


}

