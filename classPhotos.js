const redShirtHeights = [6, 6, 4, 2, 5]; // 2, 4, 5, 6, 6
const blueShirtHeights = [5, 5, 3, 1, 5]; // 1, 3, 4, 5, 5

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  let redBack = true;
  let blueBack = true;

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (redBack === false && blueBack === false) {
      console.log("false");
      return false;
    }
    if (redShirtHeights[i] >= blueShirtHeights[i]) blueBack = false;
    if (blueShirtHeights[i] >= redShirtHeights[i]) redBack = false;
  }

  console.log(redBack || blueBack);
}

classPhotos(redShirtHeights, blueShirtHeights); // true
