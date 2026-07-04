window.addEventListener("keydown", (e) => {
    document.getElementById("result").innerHTML = `Key pressed: <span>${e.key}</span> | Key code:<span> ${e.keyCode}</span>`
});