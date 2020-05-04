const cancelBtn = document.querySelector("#cancel-button");
const cardNum = document.querySelector("#card-number");

function cancelBtnClick() {
  confirm("Are you sure?");
}

// function valid(input) {
//   let luhnNumber = String(input)
//     .split("")
//     .map((el) => parseInt(el));

//   for (let i = luhnNumber.length - 2; i >= 0; i -= 2) {
//     luhnNumber[i] * 2 > 9
//       ? (luhnNumber[i] = luhnNumber[i] * 2 - 9)
//       : (luhnNumber[i] = luhnNumber[i] * 2);
//   }

//   console.log(luhnNumber.reduce((a, b) => a + b) % 10 === 0);
// }

cardNum.addEventListener("input", valid);
cancelBtn.addEventListener("click", cancelBtnClick);
