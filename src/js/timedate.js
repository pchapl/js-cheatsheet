document.addEventListener('DOMContentLoaded', () => {
    let input = document.querySelector('code.td-user-date span.hljs-string');
    if (!input) {
        return
    }
    hljs.highlightAll();
    input.innerHTML = `<input type="text" id="td-date-input" value="August 14, 2022 14:15:30">`;
    showCommentsWDates(document.querySelector('#td-date-input').value);
    document.querySelector('#td-date-input').addEventListener('input', (event) => {
        let userDate = event.target.value;
        showCommentsWDates(userDate);
    })
    showCommentsNewDates();
})

function showCommentsWDates(userDate) {
    let currentDate;
    if (userDate === '') {
        currentDate = new Date();
    } else if (userDate.match(/^\d{2,}, \d+/)) {
        const params = userDate.split(',').map(el => Number(el));
        currentDate = new Date(...params);
    } else {
        currentDate = new Date(userDate);
        if (isNaN(currentDate)) {
            currentDate = new Date(Number(userDate))
        }
    }

    document.querySelector('code.td-get-day span.hljs-comment').innerHTML = '// ' + currentDate.getDay() + ' — день недели, где 0 = воскресенье';
    document.querySelector('code.td-get-hours span.hljs-comment').innerHTML = '// ' + currentDate.getHours() + ' — часы с 0 до 23';
    document.querySelector('code.td-get-minutes span.hljs-comment').innerHTML = '// ' + currentDate.getMinutes() + ' — минуты от 0 до 59';
    document.querySelector('code.td-get-seconds span.hljs-comment').innerHTML = '// ' + currentDate.getSeconds() + ' — секунды от 0 до 59';
    document.querySelector('code.td-get-mseconds span.hljs-comment').innerHTML = '// ' + currentDate.getMilliseconds() + ' — миллисекунды от 0 до 999.';
    document.querySelector('code.td-get-time-zone-offset span.hljs-comment').innerHTML = '// ' + currentDate.getTimezoneOffset() + ' — смещение в минутах между текущей часовой зоной и UTC';
    document.querySelector('code.td-get-time span.hljs-comment').innerHTML = '// ' + currentDate.getTime() + ' — timestamp';
    document.querySelector('code.td-get-full-year span.hljs-comment').innerHTML = '// ' + currentDate.getFullYear() + ' — год';
    document.querySelector('code.td-get-month span.hljs-comment').innerHTML = '// ' + currentDate.getMonth() + ' — месяц с 0 до 11, где 0 = январь';
    document.querySelector('code.td-get-date span.hljs-comment').innerHTML = '// ' + currentDate.getDate() + ' — день месяца с 1 до 31';
    document.querySelector('code.td-to-iso span.hljs-comment').innerHTML = '// ' + currentDate.toISOString() + ' — дата в ISO формате';

}

function showCommentsNewDates() {
    document.querySelector('code.td-now-date span.hljs-comment').innerHTML = '// ' + new Date();
    document.querySelector('code.td-string-date span.hljs-comment').innerHTML = '// ' + new Date('June 30, 2016 01:57:16');
    document.querySelector('code.td-value-date span.hljs-comment').innerHTML = '// ' + new Date(1467251836000);
    document.querySelector('code.td-params-date span.hljs-comment').innerHTML = '// ' + new Date(2016, 5, 30, 1, 57, 16);
}







