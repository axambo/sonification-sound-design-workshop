// Anna Xambó
// // Originally used at Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Example adapted from: https://p5js.org/examples/sound-measuring-amplitude.html

// Exercise: Change plotting the amplitude of an audio sample to the amplitude of a mic input

var analyzer, mic, level;

function setup() {
  createCanvas(200, 200);

  // create an audio in
  mic = new p5.AudioIn();

  // prompts user to enable their browser mic
  mic.start();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(mic);
}

function draw() {
  background(255);

  // Get the average (root mean square) amplitude
  level = analyzer.getLevel();
  var size = map(level, 0, 1, 0, 200);
  fill(0);
  stroke(0);
  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, size, size);
}