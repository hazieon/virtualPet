const sky = document.querySelector(".sky");
const land = document.querySelector(".land");
const dragon = document.querySelector(".dragon");

// let speed = 3;
// let velX = 0;
// let velY = 0;
// /////jump and friction and gravity
// let jump = false;
// let friction = 1;
// let gravity = 0.1;

// velX *= friction;
// velY += gravity;

// //moves player side to side
// dragon.style.left += velX;
// dragon.style.top += velY;

function moveLeft() {
  if (parseInt(dragon.style.left) > 0) {
    dragon.style.transform = "scaleX(1)";
    dragon.style.left = parseInt(dragon.style.left) - 1 + "vw";

    // velX--;
  } else {
    dragon.style.left = dragon.style.left;
  }
  //   console.log(dragon.style.left);
}

function moveRight() {
  if (parseInt(dragon.style.left) < 70) {
    dragon.style.transform = "scaleX(-1)";
    dragon.style.left = parseInt(dragon.style.left) + 1 + "vw";

    // velX++;
  } else {
    dragon.style.left = dragon.style.left;
  }
  //   console.log(dragon.style.left);
}
function moveDown() {
  if (parseInt(dragon.style.top) < 70) {
    dragon.style.top = parseInt(dragon.style.top) + 1 + "vh";
    console.log(dragon.style.top);
  } else {
    dragon.style.top = dragon.style.top;
  }
}

function moveUp() {
  if (parseInt(dragon.style.top) > 41) {
    dragon.style.top = parseInt(dragon.style.top) - 1 + "vh";
    console.log(dragon.style.top);
  } else {
    dragon.style.top = dragon.style.top;
  }
}

function moveJump() {
  //   if (!jump) {
  //     jump = true;
  //     velY = -speed * 2;
  //   }
  console.log("jump");
}
function moveDragon(event) {
  switch (event.keyCode) {
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
    case 38:
      moveUp();
      break;
    case 40:
      moveDown();
      break;
    case 32:
      moveJump();
      break;
  }
}
function gameLoop() {
  setTimeout("gameLoop()", 10);
  //   dragon.addEventListener("keydown", moveDragon);
  window.addEventListener("keydown", moveDragon);
}
