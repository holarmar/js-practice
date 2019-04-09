function calculateArea()
{
  var side1 = parseInt(document.getElementById('firstSide').value);
  var side2 = parseInt(document.getElementById('secondSide').value);
  var side3 = parseInt(document.getElementById('thirdSide').value);
  var s = (side1 + side2 + side3)/2;
  var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));

  document.getElementById('resultArea').innerHTML = parseFloat(area).toFixed(4);
}
