import { hashIt } from "@zaionstate/zaionbase/crypto";
import { ALIENO, ARIANNA, GIACOMO, GIDEV, NIKO } from "./whitelist";

export const challanges: { [k: string]: true | string } = {
  [GIACOMO!]: true,
  [ARIANNA!]: true,
  [ALIENO!]: true,
  [NIKO!]: true,
  [GIDEV!]: true,
};
export const verifyContent = (content: string, user: string) => {
  return challanges[user] === hashIt(content);
};
