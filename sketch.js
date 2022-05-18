var tile1,tile2,tile3;
var acid1,acid2;
var bg,spike;
function preload(){
  tile1 = loadImage("image/Tile 1.png");
  tile2 = loadImage("image/Tile 2.png");
  tile3 = loadImage("image/Tile 3.png");

  acid1 = loadImage("image/Acid (1).png");
  acid2 = loadImage("image/Acid (2).png");

  spike = loadImage("image/Spike.png");
  bg = loadImage("image/BG.png");

}

function setup() {
  createCanvas(900,500);
}

function draw() {
  background(0);  
  drawSprites();
  desenharMapa();
}