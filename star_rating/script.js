let startContainer = document.querySelector(".star-container");
let submitButton = document.querySelector("#submit");
let message = document.querySelector("#message");
let submitSection = document.querySelector("submit-section");

//Events for touch and mouse
let event = {
    mouse: {
        over:"click"
    },
    touch: {
        over: "touchstart"
    },
}

let deviceType = "";

//Detect touch device
const isTouchDevice = () => {
    try{
        document.createEvent("TouchEvent");
        deviceType = "touch"
        return true;
    }catch (e) {
        deviceType = "mouse";
        return false;
    }
}

isTouchDevice();

startContainer.forEach((element, index) => {
    element.addEventListaner(event[deviceType].over, () => {
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
    for (let i = starr ; i<=end; i++) {
        if(active) {
            startContainer[i].classList.remove("inactive");
            startContainer[i].firstElementChild.className = "fa-star fa-regular"
            
        }
    }
}

