let startContainer = document.querySelectorAll(".star-container");
let submitButton = document.querySelector("#submit");
let message = document.querySelector("#message");
let submitSection = document.querySelector(".submit-section");

const messages = ["", "Terrible", "Poor", "Average", "Good", "Excellent"];

startContainer.forEach((element, index) => {
    element.addEventListener(event[deviceType].over, () => {
        submitButton.disabled = false;
        if(element.classList.contains("inactive")){
            //Fill star
            ratingUpdate(0, index, true);
        } else {
            //Regular stars (remove color)
            ratingUpdate(index, startContainer.length-1, false);
        }
    })
})

const ratingUpdate = (start, end, active) => {
    for (let i = start ; i<=end; i++) {
        if(active) {
            startContainer[i].classList.remove("inactive");
            startContainer[i].firstElementChild.className = "fa-star fa-solid"
            
        }else {
            startContainer[i].classList.add("inactive");
            startContainer[i].firstElementChild.className = "fa-star fa-regular"
        }
    }

    // Count stars that are filled
        let activeCount = 0;
        startContainer.forEach(star => {
            if (!star.classList.contains("inactive")) {
                activeCount++;
            }
        });

        if (activeCount > 0){
            switch (activeCount) {
            case 1:
            message.innerText = "Terrible";
            break;

            case 2:
             message.innerText = "Poor";
            break;

            case 3:
             message.innerText = "Average";
            break;

            case 4:
             message.innerText = "Good";
            break;

            case 5:
             message.innerText = "Excellent";
            break;
        }
    }
    else {
        message.innerText = "";
    }
};

submitButton.addEventListener("click", () => {
    submitSection.classList.remove("hide");
    submitSection.classList.add("show");
    submitButton.disabled = true;
    
});

window.onload = () => {
    submitButton.disabled = true;
    submitSection.classList.remove("hide");
    submitSection.classList.add("show");
}

