let maskEmail = document.getElementById("maskEmail")
let email = document.getElementById("email");

function myEmail() {
    let emailValue = email.value;
    let emailIndex = email.indexof("@");
    let username = email.slice(0, emailIndex);
    let domain = email.slice(emailIndex);

    let starsCount = "*".repeat(username.length - 2);
}
