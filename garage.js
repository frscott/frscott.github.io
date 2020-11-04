//
// My JavaScript Project Garage - Scott Franz
// Note: Will definitely want to clean this code later. Add a for loop
// and create objects.
//


let y1;
let y2;
let y3;
let y4;
let y5;
let y6;
let gilpatrickLogo;
let AA;



function setup() {
    createCanvas(windowWidth, windowHeight);
    y1 = windowHeight*.9;
    y2 = windowHeight*.75;
    y3 = windowHeight*.6;
    y4 = windowHeight*.45;
    y5 = windowHeight*.3;
    y6 = windowHeight*.15;
    gilpatrickLogo = loadImage('thegilpatricklogo.png');
    AA = loadImage('AA.png');
  }

  function draw() {
    background(156, 150, 137);

//Inside Garage
    fill(0);
    rectMode(CENTER);
    rect(windowWidth/2, windowHeight/2, windowWidth/1.1, windowHeight*.85);

// mouseOver Change Color of Circle to Yellow
if (overCircle(windowWidth/2, windowHeight/5, 100)==true) {
    fill(204, 195, 31);
  } else {
    fill(255);
  } 

// if (overCircle(windowWidth/2.57, windowHeight/2.55, 100)==true){
//       fill(204, 195, 31);
//     } else {
//       fill(255);
//     }


// The Gilpatrick Logo
    noStroke();
    ellipse(windowWidth/2, windowHeight/5, 200, 200);
    image(gilpatrickLogo, windowWidth/2.52, windowHeight/10.5);

// Data Visualizations
// noStroke();
// ellipse(windowWidth/2, windowHeight/2, 200, 200);
// image(AA, windowWidth/2.57, windowHeight/2.55, 200, 200);

//Garage Door
    rectMode(CENTER);
    fill(255);
    stroke(0);
    rect(windowWidth/2, y1, windowWidth/1.09, windowHeight/6);
    rect(windowWidth/2, y2, windowWidth/1.09, windowHeight/6);
    rect(windowWidth/2, y3, windowWidth/1.09, windowHeight/6);
    rect(windowWidth/2, y4, windowWidth/1.09, windowHeight/6);
    rect(windowWidth/2, y5, windowWidth/1.09, windowHeight/6);
    rect(windowWidth/2, y6, windowWidth/1.09, windowHeight/6);

  //Animation
    y1 = y1 - 1;
    y2 = y2 - 1;
    y3 = y3 - 1;
    y4 = y4 - 1;
    y5 = y5 - 1;
    y6 = y6 - 1;
    
  }

// If mouse overlays circle
  function overCircle(x, y, r) {
    if (dist(x, y, mouseX, mouseY) < r) {
      return true;
    } else {
      return false;
    }
  }

//Click on Logo for Link
  function mouseClicked() {
    if (overCircle(windowWidth/2, windowHeight/5, 100)==true) {
      return window.location.href = "https://thegilpatrick.github.io/";
    }     
  }
