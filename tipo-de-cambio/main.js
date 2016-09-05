window.addEventListener("load", function() {
	var boton = document.getElementById("cambiar");
	boton.addEventListener("click", function() {
		var numero1 = parseInt(document.getElementById("cambio").value);
		var numero2 = parseInt(document.getElementById("cantidad").value);

		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>EL RESULTADO DEL TIPO DE CAMBIO ES: " + suma(numero1,numero2).toFixed(2) + "</p>";
		
	};

	function suma(numero1, numero2) {
		return numero1 / numero2;
	}
};