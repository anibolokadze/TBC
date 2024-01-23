let slideIndex = 1;
let slideTimeout;

// event listener for accordion checkboxes
document.querySelectorAll('input[name="accordion"]').forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    // get arrow icon
    const arrowIcon = this.parentElement.querySelector("#arrowIcon");

    // change the arrow up or down based on the checkbox state
    arrowIcon.innerHTML = this.checked
      ? // up arrow svg when the checkbox is checked
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path class="arrowUp" d="M8.14644661,14.858836 C7.95118446,14.6635739 7.95118446,14.3469914 8.14644661,14.1517292 L12.4989857,9.79289322 L16.8573469,14.1517292 C17.052609,14.3469914 17.052609,14.6635739 16.8573469,14.858836 C16.6620847,15.0540981 16.3455022,15.0540981 16.1502401,14.858836 L12.4989857,11.2071068 L8.85355339,14.858836 C8.65829124,15.0540981 8.34170876,15.0540981 8.14644661,14.858836 Z"></path></svg>`
      : // down arrow svg when the checkbox is unchecked
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path class="arrowDown" d="M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z"></path>
          </svg>`;
  });
});

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
