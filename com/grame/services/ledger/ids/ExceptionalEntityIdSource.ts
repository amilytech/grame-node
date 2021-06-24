/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger.ids {
    export enum ExceptionalEntityIdSource {
        NOOP_ID_SOURCE
    }

    /** @ignore */
    export class ExceptionalEntityIdSource_$WRAPPER implements com.grame.services.ledger.ids.EntityIdSource {
        constructor(protected _$ordinal: number, protected _$name: string) {
        }

        /**
         * 
         * @param {AccountID} newAccountSponsor
         * @return {AccountID}
         */
        public newAccountId(newAccountSponsor): AccountID {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @param {AccountID} newFileSponsor
         * @return {FileID}
         */
        public newFileId(newFileSponsor): FileID {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @param {AccountID} sponsor
         * @return {TokenID}
         */
        public newTokenId(sponsor): TokenID {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @param {AccountID} sponsor
         * @return {ScheduleID}
         */
        public newScheduleId(sponsor): ScheduleID {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         */
        public reclaimLastId() {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        public name(): string { return this._$name; }
        public ordinal(): number { return this._$ordinal; }
        public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
    }
    ExceptionalEntityIdSource["__class"] = "com.grame.services.ledger.ids.ExceptionalEntityIdSource";
    ExceptionalEntityIdSource["__interfaces"] = ["java.lang.Comparable","com.grame.services.ledger.ids.EntityIdSource","java.io.Serializable"];

    ExceptionalEntityIdSource["_$wrappers"] = {0: new ExceptionalEntityIdSource_$WRAPPER(0, "NOOP_ID_SOURCE")};

}

