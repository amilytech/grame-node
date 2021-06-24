/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger.properties {
    /**
     * Implements a property family whose instances can provide the
     * getter/setter pairs relevant to themselves on a {@link MerkleAccount} object.
     * 
     * @author AmilyTech
     * @enum
     * @property {com.grame.services.ledger.properties.AccountProperty} IS_DELETED
     * @property {com.grame.services.ledger.properties.AccountProperty} IS_RECEIVER_SIG_REQUIRED
     * @property {com.grame.services.ledger.properties.AccountProperty} IS_SMART_CONTRACT
     * @property {com.grame.services.ledger.properties.AccountProperty} BALANCE
     * @property {com.grame.services.ledger.properties.AccountProperty} AUTO_RENEW_PERIOD
     * @property {com.grame.services.ledger.properties.AccountProperty} EXPIRY
     * @property {com.grame.services.ledger.properties.AccountProperty} KEY
     * @property {com.grame.services.ledger.properties.AccountProperty} MEMO
     * @property {com.grame.services.ledger.properties.AccountProperty} PROXY
     * @property {com.grame.services.ledger.properties.AccountProperty} TOKENS
     * @property {com.grame.services.ledger.properties.AccountProperty} RECORDS
     * @class
     */
    export enum AccountProperty {
        IS_DELETED, IS_RECEIVER_SIG_REQUIRED, IS_SMART_CONTRACT, BALANCE, AUTO_RENEW_PERIOD, EXPIRY, KEY, MEMO, PROXY, TOKENS, RECORDS
    }

    /** @ignore */
    export abstract class AccountProperty_$WRAPPER implements com.grame.services.ledger.properties.BeanProperty<com.grame.services.state.merkle.MerkleAccount> {
        constructor(protected _$ordinal: number, protected _$name: string) {
        }

        /**
         * 
         * @return {*}
         */
        public abstract setter(): (p1: com.grame.services.state.merkle.MerkleAccount, p2: any) => void;

        /**
         * 
         * @return {*}
         */
        public abstract getter(): (p1: com.grame.services.state.merkle.MerkleAccount) => any;
        public name(): string { return this._$name; }
        public ordinal(): number { return this._$ordinal; }
        public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
    }
    AccountProperty["__class"] = "com.grame.services.ledger.properties.AccountProperty";
    AccountProperty["__interfaces"] = ["com.grame.services.ledger.properties.BeanProperty","java.lang.Comparable","java.io.Serializable"];


    export namespace AccountProperty {

        /** @ignore */
        export class AccountProperty$0_$WRAPPER extends AccountProperty_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleAccount, p2: any) => void {
                return (a, f) => a.setDeleted(<boolean>f);
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleAccount) => any {
                return (instance$MerkleAccount) => { return instance$MerkleAccount.isDeleted() };
            }
        }

        /** @ignore */
        export class AccountProperty$1_$WRAPPER extends AccountProperty_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleAccount, p2: any) => void {
                return (a, f) => a.setReceiverSigRequired(<boolean>f);
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleAccount) => any {
                return (instance$MerkleAccount) => { return instance$MerkleAccount.isReceiverSigRequired() };
            }
        }

        /** @ignore */
        export class AccountProperty$2_$WRAPPER extends AccountProperty_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleAccount, p2: any) => void {
                return (a, f) => a.setSmartContract(<boolean>f);
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleAccount) => any {
                return (instance$MerkleAccount) => { return instance$MerkleAccount.isSmartContract() };
            }
        }

        /** @ignore */
        export class AccountProperty$3_$WRAPPER extends AccountProperty_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleAccount, p2: any) => void {
                return (a, v) => {
                    try {
                        a.setBalance((n => n<0?Math.ceil(n):Math.floor(n))(<number>v));
                    } catch(nabe) {
                        throw Object.defineProperty(new Error(javaemul.internal.StringHelper.format("Argument \'v=%d\' would cause account \'a=%s\' to have a negative balance!", v, a)), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    }
                };
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleAccount) => any {
                return (instance$MerkleAccount) => { return instance$MerkleAccount.getBalance() };
            }
        }

        /** @ignore */
        export class AccountProperty$4_$WRAPPER extends AccountProperty_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleAccount, p2: any) => void {
                return (a, v) => a.setAutoRenewSecs((n => n<0?Math.ceil(n):Math.floor(n))(<number>v));
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleAccount) => any {
                return (instance$MerkleAccount) => { return instance$MerkleAccount.getAutoRenewSecs() };
            }
        }

        /** @ignore */
        export class AccountProperty$5_$WRAPPER extends AccountProperty_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleAccount, p2: any) => void {
                return (a, v) => a.setExpiry((n => n<0?Math.ceil(n):Math.floor(n))(<number>v));
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleAccount) => any {
                return (instance$MerkleAccount) => { return instance$MerkleAccount.getExpiry() };
            }
        }

        /** @ignore */
        export class AccountProperty$6_$WRAPPER extends AccountProperty_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleAccount, p2: any) => void {
                return (a, k) => a.setKey(<com.grame.services.legacy.core.jproto.JKey>k);
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleAccount) => any {
                return (instance$MerkleAccount) => { return instance$MerkleAccount.getKey() };
            }
        }

        /** @ignore */
        export class AccountProperty$7_$WRAPPER extends AccountProperty_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleAccount, p2: any) => void {
                return (a, s) => a.setMemo(<string>s);
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleAccount) => any {
                return (instance$MerkleAccount) => { return instance$MerkleAccount.getMemo() };
            }
        }

        /** @ignore */
        export class AccountProperty$8_$WRAPPER extends AccountProperty_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleAccount, p2: any) => void {
                return (a, p) => a.setProxy(<com.grame.services.state.submerkle.EntityId>p);
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleAccount) => any {
                return (instance$MerkleAccount) => { return instance$MerkleAccount.getProxy() };
            }
        }

        /** @ignore */
        export class AccountProperty$9_$WRAPPER extends AccountProperty_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleAccount, p2: any) => void {
                return (a, t) => a.setTokens(<com.grame.services.state.merkle.MerkleAccountTokens>t);
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleAccount) => any {
                return (instance$MerkleAccount) => { return instance$MerkleAccount.tokens() };
            }
        }

        /** @ignore */
        export class AccountProperty$10_$WRAPPER extends AccountProperty_$WRAPPER {
            constructor(_$ordinal: number, _$name: string) {
                super(_$ordinal, _$name);
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleAccount, p2: any) => void {
                return (a, r) => a.setRecords(<FCQueue<com.grame.services.state.submerkle.ExpirableTxnRecord>>r);
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleAccount) => any {
                return (instance$MerkleAccount) => { return instance$MerkleAccount.records() };
            }
        }
    }

    AccountProperty["_$wrappers"] = {0: new AccountProperty.AccountProperty$0_$WRAPPER(0, "IS_DELETED"), 1: new AccountProperty.AccountProperty$1_$WRAPPER(1, "IS_RECEIVER_SIG_REQUIRED"), 2: new AccountProperty.AccountProperty$2_$WRAPPER(2, "IS_SMART_CONTRACT"), 3: new AccountProperty.AccountProperty$3_$WRAPPER(3, "BALANCE"), 4: new AccountProperty.AccountProperty$4_$WRAPPER(4, "AUTO_RENEW_PERIOD"), 5: new AccountProperty.AccountProperty$5_$WRAPPER(5, "EXPIRY"), 6: new AccountProperty.AccountProperty$6_$WRAPPER(6, "KEY"), 7: new AccountProperty.AccountProperty$7_$WRAPPER(7, "MEMO"), 8: new AccountProperty.AccountProperty$8_$WRAPPER(8, "PROXY"), 9: new AccountProperty.AccountProperty$9_$WRAPPER(9, "TOKENS"), 10: new AccountProperty.AccountProperty$10_$WRAPPER(10, "RECORDS")};

}

