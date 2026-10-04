const helloWorld = require('../src/index');

test('returns the expected greeting', () => {
  expect(helloWorld()).toBe('Hello, World!');
});