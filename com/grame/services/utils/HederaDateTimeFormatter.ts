/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.utils {
    export class grameDateTimeFormatter {
        static formatter: java.time.format.DateTimeFormatter; public static formatter_$LI$(): java.time.format.DateTimeFormatter { if (grameDateTimeFormatter.formatter == null) { grameDateTimeFormatter.formatter = new java.time.format.DateTimeFormatterBuilder().appendPattern("yyyy-MM-dd").appendLiteral('T').appendPattern("HH_mm_ss").appendLiteral('.').toFormatter().withZone(java.time.ZoneId.of("UTC")); }  return grameDateTimeFormatter.formatter; }

        public static format(instant: java.time.Instant): string {
            return grameDateTimeFormatter.formatter_$LI$().format(instant) + javaemul.internal.StringHelper.format("%09d", instant.getNano()) + "Z";
        }
    }
    grameDateTimeFormatter["__class"] = "com.grame.services.utils.grameDateTimeFormatter";

}

