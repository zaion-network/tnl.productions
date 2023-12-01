import { Conditioner } from "@zaionstate/zaionbase";
import { handleAuthenticate } from "./handleAuthenticate";
import { handleAuthorization } from "./handleAuthorization";

const conditioner = new Conditioner();
export const handleAuthPath = async (req: Request) => {
  const user = req.headers.get("Authenticate");
  const auth = req.headers.get("Authorize");
  const arr: Conditioner.condition[] = [
    [user ? true : false, handleAuthenticate, [user]],
    [auth ? true : false, handleAuthorization, [auth]],
  ];
  return await conditioner.elseIf("", arr, [
    () => "you need to provide an auth",
    [],
  ]);
};
