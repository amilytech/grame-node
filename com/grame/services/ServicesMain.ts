/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services {
    /**
     * Drives the major state transitions for a grame Node via its {@link ServicesContext}.
     * 
     * @author AmilyTech
     * @class
     */
    export class ServicesMain implements SwirldMain {
        static START_INIT_MSG_PATTERN: string = "Using context to initialize grameNode#%d...";

        static SUGGESTED_POST_CREATION_PAUSE_MS: number = 0;

        public static log: Logger; public static log_$LI$(): Logger { if (ServicesMain.log == null) { ServicesMain.log = ; }  return ServicesMain.log; }

        systemExits: com.grame.services.utils.SystemExits;

        defaultCharset: () => string;

        ctx: com.grame.services.context.ServicesContext;

        /**
         * Convenience launcher for dev env.
         * 
         * @param {java.lang.String[]} args
         * ignored
         */
        public static main(...args: string[]) {
        }

        /**
         * 
         * @param {Platform} ignore
         * @param {NodeId} nodeId
         */
        public init(ignore: Platform, nodeId: NodeId) {
            if (!java.nio.charset.StandardCharsets.UTF_8.equals((target => (typeof target === 'function') ? target() : (<any>target).get())(this.defaultCharset))){
                this.systemExits.fail(1);
            }
            try {
            } catch(nsae) {
                this.systemExits.fail(1);
            }
            try {
                java.util.Locale.setDefault(string.US);
                this.ctx = com.grame.services.context.SingletonContextsManager["_$wrappers"][com.grame.services.context.SingletonContextsManager.CONTEXTS].lookup();
                this.logInfoWithConsoleEcho(javaemul.internal.StringHelper.format(ServicesMain.START_INIT_MSG_PATTERN, ));
                this.contextDrivenInit();
            } catch(ise) {
                this.systemExits.fail(1);
            }
        }

        /**
         * 
         * @return {com.grame.services.ServicesState}
         */
        public newState(): com.grame.services.ServicesState {
            return new com.grame.services.ServicesState();
        }

        /**
         * 
         * @param {PlatformStatus} status
         */
        public platformStatusChange(status: PlatformStatus) {
            this.ctx.platformStatus().set(status);
            if (status === ACTIVE){
                this.ctx.recordStreamManager().setInFreeze(false);
            } else if (status === MAINTENANCE){
                this.ctx.recordStreamManager().setInFreeze(true);
                this.ctx.updateFeature();
            } else {
            }
        }

        /**
         * 
         * @param {SwirldState} signedState
         * @param {java.time.Instant} when
         * @param {number} round
         */
        public newSignedState(signedState: SwirldState, when: java.time.Instant, round: number) {
            if (this.ctx.platformStatus().get() === MAINTENANCE){
                (<com.grame.services.ServicesState>signedState).logSummary();
            }
            if (this.ctx.globalDynamicProperties().shouldExportBalances() && this.ctx.balancesExporter().isTimeToExport(when)){
                try {
                    this.ctx.balancesExporter().exportBalancesFrom(<com.grame.services.ServicesState>signedState, when);
                } catch(ise) {
                    this.systemExits.fail(1);
                }
            }
        }

        /**
         * 
         */
        public run() {
        }

        /**
         * 
         */
        public preEvent() {
        }

        /*private*/ contextDrivenInit() {
            this.checkPropertySources();
            this.initSystemFiles();
            this.createSystemAccountsIfNeeded();
            this.migrateStateIfNeeded();
            this.validateLedgerState();
            this.configurePlatform();
            this.registerIssListener();
            this.registerReconnectCompleteListener();
            this.exportAccountsIfDesired();
            this.initializeStats();
            this.startNettyIfAppropriate();
            this.ctx.initRecordStreamManager();
        }

        /*private*/ exportAccountsIfDesired() {
            try {
                if (this.ctx.nodeLocalProperties().exportAccountsOnStartup()){
                    this.ctx.accountsExporter().toFile(this.ctx.nodeLocalProperties().accountsExportPath(), this.ctx.accounts());
                }
            } catch(e) {
                throw Object.defineProperty(new Error("Could not export accounts!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }

        /*private*/ initSystemFiles() {
            try {
                this.ctx.systemFilesManager().createAddressBookIfMissing();
                this.ctx.systemFilesManager().createNodeDetailsIfMissing();
                this.ctx.systemFilesManager().createUpdateZipFileIfMissing();
                this.ctx.networkCtxManager().loadObservableSysFilesIfNeeded();
            } catch(e) {
                throw Object.defineProperty(new Error("Could not initialize system files!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }

        /*private*/ createSystemAccountsIfNeeded() {
            try {
                this.ctx.systemAccountsCreator().ensureSystemAccounts(this.ctx.backingAccounts(), this.ctx.addressBook());
                this.ctx.pause().forMs(ServicesMain.SUGGESTED_POST_CREATION_PAUSE_MS);
            } catch(e) {
                throw Object.defineProperty(new Error("Could not create system accounts!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }

        /*private*/ startNettyIfAppropriate() {
            const port: number = this.ctx.nodeLocalProperties().port();
            const PORT_MODULUS: number = 1000;
            const tlsPort: number = this.ctx.nodeLocalProperties().tlsPort();
            const activeProfile: com.grame.services.context.properties.Profile = this.ctx.nodeLocalProperties().activeProfile();
            if (activeProfile === com.grame.services.context.properties.Profile.DEV){
                if (this.ctx.nodeLocalProperties().devOnlyDefaultNodeListens()){
                    if (this.thisNodeIsDefaultListener()){
                        this.ctx.grpc().start(port, tlsPort, (s) => { return this.logInfoWithConsoleEcho(s) });
                    }
                } else {
                    const portOffset: number = this.thisNodeIsDefaultListener() ? 0 :  % PORT_MODULUS;
                    this.ctx.grpc().start(port + portOffset, tlsPort + portOffset, (s) => { return this.logInfoWithConsoleEcho(s) });
                }
            } else if (activeProfile === com.grame.services.context.properties.Profile.PROD){
                this.ctx.grpc().start(port, tlsPort, (s) => { return this.logInfoWithConsoleEcho(s) });
            } else {
            }
        }

        /*private*/ thisNodeIsDefaultListener(): boolean {
            const myNodeAccount: string = ;
            const blessedNodeAccount: string = this.ctx.nodeLocalProperties().devListeningAccount();
            return myNodeAccount === blessedNodeAccount;
        }

        /*private*/ initializeStats() {
            this.ctx.statsManager().initializeFor(this.ctx.platform());
        }

        /*private*/ checkPropertySources() {
            this.ctx.propertySources().assertSourcesArePresent();
        }

        /*private*/ configurePlatform() {
        }

        /*private*/ migrateStateIfNeeded() {
            this.ctx.stateMigrations().runAllFor(this.ctx);
        }

        /*private*/ validateLedgerState() {
            this.ctx.ledgerValidator().assertIdsAreValid(this.ctx.accounts());
            if (!this.ctx.ledgerValidator().hasExpectedTotalBalance(this.ctx.accounts())){
                throw Object.defineProperty(new Error("Invalid total tinyBar float!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.ctx.nodeAccount()) == null){
                throw Object.defineProperty(new Error("Unknown ledger account!"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }

        logInfoWithConsoleEcho(s: string) {
            if (this.ctx.consoleOut() != null){
                this.ctx.consoleOut().println(s);
            }
        }

        registerIssListener() {
        }

        registerReconnectCompleteListener(notificationEngine: NotificationEngine) {
        }

        constructor() {
            this.systemExits = new com.grame.services.utils.JvmSystemExits();
            this.defaultCharset = () => { return java.nio.charset.Charset.defaultCharset() };
            if (this.ctx === undefined) { this.ctx = null; }
        }
    }
    ServicesMain["__class"] = "com.grame.services.ServicesMain";
    ServicesMain["__interfaces"] = ["SwirldMain"];


}


com.grame.services.ServicesMain.main(null);
