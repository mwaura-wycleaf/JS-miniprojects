let uploadButton = document.getElementById("upload-button");
let chosenImg = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");
let container = document.querySelector(".container");
let error = document.getElementById("error");
let imgDisplay = document.getElementById("image-display");

const fileHandler = (file, name, type) => {
    if (type.split("/")[0] !== "image"){
        //File type error
        error.innerText = "Please Upload an image file"
        return false;
    }
    error.innerText = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
     let imageContainer = document.createElement("figure");
     let img = document.createElement("img");
     img.src = reader.result;
     imageContainer.appendChild(img);
     imageContainer.innerHTML += `<figcaption>${name}</figcaption>`;
     imgDisplay.appendChild(imageContainer);
    }
}

//Upload Button 
uploadButton.addEventListener("change", () => {
  imgDisplay.innerHTML = "";
  Array.from(uploadButton.files).forEach((file) =>{
    fileHandler(file, file.name, file.type)
  })
    
})

container.addEventListener("dragenter", (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.add("active");
}, false);

container.addEventListener("dragleave", (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.remove("active")
}, false);

container.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.add("active")
}, false);

container.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.remove("active")
    let draggedData = e.dataTransfer;
    let files = draggedData.files;
    imgDisplay.innerHTML = "";
    
    Array.from(files).forEach((file) =>{
    fileHandler(file, file.name, file.type)
  });

  window.onload = () => {
    error.innerText = "";
  }
}, false);