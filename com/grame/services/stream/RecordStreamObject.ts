/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.stream {
    /**
     * Contains a TransactionRecord, its related Transaction, and consensus Timestamp of the Transaction.
     * Is used for record streaming
     * @param {TransactionRecord} transactionRecord
     * @param {Transaction} transaction
     * @param {java.time.Instant} consensusTimestamp
     * @class
     * @extends AbstractSerializableHashable
     */
    export class RecordStreamObject extends AbstractSerializableHashable implements Timestamped, SerializableRunningHashable {
        public static CLASS_ID: number = -2057983832518124149;

        public static CLASS_VERSION: number = 1;

        static MAX_RECORD_LENGTH: number = 64 * 1024;

        static MAX_TRANSACTION_LENGTH: number = 64 * 1024;

        /**
         * the {@link TransactionRecord} object to be written to record stream file
         */
        /*private*/ transactionRecord: TransactionRecord;

        /**
         * the {@link Transaction} object to be written to record stream file
         */
        /*private*/ transaction: Transaction;

        /**
         * the consensus timestamp of this {@link TransactionRecord} object,
         * this field is used for deciding wether to start a new record stream file,
         * and for generating file name when starting to write a new record stream file;
         * this field is not written to record stream file
         */
        /*private*/ consensusTimestamp: java.time.Instant;

        /**
         * this RunningHash instance encapsulates a Hash object which denotes a running Hash calculated from
         * all RecordStreamObject in history up to this RecordStreamObject instance
         */
        /*private*/ runningHash: RunningHash;

        public constructor(transactionRecord?: any, transaction?: any, consensusTimestamp?: any) {
            if (((transactionRecord != null && transactionRecord instanceof <any>TransactionRecord) || transactionRecord === null) && ((transaction != null && transaction instanceof <any>Transaction) || transaction === null) && ((consensusTimestamp != null && consensusTimestamp instanceof <any>java.time.Instant) || consensusTimestamp === null)) {
                let __args = arguments;
                if (this.transactionRecord === undefined) { this.transactionRecord = null; } 
                if (this.transaction === undefined) { this.transaction = null; } 
                if (this.consensusTimestamp === undefined) { this.consensusTimestamp = null; } 
                if (this.runningHash === undefined) { this.runningHash = null; } 
                this.transactionRecord = transactionRecord;
                this.transaction = transaction;
                this.consensusTimestamp = consensusTimestamp;
                this.runningHash = null /*cannot resolve RunningHash*/;
            } else if (transactionRecord === undefined && transaction === undefined && consensusTimestamp === undefined) {
                let __args = arguments;
                if (this.transactionRecord === undefined) { this.transactionRecord = null; } 
                if (this.transaction === undefined) { this.transaction = null; } 
                if (this.consensusTimestamp === undefined) { this.consensusTimestamp = null; } 
                if (this.runningHash === undefined) { this.runningHash = null; } 
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {SerializableDataOutputStream} out
         */
        public serialize(out: SerializableDataOutputStream) {
        }

        /**
         * 
         * @param {SerializableDataInputStream} in
         * @param {number} version
         */
        public deserialize(__in: SerializableDataInputStream, version: number) {
            try {
                this.transactionRecord = ;
                this.transaction = ;
                const timestamp: Timestamp = ;
                this.consensusTimestamp = java.time.Instant.ofEpochSecond(, );
            } catch(t123) {
                console.error(t123.message, t123);
                throw t123;
            }
        }

        /**
         * {@inheritDoc}
         * @return {number}
         */
        public getClassId(): number {
            return RecordStreamObject.CLASS_ID;
        }

        /**
         * {@inheritDoc}
         * @return {number}
         */
        public getVersion(): number {
            return RecordStreamObject.CLASS_VERSION;
        }

        /**
         * 
         * @return {java.time.Instant}
         */
        public getTimestamp(): java.time.Instant {
            return this.consensusTimestamp;
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            return ;
        }

        /**
         * only show TransactionID in the record and consensusTimestamp
         * 
         * @return
         * @return {string}
         */
        public toShortString(): string {
            return ;
        }

        public static toShortStringRecord(transactionRecord: TransactionRecord): string {
            return ;
        }

        /**
         * 
         * @param {*} obj
         * @return {boolean}
         */
        public equals(obj: any): boolean {
            if (obj == null || (<any>obj.constructor) != (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))()){
                return false;
            }
            if (this === obj){
                return true;
            }
            const that: RecordStreamObject = <RecordStreamObject>obj;
            return ;
        }

        /**
         * 
         * @return {number}
         */
        public hashCode(): number {
            return ;
        }

        /**
         * 
         * @return {RunningHash}
         */
        public getRunningHash(): RunningHash {
            return;
        }

        getTransaction(): Transaction {
            return;
        }

        getTransactionRecord(): TransactionRecord {
            return;
        }
    }
    RecordStreamObject["__class"] = "com.grame.services.stream.RecordStreamObject";
    RecordStreamObject["__interfaces"] = ["SerializableRunningHashable","Timestamped"];


}

