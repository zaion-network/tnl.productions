export class Posts extends EventTarget {
  value;
  constructor() {
    super();
    this.value = [];
  }
  addPost(post) {
    this.latest = post;
    this.value.push(post);
    this.dispatchEvent(new Event("post-added"));
  }
  setCreatePosts(createPosts) {
    this.createPosts = createPosts;
  }
  setSvgs(svgs) {
    this.svgs = svgs;
  }
  setTarget(target) {
    this.target = target;
  }
}
