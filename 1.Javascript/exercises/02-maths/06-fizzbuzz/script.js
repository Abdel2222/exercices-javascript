/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {
    function checkNbr(n) {
          if( n % 15 === 0 ){
              alert("fizzbuzz");
            
          }else if(n % 3 === 0 ){
            alert("fizz");
          }else if(n % 5 === 0){
            alert("buzz");
          }
          else alert(n);
    
      }
      var nbr = prompt("Entrez un nombre entre 1 et 100 ?");

       if(nbr >0 && nbr <=100){
           checkNbr(nbr);
       }else
        alert(" ERREEUR !! ")

})();
