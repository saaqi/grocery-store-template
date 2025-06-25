// --- Import only the required components.


const navLinkElements = document.getElementById("navbar");
if (navLinkElements) navLinkElements.innerHTML = navigationLinks.join("");



// Scroll to target sections on click
document.querySelectorAll('.main-nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = link.getAttribute('href');
    document.querySelector(target).scrollIntoView();
    // Update URL hash without triggering page reload
    history.pushState(null, null, target);
  });
});


// Setup Scroll Spy
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  const highlightNavLink = () => {
    sections.forEach(section => {
      const scrollPosition = window.scrollY;
      const top = section.offsetTop - 68;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('data-scroll-spy-target').slice(1) === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
  window.addEventListener('load', highlightNavLink);
  window.addEventListener('scroll', highlightNavLink);
  window.addEventListener('resize', highlightNavLink);
});



// Hide Navigation on right swipe
document.addEventListener("DOMContentLoaded", () => {
  const offcanvasBody = document.querySelector('.offcanvas-body');
  const closeButton = document.querySelector('[data-bs-dismiss="offcanvas"]');
  let startX;
  offcanvasBody.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  offcanvasBody.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;
    if (deltaX > 50) {
      closeButton.click();
    }
  });
});



// Expand Shop accordians corresponding to the navigation link
document.addEventListener('DOMContentLoaded', () => {
  const shopLinks = document.querySelectorAll("#navbar > li.nav-item.dropdown a.shop-link");
  shopLinks.forEach(link => {
    const target = link.getAttribute('href');
    const targetButton = document.querySelector(target + ' .accordion-button');
    const targetBody = document.querySelector(target + ' .accordion-collapse');

    link.addEventListener('click', () => {
      if (targetButton) targetButton.classList.remove('collapsed');
      if (targetButton) targetButton.setAttribute('aria-expanded', 'true');
      if (targetBody) targetBody.classList.add('show');
    });
  });
});
