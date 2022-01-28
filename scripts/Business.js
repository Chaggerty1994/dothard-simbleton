

export const bizzy = ( bizyObject ) => {
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