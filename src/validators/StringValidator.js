import { isNullOrUndefined } from '../utils/isNullOrUndefined.js';
import { isString } from '../utils/isString.js';
import { BaseValidator } from './BaseValidator.js';

const checksMap = {
  string: (value) => isString(value) || isNullOrUndefined(value),
  required: (value) => !isNullOrUndefined(value) && value !== '',
  contains: (text) => (value) => value.includes(text),
};

export class StringValidator extends BaseValidator {
  constructor(customValidators) {
    super('string', customValidators);

    this.checks.push(checksMap.string);
  }

  required() {
    this.checks.push(checksMap.required);

    return this;
  }

  contains(text) {
    this.checks.push(checksMap.contains(text));

    return this;
  }
}
