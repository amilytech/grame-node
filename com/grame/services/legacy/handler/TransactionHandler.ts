/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.handler {
    export class TransactionHandler {
        public static IS_THROTTLE_EXEMPT: (p1: AccountID) => boolean; public static IS_THROTTLE_EXEMPT_$LI$(): (p1: AccountID) => boolean { if (TransactionHandler.IS_THROTTLE_EXEMPT == null) { TransactionHandler.IS_THROTTLE_EXEMPT = ; }  return TransactionHandler.IS_THROTTLE_EXEMPT; }

        public static MESSAGE_MAX_DEPTH: number = 50;

        /*private*/ UNSUPPORTED_RESPONSE_TYPES: Array<ResponseType>;

        static log: Logger; public static log_$LI$(): Logger { if (TransactionHandler.log == null) { TransactionHandler.log = ; }  return TransactionHandler.log; }

        /*private*/ recordCache: com.grame.services.records.RecordCache;

        /*private*/ precheckVerifier: com.grame.services.sigs.verification.PrecheckVerifier;

        /*private*/ accounts: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>;

        /*private*/ nodeAccount: AccountID;

        /*private*/ txnThrottling: com.grame.services.throttling.TransactionThrottling;

        /*private*/ fees: com.grame.services.fees.FeeCalculator;

        /*private*/ exemptions: com.grame.services.fees.FeeExemptions;

        /*private*/ stateView: () => com.grame.services.context.primitives.StateView;

        /*private*/ basicPrecheck: com.grame.services.txns.validation.BasicPrecheck;

        /*private*/ queryFeeCheck: com.grame.services.queries.validation.QueryFeeCheck;

        /*private*/ accountNums: com.grame.services.config.AccountNumbers;

        /*private*/ systemOpPolicies: com.grame.services.security.ops.SystemOpPolicies;

        /*private*/ platformStatus: com.grame.services.context.CurrentPlatformStatus;

        /*private*/ hapiOpPermissions: com.grame.services.context.domain.security.HapiOpPermissions;

        public static validateTxDepth(transaction: Transaction): boolean {
            return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(TransactionHandler.getDepth(transaction)) <= TransactionHandler.MESSAGE_MAX_DEPTH;
        }

        public static validateTxBodyDepth(transactionBody: TransactionBody): boolean {
            return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(TransactionHandler.getDepth(transactionBody)) < TransactionHandler.MESSAGE_MAX_DEPTH;
        }

        public static getDepth(message: GeneratedMessageV3): number {
            const fields: any = ;
            let depth: number = 0;
            {
                let array134 = /* keySet */Object.keys(fields);
                for(let index133=0; index133 < array134.length; index133++) {
                    let descriptor = array134[index133];
                    {
                        const field: any = /* get */((m,k) => m[k]===undefined?null:m[k])(fields, descriptor);
                        if (field != null && field instanceof <any>GeneratedMessageV3){
                            const fieldMessage: GeneratedMessageV3 = <GeneratedMessageV3>field;
                            depth = Math.max(depth, (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(TransactionHandler.getDepth(fieldMessage)) + 1);
                        } else if (field != null && (field instanceof Array)){
                            {
                                let array136 = <Array<any>><any>field;
                                for(let index135=0; index135 < array136.length; index135++) {
                                    let ele = array136[index135];
                                    {
                                        if (ele != null && ele instanceof <any>GeneratedMessageV3){
                                            depth = Math.max(depth, (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(TransactionHandler.getDepth(<GeneratedMessageV3>ele)) + 1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return depth;
        }

        public static validateTxSize(transaction: Transaction): boolean {
            return .length <= ;
        }

        public static validateQueryHeader(queryHeader: QueryHeader, hasPayment: boolean): boolean {
            let returnFlag: boolean = true;
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(queryHeader) == null || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() == null){
                returnFlag = false;
            } else if (hasPayment){
                returnFlag = ;
            }
            return returnFlag;
        }

        public setBasicPrecheck(basicPrecheck: com.grame.services.txns.validation.BasicPrecheck) {
            this.basicPrecheck = basicPrecheck;
        }

        public setFees(fees: com.grame.services.fees.FeeCalculator) {
            this.fees = fees;
        }

        public constructor(recordCache?: any, accounts?: any, nodeAccount?: any, precheckVerifier?: any, fees?: any, stateView?: any, basicPrecheck?: any, queryFeeCheck?: any, accountNums?: any, systemOpPolicies?: any, exemptions?: any, platformStatus?: any, throttling?: any, hapiOpPermissions?: any) {
            if (((recordCache != null && recordCache instanceof <any>com.grame.services.records.RecordCache) || recordCache === null) && ((typeof accounts === 'function' && (<any>accounts).length === 0) || accounts === null) && ((nodeAccount != null && nodeAccount instanceof <any>AccountID) || nodeAccount === null) && ((precheckVerifier != null && precheckVerifier instanceof <any>com.grame.services.sigs.verification.PrecheckVerifier) || precheckVerifier === null) && ((fees != null && (fees.constructor != null && fees.constructor["__interfaces"] != null && fees.constructor["__interfaces"].indexOf("com.grame.services.fees.FeeCalculator") >= 0)) || fees === null) && ((typeof stateView === 'function' && (<any>stateView).length === 0) || stateView === null) && ((basicPrecheck != null && basicPrecheck instanceof <any>com.grame.services.txns.validation.BasicPrecheck) || basicPrecheck === null) && ((queryFeeCheck != null && queryFeeCheck instanceof <any>com.grame.services.queries.validation.QueryFeeCheck) || queryFeeCheck === null) && ((accountNums != null && accountNums instanceof <any>com.grame.services.config.AccountNumbers) || accountNums === null) && ((systemOpPolicies != null && systemOpPolicies instanceof <any>com.grame.services.security.ops.SystemOpPolicies) || systemOpPolicies === null) && ((exemptions != null && (exemptions.constructor != null && exemptions.constructor["__interfaces"] != null && exemptions.constructor["__interfaces"].indexOf("com.grame.services.fees.FeeExemptions") >= 0)) || exemptions === null) && ((platformStatus != null && (platformStatus.constructor != null && platformStatus.constructor["__interfaces"] != null && platformStatus.constructor["__interfaces"].indexOf("com.grame.services.context.CurrentPlatformStatus") >= 0)) || platformStatus === null) && ((throttling != null && (throttling.constructor != null && throttling.constructor["__interfaces"] != null && throttling.constructor["__interfaces"].indexOf("com.grame.services.throttling.FunctionalityThrottling") >= 0)) || throttling === null) && ((hapiOpPermissions != null && hapiOpPermissions instanceof <any>com.grame.services.context.domain.security.HapiOpPermissions) || hapiOpPermissions === null)) {
                let __args = arguments;
                if (this.recordCache === undefined) { this.recordCache = null; } 
                if (this.precheckVerifier === undefined) { this.precheckVerifier = null; } 
                if (this.accounts === undefined) { this.accounts = null; } 
                if (this.nodeAccount === undefined) { this.nodeAccount = null; } 
                if (this.txnThrottling === undefined) { this.txnThrottling = null; } 
                if (this.fees === undefined) { this.fees = null; } 
                if (this.exemptions === undefined) { this.exemptions = null; } 
                if (this.stateView === undefined) { this.stateView = null; } 
                if (this.basicPrecheck === undefined) { this.basicPrecheck = null; } 
                if (this.queryFeeCheck === undefined) { this.queryFeeCheck = null; } 
                if (this.accountNums === undefined) { this.accountNums = null; } 
                if (this.systemOpPolicies === undefined) { this.systemOpPolicies = null; } 
                if (this.platformStatus === undefined) { this.platformStatus = null; } 
                if (this.hapiOpPermissions === undefined) { this.hapiOpPermissions = null; } 
                this.UNSUPPORTED_RESPONSE_TYPES = java.util.EnumSet.of<any>(ANSWER_STATE_PROOF, COST_ANSWER_STATE_PROOF);
                this.fees = fees;
                this.stateView = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(stateView));
                this.recordCache = recordCache;
                this.accounts = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(accounts));
                this.nodeAccount = nodeAccount;
                this.precheckVerifier = precheckVerifier;
                this.basicPrecheck = basicPrecheck;
                this.queryFeeCheck = queryFeeCheck;
                this.accountNums = accountNums;
                this.systemOpPolicies = systemOpPolicies;
                this.exemptions = exemptions;
                this.platformStatus = platformStatus;
                this.hapiOpPermissions = hapiOpPermissions;
                this.txnThrottling = new com.grame.services.throttling.TransactionThrottling(throttling);
            } else if (((recordCache != null && recordCache instanceof <any>com.grame.services.records.RecordCache) || recordCache === null) && ((accounts != null && accounts instanceof <any>com.grame.services.sigs.verification.PrecheckVerifier) || accounts === null) && ((typeof nodeAccount === 'function' && (<any>nodeAccount).length === 0) || nodeAccount === null) && ((precheckVerifier != null && precheckVerifier instanceof <any>AccountID) || precheckVerifier === null) && ((fees != null && fees instanceof <any>com.grame.services.throttling.TransactionThrottling) || fees === null) && ((stateView != null && (stateView.constructor != null && stateView.constructor["__interfaces"] != null && stateView.constructor["__interfaces"].indexOf("com.grame.services.fees.FeeCalculator") >= 0)) || stateView === null) && ((typeof basicPrecheck === 'function' && (<any>basicPrecheck).length === 0) || basicPrecheck === null) && ((queryFeeCheck != null && queryFeeCheck instanceof <any>com.grame.services.txns.validation.BasicPrecheck) || queryFeeCheck === null) && ((accountNums != null && accountNums instanceof <any>com.grame.services.queries.validation.QueryFeeCheck) || accountNums === null) && ((systemOpPolicies != null && systemOpPolicies instanceof <any>com.grame.services.config.AccountNumbers) || systemOpPolicies === null) && ((exemptions != null && exemptions instanceof <any>com.grame.services.security.ops.SystemOpPolicies) || exemptions === null) && ((platformStatus != null && (platformStatus.constructor != null && platformStatus.constructor["__interfaces"] != null && platformStatus.constructor["__interfaces"].indexOf("com.grame.services.fees.FeeExemptions") >= 0)) || platformStatus === null) && ((throttling != null && (throttling.constructor != null && throttling.constructor["__interfaces"] != null && throttling.constructor["__interfaces"].indexOf("com.grame.services.context.CurrentPlatformStatus") >= 0)) || throttling === null) && ((hapiOpPermissions != null && hapiOpPermissions instanceof <any>com.grame.services.context.domain.security.HapiOpPermissions) || hapiOpPermissions === null)) {
                let __args = arguments;
                let precheckVerifier: any = __args[1];
                let accounts: any = __args[2];
                let nodeAccount: any = __args[3];
                let txnThrottling: any = __args[4];
                let fees: any = __args[5];
                let stateView: any = __args[6];
                let basicPrecheck: any = __args[7];
                let queryFeeCheck: any = __args[8];
                let accountNums: any = __args[9];
                let systemOpPolicies: any = __args[10];
                let exemptions: any = __args[11];
                let platformStatus: any = __args[12];
                if (this.recordCache === undefined) { this.recordCache = null; } 
                if (this.precheckVerifier === undefined) { this.precheckVerifier = null; } 
                if (this.accounts === undefined) { this.accounts = null; } 
                if (this.nodeAccount === undefined) { this.nodeAccount = null; } 
                if (this.txnThrottling === undefined) { this.txnThrottling = null; } 
                if (this.fees === undefined) { this.fees = null; } 
                if (this.exemptions === undefined) { this.exemptions = null; } 
                if (this.stateView === undefined) { this.stateView = null; } 
                if (this.basicPrecheck === undefined) { this.basicPrecheck = null; } 
                if (this.queryFeeCheck === undefined) { this.queryFeeCheck = null; } 
                if (this.accountNums === undefined) { this.accountNums = null; } 
                if (this.systemOpPolicies === undefined) { this.systemOpPolicies = null; } 
                if (this.platformStatus === undefined) { this.platformStatus = null; } 
                if (this.hapiOpPermissions === undefined) { this.hapiOpPermissions = null; } 
                this.UNSUPPORTED_RESPONSE_TYPES = java.util.EnumSet.of<any>(ANSWER_STATE_PROOF, COST_ANSWER_STATE_PROOF);
                this.fees = fees;
                this.stateView = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(stateView));
                this.recordCache = recordCache;
                this.precheckVerifier = precheckVerifier;
                this.accounts = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(accounts));
                this.nodeAccount = nodeAccount;
                this.basicPrecheck = basicPrecheck;
                this.txnThrottling = txnThrottling;
                this.queryFeeCheck = queryFeeCheck;
                this.accountNums = accountNums;
                this.systemOpPolicies = systemOpPolicies;
                this.exemptions = exemptions;
                this.platformStatus = platformStatus;
                this.hapiOpPermissions = hapiOpPermissions;
            } else if (((recordCache != null && recordCache instanceof <any>com.grame.services.records.RecordCache) || recordCache === null) && ((accounts != null && accounts instanceof <any>com.grame.services.sigs.verification.PrecheckVerifier) || accounts === null) && ((typeof nodeAccount === 'function' && (<any>nodeAccount).length === 0) || nodeAccount === null) && ((precheckVerifier != null && precheckVerifier instanceof <any>AccountID) || precheckVerifier === null) && ((fees != null && fees instanceof <any>com.grame.services.config.AccountNumbers) || fees === null) && ((stateView != null && stateView instanceof <any>com.grame.services.security.ops.SystemOpPolicies) || stateView === null) && ((basicPrecheck != null && (basicPrecheck.constructor != null && basicPrecheck.constructor["__interfaces"] != null && basicPrecheck.constructor["__interfaces"].indexOf("com.grame.services.fees.FeeExemptions") >= 0)) || basicPrecheck === null) && ((queryFeeCheck != null && (queryFeeCheck.constructor != null && queryFeeCheck.constructor["__interfaces"] != null && queryFeeCheck.constructor["__interfaces"].indexOf("com.grame.services.context.CurrentPlatformStatus") >= 0)) || queryFeeCheck === null) && ((accountNums != null && accountNums instanceof <any>com.grame.services.context.domain.security.HapiOpPermissions) || accountNums === null) && systemOpPolicies === undefined && exemptions === undefined && platformStatus === undefined && throttling === undefined && hapiOpPermissions === undefined) {
                let __args = arguments;
                let verifier: any = __args[1];
                let accounts: any = __args[2];
                let nodeAccount: any = __args[3];
                let accountNums: any = __args[4];
                let systemOpPolicies: any = __args[5];
                let exemptions: any = __args[6];
                let platformStatus: any = __args[7];
                let hapiOpPermissions: any = __args[8];
                {
                    let __args = arguments;
                    let accounts: any = verifier;
                    let nodeAccount: any = __args[1];
                    let precheckVerifier: any = __args[2];
                    let fees: any = null;
                    let stateView: any = null;
                    let basicPrecheck: any = null;
                    let queryFeeCheck: any = null;
                    let accountNums: any = null;
                    let systemOpPolicies: any = __args[8];
                    let exemptions: any = __args[9];
                    let platformStatus: any = __args[10];
                    let throttling: any = __args[11];
                    if (this.recordCache === undefined) { this.recordCache = null; } 
                    if (this.precheckVerifier === undefined) { this.precheckVerifier = null; } 
                    if (this.accounts === undefined) { this.accounts = null; } 
                    if (this.nodeAccount === undefined) { this.nodeAccount = null; } 
                    if (this.txnThrottling === undefined) { this.txnThrottling = null; } 
                    if (this.fees === undefined) { this.fees = null; } 
                    if (this.exemptions === undefined) { this.exemptions = null; } 
                    if (this.stateView === undefined) { this.stateView = null; } 
                    if (this.basicPrecheck === undefined) { this.basicPrecheck = null; } 
                    if (this.queryFeeCheck === undefined) { this.queryFeeCheck = null; } 
                    if (this.accountNums === undefined) { this.accountNums = null; } 
                    if (this.systemOpPolicies === undefined) { this.systemOpPolicies = null; } 
                    if (this.platformStatus === undefined) { this.platformStatus = null; } 
                    if (this.hapiOpPermissions === undefined) { this.hapiOpPermissions = null; } 
                    this.UNSUPPORTED_RESPONSE_TYPES = java.util.EnumSet.of<any>(ANSWER_STATE_PROOF, COST_ANSWER_STATE_PROOF);
                    this.fees = fees;
                    this.stateView = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(stateView));
                    this.recordCache = recordCache;
                    this.accounts = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(accounts));
                    this.nodeAccount = nodeAccount;
                    this.precheckVerifier = precheckVerifier;
                    this.basicPrecheck = basicPrecheck;
                    this.queryFeeCheck = queryFeeCheck;
                    this.accountNums = accountNums;
                    this.systemOpPolicies = systemOpPolicies;
                    this.exemptions = exemptions;
                    this.platformStatus = platformStatus;
                    this.hapiOpPermissions = hapiOpPermissions;
                    this.txnThrottling = new com.grame.services.throttling.TransactionThrottling(throttling);
                }
                if (this.recordCache === undefined) { this.recordCache = null; } 
                if (this.precheckVerifier === undefined) { this.precheckVerifier = null; } 
                if (this.accounts === undefined) { this.accounts = null; } 
                if (this.nodeAccount === undefined) { this.nodeAccount = null; } 
                if (this.txnThrottling === undefined) { this.txnThrottling = null; } 
                if (this.fees === undefined) { this.fees = null; } 
                if (this.exemptions === undefined) { this.exemptions = null; } 
                if (this.stateView === undefined) { this.stateView = null; } 
                if (this.basicPrecheck === undefined) { this.basicPrecheck = null; } 
                if (this.queryFeeCheck === undefined) { this.queryFeeCheck = null; } 
                if (this.accountNums === undefined) { this.accountNums = null; } 
                if (this.systemOpPolicies === undefined) { this.systemOpPolicies = null; } 
                if (this.platformStatus === undefined) { this.platformStatus = null; } 
                if (this.hapiOpPermissions === undefined) { this.hapiOpPermissions = null; } 
                this.UNSUPPORTED_RESPONSE_TYPES = java.util.EnumSet.of<any>(ANSWER_STATE_PROOF, COST_ANSWER_STATE_PROOF);
            } else throw new Error('invalid overload');
        }

        public nodePaymentValidity(signedTxn: Transaction, queryFee: number): ResponseCodeEnum {
            try {
                const txn: ;
                const transfers: ;
                return this.queryFeeCheck.nodePaymentValidity(transfers, queryFee, );
            } catch(ignore) {
                return;
            }
        }

        public isAccountExist(acctId: AccountID): boolean {
            const merkleEntityId: com.grame.services.state.merkle.MerkleEntityId = new com.grame.services.state.merkle.MerkleEntityId(, , );
            return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() != null;
        }

        /**
         * validates node account id against current node account
         * 
         * @param {TransactionBody} trBody body of the transaction
         * @return {ResponseCodeEnum} NodeTransactionPrecheckCode.OK is returned if node account in transaction body matches
         * current node account otherwise INVALID_NODE_ACCOUNT should be returned
         */
        public validateNodeAccount(trBody: TransactionBody): ResponseCodeEnum {
            let returnCode: ResponseCodeEnum = ResponseCodeEnum.INVALID_NODE_ACCOUNT;
            if ( && ){
                returnCode = OK;
            }
            return;
        }

        /*private*/ validateTransactionThrottling(txn: TransactionBody): ResponseCodeEnum {
            const payer: AccountID = ;
            if ((target => (typeof target === 'function') ? target(payer) : (<any>target).test(payer))(TransactionHandler.IS_THROTTLE_EXEMPT_$LI$())){
                return;
            } else {
                return this.txnThrottling.shouldThrottle(txn) ? BUSY : OK;
            }
        }

        /*private*/ validateApiPermission(txn: TransactionBody): ResponseCodeEnum {
            try {
                return this.hapiOpPermissions.permissibilityOf(com.grame.services.utils.MiscUtils.functionOf(txn), );
            } catch(unknowngrameFunctionality) {
                return;
            }
        }

        /*private*/ validateTransactionFeeCoverage(txn: TransactionBody, accessor: com.grame.services.utils.SignedTxnAccessor): com.grame.services.context.domain.process.TxnValidityAndFeeReq {
            let returnCode: ResponseCodeEnum = OK;
            if (this.exemptions.hasExemptPayer(accessor)){
                return new com.grame.services.context.domain.process.TxnValidityAndFeeReq(returnCode);
            }
            let __var_fee: number = 0;
            let feeRequired: number = 0;
            if (){
                const payerAccount: AccountID = ;
                if (this.isAccountExist(payerAccount)){
                    const payerAccountBalance: number = ;
                    const suppliedFee: number = ;
                    const at: Timestamp = ;
                    try {
                        const payerKey: com.grame.services.legacy.core.jproto.JKey = ;
                        const txnFee: FeeObject = this.fees.estimateFee(accessor, payerKey, (target => (typeof target === 'function') ? target() : (<any>target).get())(this.stateView), at);
                        __var_fee =  +  + ;
                    } catch(e) {
                        returnCode = ResponseCodeEnum.FAIL_FEE;
                    }
                    if (returnCode === OK){
                        if (suppliedFee < __var_fee){
                            returnCode = ResponseCodeEnum.INSUFFICIENT_TX_FEE;
                            feeRequired = __var_fee;
                        } else if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(payerAccountBalance + (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(Math.min(0, this.fees.estimatedNonFeePayerAdjustments(accessor, at)))) < __var_fee){
                            returnCode = ResponseCodeEnum.INSUFFICIENT_PAYER_BALANCE;
                        }
                    }
                } else {
                    returnCode = ResponseCodeEnum.PAYER_ACCOUNT_NOT_FOUND;
                }
            } else {
                returnCode = ResponseCodeEnum.PAYER_ACCOUNT_NOT_FOUND;
            }
            return new com.grame.services.context.domain.process.TxnValidityAndFeeReq(returnCode, feeRequired);
        }

        /*private*/ validateTransactionContents(transaction: Transaction): ResponseCodeEnum {
            if ( && ){
                return;
            }
            if (! && ( || !)){
                return;
            }
            return;
        }

        public validateTransactionPreConsensus(transaction: Transaction, isQueryPayment: boolean): com.grame.services.context.domain.process.TxnValidityAndFeeReq {
            let returnCode: ResponseCodeEnum = this.validateTransactionContents(transaction);
            if (OK !== returnCode){
                return new com.grame.services.context.domain.process.TxnValidityAndFeeReq(returnCode);
            }
            if (this.platformStatus.get() !== ACTIVE){
                return new com.grame.services.context.domain.process.TxnValidityAndFeeReq(ResponseCodeEnum.PLATFORM_NOT_ACTIVE);
            }
            if (!TransactionHandler.validateTxSize(transaction)){
                if (){
                }
                return new com.grame.services.context.domain.process.TxnValidityAndFeeReq(ResponseCodeEnum.TRANSACTION_OVERSIZE);
            }
            if (!TransactionHandler.validateTxDepth(transaction)){
                return new com.grame.services.context.domain.process.TxnValidityAndFeeReq(ResponseCodeEnum.TRANSACTION_TOO_MANY_LAYERS);
            }
            let feeRequired: number = 0;
            let accessor: com.grame.services.utils.SignedTxnAccessor = null;
            let txn: TransactionBody = ;
            try {
                accessor = new com.grame.services.utils.SignedTxnAccessor(transaction);
                txn = accessor.getTxn();
            } catch(e1) {
                returnCode = INVALID_TRANSACTION_BODY;
            }
            if (returnCode === OK && !TransactionHandler.validateTxBodyDepth(txn)){
                return new com.grame.services.context.domain.process.TxnValidityAndFeeReq(ResponseCodeEnum.TRANSACTION_TOO_MANY_LAYERS);
            }
            if (returnCode === OK && !(isQueryPayment && )){
                returnCode = this.validateApiPermission(txn);
            }
            if (returnCode === OK){
                returnCode = this.basicPrecheck.validate(txn);
            }
            if (returnCode === OK){
                const rationalStatus: ;
                returnCode = (rationalStatus === INVALID_ACCOUNT_ID) ? PAYER_ACCOUNT_NOT_FOUND : OK;
            }
            if (returnCode === OK){
                returnCode = this.recordCache.isReceiptPresent() ? DUPLICATE_TRANSACTION : OK;
            }
            if (returnCode === OK){
                returnCode = this.validateNodeAccount(txn);
            }
            if (returnCode === OK && ){
                if (com.grame.services.txns.validation.TransferListChecks.hasRepeatedAccount()){
                    returnCode = ResponseCodeEnum.ACCOUNT_REPEATED_IN_ACCOUNT_AMOUNTS;
                }
            }
            if (returnCode === OK){
                try {
                    if (!this.verifySignature(transaction)){
                        returnCode = ResponseCodeEnum.INVALID_SIGNATURE;
                    }
                } catch(__e) {
                    if(__e != null && __e instanceof <any>com.grame.services.legacy.exception.KeySignatureTypeMismatchException) {
                        const e: com.grame.services.legacy.exception.KeySignatureTypeMismatchException = <com.grame.services.legacy.exception.KeySignatureTypeMismatchException>__e;
                        returnCode = ResponseCodeEnum.INVALID_SIGNATURE_TYPE_MISMATCHING_KEY;

                    }
                    if(__e != null && __e instanceof <any>com.grame.services.legacy.exception.KeySignatureCountMismatchException) {
                        const e: com.grame.services.legacy.exception.KeySignatureCountMismatchException = <com.grame.services.legacy.exception.KeySignatureCountMismatchException>__e;
                        returnCode = ResponseCodeEnum.INVALID_SIGNATURE_COUNT_MISMATCHING_KEY;

                    }
                    if(__e != null && __e instanceof <any>com.grame.services.legacy.exception.InvalidAccountIDException) {
                        const e: com.grame.services.legacy.exception.InvalidAccountIDException = <com.grame.services.legacy.exception.InvalidAccountIDException>__e;
                        returnCode = ResponseCodeEnum.INVALID_ACCOUNT_ID;

                    }
                    if(__e != null && __e instanceof <any>com.grame.services.legacy.exception.KeyPrefixMismatchException) {
                        const e: com.grame.services.legacy.exception.KeyPrefixMismatchException = <com.grame.services.legacy.exception.KeyPrefixMismatchException>__e;
                        returnCode = ResponseCodeEnum.KEY_PREFIX_MISMATCH;

                    }
                    if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                        const e: Error = <Error>__e;
                        returnCode = ResponseCodeEnum.INVALID_SIGNATURE;

                    }
                }
            }
            if (returnCode === OK){
                returnCode = com.grame.services.security.ops.SystemOpAuthorization["_$wrappers"][this.systemOpPolicies.check$com_grame_services_utils_TxnAccessor(accessor)].asStatus();
            }
            if (returnCode === OK){
                const localResp: com.grame.services.context.domain.process.TxnValidityAndFeeReq = this.validateTransactionFeeCoverage(txn, accessor);
                returnCode = localResp.getValidity();
                feeRequired = localResp.getRequiredFee();
            }
            if (returnCode === OK && isQueryPayment && ){
                returnCode = this.queryFeeCheck.validateQueryPaymentTransfers(txn);
            }
            if (!(isQueryPayment && ) && returnCode === OK){
                returnCode = this.validateTransactionThrottling(txn);
            }
            return new com.grame.services.context.domain.process.TxnValidityAndFeeReq(returnCode, feeRequired);
        }

        public validateQuery(query: Query, hasPayment: boolean): ResponseCodeEnum {
            if (hasPayment && this.platformStatus.get() !== ACTIVE){
                return;
            }
            const header: QueryHeader = ;
            if (!TransactionHandler.validateQueryHeader(header, hasPayment)){
                return;
            }
            if (/* contains */(this.UNSUPPORTED_RESPONSE_TYPES.indexOf(<any>()) >= 0)){
                return;
            }
            const feePayment: Transaction = ;
            let body: TransactionBody;
            try {
                body = ;
            } catch(e) {
                return;
            }
            const queryOp: ;
            const payer: AccountID = ;
            return ;
        }

        public verifySignature(signedTxn: Transaction): boolean {
            try {
                const accessor: com.grame.services.utils.SignedTxnAccessor = new com.grame.services.utils.SignedTxnAccessor(signedTxn);
                return this.precheckVerifier.hasNecessarySignatures(accessor);
            } catch(ignore) {
                return false;
            }
        }

        public setHapiOpPermissions(hapiOpPermissions: com.grame.services.context.domain.security.HapiOpPermissions) {
            this.hapiOpPermissions = hapiOpPermissions;
        }
    }
    TransactionHandler["__class"] = "com.grame.services.legacy.handler.TransactionHandler";

}

