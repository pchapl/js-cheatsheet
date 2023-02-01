document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
    document.querySelector('code.td-user-date span.hljs-string').innerHTML = `<input type="text" id="td-date-input" value="August 14, 2022 14:15:30">`;
    showCommentsWDates(document.querySelector('#td-date-input').value);
    document.querySelector('#td-date-input').addEventListener('input', (event) => {
        let userDate = event.target.value;
        showCommentsWDates(userDate);
    })
    showCommentsNewDates();
})

function showCommentsWDates(userDate) {
    let currentDate;
    if (userDate === ''){
        currentDate = new Date();
    }
       else {
        currentDate = new Date(userDate);
        if (isNaN(currentDate)) {
            currentDate = new Date(Number(userDate))
        }
    }

    document.querySelector('code.td-get-day span.hljs-comment').innerHTML = '// ' + currentDate.getDay();
    document.querySelector('code.td-get-hours span.hljs-comment').innerHTML = '// ' + currentDate.getHours();
    document.querySelector('code.td-get-minutes span.hljs-comment').innerHTML = '// ' + currentDate.getMinutes();
    document.querySelector('code.td-get-seconds span.hljs-comment').innerHTML = '// ' + currentDate.getSeconds();
    document.querySelector('code.td-get-mseconds span.hljs-comment').innerHTML = '// ' + currentDate.getMilliseconds();
    document.querySelector('code.td-get-time-zone-offset span.hljs-comment').innerHTML = '// ' + currentDate.getTimezoneOffset();
    document.querySelector('code.td-get-time span.hljs-comment').innerHTML = '// ' + currentDate.getTime();
    document.querySelector('code.td-get-full-year span.hljs-comment').innerHTML = '// ' + currentDate.getFullYear();
    document.querySelector('code.td-get-month span.hljs-comment').innerHTML = '// ' + currentDate.getMonth();
    document.querySelector('code.td-get-date span.hljs-comment').innerHTML = '// ' + currentDate.getDate();
    document.querySelector('code.td-to-iso span.hljs-comment').innerHTML = '// ' + currentDate.toISOString();

}

function showCommentsNewDates() {
    document.querySelector('code.td-now-date span.hljs-comment').innerHTML = '// ' + new Date();
    document.querySelector('code.td-string-date span.hljs-comment').innerHTML = '// ' + new Date('June 30, 2016 01:57:16');
    document.querySelector('code.td-value-date span.hljs-comment').innerHTML = '// ' + new Date(1467251836000);
    document.querySelector('code.td-params-date span.hljs-comment').innerHTML = '// ' + new Date(2016, 5, 30, 1, 57, 16);
}







