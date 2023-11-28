#!/usr/bin/env bun
import * as z from "@zaionstate/zaionbase";
import { SimpleServer } from "@zaionstate/server";
import { handleGetMetas } from "./src/handleGetMetas";
import { handleSubscribe } from "./src/handleSubscribe";
import { handleStaging } from "./src/handleStaging";
import { handleDistStaging } from "./src/handleDistStaging";
import { handleAuthDomain } from "./src/server/handleAuthDomain";

const conditioner = new z.Conditioner();

const NODE_ENV = process.env.NODE_ENV;
console.log(NODE_ENV);
const port = {
  development: 8081,
  production: 80,
};

const staging = {
  development: url =>
    url.pathname === "/staging" || url.pathname === "/staging/auth",
  production: url => url.host.includes("staging"),
};

new SimpleServer(port[NODE_ENV], async req => {
  console.log("//////////////////////////// NEW REQUEST");
  const DISTSTAGING = "/dist/staging.js";
  const AUTH = "/auth";
  const url = new URL(req.url);
  if (url.pathname === AUTH) handleAuthDomain(url, NODE_ENV);
  const arr = [
    [url.pathname === "/subscribe", handleSubscribe, [url]],
    [staging[NODE_ENV](url), handleStaging, [req]],
    [url.pathname === DISTSTAGING, handleDistStaging, []],
    [url.pathname.includes("/api/getmetas"), handleGetMetas, [url]],
  ];
  console.log(url.host);
  return conditioner.elseIf("", arr, [() => null, []]);
});
