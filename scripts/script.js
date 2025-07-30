window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navigation-wrap");
  if (window.scrollY > 50) {
    navbar.classList.add("scroll-on");
  } else {
    navbar.classList.remove("scroll-on");
  }
});


const slides = document.querySelectorAll('.slide-item');
const indicators = document.querySelectorAll('.indicator');
const container = document.querySelector('.slide-container');

// Style each slide absolutely
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index === 0 ? 0 : 100}%)`;
});

let currentIndex = 0;

indicators.forEach(button => {
  button.addEventListener('click', () => {
    const newIndex = parseInt(button.dataset.index);
    if (newIndex === currentIndex) return;

    const direction = newIndex > currentIndex ? 1 : -1;

    // Slide out current
    slides[currentIndex].style.transform = `translateX(${-100 * direction}%)`;

    // Slide in new
    slides[newIndex].style.transform = `translateX(0%)`;

    // Move all other slides to the right position
    slides.forEach((slide, idx) => {
      if (idx !== newIndex && idx !== currentIndex) {
        slide.style.transform = `translateX(${(idx > newIndex ? 100 : -100)}%)`;
      }
    });

    indicators[currentIndex].classList.remove('active');
    indicators[newIndex].classList.add('active');
    currentIndex = newIndex;
  });
});

