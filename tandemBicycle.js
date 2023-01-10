// 2, 3, 5, 5, 9 red
// 1, 2, 3, 6, 7
let redShirtSpeeds = [5, 5, 3, 9, 2];
let blueShirtSpeeds = [3, 6, 7, 2, 1];

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  if (fastest === true) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
  }
  let fastestSpeed = 0;

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    if (redShirtSpeeds[i] === blueShirtSpeeds[i]) {
      fastestSpeed += redShirtSpeeds[i];
    } else if (redShirtSpeeds[i] > blueShirtSpeeds[i]) {
      fastestSpeed += redShirtSpeeds[i];
    } else {
      fastestSpeed += blueShirtSpeeds[i];
    }
  }
  console.log(fastestSpeed);
}

tandemBicycle(redShirtSpeeds, blueShirtSpeeds, true);
