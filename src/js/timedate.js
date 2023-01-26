document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
    document.querySelector('code.td-new-date span.hljs-string').innerHTML = `<input type="text" id="td-date-input" value="August 14, 2022 14:15:30">`;
    showCommentsWDates(document.querySelector('#td-date-input').value);
    document.querySelector('#td-date-input').addEventListener('input', (event) => {
        let userDate = event.target.value;
        showCommentsWDates(userDate);
    })
})

function showCommentsWDates(userDate) {
        let currentDate = new Date(userDate);
        if (isNaN(currentDate)) {
            currentDate = new Date(Number(userDate))
        }

    document.querySelector('code.td-get-day span.hljs-comment').innerHTML = '// ' + currentDate.getDay();
    document.querySelector('code.td-get-hours span.hljs-comment').innerHTML = '// ' + currentDate.getHours();
    document.querySelector('code.td-get-time span.hljs-comment').innerHTML = '// ' + currentDate.getTime();
    document.querySelector('code.td-get-full-year span.hljs-comment').innerHTML = '// ' + currentDate.getFullYear();
    document.querySelector('code.td-to-iso span.hljs-comment').innerHTML = '// ' + currentDate.toISOString();

}