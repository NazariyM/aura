import {
  css
} from '../_helpers';

class Header {
  constructor() {
    this.body = document.querySelector('body');
    this.header = document.querySelector('.header');
    this.nav = this.header.querySelector('.nav');
    this.navBtn = this.nav.querySelector('.nav__btn');
    this.scrollTop = 0;

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.navBtn.addEventListener('click', () => {
      this.toggleMenu();
      this.toggleBodyLock();
    });
    this.onResize();
  }

  onResize() {
    window.onresize = () => {
      this.navBtn.classList.remove(css.active);
      this.nav.classList.remove(css.active);
    };
  }

  toggleMenu() {
    this.navBtn.classList.toggle(css.active);
    this.nav.classList.toggle(css.active);
  }

  toggleBodyLock() {
    this.body.classList.contains(css.locked) ? this.body.classList.remove(css.locked) : this.body.classList.add(css.locked);
  }
}

export const HeaderAPI = new Header();
