const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.sum(2, 2)).toBe(4)
})

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.sum(2, 2)).not.toBe(5)
})

test('Checking null', () => {
  expect(functions.isNull()).toBeNull()
})