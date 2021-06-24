/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.core.jproto {
    export class TxnReceipt implements SelfSerializable {
        static log: Logger; public static log_$LI$(): Logger { if (TxnReceipt.log == null) { TxnReceipt.log = ; }  return TxnReceipt.log; }

        static MAX_STATUS_BYTES: number = 128;

        static MAX_RUNNING_HASH_BYTES: number = 1024;

        static MISSING_SCHEDULED_TXN_ID: com.grame.services.state.submerkle.TxnId = null;

        static MISSING_RUNNING_HASH: number[] = null;

        static MISSING_TOPIC_SEQ_NO: number = 0;

        static MISSING_RUNNING_HASH_VERSION: number = 0;

        static RELEASE_070_VERSION: number = 1;

        static RELEASE_080_VERSION: number = 2;

        static RELEASE_090_VERSION: number = 3;

        static RELEASE_0100_VERSION: number = 4;

        static RELEASE_0110_VERSION: number = 5;

        static RELEASE_0120_VERSION: number = 6;

        static MERKLE_VERSION: number; public static MERKLE_VERSION_$LI$(): number { if (TxnReceipt.MERKLE_VERSION == null) { TxnReceipt.MERKLE_VERSION = TxnReceipt.RELEASE_0120_VERSION; }  return TxnReceipt.MERKLE_VERSION; }

        static RUNTIME_CONSTRUCTABLE_ID: number = 7345184738700488997;

        static serdes: com.grame.services.state.serdes.DomainSerdes; public static serdes_$LI$(): com.grame.services.state.serdes.DomainSerdes { if (TxnReceipt.serdes == null) { TxnReceipt.serdes = new com.grame.services.state.serdes.DomainSerdes(); }  return TxnReceipt.serdes; }

        runningHashVersion: number;

        topicSequenceNumber: number;

        topicRunningHash: number[];

        scheduledTxnId: com.grame.services.state.submerkle.TxnId;

        status: string;

        accountId: com.grame.services.state.submerkle.EntityId;

        fileId: com.grame.services.state.submerkle.EntityId;

        topicId: com.grame.services.state.submerkle.EntityId;

        tokenId: com.grame.services.state.submerkle.EntityId;

        contractId: com.grame.services.state.submerkle.EntityId;

        scheduleId: com.grame.services.state.submerkle.EntityId;

        exchangeRates: com.grame.services.state.submerkle.ExchangeRates;

        newTotalSupply: number;

        public constructor(status?: any, accountId?: any, fileId?: any, contractId?: any, tokenId?: any, scheduleId?: any, exchangeRate?: any, topicId?: any, topicSequenceNumber?: any, topicRunningHash?: any, runningHashVersion?: any, newTotalSupply?: any, scheduledTxnId?: any) {
            if (((typeof status === 'string') || status === null) && ((accountId != null && accountId instanceof <any>com.grame.services.state.submerkle.EntityId) || accountId === null) && ((fileId != null && fileId instanceof <any>com.grame.services.state.submerkle.EntityId) || fileId === null) && ((contractId != null && contractId instanceof <any>com.grame.services.state.submerkle.EntityId) || contractId === null) && ((tokenId != null && tokenId instanceof <any>com.grame.services.state.submerkle.EntityId) || tokenId === null) && ((scheduleId != null && scheduleId instanceof <any>com.grame.services.state.submerkle.EntityId) || scheduleId === null) && ((exchangeRate != null && exchangeRate instanceof <any>com.grame.services.state.submerkle.ExchangeRates) || exchangeRate === null) && ((topicId != null && topicId instanceof <any>com.grame.services.state.submerkle.EntityId) || topicId === null) && ((typeof topicSequenceNumber === 'number') || topicSequenceNumber === null) && ((topicRunningHash != null && topicRunningHash instanceof <any>Array && (topicRunningHash.length == 0 || topicRunningHash[0] == null ||(typeof topicRunningHash[0] === 'number'))) || topicRunningHash === null) && ((typeof runningHashVersion === 'number') || runningHashVersion === null) && ((typeof newTotalSupply === 'number') || newTotalSupply === null) && ((scheduledTxnId != null && scheduledTxnId instanceof <any>com.grame.services.state.submerkle.TxnId) || scheduledTxnId === null)) {
                let __args = arguments;
                if (this.status === undefined) { this.status = null; } 
                if (this.accountId === undefined) { this.accountId = null; } 
                if (this.fileId === undefined) { this.fileId = null; } 
                if (this.topicId === undefined) { this.topicId = null; } 
                if (this.tokenId === undefined) { this.tokenId = null; } 
                if (this.contractId === undefined) { this.contractId = null; } 
                if (this.scheduleId === undefined) { this.scheduleId = null; } 
                if (this.exchangeRates === undefined) { this.exchangeRates = null; } 
                this.runningHashVersion = TxnReceipt.MISSING_RUNNING_HASH_VERSION;
                this.topicSequenceNumber = TxnReceipt.MISSING_TOPIC_SEQ_NO;
                this.topicRunningHash = TxnReceipt.MISSING_RUNNING_HASH;
                this.scheduledTxnId = TxnReceipt.MISSING_SCHEDULED_TXN_ID;
                this.newTotalSupply = -1;
                this.status = status;
                this.accountId = accountId;
                this.fileId = fileId;
                this.contractId = contractId;
                this.exchangeRates = exchangeRate;
                this.topicId = topicId;
                this.tokenId = tokenId;
                this.scheduleId = scheduleId;
                this.topicSequenceNumber = topicSequenceNumber;
                this.topicRunningHash = ((topicRunningHash !== TxnReceipt.MISSING_RUNNING_HASH) && (topicRunningHash.length > 0)) ? topicRunningHash : TxnReceipt.MISSING_RUNNING_HASH;
                this.runningHashVersion = runningHashVersion;
                this.newTotalSupply = newTotalSupply;
                this.scheduledTxnId = scheduledTxnId;
            } else if (((typeof status === 'string') || status === null) && ((accountId != null && accountId instanceof <any>com.grame.services.state.submerkle.EntityId) || accountId === null) && ((fileId != null && fileId instanceof <any>com.grame.services.state.submerkle.EntityId) || fileId === null) && ((contractId != null && contractId instanceof <any>com.grame.services.state.submerkle.EntityId) || contractId === null) && ((tokenId != null && tokenId instanceof <any>com.grame.services.state.submerkle.EntityId) || tokenId === null) && ((scheduleId != null && scheduleId instanceof <any>com.grame.services.state.submerkle.EntityId) || scheduleId === null) && ((exchangeRate != null && exchangeRate instanceof <any>com.grame.services.state.submerkle.ExchangeRates) || exchangeRate === null) && ((topicId != null && topicId instanceof <any>com.grame.services.state.submerkle.EntityId) || topicId === null) && ((typeof topicSequenceNumber === 'number') || topicSequenceNumber === null) && ((topicRunningHash != null && topicRunningHash instanceof <any>Array && (topicRunningHash.length == 0 || topicRunningHash[0] == null ||(typeof topicRunningHash[0] === 'number'))) || topicRunningHash === null) && ((typeof runningHashVersion === 'number') || runningHashVersion === null) && newTotalSupply === undefined && scheduledTxnId === undefined) {
                let __args = arguments;
                let exchangeRates: any = __args[6];
                {
                    let __args = arguments;
                    let exchangeRate: any = exchangeRates;
                    let newTotalSupply: any = TxnReceipt.RELEASE_070_VERSION;
                    let scheduledTxnId: any = TxnReceipt.MISSING_SCHEDULED_TXN_ID;
                    if (this.status === undefined) { this.status = null; } 
                    if (this.accountId === undefined) { this.accountId = null; } 
                    if (this.fileId === undefined) { this.fileId = null; } 
                    if (this.topicId === undefined) { this.topicId = null; } 
                    if (this.tokenId === undefined) { this.tokenId = null; } 
                    if (this.contractId === undefined) { this.contractId = null; } 
                    if (this.scheduleId === undefined) { this.scheduleId = null; } 
                    if (this.exchangeRates === undefined) { this.exchangeRates = null; } 
                    this.runningHashVersion = TxnReceipt.MISSING_RUNNING_HASH_VERSION;
                    this.topicSequenceNumber = TxnReceipt.MISSING_TOPIC_SEQ_NO;
                    this.topicRunningHash = TxnReceipt.MISSING_RUNNING_HASH;
                    this.scheduledTxnId = TxnReceipt.MISSING_SCHEDULED_TXN_ID;
                    this.newTotalSupply = -1;
                    this.status = status;
                    this.accountId = accountId;
                    this.fileId = fileId;
                    this.contractId = contractId;
                    this.exchangeRates = exchangeRate;
                    this.topicId = topicId;
                    this.tokenId = tokenId;
                    this.scheduleId = scheduleId;
                    this.topicSequenceNumber = topicSequenceNumber;
                    this.topicRunningHash = ((topicRunningHash !== TxnReceipt.MISSING_RUNNING_HASH) && (topicRunningHash.length > 0)) ? topicRunningHash : TxnReceipt.MISSING_RUNNING_HASH;
                    this.runningHashVersion = runningHashVersion;
                    this.newTotalSupply = newTotalSupply;
                    this.scheduledTxnId = scheduledTxnId;
                }
                if (this.status === undefined) { this.status = null; } 
                if (this.accountId === undefined) { this.accountId = null; } 
                if (this.fileId === undefined) { this.fileId = null; } 
                if (this.topicId === undefined) { this.topicId = null; } 
                if (this.tokenId === undefined) { this.tokenId = null; } 
                if (this.contractId === undefined) { this.contractId = null; } 
                if (this.scheduleId === undefined) { this.scheduleId = null; } 
                if (this.exchangeRates === undefined) { this.exchangeRates = null; } 
                this.runningHashVersion = TxnReceipt.MISSING_RUNNING_HASH_VERSION;
                this.topicSequenceNumber = TxnReceipt.MISSING_TOPIC_SEQ_NO;
                this.topicRunningHash = TxnReceipt.MISSING_RUNNING_HASH;
                this.scheduledTxnId = TxnReceipt.MISSING_SCHEDULED_TXN_ID;
                this.newTotalSupply = -1;
            } else if (((typeof status === 'string') || status === null) && ((accountId != null && accountId instanceof <any>com.grame.services.state.submerkle.EntityId) || accountId === null) && ((fileId != null && fileId instanceof <any>com.grame.services.state.submerkle.EntityId) || fileId === null) && ((contractId != null && contractId instanceof <any>com.grame.services.state.submerkle.EntityId) || contractId === null) && ((tokenId != null && tokenId instanceof <any>com.grame.services.state.submerkle.EntityId) || tokenId === null) && ((scheduleId != null && scheduleId instanceof <any>com.grame.services.state.submerkle.EntityId) || scheduleId === null) && ((exchangeRate != null && exchangeRate instanceof <any>com.grame.services.state.submerkle.ExchangeRates) || exchangeRate === null) && ((topicId != null && topicId instanceof <any>com.grame.services.state.submerkle.EntityId) || topicId === null) && ((typeof topicSequenceNumber === 'number') || topicSequenceNumber === null) && ((topicRunningHash != null && topicRunningHash instanceof <any>Array && (topicRunningHash.length == 0 || topicRunningHash[0] == null ||(typeof topicRunningHash[0] === 'number'))) || topicRunningHash === null) && runningHashVersion === undefined && newTotalSupply === undefined && scheduledTxnId === undefined) {
                let __args = arguments;
                let exchangeRates: any = __args[6];
                {
                    let __args = arguments;
                    let runningHashVersion: any = TxnReceipt.MISSING_RUNNING_HASH_VERSION;
                    {
                        let __args = arguments;
                        let exchangeRate: any = exchangeRates;
                        let newTotalSupply: any = TxnReceipt.RELEASE_070_VERSION;
                        let scheduledTxnId: any = TxnReceipt.MISSING_SCHEDULED_TXN_ID;
                        if (this.status === undefined) { this.status = null; } 
                        if (this.accountId === undefined) { this.accountId = null; } 
                        if (this.fileId === undefined) { this.fileId = null; } 
                        if (this.topicId === undefined) { this.topicId = null; } 
                        if (this.tokenId === undefined) { this.tokenId = null; } 
                        if (this.contractId === undefined) { this.contractId = null; } 
                        if (this.scheduleId === undefined) { this.scheduleId = null; } 
                        if (this.exchangeRates === undefined) { this.exchangeRates = null; } 
                        this.runningHashVersion = TxnReceipt.MISSING_RUNNING_HASH_VERSION;
                        this.topicSequenceNumber = TxnReceipt.MISSING_TOPIC_SEQ_NO;
                        this.topicRunningHash = TxnReceipt.MISSING_RUNNING_HASH;
                        this.scheduledTxnId = TxnReceipt.MISSING_SCHEDULED_TXN_ID;
                        this.newTotalSupply = -1;
                        this.status = status;
                        this.accountId = accountId;
                        this.fileId = fileId;
                        this.contractId = contractId;
                        this.exchangeRates = exchangeRate;
                        this.topicId = topicId;
                        this.tokenId = tokenId;
                        this.scheduleId = scheduleId;
                        this.topicSequenceNumber = topicSequenceNumber;
                        this.topicRunningHash = ((topicRunningHash !== TxnReceipt.MISSING_RUNNING_HASH) && (topicRunningHash.length > 0)) ? topicRunningHash : TxnReceipt.MISSING_RUNNING_HASH;
                        this.runningHashVersion = runningHashVersion;
                        this.newTotalSupply = newTotalSupply;
                        this.scheduledTxnId = scheduledTxnId;
                    }
                    if (this.status === undefined) { this.status = null; } 
                    if (this.accountId === undefined) { this.accountId = null; } 
                    if (this.fileId === undefined) { this.fileId = null; } 
                    if (this.topicId === undefined) { this.topicId = null; } 
                    if (this.tokenId === undefined) { this.tokenId = null; } 
                    if (this.contractId === undefined) { this.contractId = null; } 
                    if (this.scheduleId === undefined) { this.scheduleId = null; } 
                    if (this.exchangeRates === undefined) { this.exchangeRates = null; } 
                    this.runningHashVersion = TxnReceipt.MISSING_RUNNING_HASH_VERSION;
                    this.topicSequenceNumber = TxnReceipt.MISSING_TOPIC_SEQ_NO;
                    this.topicRunningHash = TxnReceipt.MISSING_RUNNING_HASH;
                    this.scheduledTxnId = TxnReceipt.MISSING_SCHEDULED_TXN_ID;
                    this.newTotalSupply = -1;
                }
                if (this.status === undefined) { this.status = null; } 
                if (this.accountId === undefined) { this.accountId = null; } 
                if (this.fileId === undefined) { this.fileId = null; } 
                if (this.topicId === undefined) { this.topicId = null; } 
                if (this.tokenId === undefined) { this.tokenId = null; } 
                if (this.contractId === undefined) { this.contractId = null; } 
                if (this.scheduleId === undefined) { this.scheduleId = null; } 
                if (this.exchangeRates === undefined) { this.exchangeRates = null; } 
                this.runningHashVersion = TxnReceipt.MISSING_RUNNING_HASH_VERSION;
                this.topicSequenceNumber = TxnReceipt.MISSING_TOPIC_SEQ_NO;
                this.topicRunningHash = TxnReceipt.MISSING_RUNNING_HASH;
                this.scheduledTxnId = TxnReceipt.MISSING_SCHEDULED_TXN_ID;
                this.newTotalSupply = -1;
            } else if (status === undefined && accountId === undefined && fileId === undefined && contractId === undefined && tokenId === undefined && scheduleId === undefined && exchangeRate === undefined && topicId === undefined && topicSequenceNumber === undefined && topicRunningHash === undefined && runningHashVersion === undefined && newTotalSupply === undefined && scheduledTxnId === undefined) {
                let __args = arguments;
                if (this.status === undefined) { this.status = null; } 
                if (this.accountId === undefined) { this.accountId = null; } 
                if (this.fileId === undefined) { this.fileId = null; } 
                if (this.topicId === undefined) { this.topicId = null; } 
                if (this.tokenId === undefined) { this.tokenId = null; } 
                if (this.contractId === undefined) { this.contractId = null; } 
                if (this.scheduleId === undefined) { this.scheduleId = null; } 
                if (this.exchangeRates === undefined) { this.exchangeRates = null; } 
                this.runningHashVersion = TxnReceipt.MISSING_RUNNING_HASH_VERSION;
                this.topicSequenceNumber = TxnReceipt.MISSING_TOPIC_SEQ_NO;
                this.topicRunningHash = TxnReceipt.MISSING_RUNNING_HASH;
                this.scheduledTxnId = TxnReceipt.MISSING_SCHEDULED_TXN_ID;
                this.newTotalSupply = -1;
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @return {number}
         */
        public getClassId(): number {
            return TxnReceipt.RUNTIME_CONSTRUCTABLE_ID;
        }

        /**
         * 
         * @return {number}
         */
        public getVersion(): number {
            return TxnReceipt.MERKLE_VERSION_$LI$();
        }

        /**
         * 
         * @param {SerializableDataOutputStream} out
         */
        public serialize(out: SerializableDataOutputStream) {
            TxnReceipt.serdes_$LI$().writeNullableSerializable<any>(this.accountId, out);
            TxnReceipt.serdes_$LI$().writeNullableSerializable<any>(this.fileId, out);
            TxnReceipt.serdes_$LI$().writeNullableSerializable<any>(this.contractId, out);
            TxnReceipt.serdes_$LI$().writeNullableSerializable<any>(this.topicId, out);
            TxnReceipt.serdes_$LI$().writeNullableSerializable<any>(this.tokenId, out);
            TxnReceipt.serdes_$LI$().writeNullableSerializable<any>(this.scheduleId, out);
            if (this.topicRunningHash === TxnReceipt.MISSING_RUNNING_HASH){
            } else {
            }
            TxnReceipt.serdes_$LI$().writeNullableSerializable<any>(this.scheduledTxnId, out);
        }

        /**
         * 
         * @param {SerializableDataInputStream} in
         * @param {number} version
         */
        public deserialize(__in: SerializableDataInputStream, version: number) {
            try {
                this.status = ;
                this.exchangeRates = ;
                this.accountId = <any>(TxnReceipt.serdes_$LI$().readNullableSerializable<any>(__in));
                this.fileId = <any>(TxnReceipt.serdes_$LI$().readNullableSerializable<any>(__in));
                this.contractId = <any>(TxnReceipt.serdes_$LI$().readNullableSerializable<any>(__in));
                this.topicId = <any>(TxnReceipt.serdes_$LI$().readNullableSerializable<any>(__in));
                if (version > TxnReceipt.RELEASE_070_VERSION){
                    this.tokenId = <any>(TxnReceipt.serdes_$LI$().readNullableSerializable<any>(__in));
                }
                if (version >= TxnReceipt.RELEASE_0110_VERSION){
                    this.scheduleId = <any>(TxnReceipt.serdes_$LI$().readNullableSerializable<any>(__in));
                }
                const isSubmitMessageReceipt: ;
                if (isSubmitMessageReceipt){
                    this.topicSequenceNumber = ;
                    this.runningHashVersion = ;
                    this.topicRunningHash = ;
                }
                if (version > TxnReceipt.RELEASE_090_VERSION){
                    this.newTotalSupply = ;
                }
                if (version >= TxnReceipt.RELEASE_0120_VERSION){
                    this.scheduledTxnId = <any>(TxnReceipt.serdes_$LI$().readNullableSerializable<any>(__in));
                }
            } catch(t123) {
                console.error(t123.message, t123);
                throw t123;
            }
        }

        public getRunningHashVersion(): number {
            return this.runningHashVersion;
        }

        public getStatus(): string {
            return this.status;
        }

        public getAccountId(): com.grame.services.state.submerkle.EntityId {
            return this.accountId;
        }

        public getFileId(): com.grame.services.state.submerkle.EntityId {
            return this.fileId;
        }

        public getContractId(): com.grame.services.state.submerkle.EntityId {
            return this.contractId;
        }

        public getExchangeRates(): com.grame.services.state.submerkle.ExchangeRates {
            return this.exchangeRates;
        }

        public getTopicId(): com.grame.services.state.submerkle.EntityId {
            return this.topicId;
        }

        public getTokenId(): com.grame.services.state.submerkle.EntityId {
            return this.tokenId;
        }

        public getScheduleId(): com.grame.services.state.submerkle.EntityId {
            return this.scheduleId;
        }

        public getTopicSequenceNumber(): number {
            return this.topicSequenceNumber;
        }

        public getTopicRunningHash(): number[] {
            return this.topicRunningHash;
        }

        public getNewTotalSupply(): number {
            return this.newTotalSupply;
        }

        public getScheduledTxnId(): com.grame.services.state.submerkle.TxnId {
            return this.scheduledTxnId;
        }

        /**
         * 
         * @param {*} o
         * @return {boolean}
         */
        public equals(o: any): boolean {
            if (this === o){
                return true;
            }
            if (o == null || (<any>this.constructor) !== (<any>o.constructor)){
                return false;
            }
            const that: TxnReceipt = <TxnReceipt>o;
            return this.runningHashVersion === that.runningHashVersion && java.util.Objects.equals(this.status, that.status) && java.util.Objects.equals(this.accountId, that.accountId) && java.util.Objects.equals(this.fileId, that.fileId) && java.util.Objects.equals(this.contractId, that.contractId) && java.util.Objects.equals(this.topicId, that.topicId) && java.util.Objects.equals(this.tokenId, that.tokenId) && java.util.Objects.equals(this.topicSequenceNumber, that.topicSequenceNumber) && /* equals */((a1, a2) => { if(a1==null && a2==null) return true; if(a1==null || a2==null) return false; if(a1.length != a2.length) return false; for(let i = 0; i < a1.length; i++) { if(<any>a1[i] != <any>a2[i]) return false; } return true; })(this.topicRunningHash, that.topicRunningHash) && java.util.Objects.equals(this.newTotalSupply, that.newTotalSupply) && java.util.Objects.equals(this.scheduledTxnId, that.scheduledTxnId);
        }

        /**
         * 
         * @return {number}
         */
        public hashCode(): number {
            return /* hash */0;
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            const helper: ;
            if (this.accountId != null){
            }
            if (this.fileId != null){
            }
            if (this.tokenId != null){
            }
            if (this.contractId != null){
            }
            if (this.topicId != null){
            }
            if (this.topicRunningHash !== TxnReceipt.MISSING_RUNNING_HASH){
            }
            if (this.scheduledTxnId !== TxnReceipt.MISSING_SCHEDULED_TXN_ID){
            }
            return ;
        }

        public static fromGrpc(grpc: TransactionReceipt): TxnReceipt {
            const status: string = (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() != null ?  : null;
            const accountId: com.grame.services.state.submerkle.EntityId =  ? com.grame.services.state.submerkle.EntityId.ofNullableAccountId() : null;
            const jFileID: com.grame.services.state.submerkle.EntityId =  ? com.grame.services.state.submerkle.EntityId.ofNullableFileId() : null;
            const jContractID: com.grame.services.state.submerkle.EntityId =  ? com.grame.services.state.submerkle.EntityId.ofNullableContractId() : null;
            const topicId: com.grame.services.state.submerkle.EntityId =  ? com.grame.services.state.submerkle.EntityId.ofNullableTopicId() : null;
            const tokenId: com.grame.services.state.submerkle.EntityId =  ? com.grame.services.state.submerkle.EntityId.ofNullableTokenId() : null;
            const scheduleId: com.grame.services.state.submerkle.EntityId =  ? com.grame.services.state.submerkle.EntityId.ofNullableScheduleId() : null;
            const runningHashVersion: number = Math.max(TxnReceipt.MISSING_RUNNING_HASH_VERSION, );
            const newTotalSupply: number = ;
            const scheduledTxnId: com.grame.services.state.submerkle.TxnId =  ? com.grame.services.state.submerkle.TxnId.fromGrpc() : TxnReceipt.MISSING_SCHEDULED_TXN_ID;
            return new TxnReceipt(status, accountId, jFileID, jContractID, tokenId, scheduleId, com.grame.services.state.submerkle.ExchangeRates.fromGrpc(), topicId, , , runningHashVersion, newTotalSupply, scheduledTxnId);
        }

        public toGrpc(): TransactionReceipt {
            return TxnReceipt.convert(this);
        }

        public static convert(txReceipt: TxnReceipt): TransactionReceipt {
            const __var_builder: TransactionReceipt.Builder = ;
            if (txReceipt.getAccountId() != null){
            }
            if (txReceipt.getFileId() != null){
            }
            if (txReceipt.getContractId() != null){
            }
            if (txReceipt.getTokenId() != null){
            }
            if (txReceipt.getScheduleId() != null){
            }
            if (txReceipt.getExchangeRates() != null){
            }
            if (txReceipt.getTopicId() != null){
                const receiptTopic: 
                if (txReceipt.getTopicSequenceNumber() !== TxnReceipt.MISSING_TOPIC_SEQ_NO){
                }
                if (txReceipt.getTopicRunningHash() !== TxnReceipt.MISSING_RUNNING_HASH){
                }
                if (txReceipt.getRunningHashVersion() !== TxnReceipt.MISSING_RUNNING_HASH_VERSION){
                }
                if (txReceipt.getNewTotalSupply() >= 0){
                }
                if (txReceipt.getScheduledTxnId() !== TxnReceipt.MISSING_SCHEDULED_TXN_ID){
                }
                return ;
            }
        }
        TxnReceipt["__class"] = "com.grame.services.legacy.core.jproto.TxnReceipt";
        TxnReceipt["__interfaces"] = ["SelfSerializable"];


    }

