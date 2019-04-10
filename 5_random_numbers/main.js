function generateList(){
  var q = parseInt(document.getElementById("quantityId").value);
  var between1 = parseInt(document.getElementById("betweenFirst").value);
  var between2 = parseInt(document.getElementById("betweenSecond").value);
  var arr = [];
  var min = "";
  var max = "";
  if (between1 > between2){
    min = between2;
    max = between1;
  }else{
      min = between1;
      max = between2;
  }


  for (i = 0; i < q; i++) {
    arr.push(parseInt(Math.floor(Math.random() * max) + min));
  }

  var str = "";
  for (i = 0; i < q; i++) {
    str += "<br>" + parseInt(arr[i]);
  }

  document.getElementById("listResult").innerHTML = str
}
