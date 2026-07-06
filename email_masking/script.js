let maskEmail = document.getElementById("maskEmail")
let email = document.getElementById("email");

maskEmail.addEventListener("click", function clickButton() {
    let myEmail = email.value;
    let starsCount = Math.max(0, myEmail.length - 12)
    let stars = "*".repeat(starsCount)
    let newEmail = myEmail.slice(0,2) + stars + myEmail.slice(-10);
        

    if (myEmail === ""){
        document.querySelector("#demo").innerHTML = "Enter email!!";
            document.querySelector("#demo").style.color = "red";
    }else {
        document.querySelector("#demo").innerHTML = newEmail;
        document.querySelector("#demo").style.color = "black";
    }
})
