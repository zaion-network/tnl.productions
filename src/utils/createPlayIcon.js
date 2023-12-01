import { createSvg } from "./createSvg";
import { UIDesign } from "@zaionstate/ui/";

/**
 *
 * @param {document} document
 */
export const createPlayIcon = async (document, player, parser) => {
  // let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // const data = await (await fetch("./assets/play-btn-black.svg")).text();
  // let svgDoc = parser.parseFromString(data, "image/svg+xml");
  // let elements = svgDoc.querySelectorAll("circle, rect, path");
  // // Aggiungi ogni elemento al tuo elemento SVG
  // elements.forEach(element => {
  //   if (element.tagName === "path") {
  //     element.setAttribute("fill", "white");
  //   }
  //   svg.appendChild(element);
  // });
  const playbtnsvgstring = await (
    await fetch("./assets/play-btn-black.svg")
  ).text();
  const playbtnsvg = createSvg(
    document,
    playbtnsvgstring,
    "play-btn",
    "white",
    parser
  );
  const pausebtnsvgstring = await (
    await fetch("./assets/pause-btn-black.svg")
  ).text();
  const pausebtnsvg = createSvg(
    document,
    pausebtnsvgstring,
    "pause-btn",
    "white",
    parser
  );
  const BUTTONCLASSNAME = "cu_p ps_end pos_f w_fc r_1rem t_calc1 w_24 h_24";
  const buttonDesign = new UIDesign({
    className: BUTTONCLASSNAME,
    id: "button",
    tag: "div",
  });
  const button = buttonDesign.element;
  button.appendChild(playbtnsvg);
  button.addEventListener("click", e => {
    const parent = e.target.parentNode;
    if (parent.firstChild.id === "play-btn") {
      parent.removeChild(parent.firstChild);
      parent.appendChild(pausebtnsvg);
      player.play();
    } else {
      parent.removeChild(parent.firstChild);
      parent.appendChild(playbtnsvg);
      player.pause();
    }
  });
  // const play = document.createElement("img");
  // play.id = "play-btn";
  // play.src = "assets/play-btn-black.svg";
  // const playclass = ".dis_none";
  // const pauseclass = "fa-solid fa-circle-pause fa-lg";

  // const map = new Map().set(true, pauseclass).set(false, playclass);
  // const mapstate = new Map()
  //   .set(false, () => player.play())
  //   .set(true, () => player.pause());
  // // player.setAttribute("controls", "true");
  // play.setAttribute("class", `${map.get(false)} `);
  // play.addEventListener("click", e => {
  //   const condition = e.target.className.includes(pauseclass);
  //   e.target.setAttribute("class", `${map.get(!condition)} `);
  //   mapstate.get(condition)();
  // });
  return button;
};
