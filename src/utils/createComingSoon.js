import { UIDesign } from "@zaionstate/ui/";

/**
 * crea l'elemento coming soon
 * @param {document} document
 */
export const createComingSoon = document => {
  const containerDesign = new UIDesign({
    tag: "div",
    className: "flex flex-wrap pc_c",
    id: "container",
  });
  const container = containerDesign.element;

  const comingsoontextDesign = new UIDesign({
    tag: "p",
    className: "fontRoboto",
    id: "text",
  });
  comingsoontextDesign.setInnerText("coming soon");
  const comingsoontext = comingsoontextDesign.element;

  const comingsoonpointDesign = new UIDesign({
    tag: "p",
    className: "fontRoboto w_20 ta_l",
    id: "points",
  });
  const texts = [`   `, `.  `, `.. `, `...`];
  const comingsoonpoint = comingsoonpointDesign.element;
  let index = 0;
  setInterval(() => {
    index++;
    if (index === texts.length) {
      index = 0;
    }
    comingsoonpointDesign.setInnerText(texts[index]);
  }, 350);
  container.appendChild(comingsoontext);
  container.appendChild(comingsoonpoint);
  return container;
};
