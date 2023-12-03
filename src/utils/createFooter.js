import { UIDesign } from "@zaionstate/ui/";

export const createFooter = () => {
  const FOOTERCLASSNAME =
    "flex flex-wrap fontRoboto c-g fs_small p_1rem w_100% box_bor jus_c_s_e mt_10rem";
  const footerDesign = new UIDesign({
    id: "footer",
    className: FOOTERCLASSNAME,
    tag: "footer",
  });
  const footer = footerDesign.element;
  return footer;
};
