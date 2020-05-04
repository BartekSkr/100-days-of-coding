const view = document.querySelector('input[type="text"]');

function insertNum(num) {
  view.value = view.value + num;
}

function insertOp(op) {
  view.value = view.value + op;
}

function insertDec() {
  view.value += ".";
}

function equalTo() {
  view.value = eval(view.value);
}

function back() {
  view.value = view.value.substring(0, view.value.length - 1);
}

function clearAll() {
  view.value = "";
}
