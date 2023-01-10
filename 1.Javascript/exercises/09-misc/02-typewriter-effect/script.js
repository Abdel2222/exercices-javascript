/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var i = 0;
var txt = document.getElementById("target").innerHTML;
var textAffiche ="Je suis un texte qui va apparaître dans un effet machine à écrire, un peu comme dans les films noirs."
var speed = Math.floor(Math.random() * (300 - 50)) + 50;
console.log(txt)
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("target").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
(() => {
 
  window.addEventListener("load", typeWriter);
})();
