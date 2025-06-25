
// JS Functionalities
import './navigation.js';
import './hero.js';
import './homePage.js';
import './updateTitles.js';
import './contactus.js';
import './footer.js';




/* ## Add dark claass to the header and top link
--------------------------------------------- */
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    document.querySelector("body").classList.add("dark");
  } else {
    document.querySelector("body").classList.remove("dark");
  }
});


