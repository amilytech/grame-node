/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.context.domain.security {
    export class HapiOpPermissions {
        static MISSING_OP_TPL: string = "Ignoring key \'%s\', which does not correspond to a known grame operation!";

        static UNPARSEABLE_RANGE_TPL: string = "Ignoring entry for supported op %s---cannot interpret range \'%s\'!";

        static log: Logger; public static log_$LI$(): Logger { if (HapiOpPermissions.log == null) { HapiOpPermissions.log = ; }  return HapiOpPermissions.log; }

        /*private*/ accountNums: com.grame.services.config.AccountNumbers;

        public constructor(accountNums: com.grame.services.config.AccountNumbers) {
            if (this.accountNums === undefined) { this.accountNums = null; }
            this.permissions = new Object<>(grameFunctionality);
            this.accountNums = accountNums;
        }

        /*private*/ permissions: any;

        public reloadFrom(config: ServicesConfigurationList) {
            const newPerms: any = new Object<>(grameFunctionality);
            for(let index142=.iterator();index142.hasNext();) {
                let permission = index142.next();
                {
                    const opName: ;
                    if (/* containsKey */com.grame.services.context.domain.security.PermissionFileUtils.legacyKeys_$LI$().hasOwnProperty(opName)){
                        const op: ;
                        const range: ;
                        if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(range) == null){
                        } else {
                            newPerms.put(op, range);
                        }
                    } else {
                    }
                }
            }
            this.permissions = newPerms;
        }

        public permissibilityOf(__function: grameFunctionality, givenPayer: AccountID): ResponseCodeEnum {
            const num: ;
            let range: com.grame.services.context.domain.security.PermissionedAccountsRange;
            return (range = this.permissions.get(__function)) != null && (this.accountNums.isSuperuser(num) || range.contains(num)) ? OK : NOT_SUPPORTED;
        }

        getPermissions(): any {
            return;
        }
    }
    HapiOpPermissions["__class"] = "com.grame.services.context.domain.security.HapiOpPermissions";

}

