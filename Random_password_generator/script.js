const characters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:'",.<>/?\`\\~ `;
let output = document.getElementById("output");

function genPassword(){
    let length = document.getElementById("length").value;
    document.getElementById("length-value").innerText = length;
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    output.value = password;
}

genPassword();