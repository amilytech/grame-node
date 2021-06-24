/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.order {
    /**
     * Implements a {@link SigningOrderResultFactory} that reports errors via instances
     * of {@link SignatureStatus}. This requires the factory to be injected with knowledge
     * of whether the attempt to list the signing keys occurred inside {@code handleTransaction}.
     * 
     * @author AmilyTech
     * @see grameSigningOrder
     * @param {boolean} inHandleTxnDynamicContext
     * @class
     */
    export class SigStatusOrderResultFactory implements com.grame.services.sigs.order.SigningOrderResultFactory<com.grame.services.legacy.crypto.SignatureStatus> {
        /*private*/ inHandleTxnDynamicContext: boolean;

        public constructor(inHandleTxnDynamicContext: boolean) {
            if (this.inHandleTxnDynamicContext === undefined) { this.inHandleTxnDynamicContext = false; }
            this.inHandleTxnDynamicContext = inHandleTxnDynamicContext;
        }

        /**
         * 
         * @param {com.grame.services.legacy.core.jproto.JKey[]} keys
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forValidOrder(keys: Array<com.grame.services.legacy.core.jproto.JKey>): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(keys));
        }

        /**
         * 
         * @param {AccountID} account
         * @param {TransactionID} txnId
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forInvalidAccount(account: AccountID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            const error: com.grame.services.legacy.crypto.SignatureStatus = new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_ACCOUNT_ID, ResponseCodeEnum.INVALID_ACCOUNT_ID, this.inHandleTxnDynamicContext, txnId, account, null, null, null);
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(error));
        }

        /**
         * 
         * @param {TransactionID} txnId
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forGeneralError(txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            const error: com.grame.services.legacy.crypto.SignatureStatus = new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.GENERAL_ERROR, ResponseCodeEnum.INVALID_SIGNATURE, this.inHandleTxnDynamicContext, txnId, null, null, null, null);
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(error));
        }

        /**
         * 
         * @param {AccountID} payer
         * @param {TransactionID} txnId
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forGeneralPayerError(payer: AccountID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            const error: com.grame.services.legacy.crypto.SignatureStatus = new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.GENERAL_PAYER_ERROR, ResponseCodeEnum.INVALID_SIGNATURE, this.inHandleTxnDynamicContext, txnId, payer, null, null, null);
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(error));
        }

        /**
         * 
         * @param {AccountID} missing
         * @param {TransactionID} txnId
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forMissingAccount(missing: AccountID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            const error: com.grame.services.legacy.crypto.SignatureStatus = new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_ACCOUNT_ID, ResponseCodeEnum.ACCOUNT_ID_DOES_NOT_EXIST, this.inHandleTxnDynamicContext, txnId, missing, null, null, null);
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(error));
        }

        /**
         * 
         * @param {FileID} missing
         * @param {TransactionID} txnId
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forMissingFile(missing: FileID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            const error: com.grame.services.legacy.crypto.SignatureStatus = new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_FILE_ID, ResponseCodeEnum.INVALID_FILE_ID, this.inHandleTxnDynamicContext, txnId, null, missing, null, null);
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(error));
        }

        /**
         * 
         * @param {ContractID} invalid
         * @param {TransactionID} txnId
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forInvalidContract(invalid: ContractID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            const error: com.grame.services.legacy.crypto.SignatureStatus = new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_CONTRACT_ID, ResponseCodeEnum.INVALID_CONTRACT_ID, this.inHandleTxnDynamicContext, txnId, null, null, invalid, null);
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(error));
        }

        /**
         * 
         * @param {ContractID} immutable
         * @param {TransactionID} txnId
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forImmutableContract(immutable: ContractID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            const error: com.grame.services.legacy.crypto.SignatureStatus = new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.IMMUTABLE_CONTRACT, ResponseCodeEnum.MODIFYING_IMMUTABLE_CONTRACT, this.inHandleTxnDynamicContext, txnId, null, null, immutable, null);
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(error));
        }

        /**
         * 
         * @param {TopicID} missing
         * @param {TransactionID} txnId
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forMissingTopic(missing: TopicID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            const error: com.grame.services.legacy.crypto.SignatureStatus = new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_TOPIC_ID, ResponseCodeEnum.INVALID_TOPIC_ID, this.inHandleTxnDynamicContext, txnId, null, null, null, missing);
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(error));
        }

        /**
         * 
         * @param {AccountID} missing
         * @param {TransactionID} txnId
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forMissingAutoRenewAccount(missing: AccountID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            const error: com.grame.services.legacy.crypto.SignatureStatus = new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_AUTO_RENEW_ACCOUNT_ID, ResponseCodeEnum.INVALID_AUTORENEW_ACCOUNT, this.inHandleTxnDynamicContext, txnId, missing, null, null, null);
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(error));
        }

        /**
         * 
         * @param {TokenID} missing
         * @param {TransactionID} txnId
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forMissingToken(missing: TokenID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            const error: com.grame.services.legacy.crypto.SignatureStatus = new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_TOKEN_ID, ResponseCodeEnum.INVALID_TOKEN_ID, this.inHandleTxnDynamicContext, txnId, missing);
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(error));
        }

        /**
         * 
         * @param {ScheduleID} missing
         * @param {TransactionID} txnId
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forMissingSchedule(missing: ScheduleID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            const error: com.grame.services.legacy.crypto.SignatureStatus = new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.INVALID_SCHEDULE_ID, ResponseCodeEnum.INVALID_SCHEDULE_ID, this.inHandleTxnDynamicContext, txnId, missing);
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(error));
        }

        public forUnresolvableRequiredSigners$TransactionBody$TransactionID$com_grame_services_legacy_crypto_SignatureStatus(scheduled: TransactionBody, txnId: TransactionID, resolutionReport: com.grame.services.legacy.crypto.SignatureStatus): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            const error: com.grame.services.legacy.crypto.SignatureStatus = new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.UNRESOLVABLE_REQUIRED_SIGNERS, ResponseCodeEnum.UNRESOLVABLE_REQUIRED_SIGNERS, this.inHandleTxnDynamicContext, txnId, scheduled, resolutionReport);
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(error));
        }

        /**
         * 
         * @param {TransactionBody} scheduled
         * @param {TransactionID} txnId
         * @param {com.grame.services.legacy.crypto.SignatureStatus} resolutionReport
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forUnresolvableRequiredSigners(scheduled?: any, txnId?: any, resolutionReport?: any): any {
            if (((scheduled != null && scheduled instanceof <any>TransactionBody) || scheduled === null) && ((txnId != null && txnId instanceof <any>TransactionID) || txnId === null) && ((resolutionReport != null && resolutionReport instanceof <any>com.grame.services.legacy.crypto.SignatureStatus) || resolutionReport === null)) {
                return <any>this.forUnresolvableRequiredSigners$TransactionBody$TransactionID$com_grame_services_legacy_crypto_SignatureStatus(scheduled, txnId, resolutionReport);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {TransactionID} txnId
         * @return {com.grame.services.sigs.order.SigningOrderResult}
         */
        public forUnschedulableTxn(txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<com.grame.services.legacy.crypto.SignatureStatus> {
            const error: com.grame.services.legacy.crypto.SignatureStatus = new com.grame.services.legacy.crypto.SignatureStatus(com.grame.services.legacy.crypto.SignatureStatusCode.SCHEDULED_TRANSACTION_NOT_IN_WHITELIST, ResponseCodeEnum.SCHEDULED_TRANSACTION_NOT_IN_WHITELIST, this.inHandleTxnDynamicContext, txnId);
            return <any>(new com.grame.services.sigs.order.SigningOrderResult<any>(error));
        }
    }
    SigStatusOrderResultFactory["__class"] = "com.grame.services.sigs.order.SigStatusOrderResultFactory";
    SigStatusOrderResultFactory["__interfaces"] = ["com.grame.services.sigs.order.SigningOrderResultFactory"];


}

