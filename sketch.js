var background, backgroundImage;
var astronaut, astronaut_img;
var alien1, alien2, alien3, alienObstaclesGroup;
var food1, food2, food3, foodGroup;
var oxigen;
var gameOver, gameOverImg;
var restart, restartImg;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  backgroundImage = loadImage("./assets/espacio.jpg");

  astronaut_img = loadImage("./assets/Astronaut.png");

  alien1 = loadImage("./assets/Alien 1.png");
  alien2 = loadImage("./assets/Alien 2.png");
  alien3 = loadImage("./assets/Alien 3.png");

  food1 = loadImage("./assets/huevo.png");
  food2 = loadImage("./assets/sushi.png");
  food3 = loadImage("./assets/vegetales.png");

  oxigen = loadImage("./assets/oxigeno.png");

  restartImg = loadImage(",/assets/restart.png");
  gameOverImg = loadImage(".assets/gameOver.png");
} 

function setup() {
  createCanvas(900,500);
  
 background = createSprites(170,480,10,10);
 background.addImage(backgroundImage);
 background.scale = 1.4;

 astronaut = createSprites(100,200,25,40);
 astronaut.addImage(astronaut_img);
 astronaut.scale = 0.3;

 alienObstaclesGroup = new Group();
 foodGroup = new Group();

gameOver = createSprites(230,210);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.5;

restart = createSprites(230,240);
restart.addImage(restartImg);
restart.scale = 0.5;

gameOver.visible = false;
restart.visible = false;
}

function draw() {
  if (keyDOwn("UP_ARROW")) {
    astronaut.velocityY = -6;
  }

  if (keyDOwn("DOWN_ARROW")) {
    astronaut.velocityY = 6;
  }

  drawSprites();

  score();

  if (astronaut.isTouching(alienObstaclesGroup)) {
    gameState = END;
  }

  if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;

    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
    alienObstaclesGroup.setVelocityXEach(0);
  }

}