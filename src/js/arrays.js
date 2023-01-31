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
        if (e.target.classList.contains('push-add')) {
            addInputPush();
        }
        if (e.target.classList.contains('shift-add')) {
            addInputShift();
        }
        if (e.target.classList.contains('unshift-add')) {
            addInputUnshift();
        }
        if (e.target.classList.contains('splice-add')) {
            addInputSplice();
        }
        if (e.target.classList.contains('slice-add')) {
            addInputSlice();
        }
        if (e.target.classList.contains('concat-add')) {
            addInputConcat();
        }
        if (e.target.classList.contains('join-add')) {
            addInputJoin();
        }
        if (e.target.classList.contains('sort-add')) {
            addInputSort();
        }
        if (e.target.classList.contains('reverse-add')) {
            addInputReverse();
        }
        if (e.target.classList.contains('includes-add')) {
            addInputIncludes();
        }
        if (e.target.classList.contains('indexof-add')) {
            addInputIndexOf();
        }
        if (e.target.classList.contains('lastindexof-add')) {
            addInputLastIndexOf();
        }
        if (e.target.classList.contains('foreach-add')) {
            addInputForEach();
        }
        if (e.target.classList.contains('map-add')) {
            addInputMap();
        }
        if (e.target.classList.contains('reduce-add')) {
            addInputReduce();
        }
        if (e.target.classList.contains('reduceright-add')) {
            addInputReduceRight();
        }
        if (e.target.classList.contains('filter-add')) {
            addInputFilter();
        }
        if (e.target.classList.contains('every-add')) {
            addInputEvery();
        }
        if (e.target.classList.contains('some-add')) {
            addInputSome();
        }
        if (e.target.classList.contains('flatmap-add')) {
            addInputFlatMap();
        }
        if (e.target.classList.contains('find-add')) {
            addInputFind();
        }
        if (e.target.classList.contains('findindex-add')) {
            addInputFindIndex();
        }
        if (e.target.classList.contains('findlast-add')) {
            addInputFindLast();
        }
        if (e.target.classList.contains('findlastindex-add')) {
            addInputFindLastIndex();
        }
    })
})

function addInputPop() {
    let parent = document.querySelector('.arrays__input-pop');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-pop" type="text">`;
    parent.appendChild(input);
}

function addInputPush() {
    let parent = document.querySelector('.arrays__input-push');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-push" type="text">`;
    parent.appendChild(input);
}

function addInputShift() {
    let parent = document.querySelector('.arrays__input-shift');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-shift" type="text">`;
    parent.appendChild(input);
}

function addInputUnshift() {
    let parent = document.querySelector('.arrays__input-unshift');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-unshift" type="text">`;
    parent.appendChild(input);
}

function addInputSplice() {
    let parent = document.querySelector('.arrays__input-splice');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-splice" type="text">`;
    parent.appendChild(input);
}

function addInputSlice() {
    let parent = document.querySelector('.arrays__input-slice');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-slice" type="text">`;
    parent.appendChild(input);
}

function addInputConcat() {
    let parent = document.querySelector('.arrays__input-concat');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-concat" type="text">`;
    parent.appendChild(input);
}

function addInputJoin() {
    let parent = document.querySelector('.arrays__input-join');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-join" type="text">`;
    parent.appendChild(input);
}

function addInputSort() {
    let parent = document.querySelector('.arrays__input-sort');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-sort" type="text">`;
    parent.appendChild(input);
}

function addInputReverse() {
    let parent = document.querySelector('.arrays__input-reverse');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-reverse" type="text">`;
    parent.appendChild(input);
}

function addInputIncludes() {
    let parent = document.querySelector('.arrays__input-includes');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-includes" type="text">`;
    parent.appendChild(input);
}

function addInputIndexOf() {
    let parent = document.querySelector('.arrays__input-indexof');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-indexof" type="text">`;
    parent.appendChild(input);
}

function addInputLastIndexOf() {
    let parent = document.querySelector('.arrays__input-lastindexof');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-lastindexof" type="text">`;
    parent.appendChild(input);
}

function addInputForEach() {
    let parent = document.querySelector('.arrays__input-foreach');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-foreach" type="text">`;
    parent.appendChild(input);
}

function addInputMap() {
    let parent = document.querySelector('.arrays__input-map');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-map" type="text">`;
    parent.appendChild(input);
}

function addInputReduce() {
    let parent = document.querySelector('.arrays__input-reduce');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-reduce" type="text">`;
    parent.appendChild(input);
}

function addInputReduceRight() {
    let parent = document.querySelector('.arrays__input-reduceright');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-reduceright" type="text">`;
    parent.appendChild(input);
}

function addInputFilter() {
    let parent = document.querySelector('.arrays__input-filter');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-filter" type="text">`;
    parent.appendChild(input);
}

function addInputEvery() {
    let parent = document.querySelector('.arrays__input-every');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-every" type="text">`;
    parent.appendChild(input);
}

function addInputSome() {
    let parent = document.querySelector('.arrays__input-some');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-some" type="text">`;
    parent.appendChild(input);
}

function addInputFlatMap() {
    let parent = document.querySelector('.arrays__input-flatmap');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-flatmap" type="text">`;
    parent.appendChild(input);
}

function addInputFind() {
    let parent = document.querySelector('.arrays__input-find');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-find" type="text">`;
    parent.appendChild(input);
}

function addInputFindIndex() {
    let parent = document.querySelector('.arrays__input-findindex');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-findindex" type="text">`;
    parent.appendChild(input);
}

function addInputFindLast() {
    let parent = document.querySelector('.arrays__input-findlast');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-findlast" type="text">`;
    parent.appendChild(input);
}

