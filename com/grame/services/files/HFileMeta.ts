/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files {
    export class HFileMeta {
        /*private*/ wacl: com.grame.services.legacy.core.jproto.JKey;

        /*private*/ expiry: number;

        /*private*/ memo: string;

        /*private*/ deleted: boolean;

        public constructor(deleted?: any, wacl?: any, expiry?: any, memo?: any) {
            if (((typeof deleted === 'boolean') || deleted === null) && ((wacl != null && wacl instanceof <any>com.grame.services.legacy.core.jproto.JKey) || wacl === null) && ((typeof expiry === 'number') || expiry === null) && ((typeof memo === 'string') || memo === null)) {
                let __args = arguments;
                if (this.wacl === undefined) { this.wacl = null; } 
                if (this.expiry === undefined) { this.expiry = 0; } 
                if (this.deleted === undefined) { this.deleted = false; } 
                this.memo = com.grame.services.state.merkle.MerkleAccountState.DEFAULT_MEMO;
                this.wacl = wacl;
                this.memo = memo;
                this.deleted = deleted;
                this.expiry = expiry;
            } else if (((typeof deleted === 'boolean') || deleted === null) && ((wacl != null && wacl instanceof <any>com.grame.services.legacy.core.jproto.JKey) || wacl === null) && ((typeof expiry === 'number') || expiry === null) && memo === undefined) {
                let __args = arguments;
                if (this.wacl === undefined) { this.wacl = null; } 
                if (this.expiry === undefined) { this.expiry = 0; } 
                if (this.deleted === undefined) { this.deleted = false; } 
                this.memo = com.grame.services.state.merkle.MerkleAccountState.DEFAULT_MEMO;
                this.deleted = deleted;
                this.wacl = wacl;
                this.expiry = expiry;
            } else throw new Error('invalid overload');
        }

        public serialize(): number[] {
            return com.grame.services.files.HFileMetaSerde.serialize(this);
        }

        public static deserialize(bytes: number[]): HFileMeta {
            try {
                const stream: java.io.DataInputStream = new java.io.DataInputStream(new java.io.ByteArrayInputStream(bytes));
                return com.grame.services.files.HFileMetaSerde.deserialize(stream);
            } catch(t123) {
                console.error(t123.message, t123);
                throw t123;
            }
        }

        public isDeleted(): boolean {
            return this.deleted;
        }

        public setDeleted(deleted: boolean) {
            this.deleted = deleted;
        }

        public getWacl(): com.grame.services.legacy.core.jproto.JKey {
            return this.wacl;
        }

        public setWacl(wacl: com.grame.services.legacy.core.jproto.JKey) {
            this.wacl = wacl;
        }

        public getExpiry(): number {
            return this.expiry;
        }

        public setExpiry(expiry: number) {
            this.expiry = expiry;
        }

        public getMemo(): string {
            return this.memo;
        }

        public setMemo(memo: string) {
            this.memo = memo;
        }

        /**
         * 
         * @return {string}
         */
        public toString(): string {
            return ;
        }
    }
    HFileMeta["__class"] = "com.grame.services.files.HFileMeta";

}

