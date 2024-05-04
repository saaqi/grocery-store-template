// Hide Preloader ------------
const preloader = document.getElementById("atf-preloader");

window.onload = setTimeout( () => {
  if (preloader) preloader.hidden = true;
  if (preloader) preloader.style.display = "none";
}, 2000);

window.onload = () => {
  preloader.classList.add("hide-preloader");
};
