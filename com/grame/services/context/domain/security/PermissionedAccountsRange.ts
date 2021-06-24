/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.context.domain.security {
    export class PermissionedAccountsRange {
        static DEGENERATE: java.util.regex.Pattern; public static DEGENERATE_$LI$(): java.util.regex.Pattern { if (PermissionedAccountsRange.DEGENERATE == null) { PermissionedAccountsRange.DEGENERATE = java.util.regex.Pattern.compile("\\d+"); }  return PermissionedAccountsRange.DEGENERATE; }

        static NON_DEGENERATE: java.util.regex.Pattern; public static NON_DEGENERATE_$LI$(): java.util.regex.Pattern { if (PermissionedAccountsRange.NON_DEGENERATE == null) { PermissionedAccountsRange.NON_DEGENERATE = java.util.regex.Pattern.compile("(\\d+)-(\\d+)"); }  return PermissionedAccountsRange.NON_DEGENERATE; }

        static NON_DEGENERATE_WILDCARD: java.util.regex.Pattern; public static NON_DEGENERATE_WILDCARD_$LI$(): java.util.regex.Pattern { if (PermissionedAccountsRange.NON_DEGENERATE_WILDCARD == null) { PermissionedAccountsRange.NON_DEGENERATE_WILDCARD = java.util.regex.Pattern.compile("(\\d+)-[*]"); }  return PermissionedAccountsRange.NON_DEGENERATE_WILDCARD; }

        __from: number;

        __inclusiveTo: number;

        public static from(description: string): PermissionedAccountsRange {
            if (){
                return null;
            }
            const degenMatch: 

            constructor() {
                if (this.__from === undefined) { this.__from = null; }
                if (this.__inclusiveTo === undefined) { this.__inclusiveTo = null; }
            }
        }
        PermissionedAccountsRange["__class"] = "com.grame.services.context.domain.security.PermissionedAccountsRange";

    }

