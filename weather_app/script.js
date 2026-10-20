const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keyup", (e) => {
  const cityName = searchInput.value.trim();

  if (e.key === "Enter" && cityName) {
    console.log(cityName);
  }
})