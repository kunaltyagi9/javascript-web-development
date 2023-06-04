window.onload = () => {
    document.querySelector("#calculate").onclick = calculate;
    document.querySelector("#reset").onclick = resetTime;
}

function calculate() {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value; 

    const stop = document.querySelector("#stop");
    
    const endTime = new Date(date + " " + time);

    const myInterval = setInterval(() => calculateTime(endTime), 1000);

    stop.addEventListener('click', () => {
        clearInterval(myInterval);
    })
}

const calculateTime = (endTime) => {
    const currentTime = new Date();

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');
    
    if(endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;

        days.innerText = Math.floor(timeLeft / (3600 * 24));
        hours.innerText = Math.floor((timeLeft / 3600) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    } else {
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
    }
}

function resetTime() {
    const days = document.querySelector('#countdown-days').innerText = 0;
    const hours = document.querySelector('#countdown-hours').innerText = 0;
    const minutes = document.querySelector('#countdown-minutes').innerText = 0;
    const seconds = document.querySelector('#countdown-seconds').innerText = 0;
}