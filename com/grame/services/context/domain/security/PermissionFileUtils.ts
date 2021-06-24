/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.context.domain.security {
    export class PermissionFileUtils {
        static __static_initialized: boolean = false;
        static __static_initialize() { if (!PermissionFileUtils.__static_initialized) { PermissionFileUtils.__static_initialized = true; PermissionFileUtils.__static_initializer_0(); } }

        static permissionKeys: any; public static permissionKeys_$LI$(): any { PermissionFileUtils.__static_initialize(); if (PermissionFileUtils.permissionKeys == null) { PermissionFileUtils.permissionKeys = new Object<>(grameFunctionality); }  return PermissionFileUtils.permissionKeys; }

        static legacyKeys: any; public static legacyKeys_$LI$(): any { PermissionFileUtils.__static_initialize();  return PermissionFileUtils.legacyKeys; }

        public static permissionFileKeyForTxn(txn: TransactionBody): string {
            try {
                return PermissionFileUtils.permissionKeys_$LI$().get(com.grame.services.utils.MiscUtils.functionOf(txn));
            } catch(ignore) {
                return "";
            }
        }

        public static permissionFileKeyForQuery(query: Query): string {
            if ( === TRANSACTIONGETFASTRECORD){
                return "getFastTransactionRecord";
            } else {
                return ;
            }
        }

        static  __static_initializer_0() {
            PermissionFileUtils.permissionKeys_$LI$().put(CryptoCreate, "createAccount");
            PermissionFileUtils.permissionKeys_$LI$().put(CryptoTransfer, "cryptoTransfer");
            PermissionFileUtils.permissionKeys_$LI$().put(CryptoUpdate, "updateAccount");
            PermissionFileUtils.permissionKeys_$LI$().put(CryptoDelete, "cryptoDelete");
            PermissionFileUtils.permissionKeys_$LI$().put(CryptoAddLiveHash, "addLiveHash");
            PermissionFileUtils.permissionKeys_$LI$().put(CryptoDeleteLiveHash, "deleteLiveHash");
            PermissionFileUtils.permissionKeys_$LI$().put(FileCreate, "createFile");
            PermissionFileUtils.permissionKeys_$LI$().put(FileUpdate, "updateFile");
            PermissionFileUtils.permissionKeys_$LI$().put(FileDelete, "deleteFile");
            PermissionFileUtils.permissionKeys_$LI$().put(FileAppend, "appendContent");
            PermissionFileUtils.permissionKeys_$LI$().put(ContractCreate, "createContract");
            PermissionFileUtils.permissionKeys_$LI$().put(ContractUpdate, "updateContract");
            PermissionFileUtils.permissionKeys_$LI$().put(ContractCall, "contractCallMethod");
            PermissionFileUtils.permissionKeys_$LI$().put(ContractDelete, "deleteContract");
            PermissionFileUtils.permissionKeys_$LI$().put(ConsensusCreateTopic, "createTopic");
            PermissionFileUtils.permissionKeys_$LI$().put(ConsensusUpdateTopic, "updateTopic");
            PermissionFileUtils.permissionKeys_$LI$().put(ConsensusDeleteTopic, "deleteTopic");
            PermissionFileUtils.permissionKeys_$LI$().put(ConsensusSubmitMessage, "submitMessage");
            PermissionFileUtils.permissionKeys_$LI$().put(TokenCreate, "tokenCreate");
            PermissionFileUtils.permissionKeys_$LI$().put(TokenFreezeAccount, "tokenFreezeAccount");
            PermissionFileUtils.permissionKeys_$LI$().put(TokenUnfreezeAccount, "tokenUnfreezeAccount");
            PermissionFileUtils.permissionKeys_$LI$().put(TokenGrantKycToAccount, "tokenGrantKycToAccount");
            PermissionFileUtils.permissionKeys_$LI$().put(TokenRevokeKycFromAccount, "tokenRevokeKycFromAccount");
            PermissionFileUtils.permissionKeys_$LI$().put(TokenDelete, "tokenDelete");
            PermissionFileUtils.permissionKeys_$LI$().put(TokenMint, "tokenMint");
            PermissionFileUtils.permissionKeys_$LI$().put(TokenBurn, "tokenBurn");
            PermissionFileUtils.permissionKeys_$LI$().put(TokenAccountWipe, "tokenAccountWipe");
            PermissionFileUtils.permissionKeys_$LI$().put(TokenUpdate, "tokenUpdate");
            PermissionFileUtils.permissionKeys_$LI$().put(TokenAssociateToAccount, "tokenAssociateToAccount");
            PermissionFileUtils.permissionKeys_$LI$().put(TokenDissociateFromAccount, "tokenDissociateFromAccount");
            PermissionFileUtils.permissionKeys_$LI$().put(SystemDelete, "systemDelete");
            PermissionFileUtils.permissionKeys_$LI$().put(SystemUndelete, "systemUndelete");
            PermissionFileUtils.permissionKeys_$LI$().put(Freeze, "freeze");
            PermissionFileUtils.permissionKeys_$LI$().put(UncheckedSubmit, "uncheckedSubmit");
            PermissionFileUtils.permissionKeys_$LI$().put(ScheduleCreate, "scheduleCreate");
            PermissionFileUtils.permissionKeys_$LI$().put(ScheduleDelete, "scheduleDelete");
            PermissionFileUtils.permissionKeys_$LI$().put(ScheduleSign, "scheduleSign");
            PermissionFileUtils.permissionKeys_$LI$().put(ConsensusGetTopicInfo, "getTopicInfo");
            PermissionFileUtils.permissionKeys_$LI$().put(GetBySolidityID, "getBySolidityID");
            PermissionFileUtils.permissionKeys_$LI$().put(ContractCallLocal, "contractCallLocalMethod");
            PermissionFileUtils.permissionKeys_$LI$().put(ContractGetInfo, "getContractInfo");
            PermissionFileUtils.permissionKeys_$LI$().put(ContractGetBytecode, "contractGetBytecode");
            PermissionFileUtils.permissionKeys_$LI$().put(ContractGetRecords, "getTxRecordByContractID");
            PermissionFileUtils.permissionKeys_$LI$().put(CryptoGetAccountBalance, "cryptoGetBalance");
            PermissionFileUtils.permissionKeys_$LI$().put(CryptoGetAccountRecords, "getAccountRecords");
            PermissionFileUtils.permissionKeys_$LI$().put(CryptoGetInfo, "getAccountInfo");
            PermissionFileUtils.permissionKeys_$LI$().put(CryptoGetLiveHash, "getLiveHash");
            PermissionFileUtils.permissionKeys_$LI$().put(FileGetContents, "getFileContent");
            PermissionFileUtils.permissionKeys_$LI$().put(FileGetInfo, "getFileInfo");
            PermissionFileUtils.permissionKeys_$LI$().put(TransactionGetReceipt, "getTransactionReceipts");
            PermissionFileUtils.permissionKeys_$LI$().put(TransactionGetRecord, "getTxRecordByTxID");
            PermissionFileUtils.permissionKeys_$LI$().put(GetVersionInfo, "getVersionInfo");
            PermissionFileUtils.permissionKeys_$LI$().put(TokenGetInfo, "tokenGetInfo");
            PermissionFileUtils.permissionKeys_$LI$().put(ScheduleGetInfo, "scheduleGetInfo");
            PermissionFileUtils.legacyKeys = <any>(PermissionFileUtils.permissionKeys.entrySet().stream().collect<any>(java.util.stream.Collectors.toMap<any, any, any>((instance$Entry) => { return instance$Entry.getValue() }, (instance$Entry) => { return instance$Entry.getKey() })));
        }
    }
    PermissionFileUtils["__class"] = "com.grame.services.context.domain.security.PermissionFileUtils";

}


com.grame.services.context.domain.security.PermissionFileUtils.__static_initialize();
