const fs = require('fs')

var pathToDirectory = process.argv[2]
var extension = process.argv[3]

fs.readdir(pathToDirectory, (err, files) => {
    var listOfFilesWithGivenExtension = files.filter((file) => {
        var fileExtension = file.split('.')[1]
        return fileExtension === extension
    });
    listOfFilesWithGivenExtension.map((file) => console.log(file))
})