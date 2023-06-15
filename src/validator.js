import NumberValidator from './validators/NumberValidator.js';
import StringValidator from './validators/StringValidator.js';
import ArrayValidator from './validators/ArrayValidator.js';
import ObjectValidator from './validators/ObjectValidator.js';

class Validator {
  constructor() {
    this.customValidators = [];
  }

  addValidator(type, customName, validator) {
    this.customValidators.push({ type, customName, validator });
  }

  // eslint-disable-next-line class-methods-use-this
  string() {
    return new StringValidator(this.customValidators);
  }

  // eslint-disable-next-line class-methods-use-this
  number() {
    return new NumberValidator(this.customValidators);
  }

  // eslint-disable-next-line class-methods-use-this
  array() {
    return new ArrayValidator(this.customValidators);
  }

  // eslint-disable-next-line class-methods-use-this
  object() {
    return new ObjectValidator(this.customValidators);
  }
}

export default Validator;
