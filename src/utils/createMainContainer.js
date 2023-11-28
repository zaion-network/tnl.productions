import { UIDesign } from "@zaionstate/ui/";

/**
 *
 * @param {document} document
 */
export const createMainContainer_old = document => {
  const container = document.createElement("div");
  container.id = "main-container";
  container.className = "flex flex-wrap flex-column w_100% pc_c mb_5rem";
  return container;
};
export const createMainContainer = document => {
  const containerDesign = new UIDesign({
    tag: "div",
    id: "main-container",
    className: "flex flex-wrap flex-column w_100% pc_c mb_5rem",
  });
  containerDesign.element;
  return containerDesign.element;
};
