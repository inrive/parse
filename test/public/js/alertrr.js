const tables = ['Developer','Initial_release','Stable_release','Repository','Written_in','Type','License','Website','Operating_system','Platform','Languages']

$(document).ready(function() {

    // mainDiv = document.createElement("div")
    // mainDiv.className = "results"
    
    // var partResults = document.createElement("div")
    // partResults.className = "partResults"

    // var leftDiv = document.createElement("div")
    // leftDiv.className = "leftDiv"

    // tables.forEach(el =>{
    //     var input = document.createElement("input")
    //     input.type = "textbox"
    //     input.innerText = el
    //     input.value = el
    //     leftDiv.appendChild(input)
    // })

    // partResults.appendChild(leftDiv)
    // mainDiv.appendChild(partResults)

})

function selectChange(params) {
    
    var currentSelect = document.getElementById("hider2").value
    var divId = ""

    switch(currentSelect)
    {
        case "1":
            divId = "model"
            break;

        case "2":
            divId = "integr"
            break;

        case "3":
            divId = "platforma"
            break;

        case "4":
            divId = "JavaScript"
            break;

        case "5":
            divId = "poisk"
            break;

        case "6":
            divId = "text"
            break;

        case "7":
            divId = "tabl"
            break;

    }

    var div = document.getElementById(divId)
    var vibor = document.getElementById('vibor').querySelectorAll('div')

    vibor.forEach(el => {

        el.className = "displayNone"

    })

    div.className = "displayBlock"

}

function getJSON() {

    var mainDiv = $('.mainDiv')

    var partResults = $('.partResults')

    var removesDiv = document.querySelectorAll('div[class=rightDiv]')


    removesDiv.forEach(el => {

        el.parentNode.removeChild(el)

    })

    var currentSelect = document.getElementById("hider2").value
    var divId = ""

    switch(currentSelect)
    {

        case "1":
            divId = "model"
            break;

        case "2":
            divId = "integr"
            break;

        case "3":
            divId = "platforma"
            break;

        case "4":
            divId = "JavaScript"
            break;

        case "5":
            divId = "poisk"
            break;

        case "6":
            divId = "text"
            break;

        case "7":
            divId = "tabl"
            break;

    }

    var div = document.getElementById(divId)
    var checkBoxes = div.querySelectorAll('input[type=checkbox]')
    var needJSON = []

    checkBoxes.forEach(checkbox => {

        if(checkbox.checked)
            needJSON.push(checkbox.name)

    });

    needJSON.forEach(el => {

        $.ajax({

            url: './public/parseResults/' + el + '.json', 
            type: 'get',
            dataType:'json',
            success: function (data) {

                var rightDiv = document.createElement("div")
                rightDiv.className = "rightDiv"
                data.forEach(el => {

                    var input = document.createElement("input")
                    input.type = "textbox"
                    input.innerText = el
                    input.value = el
                    input.readOnly = true
                    rightDiv.appendChild(input)

                })

            partResults.append(rightDiv)
            
            }
        });  
    })
}