let text = document.getElementById("text");
let submit = document.getElementById("submit");
let resume = document.getElementById("resume");
let pause = document.getElementById("pause");   
let audio;

submit.addEventListener("click", function(){
    audio.text = text.value;

    //speak the text
    window.speechSynthesis.speak(audio);
});
resume.addEventListener("click", function(){
    pause.style.display = "block";
    resume.style.display = "none";
    
    if(speechSynthesis.pause){
        speechSynthesis.resume();
    }
})

window.onload = function(){
    if ('speechSynthesis' in window) {
        audio = new SpeechSynthesisUtterance();
    } else {
        alert("Sorry, your browser doesn't support text to speech!");
    }
}