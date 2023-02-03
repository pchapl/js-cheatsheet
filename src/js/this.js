let inputFirst = document.getElementById('inputFirst');
let inputSecond = document.getElementById('inputSecond');
let inputThird = document.getElementById('inputThird');

inputFirst?.addEventListener('input', checkInputFirst(e));

function checkInputFirst (e) {
    if (inputFirst.value === 'alert(this.name);') {
            let resultFirst = document.getElementById('innerHTML1').innerHTML = 'John';
        } else {
            resultFirst = document.getElementById('innerHTML1').innerHTML = 'Введите alert(this.name);';
        }
};

inputSecond?.addEventListener('input', checkInputSecond(e));

function checkInputSecond (e) {
    if (inputSecond.value === 'user.sayHi();') {
            let resultFirst = document.getElementById('innerHTML2').innerHTML = 'John';
        } else {
            resultFirst = document.getElementById('innerHTML2').innerHTML = 'Введите user.sayHi();';
        }
};

inputThird?.addEventListener('input', checkInputThird(e));

function checkInputThird (e) {
    if (inputThird.value === 'alert(user.name);') {
            let resultFirst = document.getElementById('innerHTML2').innerHTML = 'John';
        } else {
            resultFirst = document.getElementById('innerHTML2').innerHTML = 'Введите alert(user.name);';
        }
};
