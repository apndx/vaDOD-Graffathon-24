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

    
    if (demoTime > 0) {
      glitchLineTransition(demoTime)

    // } else if (demoTime < 8) {
    //     ballScene(demoTime)

    // } else if (demoTime < 12) {
    //     stickScene(demoTime - 8)

    // } else if (demoTime < 16) {
    //     ballScene(demoTime)

    // } else if (demoTime < 24) {
    //     stickScene(demoTime - 16)

    // } else if (demoTime < 32) {
    //     ballScene(demoTime)

    // } else if (demoTime < 40) {
    //     squareScene(demoTime - 32)

    // } else if (demoTime < 48) {
    //     noiseScene(demoTime)

    // } else if (demoTime < 56) {
    //     squareScene(demoTime - 48)

    // } else if (demoTime < 64) {
    //     noiseScene(demoTime)

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