
var suma = function(numero1, numero2){
	
	var n1 = parseFloat(document.getElementById("n1").value);
	/*El metodo getElementById es un metodo del objeto document cuya funcionalidad consiste en buscar
	dentro de nuestro documento html el elemento con el nombre de "id" que nostros le pasemos como parametro
	y con la propiedad .value obtendremos el valor de la casilla que este dentro de nuestro elemento.
	Recordar que uestros inputs, siempre almacenan datos de tipo cadena, por lo que en caso de necesitar
	trabajar con enteros o flotantes*/
	var n2 = parseFloat(document.getElementById("n2").value);
	/*En el caso de que yo quisiera realizar la suma de un entero y un flotante, se realizaria la operacion
	pero si al entero le pusiera decimales, js truncaria el valor a unicamente el entero, en caso de 
	querer realizar la suma de un valor numerico, con uno de tipo cadena, js concateneria los valores.*/

	var resultado = n1 + n2;
	return resultado;
}