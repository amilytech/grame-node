/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files {
    export class MetadataMapFactory {
        static log: Logger; public static log_$LI$(): Logger { if (MetadataMapFactory.log == null) { MetadataMapFactory.log = ; }  return MetadataMapFactory.log; }

        static LEGACY_PATH_TEMPLATE: string = "/%d/k%d";

        static LEGACY_PATH_PATTERN: java.util.regex.Pattern; public static LEGACY_PATH_PATTERN_$LI$(): java.util.regex.Pattern { if (MetadataMapFactory.LEGACY_PATH_PATTERN == null) { MetadataMapFactory.LEGACY_PATH_PATTERN = java.util.regex.Pattern.compile("/(\\d+)/k(\\d+)"); }  return MetadataMapFactory.LEGACY_PATH_PATTERN; }

        static REALM_INDEX: number = 1;

        static ACCOUNT_INDEX: number = 2;

        constructor() {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public static metaMapFrom(store: any): any {
            return ((str, index, len) => str.substring(index, index + len))((FileID).join(''), (bytes) => { return MetadataMapFactory.toAttr(bytes) }, (attr) => { return MetadataMapFactory.toValueBytes(attr) });
        }

        static toFid(key: string): FileID {
            const matcher: 
        }
        MetadataMapFactory["__class"] = "com.grame.services.files.MetadataMapFactory";

    }

