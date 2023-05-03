const indicators = document.querySelectorAll('.carousel__indicator');
const nextBtn = document.querySelector('.carousel__next');
const prevBtn = document.querySelector('.carousel__prev');
let area;
let label;
let slides;
let activeSlide;
let activeIndicator;
let count;

const carouselIndificator = (e) => {
  area = e.closest('section');
  slides = area.querySelectorAll('.carousel__item');
  label = e.ariaLabel;
  activeSlide = area.querySelector('.carousel__item.active');
  count = [...slides].indexOf(activeSlide);
}

const indicatorClick = (e) => {
  
  carouselIndificator(e);

  activeSlide.classList.remove('active');
  let newSlide = area.querySelector(`[aria-label="${label}"]`);
  newSlide.classList.add('active');
  activeSlide = newSlide;
  count = [...slides].indexOf(activeSlide);

  activeIndicator = area.querySelector('.carousel__indicator.active');
  activeIndicator.classList.remove('active');
  console.log(activeIndicator)
  let newIndicator = e.classList.add('active');
  activeIndicator = newIndicator;
}

const nextClick = (e) => {
  slides[count].classList.remove('active');

  count = count === slides.length - 1 ? count = 0 : count + 1;

  activeSlide = slides[count].classList.add('active');
}

const prevClick = (e) => {
  slides[count].classList.remove('active');

  count = count === 0 ? count = slides.length - 1 : count - 1;

  activeSlide = slides[count].classList.add('active');
}

export default () => {
  indicators.forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
      e.preventDefault();

      indicatorClick(e.target);
    })
  })

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();

    nextClick();
  })

  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();

    prevClick();
  })
};