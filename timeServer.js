var net = require('net')

function getCurrentDate() {
    var date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
}

var port = process.argv[2]
var server = net.createServer((socket) => {
    var date = getCurrentDate()
        socket.end(date + '\n')
})

server.listen(port)