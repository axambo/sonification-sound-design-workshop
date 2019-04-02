// Code inspired from: https://www.youtube.com/watch?v=UNtqhnhD-wo
// API: http://api.open-notify.org/iss-now.json
// setTimeout, setInterval

let spaceData;
let issX;
let issY;

function preload() {

 }

function setup(){
  createCanvas(400,400);
  setInterval(currentISS, 1000);
  // Let's load an external JSON file from the internet
  // This is data!
  // Never publish your API! (replace before uploading to the repo)
  //loadJSON("http://api.open-notify.org/iss-now.json", dataReady);

}

function currentISS(){
  loadJSON("http://api.open-notify.org/iss-now.json", dataReady);

}

function dataReady(data){
  console.log(data);
  spaceData = data;
  console.log(data.iss_position.latitude);
  console.log(data.iss_position.longitude);
  let lat = data.iss_position.latitude;
  let long = data.iss_position.longitude;
  issX = map(lat, 0, 80, 0, width);
  issY = map(long, -150, -60, 0, height);
  console.log(issX);
  console.log(issY);
}

function draw(){
  // console.log(earthquakeData);
  background(0);
  fill(255);
  ellipse(issX, issY, 24, 24);
  stroke(255);
}