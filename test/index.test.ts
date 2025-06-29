import { expect, test } from 'bun:test';
import { hello } from '../src/index';

test('retorna saudacao', () => {
  expect(hello('Mundo')).toBe('Olá, Mundo!');
});
