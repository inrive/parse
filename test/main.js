
console.log("fddsds");

const  wiki = require('./stepByStepParse/parseWithAdded');

(async()=>{

await wiki.initialize('https://en.wikipedia.org/wiki/Graphical_Network_Simulator-3');

let results = await wiki.getResults(4);

console.log(results);
require('fs').writeFile(

    './public/parseResults/my11.json',

    JSON.stringify(results),

    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
);
})();

function taimer() {

    const  site111 = require('./stepByStepParse/secondParseOfAll');

}

setTimeout(taimer, 12000);

const  site = require('./servers/startLocalServer');

