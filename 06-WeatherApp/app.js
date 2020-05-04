const locationTimezone = document.querySelector(".location-timezone");
const locationCountry = document.querySelector("#location-country");
const weatherIcon = document.querySelector(".weather-icon");
const temperatureDescription = document.querySelector(
  ".temperature-description"
);
const degrees = document.querySelector(".temperature-degree");
const feelsLikeDegree = document.querySelector(
  ".temperature-degree-feels-like"
);
const temperatureSpan = document.querySelector(".temperature span");
const temperatureFeelsSpan = document.querySelector(
  "#temperature-feels-like-span"
);
const windSpeed = document.querySelector(".wind-speed");
const windDirection = document.querySelector(".wind-direction");

const weather = {};

const KELVIN = 273;
const API_KEY = `36fbe6b6d29c0ef2318fd39637a16ddd`;

// CHECKING IF BROWSER SUPPORTS GEOLOCATION
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  alert("Browser does not allow geolocation!");
  console.log("Geolocatin is not supported");
}

// ERROR IF GEOLOCATION IS NOT ALLOWED
function showError() {
  alert("Browser does not allow geolocation!");
}

// SET USER POSITION
function setPosition(position) {
  console.log(position);

  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;

  getWeather(latitude, longitude);
}

//GET WEATHER FROM API
function getWeather(latitude, longitude) {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      weather.location = data.name;
      weather.country = data.sys.country;
      weather.description = data.weather[0].description;
      weather.degrees = Math.round(data.main.temp - KELVIN);
      weather.feel = Math.round(data.main.feels_like - KELVIN);
      weather.kelvins = data.main.temp;
      weather.kelvfeel = data.main.feels_like;
      weather.icon = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
      weather.wind = data.wind.speed;
      weather.windDirection = data.wind.deg;

      displayWeather();
    });
}

// DISPLAY WEATHER
function displayWeather() {
  locationTimezone.textContent = `${weather.location},`;
  locationCountry.textContent = weather.country;
  temperatureDescription.textContent = weather.description;
  degrees.textContent = weather.degrees;
  feelsLikeDegree.textContent = weather.feel;
  weatherIcon.innerHTML = weather.icon;
  windSpeed.textContent = `${windSpeedInKm(weather.wind)} km/h`;
  windDirection.textContent = windDegree(weather.windDirection);
}

// K TO F CONVERTION
function kelvinToFahrenheit(temperature) {
  return Math.round(temperature * (9 / 5) - 459.67);
}

// CHANGING DISPLAY TEMPERATURE
function degressClick() {
  if (temperatureSpan.textContent === "°C") {
    let fahrenheit = kelvinToFahrenheit(weather.kelvins);
    let fahrenheitFeels = kelvinToFahrenheit(weather.kelvfeel);
    temperatureSpan.textContent = "°F";
    temperatureFeelsSpan.textContent = "°F";
    degrees.textContent = fahrenheit;
    feelsLikeDegree.textContent = fahrenheitFeels;
    windSpeed.textContent = `${metersToMiles(weather.wind)} mph`;
  } else {
    temperatureSpan.textContent = "°C";
    temperatureFeelsSpan.textContent = "°C";
    degrees.textContent = weather.degrees;
    feelsLikeDegree.textContent = weather.feel;
    windSpeed.textContent = `${windSpeedInKm(weather.wind)} km/h`;
  }
}

// CLICKING DEGREES
degrees.addEventListener("click", degressClick);

// WIND SPEED
function windSpeedInKm(speed) {
  return Math.round((speed * 1000) / 360);
}

function windDegree(direction) {
  if (direction === 0 || direction === 360) {
    return "N";
  }
  if (direction > 0 && direction < 90) {
    return "NE";
  }
  if (direction === 90) {
    return "E";
  }
  if (direction > 90 && direction < 180) {
    return "SE";
  }
  if (direction === 180) {
    return "S";
  }
  if (direction > 190 && direction < 270) {
    return "SW";
  }
  if (direction === 270) {
    return "W";
  }
  if (direction > 270 && direction < 360) {
    return "NW";
  }
}

// M/S TO MI/H
function metersToMiles(speed) {
  return Math.round(speed * 2.23693629);
}
