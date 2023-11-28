import { Conditioner } from "@zaionstate/zaionbase";
import { handleDefaultStaging } from "./server/handleDefaultStaging";
import { handleAuthPath } from "./server/handleAuthPath";
import { handleDistStaging } from "./handleDistStaging";
import { handleSubscribe } from "./handleSubscribe";
import { handleGetMetas } from "./handleGetMetas";
const conditioner = new Conditioner();

// dev arrivano le richieste passate a localhost:8081/staging
// prod arrivano le richieste con host che contiene "staging"

export const handleStaging = async (req: Request) => {
  const DISTSTAGING = "/dist/staging.js";
  const DISTINDEX = "/dist/index.js";
  const url = new URL(req.url);
  const isAuthPath =
    url.pathname === "/auth" || url.pathname === "/staging/auth";

  const arr: Conditioner.condition[] = [
    [url.pathname === "/subscribe", handleSubscribe, [url]],
    [url.pathname === DISTSTAGING, handleDistStaging, []],
    [url.pathname === DISTINDEX, () => null, []],
    [url.pathname.includes("/api/getmetas"), handleGetMetas, [url]],
    [isAuthPath, handleAuthPath, [req]],
  ];
  return await conditioner.elseIf("", arr, [handleDefaultStaging, [url]]);
};
