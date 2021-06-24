/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.utils {
    /**
     * Contains static helpers used during precheck to validate signatures.
     * 
     * @author AmilyTech
     * @class
     */
    export class PrecheckUtils {
        static KEYSIGNATURE_COUNT_MISMATCH: string = "Incompatible key/sig shapes!";

        constructor() {
            throw Object.defineProperty(new Error("Utility Class"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * Constructs a predicate testing whether a {@link TransactionBody} should be
         * considered a query payment for the given node.
         * 
         * @param {AccountID} deservingNode the id of a node's account.
         * @return {*} a predicate testing if a txn is a query payment for the given node.
         */
        public static queryPaymentTestFor(deservingNode: AccountID): (p1: TransactionBody) => boolean {
            return ;
        }

        public static assertCompatibility$java_util_List$java_util_List(keys: Array<com.grame.services.legacy.core.jproto.JKey>, sigs: Array<Signature>) {
            if (/* size */(<number>keys.length) !== /* size */(<number>sigs.length)){
                throw new com.grame.services.legacy.exception.KeySignatureCountMismatchException(PrecheckUtils.KEYSIGNATURE_COUNT_MISMATCH);
            }
            for(let i: number = 0; i < /* size */(<number>keys.length); i++) {{
                PrecheckUtils.assertCompatibility$java_util_List$java_util_List(/* get */keys[i], /* get */sigs[i]);
            };}
        }

        /**
         * Throws an exception if the given {@link JKey} and {@link Signature} lists
         * do not have the same "shape"; i.e. the same hierarchies formed of thresholds,
         * lists, and simple constituents.
         * 
         * @param {com.grame.services.legacy.core.jproto.JKey[]} keys a list of keys.
         * @param {Signature[]} sigs a list of legacy signatures.
         * @throws Exception if the arguments do not have the same shape.
         */
        public static assertCompatibility(keys?: any, sigs?: any) {
            if (((keys != null && (keys instanceof Array)) || keys === null) && ((sigs != null && (sigs instanceof Array)) || sigs === null)) {
                return <any>com.grame.services.sigs.utils.PrecheckUtils.assertCompatibility$java_util_List$java_util_List(keys, sigs);
            } else if (((keys != null && keys instanceof <any>com.grame.services.legacy.core.jproto.JKey) || keys === null) && ((sigs != null && sigs instanceof <any>Signature) || sigs === null)) {
                return <any>com.grame.services.sigs.utils.PrecheckUtils.assertCompatibility$com_grame_services_legacy_core_jproto_JKey$Signature(keys, sigs);
            } else throw new Error('invalid overload');
        }

        /*private*/ static assertCompatibility$com_grame_services_legacy_core_jproto_JKey$Signature(key: com.grame.services.legacy.core.jproto.JKey, sig: Signature) {
            if (PrecheckUtils.isSimpleKey(key)){
                if (!PrecheckUtils.isSimpleSig(sig)){
                    throw new com.grame.services.legacy.exception.KeySignatureTypeMismatchException(PrecheckUtils.KEYSIGNATURE_COUNT_MISMATCH);
                }
            } else if (key.hasKeyList()){
                if (!){
                    throw new com.grame.services.legacy.exception.KeySignatureTypeMismatchException(PrecheckUtils.KEYSIGNATURE_COUNT_MISMATCH);
                }
                PrecheckUtils.assertCompatibility$java_util_List$java_util_List(key.getKeyList().getKeysList(), );
            } else {
                if (!){
                    throw new com.grame.services.legacy.exception.KeySignatureTypeMismatchException(PrecheckUtils.KEYSIGNATURE_COUNT_MISMATCH);
                }
                PrecheckUtils.assertCompatibility$java_util_List$java_util_List(key.getThresholdKey().getKeys().getKeysList(), );
            }
        }

        /*private*/ static isSimpleKey(key: com.grame.services.legacy.core.jproto.JKey): boolean {
            return !key.hasThresholdKey() && !key.hasKeyList();
        }

        /*private*/ static isSimpleSig(sig: Signature): boolean {
            return ! && !;
        }
    }
    PrecheckUtils["__class"] = "com.grame.services.sigs.utils.PrecheckUtils";

}

