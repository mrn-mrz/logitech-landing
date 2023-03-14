const mainHeader = document.querySelector('.header__main');
const navHeader = document.querySelector('.header__navs');
const openButton = document.querySelector('.nav__open');
const closeButton = document.querySelector('.nav__close');
const navLinks = document.querySelectorAll('.nav__link_mobile');

const openMenu = () => {
  mainHeader.style.display = 'none';
  navHeader.style.display = 'flex';
}

const closeMenu = () => {
  mainHeader.style.display = 'flex';
  navHeader.style.display = 'none';
}

export default () => {
  openButton.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu();
  });

  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
  })

  navLinks.forEach((nav) => {
    nav.addEventListener('click', (e) => {
      closeMenu();
    })
  })
};