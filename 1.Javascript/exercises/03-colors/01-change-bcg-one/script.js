/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function changeColor(color) { 
        document.body.style.background = color; 
    }

    document.getElementById("red").addEventListener("click", () => {
       
          changeColor("red");
       
    });
    document.getElementById("green").addEventListener("click", () => {
       
        changeColor("green");
     
  });

  document.getElementById("blue").addEventListener("click", () => {
       
    changeColor("blue");
 
});
document.getElementById("yellow").addEventListener("click", () => {
       
    changeColor("yellow");
 
});

})();
