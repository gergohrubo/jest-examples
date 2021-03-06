const functions = require('./functions')

beforeAll(() => console.log('A function that runs before the tests are launched'))
afterAll(() => console.log('A function that runs after the tests finished'))

beforeEach(() => console.log('A function that runs before EACH test is launched'))
afterEach(() => console.log('A function that runs after EACH tests finishes'))

//with the describe block we can assign beforeEach checks only to particular tests
describe('Checking names', () => {
  beforeEach(() => console.log('Checking names'))
  test('Is it Gergo', () => {
    expect('Gergo').toBe('Gergo')
  })
})

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.sum(2, 2)).toBe(4)
})

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.sum(2, 2)).not.toBe(5)
})

test('Checking null', () => {
  expect(functions.isNull()).toBeNull()
})

test('Checking boolean', () => {
  expect(functions.isTruthy(true)).toBeTruthy()
})

test('Checking boolean', () => {
  expect(functions.isTruthy(false)).toBeFalsy()
})

//Objects and arrays should use toEqual and not toBe because of reference type assignment
test('Checking objects', () => {
  expect(functions.returnObject({ isObject: true })).toEqual({ isObject: true })
})

//Regex test
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i)
})

//Arrays
test('See what arrays contain', () => {
  expect(['john', 'blabla', 'admin']).toContain('admin')
})

//Async data
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1)
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
})

//async await syntax
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1)
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
})