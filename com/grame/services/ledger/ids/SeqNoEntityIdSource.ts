/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger.ids {
    export class SeqNoEntityIdSource implements com.grame.services.ledger.ids.EntityIdSource {
        /*private*/ seqNo: () => com.grame.services.state.submerkle.SequenceNumber;

        public constructor(seqNo: () => com.grame.services.state.submerkle.SequenceNumber) {
            if (this.seqNo === undefined) { this.seqNo = null; }
            this.seqNo = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(seqNo));
        }

        /**
         * 
         * @param {AccountID} sponsor
         * @return {AccountID}
         */
        public newAccountId(sponsor: AccountID): AccountID {
            return ;
        }

        /**
         * 
         * @param {AccountID} sponsor
         * @return {FileID}
         */
        public newFileId(sponsor: AccountID): FileID {
            return ;
        }

        /**
         * 
         * @param {AccountID} sponsor
         * @return {TokenID}
         */
        public newTokenId(sponsor: AccountID): TokenID {
            return ;
        }

        /**
         * 
         * @param {AccountID} sponsor
         * @return {ScheduleID}
         */
        public newScheduleId(sponsor: AccountID): ScheduleID {
            return ;
        }

        /**
         * 
         */
        public reclaimLastId() {
            (target => (typeof target === 'function') ? target() : (<any>target).get())(this.seqNo).decrement();
        }
    }
    SeqNoEntityIdSource["__class"] = "com.grame.services.ledger.ids.SeqNoEntityIdSource";
    SeqNoEntityIdSource["__interfaces"] = ["com.grame.services.ledger.ids.EntityIdSource"];


}

