document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

let done = document.querySelector('#done');
done.addEventListener('click', (e) => {
    e.preventDefault();

    let numbers = [];
    let inputs = document.querySelectorAll(".number");

    for (let input of inputs) {
        numbers.push(Number(input.value));
    }

    let n = numbers.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (numbers[j] < numbers[min]) min = j;
        }
        let t = numbers[min];
        numbers[min] = numbers[i];
        numbers[i] = t;
    }

    let sum = numbers.reduce(function (sum, elem) {
        return sum + elem;
    }, 0);

    document.querySelector("#out").innerHTML = numbers;
    document.querySelector('#sum').innerHTML = sum;

})

let add = document.querySelector('#hide');
add.addEventListener('click', (e) => {
    e.preventDefault();

    let x = 0;
    let str = '<div><input class="number" type="text" /></div> <div id="input' + (x + 1) + '"></div>';
    document.getElementById('input' + x).innerHTML = str;
    x++;

})

let reset = document.querySelector('#reset');
reset.addEventListener('click', (e) => {
    e.preventDefault();

    let inputs = document.querySelectorAll(".number");
    for (let i2 = 0; i2 < inputs.length; i2++) {
        inputs[i2].value = '';
    };
    document.querySelector("#out").innerHTML = "";
    document.querySelector("#sum").innerHTML = "";

})
