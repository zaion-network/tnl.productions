import { creaVDOM } from "@zaionstate/server";

export const getMetas = async (url: string) => {
  const vDom = creaVDOM();
  const res = await (
    await fetch(url, {
      mode: "cors",
    })
  ).text();
  const IMAGE = "image";
  const URL = "url";
  const SITENAME = "site_name";
  const DESCRIPTION = "description";
  const TITLE = "title";
  const TYPE = "type";
  const CARD = "card";
  const DATA = "data";
  const LABEL = "label";

  const parser = new vDom.window.DOMParser();
  const site = parser.parseFromString(`${res}`, "text/html");
  const metas = site.getElementsByTagName("meta");
  let items = metas.length;
  const site_metas = new Map();
  const og = new Map();
  const twitter = new Map();
  site_metas.set("og", og);
  site_metas.set("twitter", twitter);
  while (items) {
    items--;
    const content = metas.item(items)!.getAttribute("content");
    const property = metas.item(items)!.getAttribute("property");
    const name = metas.item(items)!.getAttribute("name");
    if (property === "og:image") {
      const og = site_metas.get("og");
      og.set(IMAGE, content);
    }
    if (property === "og:url") {
      const og = site_metas.get("og");
      og.set(URL, content);
    }
    if (property === "og:site_name") {
      const og = site_metas.get("og");
      og.set(SITENAME, content);
    }
    if (property === "og:description") {
      const og = site_metas.get("og");
      og.set(DESCRIPTION, content);
    }
    if (property === "og:title") {
      const og = site_metas.get("og");
      og.set(TITLE, content);
    }
    if (property === "og:type") {
      const og = site_metas.get("og");
      og.set(TYPE, content);
    }
    if (name) {
      if (name === "twitter:image") {
        const twitter = site_metas.get("twitter");
        twitter.set(IMAGE, content);
      }
      if (name === "twitter:url") {
        const twitter = site_metas.get("twitter");
        twitter.set(URL, content);
      }
      if (name === "twitter:description") {
        const twitter = site_metas.get("twitter");
        twitter.set(DESCRIPTION, content);
      }
      if (name === "twitter:title") {
        const twitter = site_metas.get("twitter");
        twitter.set(TITLE, content);
      }
      if (name === "twitter:card") {
        const twitter = site_metas.get("twitter");
        twitter.set(CARD, content);
      }
      if (name.includes("twitter:data")) {
        const twitter = site_metas.get("twitter");
        const data = twitter.get(DATA);
        if (!data) {
          twitter.set(DATA, [content]);
        } else {
          data.push(content);
          twitter.set(DATA, data);
        }
      }
      if (name.includes("twitter:label")) {
        const twitter = site_metas.get("twitter");
        const label = twitter.get(LABEL);
        if (!label) {
          twitter.set(LABEL, [content]);
        } else {
          label.push(content);
          twitter.set(LABEL, label);
        }
      }
      if (name === "description") {
        site_metas.set(DESCRIPTION, content);
      }
    }
  }

  const getKeysAndValuesOfMapRecursive = (map: Map<any, any>) => {
    const fullresponse: any[] = [];
    const getKeysAndValuesOfMap = (map: Map<any, any>) => {
      const response: any[] = [];
      map.forEach((v, k) => {
        if (v instanceof Map) getKeysAndValuesOfMap(v);
        else response.push([k, v]);
      });
      fullresponse.push(response);
    };

    getKeysAndValuesOfMap(map);
    return JSON.stringify(fullresponse);
  };
  return getKeysAndValuesOfMapRecursive(site_metas);
};
