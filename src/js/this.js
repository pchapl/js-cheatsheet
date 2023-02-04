let inputFirst = document.getElementById('inputFirst');
let inputSecond = document.getElementById('inputSecond');
let inputThird = document.getElementById('inputThird');

let resultFirst = document.getElementById('innerHTML1');
let resultSecond = document.getElementById('innerHTML2');
let resultThird = document.getElementById('innerHTML3');

inputFirst?.addEventListener('input', checkInputFirst);

function checkInputFirst () {
        if (inputFirst.value === 'alert(this.name);') {
            resultFirst.innerHTML = 'John';
            console.log(resultFirst);
        } else {
            resultFirst.innerHTML = 'Введите alert(this.name);';
        }
};

inputSecond?.addEventListener('input', checkInputSecond);

function checkInputSecond () {
    if (inputSecond.value === 'user.sayHi();') {
            resultSecond.innerHTML = 'John';
        } else {
            resultSecond.innerHTML = 'Введите user.sayHi();';
        }
};

inputThird?.addEventListener('input', checkInputThird);

function checkInputThird () {
    if (inputThird.value === 'alert(user.name);') {
            resultThird.innerHTML = 'John';
        } else {
            resultThird.innerHTML = 'Введите alert(user.name);';
        }
};
