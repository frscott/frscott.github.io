
let numBalls;
let spring = 0.05;
let gravity = 0.03;
let friction = -0.8;
let balls = [];
let bubbles = [];
let names = ["Scott", "a Human", "a Husband", "a Gardener", "a Biker", "a Programmer", "a Son", "a Baker", "a NerdFighter" ];
let count = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  numBalls = random(20, 100);
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(20, 120),
      i,
      balls
    );
  }
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  count = count + 1;
  if (count > names.length-1){
    count = 0;
  }
for (let i = 0; i < bubbles.length; i++) {
  if (bubbles[i].contains(mouseX, mouseY)) {
    return window.location.href = "garage.html";
    }   
  }
}


function draw() {
  background(0);
  
  strokeWeight(1);
  stroke('white')
  fill(0);

  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();
  });

  for (let i = 0; i < balls.length; i++) {
    if (balls[i].contains(mouseX, mouseY)) {
      balls[i].changeColor(255);
    } else {
      balls[i].changeColor(0);
    }
  }

  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
  


  noFill();
  rectMode(CENTER);
  rect(windowWidth/2, windowHeight/2 - 5, 400, 100);
  textAlign(CENTER);
  textSize(28);
  textFont('Monospace');
  text(`Hello I'm ${names[count]}`, windowWidth/2, windowHeight/2);
  
  
  
}


class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    fill(0, 0, this.brightness);
    ellipse(this.x, this.y, this.r * 2);
  }
}

class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.diameter) {
      return true;
    } else {
      return false;
    }
  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }

  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    fill(this.brightness, 200);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
