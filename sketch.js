var database;
var position;
var formulario;
var player;
var game;
var canvas;
var gameState = 0;
var playerCount;

function setup(){
 canvas = createCanvas(400,400);
 database = firebase.database();
 game = new Game();
 game.getState();
 game.start();

}

function draw(){
  
}
