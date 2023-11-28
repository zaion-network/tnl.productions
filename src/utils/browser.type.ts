import { event, unsignedEvent } from "../server/server.type";

declare global {
  interface Window {
    nostr: {
      getPublicKey: string;
      signEvent(event: unsignedEvent): Promise<event>;
    };
  }
}
