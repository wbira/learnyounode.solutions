var fs = require('fs')

function filterDirectiory(directoryName, extension, cb) {
    fs.readdir(directoryName, (err, files) => {
        if (err) cb(err)
        else {
            var listOfFilesWithGivenExtension = files.filter((file) => {
                var fileExtension = file.split('.')[1]
                return fileExtension === extension
            });
            cb(null, listOfFilesWithGivenExtension)
        }
    })
}

module.exports = filterDirectiory