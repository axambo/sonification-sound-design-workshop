// Anna Xambó
// // Originally used at Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Example adapted from: https://p5js.org/examples/sound-measuring-amplitude.html

// Exercise: Change plotting the amplitude of an audio sample to the amplitude of a mic input

var song, analyzer, level;

function preload() {
  song = loadSound('sounds/189790__jan-mussel__ubahn-berlin-atmo-mit-ansage-schlesisches-tor.wav');
}

function setup() {
  createCanvas(710, 200);
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
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