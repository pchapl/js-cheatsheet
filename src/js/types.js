let button = document.querySelector('#inputType__buttonCheck')

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tap-target');
    var instances = M.TapTarget.init(elems);
});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);
}); 

function checkType() {
    let input = document.querySelector('#inputType__inputCheck')
    let checkResult = document.querySelector('#inputType__checkResult')
    checkResult.style.fontSize = '2rem'
    
    if (Number(input.value)) {
        input.value = ''
        checkResult.innerHTML = 'Это тип данных - число'
    }  else if (input.value ==='' || input.value === 'null' && input.value != 'undefined') {
        input.value = ''
        checkResult.innerHTML = 'Это тип данных - null'
    } else if (input.value === 'undefined') {
        input.value = ''
        checkResult.innerHTML = 'Это тип данных - undefined'
    } else if(input.value === 'true' || input.value === 'false') {
        input.value = ''
        checkResult.innerHTML = 'Это булевый тип данных'
    } else if(input.value.includes('Symbol(') &&  input.value.includes(')')) {
        input.value = ''
        checkResult.innerHTML = 'Это тип данных - символ'
    } else if(input.value.includes('{') &&  input.value.includes('}') || input.value.includes('[') &&  input.value.includes(']')) {
        input.value = ''
        checkResult.innerHTML = 'Это тип данных - объект'
    } else if(typeof input.value === 'string' && BigInt(!parseInt(input.value))) {
        input.value = ''
        checkResult.innerHTML = 'Это тип данных - строка'
    }  else if(BigInt(parseInt(input.value))) {
        input.value = ''
        checkResult.innerHTML = 'Это тип данных - BigInt'
    } 
}


button?.addEventListener('click', checkType)
document.addEventListener('keydown', (event) => {
    if (event.code=='Enter') {
        checkType()
    }
})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        startingTop: '3%',
        endingTop: '10%'
    });
});