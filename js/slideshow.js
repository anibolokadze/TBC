let slideIndex = 1;
// slideshow function
const showSlides = (n) => {
  // variables to store HTML elements
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // remove "active" class from all dot indicators
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // display the current slide and mark the dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  slideTimeout = setTimeout(() => {
    changeSlides(1);
  }, 2000);
};

showSlides(slideIndex);

// change slides based on the arrow button clicks
const changeSlides = (n) => {
  clearTimeout(slideTimeout);
  showSlides((slideIndex += n));
};

// navigate directly to a specific slide
const currentSlide = (n) => {
  clearTimeout(slideTimeout);
  showSlides((slideIndex = n));
};
