let button = document.querySelector('#buttonCheck')

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tap-target');
    var instances = M.TapTarget.init(elems);
});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);
}); 




button?.addEventListener('click', () => {
    let input = document.querySelector('#inputCheck')
    let checkResult = document.querySelector('#checkResult')
    
    if (Number(input.value) ) {
        input.value = ''
        checkResult.innerHTML = 'Number'
    } else if(`{${input.value}}` || `[${input.value}]` || input.value === `new Number(${input.value})` ) {
        checkResult.innerHTML = 'Obj'
    } else if (input.value === 'null' && input.value != 'undefined') {
        input.value = ''
        checkResult.innerHTML = 'null'
    } else if (input.value === 'undefined') {
        input.value = ''
        checkResult.innerHTML = 'undefined'
    } else if(input.value === 'true' || input.value === 'false') {
        checkResult.innerHTML = 'булевый тип'
    } else {
        checkResult.innerHTML = 'строка'
    }


})