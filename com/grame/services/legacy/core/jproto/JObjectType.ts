/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.core.jproto {
    /**
     * Mapping of Class name and Object Id
     * 
     * @author Akshay
     * @enum
     * @property {com.grame.services.legacy.core.jproto.JObjectType} JKey
     * @property {com.grame.services.legacy.core.jproto.JObjectType} JKeyList
     * @property {com.grame.services.legacy.core.jproto.JObjectType} JThresholdKey
     * @property {com.grame.services.legacy.core.jproto.JObjectType} JEd25519Key
     * @property {com.grame.services.legacy.core.jproto.JObjectType} JECDSA_384Key
     * @property {com.grame.services.legacy.core.jproto.JObjectType} JRSA_3072Key
     * @property {com.grame.services.legacy.core.jproto.JObjectType} JContractIDKey
     * @property {com.grame.services.legacy.core.jproto.JObjectType} JFileInfo
     * @property {com.grame.services.legacy.core.jproto.JObjectType} JMemoAdminKey
     * @class
     */
    export enum JObjectType {
        JKey, JKeyList, JThresholdKey, JEd25519Key, JECDSA_384Key, JRSA_3072Key, JContractIDKey, JFileInfo, JMemoAdminKey
    }

    /** @ignore */
    export class JObjectType_$WRAPPER {
        static __static_initialized: boolean = false;
        static __static_initialize() { if (!JObjectType_$WRAPPER.__static_initialized) { JObjectType_$WRAPPER.__static_initialized = true; JObjectType_$WRAPPER.__static_initializer_0(); } }

        constructor(protected _$ordinal: number, protected _$name: string) {
        }

        static LOOKUP_TABLE; public static LOOKUP_TABLE_$LI$(): any { JObjectType_$WRAPPER.__static_initialize(); if (JObjectType_$WRAPPER.LOOKUP_TABLE == null) { JObjectType_$WRAPPER.LOOKUP_TABLE = <any>({}); }  return JObjectType_$WRAPPER.LOOKUP_TABLE; }

        static REV_LOOKUP_TABLE; public static REV_LOOKUP_TABLE_$LI$(): any { JObjectType_$WRAPPER.__static_initialize(); if (JObjectType_$WRAPPER.REV_LOOKUP_TABLE == null) { JObjectType_$WRAPPER.REV_LOOKUP_TABLE = <any>({}); }  return JObjectType_$WRAPPER.REV_LOOKUP_TABLE; }

        static  __static_initializer_0() {
            JObjectType_$WRAPPER.addLookup(JObjectType.JKey, 15503731);
            JObjectType_$WRAPPER.addLookup(JObjectType.JKeyList, 15512048);
            JObjectType_$WRAPPER.addLookup(JObjectType.JThresholdKey, 15520365);
            JObjectType_$WRAPPER.addLookup(JObjectType.JEd25519Key, 15528682);
            JObjectType_$WRAPPER.addLookup(JObjectType.JECDSA_384Key, 15536999);
            JObjectType_$WRAPPER.addLookup(JObjectType.JRSA_3072Key, 15620169);
            JObjectType_$WRAPPER.addLookup(JObjectType.JContractIDKey, 15545316);
            JObjectType_$WRAPPER.addLookup(JObjectType.JFileInfo, 15636803);
            JObjectType_$WRAPPER.addLookup(JObjectType.JMemoAdminKey, 15661754);
        }

        /*private*/ static addLookup(type, value) {
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>JObjectType_$WRAPPER.LOOKUP_TABLE_$LI$(), type, value);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>JObjectType_$WRAPPER.REV_LOOKUP_TABLE_$LI$(), value, type);
        }

        public static valueOf(value): JObjectType {
            return /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>JObjectType_$WRAPPER.REV_LOOKUP_TABLE_$LI$(), value);
        }

        public longValue(): number {
            return /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>JObjectType_$WRAPPER.LOOKUP_TABLE_$LI$(), this);
        }
        public name(): string { return this._$name; }
        public ordinal(): number { return this._$ordinal; }
        public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
    }
    JObjectType["__class"] = "com.grame.services.legacy.core.jproto.JObjectType";
    JObjectType["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

    JObjectType["_$wrappers"] = {0: new JObjectType_$WRAPPER(0, "JKey"), 1: new JObjectType_$WRAPPER(1, "JKeyList"), 2: new JObjectType_$WRAPPER(2, "JThresholdKey"), 3: new JObjectType_$WRAPPER(3, "JEd25519Key"), 4: new JObjectType_$WRAPPER(4, "JECDSA_384Key"), 5: new JObjectType_$WRAPPER(5, "JRSA_3072Key"), 6: new JObjectType_$WRAPPER(6, "JContractIDKey"), 7: new JObjectType_$WRAPPER(7, "JFileInfo"), 8: new JObjectType_$WRAPPER(8, "JMemoAdminKey")};

}


com.grame.services.legacy.core.jproto.JObjectType_$WRAPPER.__static_initialize();
