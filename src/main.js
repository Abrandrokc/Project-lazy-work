let menuOpenButton = document.querySelector(`.header-menu-open-btn`);
let menuCloseIcon = document.querySelector(`.mobile-close-button`);
let mobileMenu = document.querySelector(`.mobile-menu`);

let mobileNavAbout = document.querySelector(`.first-js`);
let mobNavColection = document.querySelector(`.mobile-colection`);
let mobNavCustomer = document.querySelector(`.mob-customer`);
let mobNavTestimonial = document.querySelector(`.mob-testimonials`);

menuOpenButton.addEventListener(`click`, () => {
  mobileMenu.classList.add(`is-open`);
});
menuCloseIcon.addEventListener(`click`, () => {
  mobileMenu.classList.remove(`is-open`);
});
mobileNavAbout.addEventListener(`click`, () => {
  mobileMenu.classList.remove(`is-open`);
});
mobNavColection.addEventListener(`click`, () => {
  mobileMenu.classList.remove(`is-open`);
});
mobNavCustomer.addEventListener(`click`, () => {
  mobileMenu.classList.remove(`is-open`);
});
mobNavTestimonial.addEventListener(`click`, () => {
  mobileMenu.classList.remove(`is-open`);
});
// ======================================================
function slowScroll(target) {
  let doc = document.querySelector(`is-open`);

  let currentPosition = window.scrollY;
  let targetPosition = document.querySelector(target).offsetTop;
  let distance = targetPosition - currentPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, currentPosition, distance, 1000);
    window.scrollTo(0, run);
    if (timeElapsed < 1000) {
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return (c / 2) * t * t + b;
    }
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

let links = document.querySelectorAll("a[href^='#']");
for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let target = this.getAttribute('href');
    slowScroll(target);
  });
}
