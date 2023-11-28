import { UIDesign } from "@zaionstate/ui/";

export const createLogoPis = list => {
  const pis = list.map((e, i) => {
    const FONTROBOTO = "fontRoboto";
    const piDesign = new UIDesign({
      className: FONTROBOTO,
      id: `pi${i}`,
      tag: "p",
    });
    const pi = piDesign.element;
    pi.textContent = e;
    piDesign.setInnerText(e);
    return pi;
  });
  return pis;
};
