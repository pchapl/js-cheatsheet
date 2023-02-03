document?.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.collapsible');
    let instances = M.Collapsible.init(elems, {
        accordion: false
    });
});

document?.addEventListener("DOMContentLoaded", function (event) {
    fetch(
        "https://api.nasa.gov/planetary/apod?api_key=jg4kSp5vTeI5dPMsPdSBYzn7g0hIVocOuXl5cQt7"
    )
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector(".title");
            title.innerHTML = data.title;
            const image = document.querySelector(".image");
            image.src = data.url;
            const info = document.querySelector(".info");
            info.innerHTML = data.explanation;
        })
        .catch((error) => console.log(error));
});

document?.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://yesno.wtf/api")
        .then((response) => response.json())
        .then((data) => {
            const answer = document.querySelector(".answer");
            answer.innerHTML = data.answer;
            const img = document.querySelector(".img");
            img.src = data.image;
        })
        .catch((error) => console.log(error));
});

document?.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://www.boredapi.com/api/activity/")
        .then((response) => response.json())
        .then((data) => {
            const activity = document.querySelector(".activity");
            activity.innerHTML = data.activity;
        })
        .catch((error) => console.log(error));
});

const container = document.getElementById("pokemon");

document?.addEventListener("click", function (event) {
    if (!event.target.matches("#button")) return;

    const pokemonNumber = getRandomInt(1, 893);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
        .then((response) => response.json())
        .then((data) => renderPokemon(data))
        .catch(() => renderError());
});

function renderPokemon(data) {
    container.innerHTML = "";
    let img = document.createElement("img");
    img.src = data.sprites.front_default;
    img.alt = data.name;

    let text = document.createElement("p");
    text.className = "pokemonName";
    text.innerHTML = data.name;

    container.appendChild(text);
    container.appendChild(img);
}

function renderError() {
    container.innerHTML = "Whoops, something went wrong. Please try again!";
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}