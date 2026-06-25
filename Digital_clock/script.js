let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let seconds = document.querySelector(".seconds");


setInterval(function() {
    let time = new Date();
    hour.innerHTML = time.getHours();
    minute.innerHTML = time.getMinutes();
    seconds.innerHTML = time.getSeconds();
    
    if(hour.innerHTML < 10){
        hour = "0" + hour.innerHTML;
    }

    if(minute.innerHTML < 10){
        minute.innerHTML = "0" + minute.innerHTML;
    }

    if(seconds.innerHTML < 10){
        seconds.innerHTML = "0" + seconds.innerHTML;
    }

}, 1000)



