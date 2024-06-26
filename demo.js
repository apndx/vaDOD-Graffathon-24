audioPlayer = document.querySelector('#song')

function draw() {
    const bpm = 115
    const demoTime = getTime() * bpm / 60

    textFont('Press Start 2P')
    
    console.log(demoTime);

    if (isBgScroll || demoTime > 30) {
      scrollBg(demoTime)
    }
    if (demoTime < 12) {
      title(demoTime)
    }  else if (demoTime < 28) {
      intros(demoTime-12)
    } else if (demoTime < 30) {
      isBgScroll = true;
      poikaAppears(demoTime, 2.5)
    } else if (demoTime < 35) {
      poikaAppears(demoTime, 8.5)
    } else if (demoTime < 40) {
      tyttoAppears(demoTime, -13.0)
    } else if (demoTime < 45) {
      coupleMeets(demoTime, 8.5)
    } else if (demoTime < 53) {
      loveTimeYay(demoTime < -10)
    } else if (demoTime < 56) {
      loveTimeYay2(demoTime)
    } else if (demoTime < 63) {
      particlator()
    } else if (demoTime < 68) {
      if (dogs.length===0) {
          sprinkleAnimals(koira, dogs)
      }
      if (cats.length===0 && demoTime > 66) {
          sprinkleAnimals(kissa, cats)
      }
      animalRain()
    } else if (demoTime < 72) {
      verticalTextScroll()
    } else if (demoTime < 80) {
      blobs(demoTime)
    } else if (demoTime < 88) {
      glitchLineTransition(demoTime)
    } else if (demoTime < 96) {
      theEnd(demoTime)
    } else if (demoTime < 104) {
      theEndPulse(demoTime)
    } else if (demoTime < 110) {
      theEndHeart(demoTime)
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
    var diam = 50+ sin(theta) * 10 ;
    image(sydan,width / 2, height / 2, diam, diam ); 
    theta += .09 ;  
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
  var diam = 100 + sin(theta) * maxDiameter ;
  image(sydan,-tytto.width+150, tyttoY, diam + sydan.width-100, diam+ sydan.height); 

  theta += .09 ;   // theta to change the speed
}

function loveTimeYay2(sceneTime) {
  if(random(1)>0.5){
    background(img)
 }else{
    background(color(236, 171, 201,50))
 }
  translate(width/2, height/2)
  image(tytto, -tytto.width*2, tyttoY, 310, 433)
  image(poika, poika.width, poikaY, 310, 433)
  var diam = 100 + sin(theta) * maxDiameter ;
  image(sydan,-tytto.width+150, tyttoY, diam + sydan.width-100, diam + sydan.height); 
  theta += .89 ;  // theta to change the speed
 
 
textAlign(CENTER, CENTER);
size = 80
textSize(size);
noStroke();
fill(189, 41, 45);    //fill(189, 41, 45);  vihreä

text(`Ny lähti bileet!`,width/-900, height/2-150)

}

function theEnd(sceneTime) {
  translate(width/2, height/2)
  image(kiitos,-400,-200)

  textAlign(CENTER, CENTER);
  size = 20
  textSize(size);
  noStroke();
  fill(0, 0, 0);    //fill(189, 41, 45);  vihreä fill(189, 41, 45); 
  let texts = `
    Thank you 
    for 
    organizers
  `
  text(texts,-10,-70)
}

function theEndPulse(sceneTime) {

  translate(width/2, height/2)

  var diam = initialDiam + sin(theta) * 10 ;
  image(sydan,0,0, diam, diam ); 
  theta += .09 ;  

  textAlign(CENTER, CENTER);
  size = 150
  textSize(size);
  noStroke();
  fill(35, 100, 50);
  let graftext = `
  Graffathon`;

  text(graftext,0, -200)

  size = 100
  textSize(size);
  noStroke();
  fill(35, 100, 50);
  text(`2024`,30, 200)

}

function theEndHeart(sceneTime) {

    translate(width/2, height/2)

    // Decrease the initialDiam value
    if (sceneTime > 93 && initialDiam > 0) {
      initialDiam = initialDiam - 1;
    }

    var diam = initialDiam + sin(theta) * 10 ;
    if (initialDiam > 0) {
        image(sydan,0,0, diam, diam );
        theta += .09;
    }

  }


function glitchLineTransition(sceneTime) {
  
  glitchY = glitchY - 5;
  if (glitchY < 0) {
    glitchY = height;
  }
  stroke(255);
  strokeWeight(8)
  line(0, glitchY, width, glitchY);
  
  const time = Math.floor(sceneTime * 60)
  if (time % 4 === 0) {
    for (let i=0; i<5; i++) {
      stroke(Math.random() * 255, Math.random() * 255, Math.random() * 255);
      strokeWeight(Math.random() * 14)
      let line2y = Math.random() * glitchY
      line(0, line2y, width, line2y); 
    }
  }

  if (Math.floor(sceneTime * 60) % 3 === 0) {
    for (let i=0; i<5; i++) {
      stroke(Math.random() * 255, Math.random() * 255, Math.random() * 255);
      strokeWeight(Math.random() * 14)
      let line3y = glitchY / Math.random()
      line(0, line3y, width, line3y); 
    }
  }
  
}

function particlator() {
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
      // particles[i].moveParticle();
      particles[i].joinParticles(particles.slice(i));
  }
}

