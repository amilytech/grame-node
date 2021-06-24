/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files.interceptors {
    export class ThrottleDefsManager implements com.grame.services.files.FileUpdateInterceptor {
        static log: Logger; public static log_$LI$(): Logger { if (ThrottleDefsManager.log == null) { ThrottleDefsManager.log = ; }  return ThrottleDefsManager.log; }

        static YES_VERDICT: java.util.Map.Entry<ResponseCodeEnum, boolean>; public static YES_VERDICT_$LI$(): java.util.Map.Entry<ResponseCodeEnum, boolean> { if (ThrottleDefsManager.YES_VERDICT == null) { ThrottleDefsManager.YES_VERDICT = new java.util.AbstractMap.SimpleImmutableEntry<>(SUCCESS, true); }  return ThrottleDefsManager.YES_VERDICT; }

        static YES_BUT_MISSING_OP_VERDICT: java.util.Map.Entry<ResponseCodeEnum, boolean>; public static YES_BUT_MISSING_OP_VERDICT_$LI$(): java.util.Map.Entry<ResponseCodeEnum, boolean> { if (ThrottleDefsManager.YES_BUT_MISSING_OP_VERDICT == null) { ThrottleDefsManager.YES_BUT_MISSING_OP_VERDICT = new java.util.AbstractMap.SimpleImmutableEntry<>(SUCCESS_BUT_MISSING_EXPECTED_OPERATION, true); }  return ThrottleDefsManager.YES_BUT_MISSING_OP_VERDICT; }

        static UNPARSEABLE_VERDICT: java.util.Map.Entry<ResponseCodeEnum, boolean>; public static UNPARSEABLE_VERDICT_$LI$(): java.util.Map.Entry<ResponseCodeEnum, boolean> { if (ThrottleDefsManager.UNPARSEABLE_VERDICT == null) { ThrottleDefsManager.UNPARSEABLE_VERDICT = new java.util.AbstractMap.SimpleImmutableEntry<>(UNPARSEABLE_THROTTLE_DEFINITIONS, false); }  return ThrottleDefsManager.UNPARSEABLE_VERDICT; }

        static DEFAULT_INVALID_VERDICT: java.util.Map.Entry<ResponseCodeEnum, boolean>; public static DEFAULT_INVALID_VERDICT_$LI$(): java.util.Map.Entry<ResponseCodeEnum, boolean> { if (ThrottleDefsManager.DEFAULT_INVALID_VERDICT == null) { ThrottleDefsManager.DEFAULT_INVALID_VERDICT = new java.util.AbstractMap.SimpleImmutableEntry<>(INVALID_THROTTLE_DEFINITIONS, false); }  return ThrottleDefsManager.DEFAULT_INVALID_VERDICT; }

        static APPLICABLE_PRIORITY: number = 0;

        expectedOps: Array<grameFunctionality>;

        /*private*/ fileNums: com.grame.services.config.FileNumbers;

        /*private*/ addressBook: () => AddressBook;

        /*private*/ postUpdateCb: (p1: ThrottleDefinitions) => void;

        toPojo: (p1: ThrottleDefinitions) => com.grame.services.sysfiles.domain.throttling.ThrottleDefinitions;

        public constructor(fileNums: com.grame.services.config.FileNumbers, addressBook: () => AddressBook, postUpdateCb: (p1: ThrottleDefinitions) => void) {
            this.expectedOps = ExpectedCustomThrottles.OPS_FOR_RELEASE_0130;
            if (this.fileNums === undefined) { this.fileNums = null; }
            if (this.addressBook === undefined) { this.addressBook = null; }
            if (this.postUpdateCb === undefined) { this.postUpdateCb = null; }
            this.toPojo = ;
            this.fileNums = fileNums;
            this.addressBook = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(addressBook));
            this.postUpdateCb = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(postUpdateCb));
        }

        /**
         * 
         * @param {FileID} id
         * @return {java.util.OptionalInt}
         */
        public priorityForCandidate(id: FileID): java.util.OptionalInt {
            return this.isThrottlesDef(id) ? java.util.OptionalInt.of(ThrottleDefsManager.APPLICABLE_PRIORITY) : java.util.OptionalInt.empty();
        }

        /**
         * 
         * @param {FileID} id
         * @param {byte[]} newContents
         * @return {*}
         */
        public preUpdate(id: FileID, newContents: number[]): java.util.Map.Entry<ResponseCodeEnum, boolean> {
            const newThrottles: ThrottleDefinitions = this.uncheckedParseFrom(newContents);
            if (/* isEmpty */(newThrottles == null)){
                return;
            }
            const n: ;
            const proto: ;
            const defs: ;
            const customizedOps: Array<grameFunctionality> = new Array<>();
            for(let index121=.iterator();index121.hasNext();) {
                let bucket = index121.next();
                {
                    try {
                    } catch(e) {
                        const detailError: ;
                        return ;
                    }
                    for(let index122=.iterator();index122.hasNext();) {
                        let group = index122.next();
                        {
                            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(customizedOps, );
                        }
                    }
                }
            }
            return /* equals */((a1, a2) => { if(a1==null && a2==null) return true; if(a1==null || a2==null) return false; if(a1.length != a2.length) return false; for(let i = 0; i < a1.length; i++) { if(<any>a1[i] != <any>a2[i]) return false; } return true; })(this.expectedOps, java.util.EnumSet.copyOf<any>(customizedOps)) ? ThrottleDefsManager.YES_VERDICT_$LI$() : ThrottleDefsManager.YES_BUT_MISSING_OP_VERDICT_$LI$();
        }

        /**
         * 
         * @param {FileID} id
         * @param {byte[]} contents
         */
        public postUpdate(id: FileID, contents: number[]) {
            (target => (typeof target === 'function') ? target(/* get */(v => { if (v == null) throw new Error('value is null'); return v; })(this.uncheckedParseFrom(contents))) : (<any>target).accept(/* get */(v => { if (v == null) throw new Error('value is null'); return v; })(this.uncheckedParseFrom(contents))))(this.postUpdateCb);
        }

        /**
         * 
         * @param {FileID} id
         * @return {*}
         */
        public preDelete(id: FileID): java.util.Map.Entry<ResponseCodeEnum, boolean> {
            throw Object.defineProperty(new Error("Cannot delete the throttle definitions file!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
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

        /*private*/ isThrottlesDef(fid: FileID): boolean {
            return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() == this.fileNums.throttleDefinitions();
        }

        /*private*/ uncheckedParseFrom(data: number[]): ThrottleDefinitions {
            try {
                return (v => { if (v == null) throw new Error('value is null'); return v; })();
            } catch(ignore) {
                return null;
            }
        }
    }
    ThrottleDefsManager["__class"] = "com.grame.services.files.interceptors.ThrottleDefsManager";
    ThrottleDefsManager["__interfaces"] = ["com.grame.services.files.FileUpdateInterceptor"];


}

