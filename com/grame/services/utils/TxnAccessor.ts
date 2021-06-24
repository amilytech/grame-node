/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.utils {
    /**
     * Defines a type that gives access to several commonly referenced
     * parts of a grame Services gRPC {@link Transaction}.
     * @class
     */
    export interface TxnAccessor {
        getSigMap(): SignatureMap;

        getFunction(): grameFunctionality;

        getSignedTxn4Log(): Transaction;

        getTxnBytes(): number[];

        getBackwardCompatibleSignedTxn(): Transaction;

        getTxn(): TransactionBody;

        getTxnId(): TransactionID;

        getPayer(): AccountID;

        getBackwardCompatibleSignedTxnBytes(): number[];

        getHash(): ByteString;

        canTriggerTxn(): boolean;

        isTriggeredTxn(): boolean;

        getScheduleRef(): ScheduleID;

        getPlatformTxn(): com.swirlds.common.Transaction;
    }
}

