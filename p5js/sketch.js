function setup() {
  createCanvas(600, 600);
  background("#ffffff");
  kirby(width/2, height/2, 300);
}

function draw() {
}

function kirby(x, y, s){
  push();
  translate(x, y);
  strokeWeight(s*0.02);
  stroke(0);
  //Legs
  fill("#f56271");
  ellipse(s*0.27, s*0.4, s * 0.55, s * 0.3);
  ellipse(-s*0.27, s*0.4, s * 0.55, s * 0.3);
  //Arms
  fill("#FDCDE7");
  ellipse(s*0.46, 0, s * 0.28, s * 0.25);
  ellipse(-s*0.46, 0, s * 0.28, s * 0.25);
  //Body
  circle(0, 0, s);
  //Eyes
  noStroke();
  fill(0);
  ellipse(-s*0.12, -s*0.17, s*0.1, s*0.28);
  ellipse(s*0.12, -s*0.17, s*0.1, s*0.28);
  fill(255);
  ellipse(-s*0.12, -s*0.235, s*0.1, s*0.14);
  ellipse(s*0.12, -s*0.235, s*0.1, s*0.14);
  noFill();
  stroke(0);
  ellipse(-s*0.12, -s*0.17, s*0.1, s*0.28);
  ellipse(s*0.12, -s*0.17, s*0.1, s*0.28);
  //Cheek
  noStroke();
  fill(255, 0, 0, 100);
  ellipse(s*0.26, -s*0.02, s*0.2, s*0.1);
  ellipse(-s*0.26, -s*0.02, s*0.2, s*0.1);
  //Mouth
  noFill();
  stroke(0);
  arc(0, s*0.0, s*0.15, s*0.15, PI*0.2, PI*0.8);
  pop();
}