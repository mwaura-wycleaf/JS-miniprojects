     let convrertTemperature = document.getElementById("convertTemperature")
     convertTemperature.addEventListener("click", function convertTemperature() {
        let temp = document.querySelector("#tempConversion").value;
        let unit = document.querySelector("#unitName").value;
        let finalResult;
        if (unit === "c=>f") {
            finalResult = (parseFloat(temp) * 9/5) + 32 +" F";
        }else if (unit === "f=>c"){
            finalResult = (parseFloat(temp)- 32) * 5/9 +" C";
        }
        
        document.querySelector("#demo").innerHTML = finalResult;
    })