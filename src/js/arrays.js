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
        if (e.target.classList.contains('foreach-add')) {
            addInputForEach();
        }
        if (e.target.classList.contains('map-add')) {
            addInputMap();
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
        if (e.target.classList.contains('foreach-done')) {
            doneForEach();
        }
        if (e.target.classList.contains('map-done')) {
            doneMap();
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

    document.querySelector('.arrays__old-pop').innerHTML = '[' + old + '];';
    document.querySelector(".arrays__delete-pop").innerHTML = del;
    document.querySelector('.arrays__result-pop').innerHTML = '[' + result + '];';
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

    document.querySelector('.arrays__old-shift').innerHTML = '[' + old + '];';
    document.querySelector(".arrays__delete-shift").innerHTML = del;
    document.querySelector('.arrays__result-shift').innerHTML = '[' + result + '];';
}

function doneForEach() {
    let elements = [];
    let data = document.querySelectorAll("#arrays__data-foreach");

    for (let i = 0; i < data.length; i++) {
        let d = data[i].value;
        elements.push(Number(d));
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
        let d = data[i].value;
        elements.push(Number(d));
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
        if (e.target.classList.contains('foreach-reset')) {
            resetForEach();
        }
        if (e.target.classList.contains('map-reset')) {
            resetMap();
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
        if (e.target.classList.contains('foreach')) {
            checkForEach();
        }
        if (e.target.classList.contains('map')) {
            checkMap();
        }
        if (e.target.classList.contains('map-for')) {
            checkMapFor();
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