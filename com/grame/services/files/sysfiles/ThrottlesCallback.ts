/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files.sysfiles {
    export class ThrottlesCallback {
        /*private*/ multiplierSource: com.grame.services.fees.FeeMultiplierSource;

        /*private*/ hapiThrottling: com.grame.services.throttling.FunctionalityThrottling;

        /*private*/ handleThrottling: com.grame.services.throttling.FunctionalityThrottling;

        public constructor(multiplierSource: com.grame.services.fees.FeeMultiplierSource, hapiThrottling: com.grame.services.throttling.FunctionalityThrottling, handleThrottling: com.grame.services.throttling.FunctionalityThrottling) {
            if (this.multiplierSource === undefined) { this.multiplierSource = null; }
            if (this.hapiThrottling === undefined) { this.hapiThrottling = null; }
            if (this.handleThrottling === undefined) { this.handleThrottling = null; }
            this.multiplierSource = multiplierSource;
            this.hapiThrottling = hapiThrottling;
            this.handleThrottling = handleThrottling;
        }

        public throttlesCb(): (p1: ThrottleDefinitions) => void {
            return ;
        }
    }
    ThrottlesCallback["__class"] = "com.grame.services.files.sysfiles.ThrottlesCallback";

}

