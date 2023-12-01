export const cleanNodeChildren = (target: HTMLElement) => {
  const bodynode = target.childNodes;
  while (bodynode.length) {
    target.removeChild(bodynode.item(0));
  }
};
