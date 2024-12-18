
let systems = [];
let g; 
let wind;
let obstacles = [];

function setup() {
  createCanvas(900, 300);
  g = createVector(0, 0.001);
  wind = createVector(0.02, 0);
  
  for (let i = 0; i < 150; i++) {
    let obstacle = createVector(random(width), random(height));
    obstacles.push(obstacle);
  }
}

function draw() {
  background(51);


  noStroke();
  fill(255, 0, 0, 100);
  for (let obstacle of obstacles) {
    ellipse(obstacle.x, obstacle.y, 20, 20);
  }


  for (let s of systems) {
    s.addParticle();
    s.applyGravity(g);
    s.applyForce(wind);
    s.applyObstacleAttraction(obstacles);
    s.run();
  }
}


function mouseClicked() {
  if (systems.length < 30) {
  let mPos = createVector(mouseX, mouseY);
  let system = new ParticleSystem(mPos);
  systems.push(system);
  }
}