
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so.
   r = map(mouseX,25,1100,0,90)
   g = map(mouseX,10,1115,10,210)
   b = map(mouseX,5,1000,5,255)

  // Pass the values to the background() function you have learnt previously.
  background(r,g,b)

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  fill ("orange");
  ellipse(mouseX,mouseY,25,25)
}