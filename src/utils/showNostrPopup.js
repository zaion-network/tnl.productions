import { UIDesign } from "@zaionstate/ui/";

export const showNostrPopup = () => {
  const containerDesing = new UIDesign({
    className: "container",
    id: "container",
    tag: "div",
  });
  const container = containerDesing.element;
  const popupDesign = new UIDesign({
    className: "mr_1rem c_dark",
    id: "popup",
    tag: "p",
  });
  const popup = popupDesign.element;
  const buttonDesign = new UIDesign({
    className: "p_0 bc_tr",
    id: "button",
    tag: "button",
  });
  const button = buttonDesign.element;
  buttonDesign.setInnerText("❌");
  button.addEventListener("click", () => {
    containerDesing.setClassName("dis_none");
  });
  const visibleBig =
    "pos_f t_20px r_0 mr_10rem fontRoboto bc_red p_1-2rem br_05rem flex";
  const visibleSmall =
    "pos_f t_20px r_0 m_0 fontRoboto bc_red p_1-2rem br_05rem flex";
  containerDesing.setClassName("dis_none");
  popup.textContent =
    "woo great it seems you have nostr installed, or the Alby extention! thats great!! soon we will have something ready for you!!";
  setTimeout(() => {
    if (document.documentElement.clientWidth > 1200) {
      containerDesing.setClassName(visibleBig);
    } else {
      containerDesing.setClassName(visibleSmall);
    }
  }, 1000);
  container.appendChild(popup);
  container.appendChild(button);
  body.appendChild(container);
};
