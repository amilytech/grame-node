/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.config {
    export class FileNumbers {
        /*private*/ grameNums: com.grame.services.config.grameNumbers;

        /*private*/ properties: com.grame.services.context.properties.PropertySource;

        /*private*/ __addressBook: number;

        /*private*/ __nodeDetails: number;

        /*private*/ __feeSchedules: number;

        /*private*/ __exchangeRates: number;

        /*private*/ __apiPermissions: number;

        /*private*/ __applicationProperties: number;

        /*private*/ __softwareUpdateZip: number;

        /*private*/ __throttleDefinitions: number;

        public constructor(grameNums: com.grame.services.config.grameNumbers, properties: com.grame.services.context.properties.PropertySource) {
            if (this.grameNums === undefined) { this.grameNums = null; }
            if (this.properties === undefined) { this.properties = null; }
            this.__addressBook = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__nodeDetails = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__feeSchedules = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__exchangeRates = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__apiPermissions = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__applicationProperties = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__softwareUpdateZip = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__throttleDefinitions = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.grameNums = grameNums;
            this.properties = properties;
        }

        public addressBook(): number {
            if (this.__addressBook === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__addressBook = this.properties.getLongProperty("files.addressBook");
            }
            return this.__addressBook;
        }

        public nodeDetails(): number {
            if (this.__nodeDetails === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__nodeDetails = this.properties.getLongProperty("files.nodeDetails");
            }
            return this.__nodeDetails;
        }

        public feeSchedules(): number {
            if (this.__feeSchedules === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__feeSchedules = this.properties.getLongProperty("files.feeSchedules");
            }
            return this.__feeSchedules;
        }

        public exchangeRates(): number {
            if (this.__exchangeRates === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                return this.properties.getLongProperty("files.exchangeRates");
            }
            return this.__exchangeRates;
        }

        public applicationProperties(): number {
            if (this.__applicationProperties === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__applicationProperties = this.properties.getLongProperty("files.networkProperties");
            }
            return this.__applicationProperties;
        }

        public apiPermissions(): number {
            if (this.__apiPermissions === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__apiPermissions = this.properties.getLongProperty("files.hapiPermissions");
            }
            return this.__apiPermissions;
        }

        public softwareUpdateZip(): number {
            if (this.__softwareUpdateZip === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__softwareUpdateZip = this.properties.getLongProperty("files.softwareUpdateZip");
            }
            return this.__softwareUpdateZip;
        }

        public throttleDefinitions(): number {
            if (this.__throttleDefinitions === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__throttleDefinitions = this.properties.getLongProperty("files.throttleDefinitions");
            }
            return this.__throttleDefinitions;
        }

        public toFid(num: number): FileID {
            return ;
        }
    }
    FileNumbers["__class"] = "com.grame.services.config.FileNumbers";

}

