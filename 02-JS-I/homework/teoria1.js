//Conceptos para la prueba teorica
//Explicacion Variables, las variables son como cajas donde guardo algo para usar mas tarde
//Este objeto sera estara disponible en la caja para cuando yo decida usarlo
//Pero cuando sea necesario usarla tendre que definir su proposito
//En JavaScript se usa la palabra clave 'var' para defirnir una variable 
//Un ejemplo de esta seria 
var nombre = 'Jhon';
//Explicacion de Strings 
//Este aplica para los tipos de datos que existen, estan otros dos
//Numbers y Boolean son los otros dos tipos de datos usados en las variables
//Un string lo defiimos en la variable como un cuadro de texto y esta defnido entre comillas 
var nombredegato = 'Felix';
//Funciones (argumentos,return)
// Podemos imaginar a estas como objeto dentro de una caja que podemos llamar o invovar cuando necesite
//Para construir funciones podemos hacer de tres formas...
function miFuncion() {}
var otraFuncion = function() {}
var yOtra = () => {};
// posee como palabra clave function, con la primera forma de defirnirlo establecemos como sera y para llamarla la escribnimos tan cual la definimos
miFuncion;
//El argumento es lo que va dentro del parentesis de la funcion
//Algo asi como lo que se encuentra definido dentro de esa caja
//Return se define como el regreso a la funcion retornando con el valor que se le defina
function sumarDosNumeros(a,b) {
    var suma  = a + b;
    return suma;

}
sumarDosNumeros(1,5);
//Declaraciones, son para poner una condicion, estas condiciones dejaran al programa 
// tomar un camino o otro dependiendo de la condiciones que tengamos
//Valores Booleanos(true, false), es el codigo primario de las computadoras, este se mide en 0 o 1
//Refiriendose a verdadero o falso como valor a tomar en cuenta, un ejemplo simple es el que se usa
//En las declaraciones de if else, cuando se declara la condicion esta puede estar sujeta a entregar un resultado
//Este en muchos caso es verdadero o falso, 0 o 1

