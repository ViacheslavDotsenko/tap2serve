const headerBurger = document.querySelector('.header_burger');
const headerNav = document.querySelector('.header_nav');

// Обробник для кліку на headerBurger
headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
  headerNav.classList.toggle('navShow');
});

// Обробник для кліку поза елементами
document.addEventListener('click', (event) => {
  const isClickInside = headerBurger.contains(event.target) || headerNav.contains(event.target);

  if (!isClickInside) {
    headerBurger.classList.remove('active');
    headerNav.classList.remove('navShow');
  }
});
