let myText = document.getElementById("my-text");
let theCount = document.getElementById("theCount");

myText.addEventListener("input", () =>{
    let count = (myText.value).length;
    console.log(count);
    theCount.textContent = `Total characters: ${count}`
})