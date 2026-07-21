let star = document.querySelectorAll(".star-container");
let submitButton = document.querySelector("#submit");
let message = document.querySelector("#message");
let submitSection = document.querySelector(".submit-section");

const messages = ["", "Terrible", "Poor", "Average", "Good", "Excellent"];



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

