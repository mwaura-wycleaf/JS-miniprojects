let maskEmail = document.getElementById("maskEmail")
let email = document.getElementById("email");

maskEmail.addEventListener("click", () => {
    let emailIndex = email.indexOf("@");
    let username = email.slice(0, emailIndex);
    let domain = email.slice(emailIndex);

    let starsCount = "*".repeat(username.length - 2);

    let maskedEmail = username.slice(0, 2) + starsCount + domain;
     document.getElementById("demo").innerHTML = maskedEmail;

});
