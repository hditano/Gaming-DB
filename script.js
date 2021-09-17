const mainCard = document.querySelector('.main-card');
const sortBtn = document.querySelector('.sort-btn');
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
        renderData(myArray)
    })


function renderData(arr) {
    for (let i = 0; i < arr.length; i++) {
        mainCard.innerHTML += `<div class="cards">
                                <img class="cards-thumbnail"  src="${arr[i].thumbnail}">
                                    <div class="overlay image-blur">
                                        <div class="text-title noselect"><a href="${arr[i].game_url}" target="_blank"><span class="text-name">${arr[i].title}</span></a> by <span class="text-dev">${arr[i].developer}</span></div>
                                        <p class="text-content noselect">${arr[i].genre}</p>
                                        <p class="short-content noselect">${arr[i].short_description}</p>
                                    </div>
                                </div>`
    }
}

function sortAlphabet() {
    mainCard.innerHTML = '';
    let tempArray = {};
    tempArray = myArray;
    tempArray.sort((a, b) => (a.title > b.title) ? 1 : -1);
    renderData(tempArray);
}

function sortYear() {
    mainCard.innerHTML = '';
    let tempArray = {};
    tempArray = myArray;
    tempArray.sort((a, b) => (a.release_date > b.release_date) ? 1 : -1);
    renderData(tempArray);
}

sortBtn.addEventListener('change', (e) => {
    if(e.target.value === 'by_alphabetical') sortAlphabet();
    if(e.target.value === 'by_year') sortYear();
});
