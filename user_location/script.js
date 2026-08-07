let locationButton = document.getElementById("get-location");
let locationDetails = document.getElementById("location-details");

locationButton.addEventListener("click", function() {
 if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, checkError);;
 } else {
    locationDetails.innerText = "Geolocation is not supported by this browser.";
 }
});

const showPosition = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    locationDetails.innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

const checkError = (error) => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            locationDetails.innerText = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            locationDetails.innerText = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            locationDetails.innerText = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            locationDetails.innerText = "An unknown error occurred.";
            break;
    }
}
