function averigualo() {
   let dia = document.getElementById("dia").value;
   let mes = document.getElementById("mes").value;
   let anio = document.getElementById("anio").value;
   let extraerFecha= new Date(anio, mes, dia).getDay();
   console.log(extraerFecha);
   switch (extraerFecha) {
    case 0:
        return document.getElementById("resultado").innerHTML="Domingo de bajón.";
    case 1:
        return document.getElementById("resultado").innerHTML="Blue monday. A jalar para la tortilla del mishi.";
    case 2:
        return document.getElementById("resultado").innerHTML="Martes. A jalar para la tortilla del mishi.";
    case 3:
        return document.getElementById("resultado").innerHTML="Miércoles de Merlina. A jalar para la tortilla del mishi.";
    case 4:
        return document.getElementById("resultado").innerHTML="Jueves. A jalar para la tortilla del mishi.";
    case 5:
        return document.getElementById("resultado").innerHTML="Viernes. A jalar para la tortilla del mishi.";
    case 6:
        return document.getElementById("resultado").innerHTML="Día de cruda.";
    default:
        return document.getElementById("resultado").innerHTML="Aquí te falta algo.";
       
   }
}

