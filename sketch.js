var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, game;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  game = new Game()
  game.getState();game.start();

}

function draw() {
  background(backgroundImage);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
