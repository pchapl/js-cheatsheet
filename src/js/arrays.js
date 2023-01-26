/*document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
    document.querySelector('code.codep span.hljs-string').innerHTML = `<input id="arrays" type="text">`;
});*/

/*document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code code.code').forEach((el) => {
        hljs.highlightElement(el);
        document.querySelectorAll('pre code code.code span.hljs-string').innerHTML = `<input id="arrays-simple__data" type="text">`;
    });
});*/


//materialize

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
        accordion: false
    });
});


//global

let globalOld = document.querySelector('.arrays__old');
let globalDelete = document.querySelector(".arrays__delete");
let globalResult = document.querySelector('.arrays__result');
let globalInput = document.querySelector(".arrays__input");


//addEventListener

let buttonsDone = document.querySelectorAll('.arrays__button_done');
buttonsDone.forEach(function(done) {
    done?.addEventListener('click', (e) => {
        e.preventDefault();
        donePop();
    })
})

let buttonsAdd = document.querySelectorAll('.arrays__button_add');
buttonsAdd.forEach(function(add) {
    add?.addEventListener('click', (e) => {
        e.preventDefault();
        addInputPop();
    })
})

let buttonsReset = document.querySelectorAll('.arrays__button_reset');
buttonsReset.forEach(function(reset) {
    reset?.addEventListener('click', (e) => {
        e.preventDefault();
        resetPop();
    })
})

let buttonsCheck = document.querySelectorAll('.arrays__check');
buttonsCheck.forEach(function(check) {
    check?.addEventListener('click', (e) => {
        e.preventDefault();
        checkPop();
        checkPush();
    })
})


//add

function addInputPop() {
    let parent = document.querySelector('.arrays__input');
    let input = document.createElement('div');
    input.innerHTML = `<input id="arrays__data" type="text">`;
    parent.appendChild(input);
}


//done

function donePop() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data");

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

    let del = elements.pop();

    let result = [];
    for (let i = 0; i < elements.length; i++) {
        if (isNaN(elements[i])) {
            result.push(' ' + '"' + elements[i] + '"');
        } else {
            result.push(' ' + elements[i]);
        }
    }

    globalOld.innerHTML = 'let array = [' + old + '];';
    globalDelete.innerHTML = del;
    globalResult.innerHTML = 'let array = [' + result + '];';
}


//reset

function resetPop() {
    let data = document.querySelectorAll("#arrays__data");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    globalInput.innerHTML = "";
    globalResult.innerHTML = "";
    globalDelete.innerHTML = "";
    globalOld.innerHTML = "";
}


//check

function checkPop() {
    let fruits = ["Вишня", "Абрикос", "Черника"];
    alert(fruits.pop());
    alert(fruits);
}

function checkPush() {
    let fruits = ["Вишня", "Абрикос"];
    fruits.push("Черника");
    alert(fruits);
}