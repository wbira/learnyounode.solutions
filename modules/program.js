const filterDirectiory = require('./filterDir.js')

var directoryName = process.argv[2]
var extension = process.argv[3]

var cb = function(err, files){
    if(err) return console.log(err)

    files.map((file) => console.log(file))
}

filterDirectiory(directoryName, extension, cb)