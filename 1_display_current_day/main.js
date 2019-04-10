var today = new Date();
var day = today.getDay();
var daylist = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

document.getElementById("currentDate-id").innerHTML = daylist[day];
