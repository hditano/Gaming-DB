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
        myArray = data.slice(0, 21);

        for (let array of myArray) {
            console.log(array.thumbnail);
        }
        renderData()
    })


function renderData() {
    for (let i = 0; i < myArray.length; i++) {
        mainCard.innerHTML += `<div class="cards">
                                <img class="cards-thumbnail"  src="${myArray[i].thumbnail}">
                                    <div class="overlay image-blur">
                                        <div class="text-title noselect">${myArray[i].title}</div>
                                        <p class ="text-content noselect">${myArray[i].genre}</p>
                                    </div>
                                </div>`
    }
}
