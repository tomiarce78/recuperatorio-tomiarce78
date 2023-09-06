/* Ejercicio 1: Encontrar Números Pares en un Array

   Implementa una función llamada `encontrarNumerosPares` que tome un array de números como argumento y devuelva un nuevo array que contenga solo los números pares del array original.

   AYUDA:
   RECUERDEN QUE numero % numero  DEVUELVE EL RESTO
   Ejemplo de uso:
   encontrarNumerosPares([1, 2, 3, 4, 5, 6]); // Debería devolver [2, 4, 6].
*/

function encontrarNumerosPares() {}

/* Actividad N°2
  Escribe una función llamada `sumarValores` que tome un array multidimensional como argumento.
  Este array contiene tres sub-arrays, cada uno de ellos contiene valores numéricos.
  La función debe SUMAR 5 a cada valor en cada sub-array y devolver el array modificado.
*/
function sumarValores() {}

/* Actividad N°5
  Dado el objeto alumno se debe, DENTRO DE LA FUNCION "modifyAlumno" (recuerden que la funcion recibe como argumento el objeto):
  1-  Cambiar el valor nombre
  2-  eliminar las proporties restantes POR METODO!!!
  3-  UNA VEZ REALIZADA LA ELIMINACION, crear:
    *edad de tipo numero;
    *direccion de tipo string;
    *hobbies que sea un array de strings;
    *juegoFavorito que sea un objeto con properties Genero y Nombre;
    *estudia de tipo boolea;
  4-  DEVOLVER el objeto modificado

*/

const alumno = {
  nombre: "Carlos",
  color: "Rojo",
  mate: "amargo",
  anios: true,
  peliculas: [ "ESDLA", "Harry Potter", "IT", "Iron Man"]
};

function modifyAlumno(){}


// ❌NO ELIMINAR NI MODIFICAR NADA DEBAJO DE ESTA LINEA❌
module.exports = {
  encontrarNumerosPares,
  sumarValores,
  modifyAlumno
}