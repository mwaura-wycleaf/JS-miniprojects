let textId = document.getElementById("my-text");
let longestWord = document.getElementById("theWord");
let letterCount = document.getElementById("theCount");

function getLongestWord() {
    let text = textId.value;
    let words = text.split(" ");
    let max = 0;
    let longest = "";
}