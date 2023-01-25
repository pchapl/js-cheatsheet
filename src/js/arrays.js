document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
        accordion: false
    });
});

let done = document.querySelector('#arrays-simple__done');
done?.addEventListener('click', (e) => {
    e.preventDefault();

    let elements = [];
    let data = document.querySelectorAll(".arrays-simple__data");

    for (let i = 0; i < data.length; i++) {
        elements.push(Number(data[i].value));
    }

    let sum = elements.reduce(function (sum, elem) {
        return sum + elem;
    }, 0);

    /*let a = 0;
    let code;
    for (let i = 0; i < elements.length; i++) {

        let arr = [];

        //elements.push(Number(data[i].value));
        code = `<div class="arrays-code">
        <pre>
        <code class="js">
        let array = [${elements[i] + a}]; 
        alert(array.pop()); 
        console.log(array);
        </code>
        </pre>
        </div>`;
        elements[i]++;
        a++;
    }
    console.log(code);*/

    let code = `<div class="arrays-code">
    <pre>
    <code class="js">
    let array = [${elements}]; 
    alert(array.pop()); 
    console.log(array);
    </code>
    </pre>
    </div>`;


    document.querySelector("#arrays-simple__out").innerHTML = code;
    document.querySelector('#arrays-simple__result').innerHTML = sum;

})

let item = 0;
function addInput() {
    let string = '<div><input class="arrays-simple__data" type="text" /></div> <div id="arrays-simple__input' + (item + 1) + '"></div>';
    document.getElementById('arrays-simple__input' + item).innerHTML = string;
    item++;
}

let add = document.querySelector('#arrays-simple__add');
add?.addEventListener('click', (e) => {
    e.preventDefault();
    addInput();
})

let reset = document.querySelector('#arrays-simple__reset');
reset?.addEventListener('click', (e) => {
    e.preventDefault();

    let data = document.querySelectorAll(".arrays-simple__data");
    for (let i = 0; i < data.length; i++) {
        data[i].value = '';
    };
    document.querySelector("#arrays-simple__out").innerHTML = "";
    document.querySelector("#arrays-simple__result").innerHTML = "";

})
