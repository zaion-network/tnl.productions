import { verifySignature } from "nostr-tools";
import { event } from "./server.type";
import { verifyContent } from "./verifyContent";

export const handleAuthorization = async (auth: string) => {
  try {
    const authorization: event = JSON.parse(auth);
    const isVerified = verifySignature(authorization);
    if (isVerified) {
      const isContentVerified = verifyContent(
        authorization.content,
        authorization.pubkey
      );
      if (isContentVerified) {
        return "valid authorization received";
      } else {
        return "fuck you scammer";
      }
    } else {
      return "fuck you braaa";
    }
  } catch (error) {
    console.log(error);
  }
};
