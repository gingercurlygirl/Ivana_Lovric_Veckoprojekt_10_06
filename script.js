console.log("Hello Jedi!")

const getInfoButton = document.querySelector('#get-info-button')
const displayInfo = document.querySelector('.display-info')

getInfoButton.addEventListener('click', getInfoFromApi)

async function getInfoFromApi() {
    const baseUrl = 'https://swapi.dev/api/people/10/'
    const response = await fetch(baseUrl)
    const data = await response.json()
    console.log(data)
    let html = ""
    let keys = Object.keys(data)
    for (let i = 0; i < keys.length; i++) {
        html += "<div>" + keys[i].toUpperCase() + ": " + data[keys[i]] + "</div>"
    }
    displayInfo.innerHTML = html
}


const getPeopleButton = document.querySelector('#get-people-button')
const displayPeople = document.querySelector('.display-people')
const level2Input = document.querySelector('#level-2-input')

getPeopleButton.addEventListener('click', getPeopleFromApi)

async function getPeopleFromApi() {
    const url = 'https://swapi.dev/api/people/?search=' + level2Input.value
    console.log(url)
    const response = await fetch(url)
    const data_people = await response.json()
    console.log(data_people)
    let html = ""
    let people = data_people.results
    for (let i = 0; i < people.length; i++) {
        let keys = Object.keys(people[i])
        html += "Number: " + (i + 1)
        for (let j = 0; j < keys.length; j++) {
            html += "<div>" + keys[j].toUpperCase() + ": " + people[i][keys[j]] + "</div>"
        }
        html += "<br>"
    }
    displayPeople.innerHTML = html
}


const getPlanetButton = document.querySelector('#get-planet-button')
const displayPlanet = document.querySelector('.display-planet')
const level3Input = document.querySelector('#level-3-input')

getPlanetButton.addEventListener('click', getPlanetFromApi)

async function getPlanetFromApi() {
    const url_planet = 'https://swapi.dev/api/planets/?search=' + level3Input.value
    console.log(url_planet)
    const response = await fetch(url_planet)
    const data_planet = await response.json()
    console.log(data_planet)
    let html = ""
    let planets = data_planet.results
    for (let i = 0; i < planets.length; i++) {
        let keys = Object.keys(planets[i])
        html += "Number: " + (i + 1)
        for (let j = 0; j < keys.length; j++) {
            html += "<div>" + keys[j].toUpperCase() + ": " + planets[i][keys[j]] + "</div>"
        }
        html += "<br>"
    }
    displayPlanet.innerHTML = html

}


const getPeopleButtonLevel4 = document.querySelector('#get-people-button-level4')
const displayLevel4 = document.querySelector('.display-level4')
const level4Input = document.querySelector('#level-4-input')

getPeopleButtonLevel4.addEventListener('click', getPeopleLevel4FromApi)

async function getPeopleLevel4FromApi() {
    const url = 'https://swapi.dev/api/people/?search=' + level4Input.value
    console.log(url)
    const response = await fetch(url)
    const data_people = await response.json()
    console.log(data_people)
    let html = ""
    let people = data_people.results
    for (let i = 0; i < people.length; i++) {
        let keys = Object.keys(people[i])
        html += "Number: " + (i + 1)
        for (let j = 0; j < keys.length; j++) {
            if (keys[j] == "homeworld") {
                const url_homeworld = people[i]["homeworld"]
                const response_homeworld = await fetch(url_homeworld)
                const homeworld = await response_homeworld.json()

                html += "<div>" + keys[j].toUpperCase() + ": " + homeworld.name + "</div>"
            }
            else {
                html += "<div>" + keys[j].toUpperCase() + ": " + people[i][keys[j]] + "</div>"
            }
        }
        html += "<br>"
    }
    displayLevel4.innerHTML = html
}
