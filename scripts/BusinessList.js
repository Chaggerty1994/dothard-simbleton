import { getBizzy } from "./database.js";

import { bizzy } from "./Business.js"


const contentTarget = document.querySelector(".bizzies")

const bizList = () => {

    const bizArray = getBizzy()

    contentTarget.innerHTML = "<h1>BizzieZ</h1>"

    bizArray.forEach(
        (bizyObject) => {
            contentTarget.innerHTML += bizzy(bizyObject)
        }
    );
    return bizArray
}



