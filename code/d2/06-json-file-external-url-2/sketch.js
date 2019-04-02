// Code inspired from: https://www.youtube.com/watch?v=6mT3r8Qn1VY
// Reference loadJSON: https://p5js.org/reference/#/p5/loadJSON

let earthquakeData;

function setup(){
  createCanvas(400,400);
  // Let's load an external JSON file from the internet
  // This is data!
  loadJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", dataReady);
}

function dataReady(data){
  //console.log(data);  
  earthquakeData = data;
  background(0);
  fill (255);
}

function draw(){
  console.log(earthquakeData);
  if (earthquakeData) {
    randomSeed(4); // to keep it steady
    for (var i = 0; i < earthquakeData.metadata.count; i++) {
      //ellipse(random(width), random(height), 16, 16)
      var mag = earthquakeData.features[i].properties.mag;
      ellipse(random(width), random(height), mag, mag)
    }
  }
}