const validator = require('validator')
const noteMessage = require('./notes')

const message = noteMessage()
console.log(message)

console.log(validator.isURL('revolution.ca'))