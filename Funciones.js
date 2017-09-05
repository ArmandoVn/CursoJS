
function suma(numero1, numero2){
	document.write("Primer funcion que realiza una suma.<br>");
	document.write("El resultado de la suma es: " + (numero1 + numero2)); //Le colocamos los parentesis, porque de este modo realiza la suma 
																		  //y no una concatenacion.
	/*document.write("El resultado de la suma es: " + numero1 + numero2); Como en esta linea de codigo, unicamente pusimos los numeros sin 
																		  parentesis, el metodo wirte esta interpretando el simbolo de + como
																		  una concatenacion y no como un operador aritmetico.*/
}

suma(2, 3); //Es importante, siempre declarar primero la funcion antes de llamarla, pues de no hacerlo la funcion no se ejecutara.



/*Es importante resaltar que pese a que la funcion anterior es correcta y funciona, estamos haciendo un uso incorrecto de ella
pues las funciones siempre debemos verlas como un tipo de valor, por lo tanto es de malas practicas imprimir dentro de ellas, el uso correcto
en cambio, seria que nuestra funcion recibiera valores y nos regresara un nuevo valor que seria con el que nostros trabajariamos.*/

//La misma funcion de arriba corrigiendo la impresion a pantalla.
function suma2(numero1, numero2){
	return (numero2 + numero1);
}

var resultado = suma2(5,6);

document.write("<br>Resultado de la funcion corregida: " + resultado);



//La misma funcion de arriba hecha de la forma correcta para js, decimos que esta es la forma correcta, pues de esta manera nos es mas facil
//asimilar que siempre debemos ver a las funciones como tipos de dato.
var suma3 = function (numero1, numero2){
	return (numero2 + numero1);
}

document.write("<br>Resultado de la funcion bien hecha: " + suma3(6,8));



//Ultima funcion
var numGrande = function(num1, num2){
	if (num1 > num2) {
		return num1;
	}
	return num2;
}

document.write("<br>El numero mas grande es: " + numGrande(5,8));



//Ademas de lo anterior, recordar que si yo declaro una variable que deseo que sea local, pero no le coloco la palabra reservada var,
//esta variable en automatico se convertira en global y por consecuencia cualquier otra funcion o seccion del programa podra acceder a ella.