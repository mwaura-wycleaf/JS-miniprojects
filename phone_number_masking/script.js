 function onclickButton() {
        let phoneNumber = document.querySelector("#phoneNumber").value;
        let starsCount = Math.max(0, phoneNumber.length - 6)
        let stars = "*".repeat(starsCount)
        let newNumber = phoneNumber.slice(0,4) + stars + phoneNumber.slice(-2);
        

        if (phoneNumber === ""){
            document.querySelector("#demo").innerHTML = "Enter phone number!!";
             document.querySelector("#demo").style.color = "red";
        }else {
            document.querySelector("#demo").innerHTML = newNumber;
            document.querySelector("#demo").style.color = "black";
        }
    }
    