const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;
let slideWidth = slides[0].offsetWidth;

const createDots = () => {
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
      updateDots();
    });
    dotsContainer.appendChild(dot);
  });
};

const updateSlider = () => {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
};

const updateDots = () => {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
  updateDots();
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
  updateDots();
};

createDots();
updateDots();

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
