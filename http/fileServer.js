const fs = require('fs')
const http = require('http')

var portNumber = process.argv[2]
var filePath = process.argv[3]

const server = http.createServer((req, res) => {
    var fileStream = fs.createReadStream(filePath)
    fileStream.pipe(res)    
});

server.listen(portNumber);