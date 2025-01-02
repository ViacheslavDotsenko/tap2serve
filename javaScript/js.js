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


let dotX = 0, dotY = 0;
let targetX = 0, targetY = 0;
const speed = 0.1; 
const dot = document.getElementById("cursor-dot");

document.addEventListener("mousemove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
});

function animateDot() {    
    dotX += (targetX - dotX) * speed;
    dotY += (targetY - dotY) * speed;
  
    dot.style.left = `${dotX}px`;
    dot.style.top = `${dotY}px`;    
    requestAnimationFrame(animateDot);
}
animateDot();
