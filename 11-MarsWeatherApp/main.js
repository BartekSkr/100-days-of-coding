// TODAY'S CONST
const solDate = document.querySelector("[data-current-sol]");
const earthDate = document.querySelector("[data-current-date]");
const highTemp = document.querySelector("[data-current-high-temp]");
const lowTemp = document.querySelector("[data-current-low-temp]");

// 1st DAY BEFORE CONST
const firstDaySolDate = document.querySelector("[data-first-sol]");
const firstDayEarthDate = document.querySelector("[data-first-date]");
const firstDayHighTemp = document.querySelector("[data-first-high-temp]");
const firstDayLowTemp = document.querySelector("[data-first-low-temp]");

// 2nd DAY BEFORE CONST
const secondDaySolDate = document.querySelector("[data-second-sol]");
const secondDayEarthDate = document.querySelector("[data-second-date]");
const secondDayHighTemp = document.querySelector("[data-second-high-temp]");
const secondDayLowTemp = document.querySelector("[data-second-low-temp]");

// 3rd DAY BEFORE CONST
const thirdDaySolDate = document.querySelector("[data-third-sol]");
const thirdDayEarthDate = document.querySelector("[data-third-date]");
const thirdDayHighTemp = document.querySelector("[data-third-high-temp]");
const thirdDayLowTemp = document.querySelector("[data-third-low-temp]");

// 4th DAY BEFORE CONST
const fourthDaySolDate = document.querySelector("[data-fourth-sol]");
const fourthDayEarthDate = document.querySelector("[data-fourth-date]");
const fourthDayHighTemp = document.querySelector("[data-fourth-high-temp]");
const fourthDayLowTemp = document.querySelector("[data-fourth-low-temp]");

// 5th DAY BEFORE CONST
const fifthDaySolDate = document.querySelector("[data-fifth-sol]");
const fifthDayEarthDate = document.querySelector("[data-fifth-date]");
const fifthDayHighTemp = document.querySelector("[data-fifth-high-temp]");
const fifthDayLowTemp = document.querySelector("[data-fifth-low-temp]");

// API
const API = `https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`;

function getWeather() {
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      const { sol_keys, validity_checks, ...solData } = data;

      const temp = Object.entries(solData).map(([sol, data]) => {
        return {
          sol: sol,
          minTemp: data.AT.mn,
          maxTemp: data.AT.mx,
          windSpeed: data.HWS.av,
          date: new Date(data.First_UTC),
        };
      });
      console.log(temp);

      // TODAY'S DATA
      solDate.textContent = temp[6].sol;
      earthDate.textContent = `${monthName(
        temp[6].date.getMonth()
      )} ${temp[6].date.getDate()}`;
      highTemp.textContent = Math.round(temp[6].maxTemp);
      lowTemp.textContent = Math.round(temp[6].minTemp);

      // 1st DAY BEFORE DATA
      firstDaySolDate.textContent = temp[5].sol;
      firstDayEarthDate.textContent = `${monthName(
        temp[5].date.getMonth()
      )} ${temp[5].date.getDate()}`;
      firstDayHighTemp.textContent = Math.round(temp[5].maxTemp);
      firstDayLowTemp.textContent = Math.round(temp[5].minTemp);

      // 2nd DAY BEFORE DATA
      secondDaySolDate.textContent = temp[4].sol;
      secondDayEarthDate.textContent = `${monthName(
        temp[4].date.getMonth()
      )} ${temp[4].date.getDate()}`;
      secondDayHighTemp.textContent = Math.round(temp[4].maxTemp);
      secondDayLowTemp.textContent = Math.round(temp[4].minTemp);

      // 3rd DAY BEFORE DATA
      thirdDaySolDate.textContent = temp[3].sol;
      thirdDayEarthDate.textContent = `${monthName(
        temp[3].date.getMonth()
      )} ${temp[3].date.getDate()}`;
      thirdDayHighTemp.textContent = Math.round(temp[3].maxTemp);
      thirdDayLowTemp.textContent = Math.round(temp[3].minTemp);

      // 4th DAY BEFORE DATA
      fourthDaySolDate.textContent = temp[2].sol;
      fourthDayEarthDate.textContent = `${monthName(
        temp[2].date.getMonth()
      )} ${temp[2].date.getDate()}`;
      fourthDayHighTemp.textContent = Math.round(temp[2].maxTemp);
      fourthDayLowTemp.textContent = Math.round(temp[2].minTemp);

      // 5th DAY BEFORE DATA
      fifthDaySolDate.textContent = temp[1].sol;
      fifthDayEarthDate.textContent = `${monthName(
        temp[1].date.getMonth()
      )} ${temp[1].date.getDate()}`;
      fifthDayHighTemp.textContent = Math.round(temp[1].maxTemp);
      fifthDayLowTemp.textContent = Math.round(temp[1].minTemp);
    });
}

function monthName(month) {
  return month === 0
    ? `Janury`
    : month === 1
    ? "February"
    : month === 2
    ? "March"
    : month === 3
    ? "April"
    : month === 4
    ? "May"
    : month === 5
    ? "June"
    : month === 6
    ? "July"
    : month === 7
    ? "August"
    : month === 8
    ? "September"
    : month === 9
    ? "October"
    : month === 10
    ? "November"
    : "December";
}

window.addEventListener("load", getWeather);
