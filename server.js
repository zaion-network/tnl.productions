#!/usr/bin/env bun

import { readFileSync } from "fs";
import { SimpleServer, creaVDOM } from "@zaionstate/server";
import { sendDM } from "./src/handleNostr";
console.log(process.env.NODE_ENV);
const getMetas = async url => {
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
    const content = metas.item(items).getAttribute("content");
    const property = metas.item(items).getAttribute("property");
    const name = metas.item(items).getAttribute("name");
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

  const getKeysAndValuesOfMapRecursive = map => {
    const fullresponse = [];
    const getKeysAndValuesOfMap = map => {
      const response = [];
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
// console.log(responsarray);
// console.log(site.getElementsByTagName("meta").item(2));
new SimpleServer(
  process.env.NODE_ENV === "development" ? 8081 : 80,
  async req => {
    const url = new URL(req.url);
    console.log(url.pathname);
    // if (url.pathname.includes("/src/html")) {
    //   const file = readFileSync(`.${url.pathname}`, { encoding: "utf8" });
    //   console.log("file");
    //   return new Response("file");
    // }
    try {
      if (url.pathname === "/subscribe") {
        const TNLPUB =
          "49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc";
        const TESTPUB =
          "005be03966ded6393a773e61469698b48a90944f6ce2b055b1d099e2c5fb1756";
        const sk = process.env.SEC;
        const pk = process.env.PUB;
        const res = await sendDM(
          process.env.NODE_ENV === "development" ? TESTPUB : TNLPUB,
          url.searchParams.get("m"),
          sk,
          pk,
          e => {}
        );
        return new Response(url.searchParams.get("m"));
      }
    } catch (error) {
      console.log(error);
      throw new Error("there was and error handling the subscribe request");
    }
    console.log(url.host);
    if (url.host.includes("staging")) {
      // mostra pagina autenticazione
      // controlla se cè nostr
    }
    if (url.pathname.includes("/api/getmetas")) {
      console.log(
        "-------------------------------------------- got a meta request"
      );
      return await getMetas(url.searchParams.get("url"));
    }
    if (url.pathname.includes("/api/checkcontent")) {
      console.log(
        "-------------------------------------------- got a checkcontent request"
      );
      const linkurl = url.searchParams.get("link");
      const response = (await fetch(linkurl, { method: "HEAD" })).headers;
      return response.get("content-type");
    } else return null;
  }
);
