const firstCurrencyOption = document.getElementById("first-currency-select");
const secondCurrencyOption = document.getElementById("second-currency-select");
const currencyInput = document.getElementById("currency-input");
const currencyDisplay = document.getElementById("currency-display");

// EXCHANGE RATE DISPLAY CONST
const firstCurrencySymbol = document.getElementById("first-currency-symbol");
const secondCurrencyRate = document.getElementById("second-currency-rate");
const secondCurrencySymbol = document.getElementById("second-currency-symbol");
const visibleExchangeRate = document.querySelector(".exchange-rate");

let firstCurrencyValue;
let secondCurrencyValue;
const currencies = {};

firstCurrencyOption.addEventListener("click", () => {
  firstCurrencySymbol.innerText = firstCurrencyOption.value.toUpperCase();

  calculateCurrency();
});

secondCurrencyOption.addEventListener("click", () => {
  secondCurrencySymbol.innerText = secondCurrencyOption.value.toUpperCase();

  calculateCurrency();
});

// GETTING API DATA
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

// CALCULATING CURRENCY CONVERSION
function calculateCurrency() {
  const regex = /\B(?=(\d{3})+(?!\d))/g;

  if (
    firstCurrencyOption.value === "pln" &&
    secondCurrencyOption.value === "pln"
  ) {
    secondCurrencyRate.textContent = 1;
    currencyDisplay.textContent = (currencyInput.value / 1)
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "pln" &&
    secondCurrencyOption.value === "eur"
  ) {
    secondCurrencyRate.textContent = currencies.pln;
    currencyDisplay.textContent = (currencyInput.value * currencies.pln)
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "pln" &&
    secondCurrencyOption.value === "usd"
  ) {
    secondCurrencyRate.textContent = (currencies.usd / currencies.pln).toFixed(
      4
    );
    currencyDisplay.textContent = (
      currencyInput.value *
      (currencies.usd / currencies.pln)
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "pln" &&
    secondCurrencyOption.value === "gbp"
  ) {
    secondCurrencyRate.textContent = (currencies.gbp / currencies.pln).toFixed(
      4
    );
    currencyDisplay.textContent = (
      currencyInput.value *
      (currencies.gbp / currencies.pln)
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "eur" &&
    secondCurrencyOption.value === "eur"
  ) {
    secondCurrencyRate.textContent = 1;
    currencyDisplay.textContent = (currencyInput.value / 1)
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "eur" &&
    secondCurrencyOption.value === "pln"
  ) {
    secondCurrencyRate.textContent = currencies.pln;
    currencyDisplay.textContent = (currencyInput.value * currencies.pln)
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "eur" &&
    secondCurrencyOption.value === "usd"
  ) {
    secondCurrencyRate.textContent = currencies.usd;
    currencyDisplay.textContent = (currencyInput.value * currencies.usd)
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "eur" &&
    secondCurrencyOption.value === "gbp"
  ) {
    secondCurrencyRate.textContent = currencies.gbp;
    currencyDisplay.textContent = (currencyInput.value * currencies.gbp)
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "usd" &&
    secondCurrencyOption.value === "usd"
  ) {
    secondCurrencyRate.textContent = 1;
    currencyDisplay.textContent = (currencyInput.value / 1)
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "usd" &&
    secondCurrencyOption.value === "pln"
  ) {
    secondCurrencyRate.textContent = (currencies.pln / currencies.usd).toFixed(
      4
    );
    currencyDisplay.textContent = (
      currencyInput.value *
      (currencies.pln / currencies.usd)
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "usd" &&
    secondCurrencyOption.value === "eur"
  ) {
    secondCurrencyRate.textContent = (currencies.eur / currencies.usd).toFixed(
      4
    );
    currencyDisplay.textContent = (
      currencyInput.value *
      (currencies.eur / currencies.usd)
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "usd" &&
    secondCurrencyOption.value === "gbp"
  ) {
    secondCurrencyRate.textContent = (currencies.gbp / currencies.usd).toFixed(
      4
    );
    currencyDisplay.textContent = (
      currencyInput.value *
      (currencies.gbp / currencies.usd)
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "gbp" &&
    secondCurrencyOption.value === "gbp"
  ) {
    secondCurrencyRate.textContent = 1;
    currencyDisplay.textContent = (currencyInput.value / 1)
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "gbp" &&
    secondCurrencyOption.value === "pln"
  ) {
    secondCurrencyRate.textContent = (currencies.pln / currencies.gbp).toFixed(
      4
    );
    currencyDisplay.textContent = (
      currencyInput.value *
      (currencies.pln / currencies.gbp)
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "gbp" &&
    secondCurrencyOption.value === "eur"
  ) {
    secondCurrencyRate.textContent = (currencies.eur / currencies.gbp).toFixed(
      4
    );
    currencyDisplay.textContent = (
      currencyInput.value *
      (currencies.eur / currencies.gbp)
    )
      .toFixed(2)
      .replace(regex, " ");
  }

  if (
    firstCurrencyOption.value === "gbp" &&
    secondCurrencyOption.value === "usd"
  ) {
    secondCurrencyRate.textContent = (currencies.usd / currencies.gbp).toFixed(
      4
    );
    currencyDisplay.textContent = (
      currencyInput.value *
      (currencies.usd / currencies.gbp)
    )
      .toFixed(2)
      .replace(regex, " ");
  }
}

window.addEventListener("load", getData);
currencyInput.addEventListener("keyup", calculateCurrency);
