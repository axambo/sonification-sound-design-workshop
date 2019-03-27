// JSON file from: 
// https://github.com/dariusk/corpora/blob/master/data/music/female_classical_guitarists.json
// Code inspired from: https://www.youtube.com/watch?v=_NFkzw6oFtQ

let female_classical_guitarists;

function setup() {
  createCanvas(400,400);
  // Let's hardcode a JSON file
  // This is data!
  female_classical_guitarists = {
		"country": "Argentina",
		"name": "Maria Luisa Anido",
		"born": 1907,
		"died": 1996,
		"wiki": "https://en.wikipedia.org/wiki/Mar%C3%ADa_Luisa_Anido",
		"url": "http://www.guitarrasweb.com/marialuisaanido/curri.htm"
	}
}

function draw() {
  background (0);
  fill(255);
  text(female_classical_guitarists.name, 10, 50);
  // Try to print other properties of the "female_classical_guitarists" object
}