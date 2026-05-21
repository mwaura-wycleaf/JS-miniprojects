 function onclickButton() {
        let phoneNumber = document.querySelector("#phoneNumber").value;
        let starsCount = Math.max(0, phoneNumber.length - 5)
        let stars = "*".repeat(starsCount)
        let newNumber = phoneNumber.slice(0,2) + stars + phoneNumber.slice(-3);
        

        if (phoneNumber === ""){
            document.querySelector("#demo").innerHTML = "Enter phone number!!";
             document.querySelector("#demo").style.color = "red";
        }else {
            document.querySelector("#demo").innerHTML = newNumber;
            document.querySelector("#demo").style.color = "black";
        }
    }
    