let stars = document.querySelectorAll(".star-container");
let submitButton = document.querySelector("#submit");
let message = document.querySelector("#message");
let submitSection = document.querySelector(".submit-section");

const messages = ["", "Terrible", "Poor", "Average", "Good", "Excellent"];


stars.forEach((clickedStar, clickedIndex) => {
  clickedStar.addEventListener("click", () => {
    
    submitButton.disabled = false;


    stars.forEach((star, index) => {
      const icon = star.firstElementChild;

      if (index <= clickedIndex) {
        star.classList.remove("inactive");
        icon.className = "fa-star fa-solid";  // Filled star
      } else {
        star.classList.add("inactive");
        icon.className = "fa-star fa-regular"; // Empty star
      }
    });

    
    message.innerText = messages[clickedIndex + 1];
  });
});

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

