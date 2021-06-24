/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.files.store {
    export class BytesStoreAdapter<K, V> {
        /*private*/ kType: any;

        /*private*/ toK: (p1: string) => K;

        /*private*/ fromK: (p1: K) => string;

        /*private*/ toV: (p1: number[]) => V;

        /*private*/ fromV: (p1: V) => number[];

        /*private*/ delegate: any;

        /*private*/ delegateEntryFilter: java.util.__function.Predicate;

        public constructor(kType: any, toV: (p1: number[]) => V, fromV: (p1: V) => number[], toK: (p1: string) => K, fromK: (p1: K) => string, delegate: any) {
            if (this.kType === undefined) { this.kType = null; }
            if (this.toK === undefined) { this.toK = null; }
            if (this.fromK === undefined) { this.fromK = null; }
            if (this.toV === undefined) { this.toV = null; }
            if (this.fromV === undefined) { this.fromV = null; }
            if (this.delegate === undefined) { this.delegate = null; }
            this.delegateEntryFilter = null;
            this.toK = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(toK));
            this.toV = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(toV));
            this.kType = kType;
            this.fromK = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(fromK));
            this.fromV = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(fromV));
            this.delegate = delegate;
        }

        public setDelegateEntryFilter(filter: (p1: string) => boolean) {
            this.delegateEntryFilter = (v => { if (v == null) throw new Error('value is null'); return v; })(filter);
        }

        /**
         * 
         * @return {number}
         */
        public size(): number {
            return /* size */Object.keys(this.delegate).length;
        }

        /**
         * 
         * @return {boolean}
         */
        public isEmpty(): boolean {
            return /* isEmpty */(Object.keys(this.delegate).length == 0);
        }

        /**
         * 
         * @param {*} key
         * @return {boolean}
         */
        public containsKey(key: any): boolean {
            return /* containsKey */this.delegate.hasOwnProperty((target => (typeof target === 'function') ? target(this.kType.cast(key)) : (<any>target).apply(this.kType.cast(key)))(this.fromK));
        }

        /**
         * 
         * @param {*} key
         * @return {*}
         */
        public get(key: any): V {
            return (target => (typeof target === 'function') ? target(/* get */((m,k) => m[k]===undefined?null:m[k])(this.delegate, (target => (typeof target === 'function') ? target(this.kType.cast(key)) : (<any>target).apply(this.kType.cast(key)))(this.fromK))) : (<any>target).apply(/* get */((m,k) => m[k]===undefined?null:m[k])(this.delegate, (target => (typeof target === 'function') ? target(this.kType.cast(key)) : (<any>target).apply(this.kType.cast(key)))(this.fromK))))(this.toV);
        }

        /**
         * 
         * @param {*} key
         * @param {*} value
         * @return {*}
         */
        public put(key: K, value: V): V {
            return (target => (typeof target === 'function') ? target(/* put */(this.delegate[(target => (typeof target === 'function') ? target(key) : (<any>target).apply(key))(this.fromK)] = (target => (typeof target === 'function') ? target(value) : (<any>target).apply(value))(this.fromV))) : (<any>target).apply(/* put */(this.delegate[(target => (typeof target === 'function') ? target(key) : (<any>target).apply(key))(this.fromK)] = (target => (typeof target === 'function') ? target(value) : (<any>target).apply(value))(this.fromV))))(this.toV);
        }

        /**
         * 
         * @param {*} key
         * @return {*}
         */
        public remove(key: any): V {
            return (target => (typeof target === 'function') ? target(/* remove */(map => { let deleted = this.delegate[(target => (typeof target === 'function') ? target(this.kType.cast(key)) : (<any>target).apply(this.kType.cast(key)))(this.fromK)];delete this.delegate[(target => (typeof target === 'function') ? target(this.kType.cast(key)) : (<any>target).apply(this.kType.cast(key)))(this.fromK)];return deleted;})(this.delegate)) : (<any>target).apply(/* remove */(map => { let deleted = this.delegate[(target => (typeof target === 'function') ? target(this.kType.cast(key)) : (<any>target).apply(this.kType.cast(key)))(this.fromK)];delete this.delegate[(target => (typeof target === 'function') ? target(this.kType.cast(key)) : (<any>target).apply(this.kType.cast(key)))(this.fromK)];return deleted;})(this.delegate)))(this.toV);
        }

        /**
         * 
         */
        public clear() {
            /* clear */(obj => { for (let member in obj) delete obj[member]; })(this.delegate);
        }

        /**
         * 
         * @return {*[]}
         */
        public entrySet(): Array<Map.Entry<K, V>> {
            return <any>(/* entrySet */(o => { let s = []; for (let e in o) s.push({ k: e, v: o[e], getKey: function() { return this.k }, getValue: function() { return this.v } }); return s; })(this.delegate).stream().filter((entry) => (target => (typeof target === 'function') ? target(entry.getKey()) : (<any>target).test(entry.getKey()))(/* orElse */((v, v2) => v == null ? v2 : v)(this.delegateEntryFilter,(ignore) => true))).map<any>((entry) => new java.util.AbstractMap.SimpleEntry<any, any>((target => (typeof target === 'function') ? target(entry.getKey()) : (<any>target).apply(entry.getKey()))(this.toK), (target => (typeof target === 'function') ? target(entry.getValue()) : (<any>target).apply(entry.getValue()))(this.toV))).collect<any, any>(java.util.stream.Collectors.toSet()));
        }
    }
    BytesStoreAdapter["__class"] = "com.grame.services.files.store.BytesStoreAdapter";
    BytesStoreAdapter["__interfaces"] = ["java.util.Map"];


}

