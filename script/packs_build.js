import { App } from "./App";
import { app } from "./build";

const map = new Map();
map.set();

const getter = ({ adaptedDeps, scope }) => {
  return adaptedDeps.map((e) => `node_modules/${scope}/${e[1]}`);
};

const builder = async (pack) => {
  console.log(pack);
  const build = (cwd) => {
    const stream = Bun.spawn({
      cmd: ["bun", "run", "build"],
      stdout: "pipe",
      cwd,
    }).stdout;
    return Bun.readableStreamToText(stream);
  };
  const res = await build(pack);
  console.log(res);
  return false;
};

const hpackagebuildstarted = ({ adaptedDeps, scope }) =>
  app.getPacksToBuild(getter, { adaptedDeps, scope });

const hGotPacksToBuild = (paths) => app.buildPacks(builder, paths);

app.on(App.PACKAGE_BUILD_STARTED, hpackagebuildstarted);
app.on(App.GOT_PACKS_TO_BUILD, hGotPacksToBuild);

app.startPackageBuild();

// app.getPacksToBuild(({scope,parsed}) => {
//   if("dependecies" in parsed) {}
// });

// app.on(App.GOT_PACKS_TO_BUILD, cwds => {
//   app.buildPacks(cwd => {
//     Bun.spawn({cmd:["bun","run","build"],stdout:"pipe",cwd}).stdout
//   }, cwds);
// });
