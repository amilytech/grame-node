/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.core.jproto {
    /**
     * Custom Serializer for JKey structure.
     * 
     * @author Nathan Klick
     * @class
     */
    export class JKeySerializer {
        static LEGACY_VERSION: number = 1;

        static BPACK_VERSION: number = 2;

        constructor() {
        }

        public static serialize(rootObject: any): number[] {
            return JKeySerializer.byteStream((buffer) => {
                buffer.writeLong(JKeySerializer.BPACK_VERSION);
                let objectType: com.grame.services.legacy.core.jproto.JObjectType = com.grame.services.legacy.core.jproto.JObjectType.JKey;
                if (rootObject != null && rootObject instanceof <any>com.grame.services.legacy.core.jproto.JKeyList){
                    objectType = com.grame.services.legacy.core.jproto.JObjectType.JKeyList;
                } else if (rootObject != null && rootObject instanceof <any>com.grame.services.legacy.core.jproto.JThresholdKey){
                    objectType = com.grame.services.legacy.core.jproto.JObjectType.JThresholdKey;
                } else if (rootObject != null && rootObject instanceof <any>com.grame.services.legacy.core.jproto.JEd25519Key){
                    objectType = com.grame.services.legacy.core.jproto.JObjectType.JEd25519Key;
                } else if (rootObject != null && rootObject instanceof <any>com.grame.services.legacy.core.jproto.JECDSA_384Key){
                    objectType = com.grame.services.legacy.core.jproto.JObjectType.JECDSA_384Key;
                } else if (rootObject != null && rootObject instanceof <any>com.grame.services.legacy.core.jproto.JRSA_3072Key){
                    objectType = com.grame.services.legacy.core.jproto.JObjectType.JRSA_3072Key;
                } else if (rootObject != null && rootObject instanceof <any>com.grame.services.legacy.core.jproto.JContractIDKey){
                    objectType = com.grame.services.legacy.core.jproto.JObjectType.JContractIDKey;
                }
                const finalObjectType: com.grame.services.legacy.core.jproto.JObjectType = objectType;
                buffer.writeLong(com.grame.services.legacy.core.jproto.JObjectType["_$wrappers"][objectType].longValue());
                const content: number[] = JKeySerializer.byteStream((os) => JKeySerializer.pack(os, finalObjectType, rootObject));
                const length: number = (content != null) ? content.length : 0;
                buffer.writeLong(length);
                if (length > 0){
                    buffer.write(content);
                }
            });
        }

        public static deserialize<T>(stream: java.io.DataInputStream): T {
            try {
                const version: number = stream.readLong();
                const objectType: number = stream.readLong();
                const length: number = stream.readLong();
                if (version === JKeySerializer.LEGACY_VERSION){
                    const content: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })((<number>length|0));
                    return ;
                }
                const type: com.grame.services.legacy.core.jproto.JObjectType = /* Enum.valueOf */<any>com.grame.services.legacy.core.jproto.JObjectType[objectType];
                if (objectType < 0 || type == null){
                    throw Object.defineProperty(new Error("Illegal JObjectType was read from the stream"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                }
                return <any>(JKeySerializer.unpack<any>(stream, type, length));
            } catch(t123) {
                console.error(t123.message, t123);
                throw t123;
            }
        }

        static pack(stream: java.io.DataOutputStream, type: com.grame.services.legacy.core.jproto.JObjectType, object: any) {
            if (/* Enum.equals */(<any>(com.grame.services.legacy.core.jproto.JObjectType.JEd25519Key) === <any>(type)) || /* Enum.equals */(<any>(com.grame.services.legacy.core.jproto.JObjectType.JECDSA_384Key) === <any>(type))){
                const jKey: com.grame.services.legacy.core.jproto.JKey = <com.grame.services.legacy.core.jproto.JKey>object;
                const key: number[] = (jKey.hasEd25519Key()) ? jKey.getEd25519() : jKey.getECDSA384();
                stream.write(key);
            } else if (/* Enum.equals */(<any>(com.grame.services.legacy.core.jproto.JObjectType.JThresholdKey) === <any>(type))){
                const key: com.grame.services.legacy.core.jproto.JThresholdKey = <com.grame.services.legacy.core.jproto.JThresholdKey>object;
                stream.writeInt(key.getThreshold());
                stream.write(JKeySerializer.serialize(key.getKeys()));
            } else if (/* Enum.equals */(<any>(com.grame.services.legacy.core.jproto.JObjectType.JKeyList) === <any>(type))){
                const list: com.grame.services.legacy.core.jproto.JKeyList = <com.grame.services.legacy.core.jproto.JKeyList>object;
                const keys: Array<com.grame.services.legacy.core.jproto.JKey> = list.getKeysList();
                stream.writeInt(/* size */(<number>keys.length));
                if (/* size */(<number>keys.length) > 0){
                    for(let index128=0; index128 < keys.length; index128++) {
                        let key = keys[index128];
                        {
                            stream.write(JKeySerializer.serialize(key));
                        }
                    }
                }
            } else if (/* Enum.equals */(<any>(com.grame.services.legacy.core.jproto.JObjectType.JRSA_3072Key) === <any>(type))){
                const jKey: com.grame.services.legacy.core.jproto.JKey = <com.grame.services.legacy.core.jproto.JKey>object;
                const key: number[] = jKey.getRSA3072();
                stream.write(key);
            } else if (/* Enum.equals */(<any>(com.grame.services.legacy.core.jproto.JObjectType.JContractIDKey) === <any>(type))){
                const key: com.grame.services.legacy.core.jproto.JContractIDKey = <com.grame.services.legacy.core.jproto.JContractIDKey>object;
                stream.writeLong(key.getShardNum());
                stream.writeLong(key.getRealmNum());
                stream.writeLong(key.getContractNum());
            } else {
                throw Object.defineProperty(new Error("Unknown type was encountered while writing to the output stream"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }

        static unpack<T>(stream: java.io.DataInputStream, type: com.grame.services.legacy.core.jproto.JObjectType, length: number): T {
            if (/* Enum.equals */(<any>(com.grame.services.legacy.core.jproto.JObjectType.JEd25519Key) === <any>(type)) || /* Enum.equals */(<any>(com.grame.services.legacy.core.jproto.JObjectType.JECDSA_384Key) === <any>(type))){
                const key: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })((<number>length|0));
                stream.readFully(key);
                return (/* Enum.equals */(<any>(com.grame.services.legacy.core.jproto.JObjectType.JEd25519Key) === <any>(type))) ?  : ;
            } else if (/* Enum.equals */(<any>(com.grame.services.legacy.core.jproto.JObjectType.JThresholdKey) === <any>(type))){
                const threshold: number = stream.readInt();
                const keyList: com.grame.services.legacy.core.jproto.JKeyList = <any>(JKeySerializer.deserialize<any>(stream));
                return ;
            } else if (/* Enum.equals */(<any>(com.grame.services.legacy.core.jproto.JObjectType.JKeyList) === <any>(type))){
                const elements: Array<com.grame.services.legacy.core.jproto.JKey> = <any>([]);
                const size: number = stream.readInt();
                if (size > 0){
                    for(let i: number = 0; i < size; i++) {{
                        /* add */(elements.push(JKeySerializer.deserialize<any>(stream))>0);
                    };}
                }
                return ;
            } else if (/* Enum.equals */(<any>(com.grame.services.legacy.core.jproto.JObjectType.JRSA_3072Key) === <any>(type))){
                const key: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })((<number>length|0));
                stream.readFully(key);
                return ;
            } else if (/* Enum.equals */(<any>(com.grame.services.legacy.core.jproto.JObjectType.JContractIDKey) === <any>(type))){
                const shard: number = stream.readLong();
                const realm: number = stream.readLong();
                const contract: number = stream.readLong();
                return ;
            } else {
                throw Object.defineProperty(new Error("Unknown type was encountered while reading from the input stream"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }

        public static byteStream(consumer: JKeySerializer.StreamConsumer<java.io.DataOutputStream>): number[] {
            const bos: java.io.ByteArrayOutputStream = new java.io.ByteArrayOutputStream();
            try {
                const dos: java.io.DataOutputStream = new java.io.DataOutputStream(bos);
                try {
                    consumer(dos);
                    dos.flush();
                    bos.flush();
                    return bos.toByteArray();
                } finally {
                    dos.close();
                }
            } finally {
                bos.close();
            }
        }
    }
    JKeySerializer["__class"] = "com.grame.services.legacy.core.jproto.JKeySerializer";


    export namespace JKeySerializer {

        export interface StreamConsumer<T> {
            (stream: T);
        }
    }

}

