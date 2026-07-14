let togglePassword = document.querySelector("#togglePassword i");
let password = document.querySelector("#password");

togglePassword.addEventListener("click", () => {
if (password.type === "password"){
    password.type = "text";
    togglePassword.classList.replace("fa-eye-slash", "fa-eye")
}else if (password.type === "text") {
    password.type = "password";
    togglePassword.classList.replace("fa-eye", "fa-eye-slash");
}

})