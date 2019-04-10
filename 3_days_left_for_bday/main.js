function calculateDays() {
  var one_day = 1000 * 60 * 60 * 24;
  var today = new Date();
  var bday = new Date(today.getFullYear(), parseInt(document.getElementById('bdayMonth').value) - 1, parseInt(document.getElementById('bdayDay').value))
  if (today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear() + 1);
  }
  var diff = Math.abs(bday.getTime() - today.getTime());
  var result = parseInt(Math.ceil((diff) / (one_day)));
  var isBirthday = ""

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
