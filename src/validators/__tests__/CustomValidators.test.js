import Validator from '../../validator.js';

describe('Тестируем CustomValidator', () => {
  it('string + custom validator', () => {
    const v = new Validator();

    const fn = (value, start) => value.startsWith(start);
    v.addValidator('string', 'startWith', fn);

    const schema = v.string().test('startWith', 'H');

    expect(schema.isValid('exlet')).toBe(false);
    expect(schema.isValid('Hexlet')).toBe(true);
  });

  it('number + custom validator', () => {
    const v = new Validator();

    const fn = (value, min) => value >= min;
    v.addValidator('number', 'min', fn);

    const schema = v.number().test('min', 5);

    expect(schema.isValid(4)).toBe(false);
    expect(schema.isValid(6)).toBe(true);
  });
});
