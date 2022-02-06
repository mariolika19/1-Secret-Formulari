window.onload = function () {

	//Creamos las variables necesarias
	//Para las cajas de texto
	var uno = document.getElementById('primer');
	var dos = document.getElementById("segon");
	var tres = document.getElementById("tercer");
	var cuatro = document.getElementById("quart");

	//Para los botones de <comprovar> y <reiniciar>
	var reinicio = document.getElementById("reinici");
	var comprueba = document.getElementById("comprovar");

	//Para la barra de intentos
	var intento1 = document.getElementById("intent_1");
	var intento2 = document.getElementById("intent_2");
	var intento3 = document.getElementById("intent_3");
	var intento4 = document.getElementById("intent_4");

	var valorArray = creaArray();
	var i = 0; //Creamos una variable i para utilizarla de contador

	//Llamamos a la función principal para llevar a cabo el programa
	ejecucion();

	//Funció que genera un array amb quatre números diferents del 0 al 9
	function creaArray() {

		// Initial empty array
		let arr = [];

		do {
			// Generem un número aleatori entre 0 i 9
			const randomNumber = Math.floor(Math.random() * 10);

			// L'afegim a l'array si no està repetit
			if (!arr.includes(randomNumber)) {
				arr.push(randomNumber);
			}

		} while (arr.length < 4);

		// Retornem l'array
		return arr;

	}

	//Función que ejecuta el programa principal
	function ejecucion() {

		//AddEventListeners para el doble click
		uno.addEventListener("dblclick", dobleClick, false);
		dos.addEventListener("dblclick", dobleClick, false);
		tres.addEventListener("dblclick", dobleClick, false);
		cuatro.addEventListener("dblclick", dobleClick, false);

		//AddEventListeners para cuando pasamos el ratón por encima o lo sacamos
		uno.addEventListener("mouseover", ratonEncima, false);
		uno.addEventListener("mouseleave", ratonFuera, false);
		dos.addEventListener("mouseover", ratonEncima, false);
		dos.addEventListener("mouseleave", ratonFuera, false);
		tres.addEventListener("mouseover", ratonEncima, false);
		tres.addEventListener("mouseleave", ratonFuera, false);
		cuatro.addEventListener("mouseover", ratonEncima, false);
		cuatro.addEventListener("mouseleave", ratonFuera, false);

		//AddEventListener para cuando pulsamos una tecla del teclado
		window.addEventListener("keypress", tecla, false);

		//AddEventListener para cuando hacemos click en el botón <<reinici>>
		reinicio.addEventListener("click", reiniciar, false);

		//AddEventListener para cuando hacemos click en el botón <<reinici>>
		comprueba.addEventListener("click", comprobar, false);
	}

	//--------------------------------------------------------------------//
	//---Función que nos va a permitir añadir la función <seleccionat>----//
	//--------------------------------------------------------------------//
	function dobleClick(e) {
		//Deseleccionamos el objeto seleccionado
		deseleccionar();

		//Creamos un array, que nos irá guardando la posición del objeto donde 
		//nos encontramos y le añadimos la clase
		let elem = e.target;
		elem.classList.add("seleccionat");

		//Antiguo ejemplo
		// if(e.target==primer){
		// 	uno.classList.add("seleccionat");
		// }else if(e.target==segon){
		// 	dos.classList.add("seleccionat");
		// }else if(e.target==tercer){
		// 	tres.classList.add("seleccionat");
		// }else if(e.target==quart){
		// 	cuatro.classList.add("seleccionat");
		// }
	}

	//Función que nos ayudará a quitar la clase <<seleccionat>>
	function deseleccionar() {
		//Creamos una variable que nos permite conocer la posición donde se encuentra seleccionat
		let seleccionat = document.getElementsByClassName("seleccionat")[0];
		seleccionat.classList.remove("seleccionat");
	}

	//--------------------------------------------------------------------//
	//------Función que nos va a permitir añadir la clase <sobre>---------//
	//--------------------------------------------------------------------//
	function ratonEncima(e) {
		//Creamos un array que nos irá almacenando donde pasa el ratón y le irá añadiendo 
		//la clase <sobre>
		let elem = e.target;
		elem.classList.add("sobre");
	}

	function ratonFuera(e) {
		//Creamos un array que nos irá almacenando donde sale el ratón y le irá quitando 
		//la clase <sobre>
		let elem = e.target;
		elem.classList.remove("sobre");
	}

	//--------------------------------------------------------------------//
	//----Función que nos asigna un número en la clase <seleccionat>------//
	//--------------------------------------------------------------------//
	function tecla() {
		//Creamos variable para almacenar el valor de la tecla pulsada y le damos valor numérico
		var teclaP = parseInt(event.key);

		//Cogemos la celda seleccionada
		let seleccion = document.getElementsByClassName("seleccionat")[0];

		//Si la tecla corresponde a un número válido
		if ((teclaP >= 0) && (teclaP <= 9)) {
			seleccion.textContent = teclaP;
		} else {
			alert("Introduzca un número, por favor");
		}

		//Código antiguo
		// //Si pulsamos un número en el teclado
		// if ((teclaP >= 0) && (teclaP <= 9)){
		// 	//console.log(uno.innerHTML = teclaP);
		// if (true == uno.classList.contains("seleccionat")){
		// 	console.log(uno.innerHTML = teclaP);			
		// }else if (true == dos.classList.contains("seleccionat")){
		// 	console.log(dos.innerHTML = teclaP);
		// }else if (true == tres.classList.contains('seleccionat')){
		// 	console.log(tres.innerHTML = teclaP);
		// }else if (true == cuatro.classList.contains('seleccionat')){
		// 	console.log(cuatro.innerHTML = teclaP);
		// }

		// //Si no pulsamos un número en el teclado, nos dará error
		// }else{
		// 	alert("Introduzca un número, por favor");
		// }
	}


	//--------------------------------------------------------------------//
	//-----------Función que nos permite dejar todo reseteado-------------//
	//--------------------------------------------------------------------//
	function reiniciar() {
		creaArray();	//Calcula un nuevo número
		vaciar();		//Función que vacía las cajas numéricas
		vaciaLineas();	//Función vacía líneas de intentos
		i = 0;			//Dejamos el contador a 0
	}

	//Función que vacía las cajas de texto, para dejarlas vacías
	function vaciar() {
		console.log(uno.innerHTML = "?");
		console.log(dos.innerHTML = "?");
		console.log(tres.innerHTML = "?");
		console.log(cuatro.innerHTML = "?");
	}

	//Función que deja las líneas de la barra de intentos vacía
	function vaciaLineas() {
		console.log(intento1.innerHTML = "1234 : 1 / 2");
		console.log(intento2.innerHTML = "");
		console.log(intento3.innerHTML = "");
		console.log(intento4.innerHTML = "");
	}

	//--------------------------------------------------------------------//
	//---- Función que nos permite verificar si el número es correcto ----//
	//--------------------------------------------------------------------//
	function comprobar() {
		//Comprobamos que las cajas de texto no estén vacías
		if (uno.innerHTML == "?") {
			alert("[ERROR1]: Introduce un número válido");
		} else if (dos.innerHTML == "?") {
			alert("[ERROR2]: Introduce un número válido");
		} else if (tres.innerHTML == "?") {
			alert("[ERROR3]: Introduce un número válido");
		} else if (cuatro.innerHTML == "?") {
			alert("[ERROR4]: Introduce un número válido");

			//Si no están vacías, procedemos a añadir el número a <intent>
		} else {

			//Creamos variables 
			var creaNum = uno.innerHTML + dos.innerHTML + tres.innerHTML + cuatro.innerHTML; //Para almacenar el número que hemos escrito por pantalla
			var cuentaPosOk = 0; //Para contar las posiciones y el número correctos
			var cuentaPosKO = 0; //Para contar los números correctos, pero no su posición

			//Utilizamos el contador, para que nos vaya imprimiendo los resultados en el id <intentos>
			if (i == 0) {
				funciona();
				console.log(intento1.innerHTML = creaNum + " : " + cuentaPosOk + " / " + cuentaPosKO); //Imprimimos en pantalla el número creado y el número de intentos
				//Si se adivinan todos los números, nos aparecerá una ventana informativa de que hemos ganado
				if (cuentaPosOk == 4) {
					alert("Enhorabuena! Ha adivinado el número secreto!");
				}

			} else if (i == 1) {
				funciona();
				console.log(intento2.innerHTML = creaNum + " : " + cuentaPosOk + " / " + cuentaPosKO); //Imprimimos en pantalla el número creado y el número de intentos
				//Si se adivinan todos los números, nos aparecerá una ventana informativa de que hemos ganado
				if (cuentaPosOk == 4) {
					alert("Enhorabuena! Ha adivinado el número secreto!");
				}

			} else if (i == 2) {
				funciona();
				console.log(intento3.innerHTML = creaNum + " : " + cuentaPosOk + " / " + cuentaPosKO); //Imprimimos en pantalla el número creado y el número de intentos
				//Si se adivinan todos los números, nos aparecerá una ventana informativa de que hemos ganado
				if (cuentaPosOk == 4) {
					alert("Enhorabuena! Ha adivinado el número secreto!");
				}

			} else if (i == 3) {
				funciona();
				console.log(intento4.innerHTML = creaNum + " : " + cuentaPosOk + " / " + cuentaPosKO); //Imprimimos en pantalla el número creado y el número de intentos
				//Si se adivinan todos los números, nos aparecerá una ventana informativa de que hemos ganado
				if (cuentaPosOk == 4) {
					alert("Enhorabuena! Ha adivinado el número secreto!");
				}

			} else {
				//Aviso de que ha perdido la partida. Además, nos dice el número que había que adivinar
				alert("Lo sentimos, ya no le quedan más intentos. El número para adivinar era: " + valorArray);
			}
			i++;

		}


		//Función que nos permitirá contar si el número es correcto en su posición, o si el número es correcto pero está en posición diferente
		function funciona() {
			if (uno.innerHTML == valorArray[0]) {
				cuentaPosOk++;
			} else {
				if ((uno.innerHTML == valorArray[1]) || (uno.innerHTML == valorArray[2]) || (uno.innerHTML == valorArray[3])) {
					cuentaPosKO++;
				}
			}

			if (dos.innerHTML == valorArray[1]) {
				cuentaPosOk++;
			} else {
				if ((dos.innerHTML == valorArray[0]) || (dos.innerHTML == valorArray[2]) || (dos.innerHTML == valorArray[3])) {
					cuentaPosKO++;
				}
			}

			if (tres.innerHTML == valorArray[2]) {
				cuentaPosOk++;
			} else {
				if ((tres.innerHTML == valorArray[0]) || (tres.innerHTML == valorArray[1]) || (tres.innerHTML == valorArray[3])) {
					cuentaPosKO++;
				}
			}

			if (cuatro.innerHTML == valorArray[3]) {
				cuentaPosOk++;
			} else {
				if ((cuatro.innerHTML == valorArray[0]) || (cuatro.innerHTML == valorArray[1]) || (cuatro.innerHTML == valorArray[2])) {
					cuentaPosKO++;
				}
			}
		}
	}
}