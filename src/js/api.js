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

document?.addEventListener("click", function (event) {
    if (!event.target.matches("#yesno-button")) return;

    fetch("https://yesno.wtf/api")
        .then((response) => response.json())
        .then((data) => getAnswer(data))
        .catch(() => catchError());
});

function getAnswer(data) {
    const answer = document.getElementById("answer");
    const gif = document.getElementById("gif");
    const error = document.getElementById("yesno-error");

    error.innerHTML = "";
    answer.innerHTML = data.answer;
    gif.src = data.image;
}

function catchError() {
    const error = document.getElementById("yesno-error");
    error.innerHTML = "Советы закончились :(";
}

document?.addEventListener("click", function (event) {
    if (!event.target.matches("#activity-button")) return;

    fetch("https://www.boredapi.com/api/activity/")
        .then((response) => response.json())
        .then((data) => getActivity(data))
        .catch(() => catchError());
});

function getActivity(data) {
    const activity = document.getElementById("activity");
    const error = document.getElementById("activity-error");

    error.innerHTML = "";
    activity.innerHTML = data.activity;
}

function catchError() {
    error.innerHTML = "Ой, придумайте сами себе занятие!";
}

const container = document.getElementById("pokemon");

document?.addEventListener("click", function (event) {
    if (!event.target.matches("#pokemon-button")) return;

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
    container.innerHTML = "Что-то пошло не так, покемон сбежал.";
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document?.addEventListener("click", function (event) {
    if (!event.target.matches("#cat-button")) return;

    fetch("https://aws.random.cat/meow")
        .then((response) => response.json())
        .then((data) => getCat(data))
        .catch(() => catError());
});

function getCat(data) {
    const cat = document.getElementById("cat");
    const error = document.getElementById("cat-error");

    error.innerHTML = "";
    cat.src= data.file;
}

function catError() {
    error.innerHTML = "Отстаньте от кота";
}