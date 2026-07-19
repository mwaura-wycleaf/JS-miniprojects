let maskEmail = document.getElementById("maskEmail")
let emailInput = document.getElementById("email");

maskEmail.addEventListener("click", () => {
    let email = emailInput.value;
    let emailIndex = email.indexOf("@");

    if (emailIndex === -1) {
        document.getElementById("demo").innerHTML = "Please enter a valid email with @";
        return;
    }
    let username = email.slice(0, emailIndex);
    let domain = email.slice(emailIndex);

    let maskedEmail;
    if (username.length <= 2) {
        maskedEmail = username + domain;
    } else {
        let starsCount = "*".repeat(username.length - 2);
        maskedEmail = username.slice(0, 2) + starsCount + domain;
    }

    document.getElementById("demo").innerHTML = maskedEmail;
    
});
emailInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter"){
        event.preventDefault();
        maskEmail.click();
      }
    });
