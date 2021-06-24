/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.metadata {
    /**
     * Convenience class that gives unified access to grame signing metadata by
     * delegating to type-specific lookups.
     * 
     * @author AmilyTech
     * @param {*} fileSigMetaLookup
     * @param {*} accountSigMetaLookup
     * @param {*} contractSigMetaLookup
     * @param {*} topicSigMetaLookup
     * @param {*} tokenSigMetaLookup
     * @param {*} scheduleSigMetaLookup
     * @class
     */
    export class DelegatingSigMetadataLookup implements com.grame.services.sigs.metadata.SigMetadataLookup {
        static pause: com.grame.services.utils.Pause; public static pause_$LI$(): com.grame.services.utils.Pause { if (DelegatingSigMetadataLookup.pause == null) { DelegatingSigMetadataLookup.pause = ((wrappers, value) => wrappers===undefined?value:wrappers[value])(com.grame.services.utils.SleepingPause["_$wrappers"], com.grame.services.utils.SleepingPause.SLEEPING_PAUSE); }  return DelegatingSigMetadataLookup.pause; }

        /*private*/ fileSigMetaLookup: com.grame.services.sigs.metadata.lookups.FileSigMetaLookup;

        /*private*/ accountSigMetaLookup: com.grame.services.sigs.metadata.lookups.AccountSigMetaLookup;

        /*private*/ contractSigMetaLookup: com.grame.services.sigs.metadata.lookups.ContractSigMetaLookup;

        /*private*/ topicSigMetaLookup: com.grame.services.sigs.metadata.lookups.TopicSigMetaLookup;

        /*private*/ tokenSigMetaLookup: (p1: TokenID) => com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.TokenSigningMetadata>;

        /*private*/ scheduleSigMetaLookup: (p1: ScheduleID) => com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.ScheduleSigningMetadata>;

        public static backedLookupsFor(hfs: com.grame.services.files.grameFs, backingAccounts: com.grame.services.ledger.accounts.BackingStore<AccountID, com.grame.services.state.merkle.MerkleAccount>, topics: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleTopic>, accounts: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>, tokenLookup: (p1: TokenID) => com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.TokenSigningMetadata>, scheduleSigMetaLookup: (p1: ScheduleID) => com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.ScheduleSigningMetadata>): DelegatingSigMetadataLookup {
            return new DelegatingSigMetadataLookup(new com.grame.services.sigs.metadata.lookups.HfsSigMetaLookup(hfs), new com.grame.services.sigs.metadata.lookups.BackedAccountLookup(backingAccounts), new com.grame.services.sigs.metadata.lookups.DefaultFCMapContractLookup(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(accounts))), new com.grame.services.sigs.metadata.lookups.DefaultFCMapTopicLookup(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(topics))), <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(tokenLookup)), <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(scheduleSigMetaLookup)));
        }

        public static defaultLookupsFor(hfs: com.grame.services.files.grameFs, accounts: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>, topics: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleTopic>, tokenLookup: (p1: TokenID) => com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.TokenSigningMetadata>, scheduleLookup: (p1: ScheduleID) => com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.ScheduleSigningMetadata>): DelegatingSigMetadataLookup {
            return new DelegatingSigMetadataLookup(new com.grame.services.sigs.metadata.lookups.HfsSigMetaLookup(hfs), new com.grame.services.sigs.metadata.lookups.DefaultFCMapAccountLookup(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(accounts))), new com.grame.services.sigs.metadata.lookups.DefaultFCMapContractLookup(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(accounts))), new com.grame.services.sigs.metadata.lookups.DefaultFCMapTopicLookup(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return () =>  (funcInst['get'] ? funcInst['get'] : funcInst) .call(funcInst)})(topics))), <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(tokenLookup)), <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(scheduleLookup)));
        }

        public static defaultLookupsPlusAccountRetriesFor(hfs: com.grame.services.files.grameFs, accounts: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleAccount>, topics: () => FCMap<com.grame.services.state.merkle.MerkleEntityId, com.grame.services.state.merkle.MerkleTopic>, tokenLookup: (p1: TokenID) => com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.TokenSigningMetadata>, scheduleLookup: (p1: ScheduleID) => com.grame.services.sigs.metadata.lookups.SafeLookupResult<com.grame.services.sigs.metadata.ScheduleSigningMetadata>, maxRetries: number, retryWaitIncrementMs: number, runningAvgs: com.grame.services.stats.MiscRunningAvgs, speedometers: com.grame.services.stats.MiscSpeedometers): DelegatingSigMetadataLookup {
            const accountLookup: 

            constructor() {
                if (this.fileSigMetaLookup === undefined) { this.fileSigMetaLookup = null; }
                if (this.accountSigMetaLookup === undefined) { this.accountSigMetaLookup = null; }
                if (this.contractSigMetaLookup === undefined) { this.contractSigMetaLookup = null; }
                if (this.topicSigMetaLookup === undefined) { this.topicSigMetaLookup = null; }
                if (this.tokenSigMetaLookup === undefined) { this.tokenSigMetaLookup = null; }
                if (this.scheduleSigMetaLookup === undefined) { this.scheduleSigMetaLookup = null; }
            }
        }
        DelegatingSigMetadataLookup["__class"] = "com.grame.services.sigs.metadata.DelegatingSigMetadataLookup";
        DelegatingSigMetadataLookup["__interfaces"] = ["com.grame.services.sigs.metadata.SigMetadataLookup"];


    }

