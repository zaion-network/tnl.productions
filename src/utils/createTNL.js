import { UIDesign } from "@zaionstate/ui/";
/**
 * crea il titolo TNL
 * @param {document} document
 */
export const createTNL = document => {
  const h1Desing = new UIDesign({
    className: "fs_4rem p_0 m_0 mt_20vh",
    id: "tnl",
    tag: "h1",
  });
  h1Desing.setInnerText("Tek No Logique");
  const tnlclasssmall = "fs_4rem p_0 m_0 mt_20vh fontImpact";
  const tnlclassbig = "fs_8rem p_0 m_0 mt_20vh fontImpact";
  if (document.documentElement.clientWidth > 1200) {
    h1Desing.setClassName(tnlclassbig);
  } else {
    h1Desing.setClassName(tnlclasssmall);
  }
  return h1Desing.element;
};
