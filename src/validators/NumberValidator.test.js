import { Validator } from '../validator.js';

describe('Тестируем NumberValidator', () => {
  describe('number', () => {
    it('Возвращает true, если было передано число', () => {
      const v = new Validator();
      const schema = v.number();

      expect(schema.isValid(1)).toBe(true);
    });

    it('Возвращает true, если был передан null', () => {
      const v = new Validator();
      const schema = v.number();

      expect(schema.isValid(null)).toBe(true);
    });

    it('Возвращает false если было передано не число', () => {
      const v = new Validator();
      const schema = v.number();

      expect(schema.isValid('test')).toBe(false);
    });
  });

  describe('number + required', () => {
    it('Возвращает true, если было передано число', () => {
      const v = new Validator();
      const schema = v.number().required();

      expect(schema.isValid(1)).toBe(true);
    });

    it('Возвращает false, если был передан null', () => {
      const v = new Validator();
      const schema = v.number().required();

      expect(schema.isValid(null)).toBe(false);
    });
  });

  describe('number + positive', () => {
    it('Возвращает true, если было передано положительное число', () => {
      const v = new Validator();
      const schema = v.number().positive();

      expect(schema.isValid(10)).toBe(true);
    });

    it('Возвращает false, если было передано отрицательное число', () => {
      const v = new Validator();
      const schema = v.number().positive();

      expect(schema.isValid(-10)).toBe(false);
    });
  });

  describe('number + range', () => {
    it('Возвращает true, если было передано число в заданном диапазоне', () => {
      const v = new Validator();
      const schema = v.number().range(0, 10);

      expect(schema.isValid(5)).toBe(true);
    });

    it('Возвращает false, если было передано число не в заданном диапазоне', () => {
      const v = new Validator();
      const schema = v.number().range(0, 10);

      expect(schema.isValid(-5)).toBe(false);
    });
  });
});