function addInputFindLastIndex() {
    let parent = document.querySelector('.arrays__input-findlastindex');
    let input = document.createElement('div');
    input.innerHTML = `<input class="arrays__data" id="arrays__data-findlastindex" type="text">`;
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
        if (e.target.classList.contains('push-done')) {
            donePush();
        }
        if (e.target.classList.contains('shift-done')) {
            doneShift();
        }
        if (e.target.classList.contains('unshift-done')) {
            doneUnshift();
        }
        if (e.target.classList.contains('splice-done')) {
            doneSplice();
        }
        if (e.target.classList.contains('slice-done')) {
            doneSlice();
        }
        if (e.target.classList.contains('concat-done')) {
            doneConcat();
        }
        if (e.target.classList.contains('join-done')) {
            doneJoin();
        }
        if (e.target.classList.contains('sort-done')) {
            doneSort();
        }
        if (e.target.classList.contains('reverse-done')) {
            doneReverse();
        }
        if (e.target.classList.contains('includes-done')) {
            doneIncludes();
        }
        if (e.target.classList.contains('indexof-done')) {
            doneIndexOf();
        }
        if (e.target.classList.contains('lastindexof-done')) {
            doneLastIndexOf();
        }
        if (e.target.classList.contains('foreach-done')) {
            doneForEach();
        }
        if (e.target.classList.contains('map-done')) {
            doneMap();
        }
        if (e.target.classList.contains('reduce-done')) {
            doneReduce();
        }
        if (e.target.classList.contains('reduceright-done')) {
            doneReduceRight();
        }
        if (e.target.classList.contains('filter-done')) {
            doneFilter();
        }
        if (e.target.classList.contains('every-done')) {
            doneEvery();
        }
        if (e.target.classList.contains('some-done')) {
            doneSome();
        }
        if (e.target.classList.contains('flatmap-done')) {
            doneFlatMap();
        }
        if (e.target.classList.contains('find-done')) {
            doneFind();
        }
        if (e.target.classList.contains('findindex-done')) {
            doneFindIndex();
        }
        if (e.target.classList.contains('findlast-done')) {
            doneFindLast();
        }
        if (e.target.classList.contains('findlastindex-done')) {
            doneFindLastIndex();
        }
    })
})

function donePop() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-pop");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            elements.push(dataValue);
        } else if (isNaN(dataValue) && dataValue !== '') {
            elements.push(dataValue);
        } else {
            elements.push(Number(dataValue));
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

    document.querySelector('.arrays__old-pop').innerHTML = '[' + old + '];';
    document.querySelector(".arrays__delete-pop").innerHTML = del;
    document.querySelector('.arrays__result-pop').innerHTML = '[' + result + '];';
}

function donePush() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-push");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            elements.push(dataValue);
        } else if (isNaN(dataValue) && dataValue !== '') {
            elements.push(dataValue);
        } else {
            elements.push(Number(dataValue));
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

    elements.push("Новый элемент");

    let result = [];
    for (let i = 0; i < elements.length; i++) {
        if (isNaN(elements[i])) {
            result.push(' ' + '"' + elements[i] + '"');
        } else {
            result.push(' ' + elements[i]);
        }
    }

    document.querySelector('.arrays__old-push').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-push').innerHTML = '[' + result + '];';
}

function doneShift() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-shift");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            elements.push(dataValue);
        } else if (isNaN(dataValue) && dataValue !== '') {
            elements.push(dataValue);
        } else {
            elements.push(Number(dataValue));
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

    let result = [];
    for (let i = 0; i < elements.length; i++) {
        if (isNaN(elements[i])) {
            result.push(' ' + '"' + elements[i] + '"');
        } else {
            result.push(' ' + elements[i]);
        }
    }

    document.querySelector('.arrays__old-shift').innerHTML = '[' + old + '];';
    document.querySelector(".arrays__delete-shift").innerHTML = del;
    document.querySelector('.arrays__result-shift').innerHTML = '[' + result + '];';
}

function doneUnshift() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-unshift");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            elements.push(dataValue);
        } else if (isNaN(dataValue) && dataValue !== '') {
            elements.push(dataValue);
        } else {
            elements.push(Number(dataValue));
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

    elements.unshift("Новый элемент");

    let result = [];
    for (let i = 0; i < elements.length; i++) {
        if (isNaN(elements[i])) {
            result.push(' ' + '"' + elements[i] + '"');
        } else {
            result.push(' ' + elements[i]);
        }
    }

    document.querySelector('.arrays__old-unshift').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-unshift').innerHTML = '[' + result + '];';
}

function doneSplice() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-splice");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            elements.push(dataValue);
        } else if (isNaN(dataValue) && dataValue !== '') {
            elements.push(dataValue);
        } else {
            elements.push(Number(dataValue));
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

    let splice = elements.splice(1, 2);

    let del = [];
    for (let i = 0; i < splice.length; i++) {
        if (isNaN(splice[i])) {
            del.push(' ' + '"' + splice[i] + '"');
        } else {
            del.push(' ' + splice[i]);
        }
    }

    let result = [];
    for (let i = 0; i < elements.length; i++) {
        if (isNaN(elements[i])) {
            result.push(' ' + '"' + elements[i] + '"');
        } else {
            result.push(' ' + elements[i]);
        }
    }

    document.querySelector('.arrays__old-splice').innerHTML = '[' + old + '];';
    document.querySelector(".arrays__delete-splice").innerHTML = '[' + del + '];';
    document.querySelector('.arrays__result-splice').innerHTML = '[' + result + '];';
}

