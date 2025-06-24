
// JS Functionalities
import './navigation.js';
import './hero.js';
import './homePage.js';
import './updateTitles.js';
import './contactus.js';
import './footer.js';

// css
// Supports weights 100-900
import '@fontsource-variable/inter';
// Supports weights 400-700
import '@fontsource-variable/lora';

import "../scss/bs-static.scss";
import "../scss/main.scss";
// BOX Icons
import "boxicons/css/boxicons.min.css";




/* ## Add dark claass to the header and top link
--------------------------------------------- */
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    document.querySelector("body").classList.add("dark");
  } else {
    document.querySelector("body").classList.remove("dark");
  }
});




// Hide Preloader ------------
const preloader = document.getElementById("atf-preloader");

window.onload = setTimeout(() => {
  if (preloader) preloader.hidden = true;
  if (preloader) preloader.style.display = "none";
}, 2000);

window.onload = () => {
  preloader.classList.add("hide-preloader");
};
