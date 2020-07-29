//  TODAY'S WEATHER CONST
const locationCity = document.querySelector(".location-timezone");
const currentWeatherIcon = document.querySelector(".weather-icon");
const currentTemperatureDescription = document.querySelector(
  ".temperature-description"
);
const currentDegrees = document.querySelector(".temperature-degree");
const currentFeelsLikeDegree = document.querySelector(
  ".temperature-degree-feels-like"
);
const currentTemperatureSpan = document.querySelector(".temperature span");
const currentTemperatureFeelsSpan = document.querySelector(
  "#temperature-feels-like-span"
);
const currentWindSpeed = document.querySelector(".wind-speed");
const currentWindDirection = document.querySelector(".wind-direction");

const weather = {};

const KELVIN = 273;
const API_KEY = `36fbe6b6d29c0ef2318fd39637a16ddd`;

//  FIRST DAY CONST
const firstDayName = document.querySelector(".first-day-name");
const firstDayIcon = document.querySelector(".first-day-icon");
const firstDayDescription = document.querySelector(".first-day-description");
const firstDayTemp = document.querySelector(".first-day-temp");
const firstDayWindSpeed = document.querySelector(".first-day-wind-speed");
const firstDayWindDirection = document.querySelector(
  ".first-day-wind-direction"
);

//  SECOND DAY CONST
const secondDayName = document.querySelector(".second-day-name");
const secondDayIcon = document.querySelector(".second-day-icon");
const secondDayDescription = document.querySelector(".second-day-description");
const secondDayTemp = document.querySelector(".second-day-temp");
const secondDayWindSpeed = document.querySelector(".second-day-wind-speed");
const secondDayWindDirection = document.querySelector(
  ".second-day-wind-direction"
);

//  THIRD DAY CONST
const thirdDayName = document.querySelector(".third-day-name");
const thirdDayIcon = document.querySelector(".third-day-icon");
const thirdDayDescription = document.querySelector(".third-day-description");
const thirdDayTemp = document.querySelector(".third-day-temp");
const thirdDayWindSpeed = document.querySelector(".third-day-wind-speed");
const thirdDayWindDirection = document.querySelector(
  ".third-day-wind-direction"
);

//  FOURTH DAY CONST
const fourthDayName = document.querySelector(".fourth-day-name");
const fourthDayIcon = document.querySelector(".fourth-day-icon");
const fourthDayDescription = document.querySelector(".fourth-day-description");
const fourthDayTemp = document.querySelector(".fourth-day-temp");
const fourthDayWindSpeed = document.querySelector(".fourth-day-wind-speed");
const fourthDayWindDirection = document.querySelector(
  ".fourth-day-wind-direction"
);

//  CHECKING IF BROWSER SUPPORTS GEOLOCATION
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  alert("Browser does not allow geolocation!");
  console.log("Geolocatin is not supported");
}

//  ERROR IF GEOLOCATION IS NOT ALLOWED
function showError() {
  alert("Browser does not allow geolocation!");
}

//  SET USER POSITION
function setPosition(position) {
  console.log(position);

  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;

  getWeather(latitude, longitude);
}

