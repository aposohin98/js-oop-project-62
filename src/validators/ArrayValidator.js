import { isNullOrUndefined } from '../utils/isNullOrUndefined.js';
import { BaseValidator } from './BaseValidator.js';

const checksMap = {
  array: (value) => Array.isArray(value) || isNullOrUndefined(value),
  required: (value) => Array.isArray(value),
  sizeof: (length) => (arr) => arr.length === length,
};

export class ArrayValidator extends BaseValidator {
  constructor(customValidators) {
    super('array', customValidators);

    this.checks.push(checksMap.array);
  }

  required() {
    this.checks.push(checksMap.required);

    return this;
  }

  sizeof(length) {
    this.checks.push(checksMap.sizeof(length));

    return this;
  }
}
