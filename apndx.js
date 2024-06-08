audioPlayer = document.querySelector('#song')

function draw() {
    const bpm = 132
    const demoTime = getTime() * bpm / 60

    textFont('Press Start 2P')

    if (demoTime < 12) {
      title(demoTime)

    } else if (demoTime < 28) {
      intros(demoTime-12)

    } else if (demoTime < 40) {
      particlator(demoTime - 28)

    } else if (demoTime < 40) {
        //squareScene(demoTime - 32)

    } else if (demoTime < 48) {
        //noiseScene(demoTime)

    } else if (demoTime < 56) {
        //squareScene(demoTime - 48)

    } else if (demoTime < 64) {
        //noiseScene(demoTime)

    } else {
        endDemo()
 
    }
}


function title(sceneTime) {
  background(img);
  textAlign(CENTER, CENTER);
  size = 64
  textSize(size);
  fill(35, 100, 50);
  noStroke();
  let y = height + 100 - sceneTime * 100
  texts = 'Virman bileet goes Avaruus'
  text(texts, width/2, y)
}

function intros(sceneTime) {
  background(img);
  textAlign(CENTER, CENTER);
  size = 30
  textSize(size);
  fill(35, 100, 50); 
  noStroke();
  let y = height + 100 - sceneTime * 100
  let texts = `
    Music credits 
    Virman Pileet Graffathon 2024 edit by hajame





    Credits
    hajame viku apndx





    Greetings to all fellow Graffathon creatures
    `;

  text(texts, width/2, y)
}

function particlator(sceneTime) {
// an array to add multiple particles
let particles = [];

  for(let i = 0;i<width/1000;i++){
    particles.push(new Particle());
  }

  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}

function instructionsScene(sceneTime) {
    background(12, 14, 26, 255)
    textAlign(CENTER, CENTER)
    textSize(64)
    fill(35, 100, 50);
    noStroke()
    text('Press F to go fullscreen and space to start', width/2, height/2)
}


function stickScene(sceneTime) {
    background(35, 100, 50) // orange

    translate(width/2, height/2)

    fill(0, 0, 0) // black
    noStroke()
    // https://www.w3schools.com/jsref/jsref_tofixed.asp
    text(sceneTime.toFixed(2), 0, 0)

    stroke(0, 0, 0) // black
    strokeWeight(10)

    // https://p5js.org/reference/#/p5/rotate
    rotate(sceneTime)
    line(0, 100, 0, 300)
}



function ballScene(sceneTime) {
    background(210, 100, 50) // blue

    translate(width/2, height/2)

    fill(0, 0, 100) // white
    noStroke()

    text(sceneTime.toFixed(2), 0, 0)

    rotate(sceneTime)

    const bump = sceneTime - Math.floor(sceneTime)
    // https://p5js.org/reference/#/p5/map
    const radius = map(bump, 0, 1, 0, 100)
    ellipse(0, 200, radius, radius)
}



function squareScene(sceneTime) {
    background(340, 100, 50) // purple

    translate(width/2, height/2)

    stroke(0, 0, 100) // white
    strokeWeight(10)
    noFill()

    // https://p5js.org/reference/#/p5/rectMode
    rectMode(CENTER)
    for (let i = 0; i < 10; i++) {
        rotate(sceneTime * 0.1)
        // https://p5js.org/reference/#/p5/scale
        scale(0.9)
        rect(0, 0, 500, 500)
    }
}



function noiseScene(sceneTime) {
    background(130, 50, 50) // green

    fill(255)
    noStroke()

    // https://p5js.org/reference/#/p5/beginShape
    beginShape()
    for (let i = 0; i < 100; i++) {
        const x = map(i, 0, 99, 0, width)
        // https://p5js.org/reference/#/p5/noise
        const y = noise(i * 0.1, sceneTime / 16) * height
        vertex(x, y)
    }
    vertex(width, 800)
    vertex(0, 800)
    endShape(CLOSE)
}


class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

// creation of a particle.
  createParticle() {
    noStroke();
    fill('rgba(200,169,169,0.5)');
    circle(this.x,this.y,this.r);
  }

// setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// this function creates the connections(lines)
// between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<500) {
        stroke('rgba(35, 100, 50,255)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}