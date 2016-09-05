window.addEventListener("load", function() {
	var boton = document.getElementById("contar");
	boton.addEventListener("click", function() {
	var palabra = document.getElementById("palabra").value;
	var letra = document.getElementById("letra").value;

	var resultado = document.getElementById("contador");
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
