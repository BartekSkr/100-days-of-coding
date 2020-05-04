// GLOBAL DATA CONST
const globalCases = document.querySelector(".global-data-cases");
const globalDeaths = document.querySelector(".global-data-deaths");
const globalRecovered = document.querySelector(".global-data-recovered");

// POLAND DATA CONST
const polandTodayCases = document.querySelector(".todayCases");
const polandTodayDeaths = document.querySelector(".todayDeaths");
const polandCases = document.querySelector(".overallCases");
const polandDeaths = document.querySelector(".overallDeaths");
const polandRecovered = document.querySelector(".overallRecovered");

const GLOBAL_API = `https://coronavirus-19-api.herokuapp.com/all`;
const POLAND_API = `https://coronavirus-19-api.herokuapp.com/countries/poland`;

const globalData = {};
const polandData = {};

function getData() {
  // GLOBAL
  fetch(GLOBAL_API)
    .then((response) => response.json())
    .then((data) => {
      console.log("globalData:");
      console.log(data);

      globalData.cases = data.cases;
      globalData.deaths = data.deaths;
      globalData.recovered = data.recovered;

      displayData();
    });

  // POLAND
  fetch(POLAND_API)
    .then((respone) => respone.json())
    .then((data) => {
      console.log("polandData:");
      console.log(data);

      polandData.todayCases = data.todayCases;
      polandData.todayDeaths = data.todayDeaths;
      polandData.cases = data.cases;
      polandData.deaths = data.deaths;
      polandData.recovered = data.recovered;

      displayData();
    });
}

function displayData() {
  // GLOBAL
  globalCases.textContent = globalData.cases;
  globalDeaths.textContent = globalData.deaths;
  globalRecovered.textContent = globalData.recovered;

  // POLAND
  polandTodayCases.textContent = polandData.todayCases;
  polandTodayDeaths.textContent = polandData.todayDeaths;
  polandCases.textContent = polandData.cases;
  polandDeaths.textContent = polandData.deaths;
  polandRecovered.textContent = polandData.recovered;
}

window.addEventListener("load", getData);
