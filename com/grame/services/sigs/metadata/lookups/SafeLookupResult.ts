/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata.lookups {
    /**
     * Defines a type able to look up metadata associated to the signing activities
     * of any grame entity (account, smart contract, or file).
     * 
     * @author AmilyTech
     * @param {*} metadata
     * @class
     */
    export class SafeLookupResult<T> {
        static __static_initialized: boolean = false;
        static __static_initialize() { if (!SafeLookupResult.__static_initialized) { SafeLookupResult.__static_initialized = true; SafeLookupResult.__static_initializer_0(); } }

        /*private*/ __metadata: T;

        /*private*/ __failure: com.grame.services.sigs.order.KeyOrderingFailure;

        static KNOWN_FAILURES: any; public static KNOWN_FAILURES_$LI$(): any { SafeLookupResult.__static_initialize(); if (SafeLookupResult.KNOWN_FAILURES == null) { SafeLookupResult.KNOWN_FAILURES = <any>({}); }  return SafeLookupResult.KNOWN_FAILURES; }

        static  __static_initializer_0() {
            SafeLookupResult.KNOWN_FAILURES_$LI$().put(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_FILE, <any>(new SafeLookupResult<any>(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_FILE)));
            SafeLookupResult.KNOWN_FAILURES_$LI$().put(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_TOKEN, <any>(new SafeLookupResult<any>(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_TOKEN)));
            SafeLookupResult.KNOWN_FAILURES_$LI$().put(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_ACCOUNT, <any>(new SafeLookupResult<any>(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_ACCOUNT)));
            SafeLookupResult.KNOWN_FAILURES_$LI$().put(com.grame.services.sigs.order.KeyOrderingFailure.INVALID_CONTRACT, <any>(new SafeLookupResult<any>(com.grame.services.sigs.order.KeyOrderingFailure.INVALID_CONTRACT)));
            SafeLookupResult.KNOWN_FAILURES_$LI$().put(com.grame.services.sigs.order.KeyOrderingFailure.IMMUTABLE_CONTRACT, <any>(new SafeLookupResult<any>(com.grame.services.sigs.order.KeyOrderingFailure.IMMUTABLE_CONTRACT)));
            SafeLookupResult.KNOWN_FAILURES_$LI$().put(com.grame.services.sigs.order.KeyOrderingFailure.INVALID_TOPIC, <any>(new SafeLookupResult<any>(com.grame.services.sigs.order.KeyOrderingFailure.INVALID_TOPIC)));
            SafeLookupResult.KNOWN_FAILURES_$LI$().put(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_AUTORENEW_ACCOUNT, <any>(new SafeLookupResult<any>(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_AUTORENEW_ACCOUNT)));
            SafeLookupResult.KNOWN_FAILURES_$LI$().put(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_SCHEDULE, <any>(new SafeLookupResult<any>(com.grame.services.sigs.order.KeyOrderingFailure.MISSING_SCHEDULE)));
        }

        public constructor(failure?: any) {
            if (((typeof failure === 'number') || failure === null)) {
                let __args = arguments;
                if (this.__metadata === undefined) { this.__metadata = null; } 
                if (this.__failure === undefined) { this.__failure = null; } 
                this.__failure = failure;
                this.__metadata = null;
            } else if (((failure != null) || failure === null)) {
                let __args = arguments;
                let metadata: any = __args[0];
                if (this.__metadata === undefined) { this.__metadata = null; } 
                if (this.__failure === undefined) { this.__failure = null; } 
                this.__failure = com.grame.services.sigs.order.KeyOrderingFailure.NONE;
                this.__metadata = (v => { if (v == null) throw new Error('value is null'); return v; })(metadata);
            } else throw new Error('invalid overload');
        }

        public static failure<R>(type: com.grame.services.sigs.order.KeyOrderingFailure): SafeLookupResult<R> {
            return <SafeLookupResult<R>>SafeLookupResult.KNOWN_FAILURES_$LI$().get(type);
        }

        public succeeded(): boolean {
            return /* isPresent */(this.__metadata != null);
        }

        public failureIfAny(): com.grame.services.sigs.order.KeyOrderingFailure {
            return this.__failure;
        }

        public metadata(): T {
            return /* get */(v => { if (v == null) throw new Error('value is null'); return v; })(this.__metadata);
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            return ;
        }
    }
    SafeLookupResult["__class"] = "com.grame.services.sigs.metadata.lookups.SafeLookupResult";

}


com.grame.services.sigs.metadata.lookups.SafeLookupResult.__static_initialize();
