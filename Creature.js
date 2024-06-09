class Creature {
  constructor(img) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(1, 20);
    this.size = random(50, 200);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
    this.img = img;
    this.rotation = 0;
    this.rotationSpeed = random(-0.05, 0.05);
    this.angle = random(TWO_PI);   
  }

  // creation of a creature.
  createCreature() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    image(this.img, 0, 0, this.r, this.r);
    pop();
  }

  // setting the creature in motion.
  moveCreature() {
    if (this.x < 0 || this.x > width)
      this.xSpeed *= -1;
    if (this.y < 0 || this.y > height)
      this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.rotation += this.rotationSpeed;
  }
}
