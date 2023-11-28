import { App } from "@zaionstate/ui";
import { createAudio } from "../../utils/createAudio";
import { createPlayIcon } from "../../utils/createPlayIcon";
import { createMainContainer } from "../../utils/createMainContainer";
import { createTNL } from "../../utils/createTNL";
import { createComingSoon } from "../../utils/createComingSoon";
import { createCallToAction } from "../../utils/createCallToAction";
import { createLogo } from "../../utils/createLogo";

export class HandleDomFactory {
  constructor(
    public app: App,
    public body: HTMLBodyElement,
    public parser: DOMParser
  ) {}
  handleOnDom = async () => {
    const audio = createAudio(document);
    const playicon = await createPlayIcon(document, audio, this.parser);
    const maincontainer = createMainContainer(document);
    const teknologique = createTNL(document);
    const comingsoon = createComingSoon(document);
    const calltoaction = createCallToAction(document);
    const newlogo = createLogo();
    this.body.appendChild(audio);
    this.body.appendChild(playicon);
    maincontainer.appendChild(teknologique);
    maincontainer.appendChild(comingsoon);
    maincontainer.appendChild(calltoaction);
    this.body.appendChild(maincontainer);
    this.body.appendChild(newlogo);
  };
}
