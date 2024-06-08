audioPlayer = document.querySelector('#song')

function draw() {
    const bpm = 132
    const demoTime = getTime() * bpm / 60

    textFont('Press Start 2P')
    scrollBg(demoTime)


    if (demoTime < 12) {
      title(demoTime)
    }  else if (demoTime < 28) {
      intros(demoTime-12)
    } else if (demoTime < 30) {
      poikaAppears(demoTime, 2.5)
    } else if (demoTime < 35) {
      poikaAppears(demoTime, 8.5)
    } else if (demoTime < 40) {
      tyttoAppears(demoTime, -13.0)
    } else if (demoTime < 45) {
      coupleMeets(demoTime, 8.5)
    } else if (demoTime < 60) {
      loveTimeYay(demoTime)

    } else if (demoTime < 80) {
      particlator(demoTime - 60)

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
  //const bump = sceneTime - Math.floor(sceneTime)
  image(sydan, width / 2, height / 2, sydan.width *0.2, sydan.height *0.2);
  //image(sydan, width / 2, height / 2, bump, bump);
  size = 64
  textSize(size);
  fill(35, 100, 50);
  noStroke();
  let y = height + 100 - sceneTime * 100
  texts = 'Virman bileet goes Avaruus'
  text(texts, width/2, y)

  const bump = sceneTime - Math.floor(sceneTime)
  // https://p5js.org/reference/#/p5/map
  const radius = map(bump, 0, 1, 0, 100)
  ellipse(0, 200, radius, radius)
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
  push();
  translate(width/2, height/2)
  image(tytto, -tytto.width*2, tyttoY, 310, 433)
  image(poika, poika.width, poikaY, 310, 433)
  pop();
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
    this.r = random(1,20);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

// creation of a particle.
  createParticle() {
    noStroke(); 
    fill('rgba(200,169,169,255)');
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

function poikaAppears(sceneTime, speed) {
  translate(width/2, height/2)
  image(poika, poika.width, poikaY, 310, 433)
  poikaY = poikaY - (speed);
}

function tyttoAppears(sceneTime, speed) {
  translate(width/2, height/2)
  image(tytto, -tytto.width*2, tyttoY, 310, 433)
  if (tyttoY < height) {
    tyttoY = tyttoY - (speed);
  }
}

function coupleMeets(sceneTime, speed) {
  translate(width/2, height/2)
  image(tytto, -tytto.width*2, tyttoY, 310, 433)
  if (tyttoY > -tytto.height/2) {
    tyttoY = tyttoY - (speed);
  }
  image(poika, poika.width, poikaY, 310, 433)
  if (poikaY < -poika.height/2) {
    poikaY = poikaY + (speed);
  }
}

function loveTimeYay(sceneTime) {
  translate(width/2, height/2)
  image(tytto, -tytto.width*2, tyttoY, 310, 433)
  image(poika, poika.width, poikaY, 310, 433)
}

function glitchLineTransition(sceneTime) {
  
  background(0); // Set the background to black
  y = y - 5;
  if (y < 0) {
    y = height;
  }
  stroke(255);
  strokeWeight(4)
  line(0, y, width, y);
  
  const time = Math.floor(sceneTime * 60)
  if (time % 4 === 0) {
    stroke(155);
    strokeWeight(2)
    let line2y = Math.random() * y
    line(0, line2y, width, line2y); 
  }

  if (Math.floor(sceneTime * 60) % 3 === 0) {
    stroke(155);
    strokeWeight(2)
    let line3y = y / Math.random()
    line(0, line3y, width, line3y); 
  }
}