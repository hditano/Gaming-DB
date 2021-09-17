const mainCard = document.querySelector('.main-card');
let myArray = [];
let myObject = {};

fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key": "e8ad975033mshf80bbc4258e4980p141115jsn28405d151aa0"
        }
    })
    .then(response => response.json())
    .then(data => {
        const randomStart = Math.floor(Math.random() * data.length);
        myArray = data.slice(randomStart, randomStart + 21);
        renderData()
    })


function renderData() {
    for (let i = 0; i < myArray.length; i++) {
        mainCard.innerHTML += `<div class="cards">
                                <img class="cards-thumbnail"  src="${myArray[i].thumbnail}">
                                    <div class="overlay image-blur">
                                        <div class="text-title noselect"><a href="${myArray[i].game_url}" target="_blank"><span class="text-name">${myArray[i].title}</span></a> by <span class="text-dev">${myArray[i].developer}</span></div>
                                        <p class="text-content noselect">${myArray[i].genre}</p>
                                        <p class="short-content noselect">${myArray[i].short_description}</p>
                                    </div>
                                </div>`
    }
}
