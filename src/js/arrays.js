//materialize

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
        accordion: false
    });
});


//button Done

let done = document.querySelector('#arrays-simple__done');
done?.addEventListener('click', (e) => {
    e.preventDefault();

    let elements = [];
    let data = document.querySelectorAll("#arrays-simple__data");

    for (let i = 0; i < data.length; i++) {
        let d = data[i].value;
        if (isNaN(d)) {
            elements.push(d);
        } else {
            elements.push(Number(d));
        }
    }

    let old = [];
    for (let i = 0; i < data.length; i++) {
        if (isNaN(data[i].value)) {
            old.push(' ' + '"' + data[i].value + '"');
        } else {
            old.push(' ' + data[i].value);
        }
    }

    console.log(old)
    console.log(elements)

    let del = elements.pop();
    console.log(elements)

    let result = [];
    for (let i = 0; i < elements.length; i++) {
        if (isNaN(elements[i])) {
            result.push(' ' + '"' + elements[i] + '"');
        } else {
            result.push(' ' + elements[i]);
        }
    }

    document.querySelector('#arrays-simple__old').innerHTML = 'let array = [' + old + '];';
    document.querySelector("#arrays-simple__delete").innerHTML = del;
    document.querySelector('#arrays-simple__result').innerHTML = 'let array = [' + result + '];';
})


//button Add

function addInput() {
    let parent = document.querySelector('#arrays__input');
    let input = document.createElement('div');
    input.innerHTML = `<input id="arrays-simple__data" type="text">`;
    parent.appendChild(input);

}

let add = document.querySelector('#arrays-simple__add');
add?.addEventListener('click', (e) => {
    e.preventDefault();
    addInput();
})


//button Reset

let reset = document.querySelector('#arrays-simple__reset');
reset?.addEventListener('click', (e) => {
    e.preventDefault();

    let data = document.querySelectorAll("#arrays-simple__data");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector("#arrays__input").innerHTML = "";
    document.querySelector("#arrays-simple__result").innerHTML = "";
    document.querySelector("#arrays-simple__delete").innerHTML = "";
    document.querySelector('#arrays-simple__old').innerHTML = "";
})


//button Check

let check = document.querySelector('.arrays__check');
check?.addEventListener('click', (e) => {
    e.preventDefault();

    let fruits = ["Вишня", "Абрикос", "Черника"];
    alert(fruits.pop());
    alert(fruits);
})