//  GET WEATHER FROM API
function getWeather(latitude, longitude) {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const api = `${proxy}api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&
  exclude=daily&appid=${API_KEY}`;

  const regex = /\/(.*)/;

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      //  TODAY'S WEATHER
      weather.currentLocation = data.timezone.match(regex)[1];
      weather.currentIcon = `<img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png">`;
      weather.currentDescription = data.current.weather[0].description;
      weather.currentDegrees = Math.round(data.current.temp - KELVIN);
      weather.currentFeelsLikeDegree = Math.round(
        data.current.feels_like - KELVIN
      );
      weather.currentWindSpeed = data.current.wind_speed;
      weather.currentWindDirection = data.current.wind_deg;

      weather.currentKelvins = data.current.temp;
      weather.currentFeelsKelvins = data.current.feels_like;

      //  FIRST DAY WEATHER
      weather.firstDayName = data.daily[1].dt;
      weather.firstDayIcon = `<img src="http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png">`;
      weather.firstDayDescription = data.daily[1].weather[0].description;
      weather.firstDayTemp = `${Math.round(
        data.daily[1].temp.day - KELVIN
      )} °C`;
      weather.firtstDayKelvins = data.daily[1].temp.day;
      weather.firstDayWindSpeed = data.daily[1].wind_speed;
      weather.firstDayWindDirection = data.daily[1].wind_deg;

      //  SECOND DAY WEATHER
      weather.secondDayName = data.daily[2].dt;
      weather.secondDayIcon = `<img src="http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}.png">`;
      weather.secondDayDescription = data.daily[2].weather[0].description;
      weather.secondDayTemp = `${Math.round(
        data.daily[2].temp.day - KELVIN
      )} °C`;
      weather.secondDayKelvins = data.daily[2].temp.day;
      weather.secondDayWindSpeed = data.daily[2].wind_speed;
      weather.secondDayWindDirection = data.daily[2].wind_deg;

      //  THIRD DAY WEATHER
      weather.thirdDayName = data.daily[3].dt;
      weather.thirdDayIcon = `<img src="http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}.png">`;
      weather.thirdDayDescription = data.daily[3].weather[0].description;
      weather.thirdDayTemp = `${Math.round(
        data.daily[3].temp.day - KELVIN
      )} °C`;
      weather.thirdDayKelvins = data.daily[3].temp.day;
      weather.thirdDayWindSpeed = data.daily[3].wind_speed;
      weather.thirdDayWindDirection = data.daily[3].wind_deg;

      //  FOURTH DAY WEATHER
      weather.fourthDayName = data.daily[4].dt;
      weather.fourthDayIcon = `<img src="http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}.png">`;
      weather.fourthDayDescription = data.daily[4].weather[0].description;
      weather.fourthDayTemp = `${Math.round(
        data.daily[4].temp.day - KELVIN
      )} °C`;
      weather.fourthDayKelvins = data.daily[4].temp.day;
      weather.fourthDayWindSpeed = data.daily[4].wind_speed;
      weather.fourthDayWindDirection = data.daily[4].wind_deg;

      displayWeather();
    });
}

//  DISPLAY WEATHER
function displayWeather() {
  locationCity.textContent = weather.currentLocation;

  //  TODAY'S WEATHER
  currentWeatherIcon.innerHTML = weather.currentIcon;
  currentTemperatureDescription.textContent = weather.currentDescription;
  currentDegrees.textContent = weather.currentDegrees;
  currentFeelsLikeDegree.textContent = weather.currentFeelsLikeDegree;
  currentWindSpeed.textContent = `${windSpeedInKm(
    weather.currentWindSpeed
  )} km/h`;
  currentWindDirection.textContent = windDegree(weather.currentWindDirection);

  //  FIRST DAY WEATHER
  firstDayName.textContent = getDayName(weather.firstDayName);
  firstDayIcon.innerHTML = weather.firstDayIcon;
  firstDayDescription.textContent = weather.firstDayDescription;
  firstDayTemp.textContent = weather.firstDayTemp;
  firstDayWindSpeed.textContent = `${windSpeedInKm(
    weather.firstDayWindSpeed
  )} km/h`;
  firstDayWindDirection.textContent = windDegree(weather.firstDayWindDirection);

  //  SECOND DAY WEATHER
  secondDayName.textContent = getDayName(weather.secondDayName);
  secondDayIcon.innerHTML = weather.secondDayIcon;
  secondDayDescription.textContent = weather.secondDayDescription;
  secondDayTemp.textContent = weather.secondDayTemp;
  secondDayWindSpeed.textContent = `${windSpeedInKm(
    weather.secondDayWindSpeed
  )} km/h`;
  secondDayWindDirection.textContent = windDegree(
    weather.secondDayWindDirection
  );

  //  THIRD DAY WEATHER
  thirdDayName.textContent = getDayName(weather.thirdDayName);
  thirdDayIcon.innerHTML = weather.thirdDayIcon;
  thirdDayDescription.textContent = weather.thirdDayDescription;
  thirdDayTemp.textContent = weather.thirdDayTemp;
  thirdDayWindSpeed.textContent = `${windSpeedInKm(
    weather.thirdDayWindSpeed
  )} km/h`;
  thirdDayWindDirection.textContent = windDegree(weather.thirdDayWindDirection);

  //  FOURTH DAY WEATHER
  fourthDayName.textContent = getDayName(weather.fourthDayName);
  fourthDayIcon.innerHTML = weather.fourthDayIcon;
  fourthDayDescription.textContent = weather.fourthDayDescription;
  fourthDayTemp.textContent = weather.fourthDayTemp;
  fourthDayWindSpeed.textContent = `${windSpeedInKm(
    weather.fourthDayWindSpeed
  )} km/h`;
  fourthDayWindDirection.textContent = windDegree(
    weather.fourthDayWindDirection
  );
}

