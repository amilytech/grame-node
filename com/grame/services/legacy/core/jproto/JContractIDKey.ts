/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.core.jproto {
    /**
     * Maps to proto Key of type contractID.
     * 
     * @author hua Created on 2019-01-07
     * @param {number} shardNum
     * @param {number} realmNum
     * @param {number} contractNum
     * @class
     * @extends com.grame.services.legacy.core.jproto.JKey
     */
    export class JContractIDKey extends com.grame.services.legacy.core.jproto.JKey {
        static __com_grame_services_legacy_core_jproto_JContractIDKey_serialVersionUID: number = 1;

        /*private*/ shardNum: number;

        /*private*/ realmNum: number;

        /*private*/ contractNum: number;

        public getContractIDKey(): JContractIDKey {
            return this;
        }

        public hasContractID(): boolean {
            return true;
        }

        public getContractID(): ContractID {
            return ;
        }

        public constructor(shardNum?: any, realmNum?: any, contractNum?: any) {
            if (((typeof shardNum === 'number') || shardNum === null) && ((typeof realmNum === 'number') || realmNum === null) && ((typeof contractNum === 'number') || contractNum === null)) {
                let __args = arguments;
                super();
                this.shardNum = 0;
                this.realmNum = 0;
                this.contractNum = 0;
                this.shardNum = shardNum;
                this.realmNum = realmNum;
                this.contractNum = contractNum;
            } else if (((shardNum != null && shardNum instanceof <any>ContractID) || shardNum === null) && realmNum === undefined && contractNum === undefined) {
                let __args = arguments;
                let contractID: any = __args[0];
                super();
                this.shardNum = 0;
                this.realmNum = 0;
                this.contractNum = 0;
                this.shardNum = ;
                this.realmNum = ;
                this.contractNum = ;
            } else throw new Error('invalid overload');
        }

        public getShardNum(): number {
            return this.shardNum;
        }

        public getRealmNum(): number {
            return this.realmNum;
        }

        public getContractNum(): number {
            return this.contractNum;
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            return "<JContractID: " + this.shardNum + "." + this.realmNum + "." + this.contractNum + ">";
        }

        /**
         * 
         * @return {boolean}
         */
        public isEmpty(): boolean {
            return (0 === this.contractNum);
        }

        /**
         * 
         * @return {boolean}
         */
        public isValid(): boolean {
            return !this.isEmpty();
        }
    }
    JContractIDKey["__class"] = "com.grame.services.legacy.core.jproto.JContractIDKey";
    JContractIDKey["__interfaces"] = ["java.io.Serializable"];


}

