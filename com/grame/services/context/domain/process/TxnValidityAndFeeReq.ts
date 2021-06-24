/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.context.domain.process {
    export class TxnValidityAndFeeReq {
        static NO_REQUIRED_FEE: number = 0;

        /*private*/ requiredFee: number;

        /*private*/ validity: ResponseCodeEnum;

        public constructor(validity?: any, requiredFee?: any) {
            if (((validity != null && validity instanceof <any>ResponseCodeEnum) || validity === null) && ((typeof requiredFee === 'number') || requiredFee === null)) {
                let __args = arguments;
                if (this.validity === undefined) { this.validity = null; } 
                this.requiredFee = TxnValidityAndFeeReq.NO_REQUIRED_FEE;
                this.validity = validity;
                this.requiredFee = requiredFee;
            } else if (((validity != null && validity instanceof <any>ResponseCodeEnum) || validity === null) && requiredFee === undefined) {
                let __args = arguments;
                if (this.validity === undefined) { this.validity = null; } 
                this.requiredFee = TxnValidityAndFeeReq.NO_REQUIRED_FEE;
                this.validity = validity;
            } else throw new Error('invalid overload');
        }

        public getValidity(): ResponseCodeEnum {
            return;
        }

        public getRequiredFee(): number {
            return this.requiredFee;
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            return ;
        }
    }
    TxnValidityAndFeeReq["__class"] = "com.grame.services.context.domain.process.TxnValidityAndFeeReq";

}

