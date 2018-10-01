import objectFitImages from 'object-fit-images';
import { $body, detectIE } from './_helpers';

// import './components/Header';

export class Common {
  constructor() {
    this.init();
  }

  init() {
    objectFitImages();
    this.addClassIE();
  }

  addClassIE() {
    if (detectIE()) $body.addClass('is-ie');
  }
}

export default new Common();
