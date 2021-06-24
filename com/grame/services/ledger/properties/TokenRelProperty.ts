/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger.properties {
    export enum TokenRelProperty {
        TOKEN_BALANCE, IS_FROZEN, IS_KYC_GRANTED
    }

    export namespace TokenRelProperty {

        export enum TokenRelProperty$0 extends com.grame.services.ledger.properties.TokenRelProperty {
          
        }

        /** @ignore */
        export class _$WRAPPER extends com.grame.services.ledger.properties.TokenRelProperty {
            constructor(protected _$ordinal: number, protected _$name: string) {
                super();
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleTokenRelStatus, p2: any) => void {
                return (a, l) => a.setBalance((n => n<0?Math.ceil(n):Math.floor(n))(<number>l));
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleTokenRelStatus) => any {
                return (instance$MerkleTokenRelStatus) => { return instance$MerkleTokenRelStatus.getBalance() };
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        ["_$wrappers"] =};


        export enum TokenRelProperty$1 extends com.grame.services.ledger.properties.TokenRelProperty {
          
        }

        /** @ignore */
        export class _$WRAPPER extends com.grame.services.ledger.properties.TokenRelProperty {
            constructor(protected _$ordinal: number, protected _$name: string) {
                super();
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleTokenRelStatus, p2: any) => void {
                return (a, f) => a.setFrozen(<boolean>f);
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleTokenRelStatus) => any {
                return (instance$MerkleTokenRelStatus) => { return instance$MerkleTokenRelStatus.isFrozen() };
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        ["_$wrappers"] =};


        export enum TokenRelProperty$2 extends com.grame.services.ledger.properties.TokenRelProperty {
          
        }

        /** @ignore */
        export class _$WRAPPER extends com.grame.services.ledger.properties.TokenRelProperty {
            constructor(protected _$ordinal: number, protected _$name: string) {
                super();
            }

            /**
             * 
             * @return {*}
             */
            public setter(): (p1: com.grame.services.state.merkle.MerkleTokenRelStatus, p2: any) => void {
                return (a, f) => a.setKycGranted(<boolean>f);
            }

            /**
             * 
             * @return {*}
             */
            public getter(): (p1: com.grame.services.state.merkle.MerkleTokenRelStatus) => any {
                return (instance$MerkleTokenRelStatus) => { return instance$MerkleTokenRelStatus.isKycGranted() };
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        ["_$wrappers"] =};

    }

}

