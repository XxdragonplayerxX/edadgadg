var canvas, backgroundImg;
var gameState = 5;
var playerCount;
var database;

var form, player, game;
function preload(){
backgroundImg = loadImage("godbattle background.jpg")

}

function setup(){
canvas = createCanvas(800, 500);
database = firebase.database();
console.log(gameState)
  game = new Game();
  game.getState();
  game.start();
  console.log(gameState)
}

function draw(){
  background(backgroundImg)
  if(playerCount == 2){
 gameState = 1
 game.update(gameState);
  }
  
  
  
  drawSprites();
}


