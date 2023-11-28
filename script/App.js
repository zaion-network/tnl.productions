import EventEmitter from "events";

export class App extends EventEmitter {
  static ISROOTOFAPP = "is-root-of-app";
  static ISSCRIPTFOLDER = "is-script-folder-of-app";
  static FILEEXISTS = "file-exists";
  static FILENOTEXIST = "file-doesnt-exist";
  static ISJSON = "is-json";
  static ISNOTJSON = "is-not-json";
  static ISMONOREPO = "is-monorepo";
  static ISNOTMONOREPO = "is-not-monorepo";
  static GOTAPPPKGJSON = "got-this-packagejson";
  static NOTGOTTHISPKGJSON = "not-got-this-packagejson";
  static GOTDEPS = "got-dependecies";
  static GOTADAPTEDDEPS = "got-adapted-deps";
  static GOTMERGEDDATAS = "got-merged-datas";
  static DATASAVED = "datas-saved";
  // packages building
  static PACKAGE_BUILD_STARTED = "package-build-started";
  static GOT_PACKS_TO_BUILD = "got-packs-to-build";
  static NO_PACKS_TO_BUILD = "no-packs-to-build";
  static PACKS_BUILD_OK = "packs-build-ok";
  static PACKS_BUILD_NOT_OK = "packs-build-not-ok";
  // errors
  static ERR_PARSINGJSON =
    "There was an error parsing the package.json file of this project";
  static ERR_GETTINDEPS = "There was an error getting the deps";
  static ERR_ADAPTINGDEPS = "There was and error adapting the dependencies";
  static ERR_MERGINGDATAS = "There was an error merging the datas";
  static ERR_SAVINGDATA = "There was a problem saving the datas";
  monorepo;
  scope;
  isRoot;
  isMonoRepo;
  pkgjson;
  pathsmap;
  packsmap;
  constructor(monoreponame, scope, pathsmap, packsmap) {
    super();
    this.monorepo = monoreponame;
    this.scope = scope;
    this.pathsmap = pathsmap;
    this.packsmap = packsmap;
  }
  checkIsRoot(checker, cwd) {
    if (checker(cwd)) {
      this.isRoot = true;
      const path = this.pathsmap.get(true).ROOTPKGJSON;
      this.emit(App.ISROOTOFAPP, path);
    } else {
      this.isRoot = false;
      const path = this.pathsmap.get(false).ROOTPKGJSON;
      this.emit(App.ISSCRIPTFOLDER, path);
    }
  }
  checkExistance(checker, path) {
    if (checker(path)) {
      this.emit(App.FILEEXISTS, path);
    } else {
      const THISPKGJSON = this.pathsmap.get(this.isRoot).THISPKGJSON;
      this.isMonoRepo = false;
      this.emit(App.FILENOTEXIST, THISPKGJSON);
    }
  }
  readFileContent(reader, path) {
    const content = reader(path);
    try {
      const parsed = JSON.parse(content);
      this.emit(App.ISJSON, { parsed, name: this.monorepo });
    } catch (error) {
      this.emit(App.ISNOTJSON, error);
    }
  }
  isMonorepo(checker, { parsed, name }) {
    const THISPKGJSON = this.pathsmap.get(this.isRoot).THISPKGJSON;
    if (checker({ json: parsed, reponame: name })) {
      this.isMonoRepo = true;
      this.emit(App.ISMONOREPO, THISPKGJSON);
    } else {
      this.isMonoRepo = false;
      this.emit(App.ISNOTMONOREPO);
    }
  }
  readAppPkgJson(reader, path) {
    try {
      const string = reader(path);
      this.emit(App.GOTAPPPKGJSON, { string, scope: this.scope });
    } catch (error) {
      this.emit(App.NOTGOTTHISPKGJSON);
    }
  }
  getThisDeps(getter, { string, scope }) {
    try {
      this.pkgjson = JSON.parse(string);
    } catch (error) {
      throw new Error(App.ERR_PARSINGJSON);
    }
    const deps = getter({ parsed: this.pkgjson, scope });
    if (deps.length) this.emit(App.GOTDEPS, { deps, target: this.isMonoRepo });
    else throw new Error(App.ERR_GETTINDEPS);
  }
  adaptDependencyPath(adapter, { deps, target }) {
    try {
      const adaptedDeps = adapter({
        deps,
        target,
        map: this.packsmap,
      });
      this.emit(App.GOTADAPTEDDEPS, {
        json: this.pkgjson,
        adaptedDeps,
        scope: this.scope,
      });
    } catch (error) {
      throw new Error(App.ERR_ADAPTINGDEPS);
    }
  }
  mergeDatas(merger, { json, adaptedDeps, scope }) {
    const path = this.pathsmap.get(this.isRoot).THISPKGJSON;
    this.adaptedDeps = adaptedDeps;
    const data = merger({ json, adaptedDeps, scope });
    if (data) this.emit(App.GOTMERGEDDATAS, { data, path });
    else throw new Error(App.ERR_MERGINGDATAS);
  }
  saveDatas(saver, { data, path }) {
    if (saver({ data, path })) this.emit(App.DATASAVED);
    else throw new Error(App.ERR_SAVINGDATA);
  }
  // PACKAGE BUILD
  startPackageBuild() {
    if (this.isMonoRepo) return this.emit(App.PACKS_BUILD_OK);
    this.emit(App.PACKAGE_BUILD_STARTED, {
      adaptedDeps: this.adaptedDeps,
      scope: this.scope,
    });
  }
  getPacksToBuild(getter, props) {
    const packs = getter(props);
    if (packs) this.emit(App.GOT_PACKS_TO_BUILD, packs);
    else this.emit(App.NO_PACKS_TO_BUILD);
  }
  /**
   *
   * @param {Function} builder
   * @param {string[]} packs
   */
  buildPacks(builder, packs) {
    const results = packs.map(builder);
    const containsAFalse = (arr) => !arr.some((e) => !e);
    if (!containsAFalse(results)) this.emit(App.PACKS_BUILD_OK);
    else this.emit(App.PACKS_BUILD_NOT_OK);
  }
  emit(event, ...args) {
    console.log(event);
    super.emit(event, ...args);
  }
}
