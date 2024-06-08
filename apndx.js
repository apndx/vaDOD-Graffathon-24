audioPlayer = document.querySelector('#song')

function draw() {
    const bpm = 132
    const demoTime = getTime() * bpm / 60

    textFont('Press Start 2P')

    if (demoTime < 64) {
      scrollBg(demoTime)
    }

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


function scrollBg(sceneTime){
  image(img, 0, bgY1, width, height);
  image(img, 0, bgY2, width, height);

  bgY1 += bgScrollSpeed;
  bgY2 += bgScrollSpeed;

  if (bgY1 > height){
    bgY1 = -height;
  }
  if (bgY2 > height){
    bgY2 = -height;
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
  //background(img);
  // an array to add multiple particles
  let particles = [];
  lines = []

  for(let i = 0;i<width/1000;i++){
    particles.push(new Particle());
  }

  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    lines.push(particles[i].joinParticles(particles.slice(i)));
    drawLines(lines)
  }   
}

function drawLines(lines) {
  stroke('rgba(35, 100, 50,255)');
  lines.forEach(li => {
    line(li.x1, li.y1, li.x2, li.y2);
  });
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

  joinParticles(particles) {
    particles.forEach(element => {
      let dis = dist(this.x, this.y, element.x, element.y);
      let lines = []
      if (dis < 500) {
        stroke('rgba(35, 100, 50,255)');
        line(this.x, this.y, element.x, element.y);

        // Save the line
        lines.push({
          x1: this.x,
          y1: this.y,
          x2: element.x,
          y2: element.y
        });
      }
    });
    return lines
  }


}
