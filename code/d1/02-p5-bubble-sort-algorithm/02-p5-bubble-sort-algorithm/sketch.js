let values = [];

function setup() {
  createCanvas(720, 360);

  for (let i = 0; i < width; i++) {
    values[i] = random(height);
  }
  background(255);
  noLoop();
}

function draw() {
  for (let i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height - values[i])
  }
}
