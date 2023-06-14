import { Validator } from '../../validator.js';

describe('Тестируем StringValidator', () => {
  describe('string', () => {
    it('Возвращает true, если была передана строка', () => {
      const v = new Validator();
      const schema = v.string();

      expect(schema.isValid('')).toBe(true);
    });

    it('Возвращает true, если был передан null', () => {
      const v = new Validator();
      const schema = v.string();

      expect(schema.isValid(null)).toBe(true);
    });

    it('Возвращает true, если был передан undefined', () => {
      const v = new Validator();
      const schema = v.string();

      expect(schema.isValid(undefined)).toBe(true);
    });

    it('Возвращает false, если была передана не строка', () => {
      const v = new Validator();
      const schema = v.string();

      expect(schema.isValid(1)).toBe(false);
    });
  });

  describe('string + required', () => {
    it('Возвращает true, если была передана непустая строка', () => {
      const v = new Validator();
      const schema = v.string().required();

      expect(schema.isValid('what does the fox say')).toBe(true);
      expect(schema.isValid('hexlet')).toBe(true);
    });

    it('Возвращает false, если была передана пустая строка', () => {
      const v = new Validator();
      const schema = v.string().required();

      expect(schema.isValid('')).toBe(false);
    });

    it('Возвращает false. если был передан null', () => {
      const v = new Validator();
      const schema = v.string().required();

      expect(schema.isValid(null)).toBe(false);
    });
  });

  describe('contains', () => {
    it('Возвращает true, если строка содержит заданную строку', () => {
      const v = new Validator();
      const schema = v.string().contains('what');

      expect(schema.isValid('what does the fox say')).toBe(true);
    });

    it('Возвращает false, если строка не содержит заданную строку', () => {
      const v = new Validator();
      const schema = v.string().contains('whatthe');

      expect(schema.isValid('what does the fox say')).toBe(false);
    });

    it('Каждый вызов contains добавляет новую проверку', () => {
      const v = new Validator();
      const schema = v.string().contains('what');

      expect(schema.isValid('what does the fox say')).toBe(true);

      schema.contains('whatthe');

      expect(schema.isValid('what does the fox say')).toBe(false);
    });
  });
});
