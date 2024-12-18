class ParticleSystem {
    constructor(position) {
        this.origin = position.copy();
        this.particles = [];
    }

    addParticle() {
        if (this.particles.length < 30 && frameCount % 10 === 0) {
        this.particles.push(new Particle(this.origin));
        }
    }

    applyGravity(g) {
        this.applyForce(g);
    }

    applyForce(force) {
        for (let p of this.particles) {
            p.applyForce(force);
        }
    }

    applyObstacleAttraction(obstacles) {
        for (let p of this.particles) {
            for (let obstacle of obstacles) {
                let direction = obstacle.copy().sub(p.position);
                let distance = direction.mag();
                if (distance < 100) {
                    direction.normalize();
                    let attractionForce = direction.mult(1 / (distance + 2));
                    p.applyForce(attractionForce);
                }
            }
        }
    }

    run() {
        for (let i = this.particles.length-1; i >= 0; i--) {
            let p = this.particles[i];
            p.run();
            if (p.isDead()) {
              this.particles.splice(i, 1);
            }
          }
    }
}