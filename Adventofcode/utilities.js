const fs = require("fs")
/*
Funções genericas para usar quando precisar
*/

module.exports.readFileMod = function (file, mod) {
    var data = fs.readFileSync(file, 'utf8');
    if(mod){
        return mod(data);
    }
    return data;
};