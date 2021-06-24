/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.sigs.order {
    /**
     * Encapsulates all policies related to:
     * <ol>
     * <li>Which grame keys must have active signatures for a given gRPC transaction to be valid; and,</li>
     * <li>The <i>order</i> in which grame {@link com.gramegrame.api.proto.java.Signature}
     * instances must be supplied to test activation of these keys when the gRPC transaction has a
     * {@link com.gramegrame.api.proto.java.SignatureList}.</li>
     * </ol>
     * The second item is really an implementation detail, as logically this class could just as well
     * return a {@code Set<JKey>} instead of a {@code List<JKey>}. However, until there are no clients
     * using the deprecated {@code SignatureList}, it is an absolutely crucial detail.
     * 
     * Two strategy predicates are injected into this class, one with logic to decide if the WACL for a
     * file targeted by the gRPC transaction must have an active signature; and one with logic to make an
     * equivalent decision for a crypto account.
     * 
     * @author AmilyTech
     * @param {com.grame.services.config.EntityNumbers} entityNums
     * @param {*} sigMetaLookup
     * @param {*} updateAccountSigns
     * @param {*} targetWaclSigns
     * @param {com.grame.services.context.properties.GlobalDynamicProperties} properties
     * @class
     */
    export class grameSigningOrder {
        static log: Logger; public static log_$LI$(): Logger { if (grameSigningOrder.log == null) { grameSigningOrder.log = ; }  return grameSigningOrder.log; }

        entityNums: com.grame.services.config.EntityNumbers;

        sigMetaLookup: com.grame.services.sigs.metadata.SigMetadataLookup;

        properties: com.grame.services.context.properties.GlobalDynamicProperties;

        updateAccountSigns: (p1: TransactionBody) => boolean;

        targetWaclSigns: (p1: TransactionBody, p2: grameFunctionality) => boolean;

        public constructor(entityNums: com.grame.services.config.EntityNumbers, sigMetaLookup: com.grame.services.sigs.metadata.SigMetadataLookup, updateAccountSigns: (p1: TransactionBody) => boolean, targetWaclSigns: (p1: TransactionBody, p2: grameFunctionality) => boolean, properties: com.grame.services.context.properties.GlobalDynamicProperties) {
            if (this.entityNums === undefined) { this.entityNums = null; }
            if (this.sigMetaLookup === undefined) { this.sigMetaLookup = null; }
            if (this.properties === undefined) { this.properties = null; }
            if (this.updateAccountSigns === undefined) { this.updateAccountSigns = null; }
            if (this.targetWaclSigns === undefined) { this.targetWaclSigns = null; }
            this.entityNums = entityNums;
            this.properties = properties;
            this.sigMetaLookup = sigMetaLookup;
            this.targetWaclSigns = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['test'] ? funcInst['test'] : funcInst) .call(funcInst, arg0, arg1)})(targetWaclSigns));
            this.updateAccountSigns = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['test'] ? funcInst['test'] : funcInst) .call(funcInst, arg0)})(updateAccountSigns));
        }

        /**
         * Uses the provided factory to summarize an attempt to compute the canonical signing order
         * of the grame key(s) that must be active for the payer of the given gRPC transaction.
         * 
         * @param {TransactionBody} txn
         * the gRPC transaction of interest.
         * @param {*} factory
         * the result factory to use to summarize the listing attempt.
         * @param <T>
         * the type of error report created by the factory.
         * @return {com.grame.services.sigs.order.SigningOrderResult} a {@link SigningOrderResult} summarizing the listing attempt.
         */
        public keysForPayer<T>(txn: TransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            return this.orderForPayer<any>(txn, factory);
        }

        /**
         * Uses the provided factory to summarize an attempt to compute the canonical signing order
         * of the grame key(s) that must be active for any grame entities involved in a non-payer
         * role in the given gRPC transaction. (Which could also include the payer crypto account.)
         * 
         * @param {TransactionBody} txn
         * the gRPC transaction of interest.
         * @param {*} factory
         * the result factory to use to summarize the listing attempt.
         * @param <T>
         * the type of error report created by the factory.
         * @return {com.grame.services.sigs.order.SigningOrderResult} a {@link SigningOrderResult} summarizing the listing attempt.
         */
        public keysForOtherParties<T>(txn: TransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const cryptoOrder: ;
            if (){
                return ;
            }
            const consensusOrder: ;
            if (){
                return ;
            }
            const tokenOrder: ;
            if (){
                return ;
            }
            const scheduleOrder: ;
            if (){
                return ;
            }
            const fileOrder: ;
            if (){
                return ;
            }
            const contractOrder: ;
            if (){
                return ;
            }
            return com.grame.services.sigs.order.SigningOrderResult.noKnownKeys<any>();
        }

        /*private*/ orderForPayer<T>(txn: TransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const payer: ;
            const result: ;
            if (){
                return factory.forValidOrder(java.util.List.of<any>());
            } else {
                if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() == com.grame.services.sigs.order.KeyOrderingFailure.MISSING_ACCOUNT){
                    return factory.forInvalidAccount(payer, );
                } else {
                    return factory.forGeneralPayerError(payer, );
                }
            }
        }

        /*private*/ forContract<T>(txn: TransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult {
            if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.contractCreate<any>(, factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.contractUpdate<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.contractDelete<any>(, , factory));
            } else {
                return null;
            }
        }

        /*private*/ forCrypto<T>(txn: TransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult {
            if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.cryptoCreate<any>(, factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.cryptoTransfer<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.cryptoUpdate<any>(, (target => (typeof target === 'function') ? target(txn) : (<any>target).test(txn))(this.updateAccountSigns), , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.cryptoDelete<any>(, , factory));
            } else {
                return null;
            }
        }

        /*private*/ forSchedule<T>(txn: TransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult {
            if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.scheduleCreate<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.scheduleSign<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.scheduleDelete<any>(, , factory));
            } else {
                return null;
            }
        }

        /*private*/ forToken<T>(txn: TransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult {
            if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.tokenCreate<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.tokenAssociate<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.tokenDissociate<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.tokenFreezing<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.tokenFreezing<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.tokenKnowing<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.tokenKnowing<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.tokenRefloating<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.tokenRefloating<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.tokenWiping<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.tokenMutates$TransactionID$TokenID$com_grame_services_sigs_order_SigningOrderResultFactory(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.tokenUpdates<any>(, , factory));
            } else {
                return null;
            }
        }

        /*private*/ forFile<T>(txn: TransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult {
            if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.fileCreate<any>(, factory));
            } else if ( || ){
                const isSuperuser: ;
                if (){
                    const waclShouldSign: ;
                    return (v => { if (v == null) throw new Error('value is null'); return v; })(this.fileAppend<any>(, , waclShouldSign, isSuperuser, factory));
                } else {
                    const waclShouldSign: ;
                    return (v => { if (v == null) throw new Error('value is null'); return v; })(this.fileUpdate<any>(, , waclShouldSign, isSuperuser, factory));
                }
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.fileDelete<any>(, , factory));
            } else {
                return null;
            }
        }

        /*private*/ forConsensus<T>(txn: TransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult {
            if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.topicCreate<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.messageSubmit<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.topicUpdate<any>(, , factory));
            } else if (){
                return (v => { if (v == null) throw new Error('value is null'); return v; })(this.topicDelete<any>(, , factory));
            } else {
                return null;
            }
        }

        /*private*/ contractDelete<T>(txnId: TransactionID, op: ContractDeleteTransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const required: Array<com.grame.services.legacy.core.jproto.JKey> = <any>([]);
            const target: ;
            const targetResult: ;
            if (!){
                return this.contractFailure<any>(target, txnId, , factory);
            }
            /* add */(required.push()>0);
            if (){
                const beneficiary: ;
                const beneficiaryResult: ;
                if (!){
                    return factory.forInvalidAccount(beneficiary, txnId);
                } else if (){
                    /* add */(required.push()>0);
                }
            } else if (){
                const beneficiary: ;
                const beneficiaryResult: ;
                if (!){
                    return factory.forInvalidContract(beneficiary, txnId);
                } else if (){
                    /* add */(required.push()>0);
                }
            }
            return factory.forValidOrder(required);
        }

        /*private*/ contractUpdate<T>(txnId: TransactionID, op: ContractUpdateTransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const required: Array<com.grame.services.legacy.core.jproto.JKey> = <any>([]);
            const target: ;
            const result: ;
            if (this.needsCurrentAdminSig(op)){
                if (!){
                    return this.contractFailure<any>(target, txnId, , factory);
                }
                /* add */(required.push()>0);
            }
            if (this.hasNondeprecatedAdminKey(op)){
                const candidate: ;
            }
            return factory.forValidOrder(required);
        }

        /*private*/ needsCurrentAdminSig(op: ContractUpdateTransactionBody): boolean {
            return ! || this.hasNondeprecatedAdminKey(op) ||  ||  ||  || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() > 0;
        }

        /*private*/ hasNondeprecatedAdminKey(op: ContractUpdateTransactionBody): boolean {
            return  && !;
        }

        /*private*/ contractCreate<T>(op: ContractCreateTransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const key: ;
            if (){
                return com.grame.services.sigs.order.SigningOrderResult.noKnownKeys<any>();
            }
            const candidate: ;
            return  ? factory.forValidOrder(java.util.List.of<any>()) : com.grame.services.sigs.order.SigningOrderResult.noKnownKeys<any>();
        }

        /*private*/ fileDelete<T>(txnId: TransactionID, op: FileDeleteTransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const target: ;
            const targetResult: ;
            if (!){
                return factory.forMissingFile(target, txnId);
            } else {
                const wacl: ;
                return  ? com.grame.services.sigs.order.SigningOrderResult.noKnownKeys<any>() : factory.forValidOrder(java.util.List.of<any>(wacl));
            }
        }

        /*private*/ fileUpdate<T>(txnId: TransactionID, op: FileUpdateTransactionBody, waclShouldSign: boolean, payerIsSuperuser: boolean, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const target: ;
            if (payerIsSuperuser && this.entityNums.isSystemFile(target)){
                return com.grame.services.sigs.order.SigningOrderResult.noKnownKeys<any>();
            } else {
                const targetResult: ;
                if (!){
                    return factory.forMissingFile(target, txnId);
                } else {
                    const required: Array<com.grame.services.legacy.core.jproto.JKey> = <any>([]);
                    if (waclShouldSign){
                        const wacl: ;
                        if (!){
                            /* add */(required.push(wacl)>0);
                        }
                        if (){
                            const candidate: ;
                        }
                    }
                    return factory.forValidOrder(required);
                }
            }
        }

        /*private*/ fileAppend<T>(txnId: TransactionID, op: FileAppendTransactionBody, waclShouldSign: boolean, payerIsSuperuser: boolean, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const target: ;
            if (payerIsSuperuser && this.entityNums.isSystemFile(target)){
                return com.grame.services.sigs.order.SigningOrderResult.noKnownKeys<any>();
            } else {
                const targetResult: ;
                if (!){
                    return factory.forMissingFile(target, txnId);
                } else {
                    if (!waclShouldSign){
                        return com.grame.services.sigs.order.SigningOrderResult.noKnownKeys<any>();
                    } else {
                        const wacl: ;
                        return  ? com.grame.services.sigs.order.SigningOrderResult.noKnownKeys<any>() : factory.forValidOrder(java.util.List.of<any>(wacl));
                    }
                }
            }
        }

        /*private*/ fileCreate<T>(op: FileCreateTransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const candidate: ;
            return  ? factory.forValidOrder(java.util.List.of<any>()) : com.grame.services.sigs.order.SigningOrderResult.noKnownKeys<any>();
        }

        /*private*/ cryptoDelete<T>(txnId: TransactionID, op: CryptoDeleteTransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            let required: Array<com.grame.services.legacy.core.jproto.JKey> = java.util.Collections.EMPTY_LIST;
            const target: ;
            const targetResult: ;
            if (!){
                return this.accountFailure<any>(target, txnId, , factory);
            }
            required = this.mutable(required);
            /* add */(required.push()>0);
            const beneficiary: ;
            const beneficiaryResult: ;
            if (!){
                return this.accountFailure<any>(beneficiary, txnId, , factory);
            } else if (){
                /* add */(required.push()>0);
            }
            return factory.forValidOrder(required);
        }

        /*private*/ cryptoUpdate<T>(txnId: TransactionID, targetMustSign: boolean, op: CryptoUpdateTransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            let required: Array<com.grame.services.legacy.core.jproto.JKey> = java.util.Collections.EMPTY_LIST;
            const target: ;
            const result: ;
            if (!){
                return this.accountFailure<any>(target, txnId, , factory);
            } else if (targetMustSign){
                required = this.mutable(required);
                /* add */(required.push()>0);
                if (){
                    const candidate: ;
                }
            }
            return factory.forValidOrder(required);
        }

        /*private*/ cryptoTransfer<T>(txnId: TransactionID, op: CryptoTransferTransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const required: Array<com.grame.services.legacy.core.jproto.JKey> = <any>([]);
            let failure: com.grame.services.sigs.order.KeyOrderingFailure;
            for(let index138=.iterator();index138.hasNext();) {
                let xfers = index138.next();
                {
                    for(let index139=.iterator();index139.hasNext();) {
                        let adjust = index139.next();
                        {
                            if ((failure = this.includeIfPresentAndNecessary(adjust, required)) !== com.grame.services.sigs.order.KeyOrderingFailure.NONE){
                                return this.accountFailure<any>(, txnId, failure, factory);
                            }
                        }
                    }
                }
            }
            for(let index140=.iterator();index140.hasNext();) {
                let adjust = index140.next();
                {
                    if ((failure = this.includeIfPresentAndNecessary(adjust, required)) !== com.grame.services.sigs.order.KeyOrderingFailure.NONE){
                        return this.accountFailure<any>(, txnId, failure, factory);
                    }
                }
            }
            return factory.forValidOrder(required);
        }

        /*private*/ contractFailure<T>(id: ContractID, txnId: TransactionID, type: com.grame.services.sigs.order.KeyOrderingFailure, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            if (type === com.grame.services.sigs.order.KeyOrderingFailure.INVALID_CONTRACT){
                return factory.forInvalidContract(id, txnId);
            } else if (type === com.grame.services.sigs.order.KeyOrderingFailure.IMMUTABLE_CONTRACT){
                return factory.forImmutableContract(id, txnId);
            } else {
                return factory.forGeneralError(txnId);
            }
        }

        /*private*/ accountFailure<T>(id: AccountID, txnId: TransactionID, type: com.grame.services.sigs.order.KeyOrderingFailure, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            if (type === com.grame.services.sigs.order.KeyOrderingFailure.INVALID_ACCOUNT){
                return factory.forInvalidAccount(id, txnId);
            } else if (type === com.grame.services.sigs.order.KeyOrderingFailure.MISSING_ACCOUNT){
                return factory.forMissingAccount(id, txnId);
            } else if (type === com.grame.services.sigs.order.KeyOrderingFailure.MISSING_AUTORENEW_ACCOUNT){
                return factory.forMissingAutoRenewAccount(id, txnId);
            } else {
                return factory.forGeneralError(txnId);
            }
        }

        /*private*/ topicFailure<T>(id: TopicID, txnId: TransactionID, type: com.grame.services.sigs.order.KeyOrderingFailure, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            if (type === com.grame.services.sigs.order.KeyOrderingFailure.INVALID_TOPIC){
                return factory.forMissingTopic(id, txnId);
            } else {
                return factory.forGeneralError(txnId);
            }
        }

        /*private*/ mutable(required: Array<com.grame.services.legacy.core.jproto.JKey>): Array<com.grame.services.legacy.core.jproto.JKey> {
            return (required === java.util.Collections.EMPTY_LIST) ? <any>([]) : required;
        }

        /*private*/ cryptoCreate<T>(op: CryptoCreateTransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            if (!){
                return com.grame.services.sigs.order.SigningOrderResult.noKnownKeys<any>();
            } else {
                const candidate: ;
                return  ? factory.forValidOrder(java.util.List.of<any>()) : com.grame.services.sigs.order.SigningOrderResult.noKnownKeys<any>();
            }
        }

        /*private*/ topicCreate<T>(txnId: TransactionID, op: ConsensusCreateTopicTransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const required: Array<com.grame.services.legacy.core.jproto.JKey> = <any>([]);
            if (!){
                return this.accountFailure<any>(, txnId, com.grame.services.sigs.order.KeyOrderingFailure.MISSING_AUTORENEW_ACCOUNT, factory);
            }
            return factory.forValidOrder(required);
        }

        /*private*/ tokenCreate<T>(txnId: TransactionID, op: TokenCreateTransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const required: Array<com.grame.services.legacy.core.jproto.JKey> = <any>([]);
            const couldAddTreasury: ;
            if (!couldAddTreasury){
                return this.accountFailure<any>(, txnId, com.grame.services.sigs.order.KeyOrderingFailure.MISSING_ACCOUNT, factory);
            }
            const couldAddAutoRenew: ;
            if (!couldAddAutoRenew){
                return this.accountFailure<any>(, txnId, com.grame.services.sigs.order.KeyOrderingFailure.MISSING_AUTORENEW_ACCOUNT, factory);
            }
            return factory.forValidOrder(required);
        }

        /*private*/ tokenFreezing<T>(txnId: TransactionID, id: TokenID, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            return this.tokenAdjusts<any>(txnId, id, factory, (instance$TokenSigningMetadata) => { return instance$TokenSigningMetadata.optionalFreezeKey() });
        }

        /*private*/ tokenKnowing<T>(txnId: TransactionID, id: TokenID, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            return this.tokenAdjusts<any>(txnId, id, factory, (instance$TokenSigningMetadata) => { return instance$TokenSigningMetadata.optionalKycKey() });
        }

        /*private*/ tokenRefloating<T>(txnId: TransactionID, id: TokenID, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            return this.tokenAdjusts<any>(txnId, id, factory, (instance$TokenSigningMetadata) => { return instance$TokenSigningMetadata.optionalSupplyKey() });
        }

        /*private*/ tokenWiping<T>(txnId: TransactionID, id: TokenID, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            return this.tokenAdjusts<any>(txnId, id, factory, (instance$TokenSigningMetadata) => { return instance$TokenSigningMetadata.optionalWipeKey() });
        }

        /*private*/ tokenUpdates<T>(txnId: TransactionID, op: TokenUpdateTransactionBody, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const nonAdminReqs: Array<(p1: com.grame.services.sigs.metadata.TokenSigningMetadata) => com.grame.services.legacy.core.jproto.JKey> = /* emptyList */[];
            const basic: ;
            const required: ;
            if (!){
                return this.accountFailure<any>(, txnId, com.grame.services.sigs.order.KeyOrderingFailure.MISSING_AUTORENEW_ACCOUNT, factory);
            }
            if (!){
                return this.accountFailure<any>(, txnId, com.grame.services.sigs.order.KeyOrderingFailure.MISSING_ACCOUNT, factory);
            }
            return basic;
        }

        /*private*/ addAccount<T>(op: T, isPresent: (p1: T) => boolean, getter: (p1: T) => AccountID, reqs: Array<com.grame.services.legacy.core.jproto.JKey>): boolean {
            if ((target => (typeof target === 'function') ? target(op) : (<any>target).test(op))(isPresent)){
                const result: ;
                if (){
                    /* add */(reqs.push()>0);
                } else {
                    return false;
                }
            }
            return true;
        }

        /*private*/ tokenMutates$TransactionID$TokenID$com_grame_services_sigs_order_SigningOrderResultFactory<T>(txnId: TransactionID, id: TokenID, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>): com.grame.services.sigs.order.SigningOrderResult<T> {
            return this.tokenMutates$TransactionID$TokenID$com_grame_services_sigs_order_SigningOrderResultFactory(txnId, id, factory, /* emptyList */[]);
        }

        public tokenMutates$TransactionID$TokenID$com_grame_services_sigs_order_SigningOrderResultFactory$java_util_List<T>(txnId: TransactionID, id: TokenID, factory: com.grame.services.sigs.order.SigningOrderResultFactory<T>, optionalKeyLookups: Array<(p1: com.grame.services.sigs.metadata.TokenSigningMetadata) => com.grame.services.legacy.core.jproto.JKey>): com.grame.services.sigs.order.SigningOrderResult<T> {
            const required: Array<com.grame.services.legacy.core.jproto.JKey> = <any>([]);
            const result: ;
            if (){
                const meta: ;
                if (){
                    /* add */(required.push()>0);
                }
                optionalKeyLookups.forEach(((meta,required) => {
                    return (lookup) => {
                        const candidate: 
                    })(meta,required));
                } else {
                    return factory.forMissingToken(id, txnId);
                }
                return factory.forValidOrder(required);
            }

            public tokenMutates<T>(const txnId?: any, const id?: any, const factory?: any, const optionalKeyLookups?: any): any {
                if (((txnId != null && txnId instanceof <any>TransactionID) || txnId === null) && ((id != null && id instanceof <any>TokenID) || id === null) && ((factory != null && (factory.constructor != null && factory.constructor["__interfaces"] != null && factory.constructor["__interfaces"].indexOf("com.grame.services.sigs.order.SigningOrderResultFactory") >= 0)) || factory === null) && ((optionalKeyLookups != null && (optionalKeyLookups instanceof Array)) || optionalKeyLookups === null)) {
                    return <any>this.tokenMutates$TransactionID$TokenID$com_grame_services_sigs_order_SigningOrderResultFactory$java_util_List(txnId, id, factory, optionalKeyLookups);
                } else if (((txnId != null && txnId instanceof <any>TransactionID) || txnId === null) && ((id != null && id instanceof <any>TokenID) || id === null) && ((factory != null && (factory.constructor != null && factory.constructor["__interfaces"] != null && factory.constructor["__interfaces"].indexOf("com.grame.services.sigs.order.SigningOrderResultFactory") >= 0)) || factory === null) && optionalKeyLookups === undefined) {
                    return <any>this.tokenMutates$TransactionID$TokenID$com_grame_services_sigs_order_SigningOrderResultFactory(txnId, id, factory);
                } else throw new Error('invalid overload');
            }
        }
        grameSigningOrder["__class"] = "com.grame.services.sigs.order.grameSigningOrder";

    }

