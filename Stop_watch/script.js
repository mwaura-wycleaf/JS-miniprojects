let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timer-display");
let int;

//implement start function
let start = document.getElementById("startTimer");

start.addEventListener("click", function(){
    int = setInterval(displayTime, 10)
})

function displayTime() {
    milliseconds +=10;
    if (milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }

    }

    let hoursTime = hours < 10 ? "0" + hours : hours;
    let minutesTime = minutes < 10 ? "0" + minutes: minutes;
    let secondsTime = seconds < 10 ? "0" + seconds: seconds;
    let millisecondsTime = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = `${hoursTime}: ${minutesTime}: ${secondsTime}: ${millisecondsTime}`;

}