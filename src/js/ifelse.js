let heartEl = document.getElementById('heart')
let inputEl = document.getElementById('input')
let btnEl = document.getElementById('btn')

inputEl?.addEventListener('input', handleInput)

function handleInput(e) {
    if (e.target.value == 1) {
        heartEl.classList.add('green');
        inputEl.value = '';
    } else if (e.target.value == 2) {
        heartEl.classList.add('blue');
        inputEl.value = '';
    } else if (e.target.value == 3) {
        heartEl.classList.add('purple');
        inputEl.value = '';
    } else if (e.target.value == 4) {
        heartEl.classList.add('red');
        inputEl.value = '';
    } else if (e.target.value == 5) {
        heartEl.classList.add('pink');
        inputEl.value = '';
    } else if (e.target.value == 6) {
        heartEl.classList.add('black');
        inputEl.value = '';
    } else {
        heartEl.classList.add('else');
        inputEl.value = '';
    }
}

btnEl?.addEventListener('click', handleReset)

function handleReset() {
    inputEl.value = ''; heartEl.classList.remove('green');
    heartEl.classList.remove('blue');
    heartEl.classList.remove('purple');
    heartEl.classList.remove('red');
    heartEl.classList.remove('pink');
    heartEl.classList.remove('black');
    heartEl.classList.remove('else');
}