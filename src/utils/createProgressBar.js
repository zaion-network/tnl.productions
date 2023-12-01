import { UIDesign } from "@zaionstate/ui/";
import { createRule } from "./createRule";

export const createProgressBar = (styleSheet, css, className, id) => {
  createRule(css)(styleSheet);
  const divDesign = new UIDesign({
    className,
    tag: "div",
    id,
  });
  return divDesign;
};
