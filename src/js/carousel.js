const indicators = document.querySelectorAll('.carousel__indicator');
const nextBtn = document.querySelector('.carousel__next');
const prevBtn = document.querySelector('.carousel__prev');
const slides = document.querySelectorAll('.carousel__item');
let activeSlide = document.querySelector('.carousel__item.active');
let count = [...slides].indexOf(activeSlide);

const indicatorClick = (e) => {
  slides[count].classList.remove('active');

  let label = e.ariaLabel;
  let newSlide = document.querySelector(`[aria-label="${label}"]`);
  newSlide.classList.add('active');
  activeSlide = newSlide;
  count = [...slides].indexOf(activeSlide);
}

const nextClick = () => {
  slides[count].classList.remove('active');

  count = count === slides.length - 1 ? count = 0 : count + 1;

  activeSlide = slides[count].classList.add('active');
}

const prevClick = () => {
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