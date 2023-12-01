#!/usr/bin/env bun

await Bun.build({
  entrypoints: ["./src/index.js"],
  outdir: "dist",
  target: "browser",
});

await Bun.build({
  entrypoints: ["./src/staging.js"],
  outdir: "dist",
  target: "browser",
});
