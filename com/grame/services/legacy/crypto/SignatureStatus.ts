/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.crypto {
    export class SignatureStatus {
        /*private*/ statusCode: com.grame.services.legacy.crypto.SignatureStatusCode;

        /*private*/ responseCode: ResponseCodeEnum;

        /*private*/ handlingTransaction: boolean;

        /*private*/ transactionId: TransactionID;

        /*private*/ accountId: AccountID;

        /*private*/ fileId: FileID;

        /*private*/ contractId: ContractID;

        /*private*/ topicId: TopicID;

        /*private*/ tokenId: TokenID;

        /*private*/ scheduleID: ScheduleID;

        /*private*/ scheduled: TransactionBody;

        /*private*/ errorReport: SignatureStatus;

        public constructor(statusCode?: any, responseCode?: any, handlingTransaction?: any, transactionID?: any, accountId?: any, fileId?: any, contractId?: any, topicId?: any) {
            if (((typeof statusCode === 'number') || statusCode === null) && ((responseCode != null && responseCode instanceof <any>ResponseCodeEnum) || responseCode === null) && ((typeof handlingTransaction === 'boolean') || handlingTransaction === null) && ((transactionID != null && transactionID instanceof <any>TransactionID) || transactionID === null) && ((accountId != null && accountId instanceof <any>AccountID) || accountId === null) && ((fileId != null && fileId instanceof <any>FileID) || fileId === null) && ((contractId != null && contractId instanceof <any>ContractID) || contractId === null) && ((topicId != null && topicId instanceof <any>TopicID) || topicId === null)) {
                let __args = arguments;
                if (this.statusCode === undefined) { this.statusCode = null; } 
                if (this.responseCode === undefined) { this.responseCode = null; } 
                if (this.handlingTransaction === undefined) { this.handlingTransaction = false; } 
                if (this.transactionId === undefined) { this.transactionId = null; } 
                if (this.accountId === undefined) { this.accountId = null; } 
                if (this.fileId === undefined) { this.fileId = null; } 
                if (this.contractId === undefined) { this.contractId = null; } 
                if (this.topicId === undefined) { this.topicId = null; } 
                if (this.tokenId === undefined) { this.tokenId = null; } 
                if (this.scheduleID === undefined) { this.scheduleID = null; } 
                if (this.scheduled === undefined) { this.scheduled = null; } 
                if (this.errorReport === undefined) { this.errorReport = null; } 
                this.statusCode = statusCode;
                this.responseCode = responseCode;
                this.handlingTransaction = handlingTransaction;
                this.transactionId = transactionID;
                this.accountId = accountId;
                this.fileId = fileId;
                this.contractId = contractId;
                this.topicId = topicId;
            } else if (((typeof statusCode === 'number') || statusCode === null) && ((responseCode != null && responseCode instanceof <any>ResponseCodeEnum) || responseCode === null) && ((typeof handlingTransaction === 'boolean') || handlingTransaction === null) && ((transactionID != null && transactionID instanceof <any>TransactionID) || transactionID === null) && ((accountId != null && accountId instanceof <any>TransactionBody) || accountId === null) && ((fileId != null && fileId instanceof <any>com.grame.services.legacy.crypto.SignatureStatus) || fileId === null) && contractId === undefined && topicId === undefined) {
                let __args = arguments;
                let scheduled: any = __args[4];
                let errorReport: any = __args[5];
                if (this.statusCode === undefined) { this.statusCode = null; } 
                if (this.responseCode === undefined) { this.responseCode = null; } 
                if (this.handlingTransaction === undefined) { this.handlingTransaction = false; } 
                if (this.transactionId === undefined) { this.transactionId = null; } 
                if (this.accountId === undefined) { this.accountId = null; } 
                if (this.fileId === undefined) { this.fileId = null; } 
                if (this.contractId === undefined) { this.contractId = null; } 
                if (this.topicId === undefined) { this.topicId = null; } 
                if (this.tokenId === undefined) { this.tokenId = null; } 
                if (this.scheduleID === undefined) { this.scheduleID = null; } 
                if (this.scheduled === undefined) { this.scheduled = null; } 
                if (this.errorReport === undefined) { this.errorReport = null; } 
                this.scheduled = scheduled;
                this.statusCode = statusCode;
                this.responseCode = responseCode;
                this.handlingTransaction = handlingTransaction;
                this.transactionId = transactionID;
                this.errorReport = errorReport;
            } else if (((typeof statusCode === 'number') || statusCode === null) && ((responseCode != null && responseCode instanceof <any>ResponseCodeEnum) || responseCode === null) && ((typeof handlingTransaction === 'boolean') || handlingTransaction === null) && ((transactionID != null && transactionID instanceof <any>TransactionID) || transactionID === null) && ((accountId != null && accountId instanceof <any>TokenID) || accountId === null) && fileId === undefined && contractId === undefined && topicId === undefined) {
                let __args = arguments;
                let tokenID: any = __args[4];
                if (this.statusCode === undefined) { this.statusCode = null; } 
                if (this.responseCode === undefined) { this.responseCode = null; } 
                if (this.handlingTransaction === undefined) { this.handlingTransaction = false; } 
                if (this.transactionId === undefined) { this.transactionId = null; } 
                if (this.accountId === undefined) { this.accountId = null; } 
                if (this.fileId === undefined) { this.fileId = null; } 
                if (this.contractId === undefined) { this.contractId = null; } 
                if (this.topicId === undefined) { this.topicId = null; } 
                if (this.tokenId === undefined) { this.tokenId = null; } 
                if (this.scheduleID === undefined) { this.scheduleID = null; } 
                if (this.scheduled === undefined) { this.scheduled = null; } 
                if (this.errorReport === undefined) { this.errorReport = null; } 
                this.statusCode = statusCode;
                this.responseCode = responseCode;
                this.handlingTransaction = handlingTransaction;
                this.transactionId = transactionID;
                this.tokenId = tokenID;
            } else if (((typeof statusCode === 'number') || statusCode === null) && ((responseCode != null && responseCode instanceof <any>ResponseCodeEnum) || responseCode === null) && ((typeof handlingTransaction === 'boolean') || handlingTransaction === null) && ((transactionID != null && transactionID instanceof <any>TransactionID) || transactionID === null) && ((accountId != null && accountId instanceof <any>ScheduleID) || accountId === null) && fileId === undefined && contractId === undefined && topicId === undefined) {
                let __args = arguments;
                let scheduleID: any = __args[4];
                if (this.statusCode === undefined) { this.statusCode = null; } 
                if (this.responseCode === undefined) { this.responseCode = null; } 
                if (this.handlingTransaction === undefined) { this.handlingTransaction = false; } 
                if (this.transactionId === undefined) { this.transactionId = null; } 
                if (this.accountId === undefined) { this.accountId = null; } 
                if (this.fileId === undefined) { this.fileId = null; } 
                if (this.contractId === undefined) { this.contractId = null; } 
                if (this.topicId === undefined) { this.topicId = null; } 
                if (this.tokenId === undefined) { this.tokenId = null; } 
                if (this.scheduleID === undefined) { this.scheduleID = null; } 
                if (this.scheduled === undefined) { this.scheduled = null; } 
                if (this.errorReport === undefined) { this.errorReport = null; } 
                this.statusCode = statusCode;
                this.responseCode = responseCode;
                this.handlingTransaction = handlingTransaction;
                this.transactionId = transactionID;
                this.scheduleID = scheduleID;
            } else if (((typeof statusCode === 'number') || statusCode === null) && ((responseCode != null && responseCode instanceof <any>ResponseCodeEnum) || responseCode === null) && ((typeof handlingTransaction === 'boolean') || handlingTransaction === null) && ((transactionID != null && transactionID instanceof <any>TransactionID) || transactionID === null) && accountId === undefined && fileId === undefined && contractId === undefined && topicId === undefined) {
                let __args = arguments;
                if (this.statusCode === undefined) { this.statusCode = null; } 
                if (this.responseCode === undefined) { this.responseCode = null; } 
                if (this.handlingTransaction === undefined) { this.handlingTransaction = false; } 
                if (this.transactionId === undefined) { this.transactionId = null; } 
                if (this.accountId === undefined) { this.accountId = null; } 
                if (this.fileId === undefined) { this.fileId = null; } 
                if (this.contractId === undefined) { this.contractId = null; } 
                if (this.topicId === undefined) { this.topicId = null; } 
                if (this.tokenId === undefined) { this.tokenId = null; } 
                if (this.scheduleID === undefined) { this.scheduleID = null; } 
                if (this.scheduled === undefined) { this.scheduled = null; } 
                if (this.errorReport === undefined) { this.errorReport = null; } 
                this.statusCode = statusCode;
                this.responseCode = responseCode;
                this.handlingTransaction = handlingTransaction;
                this.transactionId = transactionID;
            } else throw new Error('invalid overload');
        }

        public getResponseCode(): ResponseCodeEnum {
            return;
        }

        public getStatusCode(): com.grame.services.legacy.crypto.SignatureStatusCode {
            return this.statusCode;
        }

        public getAccountId(): AccountID {
            return;
        }

        public hasAccountId(): boolean {
            return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.accountId) != null && ;
        }

        public getTopicId(): TopicID {
            return;
        }

        public isError(): boolean {
            return !/* Enum.equals */(<any>(com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS) === <any>(this.statusCode)) && !/* Enum.equals */(<any>(com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS_VERIFY_SYNC) === <any>(this.statusCode)) && !/* Enum.equals */(<any>(com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS_VERIFY_ASYNC) === <any>(this.statusCode));
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            return this.toLogMessage();
        }

        public toLogMessage(): string {
            const formatArguments: Array<string> = <any>([]);
            /* add */(formatArguments.push((this.handlingTransaction) ? "handleTransaction" : "expandSignatures")>0);
            switch((this.statusCode)) {
            case com.grame.services.legacy.crypto.SignatureStatusCode.VERIFY_FAILED:
            case com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_ACCOUNT_ID:
            case com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_AUTO_RENEW_ACCOUNT_ID:
                /* add */(formatArguments.push(SignatureStatus.format(this.transactionId))>0);
                /* add */(formatArguments.push(com.grame.services.utils.EntityIdUtils.readableId(this.accountId))>0);
                break;
            case com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_FILE_ID:
                /* add */(formatArguments.push(SignatureStatus.format(this.transactionId))>0);
                /* add */(formatArguments.push(com.grame.services.utils.EntityIdUtils.readableId(this.fileId))>0);
                break;
            case com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_CONTRACT_ID:
            case com.grame.services.legacy.crypto.SignatureStatusCode.IMMUTABLE_CONTRACT:
                /* add */(formatArguments.push(SignatureStatus.format(this.transactionId))>0);
                /* add */(formatArguments.push(com.grame.services.utils.EntityIdUtils.readableId(this.contractId))>0);
                break;
            case com.grame.services.legacy.crypto.SignatureStatusCode.UNRESOLVABLE_REQUIRED_SIGNERS:
                /* add */(formatArguments.push()>0);
                /* add */(formatArguments.push()>0);
                break;
            case com.grame.services.legacy.crypto.SignatureStatusCode.SCHEDULED_TRANSACTION_NOT_IN_WHITELIST:
            case com.grame.services.legacy.crypto.SignatureStatusCode.GENERAL_PAYER_ERROR:
            case com.grame.services.legacy.crypto.SignatureStatusCode.GENERAL_TRANSACTION_ERROR:
            case com.grame.services.legacy.crypto.SignatureStatusCode.KEY_COUNT_MISMATCH:
            case com.grame.services.legacy.crypto.SignatureStatusCode.KEY_PREFIX_MISMATCH:
                /* add */(formatArguments.push(SignatureStatus.format(this.transactionId))>0);
                break;
            case com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS_VERIFY_SYNC:
                /* add */(formatArguments.push(false.toString())>0);
                break;
            case com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS_VERIFY_ASYNC:
                /* add */(formatArguments.push(true.toString())>0);
                break;
            case com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_TOPIC_ID:
                /* add */(formatArguments.push(SignatureStatus.format(this.transactionId))>0);
                /* add */(formatArguments.push(com.grame.services.utils.EntityIdUtils.readableId(this.topicId))>0);
                break;
            case com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_TOKEN_ID:
                /* add */(formatArguments.push(SignatureStatus.format(this.transactionId))>0);
                /* add */(formatArguments.push(com.grame.services.utils.EntityIdUtils.readableId(this.tokenId))>0);
                break;
            case com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_SCHEDULE_ID:
                /* add */(formatArguments.push(SignatureStatus.format(this.transactionId))>0);
                /* add */(formatArguments.push(com.grame.services.utils.EntityIdUtils.readableId(this.scheduleID))>0);
                break;
            case com.grame.services.legacy.crypto.SignatureStatusCode.SUCCESS:
            case com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_PROTOCOL_BUFFER:
            case com.grame.services.legacy.crypto.SignatureStatusCode.GENERAL_ERROR:
            default:
                break;
            }
            return javaemul.internal.StringHelper.format(com.grame.services.legacy.crypto.SignatureStatusCode["_$wrappers"][this.statusCode].message(), /* toArray */formatArguments.slice(0));
        }

        static format(transactionId: TransactionID): string {
            return javaemul.internal.StringHelper.format("(%s, %d.%d)", com.grame.services.utils.EntityIdUtils.readableId(), , );
        }
    }
    SignatureStatus["__class"] = "com.grame.services.legacy.crypto.SignatureStatus";

}

