const fs = require('fs')
var path = require('path')

var pathToDirectory = process.argv[2]
var extension = process.argv[3]

fs.readdir(pathToDirectory, (err, files) => {
    var listOfFilesWithGivenExtension = files.filter((file) => {
        return path.extname(file) === '.' + extension
    });
    listOfFilesWithGivenExtension.map((file) => console.log(file))
})