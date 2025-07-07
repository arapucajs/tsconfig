import { expect, test } from 'bun:test';
import { hello } from '../src/index.js';
test('retorna saudacao', () => {
  expect(hello('World')).toBe('Hello, World!');
});

