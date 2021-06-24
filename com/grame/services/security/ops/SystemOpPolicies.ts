/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.security.ops {
    export class SystemOpPolicies {
        /*private*/ entityNums: com.grame.services.config.EntityNumbers;

        /*private*/ functionPolicies: any;

        public constructor(entityNums: com.grame.services.config.EntityNumbers) {
            if (this.entityNums === undefined) { this.entityNums = null; }
            if (this.functionPolicies === undefined) { this.functionPolicies = null; }
            this.entityNums = entityNums;
            this.functionPolicies = new Object<>(grameFunctionality);
            this.functionPolicies.put(FileDelete, (txn) => { return this.checkFileDelete(txn) });
            this.functionPolicies.put(CryptoDelete, (txn) => { return this.checkCryptoDelete(txn) });
            this.functionPolicies.put(ContractDelete, (txn) => { return this.checkContractDelete(txn) });
            this.functionPolicies.put(CryptoUpdate, (txn) => { return this.checkCryptoUpdate(txn) });
            this.functionPolicies.put(ContractUpdate, (txn) => { return this.checkContractUpdate(txn) });
            this.functionPolicies.put(FileUpdate, (txn) => { return this.checkFileUpdate(txn) });
            this.functionPolicies.put(FileAppend, (txn) => { return this.checkFileAppend(txn) });
            this.functionPolicies.put(Freeze, (txn) => { return this.checkFreeze(txn) });
            this.functionPolicies.put(SystemDelete, (txn) => { return this.checkSystemDelete(txn) });
            this.functionPolicies.put(SystemUndelete, (txn) => { return this.checkSystemUndelete(txn) });
            this.functionPolicies.put(UncheckedSubmit, (txn) => { return this.checkUncheckedSubmit(txn) });
        }

        public check$com_grame_services_utils_TxnAccessor(accessor: com.grame.services.utils.TxnAccessor): com.grame.services.security.ops.SystemOpAuthorization {
            return this.check$com_grame_services_utils_TxnAccessor(accessor.getTxn(), accessor.getFunction());
        }

        public check$TransactionBody$grameFunctionality(txn: TransactionBody, __function: grameFunctionality): com.grame.services.security.ops.SystemOpAuthorization {
            return ;
        }

        public check(txn?: any, __function?: any): any {
            if (((txn != null && txn instanceof <any>TransactionBody) || txn === null) && ((__function != null && __function instanceof <any>grameFunctionality) || __function === null)) {
                return <any>this.check$TransactionBody$grameFunctionality(txn, __function);
            } else if (((txn != null && (txn.constructor != null && txn.constructor["__interfaces"] != null && txn.constructor["__interfaces"].indexOf("com.grame.services.utils.TxnAccessor") >= 0)) || txn === null) && __function === undefined) {
                return <any>this.check$com_grame_services_utils_TxnAccessor(txn);
            } else throw new Error('invalid overload');
        }

        /*private*/ checkUncheckedSubmit(txn: TransactionBody): com.grame.services.security.ops.SystemOpAuthorization {
            return this.entityNums.accounts().isSuperuser(this.payerFor(txn)) ? com.grame.services.security.ops.SystemOpAuthorization.AUTHORIZED : com.grame.services.security.ops.SystemOpAuthorization.UNAUTHORIZED;
        }

        /*private*/ checkSystemUndelete(txn: TransactionBody): com.grame.services.security.ops.SystemOpAuthorization {
            const op: ;
            const payer: number = this.payerFor(txn);
            if (){
                return this.checkSystemUndeleteFile(payer, );
            } else {
                return this.checkSystemUndeleteContract(payer, );
            }
        }

        /*private*/ checkSystemDelete(txn: TransactionBody): com.grame.services.security.ops.SystemOpAuthorization {
            const op: ;
            const payer: number = this.payerFor(txn);
            if (){
                return this.checkSystemDeleteFile(payer, );
            } else {
                return this.checkSystemDeleteContract(payer, );
            }
        }

        /*private*/ checkSystemUndeleteFile(payerAccount: number, id: FileID): com.grame.services.security.ops.SystemOpAuthorization {
            return this.entityNums.isSystemFile(id) ? com.grame.services.security.ops.SystemOpAuthorization.IMPERMISSIBLE : (this.hasSysUndelPrivileges(payerAccount) ? com.grame.services.security.ops.SystemOpAuthorization.AUTHORIZED : com.grame.services.security.ops.SystemOpAuthorization.UNAUTHORIZED);
        }

        /*private*/ checkSystemUndeleteContract(payerAccount: number, id: ContractID): com.grame.services.security.ops.SystemOpAuthorization {
            return this.entityNums.isSystemContract(id) ? com.grame.services.security.ops.SystemOpAuthorization.IMPERMISSIBLE : (this.hasSysUndelPrivileges(payerAccount) ? com.grame.services.security.ops.SystemOpAuthorization.AUTHORIZED : com.grame.services.security.ops.SystemOpAuthorization.UNAUTHORIZED);
        }

        /*private*/ checkSystemDeleteFile(payerAccount: number, id: FileID): com.grame.services.security.ops.SystemOpAuthorization {
            return this.entityNums.isSystemFile(id) ? com.grame.services.security.ops.SystemOpAuthorization.IMPERMISSIBLE : (this.hasSysDelPrivileges(payerAccount) ? com.grame.services.security.ops.SystemOpAuthorization.AUTHORIZED : com.grame.services.security.ops.SystemOpAuthorization.UNAUTHORIZED);
        }

        /*private*/ checkSystemDeleteContract(payerAccount: number, id: ContractID): com.grame.services.security.ops.SystemOpAuthorization {
            return this.entityNums.isSystemContract(id) ? com.grame.services.security.ops.SystemOpAuthorization.IMPERMISSIBLE : (this.hasSysDelPrivileges(payerAccount) ? com.grame.services.security.ops.SystemOpAuthorization.AUTHORIZED : com.grame.services.security.ops.SystemOpAuthorization.UNAUTHORIZED);
        }

        /*private*/ hasSysDelPrivileges(payerAccount: number): boolean {
            return this.entityNums.accounts().isSuperuser(payerAccount) || payerAccount === this.entityNums.accounts().systemDeleteAdmin();
        }

        /*private*/ hasSysUndelPrivileges(payerAccount: number): boolean {
            return this.entityNums.accounts().isSuperuser(payerAccount) || payerAccount === this.entityNums.accounts().systemUndeleteAdmin();
        }

        /*private*/ checkFreeze(txn: TransactionBody): com.grame.services.security.ops.SystemOpAuthorization {
            const payer: ;
            const isAuthorized: boolean = (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(payer) == this.entityNums.accounts().treasury() || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(payer) == this.entityNums.accounts().systemAdmin() || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(payer) == this.entityNums.accounts().freezeAdmin();
            return isAuthorized ? com.grame.services.security.ops.SystemOpAuthorization.AUTHORIZED : com.grame.services.security.ops.SystemOpAuthorization.UNAUTHORIZED;
        }

        /*private*/ checkContractUpdate(txn: TransactionBody): com.grame.services.security.ops.SystemOpAuthorization {
            const target: ;
            return this.entityNums.isSystemContract(target) ? (this.canPerformNonCryptoUpdate(this.payerFor(txn), ) ? com.grame.services.security.ops.SystemOpAuthorization.AUTHORIZED : com.grame.services.security.ops.SystemOpAuthorization.UNAUTHORIZED) : com.grame.services.security.ops.SystemOpAuthorization.UNNECESSARY;
        }

        /*private*/ checkFileUpdate(txn: TransactionBody): com.grame.services.security.ops.SystemOpAuthorization {
            const target: ;
            return this.entityNums.isSystemFile(target) ? (this.canPerformNonCryptoUpdate(this.payerFor(txn), ) ? com.grame.services.security.ops.SystemOpAuthorization.AUTHORIZED : com.grame.services.security.ops.SystemOpAuthorization.UNAUTHORIZED) : com.grame.services.security.ops.SystemOpAuthorization.UNNECESSARY;
        }

        /*private*/ checkFileAppend(txn: TransactionBody): com.grame.services.security.ops.SystemOpAuthorization {
            const target: ;
            return this.entityNums.isSystemFile(target) ? (this.canPerformNonCryptoUpdate(this.payerFor(txn), ) ? com.grame.services.security.ops.SystemOpAuthorization.AUTHORIZED : com.grame.services.security.ops.SystemOpAuthorization.UNAUTHORIZED) : com.grame.services.security.ops.SystemOpAuthorization.UNNECESSARY;
        }

        /*private*/ checkCryptoUpdate(txn: TransactionBody): com.grame.services.security.ops.SystemOpAuthorization {
            const target: ;
            if (!this.entityNums.isSystemAccount(target)){
                return com.grame.services.security.ops.SystemOpAuthorization.UNNECESSARY;
            } else {
                const payer: ;
                if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(payer) == this.entityNums.accounts().treasury()){
                    return com.grame.services.security.ops.SystemOpAuthorization.AUTHORIZED;
                } else if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(payer) == this.entityNums.accounts().systemAdmin()){
                    return ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() == this.entityNums.accounts().treasury()) ? com.grame.services.security.ops.SystemOpAuthorization.UNAUTHORIZED : com.grame.services.security.ops.SystemOpAuthorization.AUTHORIZED;
                } else {
                    return ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))() == this.entityNums.accounts().treasury()) ? com.grame.services.security.ops.SystemOpAuthorization.UNAUTHORIZED : com.grame.services.security.ops.SystemOpAuthorization.UNNECESSARY;
                }
            }
        }

        /*private*/ checkContractDelete(txn: TransactionBody): com.grame.services.security.ops.SystemOpAuthorization {
            return this.entityNums.isSystemContract() ? com.grame.services.security.ops.SystemOpAuthorization.IMPERMISSIBLE : com.grame.services.security.ops.SystemOpAuthorization.UNNECESSARY;
        }

        /*private*/ checkCryptoDelete(txn: TransactionBody): com.grame.services.security.ops.SystemOpAuthorization {
            return this.entityNums.isSystemAccount() ? com.grame.services.security.ops.SystemOpAuthorization.IMPERMISSIBLE : com.grame.services.security.ops.SystemOpAuthorization.UNNECESSARY;
        }

        /*private*/ checkFileDelete(txn: TransactionBody): com.grame.services.security.ops.SystemOpAuthorization {
            return this.entityNums.isSystemFile() ? com.grame.services.security.ops.SystemOpAuthorization.IMPERMISSIBLE : com.grame.services.security.ops.SystemOpAuthorization.UNNECESSARY;
        }

        /*private*/ payerFor(txn: TransactionBody): number {
            return ;
        }

        canPerformNonCryptoUpdate(payer: number, nonAccountSystemEntity: number): boolean {
            if (payer === this.entityNums.accounts().treasury() || payer === this.entityNums.accounts().systemAdmin()){
                return true;
            } else if (payer === this.entityNums.accounts().addressBookAdmin()){
                return this.canAddressBookAdminUpdate(nonAccountSystemEntity);
            } else if (payer === this.entityNums.accounts().exchangeRatesAdmin()){
                return this.canExchangeRatesAdminUpdate(nonAccountSystemEntity);
            } else if (payer === this.entityNums.accounts().feeSchedulesAdmin()){
                return nonAccountSystemEntity === this.entityNums.files().feeSchedules();
            } else if (payer === this.entityNums.accounts().freezeAdmin()){
                return nonAccountSystemEntity === this.entityNums.files().softwareUpdateZip();
            } else {
                return false;
            }
        }

        /*private*/ canExchangeRatesAdminUpdate(entity: number): boolean {
            return entity === this.entityNums.files().exchangeRates() || entity === this.entityNums.files().throttleDefinitions() || this.isPropertiesOrPermissions(entity);
        }

        /*private*/ canAddressBookAdminUpdate(entity: number): boolean {
            return entity === this.entityNums.files().addressBook() || entity === this.entityNums.files().nodeDetails() || entity === this.entityNums.files().throttleDefinitions() || this.isPropertiesOrPermissions(entity);
        }

        /*private*/ isPropertiesOrPermissions(entity: number): boolean {
            return entity === this.entityNums.files().applicationProperties() || entity === this.entityNums.files().apiPermissions();
        }
    }
    SystemOpPolicies["__class"] = "com.grame.services.security.ops.SystemOpPolicies";

}

