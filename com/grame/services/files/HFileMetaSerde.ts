/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files {
    export class HFileMetaSerde {
        public static MAX_CONCEIVABLE_MEMO_UTF8_BYTES: number = 1024;

        public static PRE_MEMO_VERSION: number = 1;

        public static MEMO_VERSION: number = 2;

        public static serdes: com.grame.services.state.serdes.DomainSerdes; public static serdes_$LI$(): com.grame.services.state.serdes.DomainSerdes { if (HFileMetaSerde.serdes == null) { HFileMetaSerde.serdes = new com.grame.services.state.serdes.DomainSerdes(); }  return HFileMetaSerde.serdes; }

        public static streamContentDiscovery: HFileMetaSerde.StreamContentDiscovery; public static streamContentDiscovery_$LI$(): HFileMetaSerde.StreamContentDiscovery { if (HFileMetaSerde.streamContentDiscovery == null) { HFileMetaSerde.streamContentDiscovery = (consumer) => { return com.grame.services.legacy.core.jproto.JKeySerializer.byteStream(consumer) }; }  return HFileMetaSerde.streamContentDiscovery; }

        public static serInFactory: (p1: { str: string, cursor: number }) => SerializableDataInputStream; public static serInFactory_$LI$(): (p1: { str: string, cursor: number }) => SerializableDataInputStream { if (HFileMetaSerde.serInFactory == null) { HFileMetaSerde.serInFactory = ; }  return HFileMetaSerde.serInFactory; }

        public static serOutFactory: (p1: java.io.OutputStream) => SerializableDataOutputStream; public static serOutFactory_$LI$(): (p1: java.io.OutputStream) => SerializableDataOutputStream { if (HFileMetaSerde.serOutFactory == null) { HFileMetaSerde.serOutFactory = ; }  return HFileMetaSerde.serOutFactory; }

        public static serialize(meta: com.grame.services.files.HFileMeta): number[] {
            return HFileMetaSerde.streamContentDiscovery_$LI$()((out) => {
                const serOut: );
            }
        }
        HFileMetaSerde["__class"] = "com.grame.services.files.HFileMetaSerde";


        export namespace HFileMetaSerde {

            

            
        }

