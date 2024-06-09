audioPlayer = document.querySelector('#song')

function draw() {
    const bpm = 115
    const demoTime = getTime() * bpm / 60

    textFont('Press Start 2P')
    //colorMode(HSL) // Hue (0..360), Saturation (0..100), Lightness (0..100)
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
    } else if (demoTime < 53) {
      loveTimeYay(demoTime < -10)
    } else if (demoTime < 65) {
      loveTimeYay2(demoTime)
    } else if (demoTime < 75) {
      particlator(demoTime - 65)
    } else if (demoTime < 100) {
      theEnd(demoTime)
    } else if (demoTime < 110) {
      theEndPulse(demoTime)
    }
    else {
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
    image(sydan, width / 2, height / 2, sydan.width *0.2, sydan.height *0.2);
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

text(`Viddu nyt lähti bileet!`,width/-900, height/2-150)

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
  text(texts,20,-70)
}

function theEndPulse(sceneTime) {
  translate(width/2, height/2)
  var diam = 50+ sin(theta) * 10 ;
  image(sydan,0,0, diam, diam ); 
  theta += .09 ;  

  //Tähän vielä . sydän feidaus pois häipyy pois tms 

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
  text(`2024`,0, 200)
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
