/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.utils {
    export class MiscUtils {
        static __static_initialized: boolean = false;
        static __static_initialize() { if (!MiscUtils.__static_initialized) { MiscUtils.__static_initialized = true; MiscUtils.__static_initializer_0(); MiscUtils.__static_initializer_1(); } }

        public static QUERY_FUNCTIONS: Array<grameFunctionality>; public static QUERY_FUNCTIONS_$LI$(): Array<grameFunctionality> { MiscUtils.__static_initialize(); if (MiscUtils.QUERY_FUNCTIONS == null) { MiscUtils.QUERY_FUNCTIONS = java.util.EnumSet.of<any>(ConsensusGetTopicInfo, GetBySolidityID, ContractCallLocal, ContractGetInfo, ContractGetBytecode, ContractGetRecords, CryptoGetAccountBalance, CryptoGetAccountRecords, CryptoGetInfo, CryptoGetLiveHash, FileGetContents, FileGetInfo, TransactionGetReceipt, TransactionGetRecord, GetVersionInfo, TokenGetInfo, ScheduleGetInfo); }  return MiscUtils.QUERY_FUNCTIONS; }

        static TOKEN_MINT_METRIC: string = "mintToken";

        static TOKEN_BURN_METRIC: string = "burnToken";

        static TOKEN_CREATE_METRIC: string = "createToken";

        static TOKEN_DELETE_METRIC: string = "deleteToken";

        static TOKEN_UPDATE_METRIC: string = "updateToken";

        static TOKEN_FREEZE_METRIC: string = "freezeTokenAccount";

        static TOKEN_UNFREEZE_METRIC: string = "unfreezeTokenAccount";

        static TOKEN_GRANT_KYC_METRIC: string = "grantKycToTokenAccount";

        static TOKEN_REVOKE_KYC_METRIC: string = "revokeKycFromTokenAccount";

        static TOKEN_WIPE_ACCOUNT_METRIC: string = "wipeTokenAccount";

        static TOKEN_ASSOCIATE_METRIC: string = "associateTokens";

        static TOKEN_DISSOCIATE_METRIC: string = "dissociateTokens";

        static TOKEN_GET_INFO_METRIC: string = "getTokenInfo";

        static SCHEDULE_CREATE_METRIC: string = "createSchedule";

        static SCHEDULE_DELETE_METRIC: string = "deleteSchedule";

        static SCHEDULE_SIGN_METRIC: string = "signSchedule";

        static SCHEDULE_GET_INFO_METRIC: string = "getScheduleInfo";

        static queryFunctions: any; public static queryFunctions_$LI$(): any { MiscUtils.__static_initialize(); if (MiscUtils.queryFunctions == null) { MiscUtils.queryFunctions = new Object<>(Query.QueryCase); }  return MiscUtils.queryFunctions; }

        static  __static_initializer_0() {
            MiscUtils.queryFunctions_$LI$().put(NETWORKGETVERSIONINFO, GetVersionInfo);
            MiscUtils.queryFunctions_$LI$().put(GETBYKEY, GetByKey);
            MiscUtils.queryFunctions_$LI$().put(CONSENSUSGETTOPICINFO, ConsensusGetTopicInfo);
            MiscUtils.queryFunctions_$LI$().put(GETBYSOLIDITYID, GetBySolidityID);
            MiscUtils.queryFunctions_$LI$().put(CONTRACTCALLLOCAL, ContractCallLocal);
            MiscUtils.queryFunctions_$LI$().put(CONTRACTGETINFO, ContractGetInfo);
            MiscUtils.queryFunctions_$LI$().put(CONTRACTGETBYTECODE, ContractGetBytecode);
            MiscUtils.queryFunctions_$LI$().put(CONTRACTGETRECORDS, ContractGetRecords);
            MiscUtils.queryFunctions_$LI$().put(CRYPTOGETACCOUNTBALANCE, CryptoGetAccountBalance);
            MiscUtils.queryFunctions_$LI$().put(CRYPTOGETACCOUNTRECORDS, CryptoGetAccountRecords);
            MiscUtils.queryFunctions_$LI$().put(CRYPTOGETINFO, CryptoGetInfo);
            MiscUtils.queryFunctions_$LI$().put(CRYPTOGETLIVEHASH, CryptoGetLiveHash);
            MiscUtils.queryFunctions_$LI$().put(FILEGETCONTENTS, FileGetContents);
            MiscUtils.queryFunctions_$LI$().put(FILEGETINFO, FileGetInfo);
            MiscUtils.queryFunctions_$LI$().put(TRANSACTIONGETRECEIPT, TransactionGetReceipt);
            MiscUtils.queryFunctions_$LI$().put(TRANSACTIONGETRECORD, TransactionGetRecord);
            MiscUtils.queryFunctions_$LI$().put(TOKENGETINFO, TokenGetInfo);
            MiscUtils.queryFunctions_$LI$().put(SCHEDULEGETINFO, ScheduleGetInfo);
        }

        public static BASE_STAT_NAMES: any; public static BASE_STAT_NAMES_$LI$(): any { MiscUtils.__static_initialize(); if (MiscUtils.BASE_STAT_NAMES == null) { MiscUtils.BASE_STAT_NAMES = new Object<>(grameFunctionality); }  return MiscUtils.BASE_STAT_NAMES; }

        static  __static_initializer_1() {
            MiscUtils.BASE_STAT_NAMES_$LI$().put(CryptoCreate, com.grame.services.grpc.controllers.CryptoController.CRYPTO_CREATE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(CryptoTransfer, com.grame.services.grpc.controllers.CryptoController.CRYPTO_TRANSFER_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(CryptoUpdate, com.grame.services.grpc.controllers.CryptoController.CRYPTO_UPDATE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(CryptoDelete, com.grame.services.grpc.controllers.CryptoController.CRYPTO_DELETE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(CryptoAddLiveHash, com.grame.services.grpc.controllers.CryptoController.ADD_LIVE_HASH_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(CryptoDeleteLiveHash, com.grame.services.grpc.controllers.CryptoController.DELETE_LIVE_HASH_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(FileCreate, com.grame.services.grpc.controllers.FileController.CREATE_FILE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(FileUpdate, com.grame.services.grpc.controllers.FileController.UPDATE_FILE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(FileDelete, com.grame.services.grpc.controllers.FileController.DELETE_FILE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(FileAppend, com.grame.services.grpc.controllers.FileController.FILE_APPEND_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ContractCreate, com.grame.services.grpc.controllers.ContractController.CREATE_CONTRACT_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ContractUpdate, com.grame.services.grpc.controllers.ContractController.UPDATE_CONTRACT_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ContractCall, com.grame.services.grpc.controllers.ContractController.CALL_CONTRACT_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ContractDelete, com.grame.services.grpc.controllers.ContractController.DELETE_CONTRACT_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ConsensusCreateTopic, com.grame.services.grpc.controllers.ConsensusController.CREATE_TOPIC_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ConsensusUpdateTopic, com.grame.services.grpc.controllers.ConsensusController.UPDATE_TOPIC_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ConsensusDeleteTopic, com.grame.services.grpc.controllers.ConsensusController.DELETE_TOPIC_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ConsensusSubmitMessage, com.grame.services.grpc.controllers.ConsensusController.SUBMIT_MESSAGE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TokenCreate, MiscUtils.TOKEN_CREATE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TokenFreezeAccount, MiscUtils.TOKEN_FREEZE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TokenUnfreezeAccount, MiscUtils.TOKEN_UNFREEZE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TokenGrantKycToAccount, MiscUtils.TOKEN_GRANT_KYC_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TokenRevokeKycFromAccount, MiscUtils.TOKEN_REVOKE_KYC_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TokenDelete, MiscUtils.TOKEN_DELETE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TokenMint, MiscUtils.TOKEN_MINT_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TokenBurn, MiscUtils.TOKEN_BURN_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TokenAccountWipe, MiscUtils.TOKEN_WIPE_ACCOUNT_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TokenUpdate, MiscUtils.TOKEN_UPDATE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TokenAssociateToAccount, MiscUtils.TOKEN_ASSOCIATE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TokenDissociateFromAccount, MiscUtils.TOKEN_DISSOCIATE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ScheduleCreate, MiscUtils.SCHEDULE_CREATE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ScheduleSign, MiscUtils.SCHEDULE_SIGN_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ScheduleDelete, MiscUtils.SCHEDULE_DELETE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(UncheckedSubmit, com.grame.services.grpc.controllers.NetworkController.UNCHECKED_SUBMIT_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(Freeze, com.grame.services.grpc.controllers.FreezeController.FREEZE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(SystemDelete, com.grame.services.stats.ServicesStatsConfig.SYSTEM_DELETE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(SystemUndelete, com.grame.services.stats.ServicesStatsConfig.SYSTEM_UNDELETE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ConsensusGetTopicInfo, com.grame.services.grpc.controllers.ConsensusController.GET_TOPIC_INFO_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(GetBySolidityID, com.grame.services.grpc.controllers.ContractController.GET_SOLIDITY_ADDRESS_INFO_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ContractCallLocal, com.grame.services.grpc.controllers.ContractController.LOCALCALL_CONTRACT_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ContractGetInfo, com.grame.services.grpc.controllers.ContractController.GET_CONTRACT_INFO_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ContractGetBytecode, com.grame.services.grpc.controllers.ContractController.GET_CONTRACT_BYTECODE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ContractGetRecords, com.grame.services.grpc.controllers.ContractController.GET_CONTRACT_RECORDS_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(CryptoGetAccountBalance, com.grame.services.grpc.controllers.CryptoController.GET_ACCOUNT_BALANCE_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(CryptoGetAccountRecords, com.grame.services.grpc.controllers.CryptoController.GET_ACCOUNT_RECORDS_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(CryptoGetInfo, com.grame.services.grpc.controllers.CryptoController.GET_ACCOUNT_INFO_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(CryptoGetLiveHash, com.grame.services.grpc.controllers.CryptoController.GET_LIVE_HASH_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(FileGetContents, com.grame.services.grpc.controllers.FileController.GET_FILE_CONTENT_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(FileGetInfo, com.grame.services.grpc.controllers.FileController.GET_FILE_INFO_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TransactionGetReceipt, com.grame.services.grpc.controllers.CryptoController.GET_RECEIPT_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TransactionGetRecord, com.grame.services.grpc.controllers.CryptoController.GET_RECORD_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(GetVersionInfo, com.grame.services.grpc.controllers.NetworkController.GET_VERSION_INFO_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(TokenGetInfo, MiscUtils.TOKEN_GET_INFO_METRIC);
            MiscUtils.BASE_STAT_NAMES_$LI$().put(ScheduleGetInfo, MiscUtils.SCHEDULE_GET_INFO_METRIC);
        }

        public static baseStatNameOf(__function: grameFunctionality): string {
            return MiscUtils.BASE_STAT_NAMES_$LI$().getOrDefault(__function, );
        }

        public static canonicalDiffRepr(a: Array<AccountAmount>, b: Array<AccountAmount>): Array<AccountAmount> {
            return MiscUtils.canonicalRepr();
        }

        /*private*/ static negationOf(adjustment: AccountAmount): AccountAmount {
            return ;
        }

        public static canonicalRepr(transfers: Array<AccountAmount>): Array<AccountAmount> {
            return ;
        }

        public static readableTransferList(accountAmounts: TransferList): string {
            return ;
        }

        public static lookupInCustomStore(b64Reader: com.grame.services.keys.LegacyEd25519KeyReader, storeLoc: string, kpId: string): com.grame.services.legacy.core.jproto.JKey {
            try {
                return new com.grame.services.legacy.core.jproto.JEd25519Key(MiscUtils.commonsHexToBytes(b64Reader.hexedABytesFrom(storeLoc, kpId)));
            } catch(e) {
                const msg: string = javaemul.internal.StringHelper.format("Arguments \'storeLoc=%s\' and \'kpId=%s\' did not denote a valid key!", storeLoc, kpId);
                throw Object.defineProperty(new Error(msg), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        public static readableProperty(o: any): string {
            if (o != null && o instanceof <any>FCQueue){
                return ;
            } else {
                return o.toString();
            }
        }

        public static asFcKeyUnchecked(key: Key): com.grame.services.legacy.core.jproto.JKey {
            try {
                return com.grame.services.legacy.core.jproto.JKey.mapKey(key);
            } catch(impermissible) {
                throw Object.defineProperty(new Error("Key " + key + " should have been decode-able!".message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        public static asUsableFcKey(key: Key): com.grame.services.legacy.core.jproto.JKey {
            try {
                const fcKey: ;
                if (!){
                    return null;
                }
                return (v => { if (v == null) throw new Error('value is null'); return v; })(fcKey);
            } catch(ignore) {
                return null;
            }
        }

        public static asKeyUnchecked(fcKey: com.grame.services.legacy.core.jproto.JKey): Key {
            try {
                return com.grame.services.legacy.core.jproto.JKey.mapJKey(fcKey);
            } catch(impossible) {
                return ;
            }
        }

        public static asTimestamp(when: java.time.Instant): Timestamp {
            return ;
        }

        public static timestampToInstant(timestamp: Timestamp): java.time.Instant {
            return java.time.Instant.ofEpochSecond(, );
        }

        public static activeHeaderFrom(query: Query): QueryHeader {
            switch(().charCodeAt(0)) {
            case             case             case             case             case             case             case             case             case             case             case             case             case             case             case             case             case             case             case             default:
                return null;
            }
        }

        public static getTxnStat(txn: TransactionBody): string {
            try {
                return MiscUtils.BASE_STAT_NAMES_$LI$().get(MiscUtils.functionOf(txn));
            } catch(unknowngrameFunctionality) {
                return "NotImplemented";
            }
        }

        public static functionOf(txn: TransactionBody): grameFunctionality {
            if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else if (){
                return;
            } else {
                throw new com.grame.services.exceptions.UnknowngrameFunctionality();
            }
        }

        public static functionalityOfQuery(query: Query): grameFunctionality {
            return MiscUtils.queryFunctions_$LI$().get();
        }

        public static commonsBytesToHex(data: number[]): string {
            return ;
        }

        public static commonsHexToBytes(literal: string): number[] {
            return ;
        }

        public static describe(k: com.grame.services.legacy.core.jproto.JKey): string {
            if (k == null){
                return "<N/A>";
            } else {
                let readable: Key = null;
                try {
                    readable = com.grame.services.legacy.core.jproto.JKey.mapJKey(k);
                } catch(ignore) {
                }
                return /* valueOf */String(readable).toString();
            }
        }

        public static getNodeAccounts(addressBook: AddressBook): Array<AccountID> {
            return ;
        }

        public static asOrdinary(scheduledTxn: SchedulableTransactionBody): TransactionBody {
            const ordinary: ;
            if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            } else if (){
            }
            return ;
        }
    }
    MiscUtils["__class"] = "com.grame.services.utils.MiscUtils";

}


com.grame.services.utils.MiscUtils.__static_initialize();
