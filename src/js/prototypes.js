let button1 = document.querySelector('#chooseAnswer')
let button2 = document.querySelector('#checkAnswer')

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

button1?.addEventListener('click', () => {
    let result = document.querySelector('#result')
    let radioBtn = document.querySelectorAll('input[name = "answer"]')
    console.log(radioBtn);

    if (radioBtn[0].checked) {
        result.innerHTML = 'Это правильный ответ'
    } else {
        result.innerHTML = 'Это неправильный ответ'
    }
})

button2?.addEventListener('click', () => {
    let result = document.querySelector('#resultTask2')
    let input = document.querySelector('.tasks__input2')

    if (input.value === 'Array.prototype') {
        result.innerHTML = 'Это правильный ответ'
    } else {
        result.innerHTML = 'Это неправильный ответ'
    }


})

