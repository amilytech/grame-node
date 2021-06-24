/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.context.domain.trackers {
    export class IssEventInfo {
        /*private*/ properties: com.grame.services.context.properties.PropertySource;

        remainingRoundsToDump: number;

        /*private*/ __status: com.grame.services.context.domain.trackers.IssEventStatus;

        /*private*/ __consensusTimeOfRecentAlert: java.time.Instant;

        public constructor(properties: com.grame.services.context.properties.PropertySource) {
            if (this.properties === undefined) { this.properties = null; }
            this.remainingRoundsToDump = 0;
            this.__status = com.grame.services.context.domain.trackers.IssEventStatus.NO_KNOWN_ISS;
            this.__consensusTimeOfRecentAlert = null;
            this.properties = properties;
        }

        public status(): com.grame.services.context.domain.trackers.IssEventStatus {
            return this.__status;
        }

        public consensusTimeOfRecentAlert(): java.time.Instant {
            return this.__consensusTimeOfRecentAlert;
        }

        public shouldDumpThisRound(): boolean {
            return this.remainingRoundsToDump > 0;
        }

        public decrementRoundsToDump() {
            this.remainingRoundsToDump--;
        }

        public alert(roundConsensusTime: java.time.Instant) {
            this.__consensusTimeOfRecentAlert = (v => { if (v == null) throw new Error('value is null'); return v; })(roundConsensusTime);
            if (this.__status === com.grame.services.context.domain.trackers.IssEventStatus.NO_KNOWN_ISS){
                this.remainingRoundsToDump = this.properties.getIntProperty("iss.roundsToDump");
            }
            this.__status = com.grame.services.context.domain.trackers.IssEventStatus.ONGOING_ISS;
        }

        public relax() {
            this.__status = com.grame.services.context.domain.trackers.IssEventStatus.NO_KNOWN_ISS;
            this.__consensusTimeOfRecentAlert = null;
            this.remainingRoundsToDump = 0;
        }
    }
    IssEventInfo["__class"] = "com.grame.services.context.domain.trackers.IssEventInfo";

}

