let img;
let knapTrykket1 = false;
let knapTrykket2 = false;
let knapTrykket3 = false;

function preload() {
  img = loadImage ('/assets/billede.jpg');
}

function setup() {
  createCanvas(1000, 700);

  frameRate(30);
  fill(255);
}

function draw() {
  clear();
  background(255, 234, 209);
  fill(255);
  rect(30, 30, width-60, height-60);

  image(img, width-470, 170, 400, 350, 0, 0, img.width, img.height, COVER);

  fill(0);
  textSize(50);
  text('Tobias - 22 år', 70, 100);
  textSize(30);
  text('Studerende på ITU', 80, 150);
  textSize(30);
  text('Nogle ting jeg kan lide:', 80, 230);

  if (knapTrykket1 == false) {
    let a = 80;
    let b = 280;
    let w = 300;
    let h = 80;
    fill(220);
    noStroke();
    rect(a, b, w, h);
    fill(0);
    textSize(30);
    text('Tryk på mig', a+20, b+h/2);
  } else {
    let a = 80;
    let b = 280;
    let w = 300;
    let h = 80;
    fill(200);
    noStroke();
    rect(a, b, w, h);
    fill(0);
    textSize(30);
    text('At lave mad', a+20, b+h/2);
  }

  if (knapTrykket2 == false) {
    let a = 80;
    let b = 380;
    let w = 300;
    let h = 80;
    fill(220);
    noStroke();
    rect(a, b, w, h);
    fill(0);
    textSize(30);
    text('Tryk på mig', a+20, b+h/2);
  } else {
    let a = 80;
    let b = 380;
    let w = 300;
    let h = 80;
    fill(200);
    noStroke();
    rect(a, b, w, h);
    fill(0);
    textSize(30);
    text('At se Formel 1', a+20, b+h/2);
  }

  if (knapTrykket3 == false) {
    let a = 80;
    let b = 480;
    let w = 300;
    let h = 80;
    fill(220);
    noStroke();
    rect(a, b, w, h);
    fill(0);
    textSize(30);
    text('Tryk på mig', a+20, b+h/2);
  } else {
    let a = 80;
    let b = 480;
    let w = 300;
    let h = 80;
    fill(200);
    noStroke();
    rect(a, b, w, h);
    fill(0);
    textSize(25);
    text('Tage en øl med gutterne', a+20, b+h/2);
  }
}

function mousePressed() {
  if (mouseX>= 80 && mouseX <= 380 && mouseY>= 280 && mouseY <= 360) {
    knapTrykket1 = true
  } else if (mouseX>= 80 && mouseX <= 380 && mouseY>= 380 && mouseY <= 460) {
    knapTrykket2 = true
  } else if (mouseX>= 80 && mouseX <= 380 && mouseY>= 480 && mouseY <= 560) {
    knapTrykket3 = true
  }
}
