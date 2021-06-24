/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.config {
    export class AccountNumbers {
        /*private*/ properties: com.grame.services.context.properties.PropertySource;

        /*private*/ __treasury: number;

        /*private*/ __systemAdmin: number;

        /*private*/ __freezeAdmin: number;

        /*private*/ __addressBookAdmin: number;

        /*private*/ __systemDeleteAdmin: number;

        /*private*/ __feeSchedulesAdmin: number;

        /*private*/ __exchangeRatesAdmin: number;

        /*private*/ __systemUndeleteAdmin: number;

        /*private*/ lastManagedBySysAdmin: number;

        /*private*/ firstManagedBySysAdmin: number;

        public constructor(properties: com.grame.services.context.properties.PropertySource) {
            if (this.properties === undefined) { this.properties = null; }
            this.__treasury = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__systemAdmin = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__freezeAdmin = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__addressBookAdmin = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__systemDeleteAdmin = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__feeSchedulesAdmin = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__exchangeRatesAdmin = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__systemUndeleteAdmin = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.lastManagedBySysAdmin = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.firstManagedBySysAdmin = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.properties = properties;
        }

        public treasury(): number {
            if (this.__treasury === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__treasury = this.properties.getLongProperty("accounts.treasury");
            }
            return this.__treasury;
        }

        public freezeAdmin(): number {
            if (this.__freezeAdmin === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__freezeAdmin = this.properties.getLongProperty("accounts.freezeAdmin");
            }
            return this.__freezeAdmin;
        }

        public systemAdmin(): number {
            if (this.__systemAdmin === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__systemAdmin = this.properties.getLongProperty("accounts.systemAdmin");
            }
            return this.__systemAdmin;
        }

        public addressBookAdmin(): number {
            if (this.__addressBookAdmin === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__addressBookAdmin = this.properties.getLongProperty("accounts.addressBookAdmin");
            }
            return this.__addressBookAdmin;
        }

        public feeSchedulesAdmin(): number {
            if (this.__feeSchedulesAdmin === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__feeSchedulesAdmin = this.properties.getLongProperty("accounts.feeSchedulesAdmin");
            }
            return this.__feeSchedulesAdmin;
        }

        public exchangeRatesAdmin(): number {
            if (this.__exchangeRatesAdmin === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__exchangeRatesAdmin = this.properties.getLongProperty("accounts.exchangeRatesAdmin");
            }
            return this.__exchangeRatesAdmin;
        }

        public systemDeleteAdmin(): number {
            if (this.__systemDeleteAdmin === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__systemDeleteAdmin = this.properties.getLongProperty("accounts.systemDeleteAdmin");
            }
            return this.__systemDeleteAdmin;
        }

        public systemUndeleteAdmin(): number {
            if (this.__systemUndeleteAdmin === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__systemUndeleteAdmin = this.properties.getLongProperty("accounts.systemUndeleteAdmin");
            }
            return this.__systemUndeleteAdmin;
        }

        public isSuperuser(num: number): boolean {
            return num === this.treasury() || num === this.systemAdmin();
        }
    }
    AccountNumbers["__class"] = "com.grame.services.config.AccountNumbers";

}

