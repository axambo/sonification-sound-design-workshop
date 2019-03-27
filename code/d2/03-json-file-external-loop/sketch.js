// JSON file from: 
// Code inspired from: https://www.youtube.com/watch?v=118sDpLOClw

let data;

function preload(){
  // Let's load an external JSON file
  // This is data!
  //female_electronic_musicians = loadJSON("female_electronic_musician.json");
  data = loadJSON("female_electronic_musicians.json");
}

function setup() {
  //createCanvas(400,400);
  noCanvas();
  //createP(data.figures[0].name);
  var figures = data.figures;
  // Looping through the data
  for (var i = 0; i < figures.length; i++) {
    createElement("h1", figures[i].name);
    createElement("h2", figures[i].born);
  }

}

function draw() {
  background (0);
  fill(255);
  // text(data.name, 50, 50);
  //text(data.figures[0].name, 50, 50);
}