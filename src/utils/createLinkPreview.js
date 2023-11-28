import { UIDesign } from "@zaionstate/ui";

const parseGetMetasResponse = metas => {
  const parse = filter => arr => {
    const clone = [...arr];
    while (clone.length) {
      const current = clone.shift();
      const gotImage = current.filter(e => e[0] === filter);
      if (gotImage.length) return gotImage[0][1];
    }
  };
  const parseForImage = parse("image");
  const parseForSiteName = parse("site_name");
  const parseForTitle = parse("title");
  const parseForDescription = parse("description");
  const parseForUrl = parse("url");
  const image = parseForImage(metas);
  const sitename = parseForSiteName(metas);
  const title = parseForTitle(metas);
  const descrizione = parseForDescription(metas);
  const url = parseForUrl(metas);
  return { image, sitename, title, descrizione, url };
};

export const createLinkPreview = async url => {
  const res = JSON.parse(
    await (await fetch(`/api/getmetas?url=${url}`)).text()
  );
  let obj = parseGetMetasResponse(res);
  const container = new UIDesign({
    tag: "div",
    id: "link-preview-container",
    className: "w_i ct_is of_h br_05rem b_1-s-dg",
  });
  const immagine = new UIDesign({
    tag: "img",
    id: "link-preview-img",
    className: "w_100cqw h_70cqh objf_none",
  });
  container.element.addEventListener("click", () => {
    console.log(url);
    window.open(url);
  });
  if (obj.image) {
    immagine.setHtmlAttribute("src", obj.image);
    container.setClassName("w_i h_i ct_s of_h br_05rem b_1-s-dg");
    container.addChild(immagine);
  }
  const infos = new UIDesign({
    tag: "div",
    id: "link-preview-infos",
    className: "p_05rem ta_l",
  });
  const urlNameContainer = new UIDesign({
    tag: "div",
    className: "flex pc_sb",
  });
  const url_ = new UIDesign({
    tag: "p",
    id: "link-preview-url",
    className: "c-g fs_90% lc_1",
  });
  url_.setInnerText(url);
  urlNameContainer.addChild(url_);
  // const nome = new UIDesign({
  //   tag: "p",
  //   id: "link-preview-site_name",
  //   className: "c-g fs_90%",
  // });
  // if (obj.sitename) {
  //   nome.setInnerText(obj.sitename);
  //   urlNameContainer.addChild(nome);
  // }
  infos.addChild(urlNameContainer);
  const titolo = new UIDesign({
    tag: "h1",
    id: "link-preview-title",
    className: "lc_1",
  });
  if (obj.title) {
    titolo.setInnerText(obj.title);
    infos.addChild(titolo);
  }
  const descrizione = new UIDesign({
    tag: "p",
    id: "link-preview-desc",
    className: "lc_2",
  });
  if (obj.descrizione) {
    descrizione.setInnerText(obj.descrizione);
    // http://tnl.productions
    infos.addChild(descrizione);
  }
  container.addChild(infos);
  return container.element;
};
