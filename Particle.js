// A simple Particle class

class Particle {
    constructor(position) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
        this.position = position.copy();
        this.lifespan = 255;
        this.size = random(20, 50)
    }

    run() {
        this.update();
        this.display();
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {

        let randomForce = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
        this.applyForce(randomForce);


        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        this.lifespan -= 1;
    }

    display() {
        stroke(200, this.lifespan);
        strokeWeight(2);
        fill(127, this.lifespan);
        ellipse(this.position.x, this.position.y, this.w, this.w);
    }

    isDead() {
        return this.lifespan < 0;
    }
}

