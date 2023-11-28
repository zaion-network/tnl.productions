import { UIDesign } from "@zaionstate/ui/";
import { imgFadeIn } from "./imgFadeIn";

export const createLogo = () => {
  const INIT_LOGO_CLASS = "w_100% mt_5rem vis_h";
  const MUTATED_LOGO_CLASS = "w_100% vis_vimp anim_fi1point2s";
  const imageDesing = new UIDesign({
    className: INIT_LOGO_CLASS,
    id: "logo",
    tag: "img",
  });
  const image = imageDesing.element;
  imageDesing.setHtmlAttribute("src", "./assets/Logo_white.svg");
  window.addEventListener("scroll", function () {
    imgFadeIn(image, MUTATED_LOGO_CLASS);
  });

  window.addEventListener("resize", function () {
    imgFadeIn(image, INIT_LOGO_CLASS);
  });
  return image;
};
