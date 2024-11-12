let system;
let g; // gravity
let wind;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
  g = createVector(0, 0.05);
  wind = createVector(0.03, -0.01);
}

function draw() {
  background(51);
  system.addParticle();
  system.applyGravity(g);
  system.applyForce(wind);
  system.run();
}