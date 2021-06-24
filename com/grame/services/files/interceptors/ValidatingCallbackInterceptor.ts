/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files.interceptors {
    export class ValidatingCallbackInterceptor implements com.grame.services.files.FileUpdateInterceptor {
        static YES_VERDICT: java.util.Map.Entry<ResponseCodeEnum, boolean>; public static YES_VERDICT_$LI$(): java.util.Map.Entry<ResponseCodeEnum, boolean> { if (ValidatingCallbackInterceptor.YES_VERDICT == null) { ValidatingCallbackInterceptor.YES_VERDICT = new java.util.AbstractMap.SimpleImmutableEntry<>(SUCCESS, true); }  return ValidatingCallbackInterceptor.YES_VERDICT; }

        /*private*/ applicablePriority: number;

        /*private*/ fileNumProperty: string;

        /*private*/ properties: com.grame.services.context.properties.PropertySource;

        /*private*/ postUpdateCb: (p1: number[]) => void;

        /*private*/ validator: (p1: number[]) => boolean;

        /*private*/ initialized: boolean;

        /*private*/ fileNum: number;

        public constructor(applicablePriority: number, fileNumProperty: string, properties: com.grame.services.context.properties.PropertySource, postUpdateCb: (p1: number[]) => void, validator: (p1: number[]) => boolean) {
            if (this.applicablePriority === undefined) { this.applicablePriority = 0; }
            if (this.fileNumProperty === undefined) { this.fileNumProperty = null; }
            if (this.properties === undefined) { this.properties = null; }
            if (this.postUpdateCb === undefined) { this.postUpdateCb = null; }
            if (this.validator === undefined) { this.validator = null; }
            this.initialized = false;
            this.fileNum = -1;
            this.applicablePriority = applicablePriority;
            this.fileNumProperty = fileNumProperty;
            this.properties = properties;
            this.postUpdateCb = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(postUpdateCb));
            this.validator = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['test'] ? funcInst['test'] : funcInst) .call(funcInst, arg0)})(validator));
        }

        /**
         * 
         * @param {FileID} id
         * @return {java.util.OptionalInt}
         */
        public priorityForCandidate(id: FileID): java.util.OptionalInt {
            this.lazyInitIfNecessary();
            return ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() == this.fileNum) ? java.util.OptionalInt.of(this.applicablePriority) : java.util.OptionalInt.empty();
        }

        /**
         * 
         * @param {FileID} id
         * @param {byte[]} newContents
         * @return {*}
         */
        public preUpdate(id: FileID, newContents: number[]): java.util.Map.Entry<ResponseCodeEnum, boolean> {
            return;
        }

        /**
         * 
         * @param {FileID} id
         * @param {byte[]} contents
         */
        public postUpdate(id: FileID, contents: number[]) {
            this.lazyInitIfNecessary();
            if ( && (target => (typeof target === 'function') ? target(contents) : (<any>target).test(contents))(this.validator)){
                (target => (typeof target === 'function') ? target(contents) : (<any>target).accept(contents))(this.postUpdateCb);
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

        /*private*/ lazyInitIfNecessary() {
            if (!this.initialized){
                this.fileNum = this.properties.getLongProperty(this.fileNumProperty);
                this.initialized = true;
            }
        }
    }
    ValidatingCallbackInterceptor["__class"] = "com.grame.services.files.interceptors.ValidatingCallbackInterceptor";
    ValidatingCallbackInterceptor["__interfaces"] = ["com.grame.services.files.FileUpdateInterceptor"];


}

