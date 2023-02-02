let buttonAdvice = document.querySelector(".web-button");

buttonAdvice.addEventListener('click', (e) => {
    e.preventDefault();

    async function load() {
        let response = await fetch("https://api.adviceslip.com/advice");
        let data = await response.json();
        document.querySelector(".web-advice").innerHTML = data.slip.advice;
        document.querySelector(".web-status").innerHTML = response.status;
        document.querySelector(".web-method").innerHTML = response.headers;
        console.log(...response.headers)
    }
    
    load();
})