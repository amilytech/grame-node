/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.sourcing {
    /**
     * Convenience implementation of {@link PubKeyToSigBytesProvider}.
     * 
     * @author AmilyTech
     * @enum
     * @property {com.grame.services.sigs.sourcing.DefaultSigBytesProvider} DEFAULT_SIG_BYTES
     * @class
     */
    export enum DefaultSigBytesProvider {
        DEFAULT_SIG_BYTES
    }

    /** @ignore */
    export class DefaultSigBytesProvider_$WRAPPER implements com.grame.services.sigs.sourcing.PubKeyToSigBytesProvider {
        constructor(protected _$ordinal: number, protected _$name: string) {
        }

        /**
         * 
         * @param {Transaction} signedTxn
         * @return {*}
         */
        public payerSigBytesFor(signedTxn): com.grame.services.sigs.sourcing.PubKeyToSigBytes {
            return com.grame.services.sigs.sourcing.PubKeyToSigBytes.forPayer(signedTxn);
        }

        /**
         * 
         * @param {Transaction} signedTxn
         * @return {*}
         */
        public otherPartiesSigBytesFor(signedTxn): com.grame.services.sigs.sourcing.PubKeyToSigBytes {
            return com.grame.services.sigs.sourcing.PubKeyToSigBytes.forOtherParties(signedTxn);
        }

        /**
         * 
         * @param {Transaction} signedTxn
         * @return {*}
         */
        public allPartiesSigBytesFor(signedTxn): com.grame.services.sigs.sourcing.PubKeyToSigBytes {
            return com.grame.services.sigs.sourcing.PubKeyToSigBytes.forAllParties(signedTxn);
        }
        public name(): string { return this._$name; }
        public ordinal(): number { return this._$ordinal; }
        public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
    }
    DefaultSigBytesProvider["__class"] = "com.grame.services.sigs.sourcing.DefaultSigBytesProvider";
    DefaultSigBytesProvider["__interfaces"] = ["com.grame.services.sigs.sourcing.PubKeyToSigBytesProvider","java.lang.Comparable","java.io.Serializable"];

    DefaultSigBytesProvider["_$wrappers"] = {0: new DefaultSigBytesProvider_$WRAPPER(0, "DEFAULT_SIG_BYTES")};

}

