export class Post extends EventTarget {
  imageUrl;
  text;
  userName;
  avatar;
  time;
  verified;
  link;
  setImageUrl(imageUrl) {
    this.imageUrl = imageUrl;
    this.dispatchEvent(new Event("imageUrl-changed"), { detail: "mom" });
    return this;
  }
  setText(text) {
    this.text = text;
    this.dispatchEvent(new Event("text-changed"), this);
    return this;
  }
  setUserName(userName) {
    this.userName = userName;
    this.dispatchEvent(new Event("userName-changed"), this);
    return this;
  }
  setAvatar(avatar) {
    this.avatar = avatar;
    this.dispatchEvent(new Event("avatar-changed"), this);
    return this;
  }
  setTime(time) {
    this.time = time;
    this.dispatchEvent(new Event("time-changed"), this);
    return this;
  }
  setVerified(verified) {
    this.verified = verified;
    this.dispatchEvent(new Event("verified-changed"), this);
    return this;
  }
  setLink(link) {
    this.link = link;
    this.dispatchEvent(new Event("link-changed"), this);
    return this;
  }
  setStateUIMethod(method) {
    this.setStateUI = method;
    this.dispatchEvent(new Event("setStateUIMethod-changed"), this);
  }
}
