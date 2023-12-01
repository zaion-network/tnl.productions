import { UIDesign } from "@zaionstate/ui/";

export const createSrc = src => {
  const design = new UIDesign({
    id: "source",
    tag: "source",
  });
  const element = design.element;
  element.setAttribute("type", "audio/mpeg");
  element.setAttribute("src", src);
  element.textContent = "Il tuo browser non supporta l'elemento audio.";
  // element.appendChild(src);
  return element;
};
