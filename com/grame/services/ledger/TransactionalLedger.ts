/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger {
    /**
     * Provides a ledger with transactional semantics. Changes during a transaction
     * are summarized in per-account changesets, which are then either saved to a
     * backing store when the transaction is committed; or dropped with no effects
     * upon a rollback.
     * 
     * @param <K>
     * the type of id used by the ledger.
     * @param <P>
     * the family of properties associated to entities in the ledger.
     * @param <A>
     * the type of a ledger entity.
     * @author AmilyTech
     * @param {*} propertyType
     * @param {*} newEntity
     * @param {*} entities
     * @param {com.grame.services.ledger.properties.ChangeSummaryManager} changeManager
     * @class
     */
    export class TransactionalLedger<K, P extends java.lang.Enum<P> & com.grame.services.ledger.properties.BeanProperty<A>, A> implements com.grame.services.ledger.Ledger<K, P, A> {
        static log: Logger; public static log_$LI$(): Logger { if (TransactionalLedger.log == null) { TransactionalLedger.log = ; }  return TransactionalLedger.log; }

        /*private*/ deadEntities: Array<K>;

        /*private*/ propertyType: any;

        /*private*/ newEntity: () => A;

        /*private*/ entities: com.grame.services.ledger.accounts.BackingStore<K, A>;

        /*private*/ changeManager: com.grame.services.ledger.properties.ChangeSummaryManager<A, P>;

        /*private*/ changeFactory: (p1: K) => any;

        changes: any;

        /*private*/ __isInTransaction: boolean;

        /*private*/ keyComparator: any;

        /*private*/ keyToString: java.util.__function.Function;

        public constructor(propertyType: any, newEntity: () => A, entities: com.grame.services.ledger.accounts.BackingStore<K, A>, changeManager: com.grame.services.ledger.properties.ChangeSummaryManager<A, P>) {
            this.deadEntities = <any>([]);
            if (this.propertyType === undefined) { this.propertyType = null; }
            if (this.newEntity === undefined) { this.newEntity = null; }
            if (this.entities === undefined) { this.entities = null; }
            if (this.changeManager === undefined) { this.changeManager = null; }
            if (this.changeFactory === undefined) { this.changeFactory = null; }
            this.changes = <any>({});
            this.__isInTransaction = false;
            this.keyComparator = null;
            this.keyToString = null;
            this.propertyType = propertyType;
            this.newEntity = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(newEntity));
            this.entities = entities;
            this.changeManager = changeManager;
            this.changeFactory = (ignore) => {};
        }

        public setKeyComparator(keyComparator: any) {
            this.keyComparator = (v => { if (v == null) throw new Error('value is null'); return v; })(keyComparator);
        }

        public setKeyToString(keyToString: (p1: K) => string) {
            this.keyToString = (v => { if (v == null) throw new Error('value is null'); return v; })(keyToString);
        }

        begin() {
            if (this.__isInTransaction){
                throw Object.defineProperty(new Error("A transaction is already active!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
            this.__isInTransaction = true;
        }

        rollback() {
            if (!this.__isInTransaction){
                throw Object.defineProperty(new Error("Cannot perform rollback, no transaction is active!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
            this.entities.flushMutableRefs();
            /* clear */(<any>this.changes).entries=[];
            /* clear */(this.deadEntities.length = 0);
            this.__isInTransaction = false;
        }

        commit() {
            if (!this.__isInTransaction){
                throw Object.defineProperty(new Error("Cannot perform commit, no transaction is active!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
            try {
                const changedKeys: java.util.stream.Stream<K> = /* isPresent */(this.keyComparator != null) ? /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>this.changes).stream().sorted(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['compare'] ? funcInst['compare'] : funcInst) .call(funcInst, arg0, arg1)})(/* get */(v => { if (v == null) throw new Error('value is null'); return v; })(this.keyComparator)))) : /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>this.changes).stream();
                changedKeys.filter((id) => !/* contains */(this.deadEntities.indexOf(<any>(id)) >= 0)).forEach((id) => this.entities.put(id, this.get(id)));
                /* clear */(<any>this.changes).entries=[];
                const deadKeys: java.util.stream.Stream<K> = /* isPresent */(this.keyComparator != null) ? this.deadEntities.stream().sorted(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['compare'] ? funcInst['compare'] : funcInst) .call(funcInst, arg0, arg1)})(/* get */(v => { if (v == null) throw new Error('value is null'); return v; })(this.keyComparator)))) : this.deadEntities.stream();
                deadKeys.forEach((id) => { return this.entities.remove(id) });
                /* clear */(this.deadEntities.length = 0);
                this.entities.flushMutableRefs();
                this.__isInTransaction = false;
            } catch(e) {
                let changeDesc: string = "<N/A>";
                try {
                    changeDesc = this.changeSetSoFar();
                } catch(f) {
                }
                throw e;
            }
        }

        public changeSetSoFar(): string {
            const desc: { str: string, toString: Function } = { str: "{", toString: function() { return this.str; } };
            const isFirstChange: java.util.concurrent.atomic.AtomicBoolean = new java.util.concurrent.atomic.AtomicBoolean(true);
            /* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>this.changes).forEach(((isFirstChange,desc) => {
                return (change) => {
                    if (!isFirstChange.get()){
                        /* append */(sb => { sb.str += <any>", "; return sb; })(desc);
                    }
                    const id: K = change.getKey();
                    const accountInDeadAccounts: string = /* contains */(this.deadEntities.indexOf(<any>(id)) >= 0) ? "*DEAD* " : "";
                    const accountNotInDeadAccounts: string = /* contains */(this.deadEntities.indexOf(<any>(id)) >= 0) ? "*NEW -> DEAD* " : "*NEW* ";
                    const prefix: string = this.entities.contains(id) ? accountInDeadAccounts : accountNotInDeadAccounts;
                    /* append */(sb => { sb.str += <any>": ["; return sb; })(/* append */(sb => { sb.str += <any>(target => (typeof target === 'function') ? target(id) : (<any>target).apply(id))(/* orElse */((v, v2) => v == null ? v2 : v)(this.keyToString,(o) => { return com.grame.services.utils.EntityIdUtils.readableId(o) })); return sb; })(/* append */(sb => { sb.str += <any>prefix; return sb; })(desc)));
                    /* append */(sb => { sb.str += <any>change.getValue().entrySet().stream().map<any>((entry) => javaemul.internal.StringHelper.format("%s -> %s", entry.getKey(), com.grame.services.utils.MiscUtils.readableProperty(entry.getValue()))).collect<any, any>(java.util.stream.Collectors.joining(", ")); return sb; })(desc);
                    /* append */(sb => { sb.str += <any>"]"; return sb; })(desc);
                    isFirstChange.set(false);
                }
            })(isFirstChange,desc));
            this.deadEntities.stream().filter((id) => !/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>this.changes, id)).forEach(((isFirstChange,desc) => {
                return (id) => {
                    if (!isFirstChange.get()){
                        /* append */(sb => { sb.str += <any>", "; return sb; })(desc);
                    }
                    /* append */(sb => { sb.str += <any>com.grame.services.utils.EntityIdUtils.readableId(id); return sb; })(/* append */(sb => { sb.str += <any>"*DEAD* "; return sb; })(desc));
                    isFirstChange.set(false);
                }
            })(isFirstChange,desc));
            return /* toString *//* append */(sb => { sb.str += <any>"}"; return sb; })(desc).str;
        }

        /**
         * 
         * @param {*} id
         * @return {boolean}
         */
        public exists(id: K): boolean {
            return this.existsOrIsPendingCreation(id) && !this.isZombie(id);
        }

        /**
         * 
         * @param {*} id
         * @return {boolean}
         */
        public existsPending(id: K): boolean {
            return this.isPendingCreation(id);
        }

        /**
         * 
         * @param {*} id
         * @param {} property
         * @param {*} value
         */
        public set(id: K, property: P, value: any) {
            this.assertIsSettable(id);
            this.changeManager.update(this.changes.computeIfAbsent(id, <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(this.changeFactory))), property, value);
        }

        public get$java_lang_Object(id: K): A {
            this.throwIfMissing(id);
            const changeSet: any = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.changes, id);
            const hasPendingChanges: boolean = changeSet != null;
            const account: A = this.entities.contains(id) ? this.entities.getRef(id) : (target => (typeof target === 'function') ? target() : (<any>target).get())(this.newEntity);
            if (hasPendingChanges){
                this.changeManager.persist(changeSet, account);
            }
            return account;
        }

        public get$java_lang_Object$java_lang_Enum(id: K, property: P): any {
            this.throwIfMissing(id);
            const changeSet: any = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.changes, id);
            if (changeSet != null && changeSet.containsKey(property)){
                return changeSet.get(property);
            } else {
                return (target => (typeof target === 'function') ? target(this.toGetterTarget(id)) : (<any>target).apply(this.toGetterTarget(id)))(property.getter());
            }
        }

        /**
         * 
         * @param {*} id
         * @param {} property
         * @return {*}
         */
        public get(id?: any, property?: any): any {
            if (((id != null) || id === null) && ((property != null) || property === null)) {
                return <any>this.get$java_lang_Object$java_lang_Enum(id, property);
            } else if (((id != null) || id === null) && property === undefined) {
                return <any>this.get$java_lang_Object(id);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {*} id
         */
        public create(id: K) {
            this.assertIsCreatable(id);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>this.changes, id, {});
        }

        /**
         * 
         * @param {*} id
         */
        public destroy(id: K) {
            this.throwIfNotInTxn();
            /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(this.deadEntities, id);
        }

        isInTransaction(): boolean {
            return this.__isInTransaction;
        }

        /*private*/ toGetterTarget(id: K): A {
            return this.isPendingCreation(id) ? (target => (typeof target === 'function') ? target() : (<any>target).get())(this.newEntity) : this.entities.getRef(id);
        }

        /*private*/ isPendingCreation(id: K): boolean {
            return !this.entities.contains(id) && /* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>this.changes, id);
        }

        /*private*/ assertIsSettable(id: K) {
            this.throwIfNotInTxn();
            this.throwIfMissing(id);
        }

        /*private*/ assertIsCreatable(id: K) {
            if (!this.__isInTransaction){
                throw Object.defineProperty(new Error("No active transaction!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
            if (this.existsOrIsPendingCreation(id)){
                throw Object.defineProperty(new Error("An account already exists with key \'" + id + "\'!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        throwIfNotInTxn() {
            if (!this.__isInTransaction){
                throw Object.defineProperty(new Error("No active transaction!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }

        /*private*/ throwIfMissing(id: K) {
            if (!this.exists(id)){
                throw new com.grame.services.exceptions.MissingAccountException(id);
            }
        }

        /*private*/ existsOrIsPendingCreation(id: K): boolean {
            return this.entities.contains(id) || /* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>this.changes, id);
        }

        /*private*/ isZombie(id: K): boolean {
            return /* contains */(this.deadEntities.indexOf(<any>(id)) >= 0);
        }
    }
    TransactionalLedger["__class"] = "com.grame.services.ledger.TransactionalLedger";
    TransactionalLedger["__interfaces"] = ["com.grame.services.ledger.Ledger"];


}

