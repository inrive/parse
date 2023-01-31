
    

const parseRes = require('../public/parseResults/my.json')
const Developer = /Developer|Разработчик/
const Initial_release = /Initial.release../
const Stable_release = /Version|Последняя.версия|3.31/
const Repository = /Repository/
const Written_in = /Written.in|Написана.на/
const Type = /Type|Тип/
const License = /License|Лицензия/
const Website = /Website|Сайт/
const Operating_system = /система|Operating.system/
const Platform = /Platform|платформа/
const Languages = /интерфейса/
var myJSON = JSON.stringify(parseRes[0]);
myJSON = myJSON.slice(0, 169) + myJSON.slice(170);
myJSON = myJSON.slice(0, 180) + myJSON.slice(181);
console.log(myJSON);

let tables = ['Developer','Initial_release','Stable_release','Repository','Written_in','Type,License','Website','Operating_system','Platform','Languages']
let tablesPUST = []
let tables1 = [Developer,Initial_release,Stable_release,Repository,Written_in,Type,License,Website,Operating_system,Platform,Languages]
let results = []
let ind
let char
let stroka
let tab = []

let ind1
let i




for(i= 0; i<11; i++){
    stroka = null
    results[i] = myJSON.match(tables1[i])
    if(results[i] == null){

        tablesPUST[i] = "null"

    }else {

        ind = results[i].index
        
        char = myJSON[ind+1]
        ind = myJSON.indexOf(' ',ind)
        if(myJSON.indexOf('@',ind) == -1){
            ind1 = myJSON.indexOf('"',ind)

        }else
        ind1 = myJSON.indexOf('@',ind)
        
        tablesPUST[i] = myJSON.slice(ind, ind1)
    }


}

console.log(tablesPUST);
require('fs').writeFile(

    './public/parseResults/Graphical_Network_Simulator-3.json',

    JSON.stringify(tablesPUST),

    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
)




var myJSON = JSON.stringify(parseRes[1]);

console.log(myJSON);

tables = ['Developer','Initial_release','Stable_release','Repository','Written_in','Type,License','Website','Operating_system','Platform','Languages']
tablesPUST = []
tables1 = [Developer,Initial_release,Stable_release,Repository,Written_in,Type,License,Website,Operating_system,Platform,Languages]
results = []
ind
char
stroka
tab = []
ind1
i




for(i= 0; i<11; i++){
    stroka = null
    results[i] = myJSON.match(tables1[i])
    if(results[i] == null){

        tablesPUST[i] = "null"

    }else {

        ind = results[i].index
        
        char = myJSON[ind+1]
        ind = myJSON.indexOf(' ',ind)
        if(myJSON.indexOf('@',ind) == -1){
            ind1 = myJSON.indexOf('"',ind)

        }else
        ind1 = myJSON.indexOf('@',ind)
        
        tablesPUST[i] = myJSON.slice(ind, ind1)
    }


}

console.log(tablesPUST);
require('fs').writeFile(

    './public/parseResults/Cisco_Packet_Tracer.json',

    JSON.stringify(tablesPUST),

    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
)




var myJSON = JSON.stringify(parseRes[2]);

console.log(myJSON);
tables = ['Developer','Initial_release','Stable_release','Repository','Written_in','Type,License','Website','Operating_system','Platform','Languages']
tablesPUST = []
tables1 = [Developer,Initial_release,Stable_release,Repository,Written_in,Type,License,Website,Operating_system,Platform,Languages]
results = []
ind
char
stroka
tab = []
ind1
i




for(i= 0; i<11; i++){
    stroka = null
    results[i] = myJSON.match(tables1[i])
    if(results[i] == null){

        tablesPUST[i] = "null"

    }else {

        ind = results[i].index
        
        char = myJSON[ind+1]
        ind = myJSON.indexOf(' ',ind)
        if(myJSON.indexOf('@',ind) == -1){
            ind1 = myJSON.indexOf('"',ind)

        }else
        ind1 = myJSON.indexOf('@',ind)
        
        tablesPUST[i] = myJSON.slice(ind, ind1)
    }


}

console.log(tablesPUST);
require('fs').writeFile(

    './public/parseResults/Dynamips.json',

    JSON.stringify(tablesPUST),

    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
)


var myJSON = JSON.stringify(parseRes[3]);
myJSON = myJSON.slice(0, 121) + myJSON.slice(122);


console.log(myJSON);
tables = ['Developer','Initial_release','Stable_release','Repository','Written_in','Type,License','Website','Operating_system','Platform','Languages']
tablesPUST = []
tables1 = [Developer,Initial_release,Stable_release,Repository,Written_in,Type,License,Website,Operating_system,Platform,Languages]
results = []
ind
char
stroka
tab = []
ind1
i

for(i= 0; i<11; i++){
    stroka = null
    results[i] = myJSON.match(tables1[i])
    if(results[i] == null){

        tablesPUST[i] = "null"

    }else {

        ind = results[i].index
        char = myJSON[ind+1]
        ind = myJSON.indexOf(' ',ind)
        if(myJSON.indexOf('@',ind) == -1){

            ind1 = myJSON.indexOf('"',ind)

        }else

        ind1 = myJSON.indexOf('@',ind)

        tablesPUST[i] = myJSON.slice(ind, ind1)

    }


}

console.log(tablesPUST);
require('fs').writeFile(

    './public/parseResults/ns-3.json',

    JSON.stringify(tablesPUST),

    function (err) {

        if (err) {

            console.error('Crap happens');
            
        }
    }
)