/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.initialization {
    export class ExportExistingAccounts {
        static log: Logger; public static log_$LI$(): Logger { if (ExportExistingAccounts.log == null) { ExportExistingAccounts.log = ; }  return ExportExistingAccounts.log; }

        static asJsonArray(accounts: FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>): JSONArray {
            const accountObjArr: JSONArray = null /*cannot resolve JSONArray*/;
            let cryptoAccount: JSONObject = null;
            let mapValue: com.grame.services.state.merkle.MerkleAccount;
            let proxyAccountID: com.grame.services.state.submerkle.EntityId;
            for(let index123=.iterator();index123.hasNext();) {
                let currKey = index123.next();
                {
                    try {
                        cryptoAccount = null /*cannot resolve JSONObject*/;
                        mapValue = ;
                        proxyAccountID = mapValue.getProxy();
                        if (proxyAccountID != null){
                        } else {
                        }
                        const key: string = ;
                    } catch(e) {
                    }
                }
            }
            return;
        }

        /**
         * This method is invoked during start up and executed based upon the configuration settings. It
         * exports all the existing accounts in the JSON format and write it in a file
         * @param {string} exportAccountPath
         * @param {FCMap} accountMap
         */
        public static exportAccounts(exportAccountPath: string, accountMap: FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>) {
            const accountList: JSONArray = ExportExistingAccounts.asJsonArray(accountMap);
            const file: java.io.FileWriter = new java.io.FileWriter(exportAccountPath);
            try {
                file.write();
            } catch(e) {
                throw e;
            } finally {
                file.close();
            }
        }
    }
    ExportExistingAccounts["__class"] = "com.grame.services.legacy.initialization.ExportExistingAccounts";

}

