import './proto/sync_pb.js';
import type * as SyncPb from './proto/sync_pb';
export { merkle, getClock, setClock, makeClock, makeClientId, serializeClock, deserializeClock, type Clock, Timestamp, } from './crdt';
declare global {
    var proto: typeof SyncPb;
}
export declare const SyncRequest: typeof SyncPb.SyncRequest;
export declare const SyncResponse: typeof SyncPb.SyncResponse;
export declare const Message: typeof SyncPb.Message;
export declare const MessageEnvelope: typeof SyncPb.MessageEnvelope;
export declare const EncryptedData: typeof SyncPb.EncryptedData;
export declare const SyncProtoBuf: typeof SyncPb;
//# sourceMappingURL=index.d.ts.map