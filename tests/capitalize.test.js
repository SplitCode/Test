import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает криво!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает криво!');
}

console.log('Все тесты пройдены!');