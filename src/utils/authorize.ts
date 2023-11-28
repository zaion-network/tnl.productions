import { unsignedEvent } from "../server/server.type";
import { checkAuthorization } from "./checkAuthorization";
import { putToken } from "./putToken";

export const authorize = async (challenge: string) => {
  const event: unsignedEvent = {
    created_at: Date.now(),
    kind: 1,
    content: challenge,
    tags: [],
  };
  let signedEvent = await window.nostr.signEvent(event);
  const serialized = JSON.stringify(signedEvent);
  const authorizeHeaders = new Headers();
  authorizeHeaders.append("Authorize", serialized);
  const response = await checkAuthorization(serialized);
  if (response === "valid authorization received") putToken(serialized);
  return response;
};
