/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.context.domain.trackers {
    export class ConsensusStatusCounts {
        public static log: Logger; public static log_$LI$(): Logger { if (ConsensusStatusCounts.log == null) { ConsensusStatusCounts.log = ; }  return ConsensusStatusCounts.log; }

        /*private*/ om: ObjectMapper;

        counts: any;

        public constructor(om: ObjectMapper) {
            if (this.om === undefined) { this.om = null; }
            this.counts = new Object<>(ResponseCodeEnum);
            this.om = om;
        }

        public asJson(): string {
            const asList: Array<any> = <any>(this.counts.entrySet().stream().flatMap<any>((entries) => ).collect<any, any>(java.util.stream.Collectors.toList<any>()));
            try {
                return ;
            } catch(unlikely) {
                return "[ ]";
            }
        }

        public increment(op: grameFunctionality, status: ResponseCodeEnum) {
        }
    }
    ConsensusStatusCounts["__class"] = "com.grame.services.context.domain.trackers.ConsensusStatusCounts";

}

