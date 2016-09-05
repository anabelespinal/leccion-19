/*
var palabra = prompt("INSERTE UNA PALABRA");
var letra = prompt("¿QUÉ LETRA BUSCA?");

for(var i = 0; i < palabra.length; i++){
	console.log(palabra.charAt(i));
}
var palabra= prompt("INSERTE UNA PALABRA");
var letra = prompt("¿QUÉ LETRA BUSCA?");

for(i = 0; i < palabra.length; i++){
	if(palabra.charAt(i) == letra){
		letra++;
		document.write("Tiene" + letra); 
	}
}
*/

window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
	var palabra = document.getElementById("palabra").value;
	var letra = document.getElementById("letra").value;

	var resultado = document.getElementById("resultado");
	resultado.innerHTML = "<p>La letra " + letra + " se muestra " + letrasIguales(palabra, letra) + " vez/veces en " + palabra + "</p>";
	});

	function letrasIguales(palabra, letra) {
	var longitud = palabra.length;
	var contador = 0;
	for(var i = 0; i < longitud; i++) {
		if(palabra[i] == letra)
			contador++;
	}
	return contador;
	}
});
