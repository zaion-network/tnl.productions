import { UIDesign } from "@zaionstate/ui/";
import { createSrc } from "./loadPlayer";
/**
 * crea lettore audio
 * @param {document} document
 */
export const createAudio = document => {
  const elementDesign = new UIDesign({
    id: "player",
    tag: "audio",
  });
  const element = elementDesign.element;
  element.addEventListener("loadedmetadata", () => {
    element.volume = 0.5;
  });
  const track = createSrc(
    "https://audius-dp.amsterdam.creatorseed.com/v1/tracks/DvX88/stream"
  );
  element.appendChild(track);
  return element;
};
