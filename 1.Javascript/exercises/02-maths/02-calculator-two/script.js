/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        var num1 = document.getElementById("op-one").value;
        var num2 = document.getElementById("op-two").value;
        var a = parseFloat(num1);
        var b = parseFloat(num2);

        switch(operation) {
            case "addition":
               alert(a+b);
               break;

            case "substraction":
                alert(a-b);
                break;
                
            case "multiplication":
                alert(a*b);
                break;
                
            case "division" :
                alert(a/b);
                break;  

        }
      
        
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
