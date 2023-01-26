document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
    document.querySelector('code.new-date span.hljs-string').innerHTML = `<input type="text" id="date-input">`;

})