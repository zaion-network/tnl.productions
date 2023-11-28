import { handleStagingHtml } from "./handleStagingHtml";
import { Conditioner } from "@zaionstate/zaionbase";
import { handleStagingCss } from "./handleStagingCss";
import { handleDistStaging } from "../handleDistStaging";

const conditioner = new Conditioner();

export const handleDefaultStaging = async (url: URL) => {
  const HOME = "/";
  const CSS = "/assets/style.css";
  const DISTSTAGING = "/dist/staging.js";
  const arr: Conditioner.condition[] = [
    [url.pathname === HOME, handleStagingHtml, [url]],
    [url.pathname === CSS, handleStagingCss, [url]],
    [url.pathname === DISTSTAGING, handleDistStaging, []],
  ];
  return await conditioner.elseIf("", arr, [() => null, [url]]);
};
