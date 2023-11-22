'use strict'

function btnSumar(){
    //Declaracion de variables
    var val1 = document.getElementById('txtval1').value;
    var val2 = document.getElementById('txtval2').value;
    var suma = 0;
    //alert(typeof vall);
    //Proceso
    suma = parseInt(val1) + parseInt(val2);
    console.log("La suma es:", suma);
    //var suma2=suma+"";
    document.form1.txtRes.value = suma;
}