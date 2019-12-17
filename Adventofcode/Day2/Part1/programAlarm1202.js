// Fuel required to launch

const util = require("../../utilities")

function modData(data){
    var d = data;
    d = d.split(',').map(Number);
    // console.log(d);
    return d;
}

var data = util.readFileMod('./Day2/Part1/inputProgramAlarm1202.txt', modData);

// data = [1,1,1,4,99,5,6,0,99];

function calcAlarm(data){
    if(data.length > 0){
        for(var index = 0; (index < data.length && data[index] != 99); index += 4){
            switch(data[index]){
                case 1: 
                    data[data[index + 3]] = data[data[index + 1]] + data[data[index + 2]];
                break;
                case 2:
                    data[data[index + 3]] =  data[data[index + 1]] * data[data[index + 2]];
                break;
                default:
                break;
            }
        };
    }
    return data;
}

data[1] = 12;
data[2] = 2;

calcAlarm(data);

console.log(data[0]);