/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.core.jproto {
    /**
     * Maps to proto Key.
     * 
     * @author hua Created on 2018-11-02
     * @class
     */
    export abstract class JKey {
        static serialVersionUID: number = 1;

        static log: Logger; public static log_$LI$(): Logger { if (JKey.log == null) { JKey.log = ; }  return JKey.log; }

        static USE_HEX_ENCODED_KEY: boolean; public static USE_HEX_ENCODED_KEY_$LI$(): boolean { if (JKey.USE_HEX_ENCODED_KEY == null) { JKey.USE_HEX_ENCODED_KEY = KeyExpansion.USE_HEX_ENCODED_KEY; }  return JKey.USE_HEX_ENCODED_KEY; }

        /*private*/ forScheduledTxn: boolean;

        /**
         * Maps a proto Key to Jkey.
         * 
         * @param {Key} key
         * the proto Key to be converted
         * @return {com.grame.services.legacy.core.jproto.JKey} the generated JKey instance
         */
        public static mapKey(key: Key): JKey {
            return JKey.convertKey(key, 1);
        }

        /**
         * Converts a key up to a given level of depth. Both the signature and the key may be complex with
         * multiple levels.
         * 
         * @param {Key} key
         * the current proto Key to be converted
         * @param {number} depth
         * current level that is to be verified. The first level has a value of 1.
         * @return {com.grame.services.legacy.core.jproto.JKey}
         */
        public static convertKey(key: Key, depth: number): JKey {
            if (depth > (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(KeyExpansion.KEY_EXPANSION_DEPTH)){
                throw null /*cannot resolve DecoderException*/;
            }
            if (!( || )){
                const result: JKey = JKey.convertBasic(key);
                return result;
            } else if (){
                const tKeys: Array<Key> = ;
                const jkeys: Array<JKey> = <any>([]);
                for(let index129=0; index129 < tKeys.length; index129++) {
                    let aKey = tKeys[index129];
                    {
                        const res: JKey = JKey.convertKey(aKey, depth + 1);
                        /* add */(jkeys.push(res)>0);
                    }
                }
                const keys: com.grame.services.legacy.core.jproto.JKeyList = new com.grame.services.legacy.core.jproto.JKeyList(jkeys);
                const thd: number = ;
                const result: JKey = new com.grame.services.legacy.core.jproto.JThresholdKey(keys, thd);
                return (result);
            } else {
                const tKeys: Array<Key> = ;
                const jkeys: Array<JKey> = <any>([]);
                for(let index130=0; index130 < tKeys.length; index130++) {
                    let aKey = tKeys[index130];
                    {
                        const res: JKey = JKey.convertKey(aKey, depth + 1);
                        /* add */(jkeys.push(res)>0);
                    }
                }
                return new com.grame.services.legacy.core.jproto.JKeyList(jkeys);
            }
        }

        /**
         * Converts a basic key.
         * 
         * @param {Key} key
         * proto Key to be converted
         * @return {com.grame.services.legacy.core.jproto.JKey} converted JKey instance
         * @private
         */
        /*private*/ static convertBasic(key: Key): JKey {
            let rv: JKey;
            if (!){
                let pubKeyBytes: number[] = null;
                if (JKey.USE_HEX_ENCODED_KEY_$LI$()){
                    const pubKeyHex: string = ;
                    pubKeyBytes = com.grame.services.utils.MiscUtils.commonsHexToBytes(pubKeyHex);
                } else {
                    pubKeyBytes = ;
                }
                rv = new com.grame.services.legacy.core.jproto.JEd25519Key(pubKeyBytes);
            } else if (!){
                let pubKeyBytes: number[] = null;
                if (JKey.USE_HEX_ENCODED_KEY_$LI$()){
                    const pubKeyHex: string = ;
                    pubKeyBytes = com.grame.services.utils.MiscUtils.commonsHexToBytes(pubKeyHex);
                } else {
                    pubKeyBytes = ;
                }
                rv = new com.grame.services.legacy.core.jproto.JECDSA_384Key(pubKeyBytes);
            } else if (!){
                const pubKeyBytes: number[] = ;
                rv = new com.grame.services.legacy.core.jproto.JRSA_3072Key(pubKeyBytes);
            } else if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() != null && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() != 0){
                const cid: ContractID = ;
                rv = new com.grame.services.legacy.core.jproto.JContractIDKey(cid);
            } else {
                throw null /*cannot resolve DecoderException*/;
            }
            return rv;
        }

        /**
         * Converts a basic JKey to proto Key.
         * 
         * @param {com.grame.services.legacy.core.jproto.JKey} jkey
         * JKey object to be converted
         * @return {Key} converted Key instance
         */
        static convertJKeyBasic(jkey: JKey): Key {
            let rv: Key = null;
            if (jkey.hasEd25519Key()){
                rv = ;
            } else if (jkey.hasECDSA_383Key()){
                rv = ;
            } else if (jkey.hasRSA_3072Key()){
                rv = ;
            } else if (jkey.hasContractID()){
                rv = ;
            } else {
                throw null /*cannot resolve DecoderException*/;
            }
            return;
        }

        /**
         * Converts a JKey to proto Key for up to a given level of depth.
         * 
         * @param {com.grame.services.legacy.core.jproto.JKey} jkey
         * the current JKey to be converted
         * @param {number} depth
         * current level that is to be verified. The first level has a value of 1.
         * @return {Key} converted proto Key
         */
        public static convertJKey(jkey: JKey, depth: number): Key {
            if (depth > (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(KeyExpansion.KEY_EXPANSION_DEPTH)){
            }
            if (!(jkey.hasThresholdKey() || jkey.hasKeyList())){
                const result: Key = JKey.convertJKeyBasic(jkey);
                return;
            } else if (jkey.hasThresholdKey()){
                const jKeys: Array<JKey> = jkey.getThresholdKey().getKeys().getKeysList();
                const tkeys: Array<Key> = new Array<>();
                for(let index131=0; index131 < jKeys.length; index131++) {
                    let aKey = jKeys[index131];
                    {
                        const res: Key = JKey.convertJKey(aKey, depth + 1);
                        /* add */(tkeys.push(res)>0);
                    }
                }
                const keys: KeyList = ;
                const thd: number = jkey.getThresholdKey().getThreshold();
                const result: Key = ;
                return (result);
            } else {
                const jKeys: Array<JKey> = jkey.getKeyList().getKeysList();
                const tkeys: Array<Key> = new Array<>();
                for(let index132=0; index132 < jKeys.length; index132++) {
                    let aKey = jKeys[index132];
                    {
                        const res: Key = JKey.convertJKey(aKey, depth + 1);
                        /* add */(tkeys.push(res)>0);
                    }
                }
                const keys: KeyList = ;
                const thd: number = /* size */(<number>jKeys.length);
                const result: Key = ;
                return (result);
            }
        }

        public static equalUpToDecodability(a: JKey, b: JKey): boolean {
            let aKey: Key = null;
            let bKey: Key = null;
            try {
                aKey = JKey.mapJKey(a);
            } catch(ignore) {
            }
            try {
                bKey = JKey.mapJKey(b);
            } catch(ignore) {
            }
            return java.util.Objects.equals(aKey, bKey);
        }

        /**
         * Maps a JKey instance to a proto Key instance.
         * 
         * @param {com.grame.services.legacy.core.jproto.JKey} jkey
         * the JKey to be converted
         * @return {Key} the converted Key instance
         */
        public static mapJKey(jkey: JKey): Key {
            return JKey.convertJKey(jkey, 1);
        }

        public serialize(): number[] {
            return com.grame.services.legacy.core.jproto.JKeySerializer.serialize(this);
        }

        public abstract isEmpty(): boolean;

        /**
         * Expected to return {@code false} if the key is empty.
         * @return {boolean}
         */
        public abstract isValid(): boolean;

        public setForScheduledTxn(flag: boolean) {
            this.forScheduledTxn = flag;
        }

        public isForScheduledTxn(): boolean {
            return this.forScheduledTxn;
        }

        public hasEd25519Key(): boolean {
            return false;
        }

        public hasECDSA_383Key(): boolean {
            return false;
        }

        public hasRSA_3072Key(): boolean {
            return false;
        }

        public hasKeyList(): boolean {
            return false;
        }

        public hasThresholdKey(): boolean {
            return false;
        }

        public hasContractID(): boolean {
            return false;
        }

        public getContractIDKey(): com.grame.services.legacy.core.jproto.JContractIDKey {
            return null;
        }

        public getThresholdKey(): com.grame.services.legacy.core.jproto.JThresholdKey {
            return null;
        }

        public getKeyList(): com.grame.services.legacy.core.jproto.JKeyList {
            return null;
        }

        public getEd25519(): number[] {
            return null;
        }

        public getECDSA384(): number[] {
            return null;
        }

        public getRSA3072(): number[] {
            return null;
        }

        public duplicate(): JKey {
            try {
                const buf: number[] = this.serialize();
                const bs: 
            } catch(ex) {
                throw Object.defineProperty(new Error(ex.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        constructor() {
            this.forScheduledTxn = false;
        }
    }
    JKey["__class"] = "com.grame.services.legacy.core.jproto.JKey";
    JKey["__interfaces"] = ["java.io.Serializable"];


}

