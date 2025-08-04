

// Header Shrink

const headerLogo = document.getElementById('header-logo');
const headerNavLinks = document.querySelectorAll('.header-navigation');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerLogo.style.fontSize = 'clamp(.7rem, 1vw + 0.5rem, 2.5rem)';
    headerNavLinks.forEach(link => {
      link.style.fontSize = 'clamp(.2rem, .5vw + 0.5rem, 1.5rem)';
    });
  } else {
    headerLogo.style.fontSize = 'clamp(.7rem, 2vw + 0.5rem, 2.5rem)';
    headerNavLinks.forEach(link => {
      link.style.fontSize = 'clamp(.2rem, 1vw + 0.5rem, 1.5rem)';
    });
  }
}