function doneSlice() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-slice");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            elements.push(dataValue);
        } else if (isNaN(dataValue) && dataValue !== '') {
            elements.push(dataValue);
        } else {
            elements.push(Number(dataValue));
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

    let slice = elements.slice(0, 2);

    let result = [];
    for (let i = 0; i < slice.length; i++) {
        if (isNaN(slice[i])) {
            result.push(' ' + '"' + slice[i] + '"');
        } else {
            result.push(' ' + slice[i]);
        }
    }

    document.querySelector('.arrays__old-slice').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-slice').innerHTML = '[' + result + '];';
}

function doneConcat() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-concat");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            elements.push(dataValue);
        } else if (isNaN(dataValue) && dataValue !== '') {
            elements.push(dataValue);
        } else {
            elements.push(Number(dataValue));
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

    let string = "Манго";
    let number = 100;
    let berries = ["Вишня", "Черника"];

    let concat = elements.concat(string, number, berries);

    let result = [];
    for (let i = 0; i < concat.length; i++) {
        if (isNaN(concat[i])) {
            result.push(' ' + '"' + concat[i] + '"');
        } else {
            result.push(' ' + concat[i]);
        }
    }

    document.querySelector('.arrays__old-concat').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-concat').innerHTML = '[' + result + '];';
}

function doneJoin() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-join");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;

        if (dataValue === '') {
            elements.push(dataValue);
        } else if (isNaN(dataValue) && dataValue !== '') {
            elements.push(dataValue);
        } else {
            elements.push(Number(dataValue));
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

    let result = elements.join(', ');

    document.querySelector('.arrays__old-join').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-join').innerHTML = '"' + result + '"';
}

function doneSort() {
    let elements = [];
    let deleteEmpty = [];
    let data = document.querySelectorAll("#arrays__data-sort");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;

        if (dataValue === '') {
            deleteEmpty.push(dataValue);
        } else {
            deleteEmpty.push(Number(dataValue));
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

    deleteEmpty.sort(function(a, b) {
        return a - b;
    });

    if(deleteEmpty.includes("")){
        elements = deleteEmpty.filter(function (num) {
            if(typeof num === 'number' && !isNaN(num)){
                return num;
            };
        })
        elements.push("");
    } else {
        elements = deleteEmpty;
    }

    let result = [];
    for (let i = 0; i < elements.length; i++) {
        result.push(' ' + elements[i]);
    }

    let min = result[0];

    document.querySelector('.arrays__old-sort').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-sort').innerHTML = '[' + result + '];';
    document.querySelector(".arrays__delete-sort").innerHTML = min;
}

function doneReverse() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-reverse");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            elements.push(dataValue);
        } else if (isNaN(dataValue) && dataValue !== '') {
            elements.push(dataValue);
        } else {
            elements.push(Number(dataValue));
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

    elements.reverse();

    let result = [];
    for (let i = 0; i < elements.length; i++) {
        if (isNaN(elements[i])) {
            result.push(' ' + '"' + elements[i] + '"');
        } else {
            result.push(' ' + elements[i]);
        }
    }

    document.querySelector('.arrays__old-reverse').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-reverse').innerHTML = '[' + result + '];';
}

function doneIncludes() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-includes");
    let search = document.querySelector('#arrays__search-includes');

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        }  else {
            elements.push(dataValue);
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

    let searchValue = search.value;
    let result = elements.includes(searchValue);

    document.querySelector('.arrays__old-includes').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-includes').innerHTML = result;
}

function doneIndexOf() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-indexof");
    let search = document.querySelector('#arrays__search-indexof');

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        }  else {
            elements.push(dataValue);
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

    let searchValue = search.value;
    let result = elements.indexOf(searchValue);

    document.querySelector('.arrays__old-indexof').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-indexof').innerHTML = result;
}

function doneLastIndexOf() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-lastindexof");
    let search = document.querySelector('#arrays__search-lastindexof');

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        }  else {
            elements.push(dataValue);
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

    let searchValue = search.value;
    let result = elements.lastIndexOf(searchValue);

    document.querySelector('.arrays__old-lastindexof').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-lastindexof').innerHTML = result;
}

function doneForEach() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-foreach");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        } else {
            elements.push(Number(dataValue));
        }
    }

    let old = [];
    for (let i = 0; i < data.length; i++) {
        old.push(' ' + data[i].value);
    }

    let arraySquare = [];
    elements.forEach(function (num) {
        let square = num * num;
        arraySquare.push(square);
    })

    let result = [];
    for (let i = 0; i < arraySquare.length; i++) {
        result.push(' ' + arraySquare[i]);
    }

    document.querySelector('.arrays__old-foreach').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-foreach').innerHTML = '[' + result + '];';
}

function doneMap() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-map");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        } else {
            elements.push(Number(dataValue));
        }
    }

    let old = [];
    for (let i = 0; i < data.length; i++) {
        old.push(' ' + data[i].value);
    }

    let arrayPlusOne = elements.map(function (num) {
        return num + 1;
})

    let result = [];
    for (let i = 0; i < arrayPlusOne.length; i++) {
        result.push(' ' + arrayPlusOne[i]);
    }

    document.querySelector('.arrays__old-map').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-map').innerHTML = '[' + result + '];';
}

function doneReduce() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-reduce");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        } else {
            elements.push(Number(dataValue));
        }
    }

    let old = [];
    for (let i = 0; i < data.length; i++) {
        old.push(' ' + data[i].value);
    }

    let sum = elements.reduce(function (accumulator, element) {
        return accumulator + element;
    }, 0);

    document.querySelector('.arrays__old-reduce').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-reduce').innerHTML = sum;
}

