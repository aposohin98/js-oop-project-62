import { StringValidator } from './validators/StringValidator.js';

export class Validator {
  // eslint-disable-next-line class-methods-use-this
  string() {
    return new StringValidator();
  }
}
