
// css
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

// Add Current Year to the footer
document.getElementById("curr_year").innerHTML = new Date().getFullYear();

// Link section scrolling
// import "./link-scroll.js";

// preloader
import "./hidepreloader.js";
