let system;
let g; // gravity

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
  g = createVector(0, 0.05);
}

function draw() {
  background(51);
  system.addParticle();
  system.applyGravity(g);
  system.run();
}