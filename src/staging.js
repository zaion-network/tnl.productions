import { wait } from "@zaionstate/zaionbase/web";
import { loadIndex } from "./server/loadIndex.js";
import { authenticate } from "./utils/authenticate.js";
import { authorize } from "./utils/authorize.js";
import { getToken } from "./utils/getToken.js";
import { prompt } from "./utils/prompt.js";

console.log("staging");
const handleIsNostr = async () => {
  try {
    await prompt(
      "clicca connettiti e permettici di leggere la tua chiave pubblica!"
    );
    await wait(1000);
    return await window.nostr.getPublicKey();
  } catch (error) {
    return false;
  }
};
const checkIsAuthorized = async npub => {
  const challenge = await authenticate(npub);
  await prompt("firma il messaggio per autenticarti!");
  await wait(1000);
  const response = await authorize(challenge);
  if (response === "fuck you scammer") return false;
  else return true;
};

const promptNoList = async () => {
  const GOTEKPROFILE =
    "https://primal.net/profile/npub1ey8camjv3ngtysxwy0h8d9hd6f5hfrtn92xlz63hf7c4j8xfrl4sxlscca";
  await prompt(
    "sembra che tu non sia nella whitelist, contatta gotek su nostr!!",
    new Map().set("gotek", GOTEKPROFILE)
  );
};

const handleGotNpub = async npub => {
  const isAuthorized = await checkIsAuthorized(npub);
  if (isAuthorized) await loadIndex();
  else await promptNoList();
};

const handleGotNostrAndToken = async token => {
  const response = await authorize(JSON.parse(token).content);
  if (response === "valid authorization received") await loadIndex();
  else await prompt("there was a problem with your token");
};

const handleNoTokenAndNostr = async () => {
  const PROBLEMWITHNOSTR =
    "there was a problem retrieving your npub from nostr";
  const npub = await handleIsNostr();
  if (npub) await handleGotNpub(npub);
  else await prompt(PROBLEMWITHNOSTR);
};

const handleGotToken = async token => {
  if (window.nostr) await handleGotNostrAndToken(token);
  else await prompt("you dont have nostr installed....😅");
};

const handleNoToken = async () => {
  const NONOSTR =
    "sorry, it seems you need to install the alby extension and/or configure it with your nostr keys to access our test page!";
  await prompt("controlliamo se hai nostr....");
  if (window.nostr) handleNoTokenAndNostr();
  else await prompt(NONOSTR);
};

window.onload = async () => {
  const token = getToken();
  if (token) await handleGotToken(token);
  else handleNoToken();
};
