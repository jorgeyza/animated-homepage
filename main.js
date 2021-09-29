// Mobile selectors
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');
const mobileNavigation = document.querySelector('.mobile-navigation');

// Mobile and Desktop links selector
const navLinks = document.querySelectorAll('.nav-list .nav-list__item');

// Social media icons selectors
const socialIcons = document.querySelectorAll('.social-icons__icon');

// Mobile navigation menu functionality
mobileMenu.addEventListener('click', () => {
  mobileNavigation.classList.add('active');
  mobileClose.classList.add('active');
});

mobileClose.addEventListener('click', () => {
  mobileNavigation.classList.remove('active');
  mobileClose.classList.remove('active');
});

// Mobile navigation menu links animation
navLinks.forEach((li, i) => {
  li.style.animationDelay = 400 + i * 140 + 'ms';
});

// Social icons animation
socialIcons.forEach((li, i) => {
  li.style.animationDelay = 1400 + i * 120 + 'ms';
});
