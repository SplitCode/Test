import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert.equal(capitalize('hello'), 'Hello');

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает криво!');
// }

assert.equal(capitalize(''), '');

// if (capitalize('') !== '') {
//   throw new Error('Функция работает криво!');
// }

console.log('Все тесты пройдены!');