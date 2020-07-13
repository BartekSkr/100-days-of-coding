const firstCurrencyChoose = document.querySelectorAll("#first-currency");
const secondCurrencyChoose = document.querySelectorAll("#second-currency");
const firstCurrencyDisplaied = document.querySelector(
  "#currency-first-displaied"
);
const secondCurrencyDisplaied = document.querySelector(
  "#currency-second-displaied"
);
const firstCurrencyInput = document.getElementById("currency-input-first");
const secondCurrencyDisplay = document.querySelector(
  "#currency-display-second"
);

//  ECHANGE RATE
const firstCurrencySymbol = document.getElementById("first-currency-symbol");
const secondCurrencyInfo = document.getElementById("second-currency-info");
const secondCurrencySymbol = document.getElementById("second-currency-symbol");

let firstCurrencyValue;
let secondCurrencyValue;
const currencies = {};

//   GETTING DATA FROM API
function getData() {
  const api = `https://api.ratesapi.io/api/latest`;

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      currencies.eur = 1;
      currencies.pln = data.rates.PLN;
      currencies.usd = data.rates.USD;
      currencies.gbp = data.rates.GBP;

      console.log(data);
    });
}

firstCurrencyChoose.forEach((choose) =>
  choose.addEventListener("click", () => {
    firstCurrencyDisplaied.innerText = e.target.innerText;

    calculateCurrency();
  })
);

secondCurrencyChoose.forEach((choose) =>
  choose.addEventListener("click", (e) => {
    secondCurrencyDisplaied.innerText = e.target.innerText;

    calculateCurrency();
  })
);

function calculateCurrency(e) {
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  if (
    firstCurrencyDisplaied.innerText == "PLN" &&
    secondCurrencyDisplaied.innerText === "PLN"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = 1;

    secondCurrencyDisplay.textContent = (firstCurrencyInput.value / 1)
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "PLN" &&
    secondCurrencyDisplaied.innerText === "EUR"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = currencies.pln;

    secondCurrencyDisplay.textContent = (
      firstCurrencyInput.value * currencies.pln
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "PLN" &&
    secondCurrencyDisplaied.innerText === "USD"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = (currencies.usd / currencies.pln).toFixed(
      4
    );

    secondCurrencyDisplay.textContent = (
      firstCurrencyInput.value *
      (currencies.usd / currencies.pln)
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "PLN" &&
    secondCurrencyDisplaied.innerText === "GBP"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = (currencies.gbp / currencies.pln).toFixed(
      4
    );

    secondCurrencyDisplay.textContent = (
      firstCurrencyInput.value *
      (currencies.gbp / currencies.pln)
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "EUR" &&
    secondCurrencyDisplaied.innerText === "PLN"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = currencies.pln;

    secondCurrencyDisplay.textContent = (
      firstCurrencyInput.value * currencies.pln
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "EUR" &&
    secondCurrencyDisplaied.innerText === "EUR"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = 1;

    secondCurrencyDisplay.textContent = (firstCurrencyInput.value / 1)
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "EUR" &&
    secondCurrencyDisplaied.innerText === "USD"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = currencies.usd;

    secondCurrencyDisplay.textContent = (
      firstCurrencyInput.value * currencies.usd
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "EUR" &&
    secondCurrencyDisplaied.innerText === "GBP"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = currencies.gbp;

    secondCurrencyDisplay.textContent = (
      firstCurrencyInput.value * currencies.gbp
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "USD" &&
    secondCurrencyDisplaied.innerText === "PLN"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = (currencies.pln / currencies.usd).toFixed(
      4
    );

    secondCurrencyDisplay.textContent = (
      (firstCurrencyInput.value * currencies.pln) /
      currencies.usd
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "USD" &&
    secondCurrencyDisplaied.innerText === "EUR"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = (currencies.eur / currencies.usd).toFixed(
      4
    );

    secondCurrencyDisplay.textContent = (
      (firstCurrencyInput.value * currencies.eur) /
      currencies.usd
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "USD" &&
    secondCurrencyDisplaied.innerText === "USD"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = 1;

    secondCurrencyDisplay.textContent = (firstCurrencyInput.value / 1)
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "USD" &&
    secondCurrencyDisplaied.innerText === "GBP"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = (currencies.gbp / currencies.usd).toFixed(
      4
    );

    secondCurrencyDisplay.textContent = (
      (firstCurrencyInput.value * currencies.gbp) /
      currencies.usd
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "GBP" &&
    secondCurrencyDisplaied.innerText === "PLN"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = (currencies.pln / currencies.gbp).toFixed(
      4
    );

    secondCurrencyDisplay.textContent = (
      (firstCurrencyInput.value * currencies.pln) /
      currencies.gbp
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "GBP" &&
    secondCurrencyDisplaied.innerText === "EUR"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = (currencies.eur / currencies.gbp).toFixed(
      4
    );

    secondCurrencyDisplay.textContent = (
      (firstCurrencyInput.value * currencies.eur) /
      currencies.gbp
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "GBP" &&
    secondCurrencyDisplaied.innerText === "USD"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = (currencies.usd / currencies.gbp).toFixed(
      4
    );

    secondCurrencyDisplay.textContent = (
      (firstCurrencyInput.value * currencies.usd) /
      currencies.gbp
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyDisplaied.innerText == "GBP" &&
    secondCurrencyDisplaied.innerText === "GBP"
  ) {
    firstCurrencySymbol.textContent = firstCurrencyDisplaied.innerText;
    secondCurrencySymbol.textContent = secondCurrencyDisplaied.innerText;
    secondCurrencyInfo.textContent = 1;

    secondCurrencyDisplay.textContent = (firstCurrencyInput.value / 1)
      .toFixed(2)
      .replace(regex, " ");
  }
}

window.addEventListener("load", getData);
firstCurrencyInput.addEventListener("keyup", calculateCurrency);
