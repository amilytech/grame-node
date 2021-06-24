/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.ledger.ids {
    /**
     * Defines a type able to create ids of various entities under various conditions.
     * 
     * @author AmilyTech
     * @class
     */
    export interface EntityIdSource {
        /**
         * Returns the {@link AccountID} to use for a new account with the given sponsor.
         * 
         * @param {AccountID} newAccountSponsor the sponsor of the new account
         * @return {AccountID} an appropriate id to use
         */
        newAccountId(newAccountSponsor: AccountID): AccountID;

        /**
         * Returns the {@link FileID} to use for a new account with the given sponsor.
         * 
         * @param {AccountID} newFileSponsor the sponsor of the new account.
         * @return {FileID} an appropriate id to use
         */
        newFileId(newFileSponsor: AccountID): FileID;

        /**
         * Returns the {@link TokenID} to use for a new token with the given sponsor.
         * 
         * @param {AccountID} sponsor the sponsor of the new token.
         * @return {TokenID} an appropriate id to use
         */
        newTokenId(sponsor: AccountID): TokenID;

        /**
         * Returns the {@link ScheduleID} to use for a new scheduled entity with the given sponsor.
         * 
         * @param {AccountID} sponsor the sponsor of the new scheduled entity.
         * @return {ScheduleID} an appropriate id to use
         */
        newScheduleId(sponsor: AccountID): ScheduleID;

        /**
         * Reclaims the last id issued.
         */
        reclaimLastId();
    }
}

