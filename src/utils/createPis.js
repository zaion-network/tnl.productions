import { UIDesign } from "@zaionstate/ui/";

export const createPis = list => {
  const pis = list.map(e => {
    const piDesing = new UIDesign({
      className: "fontRoboto mt_2rem",
      id: "p",
      tag: "p",
    });
    const pi = piDesing.element;
    piDesing.setInnerText(e);
    return pi;
  });
  return pis;
};
