export class BaseValidator {
  checks = [];

  isValid(value) {
    return this.checks.every((fn) => fn(value));
  }
}
