// Canvas for shooting stars
const canvas = document.getElementById("universe");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
    ctx.fill();

    star.x -= star.speed;
    star.y += star.speed;

    if (star.x < 0 || star.y > canvas.height) {
      star.x = Math.random() * canvas.width;
      star.y = 0;
    }
  });

  requestAnimationFrame(drawStars);
}
drawStars();

// Floating messages
const messages = document.querySelectorAll(".floating");

messages.forEach(msg => {
const safeRange = (min, max) => Math.random() * (max - min) + min;

msg.style.top = safeRange(10, 80) + "vh";   // between 10% and 80%
msg.style.left = safeRange(10, 80) + "vw";  // between 10% and 80%

msg.style.animationDuration = safeRange(15, 30) + "s";
msg.style.animationDelay = safeRange(0, 5) + "s";


  
});

// Music control
const music = document.getElementById("bgMusic");
const toggleMusic = document.getElementById("toggleMusic");
let isPlaying = false;

toggleMusic.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggleMusic.textContent = "🎵 Play Music";
  } else {
    music.play();
    toggleMusic.textContent = "⏸ Pause Music";
  }
  isPlaying = !isPlaying;
});

// Theme control
const themeSelector = document.getElementById("themeSelector");

themeSelector.addEventListener("change", () => {
  const value = themeSelector.value;
  switch (value) {
    case "pink":
      canvas.style.background = "radial-gradient(ellipse at bottom, #ff7eb3 0%, #ff758c 100%)";
      break;
    case "violet":
      canvas.style.background = "radial-gradient(ellipse at bottom, #654ea3 0%, #eaafc8 100%)";
      break;
    case "galaxy":
      canvas.style.background = "radial-gradient(ellipse at center, #2b5876 0%, #4e4376 100%)";
      break;
    default:
      canvas.style.background = "radial-gradient(ellipse at bottom, #000000 0%, #0a0a2a 100%)";
  }
});
