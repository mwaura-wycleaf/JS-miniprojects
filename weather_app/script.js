const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('keyup', (e) => {
  const cityName = searchInput.value.trim();
  const API_KEY = 'd024509f1aa0e0fef84d274af37ba295';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  
  
  if (e.key === 'Enter' && cityName) {
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.name);
        console.log(data.main.temp);
        console.log(data.main.feels_like);
        console.log(data.main.humidity);
        console.log(data.weather[0].description);
        console.log(data.wind.speed);
      });
  }
});
