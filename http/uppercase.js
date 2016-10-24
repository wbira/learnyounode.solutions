const http = require('http')
const streamMapper = require('through2-map')

var portNumber = process.argv[2]

function uppercase(chunk){
    return chunk.toString().toUpperCase();
}

const server = http.createServer((req, res) => {
    if(req.method === 'POST'){
        req.pipe(streamMapper(uppercase)).pipe(res)
    }
});

server.listen(portNumber);