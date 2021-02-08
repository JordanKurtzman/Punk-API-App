const searchBeerByName = async (beerName) => {
    const response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`)
    if(response.status === 200){
        return data = response.json()   
    }else throw new Error('Unable to fetch data')
}

const searchBeerByFoodPairing = async (foodName) => {
    const response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${foodName}`)
    if (response.status === 200) {
        return data = response.json()
    } else throw new Error('Unable to fetch data')
}

const searchMellowBeers = async() => {
    const response = await fetch(`https://api.punkapi.com/v2/beers?ibu_lt=20`)
    if (response.status === 200) {
        return data = response.json()
    } else throw new Error('Unable to fetch data')
}

const searchBitterBeers = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers?ibu_gt=70`)
    if (response.status === 200) {
        return data = response.json()
    } else throw new Error('Unable to fetch data')
}

const randomBeer = async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers/random')
    if(response.status === 200){
        return data = response.json()
    } else throw new Error('Unable to fetch data')
}