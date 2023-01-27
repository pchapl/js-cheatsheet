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
    
    if (Number(input.value)) {
        checkResult.innerHTML = 'Number'
    } else if (typeof input.value === Object) {
        checkResult.innerHTML = 'Объект'
        
    } else if (input.value = 'null' && input.value != 'undefined') {
        checkResult.innerHTML = 'null'
    } else if (input.value = 'undefined') {
        checkResult.innerHTML = 'undefined'
    }


})