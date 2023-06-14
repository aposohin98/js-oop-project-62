import { isNullOrUndefined } from '../utils/isNullOrUndefined.js';
import { isNumber } from '../utils/isNumber.js';
import { BaseValidator } from './BaseValidator.js';

const checksMap = {
  number: (value) => isNumber(value) || isNullOrUndefined(value),
  required: (value) => isNumber(value),
  positive: (value) => value > 0 || isNullOrUndefined(value),
  range: (from, to) => (value) => value >= from && value <= to,
};

export class NumberValidator extends BaseValidator {
  constructor() {
    super();

    this.checks.push(checksMap.number);
  }

  required() {
    this.checks.push(checksMap.required);

    return this;
  }

  positive() {
    this.checks.push(checksMap.positive);

    return this;
  }

  range(from, to) {
    this.checks.push(checksMap.range(from, to));

    return this;
  }
}
