/* funciones para usar dentro del ejercicio de halloween */

/* una function es un Módulo que describe un algoritmo simple */
/* suele tener Parámetros, en este caso gif */
/* un Parámetros es la variable sobre la que actua el Módulo */
/* por otra parte, Javascript es orientado a objetos */
/* el objeto principal es Document, la página */

function mostrar(gif){
  document.getElementById(gif).style.visibility="visible";
}
function ocultar(gif){
  document.getElementById(gif).style.visibility="hidden";
}

function sonar(sonido){
  document.getElementById(sonido).play();
}
function parar(sonido){
  document.getElementById(sonido).pause();
}