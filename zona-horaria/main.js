
function ciudadLima(){
    var fecha = new Date();
    var hora = fecha.getHours();
    var min = fecha.getMinutes();
    var seg = fecha.getSeconds();
    var recarga = setTimeout('ciudadLima()', 500);
    document.getElementById('print').innerHTML = hora + " : " + min + " : " + seg;
}

function otraCiudad(){
    var fecha = new Date();
    var hora = fecha.getUTCHours();
    var min = fecha.getUTCMinutes();
    var seg = fecha.getUTCSeconds();
    var recarga = setTimeout('otraCiudad()', 500);
    document.getElementById('print2').innerHTML = hora + " : " + min + " : " + seg;
}

/*
function calTime(city, offset) {
    //create Date object for current location
    var date = new Date();
    //convert to msec
    //subtrac local time in msec
    var hourUtc = date.getTime() - (date.getTimezoneOffset() * 60000);
    //create new Date object de different city
    //using supplied offset
    var dateNew = new Date(hourUtc + (3600000 * offset));
    //return time as a string
    return dateNew.toLocaleString();
}

var ciudad1 = document.getElementById('reloj').innerHTML = calTime("Lima",5);

function calTime2(city, offset) {
    //create Date object for current location
    var date2 = new Date();
    //convert to msec
    //subtrac local time in msec
    var hourUtc2 = date2.getTime() - (date2.getTimezoneOffset() * 60000);
    //create new Date object de different city
    //using supplied offset
    var dateNew2 = new Date(hourUtc2 + (3600000 * offset));
    //return time as a string
    return dateNew2.toLocaleString();
}

var ciudad2 = document.getElementById('reloj2').innerHTML = calTime2("Moscú", 3);
*/
  
/*
window.addEventListener("load", function(){
    var limacity = document.getElementById("lima");
    limacity.addEventListener("click", function(){
        function horaLima (){
            var miFecha = new Date();
            var miHora = miFecha.getHours();
            var miMinuto = miFecha.getMinutes();
            var miSegundo = miFecha.getSeconds();
            var recarga = setTimeout('horaLima()', 500);
            document.getElementById("print").innerHTML = miHora  + " : " + miMinuto + " : " + miSegundo;
        };
        horaLima();
    });
});
    
window.addEventListener("load", function(){
    var ciudad2 = document.getElementById("verHora");
    ciudad2.addEventListener("click", function(){
        function otraCiudad (){
            var miFecha = new Date();
            var miHora = miFecha.getUTCHours();
            var miMinuto = miFecha.getUTCMinutes();
            var miSegundo = miFecha.getUTCSeconds();
            var recarga = setTimeout('otraCiudad()', 500);
            document.getElementById("print2").innerHTML = miHora  + " : " + miMinuto + " : " + miSegundo;
        };
        otraCiudad ();
    });
    
});

*/
