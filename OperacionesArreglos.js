
var amigos = ["Aldo", "Omar", "Paco", "Yuni"];
var amigo;


//Atributo length
alert("Tienes " + amigos.length + " amigos.");
amigo = prompt("Ingresa el nombre de tu nuevo amigo:");

amigos[amigos.length] = amigo;
alert("Tienes " + amigos.length + " amigos.");


//Metodo push
amigos.push("Fatima", "Emiliano"); //Esta funcion agrega elementos a nuestro array

//Este for imprimira todos los elementos de amigos, incluyendo los recien agregados
for (var i = 0; i <= amigos.length-1; i++) {
	document.write(amigos[i]+"<br>");
}


//Metodo concat, une dos arreglos para formar uno solo.
var amigos2 = ["Yo", "Tu", "El"];

var amigos3 = amigos.concat(amigos2);
document.write(amigos3);


//Metodo join, muestra los elementos de un arreglo con el o los simbolos asignados
document.write(amigos3.join(" -- "));
var amigos4 = amigos3.join("|");
alert(amigos4);


/*Metodo sort (ordena en orden alfabetico los elementos) y reverse (ordena los elementos del 
ultimo en ingresar al array al primero)*/
document.write(amigos.reverse());
document.write(amigos.sort());