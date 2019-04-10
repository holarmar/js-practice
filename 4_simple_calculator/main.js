function calculateResult(){
  var firstVal = parseFloat(document.getElementById('firstValue').value);
      secondVal = parseFloat(document.getElementById('secondValue').value);
      operator =  document.getElementById('operatorChoice').value;
      result = ""

  if (operator == "add") {
    result = firstVal + secondVal;
  } else if (operator == "min") {
    result = firstVal - secondVal;
  } else if (operator == "div") {
    result = firstVal / secondVal;
  } else if (operator == "mul") {
    result = firstVal * secondVal;
  }


  document.getElementById('resultId').innerHTML = result

};
