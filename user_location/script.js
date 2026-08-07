let locationButton = document.getElementById("get-location");
let locationDetails = document.getElementById("location-details");

locationButton.addEventListener("click", function() {
 if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation , checkError);;
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

const showLocation = async (position) => {
  try {
    const { latitude, longitude } = position.coords;
    
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    
    if (!response.ok) throw new Error("Network response was not ok");
    
    const data = await response.json();
    const address = data.address || {};
    
    const city = address.city || address.town || address.village || address.suburb || "Unknown city";
    const country = address.country || "Unknown country";

    locationDetails.innerText = `${city}, ${country}`;
  } catch (err) {
    locationDetails.innerText = "Failed to fetch city details.";
  }
};
