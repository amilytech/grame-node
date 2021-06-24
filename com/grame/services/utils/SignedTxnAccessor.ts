/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.utils {
    /**
     * Encapsulates access to several commonly referenced parts of a gRPC {@link Transaction}.
     * 
     * @author AmilyTech
     * @param {byte[]} backwardCompatibleSignedTxnBytes
     * @class
     */
    export class SignedTxnAccessor implements com.grame.services.utils.TxnAccessor {
        /* Default method injected from com.grame.services.utils.TxnAccessor */
        getPlatformTxn(): com.swirlds.common.Transaction {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        /*private*/ txnBytes: number[];

        /*private*/ backwardCompatibleSignedTxnBytes: number[];

        /*private*/ backwardCompatibleSignedTxn: Transaction;

        /*private*/ sigMap: SignatureMap;

        /*private*/ txnId: TransactionID;

        /*private*/ txn: TransactionBody;

        /*private*/ function: grameFunctionality;

        /*private*/ hash: ByteString;

        static functionExtractor: (p1: TransactionBody) => grameFunctionality; public static functionExtractor_$LI$(): (p1: TransactionBody) => grameFunctionality { if (SignedTxnAccessor.functionExtractor == null) { SignedTxnAccessor.functionExtractor = ; }  return SignedTxnAccessor.functionExtractor; }

        public static uncheckedFrom(validSignedTxn: Transaction): SignedTxnAccessor {
            try {
                return new SignedTxnAccessor(validSignedTxn);
            } catch(impossible) {
            }
            return null;
        }

        public constructor(backwardCompatibleSignedTxnBytes?: any) {
            if (((backwardCompatibleSignedTxnBytes != null && backwardCompatibleSignedTxnBytes instanceof <any>Array && (backwardCompatibleSignedTxnBytes.length == 0 || backwardCompatibleSignedTxnBytes[0] == null ||(typeof backwardCompatibleSignedTxnBytes[0] === 'number'))) || backwardCompatibleSignedTxnBytes === null)) {
                let __args = arguments;
                if (this.txnBytes === undefined) { this.txnBytes = null; } 
                if (this.backwardCompatibleSignedTxnBytes === undefined) { this.backwardCompatibleSignedTxnBytes = null; } 
                if (this.backwardCompatibleSignedTxn === undefined) { this.backwardCompatibleSignedTxn = null; } 
                if (this.sigMap === undefined) { this.sigMap = null; } 
                if (this.txnId === undefined) { this.txnId = null; } 
                if (this.txn === undefined) { this.txn = null; } 
                if (this.function === undefined) { this.function = null; } 
                if (this.hash === undefined) { this.hash = null; } 
                this.backwardCompatibleSignedTxnBytes = backwardCompatibleSignedTxnBytes;
                this.backwardCompatibleSignedTxn = ;
                if (!){
                    const signedTxn: ;
                    this.txnBytes = ;
                    this.sigMap = ;
                } else {
                    this.txnBytes = ;
                    this.sigMap = ;
                }
                this.txn = ;
                this.txnId = ;
                this.hash = ;
            } else if (((backwardCompatibleSignedTxnBytes != null && backwardCompatibleSignedTxnBytes instanceof <any>Transaction) || backwardCompatibleSignedTxnBytes === null)) {
                let __args = arguments;
                let backwardCompatibleSignedTxn: any = __args[0];
                {
                    let __args = arguments;
                    let backwardCompatibleSignedTxnBytes: any = ;
                    if (this.txnBytes === undefined) { this.txnBytes = null; } 
                    if (this.backwardCompatibleSignedTxnBytes === undefined) { this.backwardCompatibleSignedTxnBytes = null; } 
                    if (this.backwardCompatibleSignedTxn === undefined) { this.backwardCompatibleSignedTxn = null; } 
                    if (this.sigMap === undefined) { this.sigMap = null; } 
                    if (this.txnId === undefined) { this.txnId = null; } 
                    if (this.txn === undefined) { this.txn = null; } 
                    if (this.function === undefined) { this.function = null; } 
                    if (this.hash === undefined) { this.hash = null; } 
                    this.backwardCompatibleSignedTxnBytes = backwardCompatibleSignedTxnBytes;
                    this.backwardCompatibleSignedTxn = ;
                    if (!){
                        const signedTxn: ;
                        this.txnBytes = ;
                        this.sigMap = ;
                    } else {
                        this.txnBytes = ;
                        this.sigMap = ;
                    }
                    this.txn = ;
                    this.txnId = ;
                    this.hash = ;
                }
                if (this.txnBytes === undefined) { this.txnBytes = null; } 
                if (this.backwardCompatibleSignedTxnBytes === undefined) { this.backwardCompatibleSignedTxnBytes = null; } 
                if (this.backwardCompatibleSignedTxn === undefined) { this.backwardCompatibleSignedTxn = null; } 
                if (this.sigMap === undefined) { this.sigMap = null; } 
                if (this.txnId === undefined) { this.txnId = null; } 
                if (this.txn === undefined) { this.txn = null; } 
                if (this.function === undefined) { this.function = null; } 
                if (this.hash === undefined) { this.hash = null; } 
            } else throw new Error('invalid overload');
        }

        public getSigMap(): SignatureMap {
            return;
        }

        public getFunction(): grameFunctionality {
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.function) == null){
                this.function = (target => (typeof target === 'function') ? target(this.getTxn()) : (<any>target).apply(this.getTxn()))(SignedTxnAccessor.functionExtractor_$LI$());
            }
            return;
        }

        public getSignedTxn4Log(): Transaction {
            return;
        }

        public getTxnBytes(): number[] {
            return this.txnBytes;
        }

        public getBackwardCompatibleSignedTxn(): Transaction {
            return;
        }

        public getTxn(): TransactionBody {
            return;
        }

        public getTxnId(): TransactionID {
            return;
        }

        public getPayer(): AccountID {
            return ;
        }

        public getBackwardCompatibleSignedTxnBytes(): number[] {
            return this.backwardCompatibleSignedTxnBytes;
        }

        public getHash(): ByteString {
            return;
        }

        /**
         * 
         * @return {boolean}
         */
        public canTriggerTxn(): boolean {
            return  || ;
        }

        public isTriggeredTxn(): boolean {
            return false;
        }

        public getScheduleRef(): ScheduleID {
            throw Object.defineProperty(new Error("Only the TriggeredTxnAccessor implementation can refer to a schedule"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }
    SignedTxnAccessor["__class"] = "com.grame.services.utils.SignedTxnAccessor";
    SignedTxnAccessor["__interfaces"] = ["com.grame.services.utils.TxnAccessor"];


}

