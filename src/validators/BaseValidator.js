class BaseValidator {
  constructor(type, customValidators = []) {
    this.type = type;
    this.checks = [];
    this.customValidators = customValidators.filter((validator) => validator.type === type);
  }

  isValid(value) {
    return this.checks.every((fn) => fn(value));
  }

  test(customName, param) {
    const { validator } = this.customValidators.find((v) => v.customName === customName);

    this.checks.push((value) => validator(value, param));

    return this;
  }
}

export default BaseValidator;
