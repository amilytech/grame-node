/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.order {
    /**
     * Define a type that knows how to create {@link SigningOrderResult} instances for
     * each possible outcome of an attempt to list, in canonical order, the grame keys
     * that must have active signatures for some gRPC transaction to be valid.
     * 
     * <b>NOTE:</b> Implementations of this factory may or may not be injected with
     * additional context about the gRPC transaction being evaluated. This will depend
     * on the level of detail required by the type of error report.
     * 
     * @param <T> the type of error report this factory produces.
     * @author AmilyTech
     * @see grameSigningOrder
     * @class
     */
    export interface SigningOrderResultFactory<T> {
        /**
         * Wrap the (successful) determination of a signing order in a {@link SigningOrderResult}.
         * 
         * @param {com.grame.services.legacy.core.jproto.JKey[]} keys a known signing order.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the wrapper object.
         */
        forValidOrder(keys: Array<com.grame.services.legacy.core.jproto.JKey>): com.grame.services.sigs.order.SigningOrderResult<T>;

        /**
         * Report a non-specific error that occurred when listing signing keys for some txn.
         * 
         * @param {TransactionID} txnId the {@link TransactionID} of the problematic txn.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the error summary.
         */
        forGeneralError(txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<T>;

        /**
         * Report an invalid account encountered when listing signing keys for some txn.
         * 
         * @param {AccountID} account the invalid account.
         * @param {TransactionID} txnId the {@link TransactionID} of the problematic txn.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the error summary.
         */
        forInvalidAccount(account: AccountID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<T>;

        /**
         * Report an invalid smart contract encountered when listing signing keys for some txn.
         * 
         * @param {ContractID} contract the invalid account.
         * @param {TransactionID} txnId the {@link TransactionID} of the problematic txn.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the error summary.
         */
        forInvalidContract(contract: ContractID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<T>;

        /**
         * Report a smart contract with no admin key that was encountered when listing signing
         * keys for some txn. (The current semantics of {@link grameSigningOrder} mean it is
         * never valid to reference such smart contracts in a transaction.)
         * 
         * @param {ContractID} contract the invalid contract.
         * @param {TransactionID} txnId the {@link TransactionID} of the problematic txn.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the error summary.
         */
        forImmutableContract(contract: ContractID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<T>;

        /**
         * Report a missing file encountered when listing signing keys for some txn.
         * 
         * @param {FileID} file the missing file.
         * @param {TransactionID} txnId the {@link TransactionID} of the problematic txn.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the error summary.
         */
        forMissingFile(file: FileID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<T>;

        /**
         * Report a missing account encountered when listing signing keys for some txn.
         * 
         * @param {AccountID} account the missing account.
         * @param {TransactionID} txnId the {@link TransactionID} of the problematic txn.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the error summary.
         */
        forMissingAccount(account: AccountID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<T>;

        /**
         * Report a missing token encountered when listing signing keys for some txn.
         * 
         * @param {TokenID} id the missing token.
         * @param {TransactionID} txnId the {@link TransactionID} of the problematic txn.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the error summary.
         */
        forMissingToken(id: TokenID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<T>;

        /**
         * Report a missing schedule encountered when listing signing keys for some txn.
         * 
         * @param {ScheduleID} id the missing schedule.
         * @param {TransactionID} txnId the {@link TransactionID} of the problematic txn.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the error summary.
         */
        forMissingSchedule(id: ScheduleID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<T>;

        /**
         * Report a non-specific payer error that occurred when listing signing keys for some txn.
         * 
         * @param {AccountID} payer the problematic payer.
         * @param {TransactionID} txnId the {@link TransactionID} of the problematic txn.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the error summary.
         */
        forGeneralPayerError(payer: AccountID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<T>;

        /**
         * Report a missing topic occurring during listing signing keys for a txn.
         * 
         * @param {TopicID} topic the missing topic
         * @param {TransactionID} txnId the {@link TransactionID} of the problematic txn.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the error summary.
         */
        forMissingTopic(topic: TopicID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<T>;

        /**
         * Report a missing auto renew account encountered when listing signing keys for some txn.
         * 
         * @param {AccountID} account the missing account.
         * @param {TransactionID} txnId the {@link TransactionID} of the problematic txn.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the error summary.
         */
        forMissingAutoRenewAccount(account: AccountID, txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<T>;

        /**
         * Report a failure resolving required signers for a scheduled transaction.
         * 
         * @param {TransactionBody} scheduled the transaction that was attempted to be scheduled.
         * @param {TransactionID} txnId the {@link TransactionID} of the problematic {@code ScheduleCreate} or {@code ScheduleSign} txn.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the error summary.
         * @param {*} errorReport
         */
        forUnresolvableRequiredSigners(scheduled: TransactionBody, txnId: TransactionID, errorReport: T): com.grame.services.sigs.order.SigningOrderResult<T>;

        /**
         * Report an invalid attempt to schedule a schedule create txn .
         * 
         * @param {TransactionID} txnId the {@link TransactionID} of the problematic {@code ScheduleCreate}.
         * @return {com.grame.services.sigs.order.SigningOrderResult} the error summary.
         */
        forUnschedulableTxn(txnId: TransactionID): com.grame.services.sigs.order.SigningOrderResult<T>;
    }
}

