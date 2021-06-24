/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.legacy.stream {
    /**
     * This class is used for generating record stream v3 files
     * @class
     */
    export class RecordStream {
        /**
         * use this for all logging, as controlled by the optional data/log4j2.xml file
         */
        static log: Logger; public static log_$LI$(): Logger { if (RecordStream.log == null) { RecordStream.log = ; }  return RecordStream.log; }

        public static TYPE_SIGNATURE: number = 3;

        public static TYPE_FILE_HASH: number = 4;

        /**
         * Read the FileHash from the record stream signature v3 file
         * 
         * @param {java.io.File} file .rcd_sig v3 file
         * @return {byte[]} file hash byte array
         */
        public static getFileHashFromSigFile(file: java.io.File): number[] {
            const pair: Pair<number[], number[]> = RecordStream.parseSigFile(file);
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(pair) == null){
                return null;
            }
            return ;
        }

        /**
         * Check if a file is a RecordStream signature file
         * 
         * @param {java.io.File} file
         * @return
         * @return {boolean}
         */
        public static isRecordSigFile(file: java.io.File): boolean {
            return /* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(file.getName(), ".rcd_sig");
        }

        /**
         * Read the FileHash and the signature byte array contained in the signature file;
         * return a pair of FileHash and signature
         * 
         * @param {java.io.File} file
         * @return
         * @return {Pair}
         */
        public static parseSigFile(file: java.io.File): Pair<number[], number[]> {
            if (!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(file.getName(), "_sig")){
                return null;
            }
            const dis: java.io.DataInputStream = new java.io.DataInputStream(new java.io.FileInputStream(file));
            try {
                let fileHash: number[] = null;
                let sig: number[] = null;
                while((dis.available() !== 0)) {{
                    const typeDelimiter: number = dis.readByte();
                    switch((typeDelimiter)) {
                    case 4 /* TYPE_FILE_HASH */:
                        fileHash = (s => { let a=[]; while(s-->0) a.push(0); return a; })(48);
                        dis.readFully(fileHash);
                        break;
                    case 3 /* TYPE_SIGNATURE */:
                        const sigLength: number = dis.readInt();
                        sig = (s => { let a=[]; while(s-->0) a.push(0); return a; })(sigLength);
                        dis.readFully(sig);
                        break;
                    default:
                        ;
                    }
                }};
                return ;
            } catch(e) {
                return null;
            } finally {
                dis.close();
            }
        }

        /**
         * Read the previous file hash from the last .rcd_sig file in the given directory
         * 
         * @param {string} directory the directory where stores record stream v3 files
         * @return {byte[]} record stream v3 previous file hash byte array
         */
        public static readPrevFileHash(directory: string): number[] {
            if (directory != null){
                const dir: java.io.File = new java.io.File(directory);
                const files: java.io.File[] = dir.listFiles();
                if (files != null && files.length > 0){
                    const lastSigFileOptional: java.io.File = java.util.Arrays.stream<any>(files).filter((file) => RecordStream.isRecordSigFile(file)).max(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['compare'] ? funcInst['compare'] : funcInst) .call(funcInst, arg0, arg1)})(java.util.Comparator<any, any>((instance$File) => { return instance$File.getName() }))));
                    if (/* isPresent */(lastSigFileOptional != null)){
                        const lastSigFile: java.io.File = /* get */(v => { if (v == null) throw new Error('value is null'); return v; })(lastSigFileOptional);
                        return RecordStream.getFileHashFromSigFile(lastSigFile);
                    }
                }
            }
            return (s => { let a=[]; while(s-->0) a.push(0); return a; })();
        }
    }
    RecordStream["__class"] = "com.grame.services.legacy.stream.RecordStream";

}

