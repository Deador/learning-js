function f1() {
  var a, p;
  a = document.getElementById("inp1").value;
  a = parseInt(a);
  p = document.getElementById("vivod");
  if (a < 100) {
    p.innerHTML = "Число меньше 100";
  } else if (a == 100) {
    p.innerHTML = "Числа равны";
  } else {
    p.innerHTML = "Число больше 100";
  }
}
