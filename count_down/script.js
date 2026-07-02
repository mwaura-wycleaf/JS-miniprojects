let dayBox = document.getElementById("day-box");
let hourBox = document.getElementById("hour-box");
let minuteBox = document.getElementById("min-box");
let secondBox = document.getElementById("sec-box");

//Format: Date(year, month, day, hours, minutes, seconds)
let endDate = new Date(2026,8,3,16,30);
//Outputs the value in milliseconds
let endTime = endDate.getTime();

function countDown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let timeRemaining = endTime - todayTime;
    
 
    //To milliseconds
    let oneMinute = 60 * 1000;
    let oneHour = 60 * oneMinute;
    let oneDay = 24 * oneHour;

    let addZeros = (num) => {
        if(num < 10){
            return "0" + num;
        }
        return num;
    };

    //if end date is before today date, then countdown has ended
    if (endTime < todayTime) {
      document.querySelector(".container").innerHTML = "<h1>Countdown has ended!</h1>";
    }

    //if end date is after today date, then countdown is still running

    else{
        let daysleft = Math.floor(timeRemaining / oneDay);
        let hoursleft = Math.floor((timeRemaining % oneDay) / oneHour);
        let minutesleft = Math.floor((timeRemaining % oneHour) / oneMinute);
        let secondsleft = Math.floor((timeRemaining % oneMinute) / 1000);
        dayBox.innerHTML = addZeros(daysleft);
        hourBox.innerHTML = addZeros(hoursleft);
        minuteBox.innerHTML = addZeros(minutesleft);
        secondBox.innerHTML = addZeros(secondsleft);
    }


}
setInterval(countDown, 1000);
