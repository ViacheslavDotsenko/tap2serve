const headerBurger = document.querySelector('.header_burger');
const headerNav = document.querySelector('.header_nav');
let back = document.querySelector('body');

// Обробник для кліку на headerBurger
headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
  headerNav.classList.toggle('navShow');
  back.classList.toggle('lock');
});

// Обробник для кліку поза елементами
document.addEventListener('click', (event) => {
  const isClickInside = headerBurger.contains(event.target) || headerNav.contains(event.target);

  if (!isClickInside) {
    headerBurger.classList.remove('active');
    headerNav.classList.remove('navShow');
    back.classList.remove('lock');
  }
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    organization: document.getElementById('organization').value,
    message: document.getElementById('message').value,
  };

  
  console.log('Form Data Submitted:', formData);

  
  this.reset();


  alert('Your message has been sent successfully!');
});
