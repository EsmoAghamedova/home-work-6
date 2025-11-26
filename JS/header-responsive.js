// // Responsive header: hamburger menu toggle for mobile/tablet
// (function () {
//     const header = document.querySelector('header');
//     const nav = document.querySelector('nav');

//     if (!header || !nav) return;

//     // Create hamburger button
//     const hamburger = document.createElement('button');
//     hamburger.className = 'hamburger-menu';
//     hamburger.setAttribute('aria-label', 'Toggle navigation');
//     hamburger.setAttribute('aria-expanded', 'false');
//     hamburger.innerHTML = '<span></span><span></span><span></span>';

//     // Insert hamburger after theme toggle
//     const themeToggle = document.querySelector('.theme-toggle');
//     if (themeToggle) {
//         themeToggle.parentNode.insertBefore(hamburger, themeToggle.nextSibling);
//     }

//     // Add mobile-menu class to nav for styling
//     nav.classList.add('mobile-menu-wrapper');

//     // Toggle menu on hamburger click
//     hamburger.addEventListener('click', function (e) {
//         e.stopPropagation();
//         const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
//         hamburger.setAttribute('aria-expanded', !isOpen);
//         nav.classList.toggle('open');
//     });

//     // Close menu when a link is clicked
//     const navLinks = nav.querySelectorAll('a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             hamburger.setAttribute('aria-expanded', 'false');
//             nav.classList.remove('open');
//         });
//     });

//     // Close menu when clicking outside
//     document.addEventListener('click', function (e) {
//         if (!header.contains(e.target)) {
//             hamburger.setAttribute('aria-expanded', 'false');
//             nav.classList.remove('open');
//         }
//     });

//     // Handle window resize
//     function updateResponsive() {
//         if (window.innerWidth > 900) {
//             nav.classList.remove('open');
//             hamburger.setAttribute('aria-expanded', 'false');
//         }
//     }

//     window.addEventListener('resize', updateResponsive);
// })();
