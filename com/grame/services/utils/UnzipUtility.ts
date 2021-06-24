/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.utils {
    export class UnzipUtility {
        static log: Logger; public static log_$LI$(): Logger { if (UnzipUtility.log == null) { UnzipUtility.log = ; }  return UnzipUtility.log; }

        static BUFFER_SIZE: number = 4096;

        /**
         * Extracts a zip entry (file entry)
         * 
         * @param {java.util.zip.ZipInputStream} inputStream
         * Input stream of zip file content
         * @param {string} filePath
         * Output file name
         * @private
         */
        /*private*/ static extractSingleFile(inputStream: java.util.zip.ZipInputStream, filePath: string) {
            const bos: java.io.BufferedOutputStream = new java.io.BufferedOutputStream(new java.io.FileOutputStream(filePath));
            try {
                const bytesIn: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(UnzipUtility.BUFFER_SIZE);
                let read: number = 0;
                while(((read = inputStream.read(bytesIn)) !== -1)) {{
                    bos.write(bytesIn, 0, read);
                }};
            } catch(e) {
            } finally {
                bos.close();
            }
        }

        public static unzip(bytes: number[], dstDirectory: string) {
            const destDir: java.io.File = new java.io.File(dstDirectory);
            if (!destDir.exists()){
                destDir.mkdir();
            }
            const zipIn: java.util.zip.ZipInputStream = new java.util.zip.ZipInputStream(new java.io.ByteArrayInputStream(bytes));
            let entry: java.util.zip.ZipEntry = zipIn.getNextEntry();
            while((entry != null)) {{
                const filePath: string = dstDirectory + java.io.File.separator + entry.getName();
                if (!entry.isDirectory()){
                    const newFile: java.io.File = new java.io.File(filePath);
                    UnzipUtility.extractSingleFile(zipIn, filePath);
                } else {
                    const dir: java.io.File = new java.io.File(filePath);
                    dir.mkdir();
                }
                zipIn.closeEntry();
                entry = zipIn.getNextEntry();
            }};
            zipIn.close();
        }
    }
    UnzipUtility["__class"] = "com.grame.services.utils.UnzipUtility";

}

