const searchInput = document.querySelector('.search-input');
const temperature = document.querySelector('.temperature');

const description = document.querySelector('.description');
console.log(temperature)

searchInput.addEventListener('keyup', (e) => {
  const cityName = searchInput.value.trim();
  const API_KEY = 'd024509f1aa0e0fef84d274af37ba295';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  const weatherIconSrc = document.querySelector('.weather-icon')
  
  
  if (e.key === 'Enter' && cityName) {

    function kTODegree(temp) {
      return Math.round(temp - 273.15);
    }
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        temperature.innerHTML = `${kTODegree(data.main.temp)} °C` ;
        description.innerHTML = data.weather[0].description;
        weatherIconSrc.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
      });
  }
});
