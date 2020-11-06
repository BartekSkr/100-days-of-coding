//  CONST
// global data
const globalCases = document.querySelector(".global-data-cases");
const globalDeaths = document.querySelector(".global-data-deaths");
const globalRecovered = document.querySelector(".global-data-recovered");
// Poland data
const polandTodayCases = document.querySelector(".todayCases");
const polandTodayDeaths = document.querySelector(".todayDeaths");
const polandCases = document.querySelector(".overallCases");
const polandDeaths = document.querySelector(".overallDeaths");
const polandRecovered = document.querySelector(".overallRecovered");

//  APIs
const GLOBAL_API = `https://coronavirus-19-api.herokuapp.com/all`;
const POLAND_API = `https://coronavirus-19-api.herokuapp.com/countries/poland`;

const globalData = {};
const polandData = {};

//  FUNCTIONS
//  space after every 3 characters
function numberSpaces(num) {
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regex, " ");
}

//  getting data from API
function getData() {
  // global
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
  
  // Poland
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

//  display data
function displayData() {
  // global
  globalCases.textContent = numberSpaces(globalData.cases);
  globalDeaths.textContent = numberSpaces(globalData.deaths);
  globalRecovered.textContent = numberSpaces(globalData.recovered);
  
  // Poland
  polandTodayCases.textContent = numberSpaces(polandData.todayCases);
  polandTodayDeaths.textContent = numberSpaces(polandData.todayDeaths);
  polandCases.textContent = numberSpaces(polandData.cases);
  polandDeaths.textContent = numberSpaces(polandData.deaths);
  polandRecovered.textContent = numberSpaces(polandData.recovered);
}

//  EVENT LISTENER
window.addEventListener("load", getData);
