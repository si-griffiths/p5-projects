
function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  frameRate(10);
}

function draw() {
  background(51);

  loadPixels();

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var pixelColor = random([0, 255]);
      pixels[index] = pixelColor;
      pixels[index+1] = pixelColor;
      pixels[index+2] = pixelColor;
      pixels[index+3] = 255;
    }
  }

  updatePixels();
}
