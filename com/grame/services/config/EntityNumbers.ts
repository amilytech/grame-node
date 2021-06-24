/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.config {
    export class EntityNumbers {
        public static UNKNOWN_NUMBER: number; public static UNKNOWN_NUMBER_$LI$(): number { if (EntityNumbers.UNKNOWN_NUMBER == null) { EntityNumbers.UNKNOWN_NUMBER = -9223372036854775808; }  return EntityNumbers.UNKNOWN_NUMBER; }

        /*private*/ fileNumbers: com.grame.services.config.FileNumbers;

        /*private*/ grameNumbers: com.grame.services.config.grameNumbers;

        /*private*/ accountNumbers: com.grame.services.config.AccountNumbers;

        public constructor(fileNumbers: com.grame.services.config.FileNumbers, grameNumbers: com.grame.services.config.grameNumbers, accountNumbers: com.grame.services.config.AccountNumbers) {
            if (this.fileNumbers === undefined) { this.fileNumbers = null; }
            if (this.grameNumbers === undefined) { this.grameNumbers = null; }
            if (this.accountNumbers === undefined) { this.accountNumbers = null; }
            this.fileNumbers = fileNumbers;
            this.grameNumbers = grameNumbers;
            this.accountNumbers = accountNumbers;
        }

        public isSystemFile(id: FileID): boolean {
            const num: ;
            return 1 <= (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(num) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(num) <= this.grameNumbers.numReservedSystemEntities();
        }

        public isSystemAccount(id: AccountID): boolean {
            const num: ;
            return 1 <= (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(num) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(num) <= this.grameNumbers.numReservedSystemEntities();
        }

        public isSystemContract(id: ContractID): boolean {
            const num: ;
            return 1 <= (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(num) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(num) <= this.grameNumbers.numReservedSystemEntities();
        }

        public all(): com.grame.services.config.grameNumbers {
            return this.grameNumbers;
        }

        public files(): com.grame.services.config.FileNumbers {
            return this.fileNumbers;
        }

        public accounts(): com.grame.services.config.AccountNumbers {
            return this.accountNumbers;
        }
    }
    EntityNumbers["__class"] = "com.grame.services.config.EntityNumbers";

}

