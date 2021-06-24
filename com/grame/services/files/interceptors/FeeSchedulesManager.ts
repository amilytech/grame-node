/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files.interceptors {
    export class FeeSchedulesManager implements com.grame.services.files.FileUpdateInterceptor {
        public static log: Logger; public static log_$LI$(): Logger { if (FeeSchedulesManager.log == null) { FeeSchedulesManager.log = ; }  return FeeSchedulesManager.log; }

        static APPLICABLE_PRIORITY: number = 0;

        /*private*/ fees: com.grame.services.fees.FeeCalculator;

        /*private*/ fileNum: number;

        static YES_VERDICT: java.util.Map.Entry<ResponseCodeEnum, boolean>; public static YES_VERDICT_$LI$(): java.util.Map.Entry<ResponseCodeEnum, boolean> { if (FeeSchedulesManager.YES_VERDICT == null) { FeeSchedulesManager.YES_VERDICT = new java.util.AbstractMap.SimpleImmutableEntry<>(SUCCESS, true); }  return FeeSchedulesManager.YES_VERDICT; }

        static OK_FOR_NOW_VERDICT: java.util.Map.Entry<ResponseCodeEnum, boolean>; public static OK_FOR_NOW_VERDICT_$LI$(): java.util.Map.Entry<ResponseCodeEnum, boolean> { if (FeeSchedulesManager.OK_FOR_NOW_VERDICT == null) { FeeSchedulesManager.OK_FOR_NOW_VERDICT = new java.util.AbstractMap.SimpleImmutableEntry<>(FEE_SCHEDULE_FILE_PART_UPLOADED, true); }  return FeeSchedulesManager.OK_FOR_NOW_VERDICT; }

        public constructor(fileNums: com.grame.services.config.FileNumbers, fees: com.grame.services.fees.FeeCalculator) {
            if (this.fees === undefined) { this.fees = null; }
            if (this.fileNum === undefined) { this.fileNum = 0; }
            this.fees = fees;
            this.fileNum = fileNums.feeSchedules();
        }

        /**
         * 
         * @param {FileID} id
         * @return {java.util.OptionalInt}
         */
        public priorityForCandidate(id: FileID): java.util.OptionalInt {
            return ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() == this.fileNum) ? java.util.OptionalInt.of(FeeSchedulesManager.APPLICABLE_PRIORITY) : java.util.OptionalInt.empty();
        }

        /**
         * 
         * @param {FileID} id
         * @param {byte[]} newContents
         * @return {*}
         */
        public preUpdate(id: FileID, newContents: number[]): java.util.Map.Entry<ResponseCodeEnum, boolean> {
            if (){
                return this.areValid(newContents) ? FeeSchedulesManager.YES_VERDICT_$LI$() : FeeSchedulesManager.OK_FOR_NOW_VERDICT_$LI$();
            } else {
                return;
            }
        }

        /**
         * 
         * @param {FileID} id
         * @param {byte[]} contents
         */
        public postUpdate(id: FileID, contents: number[]) {
            if ( && this.areValid(contents)){
                this.fees.init();
            }
        }

        /**
         * 
         * @param {FileID} id
         * @return {*}
         */
        public preDelete(id: FileID): java.util.Map.Entry<ResponseCodeEnum, boolean> {
            return;
        }

        /**
         * 
         * @param {FileID} id
         * @param {com.grame.services.files.HFileMeta} newAttr
         * @return {*}
         */
        public preAttrChange(id: FileID, newAttr: com.grame.services.files.HFileMeta): java.util.Map.Entry<ResponseCodeEnum, boolean> {
            return;
        }

        /*private*/ areValid(contents: number[]): boolean {
            try {
                return true;
            } catch(ignore) {
                return false;
            }
        }
    }
    FeeSchedulesManager["__class"] = "com.grame.services.files.interceptors.FeeSchedulesManager";
    FeeSchedulesManager["__interfaces"] = ["com.grame.services.files.FileUpdateInterceptor"];


}

