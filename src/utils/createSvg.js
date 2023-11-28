/**
 *
 * @param {document} document
 * @param {string} path
 */
export const createSvg = (document, data, id, pathcolor, parser, stroke) => {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let svgDoc = parser.parseFromString(data, "image/svg+xml");
  let elements = svgDoc.querySelectorAll("circle, rect, path");
  // Aggiungi ogni elemento al tuo elemento SVG
  if (!stroke) {
    elements.forEach(element => {
      if (element.tagName === "path") {
        element.setAttribute("fill", pathcolor);
      }
      svg.appendChild(element);
    });
  } else {
    elements.forEach(element => {
      if (element.tagName === "path") {
        element.setAttribute("stroke", pathcolor);
        element.setAttribute("fill", "transparent");
      }
      svg.appendChild(element);
    });
  }
  svg.id = id;
  svg.classList.add("w_24");
  svg.classList.add("h_24");
  return svg;
};
