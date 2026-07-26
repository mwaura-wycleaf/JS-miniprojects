let textId = document.getElementById("my-text");
let longestWord = document.getElementById("theWord");
let letterCount = document.getElementById("theCount");

function getLongestWord() {
    let text = textId.value;
    let words = text.split(" ");
    let max = 0;
    let longest = "";

    for (let word of words) {
        if (word.length > max) {
            max = word.length;
            longest = word;
        }
    }
}