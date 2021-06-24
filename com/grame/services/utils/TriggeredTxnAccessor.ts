/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.utils {
    export class TriggeredTxnAccessor extends com.grame.services.utils.SignedTxnAccessor {
        /*private*/ payer: AccountID;

        /*private*/ scheduleRef: ScheduleID;

        public constructor(signedTxnBytes: number[], payer: AccountID, scheduleRef: ScheduleID) {
            super(signedTxnBytes);
            if (this.payer === undefined) { this.payer = null; }
            if (this.scheduleRef === undefined) { this.scheduleRef = null; }
            this.payer = payer;
            this.scheduleRef = scheduleRef;
        }

        /**
         * 
         * @return {boolean}
         */
        public isTriggeredTxn(): boolean {
            return true;
        }

        /**
         * 
         * @return {AccountID}
         */
        public getPayer(): AccountID {
            return;
        }

        /**
         * 
         * @return {ScheduleID}
         */
        public getScheduleRef(): ScheduleID {
            return;
        }
    }
    TriggeredTxnAccessor["__class"] = "com.grame.services.utils.TriggeredTxnAccessor";
    TriggeredTxnAccessor["__interfaces"] = ["com.grame.services.utils.TxnAccessor"];


}

