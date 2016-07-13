var video;
var button;
var snapshots = [];
var counter = 0;

function setup() {
  createCanvas(800, 240);
  background(51);
  video = createCapture(VIDEO, ready);
  video.size(320, 240);
  button = createButton('Stop/Start');
  button.mousePressed(stopStartVideo);
}

function stopStartVideo() {
  go = !go;
}

var go = false;

function ready() {
  go = true;
}

function draw() {
  var maxSnapshots = 43;
  if (go) {
    snapshots[counter] = video.get();
    counter++;
    if (counter == maxSnapshots) {
      counter = 0;
    }
  }
  var w = 80;
  var h = 60;
  var x = 0;
  var y = 0;
  for (var i = 0; i < snapshots.length; i++) {
    //tint(255, 50);
    var index = (i + frameCount) % snapshots.length;
    image(snapshots[index], x, y, w, h);
    x = x + w;
    if (x > width) {
      x = 0;
      y = y + h;
    }
  }
}
