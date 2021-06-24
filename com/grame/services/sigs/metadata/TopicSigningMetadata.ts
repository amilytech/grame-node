/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata {
    export class TopicSigningMetadata {
        /*private*/ adminKey: com.grame.services.legacy.core.jproto.JKey;

        /*private*/ submitKey: com.grame.services.legacy.core.jproto.JKey;

        public constructor(adminKey: com.grame.services.legacy.core.jproto.JKey, submitKey: com.grame.services.legacy.core.jproto.JKey) {
            if (this.adminKey === undefined) { this.adminKey = null; }
            if (this.submitKey === undefined) { this.submitKey = null; }
            this.adminKey = adminKey;
            this.submitKey = submitKey;
        }

        public hasAdminKey(): boolean {
            return null != this.adminKey;
        }

        public getAdminKey(): com.grame.services.legacy.core.jproto.JKey {
            return this.adminKey;
        }

        public hasSubmitKey(): boolean {
            return null != this.submitKey;
        }

        public getSubmitKey(): com.grame.services.legacy.core.jproto.JKey {
            return this.submitKey;
        }
    }
    TopicSigningMetadata["__class"] = "com.grame.services.sigs.metadata.TopicSigningMetadata";

}