//  DAY NAME
function getDayName(unixTime) {
  let day = new Date(unixTime * 1000).toLocaleString("us-US", {
    weekday: "long",
  });
  if (day === "poniedziałek") {
    return "Monday";
  }
  if (day === "wtorek") {
    return "Tuesday";
  }
  if (day === "środa") {
    return "Wednesday";
  }
  if (day === "czwartek") {
    return "Thursday";
  }
  if (day === "piątek") {
    return "Friday";
  }
  if (day === "sobota") {
    return "Saturday";
  }
  if (day === "niedziela") {
    return "Sunday";
  }
}

//  M/S TO KM/H CONVERTION
function windSpeedInKm(speed) {
  return Math.round((speed * 1000) / 360);
}

//  M/S TO MI/H
function metersToMiles(speed) {
  return Math.round(speed * 2.23693629);
}

//  K TO F CONVERTION
function kelvinToFahrenheit(temperature) {
  return Math.round(temperature * (9 / 5) - 459.67);
}

//  WIND DIRECTION
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
  if (direction > 180 && direction < 270) {
    return "SW";
  }
  if (direction === 270) {
    return "W";
  }
  if (direction > 270 && direction < 360) {
    return "NW";
  }
}

//  CHANGING DISPLAY TEMPERATURE
function degressClick() {
  if (currentTemperatureSpan.textContent.includes("°C")) {
    let fahrenheit = kelvinToFahrenheit(weather.currentKelvins);
    let fahrenheitFeels = kelvinToFahrenheit(weather.currentFeelsKelvins);

    //    TODAY'S WEATHER
    currentDegrees.textContent = fahrenheit;
    currentFeelsLikeDegree.textContent = fahrenheitFeels;
    currentTemperatureSpan.textContent = "°F";
    currentTemperatureFeelsSpan.textContent = "°F";
    currentWindSpeed.textContent = `${metersToMiles(
      weather.currentWindSpeed
    )} mph`;

    //    FIRST DAY
    firstDayTemp.textContent = `${kelvinToFahrenheit(
      weather.firtstDayKelvins
    )} °F`;
    firstDayWindSpeed.textContent = `${metersToMiles(
      weather.firstDayWindSpeed
    )} mph`;

    //    SECOND DAY
    secondDayTemp.textContent = `${kelvinToFahrenheit(
      weather.secondDayKelvins
    )} °F`;
    secondDayWindSpeed.textContent = `${metersToMiles(
      weather.secondDayWindSpeed
    )} mph`;

    //    THIRD DAY
    thirdDayTemp.textContent = `${kelvinToFahrenheit(
      weather.thirdDayKelvins
    )} °F`;
    thirdDayWindSpeed.textContent = `${metersToMiles(
      weather.thirdDayWindSpeed
    )} mph`;

    //    FOURT DAY
    fourthDayTemp.textContent = `${kelvinToFahrenheit(
      weather.fourthDayKelvins
    )} °F`;
    fourthDayWindSpeed.textContent = `${metersToMiles(
      weather.fourthDayWindSpeed
    )} mph`;
  } else {
    //    TODAY'S WEATHER
    currentDegrees.textContent = weather.currentDegrees;
    currentFeelsLikeDegree.textContent = weather.currentFeelsLikeDegree;
    currentTemperatureSpan.textContent = "°C";
    currentTemperatureFeelsSpan.textContent = "°C";
    currentWindSpeed.textContent = `${windSpeedInKm(
      weather.currentWindSpeed
    )} km/h`;

    //    FIRST DAY
    firstDayTemp.textContent = weather.firstDayTemp;
    firstDayWindSpeed.textContent = `${windSpeedInKm(
      weather.firstDayWindSpeed
    )} km/h`;

    //    SECOND DAY
    secondDayTemp.textContent = weather.secondDayTemp;
    secondDayWindSpeed.textContent = `${windSpeedInKm(
      weather.secondDayWindSpeed
    )} km/h`;

    //    THIRD DAY
    thirdDayTemp.textContent = weather.thirdDayTemp;
    thirdDayWindSpeed.textContent = `${windSpeedInKm(
      weather.thirdDayWindSpeed
    )} km/h`;

    //    FOURTH DAY
    fourthDayTemp.textContent = weather.fourthDayTemp;
    fourthDayWindSpeed.textContent = `${windSpeedInKm(
      weather.fourthDayWindSpeed
    )} km/h`;
  }
}

//  CLICKING DEGREES
currentDegrees.addEventListener("click", degressClick);
currentFeelsLikeDegree.addEventListener("click", degressClick);
