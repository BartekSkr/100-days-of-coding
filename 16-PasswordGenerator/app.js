const resultEl = document.getElementById("result");
const clipboardBtn = document.getElementById("clipboard");
const lengthEl = document.getElementById("length");
const upperCaseEl = document.getElementById("uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthEl.value);
  const hasUpper = upperCaseEl.checked;
  const hasLower = lowerCaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    length,
    hasUpper,
    hasLower,
    hasNumbers,
    hasSymbols
  );
});

// GENERATING RANDOM PASSWORD
function generatePassword(length, upper, lower, number, symbol) {
  let generatedPassword = "";

  const typesCount = upper + lower + number + symbol;
  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    alert(
      "You must select at least one checkbox!\n\n FOR BETTER SECURITY LEAVE THEM ALL CHECKED!!!"
    );
  } else {
    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];

        generatedPassword += randomFunc[funcName]();
      });
    }
  }
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// COPY PASSWORD TO CLIPBOARD
clipboardBtn.addEventListener("click", () => {
  const copyText = document.createElement("textarea");
  copyText.value = resultEl.innerText;
  document.body.appendChild(copyText);
  copyText.select();
  document.execCommand("copy");
  document.body.removeChild(copyText);
  alert("Password copied to clipboard!");
});

// GENERATING RANDOM LETTERS, NUMBERS AND SYMBOLS
//charCode - http://www.net-comber.com/charset.html
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+-=<>?/,.{}[]`~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
