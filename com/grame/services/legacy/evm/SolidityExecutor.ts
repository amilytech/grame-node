/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.evm {
    export class SolidityExecutor {
        static logger: Logger; public static logger_$LI$(): Logger { if (SolidityExecutor.logger == null) { SolidityExecutor.logger = ; }  return SolidityExecutor.logger; }

        static NULL_BLOCK_STORE: BlockStore = null;

        /*private*/ listener: EthereumListener;

        /*private*/ rbh: number;

        /*private*/ sbh: number;

        /*private*/ gasPrice: number;

        /*private*/ block: Block;

        /*private*/ payerAddress: number[];

        /*private*/ fundingAddress: number[];

        /*private*/ startTime: java.time.Instant;

        /*private*/ localCall: boolean;

        /*private*/ solidityTxn: Transaction;

        /*private*/ commonConfig: CommonConfig;

        /*private*/ seqNo: com.grame.services.state.submerkle.SequenceNumber;

        /*private*/ txn: TransactionBody;

        /*private*/ config: SystemProperties;

        /*private*/ blockchainConfig: BlockchainConfig;

        /*private*/ sigsVerifier: com.grame.services.contracts.execution.SoliditySigsVerifier;

        /*private*/ programInvokeFactory: ProgramInvokeFactory;

        /*private*/ repository: ServicesRepositoryImpl;

        /*private*/ trackingRepository: ServicesRepositoryImpl;

        /*private*/ contractCreateAdaptor: NewAccountCreateAdapter;

        /*private*/ dynamicProperties: com.grame.services.context.properties.GlobalDynamicProperties;

        /*private*/ txnCtx: com.grame.services.context.TransactionContext;

        /*private*/ vm: VM;

        /*private*/ errorMessage: string;

        /*private*/ readyToExecute: boolean;

        /*private*/ program: Program;

        /*private*/ gasLeft: java.math.BigInteger;

        /*private*/ result: ProgramResult;

        /*private*/ receipt: TransactionReceipt;

        /*private*/ precompiledContract: PrecompiledContracts.PrecompiledContract;

        /*private*/ logs: Array<LogInfo>;

        /*private*/ createdContracts: Array;

        /*private*/ touchedAccounts: ByteArraySet;

        /*private*/ errorCode: ResponseCodeEnum;

        public constructor(solidityTxn: Transaction, repository: ServicesRepositoryImpl, block: Block, payerAddress: string, fundingAddress: string, txn: TransactionBody, startTime: java.time.Instant, seqNo: com.grame.services.state.submerkle.SequenceNumber, rbh: number, sbh: number, txnCtx: com.grame.services.context.TransactionContext, localCall: boolean, sigsVerifier: com.grame.services.contracts.execution.SoliditySigsVerifier, dynamicProperties: com.grame.services.context.properties.GlobalDynamicProperties) {
            this.listener = null /*cannot resolve EthereumListenerAdapter*/;
            if (this.rbh === undefined) { this.rbh = 0; }
            if (this.sbh === undefined) { this.sbh = 0; }
            if (this.gasPrice === undefined) { this.gasPrice = 0; }
            if (this.block === undefined) { this.block = null; }
            if (this.payerAddress === undefined) { this.payerAddress = null; }
            if (this.fundingAddress === undefined) { this.fundingAddress = null; }
            if (this.startTime === undefined) { this.startTime = null; }
            if (this.localCall === undefined) { this.localCall = false; }
            if (this.solidityTxn === undefined) { this.solidityTxn = null; }
            if (this.commonConfig === undefined) { this.commonConfig = null; }
            if (this.seqNo === undefined) { this.seqNo = null; }
            if (this.txn === undefined) { this.txn = null; }
            if (this.config === undefined) { this.config = null; }
            if (this.blockchainConfig === undefined) { this.blockchainConfig = null; }
            if (this.sigsVerifier === undefined) { this.sigsVerifier = null; }
            this.programInvokeFactory = null /*cannot resolve ProgramInvokeFactoryImpl*/;
            if (this.repository === undefined) { this.repository = null; }
            if (this.trackingRepository === undefined) { this.trackingRepository = null; }
            this.contractCreateAdaptor = new SolidityExecutor.SequenceAccountCreator(this);
            if (this.dynamicProperties === undefined) { this.dynamicProperties = null; }
            if (this.txnCtx === undefined) { this.txnCtx = null; }
            if (this.vm === undefined) { this.vm = null; }
            if (this.errorMessage === undefined) { this.errorMessage = null; }
            this.readyToExecute = false;
            if (this.program === undefined) { this.program = null; }
            if (this.gasLeft === undefined) { this.gasLeft = null; }
            this.result = null /*cannot resolve ProgramResult*/;
            if (this.receipt === undefined) { this.receipt = null; }
            if (this.precompiledContract === undefined) { this.precompiledContract = null; }
            if (this.logs === undefined) { this.logs = null; }
            this.createdContracts = null;
            this.touchedAccounts = null /*cannot resolve ByteArraySet*/;
            if (this.errorCode === undefined) { this.errorCode = null; }
            this.txn = txn;
            this.rbh = rbh;
            this.sbh = sbh;
            this.block = block;
            this.seqNo = seqNo;
            this.txnCtx = txnCtx;
            this.gasLeft = ;
            this.gasPrice = ;
            this.startTime = startTime;
            this.localCall = localCall;
            this.repository = repository;
            this.solidityTxn = solidityTxn;
            this.sigsVerifier = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (touched) =>  (funcInst['allRequiredKeysAreActive'] ? funcInst['allRequiredKeysAreActive'] : funcInst) .call(funcInst, touched)})(sigsVerifier));
            this.trackingRepository = ;
            this.dynamicProperties = dynamicProperties;
            this.payerAddress = ;
            this.fundingAddress = ;
            this.commonConfig = ;
            this.config = ;
            this.blockchainConfig = ;
        }

        public init() {
            if (this.localCall || this.payerIsSolvent()){
                this.readyToExecute = true;
            }
        }

        payerIsSolvent(): boolean {
            const totalCost: ;
            const payerBalance: ;
            const isSolvent: ;
            if (!isSolvent){
                this.errorCode = INSUFFICIENT_PAYER_BALANCE;
                this.setError(javaemul.internal.StringHelper.format("Transaction cost %s exceeds payer balance %s", totalCost, payerBalance));
            }
            return isSolvent;
        }

        public execute() {
            if (!this.readyToExecute){
                return;
            }
            if (!this.localCall){
            }
            if (){
                this.create();
            } else {
                this.call();
            }
        }

        gasCost(): java.math.BigInteger {
            return ;
        }

        call() {
            if (!this.readyToExecute){
                return;
            }
            const targetAddress: number[] = ;
            this.precompiledContract = ;
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.precompiledContract) != null){
                const gasRequired: ;
                if (!this.localCall && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.gasLeft.compareTo(gasRequired)) < 0){
                    const gasLimit:  else {
                        this.gasLeft = java.math.BigInteger.subtract(gasRequired);
                        const out: Pair<boolean, number[]> = ;
                        if (!){
                            this.errorCode = CONTRACT_EXECUTION_EXCEPTION;
                            this.setError(javaemul.internal.StringHelper.format("Error executing precompiled contract 0x%s", ));
                            this.gasLeft = java.math.BigInteger.ZERO;
                            return;
                        }
                    }
                } else {
                    const code: number[] = ;
                    if (){
                        this.errorCode = CONTRACT_BYTECODE_EMPTY;
                        this.setError(javaemul.internal.StringHelper.format("Error: Bytecode is empty for contract 0x%s", ));
                    } else {
                        const programInvoke: ;
                        this.vm = null /*cannot resolve VM*/;
                        this.program = ;
                    }
                }
                if (!this.localCall){
                }
            }
        }
        SolidityExecutor["__class"] = "com.grame.services.legacy.evm.SolidityExecutor";


        export namespace SolidityExecutor {

            

            
        }

