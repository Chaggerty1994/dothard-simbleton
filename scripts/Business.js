
// defining and exporting a function that accepts a business as an argument
// the function returns an html string

export const bizzy = ( bizyObject ) => {
    // returning an html string. inside the string is a section 
    // with a class of bizzy
    // an <h2> tag with a string interpolation inside accessing 
    // the companyName property of the business object
    // a div with a class of bizzy__address
    // inside of that dive are two string interpolations
    // accessing the street address and city address properties of 
    // the bizzy object
    return `
        <section class="bizy">
            <h2 class="bizy__name">${bizyObject.companyName}</h2>
            <div class="bizy__address">
                 ${bizyObject.addressFullStreet}
                 ${bizyObject.addressCity}
            </div>
        </section>
    `
}