function doneReduceRight() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-reduceright");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        } else {
            elements.push(Number(dataValue));
        }
    }

    let old = [];
    for (let i = 0; i < data.length; i++) {
        old.push(' ' + data[i].value);
    }

    console.log(elements)

    elements.sort(function(a, b) {
        return a - b;
    });

    let sort = [];
    for (let i = 0; i < elements.length; i++) {
        sort.push(' ' + elements[i]);
    }

    console.log(sort)

    let subtraction = elements.reduceRight(function (accumulator, element) {
        return accumulator - element;
    });

    document.querySelector('.arrays__old-reduceright').innerHTML = '[' + old + '];';
    document.querySelector(".arrays__sort-reduceright").innerHTML = '[' + sort + '];';
    document.querySelector('.arrays__result-reduceright').innerHTML = subtraction;
}

function doneFilter() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-filter");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        } else {
            elements.push(Number(dataValue));
        }
    }

    let old = [];
    for (let i = 0; i < data.length; i++) {
        old.push(' ' + data[i].value);
    }

    let arrayEven = elements.filter(function (num) {
        return num % 2 == 0;
    })

    let result = [];
    for (let i = 0; i < arrayEven.length; i++) {
        result.push(' ' + arrayEven[i]);
    }

    document.querySelector('.arrays__old-filter').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-filter').innerHTML = '[' + result + '];';
}

function doneEvery() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-every");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        } else if (isNaN(dataValue)) {
            elements.push(dataValue);
        } else {
            elements.push(Number(dataValue));
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

    let result = elements.every(function (element) {
        return element === elements[0];
    })

    document.querySelector('.arrays__old-every').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-every').innerHTML = result;
}

function doneSome() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-some");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        } else {
            elements.push(Number(dataValue));
        }
    }

    let old = [];
    for (let i = 0; i < data.length; i++) {
        old.push(' ' + data[i].value);
    }

    let result = elements.some(function (num) {
        return num % 2 === 0;
    })

    document.querySelector('.arrays__old-some').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-some').innerHTML = result;
}

function doneFlatMap() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-flatmap");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        } else {
            elements.push(Number(dataValue));
        }
    }

    let old = [];
    for (let i = 0; i < data.length; i++) {
        old.push(' ' + data[i].value);
    }

    let duplicateSquare = elements.flatMap(function (element) {
        return [element, element**2];
    });

    let result = [];
    for (let i = 0; i < duplicateSquare.length; i++) {
        result.push(' ' + duplicateSquare[i]);
    }

    document.querySelector('.arrays__old-flatmap').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-flatmap').innerHTML = '[' + result + '];';
}

function doneFind() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-find");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        } else {
            elements.push(Number(dataValue));
        }
    }

    let old = [];
    for (let i = 0; i < data.length; i++) {
        old.push(' ' + data[i].value);
    }

    let result = elements.find(function (element) {
        return element === 5;
    });

    document.querySelector('.arrays__old-find').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-find').innerHTML = result;
}

function doneFindIndex() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-findindex");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        } else {
            elements.push(Number(dataValue));
        }
    }

    let old = [];
    for (let i = 0; i < data.length; i++) {
        old.push(' ' + data[i].value);
    }

    let result = elements.findIndex(function (element) {
        return element % 2 === 0;
    });

    document.querySelector('.arrays__old-findindex').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-findindex').innerHTML = result;
}

function doneFindLast() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-findlast");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        } else {
            elements.push(Number(dataValue));
        }
    }

    let old = [];
    for (let i = 0; i < data.length; i++) {
        old.push(' ' + data[i].value);
    }

    let result = elements.findLast(function (element) {
        return element % 2 !== 0;
    });

    document.querySelector('.arrays__old-findlast').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-findlast').innerHTML = result;
}

function doneFindLastIndex() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-findlastindex");

    for (let i = 0; i < data.length; i++) {
        let dataValue = data[i].value;
        if (dataValue === '') {
            dataValue;
        } else {
            elements.push(Number(dataValue));
        }
    }

    let old = [];
    for (let i = 0; i < data.length; i++) {
        old.push(' ' + data[i].value);
    }

    let result = elements.findLastIndex(function (element) {
        return element % 2 === 0;
    });

    document.querySelector('.arrays__old-findlastindex').innerHTML = '[' + old + '];';
    document.querySelector('.arrays__result-findlastindex').innerHTML = result;
}


//reset

