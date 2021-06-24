/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files {
    /**
     * A {@link grameFs} that stores the contents and metadata of its files in
     * separate injected {@link Map}s.
     * @param {*} ids
     * @param {com.grame.services.context.properties.GlobalDynamicProperties} properties
     * @param {*} now
     * @param {*} data
     * @param {*} metadata
     * @param {*} diskFs
     * @class
     */
    export class TieredgrameFs implements com.grame.services.files.grameFs {
        public static log: Logger; public static log_$LI$(): Logger { if (TieredgrameFs.log == null) { TieredgrameFs.log = ; }  return TieredgrameFs.log; }

        /*private*/ ids: com.grame.services.ledger.ids.EntityIdSource;

        /*private*/ now: () => java.time.Instant;

        /*private*/ data: any;

        /*private*/ metadata: any;

        /*private*/ properties: com.grame.services.context.properties.GlobalDynamicProperties;

        updateInterceptors: Array<com.grame.services.files.FileUpdateInterceptor>;

        public static BYTES_PER_KB: number = 1024;

        /*private*/ __diskFs: () => com.grame.services.state.merkle.MerkleDiskFs;

        public constructor(ids: com.grame.services.ledger.ids.EntityIdSource, properties: com.grame.services.context.properties.GlobalDynamicProperties, now: () => java.time.Instant, data: any, metadata: any, diskFs: () => com.grame.services.state.merkle.MerkleDiskFs) {
            if (this.ids === undefined) { this.ids = null; }
            if (this.now === undefined) { this.now = null; }
            if (this.data === undefined) { this.data = null; }
            if (this.metadata === undefined) { this.metadata = null; }
            if (this.properties === undefined) { this.properties = null; }
            this.updateInterceptors = <any>([]);
            if (this.__diskFs === undefined) { this.__diskFs = null; }
            this.ids = ids;
            this.now = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(now));
            this.data = data;
            this.metadata = metadata;
            this.properties = properties;
            this.__diskFs = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(diskFs));
        }

        public getData(): any {
            return;
        }

        public getMetadata(): any {
            return;
        }

        public diskFs(): com.grame.services.state.merkle.MerkleDiskFs {
            return (target => (typeof target === 'function') ? target() : (<any>target).get())(this.__diskFs);
        }

        /**
         * 
         * @param {*} updateInterceptor
         */
        public register(updateInterceptor: com.grame.services.files.FileUpdateInterceptor) {
            /* add */(this.updateInterceptors.push(updateInterceptor)>0);
        }

        /**
         * 
         * @param {byte[]} contents
         * @param {com.grame.services.files.HFileMeta} attr
         * @param {AccountID} sponsor
         * @return {FileID}
         */
        public create(contents: number[], attr: com.grame.services.files.HFileMeta, sponsor: AccountID): FileID {
            this.assertValid(attr);
            this.assertWithinSizeLimits(contents);
            const fid: ;
            /* put */(this.data[fid] = contents);
            /* put */(this.metadata[fid] = attr);
            return;
        }

        /**
         * 
         * @param {FileID} id
         * @return {boolean}
         */
        public exists(id: FileID): boolean {
            return /* containsKey */this.metadata.hasOwnProperty(id);
        }

        /**
         * 
         * @param {FileID} id
         * @return {byte[]}
         */
        public cat(id: FileID): number[] {
            this.assertUsable(id);
            if (this.isOnDisk(id)){
                return (target => (typeof target === 'function') ? target() : (<any>target).get())(this.__diskFs).contentsOf(id);
            } else {
                return /* get */((m,k) => m[k]===undefined?null:m[k])(this.data, id);
            }
        }

        /**
         * 
         * @param {FileID} id
         * @return {com.grame.services.files.HFileMeta}
         */
        public getattr(id: FileID): com.grame.services.files.HFileMeta {
            this.assertExtant(id);
            return /* get */((m,k) => m[k]===undefined?null:m[k])(this.metadata, id);
        }

        /**
         * 
         * @param {FileID} id
         * @param {com.grame.services.files.HFileMeta} attr
         * @return {*}
         */
        public sudoSetattr(id: FileID, attr: com.grame.services.files.HFileMeta): grameFs.UpdateResult {
            this.assertExtant(id);
            this.assertValid(attr);
            return this.uncheckedSetattr(id, attr);
        }

        /**
         * 
         * @param {FileID} id
         * @param {com.grame.services.files.HFileMeta} attr
         * @return {*}
         */
        public setattr(id: FileID, attr: com.grame.services.files.HFileMeta): grameFs.UpdateResult {
            this.assertUsable(id);
            this.assertValid(attr);
            return this.uncheckedSetattr(id, attr);
        }

        /**
         * 
         * @param {FileID} id
         * @param {byte[]} newContents
         * @return {*}
         */
        public overwrite(id: FileID, newContents: number[]): grameFs.UpdateResult {
            this.assertUsable(id);
            if (!this.isOnDisk(id)){
                this.assertWithinSizeLimits(newContents);
            }
            return this.uncheckedUpdate(id, newContents);
        }

        /**
         * 
         * @param {FileID} id
         * @param {byte[]} moreContents
         * @return {*}
         */
        public append(id: FileID, moreContents: number[]): grameFs.UpdateResult {
            this.assertUsable(id);
            let contents: number[];
            const isDiskBased: boolean = this.isOnDisk(id);
            if (isDiskBased){
                contents = (target => (typeof target === 'function') ? target() : (<any>target).get())(this.__diskFs).contentsOf(id);
            } else {
                contents = /* get */((m,k) => m[k]===undefined?null:m[k])(this.data, id);
            }
            const newContents: ;
            const idStr: string = com.grame.services.utils.EntityIdUtils.readableId(id);
            if (!isDiskBased){
                this.assertWithinSizeLimits(newContents);
            }
            return this.uncheckedUpdate(id, newContents);
        }

        /**
         * 
         * @param {FileID} id
         * @return {*}
         */
        public delete(id: FileID): grameFs.UpdateResult {
            this.assertUsable(id);
            const verdict: ;
            if (){
                const attr: ;
                /* put */(this.metadata[id] = attr);
                /* remove */(map => { let deleted = this.data[id];delete this.data[id];return deleted;})(this.data);
            }
            return new TieredgrameFs.SimpleUpdateResult(, , );
        }

        /**
         * 
         * @param {FileID} id
         */
        public rm(id: FileID) {
            this.assertExtant(id);
            /* remove */(map => { let deleted = this.metadata[id];delete this.metadata[id];return deleted;})(this.metadata);
            /* remove */(map => { let deleted = this.data[id];delete this.data[id];return deleted;})(this.data);
        }

        isOnDisk(fid: FileID): boolean {
            return (target => (typeof target === 'function') ? target() : (<any>target).get())(this.__diskFs).contains(fid);
        }

        uncheckedSetattr(id: FileID, attr: com.grame.services.files.HFileMeta): grameFs.UpdateResult {
            const verdict: ;
            if (){
                /* put */(this.metadata[id] = attr);
            }
            return new TieredgrameFs.SimpleUpdateResult(, false, );
        }

        uncheckedUpdate(id: FileID, newContents: number[]): grameFs.UpdateResult {
            const verdict: ;
            if (){
                if ((target => (typeof target === 'function') ? target() : (<any>target).get())(this.__diskFs).contains(id)){
                    (target => (typeof target === 'function') ? target() : (<any>target).get())(this.__diskFs).put(id, newContents);
                } else {
                    /* put */(this.data[id] = newContents);
                }
            }
            return new TieredgrameFs.SimpleUpdateResult(false, , );
        }

        judge(id: FileID, judgment: (p1: com.grame.services.files.FileUpdateInterceptor, p2: FileID) => java.util.Map.Entry<ResponseCodeEnum, boolean>): java.util.Map.Entry<ResponseCodeEnum, boolean> {
            let outcome: ;
            let should: 
        }
        TieredgrameFs["__class"] = "com.grame.services.files.TieredgrameFs";
        TieredgrameFs["__interfaces"] = ["com.grame.services.files.grameFs"];



        export namespace TieredgrameFs {

            

            

            
        }

