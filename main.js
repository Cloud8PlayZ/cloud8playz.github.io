var rgb1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
var rgb2 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

function setup(){
  createCanvas(400,400);
  background(rgb2);
}
function draw(){
  circle(mouseX, mouseY, 30);
  fill(rgb1);
  noStroke();
  smooth();
}
