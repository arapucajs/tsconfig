import { expect, test } from 'bun:test';
import { hello } from '../src/index.ts';

test('retorna saudacao', () => {
  expect(hello('Mundo')).toBe('Olá, Mundo!');
});
