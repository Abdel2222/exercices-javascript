/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
      const img= document.getElementById ('source') ;
      const url = img.getAttribute("data-image");

     var monImage = document.createElement('img');
     monImage.src=url;

     const target = document.getElementById("target");
     target.appendChild(monImage);


     img.remove();

})();
