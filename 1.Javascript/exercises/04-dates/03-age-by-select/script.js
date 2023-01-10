/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function getAge(date) {
        var diff = Date. now() - date. getTime();
        var age = new Date(diff);

        return (Math. abs(age. getUTCFullYear - 1970));
        }
      


    document.getElementById("run").addEventListener("click", () => {
        var day = document.getElementById("dob-day").value;
        alert(day);
        var month = document.getElementById("dob-month").value;
        alert(month);
        var year = document.getElementById("dob-year").value;

        alert(getAge(new Date(year, month, day)));
     
  });
})();
