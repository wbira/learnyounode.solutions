var fs = require('fs')
var path = require('path')

function filterDirectiory(directoryName, extension, cb) {
    fs.readdir(directoryName, (err, files) => {
        if (err) return cb(err)

        var listOfFilesWithGivenExtension = files.filter((file) => {
            return path.extname(file) === '.' + extension
        });
        cb(null, listOfFilesWithGivenExtension)

    })
}

module.exports = filterDirectiory