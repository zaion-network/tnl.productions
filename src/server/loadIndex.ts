import { Pager } from "@zaionstate/ui";
import { prompt } from "../utils/prompt.js";
import { bringOutScripts } from "../pages/utils/bringScriptNodeOutOfBody.js";
import { cleanNodeChildren } from "../pages/utils/cleanNodeChild.js";
import { createRule } from "../utils/createRule.js";
import { home } from "../pages/home.js";
import { createProgressBar } from "../utils/createProgressBar.js";
import {
  SCROLLROOT_DEFAULT,
  createCSSScrollVariable,
} from "../utils/createCSSScrollVariable.js";

export const loadIndex = async () => {
  await prompt("stiamo caricando la pagina di test, benvenuto/a!");

  const pager = new Pager({ parser: new DOMParser() });

  const PROGRESSANIM = `
@keyframes progress {
  0% {
    background-color: #fff;
    width: 0%;
  }
  100% {
    background-color: rgb(20, 255, 226);
    width: 100%;
  }
}`;

  const PROGRESSCLASS = `
.progress {
  height: 3px;
  width: 0%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  animation: progress 1s linear;
}`;

  // const BODY = `
  // body {
  //   min-height: 500vh;
  // }
  // `;

  const body = document.getElementById("body")!;
  bringOutScripts(body);
  cleanNodeChildren(body);
  const createScrollRootRule = createRule(SCROLLROOT_DEFAULT);
  const createProgressAnimRule = createRule(PROGRESSANIM);
  pager.route("/", () => {
    home(
      createScrollRootRule,
      createProgressAnimRule,
      createProgressBar,
      createCSSScrollVariable,
      // createPopUpMenu,
      PROGRESSCLASS
    );
  });
  pager.resolve();
};
