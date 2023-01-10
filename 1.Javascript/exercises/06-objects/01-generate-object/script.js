/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function Presentation(lastname,firstname,age,city,country) {
    this.lastname=lastname ;
    this.firstname=firstname;
    this.age=age ;
    this.city=city;
    this.country=country;
    }

    document.getElementById("run").addEventListener("click", () => {
       var p = new Presentation("Elouisdadi","Mhamed",35,"Bruxelles","Belgium")

       console.log(p);
    });
})();
