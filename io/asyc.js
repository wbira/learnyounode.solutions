const fs = require('fs')

var pathToFile = process.argv[2]

fs.readFile(pathToFile, 'utf8', (error, data) => {
    console.log(data.split('\n').length - 1)
})