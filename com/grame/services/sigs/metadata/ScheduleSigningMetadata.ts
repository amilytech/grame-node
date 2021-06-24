/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata {
    export class ScheduleSigningMetadata {
        /*private*/ __adminKey: com.grame.services.legacy.core.jproto.JKey;

        /*private*/ designatedPayer: AccountID;

        /*private*/ __scheduledTxn: TransactionBody;

        public constructor(adminKey: com.grame.services.legacy.core.jproto.JKey, scheduledTxn: TransactionBody, designatedPayer: AccountID) {
            if (this.__adminKey === undefined) { this.__adminKey = null; }
            if (this.designatedPayer === undefined) { this.designatedPayer = null; }
            if (this.__scheduledTxn === undefined) { this.__scheduledTxn = null; }
            this.__adminKey = adminKey;
            this.__scheduledTxn = scheduledTxn;
            this.designatedPayer = designatedPayer;
        }

        public static from(schedule: com.grame.services.state.merkle.MerkleSchedule): ScheduleSigningMetadata {
            return new ScheduleSigningMetadata(schedule.adminKey(), schedule.ordinaryViewOfScheduledTxn(), schedule.hasExplicitPayer() ? (v => { if (v == null) throw new Error('value is null'); return v; })(schedule.payer().toGrpcAccountId()) : null);
        }

        public adminKey(): com.grame.services.legacy.core.jproto.JKey {
            return this.__adminKey;
        }

        public overridePayer(): AccountID {
            return;
        }

        public scheduledTxn(): TransactionBody {
            return;
        }
    }
    ScheduleSigningMetadata["__class"] = "com.grame.services.sigs.metadata.ScheduleSigningMetadata";

}

