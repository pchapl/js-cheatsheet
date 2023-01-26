// document.addEventListener('DOMContentLoaded', function () {
//     let options = {
//         dropdownOptions: {
//             alignment: 'right',
//             hover: true
//         }
//     }
//     let elems = document.querySelectorAll('.dropdown-trigger');
//     let instances = M.Dropdown.init(elems, options);
// });

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        alignment: 'right',
//             hover: true
    });
});