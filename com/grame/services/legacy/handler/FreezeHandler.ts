/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.handler {
    /**
     * @author Qian
     * FreezeHandler is used in the HGCApp handleTransaction for performing Freeze
     * transactions. Documentation available at index.html#proto.FreezeTransactionBody
     * @param {*} hfs
     * @param {Platform} platform
     * @param {*} exchange
     * @class
     */
    export class FreezeHandler {
        public static log: Logger; public static log_$LI$(): Logger { if (FreezeHandler.log == null) { FreezeHandler.log = ; }  return FreezeHandler.log; }

        /*private*/ platform: Platform;

        /*private*/ hfs: com.grame.services.files.grameFs;

        /*private*/ exchange: com.grame.services.fees.HbarCentExchange;

        static TARGET_DIR: string = "./";

        static TEMP_DIR: string = "./temp";

        static DELETE_FILE: string; public static DELETE_FILE_$LI$(): string { if (FreezeHandler.DELETE_FILE == null) { FreezeHandler.DELETE_FILE = FreezeHandler.TEMP_DIR + java.io.File.separator + "delete.txt"; }  return FreezeHandler.DELETE_FILE; }

        static CMD_SCRIPT: string = "exec.sh";

        static FULL_SCRIPT_PATH: string; public static FULL_SCRIPT_PATH_$LI$(): string { if (FreezeHandler.FULL_SCRIPT_PATH == null) { FreezeHandler.FULL_SCRIPT_PATH = FreezeHandler.TEMP_DIR + java.io.File.separator + FreezeHandler.CMD_SCRIPT; }  return FreezeHandler.FULL_SCRIPT_PATH; }

        /*private*/ LOG_PREFIX: string;

        static ABORT_UDPATE_MESSAGE: string = "ABORT UPDATE PROCRESS";

        /*private*/ updateFeatureFile: FileID;

        /*private*/ updateFileHash: number[];

        public constructor(hfs: com.grame.services.files.grameFs, platform: Platform, exchange: com.grame.services.fees.HbarCentExchange) {
            if (this.platform === undefined) { this.platform = null; }
            if (this.hfs === undefined) { this.hfs = null; }
            if (this.exchange === undefined) { this.exchange = null; }
            if (this.LOG_PREFIX === undefined) { this.LOG_PREFIX = null; }
            if (this.updateFeatureFile === undefined) { this.updateFeatureFile = null; }
            if (this.updateFileHash === undefined) { this.updateFileHash = null; }
            this.exchange = exchange;
            this.platform = platform;
            this.hfs = hfs;
            this.LOG_PREFIX = "NETWORK_UPDATE Node " + ;
        }

        public freeze(transactionBody: TransactionBody, consensusTime: java.time.Instant): TransactionRecord {
            const freezeBody: FreezeTransactionBody = ;
            let receipt: TransactionReceipt;
            if (){
                this.updateFeatureFile = ;
                this.updateFileHash = ;
            }
            try {
                receipt = ;
            } catch(platformEx) {
                receipt = ;
            }
            const transactionRecord: TransactionRecord.Builder = ;
            return ;
        }

        public handleUpdateFeature() {
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.updateFeatureFile) == null){
                return;
            }
            const fileIDtoUse: FileID = this.updateFeatureFile;
            this.updateFeatureFile = null;
            if (this.hfs.exists(fileIDtoUse)){
                const fileBytes: number[] = this.hfs.cat(fileIDtoUse);
                if (fileBytes == null || fileBytes.length === 0){
                    return;
                }
                try {
                    const readFileHash: number[] = java.security.MessageDigest.getInstance("SHA-384").digest(fileBytes);
                    if (/* equals */((a1, a2) => { if(a1==null && a2==null) return true; if(a1==null || a2==null) return false; if(a1.length != a2.length) return false; for(let i = 0; i < a1.length; i++) { if(<any>a1[i] != <any>a2[i]) return false; } return true; })(readFileHash, this.updateFileHash)){
                        this.updateFeatureWithFileContents(fileBytes);
                    } else {
                    }
                } catch(e) {
                }
            } else {
            }
        }

        /*private*/ updateFeatureWithFileContents(fileBytes: number[]) {
            const directory: java.io.File = new java.io.File(FreezeHandler.TEMP_DIR);
            try {
                if (directory.exists()){
                } else {
                    directory.mkdir();
                }
                com.grame.services.utils.UnzipUtility.unzip(fileBytes, FreezeHandler.TEMP_DIR);
                const deleteTxt: java.io.File = new java.io.File(FreezeHandler.DELETE_FILE_$LI$());
                if (deleteTxt.exists()){
                    this.deleteFileFromList(FreezeHandler.DELETE_FILE_$LI$());
                    deleteTxt.delete();
                }
                const script: java.io.File = new java.io.File(FreezeHandler.FULL_SCRIPT_PATH_$LI$());
                if (script.exists()){
                    if (script.setExecutable(true)){
                        this.runScript(FreezeHandler.FULL_SCRIPT_PATH_$LI$());
                    } else {
                    }
                }
            } catch(e) {
            }
        }

        /*private*/ deleteFileFromList(deleteFileListName: string) {
            const br: { str: string, cursor: number } = new java.io.FileInputStream(deleteFileListName);
            try {
                let line: string;
                while(((line = br.readLine()) != null)) {{
                    if (/* contains */(line.indexOf("..") != -1)){
                    } else {
                        const fullPath: string = FreezeHandler.TARGET_DIR + java.io.File.separator + line;
                        const file: java.io.File = new java.io.File(fullPath);
                        if (file.exists()){
                            if (file.delete()){
                            } else {
                            }
                        }
                    }
                }};
            } catch(e) {
            } finally {
                br.close();
            }
        }

        /*private*/ runScript(scriptFullPath: string) {
            try {
                java.lang.Runtime.getRuntime().exec(" nohup " + scriptFullPath + " " + );
            } catch(e) {
            }
        }
    }
    FreezeHandler["__class"] = "com.grame.services.legacy.handler.FreezeHandler";

}

