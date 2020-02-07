const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.sum(2, 2)).toBe(4)
})