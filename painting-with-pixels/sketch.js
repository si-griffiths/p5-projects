var video;
var vScale = 16;
var particle;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  particle = new Particle(320, 240);
  background(51);
}

function draw() {
  video.loadPixels();
  particle.update();
  particle.show();
}
