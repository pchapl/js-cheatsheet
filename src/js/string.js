document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
});

const btn_first = document.querySelector('.btn_first');
const btn_second = document.querySelector('.btn_second');

const answer_first = document.querySelector('.answer_first');
const answer_second = document.querySelector('.answer_second');

btn_first.addEventListener('click', function () {
    answer_first.innerHTML = `<pre><code>let newStr = str[0].toUpperCase() + str.slice(1);</code></pre>`
});

btn_second.addEventListener('click', function () {
    answer_second.innerHTML = "Для поиска без учёта регистра символов переведём всю строку в нижний регистр, а потом проверим, есть ли в ней искомые подстроки:" + `<br>` +

        `<pre><code></code>function checkSpam(str) {
        let lowerStr = str.toLowerCase();

        return lowerStr.includes('viagra') || lowerStr.includes('xxx');
    }

    alert(checkSpam('buy ViAgRA now'));
    alert(checkSpam('free xxxxx'));
    alert(checkSpam("innocent rabbit")); 
    </code> </pre>"`
});

