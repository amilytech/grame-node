/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.crypto {
    export enum SignatureStatusCode {
        SUCCESS, SUCCESS_VERIFY_SYNC, SUCCESS_VERIFY_ASYNC, INVALID_PROTOCOL_BUFFER, INVALID_ACCOUNT_ID, GENERAL_ERROR, GENERAL_TRANSACTION_ERROR, GENERAL_PAYER_ERROR, KEY_COUNT_MISMATCH, KEY_PREFIX_MISMATCH, INVALID_FILE_ID, IMMUTABLE_CONTRACT, INVALID_CONTRACT_ID, VERIFY_FAILED, INVALID_TOPIC_ID, INVALID_TOKEN_ID, INVALID_AUTO_RENEW_ACCOUNT_ID, INVALID_SCHEDULE_ID, UNRESOLVABLE_REQUIRED_SIGNERS, SCHEDULED_TRANSACTION_NOT_IN_WHITELIST
    }

    /** @ignore */
    export class SignatureStatusCode_$WRAPPER {
        /*private*/ __message;

        constructor(protected _$ordinal: number, protected _$name: string, message) {
            if (this.__message === undefined) { this.__message = null; }
            this.__message = message;
        }

        public message(): string {
            return this.__message;
        }
        public name(): string { return this._$name; }
        public ordinal(): number { return this._$ordinal; }
        public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
    }
    SignatureStatusCode["__class"] = "com.grame.services.legacy.crypto.SignatureStatusCode";
    SignatureStatusCode["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

    SignatureStatusCode["_$wrappers"] = {0: new SignatureStatusCode_$WRAPPER(0, "SUCCESS", "Successfully mapped signatures to keys [ source = \'%s\' ]"), 1: new SignatureStatusCode_$WRAPPER(1, "SUCCESS_VERIFY_SYNC", "Successfully mapped signatures to keys [ source = \'%s\', async = \'%s\' ]"), 2: new SignatureStatusCode_$WRAPPER(2, "SUCCESS_VERIFY_ASYNC", "Successfully mapped signatures to keys [ source = \'%s\', async = \'%s\'  ]"), 3: new SignatureStatusCode_$WRAPPER(3, "INVALID_PROTOCOL_BUFFER", "Unable to parse the platform transaction [ source = \'%s\' ]"), 4: new SignatureStatusCode_$WRAPPER(4, "INVALID_ACCOUNT_ID", "Invalid Account ID [ source = \'%s\', transactionId = \'%s\',  accountId = \'%s\' ]"), 5: new SignatureStatusCode_$WRAPPER(5, "GENERAL_ERROR", "Unable to map signatures due to an general exception [ source = \'%s\' ]"), 6: new SignatureStatusCode_$WRAPPER(6, "GENERAL_TRANSACTION_ERROR", "Unable to map signatures due to an general exception [ source = \'%s\', transactionId = \'%s\' ]"), 7: new SignatureStatusCode_$WRAPPER(7, "GENERAL_PAYER_ERROR", "Unable to map signatures due to an general payer exception [ source = \'%s\', transactionId = \'%s\' ]"), 8: new SignatureStatusCode_$WRAPPER(8, "KEY_COUNT_MISMATCH", "Key Count Mismatch Error [ source = \'%s\', transactionId = \'%s\' ]"), 9: new SignatureStatusCode_$WRAPPER(9, "KEY_PREFIX_MISMATCH", "Key Prefix Mismatch Error [ source = \'%s\', transactionId = \'%s\' ]"), 10: new SignatureStatusCode_$WRAPPER(10, "INVALID_FILE_ID", "Invalid Account ID [ source = \'%s\', transactionId = \'%s\', fileId = \'%s\' ]"), 11: new SignatureStatusCode_$WRAPPER(11, "IMMUTABLE_CONTRACT", "Immutable Contract Modification Error [ source = \'%s\', transactionId = \'%s\', contractId = \'%s\' ]"), 12: new SignatureStatusCode_$WRAPPER(12, "INVALID_CONTRACT_ID", "Invalid Contract ID [ source = \'%s\', transactionId = \'%s\', contractId = \'%s\' ]"), 13: new SignatureStatusCode_$WRAPPER(13, "VERIFY_FAILED", "Failed to verify signature [ source = \'%s\', transactionId = \'%s\', accountId = \'%s\' ]"), 14: new SignatureStatusCode_$WRAPPER(14, "INVALID_TOPIC_ID", "Invalid Topic ID [ source = \'%s\', transactionId = \'%s\', topicId = \'%s\' ]"), 15: new SignatureStatusCode_$WRAPPER(15, "INVALID_TOKEN_ID", "Invalid Token ID [ source = \'%s\', transactionId = \'%s\', tokenId = \'%s\' ]"), 16: new SignatureStatusCode_$WRAPPER(16, "INVALID_AUTO_RENEW_ACCOUNT_ID", "Invalid AutoRenew Account ID [ source = \'%s\', transactionId = \'%s\', accountId = \'%s\' ]"), 17: new SignatureStatusCode_$WRAPPER(17, "INVALID_SCHEDULE_ID", "Invalid Schedule ID [ source = \'%s\', transactionId = \'%s\', scheduleId = \'%s\' ]"), 18: new SignatureStatusCode_$WRAPPER(18, "UNRESOLVABLE_REQUIRED_SIGNERS", "Cannot resolve required signers for scheduled txn [ source = \'%s\', scheduled = \'%s\', error = \'%s\' ]"), 19: new SignatureStatusCode_$WRAPPER(19, "SCHEDULED_TRANSACTION_NOT_IN_WHITELIST", "Specified txn cannot be scheduled [ source = \'%s\', transactionId = \'%s\' ]")};

}

