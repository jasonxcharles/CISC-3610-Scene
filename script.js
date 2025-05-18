const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "images/background.jpg";

const char1 = new Image();
char1.src = "images/character1.jpg";

const char2 = new Image();
char2.src = "images/character2.jpg";

let loadedImages = 0;

function drawScene() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(char1, 100, 350, 180, 180);
  ctx.drawImage(char2, 520, 340, 180, 180);

  ctx.font = "28px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Jason A. Charles", 30, 40);
  ctx.fillText("Academic Warriors", 30, 80);
}

function imageLoaded() {
  loadedImages++;
  if (loadedImages === 3) {
    drawScene();
  }
}

background.onload = imageLoaded;
char1.onload = imageLoaded;
char2.onload = imageLoaded;
