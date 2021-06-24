/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger.accounts {
    /**
     * Implements a fluent builder for defining a set of standard customizations
     * relevant to any account on a ledger, no matter the id, account, and
     * property types.
     * 
     * @param <K> the type of the id used by the ledger.
     * @param <A> the type of the account stored in the ledger.
     * @param <P> the type of the properties applicable to the account.
     * @param <T> the type of a customizer appropriate to {@code K}, {@code A}, {@code P}.
     * 
     * @author AmilyTech
     * @param {*} propertyType
     * @param {*} optionProperties
     * @param {com.grame.services.ledger.properties.ChangeSummaryManager} changeManager
     * @class
     */
    export abstract class AccountCustomizer<K, A, P extends java.lang.Enum<P> & com.grame.services.ledger.properties.BeanProperty<A>, T extends AccountCustomizer<K, A, P, T>> {
        /*private*/ optionProperties: any;

        /*private*/ changes: any;

        /*private*/ changeManager: com.grame.services.ledger.properties.ChangeSummaryManager<A, P>;

        abstract self(): T;

        public constructor(propertyType: any, optionProperties: any, changeManager: com.grame.services.ledger.properties.ChangeSummaryManager<A, P>) {
            if (this.optionProperties === undefined) { this.optionProperties = null; }
            if (this.changes === undefined) { this.changes = null; }
            if (this.changeManager === undefined) { this.changeManager = null; }
            this.changeManager = changeManager;
            this.optionProperties = optionProperties;
            this.changes = <any>({});
        }

        public getChanges(): any {
            return this.changes;
        }

        public getOptionProperties(): any {
            return java.util.Collections.unmodifiableMap(this.optionProperties);
        }

        public customizing(account: A): A {
            this.changeManager.persist(this.changes, account);
            return account;
        }

        public customize(id: K, ledger: com.grame.services.ledger.TransactionalLedger<K, P, A>) {
            this.changes.entrySet().forEach((change) => ledger.set(id, change.getKey(), change.getValue()));
        }

        public key(option: com.grame.services.legacy.core.jproto.JKey): T {
            this.changeManager.update(this.changes, /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.optionProperties, com.grame.services.ledger.accounts.AccountCustomizer.Option.KEY), option);
            return this.self();
        }

        public memo(option: string): T {
            this.changeManager.update(this.changes, /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.optionProperties, com.grame.services.ledger.accounts.AccountCustomizer.Option.MEMO), option);
            return this.self();
        }

        public proxy(option: com.grame.services.state.submerkle.EntityId): T {
            this.changeManager.update(this.changes, /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.optionProperties, com.grame.services.ledger.accounts.AccountCustomizer.Option.PROXY), option);
            return this.self();
        }

        public expiry(option: number): T {
            this.changeManager.update(this.changes, /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.optionProperties, com.grame.services.ledger.accounts.AccountCustomizer.Option.EXPIRY), option);
            return this.self();
        }

        public isDeleted(option: boolean): T {
            this.changeManager.update(this.changes, /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.optionProperties, com.grame.services.ledger.accounts.AccountCustomizer.Option.IS_DELETED), option);
            return this.self();
        }

        public autoRenewPeriod(option: number): T {
            this.changeManager.update(this.changes, /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.optionProperties, com.grame.services.ledger.accounts.AccountCustomizer.Option.AUTO_RENEW_PERIOD), option);
            return this.self();
        }

        public isSmartContract(option: boolean): T {
            this.changeManager.update(this.changes, /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.optionProperties, com.grame.services.ledger.accounts.AccountCustomizer.Option.IS_SMART_CONTRACT), option);
            return this.self();
        }

        public isReceiverSigRequired(option: boolean): T {
            this.changeManager.update(this.changes, /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.optionProperties, com.grame.services.ledger.accounts.AccountCustomizer.Option.IS_RECEIVER_SIG_REQUIRED), option);
            return this.self();
        }
    }
    AccountCustomizer["__class"] = "com.grame.services.ledger.accounts.AccountCustomizer";


    export namespace AccountCustomizer {

        export enum Option {
            KEY, MEMO, PROXY, EXPIRY, IS_DELETED, IS_SMART_CONTRACT, AUTO_RENEW_PERIOD, IS_RECEIVER_SIG_REQUIRED
        }
    }

}

