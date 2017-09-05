
var edad;
var nombre = "Armando";


edad = prompt("Ingresa tu edad");


/*En el siguiente if comprobamos que sea el mismo valor, pero no importa
si son del mismo tipo de dato o mo*/
if (edad >= 18) {
	alert("Ya eres mayor de edad, puedes acceder a la pagina.");
} else if (nombre == "Armando") {
	alert("Bienvenido " + nombre);
} else {
	alert("No puedes accesar a la pagina, eres menor de edad.");
}

var name = prompt("Ingresa tu nombre: ");

if (edad >= 18 || name == "Arturo") {
	alert("Bienvenido " + name);
}


/*Con el triple igual comprobamos que sea el mismo valor, pero ademas sea del
mismo tipo de dato*/
if ( edad === "18") {
	alert("Mismo tipo de dato.");
} else {
	alert("Diferente tipo de dato.");
}

var opcion = prompt("Ingresa un numero aleatorio");
var i = 1;
while ( i <= opcion) {
	document.write("Estas en el numero: " + i + "<br>");
	i++;
}