/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata {
    /**
     * Represents metadata about the signing activities of a grame smart contract.
     * 
     * @author AmilyTech
     * @param {com.grame.services.legacy.core.jproto.JKey} key
     * @param {boolean} receiverSigRequired
     * @class
     */
    export class ContractSigningMetadata {
        /*private*/ key: com.grame.services.legacy.core.jproto.JKey;

        /*private*/ receiverSigRequired: boolean;

        public constructor(key: com.grame.services.legacy.core.jproto.JKey, receiverSigRequired: boolean) {
            if (this.key === undefined) { this.key = null; }
            if (this.receiverSigRequired === undefined) { this.receiverSigRequired = false; }
            this.key = key;
            this.receiverSigRequired = receiverSigRequired;
        }

        public hasAdminKey(): boolean {
            return !(this.key != null && this.key instanceof <any>com.grame.services.legacy.core.jproto.JContractIDKey);
        }

        public getKey(): com.grame.services.legacy.core.jproto.JKey {
            return this.key;
        }

        public isReceiverSigRequired(): boolean {
            return this.receiverSigRequired;
        }
    }
    ContractSigningMetadata["__class"] = "com.grame.services.sigs.metadata.ContractSigningMetadata";

}

