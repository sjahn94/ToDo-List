const weather = document.querySelector(".weather_column span");

const API_KEY = "faf197b5c9a7d952037774d812b44f5d";

async function onSuccess(pos) {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const response = await fetch(url);
  const weatherData = await response.json();

  const area = weatherData.name;
  const temp = Math.ceil(weatherData.main.temp - 273.15);

  weather.innerText = `${temp}° @ ${area}`;
}
function onError() {
  alert("Weather API 호출 실패");
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