let buttonsReset = document.querySelectorAll('.arrays__button_reset');
buttonsReset.forEach(function(reset) {
    reset?.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('pop-reset')) {
            resetPop();
        }
        if (e.target.classList.contains('push-reset')) {
            resetPush();
        }
        if (e.target.classList.contains('shift-reset')) {
            resetShift();
        }
        if (e.target.classList.contains('unshift-reset')) {
            resetUnshift();
        }
        if (e.target.classList.contains('splice-reset')) {
            resetSplice();
        }
        if (e.target.classList.contains('slice-reset')) {
            resetSlice();
        }
        if (e.target.classList.contains('concat-reset')) {
            resetConcat();
        }
        if (e.target.classList.contains('join-reset')) {
            resetJoin();
        }
        if (e.target.classList.contains('sort-reset')) {
            resetSort();
        }
        if (e.target.classList.contains('reverse-reset')) {
            resetReverse();
        }
        if (e.target.classList.contains('includes-reset')) {
            resetIncludes();
        }
        if (e.target.classList.contains('indexof-reset')) {
            resetIndexOf();
        }
        if (e.target.classList.contains('lastindexof-reset')) {
            resetLastIndexOf();
        }
        if (e.target.classList.contains('foreach-reset')) {
            resetForEach();
        }
        if (e.target.classList.contains('map-reset')) {
            resetMap();
        }
        if (e.target.classList.contains('reduce-reset')) {
            resetReduce();
        }
        if (e.target.classList.contains('reduceright-reset')) {
            resetReduceRight();
        }
        if (e.target.classList.contains('filter-reset')) {
            resetFilter();
        }
        if (e.target.classList.contains('every-reset')) {
            resetEvery();
        }
        if (e.target.classList.contains('some-reset')) {
            resetSome();
        }
        if (e.target.classList.contains('flatmap-reset')) {
            resetFlatMap();
        }
        if (e.target.classList.contains('find-reset')) {
            resetFind();
        }
        if (e.target.classList.contains('findindex-reset')) {
            resetFindIndex();
        }
        if (e.target.classList.contains('findlast-reset')) {
            resetFindLast();
        }
        if (e.target.classList.contains('findlastindex-reset')) {
            resetFindLastIndex();
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

function resetPush() {
    let data = document.querySelectorAll("#arrays__data-push");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-push").innerHTML = "";
    document.querySelector('.arrays__result-push').innerHTML = "";
    document.querySelector('.arrays__old-push').innerHTML = "";
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

function resetUnshift() {
    let data = document.querySelectorAll("#arrays__data-unshift");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-unshift").innerHTML = "";
    document.querySelector('.arrays__result-unshift').innerHTML = "";
    document.querySelector('.arrays__old-unshift').innerHTML = "";
}

function resetSplice() {
    let data = document.querySelectorAll("#arrays__data-splice");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-splice").innerHTML = "";
    document.querySelector('.arrays__result-splice').innerHTML = "";
    document.querySelector(".arrays__delete-splice").innerHTML = "";
    document.querySelector('.arrays__old-splice').innerHTML = "";
}

function resetSlice() {
    let data = document.querySelectorAll("#arrays__data-slice");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-slice").innerHTML = "";
    document.querySelector('.arrays__result-slice').innerHTML = "";
    document.querySelector('.arrays__old-slice').innerHTML = "";
}

function resetConcat() {
    let data = document.querySelectorAll("#arrays__data-concat");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-concat").innerHTML = "";
    document.querySelector('.arrays__result-concat').innerHTML = "";
    document.querySelector('.arrays__old-concat').innerHTML = "";
}

function resetJoin() {
    let data = document.querySelectorAll("#arrays__data-join");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-join").innerHTML = "";
    document.querySelector('.arrays__result-join').innerHTML = "";
    document.querySelector('.arrays__old-join').innerHTML = "";
}

function resetSort() {
    let data = document.querySelectorAll("#arrays__data-sort");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-sort").innerHTML = "";
    document.querySelector('.arrays__result-sort').innerHTML = "";
    document.querySelector('.arrays__old-sort').innerHTML = "";
    document.querySelector(".arrays__delete-sort").innerHTML = "";
}

function resetReverse() {
    let data = document.querySelectorAll("#arrays__data-reverse");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-reverse").innerHTML = "";
    document.querySelector('.arrays__result-reverse').innerHTML = "";
    document.querySelector('.arrays__old-reverse').innerHTML = "";
}

function resetIncludes() {
    let data = document.querySelectorAll("#arrays__data-includes");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-includes").innerHTML = "";
    document.querySelector('.arrays__result-includes').innerHTML = "";
    document.querySelector('.arrays__old-includes').innerHTML = "";
    document.querySelector('#arrays__search-includes').value = "";
}

function resetIndexOf() {
    let data = document.querySelectorAll("#arrays__data-indexof");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-indexof").innerHTML = "";
    document.querySelector('.arrays__result-indexof').innerHTML = "";
    document.querySelector('.arrays__old-indexof').innerHTML = "";
    document.querySelector('#arrays__search-indexof').value = "";
}

function resetLastIndexOf() {
    let data = document.querySelectorAll("#arrays__data-lastindexof");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-lastindexof").innerHTML = "";
    document.querySelector('.arrays__result-lastindexof').innerHTML = "";
    document.querySelector('.arrays__old-lastindexof').innerHTML = "";
    document.querySelector('#arrays__search-lastindexof').value = "";
}

function resetForEach() {
    let data = document.querySelectorAll("#arrays__data-foreach");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-foreach").innerHTML = "";
    document.querySelector('.arrays__result-foreach').innerHTML = "";
    document.querySelector('.arrays__old-foreach').innerHTML = "";
}

function resetMap() {
    let data = document.querySelectorAll("#arrays__data-map");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-map").innerHTML = "";
    document.querySelector('.arrays__result-map').innerHTML = "";
    document.querySelector('.arrays__old-map').innerHTML = "";
}

function resetReduce() {
    let data = document.querySelectorAll("#arrays__data-reduce");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-reduce").innerHTML = "";
    document.querySelector('.arrays__result-reduce').innerHTML = "";
    document.querySelector('.arrays__old-reduce').innerHTML = "";
}

function resetReduceRight() {
    let data = document.querySelectorAll("#arrays__data-reduceright");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-reduceright").innerHTML = "";
    document.querySelector('.arrays__result-reduceright').innerHTML = "";
    document.querySelector('.arrays__old-reduceright').innerHTML = "";
}

function resetFilter() {
    let data = document.querySelectorAll("#arrays__data-filter");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-filter").innerHTML = "";
    document.querySelector('.arrays__result-filter').innerHTML = "";
    document.querySelector('.arrays__old-filter').innerHTML = "";
}

function resetEvery() {
    let data = document.querySelectorAll("#arrays__data-every");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-every").innerHTML = "";
    document.querySelector('.arrays__result-every').innerHTML = "";
    document.querySelector('.arrays__old-every').innerHTML = "";
}

function resetSome() {
    let data = document.querySelectorAll("#arrays__data-some");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-some").innerHTML = "";
    document.querySelector('.arrays__result-some').innerHTML = "";
    document.querySelector('.arrays__old-some').innerHTML = "";
}

function resetFlatMap() {
    let data = document.querySelectorAll("#arrays__data-flatmap");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-flatmap").innerHTML = "";
    document.querySelector('.arrays__result-flatmap').innerHTML = "";
    document.querySelector('.arrays__old-flatmap').innerHTML = "";
}

function resetFind() {
    let data = document.querySelectorAll("#arrays__data-find");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-find").innerHTML = "";
    document.querySelector('.arrays__result-find').innerHTML = "";
    document.querySelector('.arrays__old-find').innerHTML = "";
}

function resetFindIndex() {
    let data = document.querySelectorAll("#arrays__data-findindex");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-findindex").innerHTML = "";
    document.querySelector('.arrays__result-findindex').innerHTML = "";
    document.querySelector('.arrays__old-findindex').innerHTML = "";
}

function resetFindLast() {
    let data = document.querySelectorAll("#arrays__data-findlast");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-findlast").innerHTML = "";
    document.querySelector('.arrays__result-findlast').innerHTML = "";
    document.querySelector('.arrays__old-findlast').innerHTML = "";
}

function resetFindLastIndex() {
    let data = document.querySelectorAll("#arrays__data-findlastindex");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };

    document.querySelector(".arrays__input-findlastindex").innerHTML = "";
    document.querySelector('.arrays__result-findlastindex').innerHTML = "";
    document.querySelector('.arrays__old-findlastindex').innerHTML = "";
}


//check

const buttonsCheck = document.querySelectorAll('.arrays__check');
buttonsCheck.forEach(function(check) {
    check?.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('array-length')) {
            checkArrayLength();
        }
        if (e.target.classList.contains('array-index')) {
            checkArrayIndex();
        }
        if (e.target.classList.contains('array-push')) {
            checkArrayPush();
        }
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
        if (e.target.classList.contains('join-split')) {
            checkJoinSplit();
        }
        if (e.target.classList.contains('join')) {
            checkJoin();
        }
        if (e.target.classList.contains('sort')) {
            checkSort();
        }
        if (e.target.classList.contains('sort-callback-up')) {
            checkSortCallbackUp();
        }
        if (e.target.classList.contains('sort-callback-max')) {
            checkSortCallbackMax();
        }
        if (e.target.classList.contains('includes')) {
            checkIncludes();
        }
        if (e.target.classList.contains('flat')) {
            checkFlat();
        }
        if (e.target.classList.contains('index-of')) {
            checkIndexOf();
        }
        if (e.target.classList.contains('last-index-of')) {
            checkLastIndexOf();
        }
        if (e.target.classList.contains('reverse')) {
            checkReverse();
        }
        if (e.target.classList.contains('reverse-empty')) {
            checkReverseEmpty();
        }
        if (e.target.classList.contains('copywithin')) {
            checkCopyWithin();
        }
        if (e.target.classList.contains('copywithin-end')) {
            checkCopyWithinEnd();
        }
        if (e.target.classList.contains('entries')) {
            checkEntries();
        }
        if (e.target.classList.contains('entries-for')) {
            checkEntriesFor();
        }
        if (e.target.classList.contains('keys')) {
            checkKeys();
        }
        if (e.target.classList.contains('keys-for')) {
            checkKeysFor();
        }
        if (e.target.classList.contains('values')) {
            checkValues();
        }
        if (e.target.classList.contains('values-for')) {
            checkValuesFor();
        }
        if (e.target.classList.contains('fill')) {
            checkFill();
        }
        if (e.target.classList.contains('tolocalstring')) {
            checkToLocalString();
        }
        if (e.target.classList.contains('foreach')) {
            checkForEach();
        }
        if (e.target.classList.contains('map')) {
            checkMap();
        }
        if (e.target.classList.contains('map-for')) {
            checkMapFor();
        }
        if (e.target.classList.contains('reduce')) {
            checkReduce();
        }
        if (e.target.classList.contains('reduce-for')) {
            checkReduceFor();
        }
        if (e.target.classList.contains('reduceright')) {
            checkReduceRight();
        }
        if (e.target.classList.contains('reduceright-for')) {
            checkReduceRightFor();
        }
        if (e.target.classList.contains('filter')) {
            checkFilter();
        }
        if (e.target.classList.contains('filter-for')) {
            checkFilterFor();
        }
        if (e.target.classList.contains('every')) {
            checkEvery();
        }
        if (e.target.classList.contains('every-for')) {
            checkEveryFor();
        }
        if (e.target.classList.contains('some')) {
            checkSome();
        }
        if (e.target.classList.contains('some-for')) {
            checkSomeFor();
        }
        if (e.target.classList.contains('find')) {
            checkFind();
        }
        if (e.target.classList.contains('find-for')) {
            checkFindFor();
        }
        if (e.target.classList.contains('findindex')) {
            checkFindIndex();
        }
        if (e.target.classList.contains('findindex-for')) {
            checkFindIndexFor();
        }
        if (e.target.classList.contains('findlast')) {
            checkFindLast();
        }
        if (e.target.classList.contains('findlast-for')) {
            checkFindLastFor();
        }
        if (e.target.classList.contains('findlastindex')) {
            checkFindLastIndex();
        }
        if (e.target.classList.contains('findlastindex-for')) {
            checkFindLastIndexFor();
        }
        if (e.target.classList.contains('flatmap-map')) {
            checkFlatMapMap();
        }
        if (e.target.classList.contains('flatmap-flatmap')) {
            checkFlatMapFlatMap();
        }
        if (e.target.classList.contains('flatmap')) {
            checkFlatMap();
        }
        
        
        
    })
})

