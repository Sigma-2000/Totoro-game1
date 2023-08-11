const totoro = document.querySelector(".toto");
const totoroBounce = document.querySelector(".bounce-1");
const totoroCombo = document.querySelector(".combo");
const totoroRamen = document.querySelector(".ramen");
const scoreDisplay = document.querySelector("#score");
const grid = document.querySelector(".grid");

const totoroWidth = 100;
const totoroHeight = 150;
const ramenWidth = 70;
const ramenHeight = 70;
const boardWidth = 1000;
const boardHeight = 600;
const starWidth = 70;
const starHeight = 50;



//init Totoro move
let x= 0;
let y= 0;
let speed = 50;
let flipped = false;
let rotate = 0;

//init star move 
let xDirection = -2;
let yDirection = 2;

const starStart = [900, 450];
let starCurrentPosition = starStart;

let timerId;

//init ramen move 
let xMove = 2;

const ramenStart = [0, 0];
let ramenCurrentPosition = ramenStart;

let timerRamenId;


//draw ramen

const ramen = document.createElement('img')
ramen.src = "./ramen.jpg";
ramen.classList.add('ramen')
grid.appendChild(ramen)
drawRamen()

function drawRamen() {
  ramen.style.left = ramenCurrentPosition[0] + 'px'
  ramen.style.bottom = ramenCurrentPosition[1] + 'px'
}

// draw star

const star = document.createElement('img')
star.src = "./ninjastar.jpg";
star.classList.add('star')
grid.appendChild(star)
drawStar()

function drawStar() {
  star.style.left = starCurrentPosition[0] + 'px'
  star.style.bottom = starCurrentPosition[1] + 'px'
}


// Totoro move switch
function handleKeyDown(event) {
  if (!event.key.includes("Arrow")) return

  switch (event.key) {
    case 'ArrowUp':
      y = y - 1;
      rotate = -90;
      break;
    case 'ArrowDown':
      y = y + 1;
      rotate = 90;
      break;
    case 'ArrowLeft':
      x =  x - 1;
      flipped = true;
      rotate = 0;
      break;
    case 'ArrowRight':
      x = x + 1;
      flipped= false;
      rotate = 0;
      break;
  }

  totoro.setAttribute(
    "style", `
      --rotate: ${flipped ? '180deg': '0'};
      --x: ${x * speed}px; 
      --y: ${y * speed}px;
      --rotate: ${rotate}deg;
    `
  );
}

//Totoro bounce
function bouncing(event) {
  if (!event.key.includes("Enter")) { 
    return totoro.classList.remove('bounce-1') 
  }
  return totoro.classList.add('bounce-1');
}

//Totoro special move
function specialTrick(event){
  if (!event.code.includes("Space")) { 
    return totoro.classList.remove('combo'); 
  }
  return totoro.classList.add('combo');
}

//
function moveRamen() {
  ramenCurrentPosition[0] += xMove;
  drawRamen();
  if (ramenCurrentPosition[0] >= boardWidth) {
    scoreDisplay.innerHTML = 'You Loose (ノ´ロ`)ノ!';
    clearInterval(timerId);
    clearInterval(timerRamenId);
    //document.removeEventListener('keydown', handleKeyDown)
  }
  if 
    (
      (ramen.getBoundingClientRect().x < (totoro.getBoundingClientRect().x + totoroWidth) 
      && (ramen.getBoundingClientRect().x + ramen.width) > totoro.getBoundingClientRect().x
      && ramen.getBoundingClientRect().y < (totoro.getBoundingClientRect().y + totoroHeight) 
      && (ramen.getBoundingClientRect().y + ramen.height) > totoro.getBoundingClientRect().y)
    ) {
      scoreDisplay.innerHTML = 'You Win (ㆆᴗㆆ)!';
      clearInterval(timerId);
      clearInterval(timerRamenId);
      grid.removeChild(ramen);
  }
}

timerRamenId = setInterval(moveRamen, 10)

//move ramen
function moveStar() {
    starCurrentPosition[0] += xDirection;
    starCurrentPosition[1] += yDirection;
    drawStar();
    checkForCollisions();
}
timerId = setInterval(moveStar, 3);

//check Collision (ramen, mur et totoro)
function checkForCollisions(){
  function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
      yDirection = -2;
      return;
    }
    if (xDirection === 2 && yDirection === -2) {
      xDirection = -2;
      return;
    }
    if (xDirection === -2 && yDirection === -2) {
      yDirection = 2;
      return;
    }
    if (xDirection === -2 && yDirection === 2) {
      xDirection = 2;
      return;
    }
  }

  if 
    ( 
      starCurrentPosition[0]>= (boardWidth - starWidth) || starCurrentPosition[0] <= 0 
      || starCurrentPosition[1] >= (boardHeight - starHeight)
      || starCurrentPosition[1] >= (boardWidth - starWidth) 
      || starCurrentPosition[1] <= 0 || starCurrentPosition[1] >= (boardHeight - starHeight)
    ) {
      changeDirection();
  }

   if
    (
      (star.getBoundingClientRect().x < (totoro.getBoundingClientRect().x + totoroWidth) 
      && (star.getBoundingClientRect().x + star.width) > totoro.getBoundingClientRect().x
      && star.getBoundingClientRect().y < (totoro.getBoundingClientRect().y + totoroHeight) 
      && (star.getBoundingClientRect().y + star.height) > totoro.getBoundingClientRect().y)
    ) {
      console.log('boom');
      scoreDisplay.innerHTML = 'You are Dead (╯◣﹏◢)╯!';
      clearInterval(timerId);
      clearInterval(timerRamenId);
      /*grid.removeChild(ramen);*/
  }
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keydown", bouncing);
window.addEventListener("keydown", specialTrick);

//singleton ici ?

function Personne(prenom, nom, age, genre, interets) {

  // Définitions des propriétés et méthodes

};
let personne1 = new Personne('Bob', 'Smith', 32, 'homme', ['musique', 'ski']);

console.log(personne1.valueOf());
console.log(Personne.prototype);
console.log(Object.prototype);