/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const img = document.querySelector('img');

  

    const hover = img.getAttribute('data-hover');
    const src = img.getAttribute('src');
  
    img.addEventListener('mouseover',()=>{
        img.src = hover;
    })
    image.addEventListener('mouseout', function() {
        img.src = src;
    });
})();
