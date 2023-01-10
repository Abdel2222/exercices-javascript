/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   
  
    // to get the value of an input: document.getElementById("element-id").value
    function check(num1 , num2){
        if (Number.isFinite(num1) && Number.isFinite(num2)) {
            return true;
          }
          return alert(` Erreur`);
    }


    function addition(num1,num2) {  

        var a = parseFloat(num1);
        var b = parseFloat(num2);
       if (check(a,b)){
            return alert(a+b);
       }
        
    }
    
    function substraction(num1,num2) {  
      
        var a = parseFloat(num1);
        var b = parseFloat(num2);
        if(check(a,b)){
            return alert(a-b);
        }
        
    }

    function multiplication(num1,num2) {  
       
        var a = parseFloat(num1);
        var b = parseFloat(num2);
         if(check(a,b)){
             return alert(a * b);
         }
        
    }
    function division(num1,num2){

        var a = parseFloat(num1);
        var b = parseFloat(num2);
         if(check(a,b)){
             return alert(a/b);
         }
    }
    document.getElementById("addition").addEventListener("click", () => {
        var input1 = document.getElementById("op-one").value;
        var input2 = document.getElementById("op-two").value;
        addition(input1,input2);
       
    });

    document.getElementById("substraction").addEventListener("click", () => {
        var input1 = document.getElementById("op-one").value;
        var input2 = document.getElementById("op-two").value;
       
        substraction(input1,input2);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        var input1 = document.getElementById("op-one").value;
        var input2 = document.getElementById("op-two").value;

        multiplication(input1,input2);
    });

    document.getElementById("division").addEventListener("click", () => {
        var input1 = document.getElementById("op-one").value;
        var input2 = document.getElementById("op-two").value;

        division(input1,input2);
    });
})();
