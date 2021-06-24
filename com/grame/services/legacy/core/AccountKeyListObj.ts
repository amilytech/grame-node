/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.core {
    export class AccountKeyListObj {
        static serialVersionUID: number = -4429672793456228453;

        /*private*/ keyPairList: Array<com.grame.services.legacy.core.KeyPairObj>;

        /*private*/ accountId: AccountID;

        public getKeyPairList(): Array<com.grame.services.legacy.core.KeyPairObj> {
            return this.keyPairList;
        }

        public setKeyPairList(keyPairList: Array<com.grame.services.legacy.core.KeyPairObj>) {
            this.keyPairList = keyPairList;
        }

        public getAccountId(): AccountID {
            return;
        }

        public setAccountId(accountId: AccountID) {
            this.accountId = accountId;
        }

        public constructor(accountId: AccountID, keyPairList: Array<com.grame.services.legacy.core.KeyPairObj>) {
            this.keyPairList = null;
            this.accountId = null;
            this.accountId = accountId;
            this.keyPairList = keyPairList;
        }
    }
    AccountKeyListObj["__class"] = "com.grame.services.legacy.core.AccountKeyListObj";
    AccountKeyListObj["__interfaces"] = ["java.io.Serializable"];


}

