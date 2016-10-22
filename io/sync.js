const fs = require('fs')

var pathToFile = process.argv[2]

var numberLinesInFile = fs.readFileSync(pathToFile, 'utf8').split('\n').length - 1

console.log(numberLinesInFile)

