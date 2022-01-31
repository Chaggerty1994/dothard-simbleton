// importing the getBizzy copy af the bizzy array in database

import { getBizzy } from "./database.js";

// importing the bizzy function from buisiness.js

import { bizzy } from "./Business.js"

// declaring a variable whos value is the class of container 
// in my  index.html

const contentTarget = document.querySelector("#container")

// declaring and exporting a function with no parameter 


export const bizList = () => {

    // declaring a variable whos value is a copy of the database array 
    const bizArray = getBizzy()

    // what is content target? 
    // i know this is adding an html string to my inner html 
    // on indenx.html
    contentTarget.innerHTML = "<h1>Active BizzieZ</h1>"

        //  iterating my biz array from the database
        // using the for each method taking a bizObject
        // as a parameter and invoking my bizzy function 
        // with the biz object as its parameter
        // then adding each buisiness and its info to the innerHTML
    bizArray.forEach(
        (bizyObject) => {
            contentTarget.innerHTML += bizzy(bizyObject)
        }
    );
    
}



