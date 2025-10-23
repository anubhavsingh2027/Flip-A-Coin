let currentRotation = 0;
let headsCount = 0;
let tailsCount = 0;

function flipCoin() {
  const coin = document.getElementById("coin");
  const resultText = document.getElementById("result");
  const counterText = document.getElementById("counter");
  const sound = document.getElementById("flip-sound");

  const isHeads = Math.random() < 0.5;

  // Rotate: heads ends at 0 deg, tails at 180 deg
  currentRotation += 1800 + (isHeads ? 0 : 180);
  coin.style.transform = `rotateY(${currentRotation}deg)`;

  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(e => {});
  }

  setTimeout(() => {
    if (isHeads) {
      resultText.textContent = "🟡 It's Heads!";
      headsCount++;
    } else {
      resultText.textContent = "🔵 It's Tails!";
      tailsCount++;
    }

    counterText.textContent = `Heads: ${headsCount} | Tails: ${tailsCount}`;
  }, 1000);
}
