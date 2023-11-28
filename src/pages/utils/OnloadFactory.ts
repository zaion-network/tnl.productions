import { App, UIDesign } from "@zaionstate/ui";
import { createLogoPis } from "../../utils/createLogoPis";
import { createUl } from "../../utils/createUl";
import { createPis } from "../../utils/createPis";
import { createFooter } from "../../utils/createFooter";
import { links } from "../../../database/links";
import { logoPayoffs } from "../../../database/logoPayoffs";
import { listOfFeatures } from "../../../database/listOfFeatures";
import { paragraphs } from "../../../database/pis";
import { createLinks } from "../../utils/createLinks";
import { showAboutPage } from "../../utils/showAboutPage";
import { createCSSScrollVariable } from "../../utils/createCSSScrollVariable";
import { createProgressBar } from "../../utils/createProgressBar";

export class OnloadFactory {
  constructor(
    public app: App,
    public body: HTMLBodyElement,
    public createScrollRootRule: (stylesheet: any) => void,
    public createProgressAnimRule: (stylesheet: any) => void,
    public createProgressBar: (
      styleSheet: any,
      css: any,
      className: any,
      id: any
    ) => UIDesign,
    public createCSSScrollVariable: (variableName: any) => void,
    public PROGRESSCLASS: string
  ) {}
  handleOnLoad = () => {
    this.app.checkNostr();
    // questi pi vengono creati dopo che l'immagine del logo
    // è stata caricata.
    const logoPis = createLogoPis(logoPayoffs);
    const ul = createUl(listOfFeatures);
    const pis = createPis(paragraphs);

    const footer = createFooter();
    const mappedlinks = links.map(createLinks);
    const about = mappedlinks.filter(e => e.id === "about")[0];
    const styleSheet = document.createElement("style");

    mappedlinks.forEach(e => footer.appendChild(e));
    logoPis.forEach((e: any) => {
      this.body.appendChild(e);
    });
    this.body.appendChild(ul);
    pis.forEach((p: any) => this.body.appendChild(p));
    pis.forEach((p: any) => this.body.appendChild(p));

    this.body.appendChild(footer);
    about.addEventListener("click", e => {
      e.preventDefault();
      showAboutPage((message: string) => {
        window.confirm(message);
      });
    });

    document.head.appendChild(styleSheet);
    this.createCSSScrollVariable("--scroll");
    this.createScrollRootRule(styleSheet);
    this.createProgressAnimRule(styleSheet);
    const progress = this.createProgressBar(
      styleSheet,
      this.PROGRESSCLASS,
      "progress",
      "progress"
    ).element;
    this.app.appendToBody(progress);
  };
}
