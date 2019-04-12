function getValue(){
  var type = document.getElementById('selectType').value;
      comp = document.getElementById('isCompound').checked;
      cont = document.getElementById('isContiuous').checked;
      quant = parseInt(document.getElementById('idQuantity').value);
      time = parseInt(document.getElementById('idTime').value);
      intR = (parseFloat(document.getElementById('idRate').value) / 100);
      compP = parseInt(document.getElementById('idCompounding').value);
      effR = "";

  if (comp == true && cont == false){
    effR = Math.pow((intR / compP), compP);
  } else {
    effR = 5;
  }

  console.log(type);
  console.log(comp);
  console.log(cont);
  console.log(quant);
  console.log(time);
  console.log(intR);
  console.log(compP);
  console.log(effR);
}
