/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.stream {
    /**
     * @param {Platform} platform
     * the platform which initializes this RecordStreamManager instance
     * @param {com.grame.services.stats.MiscRunningAvgs} runningAvgs
     * an instance for recording the average value of recordStream queue size
     * @param {com.grame.services.context.properties.NodeLocalProperties} nodeLocalProperties
     * the node-local property source, which says four things: (1) is the record stream enabled?,
     * (2) what directory to write record files to, (3) how many seconds should elapse before
     * creating the next record file, and (4) how large a capacity the record stream blocking
     * queue should have.
     * @throws NoSuchAlgorithmException
     * is thrown when fails to get required MessageDigest instance
     * @throws IOException
     * is thrown when fails to create directory for record streaming
     * @param {string} nodeScopedRecordLogDir
     * @param {Hash} initialHash
     * @class
     */
    export class RecordStreamManager {
        /**
         * use this for all logging, as controlled by the optional data/log4j2.xml file
         */
        static LOGGER: Logger; public static LOGGER_$LI$(): Logger { if (RecordStreamManager.LOGGER == null) { RecordStreamManager.LOGGER = ; }  return RecordStreamManager.LOGGER; }

        /**
         * receives {@link RecordStreamObject}s from {@link com.grame.services.legacy.services.state.AwareProcessLogic}
         * * .addForStreaming,
         * then passes to hashQueueThread and writeQueueThread
         */
        /*private*/ multiStream: MultiStream<com.grame.services.stream.RecordStreamObject>;

        /**
         * receives {@link RecordStreamObject}s from multiStream, then passes to hashCalculator
         */
        /*private*/ hashQueueThread: QueueThread<com.grame.services.stream.RecordStreamObject>;

        /**
         * receives {@link RecordStreamObject}s from hashQueueThread, calculates this object's Hash, then passes to
         * runningHashQueueThread
         */
        /*private*/ hashCalculator: HashCalculatorForStream<com.grame.services.stream.RecordStreamObject>;

        /**
         * receives {@link RecordStreamObject}s from multiStream, then passes to streamFileWriter
         */
        /*private*/ writeQueueThread: QueueThread<com.grame.services.stream.RecordStreamObject>;

        /**
         * receives {@link RecordStreamObject}s from writeQueueThread, serializes {@link RecordStreamObject}s to record
         * stream files
         */
        /*private*/ streamFileWriter: TimestampStreamFileWriter<com.grame.services.stream.RecordStreamObject>;

        /**
         * initial running Hash of records
         */
        /*private*/ initialHash: Hash;

        /**
         * when record streaming is started after reconnect, or at state recovering, startWriteAtCompleteWindow should be
         * set
         * to be true;
         * when record streaming is started after restart, it should be set to be false
         */
        /*private*/ startWriteAtCompleteWindow: boolean;

        /**
         * whether the platform is in freeze period
         */
        /*private*/ inFreeze: boolean;

        /**
         * an instance for recording the average value of recordStream queue size
         */
        /*private*/ runningAvgs: com.grame.services.stats.MiscRunningAvgs;

        public constructor(platform?: any, runningAvgs?: any, nodeLocalProperties?: any, nodeScopedRecordLogDir?: any, initialHash?: any) {
            if (((platform != null && platform instanceof <any>Platform) || platform === null) && ((runningAvgs != null && runningAvgs instanceof <any>com.grame.services.stats.MiscRunningAvgs) || runningAvgs === null) && ((nodeLocalProperties != null && nodeLocalProperties instanceof <any>com.grame.services.context.properties.NodeLocalProperties) || nodeLocalProperties === null) && ((typeof nodeScopedRecordLogDir === 'string') || nodeScopedRecordLogDir === null) && ((initialHash != null && initialHash instanceof <any>Hash) || initialHash === null)) {
                let __args = arguments;
                if (this.multiStream === undefined) { this.multiStream = null; } 
                if (this.hashQueueThread === undefined) { this.hashQueueThread = null; } 
                if (this.hashCalculator === undefined) { this.hashCalculator = null; } 
                if (this.writeQueueThread === undefined) { this.writeQueueThread = null; } 
                if (this.streamFileWriter === undefined) { this.streamFileWriter = null; } 
                if (this.runningAvgs === undefined) { this.runningAvgs = null; } 
                this.initialHash = null /*cannot resolve ImmutableHash*/;
                this.startWriteAtCompleteWindow = false;
                this.inFreeze = false;
                if (nodeLocalProperties.isRecordStreamEnabled()){
                    java.nio.file.Files.createDirectories(java.nio.file.Paths.get(nodeScopedRecordLogDir));
                    this.streamFileWriter = ((str, index, len) => str.substring(index, index + len))((nodeScopedRecordLogDir).join(''), nodeLocalProperties.recordLogPeriod() * (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(SECONDS_TO_MILLISECONDS), platform);
                    this.writeQueueThread = ((str, index, len) => str.substring(index, index + len))(("writeQueueThread").join(''), , this.streamFileWriter);
                }
                this.runningAvgs = runningAvgs;
                const runningHashCalculator: RunningHashCalculatorForStream<com.grame.services.stream.RecordStreamObject> = null /*cannot resolve RunningHashCalculatorForStream<>*/;
                this.hashCalculator = null /*cannot resolve HashCalculatorForStream<>*/;
                this.hashQueueThread = ((str, index, len) => str.substring(index, index + len))(("hashQueueThread").join(''), , this.hashCalculator);
                this.multiStream = null /*cannot resolve MultiStream<>*/;
                this.initialHash = initialHash;
            } else if (((platform != null && platform instanceof <any><any>) || platform === null) && ((runningAvgs != null && runningAvgs instanceof <any><any>) || runningAvgs === null) && ((nodeLocalProperties != null && nodeLocalProperties instanceof <any>com.grame.services.stats.MiscRunningAvgs) || nodeLocalProperties === null) && nodeScopedRecordLogDir === undefined && initialHash === undefined) {
                let __args = arguments;
                let multiStream: any = __args[0];
                let writeQueueThread: any = __args[1];
                let runningAvgs: any = __args[2];
                if (this.multiStream === undefined) { this.multiStream = null; } 
                if (this.hashQueueThread === undefined) { this.hashQueueThread = null; } 
                if (this.hashCalculator === undefined) { this.hashCalculator = null; } 
                if (this.writeQueueThread === undefined) { this.writeQueueThread = null; } 
                if (this.streamFileWriter === undefined) { this.streamFileWriter = null; } 
                if (this.runningAvgs === undefined) { this.runningAvgs = null; } 
                this.initialHash = null /*cannot resolve ImmutableHash*/;
                this.startWriteAtCompleteWindow = false;
                this.inFreeze = false;
                this.multiStream = multiStream;
                this.writeQueueThread = writeQueueThread;
                this.runningAvgs = runningAvgs;
            } else throw new Error('invalid overload');
        }

        /**
         * receives a consensus record from {@link com.grame.services.legacy.services.state.AwareProcessLogic} each time,
         * sends it to multiStream which then sends to two queueThread for calculating runningHash and writing to file
         * 
         * @param {com.grame.services.stream.RecordStreamObject} recordStreamObject
         * the {@link RecordStreamObject} object to be added
         */
        public addRecordStreamObject(recordStreamObject: com.grame.services.stream.RecordStreamObject) {
            if (!this.inFreeze){
                try {
                } catch(ex) {
                }
            }
            this.runningAvgs.writeQueueSizeRecordStream(this.getWriteQueueSize());
            this.runningAvgs.hashQueueSizeRecordStream(this.getHashQueueSize());
        }

        /**
         * set `inFreeze` to be the given value
         * 
         * @param {boolean} inFreeze Whether the RecordStream is frozen or not.
         */
        public setInFreeze(inFreeze: boolean) {
            this.inFreeze = inFreeze;
            if (inFreeze){
            }
        }

        /**
         * sets initialHash after loading from signed state
         * 
         * @param {Hash} initialHash
         * current runningHash of all {@link RecordStreamObject}s
         */
        public setInitialHash(initialHash: Hash) {
            this.initialHash = initialHash;
        }

        /**
         * sets startWriteAtCompleteWindow:
         * it should be set to be true after reconnect;
         * it should be set to be false at restart
         * 
         * @param {boolean} startWriteAtCompleteWindow
         * whether the writer should not write until the first complete window
         */
        public setStartWriteAtCompleteWindow(startWriteAtCompleteWindow: boolean) {
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.streamFileWriter) != null){
            }
        }

        /**
         * returns current size of working queue for calculating hash and runningHash
         * 
         * @return {number} current size of working queue for calculating hash and runningHash
         */
        getHashQueueSize(): number {
            return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.hashQueueThread) == null ? 0 : ;
        }

        /**
         * returns current size of working queue for writing to record stream files
         * 
         * @return {number} current size of working queue for writing to record stream files
         */
        getWriteQueueSize(): number {
            return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.writeQueueThread) == null ? 0 : ;
        }

        /**
         * for unit testing
         * 
         * @return {MultiStream} current multiStream instance
         */
        getMultiStream(): MultiStream<com.grame.services.stream.RecordStreamObject> {
            return;
        }

        /**
         * for unit testing
         * 
         * @return {TimestampStreamFileWriter} current TimestampStreamFileWriter instance
         */
        getStreamFileWriter(): TimestampStreamFileWriter<com.grame.services.stream.RecordStreamObject> {
            return;
        }

        /**
         * for unit testing
         * 
         * @return {HashCalculatorForStream} current HashCalculatorForStream instance
         */
        getHashCalculator(): HashCalculatorForStream<com.grame.services.stream.RecordStreamObject> {
            return;
        }

        /**
         * for unit testing
         * 
         * @return {boolean} whether freeze period has started
         */
        getInFreeze(): boolean {
            return this.inFreeze;
        }

        /**
         * for unit testing
         * 
         * @return {Hash} a copy of initialHash
         */
        public getInitialHash(): Hash {
            return null /*cannot resolve Hash*/;
        }
    }
    RecordStreamManager["__class"] = "com.grame.services.stream.RecordStreamManager";

}

