import { Validator } from '../../validator.js';

describe('Тестируем ObjectValidator', () => {
  describe('shape', () => {
    it('Пример #1', () => {
      const v = new Validator();
      const schema = v.object().shape({
        name: v.string().required(),
        age: v.number().positive(),
      });

      expect(schema.isValid({ name: 'kolya', age: 100 })).toBe(true);
    });

    it('Пример #2', () => {
      const v = new Validator();
      const schema = v.object().shape({
        name: v.string().required(),
        age: v.number().positive(),
      });

      expect(schema.isValid({ name: 'maya', age: null })).toBe(true);
    });

    it('Пример #3', () => {
      const v = new Validator();
      const schema = v.object().shape({
        name: v.string().required(),
        age: v.number().positive(),
      });

      expect(schema.isValid({ name: '', age: null })).toBe(false);
    });

    it('Пример #4', () => {
      const v = new Validator();
      const schema = v.object().shape({
        name: v.string().required(),
        age: v.number().positive(),
      });

      expect(schema.isValid({ name: 'ada', age: -5 })).toBe(false);
    });
  });
});
