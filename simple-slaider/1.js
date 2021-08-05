var prn, seen;
prn = Math.floor(Math.random() * 10 + 1);
console.log(prn);

function add() {
  var num, viv;
  num = document.getElementById("num1").value;

  viv = document.getElementById("result");

  if (num < prn) {
    viv.innerHTML = "Число меньше загаданного";
  } else if (num == prn) {
    viv.innerHTML = "Поздравляем вы угадали!";
  } else {
    viv.innerHTML = "Число больше загаданного";
  }
}
