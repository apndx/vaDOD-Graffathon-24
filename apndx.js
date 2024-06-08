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

    }  else if (demoTime < 28) {
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
  background(img);
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


function heart() {
  fill('red');
  noStroke();
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.01) {
    let x = 16 * pow(sin(a), 3);
    let i = -(13 * cos(a) - 5 * cos(2*a) - 2 * cos(3*a) - cos(4*a));
    vertex(x * 10, i * 10);
  }
  endShape(CLOSE);
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

