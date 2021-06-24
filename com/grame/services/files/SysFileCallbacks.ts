/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files {
    export class SysFileCallbacks {
        /*private*/ configCallbacks: com.grame.services.files.sysfiles.ConfigCallbacks;

        /*private*/ throttlesCallback: com.grame.services.files.sysfiles.ThrottlesCallback;

        /*private*/ currencyCallbacks: com.grame.services.files.sysfiles.CurrencyCallbacks;

        public constructor(configCallbacks: com.grame.services.files.sysfiles.ConfigCallbacks, throttlesCallback: com.grame.services.files.sysfiles.ThrottlesCallback, currencyCallbacks: com.grame.services.files.sysfiles.CurrencyCallbacks) {
            if (this.configCallbacks === undefined) { this.configCallbacks = null; }
            if (this.throttlesCallback === undefined) { this.throttlesCallback = null; }
            if (this.currencyCallbacks === undefined) { this.currencyCallbacks = null; }
            this.configCallbacks = configCallbacks;
            this.throttlesCallback = throttlesCallback;
            this.currencyCallbacks = currencyCallbacks;
        }

        public exchangeRatesCb(): (p1: ExchangeRateSet) => void {
            return <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(this.currencyCallbacks.exchangeRatesCb()));
        }

        public feeSchedulesCb(): (p1: CurrentAndNextFeeSchedule) => void {
            return <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(this.currencyCallbacks.feeSchedulesCb()));
        }

        public throttlesCb(): (p1: ThrottleDefinitions) => void {
            return <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(this.throttlesCallback.throttlesCb()));
        }

        public propertiesCb(): (p1: ServicesConfigurationList) => void {
            return <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(this.configCallbacks.propertiesCb()));
        }

        public permissionsCb(): (p1: ServicesConfigurationList) => void {
            return <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(this.configCallbacks.permissionsCb()));
        }
    }
    SysFileCallbacks["__class"] = "com.grame.services.files.SysFileCallbacks";

}

