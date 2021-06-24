/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.stream {
    /**
     * Contains current {@code com.swirlds.common.crypto.RunningHash} which contains a Hash which is a running
     * Hash calculated from all {@link RecordStreamObject} in history
     * @param {RunningHash} runningHash
     * @class
     * @extends AbstractMerkleLeaf
     */
    export class RecordsRunningHashLeaf extends AbstractMerkleLeaf {
        static log: Logger; public static log_$LI$(): Logger { if (RecordsRunningHashLeaf.log == null) { RecordsRunningHashLeaf.log = ; }  return RecordsRunningHashLeaf.log; }

        public static CLASS_ID: number = -2057983832518124133;

        public static CLASS_VERSION: number = 1;

        /**
         * a runningHash of all RecordStreamObject
         */
        /*private*/ runningHash: RunningHash;

        public constructor(runningHash?: any) {
            if (((runningHash != null && runningHash instanceof <any>RunningHash) || runningHash === null)) {
                let __args = arguments;
                if (this.runningHash === undefined) { this.runningHash = null; } 
                this.runningHash = runningHash;
            } else if (((runningHash != null && runningHash instanceof <any>com.grame.services.stream.RecordsRunningHashLeaf) || runningHash === null)) {
                let __args = arguments;
                let runningHashLeaf: any = __args[0];
                if (this.runningHash === undefined) { this.runningHash = null; } 
                this.runningHash = runningHashLeaf.runningHash;
            } else if (runningHash === undefined) {
                let __args = arguments;
                if (this.runningHash === undefined) { this.runningHash = null; } 
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {SerializableDataOutputStream} out
         */
        public serialize(out: SerializableDataOutputStream) {
            try {
            } catch(ex) {
                java.lang.Thread.currentThread().interrupt();
                throw Object.defineProperty(new Error("Got interrupted when getting runningHash when serializing RunningHashLeaf"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.io.IOException','java.lang.Object','java.lang.Exception'] });
            }
        }

        /**
         * 
         * @param {SerializableDataInputStream} in
         * @param {number} version
         */
        public deserialize(__in: SerializableDataInputStream, version: number) {
            try {
                this.runningHash = null /*cannot resolve RunningHash*/;
            } catch(t123) {
                console.error(t123.message, t123);
                throw t123;
            }
        }

        /**
         * {@inheritDoc}
         * @return {boolean}
         */
        public isDataExternal(): boolean {
            return false;
        }

        /**
         * {@inheritDoc}
         * @param {*} o
         * @return {boolean}
         */
        public equals(o: any): boolean {
            if (this === o)return true;
            if (o == null || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() != (<any>o.constructor))return false;
            const that: RecordsRunningHashLeaf = <RecordsRunningHashLeaf>o;
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() != null && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() != null){
                return ;
            }
            return ;
        }

        /**
         * {@inheritDoc}
         * @return {number}
         */
        public hashCode(): number {
            return /* hash */0;
        }

        public copy(): RecordsRunningHashLeaf {
            return new RecordsRunningHashLeaf(this);
        }

        /**
         * {@inheritDoc}
         * @return {number}
         */
        public getClassId(): number {
            return RecordsRunningHashLeaf.CLASS_ID;
        }

        /**
         * {@inheritDoc}
         * @return {number}
         */
        public getVersion(): number {
            return RecordsRunningHashLeaf.CLASS_VERSION;
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            return javaemul.internal.StringHelper.format("RecordsRunningHashLeaf\'s Hash: %s, Hash contained in the leaf: %s", , );
        }

        public getRunningHash(): RunningHash {
            return;
        }

        public setRunningHash(runningHash: RunningHash) {
            this.runningHash = runningHash;
        }
    }
    RecordsRunningHashLeaf["__class"] = "com.grame.services.stream.RecordsRunningHashLeaf";

}

