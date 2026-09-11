let cards = document.querySelectorAll(".card");
cards.forEach(card => {
card.addEventListener("click", () => {
    if (card.id === "vue"){
     window.location.href = "vue.html"
    }

    if (card.id === "webdev") {
        window.location.href = "webdev.html"
    }
    
})
})
