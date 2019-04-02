// Code inspired from: https://www.youtube.com/watch?v=ecT42O6I_WI
// API: https://openweathermap.org/current
// API key: https://home.openweathermap.org/api_keys (you need to create an account and log in)

let weather;
let fontsize = 40;
 

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  //font = loadFont('assets/SourceSansPro-Regular.otf');
 }

function setup(){
  createCanvas(400,400);
  // Let's load an external JSON file from the internet
  // This is data!
  // Never publish your API! (replace before uploading to the repo)
  // Remember to change [YOUR-API-HERE] with your API key
  loadJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=[Your-API-heres  ]&units=metric", dataReady);
  //textFont(font);
  textSize();
  textAlign(CENTER, CENTER);
}

function dataReady(data){
  console.log(data);
  weather = data;
  background(0);
  fill (255);
}

function draw(){
  // console.log(earthquakeData);
  if (weather) {
    fill(255);
    text("temp", 75, 200);
    text("humidity", 275, 200);
    ellipse(100, 100, weather.main.temp, weather.main.temp);
    ellipse(300, 100, weather.main.humidity, weather.main.humidity);
  }
}