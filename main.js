
handleMobileMenu();

function handleMobileMenu() {
  const body = document.querySelector('body');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  body.addEventListener('click', e => {
    const target = e.target;
    if (hamburger.contains(target)) {
      mobileNav.classList.toggle('navigation-mobile-items--visible');
    } else if (mobileNav.classList.contains('navigation-mobile-items--visible') && !mobileNav.contains(target)) {
      mobileNav.classList.remove('navigation-mobile-items--visible');
    } else if (target.tagName === 'A') {
      mobileNav.classList.remove('navigation-mobile-items--visible');
    }
  })
}
