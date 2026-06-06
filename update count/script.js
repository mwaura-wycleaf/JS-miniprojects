let start = document.getElementById("start");
let reset = document.getElementById("reset");
let reduce = document.getElementById("reduce");
let result = document.getElementById("demo");
let count = 0;
let fontSize = 30;

 function updateCount () {
         document.getElementById("demo").innerHTML = count;
    }

    start.addEventListener("click", function() {
        count++;
        fontSize += 2;
        updateCount();
        result.style.color = "green";
        result.style.fontSize = fontSize + "px";
        });

reduce.addEventListener("click", function() {
            
            if (count > 0){
                count--;
                fontSize -= 2;

            }
            updateCount();
        result.style.color = "red";
        result.style.fontSize = fontSize + "px";
        });      