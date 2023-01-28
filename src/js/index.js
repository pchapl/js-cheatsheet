document.addEventListener('DOMContentLoaded', function () {
    let options = {
        constrainWidth: false,
        hover: false,
        coverTrigger: false,
    }

    let elems = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(elems, options);
});
