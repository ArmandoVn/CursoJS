

var name="Armando"; /* Es importante siempre definir las variables con la palabra reservada "var", pues de
							no hacerlo estariamos declarando una variable global con todo lo que esto representa */
		
//alert(name);	//Lanzamos un mensaje a pantalla

name = prompt("Ingresa tu nombre:");	/*Genera una ventana de alerta que me pide ingrese una cadena y el
							valor ingresado lo almacenara en nuestra variable name */

alert("Tu nombre es:" + "\n" + name);

document.write(name);	//Añade la cadena inidicada a la pagina

console.log(name);	//Imprime la cadena en consola