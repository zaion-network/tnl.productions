export function imgFadeIn(logo, className) {
  var wh = window.innerHeight || document.documentElement.clientHeight;
  var rect = logo.getBoundingClientRect();
  var thisPos = rect.top;
  var topOfWindow = window.scrollY || window.pageYOffset;
  if (topOfWindow + wh - 200 > thisPos) {
    logo.className = className;
  }
}
