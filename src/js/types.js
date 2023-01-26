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
    let input = document.querySelector('#inputCheck').value
    let checkResult = document.querySelector('#checkResult')
    if (Number(input)) {
        checkResult.innerHTML = 'Number'
    } else if (typeof Object & !typeof null) {
        checkResult.innerHTML = 'Объект'
        
    } else if (typeof null) {
        checkResult.innerHTML = 'null'
    } 


})