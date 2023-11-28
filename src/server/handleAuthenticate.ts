import { hashIt } from "@zaionstate/zaionbase/crypto";
import { challanges } from "./verifyContent";
import { ALIENO, ARIANNA, GIACOMO, GIDEV, NIKO } from "./whitelist";

const valid = {
  [GIACOMO!]: true,
  [ARIANNA!]: true,
  [ALIENO!]: true,
  [NIKO!]: true,
  [GIDEV!]: true,
};

const randomstring = () => Math.round(Math.random() * 10000000).toString(16);

const makeRandomString = () => {
  let random = randomstring();
  while (random.length !== 6) random = randomstring();
  return random;
};

const handleValidUser = async (user: string) => {
  const randomstring = makeRandomString();
  challanges[user] = hashIt(randomstring);
  return randomstring;
};

const handleNotValidUser = async () => {
  return "you are not valid";
};

export const handleAuthenticate = async (user: string) => {
  const isValid = valid[user];
  console.log(">>>>>>>>>>>>is valid", user);
  console.log(">>>>>>>>>>>>is valid", isValid);
  console.log(">>>>>>>>>>>>is valid", valid);

  if (isValid) return await handleValidUser(user);
  else return await handleNotValidUser();
};
