const chalk = require('chalk')
const noteMessage = require('./notes')

const command = process.argv[2]

if(command === 'add') {
    console.log("adding note")
} else if(command === 'remove') {
    console.log("removeign note")
}