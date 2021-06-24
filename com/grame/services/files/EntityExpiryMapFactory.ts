/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files {
    export class EntityExpiryMapFactory {
        static LEGACY_PATH_TEMPLATE: string = "/%d/e%d";

        static LEGACY_PATH_PATTERN: java.util.regex.Pattern; public static LEGACY_PATH_PATTERN_$LI$(): java.util.regex.Pattern { if (EntityExpiryMapFactory.LEGACY_PATH_PATTERN == null) { EntityExpiryMapFactory.LEGACY_PATH_PATTERN = java.util.regex.Pattern.compile("/(\\d+)/e(\\d+)"); }  return EntityExpiryMapFactory.LEGACY_PATH_PATTERN; }

        static REALM_INDEX: number = 1;

        static NUM_INDEX: number = 2;

        constructor() {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        public static entityExpiryMapFrom(store: any): any {
            return ((str, index, len) => str.substring(index, index + len))((com.grame.services.state.submerkle.EntityId).join(''), (bytes) => { return EntityExpiryMapFactory.toLong(bytes) }, );
        }

        static toEid(key: string): com.grame.services.state.submerkle.EntityId {
            const matcher: 
        }
        EntityExpiryMapFactory["__class"] = "com.grame.services.files.EntityExpiryMapFactory";

    }

