/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files.store {
    export class FcBlobsBytesStore {
        public static log: Logger; public static log_$LI$(): Logger { if (FcBlobsBytesStore.log == null) { FcBlobsBytesStore.log = ; }  return FcBlobsBytesStore.log; }

        /*private*/ blobFactory: (p1: number[]) => com.grame.services.state.merkle.MerkleOptionalBlob;

        /*private*/ pathedBlobs: () => FCMap<com.grame.services.state.merkle.MerkleBlobMeta, com.grame.services.state.merkle.MerkleOptionalBlob>;

        public constructor(blobFactory: (p1: number[]) => com.grame.services.state.merkle.MerkleOptionalBlob, pathedBlobs: () => FCMap<com.grame.services.state.merkle.MerkleBlobMeta, com.grame.services.state.merkle.MerkleOptionalBlob>) {
            if (this.blobFactory === undefined) { this.blobFactory = null; }
            if (this.pathedBlobs === undefined) { this.pathedBlobs = null; }
            this.blobFactory = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(blobFactory));
            this.pathedBlobs = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(pathedBlobs));
        }

        /*private*/ at(key: any): com.grame.services.state.merkle.MerkleBlobMeta {
            return new com.grame.services.state.merkle.MerkleBlobMeta(<string>key);
        }

        /**
         * 
         */
        public clear() {
        }

        /**
         * Removes the blob at the given path.
         * 
         * <B>NOTE:</B> This method breaks the standard {@code Map} contract,
         * and does not return the contents of the removed blob.
         * 
         * @param {*} path
         * the path of the blob
         * @return {byte[]} {@code null}
         */
        public remove(path: any): number[] {
            return null;
        }

        /**
         * Replaces the blob at the given path with the given contents.
         * 
         * <B>NOTE:</B> This method breaks the standard {@code Map} contract,
         * and does not return the contents of the previous blob.
         * 
         * @param {string} path
         * the path of the blob
         * @param {byte[]} value
         * the contents to be set
         * @return {byte[]} {@code null}
         */
        public put(path: string, value: number[]): number[] {
            const meta: 
        }
        FcBlobsBytesStore["__class"] = "com.grame.services.files.store.FcBlobsBytesStore";
        FcBlobsBytesStore["__interfaces"] = ["java.util.Map"];


    }

