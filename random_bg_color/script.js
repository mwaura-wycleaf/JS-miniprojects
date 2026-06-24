let myButton = document.getElementById("myButton")

myButton.addEventListener("click", function() {
    document.body.style.backgroundColor = `rgb(${Math.round(Math.random()* 225)}, ${Math.round(Math.random()* 225)}, ${Math.round(Math.random()* 225)} )`
})
