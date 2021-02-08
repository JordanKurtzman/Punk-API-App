const nameSearchTextInput = document.querySelector("#search-by-name")
const showByName = document.querySelector('#show-by-name')
const foodSearchTextInput = document.querySelector('#search-by-food-pairing')
const showByFood = document.querySelector('#show-by-food-pairing')
const mellowButton = document.querySelector("#mellow-button")
const mellowButtonArea = document.querySelector("#mellow-button-area")
const bitterButton = document.querySelector('#bitter-button')
const bitterButtonArea = document.querySelector('#bitter-button-area')
const randomButton = document.querySelector('#random-button')
const randomButtonArea = document.querySelector('#random-button-area')

nameSearchTextInput.addEventListener('change', (e) => {
    showByName.innerHTML = ''
    searchBeerByName(e.target.value).then((result) => {
    const html = result.map((beer) => {
            const name = beer.name
            const tagline = beer.tagline
            const description = beer.description
            return `<div class="beerlist">${name}</div><div class="collapsible-content"><div class="beerlist__tagline"><span class="beerlist__heading">Tagline:</span> ${tagline}</div><div class="beerlist__description"><span class="beerlist__heading">Description:</span> ${description}</div></div>`
        }).join('')
        showByName.insertAdjacentHTML('afterbegin', `<div>${html}</div>`)
    }).catch((error) => {
        console.log(error)
    })
})

foodSearchTextInput.addEventListener('change', (e) => {
    showByFood.innerHTML = ''
    searchBeerByFoodPairing(e.target.value).then((result) => {
        const html = result.map((beer) => {
            const name = beer.name
            const tagline = beer.tagline
            const foodPairing = beer.food_pairing
            return `<div class="beerlist">${name}</div><div class="collapsible-content"><div class="beerlist__tagline"><span class="beerlist__heading">Tagline:</span> ${tagline}</div><div class="beerlist__description"><span class="beerlist__heading">Food pairing:</span> ${foodPairing}</div></div>`

        }).join('')
        showByFood.insertAdjacentHTML('afterbegin', `<p>${html}</p>`)
    }).catch((error) => {
        console.log(error)
    })
})

mellowButton.addEventListener('click', (e) => {
    
    searchMellowBeers().then((data) => {
        const html = data.map((beer) => {
            const name = beer.name
            const tagline = beer.tagline
            const description = beer.description
            return `<div class="beerlist">${name}</div><div class="collapsible-content"><div class="beerlist__tagline"><span class="beerlist__heading">Tagline:</span> ${tagline}</div><div class="beerlist__description"><span class="beerlist__heading">Description:</span> ${description}</div></div>` 
        }).join('')
        mellowButtonArea.insertAdjacentHTML('afterbegin', `<p>${html}</p>`)
    }).catch((error) => {
        console.log(error)
    })
})

bitterButton.addEventListener('click', (e) => {

    searchBitterBeers().then((data) => {
        const html = data.map((beer) => {
            const name = beer.name
            const tagline = beer.tagline
            const description = beer.description
            return `<div class="beerlist">${name}</div><div class="collapsible-content"><div class="beerlist__tagline"><span class="beerlist__heading">Tagline:</span> ${tagline}</div><div class="beerlist__description"><span class="beerlist__heading">Description:</span> ${description}</div></div>`
        }).join('')
        bitterButtonArea.insertAdjacentHTML('afterbegin', `<p>${html}</p>`)
    }).catch((error) => {
        console.log(error)
    })
})

randomButton.addEventListener('click', (e) => {
    randomButtonArea.innerHTML = ''
    randomBeer().then((data) => {
        const html = data.map((beer) => {
            const name = beer.name
            const tagline = beer.tagline
            const description = beer.description
            return `<div class="beerlist">${name}</div><div class="collapsible-content"><div class="beerlist__tagline"><span class="beerlist__heading">Tagline:</span> ${tagline}</div><div class="beerlist__description"><span class="beerlist__heading">Description:</span> ${description}</div></div>`


        })
        randomButtonArea.insertAdjacentHTML('afterbegin', `<p>${html}</p>`)
    }).catch((error) => {
        console.log(error)
    })
})

