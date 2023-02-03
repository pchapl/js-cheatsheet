let inputFirst = document.getElementById('inputFirst');
let inputSecond = document.getElementById('inputSecond');
let inputThird = document.getElementById('inputThird');

inputFirst.oninput = checkFirst () {
    if (this.value === 'alert(this.name);') {
        let resultFirst = document.getElementById('innerHTML1') = 'John';
    } else {
        resultFirst = document.getElementById('innerHTML1') = 'Введите alert(this.name);';
    }
};

inputSecond.oninput = checkSecond () {
    if (this.value === 'user.sayHi();') {
        let resultSecond = document.getElementById('innerHTML2') = 'John';
    } else {
        resultSecond = document.getElementById('innerHTML2') = 'Введите user.sayHi();';
    }
};

inputThird.oninput = checkThird () {
    if (this.value === 'alert(user.name);') {
        let resultThird = document.getElementById('innerHTML3') = 'John';
    } else {
        resultThird = document.getElementById('innerHTML3') = 'Введите alert(user.name);';
    }
};
