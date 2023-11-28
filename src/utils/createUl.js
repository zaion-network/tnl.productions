import { UIDesign } from "@zaionstate/ui/";

export const createUl = list => {
  const FONTROBOTO = "fontRoboto";
  const ulDesign = new UIDesign({
    className: "p_0 mt_10rem",
    tag: "ul",
    id: "ul",
  });
  const ul = ulDesign.element;
  const titleDesign = new UIDesign({
    className: FONTROBOTO,
    id: "cooking",
    tag: "h3",
  });
  const title = titleDesign.element;
  titleDesign.setInnerText("cooking in the yard a store bringing you:");
  ul.appendChild(title);
  list.forEach(e => {
    const liDesign = new UIDesign({
      className: FONTROBOTO,
      id: "li",
      tag: "li",
    });
    const li = liDesign.element;
    liDesign.setInnerText(e);
    ul.appendChild(li);
  });
  return ul;
};
