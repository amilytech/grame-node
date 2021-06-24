/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.config {
    export class grameNumbers {
        /*private*/ properties: com.grame.services.context.properties.PropertySource;

        /*private*/ __realm: number;

        /*private*/ __shard: number;

        /*private*/ __numReservedSystemEntities: number;

        public constructor(properties: com.grame.services.context.properties.PropertySource) {
            if (this.properties === undefined) { this.properties = null; }
            this.__realm = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__shard = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.__numReservedSystemEntities = com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$();
            this.properties = properties;
        }

        public realm(): number {
            if (this.__realm === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__realm = this.properties.getLongProperty("grame.realm");
            }
            return this.__realm;
        }

        public shard(): number {
            if (this.__shard === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__shard = this.properties.getLongProperty("grame.shard");
            }
            return this.__shard;
        }

        public numReservedSystemEntities(): number {
            if (this.__numReservedSystemEntities === com.grame.services.config.EntityNumbers.UNKNOWN_NUMBER_$LI$()){
                this.__numReservedSystemEntities = this.properties.getLongProperty("grame.numReservedSystemEntities");
            }
            return this.__numReservedSystemEntities;
        }
    }
    grameNumbers["__class"] = "com.grame.services.config.grameNumbers";

}

