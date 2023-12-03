import { UIDesign } from "@zaionstate/ui/";

export const createLinks = data => {
  const aDesing = new UIDesign({
    tag: "a",
    className: "tx_d_n",
  });
  aDesing.setHtmlAttribute("target", data.target);
  aDesing.setHtmlAttribute("id", data.id);
  aDesing.setHtmlAttribute("href", data.href);
  aDesing.setInnerText(data.text);
  return aDesing.element;
};
