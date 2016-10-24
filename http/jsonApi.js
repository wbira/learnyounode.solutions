const http = require('http')
const url = require('url')

var portNumber = process.argv[2]

function parseTime(query) {
    var date = new Date(query.iso);
    var obj = {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    }
    return JSON.stringify(obj);
}

function getUnitTime(query) {
    var date = new Date(query.iso);
    return JSON.stringify({ unixtime: date.getTime() })
}

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        var json = '',
            urlObject = url.parse(req.url, true);

        switch (urlObject.pathname) {
            case "/api/parsetime":
                json = parseTime(urlObject.query);
                break;
            case "/api/unixtime":
                json = getUnitTime(urlObject.query);
                break;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(json);
        res.end();
    }
});

server.listen(portNumber);