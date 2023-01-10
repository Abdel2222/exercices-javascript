/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const target = document.querySelector('#target')
  

   /* document.write("<h4>La table de multiplication du nombre: "+a+"</h4>")
    document.write("<table border >");
   
    for(var i=1;i<=10;i++){
       document.write("<tr>");
       document.write("<td>"+a+" x "+i+" =</td>");
       document.write("<td>"+a*i+"</td>");
       document.write("</tr>");
    }
    document.write("<table border >");*/
   
    var tbl = '<table><tbody>';
    
    for (let i = 1; i <= 10; i++) {
      tbl += '<tr>';
      for (let j = 1; j <= 10; j++) {
        tbl += `<td>${i * j}</td>`;
      }
      tbl += '</tr>';
    }
    
    tbl += '</tbody></table>';
    
    target.innerHTML = tbl;
    
  
      
})();