function checkArrayLength() {
    let arr = [1, 2, 3, 4, 5];

    alert(arr.length);
}

function checkArrayIndex() {
    let arr = [1, 2, 3, 4, 5];
    
    const arrFirst = arr[0];
    alert(arrFirst);
}

function checkArrayPush() {
    let arr = [1, 2, 3, 4, 5];
    arr[5] = 6;
    
    alert(arr);
    
    arr[8] = 9;
    alert(arr);
    
    alert(arr[7]);
}

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

function checkJoinSplit() {
    let string = "Банан, Яблоко, Мандарин";
    let fruits = string.split(', ');
    for (let fruit of fruits) {
        alert( `Фрукты: ${fruit}.` ); 
    }  
}

function checkJoin() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    let string = fruits.join(', ');
    alert(string);
}

function checkSort() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    fruits.sort();
    alert(fruits); 

    let numbers = [15, 50, 3];
    numbers.sort();
    alert(numbers); 
}

function checkSortCallbackUp() {
    let numbers = [15, 50, 3, 30, 1, 150];
    numbers.sort(function(a, b) {
        return a - b;
    });
    alert(numbers); 
}

function checkSortCallbackMax() {
    let numbers = [15, 50, 3, 30, 1, 150];
    numbers.sort(function(a, b) {
        return b - a;
    });
    alert(numbers[0]); 
}

