// Fuel required to launch

const util = require("../../utilities")

function modData(data){
    var d = data;
    d = d.split(/\r\n/);
    return d;
}

var data = util.readFileMod('./Day1/Part2/inputCalculateFuel.txt', modData);

// data = [100756];

function calcFuel(data){
    return data.reduce((acc, elm) => acc + doubleChecker(elm), 0);
}

function doubleChecker(fuel){
    var aux = (Math.floor(fuel / 3) - 2);
    if(aux < 0){
        aux = 0;
    }
    else{
        aux += doubleChecker(aux);
    }
    return aux;
}

console.log(calcFuel(data));