function sprinkleAnimals(img, creatures) {
  for(let i = 0; i < 10; i++) {
      const creature = new Creature(img);
      creatures.push(creature);
  }
}

function animalRain() {
  for(let dog of dogs) {
    push();
    translate(dog.x, dog.y);
    rotate(dog.angle);
    image(dog.img, 0, 0, dog.size, dog.size);
    pop();
  }
  for(let cat of cats) {
      push();
      translate(cat.x, cat.y);
      rotate(cat.angle);
      image(cat.img, 0, 0, cat.size, cat.size);
      pop();
  }
  for (let i = 0; i < cats.length; i++) {
    cats[i].moveCreature();
  }
  for (let i = 0; i < dogs.length; i++) {
    dogs[i].moveCreature();
  }
  var diam = 50+ sin(theta) * 10 ;
  image(sydan,width / 2, height / 2, diam, diam );
  theta += .09 ;
}

function blobs(sceneTime) {
  if ( Math.floor(sceneTime * 16) % 16 === 0 
  || Math.floor(sceneTime * 16) % 24 === 0
  || !oldBlobs ) {
    oldBlobs = initOldBlobs()
  }
  oldBlobs.forEach((blob) => {
    drawBlob(blob)
  })
}

function initOldBlobs() {
  result = []
  for (let i = 0; i < 18; i++) {
    d = Math.floor(Math.random() * 25)
    result.push({
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      d: d,
      s: (40 + Math.random() * 179) * Math.exp(-sq(d / 200)),
    })
  }
  return result
}

function drawBlob(blob) {  
  translate(0, 0)
  stroke(200+blob.s, 128, blob.s/3)
  fill(255-blob.s, 128, blob.s*3)
  circle(blob.x, blob.y, blob.s);
}

function verticalTextScroll(sceneTime) {
let content = ' (*_*)    BILEET!! PARTY!!     (^-^)  ';
  textAlign(CENTER, CENTER);
  textSize(40);
  var diam = 50+ sin(theta) * 50 ;
  tint(150,150); 
   image(sydan,width / 2-200, height / 2-200, diam+400, diam+400 ); 
  theta += .2 
  for (let y = yStart; y < height; y += 100) { //use a for loop to draw the line of text multiple times down the vertical axis
    fill(189, y / 4 + 41, 45); //create a gradient by associating the fill color with the y location of the text
    text(content, width / 2, y);
  
  }
  yStart=yStart-2;
noTint(); 
}
