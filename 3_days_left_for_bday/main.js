function calculateDays() {
  var today = new Date();
  var bday = new Date(today.getFullYear(), document.getElementById('bdayMonth').value - 1, document.getElementById('bdayDay').value)
  if (today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear() + 1);
  }
  var one_day = 1000 * 60 * 60 * 24;
  var isBirthday = ""
  var diff = Math.abs(bday.getTime() - today.getTime());
  var result = Math.ceil((diff) / (one_day));

  if (result == "0") {
    isBirthday = " días para tu cumpleaños. ¡Felicidades!";
  } else {
    isBirthday = " días para tu cumpleaños!";
  };

  console.log()

  document.getElementById('resultArea').innerHTML = result + isBirthday;

  console.log(diff);
  console.log(result);
  console.log(today);
  console.log(bday);


};
