export const createCSSScrollVariable = variableName => {
  const onScrollHandler =
    (css_variableName, start = 0, end = 0) =>
    () => {
      var offsetStart = start;
      var offsetEnd = end;
      const scrollPos = window.pageYOffset - offsetStart;
      const dafuq =
        document.body.offsetHeight -
        offsetStart -
        offsetEnd -
        window.innerHeight;
      const value = scrollPos / dafuq;
      document.documentElement.style.setProperty(css_variableName, value);
    };
  window.addEventListener("scroll", onScrollHandler(variableName), false);
};

export const SCROLLROOT_DEFAULT = `
:root * {
  /* Pause the animation */
  animation-play-state: paused;
  /* Bind the animation to scroll */

  animation-delay: calc(var(--scroll) * -1s);
  /* These last 2 properites clean up overshoot weirdness */
  animation-iteration-count: 1;
  animation-fill-mode: both;
}`;
