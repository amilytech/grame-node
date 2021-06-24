/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.handler {
    /**
     * Post-consensus execution of smart contract api calls
     * @param {ServicesRepositoryRoot} repository
     * @param {com.grame.services.ledger.grameLedger} ledger
     * @param {*} accounts
     * @param {*} txnCtx
     * @param {*} exchange
     * @param {*} usagePrices
     * @param {*} newPureRepo
     * @param {com.grame.services.contracts.execution.SolidityLifecycle} lifecycle
     * @param {*} sigsVerifier
     * @param {*} entityExpiries
     * @param {com.grame.services.context.properties.GlobalDynamicProperties} dynamicProperties
     * @class
     */
    export class SmartContractRequestHandler {
        static log: Logger; public static log_$LI$(): Logger { if (SmartContractRequestHandler.log == null) { SmartContractRequestHandler.log = ; }  return SmartContractRequestHandler.log; }

        /*private*/ entityExpiries: any;

        /*private*/ ledger: com.grame.services.ledger.grameLedger;

        /*private*/ repository: ServicesRepositoryRoot;

        /*private*/ accounts: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>;

        /*private*/ exchange: com.grame.services.fees.HbarCentExchange;

        /*private*/ txnCtx: com.grame.services.context.TransactionContext;

        /*private*/ usagePrices: com.grame.services.fees.calculation.UsagePricesProvider;

        /*private*/ newPureRepo: () => ServicesRepositoryRoot;

        /*private*/ lifecycle: com.grame.services.contracts.execution.SolidityLifecycle;

        /*private*/ sigsVerifier: com.grame.services.contracts.execution.SoliditySigsVerifier;

        /*private*/ dynamicProperties: com.grame.services.context.properties.GlobalDynamicProperties;

        public constructor(repository: ServicesRepositoryRoot, ledger: com.grame.services.ledger.grameLedger, accounts: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>, txnCtx: com.grame.services.context.TransactionContext, exchange: com.grame.services.fees.HbarCentExchange, usagePrices: com.grame.services.fees.calculation.UsagePricesProvider, newPureRepo: () => ServicesRepositoryRoot, lifecycle: com.grame.services.contracts.execution.SolidityLifecycle, sigsVerifier: com.grame.services.contracts.execution.SoliditySigsVerifier, entityExpiries: any, dynamicProperties: com.grame.services.context.properties.GlobalDynamicProperties) {
            if (this.entityExpiries === undefined) { this.entityExpiries = null; }
            if (this.ledger === undefined) { this.ledger = null; }
            if (this.repository === undefined) { this.repository = null; }
            if (this.accounts === undefined) { this.accounts = null; }
            if (this.exchange === undefined) { this.exchange = null; }
            if (this.txnCtx === undefined) { this.txnCtx = null; }
            if (this.usagePrices === undefined) { this.usagePrices = null; }
            if (this.newPureRepo === undefined) { this.newPureRepo = null; }
            if (this.lifecycle === undefined) { this.lifecycle = null; }
            if (this.sigsVerifier === undefined) { this.sigsVerifier = null; }
            if (this.dynamicProperties === undefined) { this.dynamicProperties = null; }
            this.repository = repository;
            this.newPureRepo = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(newPureRepo));
            this.accounts = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(accounts));
            this.ledger = ledger;
            this.exchange = exchange;
            this.txnCtx = txnCtx;
            this.usagePrices = usagePrices;
            this.lifecycle = lifecycle;
            this.sigsVerifier = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (touched) =>  (funcInst['allRequiredKeysAreActive'] ? funcInst['allRequiredKeysAreActive'] : funcInst) .call(funcInst, touched)})(sigsVerifier));
            this.entityExpiries = entityExpiries;
            this.dynamicProperties = dynamicProperties;
        }

        /**
         * Create a new contract
         * 
         * @param {TransactionBody} transaction
         * API request to create the contract
         * @param {java.time.Instant} consensusTime
         * Platform consensus time
         * @param {byte[]} contractByteCode
         * Byte code to execute to get the contract code
         * @param {com.grame.services.state.submerkle.SequenceNumber} sequenceNum
         * To generate the next ContractID
         * @return {TransactionRecord} Details of contract creation result
         */
        public createContract(transaction: TransactionBody, consensusTime: java.time.Instant, contractByteCode: number[], sequenceNum: com.grame.services.state.submerkle.SequenceNumber): TransactionRecord {
            let tx: Transaction;
            const createContract: ContractCreateTransactionBody = ;
            const transactionID: TransactionID = ;
            const startTime: java.time.Instant = ;
            const senderAccount: AccountID = ;
            const senderAccountEthAddress: string = com.grame.services.utils.EntityIdUtils.asSolidityAddressHex(senderAccount);
            let gas: java.math.BigInteger;
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() <= this.dynamicProperties.maxGas()){
                gas = java.math.BigInteger.valueOf();
            } else {
                gas = java.math.BigInteger.valueOf(this.dynamicProperties.maxGas());
            }
            let contractByteCodeString: string = String.fromCharCode.apply(null, contractByteCode);
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() != null && !){
                const constructorParamsHexString: string = ;
                contractByteCodeString += constructorParamsHexString;
            }
            let value: java.math.BigInteger = java.math.BigInteger.ZERO;
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() > 0){
                value = java.math.BigInteger.valueOf();
            }
            if (){
                const adminKey: Key = ;
                if (!){
                    try {
                        this.serializeAdminKey(adminKey);
                    } catch(ex) {
                        return this.getFailureTransactionRecord(transaction, consensusTime, SERIALIZATION_FAILED);
                    }
                }
            }
            const consensusTimeStamp: Timestamp = ;
            let biGasPrice: java.math.BigInteger;
            try {
                const createGasPrice: number = this.getContractCreateGasPriceInTinyBars(consensusTimeStamp);
                biGasPrice = java.math.BigInteger.valueOf(createGasPrice);
            } catch(e1) {
                if (){
                }
                return this.getFailureTransactionRecord(transaction, consensusTime, CONTRACT_EXECUTION_EXCEPTION);
            }
            try {
                tx = ((str, index, len) => str.substring(index, index + len))((null).join(''), biGasPrice, gas);
            } catch(e) {
                return this.getFailureTransactionRecord(transaction, consensusTime, ERROR_DECODING_BYTESTRING);
            }
            let result: TransactionRecord;
            try {
                const rbhInTinybars: number = this.getContractCreateRbhInTinyBars(consensusTimeStamp);
                const sbhInTinybars: number = this.getContractCreateSbhInTinyBars(consensusTimeStamp);
                result = this.run(tx, senderAccountEthAddress, transaction, consensusTime, startTime, sequenceNum, rbhInTinybars, sbhInTinybars, true);
            } catch(e) {
                result = this.getFailureTransactionRecord(transaction, consensusTime, CONTRACT_EXECUTION_EXCEPTION);
            }
            if ( === SUCCESS){
                const respCode: ResponseCodeEnum = this.createMemoAdminKey(transaction, result);
                if (respCode !== SUCCESS){
                    return ;
                }
                this.setParentPropertiesForChildrenContracts(com.grame.services.utils.EntityIdUtils.asAccount(), );
            }
            return;
        }

        /*private*/ serializeAdminKey(adminKey: Key): number[] {
            const jKey: com.grame.services.legacy.core.jproto.JKey = com.grame.services.legacy.core.jproto.JKey.convertKey(adminKey, 1);
            return jKey.serialize();
        }

        /**
         * Builds a failure result to be returned by the caller
         * 
         * @param {TransactionBody} transaction
         * API request that caused the error
         * @param {java.time.Instant} consensusTime
         * Platform consensus time
         * @param {ResponseCodeEnum} responseCode
         * Error code to be build into the result
         * @return {TransactionRecord} Simple return record for the failed API call
         */
        public getFailureTransactionRecord(transaction: TransactionBody, consensusTime: java.time.Instant, responseCode: ResponseCodeEnum): TransactionRecord {
            const transactionReceipt: TransactionReceipt = ;
            return ;
        }

        /*private*/ runPure(solidityTxn: Transaction, startTime: java.time.Instant, maxResultSize: number): ContractCallLocalResponse {
            const mockConsensusTime: ;
            const pureRepository: ;
            const executor: 
        }
        SmartContractRequestHandler["__class"] = "com.grame.services.legacy.handler.SmartContractRequestHandler";

    }

