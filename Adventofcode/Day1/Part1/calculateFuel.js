// Fuel required to launch

const util = require("../../utilities")

function modData(data){
    var d = data;
    d = d.split(/\r\n/);
    return d;
}

var data = util.readFileMod('./Day1/Part1/inputCalculateFuel.txt', modData);

// data = [100756];

function calcFuel(data){
    return data.reduce((acc, elm) => acc + (Math.floor(elm / 3) - 2), 0);
}

console.log(calcFuel(data));