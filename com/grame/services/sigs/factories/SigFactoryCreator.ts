/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.factories {
    export class SigFactoryCreator {
        public static log: Logger; public static log_$LI$(): Logger { if (SigFactoryCreator.log == null) { SigFactoryCreator.log = ; }  return SigFactoryCreator.log; }

        public createScopedFactory(accessor: com.grame.services.utils.TxnAccessor): com.grame.services.sigs.factories.TxnScopedPlatformSigFactory {
            return new com.grame.services.sigs.factories.BodySigningSigFactory(accessor);
        }
    }
    SigFactoryCreator["__class"] = "com.grame.services.sigs.factories.SigFactoryCreator";

}

