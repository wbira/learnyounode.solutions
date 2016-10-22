
var result = process.argv.reduce(function(previousValue, currentValue){
        var value = Number(currentValue);
        return Number.isNaN(value) ? previousValue : previousValue + value;
},0);

console.log(result);