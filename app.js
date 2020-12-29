const nameSearchTextInput = document.querySelector("#search-by-name")
const showByName = document.querySelector('#show-by-name')
const foodSearchTextInput = document.querySelector('#search-by-food-pairing')
const showByFood = document.querySelector('#show-by-food-pairing')
const mellowButton = document.querySelector("#mellow-button")
const mellowButtonArea = document.querySelector("#mellow-button-area")
const bitterButton = document.querySelector('#bitter-button')
const bitterButtonArea = document.querySelector('#bitter-button-area')

nameSearchTextInput.addEventListener('change', (e) => {
    showByName.innerHTML = ''
    searchBeerByName(e.target.value).then((result) => {
        const html = result.map((beer) => {
            return `<p>Name: ${beer.name}</p><p>Tagline: ${beer.tagline}</p><p>Description: ${beer.description}</p>`
        }).join('')
        showByName.insertAdjacentHTML('afterbegin', `<p>${html}</p>`)
    }).catch((error) => {
        console.log(error)
    })
})

foodSearchTextInput.addEventListener('change', (e) => {
    showByFood.innerHTML = ''
    searchBeerByFoodPairing(e.target.value).then((result) => {
        const html = result.map((beer) => {
            return `<p>Name: ${beer.name}</p><p>Tagline: ${beer.tagline}</p><p>Food pairing: ${beer.food_pairing}</p>`
        }).join('')
        showByFood.insertAdjacentHTML('afterbegin', `<p>${html}</p>`)
    }).catch((error) => {
        console.log(error)
    })
})

mellowButton.addEventListener('click', (e) => {
    
    searchMellowBeers().then((data) => {
        const html = data.map((beer) => {
            return `<p>Name: ${beer.name}</p><p>Tagline: ${beer.tagline}</p><p>Description: ${beer.description}</p>`
        }).join('')
        mellowButtonArea.insertAdjacentHTML('afterbegin', `<p>${html}</p>`)
    }).catch((error) => {
        console.log(error)
    })
})

bitterButton.addEventListener('click', (e) => {

    searchBitterBeers().then((data) => {
        const html = data.map((beer) => {
            return `<p>Name: ${beer.name}</p><p>Tagline: ${beer.tagline}</p><p>Description: ${beer.description}</p>`
        }).join('')
        bitterButtonArea.insertAdjacentHTML('afterbegin', `<p>${html}</p>`)
    }).catch((error) => {
        console.log(error)
    })
})
