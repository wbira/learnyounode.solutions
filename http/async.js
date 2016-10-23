const http = require('http')

var resultContent = [];

var counter = 3;
for (let i = 0; i < 3; i++) {
    http.get(process.argv[i + 2], (response) => {
        var data = []
        response.setEncoding('utf8')
        response.on('error', console.error)
        response.on('data', (chunk) => {
            data.push(chunk)
        }).on('end', () => {
            counter--;
            resultContent[i] = data;
            if (!counter)
                printer(resultContent)
        })
    })
}

function mergeData(previousValue, currentValue) {
    return previousValue += currentValue;
}

function printer(data) {
    console.log(data[0].reduce(mergeData))
    console.log(data[1].reduce(mergeData))
    console.log(data[2].reduce(mergeData))
}