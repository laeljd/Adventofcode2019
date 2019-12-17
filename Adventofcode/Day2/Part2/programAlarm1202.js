// Fuel required to launch

const util = require("../../utilities")

function modData(data){
    var d = data;
    d = d.split(',').map(Number);
    // console.log(d);
    return d;
}

var data = util.readFileMod('./Day2/Part2/inputProgramAlarm1202.txt', modData);

data = [1,1,1,4,99,5,6,0,99];

function calcInstrunction(data, instructionPointer){
    if(data.length > 0){
        for(var pointer = 0; (pointer < data.length && data[pointer] != 99);){
            var instrunction = data[pointer];
            pointer ++;
            var parameter1 = data[pointer];
            pointer ++;
            var parameter2 = data[pointer];
            pointer ++;
            
            switch(instrunction){
                case 1:
                    data[pointer] = parameter1 + parameter2;
                break;
                case 2:
                    data[pointer] = parameter1 * parameter2;
                break;
                default:
                break;
            }
        };
    }
}

function calcAlarm(data, outputFind){
    if(data.length > 0){
        for(var index = 0; (index < data.length && data[index] != 99); index += 4){
            var calc = (100 * data[index + 1]) + data[index + 2];

            if(calc == outputFind){
                console.log(calc);
                return calc;
            }
        };
    }
    return data;
}

data[1] = 12;
data[2] = 2;

calcAlarm(data, 1202);

// console.log(data[0]);