function checkIncludes() {
    const fruits = ["Банан", "Яблоко", "Мандарин"];
    const banana = fruits.includes("Банан");
    alert(banana); 

    const bananaSmall = fruits.includes("банан");
    alert(bananaSmall); 

    const orange = fruits.includes("Апельсин");
    alert(orange); 
}

function checkFlat() {
    const fruits = [
        'Банан',
        'Яблоко',
        [
            'Мандарин',
            'Апельсин',
            [
                'Груша',
                'Манго'
            ]
        ]
    ]

    alert(fruits.flat());
    console.log(fruits.flat());
    alert(fruits.flat(2));
    console.log(fruits.flat(2));
    console.log(fruits.flat(Infinity));
}

function checkIndexOf() {
    const fruits = ["Банан", "Яблоко", "Мандарин", "Груша", "Мандарин"];
    alert(fruits.indexOf("Мандарин"));
    alert(fruits.indexOf("Манго"));
}

function checkLastIndexOf() {
    const fruits = ["Банан", "Яблоко", "Мандарин", "Груша", "Мандарин"];
    alert(fruits.lastIndexOf("Мандарин"));
    alert(fruits.lastIndexOf("Манго"));
}

function checkReverse() {
    const fruits = ["Банан", "Яблоко", "Мандарин"];
    const result = fruits.reverse();
    
    alert(result);
    alert(fruits);
    alert(result === fruits);
}

function checkReverseEmpty() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    fruits[5] = "Манго";

    alert(fruits);
    alert(fruits[3])

    fruits.reverse();

    alert(fruits);
}

function checkCopyWithin() {
    let fruits = ["Банан", "Яблоко", "Мандарин", "Груша", "Манго"];
    alert(fruits.copyWithin(3, 0));
}

function checkCopyWithinEnd() {
    let fruits = ["Банан", "Яблоко", "Мандарин", "Груша", "Манго"];
    alert(fruits.copyWithin(-3, 0, -1));
}

function checkEntries() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    const entries = fruits.entries();
    alert(entries.next().value);
    alert(entries.next().value);
    alert(entries.next().value);
}

function checkEntriesFor() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    const entries = fruits.entries();
    for (let element of entries) {
        alert(element);
    }
}

function checkKeys() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    const keys = fruits.keys();
    alert(keys.next().value);
    alert(keys.next().value);
    alert(keys.next().value);
    alert(keys.next().value);
}

function checkKeysFor() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    const keys = fruits.keys();
    for (let key of keys) {
        alert(key);
    }
}

function checkValues() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    const values = fruits.values();
    alert(values.next().value);
    alert(values.next().value);
    alert(values.next().value);
    alert(values.next().value);
}

function checkValuesFor() {
    let fruits = ["Банан", "Яблоко", "Мандарин"];
    const values = fruits.values();
    for (let value of values) {
        alert(value);
    }
}

function checkFill() {
    const fruits = ["Банан", "Яблоко", "Мандарин", "Груша"];
    alert(fruits.fill("Манго", 2, 4));
    alert(fruits.fill("Манго", 1));
    alert(fruits.fill("Манго"));
}

function checkToLocalString() {
    const arr = [5, "Яблоко", new Date()];
    alert(arr.toLocaleString()); 
}

function checkForEach() {
    const fruits = ["Банан", "Яблоко", "Мандарин"];
    fruits.forEach((element, index, arr) => {
        alert('Элемент: ' + element);
        alert('Его индекс: ' + index);
        alert('Массив: ' + arr);
    })
}

function checkMap() {
    const array = [1, 2, 3, 4, 5]; 
    const squares = array.map(function (num) {
    return num * num;
})
    alert(squares);
    alert(array);
}

function checkMapFor() {
    const array = [1, 2, 3, 4, 5]; 
    const squares = [];
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        const numSquare = num * num;
        squares.push(numSquare);
    }
    alert(squares);
}

function checkReduce() {
    const array = [1, 2, 3, 4, 5]; 
    
    function findAverage(accumulator, element, index, array) {
        const sum = accumulator + element;
        
        if (index === array.length - 1) {
            return sum / array.length;
        }
        return sum;
    }
    
    const average = array.reduce(findAverage, 0);
    alert(average);
}

