/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.services.state {
    export class AwareProcessLogic implements com.grame.services.txns.ProcessLogic {
        static log: Logger; public static log_$LI$(): Logger { if (AwareProcessLogic.log == null) { AwareProcessLogic.log = ; }  return AwareProcessLogic.log; }

        static SIG_RATIONALIZATION_ERRORS: Array<ResponseCodeEnum>; public static SIG_RATIONALIZATION_ERRORS_$LI$(): Array<ResponseCodeEnum> { if (AwareProcessLogic.SIG_RATIONALIZATION_ERRORS == null) { AwareProcessLogic.SIG_RATIONALIZATION_ERRORS = java.util.EnumSet.of<any>(INVALID_FILE_ID, INVALID_TOKEN_ID, INVALID_ACCOUNT_ID, INVALID_SCHEDULE_ID, INVALID_SIGNATURE, KEY_PREFIX_MISMATCH, INVALID_SIGNATURE_COUNT_MISMATCHING_KEY, MODIFYING_IMMUTABLE_CONTRACT, INVALID_CONTRACT_ID, UNRESOLVABLE_REQUIRED_SIGNERS, SCHEDULED_TRANSACTION_NOT_IN_WHITELIST); }  return AwareProcessLogic.SIG_RATIONALIZATION_ERRORS; }

        /*private*/ ctx: com.grame.services.context.ServicesContext;

        /*private*/ txnManager: com.grame.services.state.logic.ServicesTxnManager;

        public constructor(ctx: com.grame.services.context.ServicesContext) {
            if (this.ctx === undefined) { this.ctx = null; }
            this.txnManager = new com.grame.services.state.logic.ServicesTxnManager(() => { return this.processTxnInCtx() }, () => { return this.addRecordToStream() }, () => { return this.processTriggeredTxnInCtx() }, (e,context) => { return this.warnOf(e,context) });
            this.ctx = ctx;
        }

        /**
         * 
         * @param {Transaction} platformTxn
         * @param {java.time.Instant} consensusTime
         * @param {number} submittingMember
         */
        public incorporateConsensusTxn(platformTxn: Transaction, consensusTime: java.time.Instant, submittingMember: number) {
            try {
                const accessor: com.grame.services.utils.PlatformTxnAccessor = new com.grame.services.utils.PlatformTxnAccessor(platformTxn);
                let timestamp: java.time.Instant = consensusTime;
                if (accessor.canTriggerTxn()){
                    timestamp = timestamp.minusNanos(1);
                }
                if (!this.txnSanityChecks(accessor, timestamp, submittingMember)){
                    return;
                }
                this.txnManager.process(accessor, timestamp, submittingMember, this.ctx);
                if (this.ctx.txnCtx().triggeredTxn() != null){
                    const scopedAccessor: com.grame.services.utils.TxnAccessor = this.ctx.txnCtx().triggeredTxn();
                    this.txnManager.process(scopedAccessor, consensusTime, submittingMember, this.ctx);
                }
            } catch(e) {
            }
        }

        /*private*/ txnSanityChecks(accessor: com.grame.services.utils.PlatformTxnAccessor, consensusTime: java.time.Instant, submittingMember: number): boolean {
            const lastHandled: 
        }
        AwareProcessLogic["__class"] = "com.grame.services.legacy.services.state.AwareProcessLogic";
        AwareProcessLogic["__interfaces"] = ["com.grame.services.txns.ProcessLogic"];


    }

