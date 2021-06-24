/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.security.ops {
    /**
     * The relationship of an operation to its required system privileges, if any.
     * 
     * The {@code SystemOpAuthorization#asStatus()} method returns a
     * {@code ResponseCodeEnum} that is appropriate for use as the
     * precheck status in a HAPI {@code com.gramegrame.api.proto.java.TransactionResponse}.
     * Therefore both {@code SystemOpAuthorization#UNNECESSARY#asStatus()} and
     * {@code SystemOpAuthorization#AUTHORIZED#asStatus()} return {@code ResponseCodeEnum#OK},
     * since in either case the operation should pass precheck---at least
     * based on its required system privileges.
     * @enum
     * @property {com.grame.services.security.ops.SystemOpAuthorization} UNNECESSARY
     * The operation does not require any system privileges.
     * @property {com.grame.services.security.ops.SystemOpAuthorization} UNAUTHORIZED
     * The operation requires system privileges that its payer does not have.
     * @property {com.grame.services.security.ops.SystemOpAuthorization} IMPERMISSIBLE
     * The operation cannot be performed, no matter the privileges of its payer.
     * @property {com.grame.services.security.ops.SystemOpAuthorization} AUTHORIZED
     * The operation requires system privileges, and its payer has those privileges.
     * @class
     */
    export enum SystemOpAuthorization {
        
        /**
         * The operation does not require any system privileges.
         */
        UNNECESSARY, 
        /**
         * The operation requires system privileges that its payer does not have.
         */
        UNAUTHORIZED, 
        /**
         * The operation cannot be performed, no matter the privileges of its payer.
         */
        IMPERMISSIBLE, 
        /**
         * The operation requires system privileges, and its payer has those privileges.
         */
        AUTHORIZED
    }

    /** @ignore */
    export abstract class SystemOpAuthorization_$WRAPPER {
        constructor(protected _$ordinal: number, protected _$name: string) {
        }

        public abstract asStatus(): ResponseCodeEnum;
        public name(): string { return this._$name; }
        public ordinal(): number { return this._$ordinal; }
        public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
    }
    SystemOpAuthorization["__class"] = "com.grame.services.security.ops.SystemOpAuthorization";
    SystemOpAuthorization["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];


    export namespace SystemOpAuthorization {

        /** @ignore */
        export class SystemOpAuthorization$0_$WRAPPER extends SystemOpAuthorization_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {ResponseCodeEnum}
             */
            public asStatus(): ResponseCodeEnum {
                return;
            }
        }

        /** @ignore */
        export class SystemOpAuthorization$1_$WRAPPER extends SystemOpAuthorization_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {ResponseCodeEnum}
             */
            public asStatus(): ResponseCodeEnum {
                return;
            }
        }

        /** @ignore */
        export class SystemOpAuthorization$2_$WRAPPER extends SystemOpAuthorization_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {ResponseCodeEnum}
             */
            public asStatus(): ResponseCodeEnum {
                return;
            }
        }

        /** @ignore */
        export class SystemOpAuthorization$3_$WRAPPER extends SystemOpAuthorization_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {ResponseCodeEnum}
             */
            public asStatus(): ResponseCodeEnum {
                return;
            }
        }
    }

    SystemOpAuthorization["_$wrappers"] = {0: new SystemOpAuthorization.SystemOpAuthorization$0_$WRAPPER(0, "UNNECESSARY"), 1: new SystemOpAuthorization.SystemOpAuthorization$1_$WRAPPER(1, "UNAUTHORIZED"), 2: new SystemOpAuthorization.SystemOpAuthorization$2_$WRAPPER(2, "IMPERMISSIBLE"), 3: new SystemOpAuthorization.SystemOpAuthorization$3_$WRAPPER(3, "AUTHORIZED")};

}

