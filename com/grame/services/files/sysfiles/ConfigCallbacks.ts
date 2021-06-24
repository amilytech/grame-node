/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files.sysfiles {
    export class ConfigCallbacks {
        /*private*/ hapiOpPermissions: com.grame.services.context.domain.security.HapiOpPermissions;

        /*private*/ dynamicProps: com.grame.services.context.properties.GlobalDynamicProperties;

        /*private*/ propertySources: com.grame.services.context.properties.StandardizedPropertySources;

        public constructor(hapiOpPermissions: com.grame.services.context.domain.security.HapiOpPermissions, dynamicProps: com.grame.services.context.properties.GlobalDynamicProperties, propertySources: com.grame.services.context.properties.StandardizedPropertySources) {
            if (this.hapiOpPermissions === undefined) { this.hapiOpPermissions = null; }
            if (this.dynamicProps === undefined) { this.dynamicProps = null; }
            if (this.propertySources === undefined) { this.propertySources = null; }
            this.dynamicProps = dynamicProps;
            this.propertySources = propertySources;
            this.hapiOpPermissions = hapiOpPermissions;
        }

        public propertiesCb(): (p1: ServicesConfigurationList) => void {
            return ;
        }

        public permissionsCb(): (p1: ServicesConfigurationList) => void {
            return ;
        }
    }
    ConfigCallbacks["__class"] = "com.grame.services.files.sysfiles.ConfigCallbacks";

}

