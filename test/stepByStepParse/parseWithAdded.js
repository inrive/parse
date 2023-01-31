const puppeteer = require('puppeteer');

const SUBWIKI_URL = (wiki) => `${wiki}`;


const self = {
    browser: null,
    page: null,

    initialize: async (wiki) => {

        self.browser = await puppeteer.launch({

            headless: false,
        
        });

        self.page = await self.browser.newPage();

        await  self.page.goto(SUBWIKI_URL(wiki), {waitUntil: 'networkidle0'});

    },

    getResults: async (nr) => {

        let results = [];

        let new_results = await self.parseResults();

        results = [ ...results, ...new_results ];

        if (results.length < nr ){



                
            await self.page.goto('https://ru.wikipedia.org/wiki/Cisco_Packet_Tracer',  { waitUntil: 'networkidle2'});

            new_results = await self.parseResults();

            results = [ ...results, ...new_results ];



            await self.page.goto('https://ru.wikipedia.org/wiki/Dynamips',  { waitUntil: 'networkidle2'});

            new_results = await self.parseResults();

            results = [ ...results, ...new_results ];



            await self.page.goto('https://en.wikipedia.org/wiki/Ns_(simulator)',  { waitUntil: 'networkidle2'});

            new_results = await self.parseResults();

            results = [ ...results, ...new_results ];

            }

        

        return results.slice(0, nr);

    },

    parseResults: async () => {

        let elements = await self.page.$$('table[class*=infobox]');
        let results = [];
        for(let element of elements) {

            let table = await element.$eval(('tbody'), node => node.innerText.trim());
            let table0 = table.replace(/\n/g,'@');
            let table1 = table0.replace(/\t/g,' ');
            
            results.push({
                table1,
                //

            })
        }

    return results;
    
    }

}

module.exports =  self;