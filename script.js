const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "images/background.jpg";
background.onload = function () {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  const char1 = new Image();
  char1.src = "images/character1.jpg";
  char1.onload = function () {
    ctx.drawImage(char1, 100, 350, 180, 180);

    const char2 = new Image();
    char2.src = "images/character2.jpg";
    char2.onload = function () {
      ctx.drawImage(char2, 520, 340, 180, 180);

      ctx.font = "28px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("Jason A. Charles", 30, 40);
      ctx.fillText("Academic Warriors", 30, 80);
    };
  };
};
