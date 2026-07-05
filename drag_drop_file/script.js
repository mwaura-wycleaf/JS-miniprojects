let uploadButton = document.getElementById("upload-button");
let chosenImg = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");
let container = document.querySelector("container");
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
     imageDisplay.appendChild(imageContainer);
    }
}


