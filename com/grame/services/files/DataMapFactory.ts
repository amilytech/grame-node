/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files {
    export class DataMapFactory {
        static LEGACY_PATH_TEMPLATE: string = "/%d/f%d";

        static LEGACY_PATH_PATTERN: java.util.regex.Pattern; public static LEGACY_PATH_PATTERN_$LI$(): java.util.regex.Pattern { if (DataMapFactory.LEGACY_PATH_PATTERN == null) { DataMapFactory.LEGACY_PATH_PATTERN = java.util.regex.Pattern.compile("/(\\d+)/f(\\d+)"); }  return DataMapFactory.LEGACY_PATH_PATTERN; }

        static REALM_INDEX: number = 1;

        static ACCOUNT_INDEX: number = 2;

        constructor() {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public static dataMapFrom(store: any): any {
            return ((str, index, len) => str.substring(index, index + len))((FileID).join(''), (x=>x), (x=>x));
        }

        static toFid(key: string): FileID {
            const matcher: 
        }
        DataMapFactory["__class"] = "com.grame.services.files.DataMapFactory";

    }

