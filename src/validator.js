import { NumberValidator } from './validators/NumberValidator.js';
import { StringValidator } from './validators/StringValidator.js';
import { ArrayValidator } from './validators/ArrayValidator.js';

export class Validator {
  // eslint-disable-next-line class-methods-use-this
  string() {
    return new StringValidator();
  }

  // eslint-disable-next-line class-methods-use-this
  number() {
    return new NumberValidator();
  }

  // eslint-disable-next-line class-methods-use-this
  array() {
    return new ArrayValidator();
  }
}
