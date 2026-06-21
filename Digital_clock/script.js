let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let seconds = document.querySelector(".seconds");

setInterval(showTime, 1000)

function showTime () {
    let time = new Date();
    hour.innerHTML = time.getHours();
    minute.innerHTML = time.getMinutes();
    seconds.innerHTML = time.getSeconds();
    

}



