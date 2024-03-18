// Scroll of sections on click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');

    // Update URL hash without triggering page reload
    document.querySelector(target).scrollIntoView();
    history.pushState(null, null, target);
  });
});