/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.sourcing {
    export class ScopedSigBytesProvider implements com.grame.services.sigs.sourcing.PubKeyToSigBytesProvider {
        public static log: Logger; public static log_$LI$(): Logger { if (ScopedSigBytesProvider.log == null) { ScopedSigBytesProvider.log = ; }  return ScopedSigBytesProvider.log; }

        delegate: com.grame.services.sigs.sourcing.PubKeyToSigBytes;

        public constructor(accessor: com.grame.services.utils.TxnAccessor) {
            if (this.delegate === undefined) { this.delegate = null; }
            this.delegate = new com.grame.services.sigs.sourcing.SigMapPubKeyToSigBytes(accessor.getSigMap());
        }

        /**
         * 
         * @param {Transaction} ignore
         * @return {*}
         */
        public payerSigBytesFor(ignore: Transaction): com.grame.services.sigs.sourcing.PubKeyToSigBytes {
            return this.delegate;
        }

        /**
         * 
         * @param {Transaction} ignore
         * @return {*}
         */
        public otherPartiesSigBytesFor(ignore: Transaction): com.grame.services.sigs.sourcing.PubKeyToSigBytes {
            return this.delegate;
        }

        /**
         * 
         * @param {Transaction} ignore
         * @return {*}
         */
        public allPartiesSigBytesFor(ignore: Transaction): com.grame.services.sigs.sourcing.PubKeyToSigBytes {
            return this.delegate;
        }
    }
    ScopedSigBytesProvider["__class"] = "com.grame.services.sigs.sourcing.ScopedSigBytesProvider";
    ScopedSigBytesProvider["__interfaces"] = ["com.grame.services.sigs.sourcing.PubKeyToSigBytesProvider"];


}

