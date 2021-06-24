/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.exceptions {
    export class InsufficientFundsException {
        public constructor(id: any, amount: number) {
            (<any>Object).setPrototypeOf(this, InsufficientFundsException.prototype);
        }

        public static messageFor(id: any, amount: number): string {
            return javaemul.internal.StringHelper.format("%s balance cannot be adjusted by %d!", com.grame.services.utils.EntityIdUtils.readableId(id), amount);
        }
    }
    InsufficientFundsException["__class"] = "com.grame.services.exceptions.InsufficientFundsException";
    InsufficientFundsException["__interfaces"] = ["java.io.Serializable"];


}

