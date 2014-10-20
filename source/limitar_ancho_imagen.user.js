// ==UserScript==
// @name       Limitar ancho de imagen
// @namespace  http://mansonjesus.github.io/userscripts
// @version    0.2
// @description  Limita el tamaño de imagen al 95% del ancho del bloque que la contiene
// @match      http://www.forocoches.com/foro/showthread.php?*
// @copyright  2014+, mansonjesus
// ==/UserScript==

// @TODO: Zoom imágenes al hacer click

//Añade un estilo a la cabecera de la página 
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = 'img {max-width:95%;}';
document.getElementsByTagName('head')[0].appendChild(style);
