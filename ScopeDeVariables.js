
/*Recordar que el Scope de una variable dentro de un lenguaje de programacion
es la zona del programa en la que se define una variable, en el caso de js
solo se definen dos ambitos: global y local, la primera tiene la caracteristica
de poder ser usada en cualquier parte del codigo, mientras que la segunda, solo
puede ser utilizada en la funcion o metodo que halla sido declarada*/
var variableGlobal = "Soy una variable global y cualquier funcion puede acceder a mi.";

var funcionScope = function(){

	var variableLocal = "Soy una variable local.";

	var funcionLocal = function(){
		var variableLocal = "Soy una variable local dentro de una funcion local";
		/*El scope de js le dara preferencia a la variable declarada dentro de la misma funcion,
		en caso de no encontrarla ira en busca de la variable del msimo nombre, pero de la funcion
		padre, si la encuentra tomara su valor en caso de no encontrarla tampoco, nos enviara un
		mensaje de error y no se ejucatara nuestro script*/
		alert(variableLocal);
	}

	funcionLocal(); //Recordar mandar a llamar a la funcion local dentro de la funcion.
}

funcionScope();

//Inicio del modificador de acceso para que nada acceda a este pedaso de codigo
(function(){
	/*Lo que estamos haciendo con la instruccion de arriba es limitar el acceso a esta parte del codigo,
	de esta menera si nosotros trabajaramos con otro script en el que declaramos una variable global, con
	el mismo nombre que una declarada aqui, no se generaria conflicto alguno, pues el otro script no tendria
	acceso a esta parte del script, pero esta parte del codigo si tendra acceso a lo que este fuera y 
	no este protegido.*/
	var prueba = function(){
		console.log("Si intentas acceder a esta funcion fuera del modificador de acceso no tendras exito.");
		alert(variableGlobal);
	}

	prueba();
}())
//Fin del modificador de acceso
