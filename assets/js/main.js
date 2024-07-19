const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const dotsContainer = document.querySelector(".dots");


const slider = document.querySelector('.slider__items')
const slidess = document.querySelectorAll(".slider__item")

const nextBtn = document.querySelector(".button__next");
const prevBtn = document.querySelector(".button__prev");
const countContainer = document.querySelector(".count");


const sliderItems = document.querySelector(".slider__items-mobile");
const sliderItem = document.querySelectorAll(".slider__item-mobile");

const nextBtnMob = document.querySelector(".button__next-mob");
const prevBtnMob = document.querySelector(".button__prev-mob");
const countContainerMob = document.querySelector(".count__mob");

let currentSlide = 0;
let count = 1;
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

const updateSliderTwo = () => {
  slidess.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
};

const updateSliderThree = () => {
  sliderItem.forEach((slide, index) => {
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

const updateCount = () => {
  countContainer.textContent = (currentSlide + 1) + '/' + slidess.length;
}

const updateCountTwo = () => {
  countContainerMob.textContent = (currentSlide + 1) + '/' + sliderItem.length;
}


const nextSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
  updateDots();
};

const slideNext = () => {
  currentSlide = (currentSlide + 1) % slidess.length;
  updateSliderTwo();
  updateCount();
}
const slidePrev = () => {
  currentSlide = (currentSlide - 1 + slidess.length) %  slidess.length;
  updateSliderTwo();
  updateCount();
}

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
  updateDots();
};

const slideGo = () => {
  currentSlide = (currentSlide + 1) % sliderItem.length;
  updateSliderThree();
  updateCountTwo();
}

const slideBack = () => {
  currentSlide = (currentSlide - 1 + sliderItem.length) %  sliderItem.length;
  updateSliderThree();
  updateCountTwo();
}


createDots();
updateDots();
updateCount();
updateCountTwo();

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

nextBtn.addEventListener("click",slideNext);
prevBtn.addEventListener("click",slidePrev);

nextBtnMob.addEventListener("click",slideGo);
prevBtnMob.addEventListener("click",slideBack);


