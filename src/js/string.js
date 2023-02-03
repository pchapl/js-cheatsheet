var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
    accordion: false
});

const btn_first = document.querySelector('.btn_first');
const btn_second = document.querySelector('.btn_second');
const btn_third = document.querySelector('.btn_third');

const answer_first = document.querySelector('.answer_first');
const answer_second = document.querySelector('.answer_second');
const answer_third = document.querySelector('.answer_third');

const btn_hidden_first = document.querySelector('.btn_hidden_first');
const btn_hidden_second = document.querySelector('.btn_hidden_second');
const btn_hidden_third = document.querySelector('.btn_hidden_third');


btn_first?.addEventListener('click', function () {
    answer_first.innerHTML = `<blockquote>let newStr = str[0].toUpperCase() + str.slice(1);</blockquote>`;
    btn_hidden_first.innerHTML = `<a class="waves-effect waves-light btn orange lighten-1">Скрыть</a>`

});

btn_second?.addEventListener('click', function () {
    answer_second.innerHTML = `<blockquote>Для поиска без учёта регистра символов переведём всю строку в нижний регистр, а потом проверим, есть ли в ней искомые подстроки:<br>

        <pre><code>function checkSpam(str) {
        let lowerStr = str.toLowerCase();

        return lowerStr.includes('viagra') || lowerStr.includes('xxx');
    }

    alert(checkSpam('buy ViAgRA now'));
    alert(checkSpam('free xxxxx'));
    alert(checkSpam("innocent rabbit")); 
    </blockquote>`;
    btn_hidden_second.innerHTML = `<a class="waves-effect waves-light btn orange lighten-1">Скрыть</a>`
});

btn_third?.addEventListener('click', function () {
    answer_third.innerHTML = `<blockquote>Строка, которую мы возвращаем, должна быть не длиннее maxlength, поэтому, если мы обрезаем строку, то мы должны убрать на один символ больше, чем maxlength — чтобы хватило места на многоточие.<br>

    Имейте в виду, что в качестве многоточия здесь используется … — ровно один специальный Юникодный символ. Это не то же самое, что ... — три точки.<br>
    <pre><code>function truncate(str, maxlength) {
        return (str.length > maxlength) ?
          str.slice(0, maxlength - 1) + '…' : str;
      }
      </pre></code>
    </blockquote>`;
    btn_hidden_third.innerHTML = `<a class="waves-effect waves-light btn orange lighten-1">Скрыть</a>`
});

btn_hidden_first?.addEventListener('click', function () {
    answer_first.innerHTML = " ";
});

btn_hidden_second?.addEventListener('click', function () {
    answer_second.innerHTML = " ";
})

btn_hidden_third?.addEventListener('click', function () {
    answer_third.innerHTML = " ";
})



