document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
        accordion: false
    });
});

let done = document.querySelector('#arrays-simple__done');
done?.addEventListener('click', (e) => {
    e.preventDefault();

    let elements = [];
    let data = document.querySelectorAll(".arrays-simple__data");

    for (let i = 0; i < data.length; i++) {
        if (isNaN(data[i].value)) {
            elements.push(data[i].value);
        } else {
            elements.push(Number(data[i].value));
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

let item = 0;
function addInput() {
    let string = '<div><input class="arrays-simple__data" type="text" /></div> <div class="arrays-simple__input' + (item + 1) + '"></div>';
    document.querySelector('.arrays-simple__input' + item).innerHTML = string;
    item++;
}

let add = document.querySelector('#arrays-simple__add');
add?.addEventListener('click', (e) => {
    e.preventDefault();
    addInput();
})

let reset = document.querySelector('#arrays-simple__reset');
reset?.addEventListener('click', (e) => {
    e.preventDefault();

    let data = document.querySelectorAll(".arrays-simple__data");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };
    document.querySelector(".arrays-simple__input0").innerHTML = "[]";
    document.querySelector("#arrays-simple__result").innerHTML = "";
    document.querySelector("#arrays-simple__delete").innerHTML = "";
    document.querySelector('#arrays-simple__old').innerHTML = "";

})

let check = document.querySelector('.arrays__check');
check?.addEventListener('click', (e) => {
    e.preventDefault();

    let fruits = ["Вишня", "Абрикос", "Черника"];
    alert(fruits.pop());
    alert(fruits);
})