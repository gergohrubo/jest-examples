const axios = require('axios')

const functions = {
  sum: (num1, num2) => num1 + num2,
  isNull: () => null,
  isTruthy: boolean => boolean,
  returnObject: object => object,
  fetchUser: () => axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(error => 'error')
}

module.exports = functions