let locationButton = document.getElementById("get-location");
let locationDetails = document.getElementById("location-details");

locationButton.addEventListener("click", function() {
 if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, checkError);;
 } else {
    locationDetails.innerText = "Geolocation is not supported by this browser.";
 }
});
