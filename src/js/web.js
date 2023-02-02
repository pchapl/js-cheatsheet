/*let buttonAdvice = document.querySelectorAll(".web-button");

buttonAdvice.forEach(function(advice) {
    advice?.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.classList.contains('.web-button-success')) {
        success();
    }
    if (e.target.classList.contains('.web-button-unsuccess')) {
        unsuccess();
    }
})
})*/



let buttonSuccess = document.querySelector(".web-button-success");
buttonSuccess?.addEventListener('click', (e) => {
    e.preventDefault();

    async function success() {
        let response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=C0ZP0xR1klDe6ID8tIORjR17tQTEUjYx&s=cat");
        let data = await response.json();
        let headersObject = [...response.headers];

        let values = Object.values(headersObject);
        let headers = [];
        for (let i = 0; i < values.length; i++) {
            headers.push(values[i]);
        }

        let headersStr = [];
        for (let i = 0; i < headers.length; i++) {
            headersStr.push(headers[i].join(": "));
        }

        try {
            if(response.status === 200){
                document.querySelector(".web-gif-success").innerHTML += `<img src="${data.data.images.fixed_height_small.url}" alt = "">`;
                document.querySelector(".web-status-success").innerHTML = `Status Code: ${response.status}`;
                document.querySelector(".web-headers-success").innerHTML = "Headers:";
                for (let i = 0; i < headersStr.length; i++) {
                    document.querySelector(".web-header-success").innerHTML += `<div class="web-header">${headersStr[i]}</div>`;
                }           
            } else {
                throw new Error ("Ошибка сервера. Проверьте адрес запроса и заголовки.");
            }          
        } catch (error) {
            console.log(error.message);
            document.querySelector(".web-gif-success").innerHTML = error.message;
            document.querySelector(".web-status-success").innerHTML = `Status Code: ${response.status}`;
            document.querySelector(".web-headers-success").innerHTML = "Headers:";
            for (let i = 0; i < headersStr.length; i++) {
                document.querySelector(".web-header-success").innerHTML += `<div class="web-header">${headersStr[i]}</div>`;
            }  
        }
    }

    success();
})

let buttonUnsuccess = document.querySelector(".web-button-unsuccess");
buttonUnsuccess?.addEventListener('click', (e) => {
    e.preventDefault();

    async function unsuccess() {
        let response = await fetch("https://api.giphy.com/v1/gifs/translat?api_key=C0ZP0xR1klDe6ID8tIORjR17tQTEUjYx&s=cat");
        let data = await response.json();
        let headersObject = [...response.headers];

        let values = Object.values(headersObject);
        let headers = [];
        for (let i = 0; i < values.length; i++) {
            headers.push(values[i]);
        }

        let headersStr = [];
        for (let i = 0; i < headers.length; i++) {
            headersStr.push(headers[i].join(": "));
        }

        try {
            if(response.status === 200){
                document.querySelector(".web-gif-unsuccess").innerHTML += `<img src="${data.data.images.fixed_height_small.url}" alt = "">`;
                document.querySelector(".web-status-unsuccess").innerHTML = `Status Code: ${response.status}`;
                document.querySelector(".web-headers-unsuccess").innerHTML = "Headers:";
                for (let i = 0; i < headersStr.length; i++) {
                    document.querySelector(".web-header-unsuccess").innerHTML += `<div class="web-header">${headersStr[i]}</div>`;
                }     
                
            } else {
                throw new Error ("Ошибка сервера. Проверьте адрес запроса и заголовки.");
            }           
        } catch (error) {
            console.log(error.message);
            document.querySelector(".web-gif-unsuccess").innerHTML = error;
            document.querySelector(".web-status-unsuccess").innerHTML = `Status Code: ${response.status}`;
            document.querySelector(".web-headers-unsuccess").innerHTML = "Headers:";
            for (let i = 0; i < headersStr.length; i++) {
                document.querySelector(".web-header-unsuccess").innerHTML += `<div class="web-header">${headersStr[i]}</div>`;
            }
        }
    }

    unsuccess();
})