/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata.lookups {
    /**
     * Adds retry-with-backoff functionality to the {@link DefaultFCMapAccountLookup} by
     * delegating the lookup to its superclass instance up to {@code maxRetries} times,
     * with {@code Pause} invocations that increase by {@code retryWaitIncrementMs} between
     * each failed lookup.
     * 
     * @author Nathan Klick
     * @author AmilyTech
     * @param {*} accounts
     * @param {number} maxRetries
     * @param {number} retryWaitIncrementMs
     * @param {*} pause
     * @param {com.grame.services.stats.MiscRunningAvgs} runningAvgs
     * @param {com.grame.services.stats.MiscSpeedometers} speedometers
     * @class
     * @extends com.grame.services.sigs.metadata.lookups.DefaultFCMapAccountLookup
     */
    export class RetryingFCMapAccountLookup extends com.grame.services.sigs.metadata.lookups.DefaultFCMapAccountLookup {
        static DEFAULT_MAX_RETRIES: number = 10;

        static DEFAULT_RETRY_WAIT_INCREMENT_MS: number = 10;

        static log: Logger; public static log_$LI$(): Logger { if (RetryingFCMapAccountLookup.log == null) { RetryingFCMapAccountLookup.log = ; }  return RetryingFCMapAccountLookup.log; }

        /*private*/ maxRetries: number;

        /*private*/ retryWaitIncrementMs: number;

        /*private*/ pause: com.grame.services.utils.Pause;

        /*private*/ runningAvgs: com.grame.services.stats.MiscRunningAvgs;

        /*private*/ speedometers: com.grame.services.stats.MiscSpeedometers;

        /*private*/ properties: com.grame.services.context.properties.NodeLocalProperties;

        public constructor(accounts?: any, maxRetries?: any, retryWaitIncrementMs?: any, pause?: any, runningAvgs?: any, speedometers?: any) {
            if (((typeof accounts === 'function' && (<any>accounts).length === 0) || accounts === null) && ((typeof maxRetries === 'number') || maxRetries === null) && ((typeof retryWaitIncrementMs === 'number') || retryWaitIncrementMs === null) && ((pause != null && (pause.constructor != null && pause.constructor["__interfaces"] != null && pause.constructor["__interfaces"].indexOf("com.grame.services.utils.Pause") >= 0)) || pause === null) && ((runningAvgs != null && runningAvgs instanceof <any>com.grame.services.stats.MiscRunningAvgs) || runningAvgs === null) && ((speedometers != null && speedometers instanceof <any>com.grame.services.stats.MiscSpeedometers) || speedometers === null)) {
                let __args = arguments;
                super(accounts);
                if (this.maxRetries === undefined) { this.maxRetries = 0; } 
                if (this.retryWaitIncrementMs === undefined) { this.retryWaitIncrementMs = 0; } 
                if (this.pause === undefined) { this.pause = null; } 
                if (this.runningAvgs === undefined) { this.runningAvgs = null; } 
                if (this.speedometers === undefined) { this.speedometers = null; } 
                if (this.properties === undefined) { this.properties = null; } 
                this.pause = pause;
                this.properties = null;
                this.runningAvgs = runningAvgs;
                this.speedometers = speedometers;
                this.maxRetries = maxRetries;
                this.retryWaitIncrementMs = retryWaitIncrementMs;
            } else if (((accounts != null && (accounts.constructor != null && accounts.constructor["__interfaces"] != null && accounts.constructor["__interfaces"].indexOf("com.grame.services.utils.Pause") >= 0)) || accounts === null) && ((maxRetries != null && maxRetries instanceof <any>com.grame.services.context.properties.NodeLocalProperties) || maxRetries === null) && ((typeof retryWaitIncrementMs === 'function' && (<any>retryWaitIncrementMs).length === 0) || retryWaitIncrementMs === null) && ((pause != null && pause instanceof <any>com.grame.services.stats.MiscRunningAvgs) || pause === null) && ((runningAvgs != null && runningAvgs instanceof <any>com.grame.services.stats.MiscSpeedometers) || runningAvgs === null) && speedometers === undefined) {
                let __args = arguments;
                let pause: any = __args[0];
                let properties: any = __args[1];
                let accounts: any = __args[2];
                let runningAvgs: any = __args[3];
                let speedometers: any = __args[4];
                super(accounts);
                if (this.maxRetries === undefined) { this.maxRetries = 0; } 
                if (this.retryWaitIncrementMs === undefined) { this.retryWaitIncrementMs = 0; } 
                if (this.pause === undefined) { this.pause = null; } 
                if (this.runningAvgs === undefined) { this.runningAvgs = null; } 
                if (this.speedometers === undefined) { this.speedometers = null; } 
                if (this.properties === undefined) { this.properties = null; } 
                this.pause = pause;
                this.properties = (v => { if (v == null) throw new Error('value is null'); return v; })(properties);
                this.runningAvgs = runningAvgs;
                this.speedometers = speedometers;
                this.maxRetries = RetryingFCMapAccountLookup.DEFAULT_MAX_RETRIES;
                this.retryWaitIncrementMs = RetryingFCMapAccountLookup.DEFAULT_RETRY_WAIT_INCREMENT_MS;
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {AccountID} id
         * @return {com.grame.services.sigs.metadata.lookups.SafeLookupResult}
         */
        public safeLookup(id: AccountID): com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.AccountSigningMetadata> {
            this.maxRetries = /* orElse */((v, v2) => v == null ? v2 : v)(/* map */((instance$NodeLocalProperties) => { return instance$NodeLocalProperties.precheckLookupRetries() })(this.properties),this.maxRetries);
            this.retryWaitIncrementMs = /* orElse */((v, v2) => v == null ? v2 : v)(/* map */((instance$NodeLocalProperties) => { return instance$NodeLocalProperties.precheckLookupRetryBackoffMs() })(this.properties),this.retryWaitIncrementMs);
            const lookupStart: number = /* nanoTime */(Date.now() * 1000000);
            let retriesRemaining: number = this.maxRetries;
            let meta: com.grame.services.sigs.metadata.AccountSigningMetadata = this.superLookup(id);
            if (meta != null){
                return <any>(new com.grame.services.sigs.metadata.lookups.SafeLookupResult<any>(meta));
            }
            do {{
                const retryNo: number = this.maxRetries - retriesRemaining + 1;
                if (!this.pause.forMs(retryNo * this.retryWaitIncrementMs)){
                    return com.grame.services.sigs.metadata.lookups.SafeLookupResult.failure<any>(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_ACCOUNT);
                }
                meta = this.superLookup(id);
                if (meta != null){
                    if (this.isInstrumented()){
                        this.updateStats(retryNo, this.msElapsedSince(lookupStart));
                    }
                    return <any>(new com.grame.services.sigs.metadata.lookups.SafeLookupResult<any>(meta));
                }
                retriesRemaining--;
            }} while((retriesRemaining > 0));
            if (this.isInstrumented()){
                this.updateStats(this.maxRetries, this.msElapsedSince(lookupStart));
            }
            return com.grame.services.sigs.metadata.lookups.SafeLookupResult.failure<any>(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_ACCOUNT);
        }

        /*private*/ isInstrumented(): boolean {
            return this.runningAvgs != null && this.speedometers != null;
        }

        /*private*/ updateStats(n: number, time: number) {
            this.speedometers.cycleAccountLookupRetries();
            this.runningAvgs.recordAccountLookupRetries(n);
            this.runningAvgs.recordAccountRetryWaitMs(time);
        }

        /*private*/ msElapsedSince(then: number): number {
            return (/* nanoTime */(Date.now() * 1000000) - <number>then) / 1000000;
        }

        /*private*/ superLookup(id: AccountID): com.grame.services.sigs.metadata.AccountSigningMetadata {
            const result: ;
            return  ?  : null;
        }
    }
    RetryingFCMapAccountLookup["__class"] = "com.grame.services.sigs.metadata.lookups.RetryingFCMapAccountLookup";
    RetryingFCMapAccountLookup["__interfaces"] = ["com.grame.services.sigs.metadata.lookups.AccountSigMetaLookup"];


}

