import { UIDesign } from "@zaionstate/ui/";

export const createFooter = () => {
  const FOOTERCLASSNAME =
    "flex flex-column fontRoboto c-g fs_small p_1rem pc_e w_100% box_bor mt_10rem";
  const footerDesign = new UIDesign({
    id: "footer",
    className: FOOTERCLASSNAME,
    tag: "footer",
  });
  const footer = footerDesign.element;
  return footer;
};
