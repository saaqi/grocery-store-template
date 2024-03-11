// Glide.js
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

import Glide from "@glidejs/glide";
// new Glide(".glide").mount();
var glide = new Glide(".glide", {
  type: "carousel",
  perView: 4,
  // gap: 10,
  swipeThreshold: 40,
  dragThreshold: 60,
  animationDuration: 250,
  focusAt: "center",
  peek: 20,
  breakpoints: {
    992: {
      perView: 2,
    },
    768: {
      perView: 1,
    },
  },
});
glide.mount();
