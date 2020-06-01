
window.onload = function () {

    let seconds = 0;
    let tens = 0;

    let buttonStart = document.querySelector('#button-start');
    let buttonStop = document.querySelector('#button-stop');
    let buttonReset = document.querySelector('#button-reset');

    let appendSeconds = document.querySelector('#seconds');
    let appendTens = document.querySelector('#tens')
    let interval;

    buttonStart.onclick = () => {
        this.clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = ()=>{
        this.clearInterval(interval);
    }

    buttonReset.onclick = ()=>  {
        this.clearInterval(interval);
        tens = "00"
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer() {
        tens++;

        tens < 9 ? appendTens.innerHTML = '0'+ tens : appendTens.innerHTML = tens;

        if(tens > 99){
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '0' + 0;
        }
        
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}