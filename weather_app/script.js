const searchInput = document.querySelector(".search-input");

const getWeatherDetails = (cityName) => {
const API_KEY = "d024509f1aa0e0fef84d274af37ba295";
const API_URl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
}

searchInput.addEventListener("keyup", (e) => {
  const cityName = searchInput.value.trim();

  if (e.key === "Enter" && cityName) {
    console.log(cityName);
  }
})