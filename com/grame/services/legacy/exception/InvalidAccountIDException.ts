/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.exception {
    export class InvalidAccountIDException extends Error {
        static serialVersionUID: number = 1;

        /*private*/ accountId: AccountID;

        public constructor(message?: any, accountId?: any) {
            if (((typeof message === 'string') || message === null) && ((accountId != null && accountId instanceof <any>AccountID) || accountId === null)) {
                let __args = arguments;
                super(message); this.message=message;
                if (this.accountId === undefined) { this.accountId = null; } 
                this.accountId = accountId;
            } else if (((message != null && message instanceof <any>AccountID) || message === null) && ((accountId != null && (accountId["__classes"] && accountId["__classes"].indexOf("java.lang.Throwable") >= 0) || accountId != null && accountId instanceof <any>Error) || accountId === null)) {
                let __args = arguments;
                let accountId: any = __args[0];
                let cause: any = __args[1];
                super(cause); this.message=cause;
                if (this.accountId === undefined) { this.accountId = null; } 
                this.accountId = accountId;
            } else throw new Error('invalid overload');
        }

        public getAccountId(): AccountID {
            return;
        }
    }
    InvalidAccountIDException["__class"] = "com.grame.services.legacy.exception.InvalidAccountIDException";
    InvalidAccountIDException["__interfaces"] = ["java.io.Serializable"];


}

