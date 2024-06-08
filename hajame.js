audioPlayer = document.querySelector('#song')

let y = 100

function draw() {
  const bpm = 115
  const demoTime = getTime() * bpm / 60

  textFont('Londrina Solid')
  colorMode(HSL) // Hue (0..360), Saturation (0..100), Lightness (0..100)


  // if (demoTime === 0) {
  //     instructionsScene(demoTime)
  // }
  console.log(demoTime);
  if (demoTime < 8 ) {
    // glitchLineTransition(demoTime)
    scrollBg(demoTime)
  } else if (demoTime < 14) {
    scrollBg(demoTime)
    poikaAppears(demoTime, 2.5)
  } else if (demoTime < 18) {
    scrollBg(demoTime)
    poikaAppears(demoTime, 8.5)
  } else if (demoTime < 26) {
    scrollBg(demoTime)
    tyttoAppears(demoTime, -8.5)
  } else if (demoTime < 38) {
    scrollBg(demoTime)
    coupleMeets(demoTime, 8.5)
  } else if (demoTime < 60) {
    scrollBg(demoTime)
    loveTimeYay(demoTime)
  } else {
      endDemo()
  }
}

function instructionsScene(sceneTime) {
  background(35, 100, 50) // orange
  textAlign(CENTER, CENTER)
  textSize(64)
  fill(0, 0, 0) // black
  noStroke()
  text('Press F to go fullscreen and space to start', width/2, height/2)
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