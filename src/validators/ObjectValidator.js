import { BaseValidator } from './BaseValidator.js';
import { isObject } from '../utils/isObject.js';

const checksMap = {
  object: (value) => isObject(value),
  shape: (schema) => (object) => {
    const keys = Object.keys(schema);

    return keys.every((key) => {
      const validator = schema[key];
      const value = object[key];

      return validator.isValid(value);
    });
  },
};

export class ObjectValidator extends BaseValidator {
  constructor(customValidators) {
    super('object', customValidators);

    this.checks.push(checksMap.object);
  }

  shape(schema) {
    this.checks.push(checksMap.shape(schema));

    return this;
  }
}
