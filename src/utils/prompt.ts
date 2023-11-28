import { wait } from "@zaionstate/zaionbase/web";
import { typeWriter } from "./typewriter";

const TYPESPEED = 40;
const TYPEWRITERID = "type-writer";

export const prompt = async (mess: string, wordMap?: Map<string, string>) => {
  await typeWriter(mess, TYPESPEED, TYPEWRITERID, wordMap);
  await wait(1500);
};
