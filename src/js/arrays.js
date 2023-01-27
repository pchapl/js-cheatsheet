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


//add

let buttonsAdd = document.querySelectorAll('.arrays__button_add');
buttonsAdd.forEach(function(add) {
    add?.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('pop-add')) {
            addInputPop();
        }
        if (e.target.classList.contains('shift-add')) {
            addInputShift();
        }
        
        
    })
})

function addInputPop() {
    let parent = document.querySelector('.arrays__input-pop');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-pop" type="text">`;
    parent.appendChild(input);
}

function addInputShift() {
    let parent = document.querySelector('.arrays__input-shift');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-shift" type="text">`;
    parent.appendChild(input);
}


//done

let buttonsDone = document.querySelectorAll('.arrays__button_done');
buttonsDone.forEach(function(done) {
    done?.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('pop-done')) {
            donePop();
        }
        if (e.target.classList.contains('shift-done')) {
            doneShift();
        }
    })
})

function donePop() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-pop");

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

    document.querySelector('.arrays__old-pop').innerHTML = 'let array = [' + old + '];';
    document.querySelector(".arrays__delete-pop").innerHTML = del;
    document.querySelector('.arrays__result-pop').innerHTML = 'let array = [' + result + '];';
}

function doneShift() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-shift");

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

    let del = elements.shift();
    console.log(del)

    let result = [];
    for (let i = 0; i < elements.length; i++) {
        if (isNaN(elements[i])) {
            result.push(' ' + '"' + elements[i] + '"');
        } else {
            result.push(' ' + elements[i]);
        }
    }

    document.querySelector('.arrays__old-shift').innerHTML = 'let array = [' + old + '];';
    document.querySelector(".arrays__delete-shift").innerHTML = del;
    document.querySelector('.arrays__result-shift').innerHTML = 'let array = [' + result + '];';
}


//reset

let buttonsReset = document.querySelectorAll('.arrays__button_reset');
buttonsReset.forEach(function(reset) {
    reset?.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('pop-reset')) {
            resetPop();
        }
        if (e.target.classList.contains('shift-reset')) {
            resetShift();
        }
        
    })
})

function resetPop() {
    let data = document.querySelectorAll("#arrays__data-pop");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-pop").innerHTML = "";
    document.querySelector('.arrays__result-pop').innerHTML = "";
    document.querySelector(".arrays__delete-pop").innerHTML = "";
    document.querySelector('.arrays__old-pop').innerHTML = "";
}

function resetShift() {
    let data = document.querySelectorAll("#arrays__data-shift");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-shift").innerHTML = "";
    document.querySelector('.arrays__result-shift').innerHTML = "";
    document.querySelector(".arrays__delete-shift").innerHTML = "";
    document.querySelector('.arrays__old-shift').innerHTML = "";
}


//check

const buttonsCheck = document.querySelectorAll('.arrays__check');
buttonsCheck.forEach(function(check) {
    check?.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('pop')) {
            checkPop();
        }
        if (e.target.classList.contains('push')) {
            checkPush();
        }
        if (e.target.classList.contains('shift')) {
            checkShift();
        }
        if (e.target.classList.contains('unshift')) {
            checkUnshift();
        }
        if (e.target.classList.contains('splice-delete')) {
            checkSpliceDelete();
        }
        if (e.target.classList.contains('splice-change')) {
            checkSpliceChange();
        }
        if (e.target.classList.contains('splice-push')) {
            checkSplicePush();
        }
        if (e.target.classList.contains('slice')) {
            checkSlice();
        }
        if (e.target.classList.contains('concat')) {
            checkConcat();
        }
        
        
    })
})

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

function checkShift() {
    let fruits = ["Вишня", "Абрикос", "Черника"];
    alert(fruits.shift());
    alert(fruits);
}

function checkUnshift() {
    let fruits = ["Абрикос", "Черника"];
    fruits.unshift("Вишня");
    alert(fruits);
}

function checkSpliceDelete() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    alert(fruits.splice(0, 1));
    alert(fruits);
}

function checkSpliceChange() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    alert(fruits.splice(0, 2, "Манго"));
    alert(fruits);
}

function checkSplicePush() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    alert(fruits.splice(1, 0, "Манго", "Груша"));
    alert(fruits);
}

function checkSlice() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    alert(fruits.slice(0, 2));                        
    alert(fruits.slice(-1)); 
}

function checkConcat() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    let orange = "Апельсин";
    let berries = ["Вишня", "Черника", 2];
    alert(fruits.concat(orange, berries)); 
}