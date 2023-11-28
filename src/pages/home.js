import { App, UIDesign } from "@zaionstate/ui";
import { cleanNodeChildren } from "./utils/cleanNodeChild";
import { bringOutScripts } from "./utils/bringScriptNodeOutOfBody";
import { OnloadFactory } from "./utils/OnloadFactory";
import { HandleDomFactory } from "./utils/HandleDomFactory";

export const home = async (
  createScrollRootRule,
  createProgressAnimRule,
  createProgressBar,
  createCSSScrollVariable,

  PROGRESSCLASS
) => {
  const TNLchat =
    "d6b49c39cd99e892bb745348504574c11c399a8e2d86cbe3bb182f45e0af8fae";
  const events = App.events;

  const app = new App({
    window: window,
    nodeslist: UIDesign.nodeslist,
  });
  let parser = new DOMParser();
  // const body = document.getElementById("body");
  // bringOutScripts(body);
  // cleanNodeChildren(body);

  // for (let script in scripts) {
  //   document.documentElement.appendChild(scripts[0]);
  // }

  app.on(events.nostr, () => {});
  const handleOnDom = new HandleDomFactory(app, body, parser).handleOnDom;

  const handleOnLoad = new OnloadFactory(
    app,
    body,
    createScrollRootRule,
    createProgressAnimRule,
    createProgressBar,
    createCSSScrollVariable,
    PROGRESSCLASS
  ).handleOnLoad;

  if (document.readyState === "complete") {
    // L'evento onload è già stato invocato
    await handleOnDom();
    handleOnLoad();
  } else {
    // L'evento onload non è ancora stato invocato
    app.on(events.dom, handleOnDom);

    app.on(events.load, handleOnLoad);

    app.on(events.minWidth768Change, () => {});
  }
};
