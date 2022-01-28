// importing the getBizzy copy af the bizzy array in database

import { getBizzy } from "./database.js";

// importing the bizzy function from buisiness.js

import { bizzy } from "./Business.js"

// declaring a variable whos value is the class of container 
// in my  index.html

const contentTarget = document.querySelector("#container")

// declaring and exporting a function with no parameter
export const bizList = () => {

    const bizArray = getBizzy()

    contentTarget.innerHTML = "<h1>Active BizzieZ</h1>"

    bizArray.forEach(
        (bizyObject) => {
            contentTarget.innerHTML += bizzy(bizyObject)
        }
    );
    
}



