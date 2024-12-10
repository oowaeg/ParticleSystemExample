
let systems = [];
let g; 
let wind;

function setup() {
  createCanvas(900, 300);
  g = createVector(0, 0.001);
  wind = createVector(0.02, 0);
}

function draw() {
  background(51);

  for (let s of systems) {
    s.addParticle();
    s.applyGravity(g);
    s.applyForce(wind);
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