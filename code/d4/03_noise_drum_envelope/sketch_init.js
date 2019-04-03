// Anna Xambó
// Originally used at Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Example adapted from https://p5js.org/examples/sound-noise-drum-envelope.html

// Exercise: Get volume reading from the p5.Amplitude analyzer and use level to draw a rectangle

var noise, env, analyzer;

function setup() {
  createCanvas(710, 200);
  noise = new p5.Noise(); // other types include 'brown' and 'pink'
  noise.start();

  // multiply noise volume by 0
  // (keep it quiet until we're ready to make noise!)
  noise.amp(0);

  env = new p5.Envelope();
  // set attackTime, decayTime, sustainRatio, releaseTime
  env.setADSR(0.001, 0.1, 0.2, 0.1);
  // set attackLevel, releaseLevel
  env.setRange(1, 0);

  // p5.Amplitude will analyze all sound in the sketch
  // unless the setInput() method is used to specify an input.
  analyzer = new p5.Amplitude();
  analyzer.setInput(noise);
}

function draw() {
  background(0);

  // get volume reading from the p5.Amplitude analyzer
  var level = analyzer.getLevel();

  // use level to draw a green rectangle
  var levelHeight = map(level, 0, .4, 0, height);
  fill(100,250,100);
  // draw a rectangle that changes the height depending on level value
}

function mousePressed() {
  getAudioContext().resume();
  env.play(noise);
}
