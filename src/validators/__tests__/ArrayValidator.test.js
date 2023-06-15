import Validator from '../../validator.js';

describe('Тестируем NumberValidator', () => {
  describe('array', () => {
    it('Возвращает true, если передан массив', () => {
      const v = new Validator();
      const schema = v.array();

      expect(schema.isValid([])).toBe(true);
    });

    it('Возвращает true, если передан null', () => {
      const v = new Validator();
      const schema = v.array();

      expect(schema.isValid(null)).toBe(true);
    });

    it('Возвращает false, если передан не массив', () => {
      const v = new Validator();
      const schema = v.array();

      expect(schema.isValid('test')).toBe(false);
    });
  });

  describe('array + required', () => {
    it('Возвращает true, если передан пустой массив', () => {
      const v = new Validator();
      const schema = v.array().required();

      expect(schema.isValid([])).toBe(true);
    });

    it('Возвращает true, если передан непустой массив', () => {
      const v = new Validator();
      const schema = v.array().required();

      expect(schema.isValid(['hexlet'])).toBe(true);
    });

    it('Возвращает false, если передан null', () => {
      const v = new Validator();
      const schema = v.array().required();

      expect(schema.isValid(null)).toBe(false);
    });
  });

  describe('array + sizeof', () => {
    it('Возвращает true, если передан массив заданной длины', () => {
      const v = new Validator();
      const schema = v.array().sizeof(1);

      expect(schema.isValid(['hexlet'])).toBe(true);
    });

    it('Возвращает false, если передан массив длина которого отличается от заданной', () => {
      const v = new Validator();
      const schema = v.array().sizeof(1);

      expect(schema.isValid([])).toBe(false);
    });
  });
});
