let button1 = document.querySelector('#chooseAnswer1')
let button2 = document.querySelector('#checkAnswer2')
let button3 = document.querySelector('#chooseAnswer3')
let button4 = document.querySelector('#checkAnswer4')

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

button1?.addEventListener('click', () => {
    let result = document.querySelector('#resultTask1')
    let radioBtn = document.querySelectorAll('input[name = "answer1"]')
    console.log(radioBtn);

    if (radioBtn[0].checked) {
        result.innerHTML = 'Это правильный ответ'
        result.style.marginTop = '2rem'
    } else if (radioBtn[1].checked) {
        result.innerHTML = 'Это неправильный ответ'
        result.style.marginTop = '2rem'
    } else {
        result.innerHTML = 'Вы ничего не выбрали'
        result.style.marginTop = '2rem'
    }
})

button2?.addEventListener('click', () => {
    let result = document.querySelector('#resultTask2')
    let input = document.querySelector('.tasks__input2')

    if (input.value === 'Array.prototype') {
        result.innerHTML = 'Это правильный ответ'
        result.style.marginTop = '2rem'
    } else {
        result.innerHTML = 'Это неправильный ответ'
        result.style.marginTop = '2rem'
    }
})

button3?.addEventListener('click', () => {
    let result = document.querySelector('#resultTask3')
    let radioBtn = document.querySelectorAll('input[name = "answer3"]')
    console.log(radioBtn);

    if (radioBtn[0].checked) {
        result.innerHTML = 'Это неправильный ответ'
        result.style.marginTop = '2rem'
    } else if (radioBtn[1].checked) {
        result.innerHTML = 'Это правильный ответ'
        result.style.marginTop = '2rem'
    } else {
        result.innerHTML = 'Вы ничего не выбрали'
        result.style.marginTop = '2rem'
    }
})

button4?.addEventListener('click', () => {
    let result = document.querySelector('#resultTask4')
    let input = document.querySelector('.tasks__input4')

    if (input.value === 'Object.prototype') {
        result.innerHTML = 'Это правильный ответ'
        result.style.marginTop = '2rem'
    } else {
        result.innerHTML = 'Это неправильный ответ'
        result.style.marginTop = '2rem'
    }
})
