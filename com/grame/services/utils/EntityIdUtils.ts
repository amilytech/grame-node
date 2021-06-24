/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.grame.services.utils {
    export class EntityIdUtils {
        static NO_PARTS: number[]; public static NO_PARTS_$LI$(): number[] { if (EntityIdUtils.NO_PARTS == null) { EntityIdUtils.NO_PARTS = []; }  return EntityIdUtils.NO_PARTS; }

        public static readableId(o: any): string {
            if (o != null && o instanceof <any>AccountID){
                const id: AccountID = <AccountID>o;
                return javaemul.internal.StringHelper.format("%d.%d.%d", , , );
            } else if (o != null && o instanceof <any>FileID){
                const id: FileID = <FileID>o;
                return javaemul.internal.StringHelper.format("%d.%d.%d", , , );
            } else if (o != null && o instanceof <any>TopicID){
                const id: TopicID = <TopicID>o;
                return javaemul.internal.StringHelper.format("%d.%d.%d", , , );
            } else if (o != null && o instanceof <any>TokenID){
                const id: TokenID = <TokenID>o;
                return javaemul.internal.StringHelper.format("%d.%d.%d", , , );
            } else if (o != null && o instanceof <any>ScheduleID){
                const id: ScheduleID = <ScheduleID>o;
                return javaemul.internal.StringHelper.format("%d.%d.%d", , , );
            } else {
                return /* valueOf */String(o).toString();
            }
        }

        /**
         * Returns the {@code AccountID} represented by a literal of the form {@code <shard>.<realm>.<num>}.
         * 
         * @param {string} repr the string representation
         * @return {AccountID} the corresponding id
         * @throws IllegalArgumentException if the literal is not formatted correctly
         */
        public static accountParsedFromString(repr: string): AccountID {
            let parts: number[] = EntityIdUtils.NO_PARTS_$LI$();
            try {
                parts = EntityIdUtils.asDotDelimitedLongArray(repr);
                return ;
            } catch(e) {
                throw Object.defineProperty(new Error(javaemul.internal.StringHelper.format("Argument \'repr=%s\' is not an account!", repr)), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        public static asDotDelimitedLongArray(s: string): number[] {
            const parts: string[] = s.split("[.]");
            const longParts: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(parts.length);
            for(let i: number = 0; i < parts.length; i++) {{
                longParts[i] = /* parseLong */parseInt(parts[i]);
            };}
            return longParts;
        }

        public static asAccount$ContractID(cid: ContractID): AccountID {
            return ;
        }

        public static asAccount(cid?: any): any {
            if (((cid != null && cid instanceof <any>ContractID) || cid === null)) {
                return <any>com.grame.services.utils.EntityIdUtils.asAccount$ContractID(cid);
            } else if (((cid != null && cid instanceof <any>com.grame.services.state.submerkle.EntityId) || cid === null)) {
                return <any>com.grame.services.utils.EntityIdUtils.asAccount$com_grame_services_state_submerkle_EntityId(cid);
            } else throw new Error('invalid overload');
        }

        public static asContract(id: AccountID): ContractID {
            return ;
        }

        public static asFile(id: AccountID): FileID {
            return ;
        }

        public static asAccount$com_grame_services_state_submerkle_EntityId(jId: com.grame.services.state.submerkle.EntityId): AccountID {
            return /* orElse */((v, v2) => v == null ? v2 : v)(/* map */((id) => )(jId),);
        }

        public static asSolidityAddressHex(id: AccountID): string {
            return ;
        }

        public static asSolidityAddress$ContractID(id: ContractID): number[] {
            return EntityIdUtils.asSolidityAddress$ContractID((<number>|0), , );
        }

        public static asSolidityAddress$int$long$long(shard: number, realm: number, num: number): number[] {
            const solidityAddress: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(20);
            /* arraycopy */((srcPts, srcOff, dstPts, dstOff, size) => { if(srcPts !== dstPts || dstOff >= srcOff + size) { while (--size >= 0) dstPts[dstOff++] = srcPts[srcOff++];} else { let tmp = srcPts.slice(srcOff, srcOff + size); for (let i = 0; i < size; i++) dstPts[dstOff++] = tmp[i]; }})(, 0, solidityAddress, 0, 4);
            /* arraycopy */((srcPts, srcOff, dstPts, dstOff, size) => { if(srcPts !== dstPts || dstOff >= srcOff + size) { while (--size >= 0) dstPts[dstOff++] = srcPts[srcOff++];} else { let tmp = srcPts.slice(srcOff, srcOff + size); for (let i = 0; i < size; i++) dstPts[dstOff++] = tmp[i]; }})(, 0, solidityAddress, 4, 8);
            /* arraycopy */((srcPts, srcOff, dstPts, dstOff, size) => { if(srcPts !== dstPts || dstOff >= srcOff + size) { while (--size >= 0) dstPts[dstOff++] = srcPts[srcOff++];} else { let tmp = srcPts.slice(srcOff, srcOff + size); for (let i = 0; i < size; i++) dstPts[dstOff++] = tmp[i]; }})(, 0, solidityAddress, 12, 8);
            return solidityAddress;
        }

        public static asSolidityAddress(shard?: any, realm?: any, num?: any): any {
            if (((typeof shard === 'number') || shard === null) && ((typeof realm === 'number') || realm === null) && ((typeof num === 'number') || num === null)) {
                return <any>com.grame.services.utils.EntityIdUtils.asSolidityAddress$int$long$long(shard, realm, num);
            } else if (((shard != null && shard instanceof <any>ContractID) || shard === null) && realm === undefined && num === undefined) {
                return <any>com.grame.services.utils.EntityIdUtils.asSolidityAddress$ContractID(shard);
            } else throw new Error('invalid overload');
        }

        public static accountParsedFromSolidityAddress(solidityAddress: number[]): AccountID {
            return ;
        }

        public static contractParsedFromSolidityAddress(solidityAddress: number[]): ContractID {
            return ;
        }

        public static asLiteralString$AccountID(id: AccountID): string {
            return javaemul.internal.StringHelper.format("%d.%d.%d", , , );
        }

        public static asLiteralString(id?: any): any {
            if (((id != null && id instanceof <any>AccountID) || id === null)) {
                return <any>com.grame.services.utils.EntityIdUtils.asLiteralString$AccountID(id);
            } else if (((id != null && id instanceof <any>FileID) || id === null)) {
                return <any>com.grame.services.utils.EntityIdUtils.asLiteralString$FileID(id);
            } else throw new Error('invalid overload');
        }

        public static asLiteralString$FileID(id: FileID): string {
            return javaemul.internal.StringHelper.format("%d.%d.%d", , , );
        }
    }
    EntityIdUtils["__class"] = "com.grame.services.utils.EntityIdUtils";

}

