const chalk = require('chalk')
// const noteMessage = require('./notes')

// const message = noteMessage()
// console.log(message)

console.log(chalk.green('Hello world!'));

const miles = 18;
const calculateFeet = miles => miles * 5280;
 
console.log(chalk`
    There are {bold 5280 feet} in a mile.
    In {bold ${miles} miles}, there are {cyan.bgRed.bold ${calculateFeet(miles)} feet}.
`);