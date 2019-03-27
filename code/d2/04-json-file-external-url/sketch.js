// Code inspired from: https://www.youtube.com/watch?v=6mT3r8Qn1VY
// Reference loadJSON: https://p5js.org/reference/#/p5/loadJSON


function setup(){
  // Let's load an external JSON file from the internet
  // This is data!
  loadJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", dataReady);
}

function dataReady(data){
  console.log(data);
}

function draw(){

}