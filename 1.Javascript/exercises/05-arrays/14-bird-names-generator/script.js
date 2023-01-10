/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    document.getElementById("run").addEventListener("click", () => {
        const adjectiveArray = Array.from(adjectives);

        var rand = Math.floor(Math.random() * birds.length);
        var ouiseau= birds[rand];

        var rand1 = Math.floor(Math.random() * adjectives.size);
        var adj= adjectiveArray[rand1];

         let symbole="Le";
        if(ouiseau.fem){
            symbole="La";
            return  document.getElementById('target').innerHTML =`${symbole} ${ouiseau.name} ${adj}e`;
        }
         else{

        document.getElementById('target').innerHTML =`${symbole} ${ouiseau.name} ${adj}`;
        
         }
    });
})();