function checkReduceFor() {
    const array = [1, 2, 3, 4, 5]; 
    
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i]; 
    }
    let average = sum / array.length;
    alert(average);
}

function checkReduceRight() {
    const array = [1, 2, 3, 4, 5]; 
    
    function findAverage(accumulator, element, index, array) {
        const sum = accumulator + element;
        
        if (index === 0) {
            return sum / array.length;
        }
        return sum;
    }
    
    const average = array.reduceRight(findAverage, 0);
    alert(average);
}

function checkReduceRightFor() {
    const array = [1, 2, 3, 4, 5]; 
    
    let sum = 0;
    for(let i = array.length - 1; i >= 0; i--){
        sum = sum + array[i]; 
    }
    let average = sum / array.length;
    alert(average);
}

function checkFilter() {
    const array = [1, 2, 3, 4, 5]; 
    
    const arrayOdds = array.filter(function (num) {
        return num % 2 !== 0
    })
    alert(arrayOdds);
}

function checkFilterFor() {
    const array = [1, 2, 3, 4, 5]; 
    
    const arrayOdds = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            arrayOdds.push(array[i]);
        };
    }
    alert(arrayOdds);
}

function checkSome() {
    const array = [1, 2, 3, 4, 5]; 
    const arrayNums = array.some(function (num) {
        return num % 2 !== 0;
    })
    alert(arrayNums);
}

function checkSomeFor() {
    const array = [1, 2, 3, 4, 5]; 
    const arrayNums = function (array) {
        for(let i = 0; i < array.length; i++){
            if(array[i] % 2 !== 0){
                return true;
            }
        }
        return false;
    }
    alert(arrayNums(array));
}

function checkFind() {
    const array = [1, 2, 3, 4, 5]; 
    
    const arrayFind = array.find(function (element) {
        return element === 2;
    });
    alert(arrayFind);
}

function checkFindFor() {
    const array = [1, 2, 3, 4, 5]; 
    
    const arrayFind = (array) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 2) {
            return array[i];
            }
        }
        return undefined;
    };
    alert(arrayFind(array));
}

function checkFindIndex() {
    const array = [1, 2, 3, 4, 5]; 
    const arrayEven = [2, 4, 6];
    
    function isOdd(element) {
        return element % 2 !== 0;
    }
    
    alert(array.findIndex(isOdd));
    alert(arrayEven.findIndex(isOdd));
}

function checkFindIndexFor() {
    const array = [1, 2, 3, 4, 5]; 
    const arrayEven = [2, 4, 6];
    
    function isOdd(element) {
        return element % 2 !== 0
    }

    function findIndex(array, predicate) {
        for (let i = 0; i < array.length; i++) {
            if (predicate(array[i])) {
            return i;
        }
    }
    return -1
}

    alert(findIndex(array, isOdd));
    alert(findIndex(arrayEven, isOdd));
}

function checkFindLast() {
    const array = [1, 2, 3, 4, 5]; 
    const arrayEven = array.findLast(function (element) {
        return element % 2 === 0;
    });
    alert(arrayEven);
}

function checkFindLastFor() {
    const array = [1, 2, 3, 4, 5]; 
    const arrayEven = (array) => {
        let even = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                even.push(array[i]);
            } 
        }

        if(even.length !== 0) {
            even.sort(function(a, b) {
                return b - a;
            });
            return even[0];
        }

        return undefined;
    };
    alert(arrayEven(array));
}

function checkFindLastIndex() {
    const array = [1, 2, 3, 4, 5]; 
    const arrayEven = [2, 4, 6];
    
    function isOdd(element) {
        return element % 2 !== 0;
    }
    
    alert(array.findLastIndex(isOdd));
    alert(arrayEven.findLastIndex(isOdd));
}

function checkFindLastIndexFor() {
    const array = [1, 2, 3, 4, 5];  
    const arrayEven = [2, 4, 6];
    
    function isOdd(element) {
        return element % 2 !== 0
    }

    function findLastIndex(array, predicate) {
        let odd = [];
        for (let i = 0; i < array.length; i++) {
            if (predicate(array[i])) {
                odd.push(i);
            }
        }

        if(odd.length !== 0) {
            odd.sort(function(a, b) {
                return b - a;
            });
            return odd[0];
        }

    return -1
}
    alert(findLastIndex(array, isOdd));
    alert(findLastIndex(arrayEven, isOdd));
}

function checkEvery() {
    const array = [1, 2, 3, 4, 5]; 
    const arrayNums = array.every(function (num) {
        return num >= 1;
    })
    alert(arrayNums);
}

function checkEveryFor() {
    const array = [1, 2, 3, 4, 5]; 
    const arrayNums = function (array) {
        for(let i = 0; i < array.length; i++){
            if(array[i] >= 1){
                return true;
            }
        }
        return false;
    }
    alert(arrayNums(array));
}

function checkFlatMapMap() {
    const array = [1, 2, 3]; 
    const duplicate = function (element) {
        return [element, element];
    }
    
    alert(array.map(duplicate));
    console.log(array.map(duplicate));
}

function checkFlatMapFlatMap() {
    const array = [1, 2, 3]; 
    const duplicate = function (element) {
        return [element, element];
    }
    
    alert(array.map(duplicate).flat());
    console.log(array.map(duplicate).flat());
}

function checkFlatMap() {
    const array = [1, 2, 3]; 
    const duplicate = function (element) {
        return [element, element];
    }
    
    alert(array.flatMap(duplicate)); 
    console.log(array.flatMap(duplicate));
}

