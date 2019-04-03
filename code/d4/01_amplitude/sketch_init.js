// Anna Xambó
// Originally used at Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Example adapted from: https://p5js.org/reference/#/p5.Amplitude

// Exercise: Map the amplitude values of the audio signal to the size of an ellipse

var sound, amplitude, cnv;

function preload(){
  sound = loadSound('sounds/178937__laureci__motzstrasse2.mp3');
}
function setup() {
  cnv = createCanvas(100,100);
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
  // map the level value to size of the canvas
  // change color depending on size
  ellipse(width/2, height/2, level, level);
}