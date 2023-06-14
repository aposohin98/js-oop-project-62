import { NumberValidator } from './validators/NumberValidator.js';
import { StringValidator } from './validators/StringValidator.js';

export class Validator {
  // eslint-disable-next-line class-methods-use-this
  string() {
    return new StringValidator();
  }

  // eslint-disable-next-line class-methods-use-this
  number() {
    return new NumberValidator();
  }
}
