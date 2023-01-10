/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

 
    const text = document.getElementById("target");
    const textAffiche ="Woo-hoo ! Je fais des vagues ! Wééééé ! Oh..."
     let html='';
    for(var i=0 ; i<5 ;i++){
      
        html +=`<span style="text-shadow: 0 ${i+10}px 0 #777">${textAffiche}</span>`;
    }

   
    text.innerHTML = html;
  
    
})();
