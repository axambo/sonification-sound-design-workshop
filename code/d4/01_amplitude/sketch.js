// Anna Xambó
// // Originally used at Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Example adapted from: https://p5js.org/reference/#/p5.Amplitude

// Exercise: Map the amplitude values of the audio signal to the size of an ellipse

var sound, amplitude, cnv;

function preload(){
  sound = loadSound('sounds/178937__laureci__motzstrasse2.mp3');
}
function setup() {
  cnv = createCanvas(400,400);
  amplitude = new p5.Amplitude();

  // start / stop the sound when canvas is clicked
  cnv.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
  });
}
function draw() {
  background(0);
  fill(255);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 400);
  console.log(size);
  if (size > 70 ) {
    fill(255, 255, 255, 255);
  } else if (size < 40) {
    fill(255, 255, 255, 100);
  } else {
    fill (255,255,255, 175);
  }  

  ellipse(width/2, height/2, size, size);
}