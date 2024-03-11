/* ## Add dark claass to the header and top link
--------------------------------------------- */
window.addEventListener("scroll", () => {
  if (window.scrollY >= 250) {
    document.querySelector("body").classList.add("dark");
  } else {
    document.querySelector("body").classList.remove("dark");
  }
});

document.getElementById("curr_year").innerHTML = new Date().getFullYear();
