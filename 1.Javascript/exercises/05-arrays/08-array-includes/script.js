/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
       // "pomme",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", () => {
      var el = "pomme";
      var cpt =0;
        for (var fruit of fruits) {
             if(fruit==el){
                
                  cpt++;
             }
  
             }
             if(cpt>0){
                 console.log(" oui il y a "+cpt+" pomme(s) dans le tableau  " );
             }else{
                  console.log(" non il n y a pas des pomme dans le tableau  " );
             }
  
       
    });
})();
