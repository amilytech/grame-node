/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger.accounts {
    export class grameAccountCustomizer extends com.grame.services.ledger.accounts.AccountCustomizer<AccountID, com.grame.services.state.merkle.MerkleAccount, com.grame.services.ledger.properties.AccountProperty, grameAccountCustomizer> {
        static OPTION_PROPERTIES: any; public static OPTION_PROPERTIES_$LI$(): any { if (grameAccountCustomizer.OPTION_PROPERTIES == null) { grameAccountCustomizer.OPTION_PROPERTIES = java.util.Map.of<any, any>(AccountCustomizer.Option.KEY, com.grame.services.ledger.properties.AccountProperty.KEY, AccountCustomizer.Option.MEMO, com.grame.services.ledger.properties.AccountProperty.MEMO, AccountCustomizer.Option.PROXY, com.grame.services.ledger.properties.AccountProperty.PROXY, AccountCustomizer.Option.EXPIRY, com.grame.services.ledger.properties.AccountProperty.EXPIRY, AccountCustomizer.Option.IS_DELETED, com.grame.services.ledger.properties.AccountProperty.IS_DELETED, AccountCustomizer.Option.AUTO_RENEW_PERIOD, com.grame.services.ledger.properties.AccountProperty.AUTO_RENEW_PERIOD, AccountCustomizer.Option.IS_SMART_CONTRACT, com.grame.services.ledger.properties.AccountProperty.IS_SMART_CONTRACT, AccountCustomizer.Option.IS_RECEIVER_SIG_REQUIRED, com.grame.services.ledger.properties.AccountProperty.IS_RECEIVER_SIG_REQUIRED); }  return grameAccountCustomizer.OPTION_PROPERTIES; }

        public constructor() {
            super(com.grame.services.ledger.properties.AccountProperty, grameAccountCustomizer.OPTION_PROPERTIES_$LI$(), <any>(new com.grame.services.ledger.properties.ChangeSummaryManager<any, any>()));
        }

        /**
         * 
         * @return {com.grame.services.ledger.accounts.grameAccountCustomizer}
         */
        self(): grameAccountCustomizer {
            return this;
        }
    }
    grameAccountCustomizer["__class"] = "com.grame.services.ledger.accounts.grameAccountCustomizer";

}

