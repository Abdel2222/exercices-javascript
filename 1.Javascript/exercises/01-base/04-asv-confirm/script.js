/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  do{

    var age = prompt("indiquez votre age ?");
    var sexe = prompt("indiquez votre sexe ?");
    var ville = prompt("indiquez votre ville ?");

    var x = confirm('confirmer votre réponses ?');

  }while ( x== false)

   alert('votre age :'+age+ '/ sexe : '+sexe+ '/ville :'+ ville);
   
})();
