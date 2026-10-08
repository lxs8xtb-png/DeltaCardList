```javascript
/* ===== DÉPLACEMENT AVEC LA SOURIS ===== */

let enTrainDeDeplacer = false;
let derniereX = 0;
let derniereY = 0;

visionneuse.addEventListener("mousedown", (event) => {

    // On ne commence pas le déplacement sur les boutons
    if (event.target.closest("button")) return;

    enTrainDeDeplacer = true;

    derniereX = event.clientX;
    derniereY = event.clientY;

    visionneuse.style.cursor = "grabbing";

    event.preventDefault();
});


document.addEventListener("mousemove", (event) => {

    if (!enTrainDeDeplacer) return;

    const differenceX = event.clientX - derniereX;
    const differenceY = event.clientY - derniereY;

    positionX += differenceX;
    positionY += differenceY;

    derniereX = event.clientX;
    derniereY = event.clientY;

    appliquerTransformation();
});


document.addEventListener("mouseup", () => {

    if (!enTrainDeDeplacer) return;

    enTrainDeDeplacer = false;

    visionneuse.style.cursor = "grab";
});


/* ===== TACTILE ===== */

let toucheX = 0;
let toucheY = 0;

visionneuse.addEventListener("touchstart", (event) => {

    if (event.touches.length === 1) {

        toucheX = event.touches[0].clientX;
        toucheY = event.touches[0].clientY;
    }
});


visionneuse.addEventListener("touchmove", (event) => {

    if (event.touches.length !== 1) return;

    event.preventDefault();

    const nouvelleX = event.touches[0].clientX;
    const nouvelleY = event.touches[0].clientY;

    positionX += nouvelleX - toucheX;
    positionY += nouvelleY - toucheY;

    toucheX = nouvelleX;
    toucheY = nouvelleY;

    appliquerTransformation();
});
```
