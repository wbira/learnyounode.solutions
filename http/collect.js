const http = require('http')

function countChars(previousValue, currentValue) {
    return previousValue += currentValue.length;
}

function getSentence(previousValue, currentValue) {
    return previousValue += currentValue;
}

var url = process.argv[2]
http.get(url, (response) => {
    var data = []
    response.setEncoding('utf8')
    response.on('error', console.error)
    response.on('data', (chunk) => {
        data.push(chunk)
    }).on('end', () => {
        console.log(data.reduce(countChars, 0))
        console.log(data.reduce(getSentence))
    })
})